var app = angular.module('tictactoeApp', []);
app.controller('tictactoeCtrl', function ($scope) {
    //Declaring the variables.
    $scope.huPlayer = "O";
    $scope.aiPlayer = "X";
    $scope.board = [0, 1, 2, 3, 4, 5, 6, 7, 8];
    $scope.wins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 4, 8],
        [2, 4, 6],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
    ];
    $scope.boardCopy;
    $scope.winPlayer;
    $scope.huPlayerCheck;
    $scope.aiPlayerCheck;

    //Initializing the variables.
    $scope.init = function(){
        $scope.boardCopy = [];
        $scope.winPlayer = "";
        $scope.huPlayerCheck = [];
        $scope.aiPlayerCheck = [];
    }

    /*
    * This method will call when the user clicks on div.
    * In this method first we are marking the user clicked div and then checking whether user win or draw.
    * Then I called AI to play.
    */
    $scope.checkbox = function (boxNumb, event) {
        $scope.mark($scope.huPlayer, boxNumb, event.target);
        if (!$scope.win()) {
            if (!$scope.draw()) {
                $scope.aiPlay();
            }
        }
    }

    /*
    * This method will call when the user clicks on reset button.
    * In this method we are clearing the marks and calling the init method to reinitialize the variables.
    */
    $scope.reset = function () {
        var boxes = document.getElementsByClassName("box-height");
        for (var i = 0; i < boxes.length; i++) {
            boxes[i].innerHTML = "";
        }
        $scope.init();
    }

    /*
    * This method will mark the div.
    * After that it will push the number to boardcopy array and respective player array.
    */
    $scope.mark = function (player, numb, ele) {
        ele.innerHTML = player;
        $scope.boardCopy.push(numb);
        if (player === $scope.huPlayer) {
            ele.style.color = "blue";
            $scope.huPlayerCheck.push(numb);
        } else {
            ele.style.color = "red";
            $scope.aiPlayerCheck.push(numb);
        }

    }

    /*
    * In this method, we are getting the remaining position in the board and then get the random number from it.
    * After that we are marking that number div.
    * Then we are checking the win or draw.
    */
    $scope.aiPlay = function () {
        var remainingPos = $scope.board.filter(function (el) {
            return ($scope.boardCopy.indexOf(el) < 0)
        });
        var index = remainingPos[Math.floor(Math.random() * remainingPos.length)];
        $scope.mark($scope.aiPlayer, index, document.getElementsByClassName("box-height")[$scope.board.indexOf(index)]);
        if (!$scope.win()) {
            $scope.draw()
        }
        console.log(index);
    }

    /*
    * In this method we are checking weather the elements in boardcopy and board are equal or not.
    * if both are equal then the match is draw.
    */
    $scope.draw = function () {
        if ($scope.boardCopy.length === $scope.board.length) {
            $scope.winPlayer = "Draw";
            document.getElementById("lblWon").style.color = "green";
            return true;
        }
        return false;
    }

    /*
    * In this method we looping the wins list and checking the huPlayerCheck array and aiPLayerCheck array match.
    * if win match found then we are making the won to true and set the winplayer. else we are returning false.
    */
    $scope.win = function () {
        let won = false;
        $scope.wins.forEach(function (el) {
            let hucount = 0;
            let aicount = 0;
            el.forEach(function (e) {
                if ($scope.huPlayerCheck.indexOf(e) > -1) {
                    hucount++;
                } else if ($scope.aiPlayerCheck.indexOf(e) > -1) {
                    aicount++;
                }
            });
            if (hucount === 3 || aicount === 3) {
                if (hucount === 3) {
                    $scope.winPlayer = "Human won";
                    document.getElementById("lblWon").style.color = "blue";
                } else {
                    $scope.winPlayer = "AI won";
                    document.getElementById("lblWon").style.color = "red";
                }
                won = true;
            }
        });
        return won;
    }

    /*
    * Calling the init method to initialize the variables.
    */
    $scope.init();
});