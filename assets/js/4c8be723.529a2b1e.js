"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[262],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>h});var r=a(7294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,l=function(e,t){if(null==e)return{};var a,r,l={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var i=r.createContext({}),u=function(e){var t=r.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=u(e.components);return r.createElement(i.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var a=e.components,l=e.mdxType,n=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(a),p=l,h=d["".concat(i,".").concat(p)]||d[p]||m[p]||n;return a?r.createElement(h,o(o({ref:t},c),{},{components:a})):r.createElement(h,o({ref:t},c))}));function h(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var n=a.length,o=new Array(n);o[0]=p;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[d]="string"==typeof e?e:l,o[1]=s;for(var u=2;u<n;u++)o[u]=a[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}p.displayName="MDXCreateElement"},5162:(e,t,a)=>{a.d(t,{Z:()=>o});var r=a(7294),l=a(6010);const n={tabItem:"tabItem_Ymn6"};function o(e){let{children:t,hidden:a,className:o}=e;return r.createElement("div",{role:"tabpanel",className:(0,l.Z)(n.tabItem,o),hidden:a},t)}},4866:(e,t,a)=>{a.d(t,{Z:()=>w});var r=a(7462),l=a(7294),n=a(6010),o=a(2466),s=a(6550),i=a(1980),u=a(7392),c=a(12);function d(e){return function(e){return l.Children.map(e,(e=>{if(!e||(0,l.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:r,default:l}}=e;return{value:t,label:a,attributes:r,default:l}}))}function m(e){const{values:t,children:a}=e;return(0,l.useMemo)((()=>{const e=t??d(a);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function p(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:a}=e;const r=(0,s.k6)(),n=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,i._X)(n),(0,l.useCallback)((e=>{if(!n)return;const t=new URLSearchParams(r.location.search);t.set(n,e),r.replace({...r.location,search:t.toString()})}),[n,r])]}function g(e){const{defaultValue:t,queryString:a=!1,groupId:r}=e,n=m(e),[o,s]=(0,l.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=a.find((e=>e.default))??a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:n}))),[i,u]=h({queryString:a,groupId:r}),[d,g]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,n]=(0,c.Nk)(a);return[r,(0,l.useCallback)((e=>{a&&n.set(e)}),[a,n])]}({groupId:r}),b=(()=>{const e=i??d;return p({value:e,tabValues:n})?e:null})();(0,l.useLayoutEffect)((()=>{b&&s(b)}),[b]);return{selectedValue:o,selectValue:(0,l.useCallback)((e=>{if(!p({value:e,tabValues:n}))throw new Error(`Can't select invalid tab value=${e}`);s(e),u(e),g(e)}),[u,g,n]),tabValues:n}}var b=a(2389);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function y(e){let{className:t,block:a,selectedValue:s,selectValue:i,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,o.o5)(),m=e=>{const t=e.currentTarget,a=c.indexOf(t),r=u[a].value;r!==s&&(d(t),i(r))},p=e=>{let t=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const a=c.indexOf(e.currentTarget)+1;t=c[a]??c[0];break}case"ArrowLeft":{const a=c.indexOf(e.currentTarget)-1;t=c[a]??c[c.length-1];break}}t?.focus()};return l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,n.Z)("tabs",{"tabs--block":a},t)},u.map((e=>{let{value:t,label:a,attributes:o}=e;return l.createElement("li",(0,r.Z)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:e=>c.push(e),onKeyDown:p,onClick:m},o,{className:(0,n.Z)("tabs__item",f.tabItem,o?.className,{"tabs__item--active":s===t})}),a??t)})))}function k(e){let{lazy:t,children:a,selectedValue:r}=e;const n=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=n.find((e=>e.props.value===r));return e?(0,l.cloneElement)(e,{className:"margin-top--md"}):null}return l.createElement("div",{className:"margin-top--md"},n.map(((e,t)=>(0,l.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function v(e){const t=g(e);return l.createElement("div",{className:(0,n.Z)("tabs-container",f.tabList)},l.createElement(y,(0,r.Z)({},e,t)),l.createElement(k,(0,r.Z)({},e,t)))}function w(e){const t=(0,b.Z)();return l.createElement(v,(0,r.Z)({key:String(t)},e))}},6178:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>s,metadata:()=>u,toc:()=>d});var r=a(7462),l=(a(7294),a(3905)),n=a(4866),o=a(5162);const s={sidebar_position:2},i="Glue Data Catalog",u={unversionedId:"glue-catalog",id:"glue-catalog",title:"Glue Data Catalog",description:"This document walks through the steps to register a Onetable synced table in Glue Data Catalog on AWS.",source:"@site/docs/glue-catalog.md",sourceDirName:".",slug:"/glue-catalog",permalink:"/docs/glue-catalog",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/glue-catalog.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"docs",previous:{title:"Hive Metastore",permalink:"/docs/hms"},next:{title:"Unity Catalog",permalink:"/docs/unity-catalog"}},c={},d=[{value:"Pre-requisites",id:"pre-requisites",level:2},{value:"Steps",id:"steps",level:2},{value:"Running sync",id:"running-sync",level:3},{value:"Register the target table in Glue Data Catalog",id:"register-the-target-table-in-glue-data-catalog",level:3},{value:"Validating the results",id:"validating-the-results",level:3},{value:"Conclusion",id:"conclusion",level:2}],m={toc:d},p="wrapper";function h(e){let{components:t,...a}=e;return(0,l.kt)(p,(0,r.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"glue-data-catalog"},"Glue Data Catalog"),(0,l.kt)("p",null,"This document walks through the steps to register a Onetable synced table in Glue Data Catalog on AWS."),(0,l.kt)("h2",{id:"pre-requisites"},"Pre-requisites"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Source table(s) (Hudi/Delta/Iceberg) already written to Amazon S3.\nIf you don't have the source table written in S3 already,\nyou can follow the steps in ",(0,l.kt)("a",{parentName:"li",href:"https://link-to-how-to/create-dataset.md"},"this")," tutorial to set it up"),(0,l.kt)("li",{parentName:"ol"},"Setup access to interact with AWS APIs from the command line.\nIf you haven\u2019t installed AWSCLIv2, you do so by following the steps outlined in\n",(0,l.kt)("a",{parentName:"li",href:"https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html"},"AWS docs")," and\nalso set up access credentials by following the steps\n",(0,l.kt)("a",{parentName:"li",href:"https://docs.aws.amazon.com/cli/latest/userguide/getting-started-quickstart.html"},"here")),(0,l.kt)("li",{parentName:"ol"},"Clone the Onetable ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/onetable-io/onetable"},"repository")," and create the\n",(0,l.kt)("inlineCode",{parentName:"li"},"utilities-0.1.0-SNAPSHOT-bundled.jar")," by following the steps on the ",(0,l.kt)("a",{parentName:"li",href:"https://link/to/installation/page"},"Installation page"))),(0,l.kt)("h2",{id:"steps"},"Steps"),(0,l.kt)("h3",{id:"running-sync"},"Running sync"),(0,l.kt)("p",null,"Create ",(0,l.kt)("inlineCode",{parentName:"p"},"my_config.yaml")," in the cloned Onetable directory."),(0,l.kt)(n.Z,{groupId:"table-format",defaultValue:"hudi",values:[{label:"targetFormat: HUDI",value:"hudi"},{label:"targetFormat: DELTA",value:"delta"},{label:"targetFormat: ICEBERG",value:"iceberg"}],mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"hudi",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'md title="yaml"',md:!0,title:'"yaml"'},"sourceFormat: DELTA|ICEBERG # choose only one\ntargetFormats:\n  - HUDI\ndatasets:\n  -\n    tableBasePath: s3://path/to/source/data\n    tableName: table_name\n    partitionSpec: partitionpath:VALUE\n"))),(0,l.kt)(o.Z,{value:"delta",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'md title="yaml"',md:!0,title:'"yaml"'},"sourceFormat: HUDI|ICEBERG # choose only one\ntargetFormats:\n  - DELTA\ndatasets:\n  -\n    tableBasePath: s3://path/to/source/data\n    tableName: table_name\n    partitionSpec: partitionpath:VALUE\n"))),(0,l.kt)(o.Z,{value:"iceberg",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'md title="yaml"',md:!0,title:'"yaml"'},"sourceFormat: HUDI|DELTA # choose only one\ntargetFormats:\n  - ICEBERG\ndatasets:\n  -\n    tableBasePath: s3://path/to/source/data\n    tableName: table_name\n    partitionSpec: partitionpath:VALUE\n")))),(0,l.kt)("admonition",{title:"Note:",type:"danger"},(0,l.kt)("p",{parentName:"admonition"},"Replace with appropriate values for ",(0,l.kt)("inlineCode",{parentName:"p"},"sourceFormat"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"tableBasePath")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"tableName")," fields.")),(0,l.kt)("p",null,"From your terminal under the cloned onetable directory, run the sync process using the below command."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell",metastring:'md title="shell"',md:!0,title:'"shell"'},"java -jar utilities/target/utilities-0.1.0-SNAPSHOT-bundled.jar -datasetConfig my_config.yaml\n")),(0,l.kt)("admonition",{title:"Note:",type:"tip"},(0,l.kt)("p",{parentName:"admonition"},"At this point, if you check your bucket path, you will be able to see the ",(0,l.kt)("inlineCode",{parentName:"p"},"hoodie"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"_delta_log"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"metadata")," directory\nwith metadata files which contains the information that helps query engines interpret the data as the target table.")),(0,l.kt)("h3",{id:"register-the-target-table-in-glue-data-catalog"},"Register the target table in Glue Data Catalog"),(0,l.kt)("p",null,"From your terminal, create a glue database."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell",metastring:'md title="shell"',md:!0,title:'"shell"'},'aws glue create-database --database-input "{\\"Name\\":\\"onetable_synced_db\\"}"\n')),(0,l.kt)("p",null,"From your terminal, create a glue crawler. Modify the ",(0,l.kt)("inlineCode",{parentName:"p"},"<yourAccountId>"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"<yourRoleName>"),"\nand ",(0,l.kt)("inlineCode",{parentName:"p"},"<path/to/your/data>"),", with appropriate values."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell",metastring:'md title="shell"',md:!0,title:'"shell"'},"export accountId=<yourAccountId>\nexport roleName=<yourRoleName>\nexport s3DataPath=s3://<path/to/source/data>\n")),(0,l.kt)(n.Z,{groupId:"table-format",defaultValue:"hudi",values:[{label:"targetFormat: HUDI",value:"hudi"},{label:"targetFormat: DELTA",value:"delta"},{label:"targetFormat: ICEBERG",value:"iceberg"}],mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"hudi",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell",metastring:'md title="shell"',md:!0,title:'"shell"'},'aws glue create-crawler --name onetable_crawler --role arn:aws:iam::${accountId}:role/service-role/${roleName} --database onetable_synced_db --targets "{\\"HudiTargets\\":[{\\"Paths\\":[\\"${s3DataPath}\\"]}]}"\n'))),(0,l.kt)(o.Z,{value:"delta",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell",metastring:'md title="shell"',md:!0,title:'"shell"'},'aws glue create-crawler --name onetable_crawler --role arn:aws:iam::${accountId}:role/service-role/${roleName} --database onetable_synced_db --targets "{\\"DeltaTargets\\":[{\\"Paths\\":[\\"${s3DataPath}\\"]}]}"\n'))),(0,l.kt)(o.Z,{value:"iceberg",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell",metastring:'md title="shell"',md:!0,title:'"shell"'},'aws glue create-crawler --name onetable_crawler --role arn:aws:iam::${accountId}:role/service-role/${roleName} --database onetable_synced_db --targets "{\\"IcebergTargets\\":[{\\"Paths\\":[\\"${s3DataPath}\\"]}]}"\n')))),(0,l.kt)("p",null,"From your terminal, run the glue crawler."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell",metastring:'md title="shell"',md:!0,title:'"shell"'}," aws glue start-crawler --name onetable_crawler\n")),(0,l.kt)("p",null,"Once the crawler succeeds, you\u2019ll be able to query this Iceberg table from Athena,\nEMR and/or Redshift query engines."),(0,l.kt)("h3",{id:"validating-the-results"},"Validating the results"),(0,l.kt)("p",null,"After the crawler runs successfully, you can inspect the catalogued tables in Glue\nand also query the table in Amazon Athena like below:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM onetable_synced_db.<table_name>;\n")),(0,l.kt)("h2",{id:"conclusion"},"Conclusion"),(0,l.kt)("p",null,"In this guide we saw how to,"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"sync a source table to create metadata for the desired target table formats using Onetable"),(0,l.kt)("li",{parentName:"ol"},"catalog the data in the target table format in Glue Data Catalog"),(0,l.kt)("li",{parentName:"ol"},"query the target table using Amazon Athena")))}h.isMDXComponent=!0}}]);