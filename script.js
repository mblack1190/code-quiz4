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
var questionTitle = document.getElementById("question-title");

var Q = 0;


startBtn.addEventListener("click", startGame);

function buildQuestionCard() {
    var currentQuestion =  myQuestions[Q].question;
    questionTitle.textContent = currentQuestion;

    // loop over our choices and create a button for each one
}

function startGame() {
    startScreen.setAttribute("class", "hide");
    quizScreen.removeAttribute("class", "hide");

    buildQuestionCard();
}