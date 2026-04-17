let dramas;
let currentDrama;

fetch("drama.json")
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    dramas = data;
  });

function getDrama() {
  let random = Math.floor(Math.random() * dramas.length);
  currentDrama = dramas[random];

 let answer = document.querySelector(".answer");

answer.style.opacity = 0;

setTimeout(() => {
  answer.textContent = currentDrama.drama;
  answer.style.opacity = 1;
}, 100);
  document.getElementById("solution").innerHTML = "";
}

function getSolution() {
  if (currentDrama) {
    document.getElementById("solution").innerHTML = currentDrama.solution;
  }
}