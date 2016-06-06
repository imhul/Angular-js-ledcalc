CalcApp.factory('displays', ['$http', function($http) {
  return $http.get('http://ekta.com.ua/projects/calc/data/getModels.json')
         .success(function(data) {
           return data;
         })
         .error(function(data) {
           return data;
         });
}]);
