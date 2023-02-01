"use strict";(self.webpackChunkincubator_eventmesh_site=self.webpackChunkincubator_eventmesh_site||[]).push([[2378],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>k});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),u=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=u(e.components);return n.createElement(o.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=u(a),m=r,k=d["".concat(o,".").concat(m)]||d[m]||c[m]||l;return a?n.createElement(k,i(i({ref:t},p),{},{components:a})):n.createElement(k,i({ref:t},p))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=m;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[d]="string"==typeof e?e:r,i[1]=s;for(var u=2;u<l;u++)i[u]=a[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},3555:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>s,toc:()=>u});var n=a(7462),r=(a(7294),a(3905));const l={},i="\u5355\u5143\u6d4b\u8bd5\u8981\u6c42",s={unversionedId:"contribute/write-unit-test",id:"contribute/write-unit-test",title:"\u5355\u5143\u6d4b\u8bd5\u8981\u6c42",description:"- \u6bcf\u4e2a\u5355\u5143\u6d4b\u8bd5\u90fd\u5e94\u8be5\u4f7f\u7528\u65ad\u8a00assertions \u800c\u4e0d\u662f System.out \u6253\u5370\u6216\u8005if\u8bed\u53e5",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/contribute/02-write-unit-test.md",sourceDirName:"contribute",slug:"/contribute/write-unit-test",permalink:"/zh/docs/contribute/write-unit-test",draft:!1,editUrl:"https://github.com/apache/incubator-eventmesh-site/edit/master/docs/contribute/02-write-unit-test.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Release Creation Process",permalink:"/zh/docs/contribute/release"},next:{title:"\u5982\u4f55\u6210\u4e3aEventMesh\u7684\u8d21\u732e\u8005(Contributor)",permalink:"/zh/docs/contribute/new-contributor-guidelines"}},o={},u=[{value:"\u8def\u5f84\u548c\u547d\u540d\u89c4\u5219",id:"\u8def\u5f84\u548c\u547d\u540d\u89c4\u5219",level:2},{value:"\u65ad\u8a00\u7684\u7528\u6cd5",id:"\u65ad\u8a00\u7684\u7528\u6cd5",level:2},{value:"\u5e38\u89c1\u7684\u65ad\u8a00",id:"\u5e38\u89c1\u7684\u65ad\u8a00",level:3},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:3},{value:"<code>assertEquals()</code>",id:"assertequals",level:4},{value:"<code>assertTrue()</code>",id:"asserttrue",level:4},{value:"<code>assertFalse()</code>",id:"assertfalse",level:4},{value:"<code>assertNull()</code>",id:"assertnull",level:4},{value:"<code>assertNotNull()</code>",id:"assertnotnull",level:4}],p={toc:u};function d(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"\u5355\u5143\u6d4b\u8bd5\u8981\u6c42"},"\u5355\u5143\u6d4b\u8bd5\u8981\u6c42"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u6bcf\u4e2a\u5355\u5143\u6d4b\u8bd5\u90fd\u5e94\u8be5\u4f7f\u7528\u65ad\u8a00",(0,r.kt)("inlineCode",{parentName:"li"},"assertions")," \u800c\u4e0d\u662f ",(0,r.kt)("inlineCode",{parentName:"li"},"System.out")," \u6253\u5370\u6216\u8005",(0,r.kt)("inlineCode",{parentName:"li"},"if"),"\u8bed\u53e5"),(0,r.kt)("li",{parentName:"ul"},"\u6bcf\u4e2a\u5355\u5143\u6d4b\u8bd5\u90fd\u4e0d\u5e94\u8be5\u8c03\u7528\u5176\u4ed6\u7528\u4f8b\uff0c\u6216\u8005\u4f9d\u8d56\u4e8e\u6267\u884c\u987a\u5e8f"),(0,r.kt)("li",{parentName:"ul"},"\u6bcf\u4e2a\u5355\u5143\u6d4b\u8bd5\u90fd\u5e94\u8be5\u662f\u53ef\u4ee5\u5faa\u73af\u6267\u884c\u7684\uff0c\u5e76\u4e14\u5355\u5143\u6d4b\u8bd5\u4e0d\u53ef\u4ee5\u4f9d\u8d56\u5916\u90e8\u73af\u5883\uff0c\u56e0\u4e3a\u5355\u5143\u6d4b\u8bd5\u53ef\u80fd\u5728\u6301\u7eed\u96c6\u6210\u73af\u5883\u4e2d\u8fd0\u884c\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u6bcf\u4e2a\u5355\u5143\u6d4b\u8bd5\u7684\u6d4b\u8bd5\u8303\u56f4\u5e94\u8be5\u8db3\u591f\u5c0f\u4e14\u7cbe\u51c6\uff0c\u4ee5\u4fbf\u4e8e\u5b9a\u4f4d\u65b9\u6cd5\u7ea7\u522b\u7684\u95ee\u9898\u3002")),(0,r.kt)("h2",{id:"\u8def\u5f84\u548c\u547d\u540d\u89c4\u5219"},"\u8def\u5f84\u548c\u547d\u540d\u89c4\u5219"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5355\u5143\u6d4b\u8bd5\u5e94\u8be5\u5199\u5728",(0,r.kt)("inlineCode",{parentName:"li"},"src/test/java"),"\u76ee\u5f55\u4e0b\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u5355\u5143\u6d4b\u8bd5\u7684\u914d\u7f6e\u6587\u4ef6\u5e94\u8be5\u653e\u5728",(0,r.kt)("inlineCode",{parentName:"li"},"src/test/resources"),"\u76ee\u5f55\u4e0b\uff0c\u5982\u4e0b\u793a\u4f8b\uff1a",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u5c06\u88ab\u6d4b\u8bd5\u7684\u7c7b\uff1a",(0,r.kt)("inlineCode",{parentName:"li"},"src/main/java/org/apache/eventmesh/common/protocol/http/body/BaseResponseBody.java")),(0,r.kt)("li",{parentName:"ul"},"\u5355\u5143\u6d4b\u8bd5\u7c7b\uff1a",(0,r.kt)("inlineCode",{parentName:"li"},"src/test/java/org/apache/eventmesh/common/protocol/http/body/BaseResponseBodyTest.java")),(0,r.kt)("li",{parentName:"ul"},"\u5355\u5143\u6d4b\u8bd5\u914d\u7f6e\u6587\u4ef6\uff1a",(0,r.kt)("inlineCode",{parentName:"li"},"src/test/resources/configuration.properties")))),(0,r.kt)("li",{parentName:"ul"},"\u5355\u5143\u6d4b\u8bd5\u7c7b\u7684\u5305\u540d\u5e94\u8be5\u548c\u88ab\u6d4b\u8bd5\u7684\u7c7b\u7684\u5305\u540d\u76f8\u540c"),(0,r.kt)("li",{parentName:"ul"},"\u5355\u5143\u6d4b\u8bd5\u7684\u7c7b\u7684\u540d\u5b57\u5e94\u8be5\u662f",(0,r.kt)("inlineCode",{parentName:"li"},"{\u88ab\u6d4b\u8bd5\u7684\u7c7b\u540d+}Test"),"\u3002 \u6bd4\u5982\uff1a",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u5c06\u88ab\u6d4b\u8bd5\u7684\u7c7b\u662f\uff1a",(0,r.kt)("inlineCode",{parentName:"li"},"EventMeshUtil")),(0,r.kt)("li",{parentName:"ul"},"\u5355\u5143\u6d4b\u8bd5\u7c7b\u7684\u7c7b\u540d\u5c31\u662f\uff1a ",(0,r.kt)("inlineCode",{parentName:"li"},"EventMeshUtilTest")))),(0,r.kt)("li",{parentName:"ul"},"\u6bcf\u4e2a\u5355\u5143\u6d4b\u8bd5\u7684\u540d\u5b57\u5fc5\u987b\u662f ",(0,r.kt)("inlineCode",{parentName:"li"},"test{+\u65b9\u6cd5\u540d}"),"\uff0c\u6bd4\u5982\uff1a",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u5c06\u88ab\u6d4b\u8bd5\u7684\u65b9\u6cd5\uff1a",(0,r.kt)("inlineCode",{parentName:"li"},"addProp(String key, String val)")),(0,r.kt)("li",{parentName:"ul"},"\u5355\u5143\u6d4b\u8bd5\u7684\u540d\u5b57\u5c31\u662f\uff1a",(0,r.kt)("inlineCode",{parentName:"li"},"testAddProp"))))),(0,r.kt)("h2",{id:"\u65ad\u8a00\u7684\u7528\u6cd5"},"\u65ad\u8a00\u7684\u7528\u6cd5"),(0,r.kt)("h3",{id:"\u5e38\u89c1\u7684\u65ad\u8a00"},"\u5e38\u89c1\u7684\u65ad\u8a00"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Methods"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Instructions"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"assertEquals")),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u786e\u5b9a\u4e24\u4e2a\u5bf9\u8c61\u6216\u539f\u8bed\u7c7b\u578b\u662f\u5426\u76f8\u7b49")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"assertNotEquals")),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u786e\u5b9a\u4e24\u4e2a\u5bf9\u8c61\u6216\u539f\u8bed\u7c7b\u578b\u662f\u5426\u4e0d\u76f8\u7b49")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"assertTrue")),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u786e\u5b9a\u7ed9\u5b9a\u7684\u5e03\u5c14\u503c\u662f\u5426\u662f ",(0,r.kt)("inlineCode",{parentName:"td"},"true"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"assertFalse")),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u786e\u5b9a\u7ed9\u5b9a\u7684\u5e03\u5c14\u503c\u662f\u5426\u662f ",(0,r.kt)("inlineCode",{parentName:"td"},"false"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"assertNull")),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u786e\u5b9a\u7ed9\u5b9a\u7684\u5bf9\u8c61\u662f\u5426\u662f ",(0,r.kt)("inlineCode",{parentName:"td"},"null"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"assertNotNull")),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u786e\u5b9a\u7ed9\u5b9a\u7684\u5bf9\u8c61\u662f\u5426\u4e0d\u662f ",(0,r.kt)("inlineCode",{parentName:"td"},"null"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"assertAll")),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u5982\u679c\u540c\u65f6\u5904\u7406\u591a\u4e2a\u903b\u8f91\uff0c\u5982\u679c\u53ea\u6709\u4e00\u4e2a\u903b\u8f91\u65ad\u8a00\u5931\u8d25\uff0c\u6574\u4e2a\u6d4b\u8bd5\u5c06\u4f1a\u5931\u8d25")))),(0,r.kt)("h3",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),(0,r.kt)("h4",{id:"assertequals"},(0,r.kt)("inlineCode",{parentName:"h4"},"assertEquals()")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'configuration.init();\nAssert.assertEquals("value1", configuration.eventMeshEnv);\n')),(0,r.kt)("h4",{id:"asserttrue"},(0,r.kt)("inlineCode",{parentName:"h4"},"assertTrue()")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'BaseResponseHeader header = BaseResponseHeader.buildHeader("200");\nAssert.assertTrue(header.toMap().containsKey(ProtocolKey.REQUEST_CODE));\n')),(0,r.kt)("h4",{id:"assertfalse"},(0,r.kt)("inlineCode",{parentName:"h4"},"assertFalse()")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'Class<NacosRegistryService> nacosRegistryServiceClass = NacosRegistryService.class;\nField initStatus = nacosRegistryServiceClass.getDeclaredField("INIT_STATUS");\ninitStatus.setAccessible(true);\nObject initStatusField = initStatus.get(nacosRegistryService);\nAssert.assertFalse((Boolean.parseBoolean(initStatusField.toString())));\n')),(0,r.kt)("h4",{id:"assertnull"},(0,r.kt)("inlineCode",{parentName:"h4"},"assertNull()")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"DefaultFullHttpResponse response = httpCommand.httpResponse();\nAssert.assertNull(response);\n")),(0,r.kt)("h4",{id:"assertnotnull"},(0,r.kt)("inlineCode",{parentName:"h4"},"assertNotNull()")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"Codec.Decoder cd = new Codec.Decoder();\nArrayList<Object> result = new ArrayList<>();\ncd.decode(null, buf, result);\nAssert.assertNotNull(result.get(0));\n")))}d.isMDXComponent=!0}}]);