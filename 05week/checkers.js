'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});




//code plan
//How do we get pieces on the board? Black and White pieces.
//State how the pieces can move

//There will be a function moveChecker() called by game.moveChecker... can it be a method of Board and still get called by Game?
//Looks like there needs to be a checkers() function under Board based on game.board.checkers.length so game.board.checkers should be an array



//can only move forward
//force them to jump if they have the option
//can't move if there are two in a row
//if the piece makes it to the end, king it, allowing movement anyway
//if you jump a piece go again
let playerTurn = "red";

function checker(whichPiece, toWhere) {
    // Your code here
    game.moveChecker(whichPiece, toWhere);
}

class Board {
    constructor() {
            this.grid = [];
            this.checkers = [];
        }
        // method that creates an 8x8 array, filled with null values
    createGrid() {
        // loop to create the 8 rows
        for (let row = 0; row < 8; row++) {
            this.grid[row] = [];
            // push in 8 columns of nulls
            for (let column = 0; column < 8; column++) {
                this.grid[row].push(null);
            }
        }
        //I am adding this code
        this.grid[0] = [null, 'b', null, 'b', null, 'b', null, 'b'];
        this.grid[1] = ['b', null, 'b', null, 'b', null, 'b', null];
        this.grid[2] = [null, 'b', null, 'b', null, 'b', null, 'b'];
        this.grid[5] = ['r', null, 'r', null, 'r', null, 'r', null];
        this.grid[6] = [null, 'r', null, 'r', null, 'r', null, 'r'];
        this.grid[7] = ['r', null, 'r', null, 'r', null, 'r', null];
        //I am adding the above code
        this.updateCheckers();
    }
    viewGrid() {
            // add our column numbers
            let string = "  0 1 2 3 4 5 6 7\n";
            for (let row = 0; row < 8; row++) {
                // we start with our row number in our array
                const rowOfCheckers = [row];
                // a loop within a loop
                for (let column = 0; column < 8; column++) {
                    // if the location is "truthy" (contains a checker piece, in this case)
                    if (this.grid[row][column]) {
                        // push the symbol of the check in that location into the array
                        rowOfCheckers.push(this.grid[row][column] /*.symbol*/ );
                        //****removing symbol... maybe temporarily*****
                    } else {
                        // just push in a blank space
                        rowOfCheckers.push(' ');
                    }
                }
                // join the rowOfCheckers array to a string, separated by a space
                string += rowOfCheckers.join(' ');
                // add a 'new line'
                string += "\n";
            }
            console.log(string);
        }
        // Your code here

    moveChecker(whichPiece, toWhere) {
        const arrWhichPiece = whichPiece.split('');
        const arrToWhere = toWhere.split('');


        //Checking for Valid moves
        const validInputs = ['0', '1', '2', '3', '4', '5', '6', '7']
        for (let i = 0; i < 2; i++) {
            if (!validInputs.includes(arrWhichPiece[i]) || !validInputs.includes(arrToWhere[i])) {
                return console.log('Invalid entry, please choose row and column values between 0 and 7');
            }
        }

        //Red can only move red pieces
        if (playerTurn === 'red' &&
            this.grid[arrWhichPiece[0]][arrWhichPiece[1]] != 'r' &&
            this.grid[arrWhichPiece[0]][arrWhichPiece[1]] != 'R') {
            return console.log("It is red's turn, you must select a red piece on the board to move.");
        }
        // // //black can only move black pieces
        if (playerTurn === 'black' &&
            this.grid[arrWhichPiece[0]][arrWhichPiece[1]] != 'b' &&
            this.grid[arrWhichPiece[0]][arrWhichPiece[1]] != 'B') {
            return console.log("It is black's turn, you must select a black piece on the board to move.");
        }
        //red pieces can only move diagonally up left/right or jump up left or right
        //arrToWhere must eqaul row-1 and column +or- 1 for normal moves
        //arrToWhere must equal row-2 anc column +or- 2 for a kill. remove the enemy piece, (stretch goal)prompt another turn if another killable piece available.
        //black pieces can only move diagnally down
        //arrToWhere must eqaul row+1 and column +or- 1.
        //arrToWhere must equal row+2 anc column +or- 2 for a kill. remove the enemy piece, (stretch goal)prompt another turn if another killable piece available
        //can't move to a space if its value is not nulls(occupied space)

        //if a kill is available, the player must take it (stretch goal)

        //first attempt at a function to move pieces
        // const movingItem = game.board.grid[arrWhichPiece[0]][arrWhichPiece[1]];
        // //is there an easier way to take the returned value of the first splice and insert it in with the second splice?
        // game.board.grid[arrWhichPiece[0]].splice(arrWhichPiece[1], 1, null);
        //
        // game.board.grid[arrToWhere[0]].splice(arrToWhere[1], 1, movingItem);

        //Second methodology for moving pieces
        this.grid[arrToWhere[0]][arrToWhere[1]] = this.grid[arrWhichPiece[0]][arrWhichPiece[1]];
        this.grid[arrWhichPiece[0]][arrWhichPiece[1]] = null;

        //merging the array of arrays into one array
        this.updateCheckers();
        //taking the new big array and removing the null values for an easy .length count of the remaining pieces.

        // console.log(game.board.checkers.length);
        //method to check the number of peices left on the board.
        //switching the player turn
        if (playerTurn == 'red') {
            playerTurn = 'black';
        } else {
            playerTurn = 'red';
        }

        return
    }
    updateCheckers() {
        const mergedBoardForCounting = [].concat.apply([], this.grid);
        this.checkers = mergedBoardForCounting.filter(item => item != null);
    }

}


class Game {
    constructor() {
        this.board = new Board();
    }
    start() {
        this.board.createGrid();
    }
    moveChecker(whichPiece, toWhere) {
        this.board.moveChecker(whichPiece, toWhere);
    }
}


function getPrompt() {
    game.board.viewGrid();
    console.log("It's Player " + playerTurn + "'s turn.");
    rl.question('which piece?: ', (whichPiece) => {
        rl.question('to where?: ', (toWhere) => {
            //modifying here - removing move piece and making that part of Checker
            checker(whichPiece, toWhere);
            getPrompt();
        });
    });
}

const game = new Game();
game.start();


// Tests
if (typeof describe === 'function') {
    describe('Game', () => {
        it('should have a board', () => {
            assert.equal(game.board.constructor.name, 'Board');
        });
        it('board should have 24 checkers', () => {
            assert.equal(game.board.checkers.length, 24);
        });
    });

    describe('Game.moveChecker()', () => {
        it('should move a checker', () => {
            assert(!game.board.grid[4][1]);
            game.moveChecker('50', '41');
            assert(game.board.grid[4][1]);
            game.moveChecker('21', '30');
            assert(game.board.grid[3][0]);
            game.moveChecker('52', '43');
            assert(game.board.grid[4][3]);
        });
        it('should be able to jump over and kill another checker', () => {
            game.moveChecker('30', '52');
            assert(game.board.grid[5][2]);
            assert(!game.board.grid[4][1]);
            assert.equal(game.board.checkers.length, 23);
        });
    });
} else {
    getPrompt();
}
