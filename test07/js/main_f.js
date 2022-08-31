$(function () {

    const TXT = ['', '테라맥주 소개', '종류 및 용량', '패키지', '테라 광고']

    $('#main').fullpage({
        anchors: ['page01', 'page02', 'page03', 'page04'],
        css3: false,
        responsiveWidth: 768,

        // navigation:true, 도트 네비게이션 있는데 고치기 불편하다.
        afterLoad: function (ank, idx) {
            $('.gnb li').removeClass('on');
            $('.gnb li').eq(idx - 1).addClass('on');
            // 
            $('.section').removeClass('on');
            $('.section').eq(idx - 1).addClass('on');
            // 삼항연산자 사용
            // idx == 3 ? $('.gnb a').addClass('w') : $('.gnb a').removeClass('w');
            // ~또는 ~
            idx == 3 || idx == 1 ? $('.gnb a').addClass('w') : $('.gnb a').removeClass('w');
            $('h1 span').text(TXT[idx - 1])
        }


    });

    $('.coverBtn').on('click', function () {
        $(this).toggleClass('on')
        $('.cover').toggleClass('on')
    });

    var coverContent = $('.gnb ul').clone().addClass('co');
    console.log(coverContent);

    $('.cover .case').append(coverContent);

    // 01 02 03을 누르면 커버가 닫히고 해당 영역으로 이동
    $('.cover a').on('click', function () {
        $('.cover').toggleClass('on');
        $('.coverBtn').toggleClass('on');
    })

    // cover에서 옆에 움직이는 바가 안움직이도록
    // 스크롤, 휠 했을 때 이벤트를 전달하지 못하도록 한다.
    $('.cover').on('scroll, wheel', function (event) {
        event.stopPropagation();
    })

    $('.contact').on('click', function () {
        $(this).toggleClass('on')
    })

})