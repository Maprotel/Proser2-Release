(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"6/DM":function(l,n,e){"use strict";e("kZht"),e("bwdy"),e("IdLP"),e("8lHc"),e("k5pS")},"9Z3T":function(l,n,e){"use strict";e.d(n,"a",(function(){return t})),e("GFIo");class t{constructor(l){this.invScaleService=l}ngOnInit(){}onExtractVariables(l){}onColorClass(l){return`indicator-cell ${l}`}}},VZe3:function(l,n,e){"use strict";e.d(n,"a",(function(){return o}));var t=e("6uGs"),a=e("47ST"),u=e("YtkY"),r=e("4e/d"),i=e("78Vo"),d=e("kZht");let o=(()=>{class l{constructor(l,n){this.http=l,this.env=n,this.headers=new t.g({"Content-Type":"application/json"})}handleError(l){return console.error(l),Object(a.a)(l)}getReportList(l){const n=localStorage.getItem("accessToken");return this.http.post(`${this.env.loopbackApiUrl}/api/InvDisplays/displayOutboundIndicators?access_token=${n}`,l,{headers:this.headers}).pipe(Object(u.a)(l=>l),Object(r.a)(this.handleError))}}return l.ngInjectableDef=d["\u0275\u0275defineInjectable"]({factory:function(){return new l(d["\u0275\u0275inject"](t.c),d["\u0275\u0275inject"](i.a))},token:l,providedIn:"root"}),l})()},XEeE:function(l,n,e){"use strict";e.d(n,"a",(function(){return t}));class t{constructor(){this.displayOutboundCallsIndicators="",this.displayOutboundCurrentCallsIndicators="",this.agentsPlannedTotal="",this.agentsConnectedTotal="",this.agentsConnectedByGroup="",this.agentsAuxiliarResume="",this.agentsAssignationResume=""}fieldList(){return[{field_name:"displayOutboundCallsIndicators",name:"indicadores_llamadas",text:"Indicadores"},{field_name:"displayOutboundCurrentCallsIndicators",name:"indicadores_llamadas_actuales",text:"Llamadas actuales"},{field_name:"agentsPlannedTotal",name:"agentes_planeados",text:"Agentes planeados"},{field_name:"agentsConnectedTotal",name:"agentes_conectados",text:"Agentes conectados"},{field_name:"agentsConnectedByGroup",name:"agentes_conectados_por_grupo",text:"Agentes por grupo"},{field_name:"agentsAuxiliarResume",name:"resumen_auxiliar",text:"Resumen de auxiliares"},{field_name:"agentsAssignationResume",name:"resumen_asignacion",text:"Resumen de asignaciones"}]}fieldInfo(l){return this.fieldList().filter(n=>n.field_name===l)[0]}}},"aUx+":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return DisplayOutboundListComponent}));var rxjs__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("bwdy"),rxjs__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("8lHc"),moment__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("wgY5"),moment__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__),shared_functions__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("j2Hr"),shared_models_helpers_Alert__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("LgNh"),shared_models__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("k5pS"),shared_services__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("IXvK"),shared_services_crud_system_user_selection_service__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("XtjK"),projects_view_src_shared_models_display_outbound_DisplayOutboundResponse_model__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("c/Bv"),_display_outbound_graph_display_outbound_graph_component__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("6/DM"),projects_view_src_shared_models_display_outbound_DisplayOutbound_model__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__("XEeE"),projects_view_src_shared_services_display_outbound_display_outbound_indicators_service__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__("VZe3"),_display_outbound_highlights_display_outbound_highlights_component__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__("9Z3T"),_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_13__=__webpack_require__("lu7F");class DisplayOutboundListComponent{constructor(l,n,e,t,a){this.displayOutboundIndicatorsService=l,this.alertService=n,this.envService=e,this.modalService=t,this.userSelectionService=a,this.subscription=new rxjs__WEBPACK_IMPORTED_MODULE_0__.a,this.alertMessage=new shared_models_helpers_Alert__WEBPACK_IMPORTED_MODULE_4__.a,this.faIdBadge=_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_13__.e,this.faClock=_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_13__.b,this.show_columns=!1,this.show=!1,this.selected=[],this.historic=!1,this.graph=!1,this.show_graph_or_table_button=!1,this.env=e,this.model=new projects_view_src_shared_models_display_outbound_DisplayOutbound_model__WEBPACK_IMPORTED_MODULE_10__.a,this.currentDate=moment__WEBPACK_IMPORTED_MODULE_2__(new Date).format("YYYY-MM-DD"),this.rows=new projects_view_src_shared_models_display_outbound_DisplayOutboundResponse_model__WEBPACK_IMPORTED_MODULE_8__.a,this.rows_original=new projects_view_src_shared_models_display_outbound_DisplayOutboundResponse_model__WEBPACK_IMPORTED_MODULE_8__.a,this.displayUserSelection=new shared_models__WEBPACK_IMPORTED_MODULE_5__.b("standard"),this.selectorVisibleFields=new shared_models__WEBPACK_IMPORTED_MODULE_5__.b("visible"),this.selectorVisibleFields.assignation=!1,this.selectorVisibleFields.auxiliar=!1}ngOnInit(){this.displayUserSelection=new shared_models__WEBPACK_IMPORTED_MODULE_5__.b("standard"),this.getReportList(),this.filterFieldList=this.model.fieldList(),this.numberOfRowsInTable={id:10,value:10},this.exportName="reporte-conexi\xf3n",this.initialSelectedFilterField={field_name:"start_date",name:"fecha_inicio",text:"Fecha desde"},this.onRepeat()}ngOnDestroy(){this.subscription.unsubscribe()}onRepeat(){const l=Object(rxjs__WEBPACK_IMPORTED_MODULE_1__.a)(1e3,5e3),n=Object(rxjs__WEBPACK_IMPORTED_MODULE_1__.a)(1e3,1e3);this.getReportList(),this.subscription.add(l.subscribe(()=>{Object(shared_functions__WEBPACK_IMPORTED_MODULE_3__.c)(this.displayUserSelection.start_date)===this.currentDate&&this.getReportList()})),n.subscribe(()=>{this.timerConnected=this.timerConnected+1})}setHeaderInfo(l){return l.title="Display de llamadas salientes",l.options="",l.legend="",l}getReportList(){let l=new shared_models__WEBPACK_IMPORTED_MODULE_5__.b("standard");this.displayUserSelection=this.setHeaderInfo(l),this.displayUserSelection&&this.displayOutboundIndicatorsService.getReportList(this.displayUserSelection).subscribe(l=>{this.timerConnected=0,l?this.rows=l:console.error("Error",l),this.alertMessage=new shared_models_helpers_Alert__WEBPACK_IMPORTED_MODULE_4__.a},l=>{console.error("Error",l),this.show=!1,this.alertService.error(l.status),this.alertMessage.alertTitle="Error del servidor",this.alertMessage.alertText=l.statusText,this.alertMessage.alertShow=!0,this.alertMessage.alertClass="alert alert-danger alert-dismissible fade show"})}openDetailModal(l,n){this.activeModal=this.modalService.open(l,{windowClass:"my-class",keyboard:!1})}onShowHideGraphButtons(){this.graph=!this.graph,this.show_graph_or_table_button=!this.show_graph_or_table_button}onActivate(l){this.row_selection=l.row}onSelect(l){this.selected=l.selected}onReturnHeaderResult(l){this.displayUserSelection=new shared_models__WEBPACK_IMPORTED_MODULE_5__.b("standard"),this.getReportList(),this.show_graph_or_table_button=!1,this.childGraph&&this.childGraph.generateGraph("header",this.rows)}onRecalculate(l){this.displayUserSelection=new shared_models__WEBPACK_IMPORTED_MODULE_5__.b("standard"),this.getReportList(),this.show_graph_or_table_button=!1,console.error("this.rows",this.rows),this.childGraph&&this.childGraph.generateGraph("button",this.rows)}onReturnNumberOfRowsInTable(l){console.error("event",l),this.numberOfRowsInTable=l}onReturnRowsForTable(l){this.rows=l}onObjectToArray(l){let n,e=l[0];return void 0!==e&&(n=Object.entries(e).map(([l,n])=>({key:l,value:n}))),n}onCreateModel(model){model=(new projects_view_src_shared_models_display_outbound_DisplayOutbound_model__WEBPACK_IMPORTED_MODULE_10__.a).fieldList(),console.error("model",model);let obj={};model.map(l=>{obj[`${l.name}`]="x."+l.field_name});let newModel=JSON.stringify(obj),newModel2=JSON.stringify(newModel.replace(/\"/g,"").replace(/:/g,": ").replace(/,/g,",\n ")),model3=eval(newModel2);console.error("model",model3)}openModal(l){}}},"c/Bv":function(l,n,e){"use strict";e.d(n,"a",(function(){return t}));class t{constructor(){this.displayOutboundCallsIndicators=[{now:"",day_name:"",week_day:"",start_date:"",start_time:"",end_time:"",outboundMade:"",outboundFail:"",outboundAnswered:"",outboundEffective:"",outboundHungout:"",outboundContactLevel:"",outboundEffectiveLevel:"",operation_seconds:"",operation_time:"",outboundTMO:""}],this.displayOutboundCurrentCallsIndicators=[{now:"",callsActive:"",callsOnQueue:""}],this.agentsPlannedTotal=[{now:"",agentsPlannedTotal:""}],this.agentsConnectedTotal=[{now:"",agentsConnectedTotal:"",agentsEffectiveTotal:""}],this.agentsLoggedTotal=[{now:"",agentsConnectedTotal:"",agentsEffectiveTotal:""}],this.agentsConnectedByGroup=[{now:"",name:"",color:"",value:null}],this.agentHistoricResume=[{now:"",concept:"",count_agents:"",duration_agents:"",average_agents:""}],this.agentsAuxiliarResume=[{now:"",name:"",id:"",value:"",duration:""}],this.agentsAssignationResume=[{now:"",name:"",id:"",value:"",duration:""}]}}},hQWR:function(l,n,e){"use strict";e.r(n);var t=e("kZht"),a=e("An66"),u=e("PJLp"),r=e.n(u);Object(a.registerLocaleData)(r.a,"es");class i{}var d=e("ET8j"),o=e("C9Ky"),s=e("iwai"),c=e("9Z3T"),p=e("GFIo"),_=t["\u0275crt"]({encapsulation:0,styles:[[".blue[_ngcontent-%COMP%]{background:#0e41e9;color:#fff;border-radius:5px}.blue[_ngcontent-%COMP%]:hover{background:#0c3acf}.green[_ngcontent-%COMP%]{background:#34bb22;border-radius:5px}.green[_ngcontent-%COMP%]:hover{background:#2ca01d}.yellow[_ngcontent-%COMP%]{background:#f5f52d;border-radius:5px}.yellow[_ngcontent-%COMP%]:hover{background:#cece25;border-radius:5px}.red[_ngcontent-%COMP%]{background:#ce2424;color:#fff;border-radius:5px}.gray[_ngcontent-%COMP%]{background:#e6e4e4;border-radius:5px}.gray[_ngcontent-%COMP%]:hover{background:#c2bfbf}.frame[_ngcontent-%COMP%]{border:1px solid #d3d3d3;border-radius:5px;padding:3px 1px}.frame[_ngcontent-%COMP%]:hover{box-shadow:0 4px 8px 0 rgba(0,0,0,.2),0 6px 20px 0 rgba(0,0,0,.19)}.grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:2.1fr 2.1fr 1fr 1fr 1fr 1fr 1fr 1fr;grid-gap:.5rem}.indicator-cell[_ngcontent-%COMP%]{flex:1;padding:5px 20px;margin:0 3px;min-height:7rem;position:relative}.indicator-pointer[_ngcontent-%COMP%]{cursor:pointer}.indicator-label[_ngcontent-%COMP%]{font-size:1.1rem;font-weight:400;text-align:center;margin-bottom:3px}.indicator-note[_ngcontent-%COMP%]{font-size:.8rem;text-align:center}.indicator-number[_ngcontent-%COMP%]{font-size:2.8rem;position:absolute;left:0;bottom:0;width:100%;text-align:center}@media screen and (max-width:1200px){.grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr 1fr 1fr 1fr;grid-gap:.5rem}}@media screen and (max-width:992px){.grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:2fr 2fr;grid-gap:.5rem}}@media screen and (max-width:576px){.grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:2fr;grid-gap:.5rem}}"]],data:{}});function g(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,5,"div",[],[[8,"className",0]],null,null,null,null)),(l()(),t["\u0275eld"](1,0,null,null,1,"p",[["class","indicator-label"]],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["Nivel de contactabilidad"])),(l()(),t["\u0275eld"](3,0,null,null,2,"p",[["class","indicator-number "]],null,null,null,null,null)),(l()(),t["\u0275ted"](4,null,[" "," "])),t["\u0275ppd"](5,2)],null,(function(l,n){var e=n.component;l(n,0,0,t["\u0275inlineInterpolate"](1,"indicator-cell ",e.rows.colors[0].outboundContactLevel,""));var a=t["\u0275unv"](n,4,0,l(n,5,0,t["\u0275nov"](n.parent.parent,0),e.rows.displayOutboundCallsIndicators[0].outboundContactLevel,"1.2-2"));l(n,4,0,a)}))}function m(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,5,"div",[],[[8,"className",0]],null,null,null,null)),(l()(),t["\u0275eld"](1,0,null,null,1,"p",[["class","indicator-label"]],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["Nivel de efectividad"])),(l()(),t["\u0275eld"](3,0,null,null,2,"p",[["class","indicator-number "]],null,null,null,null,null)),(l()(),t["\u0275ted"](4,null,[" "," "])),t["\u0275ppd"](5,2)],null,(function(l,n){var e=n.component;l(n,0,0,t["\u0275inlineInterpolate"](1,"indicator-cell ",e.rows.colors[0].outboundEffectiveLevel,""));var a=t["\u0275unv"](n,4,0,l(n,5,0,t["\u0275nov"](n.parent.parent,0),e.rows.displayOutboundCallsIndicators[0].outboundEffectiveLevel,"1.2-2"));l(n,4,0,a)}))}function b(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,21,"main",[["class","grid"]],null,null,null,null,null)),(l()(),t["\u0275eld"](1,0,null,null,2,"article",[["class"," frame"]],null,null,null,null,null)),(l()(),t["\u0275and"](16777216,null,null,1,null,g)),t["\u0275did"](3,16384,null,0,a.NgIf,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),t["\u0275eld"](4,0,null,null,2,"article",[["class"," frame"]],null,null,null,null,null)),(l()(),t["\u0275and"](16777216,null,null,1,null,m)),t["\u0275did"](6,16384,null,0,a.NgIf,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),t["\u0275eld"](7,0,null,null,7,"article",[["class"," frame"]],null,null,null,null,null)),(l()(),t["\u0275eld"](8,0,null,null,6,"div",[["class","indicator-cell"]],null,null,null,null,null)),(l()(),t["\u0275eld"](9,0,null,null,3,"p",[["class","indicator-label"]],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["Llamadas"])),(l()(),t["\u0275eld"](11,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["activas"])),(l()(),t["\u0275eld"](13,0,null,null,1,"p",[["class","indicator-number "]],null,null,null,null,null)),(l()(),t["\u0275ted"](14,null,[" "," "])),(l()(),t["\u0275eld"](15,0,null,null,6,"article",[["class","frame"]],null,null,null,null,null)),(l()(),t["\u0275eld"](16,0,null,null,5,"div",[["class","indicator-cell gray"]],null,null,null,null,null)),(l()(),t["\u0275eld"](17,0,null,null,1,"p",[["class","indicator-label"]],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["TMO"])),(l()(),t["\u0275eld"](19,0,null,null,2,"p",[["class","indicator-number "]],null,null,null,null,null)),(l()(),t["\u0275ted"](20,null,[" "," "])),t["\u0275ppd"](21,2)],(function(l,n){var e=n.component;l(n,3,0,e.rows.colors),l(n,6,0,e.rows.colors)}),(function(l,n){var e=n.component;l(n,14,0,e.rows.displayOutboundCurrentCallsIndicators[0].callsActive);var a=t["\u0275unv"](n,20,0,l(n,21,0,t["\u0275nov"](n.parent,1),e.rows.displayOutboundCallsIndicators[0].outboundTMO,"1.0-0"));l(n,20,0,a)}))}function h(l){return t["\u0275vid"](0,[t["\u0275pid"](0,a.PercentPipe,[t.LOCALE_ID]),t["\u0275pid"](0,a.DecimalPipe,[t.LOCALE_ID]),(l()(),t["\u0275and"](16777216,null,null,1,null,b)),t["\u0275did"](3,16384,null,0,a.NgIf,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null)],(function(l,n){l(n,3,0,n.component.rows)}),null)}var f=e("5Ofn"),O=e("Uj1/"),C=e("hlL8"),v=e("aymL"),M=e("78Vo"),x=e("w7wT"),w=e("XtjK"),P=e("NxuZ"),y=e("ENSU");class E{constructor(l){this.modalService=l}ngOnInit(){}openModal(l){this.modalService.open(l,{size:"lg",ariaLabelledBy:"modal-basic-title"})}}var I=t["\u0275crt"]({encapsulation:0,styles:[[".frame[_ngcontent-%COMP%]{border:1px solid #d3d3d3;border-radius:5px;min-height:50vh}.tablegraph[_ngcontent-%COMP%]{margin:0;padding:3px}.tablegraph-subtitles[_ngcontent-%COMP%]{margin:200;padding:3px 0 .5rem;background:#d3d3d3;font-size:1.2rem;font-weight:400;text-align:center}.tablegraph-table[_ngcontent-%COMP%]{display:grid;grid-template-columns:4fr 1fr;margin:0;padding:5px 5px 0}.tablegraph-table[_ngcontent-%COMP%]:hover{color:#242488;border:1px solid #5e5b5b;border-radius:5px;box-shadow:0 4px 8px 0 rgba(0,0,0,.2),0 6px 20px 0 rgba(0,0,0,.19)}.tablegraph-table[_ngcontent-%COMP%]:nth-child(even){background:#f2f2f2}.tablegraph-table[_ngcontent-%COMP%]:nth-child(odd){background:#fff}.tablegraph-table[_ngcontent-%COMP%]:first-child{background:#f2f2f2;margin-top:10px}.tablegraph-table[_ngcontent-%COMP%]:last-child{background:#fff;margin-bottom:10px}.tablegraph-text[_ngcontent-%COMP%]{font-size:1rem;padding:5px 20px 0 0;color:#495057}.tablegraph-number[_ngcontent-%COMP%]{text-align:right;font-size:1.4rem;font-weight:400;padding-top:0}.pointer[_ngcontent-%COMP%]{cursor:pointer}@media screen and (max-width:1200px){.tablegraph-table[_ngcontent-%COMP%]{display:grid;grid-template-columns:4fr 1fr;margin:0;padding:5px 5px 0}}@media screen and (max-width:992px){.tablegraph-table[_ngcontent-%COMP%]{display:grid;grid-template-columns:3fr 1fr;margin:0;padding:5px 5px 0}}@media screen and (max-width:768px){.tablegraph-table[_ngcontent-%COMP%]{display:grid;grid-template-columns:2fr 1fr;margin:0;padding:5px 5px 0}}@media screen and (max-width:576px){.tablegraph-table[_ngcontent-%COMP%]{display:grid;grid-template-columns:2fr 1fr;margin:0;padding:5px 5px 0}}"]],data:{}});function D(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,39,"section",[["class","tablegraph"]],null,null,null,null,null)),(l()(),t["\u0275eld"](1,0,null,null,38,"article",[["class","tablegraph-card"],["id","Calls"]],null,null,null,null,null)),(l()(),t["\u0275eld"](2,0,null,null,1,"p",[["class","tablegraph-subtitles"]],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["Llamadas"])),(l()(),t["\u0275eld"](4,0,null,null,5,"div",[["class","tablegraph-table "]],null,null,null,null,null)),(l()(),t["\u0275eld"](5,0,null,null,1,"p",[["class","tablegraph-text"]],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["Realizadas"])),(l()(),t["\u0275eld"](7,0,null,null,2,"p",[["class","tablegraph-number"]],null,null,null,null,null)),(l()(),t["\u0275ted"](8,null,[" "," "])),t["\u0275ppd"](9,2),(l()(),t["\u0275eld"](10,0,null,null,5,"div",[["class","tablegraph-table "]],null,null,null,null,null)),(l()(),t["\u0275eld"](11,0,null,null,1,"p",[["class","tablegraph-text"]],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["Fallidas"])),(l()(),t["\u0275eld"](13,0,null,null,2,"p",[["class","tablegraph-number"]],null,null,null,null,null)),(l()(),t["\u0275ted"](14,null,[" "," "])),t["\u0275ppd"](15,2),(l()(),t["\u0275eld"](16,0,null,null,5,"div",[["class","tablegraph-table "]],null,null,null,null,null)),(l()(),t["\u0275eld"](17,0,null,null,1,"p",[["class","tablegraph-text"]],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["Abandonadas"])),(l()(),t["\u0275eld"](19,0,null,null,2,"p",[["class","tablegraph-number"]],null,null,null,null,null)),(l()(),t["\u0275ted"](20,null,[" "," "])),t["\u0275ppd"](21,2),(l()(),t["\u0275eld"](22,0,null,null,5,"div",[["class","tablegraph-table "]],null,null,null,null,null)),(l()(),t["\u0275eld"](23,0,null,null,1,"p",[["class","tablegraph-text"]],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["Contestadas"])),(l()(),t["\u0275eld"](25,0,null,null,2,"p",[["class","tablegraph-number"]],null,null,null,null,null)),(l()(),t["\u0275ted"](26,null,[" "," "])),t["\u0275ppd"](27,2),(l()(),t["\u0275eld"](28,0,null,null,5,"div",[["class","tablegraph-table "]],null,null,null,null,null)),(l()(),t["\u0275eld"](29,0,null,null,1,"p",[["class","tablegraph-text"]],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["Efectivas"])),(l()(),t["\u0275eld"](31,0,null,null,2,"p",[["class","tablegraph-number"]],null,null,null,null,null)),(l()(),t["\u0275ted"](32,null,[" "," "])),t["\u0275ppd"](33,2),(l()(),t["\u0275eld"](34,0,null,null,5,"div",[["class","tablegraph-table "]],null,null,null,null,null)),(l()(),t["\u0275eld"](35,0,null,null,1,"p",[["class","tablegraph-text"]],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["Colgadas por agente"])),(l()(),t["\u0275eld"](37,0,null,null,2,"p",[["class","tablegraph-number"]],null,null,null,null,null)),(l()(),t["\u0275ted"](38,null,[" "," "])),t["\u0275ppd"](39,2)],null,(function(l,n){var e=n.component,a=t["\u0275unv"](n,8,0,l(n,9,0,t["\u0275nov"](n.parent,0),e.rows.displayOutboundCallsIndicators[0].outboundMade,"1.0-0"));l(n,8,0,a);var u=t["\u0275unv"](n,14,0,l(n,15,0,t["\u0275nov"](n.parent,0),e.rows.displayOutboundCallsIndicators[0].outboundFail,"1.0-0"));l(n,14,0,u);var r=t["\u0275unv"](n,20,0,l(n,21,0,t["\u0275nov"](n.parent,0),e.rows.displayOutboundCallsIndicators[0].outboundAbandoned,"1.0-0"));l(n,20,0,r);var i=t["\u0275unv"](n,26,0,l(n,27,0,t["\u0275nov"](n.parent,0),e.rows.displayOutboundCallsIndicators[0].outboundAnswered,"1.0-0"));l(n,26,0,i);var d=t["\u0275unv"](n,32,0,l(n,33,0,t["\u0275nov"](n.parent,0),e.rows.displayOutboundCallsIndicators[0].outboundEffective,"1.0-0"));l(n,32,0,d);var o=t["\u0275unv"](n,38,0,l(n,39,0,t["\u0275nov"](n.parent,0),e.rows.displayOutboundCallsIndicators[0].outboundHungout,"1.0-0"));l(n,38,0,o)}))}function L(l){return t["\u0275vid"](0,[t["\u0275pid"](0,a.DecimalPipe,[t.LOCALE_ID]),(l()(),t["\u0275eld"](1,0,null,null,2,"main",[["class","frame"]],null,null,null,null,null)),(l()(),t["\u0275and"](16777216,null,null,1,null,D)),t["\u0275did"](3,16384,null,0,a.NgIf,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null)],(function(l,n){l(n,3,0,n.component.rows.displayOutboundCallsIndicators[0])}),null)}class R{constructor(l){this.modalService=l}ngOnInit(){}openModal(l){this.modalService.open(l,{size:"lg",ariaLabelledBy:"modal-basic-title"})}}var T=t["\u0275crt"]({encapsulation:0,styles:[[".frame[_ngcontent-%COMP%]{border:1px solid #d3d3d3;border-radius:5px;min-height:50vh}.tablegraph[_ngcontent-%COMP%]{margin:0;padding:3px}.tablegraph-subtitles[_ngcontent-%COMP%]{margin:200;padding:3px 0 .5rem;background:#d3d3d3;font-size:1.2rem;font-weight:400;text-align:center}.tablegraph-table[_ngcontent-%COMP%]{display:grid;grid-template-columns:4fr 1fr;margin:0;padding:5px 5px 0}.tablegraph-table[_ngcontent-%COMP%]:hover{color:#242488;border:1px solid #5e5b5b;border-radius:5px;box-shadow:0 4px 8px 0 rgba(0,0,0,.2),0 6px 20px 0 rgba(0,0,0,.19)}.tablegraph-table[_ngcontent-%COMP%]:nth-child(even){background:#f2f2f2}.tablegraph-table[_ngcontent-%COMP%]:nth-child(odd){background:#fff}.tablegraph-table[_ngcontent-%COMP%]:first-child{background:#f2f2f2;margin-top:10px}.tablegraph-table[_ngcontent-%COMP%]:last-child{background:#fff;margin-bottom:10px}.tablegraph-text[_ngcontent-%COMP%]{font-size:1rem;padding:5px 20px 0 0;color:#495057}.tablegraph-number[_ngcontent-%COMP%]{text-align:right;font-size:1.4rem;font-weight:400;padding-top:0}@media screen and (max-width:1200px){.tablegraph-table[_ngcontent-%COMP%]{display:grid;grid-template-columns:4fr 1fr;margin:0;padding:5px 5px 0}}@media screen and (max-width:992px){.tablegraph-table[_ngcontent-%COMP%]{display:grid;grid-template-columns:3fr 1fr;margin:0;padding:5px 5px 0}}@media screen and (max-width:768px){.tablegraph-table[_ngcontent-%COMP%]{display:grid;grid-template-columns:2fr 1fr;margin:0;padding:5px 5px 0}}@media screen and (max-width:576px){.tablegraph-table[_ngcontent-%COMP%]{display:grid;grid-template-columns:2fr 1fr;margin:0;padding:5px 5px 0}}.dark-modal[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%]{background-color:#292b2c;color:#fff}.dark-modal[_ngcontent-%COMP%]   .close[_ngcontent-%COMP%]{color:#fff}.light-blue-backdrop[_ngcontent-%COMP%]{background-color:#5cb3fd}.modal-header[_ngcontent-%COMP%]{background:#5cb3fd}.modal-lg[_ngcontent-%COMP%]{min-width:90%!important;max-width:95%!important}.modal-buton[_ngcontent-%COMP%]{font-size:1.2rem}.pointer[_ngcontent-%COMP%]{cursor:pointer}"]],data:{}});function k(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,29,"section",[["class","tablegraph"]],null,null,null,null,null)),(l()(),t["\u0275eld"](1,0,null,null,28,"article",[["class","tablegraph-card"],["id","Calls"]],null,null,null,null,null)),(l()(),t["\u0275eld"](2,0,null,null,1,"p",[["class","tablegraph-subtitles"]],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["Niveles"])),(l()(),t["\u0275eld"](4,0,null,null,5,"div",[["class","tablegraph-table "]],null,null,null,null,null)),(l()(),t["\u0275eld"](5,0,null,null,1,"p",[["class","tablegraph-text"]],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["Nivel de contactabilidad"])),(l()(),t["\u0275eld"](7,0,null,null,2,"p",[["class","tablegraph-number "]],null,null,null,null,null)),(l()(),t["\u0275ted"](8,null,[" "," "])),t["\u0275ppd"](9,2),(l()(),t["\u0275eld"](10,0,null,null,5,"div",[["class","tablegraph-table "]],null,null,null,null,null)),(l()(),t["\u0275eld"](11,0,null,null,1,"p",[["class","tablegraph-text"]],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["Nivel de efectividad"])),(l()(),t["\u0275eld"](13,0,null,null,2,"p",[["class","tablegraph-number "]],null,null,null,null,null)),(l()(),t["\u0275ted"](14,null,[" "," "])),t["\u0275ppd"](15,2),(l()(),t["\u0275eld"](16,0,null,null,2,"div",[],null,null,null,null,null)),(l()(),t["\u0275eld"](17,0,null,null,1,"p",[["class","tablegraph-subtitles"]],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["Tiempos"])),(l()(),t["\u0275eld"](19,0,null,null,5,"div",[["class","tablegraph-table "]],null,null,null,null,null)),(l()(),t["\u0275eld"](20,0,null,null,1,"p",[["class","tablegraph-text"]],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["TMO"])),(l()(),t["\u0275eld"](22,0,null,null,2,"p",[["class","tablegraph-number "]],null,null,null,null,null)),(l()(),t["\u0275ted"](23,null,[" "," "])),t["\u0275ppd"](24,2),(l()(),t["\u0275eld"](25,0,null,null,4,"div",[["class","tablegraph-table "]],null,null,null,null,null)),(l()(),t["\u0275eld"](26,0,null,null,1,"p",[["class","tablegraph-text"]],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["Tiempo de operaci\xf3n"])),(l()(),t["\u0275eld"](28,0,null,null,1,"p",[["class","tablegraph-number "]],null,null,null,null,null)),(l()(),t["\u0275ted"](29,null,[" "," "]))],null,(function(l,n){var e=n.component,a=t["\u0275unv"](n,8,0,l(n,9,0,t["\u0275nov"](n.parent,0),e.rows.displayOutboundCallsIndicators[0].outboundContactLevel,"1.2-2"));l(n,8,0,a);var u=t["\u0275unv"](n,14,0,l(n,15,0,t["\u0275nov"](n.parent,0),e.rows.displayOutboundCallsIndicators[0].outboundEffectiveLevel,"1.2-2"));l(n,14,0,u);var r=t["\u0275unv"](n,23,0,l(n,24,0,t["\u0275nov"](n.parent,1),e.rows.displayOutboundCallsIndicators[0].outboundTMO,"1.0-2"));l(n,23,0,r),l(n,29,0,e.rows.displayOutboundCallsIndicators[0].operation_time)}))}function U(l){return t["\u0275vid"](0,[t["\u0275pid"](0,a.PercentPipe,[t.LOCALE_ID]),t["\u0275pid"](0,a.DecimalPipe,[t.LOCALE_ID]),(l()(),t["\u0275eld"](2,0,null,null,2,"main",[["class","frame"]],null,null,null,null,null)),(l()(),t["\u0275and"](16777216,null,null,1,null,k)),t["\u0275did"](4,16384,null,0,a.NgIf,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null)],(function(l,n){l(n,4,0,n.component.rows.displayOutboundCallsIndicators[0])}),null)}var S=e("aUx+"),A=e("VZe3"),B=e("phxf"),K=t["\u0275crt"]({encapsulation:0,styles:[[".frame[_ngcontent-%COMP%]{border:1px solid #d3d3d3;min-height:50vh;border-radius:5px;page-break-after:3px}.inner[_ngcontent-%COMP%]{padding:3px}.subtitles[_ngcontent-%COMP%]{padding:3px 0 .5rem;background:#d3d3d3;font-size:1.2rem;font-weight:400;text-align:center}.dashboard[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(6,1fr);margin:20px;min-height:20vh}.pie[_ngcontent-%COMP%]{grid-column-start:1;z-index:2}.legend[_ngcontent-%COMP%]{grid-column-start:2;z-index:1}.item-one[_ngcontent-%COMP%]{grid-row-start:1;grid-row-end:2;grid-column-start:1;grid-column-end:4}.item-two[_ngcontent-%COMP%]{grid-area:1/1/4/2}@media screen and (max-width:1200px){.dashboard[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr 1fr;margin:20px;min-height:3vh;max-height:200px}.dashboard-card[_ngcontent-%COMP%]{flex:1}}@media screen and (max-width:992px){.dashboard[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr 2fr;margin:20px;min-height:3vh;max-height:200px}.dashboard-card[_ngcontent-%COMP%]{flex:1;min-width:25%;min-height:100%;margin-left:5px}}@media screen and (max-width:768px){.dashboard[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr 3fr;margin:20px;min-height:3vh;max-height:200px}.dashboard-card[_ngcontent-%COMP%]{flex:1;min-width:25%;min-height:100%;margin-left:5px}}.main[_ngcontent-%COMP%]{margin:20px;padding:0;background:#fff}.main-button[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr 1fr;margin-left:20px;margin-top:5px;padding:0}.clock[_ngcontent-%COMP%]{margin-right:20px}.info[_ngcontent-%COMP%]{margin:20px;padding:0}.very-small[_ngcontent-%COMP%]{font-size:.8rem}.highlights[_ngcontent-%COMP%]{border-bottom:5px}.board[_ngcontent-%COMP%]{display:grid;grid-template-columns:2fr 2fr 4fr 2fr;padding:0;grid-gap:.5rem}.card[_ngcontent-%COMP%]{border:1px #000}@media screen and (max-width:1200px){.board[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr 1fr;padding:0;grid-gap:.5rem}}@media screen and (max-width:992px){.board[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr;padding:0;grid-gap:.5rem}}@media screen and (max-width:768px){.board[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr 1fr;padding:0;grid-gap:.5rem}}@media screen and (max-width:576px){.board[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr;margin:5px;padding:0;grid-gap:.5rem}}"]],data:{}});function j(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,3,"section",[["class","highlights"]],null,null,null,null,null)),(l()(),t["\u0275eld"](1,0,null,null,2,"article",[],null,null,null,null,null)),(l()(),t["\u0275eld"](2,0,null,null,1,"app-display-outbound-highlights",[],null,null,null,h,_)),t["\u0275did"](3,114688,[[2,4]],0,c.a,[p.a],{rows:[0,"rows"]},null)],(function(l,n){l(n,3,0,n.component.rows)}),null)}function W(l){return t["\u0275vid"](0,[t["\u0275qud"](671088640,1,{childGraph:0}),t["\u0275qud"](671088640,2,{highligthts:0}),(l()(),t["\u0275eld"](2,0,null,null,2,"div",[],null,null,null,null,null)),(l()(),t["\u0275eld"](3,0,null,null,1,"app-alert",[],null,null,null,f.b,f.a)),t["\u0275did"](4,114688,null,0,O.a,[],{alertMessage:[0,"alertMessage"]},null),(l()(),t["\u0275eld"](5,0,null,null,1,"app-display-display-header",[],null,[[null,"returnResult"]],(function(l,n,e){var t=!0;return"returnResult"===n&&(t=!1!==l.component.onReturnHeaderResult(e)&&t),t}),C.b,C.a)),t["\u0275did"](6,114688,null,0,v.a,[M.a,x.w,w.a],{userSelection:[0,"userSelection"],selectorVisibleFields:[1,"selectorVisibleFields"],timerConnected:[2,"timerConnected"]},{returnResult:"returnResult"}),(l()(),t["\u0275eld"](7,0,null,null,8,"section",[["class","main-button"]],null,null,null,null,null)),(l()(),t["\u0275eld"](8,0,null,null,0,"div",[],null,null,null,null,null)),(l()(),t["\u0275eld"](9,0,null,null,6,"div",[["class","clock ml-auto"]],null,null,null,null,null)),(l()(),t["\u0275eld"](10,0,null,null,1,"a",[],null,null,null,null,null)),(l()(),t["\u0275ted"](11,null,[""," - "," - "])),(l()(),t["\u0275eld"](12,0,null,null,3,"a",[],null,null,null,null,null)),(l()(),t["\u0275eld"](13,0,null,null,1,"fa-icon",[["class","ng-fa-icon"]],[[1,"title",0],[8,"innerHTML",1]],null,null,s.d,s.c)),t["\u0275did"](14,573440,null,0,P.c,[y.b,P.a,P.d,[2,P.i]],{icon:[0,"icon"]},null),(l()(),t["\u0275ted"](15,null,[" \xa0 "," "])),(l()(),t["\u0275eld"](16,0,null,null,10,"main",[["class","main"]],null,null,null,null,null)),(l()(),t["\u0275and"](16777216,null,null,1,null,j)),t["\u0275did"](18,16384,null,0,a.NgIf,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),t["\u0275eld"](19,0,null,null,7,"section",[],null,null,null,null,null)),(l()(),t["\u0275eld"](20,0,null,null,6,"div",[["class","board"]],null,null,null,null,null)),(l()(),t["\u0275eld"](21,0,null,null,2,"article",[["class","pane"]],null,null,null,null,null)),(l()(),t["\u0275eld"](22,0,null,null,1,"app-display-outbound-calls",[],null,null,null,L,I)),t["\u0275did"](23,114688,null,0,E,[x.w],{rows:[0,"rows"],displayUserSelection:[1,"displayUserSelection"]},null),(l()(),t["\u0275eld"](24,0,null,null,2,"article",[],null,null,null,null,null)),(l()(),t["\u0275eld"](25,0,null,null,1,"app-display-outbound-levels",[],null,null,null,U,T)),t["\u0275did"](26,114688,null,0,R,[x.w],{displayUserSelection:[0,"displayUserSelection"],rows:[1,"rows"]},null)],(function(l,n){var e=n.component;l(n,4,0,e.alertMessage),l(n,6,0,e.displayUserSelection,e.selectorVisibleFields,e.timerConnected),l(n,14,0,e.faClock),l(n,18,0,e.rows),l(n,23,0,e.rows,e.displayUserSelection),l(n,26,0,e.displayUserSelection,e.rows)}),(function(l,n){var e=n.component;l(n,11,0,e.displayUserSelection.creation_date,e.displayUserSelection.creation_time),l(n,13,0,t["\u0275nov"](n,14).title,t["\u0275nov"](n,14).renderedIconHTML),l(n,15,0,e.timerConnected)}))}e("IXvK");var F=e("k5pS");class N{constructor(l,n,e){this.alertService=l,this.envService=n,this.userSelectionService=e,this.displayUserSelection=new F.b("standard"),this.selectorVisibleFields=new F.b("visible"),this.title="Display llamadas salientes"}ngOnInit(){this.displayUserSelection.title!==this.title&&this.setReportTitles()}setReportTitles(){this.displayUserSelection.title=this.title,this.userSelectionService.writeUserSelectionHistoric(this.displayUserSelection),this.selectorVisibleFields.assignation=!1,this.selectorVisibleFields.auxiliar=!1}}var V=t["\u0275crt"]({encapsulation:0,styles:[[""]],data:{}});function q(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,1,"app-display-display-outbound-list",[],null,null,null,W,K)),t["\u0275did"](1,245760,null,0,S.a,[A.a,B.a,M.a,x.w,w.a],null,null)],(function(l,n){l(n,1,0)}),null)}function z(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,1,"app-display-display-outbound",[],null,null,null,q,V)),t["\u0275did"](1,114688,null,0,N,[B.a,M.a,w.a],null,null)],(function(l,n){l(n,1,0)}),null)}var H=t["\u0275ccf"]("app-display-display-outbound",N,z,{},{},[]),G=e("3kIJ"),Z=e("NuYi"),X=e("K9jP"),J=e("Uw3X"),Y=e("ruJL"),$=e("Z4LD"),Q=e("uEFD"),ll=e("Xsav"),nl=e("1VvW"),el=e("XhJS"),tl=e("em0t"),al=e("9o7S"),ul=e("HDHg");class rl{}e.d(n,"DisplayOutboundModuleNgFactory",(function(){return il}));var il=t["\u0275cmf"](i,[],(function(l){return t["\u0275mod"]([t["\u0275mpd"](512,t.ComponentFactoryResolver,t["\u0275CodegenComponentFactoryResolver"],[[8,[d.a,d.b,d.h,d.i,d.e,d.f,d.g,o.a,s.b,s.a,H]],[3,t.ComponentFactoryResolver],t.NgModuleRef]),t["\u0275mpd"](4608,a.NgLocalization,a.NgLocaleLocalization,[t.LOCALE_ID,[2,a["\u0275angular_packages_common_common_a"]]]),t["\u0275mpd"](4608,G.q,G.q,[]),t["\u0275mpd"](4608,G.d,G.d,[]),t["\u0275mpd"](4608,x.w,x.w,[t.ComponentFactoryResolver,t.Injector,x.gb,x.x]),t["\u0275mpd"](4608,Z.ScrollbarHelper,Z.ScrollbarHelper,[a.DOCUMENT]),t["\u0275mpd"](4608,X.DimensionsHelper,X.DimensionsHelper,[]),t["\u0275mpd"](4608,J.ColumnChangesService,J.ColumnChangesService,[]),t["\u0275mpd"](1073742336,a.CommonModule,a.CommonModule,[]),t["\u0275mpd"](1073742336,Y.a,Y.a,[]),t["\u0275mpd"](1073742336,G.p,G.p,[]),t["\u0275mpd"](1073742336,G.g,G.g,[]),t["\u0275mpd"](1073742336,G.n,G.n,[]),t["\u0275mpd"](1073742336,x.d,x.d,[]),t["\u0275mpd"](1073742336,x.g,x.g,[]),t["\u0275mpd"](1073742336,x.h,x.h,[]),t["\u0275mpd"](1073742336,x.l,x.l,[]),t["\u0275mpd"](1073742336,x.m,x.m,[]),t["\u0275mpd"](1073742336,x.s,x.s,[]),t["\u0275mpd"](1073742336,x.t,x.t,[]),t["\u0275mpd"](1073742336,x.y,x.y,[]),t["\u0275mpd"](1073742336,x.C,x.C,[]),t["\u0275mpd"](1073742336,x.F,x.F,[]),t["\u0275mpd"](1073742336,x.I,x.I,[]),t["\u0275mpd"](1073742336,x.L,x.L,[]),t["\u0275mpd"](1073742336,x.O,x.O,[]),t["\u0275mpd"](1073742336,x.S,x.S,[]),t["\u0275mpd"](1073742336,x.T,x.T,[]),t["\u0275mpd"](1073742336,x.U,x.U,[]),t["\u0275mpd"](1073742336,x.z,x.z,[]),t["\u0275mpd"](1073742336,$.c,$.c,[]),t["\u0275mpd"](1073742336,Q.NgxDatatableModule,Q.NgxDatatableModule,[]),t["\u0275mpd"](1073742336,ll.a,ll.a,[]),t["\u0275mpd"](1073742336,nl.o,nl.o,[[2,nl.t],[2,nl.l]]),t["\u0275mpd"](1073742336,el.a,el.a,[]),t["\u0275mpd"](1073742336,tl.a,tl.a,[]),t["\u0275mpd"](1073742336,al.a,al.a,[]),t["\u0275mpd"](1073742336,ul.a,ul.a,[]),t["\u0275mpd"](1073742336,P.j,P.j,[]),t["\u0275mpd"](1073742336,rl,rl,[]),t["\u0275mpd"](1073742336,i,i,[]),t["\u0275mpd"](256,t.LOCALE_ID,"es",[]),t["\u0275mpd"](256,$.d,$.e,[]),t["\u0275mpd"](1024,nl.j,(function(){return[[{path:"",component:N,children:[]}]]}),[])])}))}}]);