// Define the size of the Sudoku grid (9x9 in this case)
const size = 9;

export let sudokuGrid

// Create an empty grid
let grid = [];

// Fill the grid with zeros
for (let i = 0; i < size; i++) {
    grid[i] = [];
    for (let j = 0; j < size; j++) {
        grid[i][j] = 0;
    }
}

// Define a function to check if a value can be placed in a particular cell
function isValid(grid, row, col, value) {
    
    // Check if the value already exists in the same row or column
    for (let i = 0; i < size; i++) {
        if (grid[row][i] === value || grid[i][col] === value) {
            return false;
        }
    }

    // Check if the value already exists in the same 3x3 block
    const blockRow = Math.floor(row / 3) * 3;
    const blockCol = Math.floor(col / 3) * 3;

    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (grid[blockRow + i][blockCol + j] === value) {
                return false;
            }
        }
    }

    // If the value can be placed in the cell without violating any rules, return true
    return true;
}

// Define a function to solve the Sudoku grid using backtracking
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

// Define a function to shuffle an array
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// Generate a random puzzle by removing numbers from a solved grid
solve(grid);

// Print the puzzle to the console
// console.log(grid.flat())
sudokuGrid = grid.flat()
