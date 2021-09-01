$('.btn').on('click', answer);
$('.input_layout').on('keydown', function(key){
    if (key.keyCode == 13) {    // keyCode 13번은 엔터키
        answer();
    }
});
$('.stopBtn').on('click', stop);

var answers = {
    '안녕': "반갑다~~옹~",
    '심심해': "코딩 해라옹~",
    '뭐해': "창 밖 구경한다옹~",
    '공부': "힘내라옹 다 잘될거라옹~!",
    '불': "귀찮다옹!",
    '눈': "눈이 펑펑 온다옹~♩ ♪",
    '따라': "알겠다냥냥 냐냐냐~~옹!"
}

// checker
let lightOffCount = 0;
let lightOnCount = 0;
let follow = false;

function answer() {
    var inputText = $('.input_layout').val();
    console.log(inputText);

    if (follow == true) {
        if (inputText == "그만해! 냥!") {
            follow = false;
            $('.cat2').hide();
            $('.cat1').show();
            $('.cat3').hide();
            $('.cat_says').text("알겠다옹...");
        } else {
            $('.cat_says').text(inputText + " 냥!");
        }
    } else {
        for (i in answers) {
            if (inputText.includes(i)) {
                $('.jokeFire').hide();
                $('.cat_says').text(answers[i]);
            
                switch (i) {
                    case '공부':
                        alert("주의! 지금 공부하지 않으면 10년 뒤가 힘듭니다.");
                        break;
                    case '불':
                        if (lightOffCount == 0) {
                            // 말 안듣는 고양이
                            lightOffCount++;
                        } else if (lightOffCount == 1) {
                            lightOffCount++;
                            $('.cat_says').text("바쁜 몸이다~옹!!");
                        } else {
                            lightOffCount = 0;
                            $('.cat1').hide();
                            $('.cat3').hide();
                            $('.cat2').show();
                            $('.cat_says_form').hide();
                            $('.cat_says').text("♩ ♪ ♫ ♬");
                            $('.cat_says').css('color', 'white');
                            $('.cat_says').css('-webkit-animation', 'blink 1.0s linear infinite');
                            $('.layout').animate({backgroundColor: 'black'}, 2000);
                            $('.cat').css('margin-top', '100px');
                            $('.stopBtn').text("불 켜줘");
                            $('.stopBtn').show();
                        }
                        break;
                    case '눈':
                        $('.cat1').hide();
                        $('.cat2').hide();
                        $('.cat3').show();
                        $('.cat_says_form').hide();
                        $('.layout').animate({backgroundColor: '#6b92b9'}, 2000);
                        $('.layout').css('background-image', "url('./img/snow.png'), url('./img/snow3.png'), url('./img/snow2.png')");
                        $('.layout').css('-webkit-animation', 'snow 20s linear infinite');
                        $('.layout').css('-moz-animation', 'snow 20s linear infinite');
                        $('.layout').css('-ms-animation', 'snow 20s linear infinite');
                        $('.layout').css('animation', 'snow 20s linear infinite');
                        $('.cat').css('margin-top', '100px');
                        $('.stopBtn').text("눈 멈춰!");
                        $('.stopBtn').show();
                        break;
                    case '따라':
                        if (follow == false) {
                            follow = true;
                            $('.cat1').hide();
                            $('.cat3').hide();
                            $('.cat2').show();
                        }
                        break;
                }
                break;
            }
            $('.cat_says').text("무슨 말인지 모르겠다냥~!");
        }
    }
    $('.input_layout').val('');
}

function stop() {
    if ($('.stopBtn').val() == "불 켜줘" && lightOnCount == 0) {
        $('.jokeFire').show();
    } else {
        $('.jokeFire').hide();
        $('.cat_says').text("냐옹~");
        $('.cat1').show();
        $('.cat2').hide();
        $('.cat3').hide();
        $('.cat_says_form').show();
        $('.cat_says').css('color', 'black');
        $('.cat_says').css('-webkit-animation', '');
        $('.layout').css('background-image', '');
        $('.layout').css('-moz-animation', '');
        $('.layout').css('-ms-animation', '');
        $('.layout').css('animation', '');
        $('.layout').css('background-color', 'white');
        $('.cat').css('margin-top', '');
        $('.stopBtn').hide();
        lightOnCount = 0;
    }
}