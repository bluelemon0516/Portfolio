'use strict';

// 스크롤 시 header에 header dark 적용
const header = document.querySelector('.header');
const headerHeight = header.getBoundingClientRect().height;
document.addEventListener('scroll', function () {
    if (window.scrollY > headerHeight) {
        header.classList.add('header--deco');
    } else {
        header.classList.remove('header--deco');
    }
});

// 스크롤 시 home 섹션 투명하게 처리함

const home = document.querySelector('.home__container');
const homeHeight = home.offsetHeight;
document.addEventListener('scroll', () => {
    home.style.opacity = 1 - window.scrollY / homeHeight;
});

// 스크롤 시 arrow 나타남

document.addEventListener('scroll', () => {
    if (window.scrollY > homeHeight/2) {
        document.querySelector('.arrow-up').style.opacity = 1;
    } else {document.querySelector('.arrow-up').style.opacity = 0;}
});

// navbar 토글버튼 클릭 처리

const navbarMenu = document.querySelector('.header__menu');
const navbarToggle = document.querySelector('.header__toggle');
navbarToggle.addEventListener('click', ()=> {
    navbarMenu.classList.toggle('open');
})

// navbar 클릭 시 메뉴 자동 닫기

const navbarMenuItem = document.querySelector('.header__menu')
navbarMenu.addEventListener('click', ()=> {
    navbarMenu.classList.remove('open');
})
