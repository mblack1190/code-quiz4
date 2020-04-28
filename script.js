
var myQuestions = [
    {
    question: "1. Which of these values is NOT considered false?",
    choices: ['0', 'null', '""', 'zero'],
    correctAnswer: '0'
    },
    { 
    question: "2. Which is not a data type in an array in JavaScript?",
    choices: ['strings', 'functions', 'booleans', 'variables'],
    correctAnswer: 'functions'
    },

    {
    question: "3. When do you use a break to exit a loop?",
    choices: ['at the bottom of the conditional code block', 'at the top of the conditional code block', 'both', 'neither'],
    correctAnswer: 'at the bottom of the conditional code block'
    },
    
    {
    question: "4. What allows blocks of code to execute repeatedly until their conditional statements evaluate to false?",
    choices: ['for loops', 'while loops', 'both', 'neither'],
    correctAnswer: 'both'
    },
    
    {
    question: "5. Which variables are considered global?",
    choices: ['input', 'input and sum', 'sum', 'sum and num'],
    correctAnswer: 'input'
    },
]

var startBtn = document.getElementById("start");
var startScreen = document.getElementById("start-screen");
var quizScreen = document.getElementById("quiz-screen");
var endScreen = document.getElementById("end-screen");
var timerEl = document.getElementById("timer")
var questionTitle = document.getElementById("question-title");
var choicesEl = document.getElementById("choices")
var responseEl = document.getElementById("response");
var Q = 0;
var time = 60;
var timerId;

function clockTick() {
    time--;
    timerEl.textContent = time;
}


startBtn.addEventListener("click", startGame);

function buildQuestionCard() {
    var currentQuestion =  myQuestions[Q];
    questionTitle.textContent = currentQuestion.question;

    choicesEl.innerHTML = "";
    // loop over our choices and create a button for each one
    currentQuestion.choices.forEach(function(choice, i) {
        var buttonEl = document.createElement("button");
        buttonEl.setAttribute("class", "choice");
        buttonEl.setAttribute("value", choice)

        buttonEl.textContent = choice;

        buttonEl.onclick = questionClick;       

        choicesEl.appendChild(buttonEl)

    })
}

function questionClick(){
   if(this.value !== myQuestions[Q].answer) {
       responseEl.textContent = "wrong";
   } else {
       responseEl.textContent = "right";
   }
   Q++;
   if(Q === myQuestions.length){
       endQuiz();
   } else {
       buildQuestionCard();
   }
}

function endQuiz() {
    quizScreen.setAttribute("class", "hide");
    endScreen.removeAttribute("class", "hide");
}
function startGame() {
    startScreen.setAttribute("class", "hide");
    quizScreen.removeAttribute("class", "hide");

    buildQuestionCard();
    timerId = setInterval(clockTick, 1000)
}