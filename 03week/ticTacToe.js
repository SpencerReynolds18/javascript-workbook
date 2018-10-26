'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
let board = [
    [' ', ' ', ' '],
    [' ', ' ', ' '],
    [' ', ' ', ' ']
];

let playerTurn = 'X';

function printBoard() {
    console.log('   0  1  2');
    console.log('0 ' + board[0].join(' | '));
    console.log('  ---------');
    console.log('1 ' + board[1].join(' | '));
    console.log('  ---------');
    console.log('2 ' + board[2].join(' | '));
}

//programming notes
// player x enters a row and column

// check for valid entries
// is space already filled?(technically we could start checking this only after x has taken its first turn and o makes first selection)
// update board with x
// switch players
// player o enters a row and column
// check for valid entries
// is space already filled?
// update board with o
// switch players
//
// after player x has gone 3 times, check for win... and from now on check for win after every turn
//check for a win - needs to look at xxx or ooo in each of 3 horizontal rows, each of 3 vertical columns, and each of 2 diagonals.


// delcare player x or o a winner
// if niether player wins when all squares are filled, declare "cats game"

//Had a thought last night about using the modulo check if even in order to determine wether it was x or o's turn... may not end up needing this, but a thought.






function horizontalWin() {
    // Your code here
    for (let i = 0; i < 3; i++) {
        if (board[i][0] == board[i][1] && board[i][1] == board[i][2] && board[i][0] == board[i][2]) {
            return true;
        }
    }
    return false;
}

function verticalWin() {
    // Your code here
    for (let i = 0; i < 3; i++) {
        if (board[0][i] == board[1][i] && board[1][i] == board[2][i] && board[0][i] == board[2][i]) {
            return true;
        }
    }
    return false;
}

function diagonalWin() {
    // Your code here
    if (board[0][0] == board[1][1] && board[1][1] == board[2][2] && board[0][0] == board[2][2]) {
        return true;
    }
    if (board[0][2] == board[1][1] && board[1][1] == board[2][0] && board[0][2] == board[2][0]) {
        return true;
    }

}

function checkForWin() {
    // Your code here
    const blankInputValue = ' ';


    if (horizontalWin() || verticalWin() || diagonalWin()) {
        console.log("Player " + playerTurn + " wins!");
            //maybe return True here, then have another function declare a winner or tie.
    }
    // //need to include a check for cats game
    // if (!blankInputValue.includes(rowInteger) || !validInputs.includes(columnInteger)) {
    //     console.log('It is a cats game!');
    //     return
    // }
}

function ticTacToe(row, column) {
    // Your code here
    const rowInteger = parseInt(row);
    const columnInteger = parseInt(column);


    const playerInputs = (row, column)

    const validInputs = [0, 1, 2];



    if (!validInputs.includes(rowInteger) || !validInputs.includes(columnInteger)) {
        console.log('Invalid entry, please choose 0, 1, or 2 to identify the row and column of your selection.');
        return
    }
//need to check if the space is occupied
    if (board[rowInteger][columnInteger]!=' ') {
        console.log('Invalid entry, that space is already taken. Please choose another space.');
        return
    }


    if (playerTurn == 'X') {
        board[rowInteger].splice(columnInteger, 1, 'X');
        //is this the same as board[row][column]='X' ?
    } else {
        board[rowInteger].splice(columnInteger, 1, 'O');
        //is this the same as board[row][column]='O' ?
    }

    checkForWin();

    if (playerTurn == 'X') {
        playerTurn = 'O';
    } else {
        playerTurn = 'X';
    }

    if (!validInputs.includes(rowInteger) || !validInputs.includes(columnInteger)) {
        console.log('Invalid entry, please choose 0, 1, or 2 to identify the row and column of your selection.');
        return
    }
}

//no code below here
function getPrompt() {
    printBoard();
    console.log("It's Player " + playerTurn + "'s turn.");
    rl.question('row: ', (row) => {
        rl.question('column: ', (column) => {
            ticTacToe(row, column);
            getPrompt();
        });
    });

}



// Tests

if (typeof describe === 'function') {

    describe('#ticTacToe()', () => {
        it('should place mark on the board', () => {
            ticTacToe(1, 1);
            assert.deepEqual(board, [
                [' ', ' ', ' '],
                [' ', 'X', ' '],
                [' ', ' ', ' ']
            ]);
        });
        it('should alternate between players', () => {
            ticTacToe(0, 0);
            assert.deepEqual(board, [
                ['O', ' ', ' '],
                [' ', 'X', ' '],
                [' ', ' ', ' ']
            ]);
        });
        it('should check for vertical wins', () => {
            board = [
                [' ', 'X', ' '],
                [' ', 'X', ' '],
                [' ', 'X', ' ']
            ];
            assert.equal(verticalWin(), true);
        });
        it('should check for horizontal wins', () => {
            board = [
                ['X', 'X', 'X'],
                [' ', ' ', ' '],
                [' ', ' ', ' ']
            ];
            assert.equal(horizontalWin(), true);
        });
        it('should check for diagonal wins', () => {
            board = [
                ['X', ' ', ' '],
                [' ', 'X', ' '],
                [' ', ' ', 'X']
            ];
            assert.equal(diagonalWin(), true);
        });
        it('should detect a win', () => {
            assert.equal(checkForWin(), true);
        });
    });
} else {

    getPrompt();

}
