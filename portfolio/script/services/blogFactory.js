// Tumblr constructor function to encapsulate HTTP and pagination logic
app.factory('Tumblr', function($http) {
  var Tumblr = function() {
    this.items = [];
    this.busy = false;
    this.after = '';
    this.num = 0;
    this.limit = 0;
  };

  Tumblr.prototype.nextPage = function() {
    if (this.busy) return;
    this.busy = true;
    var url = 'http://api.tumblr.com/v2/blog/witinweb.tumblr.com/posts?tag=스키머&filter=html&api_key=5ukGgHecRViHgYYpq6T52JzpoRspK1lvij4vtPg50l7FMP2dbD&callback=JSON_CALLBACK';
    $http.jsonp(url).success(function(data) {
      var items = data.response.posts;
      //$scope.total_post = items.length;
      for (this.num; this.num < this.limit+3; this.num++) {
        if(items.length > this.num){
            this.items.push(items[this.num]);    
        } else{
            this.busy = true;
            $('.loading').hide();
            return Tumblr;
        }
      }
        this.limit += 3;
        this.busy = false;
             
    }.bind(this));
  };
  return Tumblr;
});