import { canvas, ctx } from "./global.js";

export function boxCollision(dotX, dotY, x, y, w, h) {
    return between(dotX, x, x + w) && between(dotY, y, y + h);
}

export function between(value, low, high) {
    return value >= low && value <= high;
}

export const random = {
    get x() { 
        return this.range(0, canvas.width)
    },

    get y() {
        return this.range(0, canvas.height);
    },

    range(min, until) {
        return Math.random() * (until - min) + min;
    }
}

export function clearCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}
