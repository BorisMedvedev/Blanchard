var mySwiper = new Swiper('.swiper-1', {
	loop: true,
	speed: 300,
	watchSlidesProgress: true,
	slidesPerView: 3,
	slidesPerColumn: 2,
	slidesPerColumnFill: "row",
	slidesPerGroup: 3,
	spaceBetween: 50,
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



