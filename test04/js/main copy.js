$(function () {

    $('.new_popup .new_tap li').on('click', function (e) {
        e.preventDefault();
        var idx = $(this).index();
        $('.new_popup .bottom>div').removeClass('on')
        $('.new_popup .bottom>div').eq(idx).addClass('on')
    })


    $('.banner_slider').slick({
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true,
        pauseOnFocus: true,
    });

    $('.attraction_slide .slide_cover').slick({
        arrows: false,
        slidesToShow: 4
    });


    // if ($(window).width() < 1200) {
    //     $('.attraction_slide .slide_cover').slick({
    //         slidesToShow: 3
    //     })

    // } else {
    //     $('.attraction_slide .slide_cover').slick({
    //         slidesToShow: 4
    //     })
    // }

});


$('').on('click', function () {

})


// $('.play').click(function () {
//     $('.visual').slick('slickPlay');
// });

// $('.stop').click(function () {
//     $('.visual').slick('slickPause');
// });