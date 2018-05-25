var Letter = function (value) {
	this.value = value;
	this.show = false;
	this.displayLetter = function() {
		if(!this.show) {
			return " _ "
		} else {
			return " " + this.value + " "
		}
	}
	this.checkVal = function(userGuess) {
		if (this.value === userGuess && !this.show)  {
			this.show = true;
			this.displayLetter();
		}	
	}
}


// var test = new Letter('b');
// test.checkVal('b');


// console.log(test);

module.exports = Letter;