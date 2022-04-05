let startQuiz = document.querySelector("#startQuiz");
let timerEl = document.querySelector("#timer");
let infoPage = document.querySelector(".card")
let quizQuestions = document.querySelector("#quizBody");
let timer = 60;
let initialScore = 0;

questionInfo = [{ question: "What is CSS?", answers: { a: "Cascasding Style Sheet", b: "Crictical Style Sheet", c: "Cascading Styling Sheet", d: "Create Styles Sheet" }, correctAnswer: "a" },
{ question: "Commonly used data types do NOT include:", answers: { a: "strings", b: "booleans", c: "alerts", d: "numbers" }, correctAnswer: "c" },
{ question: "Arrays in JavaScript can be used to store what?", answers: { a: "numbers and strings", b: "booleans", c: "Other arrays", d: "All of the above" }, correctAnswer: "d" },
{ question: "The condition of an if/else statement is enclosed with what?", answers: { a: "quotes", b: "curly brackets", c: "parenthesis", d: "square brackets" }, correctAnswer: "b" },
{ question: "A very useful tool used during development and debugging for printing content to the console:", answers: { a: "display.textContent", b: "terminal", c: "console.log", d: "print screen" }, correctAnswer: "c" }];

startQuiz.on("click", startQuiz);



function startQuiz() {
    infoPage.style.display = "none";
    quizQuestions.sytle.display = "block";
    setInterval(function () {
        timer--;
        timerEl.textContent = timer;
    }, 1000)
}

function showResults() {

}
