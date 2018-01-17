function loadImage() {
	var ctx = $('canvas');
	if (ctx.getContext) {

		ctx = ctx.getContext('2d');

		var img = new Image();

		img.onload = function () {
			ctx.canvas.width = img.width;
			ctx.canvas.height = img.height;

			ctx.drawImage(img, 0, 0);
		};

		img.src = 'test.jpg';
	}
}

function colorPicker(e) {
	
	var ctx = $('canvas');
	ctx = ctx.getContext('2d');

	var x = e.clientX;
	var y = e.clientY;

	var pixelData = ctx.getImageData(x, y, 1, 1).data;

	console.log(pixelData);
}

function readPixelData() {
	var ctx = $('canvas');
	ctx = ctx.getContext('2d');

	var width = ctx.canvas.width;
	var height = ctx.canvas.height;

}

function initialize() {
	console.log('initializing')
	loadImage();
	console.log('image loaded')
	utils.addListener($('canvas'), 'click', colorPicker);
}

utils.addListener(window, 'load', initialize);