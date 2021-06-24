const container = document.querySelector('#container');

for (let i = 0; i < 16; i++) {
    for (let j = 0; j < 16; j++) {
        let grid = document.createElement('div');
        grid.addEventListener('mouseover', (e) => {
            e.target.classList.toggle('hover');
        })
        container.appendChild(grid);
    }
}