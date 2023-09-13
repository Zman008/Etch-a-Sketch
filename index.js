const grid = document.querySelector('.grid');
const clearButton = document.querySelector('.clear');
const sizePlus = document.querySelector('.size-plus');
const sizeMinus = document.querySelector('.size-minus');
const gridSize = document.querySelector('.grid-size');
const eraser = document.querySelector('.eraser');
let squares;
let div;
let isMouseDown = false;
let size = 16;
let color = 'black';

createDivs(size * size);

sizePlus.addEventListener("click", () => {
    if (size < 100){
        size += 1;
        gridSize.textContent = size;
        createDivs(2 * size - 1);
    }
});
   
sizeMinus.addEventListener("click", () => {
    if (size > 8){
        size -= 1;
        gridSize.textContent = size;
        removeDiv(2 * size + 1);
    }
});

document.addEventListener("mousedown", () => {
    isMouseDown = true;
});

document.addEventListener("mouseup", () => {
    isMouseDown = false;
});

eraser.addEventListener("click", () => {
    color = "white";
});

clearButton.addEventListener("click", () => {
    squares.forEach((square) => {
        square.style.backgroundColor = "";  
    });
});

function createDivs(n) {
    for (let i = 0; i < n; i++) {
        div = document.createElement('div');
        grid.appendChild(div);
    }

    squares = grid.querySelectorAll('.grid div');
    
    squares.forEach(div => {
        div.style.flexBasis = `${100 / size}%`;
        
        div.addEventListener('dragstart', (event) => {
            event.preventDefault();
        });

        div.addEventListener("mousedown", () => div.style.backgroundColor = color);
        div.addEventListener("mouseenter", () => {
            if(isMouseDown)
                div.style.backgroundColor = color;
        });
    }); 
}

function removeDiv(n) {
    for (let i = 0; i < n; i++) {
        grid.removeChild(grid.lastChild);
    }

    squares = grid.querySelectorAll('.grid div');
    
    squares.forEach(div => {
        div.style.flexBasis = `${100 / size}%`;
    });
}