var savedletter = String;
var Letter = function (char) {
    this.char = char;
    this.isGuessed = Boolean;
    this.printChar = function () {
        var space = '_';
        if (this.isGuessed) {
            savedletter = char;
            console.log(savedletter);
        } else {
            savedletter = space;
            console.log(savedletter);
        }
    };
    this.check = function (c) {
        if (c === this.char) {
            this.isGuessed = true;
        } else {
            this.isGuessed = false;
        }
    };
};

module.exports = Letter;

//var d = new Letter('d');
//d.check('d')
//d.printChar();
