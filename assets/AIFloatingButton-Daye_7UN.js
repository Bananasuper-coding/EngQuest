import{c as g,r as i,j as e}from"./index-0jnznar-.js";/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A=g("Bot",[["path",{d:"M12 8V4H8",key:"hb8ula"}],["rect",{width:"16",height:"12",x:"4",y:"8",rx:"2",key:"enze0r"}],["path",{d:"M2 14h2",key:"vft8re"}],["path",{d:"M20 14h2",key:"4cs60a"}],["path",{d:"M15 13v2",key:"1xurst"}],["path",{d:"M9 13v2",key:"rq6x2g"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q=g("Loader2",[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V=g("Send",[["path",{d:"m22 2-7 20-4-9-9-4Z",key:"1q3vgg"}],["path",{d:"M22 2 11 13",key:"nzbqef"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D=g("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),X=({lessonContext:o={}})=>{const[E,w]=i.useState(!1),[f,c]=i.useState([{role:"assistant",content:"👋 Xin chào! Tôi là AI Tutor. Hỏi tôi nhé!"}]),[d,k]=i.useState(""),[h,j]=i.useState(!1),v=i.useRef(null);i.useEffect(()=>{var n;(n=v.current)==null||n.scrollIntoView({behavior:"smooth"})},[f,h]);const N=async()=>{var l,$,S;if(!d.trim()||h)return;const n=d.trim();k(""),c(r=>[...r,{role:"user",content:n}]),j(!0),c(r=>[...r,{role:"assistant",content:""}]);try{const r="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",x=(o==null?void 0:o.lessonTitle)||"",z=((o==null?void 0:o.lessonContent)||[]).map(t=>{var b;let a=`📌 ${t.title}
`;return t.items&&(t.type==="vocab"||t.type==="toeic"?a+=t.items.map(s=>`- ${s.word}: ${s.meaning}`).join(`
`):t.type==="sentences"?a+=t.items.map(s=>`- ${s.sentence} = ${s.meaning}`).join(`
`):t.type==="dialogue"&&(a+=t.items.map(s=>`${s.speaker}: ${s.sentence}`).join(`
`))),t.explanation&&(a+=`
📝 ${t.title2||""}: ${t.explanation}
`,a+=((b=t.examples)==null?void 0:b.map(s=>`- ${s.sentence} = ${s.meaning}`).join(`
`))||""),a}).join(`

`),u=await fetch("https://api.groq.com/openai/v1/chat/completions",{method:"POST",headers:{Authorization:`Bearer ${r}`,"Content-Type":"application/json"},body:JSON.stringify({model:"llama-3.3-70b-versatile",messages:[{role:"system",content:`Bạn là gia sư tiếng Anh thân thiện cho học sinh Việt Nam. Đây là nội dung bài học hiện tại:

Bài: ${x}

${z}

Trả lời ngắn gọn, dễ hiểu bằng tiếng Việt. Dựa vào nội dung bài để giải đáp thắc mắc của học sinh.`},{role:"user",content:n}],stream:!0})});if(!u.ok){const t=await u.text();throw new Error(`API Error: ${u.status} - ${t}`)}const B=u.body.getReader(),L=new TextDecoder("utf-8");let I="";for(;;){const{done:t,value:a}=await B.read();if(t)break;const s=L.decode(a,{stream:!0}).split(`
`).filter(m=>m.trim()!=="");for(const m of s)if(m.startsWith("data: ")){const M=m.replace("data: ","").trim();if(M==="[DONE]")break;try{const T=((S=($=(l=JSON.parse(M).choices)==null?void 0:l[0])==null?void 0:$.delta)==null?void 0:S.content)||"";T&&(I+=T,c(R=>{const y=[...R];return y[y.length-1].content=I,y}))}catch{}}}}catch(r){c(x=>{const p=[...x];return p[p.length-1].content="Lỗi kết nối: "+r.message,p})}finally{j(!1)}};return E?e.jsxs("div",{className:"fixed bottom-4 right-4 w-80 h-[400px] bg-gray-900 border border-gray-700 rounded-2xl flex flex-col z-50 shadow-2xl",children:[e.jsxs("div",{className:"flex items-center justify-between p-3 border-b border-gray-700 bg-gradient-to-r from-purple-900 to-blue-900 rounded-t-2xl",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(A,{className:"w-5 h-5 text-white"}),e.jsx("span",{className:"font-bold text-white text-sm",children:"AI Tutor"})]}),e.jsx("button",{onClick:()=>w(!1),className:"text-white hover:bg-white/10 rounded p-1",children:e.jsx(D,{className:"w-4 h-4"})})]}),e.jsxs("div",{className:"flex-1 overflow-y-auto p-3 space-y-2",children:[f.map((n,l)=>e.jsx("div",{className:`text-sm ${n.role==="user"?"text-right":""}`,children:e.jsx("span",{className:`inline-block p-2 rounded-lg max-w-[85%] ${n.role==="user"?"bg-blue-600 text-white":"bg-gray-800 text-gray-200"}`,style:{whiteSpace:"pre-wrap",wordBreak:"break-word"},children:n.content||(h&&l===f.length-1?e.jsx(q,{className:"w-4 h-4 animate-spin inline"}):"")})},l)),e.jsx("div",{ref:v})]}),e.jsxs("div",{className:"p-2 border-t border-gray-700 flex gap-2",children:[e.jsx("input",{type:"text",value:d,onChange:n=>k(n.target.value),onKeyDown:n=>n.key==="Enter"&&N(),placeholder:"Hỏi AI...",className:"flex-1 bg-gray-800 border border-gray-600 rounded px-2 py-1 text-white text-sm focus:outline-none focus:border-purple-500"}),e.jsx("button",{onClick:N,disabled:!d.trim()||h,className:"p-2 bg-purple-600 rounded text-white disabled:opacity-50",children:e.jsx(V,{className:"w-4 h-4"})})]})]}):e.jsx("button",{onClick:()=>w(!0),className:"fixed bottom-6 right-6 w-14 h-14 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full shadow-lg flex items-center justify-center z-50 hover:scale-110 transition-transform",children:e.jsx(A,{className:"w-7 h-7 text-white"})})};export{X as default};
