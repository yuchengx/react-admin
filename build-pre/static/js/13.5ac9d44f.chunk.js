(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{1745:function(e,a,t){"use strict";t.r(a),t.d(a,"default",function(){return y});t(325);var n,o=t(108),i=(t(1741),t(1740)),r=(t(249),t(83)),h=t(17),c=t(18),s=t(21),l=t(19),d=t(20),p=t(0),g=t.n(p),u=t(321),m=t(56),y=Object(m.a)({path:"/settings",title:{text:"\u8bbe\u7f6e",icon:"setting"},breadcrumbs:[{key:"1",path:"/",text:"\u9996\u9875",icon:"home"},{key:"2",path:"/settings",text:"\u8bbe\u7f6e",icon:"setting"}],connect:function(e){var a=e.settings,t=a.pageFrameLayout,n=a.pageHeadFixed,o=a.pageHeadShow,i=a.tabsShow;return{pageFrameLayout:t,pageHeadFixed:n,pageHeadShow:o,keepOtherMenuOpen:e.menu.keepOtherOpen,tabsShow:i,keepAlive:e.system.keepAlive}}})(n=function(e){function a(){var e,t;Object(h.a)(this,a);for(var n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];return(t=Object(s.a)(this,(e=Object(l.a)(a)).call.apply(e,[this].concat(o)))).handlePageFrameLayoutChange=function(e){var a=e.target.value,n=t.props.action;"top-menu"===a&&(n.side.initWidth(),n.side.setCollapsed(!1)),n.settings.setPageFrameLayout(a)},t.handlePageHeadFixedChange=function(e){var a=e.target.checked;t.props.action.settings.setPageHeadFixed(a)},t.handlePageHeadShowChange=function(e){var a=e.target.checked,n=t.props.action;n.settings.showPageHead(a),a?n.page.showHead():n.page.hideHead()},t.handleKeepOtherMenuOpenChange=function(e){var a=e.target.checked;t.props.action.menu.setKeepOtherOpen(a)},t.handleTabShowChange=function(e){var a=e.target.checked;t.props.action.settings.showTabs(a)},t.handleKeepPageChange=function(e){var a=e.target.checked;t.props.action.system.setKeepPage(a)},t}return Object(d.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){var e=this.props,a=e.pageFrameLayout,t=e.pageHeadFixed,n=e.pageHeadShow,h=e.keepOtherMenuOpen,c=e.tabsShow,s=e.keepAlive,l={display:"block",height:"30px",lineHeight:"30px"};return g.a.createElement(u.a,{style:{display:"flex",paddingTop:50,justifyContent:"center"}},g.a.createElement("div",{style:{width:500}},g.a.createElement(i.a,{title:"\u8bbe\u7f6e",style:{marginBottom:16}},g.a.createElement("div",{style:{display:"none"}}," ",g.a.createElement(r.a,{onChange:this.handlePageHeadShowChange,checked:n},"\u663e\u793a\u5934\u90e8"),n?g.a.createElement(r.a,{onChange:this.handlePageHeadFixedChange,checked:t},"\u5934\u90e8\u56fa\u5b9a"):null),g.a.createElement("div",{style:{marginTop:8}},g.a.createElement(r.a,{onChange:this.handleKeepPageChange,checked:s},"\u9875\u9762\u4fdd\u6301",g.a.createElement("span",{style:{color:"red"}},"(Beta)"))),g.a.createElement("div",{style:{marginTop:8}},g.a.createElement(r.a,{onChange:this.handleTabShowChange,checked:c},"\u663e\u793aTab\u9875"))),g.a.createElement(i.a,{title:"\u83dc\u5355\u8bbe\u7f6e"},g.a.createElement("div",{style:{borderBottom:"1px solid #e8e8e8",paddingBottom:8,marginBottom:8}},g.a.createElement(r.a,{onChange:this.handleKeepOtherMenuOpenChange,checked:h},"\u4fdd\u6301\u83dc\u5355\u5c55\u5f00")),g.a.createElement("div",null,g.a.createElement(o.a.Group,{onChange:this.handlePageFrameLayoutChange,value:a},g.a.createElement(o.a,{style:l,value:"top-side-menu"},"\u5934\u90e8\u5de6\u4fa7\u83dc\u5355"),g.a.createElement(o.a,{style:l,value:"top-menu"},"\u5934\u90e8\u83dc\u5355"),g.a.createElement(o.a,{style:l,value:"side-menu"},"\u5de6\u4fa7\u83dc\u5355"))))))}}]),a}(p.Component))||n}}]);
//# sourceMappingURL=13.5ac9d44f.chunk.js.map