/**
 * Copyright 2015 NET2GRID
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * A function for converting hex <-> dec w/o loss of precision.
 *
 * The problem is that parseInt("0x12345...") isn't precise enough to convert
 * 64-bit integers correctly.
 *
 * Internally, this uses arrays to encode decimal digits starting with the least
 * significant:
 * 8 = [8]
 * 16 = [6, 1]
 * 1024 = [4, 2, 0, 1]
 */

// Adds two arrays for the given base (10 or 16), returning the result.
// This turns out to be the only "primitive" operation we need.
function add(x, y, base) {
  var z = [];
  var n = Math.max(x.length, y.length);
  var carry = 0;
  var i = 0;
  while (i < n || carry) {
    var xi = i < x.length ? x[i] : 0;
    var yi = i < y.length ? y[i] : 0;
    var zi = carry + xi + yi;
    z.push(zi % base);
    carry = Math.floor(zi / base);
    i++;
  }
  return z;
}

// Returns a*x, where x is an array of decimal digits and a is an ordinary
// JavaScript number. base is the number base of the array x.
function multiplyByNumber(num, x, base) {
  if (num < 0) return null;
  if (num == 0) return [];

  var result = [];
  var power = x;
  while (true) {
    if (num & 1) {
      result = add(result, power, base);
    }
    num = num >> 1;
    if (num === 0) break;
    power = add(power, power, base);
  }

  return result;
}

function parseToDigitsArray(str, base) {
  var digits = str.split('');
  var ary = [];
  for (var i = digits.length - 1; i >= 0; i--) {
    var n = parseInt(digits[i], base);
    if (isNaN(n)) return null;
    ary.push(n);
  }
  return ary;
}

function convertBase(str, fromBase, toBase) {
  var digits = parseToDigitsArray(str, fromBase);
  if (digits === null) return null;

  var outArray = [];
  var power = [1];
  for (var i = 0; i < digits.length; i++) {
    // invariant: at this point, fromBase^i = power
    if (digits[i]) {
      outArray = add(outArray, multiplyByNumber(digits[i], power, toBase), toBase);
    }
    power = multiplyByNumber(fromBase, power, toBase);
  }

  var out = '';
  for (var i = outArray.length - 1; i >= 0; i--) {
    out += outArray[i].toString(toBase);
  }
  return out;
}

function decToHex(decStr) {
  var hex = convertBase(decStr, 10, 16);
  return hex ? '0x' + hex : null;
}

function hexToDec(hexStr) {
  if (hexStr.substring(0, 2) === '0x') hexStr = hexStr.substring(2);
  hexStr = hexStr.toLowerCase();
  return convertBase(hexStr, 16, 10);
}

/**
 * Service handling all utility functions. 
 * 
 * @services zigbeeLutService.
 * @returns	{Function} convertMaskType(mask); Converts mask string into number.
 * 			{Function} createReadAttributesPayload(attributes); Creates payload for the readAttributes method.
 * 			{Function} checkArmState(armState, mask); Returns active arm state.
 * 			{Function} euiToHex(euiDec); Returns hexadecimal value of eui.
 * 			{Function} getEndPoint(clusterId, endPoints); Checks whether cluster is available and returns end point.
 * 			{Function} checkAttrAvailability(clusterId, attributes); Checks whether the chosen cluster contains the chosen attributes.
 * 			{Function} logGlobalCommandClusterError(clusterId); Prints missing cluster error message to console.
 * 			{Function} getDataTypeLength(id); Checks datatype length of payload id.
 * 			{Function} convertPayload(payload, length); Converts response payload to correct value (ReadAttributes).
 * 			{Function} convertArg(command, args); Converts argument to correct payload.
 * 			{Function} argArrayCheck(command, args); Checks whether the argument matches with the array tag.
 * 			{Function} checkWritability(attributes); Check whether attributes are writable.
 * 			{Function} createWriteAttributesPayload(attributes, value); Create payload for the writeAttributes command.
 * 			{Function} getStatus(value); Get status from look up table.
 * 			{Function} getDataTypeName(id); Returns data type name.
 * 			{Function} createReadReportingConfigurationPayload(attributes, directions); Create payload of the readReportingConfiguration command.
 * 			{Function} getDataTypeAdFromId(id); Checks whether datatype is 'analog' or 'discrete' using id.
 * 			{Function} parsePayloadNum(payload); Parses payload to one value.
 * 			{Function} getDataTypeInvalidNumber(id); Returns invalid number of chosen data type.
 * 			{Function} createConfigureReportingSendPayload(attributes, timeouts); Create payload of ConfigureReportingSend command.
 * 			{Function} getDirectionString(num); Returns direction as a string.
 * 			{Function} checkReportableChangeNeeded(attributes, reportableChange); Checks whether the reportableChange argument is needed.
 * 			{Function} getDataTypeAdFromName(name); Checks whether datatype is 'analog' or 'discrete' using name.
 * 			{Function} getDataTypeIdFromName(name); Returns id of chosen datatype name.
 * 			{Function} createConfigureReportingReceivePayload(attributes, minInterval, maxInterval, reportableChange); Creates payload of ConfigureReportingReceive command.
 *			{Function} createRadioFrequencyPlugPayload(plug, systemCode, unitCode, value, group); Creates payload of radioFrequencyPlug function.
 *			{Function} createWriteCommandPayload(args, command); Creates writeCommand payload.
 */
net2gridApiModule.service('utilityService', ['$log', 'zigbeeLutService',function($log, zigbeeLutService) {

	/**
	 * {Function} Converts eui hex string to dec.
	 * 
	 * @param {String} euiHex.
	 * @return {Number} euiDec.
	 */
	var euiToDec = function(euiHex) {
				
		return hexToDec(euiHex);
	}
	
	/**
	 * {Function} Converts mask string into number.
	 * 
	 * @param {String} mask.
	 * @return {Number} maskNum.
	 */
	var convertMaskType = function (mask) {

	    var maskNum;

	    switch (mask) {

	        case 'day':
	            maskNum = 1;
	            break;
	        case 'night':
	            maskNum = 2;
	            break;
			case 'day & night':
				maskNum = 3;
				break;
	        case 'bypass':
	            maskNum = 4;
	            break;
	    }

	    return maskNum;
	}
	
	/**
	 * {Function} Returns active arm state.
	 * 
	 * @param {String} armState, {Number} mask.
	 * @return {Number} activeArmState.
	 */
	var checkArmState = function(armState, mask) {
		
		var activeArmState = null;
		
		var armStateLut = zigbeeLutService.getArmStateLut();
		
		switch(armState) {
			
			case 'away':
				activeArmState = armStateLut[0].state[mask];
				break;
				
			case 'day':
				activeArmState = armStateLut[1].state[mask];
				break;
				
			case 'night':
				activeArmState = armStateLut[2].state[mask];
				break;
				
			case 'disarm':
				activeArmState = armStateLut[3].state[mask];
				break;	
		}
		
		return activeArmState;
	}
	
	/**
	 * Returns hexadecimal value of eui.
	 * 
	 * @param {Array} euiDec
	 * @return {Array} euiHex.
	 */
	 var euiToHex = function (euiDec) {

		return decToHex(euiDec);
    }
	/**
	 * {Function} Converts arguments to payload (global commands).
	 * 
	 * @param {Number} data, {Number} octets.
	 * @return {Array} bytes.
	 */
	var convertToPayload = function(data, octets) {
		
		var bytes = [];
		var c;
	
		for(c = octets-1; c>-1; c--) {

	        var x = (data - (data % Math.pow(16, c*2)))/ Math.pow(16, c*2);

	        data = data % Math.pow(16, c*2);
	        
	        bytes.push(x);
	    }
		
		bytes.reverse();
	
		return bytes;
	}
	
	/**
	 * {Function} Creates payload for the readAttributes method.
	 *
	 * @param {Array} {Object} attributes.
	 * @return {Array} {Number} payload.
	 */
	var createReadAttributesPayload = function(attributes) {
		
		var a;
		var payload = [];
		
		for(a=0; a<attributes.length; a++) {
			
			payload.push.apply(payload, convertToPayload(attributes[a].attributeId));
		}
		
		return payload;
	}
	
	/**
	 * {Function} Checks whether cluster is available and returns end point.
	 * 
	 * @param {Number} clusterId, {Array} endPoints.
	 * @return {Array} buf.
	 */
	var getEndPoint = function(clusterId, endPoints) {
		
		var buf = [false, 0]
		var e;
		
		for(e=0; e<endPoints.length; e++) {

			var i;
			for(i=0; i<endPoints[e].clusters.length; i++) {

				if(endPoints[e].clusters[i].clusterId === clusterId) {

					buf[1] = endPoints[e].ep;
					buf[0] = true;
				}
			}
		}
		
		return buf;
	}
	
	/**
	 * {Function} Checks whether the chosen cluster contains the chosen attributes.
	 * 
	 * @param {Number} clusterId, {Object} attributes.
	 * @return {Boolean} check.
	 */
	var checkAttrAvailability = function(clusterId, attributes) {
		
		var check = true;
		var a;
		
		for(a=0; a < attributes.length; a++) {
			
			if(clusterId != attributes[a].clusterId) {
				
				check = false;
			}
		}
		
		return check;
	}
	
	/**
	 * {Function} Prints missing cluster error message to console.
	 * 
	 * @param {Number} clusterId.
	 */
	var logGlobalCommandClusterError = function(clusterId) {
		
		var logClusterLut = zigbeeLutService.getLogClusterLut();
			
		var c;			
		for(c=0; c<logClusterLut.length; c++) {
			
			if(logClusterLut[c].clusterId === clusterId) {
				
				$log.error(logClusterLut[c].clusterName + ' cluster (clusterId = ' + clusterId + ') does not exist within this device!');
			}
		}
	}
	
	/**
	 * {Function} Checks datatype length of payload id.
	 * 
	 * @param {Number} id.
	 * @return {Number} dataType[].octets.
	 */
	var getDataTypeLength = function(id) {
		
		var dataTypeLut = zigbeeLutService.getDataTypeLut();
		var d;
		
		switch(id) {
			
			case 0x41: 
				return "OCTET_STRING";
				break;
			case 0x42:
				return "CHAR_STRING";
				break;
			case 0x43:
				return "LONG_OCTET_STRING";
				break;
			case 0x44:
				return "LONG_CHAR_STRING";
				break;
			default:
				for(d=0; d<dataTypeLut.length; d++) {
					
					if(dataTypeLut[d].id === id) {
						
						return dataTypeLut[d].octets;
					}
				}
		}
	}
	
	/**
	 * {Function} Converts response payload to correct value (ReadAttributes).
	 * 
	 * @param {Array} payload, {Number | String} length.
	 * @return {Number | String} value.
	 */
	var convertPayload = function(payload, length) {
		
		var value = null;	
		var numBuf = 0;
		var strBuf = '';
		var charString = false;
		var octetString = false;
		var l, p, startIndex = 4;
				
		switch(length) {
			
			case "CHAR_STRING":
				charString = true;
				length = payload[4];
				startIndex = 5;
				break;
			case "OCTET_STRING":
				octetString = true;
				length = payload[4];
				startIndex = 5;
				break;
			case "LONG_CHAR_STRING":
				charString = true;
				length = (payload[4] << 8) + payload[5];
				startindex = 6;
				break;
			case "LONG_OCTET_STRING":
				octetString = true;
				length = (payload[4] << 8) + payload[5];
				startIndex = 6;
		}
		
		for(l=0, p=length-1; l<length; l++, p--) {
			
			if(charString) {
				
				strBuf += String.fromCharCode(payload[startIndex+l]);
			}
			else if(octetString) {
				
				strBuf += payload[startIndex+l].toString(16);
			}
			else {
				
				numBuf += payload[startIndex+l] << 8*p;
			}	
		}
		
		if(charString || octetString)	value = strBuf;
		else if(length > 0) 			value = numBuf;
		
		return value;
	}
	
	/**
	 * {Function} Converts argument to the correct pay load size.
	 * 
	 * @param {Array} args, {Object} command.
	 * @return {Array} argNew.
	 */
	var convertType = function (args, type, command, i) {
		
		var argNew = [];
		
		var u;

		switch(type) {
			
			case 'BOOLEAN':
				if(args === 0xff) {
					
					$log.error('Value of argument[' + i + '] ' + command.arg[i].name + ' of type ' + command.arg[i].type + ' is invalid!');

				}
				else if(args > 0x01) {
					
					$log.error('Value of argument[' + i + '] ' + command.arg[i].name + ' of type ' + command.arg[i].type + ' is forbidden!');
					
				}
				else {
					
					argNew.push(args);
				}
				break;
				
			case 'BITMAP8':
				argNew.push(args);
				break;
				
			case 'BITMAP16':
				var arg8u = convertToPayload(args, 2);
				for(u=0; u<arg8u.length; u++) {
					
					argNew.push(arg8u[u]);
				}
				break;
				
			case 'BITMAP24':
				var arg8u = convertToPayload(args, 3);
				for(u=0; u<arg8u.length; u++) {
					
					argNew.push(arg8u[u]);
				}
				break;
				
			case 'BITMAP32':
				var arg8u = convertToPayload(args, 4);
				for(u=0; u<arg8u.length; u++) {
					
					argNew.push(arg8u[u]);
				}
				break;
				
			case 'BITMAP40':
				var arg8u = convertToPayload(args, 5);
				for(u=0; u<arg8u.length; u++) {
					
					argNew.push(arg8u[u]);
				}
				break;
				
			case 'BITMAP48':
				var arg8u = convertToPayload(args, 6);
				for(u=0; u<arg8u.length; u++) {
					
					argNew.push(arg8u[u]);
				}
				break;
				
			case 'BITMAP56':
				var arg8u = convertToPayload(args, 7);
				for(u=0; u<arg8u.length; u++) {
					
					argNew.push(arg8u[u]);
				}
				break;
				
			case 'BITMAP64':
				var arg8u = convertToPayload(args, 8);
				for(u=0; u<arg8u.length; u++) {
					
					argNew.push(arg8u[u]);
				}
				break;
				
			case 'INT8U':
				if(args === 0xff) {
					
					$log.error('Value of argument[' + i + '] ' + command.arg[i].name + ' of type ' + command.arg[i].type + ' is invalid!');
				}
				else {
					
					argNew.push(args);
				}
				break;
				
			case 'INT16U':
				if(args === 0xffff) {
					
					$log.error('Value of argument[' + i + '] ' + command.arg[i].name + ' of type ' + command.arg[i].type + ' is invalid!');
				}
				else {
					
					var arg8u = convertToPayload(args, 2);
					for(u=0; u<arg8u.length; u++) {
						
						argNew.push(arg8u[u]);
					}
				}
				break;
				
			case 'INT24U':
				if(args === 0xffffff) {
					
					$log.error('Value of argument[' + i + '] ' + command.arg[i].name + ' of type ' + command.arg[i].type + ' is invalid!');
					break;
				}
				else {
					
					var arg8u = convertToPayload(args, 3);
					for(u=0; u<arg8u.length; u++) {
						
						argNew.push(arg8u[u]);
					}
				}
				break;	
				
			case 'INT32U':
				if(args === 0xffffffff) {
					
					$log.error('Value of argument[' + i + '] ' + command.arg[i].name + ' of type ' + command.arg[i].type + ' is invalid!');
					break;
				}
				else {
					
					var arg8u = convertToPayload(args, 4);
					for(u=0; u<arg8u.length; u++) {
						
						argNew.push(arg8u[u]);
					}
				}
				break;
				
			case 'INT40U':
				if(args === 0xffffffffff) {
					
					$log.error('Value of argument[' + i + '] ' + command.arg[i].name + ' of type ' + command.arg[i].type + ' is invalid!');
					break;
				}
				else {
					
					var arg8u = convertToPayload(args, 5);
					for(u=0; u<arg8u.length; u++) {
						
						argNew.push(arg8u[u]);
					}
				}
				break;
				
			case 'INT48U':
				if(args === 0xffffffffffff) {
					
					$log.error('Value of argument[' + i + '] ' + command.arg[i].name + ' of type ' + command.arg[i].type + ' is invalid!');
					break;
				}
				else {
					
					var arg8u = convertToPayload(args, 6);
					for(u=0; u<arg8u.length; u++) {
						
						argNew.push(arg8u[u]);
					}
				}
				break;
				
			case 'INT56U':
				if(args === 0xffffffffffffff) {
					
					$log.error('Value of argument[' + i + '] ' + command.arg[i].name + ' of type ' + command.arg[i].type + ' is invalid!');
					break;
				}
				else {
					
					var arg8u = convertToPayload(args, 7);
					for(u=0; u<arg8u.length; u++) {
						
						argNew.push(arg8u[u]);
					}
				}
				break;
				
			case 'INT64U':
				if(args === 0xffffffffffffffff) {
					
					$log.error('Value of argument[' + i + '] ' + command.arg[i].name + ' of type ' + command.arg[i].type + ' is invalid!');
					break;
				}
				else {
					
					var arg8u = convertToPayload(args, 8);
					for(u=0; u<arg8u.length; u++) {
						
						argNew.push(arg8u[u]);
					}
				}
				break;
				
			case 'INT8S':
				if(args === 0x80) {
					
					$log.error('Value of argument[' + i + '] ' + command.arg[i].name + ' of type ' + command.arg[i].type + ' is invalid!');
				}
				else {
					
					argNew.push(args);
				}
				break;
				
			case 'INT16S':
				if(args === 0x8000) {
					
					$log.error('Value of argument[' + i + '] ' + command.arg[i].name + ' of type ' + command.arg[i].type + ' is invalid!');
				}
				else {
					
					var arg8u = convertToPayload(args, 2);
					for(u=0; u<arg8u.length; u++) {
						
						argNew.push(arg8u[u]);
					}
				}
				break;
				
			case 'INT24S':
				if(args === 0x800000) {
					
					$log.error('Value of argument[' + i + '] ' + command.arg[i].name + ' of type ' + command.arg[i].type + ' is invalid!');
				}
				else {
					
					var arg8u = convertToPayload(args, 3);
					for(u=0; u<arg8u.length; u++) {
						
						argNew.push(arg8u[u]);
					}
				}
				break;
				
			case 'INT32S':
				if(args === 0x80000000) {
					
					$log.error('Value of argument[' + i + '] ' + command.arg[i].name + ' of type ' + command.arg[i].type + ' is invalid!');
				}
				else {
					
					var arg8u = convertToPayload(args, 4);
					for(u=0; u<arg8u.length; u++) {
						
						argNew.push(arg8u[u]);
					}			
				}
				break;
				
			case 'INT40S':
				if(args === 0x8000000000) {
					
					$log.error('Value of argument[' + i + '] ' + command.arg[i].name + ' of type ' + command.arg[i].type + ' is invalid!');
				}
				else {
					
					var arg8u = convertToPayload(args, 5);
					for(u=0; u<arg8u.length; u++) {
						
						argNew.push(arg8u[u]);
					}			
				}
				break;
				
			case 'INT48S':
				if(args === 0x800000000000) {
					
					$log.error('Value of argument[' + i + '] ' + command.arg[i].name + ' of type ' + command.arg[i].type + ' is invalid!');
				}
				else {
					
					var arg8u = convertToPayload(args, 6);
					for(u=0; u<arg8u.length; u++) {
						
						argNew.push(arg8u[u]);
					}			
				}
				break;
				
			case 'INT56S':
				if(args === 0x80000000000000) {
					
					$log.error('Value of argument[' + i + '] ' + command.arg[i].name + ' of type ' + command.arg[i].type + ' is invalid!');
				}
				else {
					
					var arg8u = convertToPayload(args, 7);
					for(u=0; u<arg8u.length; u++) {
						
						argNew.push(arg8u[u]);
					}			
				}
				break;
				
			case 'INT64S':
				if(args === 0x8000000000000000) {
					
					$log.error('Value of argument[' + i + '] ' + command.arg[i].name + ' of type ' + command.arg[i].type + ' is invalid!');
				}
				else {
					
					var arg8u = convertToPayload(args, 8);
					for(u=0; u<arg8u.length; u++) {
						
						argNew.push(arg8u[u]);
					}			
				}
				break;
							
			case 'ENUM8':
				if(args === 0xff) {
					
					$log.error('Value of argument[' + i + '] ' + command.arg[i].name + ' of type ' + command.arg[i].type + ' is invalid!');
				}
				else {
					
					argNew.push(args);
				}
				break;
			
			case 'ENUM16':
				if(args === 0xffff) {
					
					$log.error('Value of argument[' + i + '] ' + command.arg[i].name + ' of type ' + command.arg[i].type + ' is invalid!');
				}
				else {
					
					var arg8u = convertToPayload(args, 2);
					for(u=0; u<arg8u.length; u++) {
						
						argNew.push(arg8u[u]);
					}	
				}
				break;
				
			case 'CHAR_STRING':
				if(args.length === 0xff) {
				
					$log.error('Length of argument[' + i + '] ' + command.arg[i].name + ' of type ' + command.arg[i].type + ' is invalid!');
				}
				else {
					
					argNew.push(args.length);
					for(u=0; u<args.length; u++) {
						
						argNew.push(args.charCodeAt(u));
					}					
				}
				break;
				
			case 'OCTET_STRING':
				if(args.length === 0xff || args.length % 2 === 1) {
					
					$log.error('Length of argument[' + i + '] ' + command.arg[i].name + ' of type ' + command.arg[i].type + ' is invalid!');
				}
				else {
					
					argNew.push(args.length*0.5);
					var arg8u = convertToPayload(parseInt(args, 16), args.length*0.5);
					for(u=0; u<args.length*0.5; u++) {
						
						argNew.push(arg8u[u]);
					}				
				}
				break;
				
			case 'TIME_OF_DAY':
				if(args === 0xffffffff) {
					
					$log.error('Value of argument[' + i + '] ' + command.arg[i].name + ' of type ' + command.arg[i].type + ' is invalid!');
				}
				else {
					
					var arg8u = convertToPayload(args, 4);
					if(arg8u[0] > 23) {
						
						$log.error('Value of argument[' + i + '] ' + command.arg[i].name + ' of type ' + command.arg[i].type + ' is invalid! (hours)');
					}
					else if(arg8u[1] > 59) {
						
						$log.error('Value of argument[' + i + '] ' + command.arg[i].name + ' of type ' + command.arg[i].type + ' is invalid! (minutes)');
					}
					else if(arg8u[2] > 59) {
						
						$log.error('Value of argument[' + i + '] ' + command.arg[i].name + ' of type ' + command.arg[i].type + ' is invalid! (seconds)');
					}
					else if(arg8u[3] > 99) {
						
						$log.error('Value of argument[' + i + '] ' + command.arg[i].name + ' of type ' + command.arg[i].type + ' is invalid! (hundredths)');
					}
					else {
						
						for(u=0; u<arg8u.length; u++) {
						
							argNew.push(arg8u[u]);
						}
					}
				}
				break;
			
			case 'UTC_TIME':
				if(args === 0xffffffff) {
					
					$log.error('Value of argument[' + i + '] ' + command.arg[i].name + ' of type ' + command.arg[i].type + ' is invalid!');
				}
				else {
					
					var arg8u = convertToPayload(args, 4);
					for(u=0; u<arg8u.length; u++) {
						
						argNew.push(arg8u[u]);
					}
				}
				break;
				
			case 'CLUSTER_ID':
				if(args === 0xffff) {
					
					$log.error('Value of argument[' + i + '] ' + command.arg[i].name + ' of type ' + command.arg[i].type + ' is invalid!');
				}
				else {
					
					var arg8u = convertToPayload(args, 2);
					for(u=0; u<arg8u.length; u++) {
						
						argNew.push(arg8u[u]);
					}					
				}
				break;
				
			case 'IEEE_ADDRESS':
				if(args === 0xffffffffffffffff) {
					
					$log.error('Value of argument[' + i + '] ' + command.arg[i].name + ' of type ' + command.arg[i].type + ' is invalid!');
				}
				else {
					
					var arg8u = convertToPayload(args, 8);
					for(u=0; u<arg8u.length; u++) {
						
						argNew.push(arg8u[u]);
					}	
				}
				break;
			
			case 'ATTRIBUTE_ID':
				var arg8u = convertToPayload(args, 2);
				for(u=0; u<arg8u.length; u++) {
					
					argNew.push(arg8u[u]);
				}
				break;
				
			default:
				;			
		}	
		
		return argNew;
	}
	
	/**
	 * {Function} Converts argument to correct payload.
	 *
	 * @param {Object} command, {Array} args.
	 * @return {Array} argNew.
	 */
	var convertArg = function(command, args) {
		
		var argNew = [];
		
		var i;
		for(i = 0; i < args.length; i++) {
			
			if(Object.prototype.toString.call( args[i] ) === '[object Array]') {
				
				var a;
				for(a = 0; a < args[i].length; a++) {
					
					argNew.push.apply(argNew, convertType(args[i][a], command, i));
				}
			}
			else {
				
				argNew.push.apply(argNew, convertType(args[i], command, i));
			}
		}
		
		return argNew;
	}
	
	/**
	 * {Function} Checks whether the argument matches with the array tag.
	 *
	 * @param {Objects} command, {Array} args.
	 * @return {Boolean} arrCheck.
	 */
	var argArrayCheck = function(command, args) {
		
		var arrCheck = true;
		
		var a;
		for(a = 0; a < args.length; a++) {
			
			if(command.arg[a].array === true) {
				
				if( Object.prototype.toString.call( args[a] ) === '[object Array]' ) {
					
					arrCheck = true;
				}
				else {
					
					$log.error('Argument '+a+' ('+command.arg[a].name+') of '+command.name+' command should be an Array!');
					arrCheck = false;
					return arrCheck;
				}
			}	
			else {
				
				if( Object.prototype.toString.call( args[a] ) === '[object Array]' ) {
					
					$log.error('Argument '+a+' ('+command.arg[a].name+') of '+command.name+' command should not be an Array!');
					arrCheck = false;
					return arrCheck;
				}
				else {
					
					arrCheck = true;				
				}
			}
		}
		
		return arrCheck;
	}
	
	/**
	 * {Function} Check whether attributes are writable.
	 * 
	 * @param {Array} {Object} attributes.
	 * @return {Array} writability.
	 */
	var checkWritability = function(attributes) {
		
		var writability = [true, 0];
		
		var a;
		for(a=0; a<attributes.length; a++) {
			
			if(attributes[a].writable === false) {
				
				writability[0] = false;
				writability[1] = attributes[a].name;
			}
		}
		
		return writability;
	}
	
	/**
	 * {Function} Returns data type ID.
	 * 
	 * @param {Object} attribute.
	 * @return {Number} id.
	 */
	var getDataTypeId = function(attribute) {
		
		var dataTypeLut = zigbeeLutService.getDataTypeLut();
		var d;
		var id;
		
		for(d=0; d<dataTypeLut.length; d++) {
			
			if(attribute.type === dataTypeLut[d].name) {
				
				id = dataTypeLut[d].id;
			}
		}
		
		return id;
	}
	
	/**
	 * {Function} Returns data type name.
	 * 
	 * @param {Number} id.
	 * @return {String} name.
	 */
	var getDataTypeName = function(id) {
		
		var dataTypeLut = zigbeeLutService.getDataTypeLut();
		var d;
		var name;
		
		for(d=0; d<dataTypeLut.length; d++) {
			
			if(id === dataTypeLut[d].id) {
				
				name = dataTypeLut[d].name;
			}
		}
		
		return name;
	}
	
	/**
	 * {Function} Create payload for the writeAttributes command.
	 * 
	 * @param {Array} {Object} attributes, {Array} value.
	 * @return {Array} payload.
	 */
	var createWriteAttributesPayload = function(attributes, value) {
		
		var a;
		var payload = [];
		var argNew = [];
		var arg8u = unsignedToBytes(value, 16);
		for(u=0; u<arg8u.length; u++) {
			
			argNew.push(arg8u[u]);
		}
		
		for(a=0; a<attributes.length; a++) {
			
			payload.push.apply(payload, convertToPayload(attributes[a].attributeId, 2));
			payload.push(getDataTypeId(attributes[a]));
			payload.push.apply(payload, argNew);			
		}
		
		console.log(payload);
		
		return payload;
	}
	
	/**
	 * {Function} Get status from look up table.
	 * 
	 * @param {Number} value.
	 * @return {String} status.
	 */
	var getStatus = function(value) {
		
		var status = 'Undefined';
		var statusLut = zigbeeLutService.getStatusLut();
		var s;
		
		for(s=0; s<statusLut.length; s++) {
			
			if(value === statusLut[s].value) {
				
				status = statusLut[s].name;
			}
		}
		
		return status;
	}

	/**
	 * {Functions} Create payload of the readReportingConfiguration command.
	 * 
	 * @param {Array} {Object} attributes. {Array} {Number} directions.
	 */
	var createReadReportingConfigurationPayload = function(attributes, directions) {
		
		var a;
		var payload = [];
		
		for(a=0; a<attributes.length; a++) {
			
			payload.push(directions[a]);
			payload.push.apply(payload, convertToPayload(attributes[a].attributeId, 2));
		}
		
		return payload;
	}
	
	/**
	 * {Function} Checks whether datatype is 'analog' or 'discrete' using id.
	 * 
	 * @param {Number} id.
	 * @return {String} ad. 
	 */
	var getDataTypeAdFromId = function(id) {
		
		var dataTypeLut = zigbeeLutService.getDataTypeLut();
		var d;
		var ad;
		
		for(d=0; d<dataTypeLut.length; d++) {
			
			if(id === dataTypeLut[d].id) {
				
				ad = dataTypeLut[d].ad;
			}
		}
		
		return ad;
	}

	/**
	 * {Function} Parses payload to one value.
	 * 
	 * @param {Array} {Number} payload.
	 * @return {Number} data.
	 */
	var parsePayloadNum = function(payload) {
		
		var data = 0;
		var p;

		for(p=0; p<payload.length; p++) {
			
			data += payload[p]*Math.pow(16,2*p);
		}
		
		return data;
	}
	
	/**
	 * {Function} Returns invalid number of chosen data type.
	 * 
	 * @param {Number} id.
	 * @return {Number} invalidNumber.
	 */
	var getDataTypeInvalidNumber = function(id) {
		
		var dataTypeLut = zigbeeLutService.getDataTypeLut();
		var d;
		var invalidNumber;
		
		for(d=0; d<dataTypeLut.length; d++) {
			
			if(id === dataTypeLut[d].id) {
				
				invalidNumber = dataTypeLut[d].invalidNum;
			}
		}
		
		return invalidNumber;
	}

	/**
	 * {Function} Create payload of Configure Reporting Send command.
	 * 
	 * @param {Array} {Object} attributes, {Array} {Number} timeouts.
	 */
	var createConfigureReportingSendPayload = function(attributes, timeouts) {
		
		var payload = [];
		var p;
		
		for(p=0; p<attributes.length; p++) {
			
			payload.push(1);
			payload.push.apply(payload, convertToPayload(attributes[p].attributeId, 2));
			payload.push.apply(payload, convertToPayload(timeouts[p], 2));			
		}
		
		return payload;
	}
	
	/**
	 * {Function} Returns direction as a string.
	 * 
	 * @param {Number} dirNum.
	 * @return {String} dirStr.
	 */
	var getDirectionString = function(dirNum) {
		
		var dirStr = 'SEND (0x01)';
		
		if(dirNum === 0) {
			
			dirStr = 'RECEIVE (0x00)';
		}
		
		return dirStr;
	}
	
	/**
	 * {Function} Checks whether datatype is 'analog' or 'discrete' using name.
	 * 
	 * @param {String} name.
	 * @return {String} ad.
	 */
	var getDataTypeAdFromName = function(name) {
		
		var dataTypeLut = zigbeeLutService.getDataTypeLut();
		var a;
		var ad;
		
		for(a=0; a<dataTypeLut.length; a++) {
			
			if(name === dataTypeLut[a].name) {
				
				ad = dataTypeLut[a].ad;
			}
		}
		
		return ad;
	}
	
	/**
	 * {Function} Checks whether the reportableChange argument is needed.
	 * 
	 * @param {Array} {Object} attributes, {Array} {Number} reportableChange.
	 * @return {Boolean} check;
	 */
	var checkReportableChangeNeeded = function(attributes, reportableChange) {
		
		var ad;
		var a;
		var check = true;
		
		if(typeof reportableChange === 'undefined') {
			
			for(a=0; a<attributes.length; a++) {
				
				if(getDataTypeAdFromName(attributes[a].type) === 'A') {
					
					$log.error(attributes[a].name +" attribute has an 'analog' datatype. ReportableChange argument mandatory!");
					check = false;
					return check;
				}
				else return check;
			}
		}
		
		for(a=0; a<attributes.length; a++) {
			
			if(reportableChange[a] === null) {
				
				if(getDataTypeAdFromName(attributes[a].type) === 'A') {
					
					$log.error(attributes[a].name +" attribute has an 'analog' datatype. ReportableChange argument mandatory!");
					check = false;
					return check;
				}
			}
			else {

				if(getDataTypeAdFromName(attributes[a].type) === 'D') {
					
					$log.error(attributes[a].name +" attribute has a 'digital' datatype. ReportableChange argument for this argument is not needed!");
					check = false;
					return check;
				}
			}
		}
		
		return check;
	}
	
	/**
	 * {Function} Returns id of chosen datatype name.
	 * 
	 * @param {String} name.
	 * @return {Number} id.
	 */
	var getDataTypeIdFromName = function(name) {
		
		var dataTypeLut = zigbeeLutService.getDataTypeLut();
		var id;
		var d;
		
		for(d=0; d<dataTypeLut.length; d++) {
			
			if(dataTypeLut[d].name === name) {
				
				id = dataTypeLut[d].id;
			}
		}
		
		return id;
	}
	
	/**
	 * {Function} Creates payload of ConfigureReportingReceive command.
	 * 
	 * @param {Array} {Object} attributes, {Array} {Number} minInterval, {Array} {Number} maxInterval, {Array} {Number} reportableChange.
	 * @return {Array} {Number} payload.
	 */
	var createConfigureReportingReceivePayload = function(attributes, minInterval, maxInterval, reportableChange) {
		
		var payload =[];
		var a;
		
		for(a=0; a<attributes.length; a++) {
			
			payload.push(0);
			payload.push.apply(payload, convertToPayload(attributes[a].attributeId, 2));
			payload.push(getDataTypeIdFromName(attributes[a].type));
			payload.push.apply(payload, convertToPayload(minInterval, 2));
			payload.push.apply(payload, convertToPayload(maxInterval, 2));
			
			if(getDataTypeAdFromName(attributes[a].type) === 'A') {
				
				payload.push.apply(payload, convertToPayload(reportableChange, getDataTypeLength(getDataTypeIdFromName(attributes[a].type))));
			}
		}
		
		return payload;
	}
	
	/**
	 * {Function} Creates payload of radioFrequencyPlug function.
	 *
	 * @param {Object} plug, {Number} systemCode, {Number} unitCode, {Number} value, {Boolean} group.
	 * @return {Array} {Number} payload.
	 */
	var createRadioFrequencyPlugPayload = function(plug, systemCode, unitCode, value, group) {
		
		var payload = [];
		
		payload.push(plug.protocol);
		payload.push.apply(payload, convertToPayload(systemCode, 4));
		payload.push.apply(payload, convertToPayload(unitCode, 4));
		payload.push(value);
		if(group === false) payload.push(0);
		else if(group === true) payload.push(1);
		payload.push.apply(payload, convertToPayload(plug.bitPeriod, 2));

		return payload;
	}
	
	/**
	 * {Function} Returns argument data type.
	 * 
	 * @param {String} type.
	 * @return {String} newType.
	 */
	var getArgDataType = function(type) {
		
		var argDataTypeLut = zigbeeLutService.getArgDataTypeLut();
		var newType = type;
		var a;
		
		for(a=0; a<argDataTypeLut.length; a++) {
			
			if(type === argDataTypeLut[a].name) {
				
				newType = argDataTypeLut[a].type;
			}
		}
		
		return newType;
	}	
	
	/**
	 * {Function} Creates argument data type array buffer.
	 * 
	 * @param arg, {Object} argData.
	 * @return {Array} typeArrBuf.
	 */
	var getArgDataTypeArray = function(arg, argData) {
		
		var typeArrBuf = [];
		var a;
		
		
		if(arg.constructor === Array) {
			
			for(a=0; a<arg.length; a++) {
				
				if(getArgDataType(argData.type) === 'STRUCT') {
					
					var s;
					
					for(s=0; s<argData.arg.length; s++) {
						
						typeArrBuf.push(getArgDataType(argData.arg[s].type));
					}
					
					break;
				}
				else {
					
					typeArrBuf.push(getArgDataType(argData.type))
				}				
			}
		}
		else {
			
			typeArrBuf.push(getArgDataType(argData.type));
		}
		
		return typeArrBuf;
	}
	
	/**
	 * {Function} Create argument value array buffer.
	 * 
	 * @param {Array} args.
	 * @return {Array} valueArrBuf.
	 */
	var getArgValueArray = function(args) {
		
		var valueArrBuf = [];
		var a;
		
		for(a=0; a<args.length; a++) {
			
			if(args[a].constructor === Array) {
				
				valueArrBuf.push.apply(valueArrBuf, args[a]);
			}
			else {
				
				valueArrBuf.push(args[a]);
			}
		}
		
		return valueArrBuf;
	}
	
	var getArgPointerArr = function(arg, a) {
		
		var pointerArrBuf = [];
		var i;
		
		if(arg.constructor === Array) {
			
			for(i=0; i<arg.length; i++) {
				
				pointerArrBuf.push(a);			
			}
		}
		else {
			
			pointerArrBuf.push(a);
		}
		
		return pointerArrBuf;
	}
	
	/**
	 * {Function} Creates writeCommand payload.
	 * 
	 * @param {Array} args, {Object} command.
	 * @return {Array} payload.
	 */
	var createWriteCommandPayload = function(args, command) {
		
		var a;
		var typeArr = [];
		var valueArr = [];
		var pointerArr = [];
		var payload = [];
		
		for(a=0; a<args.length; a++) {
			
			typeArr.push.apply(typeArr, getArgDataTypeArray(args[a], command.arg[a]));
			pointerArr.push.apply(pointerArr, getArgPointerArr(args[a], a));
		}
		
		valueArr = getArgValueArray(args);
		
		for(a=0; a<valueArr.length; a++) {
			
			payload.push.apply(payload, convertType(valueArr[a], typeArr[a], command, pointerArr[a]));
		}
				
		return payload;
	}
	
	return {
		
		getEndPoint: getEndPoint,
		checkAttrAvailability: checkAttrAvailability,
		logGlobalCommandClusterError: logGlobalCommandClusterError,
		getDataTypeLength: getDataTypeLength,
		convertPayload: convertPayload,
		convertArg: convertArg,
		argArrayCheck: argArrayCheck,
		checkWritability: checkWritability,
		createWriteAttributesPayload: createWriteAttributesPayload,
		createReadReportingConfigurationPayload: createReadReportingConfigurationPayload,
		getStatus: getStatus,
		getDataTypeName: getDataTypeName,
		getDataTypeAdFromId: getDataTypeAdFromId,
		parsePayloadNum: parsePayloadNum,
		getDataTypeInvalidNumber: getDataTypeInvalidNumber,
		convertToPayload: convertToPayload,
		createConfigureReportingSendPayload: createConfigureReportingSendPayload,
		getDirectionString: getDirectionString,
		checkReportableChangeNeeded: checkReportableChangeNeeded,
		getDataTypeAdFromName: getDataTypeAdFromName,
		getDataTypeIdFromName: getDataTypeIdFromName,
		createConfigureReportingReceivePayload: createConfigureReportingReceivePayload,
		createRadioFrequencyPlugPayload: createRadioFrequencyPlugPayload,
		createWriteCommandPayload: createWriteCommandPayload,
		euiToHex: euiToHex,
		convertMaskType: convertMaskType,
		checkArmState: checkArmState,
		createReadAttributesPayload: createReadAttributesPayload,
		euiToDec: euiToDec
	};
}]);