import { ctx } from "./global.js";
import { boxCollision, random } from "./utils.js";

const RADIUS = 10;

export default class GameObject {
    constructor(x, y) {
        this.x = x ?? random.x;
        this.y = y ?? random.y;
    }

    render() {
        ctx.fillRect(...this.getShape());
    }

    onclick(x, y) {
        if (!boxCollision(x, y, ...this.getShape())) return;
        this.dead = true;
    }

    getShape() {
        return [this.x - RADIUS, this.y - RADIUS, RADIUS * 2, RADIUS * 2];
    }

    move(direction, step) {
        this.x += Math.cos(direction) * step;
        this.y += Math.sin(direction) * step;
    }
}