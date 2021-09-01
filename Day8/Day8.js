let count = 0;
var prnStr = ""
var board = document.getElementsByClassName('boardText');

function saveStr() {
    prnStr = document.getElementById('prnText').value;
    board[0].innerHTML = "&nbsp";
    count = 0;
}

function showText() {
    if (count >= prnStr.length) {
        board[0].innerHTML = "&nbsp";
        count = 0;
    } else {
        board[0].innerHTML += prnStr[count];
        count++;
    }
}