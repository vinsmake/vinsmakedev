import{_ as a}from"./index-426b2e46.js";async function n(t,o=!0){await t.addInteractor("particlesCollisions",async i=>{const{Collider:r}=await a(()=>import("./Collider-f312577c.js"),["assets/Collider-f312577c.js","assets/index-426b2e46.js","assets/index-3230a0ce.css","assets/ParticlesInteractorBase-7b2895e9.js"]);return new r(i)},o)}export{n as loadParticlesCollisionsInteraction};