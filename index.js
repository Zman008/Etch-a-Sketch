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

grid.addEventListener("mousedown", () => isMouseDown = (isMouseDown) ? false : true);

sizePlus.addEventListener("click", () => {
    if (size < 100){
        size += 1;
        gridSize.textContent = size;
        grid.innerHTML = '';
        createDivs(size * size);
    }
});
   
sizeMinus.addEventListener("click", () => {
    if (size > 8){
        size -= 1;
        gridSize.textContent = size;
        grid.innerHTML = '';
        createDivs(size * size);
    }
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
    
    squares.forEach(square => {
        square.style.flexBasis = `${100 / size}%`;

        square.addEventListener("click", () => {
            square.style.backgroundColor = color;
        });

        square.addEventListener("mouseenter", () => {
            if(isMouseDown)
                square.style.backgroundColor = color;
        });
    }); 
}
