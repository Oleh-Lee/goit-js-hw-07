let stranger = document.querySelector("#name-output").textContent;
const userInput = document.querySelector("#name-input");
const userOutput = document.querySelector("#name-output");

function changeValue() {
  if (userInput.value === "") {
    userOutput.innerHTML = stranger;
  } else if (userInput.value !== "") {
    userOutput.innerHTML = userInput.value;
  }
}
userInput.addEventListener("input", changeValue);
