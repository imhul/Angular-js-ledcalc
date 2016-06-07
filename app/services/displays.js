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
