const button = document.querySelectorAll('button');
const drop = document.querySelectorAll('.nav-top')

button.forEach(el => {
  el.addEventListener('click', (e) => {
    drop.forEach(el => { el.classList.remove(('nav-top--active')) })
    e.currentTarget.closest('li').querySelector('.nav-top').classList.toggle('nav-top--active');
  });
});

document.addEventListener('click', (e) => {
  console.log(e.target)
  if (!e.target.classList.contains('nav-top') && !e.target.classList.contains('drop-btn')) {
    drop.forEach(el => { el.classList.remove(('nav-top--active')) })
  }
});


/* swiper=================================================*/

var mySwiper = new Swiper('.swiper-1', {
  speed: 300,
  watchSlidesProgress: true,
  slidesPerView: 3,
  slidesPerColumn: 2,
  slidesPerColumnFill: "row",
  slidesPerGroup: 6,
  spaceBetween: 50,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
  navigation: {
    nextEl: '.swiper-button-prev',
    prevEl: '.swiper-button-next',
  }
});


/*select========================*/

const element = document.querySelector('#selectCostom');
const choices = new Choices(element, {
  searchEnabled: false
});



