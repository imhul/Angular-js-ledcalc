CalcApp.service('Displays', ['$http', '$q', function($http, $q) {
    return {
        get: function () {

           return $http.get('/projects/calc/data/getModels.json')
                .then(function(data) {
                  return data;
                })
        }
    }
}]);

// CalcApp.factory('displays', ['$http', function($http) {
//   return $http.get('http://ekta.com.ua/projects/calc/data/getModels.json')
//          .success(function(data) {
//            return data;
//          })
//          .error(function(data) {
//            return data;
//          });
// }]); 
