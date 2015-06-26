/**
 * View module configuration block.
 * 
 * @services $stateProvider, $urlRouterProviderm $ionicConfigProvider
 */
viewModule.config([	'$stateProvider',
					'$urlRouterProvider',
					'$ionicConfigProvider',
					function ($stateProvider, $urlRouterProvider, $ionicConfigProvider) {

	// Config application states
	$stateProvider
	.state('tabs', {
		url: "/tab",
		abstract: true,
		templateUrl: "templates/tabs.html"
	})
	.state('tabs.home', {
		url: "/home",
		views: {
			'home-tab': {
				templateUrl: "templates/home.html",
				controller: 'homeTabCtrl'
			}
		}
	})
	.state('tabs.about', {
		url: "/about",
		views: {
			'about-tab': {
				templateUrl: "templates/about.html"
			}
		}
	})
	.state('tabs.device', {
		url: "/device",
		views: {
			'home-tab': {
				templateUrl: "templates/device.html",
				controller: 'deviceNavCtrl'
			}
		}
	});

	$urlRouterProvider.otherwise("/tab/home");

	// Tab position
	$ionicConfigProvider.tabs.position('bottom')
}]);

