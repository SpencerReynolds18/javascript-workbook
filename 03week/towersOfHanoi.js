'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let stacks = {
    a: [4, 3, 2, 1],
    b: [],
    c: []
};

function printStacks() {
    console.log("a: " + stacks.a);
    console.log("b: " + stacks.b);
    console.log("c: " + stacks.c);
}



function isLegal(startStack, endStack) {
    // Your code here
    const startStackLower = startStack.toLowerCase();
    const endStackLower = endStack.toLowerCase();

    const validInputs = ['a', 'b', 'c'];

    if (!validInputs.includes(startStackLower) || !validInputs.includes(endStackLower)) {
        console.log('Invalid entry, please choose a, b, or c to identify the start stack and end stack of your move.');
        return false;
    }

    if (stacks[startStackLower].length == 0) {
        console.log('Invalid entry, please choose a start stack that has discs in it.');
        return false;
    }

    if (stacks[endStackLower].length == 0) {
        return true;
    }

    if ((stacks[startStackLower][stacks[startStackLower].length - 1]) > (stacks[endStackLower][stacks[endStackLower].length - 1])) {
        console.log('Invalid entry, you cannot place a larger disc on top of a smaller disc. Please make a valid move.');
        return false;
    }
    return true;
}



function movePiece(startStack, endStack) {

    const lastItemStartStack = stacks[startStack].pop();
    stacks[endStack].push(lastItemStartStack);

    //two steps here, popping the last item off of the specified array, adding it to the specified array.
    //I could then recompose the board, or include that in the check for win step.
}

function checkForWin(startStack, endStack) {
    //Your code here

    //first method I tried - checking to see if b or c is equal to the expected winning array.

    // const winningArray = [4, 3, 2, 1];
    // const areIdenticalArrays = (arr1, arr2) => {
    //     if (arr1 && arr2 && Array.isArray(arr1) && Array.isArray(arr2)) {
    //         let identicalArrays = true;
    //         arr1.forEach((item, index, originalArr) => {
    //             const correspondingItem = arr2[index];
    //             if (correspondingItem != item) {
    //                 identicalArrays = false;
    //             }
    //         })
    //         if (identicalArrays == true) {
    //             console.log("You win! Can you do it again in fewer moves?");
    //         }
    //     }
    // // }
    // areIdenticalArrays(winningArray, stacks.b);
    // areIdenticalArrays(winningArray, stacks.c);

    // Next method is checking to see if other stacks are empty - will only work if my rules for stacking are solid.
    if (stacks.a.length == 0 && (stacks.b.length == 0 || stacks.c.length == 0)) {
        console.log("You win! Can you do it again in fewer moves?");
        stacks = {
            a: [4, 3, 2, 1],
            b: [],
            c: []
        };
    }

}

function towersOfHanoi(startStack, endStack) {
    // Your code here

    if (isLegal(startStack, endStack)) {
        movePiece(startStack, endStack);
    }


    checkForWin(startStack, endStack);
}




//whiteboard notes
// check for valid inputs by type
// check for legal move by comparison of disc size (should this happen here or later once I am working with arrays?)
// check for legal move by checking if there is a disc to move on the startStack
// will probably need to convert the object into arrays then use for.Each on that
// each move will be popping and pushing items from one array to another
// check for legal move by comparison of disc size
//
// Check for win
// if a win, return some win message and reset the board
// else recreate stacks as an object and display to the user, return and prompt for another move.


function getPrompt() {
    printStacks();
    rl.question('start stack: ', (startStack) => {
        rl.question('end stack: ', (endStack) => {
            towersOfHanoi(startStack, endStack);
            getPrompt();
        });
    });
}

// Tests

if (typeof describe === 'function') {

    describe('#towersOfHanoi()', () => {
        it('should be able to move a block', () => {
            towersOfHanoi('a', 'b');
            assert.deepEqual(stacks, {
                a: [4, 3, 2],
                b: [1],
                c: []
            });
        });
    });

    describe('#isLegal()', () => {
        it('should not allow an illegal move', () => {
            stacks = {
                a: [4, 3, 2],
                b: [1],
                c: []
            };
            assert.equal(isLegal('a', 'b'), false);
        });
        it('should not allow numbers as inputs', () => {
            stacks = {
                a: [4, 3, 2],
                b: [1],
                c: []
            };
            assert.equal(isLegal('8', 9), false);
        });
        it('should not allow invalid letters as inputs', () => {
            stacks = {
                a: [4, 3, 2],
                b: [1],
                c: []
            };
            assert.equal(isLegal('d', 'e'), false);
        });
        it('should allow a legal move', () => {
            stacks = {
                a: [4, 3, 2, 1],
                b: [],
                c: []
            };
            assert.equal(isLegal('a', 'c'), true);
        });
    });
    describe('#checkForWin()', () => {
        it('should detect a win', () => {
            stacks = {
                a: [],
                b: [4, 3, 2, 1],
                c: []
            };
            assert.equal(checkForWin(), true);
            stacks = {
                a: [],
                b: [],
                c: [4, 3, 2, 1]
            };
            assert.equal(checkForWin(), true);
            stacks = {
                a: [1],
                b: [4, 3, 2],
                c: []
            };
            assert.equal(checkForWin(), false);
        });
    });

} else {

    getPrompt();

}
