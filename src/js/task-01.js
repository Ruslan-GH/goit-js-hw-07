// -----
const categories = document.querySelector('#categories');
const amountCategories = categories.children.length;

const countCategories = (categories) =>
{ console.log(`В списке ${amountCategories} категории`) }

// -----
const nameAmountElemCategory = document.querySelectorAll('li.item h2');
const showNameAmountElemCategory = nameAmountElemCategory.forEach(elem =>
    console.log(`Категория: ${elem.textContent},
    Количество элементов: ${elem.nextElementSibling.children.length}`),
console.log(`В списке ${amountCategories} категории`))


const list = document.querySelector('#categories');
const items = list.querySelectorAll('.item');
console.log(`В списке ${items.length} категории:`);
items.forEach(node => {
const h2 = node.querySelector('h2');
const nodeItems = node.querySelectorAll('li');
console.log(` - категория: ${h2.textContent} (количество элементов: ${nodeItems.length})`);
});

