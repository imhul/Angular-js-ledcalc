(function (angular) {

    angular.module('CalcApp').directive('result', function (Calculator) {

        return {
            restict: 'EA',
            bindToController: {
                controlsData: '=data'
            },
            controllerAs: 'parametersResult',
            templateUrl: '/projects/calc/app/calculator/result/result.template.html',
            controller: function() {

            }
        }

    });

}(window.angular))
