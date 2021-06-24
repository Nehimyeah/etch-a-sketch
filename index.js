const container = document.querySelector('#container');

let row = 16;

function create(row) {
    container.style.gridTemplateRows = `repeat(${row}, 1fr)`;
    container.style.gridTemplateColumns = `repeat(${row}, 1fr)`;
    container.innerHTML = '';
    for (let i = 0; i < row * row; i++) {
        let grid = document.createElement('div');
        grid.addEventListener('mouseover', (e) => {
            let color = e.target.style.backgroundColor;
            let red, green, blue;

            red = Math.floor(Math.random() * 255);
            green = Math.floor(Math.random() * 255);
            blue = Math.floor(Math.random() * 255);


            e.target.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
        })
        container.appendChild(grid);    
    }
}

create(row);

const clear = document.querySelector('#clear');
clear.addEventListener('click', (e) => {
    const grids = document.querySelectorAll('#container > div');
    for (let grid of grids) {
        grid.style.backgroundColor = 'rgb(255, 255, 255)';
    }
});

const pt = document.querySelector('#prompt');
pt.addEventListener('click', (e) => {
    do {
        row = prompt('Enter row value less than 100', "integer value");
    } while (isNaN(row));
    if (row === null) {
        row = 16;
    }
    row = parseInt(row);

    create(row);
})



