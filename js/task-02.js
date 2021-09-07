const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ingredientsElUl = document.querySelector('#ingredients')

const ingredientsEl = ingredients.map(ingredient => {
  const liEl = document.createElement('li');
  liEl.textContent = ingredient;
  return liEl
})

console.log(ingredientsEl);

ingredientsElUl.append(...ingredientsEl)