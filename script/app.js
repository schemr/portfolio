var app = angular.module('ngPortfolio', [
  'ngRoute',
  'ngAnimate'
]);

app.config(function ($routeProvider) {
  $routeProvider
    .when('/', {
        templateUrl: 'script/portfolio/templates/page-home.html',
        controller: 'mainController'
    })
    .when('/about', {
        templateUrl: 'script/portfolio/templates/page-about.html',
        controller: 'aboutController'
    })
    .when('/contact', {
        templateUrl: 'page-contact.html',
        controller: 'contactController'
    })
   .otherwise({redirectTo: '/'});
 });

app.controller('mainController', function($scope) {
    $scope.pageClass = 'page-home';
});

app.controller('aboutController', function($scope) {
    $scope.pageClass = 'page-about';
});

app.controller('contactController', function($scope) {
    $scope.pageClass = 'page-contact';
});