(function(a){function t(t){for(var n,i,d=t[0],s=t[1],l=t[2],c=0,v=[];c<d.length;c++)i=d[c],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&v.push(o[i][0]),o[i]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(a[n]=s[n]);p&&p(t);while(v.length)v.shift()();return r.push.apply(r,l||[]),e()}function e(){for(var a,t=0;t<r.length;t++){for(var e=r[t],n=!0,i=1;i<e.length;i++){var s=e[i];0!==o[s]&&(n=!1)}n&&(r.splice(t--,1),a=d(d.s=e[0]))}return a}var n={},o={app:0},r=[];function i(a){return d.p+"js/"+({}[a]||a)+"."+{"chunk-17db356f":"d1419217","chunk-3a55fd90":"95d46966","chunk-5165653a":"06b97007","chunk-1da60c40":"a05d7ada","chunk-3e642d62":"48f63ae1"}[a]+".js"}function d(t){if(n[t])return n[t].exports;var e=n[t]={i:t,l:!1,exports:{}};return a[t].call(e.exports,e,e.exports,d),e.l=!0,e.exports}d.e=function(a){var t=[],e=o[a];if(0!==e)if(e)t.push(e[2]);else{var n=new Promise((function(t,n){e=o[a]=[t,n]}));t.push(e[2]=n);var r,s=document.createElement("script");s.charset="utf-8",s.timeout=120,d.nc&&s.setAttribute("nonce",d.nc),s.src=i(a);var l=new Error;r=function(t){s.onerror=s.onload=null,clearTimeout(c);var e=o[a];if(0!==e){if(e){var n=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;l.message="Loading chunk "+a+" failed.\n("+n+": "+r+")",l.name="ChunkLoadError",l.type=n,l.request=r,e[1](l)}o[a]=void 0}};var c=setTimeout((function(){r({type:"timeout",target:s})}),12e4);s.onerror=s.onload=r,document.head.appendChild(s)}return Promise.all(t)},d.m=a,d.c=n,d.d=function(a,t,e){d.o(a,t)||Object.defineProperty(a,t,{enumerable:!0,get:e})},d.r=function(a){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(a,"__esModule",{value:!0})},d.t=function(a,t){if(1&t&&(a=d(a)),8&t)return a;if(4&t&&"object"===typeof a&&a&&a.__esModule)return a;var e=Object.create(null);if(d.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:a}),2&t&&"string"!=typeof a)for(var n in a)d.d(e,n,function(t){return a[t]}.bind(null,n));return e},d.n=function(a){var t=a&&a.__esModule?function(){return a["default"]}:function(){return a};return d.d(t,"a",t),t},d.o=function(a,t){return Object.prototype.hasOwnProperty.call(a,t)},d.p="/vue_search_image/",d.oe=function(a){throw console.error(a),a};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var c=0;c<s.length;c++)t(s[c]);var p=l;r.push([0,"chunk-vendors"]),e()})({0:function(a,t,e){a.exports=e("56d7")},"18c9":function(a,t,e){var n=e("9eb2");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[a.i,n,""]]),n.locals&&(a.exports=n.locals);var o=e("499e").default;o("73cf149e",n,!0,{sourceMap:!1,shadowMode:!1})},"2fa3":function(a,t,e){"use strict";e.d(t,"b",(function(){return s})),e.d(t,"a",(function(){return l}));var n=e("bc3a"),o=e.n(n),r=e("3d20"),i=e.n(r);const d="https://api.unsplash.com/",s=o.a.create({baseURL:d}),l=i.a.mixin({toast:!0,position:"center"})},"3afe":function(a,t,e){a.exports=e.p+"img/ziwen-nobk.7a427a1d.png"},4183:function(a,t,e){"use strict";e("18c9")},5510:function(a,t,e){var n=e("e297");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[a.i,n,""]]),n.locals&&(a.exports=n.locals);var o=e("499e").default;o("3c1c7bbe",n,!0,{sourceMap:!1,shadowMode:!1})},"56d7":function(a,t,e){"use strict";e.r(t);var n=e("2b0e"),o=function(){var a=this,t=a._self._c;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},r=[],i={name:"App",components:{}},d=i,s=e("2877"),l=Object(s["a"])(d,o,r,!1,null,null,null),c=l.exports,p=e("8c4f"),v=function(){var a=this,t=a._self._c;return t("div",{staticClass:"main-container"},[t("Navbar"),t("h3",[a._v("糟糕！發生錯誤，請回首頁試試")])],1)},u=[],h=e("d178"),f={name:"HomePage",components:{Navbar:h["a"]}},m=f,g=(e("ef77"),Object(s["a"])(m,v,u,!1,null,"59ae3ad4",null)),b=g.exports,w=e("2f62");n["a"].use(w["a"]);var x=new w["a"].Store({state:{darkMode:!1,colorChose:"",sortChose:"",showImg:{id:-1,createdAt:"",likeCounts:0,regular:"",small:"",isFavorite:!1}},getters:{},mutations:{getOneImage(a,t){t.id?t.id&&(a.showImg=t,localStorage.setItem("STORAGE_showImg",JSON.stringify(t))):a.showImg=JSON.parse(localStorage.getItem("STORAGE_showImg"))},changeMode(a,t){const e=document.querySelector("footer"),n=document.querySelector("nav"),o=document.querySelector(".main-container");"clickNav"===t&&(a.darkMode=!a.darkMode),a.darkMode?(e.setAttribute("data-theme","dark"),n.setAttribute("data-theme","dark"),o.setAttribute("data-theme","dark")):a.darkMode||(e.setAttribute("data-theme","light"),n.setAttribute("data-theme","light"),o.setAttribute("data-theme","light"))},changeColorCondition(a,t){a.colorChose=t},changeSortCondition(a,t){a.sortChose=t}},actions:{visitImagePage({commit:a}){const t=JSON.parse(localStorage.getItem("STORAGE_showImg"));a("getOneImage",t)}},modules:{}});n["a"].use(p["a"]);const y=[{path:"/",name:"root",redirect:"/homepage"},{path:"/homepage/:id",name:"home-image",component:()=>e.e("chunk-17db356f").then(e.bind(null,"1f51"))},{path:"/homepage",name:"home-page",component:()=>Promise.all([e.e("chunk-5165653a"),e.e("chunk-1da60c40")]).then(e.bind(null,"f4a9"))},{path:"/about",name:"about-page",component:()=>e.e("chunk-3a55fd90").then(e.bind(null,"0bd2"))},{path:"/favorite/:id",name:"image-favorite",component:()=>e.e("chunk-17db356f").then(e.bind(null,"1f51"))},{path:"/favorite",name:"favorite-page",component:()=>Promise.all([e.e("chunk-5165653a"),e.e("chunk-3e642d62")]).then(e.bind(null,"24a2"))},{path:"*",name:"not-found",component:b}],k=new p["a"]({routes:y});k.beforeEach((a,t,e)=>{"image-favorite"!==a.name&&"home-image"!==a.name||x.dispatch("visitImagePage"),e()});var C=k;n["a"].config.productionTip=!1,new n["a"]({router:C,store:x,render:a=>a(c)}).$mount("#app")},"9eb2":function(a,t,e){var n=e("24fb");t=n(!1),t.push([a.i,"body[data-v-303da176]{position:relative;margin:0;padding:0;font-family:Noto Sans TC,sans-serif}*[data-v-303da176]{margin:0 auto;box-sizing:border-box}h1[data-v-303da176],h2[data-v-303da176],h3[data-v-303da176],h4[data-v-303da176],h5[data-v-303da176],h6[data-v-303da176],i[data-v-303da176],p[data-v-303da176]{margin:0;padding:0}h1[data-v-303da176],h2[data-v-303da176]{font-weight:700}h3[data-v-303da176],h4[data-v-303da176],h5[data-v-303da176]{font-weight:medium}h1[data-v-303da176]{font-size:68px}h2[data-v-303da176]{font-size:42px}h3[data-v-303da176]{font-size:28px}h4[data-v-303da176]{font-size:24px}h5[data-v-303da176]{font-size:18px}li[data-v-303da176],ol[data-v-303da176],ul[data-v-303da176]{list-style:none;margin:0;padding:0}a[data-v-303da176],a[data-v-303da176]:focus,a[data-v-303da176]:hover{text-decoration:none}img[data-v-303da176]{display:block;width:100%;height:100%;margin:0}.btn[data-v-303da176],a[data-v-303da176]:focus,button[data-v-303da176],button[data-v-303da176]:focus,input[data-v-303da176]:focus,select[data-v-303da176],select[data-v-303da176]:focus,textarea[data-v-303da176]:focus{outline:0!important}button[data-v-303da176]{background-color:transparent;border:0;cursor:pointer}button[disabled][data-v-303da176]{pointer-events:none}input[data-v-303da176]{padding:0}input[data-v-303da176]:invalid,input[data-v-303da176]:required{box-shadow:none}*[data-v-303da176]{--body-bg:#fff;--font:#000;--font-blue:#8b9aa7;--font-yellow:#6c5540;--hover:hsla(0,0%,100%,0.27058823529411763)}*[data-v-303da176],[data-theme=dark][data-v-303da176]{--white:#fff;--black:#000;--transparent:hsla(0,0%,100%,0)}[data-theme=dark][data-v-303da176]{--body-bg:#000;--font:#fff;--font-blue:#8b9aa7;--font-yellow:#a7998b;--hover:hsla(0,0%,100%,0.1450980392156863)}a[data-v-303da176]{color:var(--font-blue)}.d-none[data-v-303da176]{display:none}.nav-wrapper[data-v-303da176]{display:flex;align-items:center;position:relative;height:95px;color:var(--font-blue);background:var(--body-bg);z-index:2}.nav-wrapper .logo[data-v-303da176]{margin:0 10px}.nav-wrapper .logo .logo-img[data-v-303da176]{width:78px;height:78px}.nav-wrapper .search[data-v-303da176]{display:flex;justify-content:space-around;align-items:center;position:relative;margin:0 20px;width:40%;height:25px;border:1px var(--font-blue) solid;border-radius:20px}.nav-wrapper .search .searcher[data-v-303da176]{width:40%;background:var(--transparent);border:none;color:var(--font-yellow)}.nav-wrapper .search .icon-wrapper[data-v-303da176]{display:flex;margin:0 10px 0 0}.nav-wrapper .search .icon-wrapper .deleted[data-v-303da176],.nav-wrapper .search .icon-wrapper .fa-search[data-v-303da176]{font-size:14px;margin:0 0 0 10px}.nav-wrapper .search .icon-wrapper .deleted[data-v-303da176]:hover,.nav-wrapper .search .icon-wrapper .fa-search[data-v-303da176]:hover{cursor:pointer;text-decoration:underline}.nav-wrapper .fa-bars[data-v-303da176],.nav-wrapper .hamburger-icon[data-v-303da176]{margin:0 20px 0 0;color:var(--font-yellow);cursor:pointer}.nav-wrapper .hamburger-icon[data-v-303da176]{position:absolute;right:0}.nav-wrapper .list[data-v-303da176]{position:absolute;top:100%;transform:scaleY(0);text-align:center;width:100%;color:var(--font-blue);background:var(--body-bg);z-index:1}.nav-wrapper .list .item[data-v-303da176]{padding:10px 20px}.nav-wrapper .list .item .item-link[data-v-303da176]{color:var(--font-blue)}.nav-wrapper .list .item .item-link[data-v-303da176]:hover{color:var(--font-yellow);text-decoration:underline}.nav-wrapper .list .item[data-v-303da176]:nth-child(2){display:flex;justify-content:center;align-items:center;position:relative}.nav-wrapper .list .item:nth-child(2) .fa-chevron-down[data-v-303da176]{margin:3px;font-size:16px}.nav-wrapper .list .item:nth-child(2) .fa-chevron-down[data-v-303da176]:hover{color:var(--font-yellow);cursor:pointer}.nav-wrapper .list .item:nth-child(2) .item-child-outer[data-v-303da176]{position:absolute;top:130%;left:50%;transform:translate(-50%,-50%);margin:20px 0 0 0;padding:10px 0 0 0}.nav-wrapper .list .item:nth-child(2) .item-child-outer .item-child[data-v-303da176]{padding:5px 0 0 0}.nav-wrapper .list .item.favorite[data-v-303da176]{padding:90px 30px 10px 30px}.nav-wrapper .list .item-icon[data-v-303da176]{margin:10px 0 0 0;padding:10px 0 20px 0}.nav-wrapper .list .item-icon .icon[data-v-303da176]{margin:5px 10px}.nav-wrapper .list .item-icon .icon[data-v-303da176]:hover{color:var(--font-yellow);cursor:pointer}.nav-wrapper .list .item-icon .fa-sun[data-v-303da176]{display:none}.nav-wrapper .icon-toggle:checked~.list[data-v-303da176]{transform:scale(1)}@media screen and (min-width:767px){.nav-wrapper[data-v-303da176]{justify-content:center;position:sticky;top:0}.nav-wrapper .search[data-v-303da176]{margin:0;width:50%}.nav-wrapper .search .searcher[data-v-303da176]{width:70%}.nav-wrapper .hamburger-icon[data-v-303da176]{display:none}.nav-wrapper .list[data-v-303da176]{all:unset;display:flex;transform:scale(1);color:var(--font-blue)}.nav-wrapper .list .item[data-v-303da176]{display:flex;align-items:center}.nav-wrapper .list .item:nth-child(2) .item-child-outer[data-v-303da176]{display:none;text-align:center}.nav-wrapper .list .item:nth-child(2) .item-child-outer .item-child[data-v-303da176]{padding:10px 0;white-space:nowrap}.nav-wrapper .list .show.item:nth-child(2):hover .item-child-outer[data-v-303da176]{display:block;background:var(--body-bg);padding:0 10px 0 10px;border-radius:10px}.nav-wrapper .list .item.favorite[data-v-303da176]{padding:10px 30px}.nav-wrapper .list .item-icon[data-v-303da176]{margin:0;padding:0}.nav-wrapper .list .item-icon .icon[data-v-303da176]{padding:0 10px}.nav-wrapper .cp-logo[data-v-303da176]{position:absolute;top:100%;left:50%;transform:translate(-50%);width:100px;height:100px;background:var(--body-bg)}}",""]),a.exports=t},d178:function(a,t,e){"use strict";var n=function(){var a=this,t=a._self._c;return t("nav",{staticClass:"nav-wrapper"},[t("router-link",{staticClass:"logo",attrs:{to:{name:"home-page"}}},[t("img",{staticClass:"logo-img",attrs:{src:e("3afe"),alt:"logo"}})]),"home-page"===a.$route.name||"root"===a.$route.name||"not-found"===a.$route.name?t("div",{staticClass:"search"},[t("input",{directives:[{name:"model",rawName:"v-model",value:a.keyword,expression:"keyword"}],staticClass:"searcher",attrs:{placeholder:"Please enter keywords in English",type:"text"},domProps:{value:a.keyword},on:{keyup:function(t){return!t.type.indexOf("key")&&a._k(t.keyCode,"enter",13,t.key,"Enter")?null:a.afterClickSearch.apply(null,arguments)},input:function(t){t.target.composing||(a.keyword=t.target.value)}}}),t("div",{staticClass:"icon-wrapper"},[t("i",{staticClass:"fas fa-times deleted",on:{click:a.clear}}),t("i",{staticClass:"fas fa-search",on:{click:function(t){return t.preventDefault(),t.stopPropagation(),a.afterClickSearch.apply(null,arguments)}}})])]):a._e(),a._m(0),a._m(1),t("input",{staticClass:"icon-toggle d-none",attrs:{type:"checkbox",name:"toggle",id:"toggle-btn"}}),t("ul",{staticClass:"list"},[t("li",{staticClass:"item"},[t("router-link",{staticClass:"item-link",attrs:{to:{name:"home-page"}}},[a._v("Home")])],1),t("li",{staticClass:"show item"},[t("p",{staticClass:"item-text"},[t("router-link",{staticClass:"item-link",attrs:{to:{name:"about-page"}}},[a._v("Info")]),t("i",{staticClass:"fas fa-chevron-down"}),t("ul",{staticClass:"item-child-outer"},[t("li",{staticClass:"item-child"},[t("router-link",{staticClass:"item-link",attrs:{to:{name:"about-page"}}},[a._v("About the website")])],1),a._m(2)])],1)]),t("li",{staticClass:"item favorite"},[t("router-link",{staticClass:"item-link",attrs:{to:{name:"favorite-page"}}},[a._v("Favorite")])],1),t("li",{staticClass:"item item-icon"},[t("i",{staticClass:"icon fa fa-facebook"}),t("i",{staticClass:"icon fa fa-instagram"}),t("i",{staticClass:"icon fas fa-moon",on:{click:a.toggleMode}}),t("i",{staticClass:"icon fas fa-sun"})])]),t("router-link",{staticClass:"cp-logo d-none",attrs:{to:{name:"home-page"}}},[t("img",{staticClass:"logo-img",attrs:{src:e("3afe"),alt:"logo"}})])],1)},o=[function(){var a=this,t=a._self._c;return t("label",{staticClass:"hamburger-icon",attrs:{for:"toggle-btn"}},[t("i",{staticClass:"fas fa-bars"})])},function(){var a=this,t=a._self._c;return t("label",{staticClass:"icon d-none",attrs:{for:"toggle-btn"}},[t("i",{staticClass:"fas fa-times"})])},function(){var a=this,t=a._self._c;return t("li",{staticClass:"item-child"},[t("a",{staticClass:"item-link",attrs:{href:"https://unsplash.com/",target:"_blank"}},[a._v("Photo from Unsplash")])])}],r=e("2fa3"),i={name:"Navbar",data(){return{keyword:""}},methods:{afterClickSearch(){this.keyword=this.keyword.trim(" ").toLowerCase().replace(" ",","),this.keyword||(r["a"].fire({icon:"error",title:"請輸入有效關鍵字"}),this.$emit("fetch-random-image")),this.$emit("after-click-search",{color:"black_and_white",sort:"",page:1,keyword:this.keyword,search:!0})},clear(){this.keyword=""},toggleMode(){this.$store.commit("changeMode","clickNav")}}},d=i,s=(e("4183"),e("2877")),l=Object(s["a"])(d,n,o,!1,null,"303da176",null);t["a"]=l.exports},e297:function(a,t,e){var n=e("24fb");t=n(!1),t.push([a.i,"body[data-v-59ae3ad4]{position:relative;margin:0;padding:0;font-family:Noto Sans TC,sans-serif}*[data-v-59ae3ad4]{margin:0 auto;box-sizing:border-box}h1[data-v-59ae3ad4],h2[data-v-59ae3ad4],h3[data-v-59ae3ad4],h4[data-v-59ae3ad4],h5[data-v-59ae3ad4],h6[data-v-59ae3ad4],i[data-v-59ae3ad4],p[data-v-59ae3ad4]{margin:0;padding:0}h1[data-v-59ae3ad4],h2[data-v-59ae3ad4]{font-weight:700}h3[data-v-59ae3ad4],h4[data-v-59ae3ad4],h5[data-v-59ae3ad4]{font-weight:medium}h1[data-v-59ae3ad4]{font-size:68px}h2[data-v-59ae3ad4]{font-size:42px}h3[data-v-59ae3ad4]{font-size:28px}h4[data-v-59ae3ad4]{font-size:24px}h5[data-v-59ae3ad4]{font-size:18px}li[data-v-59ae3ad4],ol[data-v-59ae3ad4],ul[data-v-59ae3ad4]{list-style:none;margin:0;padding:0}a[data-v-59ae3ad4],a[data-v-59ae3ad4]:focus,a[data-v-59ae3ad4]:hover{text-decoration:none}img[data-v-59ae3ad4]{display:block;width:100%;height:100%;margin:0}.btn[data-v-59ae3ad4],a[data-v-59ae3ad4]:focus,button[data-v-59ae3ad4],button[data-v-59ae3ad4]:focus,input[data-v-59ae3ad4]:focus,select[data-v-59ae3ad4],select[data-v-59ae3ad4]:focus,textarea[data-v-59ae3ad4]:focus{outline:0!important}button[data-v-59ae3ad4]{background-color:transparent;border:0;cursor:pointer}button[disabled][data-v-59ae3ad4]{pointer-events:none}input[data-v-59ae3ad4]{padding:0}input[data-v-59ae3ad4]:invalid,input[data-v-59ae3ad4]:required{box-shadow:none}*[data-v-59ae3ad4]{--body-bg:#fff;--font:#000;--font-blue:#8b9aa7;--font-yellow:#6c5540;--hover:hsla(0,0%,100%,0.27058823529411763)}*[data-v-59ae3ad4],[data-theme=dark][data-v-59ae3ad4]{--white:#fff;--black:#000;--transparent:hsla(0,0%,100%,0)}[data-theme=dark][data-v-59ae3ad4]{--body-bg:#000;--font:#fff;--font-blue:#8b9aa7;--font-yellow:#a7998b;--hover:hsla(0,0%,100%,0.1450980392156863)}a[data-v-59ae3ad4]{color:var(--font-blue)}.d-none[data-v-59ae3ad4]{display:none}.main-container[data-v-59ae3ad4]{max-width:1140px;margin:0 auto;text-align:center;color:var(--font-blue)}",""]),a.exports=t},ef77:function(a,t,e){"use strict";e("5510")}});
//# sourceMappingURL=app.ee324459.js.map