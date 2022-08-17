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
        arrows: false,
        dots: false,
        slidesToShow: 2,
    });

    $('.leftSlider').slick({
        arrows: false,
        dots: false,
        slidesToShow: 1,
        vertical: true,
    });

    $('.leftSlider').on('afterChange', function (e, s, c) {
        console.log(c);
        $('.rightSlider .slide').removeClass('on');
        $('.rightSlider .slide').eq(c).addClass('on');

    })

    $('.left .leftArrows div:nth-child(1)').on('click', function (e) {
        e.preventDefault();
        $('.leftSlider').slick('slickPrev');
    });

    $('.left .leftArrows div:nth-child(2)').on('click', function (e) {
        e.preventDefault();
        $('.leftSlider').slick('slickNext');
    });


    $('.rightSlider .slide').slick({
        arrows: false,
        dots: false,
        slidesToShow: 4,
    });





})



// $('.gnb .mainmenu>ul>li').on('hover', function () {
//     var idx = $(this).index();

//     $('.gnb .multimenu .container').eq(idx).addClass('on').siblings().removeClass('on');


// })

// $('.gnb .mainmenu>ul>li').onMouseOver({

// })


       //    $('.gnb>ul>li>a').on('click', function (e) {
        //             if ($('.gnb').hasClass('on')) {
        //                 e.preventDefault();
        //                 $('.sub_menu').slideUp();
        //                 $(this).next().slideToggle();
        //             }

        //         });