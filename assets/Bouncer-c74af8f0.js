import{Y as E,Z as M,O as m,$ as R,a0 as g,a1 as q,t as D,S as p,a2 as H}from"./index-058518ea.js";import{C as d,R as b}from"./Ranges-446621e2.js";import{Bounce as O}from"./index-d3f17601.js";import{E as w}from"./ExternalInteractorBase-029fb1b6.js";const I=2,l=.5,P=Math.PI*l,h=2,y=10,S=0;function x(c,e,t,o,s){const i=c.particles.quadTree.query(o,s);for(const n of i)o instanceof d?M(R(n),{position:e,radius:t,mass:t**I*P,velocity:m.origin,factor:m.origin}):o instanceof b&&g(n,q(e,t))}function T(c,e,t,o){const s=document.querySelectorAll(e);s.length&&s.forEach(i=>{const n=i,a=c.retina.pixelRatio,r={x:(n.offsetLeft+n.offsetWidth*l)*a,y:(n.offsetTop+n.offsetHeight*l)*a},v=n.offsetWidth*l*a,u=y*a,B=t.type==="circle"?new d(r.x,r.y,v+u):new b(n.offsetLeft*a-u,n.offsetTop*a-u,n.offsetWidth*a+u*h,n.offsetHeight*a+u*h);o(r,v,B)})}function W(c,e,t,o){E(t,e,(s,i)=>T(c,s,i,(n,a,r)=>x(c,n,a,r,o)))}function A(c,e){const t=c.retina.pixelRatio,o=y*t,s=c.interactivity.mouse.position,i=c.retina.bounceModeDistance;!i||i<S||!s||x(c,s,i,new d(s.x,s.y,i+o),e)}const f="bounce";class Y extends w{constructor(e){super(e)}clear(){}init(){const e=this.container,t=e.actualOptions.interactivity.modes.bounce;t&&(e.retina.bounceModeDistance=t.distance*e.retina.pixelRatio)}interact(){const e=this.container,t=e.actualOptions,o=t.interactivity.events,s=e.interactivity.status===D,i=o.onHover.enable,n=o.onHover.mode,a=o.onDiv;s&&i&&p(f,n)?A(this.container,r=>this.isEnabled(r)):W(this.container,a,f,r=>this.isEnabled(r))}isEnabled(e){const t=this.container,o=t.actualOptions,s=t.interactivity.mouse,i=((e==null?void 0:e.interactivity)??o.interactivity).events,n=i.onDiv;return!!s.position&&i.onHover.enable&&p(f,i.onHover.mode)||H(f,n)}loadModeOptions(e,...t){e.bounce||(e.bounce=new O);for(const o of t)e.bounce.load(o==null?void 0:o.bounce)}reset(){}}export{Y as Bouncer};