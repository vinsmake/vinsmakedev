import{_ as e}from"./index-650d06c2.js";async function i(r,o=!0){await r.addParticleUpdater("color",async t=>{const{ColorUpdater:a}=await e(()=>import("./ColorUpdater-35da340c.js"),["assets/ColorUpdater-35da340c.js","assets/index-650d06c2.js","assets/index-52be4999.css"]);return new a(t)},o)}export{i as loadColorUpdater};