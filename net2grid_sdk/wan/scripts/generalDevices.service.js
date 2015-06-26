/**
 * Service for handling all general devices.
 * 
 * @services $http, $rootScope, $log, ipAddressService, zigbeeLutService.
 * @return	{Function} getGeneralDevices(); Returns general devices.
 * 			{Function} setupGeneralDevices(); Handles virtual general device configuration.
 * 			{Function} logAttributeContent(attribute); Shows content of attribute object.
 * 			{Function} logCommandContent(command); Shows content of command object.
 */
net2gridApiModule.service('generalDevicesService', ['$http', 
                                                    '$rootScope', 
                                                    '$log',
													'$timeout',
                                                    'ipAddressService', 
                                                    'zigbeeLutService', 
													'utilityService',
													'userService',
                                                    function($http, $rootScope, $log, $timeout, ipAddressService, zigbeeLutService, utilityService, userService) {
	
	/**
	 * {Object} General devices object.
	 * 
	 * @description This variable contains all general devices as an array.
	 */
	var generalDevices = [];
	
	/**
	 * {Function} Returns general devices.
	 * 
	 * @return generalDevices.
	 */
	var getGeneralDevices = function() {
		
		return generalDevices;
	}
		
	/**
	 * {Function} Shows general device information.
	 */
	var logDeviceInfo = function() {

		$log.info('----------DEVICE-INFO-----------')
		var v;
		for(v=0; v<this.endPoints.length; v++) {

			$log.log('ENDPOINT: ' + this.endPoints[v].ep + " - DEVICE_ID: " + this.endPoints[v].deviceId + " - DEVICE_VERSION: " + this.endPoints[v].deviceVersion);
		}
	}
		
	/**
	 * {Function} Shows available attributes of the device.
	 */
	var logAvailableAttributes = function() {

		var logClusterLut = zigbeeLutService.getLogClusterLut();
		
		$log.info('---------ATTRIBUTE-LIST---------');
		var cLut
		for(cLut=0; cLut<logClusterLut.length; cLut++) {

			var e;
			for(e=0; e<this.endPoints.length; e++) {

				var c;
				for(c=0; c<this.endPoints[e].clusters.length; c++) {

					// Log available attributes
					if(logClusterLut[cLut].clusterId === this.endPoints[e].clusters[c].clusterId) {

						$log.log('CLUSTER: '+logClusterLut[cLut].clusterName);
						var a;
						for(a=0; a<logClusterLut[cLut].attributes.length; a++) {

							$log.log(logClusterLut[cLut].attributes[a].name + 'Attribute');
						}
						$log.log('-');
					}
				}
			}
		}
	}
	
	/**
	 * {Function} Shows available commands of the device.
	 */
	var logAvailableCommands = function() {

		var logClusterLut = zigbeeLutService.getLogClusterLut();
		
		$log.info('----------COMMAND-LIST----------');
		var cLut;
		for(cLut=0; cLut<logClusterLut.length; cLut++) {

			var e;
			for(e=0; e<this.endPoints.length; e++) {

				var c;
				for(c=0; c<this.endPoints[e].clusters.length; c++) {

					// Log available commands
					if(logClusterLut[cLut].clusterId === this.endPoints[e].clusters[c].clusterId) {

						$log.log('CLUSTER: '+logClusterLut[cLut].clusterName);
						var com;
						for(com=0; com<logClusterLut[cLut].commands.length; com++) {

							$log.log(logClusterLut[cLut].commands[com].name + 'Command');
						}
						$log.log('-');
					}
				}
			}
		}
	}
		
	/**
	 * {Function} Checks whether cluster is available within device.
	 * 
	 * @param {Number} clusterId.
	 * @return {Boolean} check.
	 */
	var checkCluster = function(clusterId) {
		
		var check = false,
			i, c;
			
		for(i=0; i<this.endPoints.length; i++) {
			
			for(c=0; c<this.endPoints[i].clusters.length; c++) {
				
				if(clusterId === this.endPoints[i].clusters[c].clusterId) {
					
					check = true;
				}
			}
		}
		
		return check;
	}

	/**
	 * {Function} Writes chosen command to device.
	 * 
	 * @param {Object} command, {Array} args.
	 */
	var writeCommand = function(command, args) {

		args = args || [];

		var ep,
			clusterId,
			check = false;

		// Argument validation
		if(args.length != command.arg.length) {

			$log.error('Number of arguments is invalid!');
		}
		else {

			if(utilityService.argArrayCheck(command, args)) {
				
				//Command validation
				var e;
				for(e=0; e<this.endPoints.length; e++) {

					var i;
					for(i=0; i<this.endPoints[e].clusters.length; i++) {

						if(this.endPoints[e].clusters[i].clusterId === command.commandClusterId) {

							ep = this.endPoints[e].ep;
							clusterId = this.endPoints[e].clusters[i].clusterId;
							check = true;
						}
					}
				}

				// Notification of command availability
				if(check === false) {

					$log.error(command.name + ' command does not exist within this device! Check available commands with logAvailableCommands();');
				}
				else {
					
					utilityService.createWriteCommandPayload(args, command);
					
					var data = {

						"addr": {

							"eui": this.eui.toString()
						},
						"endpoint": ep,
						"profile": 260,
						"cluster": clusterId,
						"command": command.commandId,
						"payload": utilityService.createWriteCommandPayload(args, command)
					};
					// Post request to zgd
					var eui = userService.getEui();
					var token = userService.getToken();	
					return $http.post('https://ipha-web.net2grid.net/v1/zgd/'+eui+'/zcl?access_token='+token, data).then(function(response) {
						
						/*var payload = response.data.payload;
						
						var promise = {
								
							name: command.name,
							id: command.commandId,
							clusterId: command.commandClusterId,
							status: utilityService.getStatus(payload[1])
						};
						
						$log.info("WRITE COMMAND - PROMISE OBJECT");
						$log.log("Name: "+promise.name);
						$log.log("Command ID: "+promise.id);
						$log.log("Cluster ID: "+promise.clusterId);
						$log.log("Status: "+promise.status);*/
						
						return response;					
					}, function(httpError) {
						
						$log.error("Failed to write command to device!");
						$log.error("data: " + httpError.data);
						$log.error("status: " + httpError.status);		
					});
				}
			}
		}
	}
	
	/**
	 * {Function} Read Attributes global command.
	 * 
	 * @param {Number} clusterId, {Array} {Object} attributes.
	 * @return {Array} {Object} promise.
	 */
	var readAttributes = function(clusterId, attributes) {
			
		var buf = utilityService.getEndPoint(clusterId, this.endPoints);
		var check = buf[0];
		var ep = buf[1];
				
		// Notification of cluster availability
		if(check === false) {

			utilityService.logGlobalCommandClusterError(clusterId);
		}
		else {
			
			check = utilityService.checkAttrAvailability(clusterId, attributes);
			
			if(check === false) {
				
				$log.error("Chosen Cluster ID and attribute input do not match!");
			}
			else {
						
				var data = {
					
					"addr": {
						
						"nwkAddr": this.nwkAddr
					},
					"endpoint": ep,
					"cluster": clusterId,
					"command": 0,
					"global": true,
					"payload": utilityService.createReadAttributesPayload(attributes)
				};
				
				var eui = userService.getEui();
				var token = userService.getToken();
				return $http.post("https://ipha-web.net2grid.net/v1/zgd/"+eui+'/zcl?access_token='+token, data).then(function(response) {
					
					return response;
					/*var payload = response.data.payload;
					var promise = [];
					var a;
					
					for(a=0; a<attributes.length; a++) {
											
						promise.push({
							
							name: attributes[a].name,
							id: attributes[a].attributeId,
							status: utilityService.getStatus(payload[2]),
							type: attributes[a].type,
							value: utilityService.convertPayload(payload, utilityService.getDataTypeLength(payload[3]))
						});
						
						$log.info("READ ATTRIBUTES - PROMISE OBJECT "+a);
						$log.log("Name: "+promise[a].name);
						$log.log("ID: "+promise[a].id);
						$log.log("Status: "+promise[a].status);
						$log.log("Type: "+promise[a].type);
						$log.log("Value: "+promise[a].value);
						

						if(promise[a].type === 'CHAR_STRING' || promise[a].type === 'OCTET_STRING') {
							
							payload.splice(0, 5+payload[4]);
						} 
						else if(promise[a].type === 'LONG_CHAR_STRING' || promise[a].type === 'LONG_OCTET_STRING') {
							
							payload.splice(0, 6+((payload[4] << 8) + payload[5]));
						}
						else {
							
							payload.splice(0, 4+utilityService.getDataTypeLength(payload[3]));
						}					
					}
					
					return promise;*/
				}, function(httpError) {
			
					$log.error("Failed to read attributes from device!");
					$log.error("data: " + httpError.data);
					$log.error("status: " + httpError.status);		
				});
			}
		}
	}
	
	/**
	 * {Function} Writes an attribute of a device.
	 * 
	 * @param {Number} clusterId, {Array} {Object} attributes, {Array} value.
	 */
	var writeAttributes = function(clusterId, attributes, value) {
		
		var buf = utilityService.getEndPoint(clusterId, this.endPoints);	
		var check = buf[0];
		var ep = buf[1];
		
		if(attributes.length != value.length) {
			
			$log.error("Number of attributes does not match with the number of value entries!");
		}
		else {
			
			if(check === false) {
	
				utilityService.logGlobalCommandClusterError(clusterId);
			}
			else {
				
				check = utilityService.checkAttrAvailability(clusterId, attributes);
				
				if(check === false) {
					
					$log.error("Chosen Cluster ID and attribute input do not match!");
				}
				else {
					
					var writability = utilityService.checkWritability(attributes);
					
					if(writability[0] === false) {
						
						$log.error(writability[1]+" attribute is not writable!");
					}
					else {
						
						var data = {
								
							"addr": {
								
								"eui": this.eui
							},
							"endpoint": ep,
							"cluster": clusterId,
							"command": 3,
							"global": true,
							"payload": utilityService.createWriteAttributesPayload(attributes, value)
						};
						
						var ip = ipAddressService.getIp();
						return $http.post("http://"+ip+"/zgd/zcl", data).then(function(response) {
							
							var promise = [];
							var a;
							var payload = response.data.payload;
							
							for(a=0; a<attributes.length; a++) {
								
								promise.push({
									
									name: attributes[a].name,
									id: attributes[a].attributeId,
									status: utilityService.getStatus(payload[0]),
									type: attributes[a].type,
									value: value[a]
								});
								
								$log.info("WRITE ATTRIBUTES - PROMISE OBJECT "+a);
								$log.log("Name: "+promise[a].name);
								$log.log("ID: "+promise[a].id);
								$log.log("Status: "+promise[a].status);
								$log.log("Type: "+promise[a].type);
								$log.log("Value: "+promise[a].value);
								
								if(payload[0] === 0) {
									
									payload.splice(0, 1);
								}
								else {
									
									payload.splice(0, 3);
								}
							}
										
							return promise;
						}, function(httpError) {
							
							$log.error("Failed to write attributes to device!");
							$log.error("data: " + httpError.data);
							$log.error("status: " + httpError.status);		
						});
					}
				}
			}
		}
	}
	
	/**
	 * {Function} Does an attribute discovery in the chosen cluster.
	 * 
	 * @param {Number} clusterId.
	 * @return {Array} {Object} promise.
	 */
	var discoverAttributes = function(clusterId) {
		
		var buf = utilityService.getEndPoint(clusterId, this.endPoints);	
		var check = buf[0];
		var ep = buf[1];
		
		if(check === false) {
			
			utilityService.logGlobalCommandClusterError(clusterId);
		}
		else {
			
			var ip = ipAddressService.getIp();

			var data = {
					
				"addr": {
					
					"eui": this.eui
				},
				"endpoint": ep,
				"cluster": clusterId,
				"command": 12,
				"global": true,
				"payload": [0,0,0xff]
			};
		
			return $http.post("http://"+ip+"/zgd/zcl", data).then(function(response) {
				
				var promise = [];
				var payload = response.data.payload;
				var a, d;

				if(payload != null) {
					
					payload.splice(0, 1);
					
					for(a=0, d=0; a<payload.length; a+=3, d++) {
						
						promise.push({
							
							device: this.label,
							clusterId: clusterId,
							endPoint: ep,
							attributeId: utilityService.parsePayloadNum([payload[a], payload[a+1]]),
							type: utilityService.getDataTypeName(payload[a+2])
						});
						
						$log.info("DISCOVER ATTRIBUTES - PROMISE OBJECT "+d);
						$log.log("Device: " +promise[d].device);
						$log.log("Cluster ID: " +promise[d].clusterId);
						$log.log("Endpoint: " +promise[d].endPoint);
						$log.log("Attribute ID: "+promise[d].attributeId);
						$log.log("Type: "+promise[d].type);
					}
				}
								
				return promise;
			}, function(httpError) {
								
				$log.error("Failed to discover attributes!");
				$log.error("data: " + httpError.data);
				$log.error("status: " + httpError.status);		
			});		
		}
	}
	
	/**
	 * {Function} Configure reporting to send.
	 * 
	 * @param {Number} clusterId, {Array} {Object} attributes, {Array} {Number} timeouts.
	 * @return {Array} {Object} promise.
	 */
	var configureReportingSend = function(clusterId, attributes, timeouts) {
		
		var buf = utilityService.getEndPoint(clusterId, this.endPoints);	
		var check = buf[0];
		var ep = buf[1];
		
		if(attributes.length != timeouts.length) {
			
			$log.error("Number of attributes does not match with the number of timeout entries!");
		}
		else {
			
			if(check === false) {
	
				utilityService.logGlobalCommandClusterError(clusterId);
			}
			else {
				
				check = utilityService.checkAttrAvailability(clusterId, attributes);
				
				if(check === false) {
					
					$log.error("Chosen Cluster ID and attribute input do not match!");
				}
				else {
					
					var ip = ipAddressService.getIp();
					
					var data = {
							
							"addr": {
								
								"eui": this.eui
							},
							"endpoint": ep,
							"cluster": clusterId,
							"command": 6,
							"global": true,
							"payload": utilityService.createConfigureReportingSendPayload(attributes, timeouts)
					};	
						
					return $http.post("http://"+ip+"/zgd/zcl", data).then(function(response) {
						
						var promise = []
						var payload = response.data.payload;
						var a;
						
						for(a=0; a<attributes.length; a++) {
							
							promise.push({
							
								name: attributes[a].name,
								id: attributes[a].attributeId,
								status: utilityService.getStatus(payload[0]),
								direction: 'SEND (0x01)'				
							})
							
							if(payload[0] === 0) {
								
								payload.splice(0, 1);
							}
							else {
								
								payload.splice(0, 4);
							}
							
							$log.info("CONFIGURE REPORTING SEND - PROMISE OBJECT "+a);
							$log.log("Attribute Name: "+promise[a].name);
							$log.log("Attribute ID: "+promise[a].id);
							$log.log("Status: "+promise[a].status);	
							$log.log("Direction: "+promise[a].direction);
						}

						return promise;
					}, function(httpError) {
										
						$log.error("Failed to configure reporting to send!");
						$log.error("data: " + httpError.data);
						$log.error("status: " + httpError.status);		
					});
				}
			}
		}
	}
	
	/**
	 * {Function} Configures reporting to receive.
	 * 
	 * @param {Number} clusterId, {Array} {Object} attributes, {Array} {Number} minInterval, {Array} {Number} maxInterval, {Array} {Number} reportableChange.
	 * @return {Array} {Object} promise.
	 */
	var configureReportingReceive = function(clusterId, attributes, minInterval, maxInterval, reportableChange) {
		
		var buf = utilityService.getEndPoint(clusterId, this.endPoints);	
		var check = buf[0];
		var ep = buf[1];
		
		if(attributes.length != minInterval.length) {
			
			$log.error("Number of attributes does not match with the number of minInterval entries!");
		}
		else if(attributes.length != maxInterval.length) {
				
			$log.error("Number of attributes does not match with the number of maxInterval entries!");
		}
		else if(check === false) {
	
			utilityService.logGlobalCommandClusterError(clusterId);
		}
		else {
			
			check = utilityService.checkAttrAvailability(clusterId, attributes);
			
			if(check === false) {
				
				$log.error("Chosen Cluster ID and attribute input do not match!");
			}
			else {
				
				check = utilityService.checkReportableChangeNeeded(attributes, reportableChange);	
				
				if(check === true) {
					
					var ip = ipAddressService.getIp();
					
					var data = {
							
							"addr": {
								
								"eui": this.eui
							},
							"endpoint": ep,
							"cluster": clusterId,
							"command": 6,
							"global": true,
							"payload": utilityService.createConfigureReportingReceivePayload(attributes, minInterval, maxInterval, reportableChange)
					};	
						
					return $http.post("http://"+ip+"/zgd/zcl", data).then(function(response) {
						
						var promise = [];
						
						var promise = []
						var payload = response.data.payload;
						var a;
						
						for(a=0; a<attributes.length; a++) {
							
							promise.push({
							
								name: attributes[a].name,
								id: attributes[a].attributeId,
								status: utilityService.getStatus(payload[0]),
								direction: 'RECEIVE (0x00)'				
							})
							
							if(payload[0] === 0) {
								
								payload.splice(0, 1);
							}
							else {
								
								payload.splice(0, 4);
							}
							
							$log.info("CONFIGURE REPORTING RECEIVE - PROMISE OBJECT "+a);
							$log.log("Attribute Name: "+promise[a].name);
							$log.log("Attribute ID: "+promise[a].id);
							$log.log("Status: "+promise[a].status);	
							$log.log("Direction: "+promise[a].direction);
						}
						
						return promise;						
					}, function(httpError) {
										
						$log.error("Failed to configure reporting to receive!");
						$log.error("data: " + httpError.data);
						$log.error("status: " + httpError.status);
					});
				}
			}
		}
	}
	
	/**
	 * {Function} Reads reporting configuration of the chosen attributes.
	 * 
	 * @param {Number} clusterId, {Array} {Object} attributes, {Array} {Number} directions.
	 * @return {Array} {Object} promise.
	 */
	var readReportingConfiguration = function(clusterId, attributes, directions) {
		
		var buf = utilityService.getEndPoint(clusterId, this.endPoints);	
		var check = buf[0];
		var ep = buf[1];
		
		if(attributes.length != directions.length) {
			
			$log.error("Number of attributes does not match with the number of direction entries!");
		}
		else {
			
			if(check === false) {
	
				utilityService.logGlobalCommandClusterError(clusterId);
			}
			else {
				
				check = utilityService.checkAttrAvailability(clusterId, attributes);
				
				if(check === false) {
					
					$log.error("Chosen Cluster ID and attribute input do not match!");
				}
				else {
					
					var ip = ipAddressService.getIp();

					var data = {
							
						"addr": {
							
							"eui": this.eui
						},
						"endpoint": ep,
						"cluster": clusterId,
						"command": 8,
						"global": true,
						"payload": utilityService.createReadReportingConfigurationPayload(attributes, directions)
					};	
					
					return $http.post("http://"+ip+"/zgd/zcl", data).then(function(response) {
						
						var promise = [];
						var payload = response.data.payload;
						var a;

						for(a=0; a<attributes.length; a++) {
											
							promise.push({
								
								name: attributes[a].name,
								id: attributes[a].attributeId,
								status: utilityService.getStatus(payload[0]),
								direction: utilityService.getDirectionString(directions[a])
							});
							
							$log.info("READ REPORTING CONFIGURATION - PROMISE OBJECT "+a);
							$log.log("Attribute Name: "+promise[a].name);
							$log.log("Attribute ID: "+promise[a].id);
							$log.log("Status: "+promise[a].status);	
							$log.log("Direction: "+promise[a].direction);
							
							if(directions[a] === 1) {
								
								var timeOut = utilityService.parsePayloadNum([payload[4], payload[5]]);
								
								if(timeOut === 0xffff) {
									
									promise[a].timeOut = 'NOT_CONFIGURED';
								}
								else {
									
									promise[a].timeOut = timeOut;
								}
								
								$log.log("Timeout: "+promise[a].timeOut);
								
								payload.splice(0, 6);
							}
							else {
								
								promise[a].type = utilityService.getDataTypeName(payload[4]);
								
								if(utilityService.parsePayloadNum([payload[5], payload[6]]) === 0xffff) promise[a].minReportingInterval = 'NOT_CONFIGURED';
								else promise[a].minReportingInterval = utilityService.parsePayloadNum([payload[5], payload[6]]);
								
								if(utilityService.parsePayloadNum([payload[7], payload[8]]) === 0xffff) promise[a].maxReportingInterval = 'NOT_CONFIGURED';
								else promise[a].maxReportingInterval = utilityService.parsePayloadNum([payload[7], payload[8]]);
																
								var ad = utilityService.getDataTypeAdFromId(payload[4]);
								
								$log.log("Type: "+promise[a].type);
								$log.log("Min reporting interval: "+promise[a].minReportingInterval);
								$log.log("Max reporting interval: "+promise[a].maxReportingInterval);

								if(ad === 'D') {

									payload.splice(0, 9);
								}
								else if(ad === 'A') {

									if(utilityService.parsePayloadNum(payload.slice(9, 9+utilityService.getDataTypeLength(payload[4]))) === utilityService.getDataTypeInvalidNumber(payload[4])) promise[a].reportableChange = 'NOT_CONFIGURED';
									else promise[a].reportableChange = utilityService.parsePayloadNum(payload.slice(9, 9+utilityService.getDataTypeLength(payload[4])));
									
									payload.splice(0, 9+utilityService.getDataTypeLength(payload[4]));
									
									$log.log("Reportable change: "+promise[a].reportableChange);
								}								
							}	
						}
						
						return promise;
					}, function(httpError) {
										
						$log.error("Failed to read reporting configuration!");
						$log.error("data: " + httpError.data);
						$log.error("status: " + httpError.status);		
					});		
				}
			}
		}
	}
	
	/**
	 * {Function} Does a command discovery in the chosen cluster.
	 * 
	 * @param {Number} clusterId.
	 * @return {Array} {Object} promise.
	 */
//	var discoverCommands = function(clusterId) {
//		
//		var buf = utilityService.getEndPoint(clusterId, this.endPoints);	
//		var check = buf[0];
//		var ep = buf[1];
//		
//		if(check === false) {
//			
//			utilityService.logGlobalCommandClusterError(clusterId);
//		}
//		else {
//			
//			var ip = ipAddressService.getIp();
//
//			var data = {
//					
//				"addr": {
//					
//					"eui": this.eui
//				},
//				"endpoint": ep,
//				"cluster": clusterId,
//				"command": 17,
//				"global": true,
//				"payload": [0,0xff]
//			};
//		
//			return $http.post("http://"+ip+"/zgd/zcl", data).then(function(response) {
//				
//				console.log(response);
//				
//				var promise = [];
//				var payload = response.data.payload;
//				var a, d;
//
//				if(payload != null) {
//					
//					payload.splice(0, 1);
//					
//					for(a=0, d=0; a<payload.length; a+=3, d++) {
//						
//						promise.push({
//							
//							device: this.label,
//							clusterId: clusterId,
//							endPoint: ep,
//							commandId: utilityService.parsePayloadNum([payload[a], payload[a+1]]),
//							type: utilityService.getDataTypeName(payload[a+2])
//						});
//						
//						$log.info("DISCOVER COMMANDS - PROMISE OBJECT "+d);
//						$log.log("Device: " +promise[d].device);
//						$log.log("Cluster ID: " +promise[d].clusterId);
//						$log.log("Endpoint: " +promise[d].endPoint);
//						$log.log("Command ID: "+promise[d].attributeId);
//						$log.log("Type: "+promise[d].type);
//					}
//				}
//								
//				return promise;
//			}, function(httpError) {
//								
//				$log.error("Failed to discover attributes!");
//				$log.error("data: " + httpError.data);
//				$log.error("status: " + httpError.status);		
//			});		
//		}
//	}
	
	/**
	 * {Function} Handles virtual general device configuration. 
	 */
	var setupGeneralDevices = function() {

		var eui = userService.getEui();
		var token = userService.getToken();
		var a = 0;
		var i = 0;
	
		$http.get('https://ipha-web.net2grid.net/v1/zgd/'+eui+'/services?access_token='+token)
		.success(function(response) {

			console.log(response); 
			generalDevices = [];

			var d;
			for(d=0; d<response.length; d++) {

				generalDevices.push({

					label: d,
					eui: response[d].ieee_address,
					nwkAddr: response[d].short_address,
					endPoints: [],
					logAvailableAttributes: logAvailableAttributes,
					logAvailableCommands: logAvailableCommands,
					logDeviceInfo: logDeviceInfo,
					checkCluster: checkCluster,
					writeCommand: writeCommand,
					readAttributes: readAttributes,
					writeAttributes: writeAttributes,	
					discoverAttributes: discoverAttributes,
					//discoverCommands: discoverCommands,
					readReportingConfiguration: readReportingConfiguration,
					configureReportingSend: configureReportingSend,
					configureReportingReceive: configureReportingReceive
				});

				var e;
				for(e=0; e<response[d].simple_descriptors.length; e++) {

					generalDevices[d].endPoints.push({

						ep: response[d].simple_descriptors[e].endpoint,
						deviceId: response[d].simple_descriptors[e].application_device_identifier,
						deviceVersion: response[d].simple_descriptors[e].application_device_version,
						clusters: []
					});

					var c;
					for(c=0; c<response[d].simple_descriptors[e].application_input_cluster_list.length; c++) {

						generalDevices[d].endPoints[e].clusters.push({
							
							clusterId: response[d].simple_descriptors[e].application_input_cluster_list[c],
							attributesIds: [],
							commandIds: []
						});					
																						
						i++;
					}			
				}
			}

			$rootScope.$broadcast('generalDevices.update');			
		})
		.error(function(data, status) {
			
			$log.error('Failed to create general devices');
			$log.error('data: '+data);
			$log.error('status: '+status);
		});
	}
	
	/**
	 * {Function} Shows content of attribute object.
	 * 
	 * @param {Object} attribute.
	 */
	var logAttributeContent = function(attribute) {

		// Log attribute content
		$log.info('---------ATTRIBUTE-DATA---------');
		$log.log('ATTRIBUTE_NAME: '+attribute.name);
		$log.log('ATTRIBUTE_ID: '+attribute.attributeId);
		$log.log('CLUSTER_ID: '+attribute.clusterId);
		$log.log('SERVER: '+attribute.server);
		$log.log('TYPE: '+attribute.type);
		$log.log('WRITABLE: '+attribute.writable);
		$log.log('MANDATORY: '+attribute.mandatory);
	}

	/**
	 * {Function} Shows content of command object.
	 * 
	 * @param {Object} command.
	 */
	var logCommandContent = function(command) {

		// Log command content
		$log.info('----------COMMAND-DATA----------');
		$log.log('COMMAND_NAME: '+command.name);
		$log.log('COMMAND_ID: '+command.commandId);
		$log.log('CLUSTER_ID: '+command.commandClusterId);
		$log.log('SERVER: '+command.server);
		$log.log('MANDATORY: '+command.mandatory);
		$log.log('ARGUMENT_COUNT: '+command.arg.length);
		$log.log('ARGUMENT_LIST: ');
		var a;
		for(a=0; a<command.arg.length; a++) {

			$log.log('-');
			$log.log('    > NAME: '+command.arg[a].name);
			$log.log('    > TYPE: '+command.arg[a].type);
			$log.log('    > ARRAY: '+command.arg[a].array);
		}
	}
			
	return {
		
		getGeneralDevices: getGeneralDevices,
		setupGeneralDevices: setupGeneralDevices,
		logAttributeContent: logAttributeContent,
		logCommandContent: logCommandContent
	};
}]);