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
              
            }
        }
    });

}(window.angular))
