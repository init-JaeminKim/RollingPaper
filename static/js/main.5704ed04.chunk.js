(this.webpackJsonprolling=this.webpackJsonprolling||[]).push([[0],{174:function(e,t,n){},187:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),r=n(63),o=n.n(r),i=n(129),s=n(95);n(169),n(188);s.a.initializeApp({apiKey:"AIzaSyCc1jz1omi_w6uOYY0fV2CVLHLEBhoRSfg,",authDomain:"rollingpapers-01.firebaseapp.com,",projectId:"rollingpapers-01,",storageBucket:"rollingpapers-01.appspot.com,",messagingSenderId:"304299998135,",appId:"1:304299998135:web:faf3ddb5340bbd4153c632,",measurementId:"G-3PP7X8G4MZ,"});var l=s.a,j=s.a.auth(),d=s.a.firestore(),u=n(93),b=n(13),O=n(29),h=n.n(O),x=n(44),p=(n(173),n(213)),m=n(214),f=n(89),g=n(212),v=(n(174),n(5)),y=function(){var e=function(){var e=Object(x.a)(h.a.mark((function e(t){var n,c;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"google"===(n=t.target.name)?c=new l.auth.GoogleAuthProvider:"facebook"===n&&(c=new l.auth.FacebookAuthProvider),e.next=4,j.signInWithPopup(c);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(v.jsx)("div",{style:{paddingTop:"20%"},children:Object(v.jsx)(p.a,{columns:"1",stackable:!0,centered:!0,verticalAlign:"middle",children:Object(v.jsxs)(p.a.Column,{computer:"4",mobile:"4",widescreen:"4",children:[Object(v.jsxs)(m.a,{as:"h2",icon:!0,textAlign:"center",size:"huge",color:"yellow",children:[Object(v.jsx)(f.a,{name:"compass"}),Object(v.jsx)(m.a.Content,{children:"Start with"})]}),Object(v.jsxs)(g.a.Group,{size:"huge",children:[Object(v.jsxs)(g.a,{name:"google",onClick:e,color:"google plus",children:[Object(v.jsx)(f.a,{name:"google"})," Google"]}),Object(v.jsx)(g.a.Or,{}),Object(v.jsxs)(g.a,{name:"facebook",onClick:e,color:"facebook",children:[Object(v.jsx)(f.a,{name:"facebook"})," Facebook"]})]})]})})})},k=n(31),C=n(211),w=n(153),S=n(207),A=n(204),z=n(206),I=n(150),N=n.n(I),R=function(e){var t=e.userObj,n=Object(c.useState)(""),a=Object(k.a)(n,2),r=a[0],o=a[1],i=Object(c.useState)(t.displayName),s=Object(k.a)(i,2),l=s[0],j=s[1],u=Object(c.useState)(!1),b=Object(k.a)(u,2),O=b[0],m=b[1],y=Object(c.useState)(!1),I=Object(k.a)(y,2),R=I[0],M=I[1],P=function(){var e=Object(x.a)(h.a.mark((function e(n){var c;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),c={text:r,createdAt:N()().format("MMM Do YY"),creator:t.uid,displayName:l,photoUrl:t.photoUrl},e.next=4,d.collection("rolls").add(c);case 4:o(""),M(!0),setTimeout((function(){M(!1)}),5e3);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(v.jsx)("div",{style:{paddingTop:"10%"},children:Object(v.jsx)(p.a,{columns:3,centered:!0,children:Object(v.jsxs)(p.a.Column,{children:[R&&Object(v.jsx)(C.a,{style:{marginTop:100},icon:"check circle outline",color:"green",header:"Thank you!",content:"Your message has been posted"}),Object(v.jsx)(w.a,{src:"".concat(t.photoUrl),avatar:!0,spaced:"right",bordered:!0,size:"mini"}),Object(v.jsx)("span",{style:{color:"white",fontSize:17},children:t.displayName}),Object(v.jsx)(S.a,{style:{paddingTop:15},children:Object(v.jsx)(A.a,{style:{height:350,width:400,fontSize:17,backgroundColor:"transparent",borderWidth:5,resize:"none"},type:"text",value:r,placeholder:"Any word",onChange:function(e){var t=e.target.value;o(t)},maxLength:280,required:!0})}),Object(v.jsxs)(p.a.Column,{style:{paddingTop:15},children:[Object(v.jsx)(z.a,{content:O?"Show yourself":"Hide yourself",trigger:Object(v.jsxs)(g.a,{animated:"fade",toggle:!0,active:O,onClick:function(){m((function(e){return!e})),!1===O?j("Anonymous"):!0===O&&j(t.displayName)},children:[Object(v.jsx)(g.a.Content,{visible:!0,children:Object(v.jsx)(f.a,{name:O?"lock":"lock open"})}),Object(v.jsx)(g.a.Content,{hidden:!0,children:Object(v.jsx)(f.a,{name:O?"lock":"lock open"})})]})}),Object(v.jsx)(g.a,{disabled:!r,onClick:P,color:"green",children:"Complete"})]})]})})})},M=n(137),P=n(210),D=n(209),L=function(e){var t=e.rollObj,n=e.isOwner,r=Object(c.useState)(!1),o=Object(k.a)(r,2),i=o[0],s=o[1],l=Object(c.useState)(t.text),j=Object(k.a)(l,2),u=j[0],b=j[1],O=a.a.useState(!1),p=Object(k.a)(O,2),y=p[0],C=p[1],S=function(){var e=Object(x.a)(h.a.mark((function e(){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:d.collection("rolls").doc("".concat(t.id)).delete();case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),z=function(){var e=Object(x.a)(h.a.mark((function e(n){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),e.next=3,d.doc("rolls/".concat(t.id)).update({text:u});case 3:s(!1);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),I=function(){s((function(e){return!e})),b(t.text)};return Object(v.jsx)(v.Fragment,{children:i?Object(v.jsx)(P.a.Group,{children:Object(v.jsxs)(P.a,{children:[Object(v.jsxs)(P.a.Content,{children:[Object(v.jsx)(w.a,{floated:"right",size:"mini",src:"".concat(t.photoUrl),circular:!0}),Object(v.jsx)(P.a.Header,{children:t.displayName}),Object(v.jsx)(P.a.Meta,{children:t.createdAt}),Object(v.jsx)(P.a.Description,{children:Object(v.jsx)(A.a,{rows:"5",style:{width:260,height:50,border:"none",resize:"none",outline:0},type:"text",placeholder:"Edit text",value:u,onChange:function(e){var t=e.target.value;b(t)},maxLength:280,required:!0})})]}),Object(v.jsx)(P.a.Content,{extra:!0,children:Object(v.jsxs)("div",{className:"ui two buttons",children:[Object(v.jsx)(g.a,{onClick:I,children:"cancel"}),Object(v.jsx)(g.a,{onClick:z,value:"update",color:"green",children:"update"})]})})]})}):Object(v.jsx)(P.a.Group,{children:Object(v.jsxs)(P.a,{children:[Object(v.jsxs)(P.a.Content,{children:[Object(v.jsx)(w.a,{floated:"right",size:"mini",src:"".concat(t.photoUrl),circular:!0}),Object(v.jsx)(P.a.Header,{children:t.displayName}),Object(v.jsx)(P.a.Meta,{children:t.createdAt}),Object(v.jsx)(P.a.Description,{content:t.text})]}),Object(v.jsx)(P.a.Content,{extra:!0,children:n&&Object(v.jsxs)("div",{className:"ui two buttons",children:[Object(v.jsxs)(D.a,{basic:!0,onClose:function(){return C(!1)},onOpen:function(){return C(!0)},open:y,size:"small",trigger:Object(v.jsx)(g.a,{basic:!0,color:"red",children:"Delete"}),children:[Object(v.jsxs)(m.a,{icon:!0,children:[Object(v.jsx)(f.a,{name:"trash alternate"}),"Delete Messages"]}),Object(v.jsx)(D.a.Content,{children:Object(v.jsx)("p",{style:{textAlign:"center",fontSize:15},children:'"Are you sure you want to permanently remove this item?"'})}),Object(v.jsxs)(D.a.Actions,{children:[Object(v.jsxs)(g.a,{basic:!0,color:"red",inverted:!0,onClick:function(){return C(!1)},children:[Object(v.jsx)(f.a,{name:"remove"})," No"]}),Object(v.jsxs)(g.a,{color:"green",inverted:!0,onClick:S,children:[Object(v.jsx)(f.a,{name:"checkmark"})," Yes"]})]})]}),Object(v.jsx)(g.a,{onClick:I,basic:!0,color:"yellow",children:"Edit"})]})})]})})})},T=n(205),F=function(e){var t=e.userObj,n=Object(c.useState)([]),a=Object(k.a)(n,2),r=a[0],o=a[1],i=Object(c.useState)(8),s=Object(k.a)(i,2),l=s[0],j=s[1];Object(c.useEffect)((function(){d.collection("rolls").orderBy("createdAt").limit(l).onSnapshot((function(e){var t=e.docs.map((function(e){return Object(M.a)({id:e.id},e.data())}));o(t)}))}),[]);var u=function(){var e=Object(x.a)(h.a.mark((function e(){var t;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=d.collection("rolls").orderBy("createdAt","desc").limit(l),e.next=3,t.get().then((function(e){d.collection("rolls").orderBy("createdAt","desc").limit(2*l).onSnapshot((function(e){var t=e.docs.map((function(e){return Object(M.a)({id:e.id},e.data())}));o(t)})),j(2*l)}));case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(v.jsx)(v.Fragment,{children:Object(v.jsx)("div",{style:{paddingTop:"8%"},children:Object(v.jsxs)(T.a,{children:[Object(v.jsx)(p.a,{columns:4,doubling:!0,stackable:!0,children:r.map((function(e){return Object(v.jsx)(p.a.Column,{children:Object(v.jsx)(L,{rollObj:e,isOwner:t.uid===e.creator,userObj:t},e.id)},e.id)}))}),Object(v.jsx)(p.a,{columns:8,doubling:!0,stackable:!0,centered:!0,children:Object(v.jsx)(p.a.Column,{children:Object(v.jsxs)(g.a,{onClick:u,animated:"vertical",circular:!0,color:"blue",children:[Object(v.jsx)(g.a.Content,{visible:!0,children:"More"}),Object(v.jsx)(g.a.Content,{hidden:!0,children:Object(v.jsx)(f.a,{name:"arrow circle down"})})]})})})]})})})},G=n(208),H=function(){var e=Object(c.useState)("Home"),t=Object(k.a)(e,2),n=t[0],a=t[1],r=Object(b.f)(),o=function(e,t){var n=t.name;return a(n)};return Object(v.jsxs)(G.a,{size:"large",widths:"3",color:"yellow",fixed:"top",children:[Object(v.jsx)(G.a.Item,{as:u.b,to:"/RollingPaper",name:"Home",active:"Home"===n,onClick:o}),Object(v.jsx)(G.a.Item,{as:u.b,to:"/RollSheet",name:"RollSheet",active:"RollSheet"===n,onClick:o}),Object(v.jsx)(G.a.Item,{onClick:function(){j.signOut(),r.push("/RollingPaper")},children:Object(v.jsx)(f.a,{name:"log out",size:"large"})})]})},U=function(e){var t=e.isLoggedIn,n=e.userObj;return Object(v.jsx)(v.Fragment,{children:Object(v.jsxs)(u.a,{children:[t&&Object(v.jsx)(H,{userObj:n}),Object(v.jsx)(b.c,{children:t?Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)(b.a,{exact:!0,path:"/RollingPaper",children:Object(v.jsx)(R,{userObj:n})}),Object(v.jsx)(b.a,{exact:!0,path:"/RollSheet",children:Object(v.jsx)(F,{userObj:n})})]}):Object(v.jsx)(v.Fragment,{children:Object(v.jsx)(b.a,{exact:!0,path:"/RollingPaper",children:Object(v.jsx)(y,{})})})})]})})},B=function(){var e=Object(c.useState)(!1),t=Object(i.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)(null),o=Object(i.a)(r,2),s=o[0],l=o[1],d=Object(c.useState)(!1),u=Object(i.a)(d,2),b=u[0],O=u[1];return Object(c.useEffect)((function(){j.onAuthStateChanged((function(e){e?(l({uid:e.uid,displayName:e.displayName,photoUrl:e.photoURL}),a(!0)):(a(!1),l(null)),O(!0)}))}),[]),Object(v.jsx)("div",{children:b?Object(v.jsx)(U,{isLoggedIn:n,userObj:s}):"Loading..."})};o.a.render(Object(v.jsx)(a.a.StrictMode,{children:Object(v.jsx)(B,{})}),document.getElementById("root"))}},[[187,1,2]]]);
//# sourceMappingURL=main.5704ed04.chunk.js.map