(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{WZUR:function(t,e,n){"use strict";n.r(e);var o=n("1C3z"),i=n("8AiQ"),r=n("ZSGP"),c=n("BYtS"),a=n("JjjS"),s=n("ruJL"),d=n("5/c3"),u=n("k5pS"),l=n("j2Hr"),h=n("IXvK"),f=n("Uj1/");function m(t,e){if(1&t){var n=o.oc();o.nc(0,"p",10),o.zc("click",(function(t){return o.Uc(n),(0,e.sortFn)(t,e.sortDir,o.Dc(2).sortFn)})),o.dd(1),o.mc()}if(2&t){var i=o.Dc(2);o.Tb(1),o.fd(" ",i.model.fieldInfo("aux_hour_id").text,"")}}function b(t,e){if(1&t&&(o.nc(0,"p",11),o.dd(1),o.mc()),2&t){var n=e.value;o.Tb(1),o.ed(n)}}function p(t,e){if(1&t){var n=o.oc();o.nc(0,"p",12),o.zc("click",(function(t){return o.Uc(n),(0,e.sortFn)(t,e.sortDir,o.Dc(2).sortFn)})),o.dd(1),o.mc()}if(2&t){var i=o.Dc(2);o.Tb(1),o.fd(" ",i.model.fieldInfo("aux_hour_name").text,"")}}function g(t,e){if(1&t&&(o.nc(0,"p",13),o.dd(1),o.mc()),2&t){var n=e.value;o.Tb(1),o.ed(n)}}function _(t,e){if(1&t){var n=o.oc();o.nc(0,"p",12),o.zc("click",(function(t){return o.Uc(n),(0,e.sortFn)(t,e.sortDir,o.Dc(2).sortFn)})),o.dd(1),o.mc()}if(2&t){var i=o.Dc(2);o.Tb(1),o.fd(" ",i.model.fieldInfo("aux_hour_value").text,"")}}function w(t,e){if(1&t&&(o.nc(0,"p",13),o.dd(1),o.mc()),2&t){var n=e.value;o.Tb(1),o.ed(n)}}function v(t,e){if(1&t){var n=o.oc();o.nc(0,"p",12),o.zc("click",(function(t){return o.Uc(n),(0,e.sortFn)(t,e.sortDir,o.Dc(2).sortFn)})),o.dd(1),o.mc()}if(2&t){var i=o.Dc(2);o.Tb(1),o.fd(" ",i.model.fieldInfo("aux_hour_status").text,"")}}function x(t,e){if(1&t&&(o.nc(0,"p",13),o.dd(1),o.mc()),2&t){var n=e.value;o.Tb(1),o.ed(n)}}var I=function(){return{emptyMessage:"Sin datos que mostrar"}};function y(t,e){if(1&t){var n=o.oc();o.nc(0,"div",2),o.nc(1,"ngx-datatable",3),o.zc("activate",(function(t){return o.Uc(n),o.Dc().onActivate(t)}))("select",(function(t){return o.Uc(n),o.Dc().onSelect(t)})),o.nc(2,"ngx-datatable-column",4),o.bd(3,m,2,1,"ng-template",5),o.bd(4,b,2,1,"ng-template",6),o.mc(),o.nc(5,"ngx-datatable-column",7),o.bd(6,p,2,1,"ng-template",5),o.bd(7,g,2,1,"ng-template",6),o.mc(),o.nc(8,"ngx-datatable-column",8),o.bd(9,_,2,1,"ng-template",5),o.bd(10,w,2,1,"ng-template",6),o.mc(),o.nc(11,"ngx-datatable-column",9),o.bd(12,v,2,1,"ng-template",5),o.bd(13,x,2,1,"ng-template",6),o.mc(),o.mc(),o.mc()}if(2&t){var i=o.Dc();o.Tb(1),o.Ic("rows",i.rows)("columnMode","force")("headerHeight",40)("footerHeight",40)("rowHeight","35")("limit",i.numberOfRowsInTable.value)("selected",i.selected)("selectionType","single")("scrollbarH",!0)("scrollbarV",!1)("summaryRow",!1)("summaryHeight",50)("messages",o.Lc(15,I))("loadingIndicator","Contactando servidor"),o.Tb(1),o.Ic("frozenLeft",!0)}}var R=function(){function t(){this.listAnswer=new o.t,this.model=new u.d,this.selection=new u.d,this.selected=[{selected:new u.d}]}return t.prototype.ngOnInit=function(){},t.prototype.onActivate=function(t){},t.prototype.onSelect=function(t){this.selection=t.selected[0],this.action.action="selectedRecord",this.action.temp=this.selection,this.listAnswer.emit(this.action)},t.ɵfac=function(e){return new(e||t)},t.ɵcmp=o.bc({type:t,selectors:[["app-crud-aux-hour-list"]],inputs:{rows:"rows",numberOfRowsInTable:"numberOfRowsInTable",show_datatable:"show_datatable",action:"action"},outputs:{listAnswer:"listAnswer"},decls:2,vars:1,consts:[[1,"main"],["class","datatable",4,"ngIf"],[1,"datatable"],["data-toggle","modal","role","button","href","#content",1,"dark",3,"rows","columnMode","headerHeight","footerHeight","rowHeight","limit","selected","selectionType","scrollbarH","scrollbarV","summaryRow","summaryHeight","messages","loadingIndicator","activate","select"],["prop","aux_hour_id","width","50",3,"frozenLeft"],["ngx-datatable-header-template",""],["ngx-datatable-cell-template",""],["prop","aux_hour_name","width","100"],["prop","aux_hour_value","width","100"],["prop","aux_hour_status","width","50"],[1,"izquierda-negrita",3,"click"],[1,"izquierda-negrita"],[1,"celda_derecha",3,"click"],[1,"celda_derecha_negro"]],template:function(t,e){1&t&&(o.nc(0,"main",0),o.bd(1,y,14,16,"div",1),o.mc()),2&t&&(o.Tb(1),o.Ic("ngIf",e.rows&&e.show_datatable))},directives:[i.m,c.d,c.b,c.c,c.a],styles:[".main[_ngcontent-%COMP%]{margin:10px}.datatable[_ngcontent-%COMP%]{margin-top:10px}"]}),t}();function T(t,e){if(1&t&&(o.nc(0,"div"),o.nc(1,"p",24),o.dd(2),o.mc(),o.mc()),2&t){var n=o.Dc(2);o.Tb(2),o.ed(n.selection.aux_hour_id)}}var C=function(t){return{"is-invalid":t}};function M(t,e){if(1&t&&o.ic(0,"input",25),2&t){var n=o.Dc(2);o.Ic("ngClass",o.Mc(1,C,n.f.aux_hour_id.errors))}}function A(t,e){1&t&&(o.nc(0,"div"),o.dd(1," Este dato es obligatorio "),o.mc())}function D(t,e){if(1&t&&(o.nc(0,"div",26),o.bd(1,A,2,0,"div",10),o.mc()),2&t){var n=o.Dc(2);o.Tb(1),o.Ic("ngIf",n.f.aux_hour_id.errors.required)}}function F(t,e){if(1&t&&(o.nc(0,"div"),o.nc(1,"p",24),o.dd(2),o.mc(),o.mc()),2&t){var n=o.Dc(2);o.Tb(2),o.ed(n.selection.aux_hour_status)}}function k(t,e){if(1&t&&o.ic(0,"input",27),2&t){var n=o.Dc(2);o.Ic("ngClass",o.Mc(1,C,n.f.aux_hour_status.errors))}}function O(t,e){1&t&&(o.nc(0,"div"),o.dd(1," Este dato es obligatorio "),o.mc())}function z(t,e){if(1&t&&(o.nc(0,"div",26),o.bd(1,O,2,0,"div",10),o.mc()),2&t){var n=o.Dc(2);o.Tb(1),o.Ic("ngIf",n.f.aux_hour_status.errors.required)}}function S(t,e){if(1&t&&(o.nc(0,"div"),o.nc(1,"p",24),o.dd(2),o.mc(),o.mc()),2&t){var n=o.Dc(2);o.Tb(2),o.ed(n.selection.aux_hour_name)}}function E(t,e){if(1&t&&o.ic(0,"input",28),2&t){var n=o.Dc(2);o.Ic("ngClass",o.Mc(1,C,n.f.aux_hour_name.errors))}}function P(t,e){1&t&&(o.nc(0,"div"),o.dd(1," Este dato es obligatorio "),o.mc())}function U(t,e){if(1&t&&(o.nc(0,"div",26),o.bd(1,P,2,0,"div",10),o.mc()),2&t){var n=o.Dc(2);o.Tb(1),o.Ic("ngIf",n.f.aux_hour_name.errors.required)}}function H(t,e){if(1&t&&(o.nc(0,"div"),o.nc(1,"p",24),o.dd(2),o.mc(),o.mc()),2&t){var n=o.Dc(2);o.Tb(2),o.ed(n.selection.aux_hour_value)}}function L(t,e){if(1&t&&o.ic(0,"input",29),2&t){var n=o.Dc(2);o.Ic("ngClass",o.Mc(1,C,n.f.aux_hour_value.errors))}}function q(t,e){1&t&&(o.nc(0,"div"),o.dd(1," Este dato es obligatorio "),o.mc())}function G(t,e){if(1&t&&(o.nc(0,"div",26),o.bd(1,q,2,0,"div",10),o.mc()),2&t){var n=o.Dc(2);o.Tb(1),o.Ic("ngIf",n.f.aux_hour_value.errors.required)}}function j(t,e){if(1&t){var n=o.oc();o.nc(0,"button",30),o.zc("click",(function(){return o.Uc(n),o.Dc(2).onReset()})),o.dd(1," Reiniciar "),o.mc()}}function N(t,e){if(1&t){var n=o.oc();o.nc(0,"button",31),o.zc("click",(function(){return o.Uc(n),o.Dc(2).onDelete()})),o.dd(1," Eliminar "),o.mc()}}function B(t,e){if(1&t){var n=o.oc();o.nc(0,"button",31),o.zc("click",(function(){return o.Uc(n),o.Dc(2).onDeactivate()})),o.dd(1," Desactivar "),o.mc()}}function J(t,e){if(1&t){var n=o.oc();o.nc(0,"button",32),o.zc("click",(function(){return o.Uc(n),o.Dc(2).onReactivate()})),o.dd(1," Reactivar "),o.mc()}}function V(t,e){if(1&t){var n=o.oc();o.nc(0,"div"),o.nc(1,"button",33),o.zc("click",(function(){o.Uc(n);var t=o.Dc(2);return t.onSubmit(t.registerForm.value)})),o.dd(2," Guardar "),o.mc(),o.mc()}}function Z(t,e){if(1&t){var n=o.oc();o.nc(0,"section",2),o.nc(1,"div",3),o.nc(2,"div",4),o.ic(3,"h3",5),o.nc(4,"form",6),o.nc(5,"div",7),o.nc(6,"div",8),o.nc(7,"label",9),o.dd(8),o.mc(),o.bd(9,T,3,1,"div",10),o.bd(10,M,1,3,"input",11),o.bd(11,D,2,1,"div",12),o.mc(),o.nc(12,"div",13),o.nc(13,"label",9),o.dd(14),o.mc(),o.bd(15,F,3,1,"div",10),o.bd(16,k,1,3,"input",14),o.bd(17,z,2,1,"div",12),o.mc(),o.nc(18,"div",15),o.nc(19,"label",9),o.dd(20),o.mc(),o.bd(21,S,3,1,"div",10),o.bd(22,E,1,3,"input",16),o.bd(23,U,2,1,"div",12),o.mc(),o.nc(24,"div",17),o.nc(25,"label",9),o.dd(26),o.mc(),o.bd(27,H,3,1,"div",10),o.bd(28,L,1,3,"input",18),o.bd(29,G,2,1,"div",12),o.mc(),o.mc(),o.nc(30,"article",19),o.nc(31,"div"),o.nc(32,"button",20),o.zc("click",(function(){return o.Uc(n),o.Dc().onCancel()})),o.dd(33," Cancelar "),o.mc(),o.mc(),o.nc(34,"div"),o.bd(35,j,2,0,"button",21),o.mc(),o.nc(36,"div"),o.bd(37,N,2,0,"button",22),o.mc(),o.nc(38,"div"),o.bd(39,B,2,0,"button",22),o.mc(),o.nc(40,"div"),o.bd(41,J,2,0,"button",23),o.mc(),o.bd(42,V,3,0,"div",10),o.mc(),o.mc(),o.mc(),o.mc(),o.mc()}if(2&t){var i=o.Dc();o.Tb(4),o.Ic("formGroup",i.registerForm),o.Tb(4),o.ed(i.model.fieldInfo("aux_hour_id").text),o.Tb(1),o.Ic("ngIf",!0),o.Tb(1),o.Ic("ngIf","showRecord"!==i.action.action&&!1),o.Tb(1),o.Ic("ngIf",i.f.aux_hour_id.dirty&&i.f.aux_hour_id.errors),o.Tb(3),o.ed(i.model.fieldInfo("aux_hour_status").text),o.Tb(1),o.Ic("ngIf",!0),o.Tb(1),o.Ic("ngIf","showRecord"!==i.action.action&&!1),o.Tb(1),o.Ic("ngIf",i.f.aux_hour_status.dirty&&i.f.aux_hour_status.errors),o.Tb(3),o.ed(i.model.fieldInfo("aux_hour_name").text),o.Tb(1),o.Ic("ngIf","showRecord"===i.action.action),o.Tb(1),o.Ic("ngIf","showRecord"!==i.action.action),o.Tb(1),o.Ic("ngIf",i.f.aux_hour_name.dirty&&i.f.aux_hour_name.errors),o.Tb(3),o.ed(i.model.fieldInfo("aux_hour_value").text),o.Tb(1),o.Ic("ngIf","showRecord"===i.action.action),o.Tb(1),o.Ic("ngIf","showRecord"!==i.action.action),o.Tb(1),o.Ic("ngIf",i.f.aux_hour_value.dirty&&i.f.aux_hour_value.errors),o.Tb(6),o.Ic("ngIf","newRecord"===i.action.action),o.Tb(2),o.Ic("ngIf","editRecord"===i.action.action&&"I"===i.selection.aux_hour_status),o.Tb(2),o.Ic("ngIf","editRecord"===i.action.action&&"A"===i.selection.aux_hour_status),o.Tb(2),o.Ic("ngIf","editRecord"===i.action.action&&"I"===i.selection.aux_hour_status),o.Tb(1),o.Ic("ngIf","VALID"===i.registerForm.status&&"showRecord"!==i.action.action&&(!i.registerForm.pristine||i.show_submit_button))}}var K=function(){function t(t,e,n,i){this.formBuilder=t,this.auxHourService=e,this.alertService=n,this.envService=i,this.editAnswer=new o.t,this.error_detected=!1,this.alertMessage=new u.b,this.show_submit_button=!1,this.show_data=!0,this.model=new u.d}return t.prototype.ngOnInit=function(){this.onFillForm()},t.prototype.onFillForm=function(){this.selection=this.action.temp,this.registerForm=this.formBuilder.group({aux_hour_id:[this.selection.aux_hour_id,r.p.required],aux_hour_status:[this.selection.aux_hour_status,r.p.required],aux_hour_name:[this.selection.aux_hour_name,r.p.required],aux_hour_value:[this.selection.aux_hour_value,r.p.required]})},Object.defineProperty(t.prototype,"f",{get:function(){return this.registerForm.controls},enumerable:!0,configurable:!0}),t.prototype.onAnswer=function(t){this.action=t,this.selection=this.action.temp,"showRecord"===this.action.action&&this.onShowDetail(),"editRecord"===this.action.action&&this.onEditRecord()},t.prototype.createRecord=function(t){var e=this;this.auxHourService.postRecord(t).subscribe((function(t){alert("Registro agregado satisfactoriamente, "+t.aux_hour_id+", "+t.aux_hour_name),e.action.temp=[t],e.action.action="afterCreatedRecord",e.editAnswer.emit(e.action)}),(function(t){console.error("Error",t),e.show_data=!1,e.onError(t)}))},t.prototype.afterCreatedRecord=function(t){},t.prototype.editRecord=function(t){var e=this;this.auxHourService.putRecord(t).subscribe((function(t){e.selection=t,e.action.temp=e.selection,alert("Registro modificado satisfactoriamente, "+e.action.temp.aux_hour_id+", "+e.action.temp.aux_hour_name),e.action.action="selectedRecord"}),(function(t){console.error("Error",t),e.show_data=!1,e.onError(t)}))},t.prototype.deleteRecord=function(t){var e=this;this.auxHourService.deleteRecord(this.action.temp.aux_hour_id).subscribe((function(t){e.selection=t,e.action.temp=e.selection,e.selection=new u.d,e.onFillForm(),alert("Registro eliminado satisfactoriamente")}),(function(t){console.error("Error",t),e.show_data=!1,e.onError(t)}))},t.prototype.onDelete=function(){this.action.action="delete",this.deleteRecord(this.action.temp)},t.prototype.onDeactivate=function(){this.selection=this.action.temp,this.selection.aux_hour_status="I",this.onFillForm(),this.show_submit_button=!0},t.prototype.onReactivate=function(){this.selection=this.action.temp,this.selection.aux_hour_status="A",this.onFillForm(),this.show_submit_button=!0},t.prototype.onReset=function(){this.selection=new u.d,this.action.temp=this.selection,this.onFillForm()},t.prototype.onShowDetail=function(){this.action.action="showRecord"},t.prototype.onEditRecord=function(){this.action.action="editRecord",this.selection=this.action.temp,this.onFillForm()},t.prototype.afterEditedRecord=function(t){this.action.action="afterEditedRecord",this.action.temp=[t],this.editAnswer.emit(this.action)},t.prototype.onCancel=function(){this.action={action:"cancel",temp:""},this.editAnswer.emit(this.action)},t.prototype.onAction=function(){this.action={action:"edit_box",temp:""},this.editAnswer.emit(this.action)},t.prototype.onSubmit=function(t){"newRecord"===this.action.action&&(this.createRecord(t),this.afterCreatedRecord(t)),"editRecord"===this.action.action&&(this.selection=t,this.editRecord(t),this.afterEditedRecord(t)),"deleteRecord"===this.action.action&&(this.selection=t,this.deleteRecord(t),this.action.temp=t,this.editAnswer.emit(this.action)),"showRecord"===this.action.action&&(this.selection=t,this.action.temp=t,this.editAnswer.emit(this.action))},t.prototype.onError=function(t){this.alertService.error(t.status),this.alertMessage.alertTitle="Error del servidor",this.alertMessage.alertText=t.statusText,this.alertMessage.alertShow=!0,this.alertMessage.alertClass="alert alert-danger alert-dismissible fade show"},t.prototype.sendTest=function(){this.action.action="test",this.action.temp=[{aux_hour_id:2,aux_hour_name:"Supervisor 008",aux_hour_status:"A"}],this.editAnswer.emit(this.action)},t.ɵfac=function(e){return new(e||t)(o.hc(r.c),o.hc(h.d),o.hc(h.a),o.hc(h.g))},t.ɵcmp=o.bc({type:t,selectors:[["app-crud-aux-hour-detail"]],inputs:{action:"action"},outputs:{editAnswer:"editAnswer"},decls:2,vars:2,consts:[[3,"alertMessage"],["id","register","class","register",4,"ngIf"],["id","register",1,"register"],[1,"card","mt-3"],[1,"card-body"],[1,"h2","mb-3","font-weight-normal","text-center"],[3,"formGroup"],[1,"register-form"],["id","aux_hour_id",1,"form-group"],[1,"register-label"],[4,"ngIf"],["type","text","formControlName","aux_hour_id","class","form-control register-input disabled",3,"ngClass",4,"ngIf"],["class","register-error",4,"ngIf"],["id","aux_hour_status",1,"form-group"],["type","text","formControlName","aux_hour_status","class","form-control register-input",3,"ngClass",4,"ngIf"],["id","aux_hour_name",1,"form-group"],["type","text","formControlName","aux_hour_name","class","form-control register-input",3,"ngClass",4,"ngIf"],["id","aux_hour_value",1,"form-group"],["type","text","formControlName","aux_hour_value","class","form-control register-input",3,"ngClass",4,"ngIf"],[1,"form-group","mt-3","mb-0","mr-auto","register-button-group"],["type","button",1,"btn","btn-warning","register-button",3,"click"],["type","button","class","btn btn-secondary  register-button",3,"click",4,"ngIf"],["type","button","class","btn btn-danger  register-button",3,"click",4,"ngIf"],["type","button","class","btn btn-primary  register-button",3,"click",4,"ngIf"],[1,"register-detail"],["type","text","formControlName","aux_hour_id",1,"form-control","register-input","disabled",3,"ngClass"],[1,"register-error"],["type","text","formControlName","aux_hour_status",1,"form-control","register-input",3,"ngClass"],["type","text","formControlName","aux_hour_name",1,"form-control","register-input",3,"ngClass"],["type","text","formControlName","aux_hour_value",1,"form-control","register-input",3,"ngClass"],["type","button",1,"btn","btn-secondary","register-button",3,"click"],["type","button",1,"btn","btn-danger","register-button",3,"click"],["type","button",1,"btn","btn-primary","register-button",3,"click"],["type","button",1,"btn","btn-success","register-button",3,"click"]],template:function(t,e){1&t&&(o.ic(0,"app-alert",0),o.bd(1,Z,43,22,"section",1)),2&t&&(o.Ic("alertMessage",e.alertMessage),o.Tb(1),o.Ic("ngIf",e.action&&e.show_data))},directives:[f.a,i.m,r.r,r.k,r.e,r.b,r.j,r.d,i.k],styles:[".register[_ngcontent-%COMP%]{min-width:1000px}.register-form[_ngcontent-%COMP%]{background:#add8e6;padding:1rem;display:grid;grid-template-columns:1fr 1fr 1fr 1fr;grid-gap:1rem}.register-error[_ngcontent-%COMP%]{color:red;font-size:.8rem}.register-label[_ngcontent-%COMP%]{padding:0;font-size:1rem;color:#00008b;margin-top:1px}.register-selector[_ngcontent-%COMP%]{color:red;width:150px;font-size:1rem;margin-bottom:0}.register-input[_ngcontent-%COMP%]{font-size:1rem;font-weight:700;margin-bottom:0;box-shadow:0 4px 8px 0 rgba(0,0,0,.2),0 6px 20px 0 rgba(0,0,0,.19)}.register-detail[_ngcontent-%COMP%]{min-height:40px;font-size:1rem;margin-bottom:0;background:#161638;color:#fff;padding:5px;box-shadow:0 4px 8px 0 rgba(0,0,0,.2),0 6px 20px 0 rgba(0,0,0,.19)}.register-button-group[_ngcontent-%COMP%]{display:flex;flex-direction:row}.register-button[_ngcontent-%COMP%]{font-size:1.1rem;margin-left:3px}.register-login-text[_ngcontent-%COMP%]{padding:5px;font-size:1.1rem}.main[_ngcontent-%COMP%]{margin:10px}@media screen and (max-width:576px){.register-form[_ngcontent-%COMP%]{padding:1rem;display:grid;grid-template-columns:1fr;grid-gap:1rem}}.submenu[_ngcontent-%COMP%]{display:grid;grid-template-columns:2fr 4fr;grid-gap:1rem}.submenu-btn[_ngcontent-%COMP%]{font-size:.8rem;margin:10px;padding:2px 10px}.submenu-buttons[_ngcontent-%COMP%]{display:flex;justify-content:flex-start}.submenu-buttons2[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr 1fr 1fr 1fr 1fr 1fr 1fr;grid-gap:1rem}"]}),t}();function Q(t,e){if(1&t){var n=o.oc();o.nc(0,"a",13),o.zc("click",(function(){return o.Uc(n),o.Dc().onNewRecord()})),o.dd(1," Nuevo"),o.mc()}}function W(t,e){if(1&t){var n=o.oc();o.nc(0,"a",5),o.zc("click",(function(){return o.Uc(n),o.Dc().onShowDetail()})),o.dd(1,"Detalle"),o.mc()}}function X(t,e){if(1&t){var n=o.oc();o.nc(0,"a",13),o.zc("click",(function(){return o.Uc(n),o.Dc().onEditRecord()})),o.dd(1," Editar"),o.mc()}}function Y(t,e){if(1&t){var n=o.oc();o.nc(0,"section"),o.nc(1,"app-crud-aux-hour-list",14),o.zc("listAnswer",(function(t){return o.Uc(n),o.Dc().onlistAnswer(t)})),o.mc(),o.mc()}if(2&t){var i=o.Dc();o.Tb(1),o.Ic("rows",i.rows)("numberOfRowsInTable",i.numberOfRowsInTable)("show_datatable",i.show_datatable)("action",i.action)}}function $(t,e){if(1&t){var n=o.oc();o.nc(0,"section"),o.nc(1,"app-crud-aux-hour-detail",15),o.zc("editAnswer",(function(t){return o.Uc(n),o.Dc().onlistAnswer(t)})),o.mc(),o.mc()}if(2&t){var i=o.Dc();o.Tb(1),o.Ic("action",i.action)}}var tt=function(){function t(t,e,n){this.auxHourService=t,this.alertService=e,this.envService=n,this.newCreateRecord=new o.t,this.mainAnswer=new o.t,this.error_detected=!1,this.model=new u.d,this.alertMessage=new u.b,this.show_data=!0,this.show_datatable=!0,this.show_new_button=!0,this.show_selected_button=!1,this.selection=new u.d,this.action=new u.a,this.status_field="aux_hour_status",this.excel_subtitle="horas",this.selected=[{selected:new u.d}],this.rowsInTableList=[{id:1,value:1},{id:10,value:10},{id:15,value:15}],this.numberOfRowsInTable={id:10,value:10},this.filterFieldList=this.selection.fieldList(),this.selectedFilterField={field_name:"aux_hour_name",name:"nombre",text:"nombre"}}return t.prototype.ngOnInit=function(){this.onGetActive()},t.prototype.onlistAnswer=function(t){t&&(this.selection=t,this.show_selected_button=!0),"cancel"===t.action&&this.onCancel(t),"afterCreatedRecord"===t.action&&this.onAfterCreatedRecord(t),"afterEditedRecord"===t.action&&this.onAfterEditedRecord(t),"editRecord"===t.action&&this.onFindById(t),"delete"===t.action&&this.onCancel(t),"test"===t.action&&this.test(t)},t.prototype.getAll_Records=function(t){var e=this;this.auxHourService.getAllRecords(t).subscribe((function(t){e.rows_original=t,e.rows=t,e.alertMessage=new u.b,e.show_data=!0}),(function(t){e.show_data=!1,e.onError(t)}))},t.prototype.getSingle_Record=function(t){var e=this;this.rows=[t.temp],this.auxHourService.getRecordById(t.temp.aux_hour_id).subscribe((function(t){var n=[t];e.rows_original=n,e.rows=n,e.action.temp=n,e.alertMessage=new u.b,e.show_data=!0}),(function(t){e.show_data=!1,e.onError(t)}))},t.prototype.onGetActive=function(t){this.show_datatable=!0,this.show_selected_button=!1,this.selection=new u.d,this.query='{"where":{"'+this.status_field+'":"A"}}',this.getAll_Records(this.query)},t.prototype.onGetInactive=function(t){this.show_datatable=!0,this.show_selected_button=!1,this.selection=new u.d,this.query='{"where":{"'+this.status_field+'":"I"}}',this.getAll_Records(this.query)},t.prototype.onGetAll=function(t){this.show_datatable=!0,this.show_selected_button=!1,this.selection=new u.d,this.query="",this.getAll_Records(this.query)},t.prototype.onNewRecord=function(t){this.show_datatable=!1,this.show_selected_button=!1,this.action.action="newRecord",this.action.temp=new u.d},t.prototype.onAfterCreatedRecord=function(t){this.rows=t.temp,this.show_datatable=!0},t.prototype.onEditRecord=function(t){this.show_datatable=!1,this.action.action="editRecord"},t.prototype.onAfterEditedRecord=function(t){this.rows=t.temp,this.show_datatable=!0},t.prototype.onShowDetail=function(t){this.show_datatable=!1,this.action.action="showRecord"},t.prototype.onItemListSelected=function(t){this.show_datatable=!0,this.numberOfRowsInTable=t},t.prototype.onFilterFieldList=function(){this.action={action:"numberOfRowsInTable",temp:{lines:this.numberOfRowsInTable}},this.onGetAll()},t.prototype.onCancel=function(t){event&&(this.show_datatable=!this.show_datatable,this.onGetActive())},t.prototype.onUpdateFilter=function(t){this.show_datatable=!0;var e=Object(l.c)(t,this.rows,this.rows_original,this.selectedFilterField.field_name);this.rows=e},t.prototype.onFindById=function(t){this.getSingle_Record(t),this.action.action="selectedRecord",this.show_datatable=!0},t.prototype.onActivate=function(t){},t.prototype.onSelect=function(t){this.show_selected_button=!0,this.selection=t.selected[0]},t.prototype.onError=function(t){this.alertService.error(t.status),this.alertMessage.alertTitle="Error del servidor",this.alertMessage.alertText=t.statusText,this.alertMessage.alertShow=!0,this.alertMessage.alertClass="alert alert-danger alert-dismissible fade show"},t.prototype.onExportToExcel=function(t,e){this.show_datatable=!0,this.model.fieldInfo("aux_hour_value"),t.map((function(t){return{id:t.aux_hour_id,nombre:t.aux_hour_name,valor:t.aux_hour_value,estatus:t.aux_hour_status}}))},t.prototype.test=function(t){this.rows=t.temp,this.show_datatable=!0},t.ɵfac=function(e){return new(e||t)(o.hc(h.d),o.hc(h.a),o.hc(h.g))},t.ɵcmp=o.bc({type:t,selectors:[["app-crud-aux-hour"]],outputs:{newCreateRecord:"newCreateRecord",mainAnswer:"mainAnswer"},decls:28,vars:15,consts:[[3,"alertMessage"],[1,"main"],["id","submenu",1,"submenu"],[1,"submenu-buttons"],[1,"btn","btn-secondary","submenu-btn","text-white",3,"click"],[1,"btn","btn-outline-primary","submenu-btn",3,"click"],["class","btn btn-outline-success submenu-btn",3,"click",4,"ngIf"],["class","btn btn-outline-primary submenu-btn",3,"click",4,"ngIf"],["id","right-menu",1,"submenu-buttons","ml-auto"],["bindLabel","name","hideSelected","true","placeholder","items-",3,"items","clearable","dropdownPosition","ngModel","change","ngModelChange"],["type","text","placeholder","Buscar...",3,"ngModel","ngModelChange","keyup"],["bindLabel","value","hideSelected","true","placeholder","items-",3,"items","clearable","dropdownPosition","ngModel","ngModelChange"],[4,"ngIf"],[1,"btn","btn-outline-success","submenu-btn",3,"click"],[3,"rows","numberOfRowsInTable","show_datatable","action","listAnswer"],[3,"action","editAnswer"]],template:function(t,e){1&t&&(o.ic(0,"app-alert",0),o.nc(1,"main",1),o.nc(2,"section",2),o.nc(3,"article",3),o.nc(4,"div"),o.nc(5,"a",4),o.zc("click",(function(){return e.onGetAll()})),o.dd(6,"Horas"),o.mc(),o.mc(),o.nc(7,"div"),o.nc(8,"a",5),o.zc("click",(function(){return e.onGetActive()})),o.dd(9,"Activos"),o.mc(),o.mc(),o.nc(10,"div"),o.nc(11,"a",5),o.zc("click",(function(){return e.onGetInactive()})),o.dd(12,"Inactivos"),o.mc(),o.mc(),o.nc(13,"div"),o.nc(14,"a",5),o.zc("click",(function(){return e.onGetAll()})),o.dd(15,"Todos"),o.mc(),o.mc(),o.nc(16,"div"),o.bd(17,Q,2,0,"a",6),o.mc(),o.nc(18,"div"),o.bd(19,W,2,0,"a",7),o.mc(),o.nc(20,"div"),o.bd(21,X,2,0,"a",6),o.mc(),o.mc(),o.nc(22,"article",8),o.nc(23,"ng-select",9),o.zc("change",(function(){return e.onFilterFieldList()}))("ngModelChange",(function(t){return e.selectedFilterField=t})),o.mc(),o.nc(24,"input",10),o.zc("ngModelChange",(function(t){return e.findInList=t}))("keyup",(function(){return e.onUpdateFilter(e.findInList)})),o.mc(),o.nc(25,"ng-select",11),o.zc("ngModelChange",(function(t){return e.numberOfRowsInTable=t})),o.mc(),o.mc(),o.mc(),o.mc(),o.bd(26,Y,2,4,"section",12),o.bd(27,$,2,1,"section",12)),2&t&&(o.Ic("alertMessage",e.alertMessage),o.Tb(17),o.Ic("ngIf",e.show_new_button),o.Tb(2),o.Ic("ngIf",e.show_selected_button),o.Tb(2),o.Ic("ngIf",e.show_selected_button),o.Tb(2),o.Ic("items",e.filterFieldList)("clearable",!1)("dropdownPosition","bottom")("ngModel",e.selectedFilterField),o.Tb(1),o.Ic("ngModel",e.findInList),o.Tb(1),o.Ic("items",e.rowsInTableList)("clearable",!1)("dropdownPosition","bottom")("ngModel",e.numberOfRowsInTable),o.Tb(1),o.Ic("ngIf",e.show_datatable&&e.show_data),o.Tb(1),o.Ic("ngIf",!e.show_datatable&&e.show_data))},directives:[f.a,i.m,a.a,r.j,r.m,r.b,R,K],styles:[".submenu[_ngcontent-%COMP%]{display:grid;grid-template-columns:2fr 1fr;font-size:1rem}.submenu-buttons[_ngcontent-%COMP%]{display:flex;flex-direction:row}.submenu-brand[_ngcontent-%COMP%]{font-size:1rem;color:#007bff}.submenu-btn[_ngcontent-%COMP%]{font-size:1rem;margin-right:3px}.main[_ngcontent-%COMP%]{margin:10px}.datatable[_ngcontent-%COMP%]{margin-top:10px}"]}),t}(),et=[{path:"",component:tt,children:[{path:"",redirectTo:"menu"},{path:"menu",component:tt}]}],nt=function(){function t(){}return t.ɵmod=o.fc({type:t}),t.ɵinj=o.ec({factory:function(e){return new(e||t)},imports:[[d.f.forChild(et)],d.f]}),t}();n.d(e,"CrudAuxHourModule",(function(){return ot}));var ot=function(){function t(){}return t.ɵmod=o.fc({type:t}),t.ɵinj=o.ec({factory:function(e){return new(e||t)},imports:[[i.c,c.e,a.b,r.f,r.o,s.a,nt]]}),t}()}}]);
//# sourceMappingURL=8.88119912e98007ce4ce9.js.map