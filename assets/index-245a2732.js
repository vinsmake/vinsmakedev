import{_ as n}from"./index-1dfb72d4.js";async function e(a,o=!0){const{PolygonDrawer:t}=await n(()=>import("./PolygonDrawer-78d2fed4.js"),["assets/PolygonDrawer-78d2fed4.js","assets/PolygonDrawerBase-db67bf7e.js","assets/index-1dfb72d4.js","assets/index-7faa1223.css"]);await a.addShape("polygon",new t,o)}async function i(a,o=!0){const{TriangleDrawer:t}=await n(()=>import("./TriangleDrawer-a026c261.js"),["assets/TriangleDrawer-a026c261.js","assets/PolygonDrawerBase-db67bf7e.js","assets/index-1dfb72d4.js","assets/index-7faa1223.css"]);await a.addShape("triangle",new t,o)}async function _(a,o=!0){await e(a,o),await i(a,o)}export{e as loadGenericPolygonShape,_ as loadPolygonShape,i as loadTriangleShape};
