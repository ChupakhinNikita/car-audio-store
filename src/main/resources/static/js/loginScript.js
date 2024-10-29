const numberInput = document.getElementById('number');
const numberDefaultValue = numberInput.getAttribute('value');

numberInput.addEventListener('focus', () => {
    if (numberInput.value === numberDefaultValue) {
        numberInput.value = '';
    }
});

numberInput.addEventListener('blur', () => {
    if (numberInput.value === '') {
        numberInput.value = numberDefaultValue;
    }
});


const passwordInput = document.getElementById('password');
const passwordDefaultValue = passwordInput.getAttribute('value');

passwordInput.addEventListener('focus', () => {
    if(passwordInput.value === passwordDefaultValue) {
        passwordInput.value = '';
    }
});

passwordInput.addEventListener('blur', () => {
    if (passwordInput.value === '') {
        passwordInput.value = passwordDefaultValue;
    }
});
