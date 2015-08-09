'use strict';

/* jasmine specs for controllers go here */
describe('Localhost Widget controllers', function() {

  describe('SiteListCtrl', function(){

    beforeEach(module('localhostWidget'));

    it('the sites list model should be defined', inject(function($controller) {

      var scope = {},
          ctrl = $controller('SiteListCtrl', {$scope:scope});

      expect(scope.sites).toBeDefined();
    }));
  });
});
