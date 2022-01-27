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

// VIDEO
const btnOpenVideo = document.querySelectorAll(".servico__banner__compl-text button");
const modal = document.querySelector(".modal");
const video = modal.querySelector("iframe");
const closeModal = modal.querySelector("button");
const container = modal.querySelector("article");

function pauseYoutubeVideo() {
  let ysrc = video.src;
  let newysrc = ysrc.replace("?autoplay=1", "");
  video.src = newysrc;
}

btnOpenVideo.forEach(btn => {
    btn.addEventListener("click", () => {
        modal.classList.add("open");
        video.src += "?autoplay=1";
    });
});

closeModal.addEventListener("click", () => {
  modal.classList.remove("open");
  pauseYoutubeVideo();
});

modal.addEventListener("click", () => {
  modal.classList.remove("open");
  pauseYoutubeVideo();
});

container.addEventListener("click", e => {
  e.stopPropagation();
  e.stopImmediatePropagation();
});