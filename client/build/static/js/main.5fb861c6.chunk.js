(this["webpackJsonpmern-client"]=this["webpackJsonpmern-client"]||[]).push([[0],{71:function(e,t,n){},77:function(e,t,n){},78:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),i=n(58),r=n.n(i),s=(n(71),n(72),n(15)),o=n(18),l=n(6),d=n(63),j=n(89),u=n(91),b=n(88),m=n(60),h=n(9),O=n(64),p=function(e,t){return"SAMPLE_ACTION"===t.type?Object(s.a)({},e):e};var x,f,v=n(3),g=["value"],w=Object(a.createContext)(),N=w.Provider,k=function(e){e.value;var t,n=Object(O.a)(e,g),c=(t={},Object(a.useReducer)(p,t)),i=Object(h.a)(c,2),r=i[0],o=i[1];return Object(v.jsx)(N,Object(s.a)({value:[r,o]},n))},y=n.p+"static/media/dnd.5a33f684.jpg",S=n.p+"static/media/dndsheet.0a7b4862.webp",C=function(){return Object(v.jsxs)("div",{className:"Home",children:[Object(v.jsxs)("div",{className:"headerContainer",style:{backgroundImage:"url(".concat(y,")")},children:[Object(v.jsx)("h1",{children:"Just Roll with it"}),Object(v.jsx)("p",{children:'"Lorem ipsum dolor sit amet, consectetur dipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat"'}),Object(v.jsx)("div",{children:Object(v.jsx)("button",{children:" CREATE CHARACTER"})})]}),Object(v.jsx)("div",{className:"demo-sheet",children:Object(v.jsx)("img",{src:S,alt:"dnd character sheet"})})]})},$=n(11),E=n(8),T=n(13),A=n(92),I=n(49),L=n(90),R=Object(L.a)(x||(x=Object(I.a)(["\n  mutation login($email: String!, $password: String!) {\n    login(email: $email, password: $password) {\n      token\n      user {\n        _id\n      }\n    }\n  }\n"]))),W=Object(L.a)(f||(f=Object(I.a)(["\n  mutation addUser(\n    $firstName: String!\n    $lastName: String!\n    $email: String!\n    $password: String!\n  ) {\n    addUser(\n      firstName: $firstName\n      lastName: $lastName\n      email: $email\n      password: $password\n    ) {\n      token\n      user {\n        _id\n      }\n    }\n  }\n"]))),F=n(24),P=n(25),U=n(50),_=n.n(U),q=new(function(){function e(){Object(F.a)(this,e)}return Object(P.a)(e,[{key:"getProfile",value:function(){return _()(this.getToken())}},{key:"loggedIn",value:function(){var e=this.getToken();return!!e&&!this.isTokenExpired(e)}},{key:"isTokenExpired",value:function(e){try{return _()(e).exp<Date.now()/1e3}catch(t){return!1}}},{key:"getToken",value:function(){return localStorage.getItem("id_token")}},{key:"login",value:function(e){localStorage.setItem("id_token",e),window.location.assign("/")}},{key:"logout",value:function(){localStorage.removeItem("id_token"),window.location.assign("/")}}]),e}());var B=function(e){var t=Object(a.useState)({email:"",password:""}),n=Object(h.a)(t,2),c=n[0],i=n[1],r=Object(A.a)(R),l=Object(h.a)(r,2),d=l[0],j=l[1].error,u=function(){var e=Object(T.a)(Object(E.a)().mark((function e(t){var n,a;return Object(E.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,d({variables:{email:c.email,password:c.password}});case 4:n=e.sent,a=n.data.login.token,q.login(a),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}(),b=function(e){var t=e.target,n=t.name,a=t.value;i(Object(s.a)(Object(s.a)({},c),{},Object($.a)({},n,a)))};return Object(v.jsxs)("div",{className:"container my-1",children:[Object(v.jsx)(o.b,{to:"/signup",children:"\u2190 Go to Signup"}),Object(v.jsx)("h2",{children:"Login"}),Object(v.jsxs)("form",{onSubmit:u,children:[Object(v.jsxs)("div",{className:"flex-row space-between my-2",children:[Object(v.jsx)("label",{htmlFor:"email",children:"Email address:"}),Object(v.jsx)("input",{placeholder:"youremail@test.com",name:"email",type:"email",id:"email",onChange:b})]}),Object(v.jsxs)("div",{className:"flex-row space-between my-2",children:[Object(v.jsx)("label",{htmlFor:"pwd",children:"Password:"}),Object(v.jsx)("input",{placeholder:"******",name:"password",type:"password",id:"pwd",onChange:b})]}),j?Object(v.jsx)("div",{children:Object(v.jsx)("p",{className:"error-text",children:"The provided credentials are incorrect"})}):null,Object(v.jsx)("div",{className:"flex-row flex-end",children:Object(v.jsx)("button",{type:"submit",children:"Submit"})})]})]})};var D=function(){return Object(v.jsx)("div",{})};n(77);var J=function(){return Object(v.jsxs)("header",{children:[Object(v.jsxs)("div",{className:"header1",children:[Object(v.jsx)("div",{className:"left",children:Object(v.jsx)("h1",{children:"Roll With It"})}),Object(v.jsx)("div",{className:"middle"}),Object(v.jsx)("div",{className:"right",children:q.loggedIn()?Object(v.jsx)("ul",{className:"flex-row",children:Object(v.jsx)("li",{className:"mx-1",children:Object(v.jsx)("a",{href:"/",onClick:function(){return q.logout()},children:"Logout"})})}):Object(v.jsxs)("ul",{className:"flex-row",children:[Object(v.jsx)("li",{className:"mx-1",children:Object(v.jsx)(o.b,{to:"/signup",children:"Signup"})}),Object(v.jsx)("li",{className:"mx-1",children:Object(v.jsx)(o.b,{to:"/login",children:"Login"})})]})})]}),Object(v.jsx)(D,{})]})},G=function(){return Object(v.jsx)("div",{})};var H=function(e){var t=Object(a.useState)({email:"",password:""}),n=Object(h.a)(t,2),c=n[0],i=n[1],r=Object(A.a)(W),l=Object(h.a)(r,1)[0],d=function(){var e=Object(T.a)(Object(E.a)().mark((function e(t){var n,a;return Object(E.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,l({variables:{email:c.email,password:c.password,firstName:c.firstName,lastName:c.lastName}});case 3:n=e.sent,a=n.data.addUser.token,q.login(a);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),j=function(e){var t=e.target,n=t.name,a=t.value;i(Object(s.a)(Object(s.a)({},c),{},Object($.a)({},n,a)))};return Object(v.jsxs)("div",{className:"container my-1",children:[Object(v.jsx)(o.b,{to:"/login",children:"\u2190 Go to Login"}),Object(v.jsx)("h2",{children:"Signup"}),Object(v.jsxs)("form",{onSubmit:d,children:[Object(v.jsxs)("div",{className:"flex-row space-between my-2",children:[Object(v.jsx)("label",{htmlFor:"firstName",children:"First Name:"}),Object(v.jsx)("input",{placeholder:"First",name:"firstName",type:"firstName",id:"firstName",onChange:j})]}),Object(v.jsxs)("div",{className:"flex-row space-between my-2",children:[Object(v.jsx)("label",{htmlFor:"lastName",children:"Last Name:"}),Object(v.jsx)("input",{placeholder:"Last",name:"lastName",type:"lastName",id:"lastName",onChange:j})]}),Object(v.jsxs)("div",{className:"flex-row space-between my-2",children:[Object(v.jsx)("label",{htmlFor:"email",children:"Email:"}),Object(v.jsx)("input",{placeholder:"youremail@test.com",name:"email",type:"email",id:"email",onChange:j})]}),Object(v.jsxs)("div",{className:"flex-row space-between my-2",children:[Object(v.jsx)("label",{htmlFor:"pwd",children:"Password:"}),Object(v.jsx)("input",{placeholder:"******",name:"password",type:"password",id:"pwd",onChange:j})]}),Object(v.jsx)("div",{className:"flex-row flex-end",children:Object(v.jsx)("button",{type:"submit",children:"Submit"})})]})]})},M=Object(d.a)({uri:"/graphql"}),z=Object(m.a)((function(e,t){var n=t.headers,a=localStorage.getItem("id_token");return{headers:Object(s.a)(Object(s.a)({},n),{},{authorization:a?"Bearer ".concat(a):""})}})),K=new j.a({link:z.concat(M),cache:new u.a});var Q=function(){return Object(v.jsx)(b.a,{client:K,children:Object(v.jsx)(o.a,{children:Object(v.jsx)("div",{className:"screen",children:Object(v.jsxs)(k,{children:[Object(v.jsx)(J,{}),Object(v.jsxs)(l.c,{children:[Object(v.jsx)(l.a,{path:"/",element:Object(v.jsx)(C,{})}),Object(v.jsx)(l.a,{path:"/login",element:Object(v.jsx)(B,{})}),Object(v.jsx)(l.a,{path:"/signup",element:Object(v.jsx)(H,{})}),Object(v.jsx)(l.a,{path:"*",element:Object(v.jsx)(G,{})})]})]})})})})},V=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function X(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}r.a.render(Object(v.jsx)(c.a.StrictMode,{children:Object(v.jsx)(Q,{})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("","/service-worker.js");V?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):X(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):X(t,e)}))}}()}},[[78,1,2]]]);
//# sourceMappingURL=main.5fb861c6.chunk.js.map