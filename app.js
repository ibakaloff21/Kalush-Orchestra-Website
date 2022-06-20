const button = document.querySelector('.m-menu-link')
const menu = document.querySelector('.m-menu')
const close = document.querySelector('.menu-close')
button.addEventListener('click', function(e) {
    menu.classList.toggle('_active')
})
close.addEventListener('click', function(e) {
    menu.classList.toggle('_active')
})
