(function() {
  'use strict';

  describe('PhantomJS_1_9_8_(Linux_0_0_0).controller', function() {
    var vm;

    beforeEach(module('gulpDemo'));
    beforeEach(inject(function(_$controller_) {
      vm = _$controller_('MainController');
    }));

    it('should test whether the MainController is defined or not',
      function() {
        expect(vm).toBeDefined();
      });
  });
})();
