var accordion = (function (element) {
    var _getItem = function (elements, className) { // функция для получения элемента с указанным классом
      var element = undefined;
      elements.forEach(function (item) {
        if (item.classList.contains(className)) {
          element = item;
        }
      });
      return element;
    };
    return function () {
      var _mainElement = {}, // .accordion
        _items = {}, // .accordion-item
        _contents = {}; // .accordion-item-content
      var _actionClick = function (e) {
        if (!e.target.classList.contains('accordion-item-header')) { // прекращаем выполнение функции если кликнули не по заголовку
          return;
        }
        e.preventDefault(); // отменям стандартное действие
        // получаем необходимые данные
        var header = e.target,
          item = header.parentElement,
          itemActive = _getItem(_items, 'show');
        if (itemActive === undefined) { // добавляем класс show к элементу (в зависимости от выбранного заголовка)
          item.classList.add('show');
        } else {
          // удаляем класс show у ткущего элемента
          itemActive.classList.remove('show');
          // если следующая вкладка не равна активной
          if (itemActive !== item) {
            // добавляем класс show к элементу (в зависимости от выбранного заголовка)
            item.classList.add('show');
          }
        }
      },
      _setupListeners = function () {
        // добавим к элементу аккордиона обработчик события click
        _mainElement.addEventListener('click', _actionClick);
      };
  
      return {
        init: function (element) {
          _mainElement = (typeof element === 'string' ? document.querySelector(element) : element);
          _items = _mainElement.querySelectorAll('.accordion-item');
          _setupListeners();
        }
      }
    }
  })();

let accordion1 = accordion();
    accordion1.init('#accordion');

/* SWIPER JS */

const mySwiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'vertical',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
  effect: 'slide',
  speed: 900,
  breakpoints: {
    320: {
      slidesPerView: 1, 
      spaceBetween: 20,
    },
    991: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    },
});

const swiperPrev = document.getElementById('prev');
const swiperNext = document.getElementById('next');

console.log(swiperNext);
console.log(swiperPrev);

swiperPrev.addEventListener('click', () => {
  mySwiper.slidePrev();
});
swiperNext.addEventListener('click', () => {
  mySwiper.slideNext();
});

/* OurTeam Script */

function seeContent(id) {
  // берем номер блока ложим в переменную
  var nomer_bloka = id;
  // все блоки что с классом blok_hide тупо прячем
  var myClasses = document.querySelectorAll('.blok_hide'),
    i = 0,
    l = myClasses.length;
  for (i; i < l; i++) {
    myClasses[i].style.display = "none";
  }	
  // теперь ищем нужный блок по указанному ID и смотрим если он скрыт - показать		
  var t = document.getElementById(nomer_bloka).style.display;
  if (t == 'none')
  {
    document.getElementById(nomer_bloka).style.display = 'block';
  }
  else
  {
    document.getElementById(nomer_bloka).style.display = 'none';
  }
    }
/* seeContent(); */
