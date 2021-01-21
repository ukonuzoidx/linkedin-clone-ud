(this["webpackJsonplinkedin-clone"]=this["webpackJsonplinkedin-clone"]||[]).push([[0],{55:function(e,t,s){},59:function(e,t,s){},60:function(e,t,s){},61:function(e,t,s){},62:function(e,t,s){},65:function(e,t,s){},66:function(e,t,s){},68:function(e,t,s){},69:function(e,t,s){},70:function(e,t,s){},72:function(e,t,s){"use strict";s.r(t);var c=s(3),i=s(2),a=s.n(i),n=s(17),r=s.n(n),o=(s(55),s(12)),l=(s(59),s(30)),d=Object(l.b)({name:"user",initialState:{user:null},reducers:{login:function(e,t){e.user=t.payload},logout:function(e){e.user=null}}}),j=d.actions,b=j.login,u=j.logout,h=function(e){return e.user.user},p=d.reducer,O=s(19),m=s(89),x=s(90),f=s(91),v=s(92),g=s(93),_=s(100),N=s(85),w=s(86),y=s(87),I=s(88);s(60);var k=function(e){var t=e.Icon,s=e.title,i=e.color;return Object(c.jsxs)("div",{className:"inputOption",children:[Object(c.jsx)(t,{style:{color:i}}),Object(c.jsx)("h4",{children:s})]})},C=(s(61),Object(i.forwardRef)((function(e,t){var s=e.name,i=e.description,a=e.message,n=e.photoUrl;return Object(c.jsxs)("div",{ref:t,className:"post",children:[Object(c.jsxs)("div",{className:"post__header",children:[Object(c.jsx)(_.a,{src:n,children:s[0]}),Object(c.jsxs)("div",{className:"post__info",children:[Object(c.jsx)("h2",{children:s}),Object(c.jsx)("p",{children:i})]})]}),Object(c.jsx)("div",{className:"post__body",children:Object(c.jsx)("p",{children:a})}),Object(c.jsxs)("div",{className:"post__buttons",children:[Object(c.jsx)(k,{Icon:N.a,title:"like",color:"gray"}),Object(c.jsx)(k,{Icon:w.a,title:"Comment",color:"gray"}),Object(c.jsx)(k,{Icon:y.a,title:"Share",color:"gray"}),Object(c.jsx)(k,{Icon:I.a,title:"Send",color:"gray"})]})]})}))),R=(s(62),s(25)),S=R.a.initializeApp({apiKey:"AIzaSyCZRvUOICPHdWHkf7Apfivs2X2pFzhViNI",authDomain:"linkedin-clone-ud.firebaseapp.com",projectId:"linkedin-clone-ud",storageBucket:"linkedin-clone-ud.appspot.com",messagingSenderId:"408897984211",appId:"1:408897984211:web:6d9358d9e793c2ae456626",measurementId:"G-T5Q1JH4KZ8"}).firestore(),U=R.a.auth(),L=s(46);var A=function(){var e=Object(o.c)(h),t=Object(i.useState)(""),s=Object(O.a)(t,2),a=s[0],n=s[1],r=Object(i.useState)([]),l=Object(O.a)(r,2),d=l[0],j=l[1];return Object(i.useEffect)((function(){S.collection("posts").orderBy("timestamp","desc").onSnapshot((function(e){return j(e.docs.map((function(e){return{id:e.id,data:e.data()}})))}))}),[]),Object(c.jsxs)("div",{className:"feed",children:[Object(c.jsxs)("div",{className:"feed__inputContainer",children:[Object(c.jsxs)("div",{className:"feed__input",children:[Object(c.jsx)(m.a,{}),Object(c.jsxs)("form",{children:[Object(c.jsx)("input",{value:a,onChange:function(e){return n(e.target.value)},type:"text"}),Object(c.jsx)("button",{type:"submit",onClick:function(t){t.preventDefault(),S.collection("posts").add({name:e.displayName,description:e.email,message:a,photoUrl:e.photoURL||"",timestamp:R.a.firestore.FieldValue.serverTimestamp()}),n("")},children:"Send"})]})]}),Object(c.jsxs)("div",{className:"feed__inputOptions",children:[Object(c.jsx)(k,{Icon:x.a,title:"Photo",color:"#70B5F9"}),Object(c.jsx)(k,{Icon:f.a,title:"Video",color:"#E7A33E"}),Object(c.jsx)(k,{Icon:v.a,title:"Event",color:"#C0CBCD"}),Object(c.jsx)(k,{Icon:g.a,title:"Write Article",color:"#7FC15E"})]})]}),Object(c.jsx)(L.a,{children:d.map((function(e){var t=e.id,s=e.data,i=s.name,a=s.description,n=s.message,r=s.photoUrl;return Object(c.jsx)(C,{name:i,description:a,message:n,photoUrl:r},t)}))})]})},E=(s(65),s(47)),P=s.n(E);s(66);var B=function(e){var t=e.avatar,s=e.Icon,i=e.title,a=e.onClick,n=Object(o.c)(h);return Object(c.jsxs)("div",{onClick:a,className:"header__options",children:[s&&Object(c.jsx)(s,{className:"headeroption__icon"}),t&&Object(c.jsx)(_.a,{className:"headeroption__icon",src:null===n||void 0===n?void 0:n.photoURL,children:null===n||void 0===n?void 0:n.email[0]}),Object(c.jsx)("h3",{className:"headeroption__title",children:i})]})},W=s(48),F=s.n(W),D=s(94),T=s(95),H=s(96),J=s(97);var V=function(){var e=Object(o.b)();return Object(c.jsxs)("div",{className:"header",children:[Object(c.jsxs)("div",{className:"header__left",children:[Object(c.jsx)("img",{src:"https://www.flaticon.com/svg/vstatic/svg/174/174857.svg?token=exp=1611166215~hmac=409cca574e58df1db4048f63691ecf15",alt:""}),Object(c.jsxs)("div",{className:"header__search",children:[Object(c.jsx)(P.a,{}),Object(c.jsx)("input",{placeholder:"search",type:"text"})]})]}),Object(c.jsxs)("div",{className:"header__right",children:[Object(c.jsx)(B,{Icon:F.a,title:"Home"}),Object(c.jsx)(B,{Icon:D.a,title:"My Network"}),Object(c.jsx)(B,{Icon:T.a,title:"Jobs"}),Object(c.jsx)(B,{Icon:H.a,title:"Messaging"}),Object(c.jsx)(B,{Icon:J.a,title:"Notifications"}),Object(c.jsx)(B,{avatar:!0,onClick:function(){e(u()),U.signOut()},title:"me"})]})]})};s(68);var z=function(){var e=Object(i.useState)(""),t=Object(O.a)(e,2),s=t[0],a=t[1],n=Object(i.useState)(""),r=Object(O.a)(n,2),l=r[0],d=r[1],j=Object(i.useState)(""),u=Object(O.a)(j,2),h=u[0],p=u[1],m=Object(i.useState)(""),x=Object(O.a)(m,2),f=x[0],v=x[1],g=Object(o.b)();return Object(c.jsxs)("div",{className:"login",children:[Object(c.jsx)("img",{src:"https://news.hitb.org/sites/default/files/styles/large/public/field/image/500px-LinkedIn_Logo_2013.svg_.png",alt:""}),Object(c.jsxs)("form",{children:[Object(c.jsx)("input",{type:"text",value:s,onChange:function(e){return a(e.target.value)},placeholder:"Full name (required if registering)"}),Object(c.jsx)("input",{value:f,onChange:function(e){return v(e.target.value)},type:"text",placeholder:"Profile pic URL (Optional)"}),Object(c.jsx)("input",{value:l,onChange:function(e){return d(e.target.value)},placeholder:"Email Address",type:"email"}),Object(c.jsx)("input",{value:h,onChange:function(e){return p(e.target.value)},type:"password",placeholder:"password"}),Object(c.jsx)("button",{type:"submit",onClick:function(e){e.preventDefault(),U.signInWithEmailAndPassword(l,h).then((function(e){g(b({email:e.user.email,uid:e.user.uid,displayName:e.user.displayName,photoUrl:e.user.profileURL}))})).catch((function(e){return alert(e)}))},children:"Sign In"})]}),Object(c.jsxs)("p",{children:["Not a member?",Object(c.jsx)("span",{className:"login__register",onClick:function(){if(!s)return alert("Please enter a full name");U.createUserWithEmailAndPassword(l,h).then((function(e){e.user.updateProfile({displayName:s,photoURL:f}).then((function(){g(b({email:e.user.email,uid:e.user.uid,displayName:s,photoURL:f}))}))})).catch((function(e){return alert(e.message)}))},children:"Register Now"})]})]})};s(69);var M=function(){var e=Object(o.c)(h),t=function(e){return Object(c.jsxs)("div",{className:"sidebar__recentItem",children:[Object(c.jsx)("span",{className:"sidebar__hash",children:"#"}),Object(c.jsx)("p",{children:e})]})};return Object(c.jsxs)("div",{className:"sidebar",children:[Object(c.jsxs)("div",{className:"sidebar__top",children:[Object(c.jsx)("img",{src:"https://www.geeklawblog.com/wp-content/uploads/sites/528/2018/12/liprofile-656x369.png",alt:""}),Object(c.jsx)(_.a,{src:e.photoURL,className:"sidebar__avatar",children:e.email[0]}),Object(c.jsx)("h2",{children:e.displayName}),Object(c.jsx)("h4",{children:e.email})]}),Object(c.jsxs)("div",{className:"sidebar__stats",children:[Object(c.jsxs)("div",{className:"sidebar__stat",children:[Object(c.jsx)("p",{children:"Who viewed you"}),Object(c.jsx)("p",{className:"sidebar__statNumber",children:"2,335"})]}),Object(c.jsxs)("div",{className:"sidebar__stat",children:[Object(c.jsx)("p",{children:"Views on Post"}),Object(c.jsx)("p",{className:"sidebar__statNumber",children:"2,675"})]})]}),Object(c.jsxs)("div",{className:"sidebar__bottom",children:[Object(c.jsx)("p",{children:"Recent"}),t("react.js"),t("programmming"),t("design"),t("developer"),t("bobbywork"),t("log conecpt")]})]})},G=s(98),K=s(99);s(70);var Z=function(){var e=function(e,t){return Object(c.jsxs)("div",{className:"widgets__article",children:[Object(c.jsx)("div",{className:"widgets__articleLeft",children:Object(c.jsx)(G.a,{})}),Object(c.jsxs)("div",{className:"widgets__articleRight",children:[Object(c.jsx)("h4",{children:e}),Object(c.jsx)("p",{children:t})]})]})};return Object(c.jsxs)("div",{className:"widgets",children:[Object(c.jsxs)("div",{className:"widegets__header",children:[Object(c.jsx)(K.a,{}),Object(c.jsx)("h2",{className:"widgets__title",children:"LinkedIn News"})]}),e("PAPA React is back","Top news - 4923 readers"),e("Cornavirus is scattering the world","Top news - 9938 readers"),e("BORN OF GOD is a nice Album","Top news - 5000 readers")]})};var q=function(){var e=Object(o.c)(h),t=Object(o.b)();return Object(i.useEffect)((function(){U.onAuthStateChanged((function(e){t(e?b({email:e.email,uid:e.uid,displayName:e.displayName,photoURL:e.photoURL}):u())}))}),[]),Object(c.jsxs)("div",{className:"app",children:[Object(c.jsx)(V,{}),e?Object(c.jsxs)("div",{className:"app__body",children:[Object(c.jsx)(M,{}),Object(c.jsx)(A,{}),Object(c.jsx)(Z,{})]}):Object(c.jsx)(z,{})]})},Q=Object(l.a)({reducer:{user:p}});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(Object(c.jsx)(a.a.StrictMode,{children:Object(c.jsx)(o.a,{store:Q,children:Object(c.jsx)(q,{})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[72,1,2]]]);
//# sourceMappingURL=main.81a2c7ba.chunk.js.map