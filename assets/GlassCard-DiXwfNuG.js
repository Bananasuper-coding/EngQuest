import{c as b,j as p,m as u}from"./index-DLvU6YLY.js";/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f=b("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]),e={default:"bg-slate-800/40 backdrop-blur-xl border border-slate-700/30",elevated:"bg-slate-800/60 backdrop-blur-2xl border border-slate-600/40 shadow-2xl shadow-indigo-500/10",interactive:"bg-slate-800/40 backdrop-blur-xl border border-slate-700/30 hover:bg-slate-700/50 hover:border-accent-primary/30 hover:shadow-lg hover:shadow-indigo-500/20 transition-all duration-300 cursor-pointer"},r={sm:"p-4",md:"p-6",lg:"p-8"};function h({children:o,className:t="",delay:a=0,hover:i=!0,variant:d="default",padding:n="md",glow:s=!1,...l}){return p.jsx(u.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5,delay:a},whileHover:i?{y:-4,transition:{duration:.2}}:void 0,className:`
        relative overflow-hidden rounded-2xl 
        ${e[d]||e.default}
        ${r[n]||r.md}
        ${s?"before:absolute before:inset-0 before:rounded-2xl before:bg-gradient-to-br before:from-indigo-500/10 before:via-transparent before:to-purple-500/10 before:pointer-events-none":""}
        ${t}
      `,...l,children:o})}export{f as A,h as G};
