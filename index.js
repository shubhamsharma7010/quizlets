var readlineSync = require("readline-sync");
var userName = readlineSync.question(" May I know Your Name ? ");
console.log(" Welcome!! " + userName + " Would You Like To Hop In For a Quiz? ");
var score = 0;
//function 
function play(question, answer)
{
  var userAnswer = readlineSync.question(question);

  if (userAnswer === answer)
  {
    console.log(" You are Right!! ");
    score = score + 1;
  }
  else
  {
    console.log(" You are wrong!! " );
  }
  console.log(" Your current score: ", score);
  console.log("------------");
};
//array

var questions = [{question: " Q1.what is the highest peak in the world", answer: "mount everest"},{question: " Q2.which is the highest civilian award in our county? ",answer:"bharat ratna"},{
  question: " Q3.what is the currency of china? ",answer:"renminbi"},{question: " Q4.which is the highest military award in our country? ",answer: "param vir chakra"},{
    question: " Q5.How many players are there in cricket? ", answer: "11"}
];
//loop
for(var i=0; i<questions.length; i++){
  currentQuestion = questions[i];
  play(currentQuestion.question,currentQuestion.answer)
}

console.log(" Yay!! your final score is: ",score);