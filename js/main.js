var mySwiper = new Swiper('.swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    speed: 300,
    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar

});



/*select========================*/

const element = document.querySelector('#selectCostom');
const choices = new Choices(element, {
    searchEnabled: false
});

/*==================swiper-container2========================*/
new Swiper('.galleri-swiper__swiper', {
    direction: 'horizontal',
    loop: true,
    speed: 300,
    slidesPerView: 3,
    slidesPerColumn: 2,
    spaceBetween: 30,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    }
});