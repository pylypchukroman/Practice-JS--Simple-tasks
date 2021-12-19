const inputElem = document.querySelector('#validation-input');
const atributElem = inputElem.getAttribute('data-length');
const totallenght = parseInt(atributElem, 10);

const classes = function (clas1, clas2) {
    inputElem.classList.add(clas1);
    inputElem.classList.remove(clas2);
}

inputElem.addEventListener("blur", () => {

    if (inputElem.value.length === totallenght) {
        classes('valid', 'invalid');
        return;
    }
    classes('invalid', 'valid');

});


// inputElem.addEventListener("blur", () => {

//     if (inputElem.value.length == atributElem) {
//         inputElem.classList.add('valid');
//         inputElem.classList.remove('invalid');
//         return;
//     }
//     inputElem.classList.add('invalid');
//     inputElem.classList.remove('valid');

// });