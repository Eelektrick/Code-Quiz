// global variables
var startBtn = document.getElementById("startBtn");
var submitBtn = document.getElementById("submitBtn");
var timerEl = document.getElementById("timer");
var userScore = document.getElementById("userScore");
var questionBody = document.getElementById("questions");
var answers = document.getElementById("answers");
var submitScore = document.querySelector("#submitScore");
var questionNumber = 0;
var answer;
var secondsLeft = 75;

// Start the quiz with a click of the start quiz button
startBtn.addEventListener("click", startQuiz);

//function that operates the entire quiz
function startQuiz(){
    //swap welcome message to the quiz
    document.getElementById("home").classList.add("d-none");
    document.getElementById("quiz").classList.remove("d-none");

    //timer begins at 75 seconds
    timer();
    // create questions and display on screen
    makeQuestions();
}

// questions, choices, and answers in an array
var questions = [
    {
        title: "Which tag do you insert the HTML to link the javascript?",
        options: ["<script>","<java>","<javascript>","<js>"],
        answer: "<script>"
    },
    {
        title: "What type of pop up box will allow a user to type a response?",
        options: ["Confirm","Alert","Prompt","Input"],
        answer: "Prompt"
    },
    {
        title: "The condition of an if/else statement is enclosed within ___.",
        options: ["square brackets","curly brackets","quotations","parentheses"],
        answer: "parentheses"
    },
    {
        title: "Commonly Used Data Types DO NOT include:",
        options: ["strings","alerts","booleans","numbers"],
        answer: "alerts"
    },
    {
        title: "Arrays in Javascript can be used to store?",
        options: ["Other Arrays","Strings and Numbers","Booleans","All of the Above"],
        answer: "All of the Above"
    }
];

// countdown timer in seconds and ending when timer hits 0.
function timer(){

    var timerInterval = setInterval(function(){
    timerEl.textContent = "Time: " + secondsLeft;
    secondsLeft--;

    if(secondsLeft === 0){
        clearInterval(timerInterval);
    }

    },1000);
}

// make questions appear when hitting the start button
function makeQuestions(){
    questionNumber++;
    answer = questions[questionNumber].answer;

    questionBody.textContent = questions[questionNumber].title;
    answers.innerHTML = "";

    var option = questions[questionNumber].options;

    for(var i=0; i<option.length; i++){
        var nextOption = document.createElement("button");

        nextOption.textContent = option[i];
        answerBtn = answers.appendChild(nextOption).setAttribute("class", "p-3 m-1 btn-outline-danger btn-block");
    }
}

//answering the questions and moving to next question
answers.addEventListener("click", function(event){
    var pResult = document.getElementById ("result");
    pResult.removeAttribute("style");

    if(answer === event.target.textContent){
        pResult.innerHTML = "Correct!";
        setTimeout(hideResult,1000);
    }
    else{
        pResult.innerHTML = "Sorry, that is incorrect!";
        secondsLeft -= 10;
        setTimeout(hideResult,1000);
    }
    makeQuestions();
});

//function to hide the reply if you are correct or wrong
function hideResult(){
    var pResult = document.getElementById ("result");
    pResult.style.display = "none";
}

// what happens when you click an answer
// timer starts(run timer after first click to start)

//store top score with initials in storage