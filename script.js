const startBtn = document.querySelector('#startBtn');
const yesBtn = document.querySelector('#yesBtn');
const noBtn = document.querySelector('#noBtn');
const pictureBox = document.querySelector('#pictureBox');
const pictureDiv = document.querySelector('#pictureDiv');
const question = document.querySelector('#question');
const header = document.querySelector('#header');

startBtn.addEventListener("click", login);
console.log(startBtn)
function login() {
    startBtn.style.display = "none";
    yesBtn.style.display = "block";
    noBtn.style.display = "block";
    question.innerHTML = "Fråga 1?";
    pictureBox.setAttribute("src","/paris.jpg");
  };

/* när man kommer in på sidan vill vi se start knappem
rätt och fel knapparna syns ej.
vid starta spelet click så ändras rubriken till frågor
rätt och fel knapparna syns
bilden ändras.
vi vill att det ska finns två arrays som räknar antal rätt och fel svar*/

let currentTask = 0;
let tasks = [
  {
    statement:"Är det här Rom?",
    correctAnswer: false,
    answer:null
  },
  {
    statement:"Fråga 2?",
    correctAnswer: false,
    answer:null
  },
  {
    statement:"Fråga3?",
    description: "Enough said.",
    correctAnswer: true,
    answer:null
  }
]

function selectTask(id){
  if(id < 0 || id >= tasks.length) return; //Invalid ID entered.
  
  currentTask = id;
  
  document.querySelector('#question').innerText = tasks[currentTask].statement   
}

function answer(value){
  tasks[currentTask].answer = value;
  console.log(value, currentTask)
  for(var task in tasks){
    if(tasks[task].answer === null){ /* do nothing*/}        
    else if(tasks[task].answer === tasks[task].correctAnswer)
      document.getElementById("task"+task).style.backgroundColor = "green"   
    else if(tasks[task].answer !== tasks[task].correctAnswer)
      document.getElementById("task"+task).style.backgroundColor = "red"   
  }
  
  if(currentTask < tasks.length-1){
    selectTask(currentTask+1)
  }
  
}

selectTask(0);