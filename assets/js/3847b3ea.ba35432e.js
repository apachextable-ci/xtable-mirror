"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[581],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(n),m=a,f=u["".concat(s,".").concat(m)]||u[m]||d[m]||l;return n?r.createElement(f,o(o({ref:t},c),{},{components:n})):r.createElement(f,o({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:a,o[1]=i;for(var p=2;p<l;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1959:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const l={},o="Installation",i={unversionedId:"setup",id:"setup",title:"Installation",description:"This page covers the essential steps to setup Onetable in your environment.",source:"@site/docs/setup.md",sourceDirName:".",slug:"/setup",permalink:"/docs/setup",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/setup.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",next:{title:"Creating your first interoperable table",permalink:"/docs/how-to"}},s={},p=[{value:"Pre-requisites",id:"pre-requisites",level:2},{value:"Steps",id:"steps",level:2},{value:"Building the project",id:"building-the-project",level:4},{value:"Install the package",id:"install-the-package",level:4},{value:"Next Steps",id:"next-steps",level:2}],c={toc:p},u="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"installation"},"Installation"),(0,a.kt)("p",null,"This page covers the essential steps to setup Onetable in your environment."),(0,a.kt)("h2",{id:"pre-requisites"},"Pre-requisites"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Building the project requires Java 11 and Maven to be setup and configured using PATH or environment variables. "),(0,a.kt)("li",{parentName:"ol"},"Clone the Onetable project github ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/onetable-io/onetable"},"repository")," in your environment.")),(0,a.kt)("h2",{id:"steps"},"Steps"),(0,a.kt)("h4",{id:"building-the-project"},"Building the project"),(0,a.kt)("p",null,"Once the project is successfully cloned in your environment, you can build the project using the below command."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell",metastring:'md title=="shell"',md:!0,title:""},"mvn clean package\n")),(0,a.kt)("h4",{id:"install-the-package"},"Install the package"),(0,a.kt)("p",null,"Once the code is compiled, you can install the jar locally."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell",metastring:'md title=="shell"',md:!0,title:""},"mvn clean install\n")),(0,a.kt)("p",null,"For more information on the steps, follow the project's github ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/onetable-io/onetable/blob/main/README.md"},"README.md")," "),(0,a.kt)("h2",{id:"next-steps"},"Next Steps"),(0,a.kt)("p",null,"See the ",(0,a.kt)("a",{parentName:"p",href:"https://link/to/quickstart"},"Quickstart")," guide to learn to use Onetable to add interoperability between\ndifferent table formats."))}d.isMDXComponent=!0}}]);