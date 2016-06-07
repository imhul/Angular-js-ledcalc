(function (angular) {

    angular.module('CalcApp').directive('preview', function (Calculator) {

        return {
            restict: 'EA',
            bindToController: {
                controlsData: '=data'
            },
            controllerAs: 'parametersPreview',
            templateUrl: '/projects/calc/app/calculator/preview/preview.template.html',
            controller: function() {

            }
        }

    });

}(window.angular))
