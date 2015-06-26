/**
 * Settings tab controller.
 * 
 * @services $scope, $ionicPopup, iasDevicesServiceService, ipAddressService
 */
frontModule.controller('settingsTabCtrl', ['$scope',
                                           '$ionicPopup',
										   'iasDevicesService',
										   'ipAddressService',										  
										   function($scope, $ionicPopup, iasDevicesService, ipAddressService) {
	
	// Settings object
	$scope.settings = {
			
		ipZgd: ipAddressService.getIp(),
		armState: "disarm",
		password: ''
	};
	
	/**
	 * Returns stored password.
	 * 
	 * @return iasDevicesService.getCode();
	 */
	$scope.getPassword = function() {
		
		return iasDevicesServiceService.getCode();
	}
		
	/**
	 * Displays save pop up.
	 * 
	 * @return myPopup
	 */
	$scope.showSavePopup = function() {
				
		var myPopup = $ionicPopup.show({
			
			template: '<input type="password" ng-model="settings.password">',
			title: 'Please Enter Password',
			scope: $scope,
			buttons: [{
				
	            text: '<b>Submit</b>',
	            type: 'button-positive',
	            onTap: function(e) {
	            	
	            	if (!$scope.settings.password) {

		                e.preventDefault();	            	
	            	} 
	            	else {
	            		
	            		return $scope.settings.password;
	            	}
	            }
			}]
		});
		
		return myPopup;
	}
	
	/**
	 * Displays wrong password alert.
	 */
	$scope.showAlertPopup = function() {
		
		var myPopup = $ionicPopup.alert({
			
			title: 'Wrong Password!'
		});
	}
	
	/**
	 * Changes stored ip address.
	 * 
	 * @param ip
	 */
	$scope.saveSettings = function(ip) {
		
		ipAddress.setIp(ip);
		
		iasDevicesService.setArmState($scope.settings.password, $scope.settings.armState, $scope.settings.ipZgd);
		
		iasDevicesService.setupIasSensors($scope.settings.ipZgd);
	}
}]);