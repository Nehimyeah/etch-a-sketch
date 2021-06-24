const container = document.querySelector('#container');


for (let i = 0; i < 16 * 16; i++) {
    let grid = document.createElement('div');
    grid.addEventListener('mouseover', (e) => {
        e.target.style.backgroundColor = `rgb(0, 0, 0)`;
    })
    container.appendChild(grid);    
}