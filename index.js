const readlineSync = require("readline-sync");

let score = 0;

let userName = readlineSync.question("What is your Name? ");

console.log("---------------")
console.log(`Welcome ${userName} to Do Yo Know Bhavesh? `);
console.log("---------------")

function quiz(question, answer) {
  let userAnswer = readlineSync.question(question);

  if (userAnswer === answer) {
    console.log("You're right! ");
    score++;
  } else {
    console.log("You're wrong! ");
  }
    console.log("Your score is: ", score);
    console.log("---------------")
}

let questions = [
  {
  question: `What is my Age? 
  a)22
  b)25
  c)21
  d)20 \n`,
  answer: "c"
},{
  question: `Which Food do I like? 
  a)Biryani
  b)Pasta
  c)Maggi
  d)Chinese \n`,
  answer: "d"
}, {
  question: `Where do I live? 
  a)Mumbai
  b)Pune
  c)Bangalore
  d)Delhi \n`,
  answer: "a"
}, {
  question: `Which phone do I use? 
  a)Iphone 6
  b)Redmi Note 9
  c)Moto G6
  d)Realme \n`,
  answer: "c"
}, {
  question: `What do I like? 
  a)Tea
  b)Coffee
  c)Cola
  d)Jeera Masala Soda
  `,
  answer: "b"
}];

for (let i=0; i<questions.length; i++) {
  let currentQuestion = questions[i];
  quiz(currentQuestion.question, currentQuestion.answer)
}

console.log("Your Total score is :", score);