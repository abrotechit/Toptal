"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[62],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var o=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=o.createContext({}),s=function(e){var t=o.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=s(e.components);return o.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(n),m=i,h=d["".concat(p,".").concat(m)]||d[m]||u[m]||a;return n?o.createElement(h,r(r({ref:t},c),{},{components:n})):o.createElement(h,r({ref:t},c))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,r=new Array(a);r[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var s=2;s<a;s++)r[s]=n[s];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5741:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>r,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var o=n(7462),i=(n(7294),n(3905));const a={sidebar_position:5},r="API",l={unversionedId:"specs/frontend-specs/api",id:"specs/frontend-specs/api",title:"API",description:"This project provides you different solutions to test your frontend implementation with an API by:",source:"@site/docs/specs/frontend-specs/api.md",sourceDirName:"specs/frontend-specs",slug:"/specs/frontend-specs/api",permalink:"/docs/specs/frontend-specs/api",draft:!1,editUrl:"https://github.com/gothinkster/realworld/tree/main/docs/docs/docs/specs/frontend-specs/api.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Tests",permalink:"/docs/specs/frontend-specs/tests"},next:{title:"Introduction",permalink:"/docs/specs/mobile-specs/introduction"}},p={},s=[{value:"Run the official backend implementation locally",id:"run-the-official-backend-implementation-locally",level:2},{value:"Host your own API",id:"host-your-own-api",level:2},{value:"Demo API",id:"demo-api",level:2},{value:"API Usage",id:"api-usage",level:3},{value:"Swagger documentation",id:"swagger-documentation",level:3},{value:"Retrieve a token",id:"retrieve-a-token",level:4},{value:"Register the token",id:"register-the-token",level:4},{value:"API Limitations",id:"api-limitations",level:2}],c={toc:s};function u(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"api"},"API"),(0,i.kt)("p",null,"This project provides you different solutions to test your frontend implementation with an API by:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#run-the-official-backend-implementation-locally"},"running our official backend implementation locally")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#host-your-own-api"},"hosting your own API")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#demo-api"},"using the API deployed for the official demo"))),(0,i.kt)("h2",{id:"run-the-official-backend-implementation-locally"},"Run the official backend implementation locally"),(0,i.kt)("p",null,"The official backend implementation is open-sourced.",(0,i.kt)("br",{parentName:"p"}),"\n","You can find the GitHub repository ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/gothinkster/node-express-prisma-v1-official-app"},"here"),".",(0,i.kt)("br",{parentName:"p"}),"\n","The Readme will provide you guidances to start the server locally."),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"We encourage you to use this implementation's ",(0,i.kt)("strong",{parentName:"p"},"main")," branch for local tests as the ",(0,i.kt)("strong",{parentName:"p"},"limited")," one includes ",(0,i.kt)("a",{parentName:"p",href:"#api-limitations"},"limitations")," aimed to protect public-hosted APIs.  ")),(0,i.kt)("h2",{id:"host-your-own-api"},"Host your own API"),(0,i.kt)("p",null,"The official backend implementation includes a ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/gothinkster/node-express-prisma-v1-official-app#deploy-to-heroku"},(0,i.kt)("strong",{parentName:"a"},"Deploy to Heroku")," button"),".",(0,i.kt)("br",{parentName:"p"}),"\n","This button provides you a quick and easy way to deploy the API on Heroku for your frontend implementation."),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"The official backend implementation repository includes two branches:"),(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},"the ",(0,i.kt)("strong",{parentName:"li"},"main")," branch which adheres to the RealWorld backend specs"),(0,i.kt)("li",{parentName:"ul"},"the ",(0,i.kt)("strong",{parentName:"li"},"limited")," branch which includes limitations for public-hosted APIs")),(0,i.kt)("p",{parentName:"admonition"},"The ",(0,i.kt)("strong",{parentName:"p"},"limited")," branch will be more suitable if you plan to host your implementation.\n",(0,i.kt)("a",{parentName:"p",href:"#api-limitations"},"Here")," is the list of the limitations.")),(0,i.kt)("h2",{id:"demo-api"},"Demo API"),(0,i.kt)("p",null,"This project provides you with a public hosted API to test your frontend implementations.",(0,i.kt)("br",{parentName:"p"}),"\n","Point your API requests to ",(0,i.kt)("inlineCode",{parentName:"p"},"https://api.realworld.io/api")," and you're good to go!"),(0,i.kt)("h3",{id:"api-usage"},"API Usage"),(0,i.kt)("p",null,"The usage of the API is free and non-limited by any kind of key."),(0,i.kt)("p",null,"The public API is currently hosted on a free plan project on Heroku.",(0,i.kt)("br",{parentName:"p"}),"\n","If the hosted API receives no traffic in 30 minutes, it will sleep. In such a situation, there will be an additional delay on the first request."),(0,i.kt)("p",null,"Non-demo Articles, Tags, and Comments are deleted on a daily basis to avoid additional costs."),(0,i.kt)("h3",{id:"swagger-documentation"},"Swagger documentation"),(0,i.kt)("p",null,"The API exposes a ",(0,i.kt)("strong",{parentName:"p"},"Swagger")," documentation on ",(0,i.kt)("inlineCode",{parentName:"p"},"https://api.realworld.io/api-docs"),"."),(0,i.kt)("p",null,"Most of the requests require a valid token."),(0,i.kt)("h4",{id:"retrieve-a-token"},"Retrieve a token"),(0,i.kt)("p",null,"You can retrieve a token by logging in or by registering."),(0,i.kt)("p",null,"Log in : ",(0,i.kt)("a",{parentName:"p",href:"https://api.realworld.io/api-docs/#/User%20and%20Authentication/Login"},"https://api.realworld.io/api-docs/#/User%20and%20Authentication/Login"),(0,i.kt)("br",{parentName:"p"}),"\n","Register: ",(0,i.kt)("a",{parentName:"p",href:"https://api.realworld.io/api-docs/#/User%20and%20Authentication/CreateUser"},"https://api.realworld.io/api-docs/#/User%20and%20Authentication/CreateUser"),"  "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Click the ",(0,i.kt)("inlineCode",{parentName:"li"},"Try it out")," button"),(0,i.kt)("li",{parentName:"ul"},"populate the body input with the related credentials"),(0,i.kt)("li",{parentName:"ul"},"Click ",(0,i.kt)("inlineCode",{parentName:"li"},"Execute")," button"),(0,i.kt)("li",{parentName:"ul"},"Copy the token from the response body")),(0,i.kt)("h4",{id:"register-the-token"},"Register the token"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Click ",(0,i.kt)("inlineCode",{parentName:"li"},"Authorize")," button on top of the Swagger documentation page"),(0,i.kt)("li",{parentName:"ul"},"Populate the field with ",(0,i.kt)("inlineCode",{parentName:"li"},"Token <generated token>"))),(0,i.kt)("h2",{id:"api-limitations"},"API Limitations"),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"To provide everyone a ",(0,i.kt)("strong",{parentName:"p"},"safe")," and ",(0,i.kt)("strong",{parentName:"p"},"healthy")," experience, the following limitations have been introduced in 2021")),(0,i.kt)("p",null,"The visibility of user content is limited :"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"logged out users see only content created by demo accounts"),(0,i.kt)("li",{parentName:"ul"},"logged in users see only their content and the content created by demo accounts")))}u.isMDXComponent=!0}}]);