window["a-login"]=function(n){var e={};function t(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return n[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}return t.m=n,t.c=e,t.d=function(n,e,r){t.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:r})},t.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},t.t=function(n,e){if(1&e&&(n=t(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var o in n)t.d(r,o,function(e){return n[e]}.bind(null,o));return r},t.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(e,"a",e),e},t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},t.p="",t(t.s=3)}([function(n,e,t){var r=t(9);"string"==typeof r&&(r=[[n.i,r,""]]),r.locals&&(n.exports=r.locals);(0,t(2).default)("400da3d9",r,!0,{})},function(n,e,t){"use strict";n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t=function(n,e){var t=n[1]||"",r=n[3];if(!r)return t;if(e&&"function"==typeof btoa){var o=(a=r,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */"),i=r.sources.map((function(n){return"/*# sourceURL="+r.sourceRoot+n+" */"}));return[t].concat(i).concat([o]).join("\n")}var a;return[t].join("\n")}(e,n);return e[2]?"@media "+e[2]+"{"+t+"}":t})).join("")},e.i=function(n,t){"string"==typeof n&&(n=[[null,n,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];null!=i&&(r[i]=!0)}for(o=0;o<n.length;o++){var a=n[o];null!=a[0]&&r[a[0]]||(t&&!a[2]?a[2]=t:t&&(a[2]="("+a[2]+") and ("+t+")"),e.push(a))}},e}},function(n,e,t){"use strict";function r(n,e){for(var t=[],r={},o=0;o<e.length;o++){var i=e[o],a=i[0],s={id:n+":"+o,css:i[1],media:i[2],sourceMap:i[3]};r[a]?r[a].parts.push(s):t.push(r[a]={id:a,parts:[s]})}return t}t.r(e),t.d(e,"default",(function(){return p}));var o="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!o)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var i={},a=o&&(document.head||document.getElementsByTagName("head")[0]),s=null,u=0,l=!1,c=function(){},f=null,d="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function p(n,e,t,o){l=t,f=o||{};var a=r(n,e);return v(a),function(e){for(var t=[],o=0;o<a.length;o++){var s=a[o];(u=i[s.id]).refs--,t.push(u)}e?v(a=r(n,e)):a=[];for(o=0;o<t.length;o++){var u;if(0===(u=t[o]).refs){for(var l=0;l<u.parts.length;l++)u.parts[l]();delete i[u.id]}}}}function v(n){for(var e=0;e<n.length;e++){var t=n[e],r=i[t.id];if(r){r.refs++;for(var o=0;o<r.parts.length;o++)r.parts[o](t.parts[o]);for(;o<t.parts.length;o++)r.parts.push(A(t.parts[o]));r.parts.length>t.parts.length&&(r.parts.length=t.parts.length)}else{var a=[];for(o=0;o<t.parts.length;o++)a.push(A(t.parts[o]));i[t.id]={id:t.id,refs:1,parts:a}}}}function h(){var n=document.createElement("style");return n.type="text/css",a.appendChild(n),n}function A(n){var e,t,r=document.querySelector('style[data-vue-ssr-id~="'+n.id+'"]');if(r){if(l)return c;r.parentNode.removeChild(r)}if(d){var o=u++;r=s||(s=h()),e=b.bind(null,r,o,!1),t=b.bind(null,r,o,!0)}else r=h(),e=x.bind(null,r),t=function(){r.parentNode.removeChild(r)};return e(n),function(r){if(r){if(r.css===n.css&&r.media===n.media&&r.sourceMap===n.sourceMap)return;e(n=r)}else t()}}var m,g=(m=[],function(n,e){return m[n]=e,m.filter(Boolean).join("\n")});function b(n,e,t,r){var o=t?"":r.css;if(n.styleSheet)n.styleSheet.cssText=g(e,o);else{var i=document.createTextNode(o),a=n.childNodes;a[e]&&n.removeChild(a[e]),a.length?n.insertBefore(i,a[e]):n.appendChild(i)}}function x(n,e){var t=e.css,r=e.media,o=e.sourceMap;if(r&&n.setAttribute("media",r),f.ssrId&&n.setAttribute("data-vue-ssr-id",e.id),o&&(t+="\n/*# sourceURL="+o.sources[0]+" */",t+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */"),n.styleSheet)n.styleSheet.cssText=t;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(t))}}},function(n,e,t){"use strict";t.r(e);var r;t(4);e.default={install:function(n,e){return r?console.error("already installed."):(r=n,e({routes:t(6).default,config:t(10).default,locales:t(11).default,components:t(13).default}))}}},function(n,e,t){var r=t(5);"string"==typeof r&&(r=[[n.i,r,""]]),r.locals&&(n.exports=r.locals);(0,t(2).default)("f4ea232e",r,!0,{})},function(n,e,t){(n.exports=t(1)(!0)).push([n.i,"\n","",{version:3,sources:[],names:[],mappings:"",file:"module.css"}])},function(n,e,t){"use strict";var r;t.r(e),e.default=[{path:"login",component:(r="login",t(7)("./".concat(r,".vue")).default)}]},function(n,e,t){var r={"./login.vue":14};function o(n){var e=i(n);return t(e)}function i(n){var e=r[n];if(!(e+1)){var t=new Error("Cannot find module '"+n+"'");throw t.code="MODULE_NOT_FOUND",t}return e}o.keys=function(){return Object.keys(r)},o.resolve=i,n.exports=o,o.id=7},function(n,e,t){"use strict";var r=t(0);t.n(r).a},function(n,e,t){(n.exports=t(1)(!0)).push([n.i,".close[data-v-59f4ec35] {\n  position: absolute;\n  top: 16px;\n  left: 16px;\n  cursor: pointer;\n}\n.line[data-v-59f4ec35] {\n  height: 1px;\n  margin: 30px 0;\n  text-align: center;\n  border-top: 1px solid #e2e2e2;\n}\n.line .text[data-v-59f4ec35] {\n  position: relative;\n  top: -10px;\n  background: #fff;\n  display: inline-block;\n  padding: 0 8px;\n}\n.btns[data-v-59f4ec35] {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  flex-wrap: wrap;\n  margin-bottom: 30px;\n}\n.btns .btn[data-v-59f4ec35] {\n  width: 36px;\n  height: 36px;\n  cursor: pointer;\n}\n","",{version:3,sources:["/Users/yangjian/Documents/data/cabloy/egg-born-demo/src/module/a-login/front/src/pages/login.vue?vue&type=style&index=0&id=59f4ec35&lang=less&scoped=true&","login.vue"],names:[],mappings:"AAuKA;EACE,kBAAA;EACA,SAAA;EACA,UAAA;EACA,eAAA;ACtKF;ADyKA;EACE,WAAA;EACA,cAAA;EACA,kBAAA;EACA,6BAAA;ACvKF;ADmKA;EAOI,kBAAA;EACA,UAAA;EACA,gBAAA;EACA,qBAAA;EACA,cAAA;ACvKJ;AD2KA;EACE,aAAA;EACA,mBAAA;EACA,uBAAA;EACA,eAAA;EACA,mBAAA;ACzKF;ADoKA;EAQI,WAAA;EACA,YAAA;EACA,eAAA;ACzKJ",file:"login.vue?vue&type=style&index=0&id=59f4ec35&lang=less&scoped=true&",sourcesContent:["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.close {\n  position: absolute;\n  top: 16px;\n  left: 16px;\n  cursor: pointer;\n}\n\n.line {\n  height: 1px;\n  margin: 30px 0;\n  text-align: center;\n  border-top: 1px solid #e2e2e2;\n\n  .text {\n    position: relative;\n    top: -10px;\n    background: #fff;\n    display: inline-block;\n    padding: 0 8px;\n  }\n}\n\n.btns {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  flex-wrap: wrap;\n  margin-bottom: 30px;\n\n  .btn {\n    width: 36px;\n    height: 36px;\n    cursor: pointer;\n  }\n}\n\n",".close {\n  position: absolute;\n  top: 16px;\n  left: 16px;\n  cursor: pointer;\n}\n.line {\n  height: 1px;\n  margin: 30px 0;\n  text-align: center;\n  border-top: 1px solid #e2e2e2;\n}\n.line .text {\n  position: relative;\n  top: -10px;\n  background: #fff;\n  display: inline-block;\n  padding: 0 8px;\n}\n.btns {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  flex-wrap: wrap;\n  margin-bottom: 30px;\n}\n.btns .btn {\n  width: 36px;\n  height: 36px;\n  cursor: pointer;\n}\n"]}])},function(n,e,t){"use strict";t.r(e),e.default={}},function(n,e,t){"use strict";t.r(e),e.default={"zh-cn":t(12).default}},function(n,e,t){"use strict";t.r(e),e.default={or:"或","Sign in":"登录"}},function(n,e,t){"use strict";t.r(e),e.default={}},function(n,e,t){"use strict";t.r(e);var r={meta:{title:"Sign in"},data:function(){return{providers:null,showClose:!1}},computed:{title:function(){return this.$store.getters["auth/title"]}},mounted:function(){this.showClose=this.$meta.vueLayout.backLink(this)},created:function(){var n=this;return this.$api.post("auth/list").then((function(e){0!==e.length&&n.loadProviders(e).then((function(e){n.providers=e.filter((function(n){return!!n}))}))}))},render:function(n){var e=[];if(this.providers){this.showClose&&e.push(n("f7-icon",{staticClass:"close",attrs:{material:"close"},nativeOn:{click:this.onClose}})),e.push(n("f7-login-screen-title",{domProps:{innerText:this.title}}));var t,r,o=this.combineLoginTop(n),i=this.combineLoginBottom(n);if(o&&i&&(t=n("div",{staticClass:"line"},[n("div",{staticClass:"text",domProps:{innerText:this.$text("or")}})])),o&&e.push(o),t||i){var a=[];t&&a.push(t),i&&a.push(i),r=n("f7-block",a)}r&&e.push(r)}return n("eb-page",{attrs:{"login-screen":!0,"no-toolbar":!0,"no-navbar":!0,"no-swipeback":!0}},e)},methods:{onClose:function(){this.$f7router.back()},combineLoginTop:function(n){if(!this.providers)return null;var e=this.providers.filter((function(n){return"direct"===n.provider.meta.mode}));if(0===e.length)return null;if(1===e.length)return n(e[0].component);var t=[],r=[];for(var o in e){var i=e[o];t.push(n("f7-link",{attrs:{"tab-link":"#tab-".concat(o),"tab-link-active":0===parseInt(o),text:i.provider.meta.titleLocale}})),r.push(n("f7-tab",{attrs:{id:"tab-".concat(o),"tab-active":0===parseInt(o)}},[n(i.component)]))}var a=n("f7-toolbar",{attrs:{top:!0,tabbar:!0}},t),s=n("f7-tabs",r);return n("div",[a,s])},combineLoginBottom:function(n){if(!this.providers)return null;var e=this.providers.filter((function(n){return"redirect"===n.provider.meta.mode}));if(0===e.length)return null;var t=[],r=!0,o=!1,i=void 0;try{for(var a,s=e[Symbol.iterator]();!(r=(a=s.next()).done);r=!0){var u=a.value;t.push(n(u.component,{staticClass:"btn"}))}}catch(n){o=!0,i=n}finally{try{r||null==s.return||s.return()}finally{if(o)throw i}}return n("div",{staticClass:"btns"},t)},loadProviders:function(n){var e=[],t=!0,r=!1,o=void 0;try{for(var i,a=n[Symbol.iterator]();!(t=(i=a.next()).done);t=!0){var s=i.value;s&&e.push(this._loadProvider(s))}}catch(n){r=!0,o=n}finally{try{t||null==a.return||a.return()}finally{if(r)throw o}}return Promise.all(e)},_loadProvider:function(n){var e=this;return new Promise((function(t,r){e.$meta.module.use(n.module,(function(r){if(!n.meta.component)return t(null);var o=r.options.components[n.meta.component];e._checkIfDisable(o,n).then((function(e){t(e?null:{provider:n,component:o})}))}))}))},_checkIfDisable:function(n,e){var t=this;return new Promise((function(r,o){return n.meta?"function"!=typeof n.meta.disable?r(n.meta.disable):void t.$meta.util.wrapPromise(n.meta.disable({ctx:t,provider:e})).then((function(n){return r(n)})):r(!1)}))}}};t(8);var o=function(n,e,t,r,o,i,a,s){var u,l="function"==typeof n?n.options:n;if(e&&(l.render=e,l.staticRenderFns=t,l._compiled=!0),r&&(l.functional=!0),i&&(l._scopeId="data-v-"+i),a?(u=function(n){(n=n||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(n=__VUE_SSR_CONTEXT__),o&&o.call(this,n),n&&n._registeredComponents&&n._registeredComponents.add(a)},l._ssrRegister=u):o&&(u=s?function(){o.call(this,this.$root.$options.shadowRoot)}:o),u)if(l.functional){l._injectStyles=u;var c=l.render;l.render=function(n,e){return u.call(e),c(n,e)}}else{var f=l.beforeCreate;l.beforeCreate=f?[].concat(f,u):[u]}return{exports:n,options:l}}(r,void 0,void 0,!1,null,"59f4ec35",null);e.default=o.exports}]);