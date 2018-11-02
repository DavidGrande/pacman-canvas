/* global ctx, Direction */

class Pacman {
	constructor (){
		this.x = 420;
		this.y = 705;
		this.vx = 0;
		this.vy = 0;
		this.radio = 20;
		this.direccion = Direction.DEFAULT;
	}
	
	draw() {
		ctx.fillStyle = "rgb(255,255,0)";
		ctx.beginPath();
		switch (this.direccion) {
			case Direction.UP:
				ctx.arc(this.x, this.y, this.radio, 1.25 * Math.PI, Math.PI * 1.75, true);
				break;
			case Direction.DOWN:
				ctx.arc(this.x, this.y, this.radio, Math.PI / 4, Math.PI / 1.3, true);
				break;
			case Direction.LEFT:
				ctx.arc(this.x, this.y, this.radio, Math.PI / 1.4, 1.25 * Math.PI, true);
				break;
			case Direction.RIGHT:
				ctx.arc(this.x, this.y, this.radio, 1.75 * Math.PI, Math.PI / 4, true);
				break;
			default:
				ctx.arc(this.x, this.y, this.radio, 0, 2 * Math.PI, true);
				break;
		}
		ctx.lineTo(this.x, this.y);
		ctx.fill();
	}
}