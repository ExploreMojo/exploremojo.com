(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{UHMF:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/issues",function(){return n("mdkZ")}])},YFqc:function(e,t,n){e.exports=n("cTJO")},cTJO:function(e,t,n){"use strict";var r=n("lwsE"),o=n("W8MJ"),i=n("7W2i"),s=n("a1gu"),a=n("Nsbk");function c(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=a(e);if(t){var o=a(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return s(this,n)}}var u=n("TqRt"),f=n("284h");t.__esModule=!0,t.default=void 0;var l,p=f(n("q1tI")),h=n("QmWs"),v=n("g/15"),d=u(n("nOHt")),y=n("elyg");function w(e){return e&&"object"===typeof e?(0,v.formatWithValidation)(e):e}var g=new Map,m=window.IntersectionObserver,k={};function b(){return l||(m?l=new m((function(e){e.forEach((function(e){if(g.has(e.target)){var t=g.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(l.unobserve(e.target),g.delete(e.target),t())}}))}),{rootMargin:"200px"}):void 0)}var E=function(e){i(n,e);var t=c(n);function n(e){var o;return r(this,n),(o=t.call(this,e)).p=void 0,o.cleanUpListeners=function(){},o.formatUrls=function(e){var t=null,n=null,r=null;return function(o,i){if(r&&o===t&&i===n)return r;var s=e(o,i);return t=o,n=i,r=s,s}}((function(e,t){return{href:(0,y.addBasePath)(w(e)),as:t?(0,y.addBasePath)(w(t)):t}})),o.linkClicked=function(e){var t=e.currentTarget,n=t.nodeName,r=t.target;if("A"!==n||!(r&&"_self"!==r||e.metaKey||e.ctrlKey||e.shiftKey||e.nativeEvent&&2===e.nativeEvent.which)){var i=o.formatUrls(o.props.href,o.props.as),s=i.href,a=i.as;if(function(e){var t=(0,h.parse)(e,!1,!0),n=(0,h.parse)((0,v.getLocationOrigin)(),!1,!0);return!t.host||t.protocol===n.protocol&&t.host===n.host}(s)){var c=window.location.pathname;s=(0,h.resolve)(c,s),a=a?(0,h.resolve)(c,a):s,e.preventDefault();var u=o.props.scroll;null==u&&(u=a.indexOf("#")<0),d.default[o.props.replace?"replace":"push"](s,a,{shallow:o.props.shallow}).then((function(e){e&&u&&(window.scrollTo(0,0),document.body.focus())}))}}},o.p=!1!==e.prefetch,o}return o(n,[{key:"componentWillUnmount",value:function(){this.cleanUpListeners()}},{key:"getPaths",value:function(){var e=window.location.pathname,t=this.formatUrls(this.props.href,this.props.as),n=t.href,r=t.as,o=(0,h.resolve)(e,n);return[o,r?(0,h.resolve)(e,r):o]}},{key:"handleRef",value:function(e){var t=this;this.p&&m&&e&&e.tagName&&(this.cleanUpListeners(),k[this.getPaths().join("%")]||(this.cleanUpListeners=function(e,t){var n=b();return n?(n.observe(e),g.set(e,t),function(){try{n.unobserve(e)}catch(t){console.error(t)}g.delete(e)}):function(){}}(e,(function(){t.prefetch()}))))}},{key:"prefetch",value:function(e){if(this.p){var t=this.getPaths();d.default.prefetch(t[0],t[1],e).catch((function(e){0})),k[t.join("%")]=!0}}},{key:"render",value:function(){var e=this,t=this.props.children,n=this.formatUrls(this.props.href,this.props.as),r=n.href,o=n.as;"string"===typeof t&&(t=p.default.createElement("a",null,t));var i=p.Children.only(t),s={ref:function(t){e.handleRef(t),i&&"object"===typeof i&&i.ref&&("function"===typeof i.ref?i.ref(t):"object"===typeof i.ref&&(i.ref.current=t))},onMouseEnter:function(t){i.props&&"function"===typeof i.props.onMouseEnter&&i.props.onMouseEnter(t),e.prefetch({priority:!0})},onClick:function(t){i.props&&"function"===typeof i.props.onClick&&i.props.onClick(t),t.defaultPrevented||e.linkClicked(t)}};return!this.props.passHref&&("a"!==i.type||"href"in i.props)||(s.href=o||r),p.default.cloneElement(i,s)}}]),n}(p.Component);t.default=E},mdkZ:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return u}));var r=n("q1tI"),o=n.n(r),i=(n("8Kt/"),n("t30L")),s=n("VKGP"),a=n("7vrA"),c=(n("YFqc"),o.a.createElement);function u(){return c(i.a,null,c(a.a,null,c(s.d,{type:"huge",subTitle:"Mojo for XD is not perfect yet. Help us improve."},"Issues"),c(s.d,{type:"h1",subTitle:""},"Known Issues"),c(s.j,null,"Work in progress...")),c("div",{style:{height:"220px"}}))}}},[["UHMF",0,1,2,3]]]);