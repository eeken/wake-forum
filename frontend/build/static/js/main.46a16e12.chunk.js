(this.webpackJsonpforum=this.webpackJsonpforum||[]).push([[0],{18:function(e,t,a){},24:function(e,t,a){},26:function(e,t,a){e.exports=a(49)},31:function(e,t,a){},32:function(e,t,a){},33:function(e,t,a){},34:function(e,t,a){},40:function(e,t,a){},41:function(e,t,a){},42:function(e,t,a){},43:function(e,t,a){},44:function(e,t,a){},45:function(e,t,a){},47:function(e,t,a){},49:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),o=a(10),r=a.n(o),l=(a(31),a(16)),i=a(1);a(32);var m=function(){return c.a.createElement("div",{id:"hero"},c.a.createElement("h1",{style:{color:"#ffffff"}},"Discussion Leads To Solution"))},s=(a(33),Object(n.createContext)()),u=function(e){var t=e.reducer,a=e.initialState,o=e.children;return c.a.createElement(s.Provider,{value:Object(n.useReducer)(t,a)},o)},d=function(){return Object(n.useContext)(s)},f=a(3),p=a(14),E=(a(34),a(18),"https://warm-dusk-39605.herokuapp.com"),h=a(15);var v=function(){var e,t=Object(n.useState)(""),a=Object(i.a)(t,2),o=a[0],r=a[1],l=Object(n.useState)(""),m=Object(i.a)(l,2),s=m[0],u=m[1];return c.a.createElement("div",null,c.a.createElement("div",(e={id:"post-model",className:"modal"},Object(p.a)(e,"id","register-outer"),Object(p.a)(e,"style",{background:"rgba(0, 0, 0, 0.4)",display:"none"}),e),c.a.createElement("div",{className:"modal-content"},c.a.createElement("div",{className:"modal-header"},c.a.createElement("span",{className:"close",onClick:function(){document.getElementById("register-outer").style.display="none"}},"\xd7"),c.a.createElement("h2",null,"Create Post")),c.a.createElement("div",{className:"modal-body",id:"register"},c.a.createElement("form",{id:"register-form"},c.a.createElement("span",{className:"error"},o),c.a.createElement("textarea",{id:"title",placeholder:"Enter Post title"}),c.a.createElement("span",{className:"error"},s),c.a.createElement("textarea",{style:{height:"100px"},placeholder:"Type you Post",id:"body"}),c.a.createElement("button",{className:"btn add-to-cart",onClick:function(e){e.preventDefault();var t=document.getElementById("title").value,a=document.getElementById("body").value;t.length<6&&r("Title must be at least 6 chacters Long"),a.length<12&&u("Post must be at least 12 chacters Long"),t.length>6&&a.length>12&&(r(""),u(""),console.log(t),fetch("".concat(E,"/post/create/"),{method:"POST",body:JSON.stringify({title:document.getElementById("title").value,body:document.getElementById("body").value}),headers:{loginToken:localStorage.getItem("loginToken"),"Content-Type":"application/json"}}).then((function(e){return e.json().then((function(e){e.success?h.b.success("Post Added"):h.b.error("Error")})).catch((function(e){console.log(e)}))})))}},"Create Post"))))))};var g=function(){var e=d(),t=Object(i.a)(e,1)[0].user,a=Object(n.useState)(!1),o=Object(i.a)(a,2),r=o[0],l=o[1];return c.a.createElement(c.a.Fragment,null,c.a.createElement(v,null),c.a.createElement("div",{id:"nav-bar-conatiner"},c.a.createElement("h1",{id:"logo"},"Forum"),c.a.createElement("ul",{id:"nav"},c.a.createElement(f.c,{className:"nav-item",exact:!0,to:"/",activeClassName:"nav-item-active"},"Home"),c.a.createElement(f.c,{className:"nav-item",exact:!0,to:"/about",activeClassName:"nav-item-active"},"About"),t?c.a.createElement("li",{className:"nav-item nav-button",id:"makePostButton",onClick:function(){document.getElementById("register-outer").style.display="block"}},"Create Post"):c.a.createElement(f.c,{to:"/register"},c.a.createElement("li",{className:"nav-item nav-button",id:"register"},"Register")),t?c.a.createElement("div",{id:"profile-circle",onClick:function(){l((function(e){return!e}))}},null===t||void 0===t?void 0:t.name[0]):""),c.a.createElement("div",{id:"prifile-dropdow",style:{display:r?"block":"none"}},c.a.createElement("div",null,null===t||void 0===t?void 0:t.name),c.a.createElement("hr",null),c.a.createElement("div",{id:"logout",onClick:function(){localStorage.setItem("loginToken",null),window.location.reload()}},"Logout"))))};a(40),a(41);var b=function(e){var t=e.title,a=e.id;return c.a.createElement(f.b,{to:"/post/".concat(a)},c.a.createElement("div",{id:"forum"},c.a.createElement("p",{className:"link"},t)))};a(42);var y=function(e){var t=e.id,a=e.title,n=e.body,o=e.isLink,r=void 0===o||o,l=e.type;return c.a.createElement("div",{className:"post-container"},r?c.a.createElement(f.b,{to:"/post/".concat(t)},c.a.createElement("h1",{className:"post-hadding"},a),c.a.createElement("p",{className:"post-body"},n)):c.a.createElement(c.a.Fragment,null,c.a.createElement("h1",{className:"post-hadding"},a),c.a.createElement("p",{className:"post-body",style:{overflow:"comment"==l?"visible":"hidden"}},n)))};a(43);var j=function(){var e=Object(n.useState)([]),t=Object(i.a)(e,2),a=t[0],o=t[1];return Object(n.useEffect)((function(){fetch("".concat(E,"/post/")).then((function(e){e.json().then((function(e){o(e)})).catch((function(e){console.log(e)}))})),fetch("".concat(E,"/post/")).then((function(e){e.json().then((function(e){o(e)})).catch((function(e){console.log(e)}))}))}),[]),c.a.createElement("div",{id:"home"},c.a.createElement("div",{id:"left"},a.map((function(e){var t=e.title,a=e.id,n=e.body;return c.a.createElement(y,{title:t,id:a,body:n,key:a})}))),c.a.createElement("div",{id:"right"},c.a.createElement("h3",null,"Most Popular Posts"),a.map((function(e){var t=e.id,a=e.title;return c.a.createElement(b,{id:t,title:a,key:t})}))))};a(44),a(45);var O=function(e){var t=e.postId,a=d(),n=Object(i.a)(a,1)[0].user;return c.a.createElement("div",{id:"comment-form"},c.a.createElement("form",null,c.a.createElement("input",{type:"text",placeholder:"Type you comment",id:"comment"}),c.a.createElement("button",{id:"submitQuery",onClick:function(e){if(e.preventDefault(),n){var a=document.getElementById("comment").value;console.log(a),fetch("".concat(E,"/comment/"),{method:"POST",body:JSON.stringify({postId:t,comment:a}),headers:{loginToken:localStorage.getItem("loginToken"),"Content-Type":"application/json"}}).then((function(e){return e.json().then((function(e){console.log(e)})).catch((function(e){console.log(e)}))}))}else window.history.pushState("login","LOgin page ","/login"),window.location.reload()}},"Submit")))};var w=function(e){var t=e.match.params.id,a=Object(n.useState)(null),o=Object(i.a)(a,2),r=o[0],l=o[1],m=Object(n.useState)([]),s=Object(i.a)(m,2),u=s[0],d=s[1];return Object(n.useEffect)((function(){fetch("".concat(E,"/post/").concat(t)).then((function(e){e.json().then((function(e){l(e)})).catch((function(e){console.log(e)}))})),fetch("".concat(E,"/comment/").concat(t)).then((function(e){e.json().then((function(e){d(e),console.log(e)})).catch((function(e){console.log(e)}))}))}),[]),c.a.createElement("div",{id:"home"},c.a.createElement("div",{id:"left",style:{width:"100%"}},c.a.createElement("h1",{className:"post-hadding-detail link",style:{marginBottom:"15px"}},null===r||void 0===r?void 0:r.title),c.a.createElement("p",{className:"post-body"},null===r||void 0===r?void 0:r.body),c.a.createElement(O,{postId:null===r||void 0===r?void 0:r.id}),c.a.createElement("h3",{id:"reply-hadding"},"All Replies"),u.map((function(e){var t=e.id,a=e.comment,n=e.name;return c.a.createElement(y,{key:t,title:n,body:a,isLink:!1,type:"comment"})}))))},k=a(9),S=a.n(k),N=a(13),I=function(){var e=Object(N.a)(S.a.mark((function e(t,a){var n;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(E,"/user/").concat(t,"/"),{method:"POST",body:JSON.stringify(a),headers:{"Content-Type":"application/json"}}).then((function(e){return e.json().then((function(e){n=e})).catch((function(e){console.log(e)}))}));case 2:return e.abrupt("return",n);case 3:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}();var T=function(e){var t=e.history,a=Object(n.useState)(""),o=Object(i.a)(a,2),r=o[0],l=o[1],m=Object(n.useState)(""),s=Object(i.a)(m,2),u=s[0],d=s[1],p=Object(n.useState)(""),E=Object(i.a)(p,2),h=E[0],v=E[1],g=Object(n.useState)(null),b=Object(i.a)(g,2),y=b[0],j=b[1],O=function(e,t){switch(e){case"name":l(t);break;case"email":d(t);break;case"pwd":v(t)}},w=function(){var e=Object(N.a)(S.a.mark((function e(a){var n,c;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),e.next=3,I("register",{name:r,email:u,pwd:h});case 3:(n=e.sent).success?(j(null),localStorage.setItem("loginToken",n.loginToken),t.push("/"),window.location.reload()):(c={},n.error.details.map((function(e){c[e.context.label]=e.message})),j(c));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return c.a.createElement("div",{id:"register-outer"},c.a.createElement("h1",null,"Forum"),c.a.createElement("div",{id:"register"},c.a.createElement("h2",null,"Create account"),c.a.createElement("form",{id:"register-form"},c.a.createElement("label",{for:"name"},"Your Name"),c.a.createElement("span",{className:"error"},null===y||void 0===y?void 0:y.name),c.a.createElement("input",{type:"text",id:"name",value:r,onChange:function(e){O("name",e.target.value)}}),c.a.createElement("label",{for:"email"},"Email"),c.a.createElement("span",{className:"error"},null===y||void 0===y?void 0:y.email),c.a.createElement("input",{type:"email",id:"email",value:u,onChange:function(e){O("email",e.target.value)}}),c.a.createElement("label",{for:"pwd"},"Password"),c.a.createElement("span",{className:"error"},null===y||void 0===y?void 0:y.pwd),c.a.createElement("input",{type:"password",id:"pwd",value:h,onChange:function(e){O("pwd",e.target.value)}}),c.a.createElement("button",{className:"btn add-to-cart",onClick:w},"Create your Account")),c.a.createElement("span",{id:"alreay-member"},"Already have an account?"," ",c.a.createElement(f.b,{className:"link",to:"/login"},"Sign-In"))))};a(47);var x=function(e){var t=e.which;return c.a.createElement("div",{id:"sidebar"},c.a.createElement(f.c,{className:"item",to:"/".concat(t),exact:!0,activeClassName:"item-active"},c.a.createElement("div",null,"Manage Users")),c.a.createElement(f.c,{className:"item",to:"/".concat(t,"/mangePost"),activeClassName:"item-active",exact:!0},c.a.createElement("div",null,"Manage Posts")),"admin"==t?c.a.createElement(f.c,{className:"item",to:"/admin/manageModerators",activeClassName:"item-active",exact:!0},c.a.createElement("div",null,"Manage Moderators")):"")};var C=function(){Object(n.useEffect)((function(){}),[]);var e=Object(n.useState)({}),t=Object(i.a)(e,2),a=t[0],o=t[1];return c.a.createElement("div",null,c.a.createElement("h3",null,"Get user By Email"),c.a.createElement("form",{id:"admin-form"},c.a.createElement("input",{type:"email",placeholder:"Enter User Email",id:"email"}),c.a.createElement("button",{onClick:function(e){e.preventDefault();var t=document.getElementById("email").value;fetch("".concat(E,"/user/getByEmail/").concat(t)).then((function(e){e.json().then((function(e){o(e)})).catch((function(e){console.log(e)}))}))}},"GET")),a.id?c.a.createElement(c.a.Fragment,null,c.a.createElement("h3",null,"User Info"),c.a.createElement("div",{className:"admin-active"},"id : ",c.a.createElement("span",null,a.id)),c.a.createElement("div",{className:"admin-active"},"Nmae : ",c.a.createElement("span",null,a.name)),c.a.createElement("div",{className:"admin-active"},"Email : ",c.a.createElement("span",null,a.email)),c.a.createElement("button",{id:"button",onClick:function(){fetch("".concat(E,"/user/delete/"),{method:"POST",body:JSON.stringify({id:a.id}),headers:{id:"jajajj","Content-Type":"application/json"}}).then((function(e){return e.json().then((function(e){o({})})).catch((function(e){console.log(e)}))}))}},"Delete User")):"")},P=(a(24),a(2));var B=function(){Object(n.useEffect)((function(){}),[]);var e=Object(n.useState)({}),t=Object(i.a)(e,2),a=t[0],o=t[1];return c.a.createElement("div",null,c.a.createElement("h3",null,"Get Post By Id"),c.a.createElement("form",{id:"admin-form"},c.a.createElement("input",{type:"text",placeholder:"Enter Post id",id:"id"}),c.a.createElement("button",{onClick:function(e){e.preventDefault();var t=document.getElementById("id").value;fetch("".concat(E,"/post/").concat(t)).then((function(e){e.json().then((function(e){o(e)})).catch((function(e){console.log(e)}))}))}},"GET")),a.id?c.a.createElement(c.a.Fragment,null,c.a.createElement("h3",null,"User Info"),c.a.createElement("div",{className:"admin-active"},"id : ",c.a.createElement("span",null,a.id)),c.a.createElement("div",{className:"admin-active"},"Title : ",c.a.createElement("span",null,a.title)),c.a.createElement("div",{className:"admin-active"},"Body : ",c.a.createElement("span",null,a.body)),c.a.createElement("button",{id:"button",onClick:function(){fetch("".concat(E,"/post/delete/"),{method:"POST",body:JSON.stringify({id:a.id}),headers:{id:"jajajj","Content-Type":"application/json"}}).then((function(e){return e.json().then((function(e){o({})})).catch((function(e){console.log(e)}))}))}},"Delete Post")):"")};var D=function(e){var t=e.useranme,a=e.id,n=e.changeList;return c.a.createElement("div",{id:"moderator"},c.a.createElement("div",{className:"admin-active"},"Username : ",c.a.createElement("span",null,t)),c.a.createElement("button",{id:"button",onClick:function(){fetch("".concat(E,"/moderator/delete/"),{method:"POST",body:JSON.stringify({id:a}),headers:{"Content-Type":"application/json"}}).then((function(e){return e.json().then((function(e){n(Math.random())})).catch((function(e){console.log(e)}))}))}},"Delete This moderator"))};var M=function(){var e=Object(n.useState)(1),t=Object(i.a)(e,2),a=t[0],o=t[1],r=Object(n.useState)([]),l=Object(i.a)(r,2),m=l[0],s=l[1];return Object(n.useEffect)((function(){fetch("".concat(E,"/moderator/")).then((function(e){return e.json().then((function(e){s(e)})).catch((function(e){console.log(e)}))}))}),[a]),c.a.createElement("div",null,c.a.createElement("form",{id:"admin-form"},c.a.createElement("input",{type:"text",placeholder:"Enter Username",id:"username",required:!0}),c.a.createElement("br",null),c.a.createElement("input",{type:"password",placeholder:"Enter Password",id:"pwd",required:!0}),c.a.createElement("br",null),c.a.createElement("button",{onClick:function(e){e.preventDefault();var t=document.getElementById("username").value,a=document.getElementById("pwd").value;fetch("".concat(E,"/moderator/"),{method:"POST",body:JSON.stringify({useranme:t,pwd:a}),headers:{"Content-Type":"application/json"}}).then((function(e){return e.json().then((function(e){o(Math.random())})).catch((function(e){console.log(e)}))}))}},"Create Moderator")),c.a.createElement("h3",{style:{marginBottom:"20px"}},"All Moderators"),m.map((function(e){var t=e.id,a=e.username;return c.a.createElement(D,{useranme:a,id:t,key:t,changeList:o})})))};var L=function(e){var t=e.history,a=d();return Object(i.a)(a,1)[0].adminId||t.push("/login/?admin"),c.a.createElement("div",{style:{background:"#ffffff"},id:"admin"},c.a.createElement(x,{which:"admin"}),c.a.createElement("div",{id:"admin-right"},c.a.createElement(P.c,null,c.a.createElement(P.a,{exact:!0,path:"/admin",component:C}),c.a.createElement(P.a,{exact:!0,path:"/admin/mangePost",component:B}),c.a.createElement(P.a,{exact:!0,path:"/admin/manageModerators",component:M}))))};var _=function(e){var t=e.history,a=e.location,o=Object(n.useState)(""),r=Object(i.a)(o,2),m=r[0],s=r[1],u=Object(n.useState)(""),p=Object(i.a)(u,2),E=p[0],h=p[1],v=d(),g=Object(i.a)(v,2);Object(l.a)(g[0]);var b=g[1],y=Object(n.useState)(""),j=Object(i.a)(y,2),O=j[0],w=j[1],k=function(e,t){switch(e){case"email":s(t);break;case"pwd":h(t)}},T=function(){var e=Object(N.a)(S.a.mark((function e(n){var c,o,r,l,s,u,d,f,p,h,v,g,y,j,O;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),"?admin"!=a.search){e.next=8;break}return e.next=4,I("login",{username:m,pwd:E,which:"admin"});case 4:(c=e.sent).success?(w(""),localStorage.setItem("loginToken",c.loginToken),o=a.search.replace("?","").split("="),r=Object(i.a)(o,2),l=r[0],s=r[1],"redirectTo"==l?(t.push(s),window.location.reload()):(console.log(c.id),b({type:"SET_ADMIN_ID",value:c.id}),t.push("/admin"))):w("Inavlid Email or Password"),e.next=19;break;case 8:if("?moderator"!=a.search){e.next=15;break}return e.next=11,I("login",{username:m,pwd:E,which:"moderator"});case 11:(u=e.sent).success?(w(""),localStorage.setItem("loginToken",u.loginToken),d=a.search.replace("?","").split("="),f=Object(i.a)(d,2),p=f[0],h=f[1],"redirectTo"==p?(t.push(h),window.location.reload()):(console.log(u.id),b({type:"SET_MOD_ID",value:u.id}),t.push("/moderator"))):w("Inavlid Email or Password"),e.next=19;break;case 15:return e.next=17,I("login",{email:m,pwd:E});case 17:(v=e.sent).success?(w(""),localStorage.setItem("loginToken",v.loginToken),g=a.search.replace("?","").split("="),y=Object(i.a)(g,2),j=y[0],O=y[1],"redirectTo"==j?(t.push(O),window.location.reload()):(t.push("/"),window.location.reload())):w("Inavlid Email or Password");case 19:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return c.a.createElement("div",{id:"register-outer"},c.a.createElement("h1",null,"?admin"==a.search?"Admin Login":"?moderator"==a.search?"Moderator Login":"Forum"),c.a.createElement("div",{id:"register"},c.a.createElement("h2",null,"Sign-In"),c.a.createElement("form",{id:"register-form"},c.a.createElement("span",{className:"error"},O),c.a.createElement("label",{for:"email"},"Email"),c.a.createElement("input",{type:"email",id:"email",onChange:function(e){k("email",e.target.value)},value:m}),c.a.createElement("label",{for:"pwd"},"Password"),c.a.createElement("input",{type:"password",id:"pwd",onChange:function(e){k("pwd",e.target.value)},value:E}),c.a.createElement("button",{className:"btn add-to-cart",onClick:T},"Sign-In")),a.search?"":c.a.createElement("span",{id:"alreay-member"},"Dont have a account?"," ",c.a.createElement(f.b,{className:"link",to:"/register"},"register"))))};var q=function(e){var t=e.history,a=d(),n=Object(i.a)(a,1)[0];return n.adminId,n.moderatorId||t.push("/login/?moderator"),c.a.createElement("div",{style:{background:"#ffffff"},id:"admin"},c.a.createElement(x,{which:"moderator"}),c.a.createElement("div",{id:"admin-right"},c.a.createElement(P.c,null,c.a.createElement(P.a,{exact:!0,path:"/moderator",component:C}),c.a.createElement(P.a,{exact:!0,path:"/moderator/mangePost",component:B}))))};a(48);var F=function(){return c.a.createElement("div",{style:{padding:"20px",maxWidth:"600px"}},'"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." Section 1.10.32 of "de Finibus Bonorum et Malorum", written by Cicero in 45 BC "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae')};var U=function(){var e=d(),t=Object(i.a)(e,2);Object(l.a)(t[0]);var a=t[1];return Object(n.useEffect)((function(){localStorage.getItem("loginToken")&&fetch("".concat(E,"/user/getUserInfo/"),{method:"GET",headers:{loginToken:localStorage.getItem("loginToken")}}).then((function(e){return e.json().then((function(e){e.success&&a({type:"SET_USER_INFO",value:e})})).catch((function(e){console.log(e)}))}))}),[]),c.a.createElement(c.a.Fragment,null,c.a.createElement(h.a,null),c.a.createElement("div",{className:"header"},c.a.createElement(P.c,null,c.a.createElement(P.a,{exact:!0,path:"/register",component:T}),c.a.createElement(P.a,{exact:!0,path:"/login",component:_}),c.a.createElement(P.a,{path:"/admin",component:L}),c.a.createElement(P.a,{path:"/moderator",component:q}),c.a.createElement(P.a,{path:"*"},c.a.createElement(g,null),c.a.createElement(m,null)))),c.a.createElement(P.c,null,c.a.createElement(P.a,{exact:!0,path:"/",component:j}),c.a.createElement(P.a,{exact:!0,path:"/about",component:F}),c.a.createElement(P.a,{exact:!0,path:"/post/:id",component:w})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var A=a(12),J=function(e,t){switch(t.type){case"SET_USER_INFO":return Object(A.a)(Object(A.a)({},e),{},{user:t.value});case"SET_ADMIN_ID":return Object(A.a)(Object(A.a)({},e),{},{adminId:t.value});case"SET_MOD_ID":return Object(A.a)(Object(A.a)({},e),{},{moderatorId:t.value});default:return e}};r.a.render(c.a.createElement(f.a,null,c.a.createElement(c.a.StrictMode,null,c.a.createElement(u,{initialState:{adminId:null,user:null,moderatorId:null},reducer:J},c.a.createElement(U,null)))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[26,1,2]]]);
//# sourceMappingURL=main.46a16e12.chunk.js.map