$(function () {
    $('.main_slider').slick({
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: false,
        pauseOnFocus: false,
    });

    $('.begins_slider').slick({
        arrows: false,
    });

    $('.begins_arrow i:nth-of-type(1)').on('click', function () {
        $('.begins_slider').slick('slickPrev')
    })

    $('.begins_arrow i:nth-of-type(2)').on('click', function () {
        $('.begins_slider').slick('slickNext')
    })

    $('.main_brand .brand_title li').on('click', function () {
        var idx = $(this).index();
        $('.main_brand .brand_tab').removeClass('on');
        $('.main_brand .brand_tab').eq(idx).addClass('on');
        $('.main_brand .brand_title li').removeClass('on');
        $('.main_brand .brand_title li').eq(idx).addClass('on');
    })
})