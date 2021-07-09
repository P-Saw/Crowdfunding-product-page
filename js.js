// MENU HAMBURGER TOGGLE//

const hamburgerBtn = document.querySelector('.menu-hamburger');
const navbar = document.querySelector('.nav');

hamburgerBtn.addEventListener('click', () =>{
        hamburgerBtn.classList.toggle('open');
        navbar.classList.toggle('nav-open')
});