define({libs:{},
setup: function(context, lib){
},
draw: function(context, borders, lib){
// paste current image one pixel down
var currentImage = context.getImageData(0, 0, context.canvas.width, context.canvas.height);
context.putImageData(currentImage, 0, 1);
// add new line
context.putImageData(borders.north, 0, 0);}});