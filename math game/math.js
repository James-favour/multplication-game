const num1 = Math.ceil(Math.random() * 10);
const num2 = Math.ceil(Math.random() * 10);
const questionEl = document.getElementById("question");
questionEl.innerHTML = `${num1} multiply by ${num2}?`

const correctAns = num1 * num2;
const inputEl = document.getElementById("input");

const formEl = document.getElementById("form");
formEl.addEventListener("submit", ()=>{
    const userAns = +inputEl.value;
    if (userAns === correctAns){
        score++;
        console.log(score);
    } else {
        score--;
        console.log(score);
    }
    updateLocalStorage();
});

if (!score) {
    score = 0;
}

function updateLocalStorage() {
    localStorage.setItem("score", JSON.stringify(score))
};

score = JSON.parse(localStorage.getItem("score"));

const scoreEl = document.getElementById("score");
scoreEl.innerText = `score: ${score}`;
