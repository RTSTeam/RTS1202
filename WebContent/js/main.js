var app = angular.module('ui.bootstrap.demo', ['ui.bootstrap', 'mgcrea.ngStrap']);
app.controller('SearchCtrl', function ($scope, $window) {
  $scope.tabs = [
    { title:'Dynamic Title 1', content:'Dynamic content 1' },
    { title:'Dynamic Title 2', content:'Dynamic content 2', disabled: true }
  ];
  
  $scope.departureStationArray = [
	"Boston, MA - South Station (BOS)", 
	"Framingham, MA (FRA)",
	"Providence, RI (PVD)",
	"Westwood - Route 128, MA", 
	"Worcester, MA (WOR)"
  ];
  
  $scope.arrivalStationArray = [
	"Boston, MA - South Station (BOS)", 
	"Framingham, MA (FRA)",
	"Providence, RI (PVD)",
	"Westwood - Route 128, MA", 
	"Worcester, MA (WOR)"
  ];
  
  // Ticket Number Limitation
  $scope.adultsValue = 1;
  $scope.seniorsValue = 0;
  $scope.childrenValue = 0;
  
  // Radio button
  $scope.tripType = 'One Way';
});

  
