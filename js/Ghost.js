/* global Direction, ctx */

class Ghost{
	constructor (x, y, color){
		this.x = x,
		this.y = y;
		this.vx = 0;
		this.vy = 0;
		this.color = color;
		this.direccion = Direction.DEFAULT;
		this.direccionCorrecta = Direction.DEFAUL;
	}
	
	draw() {
		ctx.fillStyle = this.color;
		ctx.beginPath();
		ctx.moveTo(this.x - 16, this.y - 7);
		ctx.quadraticCurveTo(this.x - 14,this.y - 17,this.x - 4,this.y - 19);
		ctx.lineTo(this.x + 5, this.y - 19);
		ctx.quadraticCurveTo(this.x + 15,this.y - 17,this.x + 17,this.y - 7);
		ctx.lineTo(this.x + 17,this.y + 19);
		ctx.lineTo(this.x + 11,this.y + 13);
		ctx.lineTo(this.x + 5,this.y + 19);
		ctx.lineTo(this.x + 1,this.y + 15);
		ctx.lineTo(this.x,this.y + 15);
		ctx.lineTo(this.x - 4,this.y + 19);
		ctx.lineTo(this.x - 10,this.y + 13);
		ctx.lineTo(this.x - 16,this.y + 19);
		ctx.lineTo(this.x - 16,this.y - 7);
		ctx.fill();
		ctx.fillStyle = "#FFF";
		ctx.fillRect(this.x - 7, this.y - 8, 4, 9);
		ctx.fillRect(this.x - 8, this.y - 7, 6, 7);
		ctx.fillRect(this.x + 5, this.y - 8, 4, 9);
		ctx.fillRect(this.x + 4, this.y - 7, 6, 7);
		ctx.fillStyle = "#000";
		ctx.fillRect(this.x - 7, this.y - 4, 2, 3);
		ctx.fillRect(this.x + 5, this.y - 4, 2, 3);
	}
}

