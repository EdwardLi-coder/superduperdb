"use strict";(self.webpackChunknewdocs=self.webpackChunknewdocs||[]).push([[3747],{26709:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>i,default:()=>p,frontMatter:()=>t,metadata:()=>o,toc:()=>a});var l=s(85893),r=s(11151);const t={},i="LLMs",o={id:"docs/ai_integrations/llm",title:"LLMs",description:"superduperdb allows users to work with LLM services and models",source:"@site/content/docs/ai_integrations/llm.md",sourceDirName:"docs/ai_integrations",slug:"/docs/ai_integrations/llm",permalink:"/docs/docs/ai_integrations/llm",draft:!1,unlisted:!1,editUrl:"https://github.com/SuperDuperDB/superduperdb/blob/main/docs/hr/content/docs/ai_integrations/llm.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"jina",permalink:"/docs/docs/ai_integrations/jina"},next:{title:"OpenAI",permalink:"/docs/docs/ai_integrations/openai"}},d={},a=[{value:"Basic Usage",id:"basic-usage",level:2},{value:"Quick start",id:"quick-start",level:3},{value:"Common Parameter Description",id:"common-parameter-description",level:3},{value:"<strong>prompt_template</strong>",id:"prompt_template",level:4},{value:"<strong>prompt_func</strong>",id:"prompt_func",level:4},{value:"<strong>max_batch_size</strong>",id:"max_batch_size",level:4},{value:"<strong>inference_kwargs</strong>",id:"inference_kwargs",level:4},{value:"Support Framework/API",id:"support-frameworkapi",level:2},{value:"vLLM",id:"vllm",level:3},{value:"VllmModel",id:"vllmmodel",level:4},{value:"VllmAPI",id:"vllmapi",level:4},{value:"OpenAI-style vLLM services",id:"openai-style-vllm-services",level:4},{value:"OpenAI",id:"openai",level:3},{value:"Custom Models",id:"custom-models",level:3},{value:"Non-API Type Models",id:"non-api-type-models",level:4},{value:"API Type Models",id:"api-type-models",level:4},{value:"Training",id:"training",level:2}];function c(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h1,{id:"llms",children:"LLMs"}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"superduperdb"})," allows users to work with LLM services and models"]}),"\n",(0,l.jsx)(n.p,{children:"Here's the list of supported LLM services/models:"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"vLLM"}),"\n",(0,l.jsx)(n.li,{children:"OpenAI-style API services"}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"basic-usage",children:"Basic Usage"}),"\n",(0,l.jsx)(n.h3,{id:"quick-start",children:"Quick start"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"Using a model for prediction"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-python",children:"from superduperdb.ext.llm import OpenAI\nmodel = OpenAI(model_name='gpt-3.5-turbo')\nmodel.predict(\"1+1=\")\n"})}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:(0,l.jsx)(n.strong,{children:"Using SuperDuperDB to connect ChatGPT with a database for inference"})})}),"\n",(0,l.jsx)(n.p,{children:"Create a database layer connection using SuperDuperDB"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-python",children:'from superduperdb import superduper\ndb = superduper("mongomock://test")\n'})}),"\n",(0,l.jsx)(n.p,{children:"Insert example datas"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-python",children:'from superduperdb.backends.mongodb.query import Collection\nfrom superduperdb.base.document import Document\nfrom superduperdb.components.listener import Listener\n\ndatas = [Document({"question": f"1+{i}=", "id": str(i)}) for i in range(3)]\ndb.execute(Collection(\'docs\').insert_many(datas))\n'})}),"\n",(0,l.jsx)(n.p,{children:"Add the model to the database"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-python",children:"from superduperdb.ext.llm import OpenAI\nmodel = OpenAI(model_name='gpt-4')\ndb.add(model)\n"})}),"\n",(0,l.jsxs)(n.p,{children:["Infer the ",(0,l.jsx)(n.code,{children:"question"})," field in the database"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-python",children:"model.predict(X='question', db=db, select=Collection('docs').find())\n"})}),"\n",(0,l.jsx)(n.h3,{id:"common-parameter-description",children:"Common Parameter Description"}),"\n",(0,l.jsx)(n.h4,{id:"prompt_template",children:(0,l.jsx)(n.strong,{children:"prompt_template"})}),"\n",(0,l.jsxs)(n.p,{children:["Used to define the prompt, containing two special fields, default is ",(0,l.jsx)(n.code,{children:'"{input}"'})]}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["input: Required, will be filled with the input ",(0,l.jsx)(n.code,{children:'"X"'})]}),"\n",(0,l.jsxs)(n.li,{children:["context: Optional, the ",(0,l.jsx)(n.code,{children:"Context"})," returned by SuperDuperDB, example usage can be seen in ",(0,l.jsx)(n.a,{href:"https://github.com/SuperDuperDB/superduperdb/blob/main/examples/question_the_docs_opensource.ipynb",children:"Building Private Q&A Assistant Using Mongo and Open Source Model"})]}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:"Example:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-python",children:'from superduperdb.ext.llm import OpenAI\nmodel = OpenAI(model_name=\'gpt-3.5-turbo\', prompt_template="Translate the sentence into Chinese: {input}")\nmodel.predict("Hello")\n'})}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"Hello"})," will be filled in, and then the LLM model will be called after ",(0,l.jsx)(n.code,{children:"Translate the sentence into Chinese: Hello"})," is obtained."]}),"\n",(0,l.jsx)(n.h4,{id:"prompt_func",children:(0,l.jsx)(n.strong,{children:"prompt_func"})}),"\n",(0,l.jsxs)(n.p,{children:["A function for custom prompt generation. If provided, this function will be used for prompt construction, and ",(0,l.jsx)(n.code,{children:"prompt_template"})," becomes ineffective."]}),"\n",(0,l.jsx)(n.p,{children:"Example:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-python",children:'from superduperdb.ext.llm import OpenAI\nmodel = OpenAI(model_name=\'gpt-3.5-turbo\', prompt_func=lambda x, lang:  f"Translate the sentence into {lang}: {x}")\nmodel.predict("Hello", lang="Japanese")\n'})}),"\n",(0,l.jsx)(n.h4,{id:"max_batch_size",children:(0,l.jsx)(n.strong,{children:"max_batch_size"})}),"\n",(0,l.jsx)(n.p,{children:"Controls the maximum number of concurrent requests when using API-type LLM models."}),"\n",(0,l.jsx)(n.h4,{id:"inference_kwargs",children:(0,l.jsx)(n.strong,{children:"inference_kwargs"})}),"\n",(0,l.jsx)(n.p,{children:"All defined inference parameters, which will be sent to the model or API during inference."}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-python",children:"from superduperdb.ext.llm import OpenAI\nmodel = OpenAI(model_name='gpt-3.5-turbo', inference_kwargs={'temperature': 0.7})\nmodel.predict(\"Hello\", seed=1)\n"})}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:'{"temperature": 0.7, "seed": 1}'})," will be sent to the OpenAI interface."]}),"\n",(0,l.jsxs)(n.p,{children:["Parameters defined in ",(0,l.jsx)(n.code,{children:"model.predict"})," will override those in ",(0,l.jsx)(n.code,{children:"inference_kwargs"}),", but ",(0,l.jsx)(n.code,{children:"inference_kwargs"})," will be registered in the Metadata Store."]}),"\n",(0,l.jsx)(n.h2,{id:"support-frameworkapi",children:"Support Framework/API"}),"\n",(0,l.jsx)(n.h3,{id:"vllm",children:"vLLM"}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.a,{href:"https://docs.vllm.ai/en/latest/",children:"vLLM"})," is a fast and easy-to-use library for LLM inference and serving."]}),"\n",(0,l.jsxs)(n.p,{children:["Currently, ",(0,l.jsx)(n.code,{children:"superduperdb"})," supports the following methods to use vLLM:"]}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"VllmModel"}),": Use vLLM to load models."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"VllmAPI"}),": Request services in the ",(0,l.jsx)(n.a,{href:"https://docs.vllm.ai/en/latest/getting_started/quickstart.html#api-server",children:"API server format"}),"."]}),"\n"]}),"\n",(0,l.jsx)(n.h4,{id:"vllmmodel",children:"VllmModel"}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"VllmModel"})," supports loading models locally or to a Ray cluster."]}),"\n",(0,l.jsxs)(n.p,{children:["After instantiation using ",(0,l.jsx)(n.code,{children:"model = VllmModel(....)"}),", the model is loaded lazily and begins loading only when the ",(0,l.jsx)(n.code,{children:"model.predict"})," method is called."]}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"Load Locally"})}),"\n",(0,l.jsxs)(n.p,{children:["To use this model, first install ",(0,l.jsx)(n.code,{children:"vllm"})]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"pip install vllm\n"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-python",children:'from superduperdb.ext.llm import VllmModel\nmodel = VllmModel(model_name="mistralai/Mistral-7B-Instruct-v0.2")\n'})}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"Load to a Ray Cluster"})}),"\n",(0,l.jsxs)(n.p,{children:["Requires installing ",(0,l.jsx)(n.code,{children:"ray"}),", no need for ",(0,l.jsx)(n.code,{children:"vllm"})," dependencies."]}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsxs)(n.p,{children:["Installing ",(0,l.jsx)(n.code,{children:"vllm"})," requires a CUDA environment, which can prevent clients without CUDA from installing ",(0,l.jsx)(n.code,{children:"vllm"}),". Therefore, superduperdb has adapted so that if loading to a ray cluster, local installation of ",(0,l.jsx)(n.code,{children:"vllm"})," is not required."]}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"pip install 'ray[default]'\n"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-python",children:'from superduperdb.ext.llm import VllmModel\nmodel = VllmModel(model_name="mistralai/Mistral-7B-Instruct-v0.2", ray_address="ray://ray_cluster_ip:10001")\n'})}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsxs)(n.p,{children:["If this is your first time running on that ray cluster, the wait time might be a bit longer, as ",(0,l.jsx)(n.code,{children:"vllm"})," dependencies and the corresponding model will be installed on the ray cluster's server."]}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"Parameter"})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["model_name: Same as ",(0,l.jsx)(n.code,{children:"model"})," of vLLM"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["tensor_parallel_size: Same as ",(0,l.jsx)(n.code,{children:"tensor_parallel_size"})," of vLLM"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["trust_remote_code: Same as ",(0,l.jsx)(n.code,{children:"trust_remote_code"})," of vLLM"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"vllm_kwargs: Other initialization parameters of vLLM"}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"on_ray: Whether to run on ray, default False"}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["ray_address: ray cluster address, if not empty, ",(0,l.jsx)(n.code,{children:"on_ray"})," will automatically be set to True"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.h4,{id:"vllmapi",children:"VllmAPI"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-python",children:"from superduperdb.ext.llm import VllmAPI\nmodel = VllmAPI(identifier='llm', api_url='http://localhost:8000/v1')\n"})}),"\n",(0,l.jsx)(n.h4,{id:"openai-style-vllm-services",children:"OpenAI-style vLLM services"}),"\n",(0,l.jsxs)(n.p,{children:["If you have deployed ",(0,l.jsx)(n.a,{href:"https://docs.vllm.ai/en/latest/getting_started/quickstart.html#openai-compatible-server",children:"OpenAI-style vLLM services"}),", they can be used with OpenAI as detailed in the following OpenAI format."]}),"\n",(0,l.jsx)(n.h3,{id:"openai",children:"OpenAI"}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"superduperdb"})," supports OpenAI-style API services. If parameters like ",(0,l.jsx)(n.code,{children:"openai_api_base"})," are not provided, it defaults to calling OpenAI's services."]}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"Using a custom API to initialize the model"})," (example for a vLLM-started OpenAI-style service)"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-python",children:'from superduperdb.ext.llm import OpenAI\nmodel = OpenAI(openai_api_base="http://localhost:8000/v1", model_name="mistralai/Mistral-7B-Instruct-v0.2")\n'})}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"Using OpenAI's models"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-python",children:"from superduperdb.ext.llm import OpenAI\nmodel = OpenAI()\n"})}),"\n",(0,l.jsx)(n.h3,{id:"custom-models",children:"Custom Models"}),"\n",(0,l.jsx)(n.p,{children:"If the above models do not meet your needs, you can define your own models as follows, for reference:"}),"\n",(0,l.jsx)(n.h4,{id:"non-api-type-models",children:"Non-API Type Models"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-python",children:'# https://huggingface.co/TinyLlama/TinyLlama-1.1B-Chat-v1.0\nimport dataclasses as dc\nimport torch\nfrom transformers import pipeline\n\nfrom superduperdb.ext.llm import BaseLLMModel\n\n@dc.dataclass\nclass CustomLLM(BaseLLMModel):\n    def init(self):\n        self.pipe = pipeline(\n            "text-generation",\n            model=self.model_name,\n            torch_dtype=torch.bfloat16,\n            device_map="auto",\n        )\n\n    def _generate(self, messages, **kwargs):\n        prompt = self.pipe.tokenizer.apply_chat_template(\n            messages, tokenize=False, add_generation_prompt=True\n        )\n        outputs = self.pipe(\n            prompt,\n            max_new_tokens=256,\n            do_sample=True,\n        )\n        return outputs[0]["generated_text"]\n\n\nmodel = CustomLLM(model_name="TinyLlama/TinyLlama-1.1B-Chat-v1.0")\n'})}),"\n",(0,l.jsx)(n.h4,{id:"api-type-models",children:"API Type Models"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-python",children:'import dataclasses as dc\nimport os\nfrom openai import OpenAI\nfrom superduperdb.ext.llm import BaseLLMAPI\n\n@dc.dataclass\nclass CustomModel(BaseLLMAPI):\n    def init(self):\n        # https://github.com/openai/openai-python#usage\n        self.client = OpenAI(\n            # This is the default and can be omitted\n            api_key=os.environ.get("OPENAI_API_KEY"),\n        )\n\n    def _generate(self, prompt: str, **kwargs) -> str:\n        chat_completion = self.client.chat.completions.create(\n            messages=[\n                {\n                    "role": "user",\n                    "content": prompt,\n                }\n            ],\n            model="gpt-3.5-turbo",\n        )\n        return chat_completion.choices[0].message.content\n'})}),"\n",(0,l.jsx)(n.h2,{id:"training",children:"Training"}),"\n",(0,l.jsx)(n.p,{children:"Coming soon..."})]})}function p(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(c,{...e})}):c(e)}},11151:(e,n,s)=>{s.d(n,{Z:()=>o,a:()=>i});var l=s(67294);const r={},t=l.createContext(r);function i(e){const n=l.useContext(t);return l.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),l.createElement(t.Provider,{value:n},e.children)}}}]);