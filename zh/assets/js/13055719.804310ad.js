"use strict";(self.webpackChunkincubator_eventmesh_site=self.webpackChunkincubator_eventmesh_site||[]).push([[9185],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(n),h=a,d=u["".concat(c,".").concat(h)]||u[h]||m[h]||o;return n?r.createElement(d,i(i({ref:t},p),{},{components:n})):r.createElement(d,i({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=h;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[u]="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},6291:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var r=n(7462),a=(n(7294),n(3905));const o={sidebar_position:0},i="Apache EventMesh (Incubating)",s={unversionedId:"introduction",id:"introduction",title:"Apache EventMesh (Incubating)",description:"CI status",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/introduction.md",sourceDirName:".",slug:"/introduction",permalink:"/zh/docs/introduction",draft:!1,editUrl:"https://github.com/apache/incubator-eventmesh-site/edit/master/docs/introduction.md",tags:[],version:"current",sidebarPosition:0,frontMatter:{sidebar_position:0},sidebar:"tutorialSidebar",next:{title:"EventMesh\u4ea7\u54c1\u8def\u7ebf\u56fe",permalink:"/zh/docs/roadmap"}},c={},l=[{value:"\u4ec0\u4e48\u662fEvent Mesh\uff1f",id:"\u4ec0\u4e48\u662fevent-mesh",level:2},{value:"\u5feb\u901f\u5f00\u59cb",id:"\u5feb\u901f\u5f00\u59cb",level:2},{value:"\u8d21\u732e",id:"\u8d21\u732e",level:2}],p={toc:l};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"apache-eventmesh-incubating"},"Apache EventMesh (Incubating)"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-eventmesh/actions/workflows/ci.yml"},(0,a.kt)("img",{parentName:"a",src:"https://github.com/apache/incubator-eventmesh/actions/workflows/ci.yml/badge.svg",alt:"CI status"})),"\n",(0,a.kt)("a",{parentName:"p",href:"https://codecov.io/gh/apache/incubator-eventmesh"},(0,a.kt)("img",{parentName:"a",src:"https://codecov.io/gh/apache/incubator-eventmesh/branch/develop/graph/badge.svg",alt:"CodeCov"})),"\n",(0,a.kt)("a",{parentName:"p",href:"https://lgtm.com/projects/g/apache/incubator-eventmesh/context:java"},(0,a.kt)("img",{parentName:"a",src:"https://img.shields.io/lgtm/grade/java/g/apache/incubator-eventmesh.svg?logo=lgtm&logoWidth=18",alt:"Language grade: Java"})),"\n",(0,a.kt)("a",{parentName:"p",href:"https://lgtm.com/projects/g/apache/incubator-eventmesh/alerts/"},(0,a.kt)("img",{parentName:"a",src:"https://img.shields.io/lgtm/alerts/g/apache/incubator-eventmesh.svg?logo=lgtm&logoWidth=18",alt:"Total alerts"})),"\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-eventmesh/releases"},(0,a.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/release-download-orange.svg",alt:"GitHub release"})),"\n",(0,a.kt)("a",{parentName:"p",href:"https://www.apache.org/licenses/LICENSE-2.0.html"},(0,a.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/license-Apache%202-4EB1BA.svg",alt:"License"}))),(0,a.kt)("h2",{id:"\u4ec0\u4e48\u662fevent-mesh"},"\u4ec0\u4e48\u662fEvent Mesh\uff1f"),(0,a.kt)("p",null,"EventMesh\u662f\u4e00\u4e2a\u52a8\u6001\u7684\u4e91\u539f\u751f\u4e8b\u4ef6\u9a71\u52a8\u67b6\u6784\u57fa\u7840\u8bbe\u65bd\uff0c\u7528\u4e8e\u5206\u79bb\u5e94\u7528\u7a0b\u5e8f\u548c\u540e\u7aef\u4e2d\u95f4\u4ef6\u5c42\uff0c\u5b83\u652f\u6301\u5e7f\u6cdb\u7684\u7528\u4f8b\uff0c\u5305\u62ec\u590d\u6742\u7684\u6df7\u5408\u4e91\u3001\u4f7f\u7528\u4e86\u4e0d\u540c\u6280\u672f\u6808\u7684\u5206\u5e03\u5f0f\u67b6\u6784\u3002"),(0,a.kt)("p",null,"Event Mesh\u5141\u8bb8\u5c06\u6765\u81ea\u4e00\u4e2a\u5e94\u7528\u7a0b\u5e8f\u7684\u4e8b\u4ef6\u52a8\u6001\u8def\u7531\u5230\u4efb\u4f55\u5176\u4ed6\u5e94\u7528\u7a0b\u5e8f. Event Mesh\u7684\u4e00\u822c\u529f\u80fd:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u4e8b\u4ef6\u9a71\u52a8;"),(0,a.kt)("li",{parentName:"ul"},"\u4e8b\u4ef6\u6cbb\u7406;"),(0,a.kt)("li",{parentName:"ul"},"\u52a8\u6001\u8def\u7531;"),(0,a.kt)("li",{parentName:"ul"},"\u4e91\u539f\u751f")),(0,a.kt)("p",null,"\u90e8\u4ef6\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"eventmesh-runtime\uff1a\u4e00\u79cd\u4e2d\u95f4\u4ef6\uff0c\u7528\u4e8e\u5728\u4e8b\u4ef6\u751f\u4ea7\u8005\u548c\u6d88\u8d39\u8005\u4e4b\u95f4\u4f20\u8f93\u4e8b\u4ef6\uff0c\u652f\u6301\u4e91\u539f\u751f\u5e94\u7528\u7a0b\u5e8f\u548c\u5fae\u670d\u52a1"),(0,a.kt)("li",{parentName:"ul"},"eventmesh-sdk-java\uff1a\u5f53\u524d\u652f\u6301HTTP\u3001HHTTP\u3001TCP\u548c ",(0,a.kt)("a",{parentName:"li",href:"https://grpc.io"},"gRPC")," \u534f\u8bae")),(0,a.kt)("h2",{id:"\u5feb\u901f\u5f00\u59cb"},"\u5feb\u901f\u5f00\u59cb"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u6784\u5efa\u5e76\u90e8\u7f72 event-store(RocketMQ), \u8bf7\u53c2\u89c1",(0,a.kt)("a",{parentName:"li",href:"/zh/docs/instruction/store"},"\u8bf4\u660e")),(0,a.kt)("li",{parentName:"ol"},"\u6784\u5efa\u5e76\u90e8\u7f72 eventmesh-runtime\uff0c\u8bf7\u53c2\u89c1",(0,a.kt)("a",{parentName:"li",href:"/zh/docs/instruction/runtime"},"\u8bf4\u660e")),(0,a.kt)("li",{parentName:"ol"},"\u8fd0\u884c eventmesh-sdk-java \u6f14\u793a\uff0c\u8bf7\u53c2\u89c1",(0,a.kt)("a",{parentName:"li",href:"/zh/docs/instruction/demo"},"\u8bf4\u660e"))),(0,a.kt)("h2",{id:"\u8d21\u732e"},"\u8d21\u732e"),(0,a.kt)("p",null,"\u6c38\u8fdc\u6b22\u8fce\u53c2\u4e0e\u5171\u5efa, \u8bf7\u53c2\u9605",(0,a.kt)("a",{parentName:"p",href:"contribute/03-new-contributor-guidelines.md"},"\u8d21\u732e"),"\u4e86\u89e3\u8be6\u7ec6\u6307\u5357"),(0,a.kt)("p",null,"\u60a8\u53ef\u4ee5\u4ece\u53d1\u73b0\u548c\u89e3\u51b3\u95ee\u9898\u5f00\u59cb\uff5e\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-eventmesh/issues"},"GitHub Issues")))}u.isMDXComponent=!0}}]);