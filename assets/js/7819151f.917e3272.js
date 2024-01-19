"use strict";(self.webpackChunknewdocs=self.webpackChunknewdocs||[]).push([[4786],{24670:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>a,contentTitle:()=>d,default:()=>h,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var t=i(85893),r=i(11151);const s={sidebar_position:22},d="Daemonizing .predict with listeners",o={id:"docs/walkthrough/daemonizing_models_with_listeners",title:"Daemonizing .predict with listeners",description:"In many AI applications, it's important that a catalogue of predictions is maintained for",source:"@site/content/docs/walkthrough/daemonizing_models_with_listeners.md",sourceDirName:"docs/walkthrough",slug:"/docs/walkthrough/daemonizing_models_with_listeners",permalink:"/docs/docs/walkthrough/daemonizing_models_with_listeners",draft:!1,unlisted:!1,editUrl:"https://github.com/SuperDuperDB/superduperdb/blob/main/docs/hr/content/docs/walkthrough/daemonizing_models_with_listeners.md",tags:[],version:"current",sidebarPosition:22,frontMatter:{sidebar_position:22},sidebar:"tutorialSidebar",previous:{title:"Applying models and predictors to data",permalink:"/docs/docs/walkthrough/apply_models"},next:{title:"Training models directly on your datastore",permalink:"/docs/docs/walkthrough/training_models"}},a={},c=[{value:"Creating listeners in-line with <code>.predict</code>",id:"creating-listeners-in-line-with-predict",level:2},{value:"Procedural API",id:"procedural-api",level:3},{value:"Declarative API",id:"declarative-api",level:3},{value:"Outcome",id:"outcome",level:2}];function l(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.h1,{id:"daemonizing-predict-with-listeners",children:["Daemonizing ",(0,t.jsx)(n.code,{children:".predict"})," with listeners"]}),"\n",(0,t.jsx)(n.p,{children:"In many AI applications, it's important that a catalogue of predictions is maintained for\nall data in the database, updated as soon after data-updates and streaming inserts as possible."}),"\n",(0,t.jsxs)(n.p,{children:["In order to allow developers to implement this functionality, ",(0,t.jsx)(n.code,{children:"superduperdb"})," offers\nthe ",(0,t.jsx)(n.code,{children:"Listener"})," abstraction."]}),"\n",(0,t.jsxs)(n.h2,{id:"creating-listeners-in-line-with-predict",children:["Creating listeners in-line with ",(0,t.jsx)(n.code,{children:".predict"})]}),"\n",(0,t.jsx)(n.h3,{id:"procedural-api",children:"Procedural API"}),"\n",(0,t.jsxs)(n.p,{children:["To create a ",(0,t.jsx)(n.code,{children:"Listener"}),", when applying a ",(0,t.jsx)(n.code,{children:"Predictor"})," instance to ",(0,t.jsx)(n.code,{children:"db"}),", the following\nprocedural pattern applies:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"my_model.predict(\n    X='<input-field>',\n    db=db,\n    select=query,\n    listen=True,\n)\n"})}),"\n",(0,t.jsx)(n.h3,{id:"declarative-api",children:"Declarative API"}),"\n",(0,t.jsx)(n.p,{children:"This is equivalent to:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"db.add(\n    Listener(\n        model=my_model,\n        key='my-key',\n        select=<query>,\n        predict_kwargs={**<model_dot_predict_kwargs>},\n    )\n)\n"})}),"\n",(0,t.jsx)(n.h2,{id:"outcome",children:"Outcome"}),"\n",(0,t.jsxs)(n.p,{children:["If a ",(0,t.jsx)(n.code,{children:"Listener"})," has been created, whenever new data is added to ",(0,t.jsx)(n.code,{children:"db"}),",\nthe ",(0,t.jsx)(n.code,{children:"Predictor"})," instance is loaded and predictions are evaluated on the inserted data."]}),"\n",(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsxs)(n.p,{children:["In MongoDB, if ",(0,t.jsx)(n.a,{href:"/docs/docs/production/change_data_capture",children:"change-data-capture (CDC)"})," has been configured,\ndata may even be inserted from third-party clients such as ",(0,t.jsx)(n.code,{children:"pymongo"}),", and is nonetheless still processed\nby configured ",(0,t.jsx)(n.code,{children:"Listeners"})," via the CDC service."]})})]})}function h(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},11151:(e,n,i)=>{i.d(n,{Z:()=>o,a:()=>d});var t=i(67294);const r={},s=t.createContext(r);function d(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);