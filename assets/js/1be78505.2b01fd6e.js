(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[514,119],{9890:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return Q}});var a=n(7378),i=n(5318),r=n(353),o=n(6028),l=n(9899),c=n(9603),s=n(120),d=n(8944),u=n(176),m=n(1080),b=n(8245),h=n(5135),p=n(4142),f=n(5626),v=n(3059),E=function(e){return a.createElement("svg",(0,c.Z)({width:"20",height:"20","aria-hidden":"true"},e),a.createElement("g",{fill:"#7a7a7a"},a.createElement("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),a.createElement("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})))},g=n(3204),C=n(1554),k=n(1787),Z="sidebar_2j-V",_="sidebarWithHideableNavbar_2fMR",N="sidebarHidden_1sUd",I="sidebarLogo_1OGv",S="menu_1Xkn",T="menuLinkText_24Nz",M="menuWithAnnouncementBar_1DU9",R="collapseSidebarButton_2Hma",w="collapseSidebarButtonIcon_1Kc0",y="sidebarMenuIcon_Vtis",A="sidebarMenuCloseIcon_Qs94",x=["items"],L=["item","onItemClick","collapsible","activePath"],P=["item","onItemClick","activePath","collapsible"],D=function e(t,n){return"link"===t.type?(0,u.Mg)(t.href,n):"category"===t.type&&t.items.some((function(t){return e(t,n)}))},B=(0,a.memo)((function(e){var t=e.items,n=(0,s.Z)(e,x);return t.map((function(e,t){return a.createElement(H,(0,c.Z)({key:t,item:e},n))}))}));function H(e){switch(e.item.type){case"category":return a.createElement(W,e);case"link":default:return a.createElement(O,e)}}function W(e){var t,n=e.item,i=e.onItemClick,r=e.collapsible,o=e.activePath,l=(0,s.Z)(e,L),m=n.items,b=n.label,h=D(n,o),p=(0,u.D9)(h),f=(0,a.useState)((function(){return!!r&&(!h&&n.collapsed)})),v=f[0],E=f[1],g=(0,a.useRef)(null),C=(0,a.useState)(void 0),k=C[0],Z=C[1],_=function(e){var t;void 0===e&&(e=!0),Z(e?(null==(t=g.current)?void 0:t.scrollHeight)+"px":void 0)};(0,a.useEffect)((function(){h&&!p&&v&&E(!1)}),[h,p,v]);var N=(0,a.useCallback)((function(e){e.preventDefault(),k||_(),setTimeout((function(){return E((function(e){return!e}))}),100)}),[k]);return 0===m.length?null:a.createElement("li",{className:(0,d.Z)("menu__list-item",{"menu__list-item--collapsed":v})},a.createElement("a",(0,c.Z)({className:(0,d.Z)("menu__link",(t={"menu__link--sublist":r,"menu__link--active":r&&h},t[T]=!r,t)),onClick:r?N:void 0,href:r?"#":void 0},l),b),a.createElement("ul",{className:"menu__list",ref:g,style:{height:k},onTransitionEnd:function(){v||_(!1)}},a.createElement(B,{items:m,tabIndex:v?"-1":"0",onItemClick:i,collapsible:r,activePath:o})))}function O(e){var t=e.item,n=e.onItemClick,i=e.activePath,r=(e.collapsible,(0,s.Z)(e,P)),o=t.href,l=t.label,u=D(t,i);return a.createElement("li",{className:"menu__list-item",key:l},a.createElement(p.Z,(0,c.Z)({className:(0,d.Z)("menu__link",{"menu__link--active":u}),to:o},(0,f.Z)(o)&&{isNavLink:!0,exact:!0,onClick:n},r),(0,f.Z)(o)?l:a.createElement("span",null,l,a.createElement(C.Z,null))))}function F(e){var t=e.onClick;return a.createElement("button",{type:"button",title:(0,k.I)({id:"theme.docs.sidebar.collapseButtonTitle",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),"aria-label":(0,k.I)({id:"theme.docs.sidebar.collapseButtonAriaLabel",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),className:(0,d.Z)("button button--secondary button--outline",R),onClick:t},a.createElement(E,{className:w}))}function j(e){var t=e.responsiveSidebarOpened,n=e.onClick;return a.createElement("button",{"aria-label":t?(0,k.I)({id:"theme.docs.sidebar.responsiveCloseButtonLabel",message:"Close menu",description:"The ARIA label for close button of mobile doc sidebar"}):(0,k.I)({id:"theme.docs.sidebar.responsiveOpenButtonLabel",message:"Open menu",description:"The ARIA label for open button of mobile doc sidebar"}),"aria-haspopup":"true",className:"button button--secondary button--sm menu__button",type:"button",onClick:n},t?a.createElement("span",{className:(0,d.Z)(y,A)},"\xd7"):a.createElement(g.Z,{className:y,height:24,width:24}))}var U=function(e){var t,n,i=e.path,r=e.sidebar,o=e.sidebarCollapsible,l=void 0===o||o,c=e.onCollapse,s=e.isHidden,p=function(){var e=(0,u.nT)().isClosed,t=(0,a.useState)(!e),n=t[0],i=t[1];return(0,h.Z)((function(t){var n=t.scrollY;e||i(0===n)})),n}(),f=(0,u.LU)(),E=f.navbar.hideOnScroll,g=f.hideableSidebar,C=(0,u.nT)().isClosed,T=function(){var e=(0,a.useState)(!1),t=e[0],n=e[1];(0,m.Z)(t);var i=(0,b.Z)();return(0,a.useEffect)((function(){i===b.D.desktop&&n(!1)}),[i]),{showResponsiveSidebar:t,closeResponsiveSidebar:(0,a.useCallback)((function(e){e.target.blur(),n(!1)}),[n]),toggleResponsiveSidebar:(0,a.useCallback)((function(){n((function(e){return!e}))}),[n])}}(),R=T.showResponsiveSidebar,w=T.closeResponsiveSidebar,y=T.toggleResponsiveSidebar;return a.createElement("div",{className:(0,d.Z)(Z,(t={},t[_]=E,t[N]=s,t))},E&&a.createElement(v.Z,{tabIndex:-1,className:I}),a.createElement("nav",{className:(0,d.Z)("menu","menu--responsive","thin-scrollbar",S,(n={"menu--show":R},n[M]=!C&&p,n)),"aria-label":(0,k.I)({id:"theme.docs.sidebar.navAriaLabel",message:"Sidebar navigation",description:"The ARIA label for documentation menu"})},a.createElement(j,{responsiveSidebarOpened:R,onClick:y}),a.createElement("ul",{className:"menu__list"},a.createElement(B,{items:r,onItemClick:w,collapsible:l,activePath:i}))),g&&a.createElement(F,{onClick:c}))},V=n(5621),z=n(2332),K={code:function(e){var t=e.children;return(0,a.isValidElement)(t)?t:t.includes("\n")?a.createElement(V.Z,e):a.createElement("code",e)},a:function(e){return a.createElement(p.Z,e)},pre:function(e){var t,n=e.children;return(0,a.isValidElement)(null==n||null==(t=n.props)?void 0:t.children)?null==n?void 0:n.props.children:a.createElement(V.Z,(0,a.isValidElement)(n)?null==n?void 0:n.props:{children:n})},h1:(0,z.Z)("h1"),h2:(0,z.Z)("h2"),h3:(0,z.Z)("h3"),h4:(0,z.Z)("h4"),h5:(0,z.Z)("h5"),h6:(0,z.Z)("h6")},X=n(6119),Y=n(9635),q={docPage:"docPage_3jyA",docMainContainer:"docMainContainer_28SP",docMainContainerEnhanced:"docMainContainerEnhanced_YA74",docSidebarContainer:"docSidebarContainer_3jRz",docSidebarContainerHidden:"docSidebarContainerHidden_2b_F",collapsedDocSidebar:"collapsedDocSidebar_KeEu",expandSidebarButtonIcon:"expandSidebarButtonIcon_1pq6",docItemWrapperEnhanced:"docItemWrapperEnhanced_2IZb"};function G(e){var t,n,o,c,s,m=e.currentDocRoute,b=e.versionMetadata,h=e.children,p=(0,r.Z)(),f=p.siteConfig,v=p.isClient,g=b.pluginId,C=b.version,Z=function(e){var t,n=e.versionMetadata,a=e.currentDocRoute,i=n.permalinkToSidebar,r=n.docsSidebars,o=i[a.path]||i[(t=a.path,t.endsWith("/")?t:t+"/")]||i[function(e){return e.endsWith("/")?e.slice(0,-1):e}(a.path)];return{sidebar:r[o],sidebarName:o}}({versionMetadata:b,currentDocRoute:m}),_=Z.sidebarName,N=Z.sidebar,I=(0,a.useState)(!1),S=I[0],T=I[1],M=(0,a.useState)(!1),R=M[0],w=M[1],y=(0,a.useCallback)((function(){R&&w(!1),T(!S)}),[R]);return a.createElement(l.Z,{key:v,wrapperClassName:u.kM.wrapper.docPages,pageClassName:u.kM.page.docPage,searchMetadatas:{version:C,tag:(0,u.os)(g,C)}},a.createElement("div",{className:q.docPage},N&&a.createElement("aside",{className:(0,d.Z)(q.docSidebarContainer,(t={},t[q.docSidebarContainerHidden]=S,t)),onTransitionEnd:function(e){e.currentTarget.classList.contains(q.docSidebarContainer)&&S&&w(!0)}},a.createElement(U,{key:_,sidebar:N,path:m.path,sidebarCollapsible:null==(n=null==(o=f.themeConfig)?void 0:o.sidebarCollapsible)||n,onCollapse:y,isHidden:R}),R&&a.createElement("div",{className:q.collapsedDocSidebar,title:(0,k.I)({id:"theme.docs.sidebar.expandButtonTitle",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),"aria-label":(0,k.I)({id:"theme.docs.sidebar.expandButtonAriaLabel",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),tabIndex:0,role:"button",onKeyDown:y,onClick:y},a.createElement(E,{className:q.expandSidebarButtonIcon}))),a.createElement("main",{className:(0,d.Z)(q.docMainContainer,(c={},c[q.docMainContainerEnhanced]=S||!N,c))},a.createElement("div",{className:(0,d.Z)("container padding-top--md padding-bottom--lg",q.docItemWrapper,(s={},s[q.docItemWrapperEnhanced]=S,s))},a.createElement(i.Zo,{components:K},h)))))}var Q=function(e){var t=e.route.routes,n=e.versionMetadata,i=e.location,r=t.find((function(e){return(0,Y.LX)(i.pathname,e)}));return r?a.createElement(G,{currentDocRoute:r,versionMetadata:n},(0,o.Z)(t,{versionMetadata:n})):a.createElement(X.default,e)}},2332:function(e,t,n){"use strict";n.d(t,{N:function(){return m},Z:function(){return b}});var a=n(120),i=n(9603),r=n(7378),o=n(8944),l=n(1787),c=n(176),s="enhancedAnchor_2Cjg",d="h1Heading_1Ib2",u=["id"],m=function(e){var t=Object.assign({},e);return r.createElement("header",null,r.createElement("h1",(0,i.Z)({},t,{id:void 0,className:d}),t.children))},b=function(e){return"h1"===e?m:(t=e,function(e){var n,i=e.id,d=(0,a.Z)(e,u),m=(0,c.LU)().navbar.hideOnScroll;return i?r.createElement(t,d,r.createElement("a",{"aria-hidden":"true",tabIndex:-1,className:(0,o.Z)("anchor",(n={},n[s]=!m,n)),id:i}),d.children,r.createElement("a",{className:"hash-link",href:"#"+i,title:(0,l.I)({id:"theme.common.headingLinkTitle",message:"Direct link to heading",description:"Title for link to heading"})},"#")):r.createElement(t,d)});var t}},6119:function(e,t,n){"use strict";n.r(t);var a=n(7378),i=n(9899),r=n(1787);t.default=function(){return a.createElement(i.Z,{title:(0,r.I)({id:"theme.NotFound.title",message:"Page Not Found"})},a.createElement("main",{className:"container margin-vert--xl"},a.createElement("div",{className:"row"},a.createElement("div",{className:"col col--6 col--offset-3"},a.createElement("h1",{className:"hero__title"},a.createElement(r.Z,{id:"theme.NotFound.title",description:"The title of the 404 page"},"Page Not Found")),a.createElement("p",null,a.createElement(r.Z,{id:"theme.NotFound.p1",description:"The first paragraph of the 404 page"},"We could not find what you were looking for.")),a.createElement("p",null,a.createElement(r.Z,{id:"theme.NotFound.p2",description:"The 2nd paragraph of the 404 page"},"Please contact the owner of the site that linked you to the original URL and let them know their link is broken."))))))}}}]);