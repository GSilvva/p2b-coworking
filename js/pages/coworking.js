new Swiper(".img-texto .swiper", {
    slidesPerView: "auto",
    spaceBetween: 24,
    loop: true,
    centeredSlides: true,
    navigation: {
      nextEl: ".img-texto .controls__next",
      prevEl: ".img-texto .controls__prev",
    }
});