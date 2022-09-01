window.addEventListener('DOMContentLoaded', function () {

    const MAINSLIDE = new Swiper('.swiper', {

        // direction: 'vertical',
        loop: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
        },

        scrollbar: {
            el: '.swiper-scrollbar',
        },
    });

    document.querySelector('.MainVisual .slide_handler .prev>a').addEventListener('click', function () {
        MAINSLIDE.slidePrev();
    })

    document.querySelector('.MainVisual .slide_handler .next>a').addEventListener('click', function () {
        MAINSLIDE.slideNext();
    })

    document.querySelector('.Preview .content li').addEventListener('click', function () {

    })

})