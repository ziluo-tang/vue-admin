webpackJsonp([0],{Ctr9:function(e,s,t){e.exports=t.p+"static/img/user.69270c3.png"},KItN:function(e,s,t){e.exports=t.p+"static/img/logo.cafc04a.png"},Pt1D:function(e,s,t){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var n=t("4YfN"),a=t.n(n),l=t("48sp"),o={name:"index",data:function(){return{fullscreenLoading:!0,defaultAvater:t("Ctr9"),logo:t("KItN"),isCollapse:!1}},computed:a()({},Object(l.b)(["user"])),mounted:function(){this.fullscreenLoading=!1},methods:{asideToggle:function(){this.isCollapse=!this.isCollapse},open:function(e,s){console.log(e,s)},close:function(e,s){console.log(e,s)},handleCommand:function(e){"signout"===e&&this.signOut()},signOut:function(){var e=this;this.$confirm("确认退出吗？","提示",{distinguishCancelAndClose:!0}).then(function(){e.$router.push("/login")})}}},i={render:function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("el-container",{directives:[{name:"loading",rawName:"v-loading.fullscreen.lock",value:e.fullscreenLoading,expression:"fullscreenLoading",modifiers:{fullscreen:!0,lock:!0}}]},[t("el-aside",{staticClass:"aside",class:e.isCollapse?"collapse-aside":"extend-aside"},[t("div",{staticClass:"logo-wrapper"},[t("img",{style:{"margin-right":e.isCollapse?0:"15px"},attrs:{src:e.logo,alt:"logo"}}),e._v(" "),t("span",{directives:[{name:"show",rawName:"v-show",value:!e.isCollapse,expression:"!isCollapse"}]},[e._v("VUE ADMIN")])]),e._v(" "),t("div",{staticClass:"menu-wrapper"},[t("el-menu",{attrs:{"default-active":e.$route.path,collapse:e.isCollapse,"unique-opened":"",router:"","background-color":"#2c3e50","text-color":"#ffffff"},on:{open:e.open,close:e.close}},[e._l(e.$router.options.routes,function(s,n){return s.hidden?e._e():[s.leaf?t("el-menu-item",{key:n+"-k",attrs:{index:s.children[0].path}},[t("i",{class:s.iconCls}),e._v(" "),t("span",[e._v(e._s(s.children[0].name))])]):e._e(),e._v(" "),s.leaf?e._e():t("el-submenu",{key:n+"-k",attrs:{index:n+""}},[t("template",{slot:"title"},[t("i",{class:s.iconCls}),e._v(" "),t("span",{attrs:{slot:"title"},slot:"title"},[e._v(e._s(s.name))])]),e._v(" "),e._l(s.children,function(s){return t("el-menu-item",{key:s.path,attrs:{index:s.path}},[e._v("\n                        "+e._s(s.name)+"\n                    ")])})],2)]})],2)],1)]),e._v(" "),t("el-container",{staticClass:"content-wrapper is-vertical"},[t("el-header",[t("div",{staticClass:"header-wrapper"},[t("div",{staticClass:"aside-toggle",on:{click:e.asideToggle}},[t("i",{class:e.isCollapse?"el-icon-s-unfold":"el-icon-s-fold"})]),e._v(" "),t("div",{staticClass:"user-wrapper"},[t("el-dropdown",{on:{command:e.handleCommand}},[t("span",{staticClass:"el-dropdown-link user"},[t("span",{staticClass:"user-name"},[e._v(e._s("hi，"+e.user.name))]),e._v(" "),t("el-avatar",{attrs:{size:35,src:e.user.avater||e.defaultAvater,fit:"fill"}})],1),e._v(" "),t("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[t("el-dropdown-item",{attrs:{command:"signout"}},[e._v("退出登录")])],1)],1)],1)])]),e._v(" "),t("el-main",[t("router-view")],1)],1)],1)},staticRenderFns:[]};var r=t("C7Lr")(o,i,!1,function(e){t("dMSE"),t("l9q6")},"data-v-440c1317",null);s.default=r.exports},dMSE:function(e,s){},l9q6:function(e,s){}});
//# sourceMappingURL=0.b72f92010077e0814867.js.map