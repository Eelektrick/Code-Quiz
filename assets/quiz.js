// global variables
var startBtn = document.getElementById("startBtn");
var submitBtn = document.getElementById("submitBtn");
var timer = document.getElementById("timer");
var userScore = document.getElementById("userScore");
var questionBody = document.getElementById("questions");
var answers = document.getElementById("answers");
var submitScore = document.querySelector("#submitScore");

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

// countdown timer in seconds




// what happens when you click an answer
// timer starts(run timer after first click to start)



//What happens when timer reaches zero or if all questions are answered




//store top score with initials in storage