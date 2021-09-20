var readlineSync = require("readline-sync");

var score = 0;

var highScores = [
  {
    name: "Pranav",
    score: 9,
  },

  {
    name: "Pattu",
    score: 7,
  },
]

var questions = [{
  question: "What's the name of the main character showcased? ",
  answer: "Ragnar"
}, {
  question: "What was he at the begining? ",
  answer: "Farmer"
},
{
  question: "Who did he become at the end? ",
  answer: "King"
},
{
  question: "How many Wives did he have? ",
  answer: "2"
},
{
  question: "How many children did he have? ",
  answer: "5"
},
{
  question: "Who bulit boats for him? ",
  answer: "Floki"
},
{
  question: "Which God was he known to be a decendant of? ",
  answer: "Odin"
},
{
  question: "Where did he end up travelling to first? ",
  answer: "England"
},
{
  question: "Which place did he dreamt to conquer? ",
  answer: "Paris"
},
{
  question: "His Favorite son? ",
  answer: "Ivar"
},];

function welcome() {
 var userName = readlineSync.question("Hey, what's your name? ");

  console.log("Welcome "+ userName );

  if(readlineSync.keyInYN('Are you ready to play a quiz on VIKINGS?')) {
    console.log("-------------");
      game(); 
      showScores();
    }
  else
    console.log("Get back when you're ready! :)");
}

function play(question, answer) {
  var userAnswer = readlineSync.question(question);

  if (userAnswer.toUpperCase() === answer.toUpperCase()) {
    console.log("right!");
    score = score + 1;
    
  } else {
    console.log("wrong! :(");
   
  }

  console.log("current score: ", score);
  console.log("-------------");
}

function game() {
  for (var i=0; i<questions.length; i++) {
    var currentQuestion = questions[i];
    play(currentQuestion.question, currentQuestion.answer)
  }
}

function showScores() {
  console.log("Congo! You SCORED: ", score);

  console.log("Try to beat the High Scores:");

  highScores.map(score => console.log(score.name, " : ", score.score))
}


welcome();