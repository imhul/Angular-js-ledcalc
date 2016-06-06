
angular.module('CalcApp').service('Calculator', function () {
    this.data = {
        is_outdoor: false,
        is_imperial: false,
        is_rental: false,
        slider_vertical: 100,
        slider_horizontal: 100
    };

    this.calculate = function ($scope) {
        // математика
        $scope.screenResolution = display.horizontalResolution*slider_horizontal + ' x ' + display.verticalResolution*slider_vertical;

        if((wallWidth/wallHeight) > 1.6) {
          $scope.ratio = "16:9";
        } else {
          $scope.ratio = "4:3";
        }



        console.log('физика-хуизика...');
    }

});
