(function(t){function e(e){for(var n,r,c=e[0],i=e[1],l=e[2],u=0,f=[];u<c.length;u++)r=c[u],s[r]&&f.push(s[r][0]),s[r]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n]);d&&d(e);while(f.length)f.shift()();return o.push.apply(o,l||[]),a()}function a(){for(var t,e=0;e<o.length;e++){for(var a=o[e],n=!0,r=1;r<a.length;r++){var c=a[r];0!==s[c]&&(n=!1)}n&&(o.splice(e--,1),t=i(i.s=a[0]))}return t}var n={},r={app:0},s={app:0},o=[];function c(t){return i.p+"js/"+({"most-wanted~new~translating":"most-wanted~new~translating","most-wanted":"most-wanted",new:"new",translating:"translating"}[t]||t)+"."+{"most-wanted~new~translating":"bddd93d5","most-wanted":"1ac3528c",new:"1b6a1ea7",translating:"5b0f85d5"}[t]+".js"}function i(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.e=function(t){var e=[],a={"most-wanted~new~translating":1};r[t]?e.push(r[t]):0!==r[t]&&a[t]&&e.push(r[t]=new Promise(function(e,a){for(var n="css/"+({"most-wanted~new~translating":"most-wanted~new~translating","most-wanted":"most-wanted",new:"new",translating:"translating"}[t]||t)+"."+{"most-wanted~new~translating":"0c8e9b76","most-wanted":"31d6cfe0",new:"31d6cfe0",translating:"31d6cfe0"}[t]+".css",s=i.p+n,o=document.getElementsByTagName("link"),c=0;c<o.length;c++){var l=o[c],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===n||u===s))return e()}var f=document.getElementsByTagName("style");for(c=0;c<f.length;c++){l=f[c],u=l.getAttribute("data-href");if(u===n||u===s)return e()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=e,d.onerror=function(e){var n=e&&e.target&&e.target.src||s,o=new Error("Loading CSS chunk "+t+" failed.\n("+n+")");o.request=n,delete r[t],d.parentNode.removeChild(d),a(o)},d.href=s;var b=document.getElementsByTagName("head")[0];b.appendChild(d)}).then(function(){r[t]=0}));var n=s[t];if(0!==n)if(n)e.push(n[2]);else{var o=new Promise(function(e,a){n=s[t]=[e,a]});e.push(n[2]=o);var l,u=document.getElementsByTagName("head")[0],f=document.createElement("script");f.charset="utf-8",f.timeout=120,i.nc&&f.setAttribute("nonce",i.nc),f.src=c(t),l=function(e){f.onerror=f.onload=null,clearTimeout(d);var a=s[t];if(0!==a){if(a){var n=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src,o=new Error("Loading chunk "+t+" failed.\n("+n+": "+r+")");o.type=n,o.request=r,a[1](o)}s[t]=void 0}};var d=setTimeout(function(){l({type:"timeout",target:f})},12e4);f.onerror=f.onload=l,u.appendChild(f)}return Promise.all(e)},i.m=t,i.c=n,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(a,n,function(e){return t[e]}.bind(null,n));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/",i.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=e,l=l.slice();for(var f=0;f<l.length;f++)e(l[f]);var d=u;o.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("cd49")},"0836":function(t,e,a){},4678:function(t,e,a){var n={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb718","./de-ch.js":"bb718","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-nz":"6f50","./en-nz.js":"6f50","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-tw":"90ea","./zh-tw.js":"90ea"};function r(t){var e=s(t);return a(e)}function s(t){var e=n[t];if(!(e+1)){var a=new Error("Cannot find module '"+t+"'");throw a.code="MODULE_NOT_FOUND",a}return e}r.keys=function(){return Object.keys(n)},r.resolve=s,t.exports=r,r.id="4678"},4857:function(t,e,a){"use strict";var n=a("deca"),r=a.n(n);r.a},"74b3":function(t,e,a){},"7faf":function(t,e,a){"use strict";var n=a("882c"),r=a.n(n);r.a},"882c":function(t,e,a){},"9b22":function(t,e,a){"use strict";var n=a("74b3"),r=a.n(n);r.a},b3b3:function(t,e,a){"use strict";var n=a("0836"),r=a.n(n);r.a},cd49:function(t,e,a){"use strict";a.r(e);a("cadf"),a("551c"),a("097d");var n=a("2b0e"),r=a("ce5b"),s=a.n(r),o=(a("da64"),a("25a2"));n["default"].use(s.a,{theme:{primary:"#ee44aa",secondary:"#424242",accent:"#82B1FF",error:"#FF5252",info:"#2196F3",success:"#4CAF50",warning:"#FFC107"},customProperties:!0,iconfont:"mdi",lang:{locales:{zhHans:o["a"]},current:"zh-Hans"}});var c=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("lc-nav-bar"),a("lc-nav-drawer"),a("v-content",[a("lc-nav-tab"),a("router-view")],1)],1)},i=[],l=a("d4ec"),u=a("99de"),f=a("7e84"),d=a("262e"),b=a("9ab4"),p=a("60a3"),j=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-toolbar",{staticClass:"lc-nav-bar",attrs:{flat:"",app:""}},[a("v-toolbar-side-icon",{on:{click:function(e){t.toggleDrawerDisplay()}}}),a("v-toolbar-title",{staticClass:"headline text-uppercase"},[a("span",[t._v("Linux.cn ")]),a("span",{staticClass:"font-weight-light"},[t._v("Translation Team")])]),a("v-toolbar-items",t._l(t.links,function(e){return a("v-btn",{key:e.title,attrs:{flat:"",href:e.href}},[t._v(t._s(e.title))])}))],1)},h=[],m=a("4bb5"),v=[{title:"Home",href:"https://linux.cn/lctt/"},{title:"Wiki",href:"https://lctt.github.io/wiki"},{title:"Token",href:"https://lctt.linux.cn/"},{title:"Shop",href:"https://shop.linux.cn/"}],g=v,w=Object(m["a"])("site"),y=function(t){function e(){var t;return Object(l["a"])(this,e),t=Object(u["a"])(this,Object(f["a"])(e).apply(this,arguments)),t.links=g,t}return Object(d["a"])(e,t),e}(p["c"]);b["a"]([w.Action("toggleDrawerDisplay")],y.prototype,"toggleDrawerDisplay",void 0),y=b["a"]([p["a"]],y);var k=y,O=k,T=(a("4857"),a("2877")),D=a("6544"),_=a.n(D),N=a("8336"),x=a("71d9"),L=a("2a7f"),S=a("706c"),z=Object(T["a"])(O,j,h,!1,null,"722f57dc",null);z.options.__file="LcNavBar.vue";var A=z.exports;_()(z,{VBtn:N["a"],VToolbar:x["a"],VToolbarItems:L["a"],VToolbarSideIcon:S["a"],VToolbarTitle:L["b"]});var E=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-navigation-drawer",{staticClass:"lc-nav-drawer",attrs:{fixed:"",temporary:""},model:{value:t.drawerShown,callback:function(e){t.drawerShown=e},expression:"drawerShown"}},[a("v-list",t._l(t.links,function(e){return a("v-list-tile",{key:e.title,attrs:{href:e.href}},[t._v(t._s(e.title))])}))],1)},V=[],C=a("bee2"),P=Object(m["a"])("site"),F=function(t){function e(){var t;return Object(l["a"])(this,e),t=Object(u["a"])(this,Object(f["a"])(e).apply(this,arguments)),t.links=g,t}return Object(d["a"])(e,t),Object(C["a"])(e,[{key:"drawerShown",get:function(){return this.showDrawer},set:function(t){this.setDrawerDisplay(t)}}]),e}(p["c"]);b["a"]([P.State("showDrawer")],F.prototype,"showDrawer",void 0),b["a"]([P.Action("setDrawerDisplay")],F.prototype,"setDrawerDisplay",void 0),F=b["a"]([p["a"]],F);var B=F,M=B,W=(a("b3b3"),a("8860")),I=a("ba95"),R=a("f774"),q=Object(T["a"])(M,E,V,!1,null,"8ebb84c8",null);q.options.__file="LcNavDrawer.vue";var $=q.exports;_()(q,{VList:W["a"],VListTile:I["a"],VNavigationDrawer:R["a"]});var G=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{staticClass:"lc-nav-tab",class:{lock:t.isLock},attrs:{fluid:""}},[a("v-layout",{attrs:{"align-center":""}},[a("v-flex",{attrs:{grow:""}},[a("v-tabs",{attrs:{"fixed-tabs":"",color:"transparent","slider-color":"#999"}},t._l(t.routes,function(e){return e.meta&&e.meta.title?a("v-tab",{key:e.path,attrs:{to:e.path}},[t._v(t._s(e.meta.title))]):t._e()}))],1),a("v-flex",{attrs:{shrink:""}},[a("v-btn",{attrs:{flat:"",small:"",icon:""},on:{click:function(e){t.toggleLock()}}},[t.isLock?a("v-icon",{attrs:{small:""}},[t._v("mdi-lock")]):a("v-icon",{attrs:{small:""}},[t._v("mdi-lock-open")])],1)],1)],1)],1)},H=[],J=[{path:"*",redirect:"/translating"},{path:"/new",name:"new",meta:{title:"待认领"},component:function(){return Promise.all([a.e("most-wanted~new~translating"),a.e("new")]).then(a.bind(null,"67bf"))}},{path:"/translating",name:"translating",meta:{title:"翻译中"},component:function(){return Promise.all([a.e("most-wanted~new~translating"),a.e("translating")]).then(a.bind(null,"270a"))}},{path:"/most-wanted",name:"most-wanted",meta:{title:"天梯榜"},component:function(){return Promise.all([a.e("most-wanted~new~translating"),a.e("most-wanted")]).then(a.bind(null,"4b8a"))}}],U=J,K=Object(m["a"])("site"),Q=function(t){function e(){var t;return Object(l["a"])(this,e),t=Object(u["a"])(this,Object(f["a"])(e).apply(this,arguments)),t.routes=U,t}return Object(d["a"])(e,t),e}(p["c"]);b["a"]([K.State("lockNavTab")],Q.prototype,"isLock",void 0),b["a"]([K.Action("toggleNavTabLock")],Q.prototype,"toggleLock",void 0),Q=b["a"]([p["a"]],Q);var X=Q,Y=X,Z=(a("9b22"),a("a523")),tt=a("0e8f"),et=a("132d"),at=a("a722"),nt=a("71a3"),rt=a("fe57"),st=Object(T["a"])(Y,G,H,!1,null,"2aa8dbe8",null);st.options.__file="LcNavTab.vue";var ot=st.exports;_()(st,{VBtn:N["a"],VContainer:Z["a"],VFlex:tt["a"],VIcon:et["a"],VLayout:at["a"],VTab:nt["a"],VTabs:rt["a"]});var ct=function(t){function e(){return Object(l["a"])(this,e),Object(u["a"])(this,Object(f["a"])(e).apply(this,arguments))}return Object(d["a"])(e,t),e}(p["c"]);ct=b["a"]([Object(p["a"])({components:{LcNavBar:A,LcNavDrawer:$,LcNavTab:ot}})],ct);var it=ct,lt=it,ut=(a("7faf"),a("7496")),ft=a("549c"),dt=Object(T["a"])(lt,c,i,!1,null,null,null);dt.options.__file="App.vue";var bt=dt.exports;_()(dt,{VApp:ut["a"],VContent:ft["a"]});var pt=a("8c4f");n["default"].use(pt["a"]);var jt=new pt["a"]({mode:"history",base:"/",routes:U}),ht=a("2f62"),mt=a("6fc5"),vt=function(t){function e(){var t;return Object(l["a"])(this,e),t=Object(u["a"])(this,Object(f["a"])(e).apply(this,arguments)),t.showDrawer=!0,t.lockNavTab=!0,t}return Object(d["a"])(e,t),Object(C["a"])(e,[{key:"commitSetDrawerDisplay",value:function(t){this.showDrawer=t}},{key:"setDrawerDisplay",value:function(t){this.context.commit("commitSetDrawerDisplay",t)}},{key:"commitToggleDrawerDisplay",value:function(){this.showDrawer=!this.showDrawer}},{key:"toggleDrawerDisplay",value:function(){this.context.commit("commitToggleDrawerDisplay")}},{key:"commitToggleNavTabLock",value:function(){this.lockNavTab=!this.lockNavTab}},{key:"toggleNavTabLock",value:function(){this.context.commit("commitToggleNavTabLock")}}]),e}(mt["d"]);b["a"]([mt["c"]],vt.prototype,"commitSetDrawerDisplay",null),b["a"]([mt["a"]],vt.prototype,"setDrawerDisplay",null),b["a"]([mt["c"]],vt.prototype,"commitToggleDrawerDisplay",null),b["a"]([mt["a"]],vt.prototype,"toggleDrawerDisplay",null),b["a"]([mt["c"]],vt.prototype,"commitToggleNavTabLock",null),b["a"]([mt["a"]],vt.prototype,"toggleNavTabLock",null),vt=b["a"]([Object(mt["b"])({namespaced:!0})],vt);var gt,wt=vt,yt=(a("96cf"),a("1da1"));(function(t){t[t["NEW"]=0]="NEW",t[t["TRANSLATING"]=1]="TRANSLATING",t[t["MOST_WANTED"]=2]="MOST_WANTED"})(gt||(gt={}));a("55dd"),a("ac6a");var kt=a("c1df"),Ot=a.n(kt),Tt=function(t,e){var a=[];return t.forEach(function(t){var n=t.time,r=t.file,s=t.user;if(e===gt.TRANSLATING){var o={time:Ot()(n),path:r,author:s};a.push(o)}else{var c={time:Ot()(n),path:r};a.push(c)}}),a.sort(function(t,e){return t.time.isAfter(e.time)?1:-1})},Dt=function(t){function e(){var t;return Object(l["a"])(this,e),t=Object(u["a"])(this,Object(f["a"])(e).apply(this,arguments)),t.new=[],t.translating=[],t.mostWanted=[],t}return Object(d["a"])(e,t),Object(C["a"])(e,[{key:"updateStatus",value:function(t){this.translating=Tt(t.translating,gt.TRANSLATING),this.new=Tt(t.unselected,gt.NEW),this.mostWanted=this.new.splice(0,Math.round(.2*this.new.length))}},{key:"update",value:function(){var t=Object(yt["a"])(regeneratorRuntime.mark(function t(){var e,a;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://lctt.github.io/TranslateProject/status/status.json");case 2:return e=t.sent,t.next=5,e.json();case 5:a=t.sent,this.context.commit("updateStatus",a);case 7:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()}]),e}(mt["d"]);b["a"]([mt["c"]],Dt.prototype,"updateStatus",null),b["a"]([mt["a"]],Dt.prototype,"update",null),Dt=b["a"]([Object(mt["b"])({namespaced:!0})],Dt);var _t=Dt;n["default"].use(ht["a"]);var Nt=new ht["a"].Store({modules:{status:_t,site:wt}}),xt=a("9483");Object(xt["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},cached:function(){console.log("Content has been cached for offline use.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}});a("d5e8"),a("5363");n["default"].config.productionTip=!1,new n["default"]({router:jt,store:Nt,render:function(t){return t(bt)}}).$mount("#app"),Nt.dispatch("status/update")},deca:function(t,e,a){}});
//# sourceMappingURL=app.46585fd4.js.map