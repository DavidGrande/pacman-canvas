/* global ctx, canvas */

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
    }
    
    draw() {
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
        this.roundedRect(75, 75, 91, 61, 6);
        this.roundedRect(675, 75, 91, 61, 6);
        this.roundedRect(225, 75, 121, 61, 6);
        this.roundedRect(495, 75, 121, 61, 6);
        this.roundedRect(675, 195, 91, 31, 6);
        this.roundedRect(75, 195, 91, 31, 6);

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
        this.makeT(315, 195);

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
        this.roundedRect(225, 465, 31, 121, 6);
        this.roundedRect(585, 465, 31, 121, 6);
        this.roundedRect(225, 645, 121, 31, 6);
        this.roundedRect(495, 645, 121, 31, 6);

        /*Tes inferiores*/
        this.makeT(315, 555);
        this.makeT(315, 733);

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
    
    roundedRect(x, y, width, height, radius) {
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
    makeT(x, y) {
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
}