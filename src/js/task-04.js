const Value = document.querySelector('#value')
const decrementBtn = document.querySelector('[data-action="decrement"]')
const incrementBtn = document.querySelector('[data-action="increment"]')

let counterValue = 0

decrementBtn.addEventListener('click', event => {
    Value.textContent = counterValue -= 1
})

incrementBtn.addEventListener('click', event => {
    Value.textContent = counterValue += 1
})

