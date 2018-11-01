'use strict';

//Whiteboarding notes before jumping in:

//functions
//mastermind(guess) -
//isValid(guess)
//if true pushToBoard.push(guess)
//else false with message - please enter valid guess, 4 letters, no blanks, no crazy
//pushToBoard - add entry to array of valid responses
//if(checkForWin(guess))
// console.log('celebrate'), show solution, resetBoard()
//else, give hint, checkForTurns()
//if checkForTurns()
//if too many turns-max guesses, console.log(you lose), show solution, resetBoard()
//else prompt for another guess.
//giveHint()
//we have a guess and a solution that are each 4 letter strings
//2 parts - which letters from the guess are in the right spot, which letters from guess are in solution but wrong index/location
//I need to split both strings into arrays .split('')
//loop through guess array
//for each letter in guess, check for corresponding letter in solution array.
//for each letter in guess(that wasn't a direct match), check to see if the letter exists in the solution array.
//if the letter from the guess is not part of the solution, do not provide hints.


//maybe I go through and find the number of direct matches, then the number of matches in general, and subtract to get the letters that match but are not in the right place.

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let board = [];
let solution = '';
let letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

function printBoard() {
    for (let i = 0; i < board.length; i++) {
        console.log(board[i]);
    }
}

function generateSolution() {
    for (let i = 0; i < 4; i++) {
        const randomIndex = getRandomInt(0, letters.length);
        solution += letters[randomIndex];
    }
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function generateHint() {
    // your code here

    const showHints = (guess) => {
            const guessArr = guessArr.split('');
            const solutionArr = solutionArr.split('');
            let rightLetterRightPlace = 0;
            let rightLetterWrongPlace = 0;
            guessArr.forEach((letter, index) => {
                console.log(letter, 'current', solutionArr[index]);
                const correspongindLetter = solutionArr[index];
                if (letter == correspongindLetter) {
                    //add to right letter, right place count;
                    rightLetterRightPlace ++
                } else if (solutionarr.includes(letter)) {
                    //add to right letter wrong place
                    rightLetterWrongPlace ++
                    //this is likely where I will add in the edge case logic for multiples
                }
            });
            return '${rightLetterRightPlace}-${rightLetterWrongPlace}';

        }
        //good way to check - console.log(guessArr, solutionArr;)
        //when testing, I might want to run one function and test.
}

function mastermind(guess) {
    solution = 'abcd'; // Comment this out to generate a random solution
    // your code here
}


function getPrompt() {
    rl.question('guess: ', (guess) => {
        mastermind(guess);
        printBoard();
        getPrompt();
    });
}

// Tests

if (typeof describe === 'function') {
    solution = 'abcd';
    describe('#mastermind()', () => {
        it('should register a guess and generate hints', () => {
            mastermind('aabb');
            assert.equal(board.length, 1);
        });
        it('should be able to detect a win', () => {
            assert.equal(mastermind(solution), 'You guessed it!');
        });
    });

    describe('#generateHint()', () => {
        it('should generate hints', () => {
            assert.equal(generateHint('abdc'), '2-2');
        });
        it('should generate hints if solution has duplicates', () => {
            assert.equal(generateHint('aabb'), '1-1');
        });

    });

} else {

    generateSolution();
    getPrompt();
}
