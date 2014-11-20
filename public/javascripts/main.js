var app = angular.module('ccb', ['ngRoute']);

app.config(function($routeProvider) {
  $routeProvider
  .when("/", {
    controller: 'MainController',
    templateUrl: '/templates/main.html'
  });
});

app.controller("MainController", function($http, $scope) {
  $scope.searchCCB = function() {
    $http.get("/apiv1/organizations?query=" + $scope.searchQuery).then(function(response) {
      $scope.orgs = response.data;
    });
  }
});
