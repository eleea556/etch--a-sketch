'use strict';

function createSquareGrid(grid, sideSize) {
    for (let i = 0; i < sideSize; i++) {
        for (let j = 0; j < sideSize; j++) {
            const cell = document.createElement('div');
            cell.classList += "cell";
            grid.appendChild(cell);
        }
    }
}

const grid = document.querySelector(".grid");

let sideSize = 16;

createSquareGrid(grid, sideSize);

const cells = document.querySelectorAll(".cell");

cells.forEach((cell) => {
    cell.addEventListener('mouseenter', (e) => {
        cell.style.backgroundColor = "black";
    });
});