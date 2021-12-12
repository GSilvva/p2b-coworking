if(document.querySelector(".servico__beneficios")) {
    if(window.matchMedia("(max-width: 980px)").matches) {
        new Swiper(".servico__beneficios .swiper", {
            slidesPerView: "auto",
            spaceBetween: 16,
            loop: true,
            centeredSlides: true
        });
    }
}