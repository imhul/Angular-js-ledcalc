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
        vm.humanHeight = 1.75;

        vm.getDiagonal = function() {
                return vm.diagonal = Math.sqrt(
                    (Math.pow(
                        (vm.calc_data.slider_horizontal * 0.387), 2)) +
                    (Math.pow(
                        (vm.calc_data.slider_vertical * 0.387), 2))
                );
            }
            // Aspect ratio filter
        vm.getRatio = function() {
            if ((vm.calc_data.slider_horizontal * 0.387) / (vm.calc_data.slider_vertical * 0.387) > 1.6) {
                return vm.ratio = "16:9";
            } else {
                return vm.ratio = "4:3";
            }
        };

        // Функция, задающая количество строк и столбцов таблицы, беря значения слайдеров.
        vm.tableConstructor = function(amt) {
            return new Array(amt);
        }

        vm.refreshSlider = $timeout(function() {
            $scope.$broadcast('rzSliderForceRender')
        });

        // функция, передающая данные выделенной модели
        vm.byModel = function($index) {
            vm.selectedIndex = $index;
            Calculator.setModel(vm.displays[vm.selectedIndex]);
            Calculator.calculate();
        }

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
