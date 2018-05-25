var Word = require("./Word.js")
var inquirer = require('inquirer');

var test2 = new Word('supercalifragilisticexpialidocious');


var guessesLeft = 10;




startGame();


function startGame(){
    inquirer.prompt([
        {type:"confirm",
        name: "start",
        message: "Ready to play?"      
        }
    ]).then(function(response){
        if(response.start) {
       console.log(response.start);
       console.log(test2.displayWord()); // display intial blank boxes
       rounds();
        }

    });
}


function rounds(){
  
    console.log(guessesLeft);
    if (guessesLeft > 0) {
        guessesLeft--;
        inquirer.prompt([
            {type: 'input',
            name: 'letter',
            message: 'Your Guess?',       
        }
        ]).then(function(response){
           
            console.log(response.letter)
            test2.checkLetters(response.letter);
            console.log(test2.displayWord());
            rounds();
        });     
    } else {
        console.log("you lost");
    }
}

