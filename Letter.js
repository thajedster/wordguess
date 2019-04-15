function Letter(char) {
    this.char = char;
    a = this.char;
    this.isGuessed = false;
    this.printChar = function () {
        if (this.isGuessed) {
            console.log(char);
        } else {
            console.log('_');
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

//var d = new Letter('r');
//d.check('r')
//d.printChar('r');