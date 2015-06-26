/**
 * Controller handling the home viewport.
 * 
 * @services $scope, euiService, ipAddressService.
 */
viewModule.controller('homeTabCtrl', ['$scope',
                                      'radioFrequencyDevicesService',
                                      'ipAddressService', 
                                      function($scope, radioFrequencyDevicesService, ipAddressService) {
	
	/**
	 * Configure default IP.
	 */
	ipAddressService.setIp('smartbridge.local');
	
	/**
	 * Contains scope data.
	 */
	$scope.settings = {
			
		ipZgd: ipAddressService.getIp(),
		rfPlug: 'Impuls',
		rfPlugObjects: [],
		sysCode: 0,
		unitCode: 0
	};

	$scope.settings.rfPlugObjects[0] = radioFrequencyDevicesService.getImpulsPlug();
	$scope.settings.rfPlugObjects[1] = radioFrequencyDevicesService.getBrennenstuhlRCS1000NPlug();
	$scope.settings.rfPlugObjects[2] = radioFrequencyDevicesService.getClickOnClickOffAPA22300RPlug();
	$scope.settings.rfPlugObjects[3] = radioFrequencyDevicesService.getIntertechnoITR1500Plug();
	$scope.settings.rfPlugObjects[4] = radioFrequencyDevicesService.getElroHomeEasyHE877Plug();
	$scope.settings.rfPlugObjects[5] = radioFrequencyDevicesService.getSiemensRC018Plug();

	
	var checkForRfPlug = function(state) {
		
		var r;
		
		ipAddressService.setIp($scope.settings.ipZgd);
		
		for(r=0; r<$scope.settings.rfPlugObjects.length; r++) {
			
			if($scope.settings.rfPlugObjects[r].name == $scope.settings.rfPlug) {
				
				radioFrequencyDevicesService.radioFrequencyPlug($scope.settings.rfPlugObjects[r], $scope.settings.sysCode, $scope.settings.unitCode, state, false).then(function(promise) {
					
					console.log(promise);
				});
			}
		}
	}
	
	$scope.on = function() {
		
		checkForRfPlug(1);
	}
	
	$scope.off = function() {
		
		checkForRfPlug(0);
	}
	
}]);