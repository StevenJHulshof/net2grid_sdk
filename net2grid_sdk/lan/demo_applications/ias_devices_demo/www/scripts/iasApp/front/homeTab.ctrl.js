/**
 * Home tab controller.
 * 
 * @services $scope, iasDevicesServiceService, ipAddressService, zoneMaskService
 */
frontModule.controller('homeTabCtrl', ['$scope',
                                       '$ionicPopup',
                                       '$timeout',
                                       '$log',
									   'iasDevicesService',
									   'ipAddressService',
									   function($scope, $ionicPopup, $timeout, $log, iasDevicesService, ipAddressService) {
	
	$scope.settings = {
			
		armState: '',
		password: '',
		mask: [],
		ipZgd: ''
	};
    
    $scope.sensors = [];
                                       
	/**
	 * Checks for sensor updates.
	 */
	$scope.$on('sensorDevices.update', function(event) {
		
        $scope.settings.mask = [];
               
		$scope.sensors = iasDevicesService.getSensorDevices();
		$scope.settings.armState = iasDevicesService.getArmState();
               
        var m;
        for(m=0; m<$scope.sensors.length; m++) {
               
            $scope.settings.mask.push($scope.sensors[m].getMask());
        }
	});
	
	/**
	 * Returns stored password.
	 * 
	 * @return iasDevicesService.getCode();
	 */
	$scope.getPassword = function() {
		
		return iasDevicesService.getCode();
	}
		
	/**
	 * Displays save pop up.
	 * 
	 * @return myPopup
	 */
	$scope.showSavePopup = function() {
						
		var myPopup = $ionicPopup.prompt({
			
			title: 'Password Check',
			template: 'Please enter password',
			inputType: 'password',
			inputPlaceholder: 'Your password'
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
	 * Prevent zgd request overflow'
	 * 
	 * @param i
	 */
	$scope.maskSetting = function(i) {
		
		$timeout(function() {
			
                 console.log(i);
			$scope.sensors[i].setMask($scope.settings.password, $scope.settings.mask[i]);
		}, i*200);
	}
	
	/**
	 * Displays saving spinner.
	 */
	$scope.spinnerPopup = function() {
		
		var myPopup = $ionicPopup.show({
		
			title: 'Saving your data',
			template: '<ion-spinner></ion-spinner> Saving...'
		});
		$timeout(function() {
			
		     myPopup.close(); 
		}, 2000);
	}
	
	/**
	 * Changes stored ip address.
	 * 
	 * @param ip
	 */
	$scope.saveSettings = function() {
		
		ipAddressService.setIp($scope.settings.ipZgd);
		
		var i;
		for (i = 0; i < $scope.settings.mask.length; i++) {

		   $scope.maskSetting(i);
		}
		
		if ($scope.settings.armState != '') {
                                                                            
			$timeout(function() {
				
				iasDevicesService.setArmState($scope.settings.password, $scope.settings.armState);
			}, 1900);	    
		}
		
		$timeout(function () {

		    iasDevicesService.setupIasSensors()
		}, 2000);
		
		$scope.spinnerPopup();
	}
}]);