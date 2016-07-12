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
        vm.calcResult = Calculator.calculate();

        vm.moduleSide = 0.387;
        vm.moduleSquare = 0.15;
        vm.humanHeight = Calculator.humanHeight;
        vm.moduleAmt = vm.calc_data.slider_horizontal * vm.calc_data.slider_vertical;
        vm.surface = vm.moduleAmt * vm.moduleSquare;
        vm.diagonal = Calculator.diagonal;
        vm.tdSize = 50;

        vm.getTdSize = function() {
            if (vm.calc_data.slider_horizontal >= 10 || vm.calc_data.slider_vertical >= 11) {
                return vm.tdSize + 1;
            }
        };

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

        vm.getDiagonal = function() {
            return vm.diagonal = Math.sqrt(
                (Math.pow(
                    (vm.calc_data.slider_horizontal * 0.387), 2)) +
                (Math.pow(
                    (vm.calc_data.slider_vertical * 0.387), 2))
            );
        };

        // Aspect ratio filter

        function gcd(a, b) {
            if (b) {
                return gcd(b, a % b);
            } else {
                return Math.abs(a);
            }
        };



        vm.getRatio = function() {

            return vm.ratio =
                Math.round(vm.calc_data.slider_horizontal / gcd(vm.calc_data.slider_horizontal, vm.calc_data.slider_vertical)) +
                ":" +
                Math.round(vm.calc_data.slider_vertical / gcd(vm.calc_data.slider_horizontal, vm.calc_data.slider_vertical));
                // console.log('Recursive: ' + gcd_rec(59, 78));

            // function gcd(a, b) {
            //     if (a < 0) a = -a;
            //     if (b < 0) b = -b;
            //     if (b > a) {
            //         var temp = a;
            //         a = b;
            //         b = temp;
            //     }
            //     while (true) {
            //         if (b == 0) return a;
            //         a %= b;
            //         if (a == 0) return b;
            //         b %= a;
            //     }
            // }
            // console.log('Iterative: ' + gcd(19, 37));
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
