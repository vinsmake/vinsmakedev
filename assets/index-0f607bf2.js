import{_ as a}from"./index-6caec968.js";async function n(t,o=!0){await t.addInteractor("particlesCollisions",async i=>{const{Collider:r}=await a(()=>import("./Collider-cdce60be.js"),["assets/Collider-cdce60be.js","assets/index-6caec968.js","assets/index-5702a3d5.css","assets/ParticlesInteractorBase-7b2895e9.js"]);return new r(i)},o)}export{n as loadParticlesCollisionsInteraction};