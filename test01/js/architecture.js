$(function () {
    $('.main_slider').slick({
        arrows: false
    });

    $('.business_slick').slick({
        arrows: false,
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        centerMode: true,
        variableWidth: true,
    });

    $('.slide_arrows i:nth-child(1)').on('click', function () {
        $('.business_slick').slick('slickPrev')
    })

    $('.slide_arrows i:nth-child(2)').on('click', function () {
        $('.business_slick').slick('slickNext')
    })



})