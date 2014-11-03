var app = angular.module('ngPortfolio', ['ngRoute','ngAnimate']);

app.config(function ($routeProvider) {
  $routeProvider
    .when('/home', {
        templateUrl: 'script/templates/page-home.html',
        controller: 'homeController'
    })
    .when('/about', {
        templateUrl: 'script/templates/page-about.html',
        controller: 'aboutController'
    })
    .when('/portfolio', {
        templateUrl: 'script/templates/page-portfolio.html',
        controller: 'portfolioController'
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
 });

app.controller('headerCtrl',function($scope){
    $scope.bgStyle = {
        backgroundColor:'#eeeeee',
        color:'#9e9e9e'
    };
    $scope.header = {
        img:"images/schemr.jpg",
        imgAlt:"logo",
        title:"SCHEMR"
    };
});

app.controller('homeController', function($scope, $anchorScroll) {
    $scope.pageClass = 'page-home';
    $scope.bgStyle.backgroundColor = "#eeeeee";
    $scope.bgStyle.color = "#9e9e9e";
    $scope.header.img = 'images/schemr.jpg';
    $scope.header.title = "SCHEMR";
    var menuLayout = function(){
      var pageHeight = (window.innerHeight-140)/2;
      $(".ripplelink").css("height",pageHeight);
    };
    menuLayout();
});

app.controller('footerCtrl', ['$scope', '$location', '$anchorScroll',
    function ($scope, $location, $anchorScroll) {
      $scope.gotoTop = function() {
        // set the location.hash to the id of
        // the element you wish to scroll to.
        $location.hash('top');

        // call $anchorScroll()
        $anchorScroll();
      };
}]);

app.controller('aboutController', function($scope) {
    $scope.pageClass = 'page-sub';
    $scope.bgStyle.backgroundColor = "#00bcd4";
    $scope.bgStyle.color = "#fff";
    $scope.header.img = "images/left.png";
    $scope.header.imgAlt = "Go Back";
    $scope.header.title = "ABOUT ME";
});

app.controller('portfolioController', function($scope) {
    $scope.pageClass = 'page-sub';
    $scope.bgStyle.backgroundColor = "#8bc34a";
    $scope.bgStyle.color = "#fff";
    $scope.header.img = "images/left.png";
    $scope.header.imgAlt = "Go Back";
    $scope.header.title = "PORTFOLIO";
    var portfolioList = [
        { name:"테스트", 
          thumb:"neca.jpg",
          alt:"한국보건의료연구원",
          spec:"HTML5",
          work:"프론트",
          detail:"프론트앤드 개발",
          percent:"퍼블리싱, UX, 스크립트 100%" 
        }]
    $scope.portfolioList = portfolioList;
});

app.controller('blogController', function($scope) {
    $scope.pageClass = 'page-sub';
    $scope.bgStyle.backgroundColor = "#ffc107";
    $scope.bgStyle.color = "#fff";
    $scope.header.img = "images/left.png";
    $scope.header.imgAlt = "Go Back";
    $scope.header.title = "BLOG POST";
});

app.controller('timelineController', function($scope) {
    $scope.pageClass = 'page-sub';
    $scope.bgStyle.backgroundColor = "#ff9800";
    $scope.bgStyle.color = "#fff";
    $scope.header.img = "images/left.png";
    $scope.header.imgAlt = "Go Back";
    $scope.header.title = "TIMELINE";
});