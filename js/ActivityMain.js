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

var fantasmaRojo = {
	x: 420,
	y: 345,
	vx: 0,
	vy: 0,
	color: "#F00",
	direccion: Direction.DEFAULT,
	direccionCorrecta: Direction.DEFAULT
};
var fantasmaNaranja = {
	x: 420,
	y: 345,
	vx: 0,
	vy: 0,
	color: "#F90",
	direccion: Direction.DEFAULT
};
var fantasmaVerde = {
	x: 420,
	y: 345,
	vx: 0,
	vy: 0,
	color: "#0F0",
	direccion: Direction.DEFAULT,
	direccionCorrecta: Direction.DEFAULT
};
var fantasmaRosa = {
	x: 420,
	y: 345,
	vx: 0,
	vy: 0,
	color: "#F99",
	direccion: Direction.DEFAULT
};
function drawFantasma(x, y, color) {
	ctx.fillStyle = color;
	ctx.beginPath();
	ctx.moveTo(x - 16, y - 7);
	ctx.quadraticCurveTo(x - 14, y - 17, x - 4, y - 19);
	ctx.lineTo(x + 5, y - 19);
	ctx.quadraticCurveTo(x + 15, y - 17, x + 17, y - 7);
	ctx.lineTo(x + 17, y + 19);
	ctx.lineTo(x + 11, y + 13);
	ctx.lineTo(x + 5, y + 19);
	ctx.lineTo(x + 1, y + 15);
	ctx.lineTo(x, y + 15);
	ctx.lineTo(x - 4, y + 19);
	ctx.lineTo(x - 10, y + 13);
	ctx.lineTo(x - 16, y + 19);
	ctx.lineTo(x - 16, y - 7);
	ctx.fill();
	ctx.fillStyle = "#FFF";
	ctx.fillRect(x - 7, y - 8, 4, 9);
	ctx.fillRect(x - 8, y - 7, 6, 7);
	ctx.fillRect(x + 5, y - 8, 4, 9);
	ctx.fillRect(x + 4, y - 7, 6, 7);
	ctx.fillStyle = "#000";
	ctx.fillRect(x - 7, y - 4, 2, 3);
	ctx.fillRect(x + 5, y - 4, 2, 3);
}
function draw() {
	//if (pausa) {
	map.draw();
	//}
	pacman.draw();
	map.drawCocos();
	drawFantasma(fantasmaRojo.x, fantasmaRojo.y, fantasmaRojo.color);
	drawFantasma(fantasmaNaranja.x, fantasmaNaranja.y, fantasmaNaranja.color);
	drawFantasma(fantasmaVerde.x, fantasmaVerde.y, fantasmaVerde.color);
	drawFantasma(fantasmaRosa.x, fantasmaRosa.y, fantasmaRosa.color);
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
	}
	if (direccion === Direction.RIGHT || direccion === Direction.LEFT) {
		if (Math.trunc((vertical) / 30) * 30 + 15 === vertical) {
			return true;
		}
	}
	return false;
}
function perserguirComecocos(horizontal, vertical) {
	var direcciones = ["", ""];
	recorridox = horizontal - pacman.x;
	recorridoy = vertical - pacman.y;
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
function moverFantasmaRojo(color) {
	if (!limite(fantasmaRojo.direccion, fantasmaRojo.x, fantasmaRojo.y) ||
			limite(fantasmaRojo.direccionCorrecta, fantasmaRojo.x, fantasmaRojo.y)) {
		var arrayDirecciones = perserguirComecocos(fantasmaRojo.x, fantasmaRojo.y);
		fantasmaRojo.direccion = arrayDirecciones[1];
		fantasmaRojo.direccionCorrecta = arrayDirecciones[0];
	}
	switch (fantasmaRojo.direccion) {
		case Direction.UP:
			fantasmaRojo.vx = 0;
			fantasmaRojo.vy = -1;
			break;
		case Direction.DOWN:
			fantasmaRojo.vx = 0;
			fantasmaRojo.vy = 1;
			break;
		case Direction.RIGHT:
			fantasmaRojo.vx = 1;
			fantasmaRojo.vy = 0;
			break;
		case Direction.LEFT:
			fantasmaRojo.vx = -1;
			fantasmaRojo.vy = 0;
			break;
	}
	fantasmaRojo.x += fantasmaRojo.vx * 5;
	fantasmaRojo.y += fantasmaRojo.vy * 5;
}
function moverFantasmaVerde() {
	if (!limite(fantasmaVerde.direccion, fantasmaVerde.x, fantasmaVerde.y) ||
			limite(fantasmaVerde.direccionCorrecta, fantasmaVerde.x, fantasmaVerde.y)) {
		var arrayDirecciones = perserguirComecocos(fantasmaVerde.x, fantasmaVerde.y);
		fantasmaVerde.direccion = arrayDirecciones[1];
		fantasmaVerde.direccionCorrecta = arrayDirecciones[0];
	}
	switch (fantasmaVerde.direccion) {
		case Direction.UP:
			fantasmaVerde.vx = 0;
			fantasmaVerde.vy = -1;
			break;
		case Direction.DOWN:
			fantasmaVerde.vx = 0;
			fantasmaVerde.vy = 1;
			break;
		case Direction.RIGHT:
			fantasmaVerde.vx = 1;
			fantasmaVerde.vy = 0;
			break;
		case Direction.LEFT:
			fantasmaVerde.vx = -1;
			fantasmaVerde.vy = 0;
			break;
	}
	fantasmaVerde.x += fantasmaVerde.vx * 2.5;
	fantasmaVerde.y += fantasmaVerde.vy * 2.5;
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
	if (fantasmaNaranja.direccion === Direction.LEFT || fantasmaNaranja.direccion === Direction.RIGHT) {
		if (limite(Direction.UP, fantasmaNaranja.x, fantasmaNaranja.y) ||
				limite(Direction.DOWN, fantasmaNaranja.x, fantasmaNaranja.y)) {
			fantasmaNaranja.direccion = nuevaDireccionNaranja(fantasmaNaranja.direccion, fantasmaNaranja.x, fantasmaNaranja.y);
		}
	} else if (limite(Direction.LEFT, fantasmaNaranja.x, fantasmaNaranja.y) ||
			limite(Direction.RIGHT, fantasmaNaranja.x, fantasmaNaranja.y)) {
		fantasmaNaranja.direccion = nuevaDireccionNaranja(fantasmaNaranja.direccion, fantasmaNaranja.x, fantasmaNaranja.y);
	} else if (!limite(fantasmaNaranja.direccion, fantasmaNaranja.x, fantasmaNaranja.y)) {
		fantasmaNaranja.direccion = nuevaDireccionNaranja(fantasmaNaranja.direccion, fantasmaNaranja.x, fantasmaNaranja.y);
	}
	if (fantasmaNaranja.x < 0) {
		fantasmaNaranja.x = canvas.width;
	}
	if (fantasmaNaranja.x > canvas.width) {
		fantasmaNaranja.x = 0;
	}
	switch (fantasmaNaranja.direccion) {
		case Direction.UP:
			fantasmaNaranja.vx = 0;
			fantasmaNaranja.vy = -1;
			break;
		case Direction.DOWN:
			fantasmaNaranja.vx = 0;
			fantasmaNaranja.vy = 1;
			break;
		case Direction.RIGHT:
			fantasmaNaranja.vx = 1;
			fantasmaNaranja.vy = 0;
			break;
		case Direction.LEFT:
			fantasmaNaranja.vx = -1;
			fantasmaNaranja.vy = 0;
			break;
	}
	fantasmaNaranja.x += fantasmaNaranja.vx * 5;
	fantasmaNaranja.y += fantasmaNaranja.vy * 5;
}
function moverFantasmaRosa() {
	if (fantasmaRosa.direccion === Direction.LEFT || fantasmaRosa.direccion === Direction.RIGHT) {
		if (limite(Direction.UP, fantasmaRosa.x, fantasmaRosa.y) ||
				limite(Direction.DOWN, fantasmaRosa.x, fantasmaRosa.y)) {
			fantasmaRosa.direccion = nuevaDireccionNaranja(fantasmaRosa.direccion, fantasmaRosa.x, fantasmaRosa.y);
		}
	} else if (limite(Direction.LEFT, fantasmaRosa.x, fantasmaRosa.y) ||
			limite(Direction.RIGHT, fantasmaRosa.x, fantasmaRosa.y)) {
		fantasmaRosa.direccion = nuevaDireccionNaranja(fantasmaRosa.direccion, fantasmaRosa.x, fantasmaRosa.y);
	} else if (!limite(fantasmaRosa.direccion, fantasmaRosa.x, fantasmaRosa.y)) {
		fantasmaRosa.direccion = nuevaDireccionNaranja(fantasmaRosa.direccion, fantasmaRosa.x, fantasmaRosa.y);
	}
	if (fantasmaRosa.x < 0) {
		fantasmaRosa.x = canvas.width;
	}
	if (fantasmaRosa.x > canvas.width) {
		fantasmaRosa.x = 0;
	}
	switch (fantasmaRosa.direccion) {
		case Direction.UP:
			fantasmaRosa.vx = 0;
			fantasmaRosa.vy = -1;
			break;
		case Direction.DOWN:
			fantasmaRosa.vx = 0;
			fantasmaRosa.vy = 1;
			break;
		case Direction.RIGHT:
			fantasmaRosa.vx = 1;
			fantasmaRosa.vy = 0;
			break;
		case Direction.LEFT:
			fantasmaRosa.vx = -1;
			fantasmaRosa.vy = 0;
			break;
	}
	fantasmaRosa.x += fantasmaRosa.vx * 5;
	fantasmaRosa.y += fantasmaRosa.vy * 5;
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
