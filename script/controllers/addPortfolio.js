app.controller('addPortfolio', ['$scope','Portfolio','$location', function ($scope,Portfolio,$location) {
  $scope.save = function(portfolio) {
   var newPortfolio = new Portfolio();

   angular.extend(newPortfolio, portfolio);
   
   newPortfolio.$save(function () {
     $location.url("/portfolio");
   });
  };
 }]);