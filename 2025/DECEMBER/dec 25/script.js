const titlePage = document.querySelector('.title-page')
const startBtn = document.querySelector('.start-btn')
const mainPage = document.querySelector('.main-page')
const quesCounter = document.querySelector('.ques-counter')
const ques = document.querySelector('.ques')
const AllOption = document.querySelectorAll('.opt')
const nextBtn = document.querySelector('.next-btn')
const quesTimer = document.querySelector('.ques-timer')

const resultpage = document.querySelector('.result-page')
const showScore = document.getElementById('show-score')
const encourageLine = document.getElementById('encourage-line')

const resetBtn = document.querySelector('.reset-btn')

const correctSound = new Audio('./sounds/correct_retro.mp3')
const wrongSound = new Audio('./sounds/wrong_retro.mp3')
const soundToggle = document.getElementById('img2');
let soundOn = true

const quiz = [
    {
        question: "What is HTML?",
        options: ["A programming language", "A markup language", "A database", "An OS"],
        correct: 1
    },
    {
        question: "Which is not a JavaScript data type?",
        options: ["Number", "String", "Boolean", "Float"],
        correct: 3
    },
    {
        question: "CSS is used for?",
        options: ["Logic", "Styling", "Database", "Server"],
        correct: 1
    },
    {
        question: "Which language makes webpages interactive?",
        options: ["HTML", "CSS", "JavaScript", "Python"],
        correct: 2
    },
    {
        question: "Which HTML tag creates a hyperlink?",
        options: ["<link>", "<a>", "<href>", "<url>"],
        correct: 1
    },
    {
        question: "Which CSS property changes text color?",
        options: ["font-color", "text-color", "color", "background-color"],
        correct: 2
    },
    {
        question: "Which symbol represents ID in CSS?",
        options: ["#", ".", "*", "@"],
        correct: 0
    },
    {
        question: "Which HTML tag is the largest heading?",
        options: ["<head>", "<h6>", "<h1>", "<header>"],
        correct: 2
    },
    {
        question: "Which keyword declares a constant in JS?",
        options: ["var", "const", "let", "static"],
        correct: 1
    },
    {
        question: "DOM stands for?",
        options: ["Document Object Model", "Data Object Model", "Document Oriented Method", "Dynamic Object Model"],
        correct: 0
    },
    {
        question: "Which tag inserts an image?",
        options: ["<img>", "<image>", "<src>", "<picture>"],
        correct: 0
    },
    {
        question: "Which CSS property makes text bold?",
        options: ["font-weight", "text-style", "font-style", "text-weight"],
        correct: 0
    },
    {
        question: "Which JS method selects an element by ID?",
        options: ["getElementByClassName()", "getElementByTagName()", "getElementById()", "querySelectorAll()"],
        correct: 2
    },
    {
        question: "Which tag creates an unordered list?",
        options: ["<ol>", "<ul>", "<li>", "<list>"],
        correct: 1
    },
    {
        question: "Which CSS property controls inner spacing?",
        options: ["margin", "padding", "border", "spacing"],
        correct: 1
    },
    {
        question: "Which operator is strict equality?",
        options: ["=", "==", "===", "!=="],
        correct: 2
    },
    {
        question: "Which tag creates a table row?",
        options: ["<tr>", "<td>", "<table>", "<row>"],
        correct: 0
    },
    {
        question: "Which property changes background color?",
        options: ["background", "background-color", "color", "bgcolor"],
        correct: 1
    },
    {
        question: "Which JS function converts string to number?",
        options: ["parseInt()", "toNumber()", "Numberify()", "convertNumber()"],
        correct: 0
    },
    {
        question: "Which tag creates a checkbox?",
        options: ["<input type='checkbox'>", "<checkbox>", "<check>", "<input type='check'>"],
        correct: 0
    },
    {
        question: "Which HTML tag creates a paragraph?",
        options: ["<p>", "<para>", "<text>", "<paragraph>"],
        correct: 0
    },
    {
        question: "Which CSS property aligns text?",
        options: ["align", "text-align", "position", "float"],
        correct: 1
    },
    {
        question: "Which keyword declares a variable with block scope?",
        options: ["var", "let", "const", "define"],
        correct: 1
    },
    {
        question: "Which HTML tag is used for line break?",
        options: ["<lb>", "<br>", "<break>", "<line>"],
        correct: 1
    },
    {
        question: "Which CSS unit is relative?",
        options: ["px", "cm", "em", "mm"],
        correct: 2
    },
    {
        question: "Which JS method prints to console?",
        options: ["print()", "log()", "console.log()", "write()"],
        correct: 2
    },
    {
        question: "Which HTML attribute gives image path?",
        options: ["href", "src", "alt", "path"],
        correct: 1
    },
    {
        question: "Which CSS property hides overflow content?",
        options: ["display", "visibility", "overflow", "hidden"],
        correct: 2
    },
    {
        question: "Which symbol is used for class selector?",
        options: ["#", ".", "*", "%"],
        correct: 1
    },
    {
        question: "Which HTML tag creates a button?",
        options: ["<btn>", "<button>", "<input>", "<click>"],
        correct: 1
    },
    {
        question: "Which JS loop runs at least once?",
        options: ["for", "while", "do...while", "foreach"],
        correct: 2
    },
    {
        question: "Which CSS property changes font?",
        options: ["font-style", "font-family", "font-weight", "text-style"],
        correct: 1
    },
    {
        question: "Which HTML tag contains metadata?",
        options: ["<body>", "<meta>", "<head>", "<title>"],
        correct: 2
    },
    {
        question: "Which JS keyword is used for conditions?",
        options: ["if", "for", "loop", "check"],
        correct: 0
    },
    {
        question: "Which CSS property controls element position?",
        options: ["float", "display", "position", "align"],
        correct: 2
    },
    {
        question: "Which HTML tag creates an ordered list?",
        options: ["<ul>", "<ol>", "<li>", "<list>"],
        correct: 1
    },
    {
        question: "Which JS function shows popup message?",
        options: ["prompt()", "confirm()", "alert()", "message()"],
        correct: 2
    },
    {
        question: "Which CSS property makes element invisible but keeps space?",
        options: ["display:none", "visibility:hidden", "opacity:0", "hidden"],
        correct: 1
    },
    {
        question: "Which HTML input type is used for password?",
        options: ["text", "hidden", "password", "secure"],
        correct: 2
    },
    {
        question: "Which JS method adds element to array end?",
        options: ["push()", "pop()", "shift()", "unshift()"],
        correct: 0
    },
    {
        question: "Which CSS property creates shadow?",
        options: ["box-shadow", "text-shadow", "shadow", "border-shadow"],
        correct: 0
    },
    {
        question: "Which HTML tag is used for audio?",
        options: ["<sound>", "<mp3>", "<audio>", "<music>"],
        correct: 2
    },
    {
        question: "Which JS operator is logical AND?",
        options: ["&", "&&", "|", "||"],
        correct: 1
    },
    {
        question: "Which CSS property rounds corners?",
        options: ["corner-radius", "border-round", "border-radius", "radius"],
        correct: 2
    },
    {
        question: "Which HTML tag is semantic?",
        options: ["<div>", "<span>", "<section>", "<b>"],
        correct: 2
    },
    {
        question: "Which HTML tag is used to embed a video?",
        options: ["<media>", "<movie>", "<video>", "<embed>"],
        correct: 2
    },
    {
        question: "Which CSS property is used to center items horizontally in flexbox?",
        options: ["align-items", "justify-content", "text-align", "flex-center"],
        correct: 1
    },
    {
        question: "Which JavaScript method removes the last element from an array?",
        options: ["pop()", "push()", "shift()", "remove()"],
        correct: 0
    },

    {
        question: "Which JS event triggers on button click?",
        options: ["onhover", "onpress", "onclick", "onload"],
        correct: 2
    },
    {
        question: "Which CSS property controls layout direction?",
        options: ["flex-direction", "align-items", "justify-content", "direction"],
        correct: 0
    }
];


const feedback = [
    "Don’t worry — everyone starts somewhere. Keep going 💪",
    "Nice try! You’re learning 🚀",
    "Good effort! You’re improving 👏",
    "Well done! Solid performance 🔥",
    "Great job! Almost perfect ⭐",
    "Perfect score! Outstanding work 🏆"
];

let currentQuesCounter = 0
const noOfQuestions = quiz.length
let score = 0

const savedIndex = localStorage.getItem('quizIndex');       //the saving of the question no. in local storage
const savedScore = localStorage.getItem('quizScore');       //the saving of the score in local storage
if (savedIndex !== null) {
    currentQuesCounter = Number(savedIndex) || 0;           // see if the index is a valid number nhi toh use 0
    score = Number(savedScore) || 0;
}

let answered = false

let timeLeft = 30;
let timerId = null;


function startTimer() {
    clearInterval(timerId);         // kill old timer (if any)
    timeLeft = 30;                   //set timeleft to 30 again
    quesTimer.innerText = '00:' + timeLeft;         //set questimer

    mainPage.classList.remove('yellow', 'red');     //remove the classes
    quesTimer.classList.remove('mid-yellow', 'mid-red');
    nextBtn.classList.remove('drk-yellow', 'drk-red');

    timerId = setInterval(() => {       //actual timer starts
        timeLeft--;
        quesTimer.innerText = '00:' + timeLeft;     //update questimer

        if (timeLeft === 15) {          //add classes on condition
            mainPage.classList.add('yellow');
            quesTimer.classList.add('mid-yellow');
            nextBtn.classList.add('drk-yellow');
        }

        if (timeLeft === 5) {
            mainPage.classList.add('red');
            quesTimer.classList.add('mid-red');
            nextBtn.classList.add('drk-red');
        }

        if (timeLeft === 0) {
            clearInterval(timerId);             //at the time end stop the timer
            handleTimeUp();             //show right answer at the time-end
            if (soundOn) {              //play wrong sound
                wrongSound.currentTime = 0;
                wrongSound.play();
            }
        }
    }, 1000);
}


function handleTimeUp() {
    if (answered) return;
    answered = true;
    AllOption[quiz[currentQuesCounter].correct].classList.add('green-border', 'correct');
}


function loadQuestion() {
    const q = quiz[currentQuesCounter]

    ques.innerText = q.question             //loads the questions and answers
    AllOption.forEach((opt, i) => {
        opt.innerText = q.options[i];
        opt.classList.remove('green-border', 'red-border', 'correct', 'wrong');
    });

    // startTimer();               //starts the timer for the first time as the questions get loaded
}


function optSelect(i) {             //the function for the logic of the option selection process
    if (answered) return                //if answer has been given then no further clicks can be made 
    answered = true

    clearInterval(timerId)              //stops the timer

    if (i === quiz[currentQuesCounter].correct) {
        score++;                                        //update score
        AllOption[i].classList.add('green-border', 'correct')           //gives styling
        if (soundOn) {                                                  //plays correct sound if the sound is On
            correctSound.currentTime = 0;
            correctSound.play();
        }
        saveProgress();
    } else {
        AllOption[i].classList.add('red-border', 'wrong')               //gives styling
        AllOption[quiz[currentQuesCounter].correct].classList.add('green-border', 'correct')
        if (soundOn) {                                                                          //plays wrong sound if the sound is On                
            wrongSound.currentTime = 0;
            wrongSound.play();
        }
    }
}


function nextQuestion() {               //function for next question logic
    clearInterval(timerId)              //stops the timer

    if (currentQuesCounter < quiz.length - 1) {
        currentQuesCounter++
        answered = false                                                            //resets the answer so user can select the answers again

        loadQuestion();
        quesCounter.innerText = `${currentQuesCounter + 1}/${noOfQuestions}`
        saveProgress();
        startTimer()
    } else {
        // alert("Quiz Finished!");
        localStorage.setItem('finalScore', score);
        localStorage.removeItem('quizIndex');
        localStorage.removeItem('quizScore');

        mainPage.classList.add('vanish');
        mainPage.classList.remove('appear');
        resultpage.classList.add('appear');

        showResult()
    }
}

function saveProgress() {
    localStorage.setItem('quizIndex', currentQuesCounter);
    localStorage.setItem('quizScore', score);
}



startBtn.addEventListener('click', () => {
    titlePage.classList.add('vanish')
    mainPage.classList.add('appear')


    currentQuesCounter = 0;
    score = 0;
    answered = false;

    loadQuestion();
    quesCounter.innerText = `1 / ${noOfQuestions}`;
    startTimer();
})

quesCounter.innerText = `${currentQuesCounter + 1}/${noOfQuestions}`    //tells no of questions

loadQuestion()

soundToggle.addEventListener('click', () => {
    soundOn = !soundOn;
    soundToggle.src = soundOn ? './images/icon _Volume_Up.png' : './images/icon _Volume_off.png';
});

AllOption.forEach((option, index) => {
    option.addEventListener("click", (e) => {
        optSelect(index);
    });
});

nextBtn.addEventListener('click', () => {
    if (answered === true) {
        console.log('Next')
        nextQuestion();
    }
})




function showResult() {
    const finalScore = Number(localStorage.getItem('finalScore')) || 0;

    showScore.innerText = `${finalScore} / ${noOfQuestions}`;

    const scorePercent = (finalScore / noOfQuestions) * 100;
    const index = scorePercent === 100 ? 5 : Math.floor(scorePercent / 20);

    encourageLine.innerText = feedback[index];

    document.querySelector('.green-part').style.width = scorePercent + '%';
}

resetBtn.addEventListener('click', () => {
    clearInterval(timerId);

    localStorage.clear();

    currentQuesCounter = 0;
    score = 0;
    answered = false;

    resultpage.classList.remove('appear');
    mainPage.classList.add('vanish');
    titlePage.classList.remove('vanish');
});
