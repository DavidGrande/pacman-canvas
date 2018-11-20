/* global canvas, Palette */

class PacDotLayer{
	constructor(){
		this.ctxCocoLayer = document.getElementById('coco-layer').getContext('2d');
	}
	
	drawPacDot(size, i, j){
		this.ctxCocoLayer.beginPath();
		if(size === 2){
			this.ctxCocoLayer.arc((j) * 30 + 15, (i) * 30 + 15, 3, 0, Math.PI * 2, true);
		} else {
			this.ctxCocoLayer.arc((j) * 30 + 15, (i) * 30 + 15, 5, 0, Math.PI * 2, true);
		}
		this.ctxCocoLayer.fill();
	}
	
	drawPacDots(arrayMapa, x, y) {
		this.ctxCocoLayer.clearRect(0,0,canvas.width, canvas.height);
		this.ctxCocoLayer.fillStyle = Palette.WHITE;
		for (var i = 1; i < y-1; i++) {
			for (var j = 1; j < x-1; j++) {
				var cell = arrayMapa[i][j];
				if (cell === 2 || cell === 3) {
					this.drawPacDot(cell, i, j);
				}
			}
		}
	}
}