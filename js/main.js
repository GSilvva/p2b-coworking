// NAVBAR
const navbar = document.querySelector(".navbar");
const menuIcon = document.querySelector(".navbar__menu-icon");
const linksNav = navbar.querySelectorAll("a");

linksNav.forEach((link) => {
  link.addEventListener("click", () => {
    navbar.classList.remove("open");
    document.documentElement.classList.remove("o-hidden");
  });
});

menuIcon.addEventListener("click", () => {
  navbar.classList.toggle("open");
  document.documentElement.classList.toggle("o-hidden");
});

// FIXED NAVBAR
function scrollNav() {
  if (document.body.scrollTop > 24 || document.documentElement.scrollTop > 24) {
    navbar.classList.add("fixed");
  } else {
    navbar.classList.remove("fixed");
  }
}
["DOMContentLoaded", "scroll"].forEach(eventHandler => window.addEventListener(eventHandler, scrollNav));

// COOKIES MODAL
const containerCookies = document.querySelector(".cookies");
if(containerCookies) {
  const btnCookies = containerCookies.querySelector("button");
  btnCookies.addEventListener("click", () => {
    containerCookies.classList.add("hidden");
  });
}

// MASK PHONE
document.querySelector("input[type='tel']").addEventListener("input", (event) => {
  const maskPhone = event.target.value.replace(/\D/g, '').match(/(\d{0,2})(\d{0,2})(\d{0,7})/);
  event.target.value = !maskPhone[2] ? maskPhone[1] : '(' + maskPhone[1] + ')' + ' ' + maskPhone[2] + maskPhone[3];
});

// SELECT UNIDADES
const unidadesContainer = document.querySelector(".unidades");
const unidadeSelecionada = document.querySelector(".unidades > button");
const unidadesDisponiveis = unidadesContainer.querySelectorAll("ul li button");
const map = document.querySelector(".contato iframe");

unidadeSelecionada.addEventListener("click", () => unidadesContainer.classList.toggle("open"));
unidadesDisponiveis.forEach(unidade => {
  unidade.addEventListener("click", e => {
    const unidadeTarget = e.currentTarget
    const mapTarget = unidadeTarget.dataset.map;
    const textTarget = unidadeTarget.innerHTML;
    map.setAttribute("src", mapTarget);
    unidadeSelecionada.innerHTML = textTarget;
    unidadesContainer.classList.remove("open");
  });
});