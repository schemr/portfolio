app.controller('headerCtrl', function($scope){
    $scope.bgStyle = {
        backgroundColor:'#eeeeee',
        color:'#9e9e9e'
    };
    $scope.header = {
        img:'<img src="images/schemr.jpg" alt="logo">',
        title:"SCHEMR"
    };
});

app.controller('homeController', function($scope) {
    $scope.pageClass = 'page-home';
    $scope.bgStyle.backgroundColor = "#eeeeee";
    $scope.bgStyle.color = "#9e9e9e";
    $scope.header.img = '<img src="images/schemr.jpg" alt="logo">';
    $scope.header.title = "SCHEMR";
    var menuLayout = function(){
      var pageHeight = (window.innerHeight-140)/2;
      $(".ripplelink").css("height",pageHeight);
    };
    menuLayout();
});

app.controller('aboutController', function($scope) {
    $scope.pageClass = 'page-sub';
    $scope.bgStyle.backgroundColor = "#00bcd4";
    $scope.bgStyle.color = "#fff";
    $scope.header.img = '<img src="images/left.png" alt="Go back">';
    $scope.header.title = "ABOUT ME";
});

app.controller('portfolioController', ['$scope','portfolios','Portfolio','$location', function($scope,portfolios,Portfolio,$location) {
    $scope.pageClass = 'page-sub';
    $scope.bgStyle.backgroundColor = "#8bc34a";
    $scope.bgStyle.color = "#fff";
    $scope.header.img = '<img src="images/left.png" alt="Go back">';
    $scope.header.title = "PORTFOLIO";
    $scope.portfolioList = portfolios;

    $scope.newPortfolio = function () {
        $location.url("/new-portfolio");
    }
    
}]);

app.controller('blogController', function($scope, Tumblr) {
    $scope.pageClass = 'page-sub';
    $scope.bgStyle.backgroundColor = "#ffc107";
    $scope.bgStyle.color = "#fff";
    $scope.header.img = '<img src="images/left.png" alt="Go back">';
    $scope.header.title = "BLOG POST";
    $scope.tumblr = new Tumblr();
});

app.controller('timelineController', function($scope) {
    $scope.pageClass = 'page-sub';
    $scope.bgStyle.backgroundColor = "#ff9800";
    $scope.bgStyle.color = "#fff";
    $scope.header.img = '<img src="images/left.png" alt="Go back">';
    $scope.header.title = "TIMELINE";
});