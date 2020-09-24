// Grid-Maze Designer

//GLOBAL CONSTONTS
const NUM_ROWS = 10;
const NUM_COLS = 10;

//Create an array to represent the grid
let grid = createGridArray();

//Add a player to the grid array
let player = {
    row: 5,
    col: 5,
}

grid[player.row][player.col] = 2;

//Create divs to model the grid array
createDivGrid(grid)

//Player Movement - Key Event Listeners
document.addEventListener('keydown', movePlayer);

function movePlayer(event) {
    console.log(event.keyCode)
    if (event.keyCode == 39) {// Right Arrow Key
        updatePlayer(player.row, player.col + 1)
    } else if (event.keyCode == 37) { //Left Arrow Key
        updatePlayer(player.row, player.col - 1)
    } else if (event.keyCode == 38) { //Up Arrow Key
        updatePlayer(player.row - 1, player.col)
    } else if (event.keyCode == 40) { //Down Arrow Key
        updatePlayer(player.row + 1, player.col)
    }
}

function updatePlayer(newRow, newCol) {
    //Remove player class from current location
    let cellId = 'cell' + player.row + '-' + player.col
    document.getElementById(cellId).classList.remove('player');

    // Set grid aray to 0 for current location
    grid[player.row][player.col] = 0;

    //Update player location
    player.row = newRow;
    player.col = newCol;

    //Update class and grid
    cellId = 'cell' + player.row + '-' + player.col;
    document.getElementById(cellId).classList.add('player');

    grid[player.row][player.col] = 2;
}
