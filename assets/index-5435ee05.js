import{_ as i}from"./index-b4bd7d5b.js";async function d(t,a=!0){await t.addParticleUpdater("life",async e=>{const{LifeUpdater:r}=await i(()=>import("./LifeUpdater-eb0d4f0e.js"),["assets/LifeUpdater-eb0d4f0e.js","assets/ValueWithRandom-d6137e1c.js","assets/index-b4bd7d5b.js","assets/index-d4f88e9b.css"]);return new r(e)},a)}export{d as loadLifeUpdater};