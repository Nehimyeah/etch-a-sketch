const container = document.querySelector('#container');


for (let i = 0; i < 16 * 16; i++) {
    let grid = document.createElement('div');
    grid.addEventListener('mouseover', (e) => {
        e.target.style.backgroundColor = `rgb(0, 0, 0)`;
    })
    container.appendChild(grid);    
}

const grids = document.querySelectorAll('#container > div');
const clear = document.querySelector('#clear');
clear.addEventListener('click', (e) => {
    for (let grid of grids) {
        grid.style.backgroundColor = 'rgb(255, 255, 255)';
    }
});

