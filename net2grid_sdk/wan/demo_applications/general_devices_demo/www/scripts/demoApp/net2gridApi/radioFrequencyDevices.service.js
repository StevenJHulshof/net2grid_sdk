/**
 * Service for handling radio frequency devices.
 * 
 * @return	{Function} radioFrequencyPlug(plug, systemCode, unitCode, value, group); Controls manufacturer specific smartplugs.
 *			{Object constructor} customPlug(name, bitPeriod, protocol, systemCodeBitLength, unitCodeBitLength); Custom smart plug.
 *			{Function} getImpulsPlug(); Returns Impuls smart plug data.
 *			{Function} getBrennenstuhlRCS1000NPlug(); Returns Brennenstuhl RCS-1000N smart plug data.
 *			{Function} getClickOnClickOffAPA22300RPlug(); Returns ClickOnClickOff APA2-2300R smart plug data.
 *			{Function} getIntertechnoITR1500Plug(); Returns Intertechno ITR-1500 smart plug data.
 *			{Function} getElroHomeEasyHE877Plug(); Returns Elro HomeEasy HE877 smart plug data.
 *			{Function} getSiemensRC018Plug(); Returns Siemens RC018 smart plug data.
 */
net2gridApiModule.service('radioFrequencyDevicesService', ['$http', '$log', 'ipAddressService', 'utilityService', function($http, $log, ipAddressService, utilityService) {
	
	/**
	 * {Object constructor} Custom smart plug.
	 *
	 * @param {String} name, {Number} bitPeriod, {Number} protocol, {Number} systemCodeBitLength, {Number} unitCodeBitLength.
	 */
	function customPlug(name, bitPeriod, protocol, systemCodeBitLength, unitCodeBitLength) {
	
		this.name = name;
		this.bitPeriod = bitPeriod;
		this.protocol = protocol;
		this.systemCodeBitLength = systemCodeBitLength;
		this.unitCodeBitLength = unitCodeBitLength;
	}
	
	/**
	 * {Object} Impuls smart plug.
	 *
	 * @description Contains Impuls smart plug data.
	 */
	var impulsPlug = {
			
		name: 'Impuls', 	
		bitPeriod: 260,
		protocol: 3,
		systemCodeBitLength: 5,
		unitCodeBitLength: 5
	}
	
	/**
	 * {Function} Returns Impuls smart plug data.
	 *
	 * @return {Object} impulsPlug.
	 */
	var getImpulsPlug = function() {
		
		return impulsPlug;
	}
	
	/**
	 * {Object} Brennenstuhl RCS-1000N smart plug.
	 *
	 * @description Contains Brennenstuhl RCS-1000N smart plug data.
	 */
	var brennenstuhlRCS1000NPlug = {
	
		name: 'Brennenstuhl RCS-1000N',
		bitPeriod: 320,
		protocol: 2,
		systemCodeBitLength: 5,
		unitCodeBitLength: 5
	}
		
	/**
	 * {Function} Returns Brennenstuhl RCS-1000N smart plug data.
	 *
	 * @return {Object} brennenstuhlRCS1000NPlug.
	 */
	var getBrennenstuhlRCS1000NPlug = function() {
	
		return brennenstuhlRCS1000NPlug;
	}
	
	/**
	 * {Object} ClickOnClickOff APA2-2300R smart plug.
	 *
	 * @description Contains ClickOnClickOff APA2-2300R smart plug data.
	 */
	var clickOnClickOffAPA22300RPlug = {
		
		name: 'ClickOnClickOff APA2-2300R',
		bitPeriod: 270,
		protocol: 0,
		systemCodeBitLength: 26,
		unitCodeBitLength: 4 
	}
	
	/**
	 * {Function} Returns ClickOnClickOff APA2-2300R smart plug data.
	 *
	 * @return {Object} clickOnClickOffAPA22300RPlug.
	 */
	var getClickOnClickOffAPA22300RPlug = function() {
	
		return clickOnClickOffAPA22300RPlug;
	}
	
	/**
	 * {Object} Intertechno ITR-1500 smart plug.
	 *
	 * @description Contains Intertechno ITR-1500 smart plug data.
	 */
	var intertechnoITR1500Plug = {
		
		name: 'Intertechno ITR-1500',
		bitPeriod: 260,
		protocol: 0,
		systemCodeBitLength: 26,
		unitCodeBitLength: 4
	}
	
	/**
	 * {Function} Returns Intertechno ITR-1500 smart plug data.
	 *
	 * @return {Object} intertechnoITR1500Plug.
	 */
	var getIntertechnoITR1500Plug = function() {
	
		return intertechnoITR1500Plug;
	}
	
	/**
	 * {Object} Elro HomeEasy HE877 smart plug.
	 *
	 * @description Contains Elro HomeEasy HE877 smart plug data.
	 */
	var elroHomeEasyHE877Plug = {
		
		name: 'Elro HomeEasy HE877',
		bitPeriod: 260,
		protocol: 0,
		systemCodeBitLength: 26,
		unitCodeBitLength: 4
	}
	
	/**
	 * {Function} Returns Elro HomeEasy HE877 smart plug data.
	 *
	 * @return {Object} elroHomeEasyHE877Plug.
	 */
	var getElroHomeEasyHE877Plug = function() {
	
		return elroHomeEasyHE877Plug;
	}
		
	/**
	 * {Object} Siemens RC018 smart plug.
	 *
	 * @description Contains Siemens RC018 smart plug data.
	 */
	var siemensRC018Plug = {
		
		name: 'Siemens RC018',
		bitPeriod: 270,
		protocol: 1,
		systemCodeBitLength: 6,
		unitCodeBitLength: 1
	}
	
	/**
	 * {Function} Returns Siemens RC018 smart plug data.
	 *
	 * @return {Object} siemensRC018Plug.
	 */
	var getSiemensRC018Plug = function() {
	
		return siemensRC018Plug;
	}
	
	/**
	 * {Function} Controls manufacturer specific smartplugs.
	 *
	 * @param {Object} plug, {Number} systemCode, {Number} unitCode, {Number} value, {Boolean} group.
	 * @return {Object} promise.
	 */
	var radioFrequencyPlug = function(plug, systemCode, unitCode, value, group) {
		
		if(systemCode > Math.pow(2, plug.systemCodeBitLength)-1) {
			
			$log.error("System code value is too large for chosen plug!");
		}
		else if(unitCode > Math.pow(2, plug.unitCodeBitLength)-1) {
		
			$log.error("Unit code value is too large for chosen plug!");
		}
		else {
		
			var data = {
			
				"addr": {
				
					"nwkAddr": 0
				},
				"endpoint": 60,
				"cluster": 64560,
				"command": 0,
				"mfCode": 20039,
				"payload": utilityService.createRadioFrequencyPlugPayload(plug, systemCode, unitCode, value, group)
			}
		
			var ip = ipAddressService.getIp();
		
			return $http.post("http://"+ip+"/zgd/zcl", data).then(function(response) {
			
				var promise = {
					
					name: plug.name,
					value: value,
					status: utilityService.getStatus(response.data.payload[1])
				};
				
				$log.info("RF PLUG "+promise.name);
				$log.log("Value: "+promise.value);
				$log.log("Status: "+promise.status);
				
				return promise;			
			}, function(httpError) {
			
				$log.error("Failed to send RF command!");
				$log.error("data: " + httpError.data);
				$log.error("status: " + httpError.status);
			});
		}
	}
	
	return {
		
		radioFrequencyPlug: radioFrequencyPlug,
		getImpulsPlug: getImpulsPlug,
		getBrennenstuhlRCS1000NPlug: getBrennenstuhlRCS1000NPlug,
		getClickOnClickOffAPA22300RPlug: getClickOnClickOffAPA22300RPlug,
		getIntertechnoITR1500Plug: getIntertechnoITR1500Plug,
		getElroHomeEasyHE877Plug: getElroHomeEasyHE877Plug,
		getSiemensRC018Plug: getSiemensRC018Plug,
		customPlug: customPlug
	};
}]);