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
let mode = 1;

createDivs(size * size);

grid.addEventListener("mousedown", () => isMouseDown = (isMouseDown) ? false : true);

sizePlus.addEventListener("click", () => {
    if (size < 100){
        size += 1;
        gridSize.textContent = size;
        slider.value = size;
        createDivs(size * size);
    }
});
   
sizeMinus.addEventListener("click", () => {
    if (size > 8){
        size -= 1;
        gridSize.textContent = size;
        slider.value = size;
        createDivs(size * size);
    }
});

slider.addEventListener("change", () => {
    size = slider.value;
    gridSize.textContent = size;
    createDivs(size * size);
});

pen.addEventListener("click", () => {
    mode = 1;
    color = colorPicker.value;
});

colorPicker.addEventListener("change", () => {
    mode = 1;
    color = colorPicker.value;
});

eraser.addEventListener("click", () => {
    mode = 1;
    color = "white";
});

random.addEventListener("click", () => {
    mode = (mode == 2) ? 1 : 2;
});

shading.addEventListener("click", () => {
    mode = (mode == 3) ? 1 : 3;
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
            if(mode == 1){} // color stays the same
            else if(mode == 2)  // random color
                color = `#${Math.floor(Math.random()*16777215).toString(16)}`;
            else if (mode == 3) {  // shading
                let red = getColor(square)[0];
                let green = getColor(square)[1];
                let blue = getColor(square)[2];
                color = `rgb(${red-25}, ${green-25}, ${blue-25})`;
            }

            square.style.backgroundColor = color;
        });

        square.addEventListener("mouseenter", () => {
            if(mode == 1){}  
            else if(mode == 2)
                color = `#${Math.floor(Math.random()*16777215).toString(16)}`;
            else if (mode == 3) {
                let red = getColor(square)[0];
                let green = getColor(square)[1];
                let blue = getColor(square)[2];
                color = `rgb(${red-25}, ${green-25}, ${blue-25})`;
            }

            if(isMouseDown)
                square.style.backgroundColor = color;
        });
    }); 
}

function getColor(element) {
    if(element.style.backgroundColor == "")
        return [255, 255, 255];

    let colorCodes = element.style.backgroundColor.match(/\d+/g);
    
    let red = parseInt(colorCodes[0]);
    let green = parseInt(colorCodes[1]);
    let blue = parseInt(colorCodes[2]);

    return [red, green, blue];
}

console.log(getColor(pen));