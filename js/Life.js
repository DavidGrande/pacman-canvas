/* global Palette */

class Life{
	constructor(id){
		this.y = 10;
		this.x = 10;
		this.radio = 10;
		this.canvas = document.getElementById(id);
		this.ctxLife = this.canvas.getContext('2d');
	}
	draw(){
		this.ctxLife.fillStyle = Palette.YELLOW;
		this.ctxLife.beginPath();
		this.ctxLife.arc(this.x, this.y, this.radio, 1.75 * Math.PI, Math.PI / 4, true);
		this.ctxLife.lineTo(this.x, this.y);
		this.ctxLife.fill();
	}
	clear(){
		this.ctxLife.clearRect(0,0,this.canvas.width, this.canvas.height);
	}
}

class Lifes{
	constructor(){
		this.life1 = new Life("life-1");
		this.life2 = new Life("life-2");
		this.life3 = new Life("life-3");
		this.lifes = 3;
	}
	drawAll(){
		this.life1.draw();
		this.life2.draw();
		this.life3.draw();
	}
	loseOne(){
		this.lifes--;
		switch(this.lifes){
			case 2:
				this.life3.clear();
				break;
			case 1:
				this.life2.clear();
				break;
			case 0:
				this.life1.clear();
				break;
		}
	}
}