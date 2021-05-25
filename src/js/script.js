let hamburger = document.querySelector('.header__hamburger'),
    menu = document.querySelector('.menu'),
    closeBtn = document.querySelector('.menu__close'),
    item = document.querySelectorAll('.menu .menu__list li'),
    btn = document.querySelectorAll('.menu .menu__btns a'),
    arrow = document.querySelector('.arrow-top');

hamburger.addEventListener('click', () => {
    menu.classList.add('menu__active');
    hamburger.classList.add('header__active-hamburger');
});

closeBtn.addEventListener('click', () => {
    menu.classList.remove('menu__active');
    hamburger.classList.remove('header__active-hamburger');
});

for (let i = 0; i < item.length; i++) {
    item[i].addEventListener('click', () => {
        menu.classList.remove('menu__active');
        hamburger.classList.remove('header__active-hamburger');
    })
}

for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener('click', () => {
        menu.classList.remove('menu__active');
        hamburger.classList.remove('header__active-hamburger');
    })
}

window.addEventListener('scroll', () => {
    let scrolled = window.pageYOffset;

    if (scrolled > 1315) {
        arrow.classList.add('active-arrow');
    } else {
        arrow.classList.remove('active-arrow');
    }
});