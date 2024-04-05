let SeachModal = false;
let hamModal = false;

setTimeout(() => {}, '2000');
const OnScrollWidth = document.body.getBoundingClientRect().width;
document.body.style.overflow = 'hidden';
setTimeout(() => {}, '2000');
const OffScrollWidth = document.body.getBoundingClientRect().width;
document.body.style.overflowY = 'scroll';
document.body.style.overflowX = 'hidden';
const ScrollWidth = OffScrollWidth - OnScrollWidth;
console.log(OffScrollWidth);
console.log(OnScrollWidth);
console.log(ScrollWidth);

// 테스트 js
const test = document.querySelector('.test');

const btns = document.querySelector('.btns');
const btnItems = document.querySelectorAll('.btns > button');
const swipers = document.querySelectorAll('.swipers > div');

const newNode = document.createElement('span');
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
  slidesPerView: 1,
  spaceBetween: 8,
  pagination: {
    el: '.Arabica_pagination',
    clickable: true,
  },
  breakpoints: {
    320: {
      slidesPerView: 2,
      spaceBetween: 16,
    },
    640: {
      slidesPerView: 3,
      spaceBetween: 24,
    },
    960: {
      slidesPerView: 4,
      spaceBetween: 32,
    },
  },
});

var Robusta_Swiper = new Swiper('.Robusta_Swiper', {
  slidesPerView: 1,
  spaceBetween: 8,
  pagination: {
    el: '.Robusta_pagination',
    clickable: true,
  },
  breakpoints: {
    320: {
      slidesPerView: 2,
      spaceBetween: 16,
    },
    640: {
      slidesPerView: 3,
      spaceBetween: 24,
    },
    960: {
      slidesPerView: 4,
      spaceBetween: 32,
    },
  },
});

var Liberica_Swiper = new Swiper('.Liberica_Swiper', {
  slidesPerView: 1,
  spaceBetween: 8,
  pagination: {
    el: '.Liberica_pagination',
    clickable: true,
  },
  breakpoints: {
    320: {
      slidesPerView: 2,
      spaceBetween: 16,
    },
    640: {
      slidesPerView: 3,
      spaceBetween: 24,
    },
    960: {
      slidesPerView: 4,
      spaceBetween: 32,
    },
  },
});

var Testimonial_Swiper = new Swiper('.Testimonial_Swiper', {
  slidesPerView: 1,
  spaceBetween: 10,
  pagination: {
    el: '.Testimonial_pagination',
    clickable: true,
  },
  breakpoints: {
    600: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
});

function handleResize() {
  test.textContent = document.documentElement.clientWidth;
}

handleResize();

window.addEventListener('resize', handleResize);

const SeachBtn = document.querySelector('.SeachBtn');
const SeachScreen = document.querySelector('.SeachScreen');
const SeachInput = document.querySelector('.SeachScreen input');

SeachBtn.addEventListener('click', (e) => {
  SeachModal = true;
  e.preventDefault();
  SeachScreen.classList.add('On');
  setTimeout(() => {
    SeachInput.focus();
  }, 300);
  ScrollOff();
});

SeachScreen.addEventListener('click', (e) => {
  SeachModal = false;
  if (e.target === SeachScreen) {
    SeachScreen.classList.remove('On');
  }
  ScrollOn();
});

const head = document.querySelector('.head');

const ham = document.createElement('a');

head.appendChild(ham);

ham.appendChild(document.createElement('img'));

const back = document.createElement('div');

head.prepend(back);

ham.addEventListener('click', () => {
  hamModal = true;
  head.firstElementChild.style.visibility = 'visible';
  head.firstElementChild.style.opacity = '1';
  head.querySelector('.inner').style.visibility = 'visible';
  head.querySelector('.inner').style.opacity = '1';
  ham.style.visibility = 'hidden';
  ham.style.opacity = '0';
  ScrollOff();
});

back.addEventListener('click', () => {
  backF();
});

function backF() {
  hamModal = false;
  head.firstElementChild.style.visibility = 'hidden';
  head.firstElementChild.style.opacity = '0';
  head.querySelector('.inner').style.visibility = 'hidden';
  head.querySelector('.inner').style.opacity = '0';
  ham.style.visibility = 'visible';
  ham.style.opacity = '1';
  ScrollOn();
}

let mql = window.matchMedia('(max-width: 1044px)');

function screenTest(e) {
  if (e.matches) {
    // setTimeout(function () {
    //   document.querySelector('.head .inner').classList.add('On');
    // }, '3500');
    // console.log('화면 너비가 1044px 이하입니다.');
  } else {
    backF();
    // console.log('화면 너비가 1044px 초과입니다.');
  }
}

mql.addEventListener('change', screenTest);

function ScrollOff() {
  document.body.style.overflow = 'hidden';
  document.body.style.marginRight = `${ScrollWidth}px`;
}
function ScrollOn() {
  if (SeachModal === false && hamModal === false) {
    document.body.style.overflowY = 'scroll';
    document.body.style.overflowX = 'hidden';
    document.body.style.marginRight = '0';
  }
}

function ScrollStop() {
  window.addEventListener(
    'scroll',
    function (e) {
      console.log('스크롤1');
      e.preventDefault();
      e.stopPropagation();
    },
    { passive: false }
  );

  document.body.addEventListener(
    'wheel',
    function (e) {
      console.log('굴림');
      e.preventDefault();
      e.stopPropagation();
    },
    { passive: false }
  );

  document.body.addEventListener(
    'touchmove',
    function (e) {
      console.log('터치');
      e.preventDefault();
      e.stopPropagation();
    },
    { passive: false }
  );
}
