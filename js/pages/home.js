new Swiper(".home__banner__images .swiper", {
    slidesPerView: "auto",
    spaceBetween: 32,
    loop: true,
    navigation: {
      nextEl: ".home__banner__images .controls__next",
      prevEl: ".home__banner__images .controls__prev",
    },
});

new Swiper(".home__content .swiper", {
    slidesPerView: "auto",
    spaceBetween: 32,
    loop: true,
    centeredSlides: true,
    autoplay: {
        delay: 1500,
        disableOnInteraction: false,
    },
});

new Swiper(".home__beneficios-vantagens .swiper", {
    slidesPerView: "auto",
    spaceBetween: 24,
    loop: true,
    centeredSlides: true,
    navigation: {
        nextEl: ".home__beneficios-vantagens__controls__next",
        prevEl: ".home__beneficios-vantagens__controls__prev",
    },
});

new Swiper(".home__empresas .swiper", {
    slidesPerView: 5,
    spaceBetween: 48,
    loop: true,
    breakpoints: {
        300: {
            slidesPerView: 2,
        },
        500: {
            slidesPerView: 3,
        },
        1000: {
            slidesPerView: 5,
        }
    }
});