/**
 * Service handling the selection of devices.
 * 
 * @return	{Function} getDevicePointer(); Returns device pointer.
 * 			{Function} setDevicePointer(newPointer); Changes device pointer.
 */

viewModule.service('devicePointerService', ['$rootScope', 
                                            function($rootScope) {
	
	/**
	 * Device pointer.
	 * 
	 * @description Points to a labeled device.
	 */
	var devicePointer = 0;
	
	/**
	 * Returns device pointer.
	 * 
	 * @return {Number} devicePointer.
	 */
	var getDevicePointer = function() {
		
		return devicePointer;
	}
	
	/**
	 * Changes device pointer.
	 * 
	 * @param {Number} newPointer.
	 */
	var setDevicePointer = function(newPointer) {
		
		devicePointer = newPointer;
	}
		
	return {
		
		getDevicePointer: getDevicePointer,
		setDevicePointer: setDevicePointer
	};
}]);