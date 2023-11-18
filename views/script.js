let swiperCards = new Swiper('.swiper', {
    // Optional parameters
    slidesPerView: 3,
    slidesPerGroup: 1,
    loop: true,
    loopFillGroupWithBlank: true,
    centerSlide: true,
    fade: true,

    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
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