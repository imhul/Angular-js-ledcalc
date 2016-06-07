(function (angular) {

    angular.module('CalcApp').controller('MainController', function($scope, $timeout, Displays, Calculator) {

        var vm = this;

        Displays.get().then(
            function(_data) {

                vm.displaysAll = angular.copy(_data.data);
                vm.displays = _data.data;

            }
        );

        vm.calc_data = Calculator.data;

        vm.refreshSlider = $timeout(function() {
            console.log(' @ refresh slider');
            $scope.$broadcast('rzSliderForceRender')
        });
        // функция сортировки по локации
        vm.byLocation = function() {
            var val = vm.calc_data.is_outdoor ? 'outdoor' : 'indoor';
            vm.displays = vm.displaysAll.filter(function(item) {
                return item.location.toLowerCase() === val;
            });
        }

    });

}(window.angular))
