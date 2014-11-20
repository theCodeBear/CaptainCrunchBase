var app = angular.module('ccb', ['ngRoute']);

app.config(function($routeProvider) {
  $routeProvider
  .when("/", {
    controller: 'MainController',
    templateUrl: '/templates/main.html'
  })
    .when("/contact", {
    controller: 'ContactController',
    templateUrl: '/templates/contact.html'
  });
});

app.controller("MainController", function($scope) {

});
app.controller("ContactController", function($scope) {

});
