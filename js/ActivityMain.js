var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

var puntos = 0;
var map = new Map();
map.draw();
map.drawCocos();

var info = new Info();
info.drawPause();
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
	pausa = info.pausa;
	info.pausa = !pausa;
	if(lifes.lifes > 0){
		lifes.loseOne();
		info.drawPause();
	} else {
		pausa = info.pausa;
		info.pausa = !pausa;
		info.drawGameOver();
	}

	pacman.dying = true;
}

var tecla;

function interaccion(e) {
	tecla = e.keyCode;
	if (tecla === 32) {
		var pausa = info.pausa;
		info.pausa = !pausa;
		info.drawPause();
		pacman.audioWaka.pause();
	}
	return false;
}

function accion() {
	if(!pacman.dying){
		document.onkeydown = interaccion;
	}
	if (!info.pausa && pacman.dying === false) {
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
	if(pacman.dying){
		var deegres1 = pacman.deegres1;
		var deegres2 = pacman.deegres2;
		ctx.fillStyle = "rgb(255,255,0)";
		ctx.clearRect(pacman.x - pacman.radio, pacman.y - pacman.radio, pacman.radio * 2, pacman.radio * 2);
		ctx.beginPath();
		ctx.arc(pacman.x, pacman.y, pacman.radio, Math.PI + deegres2, Math.PI, true);
		ctx.lineTo(pacman.x, pacman.y);
		ctx.fill();
		ctx.beginPath();
		ctx.arc(pacman.x, pacman.y, pacman.radio, 3.14, deegres1, true);
		ctx.lineTo(pacman.x, pacman.y);
		ctx.fill();
		pacman.deegres1 += 0.1;
		pacman.deegres2 -= 0.1;
		console.log("PINTANDO PACMAN");
		if (deegres1 > Math.PI || deegres2 < 0) {
			pacman.resetPosition();
			ghosts.resetPositions();
		}
	}
	window.requestAnimationFrame(accion);
	
}

document.addEventListener("load", accion());