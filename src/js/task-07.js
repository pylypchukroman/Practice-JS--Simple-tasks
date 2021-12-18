const inputeElem = document.querySelector('#font-size-control');
const textElem = document.querySelector('#text');
inputeElem.addEventListener('input', function () {
    textElem.style.fontSize = `${this.value}px`;
})
