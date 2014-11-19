var app = angular.module('ccb', ['ngRoute']);

app.config(function($routeProvider) {
  $routeProvider
  .when("/", {
    controller: 'MainController',
    templateUrl: '/templates/main.html'
  });
});

app.controller("MainController", function($scope) {

});
