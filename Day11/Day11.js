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
    '불 좀 꺼줄래?': "♩ ♪ ♫ ♬"
}

function answer() {
    var inputText = $('.input_layout').val();
    console.log(inputText);

    for (i in answers) {
        if (inputText.includes(i)) {
            if (i == '공부') {
                $('.cat_says').text(answers[i]);
                alert("주의! 지금 공부하지 않으면 10년 뒤가 힘듭니다.")
            } else if (i == '불 좀 꺼줄래?') {
                $('.cat_says').text(answers[i]);
                $('.cat1').hide();
                $('.cat2').show();
                $('.cat_says_form').hide();
                $('.cat_says').css('color', 'white');
                $('.cat_says').css('-webkit-animation', 'blink 1.0s linear infinite');
                $('.layout').animate({backgroundColor: 'black'}, 2000);
                $('.cat').css('margin-top', '100px');
                $('.stopBtn').show();
            } else {
                $('.cat_says').text(answers[i]);
            }
            break;
        }
    }

    $('.input_layout').val('');
}

function stop() {
    $('.cat_says').text("냐옹~");
    $('.cat1').show();
    $('.cat2').hide();
    $('.cat_says_form').show();
    $('.cat_says').css('color', 'black');
    $('.cat_says').css('-webkit-animation', '');
    $('.layout').css('background-color', 'white');
    $('.cat').css('margin-top', '');
    $('.stopBtn').hide();
}