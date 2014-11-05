var app = angular.module("ngPortfolio",['ngRoute','ngResource','ngAnimate','infinite-scroll','ngSanitize']);
/*
angular.module("ngPortfolio",['ngPortfolio.controllers','ngPortfolio.services']);
angular.module("ngPortfolio.controllers",[]);
angular.module("ngPortfolio.services",['ngResource']);
*/

app.config(['$routeProvider', function ($routeProvider) {
  $routeProvider
    .when('/home', {
        templateUrl: 'script/templates/page-home.html',
        controller: 'homeController'
    })
    .when('/about', {
        templateUrl: 'script/templates/page-about.html',
        controller: 'aboutController'
    })
    .when('/portfolios', {
        templateUrl: 'script/templates/page-portfolio.html',
        controller: 'portfolioController',
        resolve:{
            portfolios : function(Portfolio){
                return Portfolio.query(function(){
                    $('.loading_portfolio').fadeOut("slow");
                    $('.panel').fadeIn("slow");
                });
            }
        }
    })
    .when('/new-portfolio', {
        templateUrl: 'script/templates/page-addPortfolio.html',
        controller: 'addPortfolio'  
    })
    .when('/blog', {
        templateUrl: 'script/templates/page-blog.html',
        controller: 'blogController'
    })
    .when('/timeline', {
        templateUrl: 'script/templates/page-timeline.html',
        controller: 'timelineController'
    })
   .otherwise({redirectTo: '/home'});
}]);

