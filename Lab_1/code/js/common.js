var app = angular.module('NutritionReport', []);

app.controller('report', function ($scope, $http) {

    /*Variables declaration*/
    $scope.servingInGrams = 0;
    $scope.calories = 0;
    $scope.audioText = "";

    /*
    * This method will call Nutritionix API and get the information about the food item.
    * After getting Nutrition information the response will format and update the audio source and call the watson API Text to Speak.
    */
    $scope.getNutritionInfo = function () {

        /*Calling Nutritionix API with food item name*/
        $http.get('https://api.nutritionix.com/v1_1/search/' + $scope.foodname + '?results=0:1&fields=*&appId=716e3914&appKey=7d1313180863210ce537edcf493d9d4f').success(function (response) {
            console.log(response);
            var x = document.getElementById("playAudio");
            $scope.servingInGrams = response.hits[0].fields.nf_serving_weight_grams;
            $scope.calories = response.hits[0].fields.nf_calories;

            /*Formatting the response.*/
            $scope.audioText = "If you serving " + $scope.foodname + " in " + $scope.servingInGrams + " grams then you will get " + $scope.calories + "calories";

            /*Updating the source of the audio.*/
            x.src = "https://stream.watsonplatform.net/text-to-speech/api/v1/synthesize?username=3f136646-6fdf-4434-aa8d-1664c90b9c37&password=lzZtYm7qpJBA&text=" + $scope.audioText;

            /*Playing the audio*/
            x.play();
        })
    };
});