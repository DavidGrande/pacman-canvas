/* global canvas */

class Info{
	constructor(){
		this.ctxInfoLayer = document.getElementById('info-layer').getContext('2d');
		this.touch = new Touch(320, 250, 15, 15);
		this.pausa = true;
	}
	
	draw(){
		this.ctxInfoLayer.clearRect(0,0,canvas.width, canvas.height);
		if(this.pausa){
			this.ctxInfoLayer.font = "bold 22px sans-serif";
			this.ctxInfoLayer.fillStyle = "#FFF";
			this.ctxInfoLayer.fillText("Press Space to start", 315, 530);
		}
	}
	
	drawGameOver(){
		this.ctxInfoLayer.font = "bold 22px sans-serif";
		this.ctxInfoLayer.fillStyle = "#FFF";
		this.ctxInfoLayer.fillText("GAME OVER", 330, 530);
	}
}