const textInput = document.querySelector('#validation-input');

textInput.addEventListener('blur', event => {
    if(event.currentTarget.value.length >= 6){
        textInput.classList.remove('invalid');
        textInput.classList.add('valid');
    } else {
        textInput.classList.remove('valid');
        textInput.classList.add('invalid');
    }
});