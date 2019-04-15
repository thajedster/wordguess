var letter = require('./Letter');

array1 = [];
function Word(word) {
    var a = word.split(''); //returns ['g', 'u', 'a']
    for (i = 0; i < a.length; i++) {
        var l = new letter(a[i]);
        array1.push(l);
    };
    console.log(array1);

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