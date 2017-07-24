/*
基础材质：MeshBasicMaterial。这种材质不考虑光照的影响，
使用这种材质的网格会被渲染成一些简单的平面多边形，而且你
也有机会显示几何体的线框
*/
var $ = require('libs/jquery.js');
var Three = require('three');


class MeshBasicMaterial{
   constructor(){
      this.init();
   }
   init(){
      this.step = 0;
      //创建场景
      this.scene = new Three.Scene();
      //此属性保证场景中的所有物体都会使用该材质(使用混合材质时此属性不用设置)
      //this.scene.overrideMaterial = new Three.MeshDepthMaterial();
      //创建相机
      this.camera = new Three.PerspectiveCamera(45, window.innerWidth/window.innerHeight, 10, 130);
      this.camera.position.x = -50;
      this.camera.position.y = 40;
      this.camera.position.z = 50;
      this.camera.lookAt(this.scene.position);
      //创建渲染器
      this.renderer = new Three.WebGLRenderer();
      this.renderer.setClearColor(new Three.Color(0x00000, 1.0));
      this.renderer.setSize(window.innerWidth, window.innerHeight);
      this.renderer.shadowMapEnabled = true;
      //灯光
      this.ambientLight = new Three.AmbientLight(0x0c0c0c);
      this.scene.add(this.ambientLight);
      this.spotLight = new Three.SpotLight(0xffffff);
      this.spotLight.position.set(-40, 60, -10);
      this.spotLight.castShadow = true;
      this.scene.add(this.spotLight);
      //添加场景到渲染器
      $('#WebGL-output').append(this.renderer.domElement);
      this.render();
      this.bindEvent();
   }
   bindEvent(){
      $('.js-addCube').on('click', ()=>{this.addCube()});
      $('.js-removeCube').on('click', ()=>{this.removeCube()});
      $('.js-changeNear').on('click', ()=>{this.changeNear()});
      $('.js-changeFar').on('click', ()=>{this.changeFar()});
   }
   addCube(){
      var cubeSize = Math.ceil(3 + (Math.random()*3));
      var cubeGeom = new Three.BoxGeometry(cubeSize, cubeSize, cubeSize);
      //单独材质
      var cubeMaterial = new Three.MeshLambertMaterial({color: Math.random() * 0xffffff});
      var cube = new Three.Mesh(cubeGeom, cubeMaterial);
      //单独材质结束--------------------------------------
      /*混合材质
      注：使用混合材质时必须把transparent设置为true,并指定融合模式
      如果transparent不指定为true，只是会得到一些绿色物体*/
      /*var cubeMaterial = new Three.MeshDepthMaterial();
      var colorMaterial = new Three.MeshBasicMaterial({
         color: 0x00ff00, 
         transparent: true, 
         blending: Three.MultiplyBlending
      });
      var cube = new Three.SceneUtils.createMultiMaterialObject(cubeGeom, [colorMaterial, cubeMaterial]);
      cube.children[1].scale.set(0.99, 0.99, 0.99);*/
      //-----------混合材质结束
      cube.castShadow = true;
      cube.position.x = -60 + Math.round(Math.random() * 100);
      cube.position.y = Math.round(Math.random() * 10);
      cube.position.z = -100 + Math.round(Math.random() * 150);
      this.scene.add(cube);
   }
   removeCube(){
      var allChildren = this.scene.children;
      var lastChildren = allChildren[allChildren.length - 1];
      //混合模式无法使用此方式移除
      if(lastChildren instanceof Three.Mesh){
         this.scene.remove(lastChildren);
      }
   }
   changeNear(){
      var num = 10;
      this.camera.near += num;
   }
   changeFar(){
      var num = 10;
      this.camera.far += num;
   }
   render(){
      this.step += 0.02;
      this.scene.traverse((e) => {
         if(e instanceof Three.Mesh){
            e.rotation.x = this.step;
            e.rotation.y = this.step;
            e.rotation.z = this.step;
         }
      });
      requestAnimationFrame(()=>{this.render()});
      this.renderer.render(this.scene, this.camera);
   }
}

new MeshBasicMaterial();