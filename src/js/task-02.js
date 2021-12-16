const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

  for (const ingredient of ingredients) {
  const itemElem = document.createElement('li')
  itemElem.classList.add('item');
  itemElem.textContent = ingredient;
  console.log(itemElem);
  }
