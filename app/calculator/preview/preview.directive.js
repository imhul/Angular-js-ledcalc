(function(angular) {

    angular.module('CalcApp').directive('preview', function(Calculator) {

        return {
            restict: 'EA',
            bindToController: {
                controlsData: '=data'
            },
            controllerAs: 'parametersPreview',
            templateUrl: '/projects/calc/app/calculator/preview/preview.template.html',
            controller: function($scope) {
              var table = '<table border="1" cellpadding="10" class="responsive-table" style="color:#888;border: 1px solid #888;">';
              var a = vm.calc_data.slider_horizontal;
              var b = vm.calc_data.slider_vertical;

              for (var i = 1; i <= a; i++) {
                  str += '<tr>';
                  for (var j = 1; j <= b; j++) {
                          str += '<td></td>';
                  }
                  table += '</tr>';
              }
              table += '</table>';

              return str;
            }
        }

    });

}(window.angular))
