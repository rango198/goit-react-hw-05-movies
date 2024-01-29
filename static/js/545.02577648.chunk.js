"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[545],{854:function(n,e,t){var r=t(4137),a=t(184);e.Z=function(n){n.isLoading;return(0,a.jsx)(r.s5,{visible:!0,height:"96",width:"96",color:"grey",strokeWidth:"5",animationDuration:"0.75",ariaLabel:"rotating-lines-loading",wrapperStyle:{},wrapperClass:""})}},3174:function(n,e,t){t.d(e,{Z:function(){return b}});var r,a,i,o,c,u=t(7689),s=t(168),l=t(7686),p=t(1087),d=l.Z.ul(r||(r=(0,s.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  padding: 0;\n  margin: 0;\n"]))),f=l.Z.li(a||(a=(0,s.Z)(["\n  list-style: none;\n  padding: 15px;\n  margin: 0;\n"]))),h=(0,l.Z)(p.rU)(i||(i=(0,s.Z)(["\n  text-decoration: none;\n  color: black;\n  :hover {\n    color: red;\n  }\n"]))),x=l.Z.div(o||(o=(0,s.Z)(["\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 20px;\n  text-align: center;\n  width: 200px;\n  height: 355px;\n\n  :hover {\n    scale: 1.1;\n  }\n"]))),g=l.Z.img(c||(c=(0,s.Z)(["\n  width: 200px;\n"]))),v=t(2791),m=t(184),b=function(n){var e=n.movies,t=(0,u.TH)();return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(d,{children:e.map((function(n){var e=n.id,r=n.title,a=n.poster_path;return(0,m.jsx)(f,{children:(0,m.jsx)(h,{to:"/movies/".concat(e),state:{from:t},children:(0,m.jsxs)(x,{children:[(0,m.jsx)(g,{src:a?"https://image.tmdb.org/t/p/w154/".concat(a):"https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700",alt:r,width:"250",height:"350"}),(0,m.jsx)("p",{children:r})]})})},e)}))}),(0,m.jsx)(v.Suspense,{fallback:(0,m.jsx)("div",{children:"Loading..."}),children:(0,m.jsx)(u.j3,{})})]})}},1545:function(n,e,t){t.r(e),t.d(e,{default:function(){return j}});var r,a,i,o=t(9439),c=t(2791),u=t(1087),s=t(2094),l={position:"top-center",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"colored"},p=t(168),d=t(7686),f=d.Z.button(r||(r=(0,p.Z)(["\n  cursor: pointer;\n  color: black;\n  border: 1px solid white;\n  border-radius: 15px;\n  padding: 10px 15px;\n  background: white;\n"]))),h=d.Z.form(a||(a=(0,p.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: orangered;\n"]))),x=d.Z.input(i||(i=(0,p.Z)(["\n  margin: 7px;\n  color: black;\n  border: 1px solid white;\n  border-radius: 15px;\n  padding: 10px 25px;\n  background: white;\n  max-width: 190px;\n"]))),g=t(3206),v=t(184),m=function(n){var e=n.onSearch,t=(0,c.useState)(""),r=(0,o.Z)(t,2),a=r[0],i=r[1];return(0,v.jsx)(v.Fragment,{children:(0,v.jsxs)(h,{onSubmit:function(n){if(n.preventDefault(),!a)return s.Am.error("Please enter a sometings",l);e(a),i("")},children:[(0,v.jsx)(x,{type:"text",placeholder:"Enter for search movies",name:"query",value:a,onChange:function(n){i(n.target.value.toLowerCase())}}),(0,v.jsx)(f,{type:"submit",children:(0,v.jsx)(g.RB5,{size:"15"})})]})})},b=t(3174),Z=t(854),w=t(8830),j=function(){var n,e=(0,u.lr)(),t=(0,o.Z)(e,2),r=t[0],a=t[1],i=(0,c.useState)([]),s=(0,o.Z)(i,2),l=s[0],p=s[1],d=(0,c.useState)(!1),f=(0,o.Z)(d,2),h=f[0],x=f[1],g=(0,c.useState)(null),j=(0,o.Z)(g,2),y=j[0],k=j[1],S=null!==(n=r.get("query"))&&void 0!==n?n:"";return(0,c.useEffect)((function(){S&&(x(!0),(0,w.bI)(S).then((function(n){var e=n.results;p(e)})).catch((function(n){return k(n)})).finally((function(){return x(!1)})))}),[S]),(0,v.jsxs)(v.Fragment,{children:[y&&(0,v.jsx)("h2",{children:y.message}),(0,v.jsx)(m,{value:S,onSearch:function(n){a(""!==n?{query:n}:{})}}),l.length>0&&(0,v.jsx)(b.Z,{movies:l}),h&&(0,v.jsx)(Z.Z,{})]})}},8830:function(n,e,t){t.d(e,{Bt:function(){return d},Tg:function(){return u},bI:function(){return s},jC:function(){return l},y:function(){return p}});var r=t(5861),a=t(4687),i=t.n(a),o=t(5294);o.Z.defaults.baseURL="https://api.themoviedb.org/3/";var c="api_key=".concat("b271cc149eb4376b4bbb5a0b722032f8","&language=en-US"),u=function(){var n=(0,r.Z)(i().mark((function n(){var e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("trending/movie/day?".concat(c));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),s=function(){var n=(0,r.Z)(i().mark((function n(e){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("search/movie?".concat(c,"&page=1&include_adult=false&query=").concat(e));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(i().mark((function n(e){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("movie/".concat(e,"?").concat(c));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(i().mark((function n(e){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("movie/".concat(e,"/credits?").concat(c));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(i().mark((function n(e){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("movie/".concat(e,"/reviews?").concat(c,"&page=1"));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=545.02577648.chunk.js.map