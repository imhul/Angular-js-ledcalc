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
        vm.moduleSide = 0.387;
        vm.moduleSquare = 0.15;
        vm.tdSize = 50;
        vm.humanHeight = vm.tdSize * 4.7;

        vm.getTdSize = function() {
            if (vm.calc_data.slider_horizontal >= 10 || vm.calc_data.slider_vertical >= 11) {
                return;
            }
        };

        // vm.tableWidth = (vm.calc_data.slider_horizontal * vm.tdSize) + (vm.calc_data.slider_horizontal - 1);
        vm.moduleAmt = vm.calc_data.slider_horizontal * vm.calc_data.slider_vertical;
        vm.surface = vm.moduleAmt * vm.moduleSquare;
        vm.diagonal = Math.sqrt((Math.pow((vm.calc_data.slider_horizontal * 0.387), 2)) + (Math.pow((vm.calc_data.slider_vertical * 0.387), 2)));

        // TODO Применить imperialFactorFt и imperialFactorLb к результатам

        // Функция пересчета результата в империческую систему (футы)
        vm.imperialFactorFt = function(resultFt) {
            if (vm.calc_data.is_imperial) {
                return resultFt * 3.28084;
            }
        };
        // Функция пересчета результата в империческую систему ()
        vm.imperialFactorLb = function(resultLb) {
            if (vm.calc_data.is_imperial) {
                return resultLb * 2.2;
            }
        };

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
            // Calculator.calculate();
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
