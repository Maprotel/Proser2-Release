(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{HcH0:function(e,r,n){"use strict";n.r(r);var t=n("1C3z"),i=n("8AiQ"),c=n("ZSGP"),o=n("Z+in"),s=n("mqED"),a=n("ruJL"),l=n("XhJS"),d=n("em0t"),m=n("5/c3"),g=n("78Vo"),u=function(){function e(e){this.envService=e}return e.prototype.ngOnInit=function(){this.env=this.envService},e.ɵfac=function(r){return new(r||e)(t.hc(g.a))},e.ɵcmp=t.bc({type:e,selectors:[["app-login-intro"]],decls:50,vars:5,consts:[["id","intro",1,"container","intro"],[1,"intro-header"],[1,"intro-logo"],["target","blank",3,"href"],[1,"img-fluid",3,"src"],[1,"display-2","mb-0"],[1,"display-4","mt-0"],[1,"display-5"],["id","photo",1,"container"],[1,"photo-grid"],[1,"card","card-primary"],[1,"card-header"],[1,"header-block"],[1,"index-title"],["src","assets/img/intro/portada-01.jpg",1,"img-fluid"],["src","assets/img/intro/portada-02.jpg",1,"img-fluid"],["src","assets/img/intro/portada-03.jpg",1,"img-fluid"],["src","assets/img/intro/portada-04.jpg",1,"img-fluid"]],template:function(e,r){1&e&&(t.nc(0,"section",0),t.nc(1,"div",1),t.nc(2,"div",2),t.nc(3,"a",3),t.ic(4,"img",4),t.mc(),t.mc(),t.nc(5,"div"),t.nc(6,"h3",5),t.bd(7,"Login"),t.mc(),t.nc(8,"h2",6),t.bd(9),t.mc(),t.nc(10,"p",7),t.bd(11),t.mc(),t.mc(),t.mc(),t.mc(),t.nc(12,"section",8),t.nc(13,"div",9),t.nc(14,"div"),t.nc(15,"div",10),t.nc(16,"div",11),t.nc(17,"div",12),t.nc(18,"p",13),t.bd(19," Servicios Entrantes "),t.mc(),t.mc(),t.mc(),t.nc(20,"div"),t.nc(21,"a"),t.ic(22,"img",14),t.mc(),t.mc(),t.mc(),t.mc(),t.nc(23,"div"),t.nc(24,"div",10),t.nc(25,"div",11),t.nc(26,"div",12),t.nc(27,"p",13),t.bd(28," Salientes Automáticos "),t.mc(),t.mc(),t.mc(),t.nc(29,"div"),t.nc(30,"a"),t.ic(31,"img",15),t.mc(),t.mc(),t.mc(),t.mc(),t.nc(32,"div"),t.nc(33,"div",10),t.nc(34,"div",11),t.nc(35,"div",12),t.nc(36,"p",13),t.bd(37," Salientes Manuales "),t.mc(),t.mc(),t.mc(),t.nc(38,"div"),t.nc(39,"a"),t.ic(40,"img",16),t.mc(),t.mc(),t.mc(),t.mc(),t.nc(41,"div"),t.nc(42,"div",10),t.nc(43,"div",11),t.nc(44,"div",12),t.nc(45,"p",13),t.bd(46," Gestion de personal "),t.mc(),t.mc(),t.mc(),t.nc(47,"div"),t.nc(48,"a"),t.ic(49,"img",17),t.mc(),t.mc(),t.mc(),t.mc(),t.mc(),t.mc()),2&e&&(t.Tb(3),t.Jc("href",r.env.callcenterSlogan,t.Uc),t.Tb(1),t.Jc("src",r.env.callcenterLogo,t.Uc),t.Tb(5),t.cd(r.env.callcenterSlogan),t.Tb(2),t.ed("",r.env.callcenterName," - ",r.env.version,""))},styles:["body[_ngcontent-%COMP%]{background:#c2c2c2}.intro[_ngcontent-%COMP%]{margin-top:40px;margin-bottom:20px}.intro[_ngcontent-%COMP%]   .display-1[_ngcontent-%COMP%]{font-size:5rem}.intro[_ngcontent-%COMP%]   .display-2[_ngcontent-%COMP%]{font-size:4.5rem}.intro[_ngcontent-%COMP%]   .display-3[_ngcontent-%COMP%]{font-size:3.5rem}.intro[_ngcontent-%COMP%]   .display-4[_ngcontent-%COMP%]{font-size:1.1rem}.intro[_ngcontent-%COMP%]   .display-5[_ngcontent-%COMP%]{font-size:1rem}.intro-header[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr 4fr;grid-gap:2rem}.photo-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr 1fr 1fr 1fr;grid-gap:1rem}.index-title[_ngcontent-%COMP%]{color:#fff;text-align:center;font-size:1.1rem}.card-header[_ngcontent-%COMP%]{background:#2a7de3;color:#fff}"]}),e}(),f=n("LgNh"),p=n("gqdu"),b=n("phxf"),v=n("Uj1/");function h(e,r){1&e&&(t.nc(0,"div"),t.bd(1," El usuario es obligatorio "),t.mc())}function I(e,r){1&e&&(t.nc(0,"div"),t.bd(1," El usuario es muy corto "),t.mc())}function C(e,r){if(1&e&&(t.nc(0,"div",19),t.Zc(1,h,2,0,"div",17),t.Zc(2,I,2,0,"div",17),t.mc()),2&e){var n=t.Dc();t.Tb(1),t.Ic("ngIf",n.f.username.errors.required),t.Tb(1),t.Ic("ngIf",n.f.username.errors.minlength)}}function M(e,r){1&e&&(t.nc(0,"div"),t.bd(1," El password es obligatorio "),t.mc())}function y(e,r){1&e&&(t.nc(0,"div"),t.bd(1," El password es muy corto "),t.mc())}function _(e,r){if(1&e&&(t.nc(0,"div",19),t.Zc(1,M,2,0,"div",17),t.Zc(2,y,2,0,"div",17),t.mc()),2&e){var n=t.Dc();t.Tb(1),t.Ic("ngIf",n.f.password.errors.required),t.Tb(1),t.Ic("ngIf",n.f.password.errors.minlength)}}function T(e,r){1&e&&(t.nc(0,"div"),t.nc(1,"button",20),t.bd(2," Login "),t.mc(),t.mc())}function w(e,r){1&e&&(t.nc(0,"div",21),t.nc(1,"a",22),t.bd(2,"Si no tiene cuenta, registrese aquí"),t.mc(),t.mc())}var P=function(e){return{"is-invalid":e}},S=function(){function e(e,r,n,t,i){this.formBuilder=e,this.authService=r,this.envService=n,this.alertService=t,this.router=i,this.option="other",this.submitted=!1,this.alertMessage=new f.a,this.env=this.envService,this.loginForm=this.formBuilder.group({username:[null,[c.p.required,c.p.minLength(6)]],password:["",[c.p.required,c.p.minLength(6)]]})}return e.prototype.ngOnInit=function(){},Object.defineProperty(e.prototype,"f",{get:function(){return this.loginForm.controls},enumerable:!0,configurable:!0}),e.prototype.onLogin=function(){var e=this;return this.submitted=!0,this.authService.loginUser(this.loginForm.value.username,this.loginForm.value.password).subscribe((function(r){var n=e.userCheck(r,e.option);e.authService.setUser(n),e.authService.setToken(n.accessToken),e.router.navigate(["/"])}),(function(r){console.error("Error",r,r.status),e.alertService.error(r.status),e.alertMessage.alertTitle="Error del servidor",e.alertMessage.alertText=r.statusText,e.alertMessage.alertShow=!0,e.alertMessage.alertClass="alert alert-danger alert-dismissible fade show"}))},e.prototype.userCheck=function(e,r){return"jwt"===r?e:{firstname:e.user.firstname,lastname:e.user.lastname,user_legal_id:e.user.user_legal_id,user_internal_id:e.user.user_internal_id,user_photo_path:e.user.user_photo_path,profile:e.user.profile,realm:e.user.realm,username:e.user.username,email:e.user.email,emailVerified:e.user.emailVerified,id:e.user.id,accessToken:e.id}},e.ɵfac=function(r){return new(r||e)(t.hc(c.c),t.hc(p.a),t.hc(g.a),t.hc(b.a),t.hc(m.b))},e.ɵcmp=t.bc({type:e,selectors:[["app-login-login"]],decls:25,vars:12,consts:[[3,"alertMessage"],["id","login"],[1,"container"],[1,"row"],[1,"mx-auto"],[1,"card-login"],[1,"card","mt-3"],[1,"card-body"],[3,"formGroup","ngSubmit"],[1,"h2","mb-3","font-weight-normal","text-center"],[1,"login-form"],[1,"login-two-col"],[1,"form-group"],[1,"login-label"],["type","text","formControlName","username",1,"form-control","login-input",3,"ngClass"],["class","login-error",4,"ngIf"],["type","password","formControlName","password",1,"form-control","login-input",3,"ngClass"],[4,"ngIf"],["class","form-group text-center",4,"ngIf"],[1,"login-error"],["type","submit",1,"btn","btn-lg","btn-primary","btn-block"],[1,"form-group","text-center"],["routerLink","/layout/login/login-register/",1,"form-control","login-link"]],template:function(e,r){1&e&&(t.ic(0,"app-alert",0),t.nc(1,"section",1),t.nc(2,"div",2),t.nc(3,"div",3),t.nc(4,"div",4),t.nc(5,"div",5),t.nc(6,"div",6),t.nc(7,"div",7),t.nc(8,"form",8),t.zc("ngSubmit",(function(){return r.onLogin()})),t.nc(9,"h3",9),t.bd(10,"Login"),t.mc(),t.nc(11,"div",10),t.nc(12,"div",11),t.nc(13,"div",12),t.nc(14,"label",13),t.bd(15,"Usuario"),t.mc(),t.ic(16,"input",14),t.Zc(17,C,3,2,"div",15),t.mc(),t.nc(18,"div",12),t.nc(19,"label",13),t.bd(20,"Contraseña"),t.mc(),t.ic(21,"input",16),t.Zc(22,_,3,2,"div",15),t.mc(),t.mc(),t.Zc(23,T,3,0,"div",17),t.Zc(24,w,3,0,"div",18),t.mc(),t.mc(),t.mc(),t.mc(),t.mc(),t.mc(),t.mc(),t.mc(),t.mc()),2&e&&(t.Ic("alertMessage",r.alertMessage),t.Tb(8),t.Ic("formGroup",r.loginForm),t.Tb(8),t.Ic("ngClass",t.Mc(8,P,r.f.username.errors)),t.Tb(1),t.Ic("ngIf",r.f.username.dirty&&r.f.username.errors),t.Tb(4),t.Ic("ngClass",t.Mc(10,P,r.f.password.errors)),t.Tb(1),t.Ic("ngIf",r.f.password.dirty&&r.f.password.errors),t.Tb(1),t.Ic("ngIf",r.loginForm.valid),t.Tb(1),t.Ic("ngIf",r.env.autoregister))},directives:[v.a,c.r,c.k,c.e,c.b,c.j,c.d,i.k,i.m,m.d],styles:[".login-form[_ngcontent-%COMP%]{background:#add8e6;padding:1rem 1rem 0;display:grid;grid-template-columns:1fr;grid-gap:1rem}.login-error[_ngcontent-%COMP%]{color:red;font-size:.8rem}.login-label[_ngcontent-%COMP%]{font-size:.9rem}.login-input[_ngcontent-%COMP%]{font-size:1rem}.login-button-group[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr 1fr;grid-gap:1rem}.login-button[_ngcontent-%COMP%]{font-size:1.1rem}.login-login-text[_ngcontent-%COMP%]{padding:5px;font-size:1.1rem}.login-two-col[_ngcontent-%COMP%]{display:grid;grid-template-columns:1 fr 1fr;grid-gap:1rem}"]}),e}(),O=n("aLj8"),x=n("j2Hr"),Z=n("k5pS");function k(e,r){1&e&&(t.nc(0,"div"),t.bd(1,"El nombre es obligatorio"),t.mc())}function E(e,r){if(1&e&&(t.nc(0,"div",28),t.Zc(1,k,2,0,"div",22),t.mc()),2&e){var n=t.Dc();t.Tb(1),t.Ic("ngIf",n.f.firstname.errors.required)}}function U(e,r){1&e&&(t.nc(0,"div"),t.bd(1,"Los apellidos son obligatorios"),t.mc())}function z(e,r){if(1&e&&(t.nc(0,"div",28),t.Zc(1,U,2,0,"div",22),t.mc()),2&e){var n=t.Dc();t.Tb(1),t.Ic("ngIf",n.f.lastname.errors.required)}}function F(e,r){1&e&&(t.nc(0,"div"),t.bd(1,"Usuario es obligatorios"),t.mc())}function L(e,r){1&e&&(t.nc(0,"div"),t.bd(1,"El usuario debe tener al menos 6 caracteres"),t.mc())}function q(e,r){if(1&e&&(t.nc(0,"div",28),t.Zc(1,F,2,0,"div",22),t.Zc(2,L,2,0,"div",22),t.mc()),2&e){var n=t.Dc();t.Tb(1),t.Ic("ngIf",n.f.username.errors.required),t.Tb(1),t.Ic("ngIf",n.f.username.errors.minlength)}}function R(e,r){1&e&&(t.nc(0,"div"),t.bd(1,"Email es obligatorio "),t.mc())}function D(e,r){1&e&&(t.nc(0,"div"),t.bd(1,"Email debe ser una direccion de correo válida"),t.mc())}function N(e,r){if(1&e&&(t.nc(0,"div",28),t.Zc(1,R,2,0,"div",22),t.Zc(2,D,2,0,"div",22),t.mc()),2&e){var n=t.Dc();t.Tb(1),t.Ic("ngIf",n.f.email.errors.required),t.Tb(1),t.Ic("ngIf",n.f.email.errors.email)}}function j(e,r){1&e&&(t.nc(0,"div"),t.bd(1,"Usuario es obligatorios"),t.mc())}function B(e,r){1&e&&(t.nc(0,"div"),t.bd(1,"La cedula debe ser un numero de cedula valido sin espacios, letras puntos o caracteres especiales."),t.mc())}function J(e,r){if(1&e&&(t.nc(0,"div",28),t.Zc(1,j,2,0,"div",22),t.Zc(2,B,2,0,"div",22),t.mc()),2&e){var n=t.Dc();t.Tb(1),t.Ic("ngIf",n.f.user_legal_id.errors.required),t.Tb(1),t.Ic("ngIf",n.f.user_legal_id.errors.pattern)}}function V(e,r){1&e&&(t.nc(0,"div"),t.bd(1,"Este número no es obligatorios"),t.mc())}function G(e,r){1&e&&(t.nc(0,"div"),t.bd(1,"El usuario debe tener al menos 6 caracteres"),t.mc())}function A(e,r){if(1&e&&(t.nc(0,"div",28),t.Zc(1,V,2,0,"div",22),t.Zc(2,G,2,0,"div",22),t.mc()),2&e){var n=t.Dc();t.Tb(1),t.Ic("ngIf",n.f.user_internal_id.errors.required),t.Tb(1),t.Ic("ngIf",n.f.user_internal_id.errors.minlength)}}function H(e,r){1&e&&(t.nc(0,"div"),t.bd(1,"La clave es obligatoria"),t.mc())}function Q(e,r){1&e&&(t.nc(0,"div"),t.bd(1,"La clave debe tener al menos 6 caracteres"),t.mc())}function K(e,r){if(1&e&&(t.nc(0,"div",28),t.Zc(1,H,2,0,"div",22),t.Zc(2,Q,2,0,"div",22),t.mc()),2&e){var n=t.Dc();t.Tb(1),t.Ic("ngIf",n.f.password.errors.required),t.Tb(1),t.Ic("ngIf",n.f.password.errors.minlength)}}function Y(e,r){1&e&&(t.nc(0,"div"),t.bd(1,"La confirmación de la clave es obligatoria"),t.mc())}function X(e,r){1&e&&(t.nc(0,"div"),t.bd(1,"Las claves deben coincidir"),t.mc())}function $(e,r){if(1&e&&(t.nc(0,"div",28),t.Zc(1,Y,2,0,"div",22),t.Zc(2,X,2,0,"div",22),t.mc()),2&e){var n=t.Dc();t.Tb(1),t.Ic("ngIf",n.f.confirmPassword.errors.required),t.Tb(1),t.Ic("ngIf",n.f.confirmPassword.errors.mustMatch)}}function W(e,r){if(1&e&&(t.nc(0,"div"),t.nc(1,"p",29),t.bd(2),t.mc(),t.mc()),2&e){var n=t.Dc();t.Tb(2),t.cd(n.f.profile.value)}}var ee=function(e){return{"is-invalid":e}};function re(e,r){if(1&e&&t.ic(0,"input",30),2&e){var n=t.Dc();t.Ic("ngClass",t.Mc(1,ee,n.f.profile.errors))}}function ne(e,r){1&e&&(t.nc(0,"div"),t.bd(1,"La confirmación de la clave es obligatoria"),t.mc())}function te(e,r){1&e&&(t.nc(0,"div"),t.bd(1,"Las claves deben coincidir"),t.mc())}function ie(e,r){if(1&e&&(t.nc(0,"div",28),t.Zc(1,ne,2,0,"div",22),t.Zc(2,te,2,0,"div",22),t.mc()),2&e){var n=t.Dc();t.Tb(1),t.Ic("ngIf",n.f.profile.errors.required),t.Tb(1),t.Ic("ngIf",n.f.profile.errors.mustMatch)}}function ce(e,r){if(1&e){var n=t.oc();t.nc(0,"div"),t.nc(1,"button",31),t.zc("click",(function(){t.Sc(n);var e=t.Dc();return e.onRegister(e.content)})),t.bd(2,"Registrar"),t.mc(),t.mc()}}var oe=function(){function e(e,r,n,t,i){this.formBuilder=e,this.authService=r,this.alertService=n,this.modalService=t,this.router=i,this.submitted=!1,this.alertMessage=new f.a,this.repeatedRecord=!1}return e.prototype.ngOnInit=function(){this.onFillForm()},e.prototype.onFillForm=function(){this.selection=new Z.c,this.registerForm=this.formBuilder.group({id:[this.selection.id],firstname:[this.selection.firstname,c.p.required],lastname:[this.selection.lastname,c.p.required],profile:[this.selection.profile,c.p.required],realm:[this.selection.realm,c.p.required],username:[this.selection.username,[c.p.required,c.p.minLength(5)]],password:[this.selection.password,[c.p.required,c.p.minLength(6)]],confirmPassword:["",c.p.required],email:[this.selection.email,[c.p.required,c.p.email]],emailVerified:[this.selection.emailVerified],verificationToken:[this.selection.verificationToken],memberId:[this.selection.memberId],user_legal_id:["",[c.p.required,c.p.pattern("^[0-9]*$")]],user_internal_id:[""],user_photo_path:[this.selection.user_photo_path]},{validator:Object(x.a)("password","confirmPassword")})},e.prototype.onSubmit=function(){},Object.defineProperty(e.prototype,"f",{get:function(){return this.registerForm.controls},enumerable:!0,configurable:!0}),e.prototype.onRegister=function(e){var r=this;if(this.alertMessage=new f.a,this.submitted=!0,!this.registerForm.invalid){var n=this.registerForm.value;delete n.confirmPassword,this.authService.registerUser(n).subscribe((function(e){r.onRegisterRoleMapping(e),r.onLoginUser(n),r.registerForm.reset()}),(function(e){console.error("Error",e,e.status),r.alertService.error(e.status),r.alertMessage.alertTitle="Error del servidor",r.alertMessage.alertText=e.statusText,r.alertMessage.alertShow=!0,r.alertMessage.alertClass="alert alert-danger alert-dismissible fade show"}))}},e.prototype.onRegisterRoleMapping=function(e){var r=this;this.authService.registerRoleMapping(e).subscribe((function(e){return e}),(function(e){console.error("Error",e,e.status),r.alertService.error(e.status),r.alertMessage.alertTitle="Error del servidor",r.alertMessage.alertText=e.statusText,r.alertMessage.alertShow=!0,r.alertMessage.alertClass="alert alert-danger alert-dismissible fade show"}))},e.prototype.onLoginUser=function(e){var r=this;this.authService.loginUser(e.username,e.password).subscribe((function(e){r.authService.setUser(e.user),r.authService.setToken(e.id),r.router.navigate(["/"])}),(function(e){console.error("Error",e,e.status),r.alertService.error(e.status),r.alertMessage.alertTitle="Error del servidor",r.alertMessage.alertText=e.statusText,r.alertMessage.alertShow=!0,r.alertMessage.alertClass="alert alert-danger alert-dismissible fade show"}))},e.prototype.open=function(e){var r=this;this.modalService.open(e,{ariaLabelledBy:"modal-basic-title"}).result.then((function(e){r.closeResult="Closed with: "+e}),(function(e){r.closeResult="Dismissed "+r.getDismissReason(e)}))},e.prototype.getDismissReason=function(e){return e===O.a.ESC?"by pressing ESC":e===O.a.BACKDROP_CLICK?"by clicking on a backdrop":"with: "+e},e.prototype.onResetForm=function(){this.alertMessage=new f.a,this.submitted=!1,this.registerForm.reset(),this.onFillForm()},e.prototype.onCheckIfExists=function(){var e=this;this.authService.checkIfExists({username:this.registerForm.value.username,email:this.registerForm.value.email}).subscribe((function(r){var n=r.username[0];return r.email[0]&&(alert("El email "+e.registerForm.value.email+" ya está registrado"),e.repeatedRecord=!0,e.registerForm.patchValue({email:""})),n&&(alert("El nombre de usuario "+e.registerForm.value.username+" ya está registrado"),e.repeatedRecord=!0,e.registerForm.patchValue({username:""})),e.repeatedRecord}),(function(r){console.error("Error",r,r.status),e.alertService.error(r.status),e.alertMessage.alertTitle="Error del servidor",e.alertMessage.alertText=r.statusText,e.alertMessage.alertShow=!0,e.alertMessage.alertClass="alert alert-danger alert-dismissible fade show"}))},e.prototype.onRecordJsonChange=function(){this.onCheckIfExists()},e.ɵfac=function(r){return new(r||e)(t.hc(c.c),t.hc(p.a),t.hc(b.a),t.hc(O.c),t.hc(m.b))},e.ɵcmp=t.bc({type:e,selectors:[["app-login-register"]],decls:66,vars:38,consts:[[3,"alertMessage"],["id","register"],[1,"container"],[1,"row"],[1,"mx-auto"],[1,"card-login"],[1,"card","mt-3"],[1,"card-body"],[1,"h2","mb-3","font-weight-normal","text-center"],[3,"formGroup","ngSubmit"],[1,"register-form"],[1,"form-group"],[1,"register-label"],["type","text","formControlName","firstname",1,"form-control","register-input",3,"ngClass"],["class","register-error",4,"ngIf"],["type","text","formControlName","lastname",1,"form-control","register-input",3,"ngClass"],["type","text","formControlName","username",1,"form-control","register-input",3,"ngClass","change"],["type","email","formControlName","email",1,"form-control","register-input",3,"ngClass","change"],["type","text","formControlName","user_legal_id",1,"form-control","register-input",3,"ngClass"],["type","text","formControlName","user_internal_id","placeholder","Opcional",1,"form-control","register-input",3,"ngClass"],["type","password","formControlName","password",1,"form-control","register-input",3,"ngClass"],["type","password","formControlName","confirmPassword",1,"form-control","register-input",3,"ngClass"],[4,"ngIf"],["type","text","formControlName","profile","class","form-control register-input",3,"ngClass",4,"ngIf"],[1,"form-group","text-center","mt-3","mb-0","register-button-group"],[1,"btn","btn-secondary","register-button",3,"click"],[1,"text-center","register-login-text"],["routerLink","/layout/login",1,"register-label"],[1,"register-error"],[1,"register-detail"],["type","text","formControlName","profile",1,"form-control","register-input",3,"ngClass"],[1,"btn","btn-success","register-button",3,"click"]],template:function(e,r){1&e&&(t.ic(0,"app-alert",0),t.nc(1,"section",1),t.nc(2,"div",2),t.nc(3,"div",3),t.nc(4,"div",4),t.nc(5,"div",5),t.nc(6,"div",6),t.nc(7,"div",7),t.nc(8,"h3",8),t.bd(9,"Registro de usuario"),t.mc(),t.nc(10,"form",9),t.zc("ngSubmit",(function(){return r.onSubmit()})),t.nc(11,"div",10),t.nc(12,"div",11),t.nc(13,"label",12),t.bd(14,"Nombres"),t.mc(),t.ic(15,"input",13),t.Zc(16,E,2,1,"div",14),t.mc(),t.nc(17,"div",11),t.nc(18,"label",12),t.bd(19,"Apellidos"),t.mc(),t.ic(20,"input",15),t.Zc(21,z,2,1,"div",14),t.mc(),t.nc(22,"div",11),t.nc(23,"label",12),t.bd(24,"Nombre de usuario"),t.mc(),t.nc(25,"input",16),t.zc("change",(function(){return r.onRecordJsonChange()})),t.mc(),t.Zc(26,q,3,2,"div",14),t.mc(),t.nc(27,"div",11),t.nc(28,"label",12),t.bd(29,"Email"),t.mc(),t.nc(30,"input",17),t.zc("change",(function(){return r.onRecordJsonChange()})),t.mc(),t.Zc(31,N,3,2,"div",14),t.mc(),t.nc(32,"div",11),t.nc(33,"label",12),t.bd(34,"Cédula (sin puntos ni letras)"),t.mc(),t.ic(35,"input",18),t.Zc(36,J,3,2,"div",14),t.mc(),t.nc(37,"div",11),t.nc(38,"label",12),t.bd(39,"Documento id interno"),t.mc(),t.ic(40,"input",19),t.Zc(41,A,3,2,"div",14),t.mc(),t.nc(42,"div",11),t.nc(43,"label",12),t.bd(44,"Clave"),t.mc(),t.ic(45,"input",20),t.Zc(46,K,3,2,"div",14),t.mc(),t.nc(47,"div",11),t.nc(48,"label",12),t.bd(49,"Confirmar clave"),t.mc(),t.ic(50,"input",21),t.Zc(51,$,3,2,"div",14),t.mc(),t.nc(52,"div",11),t.nc(53,"label",12),t.bd(54,"Perfil"),t.mc(),t.Zc(55,W,3,1,"div",22),t.Zc(56,re,1,3,"input",23),t.Zc(57,ie,3,2,"div",14),t.mc(),t.mc(),t.nc(58,"div",24),t.nc(59,"div"),t.nc(60,"button",25),t.zc("click",(function(){return r.onResetForm()})),t.bd(61,"Borrar forma"),t.mc(),t.mc(),t.Zc(62,ce,3,0,"div",22),t.mc(),t.nc(63,"div",26),t.nc(64,"a",27),t.bd(65,"Si tiene cuenta, ingrese aquí"),t.mc(),t.mc(),t.mc(),t.mc(),t.mc(),t.mc(),t.mc(),t.mc(),t.mc(),t.mc()),2&e&&(t.Ic("alertMessage",r.alertMessage),t.Tb(10),t.Ic("formGroup",r.registerForm),t.Tb(5),t.Ic("ngClass",t.Mc(22,ee,r.f.firstname.errors)),t.Tb(1),t.Ic("ngIf",r.f.firstname.dirty&&r.f.firstname.errors),t.Tb(4),t.Ic("ngClass",t.Mc(24,ee,r.f.lastname.errors)),t.Tb(1),t.Ic("ngIf",r.f.lastname.dirty&&r.f.lastname.errors),t.Tb(4),t.Ic("ngClass",t.Mc(26,ee,r.f.username.errors)),t.Tb(1),t.Ic("ngIf",r.f.username.dirty&&r.f.username.errors),t.Tb(4),t.Ic("ngClass",t.Mc(28,ee,r.f.email.errors)),t.Tb(1),t.Ic("ngIf",r.f.email.dirty&&r.f.email.errors),t.Tb(4),t.Ic("ngClass",t.Mc(30,ee,r.f.user_legal_id.errors)),t.Tb(1),t.Ic("ngIf",r.f.user_legal_id.dirty&&r.f.user_legal_id.errors),t.Tb(4),t.Ic("ngClass",t.Mc(32,ee,r.f.user_internal_id.errors)),t.Tb(1),t.Ic("ngIf",r.f.user_internal_id.dirty&&r.f.user_internal_id.errors),t.Tb(4),t.Ic("ngClass",t.Mc(34,ee,r.f.password.errors)),t.Tb(1),t.Ic("ngIf",r.f.password.dirty&&r.f.password.errors),t.Tb(4),t.Ic("ngClass",t.Mc(36,ee,r.f.confirmPassword.errors)),t.Tb(1),t.Ic("ngIf",r.f.confirmPassword.dirty&&r.f.confirmPassword.errors),t.Tb(4),t.Ic("ngIf",!0),t.Tb(1),t.Ic("ngIf",!1),t.Tb(1),t.Ic("ngIf",r.f.profile.dirty&&r.f.profile.errors),t.Tb(5),t.Ic("ngIf",r.registerForm.valid&&!r.repeatedRecord))},directives:[v.a,c.r,c.k,c.e,c.b,c.j,c.d,i.k,i.m,m.d],styles:[".register-form[_ngcontent-%COMP%]{background:#add8e6;padding:1rem 1rem 0;display:grid;grid-template-columns:1fr 1fr 1fr;grid-gap:1rem}.register[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]{margin:0}.register-error[_ngcontent-%COMP%]{color:red;font-size:.8rem}.register-label[_ngcontent-%COMP%]{font-size:.9rem}.register-input[_ngcontent-%COMP%]{font-size:1rem}.register-button-group[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr 1fr;grid-gap:1rem}.register-button[_ngcontent-%COMP%]{font-size:1.1rem}.register-login-text[_ngcontent-%COMP%]{padding:5px;font-size:1.1rem}@media screen and (max-width:576px){.register-form[_ngcontent-%COMP%]{padding:1rem;display:grid;grid-template-columns:1fr;grid-gap:1rem}}"]}),e}(),se=n("iMuY");function ae(e,r){if(1&e&&(t.nc(0,"section",2),t.nc(1,"div",3),t.nc(2,"div",4),t.nc(3,"div",5),t.nc(4,"div",6),t.nc(5,"div",7),t.nc(6,"div",8),t.nc(7,"div",9),t.nc(8,"label",10),t.bd(9,"id"),t.mc(),t.nc(10,"p"),t.bd(11),t.mc(),t.mc(),t.ic(12,"hr"),t.nc(13,"div",9),t.nc(14,"label",10),t.bd(15,"Nombre"),t.mc(),t.nc(16,"p"),t.bd(17),t.mc(),t.mc(),t.ic(18,"hr"),t.nc(19,"div",9),t.nc(20,"label",10),t.bd(21,"Apellido"),t.mc(),t.nc(22,"p"),t.bd(23),t.mc(),t.mc(),t.ic(24,"hr"),t.nc(25,"div",9),t.nc(26,"label",10),t.bd(27,"Perfil"),t.mc(),t.nc(28,"p"),t.bd(29),t.mc(),t.mc(),t.ic(30,"hr"),t.nc(31,"div",9),t.nc(32,"label",10),t.bd(33,"Cédula"),t.mc(),t.nc(34,"p"),t.bd(35),t.mc(),t.mc(),t.ic(36,"hr"),t.nc(37,"div",9),t.nc(38,"label",10),t.bd(39,"Identificación laboral"),t.mc(),t.nc(40,"p"),t.bd(41),t.mc(),t.mc(),t.ic(42,"hr"),t.nc(43,"div",9),t.nc(44,"label",10),t.bd(45,"Nombre de usuario"),t.mc(),t.nc(46,"p"),t.bd(47),t.mc(),t.mc(),t.ic(48,"hr"),t.nc(49,"div",9),t.nc(50,"label",10),t.bd(51,"Email"),t.mc(),t.nc(52,"p"),t.bd(53),t.mc(),t.mc(),t.ic(54,"hr"),t.mc(),t.mc(),t.mc(),t.mc(),t.mc(),t.mc(),t.mc()),2&e){var n=t.Dc();t.Tb(11),t.cd(n.currentUserInfo.id),t.Tb(6),t.cd(n.currentUserInfo.firstname),t.Tb(6),t.cd(n.currentUserInfo.lastname),t.Tb(6),t.cd(n.currentUserInfo.profile),t.Tb(6),t.cd(n.currentUserInfo.user_legal_id),t.Tb(6),t.cd(n.currentUserInfo.user_internal_id),t.Tb(6),t.cd(n.currentUserInfo.username),t.Tb(6),t.cd(n.currentUserInfo.email)}}var le=[{path:"",component:S,children:[{path:"",redirectTo:"login-login"},{path:"login-intro",component:u}]},{path:"",redirectTo:"home",pathMatch:"full"},{path:"login-logout",redirectTo:"home",pathMatch:"full"},{path:"login-login",component:S},{path:"login-register",component:oe},{path:"login-profile",component:function(){function e(e,r,n){this.userbaseService=e,this.authService=r,this.alertService=n,this.alertMessage=new f.a}return e.prototype.ngOnInit=function(){this.getCurrentUser(),this.getUserById(this.currentUser.id)},e.prototype.getCurrentUser=function(){this.currentUser=this.authService.getCurrentUser()},e.prototype.getUserById=function(e){var r=this;this.userbaseService.getRecordById(e).subscribe((function(e){r.currentUserInfo=e}),(function(e){r.alertService.error(e.status),r.alertMessage.alertTitle="Error del servidor",r.alertMessage.alertText=e.statusText,r.alertMessage.alertShow=!0,r.alertMessage.alertClass="alert alert-danger alert-dismissible fade show"}))},e.ɵfac=function(r){return new(r||e)(t.hc(se.a),t.hc(p.a),t.hc(b.a))},e.ɵcmp=t.bc({type:e,selectors:[["app-profile"]],decls:2,vars:2,consts:[[3,"alertMessage"],["id","login",4,"ngIf"],["id","login"],[1,"container"],[1,"row"],[1,"mx-auto"],[1,"card-login"],[1,"card","mt-3"],[1,"card-body"],[1,"login-columns"],[1,"login-label"]],template:function(e,r){1&e&&(t.ic(0,"app-alert",0),t.Zc(1,ae,55,8,"section",1)),2&e&&(t.Ic("alertMessage",r.alertMessage),t.Tb(1),t.Ic("ngIf",r.currentUserInfo))},directives:[v.a,i.m],styles:[".login-form[_ngcontent-%COMP%]{background:#add8e6;padding:1rem 1rem 0;display:grid;grid-template-columns:1fr;grid-gap:1rem}.login-error[_ngcontent-%COMP%]{color:red;font-size:.8rem}.login-label[_ngcontent-%COMP%]{font-size:.9rem}.login-input[_ngcontent-%COMP%]{font-size:1rem}.login-button-group[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr 1fr;grid-gap:1rem}.login-button[_ngcontent-%COMP%]{font-size:1.1rem}.login-login-text[_ngcontent-%COMP%]{padding:5px;font-size:1.1rem}.login-two-col[_ngcontent-%COMP%]{display:grid;grid-template-columns:1 fr 1fr;grid-gap:1rem}.login-columns[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr 1fr}"]}),e}()},{path:"home",redirectTo:"login-intro"}],de=function(){function e(){}return e.ɵmod=t.fc({type:e}),e.ɵinj=t.ec({factory:function(r){return new(r||e)},imports:[[m.e.forChild(le)],m.e]}),e}(),me=(n("kBqf"),n("l9G0"),n("IBbj")),ge=n("lrgc"),ue=n("PVAY"),fe=n("erSH"),pe=n("kQ1Q");n.d(r,"LoginModule",(function(){return be}));var be=function(){function e(){}return e.ɵmod=t.fc({type:e}),e.ɵinj=t.ec({factory:function(r){return new(r||e)},imports:[[i.c,l.a,d.a,c.f,c.o,a.a,ge.a,ue.a,fe.a,pe.a,o.c,s.a,me.b,de]]}),e}()}}]);
//# sourceMappingURL=6.56f4ee70d9b24c3b3c08.js.map