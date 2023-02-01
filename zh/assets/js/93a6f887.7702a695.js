"use strict";(self.webpackChunkincubator_eventmesh_site=self.webpackChunkincubator_eventmesh_site||[]).push([[285],{3905:(e,n,t)=>{t.d(n,{Zo:()=>l,kt:()=>d});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=r.createContext({}),c=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},l=function(e){var n=c(e.components);return r.createElement(p.Provider,{value:n},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},v=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=c(t),v=o,d=u["".concat(p,".").concat(v)]||u[v]||m[v]||i;return t?r.createElement(d,a(a({ref:n},l),{},{components:t})):r.createElement(d,a({ref:n},l))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=v;var s={};for(var p in n)hasOwnProperty.call(n,p)&&(s[p]=n[p]);s.originalType=e,s[u]="string"==typeof e?e:o,a[1]=s;for(var c=2;c<i;c++)a[c]=t[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}v.displayName="MDXCreateElement"},1764:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var r=t(7462),o=(t(7294),t(3905));const i={},a="gRPC \u534f\u8bae",s={unversionedId:"sdk-java/grpc",id:"sdk-java/grpc",title:"gRPC \u534f\u8bae",description:"EventMesh Java SDK \u5b9e\u73b0\u4e86 gRPC \u540c\u6b65\u3001\u5f02\u6b65\u548c\u5e7f\u64ad\u6d88\u606f\u7684\u751f\u4ea7\u8005\u548c\u6d88\u8d39\u8005\u3002\u4e8c\u8005\u90fd\u9700\u8981\u4e00\u4e2a EventMeshHttpClientConfig \u7c7b\u5b9e\u4f8b\u6765\u6307\u5b9a EventMesh gRPC \u5ba2\u6237\u7aef\u7684\u914d\u7f6e\u4fe1\u606f\u3002\u5176\u4e2d\u7684 liteEventMeshAddr\u3001userName \u548c password \u5b57\u6bb5\u9700\u8981\u548c EventMesh runtime eventmesh.properties \u6587\u4ef6\u4e2d\u7684\u76f8\u5339\u914d\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/sdk-java/04-grpc.md",sourceDirName:"sdk-java",slug:"/sdk-java/grpc",permalink:"/zh/docs/sdk-java/grpc",draft:!1,editUrl:"https://github.com/apache/incubator-eventmesh-site/edit/master/docs/sdk-java/04-grpc.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"TCP \u534f\u8bae",permalink:"/zh/docs/sdk-java/tcp"},next:{title:"Installation",permalink:"/zh/docs/sdk-java/intro"}},p={},c=[{value:"gRPC \u6d88\u8d39\u8005",id:"grpc-\u6d88\u8d39\u8005",level:2},{value:"\u6d41\u6d88\u8d39\u8005",id:"\u6d41\u6d88\u8d39\u8005",level:3},{value:"Webhook \u6d88\u8d39\u8005",id:"webhook-\u6d88\u8d39\u8005",level:3},{value:"gRPC \u751f\u4ea7\u8005",id:"grpc-\u751f\u4ea7\u8005",level:2},{value:"\u5f02\u6b65\u751f\u4ea7\u8005",id:"\u5f02\u6b65\u751f\u4ea7\u8005",level:3},{value:"\u540c\u6b65\u751f\u4ea7\u8005",id:"\u540c\u6b65\u751f\u4ea7\u8005",level:3},{value:"\u6279\u91cf\u751f\u4ea7\u8005",id:"\u6279\u91cf\u751f\u4ea7\u8005",level:3}],l={toc:c};function u(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"grpc-\u534f\u8bae"},"gRPC \u534f\u8bae"),(0,o.kt)("p",null,"EventMesh Java SDK \u5b9e\u73b0\u4e86 gRPC \u540c\u6b65\u3001\u5f02\u6b65\u548c\u5e7f\u64ad\u6d88\u606f\u7684\u751f\u4ea7\u8005\u548c\u6d88\u8d39\u8005\u3002\u4e8c\u8005\u90fd\u9700\u8981\u4e00\u4e2a ",(0,o.kt)("inlineCode",{parentName:"p"},"EventMeshHttpClientConfig")," \u7c7b\u5b9e\u4f8b\u6765\u6307\u5b9a EventMesh gRPC \u5ba2\u6237\u7aef\u7684\u914d\u7f6e\u4fe1\u606f\u3002\u5176\u4e2d\u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"liteEventMeshAddr"),"\u3001",(0,o.kt)("inlineCode",{parentName:"p"},"userName")," \u548c ",(0,o.kt)("inlineCode",{parentName:"p"},"password")," \u5b57\u6bb5\u9700\u8981\u548c EventMesh runtime ",(0,o.kt)("inlineCode",{parentName:"p"},"eventmesh.properties")," \u6587\u4ef6\u4e2d\u7684\u76f8\u5339\u914d\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'import org.apache.eventmesh.client.grpc.config.EventMeshGrpcClientConfig;\nimport org.apache.eventmesh.client.grpc.consumer.ReceiveMsgHook;\nimport io.cloudevents.CloudEvent;\n\npublic class CloudEventsAsyncSubscribe implements ReceiveMsgHook<CloudEvent> {\n  public static void main(String[] args) throws InterruptedException {\n    EventMeshGrpcClientConfig eventMeshClientConfig = EventMeshGrpcClientConfig.builder()\n      .serverAddr("localhost")\n      .serverPort(10205)\n      .consumerGroup(ExampleConstants.DEFAULT_EVENTMESH_TEST_CONSUMER_GROUP)\n      .env("env").idc("idc")\n      .sys("1234").build();\n    /* ... */\n  }\n}\n')),(0,o.kt)("h2",{id:"grpc-\u6d88\u8d39\u8005"},"gRPC \u6d88\u8d39\u8005"),(0,o.kt)("h3",{id:"\u6d41\u6d88\u8d39\u8005"},"\u6d41\u6d88\u8d39\u8005"),(0,o.kt)("p",null,"EventMesh runtime \u4f1a\u5c06\u6765\u81ea\u751f\u4ea7\u8005\u7684\u4fe1\u606f\u4f5c\u4e3a\u4e00\u7cfb\u5217\u4e8b\u4ef6\u6d41\u5411\u6d41\u6d88\u8d39\u8005\u53d1\u9001\u3002\u6d88\u8d39\u8005\u5e94\u5b9e\u73b0 ",(0,o.kt)("inlineCode",{parentName:"p"},"ReceiveHook")," \u7c7b\uff0c\u5176\u88ab\u5b9a\u4e49\u5728 ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-eventmesh/blob/master/eventmesh-sdk-java/src/main/java/org/apache/eventmesh/client/grpc/consumer/ReceiveMsgHook.java"},"ReceiveMsgHook.java"),"\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"public interface ReceiveMsgHook<T> {\n    Optional<T> handle(T msg) throws Throwable;\n    String getProtocolType();\n}\n")),(0,o.kt)("p",null,"\u7c7b ",(0,o.kt)("inlineCode",{parentName:"p"},"EventMeshGrpcConsumer")," \u5b9e\u73b0\u4e86 ",(0,o.kt)("inlineCode",{parentName:"p"},"registerListener"),"\u3001",(0,o.kt)("inlineCode",{parentName:"p"},"subscribe")," \u548c ",(0,o.kt)("inlineCode",{parentName:"p"},"unsubscribe")," \u65b9\u6cd5\u3002",(0,o.kt)("inlineCode",{parentName:"p"},"subscribe")," \u65b9\u6cd5\u63a5\u6536\u4e00\u4e2a ",(0,o.kt)("inlineCode",{parentName:"p"},"SubscriptionItem")," \u5bf9\u8c61\u7684\u5217\u8868\uff0c\u5176\u4e2d\u5b9a\u4e49\u4e86\u8981\u8ba2\u9605\u7684\u8bdd\u9898\u3002",(0,o.kt)("inlineCode",{parentName:"p"},"registerListener")," \u63a5\u6536\u4e00\u4e2a\u5b9e\u73b0\u4e86 ",(0,o.kt)("inlineCode",{parentName:"p"},"ReceiveMsgHook")," \u7684\u5b9e\u4f8b\u3002",(0,o.kt)("inlineCode",{parentName:"p"},"handle")," \u65b9\u6cd5\u5c06\u4f1a\u5728\u6d88\u8d39\u8005\u6536\u5230\u8ba2\u9605\u7684\u4e3b\u9898\u6d88\u606f\u65f6\u88ab\u8c03\u7528\u3002\u5982\u679c ",(0,o.kt)("inlineCode",{parentName:"p"},"SubscriptionType")," \u662f ",(0,o.kt)("inlineCode",{parentName:"p"},"SYNC"),"\uff0c",(0,o.kt)("inlineCode",{parentName:"p"},"handle")," \u7684\u8fd4\u56de\u503c\u5c06\u88ab\u53d1\u9001\u56de\u751f\u4ea7\u8005\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'import org.apache.eventmesh.client.grpc.consumer.EventMeshGrpcConsumer;\nimport org.apache.eventmesh.client.grpc.consumer.ReceiveMsgHook;\nimport org.apache.eventmesh.client.tcp.common.EventMeshCommon;\nimport org.apache.eventmesh.common.protocol.SubscriptionItem;\nimport org.apache.eventmesh.common.protocol.SubscriptionMode;\nimport org.apache.eventmesh.common.protocol.SubscriptionType;\nimport io.cloudevents.CloudEvent;\n\npublic class CloudEventsAsyncSubscribe implements ReceiveMsgHook<CloudEvent> {\n    public static CloudEventsAsyncSubscribe handler = new CloudEventsAsyncSubscribe();\n    public static void main(String[] args) throws InterruptedException {\n        /* ... */\n        SubscriptionItem subscriptionItem = new SubscriptionItem(\n          "eventmesh-async-topic",\n          SubscriptionMode.CLUSTERING,\n          SubscriptionType.ASYNC\n        );\n        EventMeshGrpcConsumer eventMeshGrpcConsumer = new EventMeshGrpcConsumer(eventMeshClientConfig);\n\n        eventMeshGrpcConsumer.init();\n        eventMeshGrpcConsumer.registerListener(handler);\n        eventMeshGrpcConsumer.subscribe(Collections.singletonList(subscriptionItem));\n        /* ... */\n        eventMeshGrpcConsumer.unsubscribe(Collections.singletonList(subscriptionItem));\n    }\n\n    @Override\n    public Optional<CloudEvent> handle(CloudEvent message) {\n      log.info("Messaged received: {}", message);\n      return Optional.empty();\n    }\n\n    @Override\n    public String getProtocolType() {\n      return EventMeshCommon.CLOUD_EVENTS_PROTOCOL_NAME;\n    }\n}\n')),(0,o.kt)("h3",{id:"webhook-\u6d88\u8d39\u8005"},"Webhook \u6d88\u8d39\u8005"),(0,o.kt)("p",null,"\u7c7b ",(0,o.kt)("inlineCode",{parentName:"p"},"EventMeshGrpcConsumer")," \u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"subscribe")," \u65b9\u6cd5\u63a5\u6536\u4e00\u4e2a ",(0,o.kt)("inlineCode",{parentName:"p"},"SubscriptionItem")," \u5bf9\u8c61\u7684\u5217\u8868\uff0c\u5176\u4e2d\u5b9a\u4e49\u4e86\u8981\u8ba2\u9605\u7684\u4e3b\u9898\u548c\u4e00\u4e2a\u53ef\u9009\u7684 timeout \u503c\u3002\u5982\u679c\u63d0\u4f9b\u4e86\u56de\u8c03 URL\uff0cEventMesh runtime \u5c06\u5411\u56de\u8c03 URL \u5730\u5740\u53d1\u9001\u4e00\u4e2a\u5305\u542b ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/cloudevents/spec"},"CloudEvents \u683c\u5f0f")," \u6d88\u606f\u7684 POST \u8bf7\u6c42\u3002",(0,o.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-eventmesh/blob/master/eventmesh-examples/src/main/java/org/apache/eventmesh/grpc/sub/app/controller/SubController.java"},"SubController.java")," \u5b9e\u73b0\u4e86\u4e00\u4e2a\u63a5\u6536\u5e76\u89e3\u6790\u56de\u8c03\u4fe1\u606f\u7684 Spring Boot controller\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'import org.apache.eventmesh.client.grpc.consumer.EventMeshGrpcConsumer;\nimport org.apache.eventmesh.client.grpc.consumer.ReceiveMsgHook;\nimport org.apache.eventmesh.client.tcp.common.EventMeshCommon;\nimport org.apache.eventmesh.common.protocol.SubscriptionItem;\nimport org.apache.eventmesh.common.protocol.SubscriptionMode;\nimport org.apache.eventmesh.common.protocol.SubscriptionType;\n\n@Component\npublic class SubService implements InitializingBean {\n  final String url = "http://localhost:8080/callback";\n\n  public void afterPropertiesSet() throws Exception {\n    /* ... */\n    eventMeshGrpcConsumer = new EventMeshGrpcConsumer(eventMeshClientConfig);\n    eventMeshGrpcConsumer.init();\n\n    SubscriptionItem subscriptionItem = new SubscriptionItem(\n      "eventmesh-async-topic",\n      SubscriptionMode.CLUSTERING,\n      SubscriptionType.ASYNC\n    );\n\n    eventMeshGrpcConsumer.subscribe(Collections.singletonList(subscriptionItem), url);\n    /* ... */\n    eventMeshGrpcConsumer.unsubscribe(Collections.singletonList(subscriptionItem), url);\n  }\n}\n')),(0,o.kt)("h2",{id:"grpc-\u751f\u4ea7\u8005"},"gRPC \u751f\u4ea7\u8005"),(0,o.kt)("h3",{id:"\u5f02\u6b65\u751f\u4ea7\u8005"},"\u5f02\u6b65\u751f\u4ea7\u8005"),(0,o.kt)("p",null,"\u7c7b ",(0,o.kt)("inlineCode",{parentName:"p"},"EventMeshGrpcProducer")," \u5b9e\u73b0\u4e86 ",(0,o.kt)("inlineCode",{parentName:"p"},"publish")," \u65b9\u6cd5\u3002",(0,o.kt)("inlineCode",{parentName:"p"},"publish")," \u65b9\u6cd5\u63a5\u6536\u5c06\u88ab\u53d1\u5e03\u7684\u6d88\u606f\u548c\u4e00\u4e2a\u53ef\u9009\u7684 timeout \u503c\u3002\u6d88\u606f\u5e94\u662f\u4e0b\u5217\u7c7b\u7684\u4e00\u4e2a\u5b9e\u4f8b\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"org.apache.eventmesh.common.EventMeshMessage")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"io.cloudevents.CloudEvent"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'/* ... */\nEventMeshGrpcProducer eventMeshGrpcProducer = new EventMeshGrpcProducer(eventMeshClientConfig);\neventMeshGrpcProducer.init();\n\nMap<String, String> content = new HashMap<>();\ncontent.put("content", "testAsyncMessage");\n\nCloudEvent event = CloudEventBuilder.v1()\n  .withId(UUID.randomUUID().toString())\n  .withSubject(ExampleConstants.EVENTMESH_GRPC_ASYNC_TEST_TOPIC)\n  .withSource(URI.create("/"))\n  .withDataContentType(ExampleConstants.CLOUDEVENT_CONTENT_TYPE)\n  .withType(EventMeshCommon.CLOUD_EVENTS_PROTOCOL_NAME)\n  .withData(JsonUtils.serialize(content).getBytes(StandardCharsets.UTF_8))\n  .withExtension(Constants.EVENTMESH_MESSAGE_CONST_TTL, String.valueOf(4 * 1000))\n  .build();\neventMeshGrpcProducer.publish(event);\n')),(0,o.kt)("h3",{id:"\u540c\u6b65\u751f\u4ea7\u8005"},"\u540c\u6b65\u751f\u4ea7\u8005"),(0,o.kt)("p",null,"\u7c7b ",(0,o.kt)("inlineCode",{parentName:"p"},"EventMeshGrpcProducer")," \u5b9e\u73b0\u4e86 ",(0,o.kt)("inlineCode",{parentName:"p"},"requestReply")," \u65b9\u6cd5\u3002",(0,o.kt)("inlineCode",{parentName:"p"},"requestReply")," \u65b9\u6cd5\u63a5\u6536\u5c06\u88ab\u53d1\u5e03\u7684\u6d88\u606f\u548c\u4e00\u4e2a\u53ef\u9009\u7684 timeout \u503c\u3002\u65b9\u6cd5\u4f1a\u8fd4\u56de\u6d88\u8d39\u8005\u8fd4\u56de\u7684\u6d88\u606f\u3002\u6d88\u606f\u5e94\u662f\u4e0b\u5217\u7c7b\u7684\u4e00\u4e2a\u5b9e\u4f8b\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"org.apache.eventmesh.common.EventMeshMessage")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"io.cloudevents.CloudEvent"))),(0,o.kt)("h3",{id:"\u6279\u91cf\u751f\u4ea7\u8005"},"\u6279\u91cf\u751f\u4ea7\u8005"),(0,o.kt)("p",null,"\u7c7b ",(0,o.kt)("inlineCode",{parentName:"p"},"EventMeshGrpcProducer")," \u91cd\u5199\u4e86 ",(0,o.kt)("inlineCode",{parentName:"p"},"publish")," \u65b9\u6cd5\uff0c\u8be5\u65b9\u6cd5\u63a5\u6536\u4e00\u4e2a\u5c06\u88ab\u53d1\u5e03\u7684\u6d88\u606f\u5217\u8868\u548c\u4e00\u4e2a\u53ef\u9009\u7684 timeout \u503c\u3002\u5217\u8868\u4e2d\u7684\u6d88\u606f\u5e94\u662f\u4e0b\u5217\u7c7b\u7684\u4e00\u4e2a\u5b9e\u4f8b\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"org.apache.eventmesh.common.EventMeshMessage")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"io.cloudevents.CloudEvent"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'/* ... */\nList<CloudEvent> cloudEventList = new ArrayList<>();\nfor (int i = 0; i < 5; i++) {\n  CloudEvent event = CloudEventBuilder.v1()\n    .withId(UUID.randomUUID().toString())\n    .withSubject(ExampleConstants.EVENTMESH_GRPC_ASYNC_TEST_TOPIC)\n    .withSource(URI.create("/"))\n    .withDataContentType(ExampleConstants.CLOUDEVENT_CONTENT_TYPE)\n    .withType(EventMeshCommon.CLOUD_EVENTS_PROTOCOL_NAME)\n    .withData(JsonUtils.serialize(content).getBytes(StandardCharsets.UTF_8))\n    .withExtension(Constants.EVENTMESH_MESSAGE_CONST_TTL, String.valueOf(4 * 1000))\n    .build();\n\n  cloudEventList.add(event);\n}\n\neventMeshGrpcProducer.publish(cloudEventList);\n/* ... */\n')))}u.isMDXComponent=!0}}]);