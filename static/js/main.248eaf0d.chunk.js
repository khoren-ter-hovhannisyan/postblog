(this.webpackJsonpproject=this.webpackJsonpproject||[]).push([[0],{44:function(e,t,a){e.exports=a.p+"static/media/images.794b2d35.jpeg"},47:function(e,t,a){e.exports=a(65)},52:function(e,t,a){},53:function(e,t,a){},55:function(e,t,a){},59:function(e,t,a){},60:function(e,t,a){},61:function(e,t,a){},62:function(e,t,a){},63:function(e,t,a){},64:function(e,t,a){},65:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(14),l=a.n(o),c=(a(52),a(7)),s=(a(53),a(54),a(72)),i=a(71),u=a(17),m=a(22),d=function(){function e(){Object(u.a)(this,e)}return Object(m.a)(e,null,[{key:"set",value:function(e,t){try{var a=JSON.stringify(t);localStorage.setItem(e,a)}catch(n){throw new Error(n.message)}}},{key:"get",value:function(e){try{var t=localStorage.getItem(e);return JSON.parse(t)||null}catch(a){throw new Error(a.message)}}},{key:"remove",value:function(e){try{localStorage.removeItem(e)}catch(t){throw new Error(t.message)}}},{key:"clear",value:function(){try{localStorage.clear()}catch(e){}}}]),e}(),p=(a(55),function(e){var t=e.changeTab,a=e.tab;return r.a.createElement(s.a,{className:"nav justify-content-between navBar",variant:"dark"},r.a.createElement(i.a,null,r.a.createElement(i.a.Link,{style:{color:"#FFC312"},onClick:function(){return t("HOME")}},r.a.createElement("h3",null,"BlogNews ",r.a.createElement("span",null,"\ud83d\udcf0")))),r.a.createElement(i.a,null,!d.get("token")&&r.a.createElement(i.a.Link,{style:{color:"#FFC312"},onClick:function(){return t("LOGIN")}},"Login"),d.get("token")&&"WORKSPACE"!==a?r.a.createElement(i.a.Link,{style:{color:"#FFC312"},onClick:function(){return t("WORKSPACE")}},"WorkSpace"):"",d.get("token")&&r.a.createElement(i.a.Link,{style:{color:"#FFC312"},onClick:function(){t("LOGIN"),d.clear()}},"Sign out")))}),f=a(46),E=a(67),h=(a(59),function(e){return r.a.createElement(f.a,{className:"cardPost"},r.a.createElement(f.a.Header,{className:"cardHeader"},r.a.createElement(f.a.Title,null,e.post.author," "),r.a.createElement(f.a.Title,null),r.a.createElement(f.a.Title,null,e.post.title)),r.a.createElement(f.a.Body,null,r.a.createElement(f.a.Text,null,e.post.description),r.a.createElement("div",{className:"buttons"},"WORKSPACE"===e.tab&&r.a.createElement(E.a,{onClick:function(){e.remove(e.post)},size:"lg",className:"btn-danger"},"Delete"),"WORKSPACE"===e.tab&&r.a.createElement(E.a,{onClick:function(){e.modal(e.post)},size:"lg",className:"btn-dark"},"Edit"))))}),b=a(68),v=function(){function e(t){Object(u.a)(this,e);var a=t.url,n=t.endpoint;this.endpoint=n,this.url=a,this.fullURL=this.url+"/"+this.endpoint}return Object(m.a)(e,[{key:"getList",value:function(){return fetch(this.fullURL,{})}},{key:"getPostsByID",value:function(e){return fetch(this.fullURL+"/"+e+"/posts",{})}},{key:"getByID",value:function(e){return fetch(this.fullURL+"/"+e,{})}},{key:"signFetch",value:function(e){return fetch("".concat(this.fullURL),{method:"POST",body:JSON.stringify(e),headers:{"Content-Type":"application/json"}}).then((function(e){if(e.ok)return e.json();throw new Error("Email or Password is incorrect")})).then((function(e){return e})).catch((function(e){console.log("Error",e)}))}},{key:"loginFetch",value:function(e){return fetch("".concat(this.fullURL,"/login"),{method:"POST",body:JSON.stringify(e),headers:{"Content-Type":"application/json"}})}}]),e}(),g=function(){function e(t){Object(u.a)(this,e);var a=t.url,n=t.endpoint;this.endpoint=n,this.url=a,this.fullURL=this.url+"/"+this.endpoint}return Object(m.a)(e,[{key:"getList",value:function(){return fetch(this.fullURL,{})}},{key:"getByID",value:function(e){var t=e.id;return fetch(this.fullURL+"/"+t,{})}},{key:"post",value:function(e){return fetch(this.fullURL+"?access_token="+d.get("token"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then((function(e){return e.json()})).catch((function(e){return console.log(e)}))}},{key:"edit",value:function(e){return fetch(this.fullURL,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)})}},{key:"remove",value:function(e){return fetch(this.fullURL+"/"+e,{method:"DELETE"}).then((function(e){return e.json()})).catch((function(e){return console.log(e)}))}}]),e}(),y=new function e(t){var a=t.url;Object(u.a)(this,e),this.posts=new g({url:a,endpoint:"posts"}),this.peoples=new v({url:a,endpoint:"people"})}({url:"https://it-blog-posts.herokuapp.com/api"}),O=(a(60),function(e){return r.a.createElement("div",{className:"cardPeople"},r.a.createElement("div",null,r.a.createElement(f.a.Title,null,e.people.username," ",e.people.lastname)))}),j=(a(61),function(e){var t=Object(n.useState)([]),a=Object(c.a)(t,2),o=a[0],l=a[1],s=Object(n.useState)([]),i=Object(c.a)(s,2),u=i[0],m=i[1],d=Object(n.useState)(!0),p=Object(c.a)(d,2),f=p[0],E=p[1];return Object(n.useEffect)((function(){y.posts.getList().then((function(e){return e.json()})).then((function(e){e.reverse(),E(!1),l(e)}))}),[]),Object(n.useEffect)((function(){y.peoples.getList().then((function(e){return e.json()})).then((function(e){e.reverse(),m(e)}))}),[]),r.a.createElement("div",null,f&&r.a.createElement(b.a,{style:{marginTop:"100px"},animation:"border"}),!f&&r.a.createElement("div",{className:"mainHome"},r.a.createElement("div",{className:"peopleWrapper"},u.map((function(e){return r.a.createElement(O,{key:e.id,people:e})}))),r.a.createElement("div",{className:"mainPost"},r.a.createElement("div",{className:"postWrapper"},o.map((function(t){return r.a.createElement(h,{key:t.id,tab:e.tab,post:t})}))),r.a.createElement("div",{className:"footerH"},r.a.createElement("p",{className:"footerH"},"Created By Khoren Ter-Hovhannisyan 2019")))))}),N=a(12),k=a(20),C=a(70),S=a(69),w=(a(62),function(e){var t=e.changeTab,a=Object(n.useState)({}),o=Object(c.a)(a,2),l=o[0],s=o[1],i=Object(n.useState)(!1),u=Object(c.a)(i,2),m=u[0],p=u[1],f=function(e){var t=e.target,a=t.name,n=t.value;s(Object(k.a)({},l,Object(N.a)({},a,n))),console.log(l)},h=function(){p(!1),s({email:"",password:""})};return r.a.createElement("div",null,r.a.createElement("div",{className:"mainL"},r.a.createElement(C.a,{className:"formMainL"},r.a.createElement(C.a.Group,{controlId:"formBasicEmail"},r.a.createElement(S.a,{show:m,onHide:h,animation:!1},r.a.createElement(S.a.Header,{className:"modalStyle"},r.a.createElement("h3",null,"Email or password is incorrect !!!")),r.a.createElement(S.a.Footer,{className:"modalStyle"},r.a.createElement(E.a,{className:"btn-dark",onClick:h},"Close"))),r.a.createElement(C.a.Label,null,"Email address"),r.a.createElement(C.a.Control,{name:"email",value:l.email,onChange:f,type:"email",placeholder:"Enter email"}),r.a.createElement(C.a.Text,{className:"text-muted"},"We'll never controlshare your email with anyone else.")),r.a.createElement(C.a.Group,{controlId:"formBasicPassword"},r.a.createElement(C.a.Label,null,"Password"),r.a.createElement(C.a.Control,{name:"password",value:l.password,onChange:f,type:"password",placeholder:"Password"})),r.a.createElement("div",{className:"Formbuttons",style:{display:"flex",justifyContent:"space-between"}},r.a.createElement(E.a,{onClick:function(){return t("SIGNUP")},className:"btn-dark",variant:"primary",type:"button"},"Sign Up  "),r.a.createElement(E.a,{onClick:function(){console.log(l),y.peoples.loginFetch(l).then((function(e){if(e.ok)return e.json();throw new Error("Email or Password is incorrect")})).then((function(e){d.set("token",e.id),d.set("userId",e.userId),t("WORKSPACE")})).catch((function(e){p(!0)}))},className:"btn-dark",variant:"primary",type:"button"},"Submit")))),r.a.createElement("div",{className:"footer"},r.a.createElement("p",{className:"pFooter"},"Created By Khoren Ter-Hovhannisyan 2019")))}),L=(a(63),function(e){var t=e.changeTab,a=Object(n.useState)({}),o=Object(c.a)(a,2),l=o[0],s=o[1],i=function(e){var t=e.target,a=t.name,n=t.value;s(Object(k.a)({},l,Object(N.a)({},a,n)))};return r.a.createElement("div",{className:"main"},r.a.createElement(C.a,{className:"formMain"},r.a.createElement(C.a.Group,null,r.a.createElement(C.a.Label,null,"Name"),r.a.createElement(C.a.Control,{onChange:i,name:"username",type:"text",placeholder:"Name"})),r.a.createElement(C.a.Group,null,r.a.createElement(C.a.Label,null,"Lastname"),r.a.createElement(C.a.Control,{onChange:i,name:"lastname",type:"text",placeholder:"Lastname"})),r.a.createElement(C.a.Group,{controlId:"formBasicEmail"},r.a.createElement(C.a.Label,null,"Email address"),r.a.createElement(C.a.Control,{onChange:i,name:"email",type:"email",placeholder:"Enter email"}),r.a.createElement(C.a.Text,{className:"text-muted"},"We'll never share your email with anyone else.")),r.a.createElement(C.a.Group,{controlId:"formBasicPassword"},r.a.createElement(C.a.Label,null,"Password"),r.a.createElement(C.a.Control,{onChange:i,name:"password",type:"password",placeholder:"Password"})),r.a.createElement(E.a,{onClick:function(){console.log(l),y.peoples.signFetch(l),t("LOGIN")},variant:"primary",className:"btn-dark",type:"submit"},"Submit")),r.a.createElement("div",{className:"footerSign"},r.a.createElement("p",{className:"pFooter"},"Created By Khoren Ter-Hovhannisyan 2019")))}),T=a(45),P=a(34),I=(a(64),a(44)),R=a.n(I),B=function(e){var t=Object(n.useState)([]),a=Object(c.a)(t,2),o=a[0],l=a[1],s=Object(n.useState)({}),i=Object(c.a)(s,2),u=i[0],m=i[1],p=Object(n.useState)({}),f=Object(c.a)(p,2),v=f[0],g=f[1],O=Object(n.useState)(!1),j=Object(c.a)(O,2),w=j[0],L=j[1],I=Object(n.useState)(!0),B=Object(c.a)(I,2),F=B[0],U=B[1];Object(n.useEffect)((function(){var e=d.get("userId");y.peoples.getPostsByID(e).then((function(e){e.json().then((function(e){console.log(e),e&&(e.reverse(),l(e)),U(!1)}))}))}),[]),Object(n.useEffect)((function(){var e=d.get("userId");y.peoples.getByID(e).then((function(e){return e.json()})).then((function(e){e&&g(e)}))}),[]);var W=v.username,x=v.lastname,H=function(){m(Object(k.a)({},u,{title:"",description:""})),L(!1)},G=function(e){if(e.id){var t=o.find((function(t){return t.id===e.id}));m(t)}L(!0)},K=function(e){var t,a=e.target,n=a.name,r=a.value;m(Object(k.a)({},u,(t={},Object(N.a)(t,n,r),Object(N.a)(t,"personId",d.get("userId")),Object(N.a)(t,"author","".concat(W," ").concat(x)),t))),console.log(u)},D=function(e){var t=o.filter((function(t){return t.id!==e.id}));y.posts.remove(e.id),l(t)};return r.a.createElement("div",null,r.a.createElement("div",{className:"mainW"},r.a.createElement("div",{className:"blogger"},r.a.createElement("div",{className:"userData"},r.a.createElement("img",{alt:"",style:{border:"1px solid black",width:"25%",borderRadius:"80px"},src:R.a}),r.a.createElement("div",{className:"name"},r.a.createElement("h3",null,W," ",x))),r.a.createElement("div",{className:"createPost"},r.a.createElement(E.a,{size:"lg",onClick:G,className:"btn-dark"},"New Post"))),r.a.createElement("div",{className:"mainPostW"},console.log(F),F&&r.a.createElement(b.a,{style:{marginTop:"100px"},animation:"border"}),!F&&o.map((function(t){return console.log(F),r.a.createElement(h,{key:t.id,post:t,tab:e.tab,modal:G,remove:D,personId:t.personId})})),!F&&0===o.length&&r.a.createElement("h2",null,"Create your first post !!!")),r.a.createElement(S.a,{show:w,onHide:H,animation:!1},r.a.createElement(S.a.Header,{closeButton:!0},r.a.createElement(S.a.Title,{name:"author"},W," ",x)),r.a.createElement(P.a,null,r.a.createElement(C.a.Control,{name:"title",value:u.title,onChange:K,placeholder:"Write title"})),r.a.createElement(C.a.Control,{name:"description",value:u.description,onChange:K,as:"textarea",rows:"6",placeholder:"Write text"}),r.a.createElement(S.a.Footer,null,r.a.createElement(E.a,{className:"btn-dark",onClick:H},"Close"),r.a.createElement(E.a,{className:"btn-dark",onClick:function(){if(console.log("post",u),u.id)return y.posts.edit(u).then((function(e){e.ok&&e.json().then((function(e){var t=o.map((function(t){return t.id!==e.id?t:e}));l(t),m({title:"",description:""})}))})).catch((function(e){return console.log(e)})),void L(!1);y.posts.post(u),l([].concat(Object(T.a)(o),[u])),L(!1)}},u.id?"Update":"Create")))),r.a.createElement("div",{className:"footerW"},r.a.createElement("p",{className:"footerWp"},"Created By Khoren Ter-Hovhannisyan 2019")))};var F=function(){var e=Object(n.useState)({tab:"HOME"}),t=Object(c.a)(e,2),a=t[0],o=t[1],l=function(e){o({tab:e})};return r.a.createElement("div",{className:"App"},r.a.createElement(p,{tab:a.tab,changeTab:l}),"HOME"===a.tab&&r.a.createElement(j,{tab:a.tab}),"LOGIN"===a.tab&&r.a.createElement(w,{changeTab:l}),"SIGNUP"===a.tab&&r.a.createElement(L,{changeTab:l}),"WORKSPACE"===a.tab&&r.a.createElement(B,{tab:a.tab,changeTab:l}))};l.a.render(r.a.createElement(F,null),document.getElementById("root"))}},[[47,1,2]]]);
//# sourceMappingURL=main.248eaf0d.chunk.js.map