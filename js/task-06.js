const inputElem = document.querySelector('#validation-input');
const atributElem = inputElem.getAttribute('data-length');

inputElem.addEventListener("blur", () => {

    if (inputElem.value.length == atributElem) {
        inputElem.classList.add('valid');
        inputElem.classList.remove('invalid');
        return;
    }
    inputElem.classList.add('invalid');
    inputElem.classList.remove('valid');

});