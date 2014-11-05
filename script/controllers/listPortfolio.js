app.controller('portfolioController', ['$scope','portfolios','Portfolio','$location', function ($scope,portfolios,Portfolio,$location) {
	$scope.portfolioList = portfolios;

	$scope.newPortfolio = function () {
    	$location.url("/new-portfolio");
   	}
 }]);