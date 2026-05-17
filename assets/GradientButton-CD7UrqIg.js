import{c as o,j as r,m as n}from"./index-DLvU6YLY.js";/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m=o("Target",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g=o("Trophy",[["path",{d:"M6 9H4.5a2.5 2.5 0 0 1 0-5H6",key:"17hqa7"}],["path",{d:"M18 9h1.5a2.5 2.5 0 0 0 0-5H18",key:"lmptdp"}],["path",{d:"M4 22h16",key:"57wxv0"}],["path",{d:"M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22",key:"1nw9bq"}],["path",{d:"M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22",key:"1np0yb"}],["path",{d:"M18 2H6v7a6 6 0 0 0 12 0V2Z",key:"u46fv3"}]]),h={primary:"from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 hover:shadow-lg hover:shadow-indigo-500/25 active:scale-[0.98]",secondary:"bg-slate-800/60 border border-slate-600/50 text-slate-200 hover:bg-slate-700/60 hover:border-accent-primary/30 hover:text-white",ghost:"bg-transparent text-slate-400 hover:text-white hover:bg-white/5",success:"bg-emerald-600/20 border border-emerald-500/30 text-emerald-400 hover:bg-emerald-600/30 hover:shadow-emerald-500/20",danger:"bg-red-600/20 border border-red-500/30 text-red-400 hover:bg-red-600/30"};function y({children:s,variant:e="primary",icon:t,className:d="",type:i="button",size:l="md",...c}){const a={sm:"px-4 py-2 text-sm",md:"px-6 py-3 text-base",lg:"px-8 py-4 text-lg"};return r.jsx(n.button,{type:i,whileHover:{scale:1.02,y:-2},whileTap:{scale:.98},whileFocus:{ring:"2px solid rgba(99,102,241,0.5)"},transition:{type:"spring",stiffness:400,damping:25},className:`
        relative group overflow-hidden rounded-xl font-semibold
        ${e==="primary"||e==="success"||e==="danger"?"bg-gradient-to-r text-white":h[e]}
        ${a[l]||a.md}
        transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed
        ${d}
      `,...c,children:r.jsxs("span",{className:"relative flex items-center gap-2",children:[t&&r.jsx(t,{className:"w-5 h-5"}),s]})})}export{y as G,g as T,m as a};
