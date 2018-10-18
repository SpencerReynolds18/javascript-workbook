'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


function pigLatin(word) {

    // Your code here
    const arrayVowels = ['a', 'e', 'i', 'o', 'u'];
    const arrayConsonants = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z'];
    const allLetters = arrayVowels.concat(arrayConsonants);

    const wordLower = word.toLowerCase();
    //need a method to throw an error if they enter anything other than arrayVowels or arrayConsonants

    // if((typeof wordLower) !='string'){
    // console.log('Invalid entry, please choose a word. Numbers and special characters are not allowed.')
    // }
    //trying to check if the entry is a string, if not, I want to display a message about using words. - update, that won't work

    const splitWordArray = (wordLower).split('');
    //spliting the word the user entered into an splitWordArray
//need a method to throw an error if they enter anything other than arrayVowels or arrayConsonants
    for (let i = 0 ; i<splitWordArray.length; i++) {
        if (!allLetters.includes(splitWordArray[i])) {
          console.log('Invalid entry, please choose a word. Numbers and special characters are not allowed.');
          return;
        }
    }
          //should ask someone about best practices of leaving a blank if, and a filled else

    //console.log(splitWordArray);
    //this is to test that the word split function is operating


    // const isVowel = ['a','e','i','o','u'];
    // let isVowel = 'a'||'e'||'i'||'o'||'u';
    //can I set a variable to be equal to this or that?
    //went with the array and used the includes function to determine if vowel.

    if (arrayVowels.includes(splitWordArray[0])) {
        console.log(wordLower + 'way')
    } else {
        var vowelLocation = null;
        for (let i = 1; i<splitWordArray.length; i++) {
            if (arrayVowels.includes(splitWordArray[i])) {
                vowelLocation = i;
                break;
            }
        }
        if (vowelLocation) {
            console.log(wordLower.substr(vowelLocation) + wordLower.substr(0, vowelLocation) + 'ay')
        } else {
            console.log("Please enter a word... not just a consonant catastrope");
            return;
        }
    }

    // if (splitWordArray[indexInArray] == ('a'||'e'||'i'||'o'||'u')) {
    // console.log((word)+'way')
    // };
    //should I index straight to 0 rather than include the variable indexInArray?

    // const checkLetters = (splitWordArray[1]) => {
    //  if(splitWordArray[1] == )
    // }



    //    ***function plan***
    //pig Latin rules
    //1.words that start with a consonant then vowel - take consonant and add to the end and add "ay"
    //2. words that start with multiple clusters then a vowel - take consonant and add to the end and add "ay"
    //3. For words that begin with vowel sounds, one just adds "way" or "yay" to the end of the word
    //Thought - can rule 1 and rule 2 be combined???
    //

    //what letters are vowels
    //what letters are consonants(not vowels)

    //enter input
    //check if input is a string,true continue, false console log please enter a word that is a string
    //(function would be: isString? or just run typeof and set equal to a string)

    //split out letters


    //check if the first(0 index) letter(item in array) is a vowel, if yes do rule 3(add "way" on the end), ?else do rule 1/2?


    //I think the next chunk is going to work as a for loop that checks the letters in sequence until it hits a vowel.
    //Check if the first letter is a consonant(not a vowel),
    //check if the second letter is a consonant(not a vowel), and so on until you hit a vowel.

    //When you hit a vowel, grab consecutive consonants and add to the end and add "ay" after those.

}


function getPrompt() {
    rl.question('word ', (answer) => {
        console.log(pigLatin(answer));
        getPrompt();
    });
}

// Tests

if (typeof describe === 'function') {

    describe('#pigLatin()', () => {
        it('should translate a simple word', () => {
            assert.equal(pigLatin('car'), 'arcay');
            assert.equal(pigLatin('dog'), 'ogday');
        });
        it('should translate a complex word', () => {
            assert.equal(pigLatin('create'), 'eatecray');
            assert.equal(pigLatin('valley'), 'alleyvay');
        });
        it('should attach "yay" if word begins with vowel', () => {
            assert.equal(pigLatin('egg'), 'eggyay');
            assert.equal(pigLatin('emission'), 'emissionyay');
        });
        it('should lowercase and trim word before translation', () => {
            assert.equal(pigLatin('HeLlO '), 'ellohay');
            assert.equal(pigLatin(' RoCkEt'), 'ocketray');
        });
    });
} else {

    getPrompt();

}
