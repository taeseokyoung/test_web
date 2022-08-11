$(function () {

    $('.match_slider .slick').on('init afterchange', function (e, s, c) {
        var current = $('.slick_center');
        current.addClass('on').siblings().removeClass('on');
    });

    $('.match_slider .slick').slick({
        centerMode: true,
        arrows: false,
        centerPadding: '30px',
        variableWidth: true,
        slidesToShow: 3,
    });

    $('.main_slider').slick({
        arrows: false,
        dots: true,
        pauseOnHover: true,
        pauseOnFocus: true,
        autoplay: true,
        autoplaySpeed: 2000,

    });

    $('.txt_slider').slick({
        vertical: true,
        arrows: false,
        pauseOnHover: true,
        pauseOnFocus: true,
        autoplay: true,
        autoplaySpeed: 1300,


        // verticalSwiping: true,
    });

    $('.highlight .slider_for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.slider_nav',
    });

    $('.highlight .slider_nav').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.slider_for',
        arrows: false,
        dots: false,
        centerMode: true,
        focusOnSelect: true
    });

});

