const btn_toggle = document.querySelector('.btn-toggle');
const menu = document.querySelector('.navbar-wrapper');
const over_lay = document.querySelector('.over-lay');
const main_header = document.querySelector('.main-header');
const navbar_logo = document.querySelector('.navbar-logo');
const nav_link = [...document.querySelectorAll('.nav-link')];

btn_toggle.addEventListener('click', e => {
  if (e.target.checked) {
    menu.classList.add('show');
    over_lay.classList.add('show');
    main_header.classList.add('add-to-header');
    navbar_logo.classList.add('show');
  } else {
    menu.classList.remove('show');
    over_lay.classList.remove('show');
    main_header.classList.remove('add-to-header');
    navbar_logo.classList.remove('show');
  }
});

window.addEventListener('resize', () => {
  if (window.innerWidth > 760 && over_lay.classList.contains('show')) {
    over_lay.classList.remove('show');
    menu.classList.remove('show');
    btn_toggle.checked = false;
    main_header.classList.remove('add-to-header');
  }
});

nav_link.forEach(link => {
  link.addEventListener('click', () => {
    over_lay.classList.remove('show');
    menu.classList.remove('show');
    btn_toggle.checked = false;
    main_header.classList.remove('add-to-header');
    navbar_logo.classList.remove('show');
  });
});

/* Hide Header on Scroll */
let scrollPosition = window.pageYOffset;

window.addEventListener('scroll', () => {
  const currentPosition = window.pageYOffset;

  if (scrollPosition > currentPosition) {
    main_header.style.top = '0';
  } else {
    main_header.style.top = '-3rem';
  }
  scrollPosition = currentPosition;
});
