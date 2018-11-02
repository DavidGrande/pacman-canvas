var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

var touch = new Touch(320, 250, 15, 15);

var puntos = 0;
var mapa = {
    arrayMapa: [
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0],
        [0, 2, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 2, 0, 0, 2, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 2, 0],
        [0, 2, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 2, 0, 0, 2, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 2, 0],
        [0, 3, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 2, 0, 0, 2, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 3, 0],
        [0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0],
        [0, 2, 0, 0, 0, 0, 2, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 2, 0, 0, 0, 0, 2, 0],
        [0, 2, 0, 0, 0, 0, 2, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 2, 0, 0, 0, 0, 2, 0],
        [0, 2, 2, 2, 2, 2, 2, 0, 0, 2, 2, 2, 2, 0, 0, 2, 2, 2, 2, 0, 0, 2, 2, 2, 2, 2, 2, 0],
        [0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 2, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 2, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 2, 0, 0, 1, 4, 4, 4, 4, 4, 4, 4, 4, 1, 0, 0, 2, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 2, 0, 0, 1, 4, 4, 4, 4, 4, 4, 4, 4, 1, 0, 0, 2, 0, 0, 0, 0, 0, 0],
        [1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 4, 4, 4, 4, 4, 4, 4, 4, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1],
        [0, 0, 0, 0, 0, 0, 2, 0, 0, 1, 4, 4, 4, 4, 4, 4, 4, 4, 1, 0, 0, 2, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 2, 0, 0, 1, 4, 4, 4, 4, 4, 4, 4, 4, 1, 0, 0, 2, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 2, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 2, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 2, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 2, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 2, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 2, 0, 0, 0, 0, 0, 0],
        [0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0],
        [0, 2, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 2, 0, 0, 2, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 2, 0],
        [0, 2, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 2, 0, 0, 2, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 2, 0],
        [0, 3, 2, 2, 0, 0, 2, 2, 2, 2, 2, 2, 2, 1, 1, 2, 2, 2, 2, 2, 2, 2, 0, 0, 2, 2, 3, 0],
        [0, 0, 0, 2, 0, 0, 2, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 2, 0, 0, 2, 0, 0, 0],
        [0, 0, 0, 2, 0, 0, 2, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 2, 0, 0, 2, 0, 0, 0],
        [0, 2, 2, 2, 2, 2, 2, 0, 0, 2, 2, 2, 2, 0, 0, 2, 2, 2, 2, 0, 0, 2, 2, 2, 2, 2, 2, 0],
        [0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0],
        [0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0],
        [0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    ],
    draw: function () {
        /*Fondo*/
        ctx.fillStyle = "rgb(0,0,0)";
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        /*Rectangulo de dentro*/
        ctx.fillStyle = "rgb(255,255,255)";
        ctx.fillRect(392, 376, 58, 5);
        ctx.beginPath();
        ctx.moveTo(315, 375);
        ctx.lineTo(391, 375);
        ctx.lineTo(391, 381);
        ctx.lineTo(321, 381);
        ctx.lineTo(321, 489);
        ctx.lineTo(519, 489);
        ctx.lineTo(519, 381);
        ctx.lineTo(450, 381);
        ctx.lineTo(450, 375);
        ctx.lineTo(525, 375);
        ctx.lineTo(525, 495);
        ctx.lineTo(315, 495);
        ctx.lineTo(315, 375);
        ctx.strokeStyle = "#0C28FF";
        ctx.stroke();


        /*Perimetro superior externo*/
        ctx.beginPath();
        ctx.moveTo(0, 391);
        ctx.lineTo(145, 391);
        ctx.quadraticCurveTo(151, 391, 151, 385);
        ctx.lineTo(151, 305);
        ctx.quadraticCurveTo(151, 299, 145, 299);
        ctx.lineTo(10, 299);
        ctx.quadraticCurveTo(0, 299, 0, 289);
        ctx.lineTo(0, 10);
        ctx.quadraticCurveTo(0, 0, 10, 0);
        ctx.lineTo(829, 0);
        ctx.quadraticCurveTo(839, 0, 839, 10);
        ctx.lineTo(839, 289);
        ctx.quadraticCurveTo(839, 299, 829, 299);
        ctx.lineTo(695, 299);
        ctx.quadraticCurveTo(689, 299, 689, 305);
        ctx.lineTo(689, 385);
        ctx.quadraticCurveTo(689, 391, 695, 391);
        ctx.lineTo(canvas.width, 391);
        ctx.stroke();

        /*Perimetro superior interno*/
        ctx.beginPath();
        ctx.moveTo(0, 405);
        ctx.lineTo(155, 405);
        ctx.quadraticCurveTo(165, 405, 165, 395);
        ctx.lineTo(165, 295);
        ctx.quadraticCurveTo(165, 285, 155, 285);
        ctx.lineTo(21, 285);
        ctx.quadraticCurveTo(15, 285, 15, 279);
        ctx.lineTo(15, 21);
        ctx.quadraticCurveTo(15, 15, 21, 15);
        ctx.lineTo(399, 15);
        ctx.quadraticCurveTo(405, 15, 405, 21);
        ctx.lineTo(405, 129);
        ctx.quadraticCurveTo(405, 135, 411, 135);
        ctx.lineTo(429, 135);
        ctx.quadraticCurveTo(435, 135, 435, 129);
        ctx.lineTo(435, 21);
        ctx.quadraticCurveTo(435, 15, 441, 15);
        ctx.lineTo(819, 15);
        ctx.quadraticCurveTo(825, 15, 825, 21);
        ctx.lineTo(825, 279);
        ctx.quadraticCurveTo(825, 285, 819, 285);
        ctx.lineTo(685, 285);
        ctx.quadraticCurveTo(675, 285, 675, 295);
        ctx.lineTo(675, 395);
        ctx.quadraticCurveTo(675, 405, 685, 405);
        ctx.lineTo(canvas.width, 405);
        ctx.stroke();

        /*Rectangulos superiores*/
        roundedRect(75, 75, 91, 61, 6);
        roundedRect(675, 75, 91, 61, 6);
        roundedRect(225, 75, 121, 61, 6);
        roundedRect(495, 75, 121, 61, 6);
        roundedRect(675, 195, 91, 31, 6);
        roundedRect(75, 195, 91, 31, 6);

        /*Figura poligonar superior izquierda*/
        ctx.beginPath();
        ctx.moveTo(231, 195);
        ctx.lineTo(249, 195);
        ctx.quadraticCurveTo(255, 195, 255, 201);
        ctx.lineTo(255, 279);
        ctx.quadraticCurveTo(255, 285, 261, 285);
        ctx.lineTo(339, 285);
        ctx.quadraticCurveTo(345, 285, 345, 291);
        ctx.lineTo(345, 309);
        ctx.quadraticCurveTo(345, 315, 339, 315);
        ctx.lineTo(261, 315);
        ctx.quadraticCurveTo(255, 315, 255, 321);
        ctx.lineTo(255, 399);
        ctx.quadraticCurveTo(255, 405, 249, 405);
        ctx.lineTo(231, 405);
        ctx.quadraticCurveTo(225, 405, 225, 399);
        ctx.lineTo(225, 201);
        ctx.quadraticCurveTo(225, 195, 231, 195);
        ctx.stroke();

        /*T superior*/
        makeT(315, 195);

        /*Figura poligonar superior derecha*/
        ctx.beginPath();
        ctx.moveTo(591, 195);
        ctx.lineTo(609, 195);
        ctx.quadraticCurveTo(615, 195, 615, 201);
        ctx.lineTo(615, 399);
        ctx.quadraticCurveTo(615, 405, 609, 405);
        ctx.lineTo(591, 405);
        ctx.quadraticCurveTo(585, 405, 585, 399);
        ctx.lineTo(585, 321);
        ctx.quadraticCurveTo(585, 315, 579, 315);
        ctx.lineTo(501, 315);
        ctx.quadraticCurveTo(495, 315, 495, 309);
        ctx.lineTo(495, 291);
        ctx.quadraticCurveTo(495, 285, 501, 285);
        ctx.lineTo(579, 285);
        ctx.quadraticCurveTo(585, 285, 585, 279);
        ctx.lineTo(585, 201);
        ctx.quadraticCurveTo(585, 195, 591, 195);
        ctx.stroke();

        /*Perimetro inferior externo*/
        ctx.beginPath();
        ctx.moveTo(0, 479);
        ctx.lineTo(145, 479);
        ctx.quadraticCurveTo(151, 479, 151, 485);
        ctx.lineTo(151, 565);
        ctx.quadraticCurveTo(151, 571, 145, 571);
        ctx.lineTo(10, 571);
        ctx.quadraticCurveTo(0, 571, 0, 581);
        ctx.lineTo(0, 919);
        ctx.quadraticCurveTo(0, 929, 10, 929);
        ctx.lineTo(829, 929);
        ctx.quadraticCurveTo(839, 929, 839, 919);
        ctx.lineTo(839, 581);
        ctx.quadraticCurveTo(839, 571, 829, 571);
        ctx.lineTo(695, 571);
        ctx.quadraticCurveTo(689, 571, 689, 565);
        ctx.lineTo(689, 485);
        ctx.quadraticCurveTo(689, 479, 695, 479);
        ctx.lineTo(canvas.width, 479);
        ctx.stroke();

        /*Perimetro inferior externo*/
        ctx.beginPath();
        ctx.moveTo(0, 465);
        ctx.lineTo(155, 465);
        ctx.quadraticCurveTo(165, 465, 165, 475);
        ctx.lineTo(165, 575);
        ctx.quadraticCurveTo(165, 585, 155, 585);
        ctx.lineTo(25, 585);
        ctx.quadraticCurveTo(15, 585, 15, 591);
        ctx.lineTo(15, 729);
        ctx.quadraticCurveTo(15, 735, 21, 735);
        ctx.lineTo(69, 735);
        ctx.quadraticCurveTo(75, 735, 75, 741);
        ctx.lineTo(75, 759);
        ctx.quadraticCurveTo(75, 765, 69, 765);
        ctx.lineTo(21, 765);
        ctx.quadraticCurveTo(15, 765, 15, 771);
        ctx.lineTo(15, 909);
        ctx.quadraticCurveTo(15, 915, 21, 915);
        ctx.lineTo(819, 915);
        ctx.quadraticCurveTo(825, 915, 825, 909);
        ctx.lineTo(825, 771);
        ctx.quadraticCurveTo(825, 765, 820, 765);
        ctx.lineTo(771, 765);
        ctx.quadraticCurveTo(765, 765, 765, 759);
        ctx.lineTo(765, 741);
        ctx.quadraticCurveTo(765, 735, 771, 735);
        ctx.lineTo(819, 735);
        ctx.quadraticCurveTo(825, 735, 825, 729);
        ctx.lineTo(825, 591);
        ctx.quadraticCurveTo(825, 585, 819, 585);
        ctx.lineTo(685, 585);
        ctx.quadraticCurveTo(675, 585, 675, 575);
        ctx.lineTo(675, 475);
        ctx.quadraticCurveTo(675, 465, 685, 465);
        ctx.lineTo(canvas.width, 465);
        ctx.stroke();

        /*Rectangulos inferiores*/
        roundedRect(225, 465, 31, 121, 6);
        roundedRect(585, 465, 31, 121, 6);
        roundedRect(225, 645, 121, 31, 6);
        roundedRect(495, 645, 121, 31, 6);

        /*Tes inferiores*/
        makeT(315, 555);
        makeT(315, 733);

        /*L izquierda inferior*/
        ctx.beginPath();
        ctx.moveTo(81, 645);
        ctx.lineTo(159, 645);
        ctx.quadraticCurveTo(165, 645, 165, 651);
        ctx.lineTo(165, 759);
        ctx.quadraticCurveTo(165, 765, 159, 765);
        ctx.lineTo(141, 765);
        ctx.quadraticCurveTo(135, 765, 135, 759);
        ctx.lineTo(135, 681);
        ctx.quadraticCurveTo(135, 675, 129, 675);
        ctx.lineTo(81, 675);
        ctx.quadraticCurveTo(75, 675, 75, 669);
        ctx.lineTo(75, 651);
        ctx.quadraticCurveTo(75, 645, 81, 645);
        ctx.stroke();

        /*L derecha inferior*/
        ctx.beginPath();
        ctx.moveTo(681, 645);
        ctx.lineTo(759, 645);
        ctx.quadraticCurveTo(765, 645, 765, 651);
        ctx.lineTo(765, 669);
        ctx.quadraticCurveTo(765, 675, 759, 675);
        ctx.lineTo(711, 675);
        ctx.quadraticCurveTo(705, 675, 705, 681);
        ctx.lineTo(705, 759);
        ctx.quadraticCurveTo(705, 765, 699, 765);
        ctx.lineTo(681, 765);
        ctx.quadraticCurveTo(675, 765, 675, 759);
        ctx.lineTo(675, 651);
        ctx.quadraticCurveTo(675, 645, 681, 645);
        ctx.stroke();

        /*T invertida inferior izquierda*/
        ctx.beginPath();
        ctx.moveTo(231, 735);
        ctx.lineTo(249, 735);
        ctx.quadraticCurveTo(255, 735, 255, 741);
        ctx.lineTo(255, 819);
        ctx.quadraticCurveTo(255, 825, 261, 825);
        ctx.lineTo(339, 825);
        ctx.quadraticCurveTo(345, 825, 345, 831);
        ctx.lineTo(345, 849);
        ctx.quadraticCurveTo(345, 855, 339, 855);
        ctx.lineTo(81, 855);
        ctx.quadraticCurveTo(75, 855, 75, 849);
        ctx.lineTo(75, 831);
        ctx.quadraticCurveTo(75, 825, 81, 825);
        ctx.lineTo(219, 825);
        ctx.quadraticCurveTo(225, 825, 225, 819);
        ctx.lineTo(225, 741);
        ctx.quadraticCurveTo(225, 735, 231, 735);
        ctx.stroke();

        /*T invertida inferior derecha*/
        ctx.beginPath();
        ctx.moveTo(591, 735);
        ctx.lineTo(609, 735);
        ctx.quadraticCurveTo(615, 735, 615, 741);
        ctx.lineTo(615, 819);
        ctx.quadraticCurveTo(615, 825, 621, 825);
        ctx.lineTo(759, 825);
        ctx.quadraticCurveTo(765, 825, 765, 831);
        ctx.lineTo(765, 849);
        ctx.quadraticCurveTo(765, 855, 759, 855);
        ctx.lineTo(501, 855);
        ctx.quadraticCurveTo(495, 855, 495, 849);
        ctx.lineTo(495, 831);
        ctx.quadraticCurveTo(495, 825, 501, 825);
        ctx.lineTo(579, 825);
        ctx.quadraticCurveTo(585, 825, 585, 819);
        ctx.lineTo(585, 741);
        ctx.quadraticCurveTo(585, 735, 591, 735);
        ctx.stroke();

    }
};
function drawCocos() {
    /*DIBUJAR COCOS*/
    ctx.fillStyle = "#FFF";
    for (i = 1; i < 31; i++) {
        for (j = 1; j < 29; j++) {
            if (mapa.arrayMapa[i][j] === 2) {
                ctx.beginPath();
                ctx.arc((j) * 30 + 15, (i) * 30 + 15, 3, 0, Math.PI * 2, true);
                ctx.fill();
            } else if (mapa.arrayMapa[i][j] === 3) {
                ctx.beginPath();
                ctx.arc((j) * 30 + 15, (i) * 30 + 15, 5, 0, Math.PI * 2, true);
                ctx.fill();
            }
        }
    }
}
var comecocos = {
    x: 420,
    y: 705,
    vx: 0,
    vy: 0,
    radio: 20,
    direccion: "",
    draw: function () {
        /*COMECOCOS*/
        /*ctx.fillStyle = "rgb(0,0,0)";
         ctx.beginPath();
         ctx.arc(this.x, this.y, this.radio + 6, 0, 2 * Math.PI, true);
         ctx.fill();*/
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
function roundedRect(x, y, width, height, radius) {
    ctx.beginPath();
    ctx.moveTo(x, y + radius);
    ctx.lineTo(x, y + height - radius);
    ctx.arcTo(x, y + height, x + radius, y + height, radius);
    ctx.lineTo(x + width - radius, y + height);
    ctx.arcTo(x + width, y + height, x + width, y + height - radius, radius);
    ctx.lineTo(x + width, y + radius);
    ctx.arcTo(x + width, y, x + width - radius, y, radius);
    ctx.lineTo(x + radius, y);
    ctx.arcTo(x, y, x, y + radius, radius);
    ctx.stroke();
}
function makeT(x, y) {
    ctx.beginPath();
    ctx.moveTo(x + 6, y);
    ctx.lineTo(x + 205, y);
    ctx.quadraticCurveTo(x + 211, y, x + 211, y + 6);
    ctx.lineTo(x + 211, y + 25);
    ctx.quadraticCurveTo(x + 211, y + 31, x + 205, y + 31);
    ctx.lineTo(x + 127, y + 31);
    ctx.quadraticCurveTo(x + 121, y + 31, x + 121, y + 37);
    ctx.lineTo(x + 121, y + 115);
    ctx.quadraticCurveTo(x + 121, y + 121, x + 115, y + 121);
    ctx.lineTo(x + 97, y + 121);
    ctx.quadraticCurveTo(x + 91, y + 121, x + 91, y + 115);
    ctx.lineTo(x + 91, y + 37);
    ctx.quadraticCurveTo(x + 91, y + 31, x + 85, y + 31);
    ctx.lineTo(x + 6, y + 31);
    ctx.quadraticCurveTo(x, y + 31, x, y + 25);
    ctx.lineTo(x, y + 6);
    ctx.quadraticCurveTo(x, y, x + 6, y);
    ctx.stroke();
}
function draw() {
    //if (pausa) {
    mapa.draw();
    //}
    comecocos.draw();
    drawCocos();
    drawFantasma(fantasmaRojo.x, fantasmaRojo.y, fantasmaRojo.color);
    drawFantasma(fantasmaNaranja.x, fantasmaNaranja.y, fantasmaNaranja.color);
    drawFantasma(fantasmaVerde.x, fantasmaVerde.y, fantasmaVerde.color);
    drawFantasma(fantasmaRosa.x, fantasmaRosa.y, fantasmaRosa.color);
    if(pausa) {
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
    if ((mapa.arrayMapa[Math.trunc((vertical + topey) / 30)][Math.trunc((horizontal + topex) / 30)] === 1 ||
            mapa.arrayMapa[Math.trunc((vertical + topey) / 30)][Math.trunc((horizontal + topex) / 30)] === 2 ||
            mapa.arrayMapa[Math.trunc((vertical + topey) / 30)][Math.trunc((horizontal + topex) / 30)] === 3) &&
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
                    mapa.arrayMapa[Math.trunc((comecocos.y) / 30)][Math.trunc((comecocos.x) / 30)] !== 1) {
                mapa.arrayMapa[Math.trunc((comecocos.y) / 30)][Math.trunc((comecocos.x) / 30)] = 1;
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
