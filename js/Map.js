/* global ctxGameLayer, canvas, ctxCocoLayer */

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
    }
    
    draw() {
        /*Fondo*/
        ctxGameLayer.fillStyle = "rgb(0,0,0)";
        ctxGameLayer.fillRect(0, 0, canvas.width, canvas.height);

        /*Rectangulo de dentro*/
        ctxGameLayer.fillStyle = "rgb(255,255,255)";
        ctxGameLayer.fillRect(392, 376, 58, 5);
        ctxGameLayer.beginPath();
        ctxGameLayer.moveTo(315, 375);
        ctxGameLayer.lineTo(391, 375);
        ctxGameLayer.lineTo(391, 381);
        ctxGameLayer.lineTo(321, 381);
        ctxGameLayer.lineTo(321, 489);
        ctxGameLayer.lineTo(519, 489);
        ctxGameLayer.lineTo(519, 381);
        ctxGameLayer.lineTo(450, 381);
        ctxGameLayer.lineTo(450, 375);
        ctxGameLayer.lineTo(525, 375);
        ctxGameLayer.lineTo(525, 495);
        ctxGameLayer.lineTo(315, 495);
        ctxGameLayer.lineTo(315, 375);
        ctxGameLayer.strokeStyle = "#0C28FF";
        ctxGameLayer.stroke();


        /*Perimetro superior externo*/
        ctxGameLayer.beginPath();
        ctxGameLayer.moveTo(0, 391);
        ctxGameLayer.lineTo(145, 391);
        ctxGameLayer.quadraticCurveTo(151, 391, 151, 385);
        ctxGameLayer.lineTo(151, 305);
        ctxGameLayer.quadraticCurveTo(151, 299, 145, 299);
        ctxGameLayer.lineTo(10, 299);
        ctxGameLayer.quadraticCurveTo(0, 299, 0, 289);
        ctxGameLayer.lineTo(0, 10);
        ctxGameLayer.quadraticCurveTo(0, 0, 10, 0);
        ctxGameLayer.lineTo(829, 0);
        ctxGameLayer.quadraticCurveTo(839, 0, 839, 10);
        ctxGameLayer.lineTo(839, 289);
        ctxGameLayer.quadraticCurveTo(839, 299, 829, 299);
        ctxGameLayer.lineTo(695, 299);
        ctxGameLayer.quadraticCurveTo(689, 299, 689, 305);
        ctxGameLayer.lineTo(689, 385);
        ctxGameLayer.quadraticCurveTo(689, 391, 695, 391);
        ctxGameLayer.lineTo(canvas.width, 391);
        ctxGameLayer.stroke();

        /*Perimetro superior interno*/
        ctxGameLayer.beginPath();
        ctxGameLayer.moveTo(0, 405);
        ctxGameLayer.lineTo(155, 405);
        ctxGameLayer.quadraticCurveTo(165, 405, 165, 395);
        ctxGameLayer.lineTo(165, 295);
        ctxGameLayer.quadraticCurveTo(165, 285, 155, 285);
        ctxGameLayer.lineTo(21, 285);
        ctxGameLayer.quadraticCurveTo(15, 285, 15, 279);
        ctxGameLayer.lineTo(15, 21);
        ctxGameLayer.quadraticCurveTo(15, 15, 21, 15);
        ctxGameLayer.lineTo(399, 15);
        ctxGameLayer.quadraticCurveTo(405, 15, 405, 21);
        ctxGameLayer.lineTo(405, 129);
        ctxGameLayer.quadraticCurveTo(405, 135, 411, 135);
        ctxGameLayer.lineTo(429, 135);
        ctxGameLayer.quadraticCurveTo(435, 135, 435, 129);
        ctxGameLayer.lineTo(435, 21);
        ctxGameLayer.quadraticCurveTo(435, 15, 441, 15);
        ctxGameLayer.lineTo(819, 15);
        ctxGameLayer.quadraticCurveTo(825, 15, 825, 21);
        ctxGameLayer.lineTo(825, 279);
        ctxGameLayer.quadraticCurveTo(825, 285, 819, 285);
        ctxGameLayer.lineTo(685, 285);
        ctxGameLayer.quadraticCurveTo(675, 285, 675, 295);
        ctxGameLayer.lineTo(675, 395);
        ctxGameLayer.quadraticCurveTo(675, 405, 685, 405);
        ctxGameLayer.lineTo(canvas.width, 405);
        ctxGameLayer.stroke();

        /*Rectangulos superiores*/
        this.roundedRect(75, 75, 91, 61, 6);
        this.roundedRect(675, 75, 91, 61, 6);
        this.roundedRect(225, 75, 121, 61, 6);
        this.roundedRect(495, 75, 121, 61, 6);
        this.roundedRect(675, 195, 91, 31, 6);
        this.roundedRect(75, 195, 91, 31, 6);

        /*Figura poligonar superior izquierda*/
        ctxGameLayer.beginPath();
        ctxGameLayer.moveTo(231, 195);
        ctxGameLayer.lineTo(249, 195);
        ctxGameLayer.quadraticCurveTo(255, 195, 255, 201);
        ctxGameLayer.lineTo(255, 279);
        ctxGameLayer.quadraticCurveTo(255, 285, 261, 285);
        ctxGameLayer.lineTo(339, 285);
        ctxGameLayer.quadraticCurveTo(345, 285, 345, 291);
        ctxGameLayer.lineTo(345, 309);
        ctxGameLayer.quadraticCurveTo(345, 315, 339, 315);
        ctxGameLayer.lineTo(261, 315);
        ctxGameLayer.quadraticCurveTo(255, 315, 255, 321);
        ctxGameLayer.lineTo(255, 399);
        ctxGameLayer.quadraticCurveTo(255, 405, 249, 405);
        ctxGameLayer.lineTo(231, 405);
        ctxGameLayer.quadraticCurveTo(225, 405, 225, 399);
        ctxGameLayer.lineTo(225, 201);
        ctxGameLayer.quadraticCurveTo(225, 195, 231, 195);
        ctxGameLayer.stroke();

        /*T superior*/
        this.makeT(315, 195);

        /*Figura poligonar superior derecha*/
        ctxGameLayer.beginPath();
        ctxGameLayer.moveTo(591, 195);
        ctxGameLayer.lineTo(609, 195);
        ctxGameLayer.quadraticCurveTo(615, 195, 615, 201);
        ctxGameLayer.lineTo(615, 399);
        ctxGameLayer.quadraticCurveTo(615, 405, 609, 405);
        ctxGameLayer.lineTo(591, 405);
        ctxGameLayer.quadraticCurveTo(585, 405, 585, 399);
        ctxGameLayer.lineTo(585, 321);
        ctxGameLayer.quadraticCurveTo(585, 315, 579, 315);
        ctxGameLayer.lineTo(501, 315);
        ctxGameLayer.quadraticCurveTo(495, 315, 495, 309);
        ctxGameLayer.lineTo(495, 291);
        ctxGameLayer.quadraticCurveTo(495, 285, 501, 285);
        ctxGameLayer.lineTo(579, 285);
        ctxGameLayer.quadraticCurveTo(585, 285, 585, 279);
        ctxGameLayer.lineTo(585, 201);
        ctxGameLayer.quadraticCurveTo(585, 195, 591, 195);
        ctxGameLayer.stroke();

        /*Perimetro inferior externo*/
        ctxGameLayer.beginPath();
        ctxGameLayer.moveTo(0, 479);
        ctxGameLayer.lineTo(145, 479);
        ctxGameLayer.quadraticCurveTo(151, 479, 151, 485);
        ctxGameLayer.lineTo(151, 565);
        ctxGameLayer.quadraticCurveTo(151, 571, 145, 571);
        ctxGameLayer.lineTo(10, 571);
        ctxGameLayer.quadraticCurveTo(0, 571, 0, 581);
        ctxGameLayer.lineTo(0, 919);
        ctxGameLayer.quadraticCurveTo(0, 929, 10, 929);
        ctxGameLayer.lineTo(829, 929);
        ctxGameLayer.quadraticCurveTo(839, 929, 839, 919);
        ctxGameLayer.lineTo(839, 581);
        ctxGameLayer.quadraticCurveTo(839, 571, 829, 571);
        ctxGameLayer.lineTo(695, 571);
        ctxGameLayer.quadraticCurveTo(689, 571, 689, 565);
        ctxGameLayer.lineTo(689, 485);
        ctxGameLayer.quadraticCurveTo(689, 479, 695, 479);
        ctxGameLayer.lineTo(canvas.width, 479);
        ctxGameLayer.stroke();

        /*Perimetro inferior externo*/
        ctxGameLayer.beginPath();
        ctxGameLayer.moveTo(0, 465);
        ctxGameLayer.lineTo(155, 465);
        ctxGameLayer.quadraticCurveTo(165, 465, 165, 475);
        ctxGameLayer.lineTo(165, 575);
        ctxGameLayer.quadraticCurveTo(165, 585, 155, 585);
        ctxGameLayer.lineTo(25, 585);
        ctxGameLayer.quadraticCurveTo(15, 585, 15, 591);
        ctxGameLayer.lineTo(15, 729);
        ctxGameLayer.quadraticCurveTo(15, 735, 21, 735);
        ctxGameLayer.lineTo(69, 735);
        ctxGameLayer.quadraticCurveTo(75, 735, 75, 741);
        ctxGameLayer.lineTo(75, 759);
        ctxGameLayer.quadraticCurveTo(75, 765, 69, 765);
        ctxGameLayer.lineTo(21, 765);
        ctxGameLayer.quadraticCurveTo(15, 765, 15, 771);
        ctxGameLayer.lineTo(15, 909);
        ctxGameLayer.quadraticCurveTo(15, 915, 21, 915);
        ctxGameLayer.lineTo(819, 915);
        ctxGameLayer.quadraticCurveTo(825, 915, 825, 909);
        ctxGameLayer.lineTo(825, 771);
        ctxGameLayer.quadraticCurveTo(825, 765, 820, 765);
        ctxGameLayer.lineTo(771, 765);
        ctxGameLayer.quadraticCurveTo(765, 765, 765, 759);
        ctxGameLayer.lineTo(765, 741);
        ctxGameLayer.quadraticCurveTo(765, 735, 771, 735);
        ctxGameLayer.lineTo(819, 735);
        ctxGameLayer.quadraticCurveTo(825, 735, 825, 729);
        ctxGameLayer.lineTo(825, 591);
        ctxGameLayer.quadraticCurveTo(825, 585, 819, 585);
        ctxGameLayer.lineTo(685, 585);
        ctxGameLayer.quadraticCurveTo(675, 585, 675, 575);
        ctxGameLayer.lineTo(675, 475);
        ctxGameLayer.quadraticCurveTo(675, 465, 685, 465);
        ctxGameLayer.lineTo(canvas.width, 465);
        ctxGameLayer.stroke();

        /*Rectangulos inferiores*/
        this.roundedRect(225, 465, 31, 121, 6);
        this.roundedRect(585, 465, 31, 121, 6);
        this.roundedRect(225, 645, 121, 31, 6);
        this.roundedRect(495, 645, 121, 31, 6);

        /*Tes inferiores*/
        this.makeT(315, 555);
        this.makeT(315, 733);

        /*L izquierda inferior*/
        ctxGameLayer.beginPath();
        ctxGameLayer.moveTo(81, 645);
        ctxGameLayer.lineTo(159, 645);
        ctxGameLayer.quadraticCurveTo(165, 645, 165, 651);
        ctxGameLayer.lineTo(165, 759);
        ctxGameLayer.quadraticCurveTo(165, 765, 159, 765);
        ctxGameLayer.lineTo(141, 765);
        ctxGameLayer.quadraticCurveTo(135, 765, 135, 759);
        ctxGameLayer.lineTo(135, 681);
        ctxGameLayer.quadraticCurveTo(135, 675, 129, 675);
        ctxGameLayer.lineTo(81, 675);
        ctxGameLayer.quadraticCurveTo(75, 675, 75, 669);
        ctxGameLayer.lineTo(75, 651);
        ctxGameLayer.quadraticCurveTo(75, 645, 81, 645);
        ctxGameLayer.stroke();

        /*L derecha inferior*/
        ctxGameLayer.beginPath();
        ctxGameLayer.moveTo(681, 645);
        ctxGameLayer.lineTo(759, 645);
        ctxGameLayer.quadraticCurveTo(765, 645, 765, 651);
        ctxGameLayer.lineTo(765, 669);
        ctxGameLayer.quadraticCurveTo(765, 675, 759, 675);
        ctxGameLayer.lineTo(711, 675);
        ctxGameLayer.quadraticCurveTo(705, 675, 705, 681);
        ctxGameLayer.lineTo(705, 759);
        ctxGameLayer.quadraticCurveTo(705, 765, 699, 765);
        ctxGameLayer.lineTo(681, 765);
        ctxGameLayer.quadraticCurveTo(675, 765, 675, 759);
        ctxGameLayer.lineTo(675, 651);
        ctxGameLayer.quadraticCurveTo(675, 645, 681, 645);
        ctxGameLayer.stroke();

        /*T invertida inferior izquierda*/
        ctxGameLayer.beginPath();
        ctxGameLayer.moveTo(231, 735);
        ctxGameLayer.lineTo(249, 735);
        ctxGameLayer.quadraticCurveTo(255, 735, 255, 741);
        ctxGameLayer.lineTo(255, 819);
        ctxGameLayer.quadraticCurveTo(255, 825, 261, 825);
        ctxGameLayer.lineTo(339, 825);
        ctxGameLayer.quadraticCurveTo(345, 825, 345, 831);
        ctxGameLayer.lineTo(345, 849);
        ctxGameLayer.quadraticCurveTo(345, 855, 339, 855);
        ctxGameLayer.lineTo(81, 855);
        ctxGameLayer.quadraticCurveTo(75, 855, 75, 849);
        ctxGameLayer.lineTo(75, 831);
        ctxGameLayer.quadraticCurveTo(75, 825, 81, 825);
        ctxGameLayer.lineTo(219, 825);
        ctxGameLayer.quadraticCurveTo(225, 825, 225, 819);
        ctxGameLayer.lineTo(225, 741);
        ctxGameLayer.quadraticCurveTo(225, 735, 231, 735);
        ctxGameLayer.stroke();

        /*T invertida inferior derecha*/
        ctxGameLayer.beginPath();
        ctxGameLayer.moveTo(591, 735);
        ctxGameLayer.lineTo(609, 735);
        ctxGameLayer.quadraticCurveTo(615, 735, 615, 741);
        ctxGameLayer.lineTo(615, 819);
        ctxGameLayer.quadraticCurveTo(615, 825, 621, 825);
        ctxGameLayer.lineTo(759, 825);
        ctxGameLayer.quadraticCurveTo(765, 825, 765, 831);
        ctxGameLayer.lineTo(765, 849);
        ctxGameLayer.quadraticCurveTo(765, 855, 759, 855);
        ctxGameLayer.lineTo(501, 855);
        ctxGameLayer.quadraticCurveTo(495, 855, 495, 849);
        ctxGameLayer.lineTo(495, 831);
        ctxGameLayer.quadraticCurveTo(495, 825, 501, 825);
        ctxGameLayer.lineTo(579, 825);
        ctxGameLayer.quadraticCurveTo(585, 825, 585, 819);
        ctxGameLayer.lineTo(585, 741);
        ctxGameLayer.quadraticCurveTo(585, 735, 591, 735);
        ctxGameLayer.stroke();
    }
    
    roundedRect(x, y, width, height, radius) {
        ctxGameLayer.beginPath();
        ctxGameLayer.moveTo(x, y + radius);
        ctxGameLayer.lineTo(x, y + height - radius);
        ctxGameLayer.arcTo(x, y + height, x + radius, y + height, radius);
        ctxGameLayer.lineTo(x + width - radius, y + height);
        ctxGameLayer.arcTo(x + width, y + height, x + width, y + height - radius, radius);
        ctxGameLayer.lineTo(x + width, y + radius);
        ctxGameLayer.arcTo(x + width, y, x + width - radius, y, radius);
        ctxGameLayer.lineTo(x + radius, y);
        ctxGameLayer.arcTo(x, y, x, y + radius, radius);
        ctxGameLayer.stroke();
    }
	
    makeT(x, y) {
        ctxGameLayer.beginPath();
        ctxGameLayer.moveTo(x + 6, y);
        ctxGameLayer.lineTo(x + 205, y);
        ctxGameLayer.quadraticCurveTo(x + 211, y, x + 211, y + 6);
        ctxGameLayer.lineTo(x + 211, y + 25);
        ctxGameLayer.quadraticCurveTo(x + 211, y + 31, x + 205, y + 31);
        ctxGameLayer.lineTo(x + 127, y + 31);
        ctxGameLayer.quadraticCurveTo(x + 121, y + 31, x + 121, y + 37);
        ctxGameLayer.lineTo(x + 121, y + 115);
        ctxGameLayer.quadraticCurveTo(x + 121, y + 121, x + 115, y + 121);
        ctxGameLayer.lineTo(x + 97, y + 121);
        ctxGameLayer.quadraticCurveTo(x + 91, y + 121, x + 91, y + 115);
        ctxGameLayer.lineTo(x + 91, y + 37);
        ctxGameLayer.quadraticCurveTo(x + 91, y + 31, x + 85, y + 31);
        ctxGameLayer.lineTo(x + 6, y + 31);
        ctxGameLayer.quadraticCurveTo(x, y + 31, x, y + 25);
        ctxGameLayer.lineTo(x, y + 6);
        ctxGameLayer.quadraticCurveTo(x, y, x + 6, y);
        ctxGameLayer.stroke();
    }
	
	drawCoco(size, i, j){
		ctxCocoLayer.beginPath();
		if(size === 2){
			ctxCocoLayer.arc((j) * 30 + 15, (i) * 30 + 15, 3, 0, Math.PI * 2, true);
		} else {
			ctxCocoLayer.arc((j) * 30 + 15, (i) * 30 + 15, 5, 0, Math.PI * 2, true);
		}
		ctxCocoLayer.fill();
	}
	
	drawCocos() {
		ctxCocoLayer.fillStyle = "#FFF";
		for (var i = 1; i < this.yLength-1; i++) {
			for (var j = 1; j < this.xLength-1; j++) {
				var cell = this.arrayMapa[i][j];
				if (cell === 2 || cell === 3) {
					this.drawCoco(cell, i, j);
				}
			}
		}
	}
}