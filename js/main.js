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
var swiper = new Swiper(".myswiper", {
  slidesPerView: 3,
  slidesPerColumn: 2,
  spaceBetween: 50,
  slidesPerGroup: 2,
  loopFillGroupWithBlank: true,
  speed: 500,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },


  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});


/*select========================*/

const element = document.querySelector('#selectCostom');
const choices = new Choices(element, {
  searchEnabled: false
});



