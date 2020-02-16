(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{340:function(e,t,a){"use strict";a.r(t);a(29);var n=a(427),r=a(386),i=a(185),o=a(351),l=a.n(o),c=a(0),s=a.n(c),m=a(387),d=Object(m.a)(function(e){var t=e.loading,a=e.showCustomerPortal;return s.a.createElement(s.a.Fragment,null,s.a.createElement(l.a,{color:"primary",disabled:t,onClick:a},"Manage account"))}),u=a(368),h=a.n(u),g=a(349),p=a(506),b=a(365),w=a.n(b),y=a(1),E=a.n(y),f=a(443),v=a.n(f),k=(a(196),a(11)),S=a.n(k),C=a(56),x=a.n(C),N=(a(448),a(449)),j=a(6),M=a(36),B=a(20);N.ValidatorForm.addValidationRule("isUrl",j.j);var W=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={url:""},a.handleChange=a.handleChange.bind(x()(x()(a))),a.handleSubmit=a.handleSubmit.bind(x()(x()(a))),a}S()(t,e);var a=t.prototype;return a.handleChange=function(e){this.setState({url:e.target.value})},a.handleSubmit=function(){var e=this.state.url.trim();Object(M.navigate)(Object(j.b)()+"/preview-download/latest/0/"+e)},a.render=function(){var e=this.props,t=e.classes,a=e.autoFocus;return s.a.createElement(N.ValidatorForm,{ref:"form",onSubmit:this.handleSubmit,className:t.form},s.a.createElement(N.TextValidator,{autoFocus:a,label:"Download more than 339 billion web pages saved over time",placeholder:"E.g. google.com",onChange:this.handleChange,name:"url",value:this.state.url,validators:["required","isUrl"],errorMessages:["This field is required","The url is not valid yet... keep typing "],margin:"normal",variant:"outlined",className:t.textInput,InputLabelProps:{shrink:!0},id:Math.random().toString()}),s.a.createElement(l.a,{type:"submit",variant:"contained",size:"large",color:"primary",className:t.button},"Download history"))},t}(s.a.Component),D=Object(B.withStyles)(function(e){var t,a,n;return{form:(t={height:80},t[e.breakpoints.down("sm")]={height:160},t),textInput:(a={margin:"12px 4px",minWidth:"60%",background:"white"},a[e.breakpoints.down("sm")]={minWidth:"90%"},a),button:(n={margin:8,minWidth:"30%",height:60},n[e.breakpoints.down("sm")]={minWidth:"90%"},n)}})(W),T=a(347),q=a.n(T),R=a(43),F=function(e){var t=e.data,a=e.classes;return s.a.createElement(s.a.Fragment,null,s.a.createElement(g.a,null,s.a.createElement("link",{rel:"canonical",href:t.site.siteMetadata.siteUrl+"/"})),R.a.isAuthenticated()&&s.a.createElement(q.a,{variant:"body1",className:a.pullRight},R.a.getUserName()&&s.a.createElement(s.a.Fragment,null,"Hi, ",R.a.getUserName()),s.a.createElement(d,null),s.a.createElement(l.a,{color:"primary",onClick:R.a.logout},"Logout")),s.a.createElement(h.a,{className:a.hero,container:!0,direction:"column",justify:"center",alignItems:"center",spacing:0},s.a.createElement(h.a,{item:!0,xs:10,md:8,lg:6},s.a.createElement(v.a,{compressor:1},s.a.createElement(q.a,{variant:"h1",align:"center",gutterBottom:!0},"Wayback Machine Downloader")),s.a.createElement(v.a,{compressor:3},s.a.createElement(q.a,{variant:"h4",align:"center",gutterBottom:!0},"Download the source code and assets from Wayback Machine")),s.a.createElement(w.a,{className:a.paper},s.a.createElement(h.a,{container:!0,direction:"column",justify:"center",alignItems:"center",spacing:0},s.a.createElement(h.a,{item:!0,xs:12,align:"center",className:a.fullWidth},s.a.createElement(D,{autoFocus:!0})))))),s.a.createElement(h.a,{container:!0,direction:"column",justify:"center",alignItems:"center",spacing:0},s.a.createElement(h.a,{item:!0,xs:11,md:10,lg:8,className:a.section},s.a.createElement(q.a,{variant:"h2",align:"center",gutterBottom:!0},"Key Benefits"),s.a.createElement(q.a,{variant:"h4",align:"center",gutterBottom:!0},"Easiest way to ",s.a.createElement("strong",{className:a.seoStrong},"download from archive.org, which is also known as wayback machine")),s.a.createElement(h.a,{className:a.subSection,container:!0,direction:"row",justify:"center",alignItems:"flex-start",spacing:40},s.a.createElement(p.b.Provider,{value:{className:a.icon,size:70}},s.a.createElement(h.a,{item:!0,align:"center",xs:8,md:4},s.a.createElement(r.a,null),s.a.createElement(q.a,{variant:"h3",gutterBottom:!0},"Platform Independent"),s.a.createElement(q.a,{variant:"body1",align:"justify",color:"textSecondary",gutterBottom:!0},"The web based interface enables you to use ",s.a.createElement("strong",{className:a.seoStrong},"wayback machine downloader")," straight in your browser on any operating system and without downloading or configuring any software.")),s.a.createElement(h.a,{item:!0,align:"center",xs:8,md:4},s.a.createElement(r.d,null),s.a.createElement(q.a,{variant:"h3",gutterBottom:!0},"Fast Previews"),s.a.createElement(q.a,{variant:"body1",align:"justify",color:"textSecondary",gutterBottom:!0},"Wayback machine downloader offers a fast preview of the download result hosted on our servers without consuming your computer's precious disk space.")),s.a.createElement(h.a,{item:!0,align:"center",xs:8,md:4},s.a.createElement(r.k,null),s.a.createElement(q.a,{variant:"h3",gutterBottom:!0},"Simplicity"),s.a.createElement(q.a,{variant:"body1",align:"justify",color:"textSecondary",gutterBottom:!0},"Wayback machine downloader is super simple and easy to use, yet it comes with advanced functionality such as only downloading a subdirectory or certain pages from a website (as a ",s.a.createElement("strong",{className:a.seoStrong},"web page downloader"),")."))))),s.a.createElement(h.a,{item:!0,xs:11,md:10,lg:8,className:a.section},s.a.createElement(q.a,{variant:"h2",align:"center",gutterBottom:!0},"Wayback Machine Downloader Features"),s.a.createElement(q.a,{variant:"h4",align:"center",gutterBottom:!0},"Wayback Machine Downloader allows you to download websites from archive.org to your local hard drive on your own computer. Wayback Downloader arranges the downloaded site by the original websites relative link-structure. The downloaded website can be browsed by opening one of the HTML pages in a browser."),s.a.createElement(h.a,{className:a.subSection,container:!0,direction:"row",justify:"center",alignItems:"flex-start",spacing:40},s.a.createElement(p.b.Provider,{value:{className:a.icon,size:70}},s.a.createElement(h.a,{item:!0,align:"center",xs:8,sm:6,md:3},s.a.createElement(r.f,null),s.a.createElement(q.a,{variant:"h3",gutterBottom:!0},"HTML"),s.a.createElement(q.a,{variant:"body1",align:"justify",color:"textSecondary",gutterBottom:!0},s.a.createElement("strong",{className:a.seoStrong},"Wayback Downloader")," takes each HTML file and downloads and clones it to your local hard drive.")),s.a.createElement(h.a,{item:!0,align:"center",xs:8,sm:6,md:3},s.a.createElement(r.h,null),s.a.createElement(q.a,{variant:"h3",gutterBottom:!0},"Link Conversion"),s.a.createElement(q.a,{variant:"body1",align:"justify",color:"textSecondary",gutterBottom:!0},"We convert all the links in the HTML files so that they work locally, off-line, instead of pointing to an online website.")),s.a.createElement(h.a,{item:!0,align:"center",xs:8,sm:6,md:3},s.a.createElement(r.b,null),s.a.createElement(q.a,{variant:"h3",gutterBottom:!0},"CSS & JavaScript"),s.a.createElement(q.a,{variant:"body1",align:"justify",color:"textSecondary",gutterBottom:!0},"CSS and JavaScript files will be downloaded under a simple folder structure and referenced correctly in the HTML files.")),s.a.createElement(h.a,{item:!0,align:"center",xs:8,sm:6,md:3},s.a.createElement(r.e,null),s.a.createElement(q.a,{variant:"h3",gutterBottom:!0},"Images"),s.a.createElement(q.a,{variant:"body1",align:"justify",color:"textSecondary",gutterBottom:!0},"Like other assets, also images will downloaded and referenced locally."))))),s.a.createElement(h.a,{item:!0,xs:10,md:8,lg:6,className:a.section},s.a.createElement(q.a,{variant:"h2",align:"center",gutterBottom:!0},"Ready to Start Using Wayback Machine Downloader?"),s.a.createElement(w.a,{className:a.paper},s.a.createElement(h.a,{container:!0,direction:"column",justify:"center",alignItems:"center",spacing:0},s.a.createElement(h.a,{item:!0,xs:12,align:"center",className:a.fullWidth},s.a.createElement(D,null)))),s.a.createElement(q.a,{variant:"body1",align:"center",className:a.subSection,gutterBottom:!0},s.a.createElement(l.a,{color:"primary",href:"https://websitedownloader.io/"},"Use Website Downloader")," | ",s.a.createElement(l.a,{color:"primary",href:"https://websitedownloader.io/blog/"},"Read our Blog")))))};t.default=Object(B.withStyles)(function(e){return Object.assign({},e.mixins,{hero:{minHeight:"80vh"},paper:{padding:"5%",marginTop:"5vh"},section:{margin:"5vh 0"},subSection:{marginTop:"4vh"},icon:{color:e.palette.secondary.main,verticalAlign:"middle",marginBottom:"2vh"}})})(function(e){return s.a.createElement(i.StaticQuery,{query:"4031252418",render:function(t){return s.a.createElement(F,Object.assign({data:t},e))},data:n})});F.propTypes={classes:E.a.object.isRequired}},349:function(e,t,a){"use strict";a(29);var n=a(350),r=a(185),i=a(186),o=a.n(i),l=a(1),c=a.n(l),s=a(0),m=a.n(s),d=function(e){var t=e.data,a=e.children,n=e.title,r=e.description;return n=n?n+" | "+t.site.siteMetadata.title:t.site.siteMetadata.title,r=r||t.site.siteMetadata.description,m.a.createElement(m.a.Fragment,null,m.a.createElement(o.a,null,m.a.createElement("html",{lang:t.site.siteMetadata.lang}),m.a.createElement("title",null,n),m.a.createElement("meta",{name:"description",content:r}),m.a.createElement("meta",{name:"robots",content:"noodp"}),m.a.createElement("meta",{property:"og:locale",content:t.site.siteMetadata.locale}),m.a.createElement("meta",{property:"og:type",content:"article"}),m.a.createElement("meta",{property:"og:title",content:n}),m.a.createElement("meta",{property:"og:description",content:r}),m.a.createElement("meta",{property:"og:url",content:t.site.siteMetadata.siteUrl+"/"}),m.a.createElement("meta",{property:"og:site_name",content:t.site.siteMetadata.siteName}),m.a.createElement("meta",{name:"twitter:card",content:"summary"}),m.a.createElement("meta",{name:"twitter:description",content:r}),m.a.createElement("meta",{name:"twitter:title",content:n}),a))};t.a=function(e){return m.a.createElement(r.StaticQuery,{query:"302559433",render:function(t){return m.a.createElement(d,Object.assign({data:t},e))},data:n})},d.propTypes={data:c.a.shape({site:c.a.shape({siteMetadata:c.a.shape({title:c.a.string.isRequired,description:c.a.string.isRequired,siteName:c.a.string.isRequired,siteUrl:c.a.string.isRequired,locale:c.a.string.isRequired,lang:c.a.string.isRequired}).isRequired}).isRequired}).isRequired}},350:function(e){e.exports={data:{site:{siteMetadata:{title:"Wayback Machine Downloader | Archive.org Downloader",description:"Use Wayback Machine Downloader to download any website from the Internet Archive / Wayback Machine. Nothing to install or configure, Download a Website Now!",siteName:"Website Downloader | Download any website",siteUrl:"https://websitedownloader.io/wayback-machine-downloader",locale:"en_US",lang:"en"}}}}},387:function(e,t,a){"use strict";a(29);var n=a(370),r=a.n(n),i=(a(364),a(371)),o=a.n(i),l=a(11),c=a.n(l),s=a(0),m=a.n(s),d=a(389);function u(e){var t,a=function(t){function a(){return t.apply(this,arguments)||this}c()(a,t);var n=a.prototype;return n.initChargebee=function(){window.Chargebee.init({site:"rocketfactory",gaEnabled:!0}),this.chargebee=window.Chargebee.getInstance(),this.cart=this.chargebee.getCart(),this.portal=this.chargebee.createChargebeePortal()},n.showCustomerPortal=function(){this.portal.open()},n.showCheckout=function(e,t){var a=this,n=this.chargebee.initializeProduct(e);this.cart.replaceProduct(n),this.chargebee.setCheckoutCallbacks(function(e){return{success:function(){var e=o()(r.a.mark(function e(n){return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t(n,a.chargebee);case 2:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()}}),this.cart.proceedToCheckout()},n.render=function(){return this.props.loading||this.initChargebee(),m.a.createElement(m.a.Fragment,null,m.a.createElement(e,Object.assign({showCustomerPortal:this.showCustomerPortal.bind(this),showCheckout:this.showCheckout.bind(this)},this.props)))},a}(m.a.Component);return(t=["https://js.chargebee.com/v2/chargebee.js"],function(e){return function(a){function n(){return a.apply(this,arguments)||this}c()(n,a);var r=n.prototype;return r.renderChildren=function(t){return void 0===t&&(t=!1),m.a.createElement(m.a.Fragment,null,m.a.createElement(e,Object.assign({loading:t},this.props)))},r.render=function(){return m.a.createElement(d.a,{loadingComponent:this.renderChildren(!0),scripts:t,renderChildren:this.renderChildren})},n}(m.a.Component)})(a)}a.d(t,"a",function(){return u})},427:function(e){e.exports={data:{site:{siteMetadata:{siteUrl:"https://websitedownloader.io/wayback-machine-downloader"}}}}},448:function(e,t,a){}}]);
//# sourceMappingURL=component---src-pages-index-js-8cbf1310417992ffaf01.js.map