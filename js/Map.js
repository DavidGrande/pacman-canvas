/* global canvas */

class Map{
    constructor () {
        this.arrayMapa = [
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
        ];
		this.xLength = this.arrayMapa[0].length;
		this.yLength = this.arrayMapa.length;
		this.ctxGameLayer = document.getElementById('game-layer').getContext('2d', {alpha: true});
		this.pacDotLayer = new PacDotLayer;
    }
    
    draw() {
        /*Fondo*/
        this.ctxGameLayer.fillStyle = "rgb(0,0,0)";
        this.ctxGameLayer.fillRect(0, 0, canvas.width, canvas.height);

        /*Rectangulo de dentro*/
        this.ctxGameLayer.fillStyle = "rgb(255,255,255)";
        this.ctxGameLayer.fillRect(392, 376, 58, 5);
        this.ctxGameLayer.beginPath();
        this.ctxGameLayer.moveTo(315, 375);
        this.ctxGameLayer.lineTo(391, 375);
        this.ctxGameLayer.lineTo(391, 381);
        this.ctxGameLayer.lineTo(321, 381);
        this.ctxGameLayer.lineTo(321, 489);
        this.ctxGameLayer.lineTo(519, 489);
        this.ctxGameLayer.lineTo(519, 381);
        this.ctxGameLayer.lineTo(450, 381);
        this.ctxGameLayer.lineTo(450, 375);
        this.ctxGameLayer.lineTo(525, 375);
        this.ctxGameLayer.lineTo(525, 495);
        this.ctxGameLayer.lineTo(315, 495);
        this.ctxGameLayer.lineTo(315, 375);
        this.ctxGameLayer.strokeStyle = "#0C28FF";
        this.ctxGameLayer.stroke();


        /*Perimetro superior externo*/
        this.ctxGameLayer.beginPath();
        this.ctxGameLayer.moveTo(0, 391);
        this.ctxGameLayer.lineTo(145, 391);
        this.ctxGameLayer.quadraticCurveTo(151, 391, 151, 385);
        this.ctxGameLayer.lineTo(151, 305);
        this.ctxGameLayer.quadraticCurveTo(151, 299, 145, 299);
        this.ctxGameLayer.lineTo(10, 299);
        this.ctxGameLayer.quadraticCurveTo(0, 299, 0, 289);
        this.ctxGameLayer.lineTo(0, 10);
        this.ctxGameLayer.quadraticCurveTo(0, 0, 10, 0);
        this.ctxGameLayer.lineTo(829, 0);
        this.ctxGameLayer.quadraticCurveTo(839, 0, 839, 10);
        this.ctxGameLayer.lineTo(839, 289);
        this.ctxGameLayer.quadraticCurveTo(839, 299, 829, 299);
        this.ctxGameLayer.lineTo(695, 299);
        this.ctxGameLayer.quadraticCurveTo(689, 299, 689, 305);
        this.ctxGameLayer.lineTo(689, 385);
        this.ctxGameLayer.quadraticCurveTo(689, 391, 695, 391);
        this.ctxGameLayer.lineTo(canvas.width, 391);
        this.ctxGameLayer.stroke();

        /*Perimetro superior interno*/
        this.ctxGameLayer.beginPath();
        this.ctxGameLayer.moveTo(0, 405);
        this.ctxGameLayer.lineTo(155, 405);
        this.ctxGameLayer.quadraticCurveTo(165, 405, 165, 395);
        this.ctxGameLayer.lineTo(165, 295);
        this.ctxGameLayer.quadraticCurveTo(165, 285, 155, 285);
        this.ctxGameLayer.lineTo(21, 285);
        this.ctxGameLayer.quadraticCurveTo(15, 285, 15, 279);
        this.ctxGameLayer.lineTo(15, 21);
        this.ctxGameLayer.quadraticCurveTo(15, 15, 21, 15);
        this.ctxGameLayer.lineTo(399, 15);
        this.ctxGameLayer.quadraticCurveTo(405, 15, 405, 21);
        this.ctxGameLayer.lineTo(405, 129);
        this.ctxGameLayer.quadraticCurveTo(405, 135, 411, 135);
        this.ctxGameLayer.lineTo(429, 135);
        this.ctxGameLayer.quadraticCurveTo(435, 135, 435, 129);
        this.ctxGameLayer.lineTo(435, 21);
        this.ctxGameLayer.quadraticCurveTo(435, 15, 441, 15);
        this.ctxGameLayer.lineTo(819, 15);
        this.ctxGameLayer.quadraticCurveTo(825, 15, 825, 21);
        this.ctxGameLayer.lineTo(825, 279);
        this.ctxGameLayer.quadraticCurveTo(825, 285, 819, 285);
        this.ctxGameLayer.lineTo(685, 285);
        this.ctxGameLayer.quadraticCurveTo(675, 285, 675, 295);
        this.ctxGameLayer.lineTo(675, 395);
        this.ctxGameLayer.quadraticCurveTo(675, 405, 685, 405);
        this.ctxGameLayer.lineTo(canvas.width, 405);
        this.ctxGameLayer.stroke();

        /*Rectangulos superiores*/
        this.roundedRect(75, 75, 91, 61, 6);
        this.roundedRect(675, 75, 91, 61, 6);
        this.roundedRect(225, 75, 121, 61, 6);
        this.roundedRect(495, 75, 121, 61, 6);
        this.roundedRect(675, 195, 91, 31, 6);
        this.roundedRect(75, 195, 91, 31, 6);

        /*Figura poligonar superior izquierda*/
        this.ctxGameLayer.beginPath();
        this.ctxGameLayer.moveTo(231, 195);
        this.ctxGameLayer.lineTo(249, 195);
        this.ctxGameLayer.quadraticCurveTo(255, 195, 255, 201);
        this.ctxGameLayer.lineTo(255, 279);
        this.ctxGameLayer.quadraticCurveTo(255, 285, 261, 285);
        this.ctxGameLayer.lineTo(339, 285);
        this.ctxGameLayer.quadraticCurveTo(345, 285, 345, 291);
        this.ctxGameLayer.lineTo(345, 309);
        this.ctxGameLayer.quadraticCurveTo(345, 315, 339, 315);
        this.ctxGameLayer.lineTo(261, 315);
        this.ctxGameLayer.quadraticCurveTo(255, 315, 255, 321);
        this.ctxGameLayer.lineTo(255, 399);
        this.ctxGameLayer.quadraticCurveTo(255, 405, 249, 405);
        this.ctxGameLayer.lineTo(231, 405);
        this.ctxGameLayer.quadraticCurveTo(225, 405, 225, 399);
        this.ctxGameLayer.lineTo(225, 201);
        this.ctxGameLayer.quadraticCurveTo(225, 195, 231, 195);
        this.ctxGameLayer.stroke();

        /*T superior*/
        this.makeT(315, 195);

        /*Figura poligonar superior derecha*/
        this.ctxGameLayer.beginPath();
        this.ctxGameLayer.moveTo(591, 195);
        this.ctxGameLayer.lineTo(609, 195);
        this.ctxGameLayer.quadraticCurveTo(615, 195, 615, 201);
        this.ctxGameLayer.lineTo(615, 399);
        this.ctxGameLayer.quadraticCurveTo(615, 405, 609, 405);
        this.ctxGameLayer.lineTo(591, 405);
        this.ctxGameLayer.quadraticCurveTo(585, 405, 585, 399);
        this.ctxGameLayer.lineTo(585, 321);
        this.ctxGameLayer.quadraticCurveTo(585, 315, 579, 315);
        this.ctxGameLayer.lineTo(501, 315);
        this.ctxGameLayer.quadraticCurveTo(495, 315, 495, 309);
        this.ctxGameLayer.lineTo(495, 291);
        this.ctxGameLayer.quadraticCurveTo(495, 285, 501, 285);
        this.ctxGameLayer.lineTo(579, 285);
        this.ctxGameLayer.quadraticCurveTo(585, 285, 585, 279);
        this.ctxGameLayer.lineTo(585, 201);
        this.ctxGameLayer.quadraticCurveTo(585, 195, 591, 195);
        this.ctxGameLayer.stroke();

        /*Perimetro inferior externo*/
        this.ctxGameLayer.beginPath();
        this.ctxGameLayer.moveTo(0, 479);
        this.ctxGameLayer.lineTo(145, 479);
        this.ctxGameLayer.quadraticCurveTo(151, 479, 151, 485);
        this.ctxGameLayer.lineTo(151, 565);
        this.ctxGameLayer.quadraticCurveTo(151, 571, 145, 571);
        this.ctxGameLayer.lineTo(10, 571);
        this.ctxGameLayer.quadraticCurveTo(0, 571, 0, 581);
        this.ctxGameLayer.lineTo(0, 919);
        this.ctxGameLayer.quadraticCurveTo(0, 929, 10, 929);
        this.ctxGameLayer.lineTo(829, 929);
        this.ctxGameLayer.quadraticCurveTo(839, 929, 839, 919);
        this.ctxGameLayer.lineTo(839, 581);
        this.ctxGameLayer.quadraticCurveTo(839, 571, 829, 571);
        this.ctxGameLayer.lineTo(695, 571);
        this.ctxGameLayer.quadraticCurveTo(689, 571, 689, 565);
        this.ctxGameLayer.lineTo(689, 485);
        this.ctxGameLayer.quadraticCurveTo(689, 479, 695, 479);
        this.ctxGameLayer.lineTo(canvas.width, 479);
        this.ctxGameLayer.stroke();

        /*Perimetro inferior externo*/
        this.ctxGameLayer.beginPath();
        this.ctxGameLayer.moveTo(0, 465);
        this.ctxGameLayer.lineTo(155, 465);
        this.ctxGameLayer.quadraticCurveTo(165, 465, 165, 475);
        this.ctxGameLayer.lineTo(165, 575);
        this.ctxGameLayer.quadraticCurveTo(165, 585, 155, 585);
        this.ctxGameLayer.lineTo(25, 585);
        this.ctxGameLayer.quadraticCurveTo(15, 585, 15, 591);
        this.ctxGameLayer.lineTo(15, 729);
        this.ctxGameLayer.quadraticCurveTo(15, 735, 21, 735);
        this.ctxGameLayer.lineTo(69, 735);
        this.ctxGameLayer.quadraticCurveTo(75, 735, 75, 741);
        this.ctxGameLayer.lineTo(75, 759);
        this.ctxGameLayer.quadraticCurveTo(75, 765, 69, 765);
        this.ctxGameLayer.lineTo(21, 765);
        this.ctxGameLayer.quadraticCurveTo(15, 765, 15, 771);
        this.ctxGameLayer.lineTo(15, 909);
        this.ctxGameLayer.quadraticCurveTo(15, 915, 21, 915);
        this.ctxGameLayer.lineTo(819, 915);
        this.ctxGameLayer.quadraticCurveTo(825, 915, 825, 909);
        this.ctxGameLayer.lineTo(825, 771);
        this.ctxGameLayer.quadraticCurveTo(825, 765, 820, 765);
        this.ctxGameLayer.lineTo(771, 765);
        this.ctxGameLayer.quadraticCurveTo(765, 765, 765, 759);
        this.ctxGameLayer.lineTo(765, 741);
        this.ctxGameLayer.quadraticCurveTo(765, 735, 771, 735);
        this.ctxGameLayer.lineTo(819, 735);
        this.ctxGameLayer.quadraticCurveTo(825, 735, 825, 729);
        this.ctxGameLayer.lineTo(825, 591);
        this.ctxGameLayer.quadraticCurveTo(825, 585, 819, 585);
        this.ctxGameLayer.lineTo(685, 585);
        this.ctxGameLayer.quadraticCurveTo(675, 585, 675, 575);
        this.ctxGameLayer.lineTo(675, 475);
        this.ctxGameLayer.quadraticCurveTo(675, 465, 685, 465);
        this.ctxGameLayer.lineTo(canvas.width, 465);
        this.ctxGameLayer.stroke();

        /*Rectangulos inferiores*/
        this.roundedRect(225, 465, 31, 121, 6);
        this.roundedRect(585, 465, 31, 121, 6);
        this.roundedRect(225, 645, 121, 31, 6);
        this.roundedRect(495, 645, 121, 31, 6);

        /*Tes inferiores*/
        this.makeT(315, 555);
        this.makeT(315, 733);

        /*L izquierda inferior*/
        this.ctxGameLayer.beginPath();
        this.ctxGameLayer.moveTo(81, 645);
        this.ctxGameLayer.lineTo(159, 645);
        this.ctxGameLayer.quadraticCurveTo(165, 645, 165, 651);
        this.ctxGameLayer.lineTo(165, 759);
        this.ctxGameLayer.quadraticCurveTo(165, 765, 159, 765);
        this.ctxGameLayer.lineTo(141, 765);
        this.ctxGameLayer.quadraticCurveTo(135, 765, 135, 759);
        this.ctxGameLayer.lineTo(135, 681);
        this.ctxGameLayer.quadraticCurveTo(135, 675, 129, 675);
        this.ctxGameLayer.lineTo(81, 675);
        this.ctxGameLayer.quadraticCurveTo(75, 675, 75, 669);
        this.ctxGameLayer.lineTo(75, 651);
        this.ctxGameLayer.quadraticCurveTo(75, 645, 81, 645);
        this.ctxGameLayer.stroke();

        /*L derecha inferior*/
        this.ctxGameLayer.beginPath();
        this.ctxGameLayer.moveTo(681, 645);
        this.ctxGameLayer.lineTo(759, 645);
        this.ctxGameLayer.quadraticCurveTo(765, 645, 765, 651);
        this.ctxGameLayer.lineTo(765, 669);
        this.ctxGameLayer.quadraticCurveTo(765, 675, 759, 675);
        this.ctxGameLayer.lineTo(711, 675);
        this.ctxGameLayer.quadraticCurveTo(705, 675, 705, 681);
        this.ctxGameLayer.lineTo(705, 759);
        this.ctxGameLayer.quadraticCurveTo(705, 765, 699, 765);
        this.ctxGameLayer.lineTo(681, 765);
        this.ctxGameLayer.quadraticCurveTo(675, 765, 675, 759);
        this.ctxGameLayer.lineTo(675, 651);
        this.ctxGameLayer.quadraticCurveTo(675, 645, 681, 645);
        this.ctxGameLayer.stroke();

        /*T invertida inferior izquierda*/
        this.ctxGameLayer.beginPath();
        this.ctxGameLayer.moveTo(231, 735);
        this.ctxGameLayer.lineTo(249, 735);
        this.ctxGameLayer.quadraticCurveTo(255, 735, 255, 741);
        this.ctxGameLayer.lineTo(255, 819);
        this.ctxGameLayer.quadraticCurveTo(255, 825, 261, 825);
        this.ctxGameLayer.lineTo(339, 825);
        this.ctxGameLayer.quadraticCurveTo(345, 825, 345, 831);
        this.ctxGameLayer.lineTo(345, 849);
        this.ctxGameLayer.quadraticCurveTo(345, 855, 339, 855);
        this.ctxGameLayer.lineTo(81, 855);
        this.ctxGameLayer.quadraticCurveTo(75, 855, 75, 849);
        this.ctxGameLayer.lineTo(75, 831);
        this.ctxGameLayer.quadraticCurveTo(75, 825, 81, 825);
        this.ctxGameLayer.lineTo(219, 825);
        this.ctxGameLayer.quadraticCurveTo(225, 825, 225, 819);
        this.ctxGameLayer.lineTo(225, 741);
        this.ctxGameLayer.quadraticCurveTo(225, 735, 231, 735);
        this.ctxGameLayer.stroke();

        /*T invertida inferior derecha*/
        this.ctxGameLayer.beginPath();
        this.ctxGameLayer.moveTo(591, 735);
        this.ctxGameLayer.lineTo(609, 735);
        this.ctxGameLayer.quadraticCurveTo(615, 735, 615, 741);
        this.ctxGameLayer.lineTo(615, 819);
        this.ctxGameLayer.quadraticCurveTo(615, 825, 621, 825);
        this.ctxGameLayer.lineTo(759, 825);
        this.ctxGameLayer.quadraticCurveTo(765, 825, 765, 831);
        this.ctxGameLayer.lineTo(765, 849);
        this.ctxGameLayer.quadraticCurveTo(765, 855, 759, 855);
        this.ctxGameLayer.lineTo(501, 855);
        this.ctxGameLayer.quadraticCurveTo(495, 855, 495, 849);
        this.ctxGameLayer.lineTo(495, 831);
        this.ctxGameLayer.quadraticCurveTo(495, 825, 501, 825);
        this.ctxGameLayer.lineTo(579, 825);
        this.ctxGameLayer.quadraticCurveTo(585, 825, 585, 819);
        this.ctxGameLayer.lineTo(585, 741);
        this.ctxGameLayer.quadraticCurveTo(585, 735, 591, 735);
        this.ctxGameLayer.stroke();
    }
    
    roundedRect(x, y, width, height, radius) {
        this.ctxGameLayer.beginPath();
        this.ctxGameLayer.moveTo(x, y + radius);
        this.ctxGameLayer.lineTo(x, y + height - radius);
        this.ctxGameLayer.arcTo(x, y + height, x + radius, y + height, radius);
        this.ctxGameLayer.lineTo(x + width - radius, y + height);
        this.ctxGameLayer.arcTo(x + width, y + height, x + width, y + height - radius, radius);
        this.ctxGameLayer.lineTo(x + width, y + radius);
        this.ctxGameLayer.arcTo(x + width, y, x + width - radius, y, radius);
        this.ctxGameLayer.lineTo(x + radius, y);
        this.ctxGameLayer.arcTo(x, y, x, y + radius, radius);
        this.ctxGameLayer.stroke();
    }
	
    makeT(x, y) {
        this.ctxGameLayer.beginPath();
        this.ctxGameLayer.moveTo(x + 6, y);
        this.ctxGameLayer.lineTo(x + 205, y);
        this.ctxGameLayer.quadraticCurveTo(x + 211, y, x + 211, y + 6);
        this.ctxGameLayer.lineTo(x + 211, y + 25);
        this.ctxGameLayer.quadraticCurveTo(x + 211, y + 31, x + 205, y + 31);
        this.ctxGameLayer.lineTo(x + 127, y + 31);
        this.ctxGameLayer.quadraticCurveTo(x + 121, y + 31, x + 121, y + 37);
        this.ctxGameLayer.lineTo(x + 121, y + 115);
        this.ctxGameLayer.quadraticCurveTo(x + 121, y + 121, x + 115, y + 121);
        this.ctxGameLayer.lineTo(x + 97, y + 121);
        this.ctxGameLayer.quadraticCurveTo(x + 91, y + 121, x + 91, y + 115);
        this.ctxGameLayer.lineTo(x + 91, y + 37);
        this.ctxGameLayer.quadraticCurveTo(x + 91, y + 31, x + 85, y + 31);
        this.ctxGameLayer.lineTo(x + 6, y + 31);
        this.ctxGameLayer.quadraticCurveTo(x, y + 31, x, y + 25);
        this.ctxGameLayer.lineTo(x, y + 6);
        this.ctxGameLayer.quadraticCurveTo(x, y, x + 6, y);
        this.ctxGameLayer.stroke();
    }
	
	drawCocos() {
		this.pacDotLayer.drawPacDots(this.arrayMapa, this.xLength, this.yLength);
	}
}