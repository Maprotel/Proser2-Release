(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{Sjhs:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return DisplayAutomaticListComponent}));var rxjs__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("bwdy"),rxjs__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("8lHc"),moment__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("wgY5"),moment__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__),shared_functions__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("j2Hr"),shared_models_helpers_Alert__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("LgNh"),shared_models__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("k5pS"),shared_services__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("IXvK"),projects_view_src_shared_models___WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("KUDs"),projects_view_src_shared_services___WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("lSgf");class DisplayAutomaticListComponent{constructor(e,t,s,i,l){this.displayAutomaticIndicatorsService=e,this.alertService=t,this.envService=s,this.modalService=i,this.userSelectionService=l,this.subscription=new rxjs__WEBPACK_IMPORTED_MODULE_0__.a,this.alertMessage=new shared_models_helpers_Alert__WEBPACK_IMPORTED_MODULE_4__.a,this.show_columns=!1,this.show=!1,this.selected=[],this.historic=!1,this.graph=!1,this.show_graph_or_table_button=!1,this.env=s,this.model=new projects_view_src_shared_models___WEBPACK_IMPORTED_MODULE_7__.a,this.local_store="assignation",this.selectorVisibleFields=new shared_models__WEBPACK_IMPORTED_MODULE_5__.b("visible"),this.selectorVisibleFields.assignation=!1,this.selectorVisibleFields.auxiliar=!1,this.currentDate=moment__WEBPACK_IMPORTED_MODULE_2__(new Date).format("YYYY-MM-DD"),this.rows=new projects_view_src_shared_models___WEBPACK_IMPORTED_MODULE_7__.b,this.rows_original=new projects_view_src_shared_models___WEBPACK_IMPORTED_MODULE_7__.b}ngOnInit(){this.displayUserSelection=new shared_models__WEBPACK_IMPORTED_MODULE_5__.b("standard"),this.getReportList(this.displayUserSelection),this.filterFieldList=this.model.fieldList(),this.numberOfRowsInTable={id:10,value:10},this.exportName="reporte-conexi\xf3n",this.initialSelectedFilterField={field_name:"start_date",name:"fecha_inicio",text:"Fecha desde"},this.onRepeat()}ngOnDestroy(){this.userSelectionService.writeUserSelectionHistoric(this.displayUserSelection),this.subscription.unsubscribe()}onRepeat(){const e=Object(rxjs__WEBPACK_IMPORTED_MODULE_1__.a)(1e3,5e3),t=Object(rxjs__WEBPACK_IMPORTED_MODULE_1__.a)(1e3,1e3);this.getReportList(this.displayUserSelection),this.subscription.add(e.subscribe(()=>{Object(shared_functions__WEBPACK_IMPORTED_MODULE_3__.c)(this.displayUserSelection.start_date)===this.currentDate&&this.getReportList(this.displayUserSelection)})),t.subscribe(()=>{this.timerConnected=this.timerConnected+1})}getReportList(e){e&&this.displayAutomaticIndicatorsService.getReportList(e).subscribe(t=>{this.timerConnected=0,this.historic=this.currentDate!==Object(shared_functions__WEBPACK_IMPORTED_MODULE_3__.c)(e.start_date),t?this.rows=t:console.error("Error",t),this.alertMessage=new shared_models_helpers_Alert__WEBPACK_IMPORTED_MODULE_4__.a},e=>{console.error("Error",e),this.show=!1,this.alertService.error(e.status),this.alertMessage.alertTitle="Error del servidor",this.alertMessage.alertText=e.statusText,this.alertMessage.alertShow=!0,this.alertMessage.alertClass="alert alert-danger alert-dismissible fade show"})}openDetailModal(e,t){this.activeModal=this.modalService.open(e,{windowClass:"my-class",keyboard:!1})}onShowHideGraphButtons(){this.graph=!this.graph,this.show_graph_or_table_button=!this.show_graph_or_table_button}onActivate(e){this.row_selection=e.row}onSelect(e){this.selected=e.selected}onReturnHeaderResult(e){this.displayUserSelection=new shared_models__WEBPACK_IMPORTED_MODULE_5__.b("standard"),this.getReportList(this.displayUserSelection),this.show_graph_or_table_button=!1}onRecalculate(e){this.displayUserSelection=new shared_models__WEBPACK_IMPORTED_MODULE_5__.b("standard"),this.getReportList(this.displayUserSelection),this.show_graph_or_table_button=!1,console.error("this.rows",this.rows)}onReturnNumberOfRowsInTable(e){console.error("event",e),this.numberOfRowsInTable=e}onReturnRowsForTable(e){this.rows=e}onObjectToArray(e){let t,s=e[0];return void 0!==s&&(t=Object.entries(s).map(([e,t])=>({key:e,value:t}))),t}onCreateModel(model){model=(new projects_view_src_shared_models___WEBPACK_IMPORTED_MODULE_7__.a).fieldList(),console.error("model",model);let obj={};model.map(e=>{obj[`${e.name}`]="x."+e.field_name});let newModel=JSON.stringify(obj),newModel2=JSON.stringify(newModel.replace(/\"/g,"").replace(/:/g,": ").replace(/,/g,",\n ")),model3=eval(newModel2);console.error("model",model3)}openModal(e){}}},"t0Y/":function(e,t,s){"use strict";s.r(t);var i=s("kZht"),l=s("An66"),_=s("PJLp"),r=s.n(_);Object(l.registerLocaleData)(r.a,"es");class o{}var a=s("ET8j"),n=s("C9Ky"),d=s("5Ofn"),c=s("Uj1/"),p=s("hlL8"),u=s("aymL"),h=s("78Vo"),m=s("w7wT"),E=s("XtjK"),b=s("Sjhs"),w=s("+HTv"),M=s("phxf"),D=i["\u0275crt"]({encapsulation:0,styles:[[""]],data:{}});function O(e){return i["\u0275vid"](0,[(e()(),i["\u0275eld"](0,0,null,null,2,"div",[],null,null,null,null,null)),(e()(),i["\u0275eld"](1,0,null,null,1,"app-alert",[],null,null,null,d.b,d.a)),i["\u0275did"](2,114688,null,0,c.a,[],{alertMessage:[0,"alertMessage"]},null),(e()(),i["\u0275eld"](3,0,null,null,1,"app-display-display-header",[],null,[[null,"returnResult"]],(function(e,t,s){var i=!0;return"returnResult"===t&&(i=!1!==e.component.onReturnHeaderResult(s)&&i),i}),p.b,p.a)),i["\u0275did"](4,114688,null,0,u.a,[h.a,m.w,E.a],{userSelection:[0,"userSelection"],selectorVisibleFields:[1,"selectorVisibleFields"],timerConnected:[2,"timerConnected"]},{returnResult:"returnResult"})],(function(e,t){var s=t.component;e(t,2,0,s.alertMessage),e(t,4,0,s.displayUserSelection,s.selectorVisibleFields,s.timerConnected)}),null)}s("IXvK");var g=s("k5pS");class v{constructor(e,t,s){this.alertService=e,this.envService=t,this.userSelectionService=s,this.displayUserSelection=new g.b("standard"),this.selectorVisibleFields=new g.b("visible"),this.title="Display llamadas marcador autom\xe1tico"}ngOnInit(){this.displayUserSelection.title!==this.title&&this.setReportTitles()}setReportTitles(){this.displayUserSelection.title=this.title,this.userSelectionService.writeUserSelectionHistoric(this.displayUserSelection),this.selectorVisibleFields.assignation=!1,this.selectorVisibleFields.auxiliar=!1}}var R=i["\u0275crt"]({encapsulation:0,styles:[[""]],data:{}});function S(e){return i["\u0275vid"](0,[(e()(),i["\u0275eld"](0,0,null,null,1,"app-display-display-automatic-list",[],null,null,null,O,D)),i["\u0275did"](1,245760,null,0,b.a,[w.a,M.a,h.a,m.w,E.a],{displayUserSelection:[0,"displayUserSelection"],selectorVisibleFields:[1,"selectorVisibleFields"]},null)],(function(e,t){var s=t.component;e(t,1,0,s.displayUserSelection,s.selectorVisibleFields)}),null)}function P(e){return i["\u0275vid"](0,[(e()(),i["\u0275eld"](0,0,null,null,1,"app-display-display-automatic",[],null,null,null,S,R)),i["\u0275did"](1,114688,null,0,v,[M.a,h.a,E.a],null,null)],(function(e,t){e(t,1,0)}),null)}var C=i["\u0275ccf"]("app-display-display-automatic",v,P,{},{},[]),L=s("3kIJ"),U=s("NuYi"),y=s("K9jP"),T=s("Uw3X"),I=s("ruJL"),A=s("Z4LD"),f=s("uEFD"),K=s("Xsav"),j=s("1VvW"),B=s("XhJS"),W=s("em0t"),F=s("9o7S"),k=s("HDHg");class x{}s.d(t,"DisplayAutomaticModuleNgFactory",(function(){return q}));var q=i["\u0275cmf"](o,[],(function(e){return i["\u0275mod"]([i["\u0275mpd"](512,i.ComponentFactoryResolver,i["\u0275CodegenComponentFactoryResolver"],[[8,[a.a,a.b,a.h,a.i,a.e,a.f,a.g,n.a,C]],[3,i.ComponentFactoryResolver],i.NgModuleRef]),i["\u0275mpd"](4608,l.NgLocalization,l.NgLocaleLocalization,[i.LOCALE_ID,[2,l["\u0275angular_packages_common_common_a"]]]),i["\u0275mpd"](4608,L.q,L.q,[]),i["\u0275mpd"](4608,L.d,L.d,[]),i["\u0275mpd"](4608,m.w,m.w,[i.ComponentFactoryResolver,i.Injector,m.gb,m.x]),i["\u0275mpd"](4608,U.ScrollbarHelper,U.ScrollbarHelper,[l.DOCUMENT]),i["\u0275mpd"](4608,y.DimensionsHelper,y.DimensionsHelper,[]),i["\u0275mpd"](4608,T.ColumnChangesService,T.ColumnChangesService,[]),i["\u0275mpd"](1073742336,l.CommonModule,l.CommonModule,[]),i["\u0275mpd"](1073742336,I.a,I.a,[]),i["\u0275mpd"](1073742336,L.p,L.p,[]),i["\u0275mpd"](1073742336,L.g,L.g,[]),i["\u0275mpd"](1073742336,L.n,L.n,[]),i["\u0275mpd"](1073742336,m.d,m.d,[]),i["\u0275mpd"](1073742336,m.g,m.g,[]),i["\u0275mpd"](1073742336,m.h,m.h,[]),i["\u0275mpd"](1073742336,m.l,m.l,[]),i["\u0275mpd"](1073742336,m.m,m.m,[]),i["\u0275mpd"](1073742336,m.s,m.s,[]),i["\u0275mpd"](1073742336,m.t,m.t,[]),i["\u0275mpd"](1073742336,m.y,m.y,[]),i["\u0275mpd"](1073742336,m.C,m.C,[]),i["\u0275mpd"](1073742336,m.F,m.F,[]),i["\u0275mpd"](1073742336,m.I,m.I,[]),i["\u0275mpd"](1073742336,m.L,m.L,[]),i["\u0275mpd"](1073742336,m.O,m.O,[]),i["\u0275mpd"](1073742336,m.S,m.S,[]),i["\u0275mpd"](1073742336,m.T,m.T,[]),i["\u0275mpd"](1073742336,m.U,m.U,[]),i["\u0275mpd"](1073742336,m.z,m.z,[]),i["\u0275mpd"](1073742336,A.c,A.c,[]),i["\u0275mpd"](1073742336,f.NgxDatatableModule,f.NgxDatatableModule,[]),i["\u0275mpd"](1073742336,K.a,K.a,[]),i["\u0275mpd"](1073742336,j.o,j.o,[[2,j.t],[2,j.l]]),i["\u0275mpd"](1073742336,B.a,B.a,[]),i["\u0275mpd"](1073742336,W.a,W.a,[]),i["\u0275mpd"](1073742336,F.a,F.a,[]),i["\u0275mpd"](1073742336,k.a,k.a,[]),i["\u0275mpd"](1073742336,x,x,[]),i["\u0275mpd"](1073742336,o,o,[]),i["\u0275mpd"](256,i.LOCALE_ID,"es",[]),i["\u0275mpd"](256,A.d,A.e,[]),i["\u0275mpd"](1024,j.j,(function(){return[[{path:"",component:v,children:[]}]]}),[])])}))}}]);