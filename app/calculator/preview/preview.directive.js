(function(angular) {

    angular.module('CalcApp').directive('preview', function(Calculator, appConfig) {

        return {
            restict: 'EA', // обязательно, для поддержки работы через элемент
            bindToController: {
                controlsData: '=data'
            },
            controllerAs: 'ctrlTable',
            templateUrl: appConfig.basePath + '/app/calculator/preview/preview.template.html', // заменить <preview> этим html
            controller: function() {

                var vm = this;
                vm.calc_data = Calculator.data;
                var rows = vm.calc_data.slider_vertical;
                var cols = vm.calc_data.slider_horizontal;


                // working vars
                // console.log('vertical: ' + rows);
                // console.log('vertical: ' + cols);
                // console.log('horizontal: ' + Calculator.data.slider_horizontal);
                // console.log('vertical: ' + Calculator.data.slider_vertical);
                // console.log('vertical: ' + vm.calc_data.slider_vertical);

                vm.tableConstructor = function(amt) {
                        return new Array(amt);
                }

                console.log('array: ' + vm.tableConstructor(rows));

                // js table version
                // this.tablePreview = function() {
                //     var table = '<table border="1" cellpadding="10" class="responsive-table" style="color:#888;border: 1px solid #888;">';
                //     var a = Calculator.data.slider_horizontal;
                //     var b = Calculator.data.slider_vertical;
                //     for (var i = 1; i <= a; i++) {
                //         table += '<tr>';
                //         for (var j = 1; j <= b; j++) {
                //             table += '<td></td>';
                //         }
                //         table += '</tr>';
                //     }
                //     table += '</table>';
                //
                //     return table;
                // }

            },
            // наблюдение и манипулирование DOM
            link: function($scope, element, attrs) {
                // attrs.$observe('caption', function(value) {
                //     element.find('figcaption').text(value)
                // })
                //
                // // атрибуты именуются с применением «верблюжьей» нотации
                // attrs.$observe('photoSrc', function(value) {
                //     element.find('img').attr('src', value)
                // })
            }
        }

    });

}(window.angular))
