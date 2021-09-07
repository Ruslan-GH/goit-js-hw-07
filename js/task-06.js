const input = document.querySelector('#validation-input')

const dataLength = Number(input.getAttribute('data-length'));

input.addEventListener('blur', inputBlur)

function inputBlur() {
    if (dataLength === input.value.length)
    {  input.classList = 'valid' }
    else { input.classList = 'invalid' }
}

