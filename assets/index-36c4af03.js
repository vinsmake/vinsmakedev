import{_ as n}from"./index-426b2e46.js";async function e(a,o=!0){const{PolygonDrawer:t}=await n(()=>import("./PolygonDrawer-f41f853f.js"),["assets/PolygonDrawer-f41f853f.js","assets/PolygonDrawerBase-c994751e.js","assets/index-426b2e46.js","assets/index-3230a0ce.css"]);await a.addShape("polygon",new t,o)}async function i(a,o=!0){const{TriangleDrawer:t}=await n(()=>import("./TriangleDrawer-88af5888.js"),["assets/TriangleDrawer-88af5888.js","assets/PolygonDrawerBase-c994751e.js","assets/index-426b2e46.js","assets/index-3230a0ce.css"]);await a.addShape("triangle",new t,o)}async function _(a,o=!0){await e(a,o),await i(a,o)}export{e as loadGenericPolygonShape,_ as loadPolygonShape,i as loadTriangleShape};