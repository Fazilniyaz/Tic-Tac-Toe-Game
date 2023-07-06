var box1 = $("#box1");
var box2 = $("#box2");
var box3 = $("#box3");
var box4 = $("#box4");
var box5 = $("#box5");
var box6 = $("#box6");
var box7 = $("#box7");
var box8 = $("#box8");
var box9 = $("#box9");

var count = 0;
var sign = "X"
var res = ""
var point = 0
var point2 = 0

function BtnClicked(id) {


    if (count == 8) {
        alert("Match tied")

        for (var i = 1; i <= 9; i++) {
            $("#box" + i).text("")
        }
        sign = "X"
        count = 0
        return ""
    }

    if ($("#" + id).text() == "") {
        count++
        // console.log(count)

        if (sign == "X") {
            $("#" + id).text(sign)
            var result = checkstatus(sign)
            if (result == true) {
                console.log(sign)
                setTimeout(function () {
                    sign = "X"
                    res = "Player 1"
                    alert(res + " wins, Game over")
                    count = 0
                    point++
                    $("#ans1").text(point)
                }, 200)
                for (var i = 1; i <= 9; i++) {
                    $("#box" + i).text("")
                }
            }
            sign = "O"
        }
        else {
            $("#" + id).text(sign)
            var result = checkstatus(sign)
            if (result == true) {
                console.log(sign)
                setTimeout(function () {
                    sign = "X"
                    res = "player 2"
                    alert(res + " wins,Game over")
                    count = 0
                    point2++
                    $("#ans2").text(point2)
                }, 200)
                for (var i = 1; i <= 9; i++) {
                    $("#box" + i).text("")
                }
            }

            sign = "X"


        }

    }
    console.log(count)
}

function checkstatus(sign) {
    if ($("#box1").text() == sign && $("#box2").text() == sign && $("#box3").text() == sign ||
        $("#box4").text() == sign && $("#box5").text() == sign && $("#box6").text() == sign ||
        $("#box7").text() == sign && $("#box8").text() == sign && $("#box9").text() == sign ||
        $("#box1").text() == sign && $("#box4").text() == sign && $("#box7").text() == sign ||
        $("#box2").text() == sign && $("#box5").text() == sign && $("#box8").text() == sign ||
        $("#box3").text() == sign && $("#box6").text() == sign && $("#box9").text() == sign ||
        $("#box1").text() == sign && $("#box5").text() == sign && $("#box9").text() == sign ||
        $("#box3").text() == sign && $("#box5").text() == sign && $("#box7").text() == sign) {
        return true
    }
    // if(count == 9){
    //     alert("Match tied")
    //     for (var i = 1; i <= 9; i++) {
    //         $("#box" + i).text("")
    //     }
    //     count = 0
    //     sign = "X"
    // }


}

