(function (angular) {

    angular.module('CalcApp').directive('controls', function (Calculator) {

        return {
            restict: 'EA',
            bindToController: {
                controlsData: '=data'
            },
            controllerAs: 'parameters',
            templateUrl: '/projects/calc/app/calculator/controls/controls.template.html',
            controller: function () {
                this.sliderOptions = {
                    horizontal: {
                        value: 10,
                        options: {
                            floor: 1,
                            ceil: 100,
                            showSelectionBar: true,
                            translate: function(value) {
                              return 'Tiles horizontal: ' + value;
                            }
                        }
                    },
                    vertical: {
                        value: 10,
                        options: {
                            floor: 1,
                            ceil: 100,
                            showSelectionBar: true,
                            translate: function(value) {
                              return 'Tiles vertical: ' + value;
                            }
                        }
                    }
                };
            },
            link: function ($scope, el, attrs, vm) {
                var checkForm = function () {
                    return vm.form_of_stuff.$pristine;
                }
                $scope.$watch(checkForm, function (isPristine) {

                    if (!isPristine) {
                        Calculator.calculate();
                        vm.form_of_stuff.$setPristine();
                    }
                });
            },
        }

    });

}(window.angular))
