//Grid Functions

function createGridArray() {
    //Create and return a grid array
    return [[0, 0, 0, 1, 0, 0, 1, 0, 1, 0],
            [0, 0, 0, 1, 0, 0, 1, 0, 1, 0],
            [0, 0, 0, 1, 0, 0, 1, 0, 1, 0],
            [0, 0, 0, 1, 0, 0, 1, 0, 1, 0],
            [0, 0, 0, 1, 0, 0, 1, 0, 1, 0],
            [0, 0, 0, 1, 0, 0, 1, 0, 1, 0],
            [0, 0, 0, 1, 0, 0, 1, 0, 1, 0],
            [0, 0, 0, 1, 0, 0, 1, 0, 1, 0],
            [0, 0, 0, 1, 0, 0, 1, 0, 1, 0],
            [0, 0, 0, 1, 0, 0, 1, 0, 1, 0] ];
}

function createDivGrid(grid) {
    for (let row = 0; row < NUM_ROWS; row++) {
        for (let col = 0; col < NUM_COLS; col++) {
            //Create a div for each element in 2D grid
            let divEl = document.createElement('div');

            //Add an id to each divEl
            divEl.id = 'cell' + row + '-' + col

            //Add appropriate class to each divEl
            if (grid[row][col] == 1) {
                divEl.classList.add("grey");
            } else if (grid[row][col] == 2) {
                divEl.classList.add('player');
            }

            //Add a dataset for row and col
            divEl.dataset.row = row;
            divEl.dataset.col = col;


            //Add an event listner
            divEl.addEventListener('click', cellClicked)

            //Add div to container
            document.getElementById('container').append(divEl);
        }
    }
}

function cellClicked(event) {
    // Set the color of the clicked cell

    //Get the value of the selcted element
    let color =  document.getElementById('cell-color').value;

    //Get row and col of the clicked cell
    let row = event.target.dataset.row;
    let col = event.target.dataset.col;

    //Update clicked cell based on selected color
    event.target.classList = ''; //Empty cell class list
    grid[row][col] = 0; // Set grid to 'white'
    if (color == 'grey') {
        event. target.classList.add('grey');
        grid[row][col] = 1;
    }
}


