(this.webpackJsonpmovie_app_2=this.webpackJsonpmovie_app_2||[]).push([[0],{19:function(e,t,s){},28:function(e,t,s){},36:function(e,t,s){},37:function(e,t,s){},38:function(e,t,s){},39:function(e,t,s){"use strict";s.r(t);var n=s(1),a=s.n(n),i=s(21),c=s.n(i),r=(s(28),s(12)),o=s(2),l=(s(19),s(0));var j=function(){return Object(l.jsx)("div",{className:"Nav",children:Object(l.jsxs)("ul",{children:[Object(l.jsx)("li",{className:"Nav__Home",children:Object(l.jsx)(r.b,{className:"Nav__Link",to:"/",children:"Home"})}),Object(l.jsx)("li",{className:"Nav__About",children:Object(l.jsx)(r.b,{className:"Nav__Link",to:"/about",children:"About"})})]})})},d=s(18),u=s.n(d),m=s(23),h=s(7),b=s(8),p=s(10),v=s(9),O=(s(36),s(37),function(e){Object(p.a)(s,e);var t=Object(v.a)(s);function s(e){var n;return Object(h.a)(this,s),(n=t.call(this,e)).state={summ:n.props.summary},0===n.state.summ.length&&(n.state.summ="it will be updated soon"),n}return Object(b.a)(s,[{key:"render",value:function(){var e=this.props,t=e.poster,s=e.title,n=e.genres,a=e.rating;return Object(l.jsx)("div",{className:"movieModal",children:Object(l.jsxs)("div",{className:"insideModal",children:[Object(l.jsx)("img",{src:t,alt:s}),Object(l.jsx)("h3",{children:this.props.title}),Object(l.jsxs)("div",{children:["\ud83c\udfac genres: ",n]}),Object(l.jsxs)("div",{children:["\u2b50\ufe0f 10 / ",a]}),Object(l.jsx)("h3",{children:"Summary"}),Object(l.jsx)("hr",{}),Object(l.jsx)("br",{}),Object(l.jsx)("p",{}),Object(l.jsx)("p",{children:this.state.summ})]})})}}]),s}(n.Component)),x=function(e){Object(p.a)(s,e);var t=Object(v.a)(s);function s(e){var n;return Object(h.a)(this,s),(n=t.call(this,e)).modalToggle=function(){n.setState({isModal:!n.state.isModal,scrollPosition:n.input.current.scrollTop},(function(){n.state.isModal?(n.input.current.children[4].children[0].style.display="block",document.querySelector("body").style.position="fixed"):(n.input.current.children[4].children[0].style.display="none",document.querySelector("body").style.position="absolute")}))},n.input=a.a.createRef(),n.state={isModal:!1,scrollPosition:null},n}return Object(b.a)(s,[{key:"render",value:function(){var e=this.props,t=e.id,s=e.genres,n=e.poster,a=e.title,i=e.rating,c=e.summary;return Object(l.jsxs)("div",{ref:this.input,onClick:this.modalToggle,className:"movieWrapper",children:[Object(l.jsx)("img",{className:"movie__poster",src:n,alt:a}),Object(l.jsx)("div",{className:"movie__title",children:a}),Object(l.jsx)("div",{className:"movie__genres",children:Object(l.jsx)("div",{children:s.map((function(e){return"".concat(e," | ")}))})}),Object(l.jsx)("div",{className:"movie__rating",children:i}),Object(l.jsx)("div",{onClick:this.modalToggle,children:Object(l.jsx)(O,{title:a,id:t,genres:s,poster:n,rating:i,summary:c})})]},t)}}]),s}(n.Component),g=function(e){Object(p.a)(s,e);var t=Object(v.a)(s);function s(){var e;Object(h.a)(this,s);for(var n=arguments.length,a=new Array(n),i=0;i<n;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).state={isLoading:!0,movies:[]},e.getFetch=Object(m.a)(u.a.mark((function t(){var s,n;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://yts-proxy.now.sh/list_movies.json?minimum_rating=9").then((function(e){return e.json()}));case 2:s=t.sent,n=s.data.movies,e.setState({isLoading:!1,movies:n});case 5:case"end":return t.stop()}}),t)}))),e}return Object(b.a)(s,[{key:"componentDidMount",value:function(){this.getFetch()}},{key:"render",value:function(){var e=this.state,t=e.isLoading,s=e.movies;return Object(l.jsxs)("div",{children:[Object(l.jsx)("div",{className:"NAV"}),Object(l.jsx)("div",{className:"moviesWrapper",children:t?"Loading...":s.map((function(e){return Object(l.jsx)(x,{title:e.title,id:e.id,genres:e.genres,poster:e.medium_cover_image,rating:e.rating,summary:e.summary})}))})]})}}]),s}(n.Component);var f=function(e){return console.log(e),Object(l.jsx)("h1",{children:"this is About page"})},y=(s(38),function(e){Object(p.a)(s,e);var t=Object(v.a)(s);function s(){return Object(h.a)(this,s),t.apply(this,arguments)}return Object(b.a)(s,[{key:"componentDidMount",value:function(){console.log(this.props);var e=this.props,t=e.location,s=e.history;void 0===t.state&&s.push("/")}},{key:"render",value:function(){var e=this.props.location;return e.state?Object(l.jsx)("div",{className:"wrapper",children:Object(l.jsxs)("div",{className:"stateWraper",children:[Object(l.jsx)("img",{src:e.state.poster}),Object(l.jsx)("div",{children:e.state.title}),Object(l.jsx)("div",{children:e.state.id}),Object(l.jsx)("div",{children:e.state.genres}),Object(l.jsx)("div",{children:e.state.rating}),Object(l.jsx)("div",{children:e.state.summary})]})}):null}}]),s}(a.a.Component));var _=function(){return Object(l.jsxs)(r.a,{children:[Object(l.jsx)(j,{}),Object(l.jsxs)(o.c,{children:[Object(l.jsx)(o.a,{path:"/",exact:!0,component:g}),Object(l.jsx)(o.a,{path:"/about",component:f}),Object(l.jsx)(o.a,{path:"/movie/:id",component:y}),Object(l.jsx)(o.a,{path:"/",children:"Erroaaaaaaaaaaaaaaaaaaaaaaaaaaar! : Not Found"})]})]})};c.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(_,{})}),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.576648f1.chunk.js.map