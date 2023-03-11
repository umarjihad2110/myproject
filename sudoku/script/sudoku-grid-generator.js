let size = 9;

export let sudokuGrid

let grid = [];

// fill the grid with zeros
for (let i = 0; i < size; i++) {
    grid[i] = [];
    for (let j = 0; j < size; j++) {
        grid[i][j] = 0;
    }
}

// function to check if a value can be placed in a particular cell
function isValid(grid, row, col, value) {
    
    // check row and column
    for (let i = 0; i < size; i++) {
        if (grid[row][i] === value || grid[i][col] === value) {
            return false;
        }
    }

    // check 3x3 block
    const blockRow = Math.floor(row / 3) * 3;
    const blockCol = Math.floor(col / 3) * 3;

    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (grid[blockRow + i][blockCol + j] === value) {
                return false;
            }
        }
    }

    // value can be placed in the cell
    return true;
}

// function solve the Sudoku grid
function solve(grid) {
    for (let row = 0; row < size; row++) {
        for (let col = 0; col < size; col++) {
            if (grid[row][col] === 0) {
                let values = [];
                
                for (let value = 1; value <= size; value++) {
                    if (isValid(grid, row, col, value)) {
                        values.push(value);
                    }
                }

                // shuffle array
                shuffle(values);
                
                for (let i = 0; i < values.length; i++) {
                    grid[row][col] = values[i];
                    
                    if (solve(grid)) {
                        return true;
                    }
                }

                grid[row][col] = 0;
                
                return false;
            }
        }
    }

    return true;
}

// shuffle array
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

solve(grid);

sudokuGrid = grid.flat()
