(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{336:function(e,t,a){"use strict";a.r(t);var n=a(349),r=a(0),i=a.n(r),o=a(347),l=a.n(o);t.default=function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement(n.a,{title:"Not found"}),i.a.createElement(l.a,{variant:"h1",gutterBottom:!0},"NOT FOUND"),i.a.createElement(l.a,{variant:"body1",gutterBottom:!0},"You just hit a route that doesn't exist... the sadness."))}},346:function(e,t,a){"use strict";var n=a(2);Object.defineProperty(t,"__esModule",{value:!0}),t.capitalize=function(e){0;return e.charAt(0).toUpperCase()+e.slice(1)},t.contains=i,t.findIndex=o,t.find=function(e,t){var a=o(e,t);return a>-1?e[a]:void 0},t.createChainedFunction=function(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];return t.reduce(function(e,t){return null==t?e:function(){for(var a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];e.apply(this,n),t.apply(this,n)}},function(){})};var r=n(a(78));n(a(16));function i(e,t){return Object.keys(t).every(function(a){return e.hasOwnProperty(a)&&e[a]===t[a]})}function o(e,t){for(var a=(0,r.default)(t),n=0;n<e.length;n+=1){if("function"===a&&!0==!!t(e[n],n,e))return n;if("object"===a&&i(e[n],t))return n;if(-1!==["string","number","boolean"].indexOf(a))return e.indexOf(t)}return-1}},347:function(e,t,a){"use strict";var n=a(2);Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return r.default}});var r=n(a(355))},349:function(e,t,a){"use strict";a(29);var n=a(350),r=a(185),i=a(186),o=a.n(i),l=a(1),s=a.n(l),p=a(0),c=a.n(p),d=function(e){var t=e.data,a=e.children,n=e.title,r=e.description;return n=n?n+" | "+t.site.siteMetadata.title:t.site.siteMetadata.title,r=r||t.site.siteMetadata.description,c.a.createElement(c.a.Fragment,null,c.a.createElement(o.a,null,c.a.createElement("html",{lang:t.site.siteMetadata.lang}),c.a.createElement("title",null,n),c.a.createElement("meta",{name:"description",content:r}),c.a.createElement("meta",{name:"robots",content:"noodp"}),c.a.createElement("meta",{property:"og:locale",content:t.site.siteMetadata.locale}),c.a.createElement("meta",{property:"og:type",content:"article"}),c.a.createElement("meta",{property:"og:title",content:n}),c.a.createElement("meta",{property:"og:description",content:r}),c.a.createElement("meta",{property:"og:url",content:t.site.siteMetadata.siteUrl+"/"}),c.a.createElement("meta",{property:"og:site_name",content:t.site.siteMetadata.siteName}),c.a.createElement("meta",{name:"twitter:card",content:"summary"}),c.a.createElement("meta",{name:"twitter:description",content:r}),c.a.createElement("meta",{name:"twitter:title",content:n}),a))};t.a=function(e){return c.a.createElement(r.StaticQuery,{query:"302559433",render:function(t){return c.a.createElement(d,Object.assign({data:t},e))},data:n})},d.propTypes={data:s.a.shape({site:s.a.shape({siteMetadata:s.a.shape({title:s.a.string.isRequired,description:s.a.string.isRequired,siteName:s.a.string.isRequired,siteUrl:s.a.string.isRequired,locale:s.a.string.isRequired,lang:s.a.string.isRequired}).isRequired}).isRequired}).isRequired}},350:function(e){e.exports={data:{site:{siteMetadata:{title:"Wayback Machine Downloader | Archive.org Downloader",description:"Use Wayback Machine Downloader to download any website from the Internet Archive / Wayback Machine. Nothing to install or configure, Download a Website Now!",siteName:"Website Downloader | Download any website",siteUrl:"https://websitedownloader.io/wayback-machine-downloader",locale:"en_US",lang:"en"}}}}},355:function(e,t,a){"use strict";var n=a(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.styles=void 0;var r=n(a(14)),i=n(a(18)),o=n(a(22)),l=n(a(0)),s=(n(a(1)),n(a(184))),p=(a(34),n(a(110))),c=a(346),d=function(e){return{root:{display:"block",margin:0},display4:e.typography.display4,display3:e.typography.display3,display2:e.typography.display2,display1:e.typography.display1,headline:e.typography.headline,title:e.typography.title,subheading:e.typography.subheading,body2:e.typography.body2,body1:e.typography.body1,caption:e.typography.caption,button:e.typography.button,h1:e.typography.h1,h2:e.typography.h2,h3:e.typography.h3,h4:e.typography.h4,h5:e.typography.h5,h6:e.typography.h6,subtitle1:e.typography.subtitle1,subtitle2:e.typography.subtitle2,overline:e.typography.overline,srOnly:{position:"absolute",height:1,width:1,overflow:"hidden"},alignLeft:{textAlign:"left"},alignCenter:{textAlign:"center"},alignRight:{textAlign:"right"},alignJustify:{textAlign:"justify"},noWrap:{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},gutterBottom:{marginBottom:"0.35em"},paragraph:{marginBottom:16},colorInherit:{color:"inherit"},colorPrimary:{color:e.palette.primary.main},colorSecondary:{color:e.palette.secondary.main},colorTextPrimary:{color:e.palette.text.primary},colorTextSecondary:{color:e.palette.text.secondary},colorError:{color:e.palette.error.main},inline:{display:"inline"}}};t.styles=d;var u={display4:"h1",display3:"h2",display2:"h3",display1:"h4",headline:"h5",title:"h6",subheading:"subtitle1"};var h={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p",display4:"h1",display3:"h1",display2:"h1",display1:"h1",headline:"h1",title:"h2",subheading:"h3"};function y(e){var t,a=e.align,n=e.classes,p=e.className,d=e.color,y=e.component,g=e.gutterBottom,m=e.headlineMapping,f=e.inline,b=(e.internalDeprecatedVariant,e.noWrap),v=e.paragraph,w=e.theme,E=e.variant,M=(0,o.default)(e,["align","classes","className","color","component","gutterBottom","headlineMapping","inline","internalDeprecatedVariant","noWrap","paragraph","theme","variant"]),x=function(e,t){var a=e.typography,n=t;return n||(n=a.useNextVariants?"body2":"body1"),a.useNextVariants&&(n=u[n]||n),n}(w,E),N=(0,s.default)(n.root,(t={},(0,i.default)(t,n[x],"inherit"!==x),(0,i.default)(t,n["color".concat((0,c.capitalize)(d))],"default"!==d),(0,i.default)(t,n.noWrap,b),(0,i.default)(t,n.gutterBottom,g),(0,i.default)(t,n.paragraph,v),(0,i.default)(t,n["align".concat((0,c.capitalize)(a))],"inherit"!==a),(0,i.default)(t,n.inline,f),t),p),O=y||(v?"p":m[x]||h[x])||"span";return l.default.createElement(O,(0,r.default)({className:N},M))}y.defaultProps={align:"inherit",color:"default",gutterBottom:!1,headlineMapping:h,inline:!1,noWrap:!1,paragraph:!1};var g=(0,p.default)(d,{name:"MuiTypography",withTheme:!0})(y);t.default=g}}]);
//# sourceMappingURL=component---src-pages-404-js-b86c33843bb46eca2e34.js.map