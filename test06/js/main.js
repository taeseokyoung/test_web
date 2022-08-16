$(function () {
    $('.mainSlider').slick({
        arrows: false,
        dots: false,
        autoplay: true,
        autoplaySpeed: 2000,
        centerMode: true,
        centerPadding: '350px',
        slidesToShow: 1,
        pauseOnHover: false,

    });

    $('.mainSlider').on('afterChange', function (e, s, c) {
        $('.gnb>ul>li').eq(c).addClass('on').siblings().removeClass('on')

        // if ($('.mainSlider figure').hasClass('slick-center')) {
        //     var idx = $(this).index();

        //     $('.gnb li').eq(idx).addClass('on').siblings().removeClass('on')
        // }
    });


    $('.miniSlider').slick({
        slidesToShow: 2,
    });


})
