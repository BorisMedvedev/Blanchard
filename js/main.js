var mySwiper = new Swiper('.swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    speed: 300,
    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: false,
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar

})


$(function() {
    $("#accordion").accordion({
        collapsible: true
    });
});
