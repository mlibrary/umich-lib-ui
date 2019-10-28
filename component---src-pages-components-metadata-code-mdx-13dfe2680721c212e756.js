(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{YmsF:function(e,a,n){"use strict";n.r(a),n.d(a,"default",(function(){return s})),n.d(a,"_frontmatter",(function(){return i}));n("uydD"),n("Cwzy"),n("odAc"),n("OksV"),n("gs/B");var t=n("qKvR"),o=n("ERkP"),p=n.n(o),r=n("yTr/"),m=n("tsI1");var c={},s=function(e){var a,n;function o(a){var n;return(n=e.call(this,a)||this).layout=m.a,n}return n=e,(a=o).prototype=Object.create(n.prototype),a.prototype.constructor=a,a.__proto__=n,o.prototype.render=function(){var e=this.props,a=e.components,n=function(e,a){if(null==e)return{};var n,t,o={},p=Object.keys(e);for(t=0;t<p.length;t++)n=p[t],a.indexOf(n)>=0||(o[n]=e[n]);return o}(e,["components"]);return Object(t.a)(r.MDXTag,{name:"wrapper",Layout:this.layout,layoutProps:Object.assign({},c,n),components:a},Object(t.a)(r.MDXTag,{name:"p",components:a},"Source: ",Object(t.a)(r.MDXTag,{name:"a",components:a,parentName:"p",props:{href:"https://github.com/mlibrary/umich-lib-ui/blob/master/packages/metadata/src/index.js"}},"https://github.com/mlibrary/umich-lib-ui/blob/master/packages/metadata/src/index.js")),Object(t.a)(r.MDXTag,{name:"pre",components:a},Object(t.a)(r.MDXTag,{name:"code",components:a,parentName:"pre",props:{className:"language-js"}},"import { Metadata } from '@umich-lib/core'\n")),Object(t.a)(r.MDXTag,{name:"pre",components:a},Object(t.a)(r.MDXTag,{name:"code",components:a,parentName:"pre",props:{className:"language-jsx",metastring:"live",live:!0}},'<Metadata fields={[\n    { term: "Published",\n      description: [\n        { text: "2012 - Carlton, Vic. : BirdLife Australia" }\n      ]\n    },\n    { term: "Previous Title",\n      description: [\n        { text: "Wing span (Melbourne, Vic.)", href: "#" },\n        { text: "Bird observer (Hawthorn, Vic.)", href: "#" }\n      ]\n    }\n  ]}\n/>\n')),Object(t.a)(r.MDXTag,{name:"h2",components:a},"Metadata props"),Object(t.a)(r.MDXTag,{name:"table",components:a},Object(t.a)(r.MDXTag,{name:"thead",components:a,parentName:"table"},Object(t.a)(r.MDXTag,{name:"tr",components:a,parentName:"thead"},Object(t.a)(r.MDXTag,{name:"th",components:a,parentName:"tr",props:{align:null}},"Prop"),Object(t.a)(r.MDXTag,{name:"th",components:a,parentName:"tr",props:{align:null}},"Type"),Object(t.a)(r.MDXTag,{name:"th",components:a,parentName:"tr",props:{align:null}},"Required"),Object(t.a)(r.MDXTag,{name:"th",components:a,parentName:"tr",props:{align:null}},"Default"))),Object(t.a)(r.MDXTag,{name:"tbody",components:a,parentName:"table"},Object(t.a)(r.MDXTag,{name:"tr",components:a,parentName:"tbody"},Object(t.a)(r.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:null}},Object(t.a)(r.MDXTag,{name:"a",components:a,parentName:"td",props:{href:"#fields"}},"fields")),Object(t.a)(r.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:null}},"object"),Object(t.a)(r.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:null}},"false"),Object(t.a)(r.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:null}},"false")),Object(t.a)(r.MDXTag,{name:"tr",components:a,parentName:"tbody"},Object(t.a)(r.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:null}},Object(t.a)(r.MDXTag,{name:"a",components:a,parentName:"td",props:{href:"#kind"}},"kind")),Object(t.a)(r.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:null}},'enum "default" or "condensed"'),Object(t.a)(r.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:null}},"false"),Object(t.a)(r.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:null}},'"default"')))),Object(t.a)(r.MDXTag,{name:"h3",components:a},"fields"),Object(t.a)(r.MDXTag,{name:"p",components:a},Object(t.a)(r.MDXTag,{name:"em",components:a,parentName:"p"},"Type"),": object"),Object(t.a)(r.MDXTag,{name:"p",components:a},"Defines the structured data for metadata fields."),Object(t.a)(r.MDXTag,{name:"p",components:a},"Each field in ",Object(t.a)(r.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"fields")," has a single ",Object(t.a)(r.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"term")," and one or many descriptions. Each ",Object(t.a)(r.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"description")," contains ",Object(t.a)(r.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"text")," and an optional ",Object(t.a)(r.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"to")," or ",Object(t.a)(r.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"href")," attribute. Nest descriptions for heirarchy."),Object(t.a)(r.MDXTag,{name:"h3",components:a},"kind"),Object(t.a)(r.MDXTag,{name:"p",components:a},Object(t.a)(r.MDXTag,{name:"em",components:a,parentName:"p"},"Type"),': enum "default" | "condensed" default: "default"'),Object(t.a)(r.MDXTag,{name:"p",components:a},"Controls how the ",Object(t.a)(r.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"Metadata")," is styled."),Object(t.a)(r.MDXTag,{name:"pre",components:a},Object(t.a)(r.MDXTag,{name:"code",components:a,parentName:"pre",props:{className:"language-jsx",metastring:"live",live:!0}},'<Metadata\n  kind="condensed"\n  fields={[\n    { term: "Published",\n      description: [\n        { text: "2012 - Carlton, Vic. : BirdLife Australia" }\n      ]\n    }\n  ]}\n/>\n')))},o}(p.a.Component);s.isMDXComponent=!0;var i={}}}]);
//# sourceMappingURL=component---src-pages-components-metadata-code-mdx-13dfe2680721c212e756.js.map