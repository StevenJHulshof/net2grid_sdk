/**
 * Services for handling the individual zone masks
 * 
 * @services iasDevicesService
 * @return getMaskArray();
 */
frontModule.service('zoneMaskService', ['iasDevicesService', function(iasDevicesService) {
	
	// Mask array
	var maskArr = [];
	
	/**
	 * Returns mask array.
	 * 
	 * @param maskSize
	 * @return maskArr
	 */
	var getMaskArray = function(maskSize) {
		
		maskArr = [];
		
		var i
		for(i=0; i<maskSize; i++) {
			
			maskArr.push(iasDevicesService.getMask(i));
		}		
		
		return maskArr;
	}
	
	return {
		
		getMaskArray: getMaskArray
	};
}]);