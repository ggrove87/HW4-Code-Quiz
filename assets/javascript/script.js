let startBtn = document.querySelector("#startQuiz");
let timerEl = document.querySelector("#timer");
let infoPage = document.querySelector(".card")
let quiz = document.querySelector("#quizBody");
let quizQuestion = document.querySelector("#quizQuestion");
let answers = document.querySelector("#answers");
let answer1 = document.querySelector("#answer1");
let answer2 = document.querySelector("#answer2");
let answer3 = document.querySelector("#answer3");
let answer4 = document.querySelector("#answer4");
let finalScore = document.querySelector("#finalScore");
let timer = 60;
let initialScore = 0;
let selectedQuestion = 0;

questionInfo = [{ question: "What is CSS?", a: "Cascasding Style Sheet", b: "Crictical Style Sheet", c: "Cascading Styling Sheet", d: "Create Styles Sheet", correctAnswer: "a" },
{ question: "Commonly used data types do NOT include:", a: "strings", b: "booleans", c: "alerts", d: "numbers", correctAnswer: "c" },
{ question: "Arrays in JavaScript can be used to store what?", a: "numbers and strings", b: "booleans", c: "Other arrays", d: "All of the above", correctAnswer: "d" },
{ question: "The condition of an if/else statement is enclosed with what?", answers: { a: "quotes", b: "curly brackets", c: "parenthesis", d: "square brackets" }, correctAnswer: "b" },
{ question: "A very useful tool used during development and debugging for printing content to the console:", a: "display.textContent", b: "terminal", c: "console.log", d: "print screen", correctAnswer: "c" }];

startBtn.addEventListener("click", startQuiz());



function startQuiz() {
    infoPage.style.display = "none";
    quiz.style.display = "block";
    setInterval(function () {
        timer--;
        timerEl.textContent = timer;
    }, 1000)

    currentQuestion();
}

function currentQuestion() {
    let i = questionInfo[selectedQuestion]
    question.innerHTML = i.question;
    a.innerHTML = i.a;
    b.innerHTML = i.b;
    c.innerHTML = i.c;
    d.innerHTML = i.d;
}

function checkAnser()
if (questionInfo) {

}
function showResults() {
    infoPage.style.display = "none";
    quiz.style.display = "none";
    finalScore.style.display = "block";

    if(timer === 0 || questionInfo.length -1) {
        
    }
}
