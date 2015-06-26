lanSdkDocModule.controller('lanSdkDocCtrl', ['$scope', 'lanSdkDocService', 'zigbeeLutService', function($scope, lanSdkDocService, zigbeeLutService) {

	$scope.attributes = lanSdkDocService.getAttributes();
	$scope.commands = lanSdkDocService.getCommands();	
	$scope.isCollapsed = lanSdkDocService.getIsCollapsed();
	$scope.logClusterLut = zigbeeLutService.getLogClusterLut();
	$scope.iasLut = zigbeeLutService.getIasLut();
	$scope.armStateLut = zigbeeLutService.getArmStateLut();
	$scope.dataTypeLut = zigbeeLutService.getDataTypeLut();
	$scope.statusLut = zigbeeLutService.getStatusLut();
	$scope.argDataTypeLut = zigbeeLutService.getArgDataTypeLut();
	
	$scope.searchList = [	{name: 'net2gridApiModule', template: 'net2gridApiModule', click: ''}, 
							{name: 'ipAddressService', template: 'ipAddressService', click: ''}, 
							{name: 'utilityService', template: 'utilityService', click: ''}, 
							{name: 'generalDevicesService', template: 'generalDevicesService', click: ''}, 
							{name: 'iasDevicesService', template: 'iasDevicesService', click: ''}, 
							{name: 'zigbeeLutService', template: 'zigbeeLutService', click: ''}, 
							{name: 'getIp()', template: 'getIp', click: ''}, 
							{name: 'setIp(ip)', template: 'setIp', click: ''}, 
							{name: 'getGeneralDevices()', template: 'getGeneralDevices', click: ''}, 
							{name: 'euiToHex()', template: 'euiToHex', click: ''}, 
							{name: 'generalDevices', template: 'generalDevices', click: ''}, 
							{name: 'logAvailableAttributes()', template: 'logAvailableAttributes', click: ''},
							{name: 'logAvailableCommands()', template: 'logAvailableCommands', click: ''},
							{name: 'logDeviceInfo()', template: 'logDeviceInfo', click: ''},
							{name: 'checkCluster(cluster)', template: 'checkCluster', click: ''},
							{name: 'readAttributes(clusterId, attributes)',	template: 'readAttributes', click: ''},
							{name: 'writeCommand(command, args)', template: 'writeCommand', click: ''},
							{name: 'writeAttributes(clusterId, attributes, value)', template: 'writeAttributes', click: ''},
							{name: 'discoverAttributes(clusterId)', template: 'discoverAttributes', click: ''},
							{name: 'configureReportingSend(clusterId, attributes, timeouts)', template: 'configureReportingSend', click: ''},
							{name: 'configureReportingReceive(clusterId, attributes, minInterval, maxInterval, reportableChange)', template: 'configureReportingReceive', click: ''},
							{name: 'readReportingConfiguration(clusterId, attributes, directions)', template: 'readReportingConfiguration', click: ''},
							{name: 'logAttributeContent(attribute)', template: 'logAttributeContent', click: ''},
							{name: 'setupGeneralDevices()',	template: 'setupGeneralDevices', click: ''},
							{name: 'logCommandContent(command)', template: 'logCommandContent', click: ''},
							{name: 'getCode()',	template: 'getCode', click: ''},
							{name: 'setCode(newCode)', template: 'setCode', click: ''},
							{name: 'getArmState()',	template: 'getArmState', click: ''},
							{name: 'setArmState(code, mode)', template: 'setArmState', click: ''},
							{name: 'getSensorDevices()', template: 'getSensorDevices', click: ''},
							{name: 'sensorDevices', template: 'sensorDevices', click: ''},
							{name: 'getMask()', template: 'getMask', click: ''},
							{name: 'setMask(code, mask)', template: 'setMask', click: ''},
							{name: 'setupIasSensors()', template: 'setupIasSensors', click: ''},
							{name: 'clusterLut', template: 'clusterLut', click: ''},
							{name: 'getClusterLut()', template: 'getClusterLut', click: ''},
							{name: 'getLogClusterLut()', template: 'getLogClusterLut', click: ''},
							{name: 'logClusterLut', template: 'logClusterLut', click: ''},
							{name: 'getIasLut()', template: 'getIasLut', click: ''},
							{name: 'iasLut', template: 'iasLut', click: ''},
							{name: 'getArmStateLut()', template: 'getArmStateLut', click: ''},
							{name: 'armStateLut', template: 'armStateLut', click: ''},
							{name: 'getDataTypeLut()', template: 'getDataTypeLut', click: ''},
							{name: 'dataTypeLut', template: 'dataTypeLut', click: ''},
							{name: 'getStatusLut()', template: 'getStatusLut', click: ''},
							{name: 'statusLut', template: 'statusLut', click: ''},
							{name: 'radioFrequencyDevicesService', template: 'radioFrequencyDevicesService', click: ''},
							{name: 'customPlug(name, bitPeriod, protocol, systemCodeBitLength, unitCodeBitLength)', template: 'customPlug', click: ''},						
							{name: 'radioFrequencyPlug(plug, systemCode, unitCode, value, group)', template: 'radioFrequencyPlug', click: ''},
							{name: 'getImpulsPlug()', template: 'getImpulsPlug', click: ''},
							{name: 'impulsPlug()', template: 'impulsPlug', click: ''},
							{name: 'getBrennenstuhlRCS1000NPlug()', template: 'getBrennenstuhlRCS1000NPlug', click: ''},
							{name: 'brennenstuhlRCS1000NPlug', template: 'brennenstuhlRCS1000NPlug', click: ''},
							{name: 'getClickOnClickOffAPA22300RPlug()', template: 'getClickOnClickOffAPA22300RPlug', click: ''},
							{name: 'clickOnClickOffAPA22300RPlug', template: 'clickOnClickOffAPA22300RPlug', click: ''},
							{name: 'getIntertechnoITR1500Plug()', template: 'getIntertechnoITR1500Plug', click: ''},
							{name: 'intertechnoITR1500Plug', template: 'intertechnoITR1500Plug', click: ''},
							{name: 'getElroHomeEasyHE877Plug()', template: 'getElroHomeEasyHE877Plug', click: ''},
							{name: 'elroHomeEasyHE877Plug', template: 'elroHomeEasyHE877Plug', click: ''},
							{name: 'getSiemensRC018Plug()', template: 'getSiemensRC018Plug', click: ''},
							{name: 'siemensRC018Plug', template: 'siemensRC018Plug', click: ''},
							{name: 'getEndPoint(clusterId, endPoints)', template: 'getEndPoint', click: ''},
							{name: 'checkAttrAvailability(clusterId, attributes)', template: 'checkAttrAvailability', click: ''},
							{name: 'logGlobalCommandClusterError(clusterId)', template: 'logGlobalCommandClusterError', click: ''},
							{name: 'getDataTypeLength(id)', template: 'getDataTypeLength', click: ''},
							{name: 'convertPayload(payload, length)', template: 'convertPayload', click: ''},
							{name: 'argArrayCheck(command, args)', template: 'argArrayCheck', click: ''},
							{name: 'checkWritability(attributes)', template: 'checkWritability', click: ''},
							{name: 'createWriteAttributesPayload(attributes, value)', template: 'createWriteAttributesPayload', click: ''},
							{name: 'getStatus(value)', template: 'getStatus', click: ''},
							{name: 'getDataTypeName(id)', template: 'getDataTypeName', click: ''},
							{name: 'createReadReportingConfigurationPayload(attributes, directions)', template: 'createReadReportingConfigurationPayload', click: ''},
							{name: 'getDataTypeAdFromId(id)', template: 'getDataTypeAdFromId', click: ''},
							{name: 'parsePayloadNum(payload)', template: 'parsePayloadNum', click: ''},
							{name: 'getDataTypeInvalidNumber(id)', template: 'getDataTypeInvalidNumber', click: ''},
							{name: 'createConfigureReportingSendPayload(attributes, timeouts)', template: 'createConfigureReportingSendPayload', click: ''},
							{name: 'getDirectionString(dirNum)', template: 'getDirectionString', click: ''},
							{name: 'checkReportableChangeNeeded(attributes, reportableChange)', template: 'checkReportableChangeNeeded', click: ''},
							{name: 'getDataTypeAdFromName(name)', template: 'getDataTypeAdFromName', click: ''},
							{name: 'getDataTypeIdFromName(name)', template: 'getDataTypeIdFromName', click: ''},
							{name: 'createConfigureReportingReceivePayload(attributes, minInterval, maxInterval, reportableChange)', template: 'createConfigureReportingReceivePayload', click: ''},
							{name: 'createRadioFrequencyPlugPayload(plug, systemCode, unitCode, value, group)', template: 'createRadioFrequencyPlugPayload', click: ''},
							{name: 'createWriteCommandPayload(args, command)', template: 'createWriteCommandPayload', click: ''},
							{name: 'getArgDataTypeLut()', template: 'getArgDataTypeLut', click: ''},
							{name: 'argDataTypeLut', template: 'argDataTypeLut', click: ''},
							{name: 'checkArmState(armState, mask)', template: 'checkArmState', click: ''},
							{name: 'convertMaskType(mask)', template: 'convertMaskType', click: ''},
							{name: 'createReadAttributesPayload(attributes)', template: 'createReadAttributesPayload', click: ''},
							{name: 'userService', template: 'userService', click: ''},
							{name: 'setUserData(clientId, clientSecret, userName, passWord)', template: 'setUserData', click: ''},
							{name: 'getUserData()', template: 'getUserData', click: ''},
							{name: 'getToken()', template: 'getToken', click: ''},
							{name: 'postTokenRequest()', template: 'postTokenRequest', click: ''},
							{name: 'setEui(euiStr)', template: 'setEui', click: ''},
							{name: 'getEui()', template: 'getEui', click: ''}];
	
	var i;
	for(i = 0; i < $scope.attributes.length; i++) {
		
		$scope.searchList.push({name: 'get'+$scope.attributes[i].nameFun+'Attribute()', template: 'functionsAttributes', click: i});
		$scope.searchList.push({name: $scope.attributes[i].nameObj+'Attribute', template: 'objectsAttributes', click: i});
	}
	for(i = 0; i < $scope.commands.length; i++) {
		
		$scope.searchList.push({name: 'get'+$scope.commands[i].nameFun+'Command()', template: 'functionsCommands', click: i});
		$scope.searchList.push({name: $scope.commands[i].nameObj+'Command', template: 'objectsCommands', click: i});
	}
	
	$scope.findTag = '';
	$scope.content;
	
	$scope.changeAttributeContent = function(label) {
		
		$scope.content = $scope.attributes[label];
	}
	
	$scope.changeCommandContent = function(label) {
		
		$scope.content = $scope.commands[label];
	}
	
	$scope.dynamicLink = function(label) {
		
		if(label.template == "functionsAttributes" || label.template == "objectsAttributes") {
			
			$scope.changeAttributeContent(label.click);
			console.log("Attribute link");
		}
		else if(label.template == "functionsCommands" || label.template == "objectsCommands") {
			
			$scope.changeCommandContent(label.click);
			console.log("Commands link");
		}
		else {
			
			console.log("Static link");
		}
	}
}]);