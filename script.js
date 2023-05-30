'use strict';

function clearGrid(grid) {
    while (grid.firstChild) {
        grid.removeChild(grid.firstChild);
    }
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max)
}

function createSquareGrid(grid, sideSize, gridSize = 508) {
    root.style.setProperty('--cell-size', gridSize/sideSize + "px");
    for (let i = 0; i < sideSize; i++) {
        for (let j = 0; j < sideSize; j++) {
            const cell = document.createElement('div');
            cell.classList += "cell";
            grid.appendChild(cell);
        }
    }
    const cells = document.querySelectorAll(".cell");
    cells.forEach((cell) => {
        cell.addEventListener('mouseenter', (e) => {
            cell.style.backgroundColor = "rgb(" + getRandomInt(255) + ',' + getRandomInt(255) + ',' + getRandomInt(255) + ')';
        });
    });
}

const grid = document.querySelector(".grid");
const root = document.documentElement;

let sideSize = 16;

createSquareGrid(grid, sideSize);

const cellsNumberButton = document.querySelector("button");
cellsNumberButton.addEventListener('click', (e) => {
    sideSize = +prompt("Please enter the number of squares per side (max size is 75):");
    if (sideSize === NaN || !Number.isInteger(sideSize) || sideSize <= 0) {
        sideSize = 16;
    }
    if (sideSize > 75) {
        sideSize = 75;
    }
    clearGrid(grid);
    createSquareGrid(grid, sideSize);
});