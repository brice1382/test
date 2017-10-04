(function () {
    'use strict';

    angular
        .module('knowledge-consortium')
        .run(run);

    run.$inject = ['$rootScope'];

    function run($rootScope) {
        $rootScope.$on('$viewContentLoaded', function () {
            if (location.hash.includes('home')) {
                document.title = 'Magnum PI | Home';
            } else if (location.hash.includes('about')) {
                document.title = 'Magnum PI | About';
            } else if (location.hash.includes('consortium')) {
                document.title = 'Magnum PI | Consortium';
            }
        });
    }
})();
