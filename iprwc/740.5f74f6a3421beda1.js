"use strict";(self.webpackChunkiQuestion=self.webpackChunkiQuestion||[]).push([[740],{8740:(M,q,a)=>{a.r(q),a.d(q,{UserModule:()=>d});var s=a(3599),e=a(4650),S=a(970);class m{}m.\u0275fac=function(t){return new(t||m)},m.\u0275cmp=e.Xpm({type:m,selectors:[["app-user"]],decls:2,vars:0,template:function(t,r){1&t&&e._UZ(0,"router-outlet")(1,"app-footer")},dependencies:[s.lC,S.c],styles:[".container-top-margin[_ngcontent-%COMP%]{margin-top:1rem}"]});var T=a(529),c=a(9837),U=a(4310),_=a(4722);class g{constructor(t,r,o,l,v){this.http=t,this.activeModal=r,this.toastService=o,this.router=l,this.userService=v,this.disableConfirmed=new e.vpe}disableUser(){this.toastService.show("Gebruiker wordt aangepast!",{classname:"bg-info text-light",delay:3e3}),this.userService.disableUser(this.user?.id).subscribe({next:()=>{this.toastService.show("Gebruiker succesvol gedeactiveerd!",{classname:"bg-success text-light",delay:3e3}),this.router.navigate(["/users"]),this.disableConfirmed.emit(!0),this.activeModal.dismiss()},error:t=>{this.toastService.show("\u274c - "+t,{classname:"bg-danger text-light",delay:5e3})}})}}g.\u0275fac=function(t){return new(t||g)(e.Y36(T.eN),e.Y36(c.Kz),e.Y36(U.k),e.Y36(s.F0),e.Y36(_.K))},g.\u0275cmp=e.Xpm({type:g,selectors:[["app-user-disable"]],inputs:{user:"user"},outputs:{disableConfirmed:"disableConfirmed"},decls:21,vars:1,consts:[[1,"modal-content"],[1,"modal-header"],["type","button","aria-label","Close button","aria-describedby","modal-title",1,"btn-close",3,"click"],[1,"modal-body"],[1,"text-info"],[1,"text-danger"],[1,"modal-footer"],["type","button",1,"btn","btn-outline-primary",3,"click"],["type","button",1,"btn","btn-danger","deleteButton",3,"click"]],template:function(t,r){1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"h4"),e._uU(3,"Gebruiker deactiveren"),e.qZA(),e.TgZ(4,"button",2),e.NdJ("click",function(){return r.activeModal.dismiss()}),e.qZA()(),e.TgZ(5,"div",3)(6,"p"),e._uU(7,"Weet u zeker dat u de gebruiker: "),e.TgZ(8,"span",4),e._uU(9),e.qZA(),e._uU(10," wilt deactiveren? "),e.qZA(),e.TgZ(11,"p")(12,"span",5),e._uU(13,"De gebruiker kan niet meer inloggen"),e.qZA(),e._UZ(14,"br"),e._uU(15,"De gebruiker kan wel hersteld worden in het gebruiker-aanpassen menu. "),e.qZA()(),e.TgZ(16,"div",6)(17,"button",7),e.NdJ("click",function(){return r.activeModal.dismiss()}),e._uU(18,"Annuleren"),e.qZA(),e.TgZ(19,"button",8),e.NdJ("click",function(){return r.disableUser()}),e._uU(20,"Deactiveren"),e.qZA()()()),2&t&&(e.xp6(9),e.hij(" ",null==r.user?null:r.user.name," "))},styles:[".container-top-margin[_ngcontent-%COMP%]{margin-top:1rem}"]});class u{userRoleToText(t){return"SPINE_ADMIN"==t?"Spine Administrator":"SPINE_USER"==t?"Spine Gebruiker":"CAREGIVER"==t?"Hulpverlener":"Onbekende Rol"}userStatusToText(t){return t?"Actief":t?"Status onbekend":"Non-actief"}}u.\u0275fac=function(t){return new(t||u)},u.\u0275prov=e.Yz7({token:u,factory:u.\u0275fac,providedIn:"root"});var A=a(6412),k=a(6895),y=a(3719),n=a(433);class b{transform(t,r){return r?t.filter(o=>this.matchValue(o,r)):t}matchValue(t,r){return Object.keys(t).map(o=>new RegExp(r,"gi").test(t[o])).some(o=>o)}}b.\u0275fac=function(t){return new(t||b)},b.\u0275pipe=e.Yjl({name:"filterAll",type:b,pure:!0});const N=function(i){return["edit",i]};function I(i,t){if(1&i){const r=e.EpF();e.TgZ(0,"tr")(1,"th"),e._uU(2),e.qZA(),e.TgZ(3,"td"),e._uU(4),e.qZA(),e.TgZ(5,"td"),e._uU(6),e.qZA(),e.TgZ(7,"td"),e._uU(8),e.qZA(),e.TgZ(9,"td"),e._uU(10),e.qZA(),e.TgZ(11,"td"),e._uU(12),e.qZA(),e.TgZ(13,"td",17)(14,"button",18),e.O4$(),e.TgZ(15,"svg",19),e._UZ(16,"path",20)(17,"path",21),e.qZA()(),e._uU(18," \u2014\xa0 "),e.kcU(),e.TgZ(19,"button",22),e.NdJ("click",function(){const v=e.CHM(r).$implicit,C=e.oxw();return e.KtG(C.showDisableModal(v))}),e.O4$(),e.TgZ(20,"svg",23),e._UZ(21,"path",24),e.qZA()()()()}if(2&i){const r=t.$implicit,o=e.oxw();e.xp6(2),e.Oqu(r.id.substring(r.id.length-5)),e.xp6(2),e.Oqu(r.name),e.xp6(2),e.Oqu(o.transformText.userRoleToText(r.role)),e.xp6(2),e.Oqu(r.organization),e.xp6(2),e.Oqu(r.email),e.xp6(2),e.Oqu(o.transformText.userStatusToText(r.enabled)),e.xp6(2),e.Q6J("routerLink",e.VKq(8,N,r.id)),e.xp6(5),e.Q6J("disabled",!r.enabled)}}class h{constructor(t,r,o,l){this.modalService=t,this.userService=r,this.transformText=o,this.toastService=l,this.users=[],this.createUserTable()}showDisableModal(t){const r=this.modalService.open(g);r.componentInstance.user=t,r.componentInstance.disableConfirmed.subscribe(o=>{o&&this.createUserTable()})}createUserTable(){this.users=[],this.userService.getAll().subscribe({next:t=>{this.fillUserArray(t)},error:t=>{this.toastService.show("\u274c - "+t,{classname:"bg-danger text-light",delay:5e3})}})}fillUserArray(t){for(const r of t)r.enabled&&this.users.push(r);for(const r of t)r.enabled||this.users.push(r)}ngOnDestroy(){this.toastService.clear()}}h.\u0275fac=function(t){return new(t||h)(e.Y36(c.FF),e.Y36(_.K),e.Y36(u),e.Y36(U.k))},h.\u0275cmp=e.Xpm({type:h,selectors:[["app-userOverview"]],decls:39,vars:5,consts:[[1,"navbar","sticky-top","bg-light"],[1,"container","d-flex","justify-content-end"],[1,"d-grid","gap-2","d-md-flex","justify-content-md-end"],["type","button","routerLink","new",1,"btn","btn-primary"],[1,"bi","bi-person-add"],[1,"container","container-top-margin"],[1,"searchbar__top"],["id","searchForm",1,"searchForm"],[1,"form-group"],["id","filterAll",1,"input-group"],[1,"input-group-addon","searchbar__icon"],[1,"bi","bi-search"],["type","text","name","searchString","placeholder","Zoek gebruiker...",1,"form-control",3,"ngModel","ngModelChange"],[1,"table-responsive"],[1,"table","table-striped"],["scope","col"],[4,"ngFor","ngForOf"],[1,"text-nowrap"],["type","button","placement","top","ngbTooltip","Gebruiker bewerken","container","body",1,"btn","btn-outline-primary","tableIcon","userEditButton",3,"routerLink"],["xmlns","http://www.w3.org/2000/svg","width","16","height","16","fill","currentColor","viewBox","0 0 16 16",1,"bi","bi-pencil-square"],["d","M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"],["fill-rule","evenodd","d","M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"],["type","button","placement","top","ngbTooltip","Verwijder gebruiker","container","body",1,"btn","btn-outline-primary","tableIcon","userDeleteButton",3,"disabled","click"],["xmlns","http://www.w3.org/2000/svg","width","16","height","16","fill","#CC0000","viewBox","0 0 16 16",1,"bi","bi-person-fill-slash"],["d","M13.879 10.414a2.501 2.501 0 0 0-3.465 3.465l3.465-3.465Zm.707.707-3.465 3.465a2.501 2.501 0 0 0 3.465-3.465Zm-4.56-1.096a3.5 3.5 0 1 1 4.949 4.95 3.5 3.5 0 0 1-4.95-4.95ZM11 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm-9 8c0 1 1 1 1 1h5.256A4.493 4.493 0 0 1 8 12.5a4.49 4.49 0 0 1 1.544-3.393C9.077 9.038 8.564 9 8 9c-5 0-6 3-6 4Z"]],template:function(t,r){1&t&&(e._UZ(0,"app-navigation")(1,"app-toasts"),e.TgZ(2,"nav",0)(3,"div",1)(4,"div",2)(5,"button",3),e._UZ(6,"i",4),e._uU(7," Cre\xeber gebruiker "),e.qZA()()()(),e.TgZ(8,"div",5)(9,"div",6)(10,"h1"),e._uU(11,"Gebruikers"),e.qZA(),e.TgZ(12,"form",7)(13,"div",8)(14,"div",9)(15,"div",10),e._UZ(16,"i",11),e.qZA(),e.TgZ(17,"input",12),e.NdJ("ngModelChange",function(l){return r.searchString=l}),e.qZA()()()()(),e.TgZ(18,"div",13)(19,"table",14)(20,"thead")(21,"tr")(22,"th",15),e._uU(23,"ID"),e.qZA(),e.TgZ(24,"th",15),e._uU(25,"Naam"),e.qZA(),e.TgZ(26,"th",15),e._uU(27,"Rol"),e.qZA(),e.TgZ(28,"th",15),e._uU(29,"Organisatie"),e.qZA(),e.TgZ(30,"th",15),e._uU(31,"E-mail"),e.qZA(),e.TgZ(32,"th",15),e._uU(33,"Status"),e.qZA(),e.TgZ(34,"th",15),e._uU(35,"Acties"),e.qZA()()(),e.TgZ(36,"tbody"),e.YNc(37,I,22,10,"tr",16),e.ALo(38,"filterAll"),e.qZA()()()()),2&t&&(e.xp6(17),e.Q6J("ngModel",r.searchString),e.xp6(20),e.Q6J("ngForOf",e.xi3(38,2,r.users,r.searchString)))},dependencies:[s.rH,A.y,k.sg,c.M2,c._L,y.J,n._Y,n.Fj,n.JJ,n.JL,n.On,n.F,b],styles:[".container-top-margin[_ngcontent-%COMP%]{margin-top:1rem}.searchbar__top[_ngcontent-%COMP%]{display:flex;flex-direction:row;align-content:center;justify-content:space-between}.searchForm[_ngcontent-%COMP%]{flex-grow:.5;align-self:center}.searchForm__items[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:center;align-items:center}.searchbar__icon[_ngcontent-%COMP%]{display:grid;place-items:center;padding-right:.5rem}"]});class f{constructor(t,r,o){this.http=t,this.userService=r,this.toastService=o,this.registerForm=new n.cw({registerEmail:new n.NI(null,[n.kI.required,n.kI.email,n.kI.pattern(/^(?=.{1,64}@)[A-Za-z0-9_-]+(\.[A-Za-z0-9_-]+)*@[^-][A-Za-z0-9-]+(\.[A-Za-z0-9-]+)*(\.[A-Za-z]{2,})$/)]),registerName:new n.NI(null,n.kI.required),registerOrganization:new n.NI(null,n.kI.required),registerRole:new n.NI(null,n.kI.required)}),this.loading=!1}createUser(){this.toastService.show("We zijn bezig om een account aan te maken!",{classname:"bg-info text-light",delay:15e3}),this.loading=!0,this.userService.createUser(this.registerForm.value.registerName,this.registerForm.value.registerEmail,this.registerForm.value.registerOrganization,this.registerForm.value.registerRole).subscribe({next:()=>{this.toastService.clear(),this.toastService.show("Gebruiker succesvol aangemaakt!",{classname:"bg-success text-light",delay:3e3}),this.registerForm.reset(),this.loading=!1},error:t=>{this.toastService.clear(),this.toastService.show("\u274c - "+t,{classname:"bg-danger text-light",delay:5e3}),this.loading=!1}})}ngOnDestroy(){this.toastService.clear()}}function O(i,t){if(1&i&&(e.TgZ(0,"div")(1,"div",6)(2,"h1"),e._uU(3),e.qZA(),e.TgZ(4,"form",7)(5,"table",8)(6,"thead")(7,"tr")(8,"th",9),e._uU(9,"Attribuut"),e.qZA(),e.TgZ(10,"th",9),e._uU(11,"Huidige waardes"),e.qZA(),e.TgZ(12,"th",9),e._uU(13,"Nieuwe waardes"),e.qZA()()(),e.TgZ(14,"tbody")(15,"tr")(16,"th"),e._uU(17,"Naam"),e.qZA(),e.TgZ(18,"td"),e._uU(19),e.qZA(),e.TgZ(20,"td"),e._UZ(21,"input",10),e.qZA()(),e.TgZ(22,"tr")(23,"th"),e._uU(24,"Rol"),e.qZA(),e.TgZ(25,"td"),e._uU(26),e.qZA(),e.TgZ(27,"td")(28,"select",11)(29,"option",12),e._uU(30,"Spine gebruiker"),e.qZA(),e.TgZ(31,"option",13),e._uU(32,"Spine administrator"),e.qZA(),e.TgZ(33,"option",14),e._uU(34,"Hulpverlener"),e.qZA()()()(),e.TgZ(35,"tr")(36,"th"),e._uU(37,"Organisatie"),e.qZA(),e.TgZ(38,"td"),e._uU(39),e.qZA(),e.TgZ(40,"td"),e._UZ(41,"input",15),e.qZA()(),e.TgZ(42,"tr")(43,"th"),e._uU(44,"Gebruiks status"),e.qZA(),e.TgZ(45,"td"),e._uU(46),e.qZA(),e.TgZ(47,"td")(48,"select",16)(49,"option",17),e._uU(50,"Actief"),e.qZA(),e.TgZ(51,"option",18),e._uU(52,"Inactief"),e.qZA()()()()()()()()()),2&i){const r=e.oxw();e.xp6(3),e.hij("Gebruiker ",r.user$.name," aanpassen"),e.xp6(1),e.Q6J("formGroup",r.updateUserForm),e.xp6(15),e.Oqu(r.user$.name),e.xp6(7),e.Oqu(r.transformText.userRoleToText(r.user$.role)),e.xp6(13),e.Oqu(r.user$.organization),e.xp6(7),e.Oqu(r.transformText.userStatusToText(r.user$.enabled))}}f.\u0275fac=function(t){return new(t||f)(e.Y36(T.eN),e.Y36(_.K),e.Y36(U.k))},f.\u0275cmp=e.Xpm({type:f,selectors:[["app-userCreate"]],decls:37,vars:2,consts:[[1,"navbar","sticky-top","bg-light"],[1,"container","d-flex","justify-content-end"],[1,"d-grid","gap-2","d-md-flex","justify-content-between"],["type","button","routerLink","/users",1,"m-2","btn","btn-outline-primary"],[1,"bi","bi-backspace"],["type","submit",1,"m-2","btn","btn-primary",3,"disabled","click"],[1,"bi","bi-person-add"],[1,"container","container-top-margin"],[3,"formGroup"],[1,"mb-3"],["for","userEmailInput",1,"form-label"],["type","email","id","userEmailInput","formControlName","registerEmail",1,"form-control"],["for","userNameInput",1,"form-label"],["type","email","id","userNameInput","formControlName","registerName",1,"form-control"],["for","userOrganizationInput",1,"form-label"],["type","email","id","userOrganizationInput","formControlName","registerOrganization",1,"form-control"],["for","userRoleInput",1,"form-label"],["id","userRoleInput","aria-label","Default select example","formControlName","registerRole",1,"form-select"],["value","SPINE_USER"],["value","SPINE_ADMIN"],["value","CAREGIVER"]],template:function(t,r){1&t&&(e._UZ(0,"router-outlet")(1,"app-navigation")(2,"app-toasts"),e.TgZ(3,"nav",0)(4,"div",1)(5,"div",2)(6,"button",3),e._UZ(7,"i",4),e._uU(8," \xa0 Terug "),e.qZA(),e.TgZ(9,"button",5),e.NdJ("click",function(){return r.createUser()}),e._UZ(10,"i",6),e._uU(11," \xa0 Cre\xeber gebruiker "),e.qZA()()()(),e.TgZ(12,"div",7)(13,"h1"),e._uU(14,"Gebruiker aanmaken"),e.qZA(),e.TgZ(15,"form",8)(16,"div",9)(17,"label",10),e._uU(18,"E-mail addres"),e.qZA(),e._UZ(19,"input",11),e.qZA(),e.TgZ(20,"div",9)(21,"label",12),e._uU(22,"Naam"),e.qZA(),e._UZ(23,"input",13),e.qZA(),e.TgZ(24,"div",9)(25,"label",14),e._uU(26,"Organisatie"),e.qZA(),e._UZ(27,"input",15),e.qZA(),e.TgZ(28,"label",16),e._uU(29,"Rol"),e.qZA(),e.TgZ(30,"select",17)(31,"option",18),e._uU(32,"Spine gebruiker"),e.qZA(),e.TgZ(33,"option",19),e._uU(34,"Spine administrator"),e.qZA(),e.TgZ(35,"option",20),e._uU(36,"Hulpverlener"),e.qZA()()()()),2&t&&(e.xp6(9),e.Q6J("disabled",!r.registerForm.valid),e.xp6(6),e.Q6J("formGroup",r.registerForm))},dependencies:[s.lC,s.rH,A.y,c.M2,y.J,n._Y,n.YN,n.Kr,n.Fj,n.EJ,n.JJ,n.JL,n.sg,n.u],styles:[".container-top-margin[_ngcontent-%COMP%]{margin-top:1rem}"]});class Z{constructor(t,r,o,l,v,C){this.route=t,this.userService=r,this.toastService=o,this.http=l,this.router=v,this.transformText=C,this.updateUserForm=new n.cw({updateUserName:new n.NI(null,n.kI.required),updateUserOrganization:new n.NI(null,n.kI.required),updateUserRole:new n.NI(null,n.kI.required),updateUserEnabled:new n.NI(null,n.kI.required)});const w=this.route.snapshot.paramMap.get("id");if(null==w)throw new Error("No id found");this.userService.get(w).subscribe({next:x=>{this.user$=x},error:x=>{this.toastService.show("\u274c - "+x,{classname:"bg-danger text-light",delay:5e3})}})}updateUserData(){this.toastService.show("Gebruiker wordt aangepast!",{classname:"bg-info text-light",delay:3e3}),this.userService.updateUser(this.user$,this.updateUserForm.value.updateUserName,this.updateUserForm.value.updateUserOrganization,this.updateUserForm.value.updateUserRole,this.updateUserForm.value.updateUserEnabled).subscribe({next:()=>{this.toastService.show("Gebruiker succesvol aangepast!",{classname:"bg-success text-light",delay:3e3}),this.router.navigate(["/users"])},error:t=>{this.toastService.show("\u274c - "+t,{classname:"bg-danger text-light",delay:5e3})}})}}Z.\u0275fac=function(t){return new(t||Z)(e.Y36(s.gz),e.Y36(_.K),e.Y36(U.k),e.Y36(T.eN),e.Y36(s.F0),e.Y36(u))},Z.\u0275cmp=e.Xpm({type:Z,selectors:[["app-userEdit"]],decls:11,vars:2,consts:[[1,"navbar","sticky-top","bg-light"],[1,"container","d-flex","justify-content-end"],["type","submit","routerLink","/users",1,"m-2","btn","btn-outline-primary"],["type","submit",1,"m-2","btn","btn-primary","updateFinalButton",3,"click"],[1,"container","container-top-margin"],[4,"ngIf"],[1,"table-responsive"],[3,"formGroup"],[1,"table","table-striped"],["scope","col"],["type","email","id","updateUserName","formControlName","updateUserName",1,"form-control"],["id","updateUserRole","aria-label","Default select example","formControlName","updateUserRole",1,"form-select","updateUserRole"],["value","SPINE_USER"],["value","SPINE_ADMIN"],["value","CAREGIVER"],["type","email","id","updateUserOrganization","formControlName","updateUserOrganization",1,"form-control"],["id","updateUserStatus","aria-label","Default select example","formControlName","updateUserEnabled",1,"form-select"],["value","true"],["value","false"]],template:function(t,r){1&t&&(e._UZ(0,"router-outlet")(1,"app-navigation")(2,"app-toasts"),e.TgZ(3,"nav",0)(4,"div",1)(5,"button",2),e._uU(6," Annuleer "),e.qZA(),e.TgZ(7,"button",3),e.NdJ("click",function(){return r.updateUserData()}),e._uU(8),e.qZA()()(),e.TgZ(9,"div",4),e.YNc(10,O,53,6,"div",5),e.qZA()),2&t&&(e.xp6(8),e.hij(" Update ",r.user$.name,"'s profiel "),e.xp6(2),e.Q6J("ngIf",r.user$))},dependencies:[s.lC,s.rH,A.y,k.O5,c.M2,y.J,n._Y,n.YN,n.Kr,n.Fj,n.EJ,n.JJ,n.JL,n.sg,n.u],styles:[".container-top-margin[_ngcontent-%COMP%]{margin-top:1rem}"]});const F=[{path:"",component:m,data:{roles:["SPINE_ADMIN"]},children:[{path:"",component:h},{path:"new",component:f},{path:"edit/:id",component:Z}]}];class p{}p.\u0275fac=function(t){return new(t||p)},p.\u0275mod=e.oAB({type:p}),p.\u0275inj=e.cJS({imports:[s.Bz.forChild(F),s.Bz]});var E=a(4466);class d{}d.\u0275fac=function(t){return new(t||d)},d.\u0275mod=e.oAB({type:d}),d.\u0275inj=e.cJS({imports:[p,E.m]})}}]);