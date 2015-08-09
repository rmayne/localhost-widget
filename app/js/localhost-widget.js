'use strict';

var localhostWidget = angular.module('localhostWidget', []);

localhostWidget.controller('SiteListCtrl', [
	'$scope',
	'$window',
	function($scope, $window){
		$scope.description = '';
		$scope.sites = [
			{
				'alias': 'localhost',
				'url': 'http://localhost',
				'description': 'Your localhost page'
			},
			{
				'alias': 'Another Local Site',
				'url': 'http://another.localhost',
				'description': 'Another local site.'
			},
			{
				'alias': 'Yet Another Local Site',
				'url': 'http://yetanother.localhost',
				'description': 'Yet another local site.'
			},
		];

		$scope.setLocation = function(siteUrl){
			$window.location.assign(siteUrl);	
		};
	}
]);

