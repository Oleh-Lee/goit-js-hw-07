//Напиши скрипт который, при наборе текста в инпуте 
//input#name-input (событие input), подставляет его текущее 
//значение в span#name-output. Если инпут пустой, в спане должна
//отображаться строка 'незнакомец'.
let stranger = document.querySelector('#name-output').textContent
const userInput = document.querySelector('#name-input')
const userOutput = document.querySelector('#name-output')

function changeValue(){
   if(userInput.value === ""){
    userOutput.innerHTML = stranger
   }else if(userInput.value !== ""){
       userOutput.innerHTML = userInput.value
   }
}
userInput.addEventListener('input', changeValue)
