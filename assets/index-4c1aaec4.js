import{_ as i}from"./index-849f7db2.js";async function d(t,a=!0){await t.addParticleUpdater("life",async e=>{const{LifeUpdater:r}=await i(()=>import("./LifeUpdater-c8f677fd.js"),["assets/LifeUpdater-c8f677fd.js","assets/ValueWithRandom-fff2e698.js","assets/index-849f7db2.js","assets/index-a1389fee.css"]);return new r(e)},a)}export{d as loadLifeUpdater};