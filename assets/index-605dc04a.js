import{_ as o}from"./index-735dca3d.js";async function i(t,a=!0){await t.addParticleUpdater("outModes",async e=>{const{OutOfCanvasUpdater:r}=await o(()=>import("./OutOfCanvasUpdater-e3a613bb.js"),["assets/OutOfCanvasUpdater-e3a613bb.js","assets/index-735dca3d.js","assets/index-3afcd63e.css"]);return new r(e)},a)}export{i as loadOutModesUpdater};