(this["webpackJsonpoon-seguros"]=this["webpackJsonpoon-seguros"]||[]).push([[26],{593:function(e,c,n){"use strict";n.d(c,"a",(function(){return i}));var t=n(118),a=n.n(t).a.get("TokenID"),i={headers:{Authorization:"Bearer ".concat(a),"Content-Type":"application/json;charset=UTF-8","Access-Control-Allow-Origin":"*"}};c.b="http://dashboardbff.oonpayperuse.com.br"},748:function(e,c,n){},795:function(e,c,n){"use strict";n.r(c);var t=n(34),a=n(0),i=n(594),r=n.n(i),o=n(593),s=n(7),l=n(27),j=n(26),b=n(609),d=n(607),x=n.n(d),u=n(622),O=n(118),h=n.n(O),g=n(592),C=n(675),m=n(621),f=n(2),v=n(427),p=(l.a,l.b,l.c,l.d,l.f,l.e,l.g,l.h,function(e){var c=h.a.get("TokenID"),n=h.a.get("userType"),i=(v.AES.decrypt(n,"OnnSeguros").toString(v.enc.Utf8),{headers:{Authorization:"Bearer ".concat(c),Accept:"*/*","Content-Type":"application/json","Access-Control-Allow-Origin":"*","Access-Control-Allow-Methods":"PATCH"}}),l=Object(a.useState)(!1),j=Object(t.a)(l,2),b=(j[0],j[1],Object(a.useState)(!1)),d=Object(t.a)(b,2),O=d[0],p=d[1],k=function(){return p(!1)},N=Object(a.useState)(e.item.description),z=Object(t.a)(N,2),y=z[0],A=z[1],S=Object(a.useState)("Campo ainda n\xe3o aplicado...."),w=Object(t.a)(S,2),T=w[0],B=w[1],F=Object(a.useState)(parseFloat(e.item.valuePerKm)),L=Object(t.a)(F,2),P=L[0],D=L[1],E=Object(a.useState)(!1),I=Object(t.a)(E,2),M=I[0],U=I[1],H=function(e){U(e)};function K(){return(K=Object(u.a)(x.a.mark((function c(){var n;return x.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return p(!1),n={id:e.item.id,description:y,disabled:M,valuePerKm:P},console.log(n),c.next=5,r.a.patch("".concat(o.b,"/coverages"),n,i).then((function(c){p(!1),e.parentCallback()})).catch((function(e){console.log("error",e),alert("Login expirado")}));case 5:case"end":return c.stop()}}),c)})))).apply(this,arguments)}return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(s.c,{disabled:!0,onClick:function(){p(!0)},color:"light",children:"Editar"}),Object(f.jsxs)(g.a,{show:O,onHide:k,size:"xl",children:[Object(f.jsx)(g.a.Header,{closeButton:!0,children:Object(f.jsx)(g.a.Title,{children:"Editar  servi\xe7o "})}),Object(f.jsx)(g.a.Body,{className:"container-body",children:Object(f.jsxs)(s.T,{children:[Object(f.jsx)(s.j,{children:Object(f.jsx)(C.a,{children:Object(f.jsxs)(C.a.Group,{className:"mb-3",controlId:"formBasicEmail",children:[Object(f.jsxs)("div",{className:"containers-inputs-coverages",children:[Object(f.jsx)(s.u,{children:"Nome do Servi\xe7o"}),Object(f.jsx)(s.t,{type:"text",id:"namePlan",value:y,onChange:function(e){A(e.target.value)}})]}),Object(f.jsxs)("div",{className:"containers-inputs-coverages",children:[Object(f.jsx)(s.u,{children:"Valor por Km"}),Object(f.jsx)(s.t,{type:"number",id:"namePlan",value:P,required:!0,min:"0.00",step:".01",onChange:function(e){D(e.target.value)}})]}),Object(f.jsxs)("div",{className:"containers-inputs-coverages",children:[Object(f.jsx)(C.a.Label,{children:" Desativar cobertura ? "}),Object(f.jsx)(s.s,{type:"radio",onChange:function(){H(!0)},name:"statusUser",id:"statusUser1",label:"Sim"}),Object(f.jsx)(s.s,{type:"radio",onChange:function(){H(!1)},name:"statusUser",id:"statusUser2",label:"N\xe3o",defaultChecked:!0})]}),Object(f.jsx)("br",{})]})})}),Object(f.jsx)(s.j,{children:Object(f.jsxs)("div",{className:"containers-inputs-coverages",children:[Object(f.jsx)(C.a.Label,{children:"Descri\xe7\xe3o do servi\xe7o "}),Object(f.jsx)(C.a.Control,{as:"textarea",value:T,onChange:function(e){B(e.target.value)},rows:8})]})})]})}),Object(f.jsxs)(g.a.Footer,{children:[Object(f.jsx)(m.a,{variant:"secondary",onClick:k,children:"Sair"}),Object(f.jsx)(m.a,{onClick:function(){return K.apply(this,arguments)},variant:"primary",children:"Salvar Altera\xe7\xf5es"})]})]})]})}),k=function(e){return Object(f.jsx)(f.Fragment,{children:Object(f.jsxs)("p",{children:["R$ ",e.descricao]})})},N=function(e){var c=Object(a.useState)(!1),n=Object(t.a)(c,2),i=(n[0],n[1],Object(a.useState)(!1)),b=Object(t.a)(i,2),d=b[0],x=b[1],u=function(){return x(!1)},O=Object(a.useState)(),v=Object(t.a)(O,2),p=v[0],k=v[1],N=Object(a.useState)(),z=Object(t.a)(N,2),y=(z[0],z[1]),A=Object(a.useState)(),S=Object(t.a)(A,2),w=S[0],T=S[1],B=Object(a.useState)(),F=Object(t.a)(B,2),L=F[0],P=F[1];function D(e){console.log("Sua escolha foi ",e),k(e)}return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(s.c,{color:"dark",variant:"outline",onClick:function(){x(!0)},children:"+Adicionar"}),Object(f.jsxs)(g.a,{show:d,onHide:u,size:"xl",children:[Object(f.jsx)(g.a.Header,{closeButton:!0,children:Object(f.jsx)(g.a.Title,{children:"Adicionar novo servi\xe7o "})}),Object(f.jsx)(g.a.Body,{className:"container-body",children:Object(f.jsxs)(s.T,{children:[Object(f.jsx)(s.j,{children:Object(f.jsx)(C.a,{children:Object(f.jsxs)(C.a.Group,{className:"mb-3",controlId:"formBasicEmail",children:[Object(f.jsx)(s.u,{children:"Nome do Servi\xe7o"}),Object(f.jsx)(s.t,{type:"text",onChange:function(e){T(e.target.value)},id:"namePlan",placeholder:""}),Object(f.jsx)("br",{}),Object(f.jsxs)(s.l,{className:"container-select",children:[Object(f.jsx)(s.c,{onClick:function(){return D("cilAddressBook")},className:"iconContainer",variant:"ghost",color:"dark",children:Object(f.jsx)(j.a,{icon:l.d,size:"xl"})}),Object(f.jsx)(s.c,{onClick:function(){return D("cilAirplaneModeOff")},className:"iconContainer",variant:"ghost",color:"dark",children:Object(f.jsx)(j.a,{icon:l.f,size:"xl"})}),Object(f.jsx)(s.c,{onClick:function(){return D("cilAirplaneMode")},className:"iconContainer",variant:"ghost",color:"dark",children:Object(f.jsx)(j.a,{icon:l.e,size:"xl"})}),Object(f.jsx)(s.c,{onClick:function(){return D("cilAlarm")},className:"iconContainer",variant:"ghost",color:"dark",children:Object(f.jsx)(j.a,{icon:l.h,size:"xl"})}),Object(f.jsx)(s.c,{onClick:function(){return D("cilAnimal")},className:"iconContainer",variant:"ghost",color:"dark",children:Object(f.jsx)(j.a,{icon:l.j,size:"xl"})}),Object(f.jsx)(s.c,{onClick:function(){return D("cilBabyCarriage")},className:"iconContainer",variant:"ghost",color:"dark",children:Object(f.jsx)(j.a,{icon:l.m,size:"xl"})}),Object(f.jsx)(s.c,{onClick:function(){return D("cilBaby")},className:"iconContainer",variant:"ghost",color:"dark",children:Object(f.jsx)(j.a,{icon:l.l,size:"xl"})}),Object(f.jsx)(s.c,{onClick:function(){return D("cilBellExclamation")},className:"iconContainer",variant:"ghost",color:"dark",children:Object(f.jsx)(j.a,{icon:l.p,size:"xl"})}),Object(f.jsx)(s.c,{onClick:function(){return D("cilBurn")},className:"iconContainer",variant:"ghost",color:"dark",children:Object(f.jsx)(j.a,{icon:l.q,size:"xl"})}),Object(f.jsx)(s.c,{onClick:function(){return D("cilBusAlt")},className:"iconContainer",variant:"ghost",color:"dark",children:Object(f.jsx)(j.a,{icon:l.r,size:"xl"})}),Object(f.jsx)(s.c,{onClick:function(){return D("cilCarAlt")},className:"iconContainer",variant:"ghost",color:"dark",children:Object(f.jsx)(j.a,{icon:l.t,size:"xl"})}),Object(f.jsx)(s.c,{onClick:function(){return D("cilCalendar")},className:"iconContainer",variant:"ghost",color:"dark",children:Object(f.jsx)(j.a,{icon:l.s,size:"xl"})}),Object(f.jsx)(s.c,{onClick:function(){return D("cilCursor")},className:"iconContainer",variant:"ghost",color:"dark",children:Object(f.jsx)(j.a,{icon:l.z,size:"xl"})}),Object(f.jsx)(s.c,{onClick:function(){return D("cilCreditCard")},className:"iconContainer",variant:"ghost",color:"dark",children:Object(f.jsx)(j.a,{icon:l.y,size:"xl"})}),Object(f.jsx)(s.c,{onClick:function(){return D("cilEnvelopeClosed")},className:"iconContainer",variant:"ghost",color:"dark",children:Object(f.jsx)(j.a,{icon:l.B,size:"xl"})}),Object(f.jsx)(s.c,{onClick:function(){return D("cilGarage")},className:"iconContainer",variant:"ghost",color:"dark",children:Object(f.jsx)(j.a,{icon:l.D,size:"xl"})}),Object(f.jsx)(s.c,{onClick:function(){return D("cilHospital")},className:"iconContainer",variant:"ghost",color:"dark",children:Object(f.jsx)(j.a,{icon:l.F,size:"xl"})}),Object(f.jsx)(s.c,{onClick:function(){return D("cilLocationPin")},className:"iconContainer",variant:"ghost",color:"dark",children:Object(f.jsx)(j.a,{icon:l.H,size:"xl"})}),Object(f.jsx)(s.c,{onClick:function(){return D("cilMagnifyingGlass")},className:"iconContainer",variant:"ghost",color:"dark",children:Object(f.jsx)(j.a,{icon:l.J,size:"xl"})}),Object(f.jsx)(s.c,{onClick:function(){return D("cilPaperPlane")},className:"iconContainer",variant:"ghost",color:"dark",children:Object(f.jsx)(j.a,{icon:l.O,size:"xl"})}),Object(f.jsx)(s.c,{onClick:function(){return D("cilRain")},className:"iconContainer",variant:"ghost",color:"dark",children:Object(f.jsx)(j.a,{icon:l.S,size:"xl"})}),Object(f.jsx)(s.c,{onClick:function(){return D("cilRss")},className:"iconContainer",variant:"ghost",color:"dark",children:Object(f.jsx)(j.a,{icon:l.U,size:"xl"})}),Object(f.jsx)(s.c,{onClick:function(){return D("cilTaxi")},className:"iconContainer",variant:"ghost",color:"dark",children:Object(f.jsx)(j.a,{icon:l.X,size:"xl"})}),Object(f.jsx)(s.c,{onClick:function(){return D("cilTruck")},className:"iconContainer",variant:"ghost",color:"dark",children:Object(f.jsx)(j.a,{icon:l.Y,size:"xl"})}),Object(f.jsx)(s.c,{onClick:function(){return D("cilAirplay")},className:"iconContainer",variant:"ghost",color:"dark",children:Object(f.jsx)(j.a,{icon:l.g,size:"xl"})}),Object(f.jsx)(s.c,{onClick:function(){return D("cilAirplay")},className:"iconContainer",variant:"ghost",color:"dark",children:Object(f.jsx)(j.a,{icon:l.g,size:"xl"})}),Object(f.jsx)(s.c,{onClick:function(){return D("cilAirplay")},className:"iconContainer",variant:"ghost",color:"dark",children:Object(f.jsx)(j.a,{icon:l.g,size:"xl"})}),Object(f.jsx)(s.c,{onClick:function(){return D("cilAirplay")},className:"iconContainer",variant:"ghost",color:"dark",children:Object(f.jsx)(j.a,{icon:l.g,size:"xl"})}),Object(f.jsx)(s.c,{onClick:function(){return D("cilAirplay")},className:"iconContainer",variant:"ghost",color:"dark",children:Object(f.jsx)(j.a,{icon:l.g,size:"xl"})}),Object(f.jsx)(s.c,{onClick:function(){return D("cilAirplay")},className:"iconContainer",variant:"ghost",color:"dark",children:Object(f.jsx)(j.a,{icon:l.g,size:"xl"})}),Object(f.jsx)(s.c,{onClick:function(){return D("cilAirplay")},className:"iconContainer",variant:"ghost",color:"dark",children:Object(f.jsx)(j.a,{icon:l.g,size:"xl"})}),Object(f.jsx)(s.c,{onClick:function(){return D("cilAirplay")},className:"iconContainer",variant:"ghost",color:"dark",children:Object(f.jsx)(j.a,{icon:l.g,size:"xl"})})]}),Object(f.jsx)("br",{}),p&&Object(f.jsxs)("div",{children:[Object(f.jsx)("label",{children:" \xcdcone escolhido  "}),Object(f.jsx)("br",{}),Object(f.jsx)(j.a,{icon:p,size:"xl"})]})]})})}),Object(f.jsx)(s.j,{children:Object(f.jsx)(C.a,{children:Object(f.jsxs)(C.a.Group,{className:"mb-3",controlId:"formBasicEmail",children:[Object(f.jsx)(C.a.Label,{children:"Descri\xe7\xe3o do servi\xe7o "}),Object(f.jsx)(C.a.Control,{as:"textarea",onChange:function(e){y(e.target.value)},className:"descricao-container",rows:6}),Object(f.jsx)("br",{}),Object(f.jsx)(C.a.Label,{children:"Valor em reais por Km "}),Object(f.jsx)("br",{}),Object(f.jsx)("input",{className:"container-input-value-service",type:"number",onChange:function(e){P(e.target.value),console.log(L)},required:!0,min:"0.00",step:".01"})]})})})]})}),Object(f.jsxs)(g.a.Footer,{children:[Object(f.jsx)(m.a,{variant:"secondary",onClick:u,children:"Sair"}),Object(f.jsx)(m.a,{onClick:function(){var c=[{description:w,valuePerKm:parseFloat(L)}],n=h.a.get("TokenID"),t=(h.a.get("userType"),{headers:{Authorization:"Bearer ".concat(n),"Content-Type":"application/json;charset=UTF-8","Access-Control-Allow-Origin":"*"}});r.a.post("".concat(o.b,"/coverages"),c,t).then((function(c){x(!1),e.attPage()})).catch((function(e){console.log("error",e),alert("Login expirado"),window.location.reload()}))},variant:"primary",children:"Salvar Altera\xe7\xf5es"})]})]})]})},z=function(e){return Object(f.jsx)(f.Fragment,{children:Object(f.jsx)("p",{children:e.servico})})},y=function(e){return e.status,Object(f.jsx)(f.Fragment,{children:Object(f.jsx)(s.w,{id:"formSwitchCheckChecked",size:"xl",defaultChecked:!0})})},A=(n(748),n(427));c.default=function(){var e,c=h.a.get("userType"),n=A.AES.decrypt(c,"OnnSeguros").toString(A.enc.Utf8),i=Object(a.useState)([]),d=Object(t.a)(i,2),x=d[0],u=d[1],O=n,g=Object(a.useState)(x),C=Object(t.a)(g,2),m=C[0],v=C[1],S=Object(a.useState)(""),w=Object(t.a)(S,2),T=w[0],B=w[1],F=[],L=function(){var c=e.toLocaleLowerCase();x.map((function(e){e.description.toLocaleLowerCase().includes(c)&&(F.push(e),v(F))}))},P=function(){v([]),r.a.get("".concat(o.b,"/coverages"),o.a).then((function(e){u(e.data),v(e.data)})).catch((function(e){console.log("error",e),alert("Login expirado"),window.location.reload()}))};return Object(a.useEffect)((function(){r.a.get("".concat(o.b,"/coverages"),o.a).then((function(e){console.log(e.data),u(e.data),v(e.data)})).catch((function(e){console.log("error",e),alert("Login expirado"),window.location.reload()}))}),[]),""==m?Object(f.jsxs)(f.Fragment,{children:["  ",Object(f.jsxs)("h4",{children:[" ",Object(f.jsx)(b.a,{animation:"grow",variant:"info"}),"  "]})," "]}):Object(f.jsx)(f.Fragment,{children:Object(f.jsx)(s.f,{className:"w-100 cardService",children:Object(f.jsxs)(s.g,{children:[Object(f.jsx)(s.L,{children:Object(f.jsxs)(s.l,{fluid:!0,children:[Object(f.jsx)(s.M,{href:"#"}),Object(f.jsxs)(s.r,{className:"d-flex",children:[Object(f.jsx)(s.t,{type:"search",onChange:function(c){B(c.target.value),e=c.target.value,L()},value:T,className:"me-2",placeholder:"Procurar"}),Object(f.jsx)(s.c,{className:"btn-pesq",variant:"ghost",onClick:P,color:"dark",children:Object(f.jsx)(j.a,{icon:l.I,size:"xl"})}),"ADMIN"==O?Object(f.jsx)(N,{attPage:P}):null]})]})}),Object(f.jsx)("br",{}),Object(f.jsxs)(s.Z,{striped:!0,align:"middle",className:"mb-0 ",hover:!0,responsive:!0,children:[Object(f.jsx)(s.cb,{children:Object(f.jsxs)(s.eb,{children:[Object(f.jsx)(s.db,{children:"Servi\xe7os"}),Object(f.jsx)(s.db,{children:"Status"}),Object(f.jsx)(s.db,{children:"Valor por KM"}),Object(f.jsx)(s.db,{children:"ADMIN"==O?Object(f.jsx)(f.Fragment,{children:" A\xe7\xf5es"}):null})]})}),Object(f.jsx)(s.ab,{children:m.map((function(e,c){return Object(f.jsxs)(s.eb,{children:[Object(f.jsx)(s.bb,{children:Object(f.jsx)(z,{servico:e.description})}),Object(f.jsx)(s.bb,{children:Object(f.jsx)(y,{status:e.disabled})}),Object(f.jsx)(s.bb,{children:Object(f.jsx)(k,{descricao:e.valuePerKm})}),Object(f.jsx)(s.bb,{children:"ADMIN"==O?Object(f.jsx)(p,{item:e,parentCallback:P}):null})]},c)}))})]})]})})})}}}]);
//# sourceMappingURL=26.07e269ac.chunk.js.map