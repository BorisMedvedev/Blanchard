const button = document.querySelectorAll('button');
const drop = document.querySelectorAll('.dropdown')

button.forEach(el => {
  el.addEventListener('click', (e) => {
    drop.forEach(el => {el.classList.remove(('dropdown--active'))})
    e.currentTarget.closest('li').querySelector('.dropdown').classList.toggle('dropdown--active');
  });
});

document.addEventListener('click', (e) => {
  console.log(e.target)
  if (!e.target.classList.contains('dropdown') && !e.target.classList.contains('drop-btn')) {
    drop.forEach(el => {el.classList.remove(('dropdown--active'))})
  }
});


/* swiper=================================================*/

var mySwiper = new Swiper('.swiper-1', {
	loop: true,
	speed: 300,
	watchSlidesProgress: true,
	slidesPerView: 3,
	slidesPerColumn: 2,
	slidesPerColumnFill: "row",
	slidesPerGroup: 3,
	spaceBetween: 50,
	pagination: {
		el: ".swiper-pagination",
		type: "fraction",
	},
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	}
});


/*select========================*/

const element = document.querySelector('#selectCostom');
const choices = new Choices(element, {
	searchEnabled: false
});



