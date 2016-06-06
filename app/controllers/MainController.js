CalcApp.controller('MainController', ['Displays', 'Calculator', function(Displays, Calculator) {

    var vm = this;

    Displays.get().then(
        function(_data) {

            vm.displays = _data.data;

        }
    );

    vm.calc_data = Calculator.data;

}]);
