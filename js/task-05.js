const nameInput = document.querySelector('#name-input')
const nameOutput = document.querySelector('#name-output')


nameInput.addEventListener('input', changeNameOutput)

function changeNameOutput(event) {
    nameOutput.textContent = event.currentTarget.value
}
