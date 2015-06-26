/**
 * Controller handling the home viewport.
 * 
 * @services $scope, euiService, ipAddressService, generalDevicesService, devicePointerService.
 */
viewModule.controller('homeTabCtrl', ['$scope',
                                      'utilityService',
                                      'ipAddressService', 
                                      'generalDevicesService',
                                      'devicePointerService',
                                      'userService',
                                      function($scope, utilityService, ipAddressService, generalDevicesService, devicePointerService, userService) {
	
	/**
	 * Contains scope data.
	 */
	$scope.settings = {
			
		generalDevices: [],
		eui: "",
		euiHex: [],
		userName: "",
		passWord: ""
	};
	
	userService.setUserData("demoapp", "demopass", "zll", "dK87QHhD");
	userService.postTokenRequest();
	$scope.token = "";
	
	$scope.getToken = function() {
		
		$scope.token = userService.getToken();
	}
	
	$scope.save = function() {
		
		userService.setEui($scope.settings.eui);
		generalDevicesService.setupGeneralDevices();
	}
	
	/**
	 * Checks whether general devices are updated.
	 */
	$scope.$on('generalDevices.update', function(event) {
		
		$scope.settings.euiHex = [];
		$scope.settings.generalDevices = generalDevicesService.getGeneralDevices();
		
		var e;
		for(e = 0; e < $scope.settings.generalDevices.length; e++) {
			
			$scope.settings.euiHex.push(utilityService.euiToHex($scope.settings.generalDevices[e].eui));
		}
	})
	
	/**
	 * Devices selection.
	 */
	$scope.deviceSelect = function(label) {
		
		devicePointerService.setDevicePointer(label);
	}
}]);