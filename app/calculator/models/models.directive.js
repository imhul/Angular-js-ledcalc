(function (angular) {

    angular.module('CalcApp').directive('models', function (Calculator) {

        return {
            restict: 'EA',
            bindToController: {
                controlsData: '=data'
            },
            controllerAs: 'parametersModels',
            templateUrl: '/projects/calc/app/calculator/models/models.template.html',
            controller: function() {

            },
            link: function($scope, el, attrs, vm) {
                var checkForm = function() {
                    return vm.form_of_stuff.$pristine;
                }
                $scope.$watch(checkForm, function(isPristine) {

                    if (!isPristine) {
                        Calculator.calculate();
                        vm.form_of_stuff.$setPristine();
                    }
                });
            }
        }
    });

}(window.angular))
