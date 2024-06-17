"use strict";(self.webpackChunknewdocs=self.webpackChunknewdocs||[]).push([[8597],{1458:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>u,toc:()=>c});var a=n(4848),r=n(8453),s=n(9489),l=n(7227);const o={sidebar_label:"Get LLM Finetuning Data"},i="Get LLM Finetuning Data",u={id:"reusable_snippets/get_llm_finetuning_data",title:"get_llm_finetuning_data",description:"The following are examples of training data in different formats.",source:"@site/content/reusable_snippets/get_llm_finetuning_data.md",sourceDirName:"reusable_snippets",slug:"/reusable_snippets/get_llm_finetuning_data",permalink:"/docs/reusable_snippets/get_llm_finetuning_data",draft:!1,unlisted:!1,editUrl:"https://github.com/SuperDuperDB/superduperdb/blob/main/docs/hr/content/reusable_snippets/get_llm_finetuning_data.md",tags:[],version:"current",frontMatter:{sidebar_label:"Get LLM Finetuning Data"}},d={},c=[];function p(e){const t={code:"code",h1:"h1",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h1,{id:"get-llm-finetuning-data",children:"Get LLM Finetuning Data"}),"\n",(0,a.jsx)(t.p,{children:"The following are examples of training data in different formats."}),"\n",(0,a.jsxs)(s.A,{children:[(0,a.jsx)(l.A,{value:"Text",label:"Text",default:!0,children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-python",children:'from datasets import load_dataset\nfrom superduperdb.base.document import Document\ndataset_name = "timdettmers/openassistant-guanaco"\ndataset = load_dataset(dataset_name)\n\ntrain_dataset = dataset["train"]\neval_dataset = dataset["test"]\n\ntrain_documents = [\n    Document({**example, "_fold": "train"})\n    for example in train_dataset\n]\neval_documents = [\n    Document({**example, "_fold": "valid"})\n    for example in eval_dataset\n]\n\ndatas = train_documents + eval_documents        \n'})})}),(0,a.jsx)(l.A,{value:"Prompt-Response",label:"Prompt-Response",default:!0,children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-python",children:'from datasets import load_dataset\nfrom superduperdb.base.document import Document\ndataset_name = "mosaicml/instruct-v3"\ndataset = load_dataset(dataset_name)\n\ntrain_dataset = dataset["train"]\neval_dataset = dataset["test"]\n\ntrain_documents = [\n    Document({**example, "_fold": "train"})\n    for example in train_dataset\n]\neval_documents = [\n    Document({**example, "_fold": "valid"})\n    for example in eval_dataset\n]\n\ndatas = train_documents + eval_documents        \n'})})}),(0,a.jsx)(l.A,{value:"Chat",label:"Chat",default:!0,children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-python",children:'from datasets import load_dataset\nfrom superduperdb.base.document import Document\ndataset_name = "philschmid/dolly-15k-oai-style"\ndataset = load_dataset(dataset_name)[\'train\'].train_test_split(0.9)\n\ntrain_dataset = dataset["train"]\neval_dataset = dataset["test"]\n\ntrain_documents = [\n    Document({**example, "_fold": "train"})\n    for example in train_dataset\n]\neval_documents = [\n    Document({**example, "_fold": "valid"})\n    for example in eval_dataset\n]\n\ndatas = train_documents + eval_documents        \n'})})})]}),"\n",(0,a.jsx)(t.p,{children:"We can define different training parameters to handle this type of data."}),"\n",(0,a.jsxs)(s.A,{children:[(0,a.jsx)(l.A,{value:"Text",label:"Text",default:!0,children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-python",children:"# Function for transformation after extracting data from the database\ntransform = None\nkey = ('text')\ntraining_kwargs=dict(dataset_text_field=\"text\")        \n"})})}),(0,a.jsx)(l.A,{value:"Prompt-Response",label:"Prompt-Response",default:!0,children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-python",children:"# Function for transformation after extracting data from the database\ndef transform(prompt, response):\n    return {'text': prompt + response + \"</s>\"}\n\nkey = ('prompt', 'response')\ntraining_kwargs=dict(dataset_text_field=\"text\")        \n"})})}),(0,a.jsx)(l.A,{value:"Chat",label:"Chat",default:!0,children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-python",children:"# Function for transformation after extracting data from the database\ntransform = None\n\nkey = ('messages')\ntraining_kwargs=None        \n"})})})]}),"\n",(0,a.jsx)(t.p,{children:"Example input_text and output_text"}),"\n",(0,a.jsxs)(s.A,{children:[(0,a.jsx)(l.A,{value:"Text",label:"Text",default:!0,children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-python",children:'data = datas[0]\ninput_text, output_text = data["text"].rsplit("### Assistant: ", maxsplit=1)\ninput_text += "### Assistant: "\noutput_text = output_text.rsplit("### Human:")[0]\nprint("Input: --------------")\nprint(input_text)\nprint("Response: --------------")\nprint(output_text)        \n'})})}),(0,a.jsx)(l.A,{value:"Prompt-Response",label:"Prompt-Response",default:!0,children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-python",children:'data = datas[0]\ninput_text = data["prompt"]\noutput_text = data["response"]\nprint("Input: --------------")\nprint(input_text)\nprint("Response: --------------")\nprint(output_text)        \n'})})}),(0,a.jsx)(l.A,{value:"Chat",label:"Chat",default:!0,children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-python",children:'data = datas[0]\nmessages = data["messages"]\ninput_text = messages[:-1]\noutput_text = messages[-1]["content"]\nprint("Input: --------------")\nprint(input_text)\nprint("Response: --------------")\nprint(output_text)        \n'})})})]})]})}function m(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(p,{...e})}):p(e)}},7227:(e,t,n)=>{n.d(t,{A:()=>l});n(6540);var a=n(870);const r={tabItem:"tabItem_Ymn6"};var s=n(4848);function l(e){let{children:t,hidden:n,className:l}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,a.A)(r.tabItem,l),hidden:n,children:t})}},9489:(e,t,n)=>{n.d(t,{A:()=>y});var a=n(6540),r=n(870),s=n(4245),l=n(6347),o=n(6494),i=n(2814),u=n(5167),d=n(1269);function c(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??function(e){return c(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}(n);return function(e){const t=(0,u.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:n}=e;const r=(0,l.W6)(),s=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,i.aZ)(s),(0,a.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(r.location.search);t.set(s,e),r.replace({...r.location,search:t.toString()})}),[s,r])]}function h(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,s=p(e),[l,i]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:s}))),[u,c]=f({queryString:n,groupId:r}),[h,x]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,s]=(0,d.Dv)(n);return[r,(0,a.useCallback)((e=>{n&&s.set(e)}),[n,s])]}({groupId:r}),_=(()=>{const e=u??h;return m({value:e,tabValues:s})?e:null})();(0,o.A)((()=>{_&&i(_)}),[_]);return{selectedValue:l,selectValue:(0,a.useCallback)((e=>{if(!m({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);i(e),c(e),x(e)}),[c,x,s]),tabValues:s}}var x=n(1062);const _={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var b=n(4848);function g(e){let{className:t,block:n,selectedValue:a,selectValue:l,tabValues:o}=e;const i=[],{blockElementScrollPositionUntilNextRender:u}=(0,s.a_)(),d=e=>{const t=e.currentTarget,n=i.indexOf(t),r=o[n].value;r!==a&&(u(t),l(r))},c=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=i.indexOf(e.currentTarget)+1;t=i[n]??i[0];break}case"ArrowLeft":{const n=i.indexOf(e.currentTarget)-1;t=i[n]??i[i.length-1];break}}t?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":n},t),children:o.map((e=>{let{value:t,label:n,attributes:s}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:a===t?0:-1,"aria-selected":a===t,ref:e=>i.push(e),onKeyDown:c,onClick:d,...s,className:(0,r.A)("tabs__item",_.tabItem,s?.className,{"tabs__item--active":a===t}),children:n??t},t)}))})}function v(e){let{lazy:t,children:n,selectedValue:r}=e;const s=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=s.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:s.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r})))})}function j(e){const t=h(e);return(0,b.jsxs)("div",{className:(0,r.A)("tabs-container",_.tabList),children:[(0,b.jsx)(g,{...e,...t}),(0,b.jsx)(v,{...e,...t})]})}function y(e){const t=(0,x.A)();return(0,b.jsx)(j,{...e,children:c(e.children)},String(t))}},8453:(e,t,n)=>{n.d(t,{R:()=>l,x:()=>o});var a=n(6540);const r={},s=a.createContext(r);function l(e){const t=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),a.createElement(s.Provider,{value:t},e.children)}}}]);