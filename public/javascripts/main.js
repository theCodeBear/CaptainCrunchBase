var app = angular.module('ccb', ['ngRoute']);
var loadedOrgs = [];

app.config(function($routeProvider) {
  $routeProvider
  .when("/", {
    controller: 'MainController',
    templateUrl: '/templates/main.html'
  });
});

app.controller("MainController", function($http, $scope) {
  $scope.collapse = function(clickedOrg) {
    $scope.dataLoaded = false;
    // get the clickedOrg info, and display it in the details div
    // use /apiv1/organization/{the permalink of org, which is in clickedOrg.path

    // If company, when clicked on from list, is already in database then load
    // from database rather than making another call to the CrunchBase API

    var prevClicked = -1;
    loadedOrgs.forEach(function(e,i) {
      if (clickedOrg.name == e.name) prevClicked = i;
    });
    // if company has already been clicked on during this viewing of the app
    // then call the company info from the loadedOrgs variable rather than making
    // another get request to the CrunchBase API.
    if (prevClicked > -1) {
      $scope.details = loadedOrgs[prevClicked];
      $scope.dataLoaded = true;
      console.log($scope.details);
    } else {      // make call to CrunchBase API through our API
      $http.get("/apiv1/" + clickedOrg.path).then(function(response) {
        $scope.details = response.data.data.properties;
        $scope.dataLoaded = true;
        loadedOrgs.push($scope.details);
        console.log($scope.details);
      });
    }
    $scope.orgs.forEach(function(e) {
      e.visible = (e === clickedOrg);
    });
  }

  function dataLoaded() {

  }

  $scope.searchCCB = function() {
    $http.get("/apiv1/organizations?query=" + $scope.searchQuery).then(function(response) {
      $scope.orgs = response.data;
    });
  }

  $scope.$watch("searchQuery", function() {
    $scope.orgs = [];
  });
});
