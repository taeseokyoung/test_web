$(function () {
    $('.main_video').YTPlayer({
        videoURL: 'https://youtu.be/nnVOr1CzozY',
        containment: '.main_visual',
        autoPlay: true,
        mute: true,
        showControls: false,
        // 스크롤 내려가서 동영상이 보일 때 쯤 재생해라
        playOnlyIfVisible: true,
    });

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
        slidesToShow: 4,
    });


    $('').on('click', function () {

    })
})


// $('.play').click(function () {
//     $('.visual').slick('slickPlay');
// });

// $('.stop').click(function () {
//     $('.visual').slick('slickPause');
// });