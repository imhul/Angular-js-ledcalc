CalcApp.controller('MainController', ['$scope', 'displays', function($scope, displays) {
  displays.success(function(data) {
    $scope.displays = data;
  });
}]);

CalcApp.controller('horizontalSliderController', horizontalSliderController);
CalcApp.controller('verticalSliderController', verticalSliderController);

function horizontalSliderController() {
    var vm = this;

    vm.horizontalSlider = {
        value: 10,
        options: {
            floor: 1,
            ceil: 100,
            showSelectionBar: true,
            translate: function(value) {
              return 'Tiles horizontal: ' + value;
            }
        }
    }
}

function verticalSliderController() {
    var vm = this;

    vm.verticalSlider = {
        value: 10,
        options: {
            floor: 1,
            ceil: 100,
            showSelectionBar: true,
            translate: function(value) {
              return 'Tiles vertical: ' + value;
            }
        }
    }
}
