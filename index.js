const grid = document.querySelector('.grid');
const pen = document.querySelector('.pen');
const colorPicker = document.querySelector('.color-picker');
const eraser = document.querySelector('.eraser');
const random = document.querySelector('.random');
const shading = document.querySelector('.shading');
const clearButton = document.querySelector('.clear');
const sizePlus = document.querySelector('.size-plus');
const sizeMinus = document.querySelector('.size-minus');
const gridSize = document.querySelector('.grid-size');
const slider = document.getElementById('size-slider');
let squares;
let div;
let isMouseDown = false;
let size = 16;
slider.value = size;
let color = "#1e1e1e";
colorPicker.value = color;
let randomOn = false;

createDivs(size * size);

grid.addEventListener("mousedown", () => isMouseDown = (isMouseDown) ? false : true);

sizePlus.addEventListener("click", () => {
    if (size < 100){
        size += 1;
        gridSize.textContent = size;
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

slider.addEventListener("change", () => {
    size = slider.value;
    gridSize.textContent = size;
    grid.innerHTML = '';
    createDivs(size * size);
});

pen.addEventListener("click", () => {
    randomOn = false;
    color = colorPicker.value;
});

colorPicker.addEventListener("change", () => {
    randomOn = false;
    color = colorPicker.value;
});

eraser.addEventListener("click", () => {
    randomOn = false;
    color = "white";
});

random.addEventListener("click", () => {
    randomOn = (randomOn) ? false : true;
});

clearButton.addEventListener("click", () => {
    squares.forEach((square) => {
        square.style.backgroundColor = "";  
    });
});

function createDivs(n) {
    grid.innerHTML = '';    // remove all previous divs

    for (let i = 0; i < n; i++) {
        div = document.createElement('div');
        grid.appendChild(div);
    }

    squares = grid.querySelectorAll('.grid div');  
    
    squares.forEach(square => {     // add event listeners to each square to create draw functionality
        square.style.flexBasis = `${100 / size}%`;

        square.addEventListener("click", () => {
            if(randomOn)
                color = `#${Math.floor(Math.random()*16777215).toString(16)}`;

            square.style.backgroundColor = color;
        });

        square.addEventListener("mouseenter", () => {
            if(randomOn)
                color = `#${Math.floor(Math.random()*16777215).toString(16)}`;

            if(isMouseDown)
                square.style.backgroundColor = color;
        });
    }); 
}
