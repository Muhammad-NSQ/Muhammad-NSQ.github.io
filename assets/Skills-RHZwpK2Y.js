import{q as y,t as x,u as f,e as k,g as o,l as s,P as b,o as r,R as d}from"./index-CoYLjCsS.js";import{u as j}from"./use-in-view-BWpewrEP.js";function N(e){e.values.forEach(t=>t.stop())}function p(e,t){[...t].reverse().forEach(i=>{const n=e.getVariant(i);n&&x(e,n),e.variantChildren&&e.variantChildren.forEach(l=>{p(l,t)})})}function S(e,t){if(Array.isArray(t))return p(e,t);if(typeof t=="string")return p(e,[t]);x(e,t)}function w(){const e=new Set,t={subscribe(a){return e.add(a),()=>void e.delete(a)},start(a,i){const n=[];return e.forEach(l=>{n.push(y(l,a,{transitionOverride:i}))}),Promise.all(n)},set(a){return e.forEach(i=>{S(i,a)})},stop(){e.forEach(a=>{N(a)})},mount(){return()=>{t.stop()}}};return t}function g(){const e=f(w);return k(e.mount,[]),e}const A=[{category:"AI/ML",items:[{name:"TensorFlow",icon:"/assets/skills/tensorflow.svg",level:"Advanced"},{name:"PyTorch",icon:"/assets/skills/pytorch.svg",level:"Advanced"},{name:"Scikit-learn",icon:"/assets/skills/scikit-learn.svg",level:"Mid"},{name:"Deep Learning",icon:"/assets/skills/deep-learning.svg",level:"Expert"},{name:"Computer Vision",icon:"/assets/skills/computer-vision.svg",level:"Advanced"},{name:"NLP",icon:"/assets/skills/nlp.svg",level:"Mid"},{name:"Tensorrt",icon:"/assets/skills/tensorrt.svg",level:"Mid"}]},{category:"Programming",items:[{name:"Python",icon:"/assets/skills/python.svg",level:"Expert"},{name:"JavaScript",icon:"/assets/skills/javascript.svg",level:"Mid"},{name:"C++",icon:"/assets/skills/cpp.svg",level:"Advanced"},{name:"SQL",icon:"/assets/skills/sql.svg",level:"Mid"},{name:"HTML/CSS",icon:"/assets/skills/html-css.svg",level:"Advanced"}]},{category:"Tools & Platforms",items:[{name:"Docker",icon:"/assets/skills/docker.svg",level:"Advanced"},{name:"Kubernetes",icon:"/assets/skills/kubernetes.svg",level:"Intermediate"},{name:"Triton",icon:"/assets/skills/triton.svg",level:"Mid"},{name:"Git",icon:"/assets/skills/git.svg",level:"Mid"},{name:"FastAPI",icon:"/assets/skills/fastapi.svg",level:"Advanced"},{name:"Django",icon:"/assets/skills/django.svg",level:"Mid"},{name:"React",icon:"/assets/skills/react.svg",level:"Intermediate"}]}],C={Expert:"bg-black",Advanced:"bg-gray-800",Mid:"bg-gray-600",Intermediate:"bg-gray-400"},I={initial:{scale:1,y:0},hover:{scale:1.2,y:-20,transition:{type:"spring",stiffness:300,damping:20}}},M={initial:{scale:1,y:0},hover:{scale:1.05,y:-8,transition:{type:"spring",stiffness:300,damping:20}}},v=o.memo(({iconPath:e,name:t,controls:a})=>{const[i,n]=d.useState("/assets/skills/default.svg"),[l,c]=d.useState(!1);return o.useEffect(()=>{const m=new Image;m.src=e,m.onload=()=>{n(e),c(!0)},m.onerror=()=>{n("/assets/skills/default.svg"),c(!0)}},[e]),s.jsxs(r.div,{variants:I,initial:"initial",animate:a,className:"w-10 h-10 sm:w-12 sm:h-12 relative",children:[s.jsx("img",{src:i,alt:`${t} skill icon`,className:`w-full h-full object-contain transition-opacity duration-300 ${l?"opacity-100":"opacity-0"}`}),!l&&s.jsx("div",{className:"absolute inset-0 bg-gray-300 rounded animate-pulse"})]})});v.displayName="SkillIcon";const h=o.memo(({skill:e,index:t,isInView:a})=>{const i=g(),n=g(),[l,c]=d.useState(!1);return s.jsx(r.div,{initial:{opacity:0,scale:0},animate:a?{opacity:1,scale:1}:{opacity:0,scale:0},transition:{duration:.4,delay:t*.05,ease:"easeOut"},className:"relative group",onHoverStart:()=>{c(!0),i.start("hover"),n.start("hover")},onHoverEnd:()=>{c(!1),i.start("initial"),n.start("initial")},children:s.jsxs("div",{className:"honeycomb-cell",children:[s.jsx(r.div,{variants:M,initial:"initial",animate:n,className:`hexagon ${C[e.level]} relative z-10`,children:s.jsxs("div",{className:"hexagon-content",children:[s.jsx("div",{className:"w-full h-full absolute inset-0 flex items-center justify-center",children:s.jsx(v,{iconPath:e.icon,name:e.name,controls:i})}),s.jsxs(r.div,{initial:{opacity:0},animate:{opacity:l?1:0},transition:{duration:.2},className:"absolute left-0 right-0 bottom-4 text-center",children:[s.jsx("div",{className:"text-xs sm:text-sm font-medium",children:e.name}),s.jsx("div",{className:"text-xs mt-1 text-gray-300 hidden sm:block",children:e.level})]})]})}),s.jsx("div",{className:"absolute inset-0 -z-10 opacity-20",children:s.jsx("div",{className:"honeycomb-lines"})})]})})});h.displayName="HexagonSkill";const u=o.memo(({skillGroup:e,groupIndex:t,isInView:a})=>s.jsxs("div",{className:"space-y-6 sm:space-y-8",children:[s.jsx(r.h3,{initial:{opacity:0,y:20},animate:a?{opacity:1,y:0}:{opacity:0,y:20},transition:{duration:.5,delay:t*.1},className:"text-xl sm:text-2xl font-bold text-center",children:e.category}),s.jsx("div",{className:"flex flex-wrap gap-2 sm:gap-4 justify-center skill-group",children:e.items.map((i,n)=>s.jsx(h,{skill:i,index:n+t*7,isInView:a},`${i.name}-${n}`))})]}));u.displayName="SkillGroup";const E=()=>{const e=o.useRef(null),t=j(e,{once:!0,margin:"-50px"}),a=o.useMemo(()=>s.jsx("style",{jsx:!0,children:`
      .honeycomb-cell {
        width: 120px;
        height: 140px;
        position: relative;
      }
      
      @media (min-width: 640px) {
        .honeycomb-cell {
          width: 150px;
          height: 170px;
        }
      }

      .hexagon {
        width: 100%;
        height: 100%;
        position: relative;
        clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        transition: all 0.3s ease;
      }

      .hexagon:before {
        content: '';
        position: absolute;
        top: 1px;
        left: 1px;
        right: 1px;
        bottom: 1px;
        background: inherit;
        clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
        z-index: -1;
      }

      .hexagon-content {
        position: relative;
        width: 100%;
        height: 100%;
        z-index: 1;
      }

      .honeycomb-lines {
        position: absolute;
        width: 200%;
        height: 200%;
        top: -50%;
        left: -50%;
        background-image: 
          linear-gradient(to right, rgba(0,0,0,0.1) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(0,0,0,0.1) 1px, transparent 1px);
        background-size: 20px 20px;
        transform: rotate(30deg);
        pointer-events: none;
      }

      @media (min-width: 768px) {
        .skill-group:nth-child(even) {
          transform: translateX(75px);
        }
      }
      
      @media (max-width: 767px) {
        .skill-group {
          padding: 0 8px;
        }
      }
    `}),[]);return s.jsxs("section",{ref:e,id:"skills",className:"min-h-screen bg-gradient-to-b from-gray-50 to-white text-black py-12 sm:py-16 md:py-20 px-4 md:px-20 lg:px-40 relative overflow-hidden",children:[t&&s.jsx(b,{isDarkBg:!1,particleCount:30,particleColor:"0,0,0",particleSize:{min:1,max:5},particleSpeed:{min:5,max:12},shape:"square",className:"opacity-70"}),a,s.jsx("div",{className:"max-w-7xl mx-auto",children:s.jsxs(r.div,{initial:{opacity:0,y:100},animate:t?{opacity:1,y:0}:{opacity:0,y:100},transition:{duration:.8,ease:"easeOut"},className:"space-y-12",children:[s.jsx("h2",{className:"text-3xl sm:text-4xl md:text-6xl font-bold text-center text-gray-800",children:"🎓 Skills"}),s.jsx("div",{className:"space-y-16 sm:space-y-24",children:A.map((i,n)=>s.jsx(u,{skillGroup:i,groupIndex:n,isInView:t},i.category))})]})})]})},V=o.memo(E);export{V as default};
