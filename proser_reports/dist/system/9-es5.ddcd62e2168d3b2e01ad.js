(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{yXMg:function(n,l,e){"use strict";e.r(l);var t=e("kZht"),u=function(){},o=e("C9Ky"),r=e("ET8j"),a=e("bK4r"),s=e("iwai"),i=e("1VvW"),c=function(){function n(){}return n.prototype.ngOnInit=function(){},n}(),d=t["\u0275crt"]({encapsulation:0,styles:[[""]],data:{}});function p(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,16777216,null,null,1,"router-outlet",[],null,null,null,null,null)),t["\u0275did"](1,212992,null,0,i.p,[i.b,t.ViewContainerRef,t.ComponentFactoryResolver,[8,null],t.ChangeDetectorRef],null,null)],(function(n,l){n(l,1,0)}),null)}var m=t["\u0275ccf"]("app-system",c,(function(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,1,"app-system",[],null,null,null,p,d)),t["\u0275did"](1,114688,null,0,c,[],null,null)],(function(n,l){n(l,1,0)}),null)}),{},{},[]),g=e("umRA"),f=e("zn1a"),y=e("78Vo"),h=e("gqdu"),b=function(){function n(n){this.envService=n}return n.prototype.ngOnInit=function(){this.env=this.envService},n}(),v=t["\u0275crt"]({encapsulation:0,styles:[["body[_ngcontent-%COMP%]{background:#c2c2c2}.intro[_ngcontent-%COMP%]{margin-top:40px;margin-bottom:20px}.intro[_ngcontent-%COMP%]   .display-1[_ngcontent-%COMP%]{font-size:5rem}.intro[_ngcontent-%COMP%]   .display-2[_ngcontent-%COMP%]{font-size:4.5rem}.intro[_ngcontent-%COMP%]   .display-3[_ngcontent-%COMP%]{font-size:3.5rem}.intro[_ngcontent-%COMP%]   .display-4[_ngcontent-%COMP%]{font-size:1.1rem}.intro[_ngcontent-%COMP%]   .display-5[_ngcontent-%COMP%]{font-size:1rem}.intro-header[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr 3fr;grid-gap:1rem}.intro-logo[_ngcontent-%COMP%]{text-align:center}.photo-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr 1fr 1fr 1fr;grid-gap:1rem}.index-title[_ngcontent-%COMP%]{color:#fff;text-align:center;font-size:1.1rem}.card-header[_ngcontent-%COMP%]{background:#2a7de3;color:#fff}"]],data:{}});function C(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,1,"intro-page",[],null,null,null,g.b,g.a)),t["\u0275did"](1,114688,null,0,f.a,[y.a,h.a,i.l],{title:[0,"title"]},null)],(function(n,l){n(l,1,0,"Comandos frecuentes system")}),null)}var M=t["\u0275ccf"]("app-system-intro",b,(function(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,1,"app-system-intro",[],null,null,null,C,v)),t["\u0275did"](1,114688,null,0,b,[y.a],null,null)],(function(n,l){n(l,1,0)}),null)}),{},{},[]),x=e("5Ofn"),O=e("Uj1/"),_=e("k5pS"),P=e("phxf"),R=e("KB7j"),k=function(){function n(n,l,e){this.systemService=n,this.alertService=l,this.envService=e,this.env=this.envService,this.alertMessage=new _.b,this.message="Espacio para los mensajes del sistema"}return n.prototype.ngOnInit=function(){},n.prototype.onKill=function(){var n=this;this.systemService.executePm2({command:"kill",id:0}).subscribe((function(l){n.message=l.response}),(function(l){n.onError(l)}))},n.prototype.onReboot=function(){var n=this;this.systemService.executeReboot({command:"reboot",id:0}).subscribe((function(l){n.message=l.response}),(function(l){n.onError(l)}))},n.prototype.onResurrect=function(){var n=this;this.systemService.executePm2({command:"resurrect",id:0}).subscribe((function(l){n.temp=n.replaceAll(l.response,"\n","<br>"),n.message="<span>"+n.temp+"</span>"}),(function(l){n.onError(l)}))},n.prototype.onRestart=function(){this.onKill(),this.onResurrect()},n.prototype.onError=function(n){this.alertService.error(n.status),this.alertMessage.alertTitle="Error del servidor",this.alertMessage.alertText=n.statusText,this.alertMessage.alertShow=!0,this.alertMessage.alertClass="alert alert-danger alert-dismissible fade show"},n.prototype.replaceAll=function(n,l,e){return n.replace(new RegExp(l,"g"),e)},n.prototype.returnCleanText=function(n){return n.replace(/['"]+/g,"")},n}(),w=t["\u0275crt"]({encapsulation:0,styles:[[".layout[_ngcontent-%COMP%]{margin-top:20px}.button-layout[_ngcontent-%COMP%]{margin-top:20px;display:flex}.button-text[_ngcontent-%COMP%]{font-size:1rem;margin-top:20px;margin-right:5px}.monospaced[_ngcontent-%COMP%]{margin-top:20px;font-family:monospace;font-size:1rem}.strong[_ngcontent-%COMP%]{font-weight:600;color:#2e2e85}"]],data:{}});function S(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,1,"app-alert",[],null,null,null,x.b,x.a)),t["\u0275did"](1,114688,null,0,O.a,[],{alertMessage:[0,"alertMessage"]},null),(n()(),t["\u0275eld"](2,0,null,null,30,"main",[["class","container"]],null,null,null,null,null)),(n()(),t["\u0275eld"](3,0,null,null,29,"section",[["class","layout"]],null,null,null,null,null)),(n()(),t["\u0275eld"](4,0,null,null,1,"h1",[],null,null,null,null,null)),(n()(),t["\u0275ted"](-1,null,["Reiniciar"])),(n()(),t["\u0275eld"](6,0,null,null,1,"p",[],null,null,null,null,null)),(n()(),t["\u0275ted"](-1,null,["Es una funcionalidad que administra el reinicio del backend"])),(n()(),t["\u0275eld"](8,0,null,null,15,"ul",[["class","small"]],null,null,null,null,null)),(n()(),t["\u0275eld"](9,0,null,null,4,"li",[],null,null,null,null,null)),(n()(),t["\u0275eld"](10,0,null,null,3,"p",[],null,null,null,null,null)),(n()(),t["\u0275eld"](11,0,null,null,1,"span",[["class","strong"]],null,null,null,null,null)),(n()(),t["\u0275ted"](-1,null,["resurrect:"])),(n()(),t["\u0275ted"](-1,null,[" reinicia el pm2 en caso que este apagado"])),(n()(),t["\u0275eld"](14,0,null,null,4,"li",[],null,null,null,null,null)),(n()(),t["\u0275eld"](15,0,null,null,3,"p",[],null,null,null,null,null)),(n()(),t["\u0275eld"](16,0,null,null,1,"span",[["class","strong"]],null,null,null,null,null)),(n()(),t["\u0275ted"](-1,null,["restart:"])),(n()(),t["\u0275ted"](-1,null,[" apaga y enciende el pm2"])),(n()(),t["\u0275eld"](19,0,null,null,4,"li",[],null,null,null,null,null)),(n()(),t["\u0275eld"](20,0,null,null,3,"p",[],null,null,null,null,null)),(n()(),t["\u0275eld"](21,0,null,null,1,"span",[["class","strong"]],null,null,null,null,null)),(n()(),t["\u0275ted"](-1,null,["reboot:"])),(n()(),t["\u0275ted"](-1,null,[" reinicia el servidor con un soft-restart (tendra que recargar la pagina despues de unos 30 segundos)"])),(n()(),t["\u0275eld"](24,0,null,null,6,"article",[["class","button-layout"]],null,null,null,null,null)),(n()(),t["\u0275eld"](25,0,null,null,1,"button",[["class","btn btn-success text-xl-center button-text"]],null,[[null,"click"]],(function(n,l,e){var t=!0;return"click"===l&&(t=!1!==n.component.onResurrect()&&t),t}),null,null)),(n()(),t["\u0275ted"](-1,null,[" resurrect "])),(n()(),t["\u0275eld"](27,0,null,null,1,"button",[["class","btn btn-outline-success text-xl-center button-text"]],null,[[null,"click"]],(function(n,l,e){var t=!0;return"click"===l&&(t=!1!==n.component.onRestart()&&t),t}),null,null)),(n()(),t["\u0275ted"](-1,null,[" restart "])),(n()(),t["\u0275eld"](29,0,null,null,1,"button",[["class","btn btn-danger text-xl-center button-text"]],null,[[null,"click"]],(function(n,l,e){var t=!0;return"click"===l&&(t=!1!==n.component.onReboot()&&t),t}),null,null)),(n()(),t["\u0275ted"](-1,null,[" reboot "])),(n()(),t["\u0275eld"](31,0,null,null,1,"p",[["class","monospaced"]],null,null,null,null,null)),(n()(),t["\u0275eld"](32,0,null,null,0,"span",[],[[8,"innerHTML",1]],null,null,null,null))],(function(n,l){n(l,1,0,l.component.alertMessage)}),(function(n,l){n(l,32,0,l.component.message)}))}var z=t["\u0275ccf"]("app-system-pm2",k,(function(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,1,"app-system-pm2",[],null,null,null,S,w)),t["\u0275did"](1,114688,null,0,k,[R.a,P.a,y.a],null,null)],(function(n,l){n(l,1,0)}),null)}),{},{},[]),F=e("An66"),j=e("3kIJ"),A=e("w7wT"),E=e("yctR"),T=e("yHzY"),I=e("Xaao"),L=e("XhJS"),J=e("em0t"),N=e("ruJL"),q=e("lrgc"),D=e("otFz"),K=e("NxuZ"),Q=e("PVAY"),V=e("erSH"),H=e("kQ1Q"),X=function(){return Promise.all([e.e(1),e.e(8)]).then(e.bind(null,"ynjw")).then((function(n){return n.SystemUserModuleNgFactory}))},Z=function(){};e.d(l,"SystemModuleNgFactory",(function(){return G}));var G=t["\u0275cmf"](u,[],(function(n){return t["\u0275mod"]([t["\u0275mpd"](512,t.ComponentFactoryResolver,t["\u0275CodegenComponentFactoryResolver"],[[8,[o.a,r.a,r.b,r.f,r.g,r.c,r.d,r.e,a.a,s.b,s.a,m,M,z]],[3,t.ComponentFactoryResolver],t.NgModuleRef]),t["\u0275mpd"](4608,F.NgLocalization,F.NgLocaleLocalization,[t.LOCALE_ID,[2,F["\u0275angular_packages_common_common_a"]]]),t["\u0275mpd"](4608,j.r,j.r,[]),t["\u0275mpd"](4608,A.u,A.u,[t.ComponentFactoryResolver,t.Injector,A.eb,A.v]),t["\u0275mpd"](4608,E.a,E.a,[t.RendererFactory2,t.PLATFORM_ID]),t["\u0275mpd"](4608,T.a,T.a,[t.ComponentFactoryResolver,t.NgZone,t.Injector,E.a,t.ApplicationRef]),t["\u0275mpd"](4608,I.f,I.f,[]),t["\u0275mpd"](1073742336,F.CommonModule,F.CommonModule,[]),t["\u0275mpd"](1073742336,i.o,i.o,[[2,i.t],[2,i.l]]),t["\u0275mpd"](1073742336,L.a,L.a,[]),t["\u0275mpd"](1073742336,J.a,J.a,[]),t["\u0275mpd"](1073742336,N.a,N.a,[]),t["\u0275mpd"](1073742336,A.d,A.d,[]),t["\u0275mpd"](1073742336,A.g,A.g,[]),t["\u0275mpd"](1073742336,A.h,A.h,[]),t["\u0275mpd"](1073742336,A.l,A.l,[]),t["\u0275mpd"](1073742336,A.m,A.m,[]),t["\u0275mpd"](1073742336,j.q,j.q,[]),t["\u0275mpd"](1073742336,j.g,j.g,[]),t["\u0275mpd"](1073742336,A.r,A.r,[]),t["\u0275mpd"](1073742336,A.s,A.s,[]),t["\u0275mpd"](1073742336,A.w,A.w,[]),t["\u0275mpd"](1073742336,A.A,A.A,[]),t["\u0275mpd"](1073742336,A.D,A.D,[]),t["\u0275mpd"](1073742336,A.G,A.G,[]),t["\u0275mpd"](1073742336,A.J,A.J,[]),t["\u0275mpd"](1073742336,A.M,A.M,[]),t["\u0275mpd"](1073742336,A.Q,A.Q,[]),t["\u0275mpd"](1073742336,A.R,A.R,[]),t["\u0275mpd"](1073742336,A.S,A.S,[]),t["\u0275mpd"](1073742336,A.x,A.x,[]),t["\u0275mpd"](1073742336,q.a,q.a,[]),t["\u0275mpd"](1073742336,I.e,I.e,[]),t["\u0275mpd"](1073742336,D.a,D.a,[]),t["\u0275mpd"](1073742336,K.j,K.j,[]),t["\u0275mpd"](1073742336,Q.a,Q.a,[]),t["\u0275mpd"](1073742336,V.a,V.a,[]),t["\u0275mpd"](1073742336,H.a,H.a,[]),t["\u0275mpd"](1073742336,Z,Z,[]),t["\u0275mpd"](1073742336,u,u,[]),t["\u0275mpd"](256,I.a,{autoClose:!0,insideClick:!1},[]),t["\u0275mpd"](1024,i.j,(function(){return[[{path:"",component:c,children:[{path:"",redirectTo:"system-intro"},{path:"system-intro",component:b},{path:"system-pm2",component:k},{path:"login",component:c},{path:"system-user",loadChildren:X}]}]]}),[])])}))}}]);