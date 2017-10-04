(function () {
    'use strict';

    angular
        .module('about')
        .controller('AboutCtrl', AboutCtrl);

    AboutCtrl.$inject = ['UtilitySvc'];

    function AboutCtrl(UtilitySvc) {
        var vm = this;

        vm.convert = function () {
            UtilitySvc.encodeImageFileAsURL();
            vm.image = UtilitySvc.myString();
        };
    }
})();
