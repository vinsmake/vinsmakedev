import{s as o,_ as r}from"./index-056ee510.js";class s{constructor(){this.quantity=2}load(t){if(!t)return;const e=t.quantity;e!==void 0&&(this.quantity=o(e))}}async function u(n,t=!0){await n.addInteractor("externalRemove",async e=>{const{Remover:a}=await r(()=>import("./Remover-da7b0b27.js"),["assets/Remover-da7b0b27.js","assets/ExternalInteractorBase-029fb1b6.js","assets/index-056ee510.js","assets/index-bc93e6cb.css"]);return new a(e)},t)}export{s as Remove,u as loadExternalRemoveInteraction};
