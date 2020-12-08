
function genRandomNumber() {
    var randomNumber = Math.random();
    randomNumber = randomNumber * 6;
    randomNumber = Math.floor(randomNumber) + 1
    return randomNumber;
}



$(".play").click(function () {

    var randomNumber1 = genRandomNumber();
    var randomNumber2 = genRandomNumber();

    $(".img1").attr("src", "images/dice" + randomNumber1 + ".png");
    $(".img2").attr("src", "images/dice" + randomNumber2 + ".png");

    if (randomNumber2 < randomNumber1) {
        $("h1").text("Player 1 Wins! 🏆");
    } else if (randomNumber2 > randomNumber1) {
        $("h1").text("Player 2 Wins! 🏆");
    } else {
        $("h1").text("Draw! ⚔");
        
    }

});