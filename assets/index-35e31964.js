import{_ as s}from"./index-b8dc511b.js";class o{constructor(){this.opacity=.5}load(n){n&&n.opacity!==void 0&&(this.opacity=n.opacity)}}class c{constructor(){this.distance=80,this.links=new o,this.radius=60}load(n){n&&(n.distance!==void 0&&(this.distance=n.distance),this.links.load(n.links),n.radius!==void 0&&(this.radius=n.radius))}}async function a(i,n=!0){await i.addInteractor("externalConnect",async t=>{const{Connector:e}=await s(()=>import("./Connector-b6141a7c.js"),["assets/Connector-b6141a7c.js","assets/CanvasUtils-5991a94a.js","assets/index-b8dc511b.js","assets/index-5db0873d.css","assets/ExternalInteractorBase-029fb1b6.js"]);return new e(t)},n)}export{c as Connect,o as ConnectLinks,a as loadExternalConnectInteraction};