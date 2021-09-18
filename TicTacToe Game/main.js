function ticTacToe() {

    var allButtons = document.querySelectorAll(".ticTacInputs > div > button");
    for (let i = 0; i < allButtons.length; i++) {
        console.log(allButtons[i].querySelectorAll("i"));
        allButtons[i].addEventListener("click", function () {
            var tictac = allButtons[i].querySelector("i");
            var player1 = document.getElementById("p1");
            var player2 = document.getElementById("p2");
            if (!document.getElementById("p1").classList.contains("active") && !document.getElementById("p2").classList.contains("active")) {
                setTimeout(function () {
                    document.getElementById("error").style.display = "flex";
                    document.getElementById("error").style.top = "inherit";
                    document.getElementById("error").style.bottom = "25px";
                },500);

                setTimeout(function () {
                    document.getElementById("error").style.display = "none";
                },10000);

                setTimeout(function () {
                    document.getElementById("ticTacBody").style.background = "#fff"
                },20);

                setTimeout(function () {
                    document.getElementById("ticTacBody").style.background = "#8d73dd"
                },80);

                setTimeout(function () {
                    document.getElementById("ticTacBody").style.background = "#fff"
                },140);

                setTimeout(function () {
                    document.getElementById("ticTacBody").style.background = "#8d73dd"
                },200);
            }
            if (document.getElementById("p1").classList.contains("active")) {
                tictac.style.display = "block";
                tictac.classList.add("fa-check");
                document.getElementById("p2").classList.add("active");
                document.getElementById("p1").classList.remove("active");

            } else if (document.getElementById("p2").classList.contains("active")) {
                tictac.style.display = "block";
                tictac.classList.add("fa-times");
                document.getElementById("p1").classList.add("active");
                document.getElementById("p2").classList.remove("active");
            }

            if (document.getElementById("zero").querySelector("i").classList.contains("fa-check") && document.getElementById("one").querySelector("i").classList.contains("fa-check") && document.getElementById("two").querySelector("i").classList.contains("fa-check")) {
                setTimeout(function () {
                    document.getElementById("playerOne").style.display = "block";
                },300);
                setTimeout(function () {
                    document.querySelector(".startGame").click();
                },2500);
            } else if (document.getElementById("three").querySelector("i").classList.contains("fa-check") && document.getElementById("four").querySelector("i").classList.contains("fa-check") && document.getElementById("five").querySelector("i").classList.contains("fa-check")) {
                setTimeout(function () {
                    document.getElementById("playerOne").style.display = "block";
                },300);
                setTimeout(function () {
                    document.querySelector(".startGame").click();
                },2500);
            } else if (document.getElementById("six").querySelector("i").classList.contains("fa-check") && document.getElementById("seven").querySelector("i").classList.contains("fa-check") && document.getElementById("eight").querySelector("i").classList.contains("fa-check")) {
                setTimeout(function () {
                    document.getElementById("playerOne").style.display = "block";
                },300);
                setTimeout(function () {
                    document.querySelector(".startGame").click();
                },2500);
            } else if (document.getElementById("zero").querySelector("i").classList.contains("fa-check") && document.getElementById("three").querySelector("i").classList.contains("fa-check") && document.getElementById("six").querySelector("i").classList.contains("fa-check")) {
                setTimeout(function () {
                    document.getElementById("playerOne").style.display = "block";
                },300);
                setTimeout(function () {
                    document.querySelector(".startGame").click();
                },2500);
            } else if (document.getElementById("one").querySelector("i").classList.contains("fa-check") && document.getElementById("four").querySelector("i").classList.contains("fa-check") && document.getElementById("seven").querySelector("i").classList.contains("fa-check")) {
                setTimeout(function () {
                    document.getElementById("playerOne").style.display = "block";
                },300);
                setTimeout(function () {
                    document.querySelector(".startGame").click();
                },2500);
            } else if (document.getElementById("two").querySelector("i").classList.contains("fa-check") && document.getElementById("five").querySelector("i").classList.contains("fa-check") && document.getElementById("eight").querySelector("i").classList.contains("fa-check")) {
                setTimeout(function () {
                    document.getElementById("playerOne").style.display = "block";
                },300);
                setTimeout(function () {
                    document.querySelector(".startGame").click();
                },2500);
            } else if (document.getElementById("zero").querySelector("i").classList.contains("fa-check") && document.getElementById("four").querySelector("i").classList.contains("fa-check") && document.getElementById("eight").querySelector("i").classList.contains("fa-check")) {
                setTimeout(function () {
                    document.getElementById("playerOne").style.display = "block";
                },300);
                setTimeout(function () {
                    document.querySelector(".startGame").click();
                },2500);
            } else if (document.getElementById("two").querySelector("i").classList.contains("fa-check") && document.getElementById("four").querySelector("i").classList.contains("fa-check") && document.getElementById("six").querySelector("i").classList.contains("fa-check")) {
                setTimeout(function () {
                    document.getElementById("playerOne").style.display = "block";
                },300);
                setTimeout(function () {
                    document.querySelector(".startGame").click();
                },2500);
            } else if (document.getElementById("zero").querySelector("i").classList.contains("fa-times") && document.getElementById("one").querySelector("i").classList.contains("fa-times") && document.getElementById("two").querySelector("i").classList.contains("fa-times")) {
                setTimeout(function () {
                    document.getElementById("playerTwo").style.display = "block";
                },300);
                setTimeout(function () {
                    document.querySelector(".startGame").click();
                },2500);
            } else if (document.getElementById("three").querySelector("i").classList.contains("fa-times") && document.getElementById("four").querySelector("i").classList.contains("fa-times") && document.getElementById("five").querySelector("i").classList.contains("fa-times")) {
                setTimeout(function () {
                    document.getElementById("playerTwo").style.display = "block";
                },300);
                setTimeout(function () {
                    document.querySelector(".startGame").click();
                },2500);
            } else if (document.getElementById("six").querySelector("i").classList.contains("fa-times") && document.getElementById("seven").querySelector("i").classList.contains("fa-times") && document.getElementById("eight").querySelector("i").classList.contains("fa-times")) {
                setTimeout(function () {
                    document.getElementById("playerTwo").style.display = "block";
                },300);
                setTimeout(function () {
                    document.querySelector(".startGame").click();
                },2500);
            } else if (document.getElementById("zero").querySelector("i").classList.contains("fa-times") && document.getElementById("three").querySelector("i").classList.contains("fa-times") && document.getElementById("six").querySelector("i").classList.contains("fa-times")) {
                setTimeout(function () {
                    document.getElementById("playerTwo").style.display = "block";
                },300);
                setTimeout(function () {
                    document.querySelector(".startGame").click();
                },2500);
            } else if (document.getElementById("one").querySelector("i").classList.contains("fa-times") && document.getElementById("four").querySelector("i").classList.contains("fa-times") && document.getElementById("seven").querySelector("i").classList.contains("fa-times")) {
                setTimeout(function () {
                    document.getElementById("playerTwo").style.display = "block";
                },300);
                setTimeout(function () {
                    document.querySelector(".startGame").click();
                },2500);
            } else if (document.getElementById("two").querySelector("i").classList.contains("fa-times") && document.getElementById("five").querySelector("i").classList.contains("fa-times") && document.getElementById("eight").querySelector("i").classList.contains("fa-times")) {
                setTimeout(function () {
                    document.getElementById("playerTwo").style.display = "block";
                },300);
                setTimeout(function () {
                    document.querySelector(".startGame").click();
                },2500);
            } else if (document.getElementById("zero").querySelector("i").classList.contains("fa-times") && document.getElementById("four").querySelector("i").classList.contains("fa-times") && document.getElementById("eight").querySelector("i").classList.contains("fa-times")) {
                setTimeout(function () {
                    document.getElementById("playerTwo").style.display = "block";
                },300);
                setTimeout(function () {
                    document.querySelector(".startGame").click();
                },2500);
            } else if (document.getElementById("two").querySelector("i").classList.contains("fa-times") && document.getElementById("four").querySelector("i").classList.contains("fa-times") && document.getElementById("six").querySelector("i").classList.contains("fa-times")) {
                setTimeout(function () {
                    document.getElementById("playerTwo").style.display = "block";
                },300);
                setTimeout(function () {
                    document.querySelector(".startGame").click();
                },2500);
            }

            checkTie();
            function checkTie() {
                var checkRow1 = document.getElementById("zero").querySelector("i").classList.contains("fa-check") && document.getElementById("one").querySelector("i").classList.contains("fa-check") && document.getElementById("two").querySelector("i").classList.contains("fa-check");
                var checkRow2 = document.getElementById("three").querySelector("i").classList.contains("fa-check") && document.getElementById("four").querySelector("i").classList.contains("fa-check") && document.getElementById("five").querySelector("i").classList.contains("fa-check");
                var checkRow3 = document.getElementById("six").querySelector("i").classList.contains("fa-check") && document.getElementById("seven").querySelector("i").classList.contains("fa-check") && document.getElementById("eight").querySelector("i").classList.contains("fa-check")
                var checkCross1 = document.getElementById("zero").querySelector("i").classList.contains("fa-check") && document.getElementById("four").querySelector("i").classList.contains("fa-check") && document.getElementById("eight").querySelector("i").classList.contains("fa-check")
                var checkCross2 = document.getElementById("two").querySelector("i").classList.contains("fa-check") && document.getElementById("four").querySelector("i").classList.contains("fa-check") && document.getElementById("six").querySelector("i").classList.contains("fa-check")
                var checkCol1 = document.getElementById("zero").querySelector("i").classList.contains("fa-check") && document.getElementById("three").querySelector("i").classList.contains("fa-check") && document.getElementById("six").querySelector("i").classList.contains("fa-check");
                var checkCol2 = document.getElementById("one").querySelector("i").classList.contains("fa-check") && document.getElementById("four").querySelector("i").classList.contains("fa-check") && document.getElementById("seven").querySelector("i").classList.contains("fa-check");
                var checkCol3 = document.getElementById("two").querySelector("i").classList.contains("fa-check") && document.getElementById("five").querySelector("i").classList.contains("fa-check") && document.getElementById("eight").querySelector("i").classList.contains("fa-check");

                var timesRow1 = document.getElementById("zero").querySelector("i").classList.contains("fa-times") && document.getElementById("one").querySelector("i").classList.contains("fa-times") && document.getElementById("two").querySelector("i").classList.contains("fa-times");
                var timesRow2 = document.getElementById("three").querySelector("i").classList.contains("fa-times") && document.getElementById("four").querySelector("i").classList.contains("fa-times") && document.getElementById("five").querySelector("i").classList.contains("fa-times");
                var timesRow3 = document.getElementById("six").querySelector("i").classList.contains("fa-times") && document.getElementById("seven").querySelector("i").classList.contains("fa-times") && document.getElementById("eight").querySelector("i").classList.contains("fa-times")
                var timesCross1 = document.getElementById("zero").querySelector("i").classList.contains("fa-times") && document.getElementById("four").querySelector("i").classList.contains("fa-times") && document.getElementById("eight").querySelector("i").classList.contains("fa-times")
                var timesCross2 = document.getElementById("two").querySelector("i").classList.contains("fa-times") && document.getElementById("four").querySelector("i").classList.contains("fa-times") && document.getElementById("six").querySelector("i").classList.contains("fa-times")
                var timesCol1 = document.getElementById("zero").querySelector("i").classList.contains("fa-times") && document.getElementById("three").querySelector("i").classList.contains("fa-times") && document.getElementById("six").querySelector("i").classList.contains("fa-times");
                var timesCol2 = document.getElementById("one").querySelector("i").classList.contains("fa-times") && document.getElementById("four").querySelector("i").classList.contains("fa-times") && document.getElementById("seven").querySelector("i").classList.contains("fa-times");
                var timesCol3 = document.getElementById("two").querySelector("i").classList.contains("fa-times") && document.getElementById("five").querySelector("i").classList.contains("fa-times") && document.getElementById("eight").querySelector("i").classList.contains("fa-times");

                var zeroCheck = document.getElementById("zero").querySelector("i").classList.contains("fa-check");
                var zeroTimes = document.getElementById("zero").querySelector("i").classList.contains("fa-times");

                var oneCheck = document.getElementById("one").querySelector("i").classList.contains("fa-check");
                var oneTimes = document.getElementById("one").querySelector("i").classList.contains("fa-times");

                var twoCheck = document.getElementById("two").querySelector("i").classList.contains("fa-check");
                var twoTimes = document.getElementById("two").querySelector("i").classList.contains("fa-times");

                var threeCheck = document.getElementById("three").querySelector("i").classList.contains("fa-check");
                var threeTimes = document.getElementById("three").querySelector("i").classList.contains("fa-times");

                var fourCheck = document.getElementById("four").querySelector("i").classList.contains("fa-check");
                var fourTimes = document.getElementById("four").querySelector("i").classList.contains("fa-times");

                var fiveCheck = document.getElementById("five").querySelector("i").classList.contains("fa-check");
                var fiveTimes = document.getElementById("five").querySelector("i").classList.contains("fa-times");

                var sixCheck = document.getElementById("six").querySelector("i").classList.contains("fa-check");
                var sixTimes = document.getElementById("six").querySelector("i").classList.contains("fa-times");

                var sevenCheck = document.getElementById("seven").querySelector("i").classList.contains("fa-check");
                var sevenTimes = document.getElementById("seven").querySelector("i").classList.contains("fa-times");

                var eightCheck = document.getElementById("eight").querySelector("i").classList.contains("fa-check");
                var eightTimes = document.getElementById("eight").querySelector("i").classList.contains("fa-times");


                if ((zeroCheck || zeroTimes) && (oneCheck || oneTimes) && (twoCheck || twoTimes) && (threeCheck || threeTimes) && (fourCheck || fourTimes) && (fiveCheck || fiveTimes) && (sixCheck || sixTimes) && (sevenCheck || sevenTimes) && (eightCheck || eightTimes)) {
                    if ((!checkRow1 && !checkRow2 && !checkRow3 && !checkCross1 && !checkCross2 && !checkCol1 && !checkCol2 && !checkCol3 && !timesRow1 && !timesRow2 && !timesRow3 && !timesCross1 && !timesCross2 && !timesCol1 && !timesCol2 && !timesCol3)) {
                        alert("Game has been Tie");
                    }
                }
            }


        })
    }



    var p1Btn = document.getElementById("p1").addEventListener('click', function (e) {
        document.getElementById("p1").classList.add("active");
        document.getElementById("p2").classList.remove("active");
    });

    var p2Btn = document.getElementById("p2").addEventListener("click", function (e) {
        document.getElementById("p2").classList.add("active");
        document.getElementById("p1").classList.remove("active");
    })

}
ticTacToe();
