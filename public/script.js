var test = angular.module("test", []);
test.controller("TestController", ['$http', '$scope', function($http, $scope) {
  $scope.names = ["Todd", "Richard"];

  $scope.addName = function() {
    $scope.names.push($scope.Ryan);
    // $.ajax("url....").then(...
    // $http.get("url").then(...
  }
}]);

angular.module("main", ["test"]);
