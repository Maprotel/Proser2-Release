function _slicedToArray(e,t){return _arrayWithHoles(e)||_iterableToArrayLimit(e,t)||_nonIterableRest()}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function _iterableToArrayLimit(e,t){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)){var i=[],s=!0,r=!1,n=void 0;try{for(var l,o=e[Symbol.iterator]();!(s=(l=o.next()).done)&&(i.push(l.value),!t||i.length!==t);s=!0);}catch(a){r=!0,n=a}finally{try{s||null==o.return||o.return()}finally{if(r)throw n}}return i}}function _arrayWithHoles(e){if(Array.isArray(e))return e}function _defineProperties(e,t){for(var i=0;i<t.length;i++){var s=t[i];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}function _createClass(e,t,i){return t&&_defineProperties(e.prototype,t),i&&_defineProperties(e,i),e}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{PAeC:function(e,t,i){"use strict";i.r(t);var s=i("kZht"),r=i("An66"),n=i("PJLp"),l=i.n(n);Object(r.registerLocaleData)(l.a,"es");var o=function e(){_classCallCheck(this,e)},a=i("ET8j"),_=i("C9Ky"),c=i("5Ofn"),u=i("Uj1/"),d=i("hlL8"),p=i("aymL"),h=i("78Vo"),m=i("w7wT"),b=i("XtjK"),E=i("uu6c"),f=i("+HTv"),v=i("phxf"),D=s["\u0275crt"]({encapsulation:0,styles:[[""]],data:{}});function M(e){return s["\u0275vid"](0,[(e()(),s["\u0275eld"](0,0,null,null,2,"div",[],null,null,null,null,null)),(e()(),s["\u0275eld"](1,0,null,null,1,"app-alert",[],null,null,null,c.b,c.a)),s["\u0275did"](2,114688,null,0,u.a,[],{alertMessage:[0,"alertMessage"]},null),(e()(),s["\u0275eld"](3,0,null,null,1,"app-display-display-header",[],null,[[null,"returnResult"]],(function(e,t,i){var s=!0;return"returnResult"===t&&(s=!1!==e.component.onReturnHeaderResult(i)&&s),s}),d.b,d.a)),s["\u0275did"](4,114688,null,0,p.a,[h.a,m.w,b.a],{userSelection:[0,"userSelection"],selectorVisibleFields:[1,"selectorVisibleFields"],timerConnected:[2,"timerConnected"]},{returnResult:"returnResult"})],(function(e,t){var i=t.component;e(t,2,0,i.alertMessage),e(t,4,0,i.userSelection,i.selectorVisibleFields,i.timerConnected)}),null)}i("IXvK");var w=i("k5pS"),y=function(){function e(t,i,s){_classCallCheck(this,e),this.alertService=t,this.envService=i,this.userSelectionService=s,this.userSelection=new w.b("standard"),this.selectorVisibleFields=new w.b("visible"),this.title="Display llamadas marcador autom\xe1tico"}return _createClass(e,[{key:"ngOnInit",value:function(){this.userSelection.title!==this.title&&this.setReportTitles()}},{key:"setReportTitles",value:function(){this.userSelection.title=this.title,this.userSelectionService.writeUserSelectionHistoric(this.userSelection),this.selectorVisibleFields.assignation=!1,this.selectorVisibleFields.auxiliar=!1}}]),e}(),O=s["\u0275crt"]({encapsulation:0,styles:[[""]],data:{}});function C(e){return s["\u0275vid"](0,[(e()(),s["\u0275eld"](0,0,null,null,1,"app-display-display-automatic-list",[],null,null,null,M,D)),s["\u0275did"](1,245760,null,0,E.a,[f.a,v.a,h.a,m.w,b.a],{userSelection:[0,"userSelection"],selectorVisibleFields:[1,"selectorVisibleFields"]},null)],(function(e,t){var i=t.component;e(t,1,0,i.userSelection,i.selectorVisibleFields)}),null)}var g=s["\u0275ccf"]("app-display-display-automatic",y,(function(e){return s["\u0275vid"](0,[(e()(),s["\u0275eld"](0,0,null,null,1,"app-display-display-automatic",[],null,null,null,C,O)),s["\u0275did"](1,114688,null,0,y,[v.a,h.a,b.a],null,null)],(function(e,t){e(t,1,0)}),null)}),{},{},[]),L=i("3kIJ"),P=i("NuYi"),R=i("K9jP"),S=i("Uw3X"),A=i("ruJL"),T=i("Z4LD"),k=i("uEFD"),I=i("Xsav"),U=i("1VvW"),K=i("XhJS"),W=i("em0t"),B=i("9o7S"),j=i("HDHg"),F=function e(){_classCallCheck(this,e)};i.d(t,"DisplayAutomaticModuleNgFactory",(function(){return x}));var x=s["\u0275cmf"](o,[],(function(e){return s["\u0275mod"]([s["\u0275mpd"](512,s.ComponentFactoryResolver,s["\u0275CodegenComponentFactoryResolver"],[[8,[a.a,a.b,a.h,a.i,a.e,a.f,a.g,_.a,g]],[3,s.ComponentFactoryResolver],s.NgModuleRef]),s["\u0275mpd"](4608,r.NgLocalization,r.NgLocaleLocalization,[s.LOCALE_ID,[2,r["\u0275angular_packages_common_common_a"]]]),s["\u0275mpd"](4608,L.q,L.q,[]),s["\u0275mpd"](4608,L.d,L.d,[]),s["\u0275mpd"](4608,m.w,m.w,[s.ComponentFactoryResolver,s.Injector,m.gb,m.x]),s["\u0275mpd"](4608,P.ScrollbarHelper,P.ScrollbarHelper,[r.DOCUMENT]),s["\u0275mpd"](4608,R.DimensionsHelper,R.DimensionsHelper,[]),s["\u0275mpd"](4608,S.ColumnChangesService,S.ColumnChangesService,[]),s["\u0275mpd"](1073742336,r.CommonModule,r.CommonModule,[]),s["\u0275mpd"](1073742336,A.a,A.a,[]),s["\u0275mpd"](1073742336,L.p,L.p,[]),s["\u0275mpd"](1073742336,L.g,L.g,[]),s["\u0275mpd"](1073742336,L.n,L.n,[]),s["\u0275mpd"](1073742336,m.d,m.d,[]),s["\u0275mpd"](1073742336,m.g,m.g,[]),s["\u0275mpd"](1073742336,m.h,m.h,[]),s["\u0275mpd"](1073742336,m.l,m.l,[]),s["\u0275mpd"](1073742336,m.m,m.m,[]),s["\u0275mpd"](1073742336,m.s,m.s,[]),s["\u0275mpd"](1073742336,m.t,m.t,[]),s["\u0275mpd"](1073742336,m.y,m.y,[]),s["\u0275mpd"](1073742336,m.C,m.C,[]),s["\u0275mpd"](1073742336,m.F,m.F,[]),s["\u0275mpd"](1073742336,m.I,m.I,[]),s["\u0275mpd"](1073742336,m.L,m.L,[]),s["\u0275mpd"](1073742336,m.O,m.O,[]),s["\u0275mpd"](1073742336,m.S,m.S,[]),s["\u0275mpd"](1073742336,m.T,m.T,[]),s["\u0275mpd"](1073742336,m.U,m.U,[]),s["\u0275mpd"](1073742336,m.z,m.z,[]),s["\u0275mpd"](1073742336,T.c,T.c,[]),s["\u0275mpd"](1073742336,k.NgxDatatableModule,k.NgxDatatableModule,[]),s["\u0275mpd"](1073742336,I.b,I.b,[]),s["\u0275mpd"](1073742336,U.o,U.o,[[2,U.t],[2,U.l]]),s["\u0275mpd"](1073742336,K.a,K.a,[]),s["\u0275mpd"](1073742336,W.a,W.a,[]),s["\u0275mpd"](1073742336,B.a,B.a,[]),s["\u0275mpd"](1073742336,j.a,j.a,[]),s["\u0275mpd"](1073742336,F,F,[]),s["\u0275mpd"](1073742336,o,o,[]),s["\u0275mpd"](256,s.LOCALE_ID,"es",[]),s["\u0275mpd"](256,T.d,T.e,[]),s["\u0275mpd"](1024,U.j,(function(){return[[{path:"",component:y,children:[]}]]}),[])])}))},uu6c:function uu6c(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return DisplayAutomaticListComponent}));var rxjs__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("bwdy"),rxjs__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("8lHc"),moment__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("wgY5"),moment__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__),shared_functions__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("j2Hr"),shared_models_helpers_Alert__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("LgNh"),shared_models__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("k5pS"),shared_services__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("IXvK"),sections_display_src_shared_models___WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("KUDs"),sections_display_src_shared_services___WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("lSgf"),DisplayAutomaticListComponent=function(){function DisplayAutomaticListComponent(e,t,i,s,r){_classCallCheck(this,DisplayAutomaticListComponent),this.displayAutomaticIndicatorsService=e,this.alertService=t,this.envService=i,this.modalService=s,this.userSelectionService=r,this.subscription=new rxjs__WEBPACK_IMPORTED_MODULE_0__.a,this.alertMessage=new shared_models_helpers_Alert__WEBPACK_IMPORTED_MODULE_4__.a,this.show_columns=!1,this.show=!1,this.selected=[],this.historic=!1,this.graph=!1,this.show_graph_or_table_button=!1,this.env=i,this.model=new sections_display_src_shared_models___WEBPACK_IMPORTED_MODULE_7__.c,this.local_store="assignation",this.selectorVisibleFields=new shared_models__WEBPACK_IMPORTED_MODULE_5__.b("visible"),this.selectorVisibleFields.assignation=!1,this.selectorVisibleFields.auxiliar=!1,this.currentDate=moment__WEBPACK_IMPORTED_MODULE_2__(new Date).format("YYYY-MM-DD"),this.rows=new sections_display_src_shared_models___WEBPACK_IMPORTED_MODULE_7__.d,this.rows_original=new sections_display_src_shared_models___WEBPACK_IMPORTED_MODULE_7__.d}return _createClass(DisplayAutomaticListComponent,[{key:"ngOnInit",value:function(){this.userSelection=new shared_models__WEBPACK_IMPORTED_MODULE_5__.b("standard"),this.getReportList(this.userSelection),this.filterFieldList=this.model.fieldList(),this.numberOfRowsInTable={id:10,value:10},this.exportName="reporte-conexi\xf3n",this.initialSelectedFilterField={field_name:"start_date",name:"fecha_inicio",text:"Fecha desde"},this.onRepeat()}},{key:"ngOnDestroy",value:function(){this.userSelectionService.writeUserSelectionHistoric(this.userSelection),this.subscription.unsubscribe()}},{key:"onRepeat",value:function(){var e=this,t=Object(rxjs__WEBPACK_IMPORTED_MODULE_1__.a)(1e3,5e3),i=Object(rxjs__WEBPACK_IMPORTED_MODULE_1__.a)(1e3,1e3);this.getReportList(this.userSelection),this.subscription.add(t.subscribe((function(){Object(shared_functions__WEBPACK_IMPORTED_MODULE_3__.c)(e.userSelection.start_date)===e.currentDate&&e.getReportList(e.userSelection)}))),i.subscribe((function(){e.timerConnected=e.timerConnected+1}))}},{key:"getReportList",value:function(e){var t=this;e&&this.displayAutomaticIndicatorsService.getReportList(e).subscribe((function(i){t.timerConnected=0,t.historic=t.currentDate!==Object(shared_functions__WEBPACK_IMPORTED_MODULE_3__.c)(e.start_date),i?t.rows=i:console.error("Error",i),t.alertMessage=new shared_models_helpers_Alert__WEBPACK_IMPORTED_MODULE_4__.a}),(function(e){console.error("Error",e),t.show=!1,t.alertService.error(e.status),t.alertMessage.alertTitle="Error del servidor",t.alertMessage.alertText=e.statusText,t.alertMessage.alertShow=!0,t.alertMessage.alertClass="alert alert-danger alert-dismissible fade show"}))}},{key:"openDetailModal",value:function(e,t){this.activeModal=this.modalService.open(e,{windowClass:"my-class",keyboard:!1})}},{key:"onShowHideGraphButtons",value:function(){this.graph=!this.graph,this.show_graph_or_table_button=!this.show_graph_or_table_button}},{key:"onActivate",value:function(e){this.row_selection=e.row}},{key:"onSelect",value:function(e){this.selected=e.selected}},{key:"onReturnHeaderResult",value:function(e){this.userSelection=new shared_models__WEBPACK_IMPORTED_MODULE_5__.b("standard"),this.getReportList(this.userSelection),this.show_graph_or_table_button=!1}},{key:"onRecalculate",value:function(e){this.userSelection=new shared_models__WEBPACK_IMPORTED_MODULE_5__.b("standard"),this.getReportList(this.userSelection),this.show_graph_or_table_button=!1,console.error("this.rows",this.rows)}},{key:"onReturnNumberOfRowsInTable",value:function(e){console.error("event",e),this.numberOfRowsInTable=e}},{key:"onReturnRowsForTable",value:function(e){this.rows=e}},{key:"onObjectToArray",value:function(e){var t,i=e[0];return void 0!==i&&(t=Object.entries(i).map((function(e){var t=_slicedToArray(e,2);return{key:t[0],value:t[1]}}))),t}},{key:"onCreateModel",value:function onCreateModel(model){model=(new sections_display_src_shared_models___WEBPACK_IMPORTED_MODULE_7__.c).fieldList(),console.error("model",model);var obj={};model.map((function(e){obj["".concat(e.name)]="x."+e.field_name}));var newModel=JSON.stringify(obj),newModel2=JSON.stringify(newModel.replace(/\"/g,"").replace(/:/g,": ").replace(/,/g,",\n ")),model3=eval(newModel2);console.error("model",model3)}},{key:"openModal",value:function(e){}}]),DisplayAutomaticListComponent}()}}]);