var readlineSync = require('readline-sync');
var chalk = require("chalk")

var userName = chalk.bold.red(readlineSync.question(chalk.blue(("What's your name?  "))));

console.log("Welocome to the quiz " + userName + "\n");
console.log("Topic of the quiz is" + chalk.yellowBright(" General Knowledge"))
var score = 0;

function quiz(options, question, answer){
  var index = readlineSync.keyInSelect(options, chalk.yellow(question));
  var userAnswer = options[index];
  
  var answerIndex = options.indexOf(answer)

  if(userAnswer === answer){
    console.log(chalk.underline.blue("Correct!"))
    score=score + 1;
  
  }else if(index == "-1"){
    console.log("You choose to skip this question")
  }
  else{
    console.log(chalk.underline.red("Incorrect!"));  
    console.log("Correct answer is " + (answerIndex + 1) + " " +  chalk.bgYellow(answer))

  }
  console.log(chalk.bgRed("Your score is : ",score))
  console.log("\n")
}

var questions = [{
  options : ["Mount Everest","Kanchenjunga","Alps","Pyrenees"],
  question : "Which is the Highest peak in the world ?",
  answer : "Mount Everest"
},{
  options : ["Bharat Ratna","Padmabhushan","Paramvir Chakra","Padma shri"],
  question : "Which is the highest Civilian Award in India?",
  answer : "Bharat Ratna"
},{
  options : ["Mahatma Gandhi","Jawahar Lal Nehru","Indira Gandhi","Sardar Patel"],
  question : "Who was the first Prime Minister of Independent India?",
  answer : "Jawahar Lal Nehru"
},{
  options : ["15-8-1949","26-1-1950","26-1-1951","15-8-1950"],
  question : "When did the constitution of India come into effect ?",
  answer : "26-1-1950"
},{
  options : ["China","Singapore","India","Japan"],
  question : "Where were the first Asian Games held??",
  answer : "India"
}]



for(var i=0; i<questions.length; i++){
  currentQuestion = questions[i];
  quiz(currentQuestion.options,currentQuestion.question, currentQuestion.answer);
}

console.log("You scored " + score + "/" + 5 + ".")
if(score == 0){
  console.log(chalk.bold.redBright("Better luck next time!"))
}else if(score == 1 || score == 2){
  console.log(chalk.bold.redBright("You can do better!"))
}else if(score == 3 || score == 4){
  console.log(chalk.bold.redBright("It was close! You almost did it!"))
}else{
  console.log(chalk.bold.redBright("You nailed it!"))
}