(function(angular){

    angular
        .module('CalcApp', ['rzModule'])
        .constant('appConfig', {
            'basePath': ''//'/projects/calc'
        })
        .run(function() {
            console.log('@ calculator is running');
        });

}(window.angular))
