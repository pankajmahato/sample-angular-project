(function() {
  'use strict';

  angular
    .module('gulpDemo')
    .run(runBlock);

  /** @ngInject */
  function runBlock($state) {
    $state.go('main');
  }

})();
