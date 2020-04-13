
var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');

function generateQuiz (questions, quizContainer, resultsContainer, submitButton){

    function showQuestions(questions, quizContainer){
        var output = [];
        var answers;

        for(var i=0; i<questions.length; i++){
            answers = [];
            for(letter in questions[i].answers){
                answers.push(
                    '<label>'
                    + '<input type="radio" name="question'+i+'" value="'+letter+'">'
                    + letter + ': '
                    + questions[i].answers[letter]
                    + '</label>'
                );
            )

            output.push(
                '<div class= "question">' + questions[i].question + '</div>'
                + '<div class="answers">' + answers.join('') + '</div>'
            );
            }
            quizContainer.innerHTML = output.join('');
        }
    }

    function showResults(questions, quizContainer, resultsContainer){
       var answerContainers = quizContainer.querySelectorAll('.answers');

       var userAnswer = '';
       var numCorrect = 0;

       for(var i=0; i<questions.length; i++){
           userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;
           if(userAnswer===questions[i].correctAnswer){
               numCorrect++;
               answerContainers[i].style.color = 'red';
           }
       }

       resultsContainer.innerHTML = numCorrect + ' out of ' + questions.length;
    }

    //show the questions
    showQuestions(questions, quizContainer),
    var myQuestions = [{
    question: "1. Which of these values is NOT considered false?",
    answers: {
        a: '0',
        b: 'null',
        c: '""',
        d: 'zero'
    }, 
    correctAnswer: 'a'
    },
    
    { 
    question: "2. Which is not a data type in an array in JavaScript?",
    answers: {
        a: 'strings',
        b: 'functions',
        c: 'booleans',
        d: 'variables'
    },
    correctAnswer: 'b'
    },

    {
    question: "3. When do you use a break to exit a loop?",
    answers: {
        a: 'at the bottom of the conditional code block',
        b: 'at the top of the conditional code block',
        c: 'both',
        d: 'neither'
    },
    correctAnswer: 'a'
    }
    
    ,{
    question: "4. What allows blocks of code to execute repeatedly until their conditional statements evaluate to false?",
    answers: {
        a: 'for loops',
        b: 'while loops',
        c: 'both',
        d: 'neither'
    },
    correctAnswer: 'c'
    }
    
    ,{
    question: "5. Which variables are considered global?",
    answers: {
        a: 'input',
        b: 'input and sum',
        c: 'sum',
        d: 'sum and num'
    },
    correctAnswer: 'a'
    }

    , submitButton.onclick = function(){
        showResults(questions, quizContainer, resultsContainer);
    }
}
