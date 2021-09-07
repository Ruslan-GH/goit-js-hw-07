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




