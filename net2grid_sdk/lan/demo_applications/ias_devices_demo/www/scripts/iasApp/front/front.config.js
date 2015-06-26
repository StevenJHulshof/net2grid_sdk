/**
 * Front module configuration block.
 * 
 * @services $stateProvider, $urlRouterProviderm $ionicConfigProvider
 */
frontModule.config(['$stateProvider',
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
	});

	$urlRouterProvider.otherwise("/tab/home");

	// Tab position
	$ionicConfigProvider.tabs.position('bottom')
}]);

