const quizData = [
    {
        question: 'Inside which HTML element do we put the JavaScript?',
        a: '<javascript>',
        b: '<scripting>',
        c: '<script>',
        d: '<js>',
        correct: 'c'
    },

    {
        question: ' Which of the following is a server-side Java Script object?',
        a: 'Function',
        b: 'File',
        c: 'FileUpload',
        d: 'Date',
        correct: 'b'
    },

    {
        question: "What is the most used programming language in 2019?",
        a: "Java",
        b: "C",
        c: "Python",
        d: "JavaScript",
        correct: "d",
    },
    {
        question: "Who is the President of US?",
        a: "Barack Obama",
        b: "Donald Trump",
        c: "Ivan Saldano",
        d: "Mihai Andrei",
        correct: "b",
    },
    {
        question: "What does HTML stand for?",
        a: "Hypertext Markup Language",
        b: "Cascading Style Sheet",
        c: "Jason Object Notation",
        d: "Helicopters Terminals Motorboats Lamborginis",
        correct: "a",
    },
    {
        question: "What year was JavaScript launched?",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "none of the above",
        correct: "b",
    }
];

const quiz = document.getElementById('quiz');
const answerE1s = document.querySelectorAll('.answer');
const questionE1 = document.getElementById('question');
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById('submit');

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz(){
    deselectAnswer();

    const currentQuizdata = quizData[currentQuiz];

    questionE1.innerText = currentQuizdata.question;
    a_text.innerText = currentQuizdata.a;
    b_text.innerText = currentQuizdata.b;
    c_text.innerText = currentQuizdata.c;
    d_text.innerText = currentQuizdata.d;
}

function getSelected(){
    let answer = undefined;

    answerE1s.forEach((answerE1) => {
        if(answerE1.checked) {
            answer = answerE1.id;
        }
    });
    return answer;
}

function deselectAnswer() {
    answerE1s.forEach((answerE1) => {
        answerE1.checked = false;
    });
}

submit.addEventListener('click', () => {
    const answer = getSelected();

    if(answer){
        if(answer === quizData[currentQuiz].correct){
            score++;
        }
        currentQuiz++;

        if(currentQuiz < quizData.length){
            loadQuiz();
        }else{
            quiz.innerHTML = `
                <h2>You answered correctly at ${score}/${quizData.length} questions.</h2>

                <button onclick="location.reload()">Reload</button>
            `;
        }
    }
});


