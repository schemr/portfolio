app.controller('addPortfolio', ['$scope','Portfolio','$location', function ($scope,Portfolio,$location) {
  // 포트폴리오 추가 함수
  $scope.save = function(portfolio) {
   var newPortfolio = new Portfolio();

   angular.extend(newPortfolio, portfolio);
   
   newPortfolio.$save(function () {
     $location.url("/portfolio");
   });
  };
 }]);