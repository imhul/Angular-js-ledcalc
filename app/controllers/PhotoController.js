app.controller('PhotoController', ['$scope', 'displays', '$routeParams', function($scope, displays, $routeParams) {
  displays.success(function(data) {
    $scope.detail = data[$routeParams.id];
  });
}]);
