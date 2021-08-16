import { state } from "./global.js";
import { canvas } from "./global.js";

function allOnlick(x, y) {
    state.instances.forEach(inst => inst.onclick(x, y));
}

export function initMouseHandler() {
    canvas.addEventListener('mousemove', (event) => {
        const {clientX: x, clientY: y} = event;
        allOnlick(x, y);
    });
}