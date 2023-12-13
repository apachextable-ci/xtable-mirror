"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[8355],{8268:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>c,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var a=n(5893),r=n(1151);const i={sidebar_position:1,title:"Amazon Athena"},s="Querying from Amazon Athena",o={id:"athena",title:"Amazon Athena",description:"To read a OneTable synced target table (regardless of the table format) in Amazon Athena,",source:"@site/docs/athena.md",sourceDirName:".",slug:"/athena",permalink:"/docs/athena",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Amazon Athena"},sidebar:"docs",previous:{title:"Query Engines",permalink:"/docs/query-engines-index"},next:{title:"Amazon Redshift Spectrum",permalink:"/docs/redshift"}},l={},d=[];function h(e){const t={a:"a",admonition:"admonition",h1:"h1",li:"li",p:"p",ul:"ul",...(0,r.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h1,{id:"querying-from-amazon-athena",children:"Querying from Amazon Athena"}),"\n",(0,a.jsx)(t.p,{children:"To read a OneTable synced target table (regardless of the table format) in Amazon Athena,\nyou can create the table either by:"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["Using a DDL statement as mentioned in the following AWS docs:","\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"https://docs.aws.amazon.com/athena/latest/ug/querying-hudi.html#querying-hudi-in-athena-creating-hudi-tables",children:"Example"})," for Hudi"]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"https://docs.aws.amazon.com/athena/latest/ug/delta-lake-tables.html#delta-lake-tables-getting-started",children:"Example"})," for Delta Lake"]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"https://docs.aws.amazon.com/athena/latest/ug/querying-iceberg-creating-tables.html#querying-iceberg-creating-tables-query-editor",children:"Example"})," for Iceberg"]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(t.li,{children:"Or maintain the tables in Glue Data Catalog"}),"\n"]}),"\n",(0,a.jsxs)(t.p,{children:["For an end to end tutorial that walks through S3, Glue Data Catalog and Athena to query a OneTable synced table,\nyou can refer to the OneTable ",(0,a.jsx)(t.a,{href:"/docs/glue-catalog",children:"Glue Data Catalog Guide"}),"."]}),"\n",(0,a.jsx)(t.admonition,{title:"LIMITATION for Hudi target format:",type:"danger",children:(0,a.jsxs)(t.p,{children:["To validate the Hudi targetFormat table results, you need to ensure that the query engine that you're using\nsupports Hudi version 0.14.0 as mentioned ",(0,a.jsx)(t.a,{href:"/docs/features-and-limitations#hudi",children:"here"}),".\nCurrently, Athena ",(0,a.jsx)(t.a,{href:"https://docs.aws.amazon.com/athena/latest/ug/querying-hudi.html",children:"only supports 0.12.2"}),"\nin Athena engine version 3, so querying Hudi targetFormat tables from Athena will not work."]})})]})}function c(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>o,a:()=>s});var a=n(7294);const r={},i=a.createContext(r);function s(e){const t=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),a.createElement(i.Provider,{value:t},e.children)}}}]);