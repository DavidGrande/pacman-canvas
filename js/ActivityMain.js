/*Globals declarations*/
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

var puntos = 0;
var map = new Map();
map.draw();
map.drawCocos();

var info = new Info();
info.draw();
var Direction = {
	UP: 1,
	DOWN: 2,
	LEFT: 3,
	RIGHT: 4,
	DEFAULT: 0
};

var pacman = new Pacman();

var ghostRed = new GhostFollower(420, 345, "#F00", 5);
var ghostOrange = new GhostRandom(420, 345, "#F90", 5);
var ghostGreen = new GhostFollower(420, 345, "#0F0", 2.5);
var ghostPink = new GhostRandom(420, 345, "#F99", 5);

function drawCharacters() {
	ctx.clearRect(0,0,canvas.width, canvas.height);
	pacman.draw();
	ghostRed.draw();
	ghostOrange.draw();
	ghostGreen.draw();
	ghostPink.draw();
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
	if (direccion === Direction.UP || direccion === Direction.DOWN) {
		if (Math.trunc((horizontal) / 30) * 30 + 15 === horizontal) {
			return true;
		}
	} else if (direccion === Direction.RIGHT || direccion === Direction.LEFT) {
		if (Math.trunc((vertical) / 30) * 30 + 15 === vertical) {
			return true;
		}
	}
	return false;
}
function perserguirComecocos(horizontal, vertical) {
	var direcciones = ["", ""];
	var recorridox = horizontal - pacman.x;
	var recorridoy = vertical - pacman.y;
	if (Math.abs(recorridox) >= Math.abs(recorridoy)) {
		if (horizontal <= pacman.x) {
			direcciones[0] = Direction.RIGHT;
			if (limit(Direction.RIGHT, horizontal, vertical)) {
				direcciones[1] = Direction.RIGHT;
			} else {
				if (vertical >= pacman.y && limit(Direction.UP, horizontal, vertical)) {
					direcciones[1] = Direction.UP;
				} else if (limit(Direction.DOWN, horizontal, vertical)) {
					direcciones[1] = Direction.DOWN;
				} else {
					direcciones[1] = Direction.LEFT;
				}
			}
		} else {
			direcciones[0] = Direction.LEFT;
			if (limit(Direction.LEFT, horizontal, vertical)) {
				direcciones[1] = Direction.LEFT;
			} else {
				if (vertical >= pacman.y && limit(Direction.UP, horizontal, vertical)) {
					direcciones[1] = Direction.UP;
				} else if (limit(Direction.DOWN, horizontal, vertical)) {
					direcciones[1] = Direction.DOWN;
				} else {
					direcciones[1] = Direction.LEFT;
				}
			}

		}
	} else {
		if (vertical >= pacman.y) {
			direcciones[0] = Direction.UP;
			if (limit(Direction.UP, horizontal, vertical)) {
				direcciones[1] = Direction.UP;
			} else {
				if (horizontal <= pacman.x && limit(Direction.RIGHT, horizontal, vertical)) {
					direcciones[1] = Direction.RIGHT;
				} else {
					direcciones[1] = Direction.LEFT;
				}
			}
		} else {
			direcciones[0] = Direction.DOWN;
			if (limit(Direction.DOWN, horizontal, vertical)) {
				direcciones[1] = Direction.DOWN;
			} else {
				if (horizontal <= pacman.x && limit(Direction.RIGHT, horizontal, vertical)) {
					direcciones[1] = Direction.RIGHT;
				} else {
					direcciones[1] = Direction.LEFT;
				}
			}
		}
	}
	return direcciones;
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

function newDirection(direccion, horizontal, vertical) {
	var dirContraria;
	switch (direccion) {
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
	do {
		direccion = direccionAleatoria(horizontal, vertical);
	} while (direccion === dirContraria);
	return direccion;
}

function moverFantasmas() {
	ghostRed.move();
	ghostOrange.move();
	ghostGreen.move();
	ghostPink.move();
}
var tecla;

function interaccion(e) {
	tecla = e.keyCode;
	if (tecla === 32) {
		var pausa = info.pausa;
		info.pausa = !pausa;
		info.draw();
	}
	return false;
}

function accion() {
	drawCharacters();
	var KEY_LEFT = 37;
	var KEY_UP = 38;
	var KEY_RIGHT = 39;
	var KEY_DOWN = 40;
	
	document.onkeydown = interaccion;

	if (!info.pausa) {
		switch (tecla) {
			case KEY_DOWN:
				if (limit(Direction.DOWN, pacman.x, pacman.y)) {
					pacman.vx = 0;
					pacman.vy = 1;
					pacman.direccion = Direction.DOWN;
				}
				break;
			case KEY_UP:
				if (limit(Direction.UP, pacman.x, pacman.y)) {
					pacman.vx = 0;
					pacman.vy = -1;
					pacman.direccion = Direction.UP;
				}
				break;
			case KEY_RIGHT:
				if (limit(Direction.RIGHT, pacman.x, pacman.y)) {
					pacman.vx = 1;
					pacman.vy = 0;
					pacman.direccion = Direction.RIGHT;
				}
				break;
			case KEY_LEFT:
				if (limit(Direction.LEFT, pacman.x, pacman.y)) {
					pacman.vx = -1;
					pacman.vy = 0;
					pacman.direccion = Direction.LEFT;
				}
				break;
		}
		if (limit(pacman.direccion, pacman.x, pacman.y)) {
			pacman.x += pacman.vx * 5;
			pacman.y += pacman.vy * 5;
			if (pacman.x < 0) {
				pacman.x = canvas.width - 15;
			} else if (pacman.x + 16 > canvas.width) {
				pacman.x = 0;
			}
			if (estaCentrado(Direction.UP, pacman.x, pacman.y) && estaCentrado(Direction.LEFT, pacman.x, pacman.y)){
				var auxY = Math.trunc((pacman.y) / 30);
				var auxX = Math.trunc((pacman.x) / 30);
				if(map.arrayMapa[auxY][auxX] !== 1) {
					map.arrayMapa[auxY][auxX] = 1;
					map.drawCocos();
					puntos += 10;
					document.getElementById("puntos").innerHTML = puntos;
				}
			}
		} else {
			pacman.direccion = Direction.DEFAULT;
		}
		moverFantasmas();
	}
	window.requestAnimationFrame(accion);
}

document.addEventListener("load", accion());