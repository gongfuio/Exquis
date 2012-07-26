"use strict";

var makeAnimationLeft = function(context){
    var toRadians = function(degrees){
        return  degrees * Math.PI / 180; 
    };
    var rotation = 0,
        halfWidth = context.canvas.width / 2,
        halfHeight = context.canvas.height / 2;

    return {
        draw: function(borders) {
            context.fillStyle = "rgb(0,0,0)";
            context.fillRect(0, 0, context.canvas.width, context.canvas.height);

            context.save();
            context.translate(halfWidth, halfHeight);
            context.scale(3, 3);
            context.rotate(toRadians(rotation));

            rotation = (rotation + 1) % 360;

            context.fillStyle = "rgb(200,0,0)";
            context.fillRect(-25, -25, 50, 50);

            context.restore();

            // image data
            var imageDataForTopLine = context.getImageData(0, 0, context.canvas.width, 1);
            return imageDataForTopLine;
        }
    }
 };


var makeAnimationRight = function(context){
    return {
        draw: function(borders) {
            // paste current image one pixel down
            var currentImage = context.getImageData(0, 0, context.canvas.width, context.canvas.height);
            context.putImageData(currentImage, 0, 1);

            // add new line on the top 
            context.putImageData(borders, 0, 0);
        }
    }
 };

var init = function () {

    //animationLeft.init(document.getElementById('canvas_left'));
    var contextLeft = document.getElementById('canvas_left').getContext("2d");
    var contextRight = document.getElementById('canvas_right').getContext("2d");
    var animationLeft = makeAnimationLeft(contextLeft)
    var animationRight = makeAnimationRight(contextRight);

    var draw = function(){
        var imageDataForTopLine = animationLeft.draw();
        //draw_right(imageDataForTopLine);
        animationRight.draw(imageDataForTopLine);
    };


    setInterval(draw, 50);
    //draw();

};

window.onload = init;


