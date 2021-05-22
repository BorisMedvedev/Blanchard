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


/*Accordeon========================*/


$(function () {
  $(".accordion1").accordion();
});

$(function () {
  $(".accordion2").accordion();
});

$(function () {
  $(".accordion3").accordion();
});
/*tabs========================*/

document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.tabs__btn').forEach(function (tabsBtn) {

    tabsBtn.addEventListener('click', function (event) {
      const path = event.currentTarget.dataset.path
      console.log(path)
      document.querySelectorAll('.tab-content').forEach(function (tabContent) {
        tabContent.classList.remove('tab-content-active')
      })
      // document.querySelectorAll('.catalog-block__disabled').forEach(function (tabContent) {
      //   tabContent.classList.remove('catalog-block__active')
      // })
      document.querySelector(`[data-target="${path}"]`).classList.add('tab-content-active')
      console.log(tab - content - acive)
      // event.currentTarget(`[data-target="${path}"]`).classList.add('catalog-block__active')
      // console.log(tab - content - acive)
    })

  })

})
