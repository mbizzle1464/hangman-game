//Global Variables 
// --------------------------------------------------
// Create alphabet 
var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
    'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
    't', 'u', 'v', 'w', 'x', 'y', 'z'];
// Create an array of words
var wordList = ["airplane", "the empire strikes back", "raging bull", "the shining", "raiders of the lost ark", "blade runner", "fast times at ridgemont high", "the thing", "aliens", "scarface", "ghostbusters", "once upon a time in america", "the terminator", "back to the future", "the breakfast club", "ferris buellers day off", "platoon", "blue velvet", "stand by me", "fatal attraction", "full metal jacket", "wall street", "die hard", "do the right thing", "sixteen candles", "the goonies", "gremlins", "top gun", "the princess bride", "footloose", "flashdance", "poltergeist", "heathers", "robocop", "beetlejuice", "dirty dancing", "coming to america", "pretty in pink", "the karate kid", "the lost boys", "first blood", "rain man", "the outsiders", "risky business"];
// Holds Word 
var word = "";  
// Holds Number of blanks in word 
var numBlanks = 0;  
// Holds Blanks and successful guesses
var blanksAndSuccesses = [];
// Holds Wrong guesses 
var wrongLetters = [];

//Counters
var guessesLeft = 6;

//FUNCTIONS
//----------------------------------------
 function reset()
 {
// Choose word randomly
var word = wordList[Math.floor(Math.random() * wordList.length)]; 
//console.log(word);  

//Splits the choosen work into individual letters
lettersinWord = word.split("");    
//console.log(lettersinWord);   
numBlanks = lettersinWord.length;   
//console.log(numBlanks);   

     //RESET
     //===========================================================
     letterGuessed = 0;
     rightGuessCounter = 0;
     guessesLeft = 9;
     wrongLetters = [];
     blanksAndSuccesses = [];
     alphabet = ['a', 'b', 'c',
         'd', 'e', 'f',
         'g', 'h', 'i',
         'j', 'k', 'l',
         'm', 'n', 'o',
         'p', 'q', 'r',
         's', 't', 'u',
         'v', 'w', 'x',
         'y', 'z'];
     test = false;
     startGame();
 }


 // Start Game --------------------------------------------------------
function startGame() {
    // Choose word randomly
    var word = wordList[Math.floor(Math.random() * wordList.length)];
    //console.log(word);  

    //Splits the choosen work into individual letters
    lettersinWord = word.split("");
    //console.log(lettersinWord);   
    numBlanks = lettersinWord.length;
//console.log(numBlanks);   
 
    //RESET
     //===========================================================
    rightGuessCounter = 0;
    guessesLeft = 9;
    wrongLetters = [];
    blanksAndSuccesses = [];
    alphabet = ['a', 'b', 'c',
        'd', 'e', 'f',
        'g', 'h', 'i',
        'j', 'k', 'l',
        'm', 'n', 'o',
        'p', 'q', 'r',
        's', 't', 'u',
        'v', 'w', 'x',
        'y', 'z'];

    //Populate blanks
    for (var i = 0; i < numBlanks; i++)







// Create underscores based on length of words
var answerArray = []; 
for (var i = 0; i < word.length; i++) {
    answerArray[i] = "_";   
}

var remainingLetters = word.length; 
//console.log(answerArray);   
// Get users guess


// Check if guess is right
//if right push to right array
// if wrong push to wrong array
