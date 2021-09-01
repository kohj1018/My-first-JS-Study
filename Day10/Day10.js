$('.call-btn').on('click', call);
$('.hangup-btn').on('click', hangup);

// Time Checker
let h = 0; m = 0; s = 0;

function call() {
    $('.timeChecker').show();
    $('.call-btn').hide();
    $('.hangup-btn').show();
    $('.info').css('padding-top', '20px');
    $('.time').text('전화를 거는 중...');

    calling = setTimeout(function() {
        $('.layout').animate({backgroundColor: '#81c147'}, 2000);

        // init time
        h = 0; m = 0; s = 0;
        $('.time').text('00:00:00');

        timer = setInterval(function() {
            s++;
            if (s == 60) {
                s = 0;
                m++;
            }
            if (m == 60) {
                m = 0;
                h++;
            }
            
            $('.time').text(`${h < 10 ? `0${h}` : h}:${m < 10 ? `0${m}`: m}:${s < 10 ? `0${s}` : s}`);
        }, 1000)
    }, 3000)

    // 전화 거는 중에 전화 끊기 버튼을 눌렀을 때
    $('.hangup-btn').click(function() {
        clearTimeout(calling);
        $('.layout').css('background-color', '#2b0000');
        $('.time').text('00:00:00');
        $('.timeChecker').css('-webkit-animation', 'blink 1.0s linear infinite');
    });
}

function hangup() {
    clearInterval(timer);
    var time = $('.time').text();
    $('.layout').animate({backgroundColor: '#2b0000'}, 2000);
    $('.time').text(time + " 통화 종료");
    $('.timeChecker').css('-webkit-animation', 'blink 1.0s linear infinite');
    $('.call-btn').show();
    $('.hangup-btn').hide();
    
    wating = setTimeout(function() {
        $('.time').text('00:00:00');
        $('.timeChecker').css('-webkit-animation', '')
        $('.timeChecker').hide();
        $('.info').css('padding-top', '60px');
        $('.layout').animate({backgroundColor: 'black'}, 2000);
    }, 7000)

    // 전화 끊은 상태에서 다시 전화 버튼을 눌렀을 때
    $('.call-btn').click(function() {
        clearTimeout(wating);
        $('.layout').css('background-color', 'black');
        $('.time').text('전화를 거는 중...');
        $('.timeChecker').css('-webkit-animation', '')
        $('.info').css('padding-top', '20px');
    });
}