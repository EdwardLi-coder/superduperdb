"use strict";(self.webpackChunknewdocs=self.webpackChunknewdocs||[]).push([[128],{9067:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>s,contentTitle:()=>r,default:()=>h,frontMatter:()=>d,metadata:()=>c,toc:()=>o});var t=a(4848),i=a(8453);const d={sidebar_position:16},r="Working with and inserting large pieces of data",c={id:"execute_api/using_hybrid_storage_to_handle_large_data_blobs",title:"Working with and inserting large pieces of data",description:"Some applications require large data-blobs and objects, which are either larger than the objects which are supported by the underlying database, or which will degrade performance of the database if stored directly. For example:",source:"@site/content/execute_api/using_hybrid_storage_to_handle_large_data_blobs.md",sourceDirName:"execute_api",slug:"/execute_api/using_hybrid_storage_to_handle_large_data_blobs",permalink:"/docs/execute_api/using_hybrid_storage_to_handle_large_data_blobs",draft:!1,unlisted:!1,editUrl:"https://github.com/SuperDuperDB/superduperdb/blob/main/docs/hr/content/execute_api/using_hybrid_storage_to_handle_large_data_blobs.md",tags:[],version:"current",sidebarPosition:16,frontMatter:{sidebar_position:16},sidebar:"tutorialSidebar",previous:{title:"(Optional) Setting up tables and encodings",permalink:"/docs/execute_api/data_encodings_and_schemas"},next:{title:"Working with external data sources",permalink:"/docs/execute_api/referring_to_data_from_diverse_sources"}},s={},o=[{value:"Artifact store reference with <code>encodable=&#39;artifact&#39;</code>",id:"artifact-store-reference-with-encodableartifact",level:2},{value:"Just-in-time loading with <code>encodable=&#39;lazy_artifact&#39;</code>:",id:"just-in-time-loading-with-encodablelazy_artifact",level:2},{value:"Saving files and directories to the artifact store",id:"saving-files-and-directories-to-the-artifact-store",level:2}];function l(e){const n={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"working-with-and-inserting-large-pieces-of-data",children:"Working with and inserting large pieces of data"}),"\n",(0,t.jsx)(n.p,{children:"Some applications require large data-blobs and objects, which are either larger than the objects which are supported by the underlying database, or which will degrade performance of the database if stored directly. For example:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"large images"}),"\n",(0,t.jsx)(n.li,{children:"large audio"}),"\n",(0,t.jsx)(n.li,{children:"videos"}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["In order to handle such data, SuperDuperDB provides a few options when\ncreating a ",(0,t.jsx)(n.code,{children:"DataType"})," via the ",(0,t.jsx)(n.code,{children:"encodable"})," parameter."]}),"\n",(0,t.jsxs)(n.h2,{id:"artifact-store-reference-with-encodableartifact",children:["Artifact store reference with ",(0,t.jsx)(n.code,{children:"encodable='artifact'"})]}),"\n",(0,t.jsxs)(n.p,{children:["When creating a ",(0,t.jsx)(n.code,{children:"DataType"})," with ",(0,t.jsx)(n.code,{children:"encodable='artifact'"}),",\nthe data encoded by the ",(0,t.jsx)(n.code,{children:"DataType"})," is saved to the ",(0,t.jsx)(n.code,{children:"db.artifact_store"}),"\nand a reference in saved in the ",(0,t.jsx)(n.code,{children:"db.databackend"})]}),"\n",(0,t.jsx)(n.p,{children:"For example, if you try the following snippet:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"import pickle\nimport uuid\nfrom superduperdb import DataType, Document, superduper\n\ndb = superduper('mongomock://test', artifact_store='filesystem://./artifacts')\n\ndt = DataType(\n    'my-artifact',\n    encoder=lambda x, info: pickle.dumps(x),\n    decoder=lambda x, info: pickle.loads(x),\n    encodable='artifact',\n)\n\ndb.apply(dt)\n\nmy_id = str(uuid.uuid4())\n\ndb['my_collection'].insert_one(Document({'id': my_id, 'x': dt('This is a test')})).execute()\n"})}),"\n",(0,t.jsx)(n.p,{children:"If you now reload the data with this query:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:">>> r = db.execute(my_collection.find_one({'id': my_id}))\n>>> r\nDocument({'id': '9458a837-3192-43a0-8c27-e2fbe72de74c', 'x': Artifact(file_id='866cf8526595d3620d6045172fb16d1efefac4b1', datatype=DataType(identifier='my-artifact', encoder=<function <lambda> at 0x15739e700>, decoder=<function <lambda> at 0x15739e520>, info=None, shape=None, directory=None, encodable='artifact', bytes_encoding=<BytesEncoding.BYTES: 'Bytes'>, media_type=None), uri=None, sha1=None, x='This is a test', artifact=False), '_fold': 'train', '_id': ObjectId('661aecc8ecd56c75bfd3add3')})\n>>> r.unpack()\n{'id': '9458a837-3192-43a0-8c27-e2fbe72de74c',\n 'x': 'This is a test',\n '_fold': 'train',\n '_id': ObjectId('661aecc8ecd56c75bfd3add3')}\n"})}),"\n",(0,t.jsxs)(n.p,{children:["You will see that ",(0,t.jsx)(n.code,{children:"r['x']"})," is exactly ",(0,t.jsx)(n.code,{children:"'This is a test'"}),", however,\nwith a native MongoDB query, you will find the data for ",(0,t.jsx)(n.code,{children:"'x'"})," missing:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:">>> db.databackend.conn.test.my_collection.find_one() \n{'id': '9458a837-3192-43a0-8c27-e2fbe72de74c',\n 'x': {'_content': {'bytes': None,\n   'datatype': 'my-artifact',\n   'leaf_type': 'artifact',\n   'sha1': None,\n   'uri': None,\n   'file_id': '866cf8526595d3620d6045172fb16d1efefac4b1'}},\n '_fold': 'train',\n '_id': ObjectId('661aecc8ecd56c75bfd3add3')}\n"})}),"\n",(0,t.jsxs)(n.p,{children:["This is because the data is stored in the filesystem/ artifact store ",(0,t.jsx)(n.code,{children:"./artifacts"}),".\nYou may verify that with this command:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"iconv -f ISO-8859-1 -t UTF-8 artifacts/866cf8526595d3620d6045172fb16d1efefac4b1\n"})}),"\n",(0,t.jsx)(n.p,{children:"The SuperDuperDB query reloads the data and passes it to the query result,\nwithout any user intervention."}),"\n",(0,t.jsxs)(n.h2,{id:"just-in-time-loading-with-encodablelazy_artifact",children:["Just-in-time loading with ",(0,t.jsx)(n.code,{children:"encodable='lazy_artifact'"}),":"]}),"\n",(0,t.jsxs)(n.p,{children:["If you specify ",(0,t.jsx)(n.code,{children:"encodable='lazy_artifact'"}),", then the data\nis only loaded when a user calls the ",(0,t.jsx)(n.code,{children:".unpack()"})," method.\nThis can be useful if the datapoints are very large,\nand should only be loaded when absolutely necessary."]}),"\n",(0,t.jsxs)(n.p,{children:["Try replacing the creation of ",(0,t.jsx)(n.code,{children:"dt"})," with this command:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"dt = DataType(\n    'my-artifact',\n    encoder=lambda x, info: pickle.dumps(x),\n    decoder=lambda x, info: pickle.loads(x),\n    encodable='lazy-artifact',\n)\n"})}),"\n",(0,t.jsx)(n.p,{children:"and then execute the same lines as before.\nYou will find that:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:">>> r = db.execute(my_collection.find_one({'id': my_id}))\n>>> r['x'].x\n<EMPTY>\n"})}),"\n",(0,t.jsxs)(n.p,{children:["However, after calling ",(0,t.jsx)(n.code,{children:".unpack(db)"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:">>> r = r.unpack(db)\n>>> r['x']\n'This is a test'\n"})}),"\n",(0,t.jsxs)(n.p,{children:["This allows ",(0,t.jsx)(n.code,{children:"superduperdb"})," to build efficient data-loaders and model loading mechanisms.\nFor example, when saving model data to the artifact-store, the default ",(0,t.jsx)(n.code,{children:"encodable"})," is ",(0,t.jsx)(n.code,{children:"'lazy_artifact'"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"saving-files-and-directories-to-the-artifact-store",children:"Saving files and directories to the artifact store"}),"\n",(0,t.jsxs)(n.p,{children:["There is an additional mechanism for working with large files. This works\nbetter in certain contexts, such as flexibly saving the results of model training.\nThe following lines copy the file to the ",(0,t.jsx)(n.code,{children:"db.artifact_store"}),".\nWhen data is loaded, the data is copied back over from the artifact-store to\nthe local file-system:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"cp -r test test_copy\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"dt = DataType('my-file', encodable='file')\ndb.apply(dt)\nmy_id = str(uuid.uuid4())\ndb.execute(my_collection.insert_one(Document({'id': my_id, 'x': dt('./test_copy')})))\n"})}),"\n",(0,t.jsx)(n.p,{children:"When reloading data, you will see that only a reference to the data in the artifact-store\nis loaded:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:">>> db.execute(my_collection.find_one({'id': my_id})).unpack(db)\n{'id': '2b14133a-f275-461e-b0a2-d6f0eadb8b9b',\n 'x': './artifacts/4dc048d4dbf67bed983a1b7a82822347645cc240',\n '_fold': 'train',\n '_id': ObjectId('661b9c229a2e44f23aa16422')}\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Downstream ",(0,t.jsx)(n.code,{children:"Model"})," instances may then explicitly handle the local file from the file\nreference."]})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},8453:(e,n,a)=>{a.d(n,{R:()=>r,x:()=>c});var t=a(6540);const i={},d=t.createContext(i);function r(e){const n=t.useContext(d);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),t.createElement(d.Provider,{value:n},e.children)}}}]);