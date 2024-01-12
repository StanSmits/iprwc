describe('UserComponent', () => {
  it('Should create user when valid data is provided', () => {
    cy.intercept("POST", 'http://localhost:8080/auth/login', {fixture: 'loginSpineAdminSuccess.json'});
    cy.intercept("GET", 'http://localhost:8080/questionnaire/all', {fixture: 'questionnaires.json'});
    cy.intercept("GET", 'http://localhost:8080/user/all', {fixture: 'users.json'});
    cy.intercept("POST", 'http://localhost:8080/auth/register/', {fixture: 'registerSuccess.json'});

    cy.visit('/');
    cy.url().should('includes', '');
    cy.get('[formControlName="email"]').type('spine_admin@student.hsleiden.nl');
    cy.get('[formControlName="password"]').type('12345678');
    cy.get('button').click();

    cy.url().should('include', 'questionnaires');

    cy.get('[routerLink="/users"]').click();
    cy.get('[routerLink="new"]').click();

    cy.url().should("includes", '/users/new');

    cy.get('[formControlName="registerEmail"]').type('cypress@student.hsleiden.nl');
    cy.get('[formControlName="registerName"]').type('Cypress');
    cy.get('[formControlName="registerOrganization"]').type('Cypress');
    cy.get('[formControlName="registerRole"]').select('SPINE_USER');

    cy.get('[type="submit"]').click();

    cy.wait(500);

    cy.get('app-toasts').should('contain', 'Gebruiker succesvol aangemaakt');
  });

  it("Should redirect to '/questionnaires' when spine_user tries to go to an admin route '/users/new", () => {
    cy.intercept("POST", 'http://localhost:8080/auth/login', {fixture: 'loginSpineUserSuccess.json'});
    cy.intercept("GET", 'http://localhost:8080/questionnaire/all', {fixture: 'questionnaires.json'});
    cy.intercept("GET", 'http://localhost:8080/user/all', {fixture: 'users.json'});

    cy.visit('/');
    cy.url().should('includes', '');
    cy.get('[formControlName="email"]').type('spine_user@student.hsleiden.nl');
    cy.get('[formControlName="password"]').type('12345678');
    cy.get('button').click();

    cy.url().should('include', 'questionnaires');

    cy.visit('/users/new');

    cy.url().should("includes", '/questionnaires');
  });


  it("Should log you out when you try to request a resource that you're not supposed to need, and you get a 401 or 403 response returned from the api.", () => {
    cy.intercept("POST", 'http://localhost:8080/auth/login', {fixture: 'falsifiedRole_loginCaregiverSuccess.json'});
    cy.intercept("GET", 'http://localhost:8080/questionnaire/all', {fixture: 'questionnaires.json'});
    cy.intercept("GET", 'http://localhost:8080/user/all', {statusCode: 401});

    cy.visit('/');
    cy.url().should('includes', '');
    cy.get('[formControlName="email"]').type('caregiver@student.hsleiden.nl');
    cy.get('[formControlName="password"]').type('12345678');
    cy.get('button').click();

    cy.url().should('include', 'questionnaires');

    cy.visit('/users/new');
    cy.visit('/users');

    cy.url().should("includes", '/login');
  });

  it('should update user when logged in as admin', () => {
    cy.intercept("POST", 'http://localhost:8080/auth/login', {fixture: 'loginSpineAdminSuccess.json'});
    cy.intercept("GET", 'http://localhost:8080/questionnaire/all', {fixture: 'questionnaires.json'});
    cy.intercept("GET", 'http://localhost:8080/user/all', {fixture: 'users.json'});
    cy.intercept("POST", 'http://localhost:8080/auth/register/', {fixture: 'registerSuccess.json'});

    cy.visit('/');
    cy.url().should('includes', '');
    cy.get('[formControlName="email"]').type('spine_admin@student.hsleiden.nl');
    cy.get('[formControlName="password"]').type('12345678');
    cy.get('button').click();

    cy.url().should('include', 'questionnaires');
    cy.get('[routerLink="/users"]').click();

    cy.intercept("GET", 'http://localhost:8080/user/1b45cfb8-5d67-440b-adf1-191d69fb6ccb', {fixture: 'editUserBefore.json'});
    cy.get('.userEditButton').first().click();
    cy.get('select').first().select('SPINE_USER');

    cy.intercept({
      method: "POST",
      url: "user/*"
    }).as("userEdit")

    cy.get(".updateFinalButton").click();

    cy.wait("@userEdit").then(({request}) => {
      expect(request.body).to.have.property('role', 'SPINE_USER');
    });
  });
});
