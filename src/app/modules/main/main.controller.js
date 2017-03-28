(function () {
  'use strict';

  angular
    .module('gulpDemo')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($state, MainService) {
    var vm = this;
    vm.mainSvc = MainService;
    vm.getPageDetails = function () {
      vm.mainSvc.getPageDetails().success(function (data) {
        vm.pageDetails = data;
      })
    };

    vm.init = function () {
      vm.getPageDetails();
    };

    vm.init();
  }
})();
