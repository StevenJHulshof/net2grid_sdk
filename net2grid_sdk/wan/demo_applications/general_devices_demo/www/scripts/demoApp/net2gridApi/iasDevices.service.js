/**
 * Service for handling Intruder Alarm System (IAS) devices.
 * 
 * @services $http, $rootScope, $log, ipAddressService, zigbeeLutService.
 * @return	{Function} getCode(); Returns stored code.
 * 			{Function} setCode(oldCode, newCode); Changes code stored in the service.
 * 			{Function} getArmState(); Returns global arm state.
 * 			{Function} setArmState(code, mode); Changes arming state of all sensors.
 * 			{Function} getSensorDevices(); Returns sensor devices.
 * 			{Function} setupIasSensors(); Handles virtual IAS device configuration.
 */
net2gridApiModule.service('iasDevicesService', ['$http',
											    '$rootScope',
											    '$log',
												'ipAddressService',
												'zigbeeLutService',
												'utilityService',
											    function($http, $rootScope, $log, ipAddressService, zigbeeLutService, utilityService) {

	/**
	 * {Object} Sensor devices object.
	 * 
	 * @description This variable contains all sensor devices as an array.
	 */
	var sensorDevices = [];
	
	/**
	 * {String} Global arm state.
	 * 
	 * @description This variable defines the arming state of all the sensors. 
	 * Depending on the mask state, this will determine whether a sensor is active or inactive.
	 */
	var armState = '';
	
	/**
	 * {String} IAS device code.
	 * 
	 * @description This variable contains the code used to secure the IAS.
	 * The default code of the IAS is '12341234'.
	 */
	var code = '12341234';
		
	/**
	 * {Function} Returns mask state.
	 * 
	 * @return {String} maskStr.
	 */
	var getMask = function() {
		
		var maskStr = '';
		
		switch(this.mask) {
		
			case 1: 
				maskStr = 'day';
				break;
			case 2:
				maskStr = 'night';
				break;
			case 3:
				maskStr = 'day & night';
				break;
			case 4:
				maskStr = 'bypass';
				break;
		}
		
		return maskStr;
	}
	
	/**
	 * {Function} Set mask on individual devices.
	 * 
	 * @param {String} code, {String} mask.
	 */
	var setMask = function(code, mask) {
		
		var data = {
				
				code: code,
				id: this.id,
				mask: utilityService.convertMaskType(mask)
		};
		
		var ip = ipAddressService.getIp();
    		
		$http.post('http://' + ip + '/ias/zone', data)
		.error(function(data, status) {
			
			$log.error('Failed to change mask state:');
			$log.error('data: ' + data);
			$log.error('status: ' + status);
		});
	}
	
	/**
	 * {Function} Returns stored code.
	 * 
	 * @return {String} code.
	 */
	var getCode = function() {
		
		return code;
	}
	
	/**
	 * {Function} Changes code stored in the service.
	 * 
	 * @param {String} newCode.
	 */
	var setCode = function(oldCode, newCode) {
		
		var data = {
			
			old: oldCode,
			"new": newCode
		};
		
		var ip = ipAddressService.getIp();
		
		$http.post('http://' + ip + '/ias/code', data)
		.success(function() {
			
			code = newCode;
		})
		.error(function(data, status) {
			
			$log.error('Failed to change IAS code:');
			$log.error('data: ' + data);
			$log.error('status: ' + status);
		});
	}
	
	/**
	 * {Function} Returns global arm state.
	 * 
	 * @return {String} armState.
	 */
	var getArmState = function() {
		
		return armState;
	}
	
	/**
	 * {Function} Changes global arming state.
	 * 
	 * @param {String} code, {String} mode.
	 */
	var setArmState = function(code, mode) {
		
		var data = {
				
			code: code,
			mode: mode
		};
		
		var ip = ipAddressService.getIp();
        		
		$http.post('http://' + ip + '/ias/arm', data)
		.success(function(data) {
			
			armState = mode;
        })
		.error(function(data, status) {
			
			$log.error('Failed to change arm state:');
			$log.error('data: ' + data);
			$log.error('status: ' + status);
		});
	}
	
	/**
	 * {Function} Returns sensor devices.
	 * 
	 * @return {Object} sensorDevices.
	 */
	var getSensorDevices = function() {
		
		return sensorDevices;
	}
		
	/**
	 * {Function} Handles virtual IAS device configuration.
	 */
	var setupIasSensors = function() {
		
		sensorDevices = [];
		
		var ip = ipAddressService.getIp();
		
		$http.get('http://' + ip + '/ias/info')
		.success(function(response) {

			var typeCheck = false;
			
			armState = response.arm;

			var d;
			for(d=0; d<response.zones.length; d++) {
				
				sensorDevices.push({

					label: d,
					id: response.zones[d].id,
					ipZgd: ip,
					eui: response.zones[d].eui,
					type: response.zones[d].type,
					mask: response.zones[d].mask,
					state: response.zones[d].state,
					active: utilityService.checkArmState(response.arm, response.zones[d].mask),
					getMask: getMask,
					setMask: setMask
				});
				
				var iasLut = zigbeeLutService.getIasLut();
				
				for(i=0; i<iasLut.length; i++) {
					
					if(sensorDevices[d].type === iasLut[i].id) {
						
						sensorDevices[d].type = iasLut[i].name;
						typeCheck = true;
						break;
					}
				}
				
				if(typeCheck === false){
					
					sensorDevices[d].type = 'Unknown device';
				}
			}	
			
			$rootScope.$broadcast('sensorDevices.update');
		})
		.error(function(data, status) {
			
			$log.error('Failed to create IAS devices:');
			$log.error('data: ' + data);
			$log.error('status: ' + status);
		});	
	}
	
	return {
		
		getCode: getCode,
		setCode: setCode,
		setArmState: setArmState,
		getArmState: getArmState,
		getSensorDevices: getSensorDevices,
		setupIasSensors: setupIasSensors
	};
}]);