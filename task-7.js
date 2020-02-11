const inputFontSize = document.getElementById("font-size-control");
const text = document.getElementById("text");

const changeSize = () => {
  text.style.fontSize = `${inputFontSize.value}px`;
};

inputFontSize.addEventListener("input", changeSize);
