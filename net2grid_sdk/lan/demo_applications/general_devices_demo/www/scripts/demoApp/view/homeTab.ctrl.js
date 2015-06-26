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
                                      function($scope, utilityService, ipAddressService, generalDevicesService, devicePointerService) {
	
	/**
	 * Configure default IP.
	 */
	ipAddressService.setIp('smartbridge.local');
	
	/**
	 * Contains scope data.
	 */
	$scope.settings = {
			
		generalDevices: [],
		ipZgd: ipAddressService.getIp(),
		euiHex: []
	};
	
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
	 * Setting up the general devices.
	 */
	$scope.setup = function() {
		
		ipAddressService.setIp($scope.settings.ipZgd);
		generalDevicesService.setupGeneralDevices();
	}
	
	/**
	 * Devices selection.
	 */
	$scope.deviceSelect = function(label) {
		
		devicePointerService.setDevicePointer(label);
	}
}]);