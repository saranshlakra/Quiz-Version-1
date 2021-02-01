// Quiz mcq updated version with score and play till you want to exit.
function Question(question, answer, correctAnswer) {
  this.question = question;
  this.answer = answer;
  this.correct = correctAnswer;
}

Question.prototype.displayQuestion = function () {
  console.log(this.question);

  for (let i = 0; i <= this.answer.length - 1; i++) {
    console.log(i + ": " + this.answer[i]);
  }
};
let yourScore = 0;
Question.prototype.checkAnswer = function (userAns) {
  if (userAns === this.correct) {
    console.log("Correct Answer");
    yourScore += 1;
    console.log(`Total Score: ${yourScore}`);
    console.log("----------------------------");
  } else if (userAns !== this.correct && userAns == userAns) {
    console.log("Incorrect Answer");
    console.log(`Total Score: ${yourScore}`);
    console.log("----------------------------");
  } else if (userAns !== userAns) {
    alert("Please choose from given options.");
    console.log(`Total Score: ${yourScore}`);
    console.log("----------------------------");
  }
};

let question1 = new Question(
  "Who is the prime minister of India in 2021?",
  ["Modi ji", "Sodi ji"],
  0
);
let question2 = new Question(
  "Who is the supreme commander of Indian armed defence forces?",
  ["Defence Minister", "President", "General of that force"],
  1
);
let question3 = new Question(
  "Indian Army day is celebrated on which date?",
  ["15 August", "16 August", "15 January", "26 January"],
  2
);
let question4 = new Question(
  "Who is the cheif justice of India in 2021?",
  ["Sharad Arvind Bobde", "Ranjan Gogoi"],
  0
);
let que = [question1, question2, question3, question4];

let userAns;
function nextQues() {
  let randomQue = Math.floor(Math.random() * que.length);
  que[randomQue].displayQuestion();
  userAns = prompt("write your answer");
  if (userAns !== "exit") {
    que[randomQue].checkAnswer(parseInt(userAns));
    nextQues();
  }
}
nextQues();
// for (let i = 0; i <= que.length - 1; i++) {
//   console.log(i);
//   nextQues();
// }
