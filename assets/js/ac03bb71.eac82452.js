"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[642],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(f,s(s({ref:t},p),{},{components:n})):r.createElement(f,s({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var c=2;c<o;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1536:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const o={sidebar_position:3},s="API Response format",i={unversionedId:"specs/backend-specs/api-response-format",id:"specs/backend-specs/api-response-format",title:"API Response format",description:"JSON Objects returned by API:",source:"@site/docs/specs/backend-specs/api-response-format.md",sourceDirName:"specs/backend-specs",slug:"/specs/backend-specs/api-response-format",permalink:"/docs/specs/backend-specs/api-response-format",draft:!1,editUrl:"https://github.com/gothinkster/realworld/tree/main/docs/docs/docs/specs/backend-specs/api-response-format.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Endpoints",permalink:"/docs/specs/backend-specs/endpoints"},next:{title:"Error Handling",permalink:"/docs/specs/backend-specs/error-handling"}},l={},c=[{value:"JSON Objects returned by API:",id:"json-objects-returned-by-api",level:2},{value:"Users (for authentication)",id:"users-for-authentication",level:3},{value:"Profile",id:"profile",level:3},{value:"Single Article",id:"single-article",level:3},{value:"Multiple Articles",id:"multiple-articles",level:3},{value:"Single Comment",id:"single-comment",level:3},{value:"Multiple Comments",id:"multiple-comments",level:3},{value:"List of Tags",id:"list-of-tags",level:3}],p={toc:c};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"api-response-format"},"API Response format"),(0,a.kt)("h2",{id:"json-objects-returned-by-api"},"JSON Objects returned by API:"),(0,a.kt)("p",null,"Make sure the right content type like ",(0,a.kt)("inlineCode",{parentName:"p"},"Content-Type: application/json; charset=utf-8")," is correctly returned."),(0,a.kt)("h3",{id:"users-for-authentication"},"Users (for authentication)"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-JSON"},'{\n  "user": {\n    "email": "jake@jake.jake",\n    "token": "jwt.token.here",\n    "username": "jake",\n    "bio": "I work at statefarm",\n    "image": null\n  }\n}\n')),(0,a.kt)("h3",{id:"profile"},"Profile"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-JSON"},'{\n  "profile": {\n    "username": "jake",\n    "bio": "I work at statefarm",\n    "image": "https://api.realworld.io/images/smiley-cyrus.jpg",\n    "following": false\n  }\n}\n')),(0,a.kt)("h3",{id:"single-article"},"Single Article"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-JSON"},'{\n  "article": {\n    "slug": "how-to-train-your-dragon",\n    "title": "How to train your dragon",\n    "description": "Ever wonder how?",\n    "body": "It takes a Jacobian",\n    "tagList": ["dragons", "training"],\n    "createdAt": "2016-02-18T03:22:56.637Z",\n    "updatedAt": "2016-02-18T03:48:35.824Z",\n    "favorited": false,\n    "favoritesCount": 0,\n    "author": {\n      "username": "jake",\n      "bio": "I work at statefarm",\n      "image": "https://i.stack.imgur.com/xHWG8.jpg",\n      "following": false\n    }\n  }\n}\n')),(0,a.kt)("h3",{id:"multiple-articles"},"Multiple Articles"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-JSON"},'{\n  "articles":[{\n    "slug": "how-to-train-your-dragon",\n    "title": "How to train your dragon",\n    "description": "Ever wonder how?",\n    "body": "It takes a Jacobian",\n    "tagList": ["dragons", "training"],\n    "createdAt": "2016-02-18T03:22:56.637Z",\n    "updatedAt": "2016-02-18T03:48:35.824Z",\n    "favorited": false,\n    "favoritesCount": 0,\n    "author": {\n      "username": "jake",\n      "bio": "I work at statefarm",\n      "image": "https://i.stack.imgur.com/xHWG8.jpg",\n      "following": false\n    }\n  }, {\n    "slug": "how-to-train-your-dragon-2",\n    "title": "How to train your dragon 2",\n    "description": "So toothless",\n    "body": "It a dragon",\n    "tagList": ["dragons", "training"],\n    "createdAt": "2016-02-18T03:22:56.637Z",\n    "updatedAt": "2016-02-18T03:48:35.824Z",\n    "favorited": false,\n    "favoritesCount": 0,\n    "author": {\n      "username": "jake",\n      "bio": "I work at statefarm",\n      "image": "https://i.stack.imgur.com/xHWG8.jpg",\n      "following": false\n    }\n  }],\n  "articlesCount": 2\n}\n')),(0,a.kt)("h3",{id:"single-comment"},"Single Comment"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-JSON"},'{\n  "comment": {\n    "id": 1,\n    "createdAt": "2016-02-18T03:22:56.637Z",\n    "updatedAt": "2016-02-18T03:22:56.637Z",\n    "body": "It takes a Jacobian",\n    "author": {\n      "username": "jake",\n      "bio": "I work at statefarm",\n      "image": "https://i.stack.imgur.com/xHWG8.jpg",\n      "following": false\n    }\n  }\n}\n')),(0,a.kt)("h3",{id:"multiple-comments"},"Multiple Comments"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-JSON"},'{\n  "comments": [{\n    "id": 1,\n    "createdAt": "2016-02-18T03:22:56.637Z",\n    "updatedAt": "2016-02-18T03:22:56.637Z",\n    "body": "It takes a Jacobian",\n    "author": {\n      "username": "jake",\n      "bio": "I work at statefarm",\n      "image": "https://i.stack.imgur.com/xHWG8.jpg",\n      "following": false\n    }\n  }]\n}\n')),(0,a.kt)("h3",{id:"list-of-tags"},"List of Tags"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-JSON"},'{\n  "tags": [\n    "reactjs",\n    "angularjs"\n  ]\n}\n')))}u.isMDXComponent=!0}}]);