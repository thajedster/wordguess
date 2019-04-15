var letter = require('./Letter');

array1 = [];
function Word(word) {
    this.word = word.split(''); //returns ['g', 'u', 'a']
    var a = this.word

    for (i = 0; i < a.length; i++) {
        var l = new letter(a[i]);
        array1.push(l);
    };

    this.returnString = function () {
        array1.forEach(function (ele) {
            ele.printChar();
        });
    };
    this.guessStatus = function (char) {
        array1.forEach(function (ele) {
            ele.check(char);
        });
    };
}

module.exports = Word;

//var something = new Word("guarantee")
//something.guessStatus('g')
//something.returnString();