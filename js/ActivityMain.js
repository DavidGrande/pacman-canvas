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

var lifes = new Lifes();
lifes.drawAll();

var pacman = new Pacman();
var ghosts = new Ghosts();

drawCharacters();

function drawCharacters() {
	ctx.clearRect(0,0,canvas.width, canvas.height);
	pacman.draw();
	ghosts.drawAll();
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
	switch(direccion){
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

function getOppositeDirection(direction){
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
//var value = false;
function lose(){
	if(lifes.lifes > 0){
		lifes.loseOne();
		ghosts.resetPositions();
		pacman.resetPosition();
		pausa = info.pausa;
		info.pausa = !pausa;
		info.draw();
	} else {
		pausa = info.pausa;
		info.pausa = !pausa;
		info.drawGameOver();
	}
	/*I HAVE TO FIX HOW PACMAN HOW*/
	/*value = pacman.drawDie();
	while(value === false){
		1 * 1;
	}*/
}

var tecla;

function interaccion(e) {
	tecla = e.keyCode;
	if (tecla === 32) {
		var pausa = info.pausa;
		info.pausa = !pausa;
		info.draw();
		pacman.audioWaka.pause();
	}
	return false;
}

function accion() {
	document.onkeydown = interaccion;
	if (!info.pausa) {
		pacman.interaccion(tecla);
		pacman.move();
		ghosts.moveAll();
		var deted = ghosts.detectTouchedGhost(pacman.x, pacman.y);
		if(deted){
			if(pacman.eatedBigCoco){
				//ghostX.die
			} else {
				lose();
			}
		}
		drawCharacters();
	}
	window.requestAnimationFrame(accion);
}

document.addEventListener("load", accion());