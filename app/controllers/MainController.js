(function(angular) {

    angular.module('CalcApp').controller('MainController', function($scope, $timeout, Displays, Calculator) {

        var vm = this;

        Displays.get().then(
            function(_data) {

                vm.displaysAll = angular.copy(_data.data);
                vm.displays = _data.data;

            }
        );

        vm.calc_data = Calculator.data;

        // console.log(vm.calc_data.slider_vertical);

        vm.refreshSlider = $timeout(function() {
            $scope.$broadcast('rzSliderForceRender')
        });

        // функция сортировки по location
        vm.byLocation = function() {
            var val = vm.calc_data.is_outdoor ? 'outdoor' : 'indoor';
            vm.displays = vm.displaysAll.filter(function(item) {
                return item.location.toLowerCase() === val;
            });
        }
        // функция сортировки по applications
        vm.byApplication = function() {
            var val = vm.calc_data.is_rental ? 'rental' : 'fixed';
            vm.displays = vm.displaysAll.filter(function(item) {
                return item.applications.toLowerCase() === val;
            });
        }


    });

}(window.angular))
