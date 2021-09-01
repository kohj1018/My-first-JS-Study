$('.btn').on('click', answer);
$('.input_layout').on('keydown', function(key){
    if (key.keyCode == 13) {    // keyCode 13번은 엔터키
        answer();
    }
});
$('.stopBtn').on('click', stop);

var app = document.getElementById('notice');
var typewriter = new Typewriter(app, {
    loop: false
});

var json = 
[
    {
        "question" : "안녕",
        "answer" : "반갑다~~옹~"
    },
    {
        "question" : "나이",
        "answer" : "비밀이다 냥!"
    },
    {
        "question" : "이름",
        "answer" : "코묘~~~!"
    },
    {
        "question" : "안녕",
        "answer" : "반갑다~~옹~"
    },
    {
        "question" : "심심",
        "answer" : "코딩 해라옹~"
    },
    {
        "question" : "뭐해",
        "answer" : "창 밖 구경한다옹~"
    },
    {
        "question" : "공부",
        "answer" : "힘내라옹 다 잘될거다 냥~!"
    },
    {
        "question" : "불",
        "answer" : "귀찮다 냥!"
    },
    {
        "question" : "눈",
        "answer" : "눈이 펑펑 온다옹~♩♪"
    },
    {
        "question" : "따라",
        "answer" : "알겠다냥냥 냐냐냐~~옹!"
    }
]

// checker
let lightOffCount = 0;
let lightOnCount = 0;
let follow = false;
let isCommand = false;

// new conversation
var newQuestion = "";   // 사용자의 질문을 임시 저장할 변수
var newAnswer = "";     // 사용자의 대답을 임시 저장할 변수
var learnMode = 0;      // 0 : 말을 배우지 않는 상황, 1 : 모르는 말을 들은 상황, 2 : 말을 배우는 상황


function answer() {
    var inputText = $('.input_layout').val();
    console.log(inputText);

    // 말 배우기 모드인지 판단
    if (learnMode == 1) {
        if (inputText == "네") {
            $('.cat_says').text("대답을 입력해주세요!");
            learnMode = 2;
        } else {
            $('.cat_says').text("담에 배우지옹~!");
            learnMode = 0;
        }
        $('.input_layout').val('');
        return;
    }

    // 말을 배우는 중
    if (learnMode == 2) {
        newAnswer = inputText;
        push_json();
        $('.input_layout').val('');
        return;
    }


    // 따라하기 모드인지 아닌지 판단하는 분기문
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
        for (let i = 0; i < json.length; i++) {
            if (inputText.includes(json[i].question)) {
                isCommand = true;
                $('.jokeFire').hide();
                $('.cat_says').text(json[i].answer);
            
                switch (json[i].question) {
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
        }

        // 미리 주어진 명령어인지를 판단하는 분기문
        if (isCommand == false) {
            $('.cat_says').text("무슨 말인지 모르겠다냥~!");
            typewriter.typeString("코묘가 알아듣지 못한 것 같다.")
                .pauseFor(100)
                .deleteAll()
                .start();
            setTimeout(function() {
                $('.cat_says').text("말을 가르쳐 주실래요?(네 or 아니요)");
            }, 2000);
            newQuestion = inputText;
            learnMode = 1;
        } else {
            isCommand = false;
            typewriter.stop();
        }
    }
    $('.input_layout').val('');
}

function push_json() {
    json.push({question : newQuestion, answer : newAnswer});
    $('.cat_says').text("말을 배웠다 냥!");
    learnMode = 0;
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