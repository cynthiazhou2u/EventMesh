(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[608,565],{3012:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return i}});var r=a(7294),n=a(1904),l=a(6742),c=a(4973);function o(e){var t=e.year,a=e.posts;return r.createElement(r.Fragment,null,r.createElement("h3",null,t),r.createElement("ul",null,a.map((function(e){return r.createElement("li",{key:e.metadata.date},r.createElement(l.Z,{to:e.metadata.permalink},e.metadata.formattedDate," - ",e.metadata.title))}))))}function s(e){var t=e.years;return r.createElement("section",{className:"margin-vert--lg"},r.createElement("div",{className:"container"},r.createElement("div",{className:"row"},t.map((function(e,t){return r.createElement("div",{key:t,className:"col col--4 margin-vert--lg"},r.createElement(o,e))})))))}function i(e){var t,a,l=e.archive,o=(0,c.I)({id:"theme.blog.archive.title",message:"Archive",description:"The page & hero title of the blog archive page"}),i=(0,c.I)({id:"theme.blog.archive.description",message:"Archive",description:"The page & hero description of the blog archive page"}),m=(t=l.blogPosts,a=t.reduceRight((function(e,t){var a=t.metadata.date.split("-")[0],r=e.get(a)||[];return e.set(a,[t].concat(r))}),new Map),Array.from(a,(function(e){return{year:e[0],posts:e[1]}})));return r.createElement(n.Z,{title:o,description:i},r.createElement("header",{className:"hero hero--primary"},r.createElement("div",{className:"container"},r.createElement("h1",{className:"hero__title"},o),r.createElement("p",{className:"hero__subtitle"},i))),r.createElement("main",null,m.length>0&&r.createElement(s,{years:m})))}},4971:function(e,t,a){"use strict";a.d(t,{Z:function(){return _}});var r=a(2122),n=a(9756),l=a(7294),c=a(6010),o=a(6742),s=a(941),i=a(4996),m=a(3919),u=a(8465),h=a(8617),f="footerLogoLink_qW4Z",d="subtitle_32k1",p=a.p+"assets/images/incubator-logo-8b9b2c54534acf0eb5aae24f4ac84b1a.png",E=function(){return l.createElement("div",{className:"container container--fluid"},l.createElement("img",{src:p,alt:"Apache Incubator Logo",width:"318px"}),l.createElement("p",{className:d},"Apache EventMesh (Incubating) is an effort undergoing incubation at The Apache Software Foundation, sponsored by the Apache Incubator. Incubation is required of all newly accepted projects until a further review indicates that the infrastructure, communications, and decision making process have stabilized in a manner consistent with other successful ASF projects. While incubation status is not necessarily a reflection of the completeness or stability of the code, it does indicate that the project has yet to be fully endorsed by the ASF."))},g=["to","href","label","prependBaseUrlToHref"];function v(e){var t=e.to,a=e.href,c=e.label,s=e.prependBaseUrlToHref,u=(0,n.Z)(e,g),f=(0,i.Z)(t),d=(0,i.Z)(a,{forcePrependBaseUrl:!0});return l.createElement(o.Z,(0,r.Z)({className:"footer__link-item"},a?{href:s?d:a}:{to:f},u),a&&!(0,m.Z)(a)?l.createElement("span",null,c,l.createElement(h.Z,null)):c)}var b=function(e){var t=e.sources,a=e.alt;return l.createElement(u.Z,{className:"footer__logo",alt:a,sources:t})};var _=function(){var e=(0,s.LU)().footer,t=e||{},a=t.copyright,r=t.links,n=void 0===r?[]:r,m=t.logo,u=void 0===m?{}:m,h={light:(0,i.Z)(u.src),dark:(0,i.Z)(u.srcDark||u.src)};return e?l.createElement("footer",{className:(0,c.Z)("footer",{"footer--dark":"dark"===e.style})},l.createElement("div",{className:"container"},n&&n.length>0&&l.createElement("div",{className:"row footer__links"},n.map((function(e,t){return l.createElement("div",{key:t,className:"col footer__col"},null!=e.title?l.createElement("div",{className:"footer__title"},e.title):null,null!=e.items&&Array.isArray(e.items)&&e.items.length>0?l.createElement("ul",{className:"footer__items"},e.items.map((function(e,t){return e.html?l.createElement("li",{key:t,className:"footer__item",dangerouslySetInnerHTML:{__html:e.html}}):l.createElement("li",{key:e.href||e.to,className:"footer__item"},l.createElement(v,e))}))):null)}))),l.createElement(E,null),(u||a)&&l.createElement("div",{className:"footer__bottom text--center"},u&&(u.src||u.srcDark)&&l.createElement("div",{className:"margin-bottom--sm"},u.href?l.createElement(o.Z,{href:u.href,className:f},l.createElement(b,{alt:u.alt,sources:h})):l.createElement(b,{alt:u.alt,sources:h})),a?l.createElement("div",{className:"footer__copyright",dangerouslySetInnerHTML:{__html:a}}):null))):null}}}]);