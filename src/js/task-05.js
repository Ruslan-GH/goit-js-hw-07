const nameInput = document.querySelector('#name-input')
const nameOutput = document.querySelector('#name-output')
const nameInputError = document.querySelector('#name-input + span')


nameInput.addEventListener('input', changeNameOutput)

function changeNameOutput(event) {
    nameOutput.textContent = event.currentTarget.value
}