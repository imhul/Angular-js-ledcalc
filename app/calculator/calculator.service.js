angular.module('CalcApp').service('Calculator', function(Displays) {

    window.calc = this;

    this.data = {
        is_outdoor: false,
        is_imperial: false,
        is_rental: false,
        slider_vertical: 6,
        slider_horizontal: 10

        // moduleQuantity: slider_horizontal * slider_vertical,
        //
        // wallWidth: 2 * 4, // MODULE_SIDE * moduleQuantityHorizontal;
        // wallHeight: 3 * 7, // MODULE_SIDE * moduleQuantityVertical;
        // wallSquare: MODULE_SQUARE * wallWidth * wallHeight,
        //
        // minViewDistance = Displays.data.pixelPitch * 0.9,
        // maxViewDistance = Displays.data.pixelPitch * 30
    };

    this.calculate = function() {

      // console.log(this.calculate); // вывод тела функции

      const MODULE_SIDE = 0.387; // m
      const MODULE_SQUARE = 0.15; // m*m

      var moduleAmt = this.data.slider_horizontal * this.data.slider_vertical;
      console.log(this.calculate.moduleAmt);

      var wallDiagonal = Math.sqrt((Math.pow(MODULE_SIDE * this.data.slider_horizontal)) + (Math.pow(MODULE_SIDE * this.data.slider_vertical)));

      console.log(this.calculate.wallDiagonal);
      // $scope.screenResolution = display.horizontalResolution*slider_horizontal + ' x ' + display.verticalResolution*slider_vertical;
      //
      // if ((wallWidth / wallHeight) > 1.6) {
      //     $scope.ratio = "16:9";
      // } else {
      //     $scope.ratio = "4:3";
      // }
      var imperialFactorFt = function(resultFt) { // Функция пересчета результата в империческую систему (футы)
        if(Calculator.data.is_imperial===true) {
          return resultFt * 3.28084;
        }

      };
      var imperialFactorLb = function(resultLb) { // Функция пересчета результата в империческую систему ()
        if(Calculator.data.is_imperial===true) {
          return resultLb * 2.2;
        }

      };


    }
});
