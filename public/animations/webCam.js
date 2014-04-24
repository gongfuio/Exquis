x.animate({libs:{},
setup: function(context, lib){
var applyVendorPrefix = function(){
	navigator.getUserMedia = navigator.getUserMedia ||
	navigator.webkitGetUserMedia ||
	navigator.mozGetUserMedia ||
	navigator.msGetUserMedia;
};

var provideVideoContext = function(width, height){
	var video = document.createElement("video");
	video.width = width;
	video.height = height;
	video.autoplay = true;

	var errorCallback = function(e) {
		console.log('provideVideoContext failed', e);
	};

    /* valid resolutions
      1920:1080
      1280:720
      960:720
      640:360
      640:480
      320:240
      320:180
      */

      var video_constraints = {
      	mandatory: {
      		maxWidth: 320, 
      		maxHeight: 240
      	},
      	optional: []
      };

      navigator.getUserMedia({video: video_constraints}, function(stream) {
      	video.src = window.URL.createObjectURL(stream);
      }, errorCallback);

      return video;
};

applyVendorPrefix();

if (this.v == null) this.v = provideVideoContext(320, 240);},
draw: function(context, borders, lib){
context.drawImage(this.v, 0, 0, context.canvas.width, context.canvas.height);}});