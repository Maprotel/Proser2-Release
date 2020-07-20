(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{Q11i:function(e,_,t){"use strict";t.r(_);var s=t("8AiQ"),i=t("PJLp"),o=t.n(i),r=t("1C3z"),n=t("ruJL"),a=t("ZSGP"),c=t("8qUp"),l=t("BYtS"),u=t("aLj8"),p=t("JjjS"),d=t("9o7S"),E=t("HDHg"),h=t("5/c3"),D=t("k5pS"),m=t("IXvK"),M=t("uu6c"),O=[{path:"",component:function(){function e(e,_,t){this.alertService=e,this.envService=_,this.userSelectionService=t,this.userSelection=new D.b("standard"),this.selectorVisibleFields=new D.b("visible"),this.title="Display llamadas marcador automático"}return e.prototype.ngOnInit=function(){this.userSelection.title!==this.title&&this.setReportTitles()},e.prototype.setReportTitles=function(){this.userSelection.title=this.title,this.userSelectionService.writeUserSelectionHistoric(this.userSelection),this.selectorVisibleFields.assignation=!1,this.selectorVisibleFields.auxiliar=!1},e.ɵfac=function(_){return new(_||e)(r.hc(m.a),r.hc(m.c),r.hc(m.d))},e.ɵcmp=r.bc({type:e,selectors:[["app-display-display-automatic"]],decls:1,vars:2,consts:[[3,"userSelection","selectorVisibleFields"]],template:function(e,_){1&e&&r.ic(0,"app-display-display-automatic-list",0),2&e&&r.Jc("userSelection",_.userSelection)("selectorVisibleFields",_.selectorVisibleFields)},directives:[M.a],styles:[""]}),e}(),children:[]}],P=function(){function e(){}return e.ɵmod=r.fc({type:e}),e.ɵinj=r.ec({factory:function(_){return new(_||e)},imports:[[h.e.forChild(O)],h.e]}),e}();t.d(_,"DisplayAutomaticModule",(function(){return L})),Object(s.C)(o.a,"es");var L=function(){function e(){}return e.ɵmod=r.fc({type:e}),e.ɵinj=r.ec({factory:function(_){return new(_||e)},providers:[{provide:r.F,useValue:"es"}],imports:[[s.c,n.a,a.f,a.o,u.d.forRoot(),p.b,l.e,c.b,d.a,E.a,P]]}),e}()},uu6c:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return DisplayAutomaticListComponent}));var _angular_core__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("1C3z"),rxjs__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("LR82"),rxjs__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("0cIN"),moment__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("wgY5"),moment__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__),shared_functions__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("j2Hr"),shared_models_helpers_Alert__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("LgNh"),shared_models__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("k5pS"),sections_display_src_shared_models___WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("KUDs"),sections_display_src_shared_services___WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("lSgf"),shared_services__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("IXvK"),_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__("aLj8"),_shared_modules_alert_alert_component__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__("Uj1/"),_shared_modules_display_header_display_header_component__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__("aymL"),DisplayAutomaticListComponent=function(){function DisplayAutomaticListComponent(e,_,t,s,i){this.displayAutomaticIndicatorsService=e,this.alertService=_,this.envService=t,this.modalService=s,this.userSelectionService=i,this.subscription=new rxjs__WEBPACK_IMPORTED_MODULE_1__.a,this.alertMessage=new shared_models_helpers_Alert__WEBPACK_IMPORTED_MODULE_5__.a,this.show_columns=!1,this.show=!1,this.selected=[],this.historic=!1,this.graph=!1,this.show_graph_or_table_button=!1,this.env=t,this.model=new sections_display_src_shared_models___WEBPACK_IMPORTED_MODULE_7__.c,this.local_store="assignation",this.selectorVisibleFields=new shared_models__WEBPACK_IMPORTED_MODULE_6__.b("visible"),this.selectorVisibleFields.assignation=!1,this.selectorVisibleFields.auxiliar=!1,this.currentDate=moment__WEBPACK_IMPORTED_MODULE_3__(new Date).format("YYYY-MM-DD"),this.rows=new sections_display_src_shared_models___WEBPACK_IMPORTED_MODULE_7__.d,this.rows_original=new sections_display_src_shared_models___WEBPACK_IMPORTED_MODULE_7__.d}return DisplayAutomaticListComponent.prototype.ngOnInit=function(){this.userSelection=new shared_models__WEBPACK_IMPORTED_MODULE_6__.b("standard"),this.getReportList(this.userSelection),this.filterFieldList=this.model.fieldList(),this.numberOfRowsInTable={id:10,value:10},this.exportName="reporte-conexión",this.initialSelectedFilterField={field_name:"start_date",name:"fecha_inicio",text:"Fecha desde"},this.onRepeat()},DisplayAutomaticListComponent.prototype.ngOnDestroy=function(){this.userSelectionService.writeUserSelectionHistoric(this.userSelection),this.subscription.unsubscribe()},DisplayAutomaticListComponent.prototype.onRepeat=function(){var e=this,_=Object(rxjs__WEBPACK_IMPORTED_MODULE_2__.a)(1e3,5e3),t=Object(rxjs__WEBPACK_IMPORTED_MODULE_2__.a)(1e3,1e3);this.getReportList(this.userSelection),this.subscription.add(_.subscribe((function(){Object(shared_functions__WEBPACK_IMPORTED_MODULE_4__.c)(e.userSelection.start_date)===e.currentDate&&e.getReportList(e.userSelection)}))),t.subscribe((function(){e.timerConnected=e.timerConnected+1}))},DisplayAutomaticListComponent.prototype.getReportList=function(e){var _=this;e&&this.displayAutomaticIndicatorsService.getReportList(e).subscribe((function(t){_.timerConnected=0,_.historic=_.currentDate!==Object(shared_functions__WEBPACK_IMPORTED_MODULE_4__.c)(e.start_date),t?_.rows=t:console.error("Error",t),_.alertMessage=new shared_models_helpers_Alert__WEBPACK_IMPORTED_MODULE_5__.a}),(function(e){console.error("Error",e),_.show=!1,_.alertService.error(e.status),_.alertMessage.alertTitle="Error del servidor",_.alertMessage.alertText=e.statusText,_.alertMessage.alertShow=!0,_.alertMessage.alertClass="alert alert-danger alert-dismissible fade show"}))},DisplayAutomaticListComponent.prototype.openDetailModal=function(e,_){this.activeModal=this.modalService.open(e,{windowClass:"my-class",keyboard:!1})},DisplayAutomaticListComponent.prototype.onShowHideGraphButtons=function(){this.graph=!this.graph,this.show_graph_or_table_button=!this.show_graph_or_table_button},DisplayAutomaticListComponent.prototype.onActivate=function(e){this.row_selection=e.row},DisplayAutomaticListComponent.prototype.onSelect=function(e){this.selected=e.selected},DisplayAutomaticListComponent.prototype.onReturnHeaderResult=function(e){this.userSelection=new shared_models__WEBPACK_IMPORTED_MODULE_6__.b("standard"),this.getReportList(this.userSelection),this.show_graph_or_table_button=!1},DisplayAutomaticListComponent.prototype.onRecalculate=function(e){this.userSelection=new shared_models__WEBPACK_IMPORTED_MODULE_6__.b("standard"),this.getReportList(this.userSelection),this.show_graph_or_table_button=!1,console.error("this.rows",this.rows)},DisplayAutomaticListComponent.prototype.onReturnNumberOfRowsInTable=function(e){console.error("event",e),this.numberOfRowsInTable=e},DisplayAutomaticListComponent.prototype.onReturnRowsForTable=function(e){this.rows=e},DisplayAutomaticListComponent.prototype.onObjectToArray=function(e){var _,t=e[0];return void 0!==t&&(_=Object.entries(t).map((function(e){return{key:e[0],value:e[1]}}))),_},DisplayAutomaticListComponent.prototype.onCreateModel=function(model){model=(new sections_display_src_shared_models___WEBPACK_IMPORTED_MODULE_7__.c).fieldList(),console.error("model",model);var obj={};model.map((function(e){obj[""+e.name]="x."+e.field_name}));var newModel=JSON.stringify(obj),newModel2=JSON.stringify(newModel.replace(/\"/g,"").replace(/:/g,": ").replace(/,/g,",\n ")),model3=eval(newModel2);console.error("model",model3)},DisplayAutomaticListComponent.prototype.openModal=function(e){},DisplayAutomaticListComponent.ɵfac=function(e){return new(e||DisplayAutomaticListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.hc(sections_display_src_shared_services___WEBPACK_IMPORTED_MODULE_8__.b),_angular_core__WEBPACK_IMPORTED_MODULE_0__.hc(shared_services__WEBPACK_IMPORTED_MODULE_9__.a),_angular_core__WEBPACK_IMPORTED_MODULE_0__.hc(shared_services__WEBPACK_IMPORTED_MODULE_9__.c),_angular_core__WEBPACK_IMPORTED_MODULE_0__.hc(_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__.c),_angular_core__WEBPACK_IMPORTED_MODULE_0__.hc(shared_services__WEBPACK_IMPORTED_MODULE_9__.d))},DisplayAutomaticListComponent.ɵcmp=_angular_core__WEBPACK_IMPORTED_MODULE_0__.bc({type:DisplayAutomaticListComponent,selectors:[["app-display-display-automatic-list"]],inputs:{userSelection:"userSelection",selectorVisibleFields:"selectorVisibleFields"},decls:3,vars:4,consts:[[3,"alertMessage"],[3,"userSelection","selectorVisibleFields","timerConnected","returnResult"]],template:function(e,_){1&e&&(_angular_core__WEBPACK_IMPORTED_MODULE_0__.nc(0,"div"),_angular_core__WEBPACK_IMPORTED_MODULE_0__.ic(1,"app-alert",0),_angular_core__WEBPACK_IMPORTED_MODULE_0__.mc(),_angular_core__WEBPACK_IMPORTED_MODULE_0__.nc(2,"app-display-display-header",1),_angular_core__WEBPACK_IMPORTED_MODULE_0__.zc("returnResult",(function(e){return _.onReturnHeaderResult(e)})),_angular_core__WEBPACK_IMPORTED_MODULE_0__.mc()),2&e&&(_angular_core__WEBPACK_IMPORTED_MODULE_0__.Tb(1),_angular_core__WEBPACK_IMPORTED_MODULE_0__.Jc("alertMessage",_.alertMessage),_angular_core__WEBPACK_IMPORTED_MODULE_0__.Tb(1),_angular_core__WEBPACK_IMPORTED_MODULE_0__.Jc("userSelection",_.userSelection)("selectorVisibleFields",_.selectorVisibleFields)("timerConnected",_.timerConnected))},directives:[_shared_modules_alert_alert_component__WEBPACK_IMPORTED_MODULE_11__.a,_shared_modules_display_header_display_header_component__WEBPACK_IMPORTED_MODULE_12__.a],styles:[""]}),DisplayAutomaticListComponent}()}}]);
//# sourceMappingURL=11.cd36d7f6c69d6862da23.js.map