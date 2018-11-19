/* global Status, PacmanStatus */

var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

var puntos = 0;
var map = new Map();
map.draw();
map.drawCocos();

var statusExecution = new StatusExecution(Status.PAUSE);
statusExecution.status = Status.PAUSE;
var Direction = {
	UP: 1,
	DOWN: 2,
	LEFT: 3,
	RIGHT: 4,
	DEFAULT: 0
};

var lifes = new Lifes();
lifes.drawAll();

var pacman = new Pacman();
var ghosts = new Ghosts();

drawCharacters();

function drawCharacters() {
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	ghosts.drawAll();
	if (statusExecution.status !== Status.GAMEOVER) {
		pacman.draw();
	}
}

function limit(direccion, horizontal, vertical) {
	var topey = 0;
	var topex = 0;
	switch (direccion) {
		case Direction.UP:
			topey = -16;
			topex = 0;
			break;
		case Direction.DOWN:
			topey = 15;
			topex = 0;
			break;
		case Direction.RIGHT:
			topey = 0;
			topex = 15;
			break;
		case Direction.LEFT:
			topey = 0;
			topex = -16;
			break;
	}
	var aux = map.arrayMapa[Math.trunc((vertical + topey) / 30)][Math.trunc((horizontal + topex) / 30)];
	if ((aux >= 1 && aux <= 3) && estaCentrado(direccion, horizontal, vertical)) {
		return true;
	} else {
		return false;
	}

}

function estaCentrado(direccion, horizontal, vertical) {
	var centrado = false;
	switch (direccion) {
		case Direction.UP:
		case Direction.DOWN:
			if (Math.trunc((horizontal) / 30) * 30 + 15 === horizontal) {
				centrado = true;
			}
			break;
		case Direction.RIGHT:
		case Direction.LEFT:
			if (Math.trunc((vertical) / 30) * 30 + 15 === vertical) {
				centrado = true;
			}
			break;
	}
	return centrado;
}

function numeroAleatorio() {
	var max = 5;
	var min = 1;
	return Math.floor(Math.random() * (max - min)) + min;
}

function direccionAleatoria(horizontal, vertical) {
	var direccion;
	do {
		direccion = numeroAleatorio();
	} while (!limit(direccion, horizontal, vertical));
	return direccion;
}

function getOppositeDirection(direction) {
	var dirContraria;
	switch (direction) {
		case Direction.UP:
			dirContraria = Direction.DOWN;
			break;
		case Direction.DOWN:
			dirContraria = Direction.UP;
			break;
		case Direction.RIGHT:
			dirContraria = Direction.LEFT;
			break;
		case Direction.LEFT:
			dirContraria = Direction.RIGHT;
			break;
		default:
			dirContraria = Direction.DEFAULT;
			break;
	}
	return dirContraria;
}

function newDirection(direccion, horizontal, vertical) {
	var dirContraria = getOppositeDirection(direccion);
	do {
		direccion = direccionAleatoria(horizontal, vertical);
	} while (direccion === dirContraria);
	return direccion;
}

var tecla;
function interaccion(e) {
	if (statusExecution.interactionAvailable) {
		tecla = e.keyCode;
		console.log(tecla);
		if (tecla === 32) {
			if (statusExecution.status === Status.RUN) {
				statusExecution.status = Status.PAUSE;
			} else {
				statusExecution.status = Status.RUN;
			}
			pacman.audioWaka.pause();
		}
	} else {
		tecla = null;
	}
	return false;
}

function canHeEatADot() {
	var result = false;
	if (estaCentrado(Direction.UP, pacman.x, pacman.y) && estaCentrado(Direction.LEFT, pacman.x, pacman.y)) {
		var auxY = Math.trunc((pacman.y) / 30);
		var auxX = Math.trunc((pacman.x) / 30);
		var cell = map.arrayMapa[auxY][auxX];
		if (cell !== 1) {
			map.arrayMapa[auxY][auxX] = 1;
			map.drawCocos();
			if (cell === 3) {
				pacman.status = PacmanStatus.KILLER;
				threadPacmanEatBigDot(pacman);
				puntos += 30;
			} else {
				puntos += 10;
			}
			document.getElementById("puntos").innerHTML = puntos;
			result = true;
		}
	}
	return result;
}

function accion() {
	document.onkeydown = interaccion;
	switch (statusExecution.status) {
		case Status.PAUSE :

			break;
		case Status.RUN :
			pacman.interaccion(tecla);
			var posibleDot = pacman.move();
			if (posibleDot) {
				if(canHeEatADot()){
					pacman.audioWaka.play();
				} else {
					pacman.audioWaka.pause();
				}
			} else {
				pacman.audioWaka.pause();
			}
			ghosts.moveAll();
			var deted = ghosts.detectTouchedGhost(pacman.x, pacman.y);
			if (deted.length > 0) {
				if (pacman.status === PacmanStatus.KILLER) {
					deted.forEach(function(ghost) {
						//MUST DIE THE GHOST
						ghost.resetPosition(420, 345);
					});
				} else {
					lifes.loseOne();
					statusExecution.status = Status.DYING;
				}
			}
			drawCharacters();
			break;
		case Status.DYING :
			var finish = pacman.drawDie();
			if (finish) {
				if (lifes.lifes > 0) {
					ghosts.resetPositions();
					statusExecution.status = Status.PAUSE;
				} else {
					statusExecution.status = Status.GAMEOVER;
				}
			}
			break;
		case Status.GAMEOVER :

			break;
	}
	window.requestAnimationFrame(accion);
}

document.addEventListener("load", accion());