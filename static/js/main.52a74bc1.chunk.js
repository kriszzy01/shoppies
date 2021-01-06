(this.webpackJsonpshoppies=this.webpackJsonpshoppies||[]).push([[0],{57:function(e,t,n){},58:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n(1),a=n.n(r),s=n(7),i=n(2),o=function(e){return e.nominations},l=function(e){return e.searchResults},u=function(){for(var e=[],t=window.localStorage,n=0;n<=t.length-1;n++){var c="";0!==t.length&&(c=t.key(n));var r=t.getItem(c);r&&e.push(JSON.parse(r))}return e},d=function(){var e=Object(i.c)(o).movies,t=u(),n=0!==t.length?t:Object.values(e);return Object(c.jsx)("div",{"data-banner":5===n.length?"open":"closed",children:Object(c.jsx)("p",{children:"You have successfully made five nominations"})})},j=n(27),h=n(26),b=n(5),v=Object(b.b)({name:"nominations",initialState:{id:[],movies:{}},reducers:{deleteNomination:function(e,t){var n=t.payload,c=e.id.filter((function(e){return e!==n}));e.id=c;var r=e.movies,a=(r[n],Object(j.a)(r,[n].map(h.a)));e.movies=a},addNomination:function(e,t){var n=t.payload;e.id.push(n.imdbID),e.movies[n.imdbID]=n}}}),O=v.actions,p=O.deleteNomination,m=O.addNomination,x=v.reducer,f=function(){var e=Object(i.c)(o).movies,t=u(),n=0!==t.length?t:Object.values(e),r=Object(i.b)();return Object(c.jsxs)("aside",{"aria-labelledby":"nominations",children:[0!==n.length&&Object(c.jsx)("h2",{id:"nominations",tabIndex:-1,children:"Nominations"}),Object(c.jsx)("div",{className:"empty-state",children:Object(c.jsxs)("p",{children:[Object(c.jsx)("strong",{children:"Your nominations appear here."})," ",Object(c.jsx)("br",{}),Object(c.jsx)("span",{children:"Nominations are saved even after leaving the browser"})]})}),Object(c.jsx)("ul",{children:n.map((function(e){return Object(c.jsxs)("li",{children:[Object(c.jsxs)("p",{className:"text",children:[e.Title," (",e.Year,")"]}),Object(c.jsxs)("button",{type:"button","aria-label":"Delete ".concat(e.Title),onClick:function(){return t=e.imdbID,r(p(t)),void window.localStorage.removeItem(t);var t},children:[Object(c.jsx)("span",{"aria-hidden":"true",children:"Remove"}),Object(c.jsxs)("span",{className:"vh",children:["Remove ","".concat(e.Title)]})]})]},e.imdbID)}))})]})},g=n(9),N=n(24),w=n.n(N),S=n(6),y=n.n(S),I=n(8),k=n(25),R=n.n(k),M=function(){var e=Object(I.a)(y.a.mark((function e(t,n){var c,r,a,s,i;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"1f8395e",c="http://www.omdbapi.com/?s=".concat(t,"&page=").concat(n,"&apikey=").concat("1f8395e"),e.prev=2,e.next=5,R.a.get(c);case 5:return r=e.sent,a=r.data,s=a.Search,i=a.totalResults,e.abrupt("return",{Search:s,totalResults:i});case 10:throw e.prev=10,e.t0=e.catch(2),e.t0;case 13:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(t,n){return e.apply(this,arguments)}}(),D=Object(b.b)({name:"search",initialState:{totalResults:"",searchedInput:"",id:[],movies:{},loading:!1,error:null},reducers:{setSearchedInput:function(e,t){var n=t.payload;e.searchedInput=n},searchMoviesStart:function(e){e.id=[],e.movies={},e.searchedInput="",e.totalResults="",e.loading=!0,e.error=null},searchMoviesSuccess:function(e,t){var n=t.payload;n.Search.forEach((function(t){var n=t.imdbID;e.id.push(n),e.movies[n]=t})),e.totalResults=n.totalResults,e.loading=!1,e.error=null},searchMoviesFailure:function(e,t){var n=t.payload;e.error=n,e.loading=!1}}}),C=D.actions,T=C.searchMoviesStart,E=C.searchMoviesSuccess,F=C.searchMoviesFailure,Y=C.setSearchedInput,J=D.reducer,z=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return function(){var n=Object(I.a)(y.a.mark((function n(c){var r;return y.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,c(T()),n.next=4,M(e,t);case 4:r=n.sent,c(E(r)),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(0),c(F(n.t0.message));case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(e){return n.apply(this,arguments)}}()},A=function(){var e=Object(r.useState)(""),t=Object(g.a)(e,2),n=t[0],a=t[1],s=Object(i.b)(),o=Object(r.useCallback)(w()((function(e){s(z(e)),s(Y(e))}),1e3),[]);return Object(c.jsxs)("div",{className:"searchContainer",children:[Object(c.jsx)("label",{htmlFor:"search",className:"vh",children:"Enter the title of the movie"}),Object(c.jsx)("p",{"aria-hidden":!0,children:"Movie Title"}),Object(c.jsxs)("div",{className:"searchInput",children:[Object(c.jsx)("i",{"aria-hidden":"true",children:Object(c.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24",width:"24",children:[Object(c.jsx)("path",{d:"M0 0h24v24H0z",fill:"none"}),Object(c.jsx)("path",{d:"M15.5 14h-.79l-.28-.27A6.471 6.471 0 0016 9.5 6.5 6.5 0 109.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"})]})}),Object(c.jsx)("input",{type:"text",id:"search",placeholder:"Enter movie title",value:n,onChange:function(e){var t=e.target.value;a(t),o(t)}})]})]})},L=function(){var e=Object(r.useState)(1),t=Object(g.a)(e,2),n=t[0],a=t[1],s=Object(i.c)(l),o=s.totalResults,u=s.id,d=s.searchedInput,j=Object(i.b)();return Object(c.jsx)(c.Fragment,{children:0!==u.length&&Object(c.jsxs)("div",{className:"pagination",children:[Object(c.jsx)("button",{type:"button",onClick:function(){0===n&&(a((function(e){return e-1})),j(z(d,n)))},children:"Prev"}),Object(c.jsx)("button",{type:"button",onClick:function(){n<Number(o)&&(a((function(e){return e+1})),j(z(d,n)))},children:"Next"})]})})},q=function(){var e=Object(i.c)(l),t=e.movies,n=e.loading,r=e.searchedInput,a=e.error,s=Object(i.c)(o).id,d=u(),j=Object(i.b)();return Object(c.jsxs)("section",{"aria-labelledby":"todos-label",children:[Object(c.jsx)(L,{}),r&&Object(c.jsx)("h2",{id:"todos-label",children:H(n,a,r)}),Object(c.jsx)("div",{className:"empty-state",children:Object(c.jsxs)("p",{children:["Search for a movie to nominate using the search bar. ",Object(c.jsx)("br",{}),Object(c.jsxs)("strong",{children:["Your search results appear here ",Object(c.jsx)("span",{"aria-hidden":"true",children:"\u2193"})]})]})}),Object(c.jsx)("ul",{children:Object.values(t).map((function(e){return Object(c.jsxs)("li",{children:[Object(c.jsxs)("p",{className:"text",children:[e.Title," (",e.Year,")"]}),Object(c.jsxs)("button",{type:"button","aria-label":"Nominate ".concat(e.Title),onClick:function(){return function(e){var n=t[e];d.length<5&&(j(m(n)),window.localStorage.setItem(e,JSON.stringify(n)))}(e.imdbID)},disabled:s.includes(e.imdbID),children:[Object(c.jsx)("span",{"aria-hidden":"true",children:"Nominate"}),Object(c.jsxs)("span",{className:"vh",children:["Nominate ","".concat(e.Title)]})]})]},e.imdbID)}))}),Object(c.jsx)("div",{role:"status","aria-live":"polite",className:"vh"})]})},H=function(e,t,n){return e?"Loading...":t&&"Network Error"!==t&&n?"Are you sure this movie exists?":"Network Error"===t&&n?"Something went wrong":n?'Search Results for "'.concat(n,'"'):null},P=function(){return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsxs)("header",{children:[Object(c.jsx)("h1",{tabIndex:-1,children:"The Shoppies"}),Object(c.jsx)(A,{})]}),Object(c.jsxs)("main",{children:[Object(c.jsx)(d,{}),Object(c.jsxs)("div",{className:"content",children:[Object(c.jsx)(q,{}),Object(c.jsx)(f,{})]})]}),Object(c.jsx)("footer",{})]})},B=n(4),G=Object(B.c)({nominations:x,searchResults:J}),K=(n(57),Object(b.a)({reducer:G}));Object(s.render)(Object(c.jsx)(i.a,{store:K,children:Object(c.jsx)(a.a.StrictMode,{children:Object(c.jsx)(P,{})})}),document.querySelector("#root"))}},[[58,1,2]]]);
//# sourceMappingURL=main.52a74bc1.chunk.js.map