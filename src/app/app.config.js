(function () {
    'use strict';

    angular
        .module('knowledge-consortium')
        .config(config);

    config.$inject = ['$routeProvider'];

    function config($routeProvider) {
        $routeProvider
            .when('/home', {
                templateUrl: 'views/home/home.template.html',
                controller: 'HomeCtrl',
                controllerAs: 'hc'
            }).when('/consortium', {
                templateUrl: 'views/consortium/consortium.template.html',
                controller: 'ConsortiumCtrl',
                controllerAs: 'cc'
            }).when('/about', {
                templateUrl: 'views/about/about.template.html',
                controller: 'AboutCtrl',
                controllerAs: 'ac'
            })
            .otherwise({redirectTo: '/home'});
    }
})();
