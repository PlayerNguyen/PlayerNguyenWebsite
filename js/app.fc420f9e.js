(function(e){function t(t){for(var n,o,c=t[0],i=t[1],s=t[2],l=0,f=[];l<c.length;l++)o=c[l],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&f.push(a[o][0]),a[o]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n]);d&&d(t);while(f.length)f.shift()();return u.push.apply(u,s||[]),r()}function r(){for(var e,t=0;t<u.length;t++){for(var r=u[t],n=!0,o=1;o<r.length;o++){var c=r[o];0!==a[c]&&(n=!1)}n&&(u.splice(t--,1),e=i(i.s=r[0]))}return e}var n={},o={app:0},a={app:0},u=[];function c(e){return i.p+"js/"+({about:"about",project:"project"}[e]||e)+"."+{about:"8d41442b",project:"82ec4d89"}[e]+".js"}function i(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.e=function(e){var t=[],r={project:1};o[e]?t.push(o[e]):0!==o[e]&&r[e]&&t.push(o[e]=new Promise((function(t,r){for(var n="css/"+({about:"about",project:"project"}[e]||e)+"."+{about:"31d6cfe0",project:"4f0266ee"}[e]+".css",a=i.p+n,u=document.getElementsByTagName("link"),c=0;c<u.length;c++){var s=u[c],l=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(l===n||l===a))return t()}var f=document.getElementsByTagName("style");for(c=0;c<f.length;c++){s=f[c],l=s.getAttribute("data-href");if(l===n||l===a)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var n=t&&t.target&&t.target.src||a,u=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");u.code="CSS_CHUNK_LOAD_FAILED",u.request=n,delete o[e],d.parentNode.removeChild(d),r(u)},d.href=a;var p=document.getElementsByTagName("head")[0];p.appendChild(d)})).then((function(){o[e]=0})));var n=a[e];if(0!==n)if(n)t.push(n[2]);else{var u=new Promise((function(t,r){n=a[e]=[t,r]}));t.push(n[2]=u);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=c(e);var f=new Error;s=function(t){l.onerror=l.onload=null,clearTimeout(d);var r=a[e];if(0!==r){if(r){var n=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;f.message="Loading chunk "+e+" failed.\n("+n+": "+o+")",f.name="ChunkLoadError",f.type=n,f.request=o,r[1](f)}a[e]=void 0}};var d=setTimeout((function(){s({type:"timeout",target:l})}),12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(t)},i.m=e,i.c=n,i.d=function(e,t,r){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(r,n,function(t){return e[t]}.bind(null,n));return r},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/PlayerNguyenWebsite/",i.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var f=0;f<s.length;f++)t(s[f]);var d=l;u.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"4a64":function(e,t,r){"use strict";var n=r("cfad"),o=r.n(n);o.a},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{class:[e.DarkMode?"DarkMode":""],attrs:{id:"app"}},[r("Navbar"),r("router-view")],1)},a=[],u=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"Navbar"},[r("router-link",{attrs:{to:"/"}},[e._v("Home")]),r("router-link",{attrs:{to:"/project"}},[e._v("Project")]),r("router-link",{attrs:{to:"/about"}},[e._v("facebook")]),r("router-link",{attrs:{to:"/about"}},[e._v("github")])],1)},c=[],i={name:"Navbar"},s=i,l=(r("4a64"),r("2877")),f=Object(l["a"])(s,u,c,!1,null,"65def7e4",null),d=f.exports,p={data:function(){return{DarkMode:this.$store.state.darkMode}},components:{Navbar:d},watch:{DarkMode:function(e,t){console.log(e,t)}}},v=p,h=(r("cf25"),Object(l["a"])(v,o,a,!1,null,null,null)),b=h.exports,m=(r("d3b7"),r("8c4f")),g=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"Home"},[r("div",{staticClass:"Container Center"},[r("h1",{staticClass:"SuperTitle"},[e._v("\x3c!-- Hi 👋 --\x3e")]),r("p",[e._v("I'm coding with love and nothing can hold be back;")]),r("div",{},[r("router-link",{staticClass:"ProjectLink",attrs:{to:"/project"}},[e._v("<projects/>")]),e._v(" | "),r("router-link",{staticClass:"ProjectLink",attrs:{to:"/project"}},[e._v("<github/>")])],1)])])},y=[],j={name:"Home",title:"Home",components:{},data:function(){return{school:"/secret/"}}},k=j,_=(r("adb8"),Object(l["a"])(k,g,y,!1,null,"9d72a14a",null)),w=_.exports;n["a"].use(m["a"]);var P=[{path:"/",name:"Home",component:w},{path:"/about",name:"About",component:function(){return r.e("about").then(r.bind(null,"f820"))}},{path:"/project",name:"Project",component:function(){return r.e("project").then(r.bind(null,"07bd"))}}],C=new m["a"]({mode:"history",base:"/PlayerNguyenWebsite/",routes:P}),O=C,x=r("2274"),M=r("2f62");n["a"].use(M["a"]);var E=new M["a"].Store({state:{darkMode:!1},mutations:{toggleDarkMode:function(){this.darkMode=!this.darkMode}},actions:{},modules:{}});n["a"].config.productionTip=!1,n["a"].use(x["a"],{suffix:" • Player Nguyen"}),new n["a"]({router:O,store:E,render:function(e){return e(b)}}).$mount("#app")},"99e2":function(e,t,r){},adb8:function(e,t,r){"use strict";var n=r("99e2"),o=r.n(n);o.a},cf25:function(e,t,r){"use strict";var n=r("fea6"),o=r.n(n);o.a},cfad:function(e,t,r){},fea6:function(e,t,r){}});
//# sourceMappingURL=app.fc420f9e.js.map