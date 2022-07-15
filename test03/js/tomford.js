$(function () {
    $('.popUp i').on('click', function (e) {
        e.preventDefault();
        $('.popUp').hide();
    });

    $('.main_video').YTPlayer({
        videoURL: 'https://www.youtube.com/watch?v=7F5CbEw5bXE',
        containment: '.main_visual',
        autoPlay: true,
        mute: true,
        showControls: false,
        // 스크롤 내려가서 동영상이 보일 때 쯤 재생해라
        playOnlyIfVisible: true,
    });

    $('.main_product .product_img #video').YTPlayer({
        videoURL: 'https://youtu.be/zWiwPt9-6Us',
        containment: '#video',
        autoPlay: true,
        mute: true,
        showControls: false,
        playOnlyIfVisible: true,
    });

    $('.toTop').on('click', function () {
        $('html,body').animate({ scrollTop: 0 }, 200)
    });

    $(window).scroll(function () {
        var sct = $(window).scrollTop();
        if (sct > 10) {
            $('.title').addClass('on')
        }
        else {
            $('.title').removeClass('on')
        };

        if (sct > 500) {
            $('.toTop').fadeIn(300)
        }
        else {
            $('.toTop').fadeOut(1000)
        }
    });

    $('.main_slogan .perfume_img').slick({
        arrows: false,
        autoplay: true,
        autoplaySpeed: 700,
        pauseOnHover: true,
        pauseOnFocus: true,
    });

})

