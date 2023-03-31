import * as Timer from './countdown.js';
import Splide from '@splidejs/splide';
import '@splidejs/splide/css/core';
//import '@splidejs/splide/css';
import '@scss/main.scss'

//init countdown.js
document.addEventListener('DOMContentLoaded', Timer.initCountDown);

//preloader
const preloader = () => {
  setTimeout(function () {
    let preloader = document.body.querySelector('#page-preloader');
    if (!preloader)
      return false
    if (!preloader.classList.contains('done'))
      preloader.classList.add('done');
  }, 1000);
}
document.addEventListener('DOMContentLoaded', preloader, false);

//upload photo
const uploadPhotoInput = document.querySelector('.custom-file-input');
const profilePhoto = document.querySelector('.settings-photo .profile-photo');
const uploadPhoto = () => {
  let url = 'assets/img/photos/ava.jpg';
  profilePhoto.style.backgroundImage = 'url(' + url + ')';
}
if (!!uploadPhotoInput)
  uploadPhotoInput.addEventListener('change', uploadPhoto, false);


// Splidejs (cursor customisation)
const splides = document.querySelectorAll('.splide');

const splideIsDrag = (e) => {
  if (e.target.closest('.splide') === null)
    return false
  e.target.closest('.splide').classList.add('is-grab');
}

const splideIsntDrag = (e) => {
  if (e.target.closest('.splide') === null)
    return false
  e.target.closest('.splide').classList.remove('is-grab');
}

if (!!splides) {
  splides.forEach(el => el.addEventListener('mousedown', splideIsDrag, false));
  splides.forEach(el => el.addEventListener('mouseup', splideIsntDrag, false));
}

// Splidejs
// https://github.com/Splidejs/splide

if (document.querySelector('.splide_up') !== null) {
  new Splide( '.splide_up', {
    type       : 'loop',
    arrows     : true,
    //arrowPath  : 'M0,0H40V40H0Z',
    arrowPath  : 'M0.585694 14L14.2928 0.292938L15.707 1.70715L3.41412 14L15.707 26.2929L14.2928 27.7072L0.585694 14Z',
    autoHeight : true,
    autoWidth  : true,
    perPage    : 1,
    gap        : '60px',
    //fixedWidth : '525px',
    mediaQuery : 'min',
    breakpoints: {
      992: {
        gap    : '33px',
      },
      1200: {
        fixedWidth : '525px',
        arrowPath  : 'M3.43876 30L32.695 1.71898L31.3049 0.281006L0.561157 30L31.3049 59.719L32.695 58.281L3.43876 30Z',
        gap        : '33px',
      },
      1400: {
        fixedWidth : '525px',
        gap        : '33px',
      },
    },
  } ).mount();

  // Make arrows size
  let svgSize = document.documentElement.clientWidth < 1200 ? 28 : 60;
  let svgArrows = document.querySelectorAll('.splide_up .splide__arrow svg');
  svgArrows.forEach(el => {
    el.setAttribute("viewBox", '0 0 '+svgSize+' '+svgSize);
    el.setAttribute("width", svgSize);
    el.setAttribute("height", svgSize);
  });

}

if (document.querySelector('.splide_ulist') !== null) {
  new Splide( '.splide_ulist', {
    type       : 'loop',
    arrows     : false,
    autoHeight : true,
    autoWidth  : true,
    gap        : '50px',
    mediaQuery : 'min',
    //perPage    : 4,
    breakpoints: {
      992: {
        gap    : '67px',
      },
    },
  } ).mount();
}

if (document.querySelector('.splide_ulist-extra') !== null) {
  new Splide( '.splide_ulist-extra', {
    type       : 'loop',
    arrows     : false,
    autoHeight : true,
    autoWidth  : true,
    gap        : '50px',
    mediaQuery : 'min',
    //perPage    : 4,
    breakpoints: {
      992: {
        gap    : '58px',
      },
      1650: {
        gap    : '70px',
      },
    },
  } ).mount();
}

if (document.querySelector('.splide_fback') !== null) {
  new Splide( '.splide_fback', {
    type       : 'loop',
    arrows     : true,
    arrowPath  : 'M0.585694 14L14.2928 0.292938L15.707 1.70715L3.41412 14L15.707 26.2929L14.2928 27.7072L0.585694 14Z',
    autoHeight : true,
    autoWidth  : true,
    gap        : '20px',
    mediaQuery : 'min',
    breakpoints: {
      992: {
        arrows : false,
        gap    : '30px',
      },
      1200: {
        gap    : '60px',
      },
      1650: {
        gap    : '120px',
      },
    },
  } ).mount();
}
