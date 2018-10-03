var app = angular.module('youTubeApp', []);
app.controller('youTubeCtrl', function ($scope,$http) {
    $scope.searchTerm = "";
    $scope.results = [];
    $scope.isVideo = false;
    $scope.search = function () {
        console.log($scope.searchTerm);
        $scope.isVideo = false;
        $http({
            method: 'GET',
            url: 'https://www.googleapis.com/youtube/v3/search',
            params:{'maxResults': '25',
                'part': 'snippet',
                'q': $scope.searchTerm,
                'type': '',
                'key':'AIzaSyBZ3yV5xBi2yDA2yPVwaH_we8ECSZI_2Lc'
            }
        }).then(function successCallback(response) {
           console.log(response.data.items);
           $scope.results = response.data.items;
        }, function errorCallback(response) {
            console.log(response);
        });
    }
    
    $scope.play = function (videoId) {
        $scope.isVideo = true;
        var d=document.getElementById("youtubePlay");
        d.src = "https://www.youtube.com/embed/"+videoId+"?enablejsapi=1"
    }
});