/* global Direction, ctx, canvas, pacman */

class Ghosts {
	constructor(){
		this.ghostRed = new GhostFollower(420, 345, "#F00", 5);
		this.ghostOrange = new GhostRandom(420, 345, "#F90", 5);
		this.ghostGreen = new GhostFollower(420, 345, "#0F0", 2.5);
		this.ghostPink = new GhostRandom(420, 345, "#F99", 5);
	}
	
	drawAll(){
		this.ghostRed.draw();
		this.ghostOrange.draw();
		this.ghostGreen.draw();
		this.ghostPink.draw();
	}
	
	moveAll(){
		this.ghostRed.move();
		this.ghostOrange.move();
		this.ghostGreen.move();
		this.ghostPink.move();
	}
	
	detectTouchedGhost(x, y){
		var detected = [];
		if(this.ghostRed.ghostOverPacman(x, y)){
			detected.push(this.ghostRed);
		}
		if(this.ghostOrange.ghostOverPacman(x, y)){
			detected.push(this.ghostOrange);
		}
		if(this.ghostGreen.ghostOverPacman(x, y)){
			detected.push(this.ghostGreen);
		}
		if(this.ghostPink.ghostOverPacman(x, y)){
			detected.push(this.ghostPink);
		}
		return detected;
	}
	
	resetPositions(){
		this.ghostRed.resetPosition(420, 345);
		this.ghostOrange.resetPosition(420, 345);
		this.ghostGreen.resetPosition(420, 345);
		this.ghostPink.resetPosition(420, 345);
	}
}

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

	resetPosition(x , y){
		this.x = x;
		this.y = y;
	}

	ghostOverPacman(x, y){
		var result = false;
		if(x-40 <= this.x && x+40 >= this.x && y-40 <= this.y && y+40 >= this.y){
			result = true;
		}
		return result;
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
		if (!limit(this.direccion, this.x, this.y) || limit(this.direccionCorrecta, this.x, this.y)) {
			this.followPacman(this.x, this.y);
			this.changeDirection();
		}
		this.x += this.vx * this.speed;
		this.y += this.vy * this.speed;
	}
	
	followPacman(x, y) {
		var goTo;
		var recorridox = Math.abs(x - pacman.x);
		var recorridoy = Math.abs(y - pacman.y);
		if (recorridox >= recorridoy) {
			if (x <= pacman.x) {
				this.direccionCorrecta = Direction.RIGHT;
				if (limit(Direction.RIGHT, x, y)) {
					goTo = Direction.RIGHT;
				} else {
					goTo = this.newVerticalRute(x, y);
				}
			} else {
				this.direccionCorrecta = Direction.LEFT;
				if (limit(Direction.LEFT, x, y)) {
					goTo = Direction.LEFT;
				} else {
					goTo = this.newVerticalRute(x, y);
				}

			}
		} else {
			if (y >= pacman.y) {
				this.direccionCorrecta = Direction.UP;
				if (limit(Direction.UP, x, y)) {
					goTo = Direction.UP;
				} else {
					goTo = this.newHorizontalRute(x, y);
				}
			} else {
				this.direccionCorrecta = Direction.DOWN;
				if (limit(Direction.DOWN, x, y)) {
					goTo = Direction.DOWN;
				} else {
					goTo = this.newHorizontalRute(x, y);
				}
			}
		}
		this.direccion = goTo;
	}
	
	newVerticalRute(horizontal, vertical){
		var result;
		if (vertical >= pacman.y && limit(Direction.UP, horizontal, vertical)) {
			result = Direction.UP;
		} else if (limit(Direction.DOWN, horizontal, vertical)) {
			result = Direction.DOWN;
		} else {
			result = getOppositeDirection(this.direccionCorrecta);
		}
		return result;
	}
	
	newHorizontalRute(horizontal, vertical){
		var result;
		if (horizontal <= pacman.x && limit(Direction.RIGHT, horizontal, vertical)) {
			result = Direction.RIGHT;
		} else if (limit(Direction.LEFT, horizontal, vertical)) {
			result = Direction.LEFT;
		} else {
			result = getOppositeDirection(this.direccionCorrecta);
		}
		return result;
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