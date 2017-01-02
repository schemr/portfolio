app.value('mogolabApiKey','BraiD4mQkKDv8x5Tp3Sr-C8wFa7Zuf3J')
 .factory('Portfolio', ['$resource','mogolabApiKey',function ($resource,mogolabApiKey) {
  var portfolioResource = $resource('https://api.mongolab.com/api/1/databases/portfolio/collections/portfolios/:portfolioId?apiKey=:apiKey',{
   apiKey: mogolabApiKey
  },{
   'update' : {
    method: 'PUT'
   }
  });

  return portfolioResource;
 }]);