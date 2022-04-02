let startQuiz = document.querySelector("#startQuiz");
let timerEl = document.querySelector("#timer");

let timer = 60;

questionInfo = [{question:"What is CSS?",answers: {a: "Cascasding Style Sheet",b:"Crictical Style Sheet", c:"Cascading Styling Sheet", d: "Create Styles Sheet"}, correctAnswer: "a"},
{question:"What is CSS?",answers: {a: "Cascasding Style Sheet",b:"Crictical Style Sheet", c:"Cascading Styling Sheet", d: "Create Styles Sheet"}, correctAnswer: "a"}];

function startQuiz() {
    setInterval(function(){
        timer--;
        timerEl.textContent = timer
    },1000)
}

function showResults(){

}
