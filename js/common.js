// DOM
const $nav = document.querySelector(".nav");
const $btnTop = document.querySelector(".btn_top");
const $logo = document.querySelector(".logo a");

// EVENT
window.onscroll = () => {
  $nav.classList.toggle('scroll', window.scrollY > 80);
  $btnTop.style.bottom = window.scrollY > 500 ? '40px': '30px';
  $btnTop.style.opacity = window.scrollY > 500 ? '1': '0';
}
$btnTop.onclick = () => {
  window.scrollTo(0, 0);
};
$logo.onclick = () => {
  window.scrollTo(0, 0);
};