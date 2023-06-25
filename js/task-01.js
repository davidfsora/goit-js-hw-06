let categoriesUl = document.querySelector('#categories');
let itemLiList = categoriesUl.querySelectorAll('.item');
console.log('Number of categories:', itemLiList.length);

for (let i = 0; i < itemLiList.length; i++) {
  let itemLi = itemLiList[i];
  let innerUl = itemLi.querySelector('ul');
  let itemLiElements = innerUl.querySelectorAll('li');
  let numberOfitemLiElements = itemLiElements.length;
  let h2Elements = itemLi.querySelector('h2');
  let h2ElementsText = h2Elements.textContent;

  console.log('Category:', h2ElementsText);
  console.log('Elements:', numberOfitemLiElements);
}
