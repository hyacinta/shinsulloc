// DOM
const $nav = document.querySelector(".nav");

// EVENT
window.onscroll = () => {
  $nav.classList.toggle('scroll', window.scrollY > 80);
}