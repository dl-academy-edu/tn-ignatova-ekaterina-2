var popupBtn = document.querySelector('.slider__js');
var popupForm = document.querySelector('.popup__form');
var popupOverlay = document.querySelector('.popup__overlay');
var popupClose = document.querySelector('.popup__close');
var input = popupForm.querySelector('input');

popupBtn.addEventListener('click', function() {
    popupForm.classList.add('popup__open'); 
    popupOverlay.classList.add('popup__overlay-open');
    input.focus();
})

popupClose.addEventListener('click', function() {
    popupForm.classList.remove('popup__open'); 
    popupOverlay.classList.remove('popup__overlay-open');
})

window.addEventListener('keydown', function(evt) {
    if(evt.keyCode === 27) {
        if(popupForm.classList.contains('popup__open')) {
            popupForm.classList.remove('popup__open'); 
            popupOverlay.classList.remove('popup__overlay-open');    
        }
    }
})