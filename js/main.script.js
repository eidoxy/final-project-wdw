let swiperCards = new Swiper('.swiper', {
    slidesPerView: 3,
    slidesPerGroup: 1,
    loop: true,
    loopFillGroupWithBlank: true,
    centerSlide: true,
    fade: true,
    grabCursor: true,

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true,
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    breakpoints: {
        450: {
            slidesPerView: 1,
            slidesPerGroup: 1,
        },
        1000:{
            slidesPerView: 2,
            slidesPerGroup: 1,
        },
        1200: {
            slidesPerView: 3,
            slidesPerGroup: 1,
        },
    },
});