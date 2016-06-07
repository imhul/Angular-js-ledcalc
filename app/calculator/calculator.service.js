angular.module('CalcApp').service('Calculator', function() {

    this.data = {
        is_outdoor: false,
        is_imperial: false,
        is_rental: false,
        slider_vertical: 100,
        slider_horizontal: 100,

    };

    this.MODULE_SIDE = 0.387; // m
    this.MODULE_SQUARE = 0.15; // m*m

    // this.moduleQuantityHorizontal = data.slider_horizontal;
    // this.moduleQuantityVertical = data.slider_vertical;
    // this.moduleQuantity = moduleQuantityHorizontal * moduleQuantityVertical;
    // this.pixelPitch = display.pixelPitch;

    this.wallWidth = 2 * 4 // MODULE_SIDE * moduleQuantityHorizontal;
    this.wallHeight = 3 * 7 // MODULE_SIDE * moduleQuantityVertical;
    this.wallSquare = this.MODULE_SQUARE * this.wallWidth * this.wallHeight;

    // this.minViewDistance = pixelPitch * 0.9;
    // this.maxViewDistance = wallWidth * 30;

    this.calculate = function($scope) {



        $scope.screenResolution = display.horizontalResolution*slider_horizontal + ' x ' + display.verticalResolution*slider_vertical;

        if ((wallWidth / wallHeight) > 1.6) {
            $scope.ratio = "16:9";
        } else {
            $scope.ratio = "4:3";
        }

    }
});
