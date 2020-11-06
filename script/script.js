
let title = document.querySelectorAll('.faq-items__header'); // get answer block
let menu = document.querySelector('.burger-icon'); // get menu icon
let closeIcon = document.querySelector('.close-icon');// get close icon
let arrow = document.querySelector('.arrow-up');// get arrow

// toggle function
const toggle = () => document.querySelector('.nav-burger').classList.toggle('open');

menu.addEventListener('click', toggle);//open menu
closeIcon.addEventListener('click', toggle);//close menu

// open/close answer window
title.forEach(item => {
    item.addEventListener('click', event => {
        item.classList.toggle('open')
    })
})

// Back to Top arrow
const backToTop = (e) => {
    window.scrollTo({top: -pageYOffset,  behavior: 'smooth'})
}

const trackScroll = () => {
    let arrowClass = arrow.classList; 
    window.pageYOffset > 300 ? arrowClass.add('show') : arrowClass.remove('show');
}

arrow.addEventListener('click', backToTop);
window.addEventListener('scroll', trackScroll);