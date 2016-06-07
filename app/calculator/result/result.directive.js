(function (angular) {

    angular.module('CalcApp').directive('result', function (Calculator, appConfig) {

        return {
            restict: 'EA',
            bindToController: {
                controlsData: '=data'
            },
            controllerAs: 'parametersResult',
            templateUrl: appConfig.basePath + '/app/calculator/result/result.template.html',
            controller: function() {

            }
        }

    });

}(window.angular))
