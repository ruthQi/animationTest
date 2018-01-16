
var THREE = require('libs/three.min.js');
class Music{
   constructor(){
      this.width = window.innerWidth;
      this.height = window.innerHeight;
      this.dpr = 2;
      this.waterWidth = window.innerWidth;
      this.waterHeight = window.innerHeight - window.innerWidth * 175/375;
      this.initRender();
   }
   initRender(){
      this.camera = new THREE.PerspectiveCamera();
   }
}

new Music();