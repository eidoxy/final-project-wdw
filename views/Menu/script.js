// Swiper.js
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

// Membuat variabel untuk menyeleksi class filter-btn dan filterable-menu
const filterButtons = document.querySelectorAll(".filter-btn button");
const filterableMenu = document.querySelectorAll(".filterable-menu");

// Membuat fungsi untuk filter menu
const filterMenu = e => {
    document.querySelector(".active").classList.remove("active");
    e.target.classList.add("active");

    // Perulangan untuk menyeleksi class filterable-menu
    filterableMenu.forEach(menu => {
        // Menambahkan class "hide" dari setiap menu untuk menghilangkan konten
        menu.classList.add("hide");
        // Membuat fungsi filter "all"
        if (menu.dataset.name === e.target.dataset.name || e.target.dataset.name === "all") {
            menu.classList.remove("hide");
        }
    });
};

// Membuat click listener untuk setiap button yang di klik
filterButtons.forEach(button => button.addEventListener("click", filterMenu));