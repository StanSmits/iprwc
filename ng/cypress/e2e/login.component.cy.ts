describe('LoginComponent', () => {

  it('Should not login if email adress is invalid', () => {

    cy.visit('/');
    cy.url().should('includes', '');
    cy.get('[formControlName="email"]').type('geenAtSign');
    cy.get('[formControlName="password"]').type('TestLangGenoegWachtwoord1!');
    cy.get('button').should('be.disabled');
  });

  it('Should not login if invalid but validated credentials are provided', () => {
    cy.intercept("POST", 'http://localhost:8080/auth/login', {fixture: 'loginFailed.json'});

    cy.visit('/');
    cy.url().should('includes', '');
    cy.get('[formControlName="email"]').type('test@account.com');
    cy.get('[formControlName="password"]').type('TestLangGenoeg1!');
    cy.get('button').click();

    cy.wait(500);

    cy.url().should('not.include', 'questionnaires');
  });

  it('Should not login if user is disabled', () => {
    cy.intercept("POST", 'http://localhost:8080/auth/login', {fixture: 'loginDisabledUser.json'});

    cy.visit('/');
    cy.url().should('includes', '');
    cy.get('[formControlName="email"]').type('test@account.com');
    cy.get('[formControlName="password"]').type('TestLangGenoeg123!');
    cy.get('button').click();

    cy.wait(500);

    cy.url().should('not.include', 'questionnaires');
  });

  it('Should login when valid and validated credentials are provided', () => {

    cy.intercept("POST", 'http://localhost:8080/auth/login',{fixture: 'loginSpineAdminSuccess.json'});

    cy.visit('/');
    cy.url().should('includes', '');
    cy.get('[formControlName="email"]').type('spine_admin@student.hsleiden.nl');
    cy.get('[formControlName="password"]').type('12345678');
    cy.get('button').click();

    cy.url().should('include', 'questionnaires');
  });
});
