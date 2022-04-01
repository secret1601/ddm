$(document).ready(function () {
    // 메인 메뉴 호버
    let header_right = $('.header-right');
    let gnb = $('.gnb');
    let nav = $('.nav')
    let nav_bg = $('.nav-bg')
    let submenu = $('.submenu');

    nav.mouseenter(function () {
        nav_bg.addClass('nav-bg-active');
        // submenu.addClass('submenu-active');
        submenu.stop().fadeIn();

    });

    nav.mouseleave(function () {
        nav_bg.removeClass('nav-bg-active');
        // submenu.removeClass('submenu-active');
        submenu.hide();
    });

    // 메인 슬라이드
    new Swiper('.sw-visual-slide', {
        slidePerView: 1,
        loop: true,

        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },

        navigation: {
            nextEl: '.sw-visual-slide-next',
            prevEl: '.sw-visual-slide-prev',
        },

        autoplay: {
            delay: 2000,
        }
    });

    // 엽떡 메뉴 추천 영역 트랜지션
    let information_box = $('.information-box');
    let background_1 = $('.background-1');
    let background_2 = $('.background-2');
    let background_3 = $('.background-3');

    information_box.mouseenter(function () {
        information_box.css('span').removeClass('background-1');
        information_box.css('span').addClass('background-1-1');
    });

    // 사이드바 탑링크
    let top_bar = $('.top-bar')
    let side_bar = $('.side-bar');

    window.addEventListener('scroll', function () {
        if (this.scrollY > 200) {
            side_bar.fadeIn();
        } else {
            side_bar.fadeOut();
        }
    });

    top_bar.click(function (event) {
        event.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    });

    // 모달창
    let modal = $('.modal');
    let modal_close = $('.modal-close');

    modal_close.click(function(){
        modal.fadeOut(500);
    });
    
});