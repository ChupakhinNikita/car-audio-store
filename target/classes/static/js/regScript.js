const numberInput = document.getElementById('number')
const numberDefaultValue = numberInput.getAttribute('value')


numberInput.addEventListener('focus', () => {
    if (numberInput.value === numberDefaultValue) {
        numberInput.value = ''
    }
})

numberInput.addEventListener('blur', () => {
    if (numberInput.value === '') {
        numberInput.value = numberDefaultValue
    }
})


const emailInput = document.getElementById('email')
const emailDefaultValue = emailInput.getAttribute('value')


emailInput.addEventListener('focus', () => {
    if (emailInput.value === emailDefaultValue) {
        emailInput.value = ''
    }
})

emailInput.addEventListener('blur', () => {
    if (emailInput.value === '') {
        emailInput.value = emailDefaultValue
    }
})


const passwordInput = document.getElementById('password')
const passwordDefaultValue = passwordInput.getAttribute('value')

passwordInput.addEventListener('focus', () => {
    if (passwordInput.value === passwordDefaultValue) {
        passwordInput.value = ''
    }
})

passwordInput.addEventListener('blur', () => {
    if (passwordInput.value === '') {
        passwordInput.value = passwordDefaultValue
    }
})

const regBtn = document.getElementById('regBtn')
const notify = document.querySelectorAll('.reg__section__left__notification')

regBtn.addEventListener('click', () => {
    let missingFields = [];

    if (numberInput.value.trim() === numberDefaultValue.trim()) {
        missingFields.push('Номер телефона');
    }

    if (emailInput.value.trim() === emailDefaultValue.trim()) {
        missingFields.push('Почта');
    }

    if (passwordInput.value.trim() === passwordDefaultValue.trim()) {
        missingFields.push('Пароль');
    }

    if (missingFields.length > 0) {
        notify.forEach((notification, index) => {
            if (index < missingFields.length) {
                notification.textContent = `Для регистрации необходимо заполнить поле: ${missingFields[index]}`;
                notification.classList.remove('hidden');
            } else {
                notification.classList.add('hidden');
            }
        });
    } else {
        // Если все поля заполнены, продолжить с регистрацией
        console.log('Регистрация прошла успешно!');
    }
});