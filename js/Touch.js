/* global ctx, canvas */

class Touch{
    constructor (x, y, ancho, alto) {
        this.x = x;
        this.y = y;
        this.ancho = ancho;
        this.alto = alto;
    }

    get area() {
        return 2;
    }

    draw() {
        ctx.fillStyle = "rgba(200,200,200,0.2)";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.fill();
        ctx.beginPath();
        ctx.fillStyle = "#000";
        ctx.fillRect(this.x + (6 * this.ancho), this.y + (8 * this.alto), this.ancho * 2, this.alto * 5);
        ctx.fillRect(this.x + (6 * this.ancho), this.y + (13 * this.alto), this.ancho * 6, this.alto * 6);
        ctx.fillRect(this.x + (4 * this.ancho), this.y + (13 * this.alto), this.ancho, this.alto * 4);
        ctx.fillRect(this.x + (5 * this.ancho), this.y + (14 * this.alto), this.ancho, this.alto * 3);
        ctx.fillStyle = "#999";
        ctx.fillRect(this.x + (5 * this.ancho), this.y + (17 * this.alto), this.ancho, this.alto);
        ctx.fillRect(this.x + (6 * this.ancho), this.y + (18 * this.alto), this.ancho, this.alto);
        ctx.fillRect(this.x + (7 * this.ancho), this.y + (19 * this.alto), this.ancho * 4, this.alto);
        ctx.fillRect(this.x + (11 * this.ancho), this.y + (18 * this.alto), this.ancho, this.alto);
        ctx.fillStyle = "#FFF";
        ctx.fillRect(this.x + (6 * this.ancho), this.y + (0 * this.alto), this.ancho, this.alto * 4);
        ctx.fillRect(this.x + (0 * this.ancho), this.y + (2 * this.alto), this.ancho, this.alto);
        ctx.fillRect(this.x + (1 * this.ancho), this.y + (3 * this.alto), this.ancho, this.alto);
        ctx.fillRect(this.x + (2 * this.ancho), this.y + (4 * this.alto), this.ancho, this.alto);
        ctx.fillRect(this.x + (12 * this.ancho), this.y + (2 * this.alto), this.ancho, this.alto);
        ctx.fillRect(this.x + (11 * this.ancho), this.y + (3 * this.alto), this.ancho, this.alto);
        ctx.fillRect(this.x + (10 * this.ancho), this.y + (4 * this.alto), this.ancho, this.alto);
        ctx.fillRect(this.x + (6 * this.ancho), this.y + (7 * this.alto), this.ancho * 2, this.alto);
        ctx.fillRect(this.x + (5 * this.ancho), this.y + (8 * this.alto), this.ancho, this.alto * 6);
        ctx.fillRect(this.x + (8 * this.ancho), this.y + (8 * this.alto), this.ancho, this.alto * 5);
        ctx.fillRect(this.x + (9 * this.ancho), this.y + (12 * this.alto), this.ancho * 2, this.alto);
        ctx.fillRect(this.x + (4 * this.ancho), this.y + (12 * this.alto), this.ancho, this.alto);
        ctx.fillRect(this.x + (3 * this.ancho), this.y + (13 * this.alto), this.ancho, this.alto * 4);
        ctx.fillRect(this.x + (11 * this.ancho), this.y + (13 * this.alto), this.ancho, this.alto);
        ctx.fillRect(this.x + (12 * this.ancho), this.y + (14 * this.alto), this.ancho, this.alto * 5);
        ctx.fillRect(this.x + (4 * this.ancho), this.y + (17 * this.alto), this.ancho, this.alto);
        ctx.fillRect(this.x + (5 * this.ancho), this.y + (18 * this.alto), this.ancho, this.alto);
        ctx.fillRect(this.x + (6 * this.ancho), this.y + (19 * this.alto), this.ancho, this.alto * 2);
        ctx.fillRect(this.x + (6 * this.ancho), this.y + (19 * this.alto), this.ancho, this.alto * 2);
        ctx.fillRect(this.x + (11 * this.ancho), this.y + (19 * this.alto), this.ancho, this.alto * 2);
        ctx.fillRect(this.x + (7 * this.ancho), this.y + (20 * this.alto), this.ancho * 4, this.alto);
        ctx.fill();
    }
};

