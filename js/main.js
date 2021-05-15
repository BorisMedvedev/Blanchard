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
let swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  slidesPerColumn: 2,
  spaceBetween: 50,
  slidesPerColumnFill: 'row',
  // loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

// const mySwiper = new Swiper('.swiper-1', {
//   watchSlidesProgress: true,
//   slidesPerView: 3,
//   slidesPerColumn: 2,
//   slidesPerGroup: 6,
//   spaceBetween: 50,
//   slidesPerColumnFill: 'row',
//   direction: 'horizontal',
//   loop: true,
//   speed: 500,

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



