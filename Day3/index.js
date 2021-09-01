function changeText(i){
    var h2 = document.getElementsByTagName('h2')

    if (i == 1) {
        h2[0].innerHTML = "모처럼이니"
    } else if (i == 2) {
        h2[1].innerHTML = "각잡고 열심히 하면"
    } else {
        h2[2].innerHTML = "코린이 탈출이다."
    }
}