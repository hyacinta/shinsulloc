// DOM
const $nav = document.querySelector('.nav');
const $btnTop = document.querySelector('.btn_top');
const $logo = document.querySelector('.logo a');
const $terroir = document.querySelector('.terroir');
const $teaGarden1 = document.querySelector('.teaGarden1');
const $teaGarden2 = document.querySelector('.teaGarden2');
const $teaGarden3 = document.querySelector('.teaGarden3');

// EVENT
window.onscroll = () => {
  $nav.classList.toggle('scroll', window.scrollY > 80);
  $btnTop.style.bottom = window.scrollY > 400 ? '40px': '35px';
  $btnTop.style.opacity = window.scrollY > 400 ? '1': '0';
}
$btnTop.onclick = () => window.scrollTo(0, 0);
$logo.onclick = () => window.scrollTo(0, 0);

$terroir.onclick = ({ target }) => {
  if (!target.matches('button.popupBtn *')) return;
  const popup = target.parentNode.parentNode;
  popup.classList.add('active');
}
$teaGarden1.onclick = ({ target }) => {
  if (target.matches('button.btnPopupClose')) {
    const popup = target.parentNode.parentNode;
    popup.classList.remove('active');
  };
  if (target.matches('li .popupBg')) {
    const popup = target.parentNode;
    popup.classList.remove('active');
  };
}
$teaGarden2.onclick = ({ target }) => {
  if (target.matches('button.btnPopupClose')) {
    const popup = target.parentNode.parentNode;
    popup.classList.remove('active');
    console.log('test');
  };
  if (target.matches('li .popupBg')) {
    const popup = target.parentNode;
    popup.classList.remove('active');
  };
}
$teaGarden3.onclick = ({ target }) => {
  if (target.matches('button.btnPopupClose')) {
    const popup = target.parentNode.parentNode;
    popup.classList.remove('active');
    console.log('test');
  };
  if (target.matches('li .popupBg')) {
    const popup = target.parentNode;
    popup.classList.remove('active');
  };
}
