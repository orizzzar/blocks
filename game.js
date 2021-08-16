import { initMouseHandler } from './mouse.js'
import { canvas, state } from "./global.js";
import GameObject from "./GameObject.js";
import { random, clearCanvas } from "./utils.js";


export function init() {
    requestAnimationFrame(loop);
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    initMouseHandler();
    spawnMany(GameObject, 500);
}

export function loop() {
    requestAnimationFrame(loop);
    clearCanvas();
    allRemoveDead();
    allRender();
    allMove();

    state.instances.push(
        new GameObject(random.x, 0),
        new GameObject(random.x, canvas.height),
        new GameObject(0, random.y),
        new GameObject(canvas.width, random.y),
    );
}



function spawnMany(Class, amount) {
    for (let i = 0; i < amount; i++) {
        state.instances.push(
            new Class(random.x, random.y)
        );
    }
}

function allRemoveDead() {
    state.instances = state.instances.filter(inst => {
        return !inst.dead;
    });
}

function allRender() {
    state.instances.forEach(inst => {
        inst.render();
    });
}

function allMove() {
    state.instances.forEach(inst => {
        let direction = Math.random() * Math.PI * 2;
        inst.move(direction, (Math.random() + 1) ** 2);

    });
}