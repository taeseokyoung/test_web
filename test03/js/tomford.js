$(function () {

    $(window).scroll(function () {
        var sct = $(window).scrollTop();
        if (sct > 10) {
            $('.title').addClass('on')
        }
        else {
            $('.title').removeClass('on')
        }

    })

    $('.main_video').YTPlayer({
        videoURL: 'https://www.youtube.com/watch?v=7F5CbEw5bXE',
        containment: '.main_visual',
        autoPlay: true,
        mute: true,
        showControls: false,
        // 스크롤 내려가서 동영상이 보일 때 쯤 재생해라
        playOnlyIfVisible: true,
    });

    $('.main_product .product_img figure:last-child').YTPlayer({
        videoURL: 'https://www.youtube.com/watch?v=zWiwPt9-6Us',
        containment: 'figure:last-child',
        autoPlay: true,
        mute: true,
        showControls: false,
        // 스크롤 내려가서 동영상이 보일 때 쯤 재생해라
        playOnlyIfVisible: true,
    });
})

