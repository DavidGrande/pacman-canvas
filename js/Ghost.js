/* global Direction, ctx, canvas */

class Ghost {
	constructor(x, y, color, speed) {
		this.x = x,
		this.y = y;
		this.vx = 0;
		this.vy = 0;
		this.color = color;
		this.direccion = Direction.DEFAULT;
		this.direccionCorrecta = Direction.DEFAULT;
		this.speed = speed;
	}

	draw() {
		ctx.fillStyle = this.color;
		ctx.beginPath();
		ctx.moveTo(this.x - 16, this.y - 7);
		ctx.quadraticCurveTo(this.x - 14, this.y - 17, this.x - 4, this.y - 19);
		ctx.lineTo(this.x + 5, this.y - 19);
		ctx.quadraticCurveTo(this.x + 15, this.y - 17, this.x + 17, this.y - 7);
		ctx.lineTo(this.x + 17, this.y + 19);
		ctx.lineTo(this.x + 11, this.y + 13);
		ctx.lineTo(this.x + 5, this.y + 19);
		ctx.lineTo(this.x + 1, this.y + 15);
		ctx.lineTo(this.x, this.y + 15);
		ctx.lineTo(this.x - 4, this.y + 19);
		ctx.lineTo(this.x - 10, this.y + 13);
		ctx.lineTo(this.x - 16, this.y + 19);
		ctx.lineTo(this.x - 16, this.y - 7);
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

	changeDirection(){
		switch (this.direccion) {
			case Direction.UP:
				this.vx = 0;
				this.vy = -1;
				break;
			case Direction.DOWN:
				this.vx = 0;
				this.vy = 1;
				break;
			case Direction.RIGHT:
				this.vx = 1;
				this.vy = 0;
				break;
			case Direction.LEFT:
				this.vx = -1;
				this.vy = 0;
				break;
		}
	}
};

class GhostFollower extends Ghost {
	move() {
		var dirChanged = false;
		if (!limit(this.direccion, this.x, this.y) || limit(this.direccionCorrecta, this.x, this.y)) {
			var arrayDirecciones = perserguirComecocos(this.x, this.y);
			this.direccion = arrayDirecciones[1];
			this.direccionCorrecta = arrayDirecciones[0];
			dirChanged = true;
		}
		if(dirChanged){
			this.changeDirection();
		}
		this.x += this.vx * this.speed;
		this.y += this.vy * this.speed;
	}
};

class GhostRandom extends Ghost {
	move() {
		var dirChanged = false;
		if (this.direccion === Direction.LEFT || this.direccion === Direction.RIGHT) {
			if (limit(Direction.UP, this.x, this.y) ||
					limit(Direction.DOWN, this.x, this.y)) {
				this.direccion = newDirection(this.direccion, this.x, this.y);
				dirChanged = true;
			}
		} else if (limit(Direction.LEFT, this.x, this.y) ||
				limit(Direction.RIGHT, this.x, this.y)) {
			this.direccion = newDirection(this.direccion, this.x, this.y);
			dirChanged = true;
		} else if (!limit(this.direccion, this.x, this.y)) {
			this.direccion = newDirection(this.direccion, this.x, this.y);
			dirChanged = true;
		}
		if (this.x < 0) {
			this.x = canvas.width;
		} else if (this.x > canvas.width) {
			this.x = 0;
		}
		if(dirChanged){
			this.changeDirection();
		}
		this.x += this.vx * 5;
		this.y += this.vy * 5;
	}
};