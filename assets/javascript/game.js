//Global Variables and Arrays to hold data

var winCount = 0;
var lossCount = 0;

var wordOptions = ["html", "css", "span", "file", "java"];
var selectedWord = "";
var lettersinWord = [];
var numBlanks = 0;
var blanksAndSuccesses = [];
var wrongLetters = [];

var guessesLeft = 10;
var letterGuessed = [];

//Function Codes to call on later

function startGame () {
	selectedWord = wordOptions[Math.floor(Math.random() * wordOptions.length)];
	lettersinWord = selectedWord.split("");
	numBlanks = lettersinWord.length;

	guessesLeft = 10;
	wrongLetters = [];
	blanksAndSuccesses = [];

	for (var i=0; i<numBlanks; i++){
		blanksAndSuccesses.push("_");
}

document.getElementsByID("wordToGuess").innerHTML = blanksAndSuccesses.join("");
document.getElementsByID("numGuesses").innerHTML = guessesLeft;
document.getElementsByID("winCounter").innerHTML = winCount;
document.getElementsByID("lossCounter").innerHTML - lossCount;

console.log(selectedWord);
console.log(lettersinWord);
console.log(numBlanks);
console.log(blanksAndSuccesses);
}

function checkLetters(letter) {

	var isLetterInWord = false;
	for (var i=0; i<numBlanks; i++) {
		if (selectedWord[i] == letter) {
			isLetterInWord = true;
		}
	}
	if (isLetterInWord) {
		for (var i=0; i<numBlanks; i++) {
			if (selectedWord[i] == letter) {
				blanksAndSuccesses[i] = letter;
			}
		}
	}

	else {
		wrongLetters.push(letter);
		guessesLeft ==

	console.log(blanksAndSuccesses);

	function roundComplete() {
		console.log("Win Count: "+ winCount +" | Loss Count: "+ lossCount +" | Guesses Left: "+ guessesLeft);
}

if (lettersinWord.tostring() == blanksAndSuccesses.tostring()) {
	winCount++;
	alert("Whoo Who: You Won!")

document.getElementsByID("winCounter").innerHTML = winCount;

	startGame();
}

else if (guessesLeft == 0) {
		lossCount++;
		alert("Wa-Wa-Wa: You Lost!");

		document.getElementsByID("lossCounter").innerHTML = lossCount;

	startGame();
	}
}

//Main Process

	startGame();

document.onkeyup = function(event) {
	var letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();
	checkLetters(letterGuessed);
	roundComplete();

	console.log(letterGuessed);

