(function () {
    'use strict';

    angular
        .module('consortium')
        .service('ConsortiumSvc', ConsortiumSvc);

    ConsortiumSvc.$inject = [];

    function ConsortiumSvc() {
        return {
            getPosting: getPosting
        };

        function getPosting() {

        }
    }
})();
