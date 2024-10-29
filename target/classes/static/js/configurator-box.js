const searchInput = document.getElementById('search-value')
const searchDefaultValue = searchInput.getAttribute('value')

searchInput.addEventListener('focus', () => {
    if(searchInput.value === searchDefaultValue) {
        searchInput.value = ''
    }
})

searchInput.addEventListener('blur', () => {
    if (searchInput.value === '') {
        searchInput.value = searchDefaultValue;
    }
})


const choiceWrappers = document.querySelectorAll('.choice-wrapper')
// Для каждого "choice-wrapper" добавляем обработчик события клика
choiceWrappers.forEach(wrapper => {
    wrapper.addEventListener('click', (event) => {
        // Проверяем, был ли клик на кнопке
        if (event.target.classList.contains('choice-btn')) {
            // Удаляем класс "choosen" у всех кнопок в текущем "choice-wrapper"
            wrapper.querySelectorAll('.choice-btn').forEach(btn => {
                btn.classList.remove('choosen')
            })
            // Добавляем класс "choosen" к нажатой кнопке
            event.target.classList.add('choosen')
        }
    })
})

const choiceBtns = document.querySelectorAll('.choice-btn');
const boxPrice = document.querySelector('.build-price');
const subwooferImg = document.getElementById('.subwooferImg');


document.addEventListener('DOMContentLoaded', function() {
    const choiceBtns = document.querySelectorAll('.choice-btn');
    const boxPrice = document.querySelector('.build-price');
    const subwooferImg = document.getElementById('subwooferImg'); // Добавляем эту строку

    // Начальная цена
    let totalPrice = 0;

    // Обработчик событий для кнопок выбора
    choiceBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            if (btn.parentElement.classList.contains('choice-wrapper')) {
                const selectedOption = btn.value;
                const optionName = btn.parentElement.previousElementSibling.textContent.trim();

                let price = 0;
                switch (optionName) {
                    case 'Кол-во сабвуферов':
                        switch (selectedOption) {
                            case '1':
                                price = 9990;
                                subwooferImg.src = '/img/sub.png';
                                break;
                            case '2':
                                price = 12990;
                                subwooferImg.src = '/img/sub_2.png';
                                break;
                            case '3':
                                price = 14990;
                                subwooferImg.src = '/img/sub_3.png';
                                break;
                        }
                        break;
                    case 'Материал короба':
                        switch (selectedOption) {
                            case 'ДСП':
                                price = 500;
                                break;
                            case 'Фанера':
                                price = 1000;
                                break;
                        }
                        break;
                    case 'Размер динамиков':
                        switch (selectedOption) {
                            case '10':
                                price = 1500;
                                break;
                            case '11':
                                price = 2000;
                                break;
                            case '12':
                                price = 2500;
                                break;
                        }
                        break;
                    case 'Отделка короба':
                        switch (selectedOption) {
                            case 'Карпет':
                                price = 500;
                                break;
                            case 'Клей':
                                price = 700;
                                break;
                        }
                        break;
                }
                boxPrice.innerHTML = 0;
                totalPrice = parseFloat(boxPrice.textContent) + price;
                boxPrice.innerHTML = totalPrice + '₽';
            }
        });
    });
});