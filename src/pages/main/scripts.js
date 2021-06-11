var popupBtn = document.querySelector('.slider-js');
var popupForm = document.querySelector('.popup-form');
var popupOverlay = document.querySelector('.popup-overlay');
var popupClose = document.querySelector('.popup-close');
var input = popupForm.querySelector('input');

popupBtn.addEventListener('click', function() {
    popupForm.classList.add('popup-open'); 
    popupOverlay.classList.add('popup-overlay-open');
    input.focus();
})

popupClose.addEventListener('click', function() {
    popupForm.classList.remove('popup-open'); 
    popupOverlay.classList.remove('popup-overlay-open');
})

window.addEventListener('keydown', function(evt) {
    if(evt.keyCode === 27) {
        if(popupForm.classList.contains('popup-open')) {
            popupForm.classList.remove('popup-open'); 
            popupOverlay.classList.remove('popup-overlay-open');    
        }
    }
})

var openBtn = document.querySelector('.header-mobile__btn-js');
var menu = document.querySelector('.header-mobile__js');
var closeClose = document.querySelector('.header-mobile__close-js');

openBtn.addEventListener('click', function() {

    menu.classList.add('header-mobile__open');
})

closeClose.addEventListener('click', function() {
    menu.classList.remove('header-mobile__open');
})