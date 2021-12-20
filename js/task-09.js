function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const buttonElem = document.querySelector('.change-color');
const colorElem = document.querySelector('.color');
buttonElem.addEventListener('click', function () {
  const changeColor = document.body.style.backgroundColor = getRandomHexColor();
  colorElem.textContent = changeColor;
})

// const buttonElem = document.querySelector('.change-color');
// const colorElem = document.querySelector('.color');
// buttonElem.addEventListener('click', function () {
//   document.body.style.backgroundColor = getRandomHexColor();
//   colorElem.textContent = document.body.style.backgroundColor;
// })