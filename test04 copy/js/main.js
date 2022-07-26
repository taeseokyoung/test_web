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

    $('.banner_slider').slick();
});