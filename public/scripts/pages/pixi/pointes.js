var PIXI = require('pixi.js');

class Pointes{
   constructor(){
      this.init();
   }
   init(){
      let app = new PIXI.Application();
      document.getElementById('pointes').appendChild(app.view);
      let count = 0;
      let ropeLength = 200/10;
      let points = [];
      for(var i=0;i<10;i++){
         points.push(new PIXI.Point(i*ropeLength, 0));
      }
      let strip = new PIXI.mesh.Rope(PIXI.Texture.fromImage('scripts/assets/1_1.png'), points);
      strip.y = 300;

      var snakeContainer = new PIXI.Container();
      //snakeContainer.x = 400;
      //snakeContainer.y = 300;

      //snakeContainer.scale.set(800 / 1100);
      app.stage.addChild(snakeContainer);

      snakeContainer.addChild(strip);

      app.ticker.add(function() {

          count += 0.1;

          // make the snake
          for (var i = 0; i < points.length; i++) {
              //points[i].y = (i * 0.5) + count;
              points[i].x = i * ropeLength + count;
          }
      });
   }
}

new Pointes();