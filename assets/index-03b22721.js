import{s as o,_ as r}from"./index-66e948a3.js";class s{constructor(){this.quantity=2}load(t){if(!t)return;const e=t.quantity;e!==void 0&&(this.quantity=o(e))}}async function u(n,t=!0){await n.addInteractor("externalRemove",async e=>{const{Remover:a}=await r(()=>import("./Remover-40ccf75f.js"),["assets/Remover-40ccf75f.js","assets/ExternalInteractorBase-029fb1b6.js","assets/index-66e948a3.js","assets/index-c8097fc4.css"]);return new a(e)},t)}export{s as Remove,u as loadExternalRemoveInteraction};
