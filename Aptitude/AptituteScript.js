const questions=[
    {
        questions: "Find the speed of the train, if a train 142 m long passes a pole in 6 seconds.",
        answers:[
            {text:"77.2 km/hr",correct: false},
            {text:"79.6 km/hr",correct: false},
            {text:"84.9 km/hr",correct: true},
            {text:"79.2 km/hr",correct: false},
        ]
    },
    {
        questions: "Find the H.C.F, if the numbers are in the ratio of 4 : 5 : 6 and their L.C.M. is 2400.",
        answers:[
            {text:"25",correct: false},
            {text:"20",correct: true},
            {text:"40",correct: false},
            {text:"67",correct: false},
        ]
    },
    {
        questions: "What is the unit digit in 1!+2!+3!+4!+5!....................+2023!",
        answers:[
            {text:"9",correct: false},
            {text:"7",correct: false},
            {text:"2",correct: false},
            {text:"3",correct: true},
        ]
    },
    {
        questions: "The average of five numbers is 27. If one number is excluded, the average becomes 25. The excluded number is ?",
        answers:[
            {text:"25",correct: false},
            {text:"35",correct: true},
            {text:"45",correct: false},
            {text:"55",correct: false},
        ]
    },
    {
        questions: "Today is Monday. After 63 days, it will be :",
        answers:[
            {text:"Tuesday",correct: false},
            {text:"Monday",correct: true},
            {text:"Sunday",correct: false},
            {text:"Saturday",correct: false},
        ]
    }
];
const questionsElement=document.getElementById("question");
const answerButtons=document.getElementById("answer-buttons");
const nextButton=document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;
function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}
function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionsElement.innerHTML = questionNo + ". " + currentQuestion.
    questions;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild (button);
        if(answer.correct){
            button.dataset.correct=answer.correct;
        }
        button.addEventListener("click",selectAnswer);

    });
}
function resetState(){
    nextButton.style.display = "none";
    while (answerButtons.firstChild) {
        answerButtons.removeChild (answerButtons.firstChild);
    }
 }
 function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct==="true";
    if(isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button=>{
        if(button.dataset.correct==="true"){
            button.classList.add("correct");
        }
        button.disabled=true;
    });
    nextButton.style.display="block";
}
function showScore(){
    resetState();
    questionsElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display ="block";
    }
    function handleNextButton(){
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
    showQuestion();
    }else{
    showScore();
    }
}
nextButton.addEventListener("click",()=>{
    if(currentQuestionIndex<questions.length){
        handleNextButton();
    }
    else{
        startQuiz();
    }
}
)
startQuiz();