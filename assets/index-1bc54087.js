import{_ as i}from"./index-04d50e3e.js";async function d(t,a=!0){await t.addParticleUpdater("life",async e=>{const{LifeUpdater:r}=await i(()=>import("./LifeUpdater-05b3ef5a.js"),["assets/LifeUpdater-05b3ef5a.js","assets/ValueWithRandom-87d45101.js","assets/index-04d50e3e.js","assets/index-48589c80.css"]);return new r(e)},a)}export{d as loadLifeUpdater};
