const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientElem = ingredients.map(
  ingredient => {
    const itemElem = document.createElement('li');
    itemElem.classList.add('item');
    itemElem.textContent = ingredient;
    return itemElem;
  }
);

const listElem = document.querySelector('#ingredients');
console.log(listElem);

listElem.append(...ingredientElem);