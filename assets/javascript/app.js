var questions = [{
    "question": "In Teh Wizard of Oz, Tin Man wished for a brain",
    "Option 1": "True",
    "Option 2": "False",
    "answer": "1"
}, 
{
    "question": "In which blockbuster did Anthony Perkins first appear as Norman Bates?"
    "Option 1": "Toy Story",
    "Option 2": "Psycho",
    "Option 3": "The Color Purple",
    "answer": "2"
},
{
    "question": "Who was the Pretty Woman in the 1990 film with Richard Gere?"
    "Option 1": "Sandra Bullock",
    "Option 2": "Marilyn Monroe",
    "Option 3": "Julia Roberts",
    "answer": "3" 
}];

var currentQuestion = 0;
var score = 0;
var totalQuestions = questions.length;

var container = document.getElementById('quizContainer');
var opt1 = document.getElementById("opt1");
var opt2 = document.getElementById("opt2");
var opt3 = document.getElementById("opt3");

var totalQuestions = questions.length;
var nextButton = document.getElementById('nextButton');
var resultCont = document.getElementById('result');

function loadQuestion (questionIndex) {
    var q = questions[questionIndex];
    $(questions).textContent = (questionIndex + 1) + '. ' + q.questions;
    opt1.textContent = q["Option 1"];
    opt2.textContent = q["Option 2"];
    opt3.textContent = q["Option 3"];
};

function nextQuestion () {
    var selectedOption = document.querySelector('input[type=radio]:cehecked');

    if(!slectedOption){
        alert('Select your answer');
        return;
    }
    var answer = selectedOption.nodeValue;
    
    if(questions[currentQuestion].answer == answer){
        score += 10;
    }
    selectedOption.checked = false;
    currentQuestion++;

    if(currentQuestion == totalQuestions - 1){
        nextButton.textContent = 'Finish';
    }
    
    if(currentQuestion == totalQuestions){
        container.style.display = 'none';
        resultCont.style.display = '';
        resultCont.textContent = 'Your Score: ' + score;
        return;
    }
    loadQuestion(currentQuestion);
}

