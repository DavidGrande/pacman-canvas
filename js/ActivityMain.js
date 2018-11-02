/*Globals declarations*/
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

var touch = new Touch(320, 250, 15, 15);

var puntos = 0;
var map = new Map();

var comecocos = {
	x: 420,
	y: 705,
	vx: 0,
	vy: 0,
	radio: 20,
	direccion: "",
	draw: function () {
		ctx.fillStyle = "rgb(255,255,0)";
		ctx.beginPath();
		switch (this.direccion) {
			case "UP":
				ctx.arc(this.x, this.y, this.radio, 1.25 * Math.PI, Math.PI * 1.75, true);
				break;
			case "DOWN":
				ctx.arc(this.x, this.y, this.radio, Math.PI / 4, Math.PI / 1.3, true);
				break;
			case "LEFT":
				ctx.arc(this.x, this.y, this.radio, Math.PI / 1.4, 1.25 * Math.PI, true);
				break;
			case "RIGHT":
				ctx.arc(this.x, this.y, this.radio, 1.75 * Math.PI, Math.PI / 4, true);
				break;
			default:
				ctx.arc(this.x, this.y, this.radio, 0, 2 * Math.PI, true);
				break;
		}
		ctx.lineTo(this.x, this.y);
		ctx.fill();
	}
};
var fantasmaRojo = {
	x: 420,
	y: 345,
	vx: 0,
	vy: 0,
	color: "#F00",
	direccion: "",
	direccionCorrecta: ""
};
var fantasmaNaranja = {
	x: 420,
	y: 345,
	vx: 0,
	vy: 0,
	color: "#F90",
	direccion: "UP"
};
var fantasmaVerde = {
	x: 420,
	y: 345,
	vx: 0,
	vy: 0,
	color: "#0F0",
	direccion: "",
	direccionCorrecta: ""
};
var fantasmaRosa = {
	x: 420,
	y: 345,
	vx: 0,
	vy: 0,
	color: "#F99",
	direccion: "UP"
};
function drawFantasma(x, y, color) {
	//ctx.fillStyle = "black";
	//ctx.fillRect(x-21,y-24,44,49);
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
	comecocos.draw();
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
		case "UP":
			topey = -16;
			topex = 0;
			break;
		case "DOWN":
			topey = 15;
			topex = 0;
			break;
		case "RIGHT":
			topey = 0;
			topex = 15;
			break;
		case "LEFT":
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
	if (direccion === "UP" || direccion === "DOWN") {
		if (Math.trunc((horizontal) / 30) * 30 + 15 === horizontal) {
			return true;
		}
	}
	if (direccion === "RIGHT" || direccion === "LEFT") {
		if (Math.trunc((vertical) / 30) * 30 + 15 === vertical) {
			return true;
		}
	}
	return false;
}
function perserguirComecocos(horizontal, vertical) {
	var direcciones = ["", ""];
	recorridox = horizontal - comecocos.x;
	recorridoy = vertical - comecocos.y;
	if (Math.abs(recorridox) >= Math.abs(recorridoy)) {
		if (horizontal <= comecocos.x) {
			direcciones[0] = "RIGHT";
			if (limite("RIGHT", horizontal, vertical)) {
				direcciones[1] = "RIGHT";
			} else {
				if (vertical >= comecocos.y && limite("UP", horizontal, vertical)) {
					direcciones[1] = "UP";
				} else if (limite("DOWN", horizontal, vertical)) {
					direcciones[1] = "DOWN";
				} else {
					direcciones[1] = "LEFT";
				}
			}
		} else {
			direcciones[0] = "LEFT";
			if (limite("LEFT", horizontal, vertical)) {
				direcciones[1] = "LEFT";
			} else {
				if (vertical >= comecocos.y && limite("UP", horizontal, vertical)) {
					direcciones[1] = "UP";
				} else if (limite("DOWN", horizontal, vertical)) {
					direcciones[1] = "DOWN";
				} else {
					direcciones[1] = "LEFT";
				}
			}

		}
	} else {
		if (vertical >= comecocos.y) {
			direcciones[0] = "UP";
			if (limite("UP", horizontal, vertical)) {
				direcciones[1] = "UP";
			} else {
				if (horizontal <= comecocos.x && limite("RIGHT", horizontal, vertical)) {
					direcciones[1] = "RIGHT";
				} else {
					direcciones[1] = "LEFT";
				}
			}
		} else {
			direcciones[0] = "DOWN";
			if (limite("DOWN", horizontal, vertical)) {
				direcciones[1] = "DOWN";
			} else {
				if (horizontal <= comecocos.x && limite("RIGHT", horizontal, vertical)) {
					direcciones[1] = "RIGHT";
				} else {
					direcciones[1] = "LEFT";
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
		case "UP":
			fantasmaRojo.vx = 0;
			fantasmaRojo.vy = -1;
			break;
		case "DOWN":
			fantasmaRojo.vx = 0;
			fantasmaRojo.vy = 1;
			break;
		case "RIGHT":
			fantasmaRojo.vx = 1;
			fantasmaRojo.vy = 0;
			break;
		case "LEFT":
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
		case "UP":
			fantasmaVerde.vx = 0;
			fantasmaVerde.vy = -1;
			break;
		case "DOWN":
			fantasmaVerde.vx = 0;
			fantasmaVerde.vy = 1;
			break;
		case "RIGHT":
			fantasmaVerde.vx = 1;
			fantasmaVerde.vy = 0;
			break;
		case "LEFT":
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
				direccion = "UP";
				break;
			case 1:
				direccion = "DOWN";
				break;
			case 2:
				direccion = "RIGHT";
				break;
			case 3:
				direccion = "LEFT";
				break;
		}
	} while (!limite(direccion, horizontal, vertical));
	return direccion;
}
function nuevaDireccionNaranja(direccion, horizontal, vertical) {
	var dirContraria;
	switch (direccion) {
		case "UP":
			dirContraria = "DOWN";
			break;
		case "DOWN":
			dirContraria = "UP";
			break;
		case "RIGHT":
			dirContraria = "LEFT";
			break;
		case "LEFT":
			dirContraria = "RIGHT";
			break;
		default:
			dirContraria = "NOTHING";
			break;
	}
	do {
		direccion = direccionAleatoria(horizontal, vertical);
	} while (direccion === dirContraria);
	return direccion;
}
function moverFantasmaNaranja() {
	if (fantasmaNaranja.direccion === "LEFT" || fantasmaNaranja.direccion === "RIGHT") {
		if (limite("UP", fantasmaNaranja.x, fantasmaNaranja.y) ||
				limite("DOWN", fantasmaNaranja.x, fantasmaNaranja.y)) {
			fantasmaNaranja.direccion = nuevaDireccionNaranja(fantasmaNaranja.direccion, fantasmaNaranja.x, fantasmaNaranja.y);
		}
	} else if (limite("LEFT", fantasmaNaranja.x, fantasmaNaranja.y) ||
			limite("RIGHT", fantasmaNaranja.x, fantasmaNaranja.y)) {
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
		case "UP":
			fantasmaNaranja.vx = 0;
			fantasmaNaranja.vy = -1;
			break;
		case "DOWN":
			fantasmaNaranja.vx = 0;
			fantasmaNaranja.vy = 1;
			break;
		case "RIGHT":
			fantasmaNaranja.vx = 1;
			fantasmaNaranja.vy = 0;
			break;
		case "LEFT":
			fantasmaNaranja.vx = -1;
			fantasmaNaranja.vy = 0;
			break;
	}
	fantasmaNaranja.x += fantasmaNaranja.vx * 5;
	fantasmaNaranja.y += fantasmaNaranja.vy * 5;
}
function moverFantasmaRosa() {
	if (fantasmaRosa.direccion === "LEFT" || fantasmaRosa.direccion === "RIGHT") {
		if (limite("UP", fantasmaRosa.x, fantasmaRosa.y) ||
				limite("DOWN", fantasmaRosa.x, fantasmaRosa.y)) {
			fantasmaRosa.direccion = nuevaDireccionNaranja(fantasmaRosa.direccion, fantasmaRosa.x, fantasmaRosa.y);
		}
	} else if (limite("LEFT", fantasmaRosa.x, fantasmaRosa.y) ||
			limite("RIGHT", fantasmaRosa.x, fantasmaRosa.y)) {
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
		case "UP":
			fantasmaRosa.vx = 0;
			fantasmaRosa.vy = -1;
			break;
		case "DOWN":
			fantasmaRosa.vx = 0;
			fantasmaRosa.vy = 1;
			break;
		case "RIGHT":
			fantasmaRosa.vx = 1;
			fantasmaRosa.vy = 0;
			break;
		case "LEFT":
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
			if (limite("DOWN", comecocos.x, comecocos.y)) {
				comecocos.vx = 0;
				comecocos.vy = 1;
				comecocos.direccion = "DOWN";
			}
		}
		if (tecla === KEY_UP) {
			if (limite("UP", comecocos.x, comecocos.y)) {
				comecocos.vx = 0;
				comecocos.vy = -1;
				comecocos.direccion = "UP";
			}
		}
		if (tecla === KEY_RIGHT && comecocos.direccion !== "RIGHT") {
			if (limite("RIGHT", comecocos.x, comecocos.y)) {
				comecocos.vx = 1;
				comecocos.vy = 0;
				comecocos.direccion = "RIGHT";
			}
		}
		if (tecla === KEY_LEFT && comecocos.direccion !== "LEFT") {
			if (limite("LEFT", comecocos.x, comecocos.y)) {
				comecocos.vx = -1;
				comecocos.vy = 0;
				comecocos.direccion = "LEFT";
			}
		}
		if (limite(comecocos.direccion, comecocos.x, comecocos.y)) {
			comecocos.x += comecocos.vx * 5;
			comecocos.y += comecocos.vy * 5;
			if (comecocos.x < 0) {
				comecocos.x = canvas.width - 15;
			} else if (comecocos.x + 16 > canvas.width) {
				comecocos.x = 0;
			}
			if (estaCentrado("UP", comecocos.x, comecocos.y) && estaCentrado("LEFT", comecocos.x, comecocos.y) &&
					map.arrayMapa[Math.trunc((comecocos.y) / 30)][Math.trunc((comecocos.x) / 30)] !== 1) {
				map.arrayMapa[Math.trunc((comecocos.y) / 30)][Math.trunc((comecocos.x) / 30)] = 1;
				puntos += 10;
				document.getElementById("puntos").innerHTML = puntos;
			}
		} else {
			comecocos.direccion = "";
		}
		moverFantasmas();
	}
	window.requestAnimationFrame(accion);
}
