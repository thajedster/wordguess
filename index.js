var inquirer = require('inquirer');
var word = require('./Word');
var letter = require('./Letter');

var wordArray = ['door', 'cell phone', 'tent', 'airplane', 'laundry'];
var newWord = new word(wordArray[0]);
var savedWord = [];
var newLetter = new letter();
//console.log(newWord.word)
newWord.returnString();
console.log(newWord);
function ask() {
    inquirer.prompt([{
        type: "input",
        name: "guess",
        message: "guess a letter"
    }]).then(function (char) {
        console.log(char);
        if (newWord.word.includes(char.guess) && savedWord.includes(char.guess) === false) {
            newWord.guessStatus(char.guess)
            savedWord.push(char.guess);

            //newLetter = newWord.word[newWord.word.indexOf(char.guess)]
            //newLetter.isGuessed = true;
            newWord.word[newWord.word.indexOf(char.guess)].isGuessed = true;

            newWord.returnString();

            ask();
        } else {
            console.log("wrong!!!")
        }
    })
}




ask();