import $ from 'jquery';
import slick from "slick-carousel";

window.jQuery = $;

let bestSlider = $('.db-section-first');

bestSlider.slick({
    slide: '.db-offer',
    rows: 0,
    nextArrow: '[data-best-next]',
    prevArrow: '[data-best-prev]',
    infinite: false,
    dots: true,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                arrows: false
            }
        }

    ]
});


$(window).scroll(function(){
    if ($(window).scrollTop() > 200) {
        $('.bg-header').addClass('bg-header__scroll');
        $('.db-navbar__logo').addClass('db-navbar__logo-scroll');
        $('.db-navbar__items').addClass('db-navbar__items-scroll');
        $('.navbar').addClass('navbar-dark__scroll');

    }
    else {
        $('.bg-header').removeClass('bg-header__scroll');
        $('.db-navbar__logo').removeClass('db-navbar__logo-scroll');
        $('.db-navbar__items').removeClass('db-navbar__items-scroll');
    }
});

const buttonLorem1 = document.getElementById('button-lorem1')
const buttonLorem2 = document.getElementById('button-lorem2')
const title = document.querySelector('.db-section-lorem__title')
const text = document.querySelector('.db-section-lorem__text')
buttonLorem2.addEventListener('click', function () {
    title.innerHTML = 'Lorem Ipsum 2';
    text.innerHTML = `Lorem Ipsum - це текст-"риба", що використовується в друкарстві та дизайні. Lorem Ipsum є,
        '                        фактично, стандартною "рибою" аж з XVI сторіччя, коли невідомий друкар взяв шрифтову гранку та
        '                        склав на ній підбірку зразків шрифтів.`
});
buttonLorem1.addEventListener('click', function () {
    title.innerHTML = 'Lorem Ipsum 1';
    text.innerHTML = `Lorem Ipsum - це текст-"риба", що використовується в друкарстві та дизайні. Lorem Ipsum є,
    фактично, стандартною "рибою" аж з XVI сторіччя, коли невідомий друкар взяв шрифтову гранку та
    склав на ній підбірку зразків шрифтів. "Риба" не тільки успішно пережила п'ять століть, але й
    прижилася в електронному верстуванні, залишаючись по суті незмінною. Вона популяризувалась в
    60-их роках минулого сторіччя завдяки виданню зразків шрифтів Letraset.`
});
var header = document.querySelector('.bg-header');
document.addEventListener('click', () => {
    header.classList.toggle('comeOn');
});
