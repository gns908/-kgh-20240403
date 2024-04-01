// 테스트 js
const test = document.querySelector('.test');

function handleResize() {
  test.textContent = document.documentElement.clientWidth;
}

window.addEventListener('resize', handleResize);

const main = document.querySelector('.main');
const Arabica_btn = document.querySelector('.Arabica_btn');
const Robusta_btn = document.querySelector('.Robusta_btn');
const Liberica_btn = document.querySelector('.Liberica_btn');

Arabica_btn.addEventListener('click', (e) => {
  main.classList.add('Arabica_on');
  main.classList.remove('Robusta_on');
  main.classList.remove('Liberica_on');
});

Robusta_btn.addEventListener('click', (e) => {
  main.classList.add('Robusta_on');
  main.classList.remove('Arabica_on');
  main.classList.remove('Liberica_on');
});

Liberica_btn.addEventListener('click', (e) => {
  main.classList.add('Liberica_on');
  main.classList.remove('Arabica_on');
  main.classList.remove('Robusta_on');
});

var Arabica_Swiper = new Swiper('.Arabica_Swiper', {
  slidesPerView: 4,
  spaceBetween: 30,
  pagination: {
    el: '.Arabica_pagination',
    clickable: true,
  },
});

var Arabica_Swiper = new Swiper('.Robusta_Swiper', {
  slidesPerView: 4,
  spaceBetween: 30,
  pagination: {
    el: '.Robusta_pagination',
    clickable: true,
  },
});

var Arabica_Swiper = new Swiper('.Liberica_Swiper', {
  slidesPerView: 4,
  spaceBetween: 30,
  pagination: {
    el: '.Liberica_pagination',
    clickable: true,
  },
});

var Testimonial_Swiper = new Swiper('.Testimonial_Swiper', {
  slidesPerView: 3,
  spaceBetween: 30,
  pagination: {
    el: '.Testimonial_pagination',
    clickable: true,
  },
});
