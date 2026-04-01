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

  document.querySelector(".answer").innerHTML = currentDrama.drama;
  document.getElementById("solution").innerHTML = "";
}

function getSolution() {
  if (currentDrama) {
    document.getElementById("solution").innerHTML = currentDrama.solution;
  }
}