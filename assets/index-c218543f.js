import{_ as n}from"./index-c3f8c23a.js";async function e(a,o=!0){const{PolygonDrawer:t}=await n(()=>import("./PolygonDrawer-5724e31c.js"),["assets/PolygonDrawer-5724e31c.js","assets/PolygonDrawerBase-37ecb35a.js","assets/index-c3f8c23a.js","assets/index-5db0873d.css"]);await a.addShape("polygon",new t,o)}async function i(a,o=!0){const{TriangleDrawer:t}=await n(()=>import("./TriangleDrawer-ada22cbe.js"),["assets/TriangleDrawer-ada22cbe.js","assets/PolygonDrawerBase-37ecb35a.js","assets/index-c3f8c23a.js","assets/index-5db0873d.css"]);await a.addShape("triangle",new t,o)}async function _(a,o=!0){await e(a,o),await i(a,o)}export{e as loadGenericPolygonShape,_ as loadPolygonShape,i as loadTriangleShape};
