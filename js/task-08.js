// const input = document.querySelector('input')
// const renderBtn = document.querySelector('[data-action="render"]')
// const destroyBtn = document.querySelector('[data-action="destroy"]')
// const boxes = document.querySelector('#boxes')

// renderBtn.addEventListener('click', justCreateBoxes)
// destroyBtn.addEventListener('click', createBoxes)

// function justCreateBoxes() {
//     const box = document.createElement('div');
//     box.style.backgroundColor = 'tomato';
//     box.style.width = '30px';
//     box.style.height = '30px';
//     box.style.border = '2px solid green'
//     boxes.appendChild(box);
// }

// function createBoxes() {
//     let amount = input.value;
//     let width = '30px';
//     let height = '30px';
//     const container = [];
//     for (let i = 0; i < amount; i += 1) {
//         const box = document.createElement('div');
//         box.style.backgroundColor = 'tomato';
//         box.style.width = `${width}px`;
//         box.style.height = `${height}px`;
//         box.style.border = '2px solid green';
//         width += 10;
//         height += 10;
//         container.push(box)
//         boxes.appendChild(box);
//      }
// }

const inputRef = document.querySelector("div#controls input");
const renderBtnRef = document.querySelector('button[data-action="render"]');
const destroyBtnRef = document.querySelector('button[data-action="destroy"]');
const divBoxesRef = document.querySelector("div#boxes");
function createBoxes(amount) {
  const boxesArr = [];
  let currentSize = 30;
  for (let i = 0; i < amount; i += 1) {
    boxesArr[i] = document.createElement("div");
    boxesArr[i].style.backgroundColor =
      "#" + Math.random().toString(16).slice(2, 8);
    boxesArr[i].style.width = `${currentSize}px`;
    boxesArr[i].style.height = `${currentSize}px`;
    currentSize += 10;
  }
  divBoxesRef.append(...boxesArr);
}
function destroyBoxes() {
  divBoxesRef.innerHTML = "";
}
renderBtnRef.addEventListener("click", () => createBoxes(inputRef.value));
destroyBtnRef.addEventListener("click", destroyBoxes);