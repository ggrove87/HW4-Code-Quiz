let startBtn = document.querySelector("#startQuiz");
let timerEl = document.querySelector("#timer");
let infoPage = document.querySelector(".card")
let quiz = document.querySelector("#quizBody");
let quizQuestion = document.querySelector("#quizQuestion");
let question = document.querySelector("#question");
let answers = document.querySelector("#answers");
let answer1 = document.querySelector("#answer1");
let answer2 = document.querySelector("#answer2");
let answer3 = document.querySelector("#answer3");
let answer4 = document.querySelector("#answer4");
let scorePage = document.querySelector("#scorePage");
let finalScore = document.querySelector("#finalScore");
let userInitials = document.querySelector("#userInitials");
let submitBtn = document.querySelector("#submit");
let highScore = [];
// prevents the displays of the score page and quiz before the user starts the quiz
quiz.style.display = "none";
scorePage.style.display = "none";

// sets default values
let timer = 60;
let userScore = 0;
let selectedQuestion = 0;

// array of questions to be asked
let questionInfo = [{ question: "What is CSS?", a: "Cascasding Style Sheet", b: "Crictical Style Sheet", c: "Cascading Styling Sheet", d: "Create Styles Sheet", correctAnswer: "Cascasding Style Sheet" },
{ question: "Commonly used data types do NOT include:", a: "strings", b: "booleans", c: "alerts", d: "numbers", correctAnswer: "alerts" },
{ question: "Arrays in JavaScript can be used to store what?", a: "numbers and strings", b: "booleans", c: "Other arrays", d: "All of the above", correctAnswer: "All of the above" },
{ question: "The condition of an if/else statement is enclosed with what?", a: "quotes", b: "curly brackets", c: "parenthesis", d: "square brackets", correctAnswer: "curly brackets" },
{ question: "A very useful tool used during development and debugging for printing content to the console:", a: "display.textContent", b: "terminal", c: "console.log", d: "print screen", correctAnswer: "console.log" }];

// button event listeners 
startBtn.addEventListener("click", startQuiz);
answers.addEventListener("click", function (event) {
    let answerEl = event.target;

    if (answerEl.matches("button") === true) {
        checkAnswer(answerEl);
    }
})

submitBtn.addEventListener("click", function (event) {
    event.preventDefault();
    let storedHighScore = JSON.parse(localStorage.getItem("highScore"));
    if (storedHighScore !== null) {
        highScore = storedHighScore;
    }
    let currentScore = [{ "score": userScore, "name": userInitials.value }];
    console.log(JSON.stringify(currentScore));
    highScore.push(currentScore);
    localStorage.setItem("highScore", JSON.stringify(currentScore));
    
})

// lauches the quiz questions upon the user clicking the start button
function startQuiz() {
    infoPage.style.display = "none";
    quiz.style.display = "block";
    setInterval(function () {
        timer--;
        timerEl.textContent = timer;
    }, 1000)

    currentQuestion();
}

// loads the current question for the user to answer pulling the populated information from questionInfo array
function currentQuestion() {
    question.innerHTML = questionInfo[selectedQuestion].question;
    answer1.innerText = questionInfo[selectedQuestion].a;
    answer2.innerText = questionInfo[selectedQuestion].b;
    answer3.innerText = questionInfo[selectedQuestion].c;
    answer4.innerText = questionInfo[selectedQuestion].d;
}

// checks the answer provided by the user against the correct answer
function checkAnswer(answer) {
    if (questionInfo[selectedQuestion].correctAnswer == answer.textContent) {
        answerCheck.textContent = "Correct"
        userScore = userScore + 10;
    } else {
        answerCheck.textContent = "Wrong"
        timer = timer - 10;
    }
    selectedQuestion++;
    if (timer === 0 || selectedQuestion == questionInfo.length) {
        showResults();
    } else {
        currentQuestion();
    }
}
// shows the final score and allows the user inputs
function showResults() {
    timerEl.style.display = "none";
    infoPage.style.display = "none";
    quiz.style.display = "none";
    scorePage.style.display = "block";
    userScore = userScore + timer;
    finalScore.textContent = userScore;
    return userScore;
} 
