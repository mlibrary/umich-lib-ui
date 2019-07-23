(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{369:function(e,t,a){"use strict";a.r(t),a.d(t,"default",function(){return d}),a.d(t,"_frontmatter",function(){return h});a(6),a(5),a(3),a(7),a(9);var n=a(4),o=a(0),r=a.n(o),c=a(2),i=a(375),s=a(1),l=a(173),m=a.n(l),p=a(174),u=a.n(p);var g={},d=function(e){var t,a;function o(t){var a;return(a=e.call(this,t)||this).layout=i.a,a}return a=e,(t=o).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,o.prototype.render=function(){var e=this.props,t=e.components,a=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,["components"]);return Object(n.a)(c.MDXTag,{name:"wrapper",Layout:this.layout,layoutProps:Object.assign({},g,a),components:t},Object(n.a)(s.Text,{lede:!0},"Grid systems are used for creating page layouts through a series of rows and columns that hold content. U-M Library’s Design System uses a responsive, fluid grid system that scales up to 12 columns as the device or viewport size increases."),Object(n.a)(c.MDXTag,{name:"h2",components:t},"Basic structure"),Object(n.a)("img",{src:m.a,alt:""}),Object(n.a)(c.MDXTag,{name:"h2",components:t},"Margins"),Object(n.a)(c.MDXTag,{name:"p",components:t},"The 12 column grid has a maximum width of 1280px. Margins vary depending on screen width."),Object(n.a)(c.MDXTag,{name:"ul",components:t},Object(n.a)(c.MDXTag,{name:"li",components:t,parentName:"ul"},Object(n.a)(c.MDXTag,{name:"strong",components:t,parentName:"li"},"Screen width ≥ 768px = 2XL")),Object(n.a)(c.MDXTag,{name:"li",components:t,parentName:"ul"},Object(n.a)(c.MDXTag,{name:"strong",components:t,parentName:"li"},"Screen width < 768px = M"))),Object(n.a)(c.MDXTag,{name:"p",components:t},"See code for using the ",Object(n.a)(c.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"/guides/layout/code/#margins"}},"Margins component"),"."),Object(n.a)(c.MDXTag,{name:"h2",components:t},"Gutters"),Object(n.a)(c.MDXTag,{name:"p",components:t},"The space between columns is called gutters. Gutters vary depending on screen width."),Object(n.a)(c.MDXTag,{name:"ul",components:t},Object(n.a)(c.MDXTag,{name:"li",components:t,parentName:"ul"},Object(n.a)(c.MDXTag,{name:"strong",components:t,parentName:"li"},"Screen width ≥ 768px = 24px gutter")," (size L spacing)"),Object(n.a)(c.MDXTag,{name:"li",components:t,parentName:"ul"},Object(n.a)(c.MDXTag,{name:"strong",components:t,parentName:"li"},"Screen width < 768px = 12px gutter")," (size SM spacing)")),Object(n.a)(c.MDXTag,{name:"h2",components:t},"Columns"),Object(n.a)(c.MDXTag,{name:"p",components:t},"Designs should be limited to a maximum of 12 columns. Mobile will have 4 columns."),Object(n.a)(c.MDXTag,{name:"h2",components:t},"Example"),Object(n.a)(c.MDXTag,{name:"p",components:t},"Let’s walk through an example where the screen width is 1280px."),Object(n.a)(c.MDXTag,{name:"ul",components:t},Object(n.a)(c.MDXTag,{name:"li",components:t,parentName:"ul"},"Our margins are 5% of the screen width on each side. This results in 64px on the left and 64px on the right."),Object(n.a)(c.MDXTag,{name:"li",components:t,parentName:"ul"},"Our gutters (11 in total) are fixed, and at this screen width, are 24px each."),Object(n.a)(c.MDXTag,{name:"li",components:t,parentName:"ul"},"Our columns (12 in total) are responsive and will automatically size to 74px each (remaining 888px divided by 12).")),Object(n.a)("img",{src:u.a,alt:""}))},o}(r.a.Component);d.isMDXComponent=!0;var h={}},375:function(e,t,a){"use strict";var n=a(18),o=(a(20),a(54),a(17)),r=a(4),c=(a(0),a(376)),i=a(1),s=a(378),l=a(377),m=Object(o.default)("div",{target:"ezoplek0"})({"> div > *":{marginBottom:i.SPACING.M},"h2:not(:last-child)":{marginTop:i.SPACING["2XL"]},"h3:not(:last-child)":{marginTop:i.SPACING.XL},"h4:not(:last-child)":{marginTop:i.SPACING.XL},"h5:not(:last-child)":{marginTop:i.SPACING.XL}}),p=Object(o.default)("div",{target:"e63abck0"})({name:"1kmcw8",styles:"max-width:1024px;"}),u=Object(o.default)("div",{target:"e63abck1"})({name:"b1u16s",styles:"display:flex;justify-content:flex-end;flex-direction:column;height:auto;"}),g={borderBottom:"solid 4px "+i.COLORS.teal[400],fontWeight:"800"},d=function(e){var t=e.isPartiallyCurrent,a=e.href,n=e.location;return t&&n.pathname.match(a+"/?$")?{style:g}:{}},h=Object(o.default)(c.a,{target:"e63abck2"})({color:i.COLORS.neutral[400],display:"inline-block",padding:i.SPACING.XS+" 0",textDecoration:"none",fontWeight:"600"});t.a=function(e){var t,a=e.pageContext.frontmatter,o=a.title,c=a.navigation,g=e.location;return g.pathname&&(t="https://github.com/mlibrary/umich-lib-ui/tree/master/packages/docs/src/pages"+g.pathname.replace(/\/$/,"")+".mdx"),Object(r.a)(s.a,null,Object(r.a)("article",null,Object(r.a)(l.a,{title:o}),Object(r.a)(u,null,Object(r.a)(i.Margins,null,Object(r.a)(p,null,Object(r.a)(i.Heading,{level:1,size:"3XL",style:{paddingBottom:i.SPACING.M,marginTop:i.SPACING["2XL"]}},o),c&&Object(r.a)("ol",{css:Object(n.default)({borderBottom:"solid 1px "+i.COLORS.neutral[100]})},c.map(function(e){var t=e.text,a=e.to;return Object(r.a)("li",{key:t+a,style:{display:"inline-block",marginRight:i.SPACING.L}},Object(r.a)(h,{to:a,getProps:d},t))}))))),Object(r.a)(i.Margins,null,Object(r.a)(p,{style:{marginTop:i.SPACING.XL,marginBottom:i.SPACING["2XL"]}},Object(r.a)(m,null,e.children),t&&Object(r.a)("div",{style:{display:"block",marginTop:i.SPACING.XL}},Object(r.a)(i.Link,{href:t},"Edit this page on Github"))))))}}}]);
//# sourceMappingURL=component---src-pages-guides-layout-grid-mdx-32d19fc6b803c6218314.js.map