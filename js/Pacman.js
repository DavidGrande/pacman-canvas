/* global ctx, Direction, map, puntos, canvas, Palette */

var PacmanStatus = {
    KILLER: 1,
    DYING: 2,
    NORMAL: 0
};

class Pacman {
    constructor() {
        this.x = 420;
        this.y = 705;
        this.vx = 0;
        this.vy = 0;
        this.radio = 20;
        this.direccion = Direction.DEFAULT;
        this.status = PacmanStatus.NORMAL;
        this.deegres = Math.PI;
        this.audioWaka = document.getElementById("soundPacmanEating");
    }

    draw() {
        ctx.fillStyle = Palette.YELLOW;
        ctx.beginPath();
        switch (this.direccion) {
            case Direction.UP:
                ctx.arc(this.x, this.y, this.radio, 1.25 * Math.PI, Math.PI * 1.75, true);
                break;
            case Direction.DOWN:
                ctx.arc(this.x, this.y, this.radio, Math.PI / 4, Math.PI / 1.3, true);
                break;
            case Direction.LEFT:
                ctx.arc(this.x, this.y, this.radio, Math.PI / 1.4, 1.25 * Math.PI, true);
                break;
            case Direction.RIGHT:
                ctx.arc(this.x, this.y, this.radio, 1.75 * Math.PI, Math.PI / 4, true);
                break;
            default:
                ctx.arc(this.x, this.y, this.radio, 0, 2 * Math.PI, true);
                break;
        }
        ctx.lineTo(this.x, this.y);
        ctx.fill();
    }

    drawDie() {
        var finish = false;
        ctx.fillStyle = Palette.YELLOW;
        ctx.clearRect(this.x - this.radio, this.y - this.radio, this.radio * 2, this.radio * 2);
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radio, Math.PI + this.deegres, Math.PI, true);
        ctx.lineTo(this.x, this.y);
        ctx.fill();
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radio, Math.PI, Math.PI - this.deegres, true);
        ctx.lineTo(this.x, this.y);
        ctx.fill();
        this.deegres -= 0.1;
        if (this.deegres < 0) {
            this.resetPosition();
            finish = true;
        }
        return finish;
    }

    resetPosition() {
        this.x = 420;
        this.y = 705;
        this.direccion = Direction.DEFAULT;
        this.deegres = Math.PI;
        this.status = PacmanStatus.NORMAL;
    }

    interaccion(key) {
        var KEY_LEFT = 37;
        var KEY_UP = 38;
        var KEY_RIGHT = 39;
        var KEY_DOWN = 40;
        switch (key) {
            case KEY_DOWN:
                if (limit(Direction.DOWN, this.x, this.y)) {
                    this.vx = 0;
                    this.vy = 1;
                    this.direccion = Direction.DOWN;
                }
                break;
            case KEY_UP:
                if (limit(Direction.UP, this.x, this.y)) {
                    this.vx = 0;
                    this.vy = -1;
                    this.direccion = Direction.UP;
                }
                break;
            case KEY_RIGHT:
                if (limit(Direction.RIGHT, this.x, this.y)) {
                    this.vx = 1;
                    this.vy = 0;
                    this.direccion = Direction.RIGHT;
                }
                break;
            case KEY_LEFT:
                if (limit(Direction.LEFT, this.x, this.y)) {
                    this.vx = -1;
                    this.vy = 0;
                    this.direccion = Direction.LEFT;
                }
                break;
        }
    }

    move() {
        var result = false;
        if (limit(this.direccion, this.x, this.y)) {
            this.x += this.vx * 5;
            this.y += this.vy * 5;
            if (this.x < 0) {
                this.x = canvas.width - 15;
            } else if (this.x + 16 > canvas.width) {
                this.x = 0;
            } else {
                result = true;
            }
        } else {
            this.direccion = Direction.DEFAULT;
        }
        return result;
    }
}

function threadPacmanEatBigDot(pac) {
    setTimeout(function () {
        this.status = PacmanStatus.NORMAL;
    }, 2000);
}