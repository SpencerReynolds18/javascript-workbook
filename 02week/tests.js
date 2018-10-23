// Tests
function rockPaperScissors(hand1, hand2) {
    // Write code here
    //hand 1 enters their weapon, hand 2 enters their weapon - This is done
    if (typeof(hand1) == 'string' && typeof(hand2) == 'string') {} else {
        console.log('Invalid entry, please choose rock, paper, or scissors')
    }
    //making sure the hands entered are strings
    if (hand1 != 'rock' && hand1 != 'paper' && hand1 != 'scissors') {
        console.log('Invalid entry from player 1, please choose rock, paper, or scissors')
    }
    //making sure hand1 is rock, paper, or scissors
    if (hand2 != 'rock' && hand2 != 'paper' && hand2 != 'scissors') {
        console.log('Invalid entry from player 2, please choose rock, paper, or scissors')
    }
    //making sure hand2 is rock, paper, or scissors
    if (hand1 == hand2) {
        console.log("It's a tie!")
    }
    //checking for the tie first to narrow the cases
    if (hand1 == 'rock' && hand2 == "paper") {
        console.log("Hand two wins!")
    }
    if (hand1 == 'rock' && hand2 == "scissors") {
        console.log("Hand one wins!")
    }
    if (hand1 == 'paper' && hand2 == "rock") {
        console.log("Hand one wins!")
    }
    if (hand1 == 'paper' && hand2 == "scissors") {
        console.log("Hand two wins!")
    }
    if (hand1 == 'scissors' && hand2 == "rock") {
        console.log("Hand two wins!")
    }
    if (hand1 == 'scissors' && hand2 == "paper") {
        console.log("Hand one wins!")
    }
    //covering the last 6 cases with individual if statements
    //could I group the cases into a variable?
    //const handOneWon
    //const tieGame
    //const handTwoWon
    //there are 9 different combinations of hands, 3 cases
    //rock,rock - case 1 - tie
    //rock, paper - case 3 -  Hand 2 wins
    //rock, scissors - case 2 - hand 1 wins
    //paper, paper - case 1
    //paper, rock - case 2
    //paper, scissors - case 3
    //scissors, scissors - case 1
    //scissors, rock - case 3
    //scissors, paper - case 2
    //check to see if the moves are valid???
    //clean up moves
    //check to see if weapons are equal, if so show tie, else go to next check
    //determine who was the winner of that combination
    //print which person was the winner
}
//DONT TOUCH ANYTHING BELOW
function getPrompt() {
    rl.question('hand1: ', (answer1) => {
        rl.question('hand2: ', (answer2) => {
            console.log(rockPaperScissors(answer1, answer2));
            getPrompt();
        });
    });
}

if (typeof describe === 'function') {

    describe('#rockPaperScissors()', () => {
        it('should detect a tie', () => {
            assert.equal(rockPaperScissors('rock', 'rock'), "It's a tie!");
            assert.equal(rockPaperScissors('paper', 'paper'), "It's a tie!");
            assert.equal(rockPaperScissors('scissors', 'scissors'), "It's a tie!");
        });
        it('should detect which hand won', () => {
            //hand one wins
            assert.equal(rockPaperScissors('rock', 'scissors'), "Hand one wins!");
            assert.equal(rockPaperScissors('paper', 'rock'), "Hand one wins!");
            assert.equal(rockPaperScissors('scissors', 'paper'), "Hand one wins!")
                //hand two wins
            assert.equal(rockPaperScissors('rock', 'paper'), "Hand two wins!");
            assert.equal(rockPaperScissors('paper', 'scissors'), "Hand two wins!");
            assert.equal(rockPaperScissors('scissors', 'rock'), "Hand two wins!");
        });
        it('should scrub input to ensure lowercase with "trim"ed whitepace', () => {
            assert.equal(rockPaperScissors('rOcK', ' paper '), "Hand two wins!");
            assert.equal(rockPaperScissors('Paper', 'SCISSORS'), "Hand two wins!");
            assert.equal(rockPaperScissors('rock ', 'sCiSsOrs'), "Hand one wins!");
        });
        it('should scrub input to ensure user entered only rock, paper, or scissors', () => {
            assert.equal(rockPaperScissors('rOcK', 'dragon'), 'Invalid entry from player 2, please choose rock, paper, or scissors');
            assert.equal(rockPaperScissors('bomb', 'SCISSORS'), 'Invalid entry from player 1, please choose rock, paper, or scissors');
            assert.equal(rockPaperScissors('sk8te', 'paper'), 'Invalid entry from player 1, please choose rock, paper, or scissors');
        });
        it('should scrub input to ensure user did not enter a null or empty response field', () => {
            assert.equal(rockPaperScissors('rOcK', null), 'Invalid entry from player 2, please choose rock, paper, or scissors');
            assert.equal(rockPaperScissors(null, 'SCISSORS'), 'Invalid entry from player 1, please choose rock, paper, or scissors');
            assert.equal(rockPaperScissors(null, 'paper'), 'Invalid entry from player 1, please choose rock, paper, or scissors');
        });

    });
} else {

    getPrompt();

}
