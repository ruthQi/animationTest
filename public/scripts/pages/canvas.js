var canvas = document.getElementById('canvasDom');
   //canvas = new Canvas(200, 200), 
var ctx = canvas.getContext('2d');

   ctx.font = '30px Impact';
   ctx.rotate(.1);
   ctx.fillText("Awesome!", 50, 100);
