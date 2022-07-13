$(function () {

    $(window).scroll(function () {
        $('.header_fixed').addClass('on')
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
})

