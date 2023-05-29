const grid = document.querySelector('.grid');
let div;

for (let i = 0; i < 256; i++) {
    div = document.createElement('div');
    grid.appendChild(div);
}
