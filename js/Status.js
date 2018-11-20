/* global canvas, Palette */

var Status = {
	RUN: 1,
	DYING: 2,
	PAUSE: 3,
	GAMEOVER: 4
};

class StatusExecution {
	constructor() {
		this.ctxInfoLayer = document.getElementById('info-layer').getContext('2d');
		//this.touch = new Touch(320, 250, 15, 15);
		this.statusValue;
		this.interactionAvailable;
	}

	draw() {
		this.ctxInfoLayer.clearRect(0, 0, canvas.width, canvas.height);
		switch (this.statusValue) {
			case Status.RUN:
				break;
			case Status.DYING:
				break;
			case Status.PAUSE:
				this.ctxInfoLayer.font = "bold 22px sans-serif";
				this.ctxInfoLayer.fillStyle = Palette.WHITE;
				this.ctxInfoLayer.fillText("Press Space to start", 315, 530);
				break;
			case Status.GAMEOVER:
				this.ctxInfoLayer.font = "bold 22px sans-serif";
				this.ctxInfoLayer.fillStyle = Palette.WHITE;
				this.ctxInfoLayer.fillText("GAME OVER", 330, 530);
				break;
		}
	}
	
	set status (value){
		this.statusValue = value;
		switch(value){
			case Status.RUN:
			case Status.PAUSE:
				this.interactionAvailable = true;
				break;
			case Status.DYING:
			case Status.GAMEOVER:
				this.interactionAvailable = false;
				break;
		}
		this.draw();
	}
	
	get status (){
		return this.statusValue;
	}
}