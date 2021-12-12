new Swiper(".img-texto--1 .swiper", {
    slidesPerView: "auto",
    spaceBetween: 24,
    loop: true,
    centeredSlides: true,
    navigation: {
      nextEl: ".img-texto--1 .controls__next",
      prevEl: ".img-texto--1 .controls__prev",
    }
});

new Swiper(".img-texto--2 .swiper", {
    slidesPerView: "auto",
    spaceBetween: 24,
    loop: true,
    centeredSlides: true,
    navigation: {
      nextEl: ".img-texto--2 .controls__next",
      prevEl: ".img-texto--2 .controls__prev",
    }
});

new Swiper(".img-texto--3 .swiper", {
    slidesPerView: "auto",
    spaceBetween: 24,
    loop: true,
    centeredSlides: true,
    navigation: {
      nextEl: ".img-texto--3 .controls__next",
      prevEl: ".img-texto--3 .controls__prev",
    }
});

new Swiper(".img-texto--4 .swiper", {
    slidesPerView: "auto",
    spaceBetween: 24,
    loop: true,
    centeredSlides: true,
    navigation: {
      nextEl: ".img-texto--4 .controls__next",
      prevEl: ".img-texto--4 .controls__prev",
    }
});

new Swiper(".img-texto--5 .swiper", {
    slidesPerView: "auto",
    spaceBetween: 24,
    loop: true,
    centeredSlides: true,
    navigation: {
      nextEl: ".img-texto--5 .controls__next",
      prevEl: ".img-texto--5 .controls__prev",
    }
});

new Swiper(".img-texto--6 .swiper", {
    slidesPerView: "auto",
    spaceBetween: 24,
    loop: true,
    centeredSlides: true,
    navigation: {
      nextEl: ".img-texto--6 .controls__next",
      prevEl: ".img-texto--6 .controls__prev",
    }
});

const itens = document.querySelectorAll(".servico__comparables__item");
itens.forEach(item => {
    const btn = item.querySelector(".button--graph");
    const table = item.querySelector(".table");
    btn.addEventListener("click", () => {
        item.classList.toggle("open");
        table.classList.toggle("open");
    });
});