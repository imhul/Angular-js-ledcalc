(function (angular) {

    angular.module('CalcApp').directive('models', function (Calculator, appConfig) {

        return {
            restict: 'EA',
            bindToController: {
                controlsData: '=data'
            },
            controllerAs: 'parametersModels',
            templateUrl: appConfig.basePath + '/app/calculator/models/models.template.html',
            controller: function() {

            }
        }
    });

}(window.angular))
