// 테스트 js
const test = document.querySelector('.test');

// test.textContent = document.documentElement.clientWidth;

window.addEventListener('resize', handleResize);

// 버튼

const btns = document.querySelector('.btns');

const btnItems = document.querySelectorAll('.btns > button');
const swipers = document.querySelectorAll('.swipers > div');

const newNode = document.createElement('span');

newNode.textContent = '';
newNode.style.position = 'absolute';
newNode.style.backgroundColor = 'white';
newNode.style.width = '30%';
newNode.style.height = '80%';
newNode.style.top = '10%';
newNode.style.borderRadius = '2rem';
newNode.style.transition = '0.3s';
newNode.style.zIndex = '0';

newNode.style.left = '2%';

btns.appendChild(newNode);

btnItems.forEach((btnItem, idx) => {
  btnItem.addEventListener('click', () => {
    swipers.forEach((swiper) => {
      swiper.classList.remove('On');
    });
    swipers[idx].classList.add('On');
    switch (idx) {
      case 0:
        btns.lastElementChild.style.left = '2%';
        break;
      case 1:
        btns.lastElementChild.style.left = '35%';
        break;
      case 2:
        btns.lastElementChild.style.left = '68%';
        break;
    }
  });
});

var Arabica_Swiper = new Swiper('.Arabica_Swiper', {
  slidesPerView: 4,
  spaceBetween: 30,
  pagination: {
    el: '.Arabica_pagination',
    clickable: true,
  },
});

var Robusta_Swiper = new Swiper('.Robusta_Swiper', {
  slidesPerView: 4,
  spaceBetween: 30,
  pagination: {
    el: '.Robusta_pagination',
    clickable: true,
  },
});

var Liberica_Swiper = new Swiper('.Liberica_Swiper', {
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

const CoffeeSwipers = [Arabica_Swiper, Robusta_Swiper, Liberica_Swiper];

const sec6ul = document.querySelector('.sec6 ul');

function handleResize() {
  test.textContent = document.documentElement.clientWidth;

  if (document.documentElement.clientWidth < 320) {
    CoffeeSwipers.forEach((Swiper) => {
      Swiper.params.slidesPerView = 1;
      Swiper.params.spaceBetween = 8;
      Swiper.update();
      Testimonial_Swiper.params.slidesPerView = 1;
      Testimonial_Swiper.params.spaceBetween = 10;
      Testimonial_Swiper.update();
      sec6ul.style.flexDirection = 'column';
    });
  } else if (document.documentElement.clientWidth < 640) {
    CoffeeSwipers.forEach((Swiper) => {
      Swiper.params.slidesPerView = 2;
      Swiper.params.spaceBetween = 16;
      Swiper.update();
      Testimonial_Swiper.params.slidesPerView = 2;
      Testimonial_Swiper.params.spaceBetween = 20;
      Testimonial_Swiper.update();
      sec6ul.style.flexDirection = 'column';
    });
  } else if (document.documentElement.clientWidth < 960) {
    CoffeeSwipers.forEach((Swiper) => {
      Swiper.params.slidesPerView = 3;
      Swiper.params.spaceBetween = 24;
      Swiper.update();
      Testimonial_Swiper.params.slidesPerView = 3;
      Testimonial_Swiper.params.spaceBetween = 30;
      Testimonial_Swiper.update();
      sec6ul.style.flexDirection = 'row';
    });
  } else if (document.documentElement.clientWidth < 1280) {
    CoffeeSwipers.forEach((Swiper) => {
      Swiper.params.slidesPerView = 4;
      Swiper.params.spaceBetween = 32;
      Swiper.update();
      Testimonial_Swiper.params.slidesPerView = 3;
      Testimonial_Swiper.params.spaceBetween = 30;
      Testimonial_Swiper.update();
      sec6ul.style.flexDirection = 'row';
    });
  }
}

handleResize();

const SeachBtn = document.querySelector('.SeachBtn');
const SeachScreen = document.querySelector('.SeachScreen');
const SeachInput = document.querySelector('.SeachScreen input');

SeachBtn.addEventListener('click', (e) => {
  e.preventDefault();
  SeachScreen.classList.add('On');
  setTimeout(() => {
    SeachInput.focus();
  }, 300);
});

SeachScreen.addEventListener('click', (e) => {
  if (e.target === SeachScreen) {
    SeachScreen.classList.remove('On');
  }
});
