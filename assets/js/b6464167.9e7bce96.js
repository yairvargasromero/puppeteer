"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[406762],{603905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var n=r(667294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},p=Object.keys(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),c=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(i.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,p=e.originalType,i=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=c(r),d=a,f=m["".concat(i,".").concat(d)]||m[d]||s[d]||p;return r?n.createElement(f,l(l({ref:t},u),{},{components:r})):n.createElement(f,l({ref:t},u))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var p=r.length,l=new Array(p);l[0]=m;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var c=2;c<p;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},798604:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>s,frontMatter:()=>p,metadata:()=>o,toc:()=>c});var n=r(487462),a=(r(667294),r(603905));const p={sidebar_label:"Page.$"},l="Page.$() method",o={unversionedId:"api/puppeteer.page._",id:"version-15.4.0/api/puppeteer.page._",title:"Page.$() method",description:"Runs document.querySelector within the page. If no element matches the selector, the return value resolves to null.",source:"@site/versioned_docs/version-15.4.0/api/puppeteer.page._.md",sourceDirName:"api",slug:"/api/puppeteer.page._",permalink:"/15.4.0/api/puppeteer.page._",draft:!1,tags:[],version:"15.4.0",frontMatter:{sidebar_label:"Page.$"},sidebar:"sidebar",previous:{title:"Page",permalink:"/15.4.0/api/puppeteer.page"},next:{title:"Page.$$",permalink:"/15.4.0/api/puppeteer.page.__"}},i={},c=[{value:"Parameters",id:"parameters",level:2}],u={toc:c};function s(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"page-method"},"Page.$() method"),(0,a.kt)("p",null,"Runs ",(0,a.kt)("inlineCode",{parentName:"p"},"document.querySelector")," within the page. If no element matches the selector, the return value resolves to ",(0,a.kt)("inlineCode",{parentName:"p"},"null"),"."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Signature:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"class Page {\n  $<Selector extends string>(\n    selector: Selector\n  ): Promise<ElementHandle<NodeFor<Selector>> | null>;\n}\n")),(0,a.kt)("h2",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"selector"),(0,a.kt)("td",{parentName:"tr",align:null},"Selector"),(0,a.kt)("td",{parentName:"tr",align:null},"A ",(0,a.kt)("code",null,"selector")," to query page for ",(0,a.kt)("a",{parentName:"td",href:"https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors"},"selector")," to query page for.")))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Returns:")),(0,a.kt)("p",null,"Promise","<",(0,a.kt)("a",{parentName:"p",href:"/15.4.0/api/puppeteer.elementhandle"},"ElementHandle"),"<",(0,a.kt)("a",{parentName:"p",href:"/15.4.0/api/puppeteer.nodefor"},"NodeFor"),"<","Selector",">",">"," ","|"," null",">"))}s.isMDXComponent=!0}}]);