const inputeElem = document.querySelector('#font-size-control');
const textElem = document.querySelector('#text');
// const rangeElem = inputeElem.getAttribute('range');
// console.log(inputeElem.value);
// console.log(rangeElem.value);
inputeElem.addEventListener('change', function () {
    console.log(this.value);
    textElem.style.fontSize = `${this.value}px`;
})
