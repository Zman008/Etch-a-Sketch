const grid = document.querySelector('.grid');
let div;

for (let i = 0; i < 256; i++) {
    div = document.createElement('div');
    grid.appendChild(div);
}

squares = grid.querySelectorAll('div');

let isMouseDown = false;

document.addEventListener("mousedown", () => {
    isMouseDown = true;
});

document.addEventListener("mouseup", () => {
    isMouseDown = false;
})

squares.forEach((square) => {
    square.addEventListener("mouseenter", () => {
        if(isMouseDown)
            square.style.backgroundColor = 'black';
    })        
});
