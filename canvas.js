var canvas = document.querySelector('canvas')
  ;
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var firefly = canvas.getContext('2d');

var FIREFLY_AMOUNT = 100

// Firefly Creation
for(var i = 0; i < FIREFLY_AMOUNT; i++)
{
  // Random x and y position
  var x = Math.random() * window.innerWidth;
  var y = Math.random() * window.innerHeight;

  // Random colors?
  var r = Math.floor(Math.random() * 256)
  var g = Math.floor(Math.random() * 256)
  var b = Math.floor(Math.random() * 256)
  var rgb = 'rgba('+r+' , '+g+' , '+b+' , '+0.9+')';

  // Creation of firefly
  firefly.beginPath();
  firefly.arc(x, y, 3, 0, 2 * Math.PI, false);
  firefly.fillStyle = rgb;
  firefly.fill();

}

console.log(canvas);
