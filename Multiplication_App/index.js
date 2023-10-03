const number1 = Math.ceil(Math.random()*10);
const number2 = Math.ceil(Math.random()*10);

const input = document.getElementById("input");

const form = document.getElementById("form");

const score = document.getElementById("score");

var scor = JSON.parse(localStorage.getItem("score"));

if(!scor){
    scor = 0;
}

score.innerText = `Score : ${scor}`;

const question = document.getElementById("question");
question.innerText = `What is ${number1} multiply by ${number2} ?`

const correctAns = number1 * number2;

form.addEventListener("submit", function(){
    const userAns = +input.value;
    if(userAns === correctAns){
        scor++
        updateLocalStorage();
    }else{
        scor--
        updateLocalStorage();
    }

});

function updateLocalStorage(){
    localStorage.setItem("score", JSON.stringify(scor));
}

