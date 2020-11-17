// DOM
const $nav = document.querySelector('.nav');
const $btnTop = document.querySelector('.btn_top');
const $logo = document.querySelector('.logo');
const $teaserIframe = document.querySelector('.teaser iframe');
const $terroir1 = document.querySelector('.terroir1');
const $terroir2 = document.querySelector('.terroir2');
const $terroir3 = document.querySelector('.terroir3');
const $mapDot1 = document.querySelector('.jejuMap .dot1');
const $mapDot2 = document.querySelector('.jejuMap .dot2');
const $mapDot3 = document.querySelector('.jejuMap .dot3');

// EVENT
window.onscroll = () => {
  $nav.classList.toggle('scroll', window.scrollY > 80);
  $btnTop.style.bottom = window.scrollY > 400 ? '40px': '35px';
  $btnTop.style.opacity = window.scrollY > 400 ? '1': '0';
}
$btnTop.onclick = () => window.scrollTo(0, 0);
$logo.onclick = () => window.scrollTo(0, 0);

$terroir1.onmouseover = ({ target }) => {
  if (!target.matches('.terroir1 h3 span')) return;
  $mapDot1.classList.add('active');
}
$terroir2.onmouseover = ({ target }) => {
  if (!target.matches('.terroir2 h3 span')) return;
  $mapDot2.classList.add('active');
}
$terroir3.onmouseover = ({ target }) => {
  if (!target.matches('.terroir3 h3 span')) return;
  $mapDot3.classList.add('active');
}
$terroir1.onmouseout = ({ target }) => {
  if (!target.matches('.terroir1 h3 span')) return;
  $mapDot1.classList.remove('active');
}
$terroir2.onmouseout = ({ target }) => {
  if (!target.matches('.terroir2 h3 span')) return;
  $mapDot2.classList.remove('active');
}
$terroir3.onmouseout = ({ target }) => {
  if (!target.matches('.terroir3 h3 span')) return;
  $mapDot3.classList.remove('active');
}