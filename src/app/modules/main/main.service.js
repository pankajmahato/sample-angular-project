(function() {
  'use strict';

  angular
    .module('gulpDemo')
    .service('MainService', MainService);

  /** @ngInject */
  function MainService($http) {
    var _this = this;

    _this.getPageDetails = function() {
      return $http({
        method: 'GET',
        url: 'assets/data/pageDetails.json'
      })
    }
  }
})();
