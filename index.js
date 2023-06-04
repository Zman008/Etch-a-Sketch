const grid = document.querySelector('.grid');
const clearButton = document.querySelector('.clear');
let div;
let isMouseDown = false;

for (let i = 0; i < 256; i++) {
    div = document.createElement('div');
    grid.appendChild(div);
}

const squares = grid.querySelectorAll('.grid div');

document.addEventListener("mousedown", () => {
    isMouseDown = true;
});

document.addEventListener("mouseup", () => {
    isMouseDown = false;
});

squares.forEach((square) => {
    square.addEventListener("mouseenter", () => {
        if(isMouseDown)
            square.style.backgroundColor = 'black';
    });        
});

clearButton.addEventListener("click", () => {
    squares.forEach((square) => {
      square.style.backgroundColor = "";  
    });
});