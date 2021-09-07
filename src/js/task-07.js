const inputSize = document.querySelector('#font-size-control')
const text = document.querySelector('#text')

console.log(text.getAttribute.fontSize)
inputSize.addEventListener('input', textChangeInput)

function textChangeInput() {
    text.style.fontSize = `${inputSize.value}px`
}
