lanSdkDocModule.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
	
	$stateProvider
	.state('introduction', {
		
		url: "/introduction",
		templateUrl: "templates/introduction.html"
	})
	.state('global-design', {
		
		url: "/global-design",
		templateUrl: "templates/global-design.html"
	})
	.state('sdk', {
		
		url: "/sdk",
		templateUrl: "templates/sdk.html"
	})
	.state('net2gridApiModule', {
		
		url: "/net2gridApiModule",
		templateUrl: "templates/net2gridApiModule.html"
	})
	.state('ipAddressService', {
		
		url: "/ipAddressService",
		templateUrl: "templates/ipAddressService.html"
	})
	.state('utilityService', {
		
		url: "/utilityService",
		templateUrl: "templates/utilityService.html"
	})
	.state('zigbeeLutService', {
		
		url: "/zigbeeLutService",
		templateUrl: "templates/zigbeeLutService.html"
	})
	.state('generalDevicesService', {
		
		url: "/generalDevicesService",
		templateUrl: "templates/generalDevicesService.html"
	})
	.state('iasDevicesService', {
		
		url: "/iasDevicesService",
		templateUrl: "templates/iasDevicesService.html"
	})
	.state('functions', {
		
		url: "/functions",
		templateUrl: "templates/functions.html"
	})
	.state('getIp', {
		
		url: "/getIp",
		templateUrl: "templates/getIp.html"
	})
	.state('setIp', {
		
		url: "/setIp",
		templateUrl: "templates/setIp.html"
	})
	.state('euiToHex', {
		
		url: "/euiToHex",
		templateUrl: "templates/euiToHex.html"
	})
	.state('getGeneralDevices', {
		
		url: "/getGeneralDevices",
		templateUrl: "templates/getGeneralDevices.html"
	})
	.state('setupGeneralDevices', {
		
		url: "/setupGeneralDevices",
		templateUrl: "templates/setupGeneralDevices.html"
	})
	.state('logAttributeContent', {
		
		url: "/logAttributeContent",
		templateUrl: "templates/logAttributeContent.html"
	})
	.state('logCommandContent', {
		
		url: "/logCommandContent",
		templateUrl: "templates/logCommandContent.html"
	})
	.state('getCode', {
		
		url: "/getCode",
		templateUrl: "templates/getCode.html"
	})
	.state('setCode', {
		
		url: "/setCode",
		templateUrl: "templates/setCode.html"
	})
	.state('getArmState', {
		
		url: "/getArmState",
		templateUrl: "templates/getArmState.html"
	})
	.state('setArmState', {
		
		url: "/setArmState",
		templateUrl: "templates/setArmState.html"
	})
	.state('getSensorDevices', {
		
		url: "/getSensorDevices",
		templateUrl: "templates/getSensorDevices.html"
	})
	.state('setupIasSensors', {
		
		url: "/setupIasSensors",
		templateUrl: "templates/setupIasSensors.html"
	})
	.state('getClusterLut', {
		
		url: "/getClusterLut",
		templateUrl: "templates/getClusterLut.html"
	})
	.state('getLogClusterLut', {
		
		url: "/getLogClusterLut",
		templateUrl: "templates/getLogClusterLut.html"
	})
	.state('getIasLut', {
		
		url: "/getIasLut",
		templateUrl: "templates/getIasLut.html"
	})
	.state('getArmStateLut', {
		
		url: "/getArmStateLut",
		templateUrl: "templates/getArmStateLut.html"
	})
	.state('getDataTypeLut', {
		
		url: "/getDataTypeLut",
		templateUrl: "templates/getDataTypeLut.html"
	})
	.state('getStatusLut', {
		
		url: "/getStatusLut",
		templateUrl: "templates/getStatusLut.html"
	})
	.state('functionsAttributes', {
		
		url: "/functionsAttributes",
		templateUrl: "templates/functionsAttributes.html",
		controller: 'lanSdkDocCtrl'
	})
	.state('functionsCommands', {
		
		url: "/functionsCommands",
		templateUrl: "templates/functionsCommands.html",
		controller: 'lanSdkDocCtrl'
	})
	.state('objects', {
		
		url: "/objects",
		templateUrl: "templates/objects.html"
	})
	.state('generalDevices', {
		
		url: "/generalDevices",
		templateUrl: "templates/generalDevices.html"
	})
	.state('sensorDevices', {
		
		url: "/sensorDevices",
		templateUrl: "templates/sensorDevices.html"
	})
	.state('clusterLut', {
		
		url: "/clusterLut",
		templateUrl: "templates/clusterLut.html"
	})
	.state('logClusterLut', {
		
		url: "/logClusterLut",
		templateUrl: "templates/logClusterLut.html"
	})
	.state('iasLut', {
		
		url: "/iasLut",
		templateUrl: "templates/iasLut.html"
	})
	.state('armStateLut', {
		
		url: "/armStateLut",
		templateUrl: "templates/armStateLut.html"
	})
	.state('dataTypeLut', {
		
		url: "/dataTypeLut",
		templateUrl: "templates/dataTypeLut.html"
	})
	.state('statusLut', {
		
		url: "/statusLut",
		templateUrl: "templates/statusLut.html"
	})
	.state('objectsAttributes', {
		
		url: "/objectsAttributes",
		templateUrl: "templates/objectsAttributes.html",
		controller: 'lanSdkDocCtrl'
	})
	.state('objectsCommands', {
		
		url: "/objectsCommands",
		templateUrl: "templates/objectsCommands.html",
		controller: 'lanSdkDocCtrl'
	})
	.state('logAvailableAttributes', {
		
		url: "/logAvailableAttributes",
		templateUrl: "templates/logAvailableAttributes.html",
	})
	.state('logAvailableCommands', {
		
		url: "/logAvailableCommands",
		templateUrl: "templates/logAvailableCommands.html",
	})
	.state('logDeviceInfo', {
		
		url: "/logDeviceInfo",
		templateUrl: "templates/logDeviceInfo.html",
	})
	.state('checkCluster', {
		
		url: "/checkCluster",
		templateUrl: "templates/checkCluster.html",
	})
	.state('readAttributes', {
		
		url: "/readAttributes",
		templateUrl: "templates/readAttributes.html",
	})
	.state('writeCommand', {
		
		url: "/writeCommand",
		templateUrl: "templates/writeCommand.html",
	})
	.state('writeAttributes', {
		
		url: "/writeAttributes",
		templateUrl: "templates/writeAttributes.html",
	})
	.state('discoverAttributes', {
		
		url: "/discoverAttributes",
		templateUrl: "templates/discoverAttributes.html",
	})
	.state('configureReportingSend', {
		
		url: "/configureReportingSend",
		templateUrl: "templates/configureReportingSend.html",
	})
	.state('configureReportingReceive', {
		
		url: "/configureReportingReceive",
		templateUrl: "templates/configureReportingReceive.html",
	})
	.state('readReportingConfiguration', {
		
		url: "/readReportingConfiguration",
		templateUrl: "templates/readReportingConfiguration.html",
	})
	.state('getMask', {
		
		url: "/getMask",
		templateUrl: "templates/getMask.html",
	})
	.state('setMask', {
		
		url: "/setMask",
		templateUrl: "templates/setMask.html",
	})
	.state('radioFrequencyDevicesService', {
		
		url: "/radioFrequencyDevicesService",
		templateUrl: "templates/radioFrequencyDevicesService.html",
	})
	.state('customPlug', {
		
		url: "/customPlug",
		templateUrl: "templates/customPlug.html",
	})
	.state('radioFrequencyPlug', {
		
		url: "/radioFrequencyPlug",
		templateUrl: "templates/radioFrequencyPlug.html",
	})
	.state('getImpulsPlug', {
		
		url: "/getImpulsPlug",
		templateUrl: "templates/getImpulsPlug.html",
	})
	.state('impulsPlug', {
		
		url: "/impulsPlug",
		templateUrl: "templates/impulsPlug.html",
	})
	.state('getBrennenstuhlRCS1000NPlug', {
		
		url: "/getBrennenstuhlRCS1000NPlug",
		templateUrl: "templates/getBrennenstuhlRCS1000NPlug.html",
	})
	.state('brennenstuhlRCS1000NPlug', {
		
		url: "/brennenstuhlRCS1000NPlug",
		templateUrl: "templates/brennenstuhlRCS1000NPlug.html",
	})
	.state('getClickOnClickOffAPA22300RPlug', {
		
		url: "/getClickOnClickOffAPA22300RPlug",
		templateUrl: "templates/getClickOnClickOffAPA22300RPlug.html",
	})
	.state('clickOnClickOffAPA22300RPlug', {
		
		url: "/clickOnClickOffAPA22300RPlug",
		templateUrl: "templates/clickOnClickOffAPA22300RPlug.html",
	})
	.state('getIntertechnoITR1500Plug', {
		
		url: "/getIntertechnoITR1500Plug",
		templateUrl: "templates/getIntertechnoITR1500Plug.html",
	})
	.state('intertechnoITR1500Plug', {
		
		url: "/intertechnoITR1500Plug",
		templateUrl: "templates/intertechnoITR1500Plug.html",
	})
	.state('getElroHomeEasyHE877Plug', {
		
		url: "/getElroHomeEasyHE877Plug",
		templateUrl: "templates/getElroHomeEasyHE877Plug.html",
	})
	.state('elroHomeEasyHE877Plug', {
		
		url: "/elroHomeEasyHE877Plug",
		templateUrl: "templates/elroHomeEasyHE877Plug.html",
	})
	.state('getSiemensRC018Plug', {
		
		url: "/getSiemensRC018Plug",
		templateUrl: "templates/getSiemensRC018Plug.html",
	})
	.state('siemensRC018Plug', {
		
		url: "/siemensRC018Plug",
		templateUrl: "templates/siemensRC018Plug.html",
	})
	.state('getEndPoint', {
		
		url: "/getEndPoint",
		templateUrl: "templates/getEndPoint.html",
	})
	.state('checkAttrAvailability', {
		
		url: "/checkAttrAvailability",
		templateUrl: "templates/checkAttrAvailability.html",
	})
	.state('logGlobalCommandClusterError', {
		
		url: "/logGlobalCommandClusterError",
		templateUrl: "templates/logGlobalCommandClusterError.html",
	})
	.state('getDataTypeLength', {
		
		url: "/getDataTypeLength",
		templateUrl: "templates/getDataTypeLength.html",
	})
	.state('convertPayload', {
		
		url: "/convertPayload",
		templateUrl: "templates/convertPayload.html",
	})
	.state('argArrayCheck', {
		
		url: "/argArrayCheck",
		templateUrl: "templates/argArrayCheck.html",
	})
	.state('checkWritability', {
		
		url: "/checkWritability",
		templateUrl: "templates/checkWritability.html",
	})
	.state('createWriteAttributesPayload', {
		
		url: "/createWriteAttributesPayload",
		templateUrl: "templates/createWriteAttributesPayload.html",
	})
	.state('getStatus', {
		
		url: "/getStatus",
		templateUrl: "templates/getStatus.html",
	})
	.state('getDataTypeName', {
		
		url: "/getDataTypeName",
		templateUrl: "templates/getDataTypeName.html",
	})
	.state('createReadReportingConfigurationPayload', {
		
		url: "/createReadReportingConfigurationPayload",
		templateUrl: "templates/createReadReportingConfigurationPayload.html",
	})
	.state('getDataTypeAdFromId', {
		
		url: "/getDataTypeAdFromId",
		templateUrl: "templates/getDataTypeAdFromId.html",
	})
	.state('parsePayloadNum', {
		
		url: "/parsePayloadNum",
		templateUrl: "templates/parsePayloadNum.html",
	})
	.state('getDataTypeInvalidNumber', {
		
		url: "/getDataTypeInvalidNumber",
		templateUrl: "templates/getDataTypeInvalidNumber.html",
	})
	.state('createConfigureReportingSendPayload', {
		
		url: "/createConfigureReportingSendPayload",
		templateUrl: "templates/createConfigureReportingSendPayload.html",
	})
	.state('getDirectionString', {
		
		url: "/getDirectionString",
		templateUrl: "templates/getDirectionString.html",
	})
	.state('checkReportableChangeNeeded', {
		
		url: "/checkReportableChangeNeeded",
		templateUrl: "templates/checkReportableChangeNeeded.html",
	})
	.state('getDataTypeAdFromName', {
		
		url: "/getDataTypeAdFromName",
		templateUrl: "templates/getDataTypeAdFromName.html",
	})
	.state('getDataTypeIdFromName', {
		
		url: "/getDataTypeIdFromName",
		templateUrl: "templates/getDataTypeIdFromName.html",
	})
	.state('createConfigureReportingReceivePayload', {
		
		url: "/createConfigureReportingReceivePayload",
		templateUrl: "templates/createConfigureReportingReceivePayload.html",
	})
	.state('createRadioFrequencyPlugPayload', {
		
		url: "/createRadioFrequencyPlugPayload",
		templateUrl: "templates/createRadioFrequencyPlugPayload.html",
	})
	.state('createWriteCommandPayload', {
		
		url: "/createWriteCommandPayload",
		templateUrl: "templates/createWriteCommandPayload.html",
	})
	.state('getArgDataTypeLut', {
		
		url: "/getArgDataTypeLut",
		templateUrl: "templates/getArgDataTypeLut.html",
	})
	.state('argDataTypeLut', {
		
		url: "/argDataTypeLut",
		templateUrl: "templates/argDataTypeLut.html",
	})
	.state('checkArmState', {
		
		url: "/checkArmState",
		templateUrl: "templates/checkArmState.html",
	})
	.state('convertMaskType', {
		
		url: "/convertMaskType",
		templateUrl: "templates/convertMaskType.html",
	})
	.state('createReadAttributesPayload', {
		
		url: "/createReadAttributesPayload",
		templateUrl: "templates/createReadAttributesPayload.html",
	})
	.state('userService', {
		
		url: "/userService",
		templateUrl: "templates/userService.html",
	})
	.state('setUserData', {
		
		url: "/setUserData",
		templateUrl: "templates/setUserData.html",
	})
	.state('getUserData', {
		
		url: "/getUserData",
		templateUrl: "templates/getUserData.html",
	})
	.state('getToken', {
		
		url: "/getToken",
		templateUrl: "templates/getToken.html",
	})
	.state('postTokenRequest', {
		
		url: "/postTokenRequest",
		templateUrl: "templates/postTokenRequest.html",
	})
	.state('setEui', {
		
		url: "/setEui",
		templateUrl: "templates/setEui.html",
	})
	.state('getEui', {
		
		url: "/getEui",
		templateUrl: "templates/getEui.html",
	});

	$urlRouterProvider.otherwise("/sdk");
}]);