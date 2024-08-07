import { questions } from "./data.js";

const progressValueEl = document.querySelector(".progress .value");
const numberEl = document.querySelector(".number");
const questionEl = document.querySelector(".question");
const choiceEl = document.querySelector(".choice1");
const choiceE2 = document.querySelector(".choice2");

let currentNumber = 0;
let mbti = "";

function renderQuestion() {
  const question = questions[currentNumber];
  numberEl.innerHTML = question.number;
  questionEl.innerHTML = question.question;
  choiceEl.innerHTML = question.choices[0].text;
  choiceE2.innerHTML = question.choices[1].text;
  progressValueEl.style.width = (currentNumber + 1) * 10 + "%";
}
function nextQuestion(choiceNumber) {
    if (currentNumber === questions.length - 1) {
        showResultPage()
        return
    }
  const question = questions[currentNumber];
    mbti = mbti + question.choices[choiceNumber].value;
    currentNumber = currentNumber + 1;
    renderQuestion()
}
function showResultPage() {
    location.href = '/results.html?mbti=' + mbti
}
choiceEl.addEventListener("click", function () {
  nextQuestion(0);
});
choiceE2.addEventListener("click", function () {
  nextQuestion(1);
});
renderQuestion();