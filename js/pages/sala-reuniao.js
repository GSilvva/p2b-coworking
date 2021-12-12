new Swiper(".servico__photos .swiper", {
    slidesPerView: "auto",
    spaceBetween: 32,
    loop: true,
    centeredSlides: true,
    autoplay: {
        delay: 1500,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".servico__photos__controls__next",
        prevEl: ".servico__photos__controls__prev",
    },
});