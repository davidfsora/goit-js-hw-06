const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

let ingredientsUl = document.getElementById("ingredients");
ingredients.forEach(ingredient => {
  let ingredientAdded = document.createElement("li");
  ingredientAdded.innerText = ingredient;
  ingredientAdded.classList.add('item');
  ingredientsUl.appendChild(ingredientAdded);
});
