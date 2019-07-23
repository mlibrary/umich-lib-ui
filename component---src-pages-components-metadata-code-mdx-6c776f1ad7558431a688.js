(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{344:function(e,a,t){"use strict";t.r(a),t.d(a,"default",function(){return i}),t.d(a,"_frontmatter",function(){return s});t(6),t(5),t(3),t(7),t(9);var n=t(4),o=t(0),r=t.n(o),p=t(2),c=t(375);var m={},i=function(e){var a,t;function o(a){var t;return(t=e.call(this,a)||this).layout=c.a,t}return t=e,(a=o).prototype=Object.create(t.prototype),a.prototype.constructor=a,a.__proto__=t,o.prototype.render=function(){var e=this.props,a=e.components,t=function(e,a){if(null==e)return{};var t,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||(o[t]=e[t]);return o}(e,["components"]);return Object(n.a)(p.MDXTag,{name:"wrapper",Layout:this.layout,layoutProps:Object.assign({},m,t),components:a},Object(n.a)(p.MDXTag,{name:"p",components:a},"Source: ",Object(n.a)(p.MDXTag,{name:"a",components:a,parentName:"p",props:{href:"https://github.com/mlibrary/umich-lib-ui/blob/master/packages/metadata/src/index.js"}},"https://github.com/mlibrary/umich-lib-ui/blob/master/packages/metadata/src/index.js")),Object(n.a)(p.MDXTag,{name:"pre",components:a},Object(n.a)(p.MDXTag,{name:"code",components:a,parentName:"pre",props:{className:"language-js"}},"import { Metadata } from '@umich-lib/core'\n")),Object(n.a)(p.MDXTag,{name:"pre",components:a},Object(n.a)(p.MDXTag,{name:"code",components:a,parentName:"pre",props:{className:"language-jsx",metastring:"live",live:!0}},'<Metadata fields={[\n    { term: "Published",\n      description: [\n        { text: "2012 - Carlton, Vic. : BirdLife Australia" }\n      ]\n    },\n    { term: "Previous Title",\n      description: [\n        { text: "Wing span (Melbourne, Vic.)", href: "#" },\n        { text: "Bird observer (Hawthorn, Vic.)", href: "#" }\n      ]\n    }\n  ]}\n/>\n')),Object(n.a)(p.MDXTag,{name:"h2",components:a},"Metadata props"),Object(n.a)(p.MDXTag,{name:"table",components:a},Object(n.a)(p.MDXTag,{name:"thead",components:a,parentName:"table"},Object(n.a)(p.MDXTag,{name:"tr",components:a,parentName:"thead"},Object(n.a)(p.MDXTag,{name:"th",components:a,parentName:"tr",props:{align:null}},"Prop"),Object(n.a)(p.MDXTag,{name:"th",components:a,parentName:"tr",props:{align:null}},"Type"),Object(n.a)(p.MDXTag,{name:"th",components:a,parentName:"tr",props:{align:null}},"Required"),Object(n.a)(p.MDXTag,{name:"th",components:a,parentName:"tr",props:{align:null}},"Default"))),Object(n.a)(p.MDXTag,{name:"tbody",components:a,parentName:"table"},Object(n.a)(p.MDXTag,{name:"tr",components:a,parentName:"tbody"},Object(n.a)(p.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:null}},Object(n.a)(p.MDXTag,{name:"a",components:a,parentName:"td",props:{href:"#fields"}},"fields")),Object(n.a)(p.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:null}},"object"),Object(n.a)(p.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:null}},"false"),Object(n.a)(p.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:null}},"false")),Object(n.a)(p.MDXTag,{name:"tr",components:a,parentName:"tbody"},Object(n.a)(p.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:null}},Object(n.a)(p.MDXTag,{name:"a",components:a,parentName:"td",props:{href:"#kind"}},"kind")),Object(n.a)(p.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:null}},'enum "default" or "condensed"'),Object(n.a)(p.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:null}},"false"),Object(n.a)(p.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:null}},'"default"')))),Object(n.a)(p.MDXTag,{name:"h3",components:a},"fields"),Object(n.a)(p.MDXTag,{name:"p",components:a},Object(n.a)(p.MDXTag,{name:"em",components:a,parentName:"p"},"Type"),": object"),Object(n.a)(p.MDXTag,{name:"p",components:a},"Defines the structured data for metadata fields."),Object(n.a)(p.MDXTag,{name:"p",components:a},"Each field in ",Object(n.a)(p.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"fields")," has a single ",Object(n.a)(p.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"term")," and one or many descriptions. Each ",Object(n.a)(p.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"description")," contains ",Object(n.a)(p.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"text")," and an optional ",Object(n.a)(p.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"to")," or ",Object(n.a)(p.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"href")," attribute. Nest descriptions for heirarchy."),Object(n.a)(p.MDXTag,{name:"h3",components:a},"kind"),Object(n.a)(p.MDXTag,{name:"p",components:a},Object(n.a)(p.MDXTag,{name:"em",components:a,parentName:"p"},"Type"),': enum "default" | "condensed" default: "default"'),Object(n.a)(p.MDXTag,{name:"p",components:a},"Controls how the ",Object(n.a)(p.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"Metadata")," is styled."),Object(n.a)(p.MDXTag,{name:"pre",components:a},Object(n.a)(p.MDXTag,{name:"code",components:a,parentName:"pre",props:{className:"language-jsx",metastring:"live",live:!0}},'<Metadata\n  kind="condensed"\n  fields={[\n    { term: "Published",\n      description: [\n        { text: "2012 - Carlton, Vic. : BirdLife Australia" }\n      ]\n    }\n  ]}\n/>\n')))},o}(r.a.Component);i.isMDXComponent=!0;var s={}},375:function(e,a,t){"use strict";var n=t(18),o=(t(20),t(54),t(17)),r=t(4),p=(t(0),t(376)),c=t(1),m=t(378),i=t(377),s=Object(o.default)("div",{target:"ezoplek0"})({"> div > *":{marginBottom:c.SPACING.M},"h2:not(:last-child)":{marginTop:c.SPACING["2XL"]},"h3:not(:last-child)":{marginTop:c.SPACING.XL},"h4:not(:last-child)":{marginTop:c.SPACING.XL},"h5:not(:last-child)":{marginTop:c.SPACING.XL}}),l=Object(o.default)("div",{target:"e63abck0"})({name:"1kmcw8",styles:"max-width:1024px;"}),d=Object(o.default)("div",{target:"e63abck1"})({name:"b1u16s",styles:"display:flex;justify-content:flex-end;flex-direction:column;height:auto;"}),b={borderBottom:"solid 4px "+c.COLORS.teal[400],fontWeight:"800"},g=function(e){var a=e.isPartiallyCurrent,t=e.href,n=e.location;return a&&n.pathname.match(t+"/?$")?{style:b}:{}},u=Object(o.default)(p.a,{target:"e63abck2"})({color:c.COLORS.neutral[400],display:"inline-block",padding:c.SPACING.XS+" 0",textDecoration:"none",fontWeight:"600"});a.a=function(e){var a,t=e.pageContext.frontmatter,o=t.title,p=t.navigation,b=e.location;return b.pathname&&(a="https://github.com/mlibrary/umich-lib-ui/tree/master/packages/docs/src/pages"+b.pathname.replace(/\/$/,"")+".mdx"),Object(r.a)(m.a,null,Object(r.a)("article",null,Object(r.a)(i.a,{title:o}),Object(r.a)(d,null,Object(r.a)(c.Margins,null,Object(r.a)(l,null,Object(r.a)(c.Heading,{level:1,size:"3XL",style:{paddingBottom:c.SPACING.M,marginTop:c.SPACING["2XL"]}},o),p&&Object(r.a)("ol",{css:Object(n.default)({borderBottom:"solid 1px "+c.COLORS.neutral[100]})},p.map(function(e){var a=e.text,t=e.to;return Object(r.a)("li",{key:a+t,style:{display:"inline-block",marginRight:c.SPACING.L}},Object(r.a)(u,{to:t,getProps:g},a))}))))),Object(r.a)(c.Margins,null,Object(r.a)(l,{style:{marginTop:c.SPACING.XL,marginBottom:c.SPACING["2XL"]}},Object(r.a)(s,null,e.children),a&&Object(r.a)("div",{style:{display:"block",marginTop:c.SPACING.XL}},Object(r.a)(c.Link,{href:a},"Edit this page on Github"))))))}}}]);
//# sourceMappingURL=component---src-pages-components-metadata-code-mdx-6c776f1ad7558431a688.js.map