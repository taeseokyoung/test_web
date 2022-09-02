window.addEventListener('DOMContentLoaded', function () {

    const TUL = document.querySelectorAll('.Preview .content_l li');
    const TLINK = document.querySelectorAll('.Preview .link');

    TUL.forEach((el, idx) => {
        console.log(el, idx)
        el.addEventListener('click', () => {
            TUL.forEach(el => el.classList.remove('on'));
            el.classList.add('on');
            TLINK.forEach(el => el.classList.remove('on'));
            TLINK[idx].classList.add('on')
        })
    })

    const CUL = document.querySelectorAll('.Notice .content li');
    const CLINK = document.querySelectorAll('.Notice .link');

    CUL.forEach((el, idx) => {
        console.log(el, idx)
        el.addEventListener('click', () => {
            CUL.forEach(el => el.classList.remove('on'));
            el.classList.add('on');
            CLINK.forEach(el => el.classList.remove('on'));
            CLINK[idx].classList.add('on')
        })
    })

    const MAINSLIDE = new Swiper('.MainVisual .swiper', {

        // direction: 'vertical',
        loop: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
        },

        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

        scrollbar: {
            el: '.swiper-scrollbar',
        },
    });

    const HSLIDE = new Swiper('.Notice .swiper', {
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


    // document.querySelector('.MainVisual .slide_handler .prev a').addEventListener('click', function () {
    //     MAINSLIDE.slidePrev();
    // })

    // document.querySelector('.MainVisual .slide_handler .next a').addEventListener('click', function () {
    //     MAINSLIDE.slideNext();
    // })

    document.querySelector('.Preview .content li').addEventListener('click', function () {

    })

    const PSLIDE = new Swiper('.mySwiper', {
        slidesPerView: 3,
        grid: {
            rows: 2,
        },
        spaceBetween: 30,

        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });

})