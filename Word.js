var Letter = require("./Letter.js");

var Word = function(word){
	// this.word = word;
	this.letterArray = [];
	for(var i =0; i < word.length; i++) {
		this.letterArray.push(new Letter(word[i]));
	}
	
	this.displayWord = function(){
		var displayString = '';
		for(var i = 0; i < this.letterArray.length; i++) {
			displayString += this.letterArray[i].displayLetter();
		}
		return displayString;
	}

	this.checkLetters = function(letter){
		for(var i = 0; i < this.letterArray.length; i++) {
			this.letterArray[i].checkVal(letter);
		}
		this.displayWord();
	}
}

// var test2 = new Word('franklin');

// console.log(test2.displayWord());

// test2.checkLetters('a');

// console.log(test2.displayWord());

module.exports = Word;