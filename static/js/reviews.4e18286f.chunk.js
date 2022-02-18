"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[912],{2113:function(e,r,n){n.r(r),n.d(r,{default:function(){return Z}});var t,a,c,u,i=n(5861),s=n(885),o=n(7757),p=n.n(o),v=n(2791),f=n(4569),h=n.n(f),l=n(577),d=n(6871),g=n(1207),w=n(168),b=n(5751),m=b.ZP.li(t||(t=(0,w.Z)(["\n  padding-top: 10px;\n  padding-bottom: 10px;\n\n  &:nth-child(2n) {\n    background-color: #eee;\n  }\n"]))),A=b.ZP.h3(a||(a=(0,w.Z)(["\n  font-size: 16px;\n  margin-bottom: 10px;\n"]))),x=b.ZP.p(c||(c=(0,w.Z)(["\n  padding-left: 10px;\n  padding-right: 10px;\n  font-size: 16px;\n"]))),y=n(184);function k(e){var r=e.name,n=e.review;return(0,y.jsxs)(m,{children:[(0,y.jsx)(A,{children:r}),(0,y.jsx)(x,{children:n})]})}var S,K=b.ZP.ul(u||(u=(0,w.Z)(["\n  width: 100%;\n"]))),z=n(728);function Z(){var e=(0,v.useState)(null),r=(0,s.Z)(e,2),n=r[0],t=r[1],a=(0,v.useState)(!1),c=(0,s.Z)(a,2),u=c[0],o=c[1],f=(0,d.UO)().slug.match(/[a-z0-9]+$/)[0];(0,v.useEffect)((function(){var e={cancelToken:(S=h().CancelToken.source()).token};function r(){return(r=(0,i.Z)(p().mark((function r(){var n;return p().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,o(!0),r.next=4,g.Z.getReviews(f,e);case 4:n=r.sent,t(n),r.next=11;break;case 8:r.prev=8,r.t0=r.catch(0),l.Am.error(r.t0.message);case 11:return r.prev=11,o(!1),r.finish(11);case 14:case"end":return r.stop()}}),r,null,[[0,8,11,14]])})))).apply(this,arguments)}return function(){r.apply(this,arguments)}(),function(){S&&S.cancel("Landing Component got unmounted")}}),[f]);var w=(0,v.useMemo)((function(){if(n)return n.map((function(e){var r=e.id,n=e.author,t=e.content;return(0,y.jsx)(k,{name:n,review:t},r)}))}),[n]);return(0,y.jsxs)(y.Fragment,{children:[u&&(0,y.jsx)(z.Z,{}),(0,y.jsx)(K,{children:w})]})}},1207:function(e,r,n){var t=n(8683),a=n(5861),c=n(7757),u=n.n(c),i=n(4569),s=n.n(i),o=n(1755),p=n(4241),v="https://api.themoviedb.org/3",f="bfb3b67943be114531b8bb26195e1715",h="https://image.tmdb.org/t/p/w500";function l(){return(l=(0,a.Z)(u().mark((function e(r){var n,t,a;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="".concat(v,"/trending/movie/week?api_key=").concat(f,"&language=ru-US"),e.next=3,s().get(n,r);case 3:if(t=e.sent,(a=t.data).results.length){e.next=7;break}return e.abrupt("return",Promise.reject(new Error("Sorry, the service is temporarily unavailable.")));case 7:return e.abrupt("return",x(a.results));case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function d(){return(d=(0,a.Z)(u().mark((function e(r,n){var t,a,c;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="".concat(v,"/search/movie?api_key=").concat(f,"&query=").concat(r,"&language=ru-US"),e.next=3,s().get(t,n);case 3:if(a=e.sent,(c=a.data).results.length){e.next=7;break}return e.abrupt("return",Promise.reject(new Error("Sorry, no results were found for ".concat(r,"."))));case 7:return e.abrupt("return",x(c.results));case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function g(){return(g=(0,a.Z)(u().mark((function e(r,n){var t,a,c;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="".concat(v,"/movie/").concat(r,"?api_key=").concat(f,"&language=ru-US"),e.next=3,s().get(t,n);case 3:if(a=e.sent,c=a.data){e.next=7;break}return e.abrupt("return",Promise.reject(new Error("Sorry, the service is temporarily unavailable.")));case 7:return e.abrupt("return",A(c));case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function w(){return(w=(0,a.Z)(u().mark((function e(r,n){var t,a,c;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="".concat(v,"/movie/").concat(r,"/credits?api_key=").concat(f,"&language=ru-US"),e.next=3,s().get(t,n);case 3:if(a=e.sent,(c=a.data).cast.length){e.next=7;break}return e.abrupt("return",Promise.reject(new Error("We don`t have any cast for this movie.")));case 7:return e.abrupt("return",m(c.cast));case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function b(){return(b=(0,a.Z)(u().mark((function e(r,n){var t,a,c;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="".concat(v,"/movie/").concat(r,"/reviews?api_key=").concat(f,"&language=ru-US"),e.next=3,s().get(t,n);case 3:if(a=e.sent,(c=a.data).results.length){e.next=7;break}return e.abrupt("return",Promise.reject(new Error("We don`t have any reviews for this movie.")));case 7:return e.abrupt("return",c.results);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function m(e){return e.map((function(e){return{id:e.cast_id,name:e.name,src:e.profile_path?"".concat(h).concat(e.profile_path):o,character:e.character}}))}function A(e){var r=e.genres.map((function(e){return e.name})).join(" ");return{title:e.original_title,overview:e.overview,userScore:"".concat(10*e.vote_average,"%"),genres:r,src:y(e.poster_path)}}function x(e){return e.map((function(e){return(0,t.Z)((0,t.Z)({},e),{},{poster_path:y(e.poster_path)})}))}function y(e){return e?"".concat(h).concat(e):p}var k={getTrending:function(e){return l.apply(this,arguments)},getMoviesByQuery:function(e,r){return d.apply(this,arguments)},getMoviesById:function(e,r){return g.apply(this,arguments)},getMoviesCast:function(e,r){return w.apply(this,arguments)},getReviews:function(e,r){return b.apply(this,arguments)}};r.Z=k},1755:function(e){e.exports="data:image/gif;base64,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"},4241:function(e,r,n){e.exports=n.p+"static/media/noImageAvailable.ac3b9d7ddc9aab861b22.jpg"}}]);
//# sourceMappingURL=reviews.4e18286f.chunk.js.map