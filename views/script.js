import Swiper from 'swiper';

let swiperCards = new Swiper('.swiper', {
    // Optional parameter
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

function animateValue(id, start, end, duration) {
    let range = end - start;
    let current = start;
    let increment = end > start? 1 : -1;
    let stepTime = Math.abs(Math.floor(duration / range));
    let obj = document.getElementById(id);
    let timer = setInterval(function() {
        current += increment;
        obj.innerHTML = current;
        if (current == end) {
            clearInterval(timer);
        }
    }, stepTime);
}

window.onload = function() {
    setTimeout(function() {
        animateValue("counter1", 0, 10, 2000);
        animateValue("counter2", 0, 6, 2000);
        animateValue("counter3", 0, 45, 2000);
    }, 1000);
}