var questions = [
    {
        question: "Html stands for _____________",
        option: ["hyper markup", "JS", "hyper text markup language", "cascading style sheet"],
        correctAns: "hyper text markup language"
    },
    {
        question: "JS stands for _____________",
        option: ["java script", "hyper text markup language", "css", "html"],
        correctAns: "java script"
    },
    {
        question: "CSS stands for _____________",
        option: ["cascading style sheet", "hyper text markup language", "Java Script", "html"],
        correctAns: "cascading style sheet"
    },
    {
        question:"RAM stands for _____________",
        option:["random access memory","hyper text markup language","html","html"],
        correctAns:"random access memory"
    },
    {
        question:"ROM stands for _____________",
        option:["read only memory","hyper text markup language","html","html"],
        correctAns:"read only memory"
    }
];

var currentQueNo = document.getElementById("currentQueNo");
var totalQues = document.getElementById("totalQues");
var dispQuestion = document.getElementById("dispQuestion");
var answerParent = document.getElementById("answerParent");
var quizcontainer = document.getElementById("quizcontainer");
var endquiz = document.getElementById("endquiz");
var indexVal = 0;
var marks = 0;

function renderQue() {
    var obj = questions[indexVal];
    dispQuestion.innerHTML = obj.question;
    totalQues.innerHTML = questions.length;
    currentQueNo.innerHTML = indexVal + 1;

    answerParent.innerHTML = "";

    for (var i = 0; i < obj.option.length; i++) {
        answerParent.innerHTML += `
            <div class="col-md-6"> 
                <div class="py-2 button-container">
                    <button class="btn- btn-secondary answer-button" onclick="chkAns('${obj.correctAns}', '${obj.option[i]}')">
                        ${obj.option[i]}
                    </button>
                </div>
            </div>`;
    }
}

function nextQue() {
    indexVal++;
    if (indexVal < questions.length) {
        renderQue();
    } else {
        quizend();
    }
}

function chkAns(a, b) {
    if (a === b) {
        marks++;
    }
    nextQue();
}

function quizend() {
    quizcontainer.style.display = "none";
    endquiz.innerHTML = "<h2>Quiz Completed</h2><p>Your Score: " + marks + "</p>";
    endquiz.style.display = "block";
}

renderQue();