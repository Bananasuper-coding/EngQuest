import{j as e}from"./index-DwH9kPhI.js";const i=({onClick:r,isSpeaking:t,size:o="md",className:n=""})=>{const a={sm:"w-8 h-8",md:"w-10 h-10",lg:"w-12 h-12"},s={sm:"w-4 h-4",md:"w-5 h-5",lg:"w-6 h-6"};return e.jsx("button",{onClick:r,className:`
        ${a[o]}
        flex items-center justify-center
        rounded-full transition-all duration-200
        ${t?"bg-blue-500 text-white animate-pulse":"bg-blue-600 text-white hover:bg-blue-700 hover:scale-110"}
        ${n}
      `,title:t?"Đang phát âm...":"Phát âm",children:t?e.jsxs("svg",{className:s[o],fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:[e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"}),e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M17 14a3 3 0 100-6 3 3 0 000 6z"})]}):e.jsx("svg",{className:s[o],fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"})})})};export{i as S};
