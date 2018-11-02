/*Globals declarations*/
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

/*UNUSED*/
var touch = new Touch(320, 250, 15, 15);

var puntos = 0;
var map = new Map();

var Direction = {
	UP : 1,
	DOWN : 2,
	LEFT : 3,
	RIGHT : 4,
	DEFAULT : 0
};

var pacman = new Pacman();

var ghostRed = new Ghost(420, 345, "#F00");
var ghostOrange = new Ghost(420, 345, "#F90");
var ghostGreen = new Ghost(420, 345, "#0F0");
var ghostPink = new Ghost(420, 345, "#F99");

function draw() {
	map.draw();
	pacman.draw();
	map.drawCocos();
	ghostRed.draw();
	ghostOrange.draw();
	ghostGreen.draw();
	ghostPink.draw();
	if (pausa) {
		ctx.font = "bold 22px sans-serif";
		ctx.fillStyle = "#FFF";
		ctx.fillText("Press Space to start", 300, 530);
	}
	//touch.draw();
}

function limite(direccion, horizontal, vertical) {
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
	if ((map.arrayMapa[Math.trunc((vertical + topey) / 30)][Math.trunc((horizontal + topex) / 30)] === 1 ||
			map.arrayMapa[Math.trunc((vertical + topey) / 30)][Math.trunc((horizontal + topex) / 30)] === 2 ||
			map.arrayMapa[Math.trunc((vertical + topey) / 30)][Math.trunc((horizontal + topex) / 30)] === 3) &&
			estaCentrado(direccion, horizontal, vertical)) {
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
	}else if (direccion === Direction.RIGHT || direccion === Direction.LEFT) {
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
			if (limite(Direction.RIGHT, horizontal, vertical)) {
				direcciones[1] = Direction.RIGHT;
			} else {
				if (vertical >= pacman.y && limite(Direction.UP, horizontal, vertical)) {
					direcciones[1] = Direction.UP;
				} else if (limite(Direction.DOWN, horizontal, vertical)) {
					direcciones[1] = Direction.DOWN;
				} else {
					direcciones[1] = Direction.LEFT;
				}
			}
		} else {
			direcciones[0] = Direction.LEFT;
			if (limite(Direction.LEFT, horizontal, vertical)) {
				direcciones[1] = Direction.LEFT;
			} else {
				if (vertical >= pacman.y && limite(Direction.UP, horizontal, vertical)) {
					direcciones[1] = Direction.UP;
				} else if (limite(Direction.DOWN, horizontal, vertical)) {
					direcciones[1] = Direction.DOWN;
				} else {
					direcciones[1] = Direction.LEFT;
				}
			}

		}
	} else {
		if (vertical >= pacman.y) {
			direcciones[0] = Direction.UP;
			if (limite(Direction.UP, horizontal, vertical)) {
				direcciones[1] = Direction.UP;
			} else {
				if (horizontal <= pacman.x && limite(Direction.RIGHT, horizontal, vertical)) {
					direcciones[1] = Direction.RIGHT;
				} else {
					direcciones[1] = Direction.LEFT;
				}
			}
		} else {
			direcciones[0] = Direction.DOWN;
			if (limite(Direction.DOWN, horizontal, vertical)) {
				direcciones[1] = Direction.DOWN;
			} else {
				if (horizontal <= pacman.x && limite(Direction.RIGHT, horizontal, vertical)) {
					direcciones[1] = Direction.RIGHT;
				} else {
					direcciones[1] = Direction.LEFT;
				}
			}
		}
	}
	return direcciones;
}
function moverFantasmaRojo() {
	if (!limite(ghostRed.direccion, ghostRed.x, ghostRed.y) ||
			limite(ghostRed.direccionCorrecta, ghostRed.x, ghostRed.y)) {
		var arrayDirecciones = perserguirComecocos(ghostRed.x, ghostRed.y);
		ghostRed.direccion = arrayDirecciones[1];
		ghostRed.direccionCorrecta = arrayDirecciones[0];
	}
	switch (ghostRed.direccion) {
		case Direction.UP:
			ghostRed.vx = 0;
			ghostRed.vy = -1;
			break;
		case Direction.DOWN:
			ghostRed.vx = 0;
			ghostRed.vy = 1;
			break;
		case Direction.RIGHT:
			ghostRed.vx = 1;
			ghostRed.vy = 0;
			break;
		case Direction.LEFT:
			ghostRed.vx = -1;
			ghostRed.vy = 0;
			break;
	}
	ghostRed.x += ghostRed.vx * 5;
	ghostRed.y += ghostRed.vy * 5;
}
function moverFantasmaVerde() {
	if (!limite(ghostGreen.direccion, ghostGreen.x, ghostGreen.y) ||
			limite(ghostGreen.direccionCorrecta, ghostGreen.x, ghostGreen.y)) {
		var arrayDirecciones = perserguirComecocos(ghostGreen.x, ghostGreen.y);
		ghostGreen.direccion = arrayDirecciones[1];
		ghostGreen.direccionCorrecta = arrayDirecciones[0];
	}
	switch (ghostGreen.direccion) {
		case Direction.UP:
			ghostGreen.vx = 0;
			ghostGreen.vy = -1;
			break;
		case Direction.DOWN:
			ghostGreen.vx = 0;
			ghostGreen.vy = 1;
			break;
		case Direction.RIGHT:
			ghostGreen.vx = 1;
			ghostGreen.vy = 0;
			break;
		case Direction.LEFT:
			ghostGreen.vx = -1;
			ghostGreen.vy = 0;
			break;
	}
	ghostGreen.x += ghostGreen.vx * 2.5;
	ghostGreen.y += ghostGreen.vy * 2.5;
}
function numeroAleatorio() {
	var max = 4;
	var min = 0;
	return Math.floor(Math.random() * (max - min)) + min;
}
function direccionAleatoria(horizontal, vertical) {
	var direccion;
	do {
		var rd = numeroAleatorio();
		switch (rd) {
			case 0:
				direccion = Direction.UP;
				break;
			case 1:
				direccion = Direction.DOWN;
				break;
			case 2:
				direccion = Direction.RIGHT;
				break;
			case 3:
				direccion = Direction.LEFT;
				break;
		}
	} while (!limite(direccion, horizontal, vertical));
	return direccion;
}
function nuevaDireccionNaranja(direccion, horizontal, vertical) {
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
function moverFantasmaNaranja() {
	if (ghostOrange.direccion === Direction.LEFT || ghostOrange.direccion === Direction.RIGHT) {
		if (limite(Direction.UP, ghostOrange.x, ghostOrange.y) ||
				limite(Direction.DOWN, ghostOrange.x, ghostOrange.y)) {
			ghostOrange.direccion = nuevaDireccionNaranja(ghostOrange.direccion, ghostOrange.x, ghostOrange.y);
		}
	} else if (limite(Direction.LEFT, ghostOrange.x, ghostOrange.y) ||
			limite(Direction.RIGHT, ghostOrange.x, ghostOrange.y)) {
		ghostOrange.direccion = nuevaDireccionNaranja(ghostOrange.direccion, ghostOrange.x, ghostOrange.y);
	} else if (!limite(ghostOrange.direccion, ghostOrange.x, ghostOrange.y)) {
		ghostOrange.direccion = nuevaDireccionNaranja(ghostOrange.direccion, ghostOrange.x, ghostOrange.y);
	}
	if (ghostOrange.x < 0) {
		ghostOrange.x = canvas.width;
	}
	if (ghostOrange.x > canvas.width) {
		ghostOrange.x = 0;
	}
	switch (ghostOrange.direccion) {
		case Direction.UP:
			ghostOrange.vx = 0;
			ghostOrange.vy = -1;
			break;
		case Direction.DOWN:
			ghostOrange.vx = 0;
			ghostOrange.vy = 1;
			break;
		case Direction.RIGHT:
			ghostOrange.vx = 1;
			ghostOrange.vy = 0;
			break;
		case Direction.LEFT:
			ghostOrange.vx = -1;
			ghostOrange.vy = 0;
			break;
	}
	ghostOrange.x += ghostOrange.vx * 5;
	ghostOrange.y += ghostOrange.vy * 5;
}
function moverFantasmaRosa() {
	if (ghostPink.direccion === Direction.LEFT || ghostPink.direccion === Direction.RIGHT) {
		if (limite(Direction.UP, ghostPink.x, ghostPink.y) ||
				limite(Direction.DOWN, ghostPink.x, ghostPink.y)) {
			ghostPink.direccion = nuevaDireccionNaranja(ghostPink.direccion, ghostPink.x, ghostPink.y);
		}
	} else if (limite(Direction.LEFT, ghostPink.x, ghostPink.y) ||
			limite(Direction.RIGHT, ghostPink.x, ghostPink.y)) {
		ghostPink.direccion = nuevaDireccionNaranja(ghostPink.direccion, ghostPink.x, ghostPink.y);
	} else if (!limite(ghostPink.direccion, ghostPink.x, ghostPink.y)) {
		ghostPink.direccion = nuevaDireccionNaranja(ghostPink.direccion, ghostPink.x, ghostPink.y);
	}
	if (ghostPink.x < 0) {
		ghostPink.x = canvas.width;
	}
	if (ghostPink.x > canvas.width) {
		ghostPink.x = 0;
	}
	switch (ghostPink.direccion) {
		case Direction.UP:
			ghostPink.vx = 0;
			ghostPink.vy = -1;
			break;
		case Direction.DOWN:
			ghostPink.vx = 0;
			ghostPink.vy = 1;
			break;
		case Direction.RIGHT:
			ghostPink.vx = 1;
			ghostPink.vy = 0;
			break;
		case Direction.LEFT:
			ghostPink.vx = -1;
			ghostPink.vy = 0;
			break;
	}
	ghostPink.x += ghostPink.vx * 5;
	ghostPink.y += ghostPink.vy * 5;
}
function moverFantasmas() {
	moverFantasmaRojo();
	moverFantasmaNaranja();
	moverFantasmaVerde();
	moverFantasmaRosa();
}
var tecla;
var pausa = true;
function accion() {
	draw();
	var KEY_LEFT = 37;
	var KEY_UP = 38;
	var KEY_RIGHT = 39;
	var KEY_DOWN = 40;
	var KEY_SPACE = 32;

	document.onkeydown = interaccion;
	function interaccion(e) {
		if (e.keyCode === KEY_SPACE) {
			if (pausa) {
				pausa = false;
			} else {
				pausa = true;
			}
		}
		if (!pausa) {
			tecla = e.keyCode;
		}
		return false;
	}
	if (!pausa) {
		if (tecla === KEY_DOWN) {
			if (limite(Direction.DOWN, pacman.x, pacman.y)) {
				pacman.vx = 0;
				pacman.vy = 1;
				pacman.direccion = Direction.DOWN;
			}
		}
		if (tecla === KEY_UP) {
			if (limite(Direction.UP, pacman.x, pacman.y)) {
				pacman.vx = 0;
				pacman.vy = -1;
				pacman.direccion = Direction.UP;
			}
		}
		if (tecla === KEY_RIGHT && pacman.direccion !== Direction.RIGHT) {
			if (limite(Direction.RIGHT, pacman.x, pacman.y)) {
				pacman.vx = 1;
				pacman.vy = 0;
				pacman.direccion = Direction.RIGHT;
			}
		}
		if (tecla === KEY_LEFT && pacman.direccion !== Direction.LEFT) {
			if (limite(Direction.LEFT, pacman.x, pacman.y)) {
				pacman.vx = -1;
				pacman.vy = 0;
				pacman.direccion = Direction.LEFT;
			}
		}
		if (limite(pacman.direccion, pacman.x, pacman.y)) {
			pacman.x += pacman.vx * 5;
			pacman.y += pacman.vy * 5;
			if (pacman.x < 0) {
				pacman.x = canvas.width - 15;
			} else if (pacman.x + 16 > canvas.width) {
				pacman.x = 0;
			}
			if (estaCentrado(Direction.UP, pacman.x, pacman.y) && estaCentrado(Direction.LEFT, pacman.x, pacman.y) &&
					map.arrayMapa[Math.trunc((pacman.y) / 30)][Math.trunc((pacman.x) / 30)] !== 1) {
				map.arrayMapa[Math.trunc((pacman.y) / 30)][Math.trunc((pacman.x) / 30)] = 1;
				puntos += 10;
				document.getElementById("puntos").innerHTML = puntos;
			}
		} else {
			pacman.direccion = "";
		}
		moverFantasmas();
	}
	window.requestAnimationFrame(accion);
}

document.addEventListener("load", accion());
