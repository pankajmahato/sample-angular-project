(function() {
  'use strict';

  angular
    .module('gulpDemo')
    .service('UigridService', UigridService);

  /** @ngInject */
  function UigridService($http) {
    var _this = this;

    _this.getPageDetails = function() {
      return $http({
        method: 'GET',
        url: 'assets/data/pageDetails.json'
      })
    }
  }
})();