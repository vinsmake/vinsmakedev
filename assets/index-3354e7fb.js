import{_ as e}from"./index-3a59a502.js";import{O as s}from"./OptionsColor-3718636a.js";class r{constructor(){this.blink=!1,this.consent=!1,this.opacity=1}load(i){i&&(i.blink!==void 0&&(this.blink=i.blink),i.color!==void 0&&(this.color=s.create(this.color,i.color)),i.consent!==void 0&&(this.consent=i.consent),i.opacity!==void 0&&(this.opacity=i.opacity))}}class f{constructor(){this.distance=100,this.links=new r}load(i){i&&(i.distance!==void 0&&(this.distance=i.distance),this.links.load(i.links))}}async function a(n,i=!0){await n.addInteractor("externalGrab",async o=>{const{Grabber:t}=await e(()=>import("./Grabber-613be7d5.js"),["assets/Grabber-613be7d5.js","assets/CanvasUtils-b589d2e0.js","assets/index-3a59a502.js","assets/index-cbde43e8.css","assets/ExternalInteractorBase-029fb1b6.js","assets/OptionsColor-3718636a.js"]);return new t(o)},i)}export{f as Grab,r as GrabLinks,a as loadExternalGrabInteraction};