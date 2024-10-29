// Получаем элемент wrapper
const wrapper = document.querySelector('.wrapper');

// Получаем все ссылки
const sideTabs = document.querySelectorAll('.main__link');

// Добавляем обработчик события клика для каждой ссылки
sideTabs.forEach(tab => {
    tab.addEventListener('click', () => {
        if (tab.innerHTML === 'Динамики') {
            // Вставляем содержимое content1 в конец wrapper
            wrapper.insertAdjacentHTML('beforeend', content1);
            // Запрещаем прокрутку страницы
            document.body.style.overflow = 'hidden';

            // Получаем кнопку закрытия
            const closeButton = document.querySelector('.close-button');
        }
    });
});

// HTML содержимое всплывающего окна
const content1 = `<div class="popup-window">
                    <ul class="main__list">
                        <li class="main__item"><a class="main__link" href="../categories/plug/plug.html">Динамики</a></li>
                        <li class="main__item"><a class="main__link" href="../categories/plug/plug.html">Мультимедиа</a></li>
                        <li class="main__item"><a class="main__link" href="../categories/plug/plug.html">Усилители и процессоры</a></li>
                        <li class="main__item"><a class="main__link" href="../categories/plug/plug.html">Короба и подиумы</a></li>
                        <li class="main__item"><a class="main__link" href="../categories/plug/plug.html">Штатные решения</a></li>
                        <li class="main__item"><a class="main__link" href="../categories/plug/plug.html">Кабеля и комплектующие</a></li>
                        <li class="main__item"><a class="main__link" href="../categories/plug/plug.html">Вибро-шумоизоляция</a></li>
                        <li class="main__item"><a class="main__link" href="../categories/plug/plug.html">Питание</a></li>
                        <li class="main__item"><a class="main__link" href="../categories/plug/plug.html">Приборы и датчики</a></li>
                    </ul>
                </div>`



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


const specOffersCards = document.querySelector('.main__page').querySelector('.cards')

const cardsList = [{
    cardTitle: 'Рамки для магнитол',
    cardNewPrice: 17990,
    cardOldPrice: 20000,
    cardImg: '../img/1.png',
    specOffer: 'spec-bg-2',
    cardRating: '4.8'
},{
    cardTitle: 'Усилители',
    cardNewPrice: 9990,
    cardOldPrice: 14000,
    cardImg: '../img/2.png',
    specOffer: 'spec-bg-3',
    cardRating: '4.7'
},{
    cardTitle: 'Сабвуферы',
    cardNewPrice: 5490,
    cardOldPrice: 8000,
    cardImg: '../img/3.png',
    specOffer: 'spec-bg-2',
    cardRating: '4.9'
},{
    cardTitle: 'Драйверы',
    cardNewPrice: 9990,
    cardOldPrice: 12000,
    cardImg: '../img/4.png',
    specOffer: 'spec-bg-3',
    cardRating: '5.0'
},{
    cardTitle: 'Среднечастотники эстрадные',
    cardNewPrice: 4490,
    cardOldPrice: 7000,
    cardImg: '../img/5.png',
    specOffer: 'spec-bg-4',
    cardRating: '4.6'
},{
    cardTitle: 'Рамки для магнитол',
    cardNewPrice: 17990,
    cardOldPrice: 20000,
    cardImg: '../img/1.png',
    specOffer: 'spec-bg-2',
    cardRating: '4.8'
},{
    cardTitle: 'Усилители',
    cardNewPrice: 9990,
    cardOldPrice: 14000,
    cardImg: '../img/2.png',
    specOffer: 'spec-bg-3',
    cardRating: '4.7'
},{
    cardTitle: 'Сабвуферы',
    cardNewPrice: 5490,
    cardOldPrice: 8000,
    cardImg: '../img/3.png',
    specOffer: 'spec-bg-2',
    cardRating: '4.9'
},{
    cardTitle: 'Драйверы',
    cardNewPrice: 9990,
    cardOldPrice: 12000,
    cardImg: '../img/4.png',
    specOffer: 'spec-bg-3',
    cardRating: '5.0'
}]

function getCards(cardInfoList, elem) {
    elem.innerHTML = ''
    const arr = cardInfoList.map(cardInfo => {
        const tab = `<div class="card">
                  <div class="special-offer ${cardInfo.specOffer}"><span class="offer-text">Акция!</span></div>
                  <img class="card__img" src="${cardInfo.cardImg}" alt="">
                  <div class="card__info">
                      <div class="card__info__left">
                          <span class="card__name">${cardInfo.cardTitle}</span>
                          <div class="card__rating">
                              <img class="card__rating__icon" src="../svg/star.svg" alt="">
                              <span class="card__rating__value">${cardInfo.cardRating}</span>   
                          </div>
                      </div>
                      <div class="card__info__right">                 
                          <span class="card__price-new">${cardInfo.cardNewPrice}₽</span>
                          <s class="card__price-old">${cardInfo.cardOldPrice}₽</s>
                          <span class="card__btn">Купить</span>
                      </div>
                  </div>
              </div>`
        return tab
    })
    elem.insertAdjacentHTML('beforeend', arr.join(''))
}

//getCards(cardsList, specOffersCards)