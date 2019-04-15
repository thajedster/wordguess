var inquirer = require('inquirer');
var word = require('./Word');
var letter = require('./Letter');

var wordArray = ['door', 'cell phone', 'tent', 'airplane', 'laundry'];
var newWord = new word(wordArray[1]);
var savedWord = [];
var wordArray = [];
var numGuess = 10;

//newWord.returnString();
console.log("_ ".repeat(newWord.word.length));

function ask() {
    inquirer.prompt([{
        type: "input",
        name: "guess",
        message: "guess a letter"
    }]).then(function (char) {
        //all isGuessed = true
        //each item in newWord.word is contained in savedWord
        if (newWord.word.every(function (val) { return savedWord.indexOf(val) >= 0; })) {
            console.log("you win!");
            return;
        } else if (savedWord.includes(char.guess)) {
            console.log("You guessed that already!!!")
            numGuess--;
            console.log("you have " + numGuess + " guesses left!")
            if (numGuess === 0) {
                console.log("you lose!!!")
                return;
            } else {
                ask();
            }
        } else if (newWord.word.includes(char.guess) && savedWord.includes(char.guess) === false) {
            newWord.guessStatus(char.guess)

            savedWord.push(char.guess);

            newWord.returnString();
            if (newWord.word.every(function (val) { return savedWord.indexOf(val) >= 0; })) {
                console.log("you win!");
                return;
            }

            ask();
        } else {
            console.log("Wrong!!!")
            numGuess--;
            console.log("you have " + numGuess + " guesses left!")
            if (numGuess === 0) {
                console.log("you lose!!!")
                return;
            } else {
                ask();
            }
        }
    })
}




ask();