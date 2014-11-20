var app = angular.module('ccb', ['ngRoute']);

app.config(function($routeProvider) {
  $routeProvider
  .when("/", {
    controller: 'MainController',
    templateUrl: '/templates/main.html'
  });
});

app.controller("MainController", function($http, $scope) {
  $scope.collapse = function(clickedOrg) {
    // get the clickedOrg info, and display it in the details div
    // use /apiv1/organization/{the permalink of org, which is in clickedOrg.path
    $scope.orgs.forEach(function(e) {
      e.visible = (e === clickedOrg);
    });
  }

  $scope.searchCCB = function() {
    $http.get("/apiv1/organizations?query=" + $scope.searchQuery).then(function(response) {
      $scope.orgs = response.data;
    });
  }

  $scope.$watch("searchQuery", function() {
    // $scope.orgs = [];
  });
});
