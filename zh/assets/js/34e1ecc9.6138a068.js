"use strict";(self.webpackChunkincubator_eventmesh_site=self.webpackChunkincubator_eventmesh_site||[]).push([[6379],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>u});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),c=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=c(e.components);return a.createElement(p.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},v=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=c(n),v=r,u=d["".concat(p,".").concat(v)]||d[v]||m[v]||o;return n?a.createElement(u,i(i({ref:t},l),{},{components:n})):a.createElement(u,i({ref:t},l))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=v;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[d]="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}v.displayName="MDXCreateElement"},4120:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var a=n(7462),r=(n(7294),n(3905));const o={},i="\u5b89\u88c5",s={unversionedId:"sdk-java/intro",id:"sdk-java/intro",title:"\u5b89\u88c5",description:"Maven Central",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/sdk-java/01-intro.md",sourceDirName:"sdk-java",slug:"/sdk-java/intro",permalink:"/zh/docs/sdk-java/intro",draft:!1,editUrl:"https://github.com/apache/incubator-eventmesh-site/edit/master/docs/sdk-java/01-intro.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u8fd0\u884c eventmesh-sdk-java demo",permalink:"/zh/docs/instruction/demo"},next:{title:"HTTP \u534f\u8bae",permalink:"/zh/docs/sdk-java/http"}},p={},c=[{value:"Gradle",id:"gradle",level:2},{value:"Maven",id:"maven",level:2}],l={toc:c};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"\u5b89\u88c5"},"\u5b89\u88c5"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://maven-badges.herokuapp.com/maven-central/org.apache.eventmesh/eventmesh-sdk-java"},(0,r.kt)("img",{parentName:"a",src:"https://maven-badges.herokuapp.com/maven-central/org.apache.eventmesh/eventmesh-sdk-java/badge.svg?style=for-the-badge",alt:"Maven Central"}))),(0,r.kt)("p",null,"EventMesh Java SDK \u662f\u5728\u4e00\u4e2a Java \u5e94\u7528\u4e2d\u96c6\u6210 Eventmesh \u6240\u9700\u7684 Java \u7ec4\u4ef6\u96c6\u5408\u3002SDK \u652f\u6301\u4f7f\u7528 TCP\u3001HTTP \u548c gRPC \u534f\u8bae\u6765\u53d1\u9001\u548c\u63a5\u6536\u540c\u6b65\u6d88\u606f\u3001\u5f02\u6b65\u6d88\u606f\u548c\u5e7f\u64ad\u6d88\u606f\u3002SDK \u5b9e\u73b0\u4e86 EventMesh \u6d88\u606f\u3001CloudEvents \u548c OpenMessaging \u5f62\u5f0f\u3002\u60a8\u53ef\u4ee5\u5728 ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-eventmesh/tree/master/eventmesh-examples"},(0,r.kt)("inlineCode",{parentName:"a"},"eventmesh-example"))," \u6a21\u5757\u4e2d\u67e5\u770b\u793a\u4f8b\u9879\u76ee\u3002"),(0,r.kt)("h2",{id:"gradle"},"Gradle"),(0,r.kt)("p",null,"\u4f7f\u7528 Gradle \u5b89\u88c5 EventMesh Java SDK\uff0c\u60a8\u9700\u8981\u5728\u6a21\u5757\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"build.gradle")," \u6587\u4ef6\u7684\u4f9d\u8d56\u5757\u4e2d\u5c06 ",(0,r.kt)("inlineCode",{parentName:"p"},"org.apache.eventmesh:eventmesh-sdk-java")," \u58f0\u660e\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"implementation"),"\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-groovy"},"dependencies {\n  implementation 'org.apache.eventmesh:eventmesh-sdk-java:1.4.0'\n}\n")),(0,r.kt)("h2",{id:"maven"},"Maven"),(0,r.kt)("p",null,"\u4f7f\u7528 Maven \u5b89\u88c5 EventMesh Java SDK\uff0c\u60a8\u9700\u8981\u5728\u9879\u76ee ",(0,r.kt)("inlineCode",{parentName:"p"},"pom.xml")," \u6587\u4ef6\u7684\u4f9d\u8d56\u5757\u4e2d\u58f0\u660e ",(0,r.kt)("inlineCode",{parentName:"p"},"org.apache.eventmesh:eventmesh-sdk-java"),"\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},"<dependencies>\n  <dependency>\n    <groupId>org.apache.eventmesh</groupId>\n    <artifactId>eventmesh-sdk-java</artifactId>\n    <version>1.4.0</version>\n  </dependency>\n</dependencies>\n")))}d.isMDXComponent=!0}}]);