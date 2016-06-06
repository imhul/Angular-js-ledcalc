
angular.module('CalcApp').service('Calculator', function () {
    this.data = {
        is_outdoor: false,
        is_imperial: false,
        is_rental: false,
        slider_vertical: 100,
        slider_horizontal: 100
    };

    this.calculate = function () {
        // математика

        console.log('физика-хуизика...');
    }

});
