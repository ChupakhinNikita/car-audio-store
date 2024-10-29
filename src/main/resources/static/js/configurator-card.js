/*
const searchInput = document.getElementById('search-value');
const searchDefaultValue = searchInput.getAttribute('value');

searchInput.addEventListener('focus', () => {
    if(searchInput.value === searchDefaultValue) {
        searchInput.value = '';
    }
});

searchInput.addEventListener('blur', () => {
    if (searchInput.value === '') {
        searchInput.value = searchDefaultValue;
    }
});


const choiceButtons = document.querySelectorAll('.choice-btn');

choiceButtons.forEach(button => {
    button.addEventListener('click', () => {
        wrapper.insertAdjacentHTML('beforeend', content1);
        if (button.classList.contains('choosen')) {
            button.classList.remove('choosen');
        } else {
            button.classList.add('choosen');
        }
    });
});

// Получаем элемент wrapper
const wrapper = document.querySelector('.wrapper');

// Получаем все ссылки
const sideTabs = document.querySelectorAll('.choice-btn');

const speakersWrapper = document.getElementById('speakers-wrapper')
const addBtn1 = document.getElementById('add-btn-1')

addBtn1.addEventListener('click', () => {
    speakersWrapper.style.display = 'flex';
})

const closeBtn = document.getElementById('close-btn')

closeBtn.addEventListener('click', () => {
    speakersWrapper.style.display = 'none'
})

const addSpeakersBtn = document.getElementById('add-speakers-btn')
addSpeakersBtn.addEventListener('click', () => {
    speakersWrapper.style.display = 'none'
})*/

const searchInput = document.getElementById('search-value');
const searchDefaultValue = searchInput.getAttribute('value');

searchInput.addEventListener('focus', () => {
    if(searchInput.value === searchDefaultValue) {
        searchInput.value = '';
    }
});

searchInput.addEventListener('blur', () => {
    if (searchInput.value === '') {
        searchInput.value = searchDefaultValue;
    }
});


const choiceButtons = document.querySelectorAll('.choice-btn');

choiceButtons.forEach(button => {
    button.addEventListener('click', () => {
        wrapper.insertAdjacentHTML('beforeend', content1);
        if (button.classList.contains('choosen')) {
            button.classList.remove('choosen');
        } else {
            button.classList.add('choosen');
        }
    });
});

// Получаем элемент wrapper
const wrapper = document.querySelector('.wrapper');

// Получаем все ссылки
const sideTabs = document.querySelectorAll('.choice-btn');

const speakersWrapper = document.getElementById('speakers-wrapper')
const addBtn1 = document.getElementById('add-btn-1')
const addBtn2 = document.getElementById('add-btn-2')
const addBtn3 = document.getElementById('add-btn-3')
const closeBtn = document.getElementById('close-btn')

addBtn1.addEventListener('click', () => {
    speakersWrapper.style.display = 'flex';
})

addBtn2.addEventListener('click', () => {
    speakersWrapper.style.display = 'flex';
})

addBtn3.addEventListener('click', () => {
    speakersWrapper.style.display = 'flex';
})

closeBtn.addEventListener('click', () => {
    speakersWrapper.style.display = 'none'
})

const buildPrice = document.querySelector('.build-price')

document.addEventListener("DOMContentLoaded", function() {
    // Получаем элемент .build-price
    const buildPrice = document.querySelector('.build-price');

    // Изначальное значение цены
    let totalPrice = 0;

    // Найти все кнопки с классом choice-btn
    const choiceButtons = document.querySelectorAll('.choice-btn');

    // Обработчик события click для каждой кнопки
    choiceButtons.forEach((button, index) => {
        button.addEventListener('click', function() {
            // Увеличиваем цену на 1000₽ при каждом нажатии кнопки
            totalPrice += 1490;

            // Устанавливаем новое значение цены
            buildPrice.textContent =    `${totalPrice}₽`;

            // Устанавливаем значение кнопки
            //button.value = `Динамик #${index + 1}`;
            button.value = document.getElementById("speaker").textContent;
        });
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const addSpeakerButtons = document.querySelectorAll('.speaker__add-btn');

    addSpeakerButtons.forEach(addBtn => {
        addBtn.addEventListener('click', function() {
            const speakersWrapper = document.getElementById('speakers-wrapper');
            speakersWrapper.style.display = 'none';
        });
    });
});
