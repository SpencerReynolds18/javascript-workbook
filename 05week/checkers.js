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

function Checker() {
    // Your code here
}

class Board {
    constructor() {
            this.grid = []
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
    checkers() {

    }




}

class Game {
    constructor() {
        this.board = new Board;
    }
    start() {
        this.board.createGrid();
    }

    moveChecker(whichPiece, toWhere) {
        const arrWhichPiece = whichPiece.split('');
        const arrToWhere = toWhere.split('');


        const movingItem = game.board.grid[arrWhichPiece[0]][arrWhichPiece[1]];
//is there an easier way to take the returned value of the first splice and insert it in with the second splice?
        game.board.grid[arrWhichPiece[0]].splice(arrWhichPiece[1], 1, null);

        game.board.grid[arrToWhere[0]].splice(arrToWhere[1], 1, movingItem);
        return
    }


}

function getPrompt() {
    game.board.viewGrid();
    rl.question('which piece?: ', (whichPiece) => {
        rl.question('to where?: ', (toWhere) => {
            game.moveChecker(whichPiece, toWhere);
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
