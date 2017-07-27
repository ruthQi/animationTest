var $ = require('libs/jquery.js');
//npm install three
var THREE = require('libs/three.min.js');
require('libs/ColladaLoader.js');
require('libs/Animation.js');
require('libs/AnimationHandler.js');

class SimpleCollada{
   constructor(){
      this.initScene();
      this.loaderDae();
      this.render();
   }
   initScene(){
      //场景
      this.scene = new THREE.Scene();
      //相机
      this.camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
      this.camera.position.x = 400;
      this.camera.position.y = 50;
      this.camera.position.z = 150;
      this.camera.lookAt(new THREE.Vector3(0, 0, 0));
      //renderer
      this.webGLRenderer = new THREE.WebGLRenderer();
      this.webGLRenderer.setClearColor(new THREE.Color(0xEEEEEE, 1.0));
      this.webGLRenderer.setSize(window.innerWidth, window.innerHeight);
      this.webGLRenderer.shadowMapEnabled = true;
      //灯光
      var spotLight = new THREE.SpotLight(0xffffff);
      spotLight.position.set(300, 500, 100);
      spotLight.intensity = 3;
      this.scene.add(spotLight);

      document.getElementById('simple').appendChild(this.webGLRenderer.domElement);
      this.clock = new THREE.Clock();
   }
   loaderDae(){
      var loader = new THREE.ColladaLoader;
      loader.load('scripts/assets/monster.dae', (collada) => {
         var child = collada.skins[0];
         this.scene.add(child);
         var animation = new THREE.Animation(child, child.geometry.animation);
         animation.play();

         child.scale.set(0.15, 0.15, 0.15);
         child.rotation.x = -0.5 * Math.PI;
         child.position.x = -100;
         child.position.y = -60;
      });
   }
   render(){
      var delta = this.clock.getDelta();
      THREE.AnimationHandler.update(delta);
      requestAnimationFrame(()=>{this.render()});
      this.webGLRenderer.render(this.scene, this.camera);
   }
}

new SimpleCollada();