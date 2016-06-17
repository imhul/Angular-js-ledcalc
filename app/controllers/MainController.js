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
        vm.rows = vm.calc_data.slider_vertical;
        vm.cols = vm.calc_data.slider_horizontal;
        vm.humanHeight = 1.75;

        // Функция, задающая количество строк и столбцов таблицы, беря значения слайдеров.
        vm.tableConstructor = function(amt) {
            return new Array(amt);
        }

        // Refresh
        vm.checkSliders = function() {
            return vm.calc_data;
        }
        $scope.$watch(vm.checkSliders, function($digest) {
            vm.tableConstructor().$digest;
        });


        // working vars
        // console.log('array: ' + vm.tableConstructor(vm.rows));
        // console.log(vm.calc_data.slider_vertical);
        // console.log('horizontal: ' + Calculator.data.slider_horizontal);
        // console.log('vertical: ' + Calculator.data.slider_vertical);

        vm.refreshSlider = $timeout(function() {
            $scope.$broadcast('rzSliderForceRender')
        });

        // функция, передающая данные выделенной модели
        vm.byModel = function(event) {
            // vm.selectedModel = $index;
            // vm.selectedModel = vm.displaysAll.filter(function(item) {
            //     return item === vm.selectedModel;
            // });
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
