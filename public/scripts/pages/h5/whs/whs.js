/*
基于threejs技术的现代WebGL引擎
*/
import * as WHS from 'whs';
import * as Three from 'three';
console.log(WHS)
const app = new WHS.App([
   new WHS.ElementModule({
      container: document.getElementById('app')
   }), 
   new WHS.SceneModule(), // creates THREE.Scene instance
   new WHS.CameraModule({position: {
      x: -30,
      y: 40,
      z: 50
   }}), // creates PerspectiveCamera instance
   new WHS.RenderingModule({bgColor: 0xcccccc})
]);
const plane = new WHS.Plane({
   material: new Three.MeshBasicMaterial({color: 0x00ff00}),
   geometry: {
      width: 60,
      height: 20
    },
    position: [15, 0, -30]
});
const sphere = new WHS.Sphere({
   mass: 10, // Mass of physics object. 
   material: new Three.MeshBasicMaterial({color: 0xff0000}),
   geometry: {
      radius: 4,
      widthSegments: 20,
      heightSegments: 20
   },
   position: [20, 4, -32]
});
const light = new WHS.PointLight({
   light: {
      color: 0xffffff
   },
   position: [-40, 60, 30]
});

//动画
new WHS.Loop(()=>{
   //sphere.position.y += 0.02;
   plane.rotation.z += 0.01;
}).start(app);

app.add(light);
app.add(plane);
app.add(sphere);
console.log(app);
app.start();

 