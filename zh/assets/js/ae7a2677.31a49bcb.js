"use strict";(self.webpackChunkincubator_eventmesh_site=self.webpackChunkincubator_eventmesh_site||[]).push([[3955],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>u});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},v=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=p(n),v=r,u=d["".concat(l,".").concat(v)]||d[v]||m[v]||o;return n?a.createElement(u,s(s({ref:t},c),{},{components:n})):a.createElement(u,s({ref:t},c))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=v;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[d]="string"==typeof e?e:r,s[1]=i;for(var p=2;p<o;p++)s[p]=n[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}v.displayName="MDXCreateElement"},6401:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const o={},s="Installation",i={unversionedId:"sdk-java/intro",id:"sdk-java/intro",title:"Installation",description:"Maven Central",source:"@site/docs/sdk-java/intro.md",sourceDirName:"sdk-java",slug:"/sdk-java/intro",permalink:"/zh/docs/sdk-java/intro",draft:!1,editUrl:"https://github.com/apache/incubator-eventmesh-site/edit/master/docs/sdk-java/intro.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"gRPC \u534f\u8bae",permalink:"/zh/docs/sdk-java/grpc"},next:{title:"Release Creation Process",permalink:"/zh/docs/contribute/release"}},l={},p=[{value:"Gradle",id:"gradle",level:2},{value:"Maven",id:"maven",level:2}],c={toc:p};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"installation"},"Installation"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://maven-badges.herokuapp.com/maven-central/org.apache.eventmesh/eventmesh-sdk-java"},(0,r.kt)("img",{parentName:"a",src:"https://maven-badges.herokuapp.com/maven-central/org.apache.eventmesh/eventmesh-sdk-java/badge.svg?style=for-the-badge",alt:"Maven Central"}))),(0,r.kt)("p",null,"EventMesh SDK for Java is a collection of Java libraries to integrate EventMesh in a Java application. The SDK supports sending and receiving synchronous messages, asynchronous messages, and broadcast messages in TCP, HTTP, and gRPC protocols. The SDK implements EventMesh Message, CloudEvents, and OpenMessaging formats. The demo project is available in the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-eventmesh/tree/master/eventmesh-examples"},(0,r.kt)("inlineCode",{parentName:"a"},"eventmesh-example"))," module."),(0,r.kt)("h2",{id:"gradle"},"Gradle"),(0,r.kt)("p",null,"To install EventMesh SDK for Java with Gradle, declare ",(0,r.kt)("inlineCode",{parentName:"p"},"org.apache.eventmesh:eventmesh-sdk-java")," as ",(0,r.kt)("inlineCode",{parentName:"p"},"implementation")," in the dependencies block of the module's ",(0,r.kt)("inlineCode",{parentName:"p"},"build.gradle")," file."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-groovy"},"dependencies {\n  implementation 'org.apache.eventmesh:eventmesh-sdk-java:1.4.0'\n}\n")),(0,r.kt)("h2",{id:"maven"},"Maven"),(0,r.kt)("p",null,"To install EventMesh SDK for Java with Maven, declare ",(0,r.kt)("inlineCode",{parentName:"p"},"org.apache.eventmesh:eventmesh-sdk-java")," as a dependency in the dependencies block of the project's ",(0,r.kt)("inlineCode",{parentName:"p"},"pom.xml")," file."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},"<dependencies>\n  <dependency>\n    <groupId>org.apache.eventmesh</groupId>\n    <artifactId>eventmesh-sdk-java</artifactId>\n    <version>1.4.0</version>\n  </dependency>\n</dependencies>\n")))}d.isMDXComponent=!0}}]);