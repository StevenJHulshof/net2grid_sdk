/**
 * Controller handling the device viewport.
 * 
 * @services $scope, zigbeeLutService, ipAddressService, generalDevicesService, devicePointerService, utilityService.
 */
viewModule.controller('deviceNavCtrl', ['$scope',
                                        'zigbeeLutService',
                                        'ipAddressService', 
	                                    'generalDevicesService',
	                                    'devicePointerService',
	                                    'viewUtilityService',
	                                    function(	$scope, 
	                                    			zigbeeLutService, 
	                                    			ipAddressService, 
	                                    			generalDevicesService, 
	                                    			devicePointerService,
	                                    			viewUtilityService) {
	
	/**
	 * Contains scope data.
	 */
	$scope.settings = {
			
		generalDevices: generalDevicesService.getGeneralDevices(),
		devicePointer: devicePointerService.getDevicePointer(), 
		toggleMode: false
	};

	/**
	 * Get state off device.
	 */
	$scope.getState = function() {
	
		/*$scope.settings.generalDevices[$scope.settings.devicePointer].readAttributes(zigbeeLutService.getClusterLut().OnOff, [zigbeeLutService.getOnOffAttribute()])
		.then(function(response) {
			
			console.log(response);
			//$scope.settings.toggleMode = viewUtilityService.decToBool(response);
		});
		*/
		viewUtilityService.retrieveSpinnerPopup();
	}	
	
	/**
	 * Toggles device.
	 */
	$scope.toggleDevice = function() {
		
		$scope.settings.generalDevices[$scope.settings.devicePointer].writeCommand(zigbeeLutService.getToggleCommand());
		
		viewUtilityService.toggleSpinnerPopup();
	}
	
	/**
	 * Changes color to red.
	 */
	$scope.colorRed = function() {
		
		$scope.settings.generalDevices[$scope.settings.devicePointer].writeCommand(zigbeeLutService.getMoveToColorCommand(), [0x00BE, 0x0040, 0]);
		
		viewUtilityService.colorSpinnerPopup();
	}
	
	/**
	 * Changes color to green.
	 */
	$scope.colorGreen = function() {
		
		$scope.settings.generalDevices[$scope.settings.devicePointer].writeCommand(zigbeeLutService.getMoveToColorCommand(), [0x0040, 0x0099, 0]);
		
		viewUtilityService.colorSpinnerPopup();
	}
	
	/**
	 * Changes color to blue.
	 */
	$scope.colorBlue = function() {
		
		$scope.settings.generalDevices[$scope.settings.devicePointer].writeCommand(zigbeeLutService.getMoveToColorCommand(), [0x0026, 0x000D, 0]);
		
		viewUtilityService.colorSpinnerPopup();
	}
}]);