import{_ as n}from"./index-187d8ed5.js";async function e(a,o=!0){const{PolygonDrawer:t}=await n(()=>import("./PolygonDrawer-2ad4aadb.js"),["assets/PolygonDrawer-2ad4aadb.js","assets/PolygonDrawerBase-15449290.js","assets/index-187d8ed5.js","assets/index-17e8316a.css"]);await a.addShape("polygon",new t,o)}async function i(a,o=!0){const{TriangleDrawer:t}=await n(()=>import("./TriangleDrawer-06b89bdc.js"),["assets/TriangleDrawer-06b89bdc.js","assets/PolygonDrawerBase-15449290.js","assets/index-187d8ed5.js","assets/index-17e8316a.css"]);await a.addShape("triangle",new t,o)}async function _(a,o=!0){await e(a,o),await i(a,o)}export{e as loadGenericPolygonShape,_ as loadPolygonShape,i as loadTriangleShape};
