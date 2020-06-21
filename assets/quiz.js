// global variables
var startBtn = document.getElementById("startBtn");
var submitBtn = document.getElementById("submitBtn");
var timerEl = document.getElementById("timer");
var userScore = document.getElementById("userScore");
var questionBody = document.getElementById("questions");
var answers = document.getElementById("answers");
var submitScore = document.querySelector("#submitScore");
var quiz = document.getElementById("quiz");
var home = document.getElementById("home");
var finalScore = document.getElementById("submitScore");
var initialsInput = document.querySelector("#initials");
var highScoreDisplay = document.getElementById("highScoresList");
var highScores = JSON.parse(localStorage.getItem("highScores") || "[]");
var questionNumber = -1;
var answerChoice;
var secondsLeft = 50;

// Start the quiz with a click of the start quiz button
startBtn.addEventListener("click", startQuiz);

//function that operates the entire quiz
function startQuiz(){
    //swap welcome message to the quiz
    home.classList.add("d-none");
    quiz.classList.remove("d-none");

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

    if(secondsLeft === 0 || questionNumber === questions.length){
        clearInterval(timerInterval);
        finalResults();
    }

    },1000);
}

// make questions appear when hitting the start button
function makeQuestions(){
    questionNumber++;
    answerChoice = questions[questionNumber].answer;

    questionBody.innerHTML = questions[questionNumber].title;
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

    if(answerChoice === event.target.textContent){
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

//after quiz is done, show the final reults page with an choice to add intials and save to highscores
function finalResults(){
    quiz.classList.add("d-none");
    finalScore.classList.remove("d-none");
    userScore.innerHTML = "Final Score: " + secondsLeft;
}

//submit button to store initials and highscore
submitBtn.addEventListener("click", function(e){
    e.preventDefault();

    addScore();

    list();
});

function list(){
    for(var i = 0; i< highScores.length; i++){
        var newLi = document.createElement("li")
        console.log(highScores)
        newLi.textContent = highScores[i].initials + " - " + highScores[i].score;
        document.getElementById("scoreList").appendChild(newLi);
    }
    
    // click handlers for restart and clearing scoreboard
    document.getElementById("clearBtn").addEventListener("click", function () {
        event.preventDefault();
        localStorage.clear();
        document.getElementById("scoreList").textContent = "";
    });
    
    document.getElementById("goBackBtn").addEventListener("click", function () {
        event.preventDefault();
        window.location.reload();
    });
}

function addScore(){
    //create user object for submission
    var newScore = {
        initials: initialsInput.value,
        score: secondsLeft
    };

    //check if there is scores already in local storage if not clear it
    highScores;

    //push object into the score array
    highScores.push(newScore);

    //set new submission
    localStorage.setItem("highScores",JSON.stringify(highScores));

    finalScore.classList.add("d-none");
    document.getElementById("highScores").classList.remove("d-none");
}

//click on view high scores in top left corner
document.getElementById("viewScores").addEventListener("click", function(e){
    e.preventDefault();

    home.classList.add("d-none");
    addScore();
    list();

    // click handlers for restart and clearing scoreboard
    document.getElementById("clearBtn").addEventListener("click", function () {
        event.preventDefault();
        localStorage.clear();
        document.getElementById("scoreList").textContent = "";
    });
    
    document.getElementById("goBackBtn").addEventListener("click", function () {
        event.preventDefault();
        window.location.reload();
    });
});