/**
 * Service handling attribute documentation storage.
 *
 * @return	{Function} getAttributes(); Returns attributes.
 *			{Function} getCommands(); Returns commands.
 *			{Function} getIsCollapsed(); Returns isCollapsed.
 */
lanSdkDocModule.service('lanSdkDocService', function() {

	/**
	 * {Object} attributes object.
	 *
	 * @description This variable contains all attribute documentation information as an array.
	 */
	var attributes = [{

		label: 0,
		nameFun: 'ZclVersion',
		nameObj: 'zclVersion',
		clusterId: 0,
		name: 'ZCL version',
		server: true,
		attributeId: 0,
		type: 'INT8U',
		writable: false,
		mandatory: true
	}, {

		label: 1,
		nameFun: 'ApplicationVersion',
		nameObj: 'applicationVersion',
		clusterId: 0,
		name: 'application version',
		server: true,
		attributeId: 1,
		type: 'INT8U',
		writable: false,
		mandatory: false
	}, {

		label: 2,
		nameFun: 'StackVersion',
		nameObj: 'stackVersion',
		clusterId: 0,
		name: 'stack version',
		server: true,
		attributeId: 2,
		type: 'INT8U',
		writable: false,
		mandatory: false
	}, {

		label: 3,
		nameFun: 'HardwareVersion',
		nameObj: 'hardwareVersion',
		clusterId: 0,
		name: 'hardware version',
		server: true,
		attributeId: 3,
		type: 'INT8U',
		writable: false,
		mandatory: false
	}, {

		label: 4,
		nameFun: 'ManufacturerName',
		nameObj: 'manufacturerName',
		clusterId: 0,
		name: 'manufacturer name',
		server: true,
		attributeId: 4,
		type: 'CHAR_STRING',
		writable: false,
		mandatory: false
	}, {

		label: 5,
		nameFun: 'ModelIdentifier',
		nameObj: 'modelIdentifier',
		clusterId: 0,
		name: 'model identifier',
		server: true,
		attributeId: 5,
		type: 'CHAR_STRING',
		writable: false,
		mandatory: false
	}, {

		label: 6,
		nameFun: 'DateCode',
		nameObj: 'dateCode',
		clusterId: 0,
		name: 'date code',
		server: true,
		attributeId: 6,
		type: 'CHAR_STRING',
		writable: false,
		mandatory: false
	}, {

		label: 7,
		nameFun: 'PowerSource',
		nameObj: 'powerSource',
		clusterId: 0,
		name: 'power source',
		server: true,
		attributeId: 7,
		type: 'ENUM8',
		writable: false,
		mandatory: true
	}, {

		label: 8,
		nameFun: 'ApplicationProfileVersion',
		nameObj: 'applicationProfileVersion',
		clusterId: 0,
		name: 'application profile version',
		server: true,
		attributeId: 8,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 9,
		nameFun: 'LocationDescription',
		nameObj: 'locationDescription',
		clusterId: 0,
		name: 'location description',
		server: true,
		attributeId: 16,
		type: 'CHAR_STRING',
		writable: true,
		mandatory: false
	}, {

		label: 10,
		nameFun: 'PhysicalEnvironment',
		nameObj: 'physicalEnvironment',
		clusterId: 0,
		name: 'physical environment',
		server: true,
		attributeId: 17,
		type: 'ENUM8',
		writable: true,
		mandatory: false
	}, {

		label: 11,
		nameFun: 'DeviceEnabled',
		nameObj: 'deviceEnabled',
		clusterId: 0,
		name: 'device enabled',
		server: true,
		attributeId: 12,
		type: 'BOOLEAN',
		writable: true,
		mandatory: false
	}, {

		label: 12,
		nameFun: 'AlarmMask',
		nameObj: 'alarmMask',
		clusterId: 0,
		name: 'alarm mask',
		server: true,
		attributeId: 19,
		type: 'BITMAP8',
		writable: true,
		mandatory: false
	}, {

		label: 13,
		nameFun: 'DisableLocalConfig',
		nameObj: 'disableLocalConfig',
		clusterId: 0,
		name: 'disable local config',
		server: true,
		attributeId: 20,
		type: 'BITMAP8',
		writable: true,
		mandatory: false
	}, {

		label: 14,
		nameFun: 'MainsVoltage',
		nameObj: 'mainsVoltage',
		clusterId: 1,
		name: 'mains voltage',
		server: true,
		attributeId: 0,
		type: 'INT16U',
		writable: false,
		mandatory: false
	}, {

		label: 15,
		nameFun: 'MainsFrequency',
		nameObj: 'mainsFrequency',
		clusterId: 1,
		name: 'mains frequency',
		server: true,
		attributeId: 1,
		type: 'INT8U',
		writable: false,
		mandatory: false
	}, {

		label: 16,
		nameFun: 'MainsAlarmMask',
		nameObj: 'mainsAlarmMask',
		clusterId: 1,
		name: 'mains alarm mask',
		server: true,
		attributeId: 16,
		type: 'BITMAP8',
		writable: true,
		mandatory: false
	}, {

		label: 17,
		nameFun: 'MainsVoltageMinThreshold',
		nameObj: 'mainsVoltageMinThreshold',
		clusterId: 1,
		name: 'mains voltage min threshold',
		server: true,
		attributeId: 17,
		type: 'INT16U',
		writable: true,
		mandatory: false
	}, {

		label: 18,
		nameFun: 'MainsVoltageMaxThreshold',
		nameObj: 'mainsVoltageMaxThreshold',
		clusterId: 1,
		name: 'mains voltage max threshold',
		server: true,
		attributeId: 18,
		type: 'INT16U',
		writable: true,
		mandatory: false
	}, {

		label: 19,
		nameFun: 'MainsVoltageDwellTrip',
		nameObj: 'mainsVoltageDwellTrip',
		clusterId: 1,
		name: 'mains voltage dwell trip',
		server: true,
		attributeId: 19,
		type: 'INT16U',
		writable: true,
		mandatory: false
	}, {

		label: 20,
		nameFun: 'BatteryVoltage',
		nameObj: 'batteryVoltage',
		clusterId: 1,
		name: 'battery voltage',
		server: true,
		attributeId: 32,
		type: 'INT8U',
		writable: false,
		mandatory: false
	}, {

		label: 21,
		nameFun: 'BatteryPercentageRemaining',
		nameObj: 'batteryPercentageRemaining',
		clusterId: 1,
		name: 'battery percentage remaining',
		server: true,
		attributeId: 33,
		type: 'INT8U',
		writable: false,
		mandatory: false
	}, {

		label: 22,
		nameFun: 'BatteryManufacturer',
		nameObj: 'batteryManufacturer',
		clusterId: 1,
		name: 'battery manufacturer',
		server: true,
		attributeId: 48,
		type: 'CHAR_STRING',
		writable: true,
		mandatory: false
	}, {

		label: 23,
		nameFun: 'BatterySize',
		nameObj: 'batterySize',
		clusterId: 1,
		name: 'battery size',
		server: true,
		attributeId: 49,
		type: 'ENUM8',
		writable: true,
		mandatory: false
	}, {

		label: 24,
		nameFun: 'BatteryAhrRating',
		nameObj: 'batteryAhrRating',
		clusterId: 1,
		name: 'battery ahr rating',
		server: true,
		attributeId: 50,
		type: 'INT16U',
		writable: true,
		mandatory: false
	}, {

		label: 25,
		nameFun: 'BatteryQuantity',
		nameObj: 'batteryQuantity',
		clusterId: 1,
		name: 'battery quantity',
		server: true,
		attributeId: 51,
		type: 'INT8U',
		writable: true,
		mandatory: false
	}, {

		label: 26,
		nameFun: 'BatteryRatedVoltage',
		nameObj: 'batteryRatedVoltage',
		clusterId: 1,
		name: 'battery rated voltage',
		server: true,
		attributeId: 52,
		type: 'INT8U',
		writable: true,
		mandatory: false
	}, {

		label: 27,
		nameFun: 'BatteryAlarmMask',
		nameObj: 'batteryAlarmMask',
		clusterId: 1,
		name: 'battery alarm mask',
		server: true,
		attributeId: 53,
		type: 'BITMAP8',
		writable: true,
		mandatory: false
	}, {

		label: 28,
		nameFun: 'BatteryVoltageMinThreshold',
		nameObj: 'batteryVoltageMinThreshold',
		clusterId: 1,
		name: 'battery voltage min threshold',
		server: true,
		attributeId: 54,
		type: 'INT8U',
		writable: true,
		mandatory: false
	}, {

		label: 29,
		nameFun: 'BatteryVoltageThreshold1',
		nameObj: 'batteryVoltageThreshold1',
		clusterId: 1,
		name: 'battery voltage threshold 1',
		server: true,
		attributeId: 55,
		type: 'INT8U',
		writable: true,
		mandatory: false
	}, {

		label: 30,
		nameFun: 'BatteryVoltageThreshold2',
		nameObj: 'batteryVoltageThreshold2',
		clusterId: 1,
		name: 'battery voltage threshold 2',
		server: true,
		attributeId: 56,
		type: 'INT8U',
		writable: true,
		mandatory: false
	}, {

		label: 31,
		nameFun: 'BatteryVoltageThreshold3',
		nameObj: 'batteryVoltageThreshold3',
		clusterId: 1,
		name: 'battery voltage threshold 3',
		server: true,
		attributeId: 57,
		type: 'INT8U',
		writable: true,
		mandatory: false
	}, {

		label: 32,
		nameFun: 'BatteryPercentageMinThreshold',
		nameObj: 'batteryPercentageMinThreshold',
		clusterId: 1,
		name: 'battery percentage min threshold',
		server: true,
		attributeId: 58,
		type: 'INT8U',
		writable: true,
		mandatory: false
	}, {

		label: 33,
		nameFun: 'BatteryPercentageThreshold1',
		nameObj: 'batteryPercentageThreshold1',
		clusterId: 1,
		name: 'battery percentage threshold 1',
		server: true,
		attributeId: 59,
		type: 'INT8U',
		writable: true,
		mandatory: false
	}, {

		label: 34,
		nameFun: 'BatteryPercentageThreshold2',
		nameObj: 'batteryPercentageThreshold2',
		clusterId: 1,
		name: 'battery percentage threshold 2',
		server: true,
		attributeId: 60,
		type: 'INT8U',
		writable: true,
		mandatory: false
	}, {

		label: 35,
		nameFun: 'BatteryPercentageThreshold3',
		nameObj: 'batteryPercentageThreshold3',
		clusterId: 1,
		name: 'battery percentage threshold 3',
		server: true,
		attributeId: 61,
		type: 'INT8U',
		writable: true,
		mandatory: false
	}, {

		label: 36,
		nameFun: 'BatteryAlarmState',
		nameObj: 'batteryAlarmState',
		clusterId: 1,
		name: 'battery alarm state',
		server: true,
		attributeId: 62,
		type: 'BITMAP32',
		writable: false,
		mandatory: false
	}, {

		label: 37,
		nameFun: 'Battery2Voltage',
		nameObj: 'battery2Voltage',
		clusterId: 1,
		name: 'battery 2 voltage',
		server: true,
		attributeId: 64,
		type: 'INT8U',
		writable: false,
		mandatory: false
	}, {

		label: 38,
		nameFun: 'Battery2PercentageRemaining',
		nameObj: 'battery2PercentageRemaining',
		clusterId: 1,
		name: 'battery 2 percentage remaining',
		server: true,
		attributeId: 65,
		type: 'INT8U',
		writable: false,
		mandatory: false
	}, {

		label: 39,
		nameFun: 'Battery2Manufacturer',
		nameObj: 'battery2Manufacturer',
		clusterId: 1,
		name: 'battery 2 manufacturer',
		server: true,
		attributeId: 80,
		type: 'CHAR_STRING',
		writable: true,
		mandatory: false
	}, {

		label: 40,
		nameFun: 'Battery2Size',
		nameObj: 'battery2Size',
		clusterId: 1,
		name: 'battery 2 size',
		server: true,
		attributeId: 81,
		type: 'ENUM8',
		writable: true,
		mandatory: false
	}, {

		label: 41,
		nameFun: 'Battery2AhrRating',
		nameObj: 'battery2AhrRating',
		clusterId: 1,
		name: 'battery 2 ahr rating',
		server: true,
		attributeId: 82,
		type: 'INT16U',
		writable: true,
		mandatory: false
	}, {

		label: 42,
		nameFun: 'Battery2Quantity',
		nameObj: 'battery2Quantity',
		clusterId: 1,
		name: 'battery 2 quantity',
		server: true,
		attributeId: 83,
		type: 'INT8U',
		writable: true,
		mandatory: false
	}, {

		label: 43,
		nameFun: 'Battery2RatedVoltage',
		nameObj: 'battery2RatedVoltage',
		clusterId: 1,
		name: 'battery 2 rated voltage',
		server: true,
		attributeId: 84,
		type: 'INT8U',
		writable: true,
		mandatory: false
	}, {

		label: 44,
		nameFun: 'Battery2AlarmMask',
		nameObj: 'battery2AlarmMask',
		clusterId: 1,
		name: 'battery 2 alarm mask',
		server: true,
		attributeId: 85,
		type: 'BITMAP8',
		writable: true,
		mandatory: false
	}, {

		label: 45,
		nameFun: 'Battery2VoltageMinThreshold',
		nameObj: 'battery2VoltageMinThreshold',
		clusterId: 1,
		name: 'battery 2 voltage min threshold',
		server: true,
		attributeId: 86,
		type: 'INT8U',
		writable: true,
		mandatory: false
	}, {

		label: 46,
		nameFun: 'Battery2VoltageThreshold1',
		nameObj: 'battery2VoltageThreshold1',
		clusterId: 1,
		name: 'battery 2 voltage threshold 1',
		server: true,
		attributeId: 87,
		type: 'INT8U',
		writable: true,
		mandatory: false
	}, {

		label: 47,
		nameFun: 'Battery2VoltageThreshold2',
		nameObj: 'battery2VoltageThreshold2',
		clusterId: 1,
		name: 'battery 2 voltage threshold 2',
		server: true,
		attributeId: 88,
		type: 'INT8U',
		writable: true,
		mandatory: false
	}, {

		label: 48,
		nameFun: 'Battery2VoltageThreshold3',
		nameObj: 'battery2VoltageThreshold3',
		clusterId: 1,
		name: 'battery 2 voltage threshold 3',
		server: true,
		attributeId: 89,
		type: 'INT8U',
		writable: true,
		mandatory: false
	}, {

		label: 49,
		nameFun: 'Battery2PercentageMinThreshold',
		nameObj: 'battery2PercentageMinThreshold',
		clusterId: 1,
		name: 'battery 2 percentage min threshold',
		server: true,
		attributeId: 90,
		type: 'INT8U',
		writable: true,
		mandatory: false
	}, {

		label: 50,
		nameFun: 'Battery2PercentageThreshold1',
		nameObj: 'battery2PercentageThreshold1',
		clusterId: 1,
		name: 'battery 2 percentage threshold 1',
		server: true,
		attributeId: 91,
		type: 'INT8U',
		writable: true,
		mandatory: false
	}, {

		label: 51,
		nameFun: 'Battery2PercentageThreshold2',
		nameObj: 'battery2PercentageThreshold2',
		clusterId: 1,
		name: 'battery 2 percentage threshold 2',
		server: true,
		attributeId: 92,
		type: 'INT8U',
		writable: true,
		mandatory: false
	}, {

		label: 52,
		nameFun: 'Battery2PercentageThreshold3',
		nameObj: 'battery2PercentageThreshold3',
		clusterId: 1,
		name: 'battery 2 percentage threshold 3',
		server: true,
		attributeId: 93,
		type: 'INT8U',
		writable: true,
		mandatory: false
	}, {

		label: 53,
		nameFun: 'Battery2AlarmState',
		nameObj: 'battery2AlarmState',
		clusterId: 1,
		name: 'battery 2 alarm state',
		server: true,
		attributeId: 94,
		type: 'BITMAP32',
		writable: false,
		mandatory: false
	}, {

		label: 54,
		nameFun: 'Battery3Voltage',
		nameObj: 'battery3Voltage',
		clusterId: 1,
		name: 'battery 3 voltage',
		server: true,
		attributeId: 96,
		type: 'INT8U',
		writable: false,
		mandatory: false
	}, {

		label: 55,
		nameFun: 'Battery3PercentageRemaining',
		nameObj: 'battery3PercentageRemaining',
		clusterId: 1,
		name: 'battery 3 percentage remaining',
		server: true,
		attributeId: 97,
		type: 'INT8U',
		writable: false,
		mandatory: false
	}, {

		label: 56,
		nameFun: 'Battery3Manufacturer',
		nameObj: 'battery3Manufacturer',
		clusterId: 1,
		name: 'battery 3 manufacturer',
		server: true,
		attributeId: 112,
		type: 'CHAR_STRING',
		writable: true,
		mandatory: false
	}, {

		label: 57,
		nameFun: 'Battery3Size',
		nameObj: 'battery3Size',
		clusterId: 1,
		name: 'battery 3 size',
		server: true,
		attributeId: 113,
		type: 'ENUM8',
		writable: true,
		mandatory: false
	}, {

		label: 58,
		nameFun: 'Battery3AhrRating',
		nameObj: 'battery3AhrRating',
		clusterId: 1,
		name: 'battery 3 ahr rating',
		server: true,
		attributeId: 114,
		type: 'INT16U',
		writable: true,
		mandatory: false
	}, {

		label: 59,
		nameFun: 'Battery3Quantity',
		nameObj: 'battery3Quantity',
		clusterId: 1,
		name: 'battery 3 quantity',
		server: true,
		attributeId: 115,
		type: 'INT8U',
		writable: true,
		mandatory: false
	}, {

		label: 60,
		nameFun: 'Battery3RatedVoltage',
		nameObj: 'battery3RatedVoltage',
		clusterId: 1,
		name: 'battery 3 rated voltage',
		server: true,
		attributeId: 116,
		type: 'INT8U',
		writable: true,
		mandatory: false
	}, {

		label: 61,
		nameFun: 'Battery3AlarmMask',
		nameObj: 'battery3AlarmMask',
		clusterId: 1,
		name: 'battery 3 alarm mask',
		server: true,
		attributeId: 117,
		type: 'BITMAP8',
		writable: true,
		mandatory: false
	}, {

		label: 62,
		nameFun: 'Battery3VoltageMinThreshold',
		nameObj: 'battery3VoltageMinThreshold',
		clusterId: 1,
		name: 'battery 3 voltage min threshold',
		server: true,
		attributeId: 118,
		type: 'INT8U',
		writable: true,
		mandatory: false
	}, {

		label: 63,
		nameFun: 'Battery3VoltageThreshold1',
		nameObj: 'battery3VoltageThreshold1',
		clusterId: 1,
		name: 'battery 3 voltage threshold 1',
		server: true,
		attributeId: 119,
		type: 'INT8U',
		writable: true,
		mandatory: false
	}, {

		label: 64,
		nameFun: 'Battery3VoltageThreshold2',
		nameObj: 'battery3VoltageThreshold2',
		clusterId: 1,
		name: 'battery 3 voltage threshold 2',
		server: true,
		attributeId: 120,
		type: 'INT8U',
		writable: true,
		mandatory: false
	}, {

		label: 65,
		nameFun: 'Battery3VoltageThreshold3',
		nameObj: 'battery3VoltageThreshold3',
		clusterId: 1,
		name: 'battery 3 voltage threshold 3',
		server: true,
		attributeId: 121,
		type: 'INT8U',
		writable: true,
		mandatory: false
	}, {

		label: 66,
		nameFun: 'Battery3PercentageMinThreshold',
		nameObj: 'battery3PercentageMinThreshold',
		clusterId: 1,
		name: 'battery 3 percentage min threshold',
		server: true,
		attributeId: 122,
		type: 'INT8U',
		writable: true,
		mandatory: false
	}, {

		label: 67,
		nameFun: 'Battery3PercentageThreshold1',
		nameObj: 'battery3PercentageThreshold1',
		clusterId: 1,
		name: 'battery 3 percentage threshold 1',
		server: true,
		attributeId: 123,
		type: 'INT8U',
		writable: true,
		mandatory: false
	}, {

		label: 68,
		nameFun: 'Battery3PercentageThreshold2',
		nameObj: 'battery3PercentageThreshold2',
		clusterId: 1,
		name: 'battery 3 percentage threshold 2',
		server: true,
		attributeId: 124,
		type: 'INT8U',
		writable: true,
		mandatory: false
	}, {

		label: 69,
		nameFun: 'Battery3PercentageThreshold3',
		nameObj: 'battery3PercentageThreshold3',
		clusterId: 1,
		name: 'battery 3 percentage threshold 3',
		server: true,
		attributeId: 125,
		type: 'INT8U',
		writable: true,
		mandatory: false
	}, {

		label: 70,
		nameFun: 'Battery3AlarmState',
		nameObj: 'battery3AlarmState',
		clusterId: 1,
		name: 'battery 3 alarm state',
		server: true,
		attributeId: 126,
		type: 'BITMAP32',
		writable: false,
		mandatory: false
	}, {

		label: 71,
		nameFun: 'CurrentTemperature',
		nameObj: 'currentTemperature',
		clusterId: 2,
		name: 'current temperature',
		server: true,
		attributeId: 0,
		type: 'INT16S',
		writable: false,
		mandatory: true
	}, {

		label: 72,
		nameFun: 'MinTempExperienced',
		nameObj: 'minTempExperienced',
		clusterId: 2,
		name: 'min temp experienced',
		server: true,
		attributeId: 1,
		type: 'INT16S',
		writable: false,
		mandatory: false
	}, {

		label: 73,
		nameFun: 'MaxTempExperienced',
		nameObj: 'maxTempExperienced',
		clusterId: 2,
		name: 'max temp experienced',
		server: true,
		attributeId: 2,
		type: 'INT16S',
		writable: false,
		mandatory: false
	}, {

		label: 74,
		nameFun: 'OverTempTotalDwell',
		nameObj: 'overTempTotalDwell',
		clusterId: 2,
		name: 'over temp total dwell',
		server: true,
		attributeId: 3,
		type: 'INT16U',
		writable: false,
		mandatory: false
	}, {

		label: 75,
		nameFun: 'DeviceTempAlarmMask',
		nameObj: 'deviceTempAlarmMask',
		clusterId: 2,
		name: 'device temp alarm mask',
		server: true,
		attributeId: 16,
		type: 'BITMAP8',
		writable: true,
		mandatory: false
	}, {

		label: 76,
		nameFun: 'LowTempThreshold',
		nameObj: 'lowTempThreshold',
		clusterId: 2,
		name: 'low temp threshold',
		server: true,
		attributeId: 17,
		type: 'INT16S',
		writable: true,
		mandatory: false
	}, {

		label: 77,
		nameFun: 'HighTempThreshold',
		nameObj: 'highTempThreshold',
		clusterId: 2,
		name: 'high temp threshold',
		server: true,
		attributeId: 18,
		type: 'INT16S',
		writable: true,
		mandatory: false
	}, {

		label: 78,
		nameFun: 'LowTempDwellTripPoint',
		nameObj: 'lowTempDwellTripPoint',
		clusterId: 2,
		name: 'low temp dwell trip point',
		server: true,
		attributeId: 19,
		type: 'INT24U',
		writable: true,
		mandatory: false
	}, {

		label: 79,
		nameFun: 'HighTempDwellTripPoint',
		nameObj: 'highTempDwellTripPoint',
		clusterId: 2,
		name: 'high temp dwell trip point',
		server: true,
		attributeId: 20,
		type: 'INT24U',
		writable: true,
		mandatory: false
	}, {

		label: 80,
		nameFun: 'IdentifyTime',
		nameObj: 'identifyTime',
		clusterId: 3,
		name: 'identify time',
		server: true,
		attributeId: 0,
		type: 'INT16U',
		writable: true,
		mandatory: true
	}, {

		label: 81,
		nameFun: 'CommissionState',
		nameObj: 'commissionState',
		clusterId: 3,
		name: 'commission state',
		server: true,
		attributeId: 1,
		type: 'BITMAP8',
		writable: false,
		mandatory: false
	}, {

		label: 82,
		nameFun: 'GroupNameSupport',
		nameObj: 'groupNameSupport',
		clusterId: 4,
		name: 'group name support',
		server: true,
		attributeId: 0,
		type: 'BITMAP8',
		writable: false,
		mandatory: true
	}, {

		label: 83,
		nameFun: 'SceneCount',
		nameObj: 'sceneCount',
		clusterId: 5,
		name: 'scene count',
		server: true,
		attributeId: 0,
		type: 'INT8U',
		writable: false,
		mandatory: true
	}, {

		label: 84,
		nameFun: 'CurrentScene',
		nameObj: 'currentScene',
		clusterId: 5,
		name: 'current scene',
		server: true,
		attributeId: 1,
		type: 'INT8U',
		writable: false,
		mandatory: true
	}, {

		label: 85,
		nameFun: 'CurrentGroup',
		nameObj: 'currentGroup',
		clusterId: 5,
		name: 'current group',
		server: true,
		attributeId: 2,
		type: 'INT16U',
		writable: false,
		mandatory: true
	}, {

		label: 86,
		nameFun: 'SceneValid',
		nameObj: 'sceneValid',
		clusterId: 5,
		name: 'scene valid',
		server: true,
		attributeId: 3,
		type: 'BOOLEAN',
		writable: false,
		mandatory: true
	}, {

		label: 87,
		nameFun: 'SceneNameSupport',
		nameObj: 'sceneNameSupport',
		clusterId: 5,
		name: 'scene name support',
		server: true,
		attributeId: 4,
		type: 'BITMAP8',
		writable: false,
		mandatory: true
	}, {

		label: 88,
		nameFun: 'LastConfiguredBy',
		nameObj: 'lastConfiguredBy',
		clusterId: 5,
		name: 'last configured by',
		server: true,
		attributeId: 5,
		type: 'IEEE_ADDRESS',
		writable: false,
		mandatory: false
	}, {

		label: 89,
		nameFun: 'OnOff',
		nameObj: 'onOff',
		clusterId: 6,
		name: 'on/off',
		server: true,
		attributeId: 0,
		type: 'BOOLEAN',
		writable: false,
		mandatory: true
	}, {

		label: 90,
		nameFun: 'SwitchType',
		nameObj: 'switchType',
		clusterId: 7,
		name: 'switch type',
		server: true,
		attributeId: 0,
		type: 'ENUM8',
		writable: false,
		mandatory: true
	}, {

		label: 91,
		nameFun: 'SwitchActions',
		nameObj: 'switchActions',
		clusterId: 7,
		name: 'switch actions',
		server: true,
		attributeId: 16,
		type: 'ENUM8',
		writable: true,
		mandatory: true
	}, {

		label: 92,
		nameFun: 'CurrentLevel',
		nameObj: 'currentLevel',
		clusterId: 8,
		name: 'current level',
		server: true,
		attributeId: 0,
		type: 'INT8U',
		writable: false,
		mandatory: true
	}, {

		label: 93,
		nameFun: 'RemainingTime',
		nameObj: 'remainingTime',
		clusterId: 8,
		name: 'remaining time',
		server: true,
		attributeId: 1,
		type: 'INT16U',
		writable: false,
		mandatory: false
	}, {

		label: 94,
		nameFun: 'OnOffTransitionTime',
		nameObj: 'onOffTransitionTime',
		clusterId: 8,
		name: 'on off transition time',
		server: true,
		attributeId: 16,
		type: 'INT16U',
		writable: true,
		mandatory: false
	}, {

		label: 95,
		nameFun: 'OnLevel',
		nameObj: 'onLevel',
		clusterId: 8,
		name: 'on level',
		server: true,
		attributeId: 17,
		type: 'INT8U',
		writable: true,
		mandatory: false
	}, {

		label: 96,
		nameFun: 'OnTransitionTime',
		nameObj: 'onTransitionTime',
		clusterId: 8,
		name: 'on transition time',
		server: true,
		attributeId: 18,
		type: 'INT16U',
		writable: true,
		mandatory: false
	}, {

		label: 97,
		nameFun: 'OffTransitionTime',
		nameObj: 'offTransitionTime',
		clusterId: 8,
		name: 'off transition time',
		server: true,
		attributeId: 19,
		type: 'INT16U',
		writable: true,
		mandatory: false
	}, {

		label: 98,
		nameFun: 'DefaultmoveRate',
		nameObj: 'defaultmoveRate',
		clusterId: 8,
		name: 'defaultmove rate',
		server: true,
		attributeId: 20,
		type: 'INT8U',
		writable: true,
		mandatory: false
	}, {

		label: 99,
		nameFun: 'AlarmCount',
		nameObj: 'alarmCount',
		clusterId: 9,
		name: 'alarm count',
		server: true,
		attributeId: 0,
		type: 'INT16U',
		writable: false,
		mandatory: false
	}, {

		label: 100,
		nameFun: 'Time',
		nameObj: 'time',
		clusterId: 10,
		name: 'time',
		server: true,
		attributeId: 0,
		type: 'UTC_TIME',
		writable: true,
		mandatory: true
	}, {

		label: 101,
		nameFun: 'TimeStatus',
		nameObj: 'timeStatus',
		clusterId: 10,
		name: 'time status',
		server: true,
		attributeId: 1,
		type: 'BITMAP8',
		writable: true,
		mandatory: true
	}, {

		label: 102,
		nameFun: 'TimeZone',
		nameObj: 'timeZone',
		clusterId: 10,
		name: 'time zone',
		server: true,
		attributeId: 2,
		type: 'INT32S',
		writable: true,
		mandatory: false
	}, {

		label: 103,
		nameFun: 'DstStart',
		nameObj: 'dstStart',
		clusterId: 10,
		name: 'dst start',
		server: true,
		attributeId: 3,
		type: 'INT32U',
		writable: true,
		mandatory: false
	}, {

		label: 104,
		nameFun: 'DstEnd',
		nameObj: 'dstEnd',
		clusterId: 10,
		name: 'dst end',
		server: true,
		attributeId: 4,
		type: 'INT32U',
		writable: true,
		mandatory: false
	}, {

		label: 105,
		nameFun: 'DstShift',
		nameObj: 'dstShift',
		clusterId: 10,
		name: 'dst shift',
		server: true,
		attributeId: 5,
		type: 'INT32S',
		writable: true,
		mandatory: false
	}, {

		label: 106,
		nameFun: 'StandardTime',
		nameObj: 'standardTime',
		clusterId: 10,
		name: 'standard time',
		server: true,
		attributeId: 6,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 107,
		nameFun: 'LocalTime',
		nameObj: 'localTime',
		clusterId: 10,
		name: 'local time',
		server: true,
		attributeId: 7,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 108,
		nameFun: 'LastSetTime',
		nameObj: 'lastSetTime',
		clusterId: 10,
		name: 'last set time',
		server: true,
		attributeId: 8,
		type: 'UTC_TIME',
		writable: false,
		mandatory: false
	}, {

		label: 109,
		nameFun: 'ValidUntilTime',
		nameObj: 'validUntilTime',
		clusterId: 10,
		name: 'valid until time',
		server: true,
		attributeId: 9,
		type: 'UTC_TIME',
		writable: true,
		mandatory: false
	}, {

		label: 110,
		nameFun: 'LocationType',
		nameObj: 'locationType',
		clusterId: 11,
		name: 'location type',
		server: true,
		attributeId: 0,
		type: 'DATA8',
		writable: false,
		mandatory: true
	}, {

		label: 111,
		nameFun: 'LocationMethod',
		nameObj: 'locationMethod',
		clusterId: 11,
		name: 'location method',
		server: true,
		attributeId: 1,
		type: 'ENUM8',
		writable: false,
		mandatory: true
	}, {

		label: 112,
		nameFun: 'LocationAge',
		nameObj: 'locationAge',
		clusterId: 11,
		name: 'location age',
		server: true,
		attributeId: 2,
		type: 'INT16U',
		writable: false,
		mandatory: false
	}, {

		label: 113,
		nameFun: 'QualityMeasure',
		nameObj: 'qualityMeasure',
		clusterId: 11,
		name: 'quality measure',
		server: true,
		attributeId: 3,
		type: 'INT8U',
		writable: false,
		mandatory: false
	}, {

		label: 114,
		nameFun: 'NumberOfDevices',
		nameObj: 'numberOfDevices',
		clusterId: 11,
		name: 'number of devices',
		server: true,
		attributeId: 4,
		type: 'INT8U',
		writable: false,
		mandatory: false
	}, {

		label: 115,
		nameFun: 'Coordinate1',
		nameObj: 'coordinate1',
		clusterId: 11,
		name: 'coordinate 1',
		server: true,
		attributeId: 16,
		type: 'INT16S',
		writable: true,
		mandatory: true
	}, {

		label: 116,
		nameFun: 'Coordinate2',
		nameObj: 'coordinate2',
		clusterId: 11,
		name: 'coordinate 2',
		server: true,
		attributeId: 17,
		type: 'INT16S',
		writable: true,
		mandatory: true
	}, {

		label: 117,
		nameFun: 'Coordinate3',
		nameObj: 'coordinate3',
		clusterId: 11,
		name: 'coordinate 3',
		server: true,
		attributeId: 18,
		type: 'INT16S',
		writable: true,
		mandatory: false
	}, {

		label: 118,
		nameFun: 'Power',
		nameObj: 'power',
		clusterId: 11,
		name: 'power',
		server: true,
		attributeId: 19,
		type: 'INT16S',
		writable: true,
		mandatory: true
	}, {

		label: 119,
		nameFun: 'PathLossExponent',
		nameObj: 'pathLossExponent',
		clusterId: 11,
		name: 'path loss exponent',
		server: true,
		attributeId: 20,
		type: 'INT16U',
		writable: true,
		mandatory: true
	}, {

		label: 120,
		nameFun: 'ReportingPeriod',
		nameObj: 'reportingPeriod',
		clusterId: 11,
		name: 'reporting period',
		server: true,
		attributeId: 21,
		type: 'INT16U',
		writable: true,
		mandatory: false
	}, {

		label: 121,
		nameFun: 'CalculationPeriod',
		nameObj: 'calculationPeriod',
		clusterId: 11,
		name: 'calculation period',
		server: true,
		attributeId: 22,
		type: 'INT16U',
		writable: true,
		mandatory: false
	}, {

		label: 122,
		nameFun: 'NumberRssiMeasurements',
		nameObj: 'numberRssiMeasurements',
		clusterId: 11,
		name: 'number rssi measurements',
		server: true,
		attributeId: 23,
		type: 'INT8U',
		writable: true,
		mandatory: true
	}, {

		label: 123,
		nameFun: 'ActiveText',
		nameObj: 'activeText',
		clusterId: 15,
		name: 'active text',
		server: true,
		attributeId: 4,
		type: 'CHAR_STRING',
		writable: true,
		mandatory: false
	}, {

		label: 124,
		nameFun: 'Description',
		nameObj: 'description',
		clusterId: 15,
		name: 'description',
		server: true,
		attributeId: 28,
		type: 'CHAR_STRING',
		writable: true,
		mandatory: false
	}, {

		label: 125,
		nameFun: 'InactiveText',
		nameObj: 'inactiveText',
		clusterId: 15,
		name: 'inactive text',
		server: true,
		attributeId: 46,
		type: 'CHAR_STRING',
		writable: true,
		mandatory: false
	}, {

		label: 126,
		nameFun: 'OutOfService',
		nameObj: 'outOfService',
		clusterId: 15,
		name: 'out of service',
		server: true,
		attributeId: 81,
		type: 'BOOLEAN',
		writable: true,
		mandatory: true
	}, {

		label: 127,
		nameFun: 'Polarity',
		nameObj: 'polarity',
		clusterId: 15,
		name: 'polarity',
		server: true,
		attributeId: 84,
		type: 'ENUM8',
		writable: false,
		mandatory: false
	}, {

		label: 128,
		nameFun: 'PresentValue',
		nameObj: 'presentValue',
		clusterId: 15,
		name: 'present value',
		server: true,
		attributeId: 85,
		type: 'BOOLEAN',
		writable: true,
		mandatory: true
	}, {

		label: 129,
		nameFun: 'Reliability',
		nameObj: 'reliability',
		clusterId: 15,
		name: 'reliability',
		server: true,
		attributeId: 103,
		type: 'ENUM8',
		writable: true,
		mandatory: false
	}, {

		label: 130,
		nameFun: 'StatusFlags',
		nameObj: 'statusFlags',
		clusterId: 15,
		name: 'status flags',
		server: true,
		attributeId: 111,
		type: 'BITMAP8',
		writable: false,
		mandatory: true
	}, {

		label: 131,
		nameFun: 'ApplicationType',
		nameObj: 'applicationType',
		clusterId: 15,
		name: 'application type',
		server: true,
		attributeId: 256,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 132,
		nameFun: 'ShortAddress',
		nameObj: 'shortAddress',
		clusterId: 21,
		name: 'short address',
		server: true,
		attributeId: 0,
		type: 'INT16U',
		writable: true,
		mandatory: false
	}, {

		label: 133,
		nameFun: 'ExtendedPanId',
		nameObj: 'extendedPanId',
		clusterId: 21,
		name: 'extended pan id',
		server: true,
		attributeId: 1,
		type: 'IEEE_ADDRESS',
		writable: true,
		mandatory: true
	}, {

		label: 134,
		nameFun: 'PanId',
		nameObj: 'panId',
		clusterId: 21,
		name: 'pan id',
		server: true,
		attributeId: 2,
		type: 'INT16U',
		writable: true,
		mandatory: false
	}, {

		label: 135,
		nameFun: 'ChannelMask',
		nameObj: 'channelMask',
		clusterId: 21,
		name: 'channel mask',
		server: true,
		attributeId: 3,
		type: 'BITMAP32',
		writable: true,
		mandatory: true
	}, {

		label: 136,
		nameFun: 'ProtocolVersion',
		nameObj: 'protocolVersion',
		clusterId: 21,
		name: 'protocol version',
		server: true,
		attributeId: 4,
		type: 'INT8U',
		writable: true,
		mandatory: false
	}, {

		label: 137,
		nameFun: 'StackProfile',
		nameObj: 'stackProfile',
		clusterId: 21,
		name: 'stack profile',
		server: true,
		attributeId: 5,
		type: 'INT8U',
		writable: true,
		mandatory: false
	}, {

		label: 138,
		nameFun: 'StartupControl',
		nameObj: 'startupControl',
		clusterId: 21,
		name: 'startup control',
		server: true,
		attributeId: 6,
		type: 'ENUM8',
		writable: true,
		mandatory: true
	}, {

		label: 139,
		nameFun: 'TrustCenterAddress',
		nameObj: 'trustCenterAddress',
		clusterId: 21,
		name: 'trust center address',
		server: true,
		attributeId: 16,
		type: 'IEEE_ADDRESS',
		writable: true,
		mandatory: true
	}, {

		label: 140,
		nameFun: 'TrustCenterMasterKey',
		nameObj: 'trustCenterMasterKey',
		clusterId: 21,
		name: 'trust center master key',
		server: true,
		attributeId: 17,
		type: 'SECURITY_KEY',
		writable: true,
		mandatory: true
	}, {

		label: 141,
		nameFun: 'NetworkKey',
		nameObj: 'networkKey',
		clusterId: 21,
		name: 'network key',
		server: true,
		attributeId: 18,
		type: 'SECURITY_KEY',
		writable: true,
		mandatory: true
	}, {

		label: 142,
		nameFun: 'UseInsecureJoin',
		nameObj: 'useInsecureJoin',
		clusterId: 21,
		name: 'use insecure join',
		server: true,
		attributeId: 19,
		type: 'BOOLEAN',
		writable: true,
		mandatory: true
	}, {

		label: 143,
		nameFun: 'PreconfiguredLinkKey',
		nameObj: 'preconfiguredLinkKey',
		clusterId: 21,
		name: 'preconfigured link key',
		server: true,
		attributeId: 20,
		type: 'SECURITY_KEY',
		writable: true,
		mandatory: true
	}, {

		label: 144,
		nameFun: 'NetworkKeySequenceNumber',
		nameObj: 'networkKeySequenceNumber',
		clusterId: 21,
		name: 'network key sequence number',
		server: true,
		attributeId: 21,
		type: 'INT8U',
		writable: true,
		mandatory: true
	}, {

		label: 145,
		nameFun: 'NetworkKeyType',
		nameObj: 'networkKeyType',
		clusterId: 21,
		name: 'network key type',
		server: true,
		attributeId: 22,
		type: 'ENUM8',
		writable: true,
		mandatory: true
	}, {

		label: 146,
		nameFun: 'NetworkManagerAddress',
		nameObj: 'networkManagerAddress',
		clusterId: 21,
		name: 'network manager address',
		server: true,
		attributeId: 23,
		type: 'INT16U',
		writable: true,
		mandatory: true
	}, {

		label: 147,
		nameFun: 'ScanAttempts',
		nameObj: 'scanAttempts',
		clusterId: 21,
		name: 'scan attempts',
		server: true,
		attributeId: 32,
		type: 'INT8U',
		writable: true,
		mandatory: true
	}, {

		label: 148,
		nameFun: 'TimeBetweenScans',
		nameObj: 'timeBetweenScans',
		clusterId: 21,
		name: 'time between scans',
		server: true,
		attributeId: 33,
		type: 'INT16U',
		writable: true,
		mandatory: true
	}, {

		label: 149,
		nameFun: 'RejoinInterval',
		nameObj: 'rejoinInterval',
		clusterId: 21,
		name: 'rejoin interval',
		server: true,
		attributeId: 34,
		type: 'INT16U',
		writable: true,
		mandatory: true
	}, {

		label: 150,
		nameFun: 'MaxRejoinInterval',
		nameObj: 'maxRejoinInterval',
		clusterId: 21,
		name: 'max rejoin interval',
		server: true,
		attributeId: 35,
		type: 'INT16U',
		writable: true,
		mandatory: true
	}, {

		label: 151,
		nameFun: 'IndirectPollRate',
		nameObj: 'indirectPollRate',
		clusterId: 21,
		name: 'indirect poll rate',
		server: true,
		attributeId: 48,
		type: 'INT16U',
		writable: true,
		mandatory: true
	}, {

		label: 152,
		nameFun: 'ParentRetryThreshold',
		nameObj: 'parentRetryThreshold',
		clusterId: 21,
		name: 'parent retry threshold',
		server: true,
		attributeId: 49,
		type: 'INT8U',
		writable: true,
		mandatory: true
	}, {

		label: 153,
		nameFun: 'ConcentratorFlag',
		nameObj: 'concentratorFlag',
		clusterId: 21,
		name: 'concentrator flag',
		server: true,
		attributeId: 64,
		type: 'BOOLEAN',
		writable: true,
		mandatory: true
	}, {

		label: 154,
		nameFun: 'ConcentratorRadius',
		nameObj: 'concentratorRadius',
		clusterId: 21,
		name: 'concentrator radius',
		server: true,
		attributeId: 65,
		type: 'INT8U',
		writable: true,
		mandatory: true
	}, {

		label: 155,
		nameFun: 'ConcentratorDiscoveryTime',
		nameObj: 'concentratorDiscoveryTime',
		clusterId: 21,
		name: 'concentrator discovery time',
		server: true,
		attributeId: 66,
		type: 'INT8U',
		writable: true,
		mandatory: true
	}, {

		label: 156,
		nameFun: 'PhysicalClosedLimit',
		nameObj: 'physicalClosedLimit',
		clusterId: 256,
		name: 'physical closed limit',
		server: true,
		attributeId: 0,
		type: 'INT16U',
		writable: false,
		mandatory: false
	}, {

		label: 157,
		nameFun: 'MotorStepSize',
		nameObj: 'motorStepSize',
		clusterId: 256,
		name: 'motor step size',
		server: true,
		attributeId: 1,
		type: 'INT8U',
		writable: false,
		mandatory: false
	}, {

		label: 158,
		nameFun: 'Status',
		nameObj: 'status',
		clusterId: 256,
		name: 'status',
		server: true,
		attributeId: 2,
		type: 'BITMAP8',
		writable: true,
		mandatory: true
	}, {

		label: 159,
		nameFun: 'ClosedLimit',
		nameObj: 'closedLimit',
		clusterId: 256,
		name: 'closed limit',
		server: true,
		attributeId: 16,
		type: 'INT16U',
		writable: true,
		mandatory: true
	}, {

		label: 160,
		nameFun: 'Mode',
		nameObj: 'mode',
		clusterId: 256,
		name: 'mode',
		server: true,
		attributeId: 17,
		type: 'ENUM8',
		writable: true,
		mandatory: true
	}, {

		label: 161,
		nameFun: 'MaxPressure',
		nameObj: 'maxPressure',
		clusterId: 512,
		name: 'max pressure',
		server: true,
		attributeId: 0,
		type: 'INT16S',
		writable: false,
		mandatory: true
	}, {

		label: 162,
		nameFun: 'MaxSpeed',
		nameObj: 'maxSpeed',
		clusterId: 512,
		name: 'max speed',
		server: true,
		attributeId: 1,
		type: 'INT16U',
		writable: false,
		mandatory: true
	}, {

		label: 163,
		nameFun: 'MaxFlow',
		nameObj: 'maxFlow',
		clusterId: 512,
		name: 'max flow',
		server: true,
		attributeId: 2,
		type: 'INT16U',
		writable: false,
		mandatory: true
	}, {

		label: 164,
		nameFun: 'MinConstPressure',
		nameObj: 'minConstPressure',
		clusterId: 512,
		name: 'min const pressure',
		server: true,
		attributeId: 3,
		type: 'INT16S',
		writable: false,
		mandatory: false
	}, {

		label: 165,
		nameFun: 'MaxConstPressure',
		nameObj: 'maxConstPressure',
		clusterId: 512,
		name: 'max const pressure',
		server: true,
		attributeId: 4,
		type: 'INT16S',
		writable: false,
		mandatory: false
	}, {

		label: 166,
		nameFun: 'MinCompPressure',
		nameObj: 'minCompPressure',
		clusterId: 512,
		name: 'min comp pressure',
		server: true,
		attributeId: 5,
		type: 'INT16S',
		writable: false,
		mandatory: false
	}, {

		label: 167,
		nameFun: 'MaxCompPressure',
		nameObj: 'maxCompPressure',
		clusterId: 512,
		name: 'max comp pressure',
		server: true,
		attributeId: 6,
		type: 'INT16S',
		writable: false,
		mandatory: false
	}, {

		label: 168,
		nameFun: 'MinConstSpeed',
		nameObj: 'minConstSpeed',
		clusterId: 512,
		name: 'min const speed',
		server: true,
		attributeId: 7,
		type: 'INT16U',
		writable: false,
		mandatory: false
	}, {

		label: 169,
		nameFun: 'MaxConstSpeed',
		nameObj: 'maxConstSpeed',
		clusterId: 512,
		name: 'max const speed',
		server: true,
		attributeId: 8,
		type: 'INT16U',
		writable: false,
		mandatory: false
	}, {

		label: 170,
		nameFun: 'MinConstFlow',
		nameObj: 'minConstFlow',
		clusterId: 512,
		name: 'min const flow',
		server: true,
		attributeId: 9,
		type: 'INT16U',
		writable: false,
		mandatory: false
	}, {

		label: 171,
		nameFun: 'MaxConstFlow',
		nameObj: 'maxConstFlow',
		clusterId: 512,
		name: 'max const flow',
		server: true,
		attributeId: 10,
		type: 'INT16U',
		writable: false,
		mandatory: false
	}, {

		label: 172,
		nameFun: 'MinConstTemp',
		nameObj: 'minConstTemp',
		clusterId: 512,
		name: 'min const temp',
		server: true,
		attributeId: 11,
		type: 'INT16S',
		writable: false,
		mandatory: false
	}, {

		label: 173,
		nameFun: 'MaxConstTemp',
		nameObj: 'maxConstTemp',
		clusterId: 512,
		name: 'max const temp',
		server: true,
		attributeId: 12,
		type: 'INT16S',
		writable: false,
		mandatory: false
	}, {

		label: 174,
		nameFun: 'PumpStatus',
		nameObj: 'pumpStatus',
		clusterId: 512,
		name: 'pump status',
		server: true,
		attributeId: 16,
		type: 'BITMAP16',
		writable: false,
		mandatory: false
	}, {

		label: 175,
		nameFun: 'EffectiveOperationMode',
		nameObj: 'effectiveOperationMode',
		clusterId: 512,
		name: 'effective operation mode',
		server: true,
		attributeId: 17,
		type: 'ENUM8',
		writable: false,
		mandatory: true
	}, {

		label: 176,
		nameFun: 'EffectiveControlMode',
		nameObj: 'effectiveControlMode',
		clusterId: 512,
		name: 'effective control mode',
		server: true,
		attributeId: 18,
		type: 'ENUM8',
		writable: false,
		mandatory: true
	}, {

		label: 177,
		nameFun: 'Capacity',
		nameObj: 'capacity',
		clusterId: 512,
		name: 'capacity',
		server: true,
		attributeId: 19,
		type: 'INT16S',
		writable: false,
		mandatory: true
	}, {

		label: 178,
		nameFun: 'Speed',
		nameObj: 'speed',
		clusterId: 512,
		name: 'speed',
		server: true,
		attributeId: 20,
		type: 'INT16U',
		writable: false,
		mandatory: false
	}, {

		label: 179,
		nameFun: 'LifetimeRunningHours',
		nameObj: 'lifetimeRunningHours',
		clusterId: 512,
		name: 'lifetime running hours',
		server: true,
		attributeId: 21,
		type: 'INT24U',
		writable: true,
		mandatory: false
	}, {

		label: 180,
		nameFun: 'Power',
		nameObj: 'power',
		clusterId: 512,
		name: 'power',
		server: true,
		attributeId: 22,
		type: 'INT24U',
		writable: true,
		mandatory: false
	}, {

		label: 181,
		nameFun: 'LifetimeEnergyConsumed',
		nameObj: 'lifetimeEnergyConsumed',
		clusterId: 512,
		name: 'lifetime energy consumed',
		server: true,
		attributeId: 23,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 182,
		nameFun: 'OperationMode',
		nameObj: 'operationMode',
		clusterId: 512,
		name: 'operation mode',
		server: true,
		attributeId: 32,
		type: 'ENUM8',
		writable: true,
		mandatory: true
	}, {

		label: 183,
		nameFun: 'ControlMode',
		nameObj: 'controlMode',
		clusterId: 512,
		name: 'control mode',
		server: true,
		attributeId: 33,
		type: 'ENUM8',
		writable: true,
		mandatory: false
	}, {

		label: 184,
		nameFun: 'AlarmMask',
		nameObj: 'alarmMask',
		clusterId: 512,
		name: 'alarm mask',
		server: true,
		attributeId: 34,
		type: 'BITMAP16',
		writable: false,
		mandatory: false
	}, {

		label: 185,
		nameFun: 'LocalTemperature',
		nameObj: 'localTemperature',
		clusterId: 513,
		name: 'local temperature',
		server: true,
		attributeId: 0,
		type: 'INT16S',
		writable: false,
		mandatory: true
	}, {

		label: 186,
		nameFun: 'OutdoorTemperature',
		nameObj: 'outdoorTemperature',
		clusterId: 513,
		name: 'outdoor temperature',
		server: true,
		attributeId: 1,
		type: 'INT16S',
		writable: false,
		mandatory: false
	}, {

		label: 187,
		nameFun: 'Occupancy',
		nameObj: 'occupancy',
		clusterId: 513,
		name: 'occupancy',
		server: true,
		attributeId: 2,
		type: 'BITMAP8',
		writable: false,
		mandatory: false
	}, {

		label: 188,
		nameFun: 'AbsMinHeatSetpointLimit',
		nameObj: 'absMinHeatSetpointLimit',
		clusterId: 513,
		name: 'abs min heat setpoint limit',
		server: true,
		attributeId: 3,
		type: 'INT16S',
		writable: false,
		mandatory: false
	}, {

		label: 189,
		nameFun: 'AbsMaxHeatSetpointLimit',
		nameObj: 'absMaxHeatSetpointLimit',
		clusterId: 513,
		name: 'abs max heat setpoint limit',
		server: true,
		attributeId: 4,
		type: 'INT16S',
		writable: false,
		mandatory: false
	}, {

		label: 190,
		nameFun: 'AbsMinCoolSetpointLimit',
		nameObj: 'absMinCoolSetpointLimit',
		clusterId: 513,
		name: 'abs min cool setpoint limit',
		server: true,
		attributeId: 5,
		type: 'INT16S',
		writable: false,
		mandatory: false
	}, {

		label: 191,
		nameFun: 'AbsMaxCoolSetpointLimit',
		nameObj: 'absMaxCoolSetpointLimit',
		clusterId: 513,
		name: 'abs max cool setpoint limit',
		server: true,
		attributeId: 6,
		type: 'INT16S',
		writable: false,
		mandatory: false
	}, {

		label: 192,
		nameFun: 'PiCoolingDemand',
		nameObj: 'piCoolingDemand',
		clusterId: 513,
		name: 'pi cooling demand',
		server: true,
		attributeId: 7,
		type: 'INT8U',
		writable: false,
		mandatory: false
	}, {

		label: 193,
		nameFun: 'PiHeatingDemand',
		nameObj: 'piHeatingDemand',
		clusterId: 513,
		name: 'pi heating demand',
		server: true,
		attributeId: 8,
		type: 'INT8U',
		writable: false,
		mandatory: false
	}, {

		label: 194,
		nameFun: 'HvacSystemTypeConfiguration',
		nameObj: 'hvacSystemTypeConfiguration',
		clusterId: 513,
		name: 'HVAC system type configuration',
		server: true,
		attributeId: 9,
		type: 'BITMAP8',
		writable: true,
		mandatory: false
	}, {

		label: 195,
		nameFun: 'LocalTemperatureCalibration',
		nameObj: 'localTemperatureCalibration',
		clusterId: 513,
		name: 'local temperature calibration',
		server: true,
		attributeId: 16,
		type: 'INT8S',
		writable: true,
		mandatory: false
	}, {

		label: 196,
		nameFun: 'OccupiedCoolingSetpoint',
		nameObj: 'occupiedCoolingSetpoint',
		clusterId: 513,
		name: 'occupied cooling setpoint',
		server: true,
		attributeId: 17,
		type: 'INT16S',
		writable: true,
		mandatory: true
	}, {

		label: 197,
		nameFun: 'OccupiedHeatingSetpoint',
		nameObj: 'occupiedHeatingSetpoint',
		clusterId: 513,
		name: 'occupied heating setpoint',
		server: true,
		attributeId: 18,
		type: 'INT16S',
		writable: true,
		mandatory: true
	}, {

		label: 198,
		nameFun: 'UnoccupiedCoolingSetpoint',
		nameObj: 'unoccupiedCoolingSetpoint',
		clusterId: 513,
		name: 'unoccupied cooling setpoint',
		server: true,
		attributeId: 19,
		type: 'INT16S',
		writable: true,
		mandatory: false
	}, {

		label: 199,
		nameFun: 'UnoccupiedHeatingSetpoint',
		nameObj: 'unoccupiedHeatingSetpoint',
		clusterId: 513,
		name: 'unoccupied heating setpoint',
		server: true,
		attributeId: 20,
		type: 'INT16S',
		writable: true,
		mandatory: false
	}, {

		label: 200,
		nameFun: 'MinHeatSetpointLimit',
		nameObj: 'minHeatSetpointLimit',
		clusterId: 513,
		name: 'min heat setpoint limit',
		server: true,
		attributeId: 21,
		type: 'INT16S',
		writable: true,
		mandatory: false
	}, {

		label: 201,
		nameFun: 'MaxHeatSetpointLimit',
		nameObj: 'maxHeatSetpointLimit',
		clusterId: 513,
		name: 'max heat setpoint limit',
		server: true,
		attributeId: 22,
		type: 'INT16S',
		writable: true,
		mandatory: false
	}, {

		label: 202,
		nameFun: 'MinCoolSetpointLimit',
		nameObj: 'minCoolSetpointLimit',
		clusterId: 513,
		name: 'min cool setpoint limit',
		server: true,
		attributeId: 23,
		type: 'INT16S',
		writable: true,
		mandatory: false
	}, {

		label: 203,
		nameFun: 'MaxCoolSetpointLimit',
		nameObj: 'maxCoolSetpointLimit',
		clusterId: 513,
		name: 'max cool setpoint limit',
		server: true,
		attributeId: 24,
		type: 'INT16S',
		writable: true,
		mandatory: false
	}, {

		label: 204,
		nameFun: 'MinSetpointDeadBand',
		nameObj: 'minSetpointDeadBand',
		clusterId: 513,
		name: 'min setpoint dead band',
		server: true,
		attributeId: 25,
		type: 'INT8S',
		writable: true,
		mandatory: false
	}, {

		label: 205,
		nameFun: 'RemoteSensing',
		nameObj: 'remoteSensing',
		clusterId: 513,
		name: 'remote sensing',
		server: true,
		attributeId: 26,
		type: 'BITMAP8',
		writable: true,
		mandatory: false
	}, {

		label: 206,
		nameFun: 'ControlSequenceOfOperation',
		nameObj: 'controlSequenceOfOperation',
		clusterId: 513,
		name: 'control sequence of operation',
		server: true,
		attributeId: 27,
		type: 'ENUM8',
		writable: true,
		mandatory: true
	}, {

		label: 207,
		nameFun: 'SystemMode',
		nameObj: 'systemMode',
		clusterId: 513,
		name: 'system mode',
		server: true,
		attributeId: 28,
		type: 'ENUM8',
		writable: true,
		mandatory: true
	}, {

		label: 208,
		nameFun: 'AlarmMask',
		nameObj: 'alarmMask',
		clusterId: 513,
		name: 'alarm mask',
		server: true,
		attributeId: 29,
		type: 'BITMAP8',
		writable: false,
		mandatory: false
	}, {

		label: 209,
		nameFun: 'ThermostatRunningMode',
		nameObj: 'thermostatRunningMode',
		clusterId: 513,
		name: 'thermostat running mode',
		server: true,
		attributeId: 30,
		type: 'ENUM8',
		writable: false,
		mandatory: false
	}, {

		label: 210,
		nameFun: 'StartOfWeek',
		nameObj: 'startOfWeek',
		clusterId: 513,
		name: 'start of week',
		server: true,
		attributeId: 32,
		type: 'ENUM8',
		writable: false,
		mandatory: false
	}, {

		label: 211,
		nameFun: 'NumberOfWeeklyTransitions',
		nameObj: 'numberOfWeeklyTransitions',
		clusterId: 513,
		name: 'number of weekly transitions',
		server: true,
		attributeId: 33,
		type: 'INT8U',
		writable: false,
		mandatory: false
	}, {

		label: 212,
		nameFun: 'NumberOfDailyTransitions',
		nameObj: 'numberOfDailyTransitions',
		clusterId: 513,
		name: 'number of daily transitions',
		server: true,
		attributeId: 34,
		type: 'INT8U',
		writable: false,
		mandatory: false
	}, {

		label: 213,
		nameFun: 'TemperatureSetpointHold',
		nameObj: 'temperatureSetpointHold',
		clusterId: 513,
		name: 'temperature setpoint hold',
		server: true,
		attributeId: 35,
		type: 'ENUM8',
		writable: true,
		mandatory: false
	}, {

		label: 214,
		nameFun: 'TemperatureSetpointHoldDuration',
		nameObj: 'temperatureSetpointHoldDuration',
		clusterId: 513,
		name: 'temperature setpoint hold duration',
		server: true,
		attributeId: 36,
		type: 'INT16U',
		writable: true,
		mandatory: false
	}, {

		label: 215,
		nameFun: 'ThermostatProgrammingOperationMode',
		nameObj: 'thermostatProgrammingOperationMode',
		clusterId: 513,
		name: 'thermostat programming operation mode',
		server: true,
		attributeId: 37,
		type: 'BITMAP8',
		writable: true,
		mandatory: false
	}, {

		label: 216,
		nameFun: 'HvacRelayState',
		nameObj: 'hvacRelayState',
		clusterId: 513,
		name: 'hvac relay state',
		server: true,
		attributeId: 41,
		type: 'BITMAP16',
		writable: false,
		mandatory: false
	}, {

		label: 217,
		nameFun: 'SetpointChangeSource',
		nameObj: 'setpointChangeSource',
		clusterId: 513,
		name: 'setpoint change source',
		server: true,
		attributeId: 48,
		type: 'ENUM8',
		writable: false,
		mandatory: false
	}, {

		label: 218,
		nameFun: 'SetpointChangeAmount',
		nameObj: 'setpointChangeAmount',
		clusterId: 513,
		name: 'setpoint change amount',
		server: true,
		attributeId: 49,
		type: 'INT16U',
		writable: false,
		mandatory: false
	}, {

		label: 219,
		nameFun: 'SetpointChangeSourceTimestamp',
		nameObj: 'setpointChangeSourceTimestamp',
		clusterId: 513,
		name: 'setpoint change source timestamp',
		server: true,
		attributeId: 50,
		type: 'TIME_OF_DAY',
		writable: false,
		mandatory: false
	}, {

		label: 220,
		nameFun: 'AcType',
		nameObj: 'acType',
		clusterId: 513,
		name: 'ac type',
		server: true,
		attributeId: 64,
		type: 'ENUM8',
		writable: true,
		mandatory: false
	}, {

		label: 221,
		nameFun: 'AcCapacity',
		nameObj: 'acCapacity',
		clusterId: 513,
		name: 'ac capacity',
		server: true,
		attributeId: 65,
		type: 'INT16U',
		writable: true,
		mandatory: false
	}, {

		label: 222,
		nameFun: 'AcRefrigerantType',
		nameObj: 'acRefrigerantType',
		clusterId: 513,
		name: 'ac refrigerant type',
		server: true,
		attributeId: 66,
		type: 'ENUM8',
		writable: true,
		mandatory: false
	}, {

		label: 223,
		nameFun: 'AcCompressor',
		nameObj: 'acCompressor',
		clusterId: 513,
		name: 'ac compressor',
		server: true,
		attributeId: 67,
		type: 'ENUM8',
		writable: true,
		mandatory: false
	}, {

		label: 224,
		nameFun: 'AcErrorCode',
		nameObj: 'acErrorCode',
		clusterId: 513,
		name: 'ac error code',
		server: true,
		attributeId: 68,
		type: 'BITMAP32',
		writable: true,
		mandatory: false
	}, {

		label: 225,
		nameFun: 'AcLouverPosition',
		nameObj: 'acLouverPosition',
		clusterId: 513,
		name: 'ac louver position',
		server: true,
		attributeId: 69,
		type: 'ENUM8',
		writable: true,
		mandatory: false
	}, {

		label: 226,
		nameFun: 'AcCoilTemperature',
		nameObj: 'acCoilTemperature',
		clusterId: 513,
		name: 'ac coil temperature',
		server: true,
		attributeId: 70,
		type: 'INT16S',
		writable: false,
		mandatory: false
	}, {

		label: 227,
		nameFun: 'AcCapacityFormat',
		nameObj: 'acCapacityFormat',
		clusterId: 513,
		name: 'ac capacity format',
		server: true,
		attributeId: 71,
		type: 'ENUM8',
		writable: true,
		mandatory: false
	}, {

		label: 228,
		nameFun: 'FanMode',
		nameObj: 'fanMode',
		clusterId: 514,
		name: 'fan mode',
		server: true,
		attributeId: 0,
		type: 'ENUM8',
		writable: true,
		mandatory: true
	}, {

		label: 229,
		nameFun: 'FanModeSequence',
		nameObj: 'fanModeSequence',
		clusterId: 514,
		name: 'fan mode sequence',
		server: true,
		attributeId: 1,
		type: 'ENUM8',
		writable: true,
		mandatory: true
	}, {

		label: 230,
		nameFun: 'RelativeHumidity',
		nameObj: 'relativeHumidity',
		clusterId: 515,
		name: 'relative humidity',
		server: true,
		attributeId: 0,
		type: 'INT8U',
		writable: false,
		mandatory: false
	}, {

		label: 231,
		nameFun: 'DehumidificationCooling',
		nameObj: 'dehumidificationCooling',
		clusterId: 515,
		name: 'dehumidification cooling',
		server: true,
		attributeId: 1,
		type: 'INT8U',
		writable: false,
		mandatory: true
	}, {

		label: 232,
		nameFun: 'RhDehumidificationSetpoint',
		nameObj: 'rhDehumidificationSetpoint',
		clusterId: 515,
		name: 'RH dehumidification setpoint',
		server: true,
		attributeId: 16,
		type: 'INT8U',
		writable: true,
		mandatory: true
	}, {

		label: 233,
		nameFun: 'RelativeHumidityMode',
		nameObj: 'relativeHumidityMode',
		clusterId: 515,
		name: 'relative humidity mode',
		server: true,
		attributeId: 17,
		type: 'ENUM8',
		writable: true,
		mandatory: false
	}, {

		label: 234,
		nameFun: 'DehumidificationLockout',
		nameObj: 'dehumidificationLockout',
		clusterId: 515,
		name: 'dehumidification lockout',
		server: true,
		attributeId: 18,
		type: 'ENUM8',
		writable: true,
		mandatory: false
	}, {

		label: 235,
		nameFun: 'DehumidificationHysteresis',
		nameObj: 'dehumidificationHysteresis',
		clusterId: 515,
		name: 'dehumidification hysteresis',
		server: true,
		attributeId: 19,
		type: 'INT8U',
		writable: true,
		mandatory: true
	}, {

		label: 236,
		nameFun: 'DehumidificationMaxCool',
		nameObj: 'dehumidificationMaxCool',
		clusterId: 515,
		name: 'dehumidification max cool',
		server: true,
		attributeId: 20,
		type: 'INT8U',
		writable: true,
		mandatory: true
	}, {

		label: 237,
		nameFun: 'RelativeHumidityDisplay',
		nameObj: 'relativeHumidityDisplay',
		clusterId: 515,
		name: 'relative humidity display',
		server: true,
		attributeId: 21,
		type: 'ENUM8',
		writable: true,
		mandatory: false
	}, {

		label: 238,
		nameFun: 'TemperatureDisplayMode',
		nameObj: 'temperatureDisplayMode',
		clusterId: 516,
		name: 'temperature display mode',
		server: true,
		attributeId: 0,
		type: 'ENUM8',
		writable: true,
		mandatory: true
	}, {

		label: 239,
		nameFun: 'KeypadLockout',
		nameObj: 'keypadLockout',
		clusterId: 516,
		name: 'keypad lockout',
		server: true,
		attributeId: 1,
		type: 'ENUM8',
		writable: true,
		mandatory: true
	}, {

		label: 240,
		nameFun: 'ScheduleProgrammingVisibility',
		nameObj: 'scheduleProgrammingVisibility',
		clusterId: 516,
		name: 'schedule programming visibility',
		server: true,
		attributeId: 2,
		type: 'ENUM8',
		writable: true,
		mandatory: false
	}, {

		label: 241,
		nameFun: 'CurrentHue',
		nameObj: 'currentHue',
		clusterId: 768,
		name: 'current hue',
		server: true,
		attributeId: 0,
		type: 'INT8U',
		writable: false,
		mandatory: false
	}, {

		label: 242,
		nameFun: 'CurrentSaturation',
		nameObj: 'currentSaturation',
		clusterId: 768,
		name: 'current saturation',
		server: true,
		attributeId: 1,
		type: 'INT8U',
		writable: false,
		mandatory: false
	}, {

		label: 243,
		nameFun: 'RemainingTime',
		nameObj: 'remainingTime',
		clusterId: 768,
		name: 'remaining time',
		server: true,
		attributeId: 2,
		type: 'INT16U',
		writable: false,
		mandatory: false
	}, {

		label: 244,
		nameFun: 'CurrentX',
		nameObj: 'currentX',
		clusterId: 768,
		name: 'current x',
		server: true,
		attributeId: 3,
		type: 'INT16U',
		writable: false,
		mandatory: true
	}, {

		label: 245,
		nameFun: 'CurrentY',
		nameObj: 'currentY',
		clusterId: 768,
		name: 'current y',
		server: true,
		attributeId: 4,
		type: 'INT16U',
		writable: false,
		mandatory: true
	}, {

		label: 246,
		nameFun: 'DriftCompensation',
		nameObj: 'driftCompensation',
		clusterId: 768,
		name: 'drift compensation',
		server: true,
		attributeId: 5,
		type: 'ENUM8',
		writable: false,
		mandatory: false
	}, {

		label: 247,
		nameFun: 'CompensationText',
		nameObj: 'compensationText',
		clusterId: 768,
		name: 'compensation text',
		server: true,
		attributeId: 6,
		type: 'CHAR_STRING',
		writable: false,
		mandatory: false
	}, {

		label: 248,
		nameFun: 'ColorTemperature',
		nameObj: 'colorTemperature',
		clusterId: 768,
		name: 'color temperature',
		server: true,
		attributeId: 7,
		type: 'INT16U',
		writable: false,
		mandatory: false
	}, {

		label: 249,
		nameFun: 'ColorMode',
		nameObj: 'colorMode',
		clusterId: 768,
		name: 'color mode',
		server: true,
		attributeId: 8,
		type: 'ENUM8',
		writable: false,
		mandatory: false
	}, {

		label: 250,
		nameFun: 'NumberOfPrimaries',
		nameObj: 'numberOfPrimaries',
		clusterId: 768,
		name: 'number of primaries',
		server: true,
		attributeId: 16,
		type: 'INT8U',
		writable: false,
		mandatory: false
	}, {

		label: 251,
		nameFun: 'Primary1X',
		nameObj: 'primary1X',
		clusterId: 768,
		name: 'primary 1 x',
		server: true,
		attributeId: 17,
		type: 'INT16U',
		writable: false,
		mandatory: false
	}, {

		label: 252,
		nameFun: 'Primary1Y',
		nameObj: 'primary1Y',
		clusterId: 768,
		name: 'primary 1 y',
		server: true,
		attributeId: 18,
		type: 'INT16U',
		writable: false,
		mandatory: false
	}, {

		label: 253,
		nameFun: 'Primary1Intensity',
		nameObj: 'primary1Intensity',
		clusterId: 768,
		name: 'primary 1 intensity',
		server: true,
		attributeId: 19,
		type: 'INT8U',
		writable: false,
		mandatory: false
	}, {

		label: 254,
		nameFun: 'Primary2X',
		nameObj: 'primary2X',
		clusterId: 768,
		name: 'primary 2 x',
		server: true,
		attributeId: 21,
		type: 'INT16U',
		writable: false,
		mandatory: false
	}, {

		label: 255,
		nameFun: 'Primary2Y',
		nameObj: 'primary2Y',
		clusterId: 768,
		name: 'primary 2 y',
		server: true,
		attributeId: 22,
		type: 'INT16U',
		writable: false,
		mandatory: false
	}, {

		label: 256,
		nameFun: 'Primary2Intensity',
		nameObj: 'primary2Intensity',
		clusterId: 768,
		name: 'primary 2 intensity',
		server: true,
		attributeId: 23,
		type: 'INT8U',
		writable: false,
		mandatory: false
	}, {

		label: 257,
		nameFun: 'Primary3X',
		nameObj: 'primary3X',
		clusterId: 768,
		name: 'primary 3 x',
		server: true,
		attributeId: 25,
		type: 'INT16U',
		writable: false,
		mandatory: false
	}, {

		label: 258,
		nameFun: 'Primary3Y',
		nameObj: 'primary3Y',
		clusterId: 768,
		name: 'primary 3 y',
		server: true,
		attributeId: 26,
		type: 'INT16U',
		writable: false,
		mandatory: false
	}, {

		label: 259,
		nameFun: 'Primary3Intensity',
		nameObj: 'primary3Intensity',
		clusterId: 768,
		name: 'primary 3 intensity',
		server: true,
		attributeId: 27,
		type: 'INT8U',
		writable: false,
		mandatory: false
	}, {

		label: 260,
		nameFun: 'Primary4X',
		nameObj: 'primary4X',
		clusterId: 768,
		name: 'primary 4 x',
		server: true,
		attributeId: 32,
		type: 'INT16U',
		writable: false,
		mandatory: false
	}, {

		label: 261,
		nameFun: 'Primary4Y',
		nameObj: 'primary4Y',
		clusterId: 768,
		name: 'primary 4 y',
		server: true,
		attributeId: 33,
		type: 'INT16U',
		writable: false,
		mandatory: false
	}, {

		label: 262,
		nameFun: 'Primary4Intensity',
		nameObj: 'primary4Intensity',
		clusterId: 768,
		name: 'primary 4 intensity',
		server: true,
		attributeId: 34,
		type: 'INT8U',
		writable: false,
		mandatory: false
	}, {

		label: 263,
		nameFun: 'Primary5X',
		nameObj: 'primary5X',
		clusterId: 768,
		name: 'primary 5 x',
		server: true,
		attributeId: 36,
		type: 'INT16U',
		writable: false,
		mandatory: false
	}, {

		label: 264,
		nameFun: 'Primary5Y',
		nameObj: 'primary5Y',
		clusterId: 768,
		name: 'primary 5 y',
		server: true,
		attributeId: 37,
		type: 'INT16U',
		writable: false,
		mandatory: false
	}, {

		label: 265,
		nameFun: 'Primary5Intensity',
		nameObj: 'primary5Intensity',
		clusterId: 768,
		name: 'primary 5 intensity',
		server: true,
		attributeId: 38,
		type: 'INT8U',
		writable: false,
		mandatory: false
	}, {

		label: 266,
		nameFun: 'Primary6X',
		nameObj: 'primary6X',
		clusterId: 768,
		name: 'primary 6 x',
		server: true,
		attributeId: 40,
		type: 'INT16U',
		writable: false,
		mandatory: false
	}, {

		label: 267,
		nameFun: 'Primary6Y',
		nameObj: 'primary6Y',
		clusterId: 768,
		name: 'primary 6 y',
		server: true,
		attributeId: 41,
		type: 'INT16U',
		writable: false,
		mandatory: false
	}, {

		label: 268,
		nameFun: 'Primary6Intensity',
		nameObj: 'primary6Intensity',
		clusterId: 768,
		name: 'primary 6 intensity',
		server: true,
		attributeId: 42,
		type: 'INT8U',
		writable: false,
		mandatory: false
	}, {

		label: 269,
		nameFun: 'WhitePointX',
		nameObj: 'whitePointX',
		clusterId: 768,
		name: 'white point x',
		server: true,
		attributeId: 48,
		type: 'INT16U',
		writable: true,
		mandatory: false
	}, {

		label: 270,
		nameFun: 'WhitePointY',
		nameObj: 'whitePointY',
		clusterId: 768,
		name: 'white point y',
		server: true,
		attributeId: 49,
		type: 'INT16U',
		writable: true,
		mandatory: false
	}, {

		label: 271,
		nameFun: 'ColorPointRX',
		nameObj: 'colorPointRX',
		clusterId: 768,
		name: 'color point r x',
		server: true,
		attributeId: 50,
		type: 'INT16U',
		writable: true,
		mandatory: false
	}, {

		label: 272,
		nameFun: 'ColorPointRY',
		nameObj: 'colorPointRY',
		clusterId: 768,
		name: 'color point r y',
		server: true,
		attributeId: 51,
		type: 'INT16U',
		writable: true,
		mandatory: false
	}, {

		label: 273,
		nameFun: 'ColorPointRIntensity',
		nameObj: 'colorPointRIntensity',
		clusterId: 768,
		name: 'color point r intensity',
		server: true,
		attributeId: 52,
		type: 'INT8U',
		writable: true,
		mandatory: false
	}, {

		label: 274,
		nameFun: 'ColorPointGX',
		nameObj: 'colorPointGX',
		clusterId: 768,
		name: 'color point g x',
		server: true,
		attributeId: 54,
		type: 'INT16U',
		writable: true,
		mandatory: false
	}, {

		label: 275,
		nameFun: 'ColorPointGY',
		nameObj: 'colorPointGY',
		clusterId: 768,
		name: 'color point g y',
		server: true,
		attributeId: 55,
		type: 'INT16U',
		writable: true,
		mandatory: false
	}, {

		label: 276,
		nameFun: 'ColorPointGIntensity',
		nameObj: 'colorPointGIntensity',
		clusterId: 768,
		name: 'color point g intensity',
		server: true,
		attributeId: 56,
		type: 'INT8U',
		writable: true,
		mandatory: false
	}, {

		label: 277,
		nameFun: 'ColorPointBX',
		nameObj: 'colorPointBX',
		clusterId: 768,
		name: 'color point b x',
		server: true,
		attributeId: 58,
		type: 'INT16U',
		writable: true,
		mandatory: false
	}, {

		label: 278,
		nameFun: 'ColorPointBY',
		nameObj: 'colorPointBY',
		clusterId: 768,
		name: 'color point b y',
		server: true,
		attributeId: 59,
		type: 'INT16U',
		writable: true,
		mandatory: false
	}, {

		label: 279,
		nameFun: 'ColorPointBIntensity',
		nameObj: 'colorPointBIntensity',
		clusterId: 768,
		name: 'color point b intensity',
		server: true,
		attributeId: 60,
		type: 'INT8U',
		writable: true,
		mandatory: false
	}, {

		label: 280,
		nameFun: 'PhysicalMinLevel',
		nameObj: 'physicalMinLevel',
		clusterId: 769,
		name: 'physical min level',
		server: true,
		attributeId: 0,
		type: 'INT8U',
		writable: false,
		mandatory: false
	}, {

		label: 281,
		nameFun: 'PhysicalMaxLevel',
		nameObj: 'physicalMaxLevel',
		clusterId: 769,
		name: 'physical max level',
		server: true,
		attributeId: 1,
		type: 'INT8U',
		writable: false,
		mandatory: false
	}, {

		label: 282,
		nameFun: 'BallastStatus',
		nameObj: 'ballastStatus',
		clusterId: 769,
		name: 'ballast status',
		server: true,
		attributeId: 2,
		type: 'BITMAP8',
		writable: false,
		mandatory: true
	}, {

		label: 283,
		nameFun: 'MinLevel',
		nameObj: 'minLevel',
		clusterId: 769,
		name: 'min level',
		server: true,
		attributeId: 16,
		type: 'INT8U',
		writable: true,
		mandatory: false
	}, {

		label: 284,
		nameFun: 'MaxLevel',
		nameObj: 'maxLevel',
		clusterId: 769,
		name: 'max level',
		server: true,
		attributeId: 17,
		type: 'INT8U',
		writable: true,
		mandatory: false
	}, {

		label: 285,
		nameFun: 'PowerOnLevel',
		nameObj: 'powerOnLevel',
		clusterId: 769,
		name: 'power on level',
		server: true,
		attributeId: 18,
		type: 'INT8U',
		writable: true,
		mandatory: false
	}, {

		label: 286,
		nameFun: 'PowerOnFadeTime',
		nameObj: 'powerOnFadeTime',
		clusterId: 769,
		name: 'power on fade time',
		server: true,
		attributeId: 19,
		type: 'INT16U',
		writable: true,
		mandatory: false
	}, {

		label: 287,
		nameFun: 'IntrinsicBallastFactor',
		nameObj: 'intrinsicBallastFactor',
		clusterId: 769,
		name: 'intrinsic ballast factor',
		server: true,
		attributeId: 20,
		type: 'INT8U',
		writable: true,
		mandatory: false
	}, {

		label: 288,
		nameFun: 'BallastFactorAdjustment',
		nameObj: 'ballastFactorAdjustment',
		clusterId: 769,
		name: 'ballast factor adjustment',
		server: true,
		attributeId: 21,
		type: 'INT8U',
		writable: true,
		mandatory: false
	}, {

		label: 289,
		nameFun: 'LampQuality',
		nameObj: 'lampQuality',
		clusterId: 769,
		name: 'lamp quality',
		server: true,
		attributeId: 32,
		type: 'INT8U',
		writable: true,
		mandatory: false
	}, {

		label: 290,
		nameFun: 'LampType',
		nameObj: 'lampType',
		clusterId: 769,
		name: 'lamp type',
		server: true,
		attributeId: 48,
		type: 'CHAR_STRING',
		writable: true,
		mandatory: false
	}, {

		label: 291,
		nameFun: 'LampManufacturer',
		nameObj: 'lampManufacturer',
		clusterId: 769,
		name: 'lamp manufacturer',
		server: true,
		attributeId: 49,
		type: 'CHAR_STRING',
		writable: true,
		mandatory: false
	}, {

		label: 292,
		nameFun: 'LampRatedHours',
		nameObj: 'lampRatedHours',
		clusterId: 769,
		name: 'lamp rated hours',
		server: true,
		attributeId: 50,
		type: 'INT24U',
		writable: true,
		mandatory: false
	}, {

		label: 293,
		nameFun: 'LampBurnHours',
		nameObj: 'lampBurnHours',
		clusterId: 769,
		name: 'lamp burn hours',
		server: true,
		attributeId: 51,
		type: 'INT24U',
		writable: true,
		mandatory: false
	}, {

		label: 294,
		nameFun: 'LampAlarmMode',
		nameObj: 'lampAlarmMode',
		clusterId: 769,
		name: 'lamp alarm mode',
		server: true,
		attributeId: 52,
		type: 'BITMAP8',
		writable: true,
		mandatory: false
	}, {

		label: 295,
		nameFun: 'LampBurnHoursTripPoint',
		nameObj: 'lampBurnHoursTripPoint',
		clusterId: 769,
		name: 'lamp burn hours trip point',
		server: true,
		attributeId: 53,
		type: 'INT24U',
		writable: true,
		mandatory: false
	}, {

		label: 296,
		nameFun: 'MeasuredValue',
		nameObj: 'measuredValue',
		clusterId: 1024,
		name: 'measured value',
		server: true,
		attributeId: 0,
		type: 'INT16U',
		writable: false,
		mandatory: true
	}, {

		label: 297,
		nameFun: 'MinMeasuredValue',
		nameObj: 'minMeasuredValue',
		clusterId: 1024,
		name: 'min measured value',
		server: true,
		attributeId: 1,
		type: 'INT16U',
		writable: false,
		mandatory: true
	}, {

		label: 298,
		nameFun: 'MaxMeasuredValue',
		nameObj: 'maxMeasuredValue',
		clusterId: 1024,
		name: 'max measured value',
		server: true,
		attributeId: 2,
		type: 'INT16U',
		writable: false,
		mandatory: true
	}, {

		label: 299,
		nameFun: 'Tolerance',
		nameObj: 'tolerance',
		clusterId: 1024,
		name: 'tolerance',
		server: true,
		attributeId: 3,
		type: 'INT16U',
		writable: false,
		mandatory: false
	}, {

		label: 300,
		nameFun: 'LightSensorType',
		nameObj: 'lightSensorType',
		clusterId: 1024,
		name: 'light sensor type',
		server: true,
		attributeId: 4,
		type: 'ENUM8',
		writable: false,
		mandatory: false
	}, {

		label: 301,
		nameFun: 'LevelStatus',
		nameObj: 'levelStatus',
		clusterId: 1025,
		name: 'level status',
		server: true,
		attributeId: 0,
		type: 'ENUM8',
		writable: false,
		mandatory: true
	}, {

		label: 302,
		nameFun: 'LightSensorType',
		nameObj: 'lightSensorType',
		clusterId: 1025,
		name: 'light sensor type',
		server: true,
		attributeId: 1,
		type: 'ENUM8',
		writable: false,
		mandatory: false
	}, {

		label: 303,
		nameFun: 'IlluminanceLevelTarget',
		nameObj: 'illuminanceLevelTarget',
		clusterId: 1025,
		name: 'illuminance level target',
		server: true,
		attributeId: 16,
		type: 'INT16U',
		writable: true,
		mandatory: true
	}, {

		label: 304,
		nameFun: 'MeasuredValue',
		nameObj: 'measuredValue',
		clusterId: 1026,
		name: 'measured value',
		server: true,
		attributeId: 0,
		type: 'INT16S',
		writable: false,
		mandatory: true
	}, {

		label: 305,
		nameFun: 'MinMeasuredValue',
		nameObj: 'minMeasuredValue',
		clusterId: 1026,
		name: 'min measured value',
		server: true,
		attributeId: 1,
		type: 'INT16S',
		writable: false,
		mandatory: true
	}, {

		label: 306,
		nameFun: 'MaxMeasuredValue',
		nameObj: 'maxMeasuredValue',
		clusterId: 1026,
		name: 'max measured value',
		server: true,
		attributeId: 2,
		type: 'INT16S',
		writable: false,
		mandatory: true
	}, {

		label: 307,
		nameFun: 'Tolerance',
		nameObj: 'tolerance',
		clusterId: 1026,
		name: 'tolerance',
		server: true,
		attributeId: 3,
		type: 'INT16U',
		writable: false,
		mandatory: false
	}, {

		label: 308,
		nameFun: 'MeasuredValue',
		nameObj: 'measuredValue',
		clusterId: 1027,
		name: 'measured value',
		server: true,
		attributeId: 0,
		type: 'INT16S',
		writable: false,
		mandatory: true
	}, {

		label: 309,
		nameFun: 'MinMeasuredValue',
		nameObj: 'minMeasuredValue',
		clusterId: 1027,
		name: 'min measured value',
		server: true,
		attributeId: 1,
		type: 'INT16S',
		writable: false,
		mandatory: true
	}, {

		label: 310,
		nameFun: 'MaxMeasuredValue',
		nameObj: 'maxMeasuredValue',
		clusterId: 1027,
		name: 'max measured value',
		server: true,
		attributeId: 2,
		type: 'INT16S',
		writable: false,
		mandatory: true
	}, {

		label: 311,
		nameFun: 'Tolerance',
		nameObj: 'tolerance',
		clusterId: 1027,
		name: 'tolerance',
		server: true,
		attributeId: 3,
		type: 'INT16U',
		writable: false,
		mandatory: false
	}, {

		label: 312,
		nameFun: 'ScaledValue',
		nameObj: 'scaledValue',
		clusterId: 1027,
		name: 'scaled value',
		server: true,
		attributeId: 16,
		type: 'INT16S',
		writable: false,
		mandatory: false
	}, {

		label: 313,
		nameFun: 'MinScaledValue',
		nameObj: 'minScaledValue',
		clusterId: 1027,
		name: 'min scaled value',
		server: true,
		attributeId: 17,
		type: 'INT16S',
		writable: false,
		mandatory: false
	}, {

		label: 314,
		nameFun: 'MaxScaledValue',
		nameObj: 'maxScaledValue',
		clusterId: 1027,
		name: 'max scaled value',
		server: true,
		attributeId: 18,
		type: 'INT16S',
		writable: false,
		mandatory: false
	}, {

		label: 315,
		nameFun: 'ScaledTolerance',
		nameObj: 'scaledTolerance',
		clusterId: 1027,
		name: 'scaled tolerance',
		server: true,
		attributeId: 19,
		type: 'INT16S',
		writable: false,
		mandatory: false
	}, {

		label: 316,
		nameFun: 'Scale',
		nameObj: 'scale',
		clusterId: 1027,
		name: 'scale',
		server: true,
		attributeId: 20,
		type: 'INT8S',
		writable: false,
		mandatory: false
	}, {

		label: 317,
		nameFun: 'MeasuredValue',
		nameObj: 'measuredValue',
		clusterId: 1028,
		name: 'measured value',
		server: true,
		attributeId: 0,
		type: 'INT16U',
		writable: false,
		mandatory: true
	}, {

		label: 318,
		nameFun: 'MinMeasuredValue',
		nameObj: 'minMeasuredValue',
		clusterId: 1028,
		name: 'min measured value',
		server: true,
		attributeId: 1,
		type: 'INT16U',
		writable: false,
		mandatory: true
	}, {

		label: 319,
		nameFun: 'MaxMeasuredValue',
		nameObj: 'maxMeasuredValue',
		clusterId: 1028,
		name: 'max measured value',
		server: true,
		attributeId: 2,
		type: 'INT16U',
		writable: false,
		mandatory: true
	}, {

		label: 320,
		nameFun: 'Tolerance',
		nameObj: 'tolerance',
		clusterId: 1028,
		name: 'tolerance',
		server: true,
		attributeId: 3,
		type: 'INT16U',
		writable: false,
		mandatory: false
	}, {

		label: 321,
		nameFun: 'MeasuredValue',
		nameObj: 'measuredValue',
		clusterId: 1029,
		name: 'measured value',
		server: true,
		attributeId: 0,
		type: 'INT16U',
		writable: false,
		mandatory: true
	}, {

		label: 322,
		nameFun: 'MinMeasuredValue',
		nameObj: 'minMeasuredValue',
		clusterId: 1029,
		name: 'min measured value',
		server: true,
		attributeId: 1,
		type: 'INT16U',
		writable: false,
		mandatory: true
	}, {

		label: 323,
		nameFun: 'MaxMeasuredValue',
		nameObj: 'maxMeasuredValue',
		clusterId: 1029,
		name: 'max measured value',
		server: true,
		attributeId: 2,
		type: 'INT16U',
		writable: false,
		mandatory: true
	}, {

		label: 324,
		nameFun: 'Tolerance',
		nameObj: 'tolerance',
		clusterId: 1029,
		name: 'tolerance',
		server: true,
		attributeId: 3,
		type: 'INT16U',
		writable: false,
		mandatory: false
	}, {

		label: 325,
		nameFun: 'Occupancy',
		nameObj: 'occupancy',
		clusterId: 1030,
		name: 'occupancy',
		server: true,
		attributeId: 0,
		type: 'BITMAP8',
		writable: false,
		mandatory: true
	}, {

		label: 326,
		nameFun: 'OccupancySensorType',
		nameObj: 'occupancySensorType',
		clusterId: 1030,
		name: 'occupancy sensor type',
		server: true,
		attributeId: 1,
		type: 'ENUM8',
		writable: false,
		mandatory: true
	}, {

		label: 327,
		nameFun: 'PirOccupiedToUnoccupiedDelay',
		nameObj: 'pirOccupiedToUnoccupiedDelay',
		clusterId: 1030,
		name: 'PIR occupied to unoccupied delay',
		server: true,
		attributeId: 16,
		type: 'INT16U',
		writable: true,
		mandatory: false
	}, {

		label: 328,
		nameFun: 'PirUnoccupiedToOccupiedDelay',
		nameObj: 'pirUnoccupiedToOccupiedDelay',
		clusterId: 1030,
		name: 'PIR unoccupied to occupied delay',
		server: true,
		attributeId: 17,
		type: 'INT16U',
		writable: true,
		mandatory: false
	}, {

		label: 329,
		nameFun: 'PirUnoccupiedToOccupiedThreshold',
		nameObj: 'pirUnoccupiedToOccupiedThreshold',
		clusterId: 1030,
		name: 'PIR unoccupied to occupied threshold',
		server: true,
		attributeId: 18,
		type: 'INT8U',
		writable: true,
		mandatory: false
	}, {

		label: 330,
		nameFun: 'UltrasonicOccupiedToUnoccupiedDelay',
		nameObj: 'ultrasonicOccupiedToUnoccupiedDelay',
		clusterId: 1030,
		name: 'ultrasonic occupied to unoccupied delay',
		server: true,
		attributeId: 32,
		type: 'INT16U',
		writable: true,
		mandatory: false
	}, {

		label: 331,
		nameFun: 'UltrasonicUnoccupiedToOccupiedDelay',
		nameObj: 'ultrasonicUnoccupiedToOccupiedDelay',
		clusterId: 1030,
		name: 'ultrasonic unoccupied to occupied delay',
		server: true,
		attributeId: 33,
		type: 'INT16U',
		writable: true,
		mandatory: false
	}, {

		label: 332,
		nameFun: 'UltrasonicUnoccupiedToOccupiedThreshold',
		nameObj: 'ultrasonicUnoccupiedToOccupiedThreshold',
		clusterId: 1030,
		name: 'ultrasonic unoccupied to occupied threshold',
		server: true,
		attributeId: 34,
		type: 'INT8U',
		writable: true,
		mandatory: false
	}, {

		label: 333,
		nameFun: 'ZoneState',
		nameObj: 'zoneState',
		clusterId: 1280,
		name: 'zone state',
		server: true,
		attributeId: 0,
		type: 'ENUM8',
		writable: false,
		mandatory: true
	}, {

		label: 334,
		nameFun: 'ZoneType',
		nameObj: 'zoneType',
		clusterId: 1280,
		name: 'zone type',
		server: true,
		attributeId: 1,
		type: 'ENUM16',
		writable: false,
		mandatory: true
	}, {

		label: 335,
		nameFun: 'ZoneStatus',
		nameObj: 'zoneStatus',
		clusterId: 1280,
		name: 'zone status',
		server: true,
		attributeId: 2,
		type: 'BITMAP16',
		writable: false,
		mandatory: true
	}, {

		label: 336,
		nameFun: 'IasCieAddress',
		nameObj: 'iasCieAddress',
		clusterId: 1280,
		name: 'IAS CIE address',
		server: true,
		attributeId: 16,
		type: 'IEEE_ADDRESS',
		writable: true,
		mandatory: true
	}, {

		label: 337,
		nameFun: 'ZoneId',
		nameObj: 'zoneId',
		clusterId: 1280,
		name: 'Zone ID',
		server: true,
		attributeId: 17,
		type: 'INT8U',
		writable: false,
		mandatory: true
	}, {

		label: 338,
		nameFun: 'NumberOfZoneSensitivityLevelsSupported',
		nameObj: 'numberOfZoneSensitivityLevelsSupported',
		clusterId: 1280,
		name: 'Number of Zone Sensitivity Levels Supported',
		server: true,
		attributeId: 18,
		type: 'INT8U',
		writable: false,
		mandatory: false
	}, {

		label: 339,
		nameFun: 'CurrentZoneSensitivityLevel',
		nameObj: 'currentZoneSensitivityLevel',
		clusterId: 1280,
		name: 'Current Zone Sensitivity Level',
		server: true,
		attributeId: 19,
		type: 'INT8U',
		writable: true,
		mandatory: false
	}, {

		label: 340,
		nameFun: 'MaxDuration',
		nameObj: 'maxDuration',
		clusterId: 1282,
		name: 'max duration',
		server: true,
		attributeId: 0,
		type: 'INT16U',
		writable: true,
		mandatory: true
	}, {

		label: 341,
		nameFun: 'LockState',
		nameObj: 'lockState',
		clusterId: 257,
		name: 'lock state',
		server: true,
		attributeId: 0,
		type: 'ENUM8',
		writable: false,
		mandatory: true
	}, {

		label: 342,
		nameFun: 'LockType',
		nameObj: 'lockType',
		clusterId: 257,
		name: 'lock type',
		server: true,
		attributeId: 1,
		type: 'ENUM8',
		writable: false,
		mandatory: true
	}, {

		label: 343,
		nameFun: 'ActuatorEnabled',
		nameObj: 'actuatorEnabled',
		clusterId: 257,
		name: 'actuator enabled',
		server: true,
		attributeId: 2,
		type: 'BOOLEAN',
		writable: false,
		mandatory: true
	}, {

		label: 344,
		nameFun: 'DoorState',
		nameObj: 'doorState',
		clusterId: 257,
		name: 'door state',
		server: true,
		attributeId: 3,
		type: 'ENUM8',
		writable: false,
		mandatory: false
	}, {

		label: 345,
		nameFun: 'DoorOpenEvents',
		nameObj: 'doorOpenEvents',
		clusterId: 257,
		name: 'door open events',
		server: true,
		attributeId: 4,
		type: 'INT32U',
		writable: true,
		mandatory: false
	}, {

		label: 346,
		nameFun: 'DoorClosedEvents',
		nameObj: 'doorClosedEvents',
		clusterId: 257,
		name: 'door closed events',
		server: true,
		attributeId: 5,
		type: 'INT32U',
		writable: true,
		mandatory: false
	}, {

		label: 347,
		nameFun: 'OpenPeriod',
		nameObj: 'openPeriod',
		clusterId: 257,
		name: 'open period',
		server: true,
		attributeId: 6,
		type: 'INT16U',
		writable: true,
		mandatory: false
	}, {

		label: 348,
		nameFun: 'NumLockRecordsSupported',
		nameObj: 'numLockRecordsSupported',
		clusterId: 257,
		name: 'num lock records supported',
		server: true,
		attributeId: 16,
		type: 'INT16U',
		writable: false,
		mandatory: false
	}, {

		label: 349,
		nameFun: 'NumTotalUsersSupported',
		nameObj: 'numTotalUsersSupported',
		clusterId: 257,
		name: 'num total users supported',
		server: true,
		attributeId: 17,
		type: 'INT16U',
		writable: false,
		mandatory: false
	}, {

		label: 350,
		nameFun: 'NumPinUsersSupported',
		nameObj: 'numPinUsersSupported',
		clusterId: 257,
		name: 'num PIN users supported',
		server: true,
		attributeId: 18,
		type: 'INT16U',
		writable: false,
		mandatory: false
	}, {

		label: 351,
		nameFun: 'NumRfidUsersSupported',
		nameObj: 'numRfidUsersSupported',
		clusterId: 257,
		name: 'num RFID users supported',
		server: true,
		attributeId: 19,
		type: 'INT16U',
		writable: false,
		mandatory: false
	}, {

		label: 352,
		nameFun: 'NumWeekdaySchedulesSupportedPerUser',
		nameObj: 'numWeekdaySchedulesSupportedPerUser',
		clusterId: 257,
		name: 'num weekday schedules supported per user',
		server: true,
		attributeId: 20,
		type: 'INT8U',
		writable: false,
		mandatory: false
	}, {

		label: 353,
		nameFun: 'NumYeardaySchedulesSupportedPerUser',
		nameObj: 'numYeardaySchedulesSupportedPerUser',
		clusterId: 257,
		name: 'num yearday schedules supported per user',
		server: true,
		attributeId: 21,
		type: 'INT8U',
		writable: false,
		mandatory: false
	}, {

		label: 354,
		nameFun: 'NumHolidaySchedulesSupportedPerUser',
		nameObj: 'numHolidaySchedulesSupportedPerUser',
		clusterId: 257,
		name: 'num holiday schedules supported per user',
		server: true,
		attributeId: 22,
		type: 'INT8U',
		writable: false,
		mandatory: false
	}, {

		label: 355,
		nameFun: 'MaxPinLength',
		nameObj: 'maxPinLength',
		clusterId: 257,
		name: 'max pin length',
		server: true,
		attributeId: 23,
		type: 'INT8U',
		writable: false,
		mandatory: false
	}, {

		label: 356,
		nameFun: 'MinPinLength',
		nameObj: 'minPinLength',
		clusterId: 257,
		name: 'min pin length',
		server: true,
		attributeId: 24,
		type: 'INT8U',
		writable: false,
		mandatory: false
	}, {

		label: 357,
		nameFun: 'MaxRfidCodeLength',
		nameObj: 'maxRfidCodeLength',
		clusterId: 257,
		name: 'max rfid code length',
		server: true,
		attributeId: 25,
		type: 'INT8U',
		writable: false,
		mandatory: false
	}, {

		label: 358,
		nameFun: 'MinRfidCodeLength',
		nameObj: 'minRfidCodeLength',
		clusterId: 257,
		name: 'min rfid code length',
		server: true,
		attributeId: 26,
		type: 'INT8U',
		writable: false,
		mandatory: false
	}, {

		label: 359,
		nameFun: 'EnableLogging',
		nameObj: 'enableLogging',
		clusterId: 257,
		name: 'enable logging',
		server: true,
		attributeId: 32,
		type: 'BOOLEAN',
		writable: true,
		mandatory: false
	}, {

		label: 360,
		nameFun: 'Language',
		nameObj: 'language',
		clusterId: 257,
		name: 'language',
		server: true,
		attributeId: 33,
		type: 'CHAR_STRING',
		writable: true,
		mandatory: false
	}, {

		label: 361,
		nameFun: 'LedSettings',
		nameObj: 'ledSettings',
		clusterId: 257,
		name: 'led settings',
		server: true,
		attributeId: 34,
		type: 'INT8U',
		writable: true,
		mandatory: false
	}, {

		label: 362,
		nameFun: 'AutoRelockTime',
		nameObj: 'autoRelockTime',
		clusterId: 257,
		name: 'auto relock time',
		server: true,
		attributeId: 35,
		type: 'INT32U',
		writable: true,
		mandatory: false
	}, {

		label: 363,
		nameFun: 'SoundVolume',
		nameObj: 'soundVolume',
		clusterId: 257,
		name: 'sound volume',
		server: true,
		attributeId: 36,
		type: 'INT8U',
		writable: true,
		mandatory: false
	}, {

		label: 364,
		nameFun: 'OperatingMode',
		nameObj: 'operatingMode',
		clusterId: 257,
		name: 'operating mode',
		server: true,
		attributeId: 37,
		type: 'ENUM8',
		writable: true,
		mandatory: false
	}, {

		label: 365,
		nameFun: 'SupportedOperatingModes',
		nameObj: 'supportedOperatingModes',
		clusterId: 257,
		name: 'supported operating modes',
		server: true,
		attributeId: 38,
		type: 'BITMAP16',
		writable: false,
		mandatory: false
	}, {

		label: 366,
		nameFun: 'DefaultconfigurationRegister',
		nameObj: 'defaultconfigurationRegister',
		clusterId: 257,
		name: 'defaultconfiguration register',
		server: true,
		attributeId: 39,
		type: 'BITMAP16',
		writable: false,
		mandatory: false
	}, {

		label: 367,
		nameFun: 'EnableLocalProgramming',
		nameObj: 'enableLocalProgramming',
		clusterId: 257,
		name: 'enable local programming',
		server: true,
		attributeId: 40,
		type: 'BOOLEAN',
		writable: true,
		mandatory: false
	}, {

		label: 368,
		nameFun: 'EnableOneTouchLocking',
		nameObj: 'enableOneTouchLocking',
		clusterId: 257,
		name: 'enable one touch locking',
		server: true,
		attributeId: 41,
		type: 'BOOLEAN',
		writable: true,
		mandatory: false
	}, {

		label: 369,
		nameFun: 'EnableInsideStatusLed',
		nameObj: 'enableInsideStatusLed',
		clusterId: 257,
		name: 'enable inside status led',
		server: true,
		attributeId: 42,
		type: 'BOOLEAN',
		writable: true,
		mandatory: false
	}, {

		label: 370,
		nameFun: 'EnablePrivacyModeButton',
		nameObj: 'enablePrivacyModeButton',
		clusterId: 257,
		name: 'enable privacy mode button',
		server: true,
		attributeId: 43,
		type: 'BOOLEAN',
		writable: true,
		mandatory: false
	}, {

		label: 371,
		nameFun: 'WrongCodeEntryLimit',
		nameObj: 'wrongCodeEntryLimit',
		clusterId: 257,
		name: 'wrong code entry limit',
		server: true,
		attributeId: 48,
		type: 'INT8U',
		writable: true,
		mandatory: false
	}, {

		label: 372,
		nameFun: 'UserCodeTemporaryDisableTime',
		nameObj: 'userCodeTemporaryDisableTime',
		clusterId: 257,
		name: 'user code temporary disable time',
		server: true,
		attributeId: 49,
		type: 'INT8U',
		writable: true,
		mandatory: false
	}, {

		label: 373,
		nameFun: 'SendPinOverTheAir',
		nameObj: 'sendPinOverTheAir',
		clusterId: 257,
		name: 'send pin over the air',
		server: true,
		attributeId: 50,
		type: 'BOOLEAN',
		writable: true,
		mandatory: false
	}, {

		label: 374,
		nameFun: 'RequirePinForRfOperation',
		nameObj: 'requirePinForRfOperation',
		clusterId: 257,
		name: 'require pin for rf operation',
		server: true,
		attributeId: 51,
		type: 'BOOLEAN',
		writable: true,
		mandatory: false
	}, {

		label: 375,
		nameFun: 'ZigbeeSecurityLevel',
		nameObj: 'zigbeeSecurityLevel',
		clusterId: 257,
		name: 'zigbee security level',
		server: true,
		attributeId: 52,
		type: 'ENUM8',
		writable: false,
		mandatory: false
	}, {

		label: 376,
		nameFun: 'AlarmMask',
		nameObj: 'alarmMask',
		clusterId: 257,
		name: 'alarm mask',
		server: true,
		attributeId: 64,
		type: 'BITMAP16',
		writable: true,
		mandatory: false
	}, {

		label: 377,
		nameFun: 'KeypadOperationEventMask',
		nameObj: 'keypadOperationEventMask',
		clusterId: 257,
		name: 'keypad operation event mask',
		server: true,
		attributeId: 65,
		type: 'BITMAP16',
		writable: true,
		mandatory: false
	}, {

		label: 378,
		nameFun: 'RfOperationEventMask',
		nameObj: 'rfOperationEventMask',
		clusterId: 257,
		name: 'RF operation event mask',
		server: true,
		attributeId: 66,
		type: 'BITMAP16',
		writable: true,
		mandatory: false
	}, {

		label: 379,
		nameFun: 'ManualOperationEventMask',
		nameObj: 'manualOperationEventMask',
		clusterId: 257,
		name: 'manual operation event mask',
		server: true,
		attributeId: 67,
		type: 'BITMAP16',
		writable: true,
		mandatory: false
	}, {

		label: 380,
		nameFun: 'RfidOperationEventMask',
		nameObj: 'rfidOperationEventMask',
		clusterId: 257,
		name: 'rfid operation event mask',
		server: true,
		attributeId: 68,
		type: 'BITMAP16',
		writable: true,
		mandatory: false
	}, {

		label: 381,
		nameFun: 'KeypadProgrammingEventMask',
		nameObj: 'keypadProgrammingEventMask',
		clusterId: 257,
		name: 'keypad programming event mask',
		server: true,
		attributeId: 69,
		type: 'BITMAP16',
		writable: true,
		mandatory: false
	}, {

		label: 382,
		nameFun: 'RfProgrammingEventMask',
		nameObj: 'rfProgrammingEventMask',
		clusterId: 257,
		name: 'rf programming event mask',
		server: true,
		attributeId: 70,
		type: 'BITMAP16',
		writable: true,
		mandatory: false
	}, {

		label: 383,
		nameFun: 'RfidProgrammingEventMask',
		nameObj: 'rfidProgrammingEventMask',
		clusterId: 257,
		name: 'rfid programming event mask',
		server: true,
		attributeId: 71,
		type: 'BITMAP16',
		writable: true,
		mandatory: false
	}, {

		label: 384,
		nameFun: 'WindowCoveringType',
		nameObj: 'windowCoveringType',
		clusterId: 258,
		name: 'window covering type',
		server: true,
		attributeId: 0,
		type: 'ENUM8',
		writable: false,
		mandatory: true
	}, {

		label: 385,
		nameFun: 'PhysicalClosedLimitLift',
		nameObj: 'physicalClosedLimitLift',
		clusterId: 258,
		name: 'physical closed limit - lift',
		server: true,
		attributeId: 1,
		type: 'INT16U',
		writable: false,
		mandatory: false
	}, {

		label: 386,
		nameFun: 'PhysicalClosedLimitTilt',
		nameObj: 'physicalClosedLimitTilt',
		clusterId: 258,
		name: 'physical closed limit - tilt',
		server: true,
		attributeId: 2,
		type: 'INT16U',
		writable: false,
		mandatory: false
	}, {

		label: 387,
		nameFun: 'CurrentPositionLift',
		nameObj: 'currentPositionLift',
		clusterId: 258,
		name: 'current position - lift',
		server: true,
		attributeId: 3,
		type: 'INT16U',
		writable: false,
		mandatory: false
	}, {

		label: 388,
		nameFun: 'CurrentPositionTilt',
		nameObj: 'currentPositionTilt',
		clusterId: 258,
		name: 'current position - tilt',
		server: true,
		attributeId: 4,
		type: 'INT16U',
		writable: false,
		mandatory: false
	}, {

		label: 389,
		nameFun: 'NumberOfActuationsLift',
		nameObj: 'numberOfActuationsLift',
		clusterId: 258,
		name: 'number of actuations - lift',
		server: true,
		attributeId: 5,
		type: 'INT16U',
		writable: false,
		mandatory: false
	}, {

		label: 390,
		nameFun: 'NumberOfActuationsTilt',
		nameObj: 'numberOfActuationsTilt',
		clusterId: 258,
		name: 'number of actuations - tilt',
		server: true,
		attributeId: 6,
		type: 'INT16U',
		writable: false,
		mandatory: false
	}, {

		label: 391,
		nameFun: 'ConfigStatus',
		nameObj: 'configStatus',
		clusterId: 258,
		name: 'config status',
		server: true,
		attributeId: 7,
		type: 'BITMAP8',
		writable: false,
		mandatory: true
	}, {

		label: 392,
		nameFun: 'CurrentPositionLiftPercentage',
		nameObj: 'currentPositionLiftPercentage',
		clusterId: 258,
		name: 'current position lift percentage',
		server: true,
		attributeId: 8,
		type: 'INT8U',
		writable: false,
		mandatory: false
	}, {

		label: 393,
		nameFun: 'CurrentPositionTiltPercentage',
		nameObj: 'currentPositionTiltPercentage',
		clusterId: 258,
		name: 'current position tilt percentage',
		server: true,
		attributeId: 9,
		type: 'INT8U',
		writable: false,
		mandatory: false
	}, {

		label: 394,
		nameFun: 'InstalledOpenLimitLift',
		nameObj: 'installedOpenLimitLift',
		clusterId: 258,
		name: 'installed open limit - lift',
		server: true,
		attributeId: 16,
		type: 'INT16U',
		writable: false,
		mandatory: true
	}, {

		label: 395,
		nameFun: 'InstalledClosedLimitLift',
		nameObj: 'installedClosedLimitLift',
		clusterId: 258,
		name: 'installed closed limit - lift',
		server: true,
		attributeId: 17,
		type: 'INT16U',
		writable: false,
		mandatory: true
	}, {

		label: 396,
		nameFun: 'InstalledOpenLimitTilt',
		nameObj: 'installedOpenLimitTilt',
		clusterId: 258,
		name: 'installed open limit - tilt',
		server: true,
		attributeId: 18,
		type: 'INT16U',
		writable: false,
		mandatory: true
	}, {

		label: 397,
		nameFun: 'InstalledClosedLimitTilt',
		nameObj: 'installedClosedLimitTilt',
		clusterId: 258,
		name: 'installed closed limit - tilt',
		server: true,
		attributeId: 19,
		type: 'INT16U',
		writable: false,
		mandatory: true
	}, {

		label: 398,
		nameFun: 'VelocityLift',
		nameObj: 'velocityLift',
		clusterId: 258,
		name: 'velocity - lift',
		server: true,
		attributeId: 20,
		type: 'INT16U',
		writable: true,
		mandatory: false
	}, {

		label: 399,
		nameFun: 'AccelerationTimeLift',
		nameObj: 'accelerationTimeLift',
		clusterId: 258,
		name: 'acceleration time - lift',
		server: true,
		attributeId: 21,
		type: 'INT16U',
		writable: true,
		mandatory: false
	}, {

		label: 400,
		nameFun: 'DecelerationTimeLift',
		nameObj: 'decelerationTimeLift',
		clusterId: 258,
		name: 'deceleration time - lift',
		server: true,
		attributeId: 22,
		type: 'INT16U',
		writable: true,
		mandatory: false
	}, {

		label: 401,
		nameFun: 'Mode',
		nameObj: 'mode',
		clusterId: 258,
		name: 'mode',
		server: true,
		attributeId: 23,
		type: 'BITMAP8',
		writable: true,
		mandatory: true
	}, {

		label: 402,
		nameFun: 'IntermediateSetpointsLift',
		nameObj: 'intermediateSetpointsLift',
		clusterId: 258,
		name: 'intermediate setpoints - lift',
		server: true,
		attributeId: 24,
		type: 'OCTET_STRING',
		writable: true,
		mandatory: false
	}, {

		label: 403,
		nameFun: 'IntermediateSetpointsTilt',
		nameObj: 'intermediateSetpointsTilt',
		clusterId: 258,
		name: 'intermediate setpoints - tilt',
		server: true,
		attributeId: 25,
		type: 'OCTET_STRING',
		writable: true,
		mandatory: false
	}, {

		label: 404,
		nameFun: 'StartTime',
		nameObj: 'startTime',
		clusterId: 27,
		name: 'start time',
		server: true,
		attributeId: 0,
		type: 'INT16U',
		writable: false,
		mandatory: true
	}, {

		label: 405,
		nameFun: 'FinishTime',
		nameObj: 'finishTime',
		clusterId: 27,
		name: 'finish time',
		server: true,
		attributeId: 1,
		type: 'INT16U',
		writable: false,
		mandatory: true
	}, {

		label: 406,
		nameFun: 'RemainingTime',
		nameObj: 'remainingTime',
		clusterId: 27,
		name: 'remaining time',
		server: true,
		attributeId: 2,
		type: 'INT16U',
		writable: false,
		mandatory: false
	}, {

		label: 407,
		nameFun: 'TotalProfileNum',
		nameObj: 'totalProfileNum',
		clusterId: 26,
		name: 'total profile num',
		server: true,
		attributeId: 0,
		type: 'INT8U',
		writable: false,
		mandatory: true
	}, {

		label: 408,
		nameFun: 'MultipleScheduling',
		nameObj: 'multipleScheduling',
		clusterId: 26,
		name: 'multiple scheduling',
		server: true,
		attributeId: 1,
		type: 'BOOLEAN',
		writable: false,
		mandatory: true
	}, {

		label: 409,
		nameFun: 'EnergyFormatting',
		nameObj: 'energyFormatting',
		clusterId: 26,
		name: 'energy formatting',
		server: true,
		attributeId: 2,
		type: 'BITMAP8',
		writable: false,
		mandatory: true
	}, {

		label: 410,
		nameFun: 'EnergyRemote',
		nameObj: 'energyRemote',
		clusterId: 26,
		name: 'energy remote',
		server: true,
		attributeId: 3,
		type: 'BOOLEAN',
		writable: false,
		mandatory: true
	}, {

		label: 411,
		nameFun: 'ScheduleMode',
		nameObj: 'scheduleMode',
		clusterId: 26,
		name: 'schedule mode',
		server: true,
		attributeId: 4,
		type: 'BITMAP8',
		writable: true,
		mandatory: true
	}, {

		label: 412,
		nameFun: 'CheckInInterval',
		nameObj: 'checkInInterval',
		clusterId: 32,
		name: 'check - in interval',
		server: true,
		attributeId: 0,
		type: 'INT32U',
		writable: true,
		mandatory: true
	}, {

		label: 413,
		nameFun: 'LongPollInterval',
		nameObj: 'longPollInterval',
		clusterId: 32,
		name: 'long poll interval',
		server: true,
		attributeId: 1,
		type: 'INT32U',
		writable: false,
		mandatory: true
	}, {

		label: 414,
		nameFun: 'ShortPollInterval',
		nameObj: 'shortPollInterval',
		clusterId: 32,
		name: 'short poll interval',
		server: true,
		attributeId: 2,
		type: 'INT16U',
		writable: false,
		mandatory: true
	}, {

		label: 415,
		nameFun: 'FastPollTimeout',
		nameObj: 'fastPollTimeout',
		clusterId: 32,
		name: 'fast poll timeout',
		server: true,
		attributeId: 3,
		type: 'INT16U',
		writable: true,
		mandatory: true
	}, {

		label: 416,
		nameFun: 'CheckInIntervalMin',
		nameObj: 'checkInIntervalMin',
		clusterId: 32,
		name: 'check in interval min',
		server: true,
		attributeId: 4,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 417,
		nameFun: 'LongPollIntervalMin',
		nameObj: 'longPollIntervalMin',
		clusterId: 32,
		name: 'long poll interval min',
		server: true,
		attributeId: 5,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 418,
		nameFun: 'FastPollTimeoutMax',
		nameObj: 'fastPollTimeoutMax',
		clusterId: 32,
		name: 'fast poll timeout max',
		server: true,
		attributeId: 6,
		type: 'INT16U',
		writable: false,
		mandatory: false
	}, {

		label: 419,
		nameFun: 'BasicIdentification',
		nameObj: 'basicIdentification',
		clusterId: 2816,
		name: 'basic identification',
		server: true,
		attributeId: 0,
		type: 'INT56U',
		writable: false,
		mandatory: true
	}, {

		label: 420,
		nameFun: 'CompanyName',
		nameObj: 'companyName',
		clusterId: 2816,
		name: 'company name',
		server: true,
		attributeId: 16,
		type: 'CHAR_STRING',
		writable: false,
		mandatory: false
	}, {

		label: 421,
		nameFun: 'CompanyId',
		nameObj: 'companyId',
		clusterId: 2816,
		name: 'company id',
		server: true,
		attributeId: 17,
		type: 'INT16U',
		writable: false,
		mandatory: false
	}, {

		label: 422,
		nameFun: 'BrandName',
		nameObj: 'brandName',
		clusterId: 2816,
		name: 'brand name',
		server: true,
		attributeId: 18,
		type: 'CHAR_STRING',
		writable: false,
		mandatory: false
	}, {

		label: 423,
		nameFun: 'BrandId',
		nameObj: 'brandId',
		clusterId: 2816,
		name: 'brand id',
		server: true,
		attributeId: 19,
		type: 'INT16U',
		writable: false,
		mandatory: false
	}, {

		label: 424,
		nameFun: 'Model',
		nameObj: 'model',
		clusterId: 2816,
		name: 'model',
		server: true,
		attributeId: 20,
		type: 'OCTET_STRING',
		writable: false,
		mandatory: false
	}, {

		label: 425,
		nameFun: 'PartNumber',
		nameObj: 'partNumber',
		clusterId: 2816,
		name: 'part number',
		server: true,
		attributeId: 21,
		type: 'OCTET_STRING',
		writable: false,
		mandatory: false
	}, {

		label: 426,
		nameFun: 'ProductRevision',
		nameObj: 'productRevision',
		clusterId: 2816,
		name: 'product revision',
		server: true,
		attributeId: 22,
		type: 'OCTET_STRING',
		writable: false,
		mandatory: false
	}, {

		label: 427,
		nameFun: 'SoftwareRevision',
		nameObj: 'softwareRevision',
		clusterId: 2816,
		name: 'software revision',
		server: true,
		attributeId: 23,
		type: 'OCTET_STRING',
		writable: false,
		mandatory: false
	}, {

		label: 428,
		nameFun: 'ProductTypeName',
		nameObj: 'productTypeName',
		clusterId: 2816,
		name: 'product type name',
		server: true,
		attributeId: 24,
		type: 'OCTET_STRING',
		writable: false,
		mandatory: false
	}, {

		label: 429,
		nameFun: 'ProductTypeId',
		nameObj: 'productTypeId',
		clusterId: 2816,
		name: 'product type id',
		server: true,
		attributeId: 25,
		type: 'INT16U',
		writable: false,
		mandatory: false
	}, {

		label: 430,
		nameFun: 'CecedSpecificationVersion',
		nameObj: 'cecedSpecificationVersion',
		clusterId: 2816,
		name: 'ceced specification version',
		server: true,
		attributeId: 26,
		type: 'INT8U',
		writable: false,
		mandatory: false
	}, {

		label: 431,
		nameFun: 'CompanyName',
		nameObj: 'companyName',
		clusterId: 2817,
		name: 'company name',
		server: true,
		attributeId: 0,
		type: 'CHAR_STRING',
		writable: false,
		mandatory: true
	}, {

		label: 432,
		nameFun: 'MeterTypeId',
		nameObj: 'meterTypeId',
		clusterId: 2817,
		name: 'meter type id',
		server: true,
		attributeId: 1,
		type: 'INT16U',
		writable: false,
		mandatory: true
	}, {

		label: 433,
		nameFun: 'DataQualityId',
		nameObj: 'dataQualityId',
		clusterId: 2817,
		name: 'data quality id',
		server: true,
		attributeId: 4,
		type: 'INT16U',
		writable: false,
		mandatory: true
	}, {

		label: 434,
		nameFun: 'CustomerName',
		nameObj: 'customerName',
		clusterId: 2817,
		name: 'customer name',
		server: true,
		attributeId: 5,
		type: 'CHAR_STRING',
		writable: true,
		mandatory: false
	}, {

		label: 435,
		nameFun: 'Model',
		nameObj: 'model',
		clusterId: 2817,
		name: 'model',
		server: true,
		attributeId: 6,
		type: 'OCTET_STRING',
		writable: false,
		mandatory: false
	}, {

		label: 436,
		nameFun: 'PartNumber',
		nameObj: 'partNumber',
		clusterId: 2817,
		name: 'part number',
		server: true,
		attributeId: 7,
		type: 'OCTET_STRING',
		writable: false,
		mandatory: false
	}, {

		label: 437,
		nameFun: 'ProductRevision',
		nameObj: 'productRevision',
		clusterId: 2817,
		name: 'product revision',
		server: true,
		attributeId: 8,
		type: 'OCTET_STRING',
		writable: false,
		mandatory: false
	}, {

		label: 438,
		nameFun: 'SoftwareRevision',
		nameObj: 'softwareRevision',
		clusterId: 2817,
		name: 'software revision',
		server: true,
		attributeId: 10,
		type: 'OCTET_STRING',
		writable: false,
		mandatory: false
	}, {

		label: 439,
		nameFun: 'UtilityName',
		nameObj: 'utilityName',
		clusterId: 2817,
		name: 'utility name',
		server: true,
		attributeId: 11,
		type: 'CHAR_STRING',
		writable: false,
		mandatory: false
	}, {

		label: 440,
		nameFun: 'Pod',
		nameObj: 'pod',
		clusterId: 2817,
		name: 'pod',
		server: true,
		attributeId: 12,
		type: 'CHAR_STRING',
		writable: false,
		mandatory: true
	}, {

		label: 441,
		nameFun: 'AvailablePower',
		nameObj: 'availablePower',
		clusterId: 2817,
		name: 'available power',
		server: true,
		attributeId: 13,
		type: 'INT24S',
		writable: false,
		mandatory: true
	}, {

		label: 442,
		nameFun: 'PowerThreshold',
		nameObj: 'powerThreshold',
		clusterId: 2817,
		name: 'power threshold',
		server: true,
		attributeId: 14,
		type: 'INT24S',
		writable: false,
		mandatory: true
	}, {

		label: 443,
		nameFun: 'LogMaxSize',
		nameObj: 'logMaxSize',
		clusterId: 2819,
		name: 'log max size',
		server: true,
		attributeId: 0,
		type: 'INT32U',
		writable: false,
		mandatory: true
	}, {

		label: 444,
		nameFun: 'LogQueueMaxSize',
		nameObj: 'logQueueMaxSize',
		clusterId: 2819,
		name: 'log queue max size',
		server: true,
		attributeId: 1,
		type: 'INT8U',
		writable: false,
		mandatory: true
	}, {

		label: 445,
		nameFun: 'MeasurementType',
		nameObj: 'measurementType',
		clusterId: 2820,
		name: 'measurement type',
		server: true,
		attributeId: 0,
		type: 'BITMAP32',
		writable: false,
		mandatory: false
	}, {

		label: 446,
		nameFun: 'DcVoltage',
		nameObj: 'dcVoltage',
		clusterId: 2820,
		name: 'dc voltage',
		server: true,
		attributeId: 256,
		type: 'INT16S',
		writable: false,
		mandatory: false
	}, {

		label: 447,
		nameFun: 'DcVoltageMin',
		nameObj: 'dcVoltageMin',
		clusterId: 2820,
		name: 'dc voltage min',
		server: true,
		attributeId: 257,
		type: 'INT16S',
		writable: false,
		mandatory: false
	}, {

		label: 448,
		nameFun: 'DcVoltageMax',
		nameObj: 'dcVoltageMax',
		clusterId: 2820,
		name: 'dc voltage max',
		server: true,
		attributeId: 258,
		type: 'INT16S',
		writable: false,
		mandatory: false
	}, {

		label: 449,
		nameFun: 'DcCurrent',
		nameObj: 'dcCurrent',
		clusterId: 2820,
		name: 'dc current',
		server: true,
		attributeId: 259,
		type: 'INT16S',
		writable: false,
		mandatory: false
	}, {

		label: 450,
		nameFun: 'DcCurrentMin',
		nameObj: 'dcCurrentMin',
		clusterId: 2820,
		name: 'dc current min',
		server: true,
		attributeId: 260,
		type: 'INT16S',
		writable: false,
		mandatory: false
	}, {

		label: 451,
		nameFun: 'DcCurrentMax',
		nameObj: 'dcCurrentMax',
		clusterId: 2820,
		name: 'dc current max',
		server: true,
		attributeId: 261,
		type: 'INT16S',
		writable: false,
		mandatory: false
	}, {

		label: 452,
		nameFun: 'DcPower',
		nameObj: 'dcPower',
		clusterId: 2820,
		name: 'dc power',
		server: true,
		attributeId: 262,
		type: 'INT16S',
		writable: false,
		mandatory: false
	}, {

		label: 453,
		nameFun: 'DcPowerMin',
		nameObj: 'dcPowerMin',
		clusterId: 2820,
		name: 'dc power min',
		server: true,
		attributeId: 263,
		type: 'INT16S',
		writable: false,
		mandatory: false
	}, {

		label: 454,
		nameFun: 'DcPowerMax',
		nameObj: 'dcPowerMax',
		clusterId: 2820,
		name: 'dc power max',
		server: true,
		attributeId: 264,
		type: 'INT16S',
		writable: false,
		mandatory: false
	}, {

		label: 455,
		nameFun: 'DcVoltageMultiplier',
		nameObj: 'dcVoltageMultiplier',
		clusterId: 2820,
		name: 'dc voltage multiplier',
		server: true,
		attributeId: 512,
		type: 'INT16U',
		writable: false,
		mandatory: false
	}, {

		label: 456,
		nameFun: 'DcVoltageDivisor',
		nameObj: 'dcVoltageDivisor',
		clusterId: 2820,
		name: 'dc voltage divisor',
		server: true,
		attributeId: 513,
		type: 'INT16U',
		writable: false,
		mandatory: false
	}, {

		label: 457,
		nameFun: 'DcCurrentMultiplier',
		nameObj: 'dcCurrentMultiplier',
		clusterId: 2820,
		name: 'dc current multiplier',
		server: true,
		attributeId: 514,
		type: 'INT16U',
		writable: false,
		mandatory: false
	}, {

		label: 458,
		nameFun: 'DcCurrentDivisor',
		nameObj: 'dcCurrentDivisor',
		clusterId: 2820,
		name: 'dc current divisor',
		server: true,
		attributeId: 515,
		type: 'INT16U',
		writable: false,
		mandatory: false
	}, {

		label: 459,
		nameFun: 'DcPowerMultiplier',
		nameObj: 'dcPowerMultiplier',
		clusterId: 2820,
		name: 'dc power multiplier',
		server: true,
		attributeId: 516,
		type: 'INT16U',
		writable: false,
		mandatory: false
	}, {

		label: 460,
		nameFun: 'DcPowerDivisor',
		nameObj: 'dcPowerDivisor',
		clusterId: 2820,
		name: 'dc power divisor',
		server: true,
		attributeId: 517,
		type: 'INT16U',
		writable: false,
		mandatory: false
	}, {

		label: 461,
		nameFun: 'AcFrequency',
		nameObj: 'acFrequency',
		clusterId: 2820,
		name: 'ac frequency',
		server: true,
		attributeId: 768,
		type: 'INT16U',
		writable: false,
		mandatory: false
	}, {

		label: 462,
		nameFun: 'AcFrequencyMin',
		nameObj: 'acFrequencyMin',
		clusterId: 2820,
		name: 'ac frequency min',
		server: true,
		attributeId: 769,
		type: 'INT16U',
		writable: false,
		mandatory: false
	}, {

		label: 463,
		nameFun: 'AcFrequencyMax',
		nameObj: 'acFrequencyMax',
		clusterId: 2820,
		name: 'ac frequency max',
		server: true,
		attributeId: 770,
		type: 'INT16U',
		writable: false,
		mandatory: false
	}, {

		label: 464,
		nameFun: 'NeutralCurrent',
		nameObj: 'neutralCurrent',
		clusterId: 2820,
		name: 'neutral current',
		server: true,
		attributeId: 771,
		type: 'INT16U',
		writable: false,
		mandatory: false
	}, {

		label: 465,
		nameFun: 'TotalActivePower',
		nameObj: 'totalActivePower',
		clusterId: 2820,
		name: 'total active power',
		server: true,
		attributeId: 772,
		type: 'INT32S',
		writable: false,
		mandatory: false
	}, {

		label: 466,
		nameFun: 'TotalReactivePower',
		nameObj: 'totalReactivePower',
		clusterId: 2820,
		name: 'total reactive power',
		server: true,
		attributeId: 773,
		type: 'INT32S',
		writable: false,
		mandatory: false
	}, {

		label: 467,
		nameFun: 'TotalApparentPower',
		nameObj: 'totalApparentPower',
		clusterId: 2820,
		name: 'total apparent power',
		server: true,
		attributeId: 774,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 468,
		nameFun: 'Measured1stHarmonicCurrent',
		nameObj: 'measured1stHarmonicCurrent',
		clusterId: 2820,
		name: 'measured 1st harmonic current',
		server: true,
		attributeId: 775,
		type: 'INT16S',
		writable: false,
		mandatory: false
	}, {

		label: 469,
		nameFun: 'Measured3rdHarmonicCurrent',
		nameObj: 'measured3rdHarmonicCurrent',
		clusterId: 2820,
		name: 'measured 3rd harmonic current',
		server: true,
		attributeId: 776,
		type: 'INT16S',
		writable: false,
		mandatory: false
	}, {

		label: 470,
		nameFun: 'Measured5thHarmonicCurrent',
		nameObj: 'measured5thHarmonicCurrent',
		clusterId: 2820,
		name: 'measured 5th harmonic current',
		server: true,
		attributeId: 777,
		type: 'INT16S',
		writable: false,
		mandatory: false
	}, {

		label: 471,
		nameFun: 'Measured7thHarmonicCurrent',
		nameObj: 'measured7thHarmonicCurrent',
		clusterId: 2820,
		name: 'measured 7th harmonic current',
		server: true,
		attributeId: 778,
		type: 'INT16S',
		writable: false,
		mandatory: false
	}, {

		label: 472,
		nameFun: 'Measured9thHarmonicCurrent',
		nameObj: 'measured9thHarmonicCurrent',
		clusterId: 2820,
		name: 'measured 9th harmonic current',
		server: true,
		attributeId: 779,
		type: 'INT16S',
		writable: false,
		mandatory: false
	}, {

		label: 473,
		nameFun: 'Measured11thHarmonicCurrent',
		nameObj: 'measured11thHarmonicCurrent',
		clusterId: 2820,
		name: 'measured 11th harmonic current',
		server: true,
		attributeId: 780,
		type: 'INT16S',
		writable: false,
		mandatory: false
	}, {

		label: 474,
		nameFun: 'MeasuredPhase1stHarmonicCurrent',
		nameObj: 'measuredPhase1stHarmonicCurrent',
		clusterId: 2820,
		name: 'measured phase 1st harmonic current',
		server: true,
		attributeId: 781,
		type: 'INT16S',
		writable: false,
		mandatory: false
	}, {

		label: 475,
		nameFun: 'MeasuredPhase3rdHarmonicCurrent',
		nameObj: 'measuredPhase3rdHarmonicCurrent',
		clusterId: 2820,
		name: 'measured phase 3rd harmonic current',
		server: true,
		attributeId: 782,
		type: 'INT16S',
		writable: false,
		mandatory: false
	}, {

		label: 476,
		nameFun: 'MeasuredPhase5thHarmonicCurrent',
		nameObj: 'measuredPhase5thHarmonicCurrent',
		clusterId: 2820,
		name: 'measured phase 5th harmonic current',
		server: true,
		attributeId: 783,
		type: 'INT16S',
		writable: false,
		mandatory: false
	}, {

		label: 477,
		nameFun: 'MeasuredPhase7thHarmonicCurrent',
		nameObj: 'measuredPhase7thHarmonicCurrent',
		clusterId: 2820,
		name: 'measured phase 7th harmonic current',
		server: true,
		attributeId: 784,
		type: 'INT16S',
		writable: false,
		mandatory: false
	}, {

		label: 478,
		nameFun: 'MeasuredPhase9thHarmonicCurrent',
		nameObj: 'measuredPhase9thHarmonicCurrent',
		clusterId: 2820,
		name: 'measured phase 9th harmonic current',
		server: true,
		attributeId: 785,
		type: 'INT16S',
		writable: false,
		mandatory: false
	}, {

		label: 479,
		nameFun: 'MeasuredPhase11thHarmonicCurrent',
		nameObj: 'measuredPhase11thHarmonicCurrent',
		clusterId: 2820,
		name: 'measured phase 11th harmonic current',
		server: true,
		attributeId: 786,
		type: 'INT16S',
		writable: false,
		mandatory: false
	}, {

		label: 480,
		nameFun: 'AcFrequencyMultiplier',
		nameObj: 'acFrequencyMultiplier',
		clusterId: 2820,
		name: 'ac frequency multiplier',
		server: true,
		attributeId: 1024,
		type: 'INT16U',
		writable: false,
		mandatory: false
	}, {

		label: 481,
		nameFun: 'AcFrequencyDivisor',
		nameObj: 'acFrequencyDivisor',
		clusterId: 2820,
		name: 'ac frequency divisor',
		server: true,
		attributeId: 1025,
		type: 'INT16U',
		writable: false,
		mandatory: false
	}, {

		label: 482,
		nameFun: 'PowerMultiplier',
		nameObj: 'powerMultiplier',
		clusterId: 2820,
		name: 'power multiplier',
		server: true,
		attributeId: 1026,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 483,
		nameFun: 'PowerDivisor',
		nameObj: 'powerDivisor',
		clusterId: 2820,
		name: 'power divisor',
		server: true,
		attributeId: 1027,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 484,
		nameFun: 'HarmonicCurrentMultiplier',
		nameObj: 'harmonicCurrentMultiplier',
		clusterId: 2820,
		name: 'harmonic current multiplier',
		server: true,
		attributeId: 1028,
		type: 'INT8S',
		writable: false,
		mandatory: false
	}, {

		label: 485,
		nameFun: 'PhaseHarmonicCurrentMultiplier',
		nameObj: 'phaseHarmonicCurrentMultiplier',
		clusterId: 2820,
		name: 'phase harmonic current multiplier',
		server: true,
		attributeId: 1029,
		type: 'INT8S',
		writable: false,
		mandatory: false
	}, {

		label: 486,
		nameFun: 'InstantaneousVoltage',
		nameObj: 'instantaneousVoltage',
		clusterId: 2820,
		name: 'instantaneous voltage',
		server: true,
		attributeId: 1280,
		type: 'INT16S',
		writable: false,
		mandatory: false
	}, {

		label: 487,
		nameFun: 'InstantaneousLineCurrent',
		nameObj: 'instantaneousLineCurrent',
		clusterId: 2820,
		name: 'instantaneous line current',
		server: true,
		attributeId: 1281,
		type: 'INT16U',
		writable: false,
		mandatory: false
	}, {

		label: 488,
		nameFun: 'InstantaneousActiveCurrent',
		nameObj: 'instantaneousActiveCurrent',
		clusterId: 2820,
		name: 'instantaneous active current',
		server: true,
		attributeId: 1282,
		type: 'INT16S',
		writable: false,
		mandatory: false
	}, {

		label: 489,
		nameFun: 'InstantaneousReactiveCurrent',
		nameObj: 'instantaneousReactiveCurrent',
		clusterId: 2820,
		name: 'instantaneous reactive current',
		server: true,
		attributeId: 1283,
		type: 'INT16S',
		writable: false,
		mandatory: false
	}, {

		label: 490,
		nameFun: 'InstantaneousPower',
		nameObj: 'instantaneousPower',
		clusterId: 2820,
		name: 'instantaneous power',
		server: true,
		attributeId: 1284,
		type: 'INT16S',
		writable: false,
		mandatory: false
	}, {

		label: 491,
		nameFun: 'RmsVoltage',
		nameObj: 'rmsVoltage',
		clusterId: 2820,
		name: 'rms voltage',
		server: true,
		attributeId: 1285,
		type: 'INT16U',
		writable: false,
		mandatory: false
	}, {

		label: 492,
		nameFun: 'RmsVoltageMin',
		nameObj: 'rmsVoltageMin',
		clusterId: 2820,
		name: 'rms voltage min',
		server: true,
		attributeId: 1286,
		type: 'INT16U',
		writable: false,
		mandatory: false
	}, {

		label: 493,
		nameFun: 'RmsVoltageMax',
		nameObj: 'rmsVoltageMax',
		clusterId: 2820,
		name: 'rms voltage max',
		server: true,
		attributeId: 1287,
		type: 'INT16U',
		writable: false,
		mandatory: false
	}, {

		label: 494,
		nameFun: 'RmsCurrent',
		nameObj: 'rmsCurrent',
		clusterId: 2820,
		name: 'rms current',
		server: true,
		attributeId: 1288,
		type: 'INT16U',
		writable: false,
		mandatory: false
	}, {

		label: 495,
		nameFun: 'RmsCurrentMin',
		nameObj: 'rmsCurrentMin',
		clusterId: 2820,
		name: 'rms current min',
		server: true,
		attributeId: 1289,
		type: 'INT16U',
		writable: false,
		mandatory: false
	}, {

		label: 496,
		nameFun: 'RmsCurrentMax',
		nameObj: 'rmsCurrentMax',
		clusterId: 2820,
		name: 'rms current max',
		server: true,
		attributeId: 1290,
		type: 'INT16U',
		writable: false,
		mandatory: false
	}, {

		label: 497,
		nameFun: 'ActivePower',
		nameObj: 'activePower',
		clusterId: 2820,
		name: 'active power',
		server: true,
		attributeId: 1291,
		type: 'INT16S',
		writable: false,
		mandatory: false
	}, {

		label: 498,
		nameFun: 'ActivePowerMin',
		nameObj: 'activePowerMin',
		clusterId: 2820,
		name: 'active power min',
		server: true,
		attributeId: 1292,
		type: 'INT16S',
		writable: false,
		mandatory: false
	}, {

		label: 499,
		nameFun: 'ActivePowerMax',
		nameObj: 'activePowerMax',
		clusterId: 2820,
		name: 'active power max',
		server: true,
		attributeId: 1293,
		type: 'INT16S',
		writable: false,
		mandatory: false
	}, {

		label: 500,
		nameFun: 'ReactivePower',
		nameObj: 'reactivePower',
		clusterId: 2820,
		name: 'reactive power',
		server: true,
		attributeId: 1294,
		type: 'INT16S',
		writable: false,
		mandatory: false
	}, {

		label: 501,
		nameFun: 'ApparentPower',
		nameObj: 'apparentPower',
		clusterId: 2820,
		name: 'apparent power',
		server: true,
		attributeId: 1295,
		type: 'INT16U',
		writable: false,
		mandatory: false
	}, {

		label: 502,
		nameFun: 'PowerFactor',
		nameObj: 'powerFactor',
		clusterId: 2820,
		name: 'power factor',
		server: true,
		attributeId: 1296,
		type: 'INT8S',
		writable: false,
		mandatory: false
	}, {

		label: 503,
		nameFun: 'AverageRmsVoltageMeasurementPeriod',
		nameObj: 'averageRmsVoltageMeasurementPeriod',
		clusterId: 2820,
		name: 'average rms voltage measurement period',
		server: true,
		attributeId: 1297,
		type: 'INT16U',
		writable: true,
		mandatory: false
	}, {

		label: 504,
		nameFun: 'AverageRmsUnderVoltageCounter',
		nameObj: 'averageRmsUnderVoltageCounter',
		clusterId: 2820,
		name: 'average rms under voltage counter',
		server: true,
		attributeId: 1299,
		type: 'INT16U',
		writable: true,
		mandatory: false
	}, {

		label: 505,
		nameFun: 'RmsExtremeOverVoltagePeriod',
		nameObj: 'rmsExtremeOverVoltagePeriod',
		clusterId: 2820,
		name: 'rms extreme over voltage period',
		server: true,
		attributeId: 1300,
		type: 'INT16U',
		writable: true,
		mandatory: false
	}, {

		label: 506,
		nameFun: 'RmsExtremeUnderVoltagePeriod',
		nameObj: 'rmsExtremeUnderVoltagePeriod',
		clusterId: 2820,
		name: 'rms extreme under voltage period',
		server: true,
		attributeId: 1301,
		type: 'INT16U',
		writable: true,
		mandatory: false
	}, {

		label: 507,
		nameFun: 'RmsVoltageSagPeriod',
		nameObj: 'rmsVoltageSagPeriod',
		clusterId: 2820,
		name: 'rms voltage sag period',
		server: true,
		attributeId: 1302,
		type: 'INT16U',
		writable: true,
		mandatory: false
	}, {

		label: 508,
		nameFun: 'RmsVoltageSwellPeriod',
		nameObj: 'rmsVoltageSwellPeriod',
		clusterId: 2820,
		name: 'rms voltage swell period',
		server: true,
		attributeId: 1303,
		type: 'INT16U',
		writable: true,
		mandatory: false
	}, {

		label: 509,
		nameFun: 'AcVoltageMultiplier',
		nameObj: 'acVoltageMultiplier',
		clusterId: 2820,
		name: 'ac voltage multiplier',
		server: true,
		attributeId: 1536,
		type: 'INT16U',
		writable: false,
		mandatory: false
	}, {

		label: 510,
		nameFun: 'AcVoltageDivisor',
		nameObj: 'acVoltageDivisor',
		clusterId: 2820,
		name: 'ac voltage divisor',
		server: true,
		attributeId: 1537,
		type: 'INT16U',
		writable: false,
		mandatory: false
	}, {

		label: 511,
		nameFun: 'AcCurrentMultiplier',
		nameObj: 'acCurrentMultiplier',
		clusterId: 2820,
		name: 'ac current multiplier',
		server: true,
		attributeId: 1538,
		type: 'INT16U',
		writable: false,
		mandatory: false
	}, {

		label: 512,
		nameFun: 'AcCurrentDivisor',
		nameObj: 'acCurrentDivisor',
		clusterId: 2820,
		name: 'ac current divisor',
		server: true,
		attributeId: 1539,
		type: 'INT16U',
		writable: false,
		mandatory: false
	}, {

		label: 513,
		nameFun: 'AcPowerMultiplier',
		nameObj: 'acPowerMultiplier',
		clusterId: 2820,
		name: 'ac power multiplier',
		server: true,
		attributeId: 1540,
		type: 'INT16U',
		writable: false,
		mandatory: false
	}, {

		label: 514,
		nameFun: 'AcPowerDivisor',
		nameObj: 'acPowerDivisor',
		clusterId: 2820,
		name: 'ac power divisor',
		server: true,
		attributeId: 1541,
		type: 'INT16U',
		writable: false,
		mandatory: false
	}, {

		label: 515,
		nameFun: 'OverloadAlarmsMask',
		nameObj: 'overloadAlarmsMask',
		clusterId: 2820,
		name: 'overload alarms mask',
		server: true,
		attributeId: 1792,
		type: 'BITMAP8',
		writable: true,
		mandatory: false
	}, {

		label: 516,
		nameFun: 'VoltageOverload',
		nameObj: 'voltageOverload',
		clusterId: 2820,
		name: 'voltage overload',
		server: true,
		attributeId: 1793,
		type: 'INT16S',
		writable: false,
		mandatory: false
	}, {

		label: 517,
		nameFun: 'CurrentOverload',
		nameObj: 'currentOverload',
		clusterId: 2820,
		name: 'current overload',
		server: true,
		attributeId: 1794,
		type: 'INT16S',
		writable: false,
		mandatory: false
	}, {

		label: 518,
		nameFun: 'AcOverloadAlarmsMask',
		nameObj: 'acOverloadAlarmsMask',
		clusterId: 2820,
		name: 'ac overload alarms mask',
		server: true,
		attributeId: 2048,
		type: 'BITMAP16',
		writable: true,
		mandatory: false
	}, {

		label: 519,
		nameFun: 'AcVoltageOverload',
		nameObj: 'acVoltageOverload',
		clusterId: 2820,
		name: 'ac voltage overload',
		server: true,
		attributeId: 2049,
		type: 'INT16S',
		writable: false,
		mandatory: false
	}, {

		label: 520,
		nameFun: 'AcCurrentOverload',
		nameObj: 'acCurrentOverload',
		clusterId: 2820,
		name: 'ac current overload',
		server: true,
		attributeId: 2050,
		type: 'INT16S',
		writable: false,
		mandatory: false
	}, {

		label: 521,
		nameFun: 'AcActivePowerOverload',
		nameObj: 'acActivePowerOverload',
		clusterId: 2820,
		name: 'ac active power overload',
		server: true,
		attributeId: 2051,
		type: 'INT16S',
		writable: false,
		mandatory: false
	}, {

		label: 522,
		nameFun: 'AcReactivePowerOverload',
		nameObj: 'acReactivePowerOverload',
		clusterId: 2820,
		name: 'ac reactive power overload',
		server: true,
		attributeId: 2052,
		type: 'INT16S',
		writable: false,
		mandatory: false
	}, {

		label: 523,
		nameFun: 'AverageRmsOverVoltage',
		nameObj: 'averageRmsOverVoltage',
		clusterId: 2820,
		name: 'average rms over voltage',
		server: true,
		attributeId: 2053,
		type: 'INT16S',
		writable: false,
		mandatory: false
	}, {

		label: 524,
		nameFun: 'AverageRmsUnderVoltage',
		nameObj: 'averageRmsUnderVoltage',
		clusterId: 2820,
		name: 'average rms under voltage',
		server: true,
		attributeId: 2054,
		type: 'INT16S',
		writable: false,
		mandatory: false
	}, {

		label: 525,
		nameFun: 'RmsExtremeOverVoltage',
		nameObj: 'rmsExtremeOverVoltage',
		clusterId: 2820,
		name: 'rms extreme over voltage',
		server: true,
		attributeId: 2055,
		type: 'INT16S',
		writable: false,
		mandatory: false
	}, {

		label: 526,
		nameFun: 'RmsExtremeUnderVoltage',
		nameObj: 'rmsExtremeUnderVoltage',
		clusterId: 2820,
		name: 'rms extreme under voltage',
		server: true,
		attributeId: 2056,
		type: 'INT16S',
		writable: false,
		mandatory: false
	}, {

		label: 527,
		nameFun: 'RmsVoltageSag',
		nameObj: 'rmsVoltageSag',
		clusterId: 2820,
		name: 'rms voltage sag',
		server: true,
		attributeId: 2057,
		type: 'INT16S',
		writable: false,
		mandatory: false
	}, {

		label: 528,
		nameFun: 'RmsVoltageSwell',
		nameObj: 'rmsVoltageSwell',
		clusterId: 2820,
		name: 'rms voltage swell',
		server: true,
		attributeId: 2058,
		type: 'INT16S',
		writable: false,
		mandatory: false
	}, {

		label: 529,
		nameFun: 'LineCurrentPhaseB',
		nameObj: 'lineCurrentPhaseB',
		clusterId: 2820,
		name: 'line current phase b',
		server: true,
		attributeId: 2305,
		type: 'INT16U',
		writable: false,
		mandatory: false
	}, {

		label: 530,
		nameFun: 'ActiveCurrentPhaseB',
		nameObj: 'activeCurrentPhaseB',
		clusterId: 2820,
		name: 'active current phase b',
		server: true,
		attributeId: 2306,
		type: 'INT16S',
		writable: false,
		mandatory: false
	}, {

		label: 531,
		nameFun: 'ReactiveCurrentPhaseB',
		nameObj: 'reactiveCurrentPhaseB',
		clusterId: 2820,
		name: 'reactive current phase b',
		server: true,
		attributeId: 2307,
		type: 'INT16S',
		writable: false,
		mandatory: false
	}, {

		label: 532,
		nameFun: 'RmsVoltagePhaseB',
		nameObj: 'rmsVoltagePhaseB',
		clusterId: 2820,
		name: 'rms voltage phase b',
		server: true,
		attributeId: 2309,
		type: 'INT16U',
		writable: false,
		mandatory: false
	}, {

		label: 533,
		nameFun: 'RmsVoltageMinPhaseB',
		nameObj: 'rmsVoltageMinPhaseB',
		clusterId: 2820,
		name: 'rms voltage min phase b',
		server: true,
		attributeId: 2310,
		type: 'INT16U',
		writable: false,
		mandatory: false
	}, {

		label: 534,
		nameFun: 'RmsVoltageMaxPhaseB',
		nameObj: 'rmsVoltageMaxPhaseB',
		clusterId: 2820,
		name: 'rms voltage max phase b',
		server: true,
		attributeId: 2311,
		type: 'INT16U',
		writable: false,
		mandatory: false
	}, {

		label: 535,
		nameFun: 'RmsCurrentPhaseB',
		nameObj: 'rmsCurrentPhaseB',
		clusterId: 2820,
		name: 'rms current phase b',
		server: true,
		attributeId: 2312,
		type: 'INT16U',
		writable: false,
		mandatory: false
	}, {

		label: 536,
		nameFun: 'RmsCurrentMinPhaseB',
		nameObj: 'rmsCurrentMinPhaseB',
		clusterId: 2820,
		name: 'rms current min phase b',
		server: true,
		attributeId: 2313,
		type: 'INT16U',
		writable: false,
		mandatory: false
	}, {

		label: 537,
		nameFun: 'RmsCurrentMaxPhaseB',
		nameObj: 'rmsCurrentMaxPhaseB',
		clusterId: 2820,
		name: 'rms current max phase b',
		server: true,
		attributeId: 2314,
		type: 'INT16U',
		writable: false,
		mandatory: false
	}, {

		label: 538,
		nameFun: 'ActivePowerPhaseB',
		nameObj: 'activePowerPhaseB',
		clusterId: 2820,
		name: 'active power phase b',
		server: true,
		attributeId: 2315,
		type: 'INT16S',
		writable: false,
		mandatory: false
	}, {

		label: 539,
		nameFun: 'ActivePowerMinPhaseB',
		nameObj: 'activePowerMinPhaseB',
		clusterId: 2820,
		name: 'active power min phase b',
		server: true,
		attributeId: 2316,
		type: 'INT16S',
		writable: false,
		mandatory: false
	}, {

		label: 540,
		nameFun: 'ActivePowerMaxPhaseB',
		nameObj: 'activePowerMaxPhaseB',
		clusterId: 2820,
		name: 'active power max phase b',
		server: true,
		attributeId: 2317,
		type: 'INT16S',
		writable: false,
		mandatory: false
	}, {

		label: 541,
		nameFun: 'ReactivePowerPhaseB',
		nameObj: 'reactivePowerPhaseB',
		clusterId: 2820,
		name: 'reactive power phase b',
		server: true,
		attributeId: 2318,
		type: 'INT16S',
		writable: false,
		mandatory: false
	}, {

		label: 542,
		nameFun: 'ApparentPowerPhaseB',
		nameObj: 'apparentPowerPhaseB',
		clusterId: 2820,
		name: 'apparent power phase b',
		server: true,
		attributeId: 2319,
		type: 'INT16U',
		writable: false,
		mandatory: false
	}, {

		label: 543,
		nameFun: 'PowerFactorPhaseB',
		nameObj: 'powerFactorPhaseB',
		clusterId: 2820,
		name: 'power factor phase b',
		server: true,
		attributeId: 2320,
		type: 'INT8S',
		writable: false,
		mandatory: false
	}, {

		label: 544,
		nameFun: 'AverageRmsVoltageMeasurementPeriodPhaseB',
		nameObj: 'averageRmsVoltageMeasurementPeriodPhaseB',
		clusterId: 2820,
		name: 'average rms voltage measurement period phase b',
		server: true,
		attributeId: 2321,
		type: 'INT16U',
		writable: false,
		mandatory: false
	}, {

		label: 545,
		nameFun: 'AverageRmsOverVoltageCounterPhaseB',
		nameObj: 'averageRmsOverVoltageCounterPhaseB',
		clusterId: 2820,
		name: 'average rms over voltage counter phase b',
		server: true,
		attributeId: 2322,
		type: 'INT16U',
		writable: false,
		mandatory: false
	}, {

		label: 546,
		nameFun: 'AverageRmsUnderVoltageCounterPhaseB',
		nameObj: 'averageRmsUnderVoltageCounterPhaseB',
		clusterId: 2820,
		name: 'average rms under voltage counter phase b',
		server: true,
		attributeId: 2323,
		type: 'INT16U',
		writable: false,
		mandatory: false
	}, {

		label: 547,
		nameFun: 'RmsExtremeOverVoltagePeriodPhaseB',
		nameObj: 'rmsExtremeOverVoltagePeriodPhaseB',
		clusterId: 2820,
		name: 'rms extreme over voltage period phase b',
		server: true,
		attributeId: 2324,
		type: 'INT16U',
		writable: false,
		mandatory: false
	}, {

		label: 548,
		nameFun: 'RmsExtremeUnderVoltagePeriodPhaseB',
		nameObj: 'rmsExtremeUnderVoltagePeriodPhaseB',
		clusterId: 2820,
		name: 'rms extreme under voltage period phase b',
		server: true,
		attributeId: 2325,
		type: 'INT16U',
		writable: false,
		mandatory: false
	}, {

		label: 549,
		nameFun: 'RmsVoltageSagPeriodPhaseB',
		nameObj: 'rmsVoltageSagPeriodPhaseB',
		clusterId: 2820,
		name: 'rms voltage sag period phase b',
		server: true,
		attributeId: 2326,
		type: 'INT16U',
		writable: false,
		mandatory: false
	}, {

		label: 550,
		nameFun: 'RmsVoltageSwellPeriodPhaseB',
		nameObj: 'rmsVoltageSwellPeriodPhaseB',
		clusterId: 2820,
		name: 'rms voltage swell period phase b',
		server: true,
		attributeId: 2327,
		type: 'INT16U',
		writable: false,
		mandatory: false
	}, {

		label: 551,
		nameFun: 'LineCurrentPhaseC',
		nameObj: 'lineCurrentPhaseC',
		clusterId: 2820,
		name: 'line current phase c',
		server: true,
		attributeId: 2561,
		type: 'INT16U',
		writable: false,
		mandatory: false
	}, {

		label: 552,
		nameFun: 'ActiveCurrentPhaseC',
		nameObj: 'activeCurrentPhaseC',
		clusterId: 2820,
		name: 'active current phase c',
		server: true,
		attributeId: 2562,
		type: 'INT16S',
		writable: false,
		mandatory: false
	}, {

		label: 553,
		nameFun: 'ReactiveCurrentPhaseC',
		nameObj: 'reactiveCurrentPhaseC',
		clusterId: 2820,
		name: 'reactive current phase c',
		server: true,
		attributeId: 2563,
		type: 'INT16S',
		writable: false,
		mandatory: false
	}, {

		label: 554,
		nameFun: 'RmsVoltagePhaseC',
		nameObj: 'rmsVoltagePhaseC',
		clusterId: 2820,
		name: 'rms voltage phase c',
		server: true,
		attributeId: 2565,
		type: 'INT16U',
		writable: false,
		mandatory: false
	}, {

		label: 555,
		nameFun: 'RmsVoltageMinPhaseC',
		nameObj: 'rmsVoltageMinPhaseC',
		clusterId: 2820,
		name: 'rms voltage min phase c',
		server: true,
		attributeId: 2566,
		type: 'INT16U',
		writable: false,
		mandatory: false
	}, {

		label: 556,
		nameFun: 'RmsVoltageMaxPhaseC',
		nameObj: 'rmsVoltageMaxPhaseC',
		clusterId: 2820,
		name: 'rms voltage max phase c',
		server: true,
		attributeId: 2567,
		type: 'INT16U',
		writable: false,
		mandatory: false
	}, {

		label: 557,
		nameFun: 'RmsCurrentPhaseB',
		nameObj: 'rmsCurrentPhaseB',
		clusterId: 2820,
		name: 'rms current phase b',
		server: true,
		attributeId: 2568,
		type: 'INT16U',
		writable: false,
		mandatory: false
	}, {

		label: 558,
		nameFun: 'RmsCurrentMinPhaseC',
		nameObj: 'rmsCurrentMinPhaseC',
		clusterId: 2820,
		name: 'rms current min phase c',
		server: true,
		attributeId: 2569,
		type: 'INT16U',
		writable: false,
		mandatory: false
	}, {

		label: 559,
		nameFun: 'RmsCurrentMaxPhaseC',
		nameObj: 'rmsCurrentMaxPhaseC',
		clusterId: 2820,
		name: 'rms current max phase c',
		server: true,
		attributeId: 2570,
		type: 'INT16U',
		writable: false,
		mandatory: false
	}, {

		label: 560,
		nameFun: 'ActivePowerPhaseC',
		nameObj: 'activePowerPhaseC',
		clusterId: 2820,
		name: 'active power phase c',
		server: true,
		attributeId: 2571,
		type: 'INT16S',
		writable: false,
		mandatory: false
	}, {

		label: 561,
		nameFun: 'ActivePowerMinPhaseC',
		nameObj: 'activePowerMinPhaseC',
		clusterId: 2820,
		name: 'active power min phase c',
		server: true,
		attributeId: 2572,
		type: 'INT16S',
		writable: false,
		mandatory: false
	}, {

		label: 562,
		nameFun: 'ActivePowerMaxPhaseC',
		nameObj: 'activePowerMaxPhaseC',
		clusterId: 2820,
		name: 'active power max phase c',
		server: true,
		attributeId: 2573,
		type: 'INT16S',
		writable: false,
		mandatory: false
	}, {

		label: 563,
		nameFun: 'ReactivePowerPhaseC',
		nameObj: 'reactivePowerPhaseC',
		clusterId: 2820,
		name: 'reactive power phase c',
		server: true,
		attributeId: 2574,
		type: 'INT16S',
		writable: false,
		mandatory: false
	}, {

		label: 564,
		nameFun: 'ApparentPowerPhaseC',
		nameObj: 'apparentPowerPhaseC',
		clusterId: 2820,
		name: 'apparent power phase c',
		server: true,
		attributeId: 2575,
		type: 'INT16U',
		writable: false,
		mandatory: false
	}, {

		label: 565,
		nameFun: 'PowerFactorPhaseC',
		nameObj: 'powerFactorPhaseC',
		clusterId: 2820,
		name: 'power factor phase c',
		server: true,
		attributeId: 2576,
		type: 'INT8S',
		writable: false,
		mandatory: false
	}, {

		label: 566,
		nameFun: 'AverageRmsVoltageMeasurementPeriodPhaseC',
		nameObj: 'averageRmsVoltageMeasurementPeriodPhaseC',
		clusterId: 2820,
		name: 'average rms voltage measurement period phase c',
		server: true,
		attributeId: 2577,
		type: 'INT16U',
		writable: false,
		mandatory: false
	}, {

		label: 567,
		nameFun: 'AverageRmsOverVoltageCounterPhaseC',
		nameObj: 'averageRmsOverVoltageCounterPhaseC',
		clusterId: 2820,
		name: 'average rms over voltage counter phase c',
		server: true,
		attributeId: 2578,
		type: 'INT16U',
		writable: false,
		mandatory: false
	}, {

		label: 568,
		nameFun: 'AverageRmsUnderVoltageCounterPhaseC',
		nameObj: 'averageRmsUnderVoltageCounterPhaseC',
		clusterId: 2820,
		name: 'average rms under voltage counter phase c',
		server: true,
		attributeId: 2579,
		type: 'INT16U',
		writable: false,
		mandatory: false
	}, {

		label: 569,
		nameFun: 'RmsExtremeOverVoltagePeriodPhaseC',
		nameObj: 'rmsExtremeOverVoltagePeriodPhaseC',
		clusterId: 2820,
		name: 'rms extreme over voltage period phase c',
		server: true,
		attributeId: 2580,
		type: 'INT16U',
		writable: false,
		mandatory: false
	}, {

		label: 570,
		nameFun: 'RmsExtremeUnderVoltagePeriodPhaseC',
		nameObj: 'rmsExtremeUnderVoltagePeriodPhaseC',
		clusterId: 2820,
		name: 'rms extreme under voltage period phase c',
		server: true,
		attributeId: 2581,
		type: 'INT16U',
		writable: false,
		mandatory: false
	}, {

		label: 571,
		nameFun: 'RmsVoltageSagPeriodPhaseC',
		nameObj: 'rmsVoltageSagPeriodPhaseC',
		clusterId: 2820,
		name: 'rms voltage sag period phase c',
		server: true,
		attributeId: 2582,
		type: 'INT16U',
		writable: false,
		mandatory: false
	}, {

		label: 572,
		nameFun: 'RmsVoltageSwellPeriodPhaseC',
		nameObj: 'rmsVoltageSwellPeriodPhaseC',
		clusterId: 2820,
		name: 'rms voltage swell period phase c',
		server: true,
		attributeId: 2583,
		type: 'INT16U',
		writable: false,
		mandatory: false
	}, {

		label: 573,
		nameFun: 'NumberOfResets',
		nameObj: 'numberOfResets',
		clusterId: 2821,
		name: 'number of resets',
		server: true,
		attributeId: 0,
		type: 'INT16U',
		writable: false,
		mandatory: false
	}, {

		label: 574,
		nameFun: 'PersistentMemoryWrites',
		nameObj: 'persistentMemoryWrites',
		clusterId: 2821,
		name: 'persistent memory writes',
		server: true,
		attributeId: 1,
		type: 'INT16U',
		writable: false,
		mandatory: false
	}, {

		label: 575,
		nameFun: 'MacRxBroadcast',
		nameObj: 'macRxBroadcast',
		clusterId: 2821,
		name: 'mac rx broadcast',
		server: true,
		attributeId: 256,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 576,
		nameFun: 'MacTxBroadcast',
		nameObj: 'macTxBroadcast',
		clusterId: 2821,
		name: 'mac tx broadcast',
		server: true,
		attributeId: 257,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 577,
		nameFun: 'MacRxUnicast',
		nameObj: 'macRxUnicast',
		clusterId: 2821,
		name: 'mac rx unicast',
		server: true,
		attributeId: 258,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 578,
		nameFun: 'MacTxUnicast',
		nameObj: 'macTxUnicast',
		clusterId: 2821,
		name: 'mac tx unicast',
		server: true,
		attributeId: 259,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 579,
		nameFun: 'MacTxUnicastRetry',
		nameObj: 'macTxUnicastRetry',
		clusterId: 2821,
		name: 'mac tx unicast retry',
		server: true,
		attributeId: 260,
		type: 'INT16U',
		writable: false,
		mandatory: false
	}, {

		label: 580,
		nameFun: 'MacTxUnicastFail',
		nameObj: 'macTxUnicastFail',
		clusterId: 2821,
		name: 'mac tx unicast fail',
		server: true,
		attributeId: 261,
		type: 'INT16U',
		writable: false,
		mandatory: false
	}, {

		label: 581,
		nameFun: 'ApsRxBroadcast',
		nameObj: 'apsRxBroadcast',
		clusterId: 2821,
		name: 'aps rx broadcast',
		server: true,
		attributeId: 262,
		type: 'INT16U',
		writable: false,
		mandatory: false
	}, {

		label: 582,
		nameFun: 'ApsTxBroadcast',
		nameObj: 'apsTxBroadcast',
		clusterId: 2821,
		name: 'aps tx broadcast',
		server: true,
		attributeId: 263,
		type: 'INT16U',
		writable: false,
		mandatory: false
	}, {

		label: 583,
		nameFun: 'ApsRxUnicast',
		nameObj: 'apsRxUnicast',
		clusterId: 2821,
		name: 'aps rx unicast',
		server: true,
		attributeId: 264,
		type: 'INT16U',
		writable: false,
		mandatory: false
	}, {

		label: 584,
		nameFun: 'ApsUnicastSuccess',
		nameObj: 'apsUnicastSuccess',
		clusterId: 2821,
		name: 'aps unicast success',
		server: true,
		attributeId: 265,
		type: 'INT16U',
		writable: false,
		mandatory: false
	}, {

		label: 585,
		nameFun: 'ApsTxUnicastRetries',
		nameObj: 'apsTxUnicastRetries',
		clusterId: 2821,
		name: 'aps tx unicast retries',
		server: true,
		attributeId: 266,
		type: 'INT16U',
		writable: false,
		mandatory: false
	}, {

		label: 586,
		nameFun: 'ApsTxUnicastFailures',
		nameObj: 'apsTxUnicastFailures',
		clusterId: 2821,
		name: 'aps tx unicast failures',
		server: true,
		attributeId: 267,
		type: 'INT16U',
		writable: false,
		mandatory: false
	}, {

		label: 587,
		nameFun: 'RouteDiscoveryInitiated',
		nameObj: 'routeDiscoveryInitiated',
		clusterId: 2821,
		name: 'route discovery initiated',
		server: true,
		attributeId: 268,
		type: 'INT16U',
		writable: false,
		mandatory: false
	}, {

		label: 588,
		nameFun: 'NeighborAdded',
		nameObj: 'neighborAdded',
		clusterId: 2821,
		name: 'neighbor added',
		server: true,
		attributeId: 269,
		type: 'INT16U',
		writable: false,
		mandatory: false
	}, {

		label: 589,
		nameFun: 'NeighborMoved',
		nameObj: 'neighborMoved',
		clusterId: 2821,
		name: 'neighbor moved',
		server: true,
		attributeId: 270,
		type: 'INT16U',
		writable: false,
		mandatory: false
	}, {

		label: 590,
		nameFun: 'NeighborStale',
		nameObj: 'neighborStale',
		clusterId: 2821,
		name: 'neighbor stale',
		server: true,
		attributeId: 271,
		type: 'INT16U',
		writable: false,
		mandatory: false
	}, {

		label: 591,
		nameFun: 'JoinIndication',
		nameObj: 'joinIndication',
		clusterId: 2821,
		name: 'join indication',
		server: true,
		attributeId: 272,
		type: 'INT16U',
		writable: false,
		mandatory: false
	}, {

		label: 592,
		nameFun: 'ChildMoved',
		nameObj: 'childMoved',
		clusterId: 2821,
		name: 'child moved',
		server: true,
		attributeId: 273,
		type: 'INT16U',
		writable: false,
		mandatory: false
	}, {

		label: 593,
		nameFun: 'NetworkFrameControlFailure',
		nameObj: 'networkFrameControlFailure',
		clusterId: 2821,
		name: 'network frame control failure',
		server: true,
		attributeId: 274,
		type: 'INT16U',
		writable: false,
		mandatory: false
	}, {

		label: 594,
		nameFun: 'ApsFrameControlFailure',
		nameObj: 'apsFrameControlFailure',
		clusterId: 2821,
		name: 'aps frame control failure',
		server: true,
		attributeId: 275,
		type: 'INT16U',
		writable: false,
		mandatory: false
	}, {

		label: 595,
		nameFun: 'ApsUnauthorizedKey',
		nameObj: 'apsUnauthorizedKey',
		clusterId: 2821,
		name: 'aps unauthorized key',
		server: true,
		attributeId: 276,
		type: 'INT16U',
		writable: false,
		mandatory: false
	}, {

		label: 596,
		nameFun: 'NetworkDecryptionFailure',
		nameObj: 'networkDecryptionFailure',
		clusterId: 2821,
		name: 'network decryption failure',
		server: true,
		attributeId: 277,
		type: 'INT16U',
		writable: false,
		mandatory: false
	}, {

		label: 597,
		nameFun: 'ApsDecryptionFailure',
		nameObj: 'apsDecryptionFailure',
		clusterId: 2821,
		name: 'aps decryption failure',
		server: true,
		attributeId: 278,
		type: 'INT16U',
		writable: false,
		mandatory: false
	}, {

		label: 598,
		nameFun: 'PacketBufferAllocationFailures',
		nameObj: 'packetBufferAllocationFailures',
		clusterId: 2821,
		name: 'packet buffer allocation failures',
		server: true,
		attributeId: 279,
		type: 'INT16U',
		writable: false,
		mandatory: false
	}, {

		label: 599,
		nameFun: 'RelayedUnicasts',
		nameObj: 'relayedUnicasts',
		clusterId: 2821,
		name: 'relayed unicasts',
		server: true,
		attributeId: 280,
		type: 'INT16U',
		writable: false,
		mandatory: false
	}, {

		label: 600,
		nameFun: 'PhyToMacQueueLimitReached',
		nameObj: 'phyToMacQueueLimitReached',
		clusterId: 2821,
		name: 'phy to mac queue limit reached',
		server: true,
		attributeId: 281,
		type: 'INT16U',
		writable: false,
		mandatory: false
	}, {

		label: 601,
		nameFun: 'PacketValidateDropCount',
		nameObj: 'packetValidateDropCount',
		clusterId: 2821,
		name: 'packet validate drop count',
		server: true,
		attributeId: 282,
		type: 'INT16U',
		writable: false,
		mandatory: false
	}, {

		label: 602,
		nameFun: 'AverageMacRetryPerApsMessageSent',
		nameObj: 'averageMacRetryPerApsMessageSent',
		clusterId: 2821,
		name: 'average mac retry per aps message sent',
		server: true,
		attributeId: 283,
		type: 'INT16U',
		writable: false,
		mandatory: false
	}, {

		label: 603,
		nameFun: 'LastMessageLqi',
		nameObj: 'lastMessageLqi',
		clusterId: 2821,
		name: 'last message lqi',
		server: true,
		attributeId: 284,
		type: 'INT8U',
		writable: false,
		mandatory: false
	}, {

		label: 604,
		nameFun: 'LastMessageRssi',
		nameObj: 'lastMessageRssi',
		clusterId: 2821,
		name: 'last message rssi',
		server: true,
		attributeId: 285,
		type: 'INT8S',
		writable: false,
		mandatory: false
	}, {

		label: 605,
		nameFun: 'UtilityEnrollmentGroup',
		nameObj: 'utilityEnrollmentGroup',
		clusterId: 1793,
		name: 'utility enrollment group',
		server: false,
		attributeId: 0,
		type: 'INT8U',
		writable: true,
		mandatory: true
	}, {

		label: 606,
		nameFun: 'StartRandomizeMinutes',
		nameObj: 'startRandomizeMinutes',
		clusterId: 1793,
		name: 'start randomize minutes',
		server: false,
		attributeId: 1,
		type: 'INT8U',
		writable: true,
		mandatory: true
	}, {

		label: 607,
		nameFun: 'StopRandomizeMinutes',
		nameObj: 'stopRandomizeMinutes',
		clusterId: 1793,
		name: 'stop randomize minutes',
		server: false,
		attributeId: 2,
		type: 'INT8U',
		writable: true,
		mandatory: true
	}, {

		label: 608,
		nameFun: 'DeviceClassValue',
		nameObj: 'deviceClassValue',
		clusterId: 1793,
		name: 'device class value',
		server: false,
		attributeId: 3,
		type: 'INT16U',
		writable: true,
		mandatory: true
	}, {

		label: 609,
		nameFun: 'CurrentSummationDelivered',
		nameObj: 'currentSummationDelivered',
		clusterId: 1794,
		name: 'current summation delivered',
		server: true,
		attributeId: 0,
		type: 'INT48U',
		writable: false,
		mandatory: true
	}, {

		label: 610,
		nameFun: 'CurrentSummationReceived',
		nameObj: 'currentSummationReceived',
		clusterId: 1794,
		name: 'current summation received',
		server: true,
		attributeId: 1,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 611,
		nameFun: 'CurrentMaxDemandDelivered',
		nameObj: 'currentMaxDemandDelivered',
		clusterId: 1794,
		name: 'current max demand delivered',
		server: true,
		attributeId: 2,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 612,
		nameFun: 'CurrentMaxDemandReceived',
		nameObj: 'currentMaxDemandReceived',
		clusterId: 1794,
		name: 'current max demand received',
		server: true,
		attributeId: 3,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 613,
		nameFun: 'DftSummation',
		nameObj: 'dftSummation',
		clusterId: 1794,
		name: 'dft summation',
		server: true,
		attributeId: 4,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 614,
		nameFun: 'DailyFreezeTime',
		nameObj: 'dailyFreezeTime',
		clusterId: 1794,
		name: 'daily freeze time',
		server: true,
		attributeId: 5,
		type: 'INT16U',
		writable: false,
		mandatory: false
	}, {

		label: 615,
		nameFun: 'PowerFactor',
		nameObj: 'powerFactor',
		clusterId: 1794,
		name: 'power factor',
		server: true,
		attributeId: 6,
		type: 'INT8S',
		writable: false,
		mandatory: false
	}, {

		label: 616,
		nameFun: 'ReadingSnapshotTime',
		nameObj: 'readingSnapshotTime',
		clusterId: 1794,
		name: 'reading snapshot time',
		server: true,
		attributeId: 7,
		type: 'UTC_TIME',
		writable: false,
		mandatory: false
	}, {

		label: 617,
		nameFun: 'CurrentMaxDemandDeliveredTime',
		nameObj: 'currentMaxDemandDeliveredTime',
		clusterId: 1794,
		name: 'current max demand delivered time',
		server: true,
		attributeId: 8,
		type: 'UTC_TIME',
		writable: false,
		mandatory: false
	}, {

		label: 618,
		nameFun: 'CurrentMaxDemandReceivedTime',
		nameObj: 'currentMaxDemandReceivedTime',
		clusterId: 1794,
		name: 'current max demand received time',
		server: true,
		attributeId: 9,
		type: 'UTC_TIME',
		writable: false,
		mandatory: false
	}, {

		label: 619,
		nameFun: 'DefaultupdatePeriod',
		nameObj: 'defaultupdatePeriod',
		clusterId: 1794,
		name: 'defaultupdate period',
		server: true,
		attributeId: 10,
		type: 'INT8U',
		writable: false,
		mandatory: false
	}, {

		label: 620,
		nameFun: 'FastPollUpdatePeriod',
		nameObj: 'fastPollUpdatePeriod',
		clusterId: 1794,
		name: 'fast poll update period',
		server: true,
		attributeId: 11,
		type: 'INT8U',
		writable: false,
		mandatory: false
	}, {

		label: 621,
		nameFun: 'CurrentBlockPeriodConsumptionDelivered',
		nameObj: 'currentBlockPeriodConsumptionDelivered',
		clusterId: 1794,
		name: 'current block period consumption delivered',
		server: true,
		attributeId: 12,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 622,
		nameFun: 'DailyConsumptionTarget',
		nameObj: 'dailyConsumptionTarget',
		clusterId: 1794,
		name: 'daily consumption target',
		server: true,
		attributeId: 13,
		type: 'INT24U',
		writable: false,
		mandatory: false
	}, {

		label: 623,
		nameFun: 'CurrentBlock',
		nameObj: 'currentBlock',
		clusterId: 1794,
		name: 'current block',
		server: true,
		attributeId: 14,
		type: 'ENUM8',
		writable: false,
		mandatory: false
	}, {

		label: 624,
		nameFun: 'ProfileIntervalPeriod',
		nameObj: 'profileIntervalPeriod',
		clusterId: 1794,
		name: 'profile interval period',
		server: true,
		attributeId: 15,
		type: 'ENUM8',
		writable: false,
		mandatory: false
	}, {

		label: 625,
		nameFun: 'IntervalReadReportingPeriod',
		nameObj: 'intervalReadReportingPeriod',
		clusterId: 1794,
		name: 'interval read reporting period',
		server: true,
		attributeId: 16,
		type: 'INT16U',
		writable: false,
		mandatory: false
	}, {

		label: 626,
		nameFun: 'PresetReadingTime',
		nameObj: 'presetReadingTime',
		clusterId: 1794,
		name: 'preset reading time',
		server: true,
		attributeId: 17,
		type: 'INT16U',
		writable: false,
		mandatory: false
	}, {

		label: 627,
		nameFun: 'VolumePerReport',
		nameObj: 'volumePerReport',
		clusterId: 1794,
		name: 'volume per report',
		server: true,
		attributeId: 18,
		type: 'INT16U',
		writable: false,
		mandatory: false
	}, {

		label: 628,
		nameFun: 'FlowRestriction',
		nameObj: 'flowRestriction',
		clusterId: 1794,
		name: 'flow restriction',
		server: true,
		attributeId: 19,
		type: 'INT8U',
		writable: false,
		mandatory: false
	}, {

		label: 629,
		nameFun: 'SupplyStatus',
		nameObj: 'supplyStatus',
		clusterId: 1794,
		name: 'supply status',
		server: true,
		attributeId: 20,
		type: 'BITMAP8',
		writable: false,
		mandatory: false
	}, {

		label: 630,
		nameFun: 'CurrentInletEnergyCarrierSummation',
		nameObj: 'currentInletEnergyCarrierSummation',
		clusterId: 1794,
		name: 'current inlet energy carrier summation',
		server: true,
		attributeId: 21,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 631,
		nameFun: 'CurrentOutletEnergyCarrierSummation',
		nameObj: 'currentOutletEnergyCarrierSummation',
		clusterId: 1794,
		name: 'current outlet energy carrier summation',
		server: true,
		attributeId: 22,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 632,
		nameFun: 'InletTemperature',
		nameObj: 'inletTemperature',
		clusterId: 1794,
		name: 'inlet temperature',
		server: true,
		attributeId: 23,
		type: 'INT16S',
		writable: false,
		mandatory: false
	}, {

		label: 633,
		nameFun: 'OutletTemperature',
		nameObj: 'outletTemperature',
		clusterId: 1794,
		name: 'outlet temperature',
		server: true,
		attributeId: 24,
		type: 'INT16S',
		writable: false,
		mandatory: false
	}, {

		label: 634,
		nameFun: 'ControlTemperature',
		nameObj: 'controlTemperature',
		clusterId: 1794,
		name: 'control temperature',
		server: true,
		attributeId: 25,
		type: 'INT16S',
		writable: false,
		mandatory: false
	}, {

		label: 635,
		nameFun: 'CurrentInletEnergyCarrierDemand',
		nameObj: 'currentInletEnergyCarrierDemand',
		clusterId: 1794,
		name: 'current inlet energy carrier demand',
		server: true,
		attributeId: 26,
		type: 'INT24S',
		writable: false,
		mandatory: false
	}, {

		label: 636,
		nameFun: 'CurrentOutletEnergyCarrierDemand',
		nameObj: 'currentOutletEnergyCarrierDemand',
		clusterId: 1794,
		name: 'current outlet energy carrier demand',
		server: true,
		attributeId: 27,
		type: 'INT24S',
		writable: false,
		mandatory: false
	}, {

		label: 637,
		nameFun: 'PreviousBlockPeriodConsumptionDelivered',
		nameObj: 'previousBlockPeriodConsumptionDelivered',
		clusterId: 1794,
		name: 'Previous Block Period Consumption Delivered',
		server: true,
		attributeId: 28,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 638,
		nameFun: 'ActiveRegisterTierDelivered',
		nameObj: 'activeRegisterTierDelivered',
		clusterId: 1794,
		name: 'active register tier delivered',
		server: true,
		attributeId: 32,
		type: 'ENUM8',
		writable: false,
		mandatory: false
	}, {

		label: 639,
		nameFun: 'ActiveRegisterTierReceived',
		nameObj: 'activeRegisterTierReceived',
		clusterId: 1794,
		name: 'active register tier received',
		server: true,
		attributeId: 33,
		type: 'ENUM8',
		writable: false,
		mandatory: false
	}, {

		label: 640,
		nameFun: 'LastBlockSwitchTime',
		nameObj: 'lastBlockSwitchTime',
		clusterId: 1794,
		name: 'last block switch time',
		server: true,
		attributeId: 34,
		type: 'UTC_TIME',
		writable: false,
		mandatory: false
	}, {

		label: 641,
		nameFun: 'CurrentTier1SummationDelivered',
		nameObj: 'currentTier1SummationDelivered',
		clusterId: 1794,
		name: 'current tier 1 summation delivered',
		server: true,
		attributeId: 256,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 642,
		nameFun: 'CurrentTier1SummationReceived',
		nameObj: 'currentTier1SummationReceived',
		clusterId: 1794,
		name: 'current tier 1 summation received',
		server: true,
		attributeId: 257,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 643,
		nameFun: 'CurrentTier2SummationDelivered',
		nameObj: 'currentTier2SummationDelivered',
		clusterId: 1794,
		name: 'current tier 2 summation delivered',
		server: true,
		attributeId: 258,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 644,
		nameFun: 'CurrentTier2SummationReceived',
		nameObj: 'currentTier2SummationReceived',
		clusterId: 1794,
		name: 'current tier 2 summation received',
		server: true,
		attributeId: 259,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 645,
		nameFun: 'CurrentTier3SummationDelivered',
		nameObj: 'currentTier3SummationDelivered',
		clusterId: 1794,
		name: 'current tier 3 summation delivered',
		server: true,
		attributeId: 260,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 646,
		nameFun: 'CurrentTier3SummationReceived',
		nameObj: 'currentTier3SummationReceived',
		clusterId: 1794,
		name: 'current tier 3 summation received',
		server: true,
		attributeId: 261,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 647,
		nameFun: 'CurrentTier4SummationDelivered',
		nameObj: 'currentTier4SummationDelivered',
		clusterId: 1794,
		name: 'current tier 4 summation delivered',
		server: true,
		attributeId: 262,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 648,
		nameFun: 'CurrentTier4SummationReceived',
		nameObj: 'currentTier4SummationReceived',
		clusterId: 1794,
		name: 'current tier 4 summation received',
		server: true,
		attributeId: 263,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 649,
		nameFun: 'CurrentTier5SummationDelivered',
		nameObj: 'currentTier5SummationDelivered',
		clusterId: 1794,
		name: 'current tier 5 summation delivered',
		server: true,
		attributeId: 264,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 650,
		nameFun: 'CurrentTier5SummationReceived',
		nameObj: 'currentTier5SummationReceived',
		clusterId: 1794,
		name: 'current tier 5 summation received',
		server: true,
		attributeId: 265,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 651,
		nameFun: 'CurrentTier6SummationDelivered',
		nameObj: 'currentTier6SummationDelivered',
		clusterId: 1794,
		name: 'current tier 6 summation delivered',
		server: true,
		attributeId: 266,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 652,
		nameFun: 'CurrentTier6SummationReceived',
		nameObj: 'currentTier6SummationReceived',
		clusterId: 1794,
		name: 'current tier 6 summation received',
		server: true,
		attributeId: 267,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 653,
		nameFun: 'CurrentTier7SummationDelivered',
		nameObj: 'currentTier7SummationDelivered',
		clusterId: 1794,
		name: 'current tier 7 summation delivered',
		server: true,
		attributeId: 268,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 654,
		nameFun: 'CurrentTier7SummationReceived',
		nameObj: 'currentTier7SummationReceived',
		clusterId: 1794,
		name: 'current tier 7 summation received',
		server: true,
		attributeId: 269,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 655,
		nameFun: 'CurrentTier8SummationDelivered',
		nameObj: 'currentTier8SummationDelivered',
		clusterId: 1794,
		name: 'current tier 8 summation delivered',
		server: true,
		attributeId: 270,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 656,
		nameFun: 'CurrentTier8SummationReceived',
		nameObj: 'currentTier8SummationReceived',
		clusterId: 1794,
		name: 'current tier 8 summation received',
		server: true,
		attributeId: 271,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 657,
		nameFun: 'CurrentTier9SummationDelivered',
		nameObj: 'currentTier9SummationDelivered',
		clusterId: 1794,
		name: 'current tier 9 summation delivered',
		server: true,
		attributeId: 272,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 658,
		nameFun: 'CurrentTier9SummationReceived',
		nameObj: 'currentTier9SummationReceived',
		clusterId: 1794,
		name: 'current tier 9 summation received',
		server: true,
		attributeId: 273,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 659,
		nameFun: 'CurrentTier10SummationDelivered',
		nameObj: 'currentTier10SummationDelivered',
		clusterId: 1794,
		name: 'current tier 10 summation delivered',
		server: true,
		attributeId: 274,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 660,
		nameFun: 'CurrentTier10SummationReceived',
		nameObj: 'currentTier10SummationReceived',
		clusterId: 1794,
		name: 'current tier 10 summation received',
		server: true,
		attributeId: 275,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 661,
		nameFun: 'CurrentTier11SummationDelivered',
		nameObj: 'currentTier11SummationDelivered',
		clusterId: 1794,
		name: 'current tier 11 summation delivered',
		server: true,
		attributeId: 276,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 662,
		nameFun: 'CurrentTier11SummationReceived',
		nameObj: 'currentTier11SummationReceived',
		clusterId: 1794,
		name: 'current tier 11 summation received',
		server: true,
		attributeId: 277,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 663,
		nameFun: 'CurrentTier12SummationDelivered',
		nameObj: 'currentTier12SummationDelivered',
		clusterId: 1794,
		name: 'current tier 12 summation delivered',
		server: true,
		attributeId: 278,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 664,
		nameFun: 'CurrentTier12SummationReceived',
		nameObj: 'currentTier12SummationReceived',
		clusterId: 1794,
		name: 'current tier 12 summation received',
		server: true,
		attributeId: 279,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 665,
		nameFun: 'CurrentTier13SummationDelivered',
		nameObj: 'currentTier13SummationDelivered',
		clusterId: 1794,
		name: 'current tier 13 summation delivered',
		server: true,
		attributeId: 280,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 666,
		nameFun: 'CurrentTier13SummationReceived',
		nameObj: 'currentTier13SummationReceived',
		clusterId: 1794,
		name: 'current tier 13 summation received',
		server: true,
		attributeId: 281,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 667,
		nameFun: 'CurrentTier14SummationDelivered',
		nameObj: 'currentTier14SummationDelivered',
		clusterId: 1794,
		name: 'current tier 14 summation delivered',
		server: true,
		attributeId: 282,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 668,
		nameFun: 'CurrentTier14SummationReceived',
		nameObj: 'currentTier14SummationReceived',
		clusterId: 1794,
		name: 'current tier 14 summation received',
		server: true,
		attributeId: 283,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 669,
		nameFun: 'CurrentTier15SummationDelivered',
		nameObj: 'currentTier15SummationDelivered',
		clusterId: 1794,
		name: 'current tier 15 summation delivered',
		server: true,
		attributeId: 284,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 670,
		nameFun: 'CurrentTier15SummationReceived',
		nameObj: 'currentTier15SummationReceived',
		clusterId: 1794,
		name: 'current tier 15 summation received',
		server: true,
		attributeId: 285,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 671,
		nameFun: 'Status',
		nameObj: 'status',
		clusterId: 1794,
		name: 'status',
		server: true,
		attributeId: 512,
		type: 'BITMAP8',
		writable: false,
		mandatory: true
	}, {

		label: 672,
		nameFun: 'RemainingBatteryLife',
		nameObj: 'remainingBatteryLife',
		clusterId: 1794,
		name: 'remaining battery life',
		server: true,
		attributeId: 513,
		type: 'INT8U',
		writable: false,
		mandatory: false
	}, {

		label: 673,
		nameFun: 'HoursInOperation',
		nameObj: 'hoursInOperation',
		clusterId: 1794,
		name: 'hours in operation',
		server: true,
		attributeId: 514,
		type: 'INT24U',
		writable: false,
		mandatory: false
	}, {

		label: 674,
		nameFun: 'HoursInFault',
		nameObj: 'hoursInFault',
		clusterId: 1794,
		name: 'hours in fault',
		server: true,
		attributeId: 515,
		type: 'INT24U',
		writable: false,
		mandatory: false
	}, {

		label: 675,
		nameFun: 'UnitOfMeasure',
		nameObj: 'unitOfMeasure',
		clusterId: 1794,
		name: 'unit of measure',
		server: true,
		attributeId: 768,
		type: 'ENUM8',
		writable: false,
		mandatory: true
	}, {

		label: 676,
		nameFun: 'Multiplier',
		nameObj: 'multiplier',
		clusterId: 1794,
		name: 'multiplier',
		server: true,
		attributeId: 769,
		type: 'INT24U',
		writable: false,
		mandatory: false
	}, {

		label: 677,
		nameFun: 'Divisor',
		nameObj: 'divisor',
		clusterId: 1794,
		name: 'divisor',
		server: true,
		attributeId: 770,
		type: 'INT24U',
		writable: false,
		mandatory: false
	}, {

		label: 678,
		nameFun: 'SummationFormatting',
		nameObj: 'summationFormatting',
		clusterId: 1794,
		name: 'summation formatting',
		server: true,
		attributeId: 771,
		type: 'BITMAP8',
		writable: false,
		mandatory: true
	}, {

		label: 679,
		nameFun: 'DemandFormatting',
		nameObj: 'demandFormatting',
		clusterId: 1794,
		name: 'demand formatting',
		server: true,
		attributeId: 772,
		type: 'BITMAP8',
		writable: false,
		mandatory: false
	}, {

		label: 680,
		nameFun: 'HistoricalConsumptionFormatting',
		nameObj: 'historicalConsumptionFormatting',
		clusterId: 1794,
		name: 'historical consumption formatting',
		server: true,
		attributeId: 773,
		type: 'BITMAP8',
		writable: false,
		mandatory: false
	}, {

		label: 681,
		nameFun: 'MeteringDeviceType',
		nameObj: 'meteringDeviceType',
		clusterId: 1794,
		name: 'metering device type',
		server: true,
		attributeId: 774,
		type: 'BITMAP8',
		writable: false,
		mandatory: true
	}, {

		label: 682,
		nameFun: 'SiteId',
		nameObj: 'siteId',
		clusterId: 1794,
		name: 'site id',
		server: true,
		attributeId: 775,
		type: 'OCTET_STRING',
		writable: false,
		mandatory: false
	}, {

		label: 683,
		nameFun: 'MeterSerialNumber',
		nameObj: 'meterSerialNumber',
		clusterId: 1794,
		name: 'meter serial number',
		server: true,
		attributeId: 776,
		type: 'OCTET_STRING',
		writable: false,
		mandatory: false
	}, {

		label: 684,
		nameFun: 'EnergyCarrierUnitOfMeasure',
		nameObj: 'energyCarrierUnitOfMeasure',
		clusterId: 1794,
		name: 'energy carrier unit of measure',
		server: true,
		attributeId: 777,
		type: 'ENUM8',
		writable: false,
		mandatory: false
	}, {

		label: 685,
		nameFun: 'EnergyCarrierSummationFormatting',
		nameObj: 'energyCarrierSummationFormatting',
		clusterId: 1794,
		name: 'energy carrier summation formatting',
		server: true,
		attributeId: 778,
		type: 'BITMAP8',
		writable: false,
		mandatory: false
	}, {

		label: 686,
		nameFun: 'EnergyCarrierDemandFormatting',
		nameObj: 'energyCarrierDemandFormatting',
		clusterId: 1794,
		name: 'energy carrier demand formatting',
		server: true,
		attributeId: 779,
		type: 'BITMAP8',
		writable: false,
		mandatory: false
	}, {

		label: 687,
		nameFun: 'TemperatureUnitOfMeasure',
		nameObj: 'temperatureUnitOfMeasure',
		clusterId: 1794,
		name: 'temperature unit of measure',
		server: true,
		attributeId: 780,
		type: 'ENUM8',
		writable: false,
		mandatory: false
	}, {

		label: 688,
		nameFun: 'TemperatureFormatting',
		nameObj: 'temperatureFormatting',
		clusterId: 1794,
		name: 'temperature formatting',
		server: true,
		attributeId: 781,
		type: 'BITMAP8',
		writable: false,
		mandatory: false
	}, {

		label: 689,
		nameFun: 'InstantaneousDemand',
		nameObj: 'instantaneousDemand',
		clusterId: 1794,
		name: 'instantaneous demand',
		server: true,
		attributeId: 1024,
		type: 'INT24S',
		writable: false,
		mandatory: false
	}, {

		label: 690,
		nameFun: 'CurrentDayConsumptionDelivered',
		nameObj: 'currentDayConsumptionDelivered',
		clusterId: 1794,
		name: 'current day consumption delivered',
		server: true,
		attributeId: 1025,
		type: 'INT24U',
		writable: false,
		mandatory: false
	}, {

		label: 691,
		nameFun: 'CurrentDayConsumptionReceived',
		nameObj: 'currentDayConsumptionReceived',
		clusterId: 1794,
		name: 'current day consumption received',
		server: true,
		attributeId: 1026,
		type: 'INT24U',
		writable: false,
		mandatory: false
	}, {

		label: 692,
		nameFun: 'PreviousDayConsumptionDelivered',
		nameObj: 'previousDayConsumptionDelivered',
		clusterId: 1794,
		name: 'previous day consumption delivered',
		server: true,
		attributeId: 1027,
		type: 'INT24U',
		writable: false,
		mandatory: false
	}, {

		label: 693,
		nameFun: 'PreviousDayConsumptionReceived',
		nameObj: 'previousDayConsumptionReceived',
		clusterId: 1794,
		name: 'previous day consumption received',
		server: true,
		attributeId: 1028,
		type: 'INT24U',
		writable: false,
		mandatory: false
	}, {

		label: 694,
		nameFun: 'CurrentPartialProfileIntervalStartTimeDelivered',
		nameObj: 'currentPartialProfileIntervalStartTimeDelivered',
		clusterId: 1794,
		name: 'current partial profile interval start time delivered',
		server: true,
		attributeId: 1029,
		type: 'UTC_TIME',
		writable: false,
		mandatory: false
	}, {

		label: 695,
		nameFun: 'CurrentPartialProfileIntervalStartTimeReceived',
		nameObj: 'currentPartialProfileIntervalStartTimeReceived',
		clusterId: 1794,
		name: 'current partial profile interval start time received',
		server: true,
		attributeId: 1030,
		type: 'UTC_TIME',
		writable: false,
		mandatory: false
	}, {

		label: 696,
		nameFun: 'CurrentPartialProfileIntervalValueDelivered',
		nameObj: 'currentPartialProfileIntervalValueDelivered',
		clusterId: 1794,
		name: 'current partial profile interval value delivered',
		server: true,
		attributeId: 1031,
		type: 'INT24U',
		writable: false,
		mandatory: false
	}, {

		label: 697,
		nameFun: 'CurrentPartialProfileIntervalValueReceived',
		nameObj: 'currentPartialProfileIntervalValueReceived',
		clusterId: 1794,
		name: 'current partial profile interval value received',
		server: true,
		attributeId: 1032,
		type: 'INT24U',
		writable: false,
		mandatory: false
	}, {

		label: 698,
		nameFun: 'CurrentDayMaxPressure',
		nameObj: 'currentDayMaxPressure',
		clusterId: 1794,
		name: 'current day max pressure',
		server: true,
		attributeId: 1033,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 699,
		nameFun: 'CurrentDayMinPressure',
		nameObj: 'currentDayMinPressure',
		clusterId: 1794,
		name: 'current day min pressure',
		server: true,
		attributeId: 1034,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 700,
		nameFun: 'PreviousDayMaxPressure',
		nameObj: 'previousDayMaxPressure',
		clusterId: 1794,
		name: 'previous day max pressure',
		server: true,
		attributeId: 1035,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 701,
		nameFun: 'PreviousDayMinPressure',
		nameObj: 'previousDayMinPressure',
		clusterId: 1794,
		name: 'previous day min pressure',
		server: true,
		attributeId: 1036,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 702,
		nameFun: 'CurrentDayMaxDemand',
		nameObj: 'currentDayMaxDemand',
		clusterId: 1794,
		name: 'current day max demand',
		server: true,
		attributeId: 1037,
		type: 'INT24S',
		writable: false,
		mandatory: false
	}, {

		label: 703,
		nameFun: 'PreviousDayMaxDemand',
		nameObj: 'previousDayMaxDemand',
		clusterId: 1794,
		name: 'previous day max demand',
		server: true,
		attributeId: 1038,
		type: 'INT24S',
		writable: false,
		mandatory: false
	}, {

		label: 704,
		nameFun: 'CurrentMonthMaxDemand',
		nameObj: 'currentMonthMaxDemand',
		clusterId: 1794,
		name: 'current month max demand',
		server: true,
		attributeId: 1039,
		type: 'INT24S',
		writable: false,
		mandatory: false
	}, {

		label: 705,
		nameFun: 'CurrentYearMaxDemand',
		nameObj: 'currentYearMaxDemand',
		clusterId: 1794,
		name: 'current year max demand',
		server: true,
		attributeId: 1040,
		type: 'INT24S',
		writable: false,
		mandatory: false
	}, {

		label: 706,
		nameFun: 'CurrentDayMaxEnergyCarrierDemand',
		nameObj: 'currentDayMaxEnergyCarrierDemand',
		clusterId: 1794,
		name: 'current day max energy carrier demand',
		server: true,
		attributeId: 1041,
		type: 'INT24S',
		writable: false,
		mandatory: false
	}, {

		label: 707,
		nameFun: 'PreviousDayMaxEnergyCarrierDemand',
		nameObj: 'previousDayMaxEnergyCarrierDemand',
		clusterId: 1794,
		name: 'previous day max energy carrier demand',
		server: true,
		attributeId: 1042,
		type: 'INT24S',
		writable: false,
		mandatory: false
	}, {

		label: 708,
		nameFun: 'CurrentMonthMaxEnergyCarrierDemand',
		nameObj: 'currentMonthMaxEnergyCarrierDemand',
		clusterId: 1794,
		name: 'current month max energy carrier demand',
		server: true,
		attributeId: 1043,
		type: 'INT24S',
		writable: false,
		mandatory: false
	}, {

		label: 709,
		nameFun: 'CurrentMonthMinEnergyCarrierDemand',
		nameObj: 'currentMonthMinEnergyCarrierDemand',
		clusterId: 1794,
		name: 'current month min energy carrier demand',
		server: true,
		attributeId: 1044,
		type: 'INT24S',
		writable: false,
		mandatory: false
	}, {

		label: 710,
		nameFun: 'CurrentYearMaxEnergyCarrierDemand',
		nameObj: 'currentYearMaxEnergyCarrierDemand',
		clusterId: 1794,
		name: 'current year max energy carrier demand',
		server: true,
		attributeId: 1045,
		type: 'INT24S',
		writable: false,
		mandatory: false
	}, {

		label: 711,
		nameFun: 'CurrentYearMinEnergyCarrierDemand',
		nameObj: 'currentYearMinEnergyCarrierDemand',
		clusterId: 1794,
		name: 'current year min energy carrier demand',
		server: true,
		attributeId: 1046,
		type: 'INT24S',
		writable: false,
		mandatory: false
	}, {

		label: 712,
		nameFun: 'MaxNumberOfPeriodsDelivered',
		nameObj: 'maxNumberOfPeriodsDelivered',
		clusterId: 1794,
		name: 'max number of periods delivered',
		server: true,
		attributeId: 1280,
		type: 'INT8U',
		writable: false,
		mandatory: false
	}, {

		label: 713,
		nameFun: 'CurrentDemandDelivered',
		nameObj: 'currentDemandDelivered',
		clusterId: 1794,
		name: 'current demand delivered',
		server: true,
		attributeId: 1536,
		type: 'INT24U',
		writable: false,
		mandatory: false
	}, {

		label: 714,
		nameFun: 'DemandLimit',
		nameObj: 'demandLimit',
		clusterId: 1794,
		name: 'demand limit',
		server: true,
		attributeId: 1537,
		type: 'INT24U',
		writable: false,
		mandatory: false
	}, {

		label: 715,
		nameFun: 'DemandIntegrationPeriod',
		nameObj: 'demandIntegrationPeriod',
		clusterId: 1794,
		name: 'demand integration period',
		server: true,
		attributeId: 1538,
		type: 'INT8U',
		writable: false,
		mandatory: false
	}, {

		label: 716,
		nameFun: 'NumberOfDemandSubintervals',
		nameObj: 'numberOfDemandSubintervals',
		clusterId: 1794,
		name: 'number of demand subintervals',
		server: true,
		attributeId: 1539,
		type: 'INT8U',
		writable: false,
		mandatory: false
	}, {

		label: 717,
		nameFun: 'CurrentNoTierBlock1SummationDelivered',
		nameObj: 'currentNoTierBlock1SummationDelivered',
		clusterId: 1794,
		name: 'current no tier block 1 summation delivered',
		server: true,
		attributeId: 1792,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 718,
		nameFun: 'CurrentNoTierBlock2SummationDelivered',
		nameObj: 'currentNoTierBlock2SummationDelivered',
		clusterId: 1794,
		name: 'current no tier block 2 summation delivered',
		server: true,
		attributeId: 1793,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 719,
		nameFun: 'CurrentNoTierBlock3SummationDelivered',
		nameObj: 'currentNoTierBlock3SummationDelivered',
		clusterId: 1794,
		name: 'current no tier block 3 summation delivered',
		server: true,
		attributeId: 1794,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 720,
		nameFun: 'CurrentNoTierBlock4SummationDelivered',
		nameObj: 'currentNoTierBlock4SummationDelivered',
		clusterId: 1794,
		name: 'current no tier block 4 summation delivered',
		server: true,
		attributeId: 1795,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 721,
		nameFun: 'CurrentNoTierBlock5SummationDelivered',
		nameObj: 'currentNoTierBlock5SummationDelivered',
		clusterId: 1794,
		name: 'current no tier block 5 summation delivered',
		server: true,
		attributeId: 1796,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 722,
		nameFun: 'CurrentNoTierBlock6SummationDelivered',
		nameObj: 'currentNoTierBlock6SummationDelivered',
		clusterId: 1794,
		name: 'current no tier block 6 summation delivered',
		server: true,
		attributeId: 1797,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 723,
		nameFun: 'CurrentNoTierBlock7SummationDelivered',
		nameObj: 'currentNoTierBlock7SummationDelivered',
		clusterId: 1794,
		name: 'current no tier block 7 summation delivered',
		server: true,
		attributeId: 1798,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 724,
		nameFun: 'CurrentNoTierBlock8SummationDelivered',
		nameObj: 'currentNoTierBlock8SummationDelivered',
		clusterId: 1794,
		name: 'current no tier block 8 summation delivered',
		server: true,
		attributeId: 1799,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 725,
		nameFun: 'CurrentNoTierBlock9SummationDelivered',
		nameObj: 'currentNoTierBlock9SummationDelivered',
		clusterId: 1794,
		name: 'current no tier block 9 summation delivered',
		server: true,
		attributeId: 1800,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 726,
		nameFun: 'CurrentNoTierBlock10SummationDelivered',
		nameObj: 'currentNoTierBlock10SummationDelivered',
		clusterId: 1794,
		name: 'current no tier block 10 summation delivered',
		server: true,
		attributeId: 1801,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 727,
		nameFun: 'CurrentNoTierBlock11SummationDelivered',
		nameObj: 'currentNoTierBlock11SummationDelivered',
		clusterId: 1794,
		name: 'current no tier block 11 summation delivered',
		server: true,
		attributeId: 1802,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 728,
		nameFun: 'CurrentNoTierBlock12SummationDelivered',
		nameObj: 'currentNoTierBlock12SummationDelivered',
		clusterId: 1794,
		name: 'current no tier block 12 summation delivered',
		server: true,
		attributeId: 1803,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 729,
		nameFun: 'CurrentNoTierBlock13SummationDelivered',
		nameObj: 'currentNoTierBlock13SummationDelivered',
		clusterId: 1794,
		name: 'current no tier block 13 summation delivered',
		server: true,
		attributeId: 1804,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 730,
		nameFun: 'CurrentNoTierBlock14SummationDelivered',
		nameObj: 'currentNoTierBlock14SummationDelivered',
		clusterId: 1794,
		name: 'current no tier block 14 summation delivered',
		server: true,
		attributeId: 1805,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 731,
		nameFun: 'CurrentNoTierBlock15SummationDelivered',
		nameObj: 'currentNoTierBlock15SummationDelivered',
		clusterId: 1794,
		name: 'current no tier block 15 summation delivered',
		server: true,
		attributeId: 1806,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 732,
		nameFun: 'CurrentNoTierBlock16SummationDelivered',
		nameObj: 'currentNoTierBlock16SummationDelivered',
		clusterId: 1794,
		name: 'current no tier block 16 summation delivered',
		server: true,
		attributeId: 1807,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 733,
		nameFun: 'CurrentTier1Block1SummationDelivered',
		nameObj: 'currentTier1Block1SummationDelivered',
		clusterId: 1794,
		name: 'current tier 1 block 1 summation delivered',
		server: true,
		attributeId: 1808,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 734,
		nameFun: 'CurrentTier1Block2SummationDelivered',
		nameObj: 'currentTier1Block2SummationDelivered',
		clusterId: 1794,
		name: 'current tier 1 block 2 summation delivered',
		server: true,
		attributeId: 1809,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 735,
		nameFun: 'CurrentTier1Block3SummationDelivered',
		nameObj: 'currentTier1Block3SummationDelivered',
		clusterId: 1794,
		name: 'current tier 1 block 3 summation delivered',
		server: true,
		attributeId: 1810,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 736,
		nameFun: 'CurrentTier1Block4SummationDelivered',
		nameObj: 'currentTier1Block4SummationDelivered',
		clusterId: 1794,
		name: 'current tier 1 block 4 summation delivered',
		server: true,
		attributeId: 1811,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 737,
		nameFun: 'CurrentTier1Block5SummationDelivered',
		nameObj: 'currentTier1Block5SummationDelivered',
		clusterId: 1794,
		name: 'current tier 1 block 5 summation delivered',
		server: true,
		attributeId: 1812,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 738,
		nameFun: 'CurrentTier1Block6SummationDelivered',
		nameObj: 'currentTier1Block6SummationDelivered',
		clusterId: 1794,
		name: 'current tier 1 block 6 summation delivered',
		server: true,
		attributeId: 1813,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 739,
		nameFun: 'CurrentTier1Block7SummationDelivered',
		nameObj: 'currentTier1Block7SummationDelivered',
		clusterId: 1794,
		name: 'current tier 1 block 7 summation delivered',
		server: true,
		attributeId: 1814,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 740,
		nameFun: 'CurrentTier1Block8SummationDelivered',
		nameObj: 'currentTier1Block8SummationDelivered',
		clusterId: 1794,
		name: 'current tier 1 block 8 summation delivered',
		server: true,
		attributeId: 1815,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 741,
		nameFun: 'CurrentTier1Block9SummationDelivered',
		nameObj: 'currentTier1Block9SummationDelivered',
		clusterId: 1794,
		name: 'current tier 1 block 9 summation delivered',
		server: true,
		attributeId: 1816,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 742,
		nameFun: 'CurrentTier1Block10SummationDelivered',
		nameObj: 'currentTier1Block10SummationDelivered',
		clusterId: 1794,
		name: 'current tier 1 block 10 summation delivered',
		server: true,
		attributeId: 1817,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 743,
		nameFun: 'CurrentTier1Block11SummationDelivered',
		nameObj: 'currentTier1Block11SummationDelivered',
		clusterId: 1794,
		name: 'current tier 1 block 11 summation delivered',
		server: true,
		attributeId: 1818,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 744,
		nameFun: 'CurrentTier1Block12SummationDelivered',
		nameObj: 'currentTier1Block12SummationDelivered',
		clusterId: 1794,
		name: 'current tier 1 block 12 summation delivered',
		server: true,
		attributeId: 1819,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 745,
		nameFun: 'CurrentTier1Block13SummationDelivered',
		nameObj: 'currentTier1Block13SummationDelivered',
		clusterId: 1794,
		name: 'current tier 1 block 13 summation delivered',
		server: true,
		attributeId: 1820,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 746,
		nameFun: 'CurrentTier1Block14SummationDelivered',
		nameObj: 'currentTier1Block14SummationDelivered',
		clusterId: 1794,
		name: 'current tier 1 block 14 summation delivered',
		server: true,
		attributeId: 1821,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 747,
		nameFun: 'CurrentTier1Block15SummationDelivered',
		nameObj: 'currentTier1Block15SummationDelivered',
		clusterId: 1794,
		name: 'current tier 1 block 15 summation delivered',
		server: true,
		attributeId: 1822,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 748,
		nameFun: 'CurrentTier1Block16SummationDelivered',
		nameObj: 'currentTier1Block16SummationDelivered',
		clusterId: 1794,
		name: 'current tier 1 block 16 summation delivered',
		server: true,
		attributeId: 1823,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 749,
		nameFun: 'CurrentTier2Block1SummationDelivered',
		nameObj: 'currentTier2Block1SummationDelivered',
		clusterId: 1794,
		name: 'current tier 2 block 1 summation delivered',
		server: true,
		attributeId: 1824,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 750,
		nameFun: 'CurrentTier2Block2SummationDelivered',
		nameObj: 'currentTier2Block2SummationDelivered',
		clusterId: 1794,
		name: 'current tier 2 block 2 summation delivered',
		server: true,
		attributeId: 1825,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 751,
		nameFun: 'CurrentTier2Block3SummationDelivered',
		nameObj: 'currentTier2Block3SummationDelivered',
		clusterId: 1794,
		name: 'current tier 2 block 3 summation delivered',
		server: true,
		attributeId: 1826,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 752,
		nameFun: 'CurrentTier2Block4SummationDelivered',
		nameObj: 'currentTier2Block4SummationDelivered',
		clusterId: 1794,
		name: 'current tier 2 block 4 summation delivered',
		server: true,
		attributeId: 1827,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 753,
		nameFun: 'CurrentTier2Block5SummationDelivered',
		nameObj: 'currentTier2Block5SummationDelivered',
		clusterId: 1794,
		name: 'current tier 2 block 5 summation delivered',
		server: true,
		attributeId: 1828,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 754,
		nameFun: 'CurrentTier2Block6SummationDelivered',
		nameObj: 'currentTier2Block6SummationDelivered',
		clusterId: 1794,
		name: 'current tier 2 block 6 summation delivered',
		server: true,
		attributeId: 1829,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 755,
		nameFun: 'CurrentTier2Block7SummationDelivered',
		nameObj: 'currentTier2Block7SummationDelivered',
		clusterId: 1794,
		name: 'current tier 2 block 7 summation delivered',
		server: true,
		attributeId: 1830,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 756,
		nameFun: 'CurrentTier2Block8SummationDelivered',
		nameObj: 'currentTier2Block8SummationDelivered',
		clusterId: 1794,
		name: 'current tier 2 block 8 summation delivered',
		server: true,
		attributeId: 1831,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 757,
		nameFun: 'CurrentTier2Block9SummationDelivered',
		nameObj: 'currentTier2Block9SummationDelivered',
		clusterId: 1794,
		name: 'current tier 2 block 9 summation delivered',
		server: true,
		attributeId: 1832,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 758,
		nameFun: 'CurrentTier2Block10SummationDelivered',
		nameObj: 'currentTier2Block10SummationDelivered',
		clusterId: 1794,
		name: 'current tier 2 block 10 summation delivered',
		server: true,
		attributeId: 1833,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 759,
		nameFun: 'CurrentTier2Block11SummationDelivered',
		nameObj: 'currentTier2Block11SummationDelivered',
		clusterId: 1794,
		name: 'current tier 2 block 11 summation delivered',
		server: true,
		attributeId: 1834,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 760,
		nameFun: 'CurrentTier2Block12SummationDelivered',
		nameObj: 'currentTier2Block12SummationDelivered',
		clusterId: 1794,
		name: 'current tier 2 block 12 summation delivered',
		server: true,
		attributeId: 1835,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 761,
		nameFun: 'CurrentTier2Block13SummationDelivered',
		nameObj: 'currentTier2Block13SummationDelivered',
		clusterId: 1794,
		name: 'current tier 2 block 13 summation delivered',
		server: true,
		attributeId: 1836,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 762,
		nameFun: 'CurrentTier2Block14SummationDelivered',
		nameObj: 'currentTier2Block14SummationDelivered',
		clusterId: 1794,
		name: 'current tier 2 block 14 summation delivered',
		server: true,
		attributeId: 1837,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 763,
		nameFun: 'CurrentTier2Block15SummationDelivered',
		nameObj: 'currentTier2Block15SummationDelivered',
		clusterId: 1794,
		name: 'current tier 2 block 15 summation delivered',
		server: true,
		attributeId: 1838,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 764,
		nameFun: 'CurrentTier2Block16SummationDelivered',
		nameObj: 'currentTier2Block16SummationDelivered',
		clusterId: 1794,
		name: 'current tier 2 block 16 summation delivered',
		server: true,
		attributeId: 1839,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 765,
		nameFun: 'CurrentTier3Block1SummationDelivered',
		nameObj: 'currentTier3Block1SummationDelivered',
		clusterId: 1794,
		name: 'current tier 3 block 1 summation delivered',
		server: true,
		attributeId: 1840,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 766,
		nameFun: 'CurrentTier3Block2SummationDelivered',
		nameObj: 'currentTier3Block2SummationDelivered',
		clusterId: 1794,
		name: 'current tier 3 block 2 summation delivered',
		server: true,
		attributeId: 1841,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 767,
		nameFun: 'CurrentTier3Block3SummationDelivered',
		nameObj: 'currentTier3Block3SummationDelivered',
		clusterId: 1794,
		name: 'current tier 3 block 3 summation delivered',
		server: true,
		attributeId: 1842,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 768,
		nameFun: 'CurrentTier3Block4SummationDelivered',
		nameObj: 'currentTier3Block4SummationDelivered',
		clusterId: 1794,
		name: 'current tier 3 block 4 summation delivered',
		server: true,
		attributeId: 1843,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 769,
		nameFun: 'CurrentTier3Block5SummationDelivered',
		nameObj: 'currentTier3Block5SummationDelivered',
		clusterId: 1794,
		name: 'current tier 3 block 5 summation delivered',
		server: true,
		attributeId: 1844,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 770,
		nameFun: 'CurrentTier3Block6SummationDelivered',
		nameObj: 'currentTier3Block6SummationDelivered',
		clusterId: 1794,
		name: 'current tier 3 block 6 summation delivered',
		server: true,
		attributeId: 1845,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 771,
		nameFun: 'CurrentTier3Block7SummationDelivered',
		nameObj: 'currentTier3Block7SummationDelivered',
		clusterId: 1794,
		name: 'current tier 3 block 7 summation delivered',
		server: true,
		attributeId: 1846,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 772,
		nameFun: 'CurrentTier3Block8SummationDelivered',
		nameObj: 'currentTier3Block8SummationDelivered',
		clusterId: 1794,
		name: 'current tier 3 block 8 summation delivered',
		server: true,
		attributeId: 1847,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 773,
		nameFun: 'CurrentTier3Block9SummationDelivered',
		nameObj: 'currentTier3Block9SummationDelivered',
		clusterId: 1794,
		name: 'current tier 3 block 9 summation delivered',
		server: true,
		attributeId: 1848,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 774,
		nameFun: 'CurrentTier3Block10SummationDelivered',
		nameObj: 'currentTier3Block10SummationDelivered',
		clusterId: 1794,
		name: 'current tier 3 block 10 summation delivered',
		server: true,
		attributeId: 1849,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 775,
		nameFun: 'CurrentTier3Block11SummationDelivered',
		nameObj: 'currentTier3Block11SummationDelivered',
		clusterId: 1794,
		name: 'current tier 3 block 11 summation delivered',
		server: true,
		attributeId: 1850,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 776,
		nameFun: 'CurrentTier3Block12SummationDelivered',
		nameObj: 'currentTier3Block12SummationDelivered',
		clusterId: 1794,
		name: 'current tier 3 block 12 summation delivered',
		server: true,
		attributeId: 1851,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 777,
		nameFun: 'CurrentTier3Block13SummationDelivered',
		nameObj: 'currentTier3Block13SummationDelivered',
		clusterId: 1794,
		name: 'current tier 3 block 13 summation delivered',
		server: true,
		attributeId: 1852,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 778,
		nameFun: 'CurrentTier3Block14SummationDelivered',
		nameObj: 'currentTier3Block14SummationDelivered',
		clusterId: 1794,
		name: 'current tier 3 block 14 summation delivered',
		server: true,
		attributeId: 1853,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 779,
		nameFun: 'CurrentTier3Block15SummationDelivered',
		nameObj: 'currentTier3Block15SummationDelivered',
		clusterId: 1794,
		name: 'current tier 3 block 15 summation delivered',
		server: true,
		attributeId: 1854,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 780,
		nameFun: 'CurrentTier3Block16SummationDelivered',
		nameObj: 'currentTier3Block16SummationDelivered',
		clusterId: 1794,
		name: 'current tier 3 block 16 summation delivered',
		server: true,
		attributeId: 1855,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 781,
		nameFun: 'CurrentTier4Block1SummationDelivered',
		nameObj: 'currentTier4Block1SummationDelivered',
		clusterId: 1794,
		name: 'current tier 4 block 1 summation delivered',
		server: true,
		attributeId: 1856,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 782,
		nameFun: 'CurrentTier4Block2SummationDelivered',
		nameObj: 'currentTier4Block2SummationDelivered',
		clusterId: 1794,
		name: 'current tier 4 block 2 summation delivered',
		server: true,
		attributeId: 1857,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 783,
		nameFun: 'CurrentTier4Block3SummationDelivered',
		nameObj: 'currentTier4Block3SummationDelivered',
		clusterId: 1794,
		name: 'current tier 4 block 3 summation delivered',
		server: true,
		attributeId: 1858,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 784,
		nameFun: 'CurrentTier4Block4SummationDelivered',
		nameObj: 'currentTier4Block4SummationDelivered',
		clusterId: 1794,
		name: 'current tier 4 block 4 summation delivered',
		server: true,
		attributeId: 1859,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 785,
		nameFun: 'CurrentTier4Block5SummationDelivered',
		nameObj: 'currentTier4Block5SummationDelivered',
		clusterId: 1794,
		name: 'current tier 4 block 5 summation delivered',
		server: true,
		attributeId: 1860,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 786,
		nameFun: 'CurrentTier4Block6SummationDelivered',
		nameObj: 'currentTier4Block6SummationDelivered',
		clusterId: 1794,
		name: 'current tier 4 block 6 summation delivered',
		server: true,
		attributeId: 1861,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 787,
		nameFun: 'CurrentTier4Block7SummationDelivered',
		nameObj: 'currentTier4Block7SummationDelivered',
		clusterId: 1794,
		name: 'current tier 4 block 7 summation delivered',
		server: true,
		attributeId: 1862,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 788,
		nameFun: 'CurrentTier4Block8SummationDelivered',
		nameObj: 'currentTier4Block8SummationDelivered',
		clusterId: 1794,
		name: 'current tier 4 block 8 summation delivered',
		server: true,
		attributeId: 1863,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 789,
		nameFun: 'CurrentTier4Block9SummationDelivered',
		nameObj: 'currentTier4Block9SummationDelivered',
		clusterId: 1794,
		name: 'current tier 4 block 9 summation delivered',
		server: true,
		attributeId: 1864,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 790,
		nameFun: 'CurrentTier4Block10SummationDelivered',
		nameObj: 'currentTier4Block10SummationDelivered',
		clusterId: 1794,
		name: 'current tier 4 block 10 summation delivered',
		server: true,
		attributeId: 1865,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 791,
		nameFun: 'CurrentTier4Block11SummationDelivered',
		nameObj: 'currentTier4Block11SummationDelivered',
		clusterId: 1794,
		name: 'current tier 4 block 11 summation delivered',
		server: true,
		attributeId: 1866,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 792,
		nameFun: 'CurrentTier4Block12SummationDelivered',
		nameObj: 'currentTier4Block12SummationDelivered',
		clusterId: 1794,
		name: 'current tier 4 block 12 summation delivered',
		server: true,
		attributeId: 1867,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 793,
		nameFun: 'CurrentTier4Block13SummationDelivered',
		nameObj: 'currentTier4Block13SummationDelivered',
		clusterId: 1794,
		name: 'current tier 4 block 13 summation delivered',
		server: true,
		attributeId: 1868,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 794,
		nameFun: 'CurrentTier4Block14SummationDelivered',
		nameObj: 'currentTier4Block14SummationDelivered',
		clusterId: 1794,
		name: 'current tier 4 block 14 summation delivered',
		server: true,
		attributeId: 1869,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 795,
		nameFun: 'CurrentTier4Block15SummationDelivered',
		nameObj: 'currentTier4Block15SummationDelivered',
		clusterId: 1794,
		name: 'current tier 4 block 15 summation delivered',
		server: true,
		attributeId: 1870,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 796,
		nameFun: 'CurrentTier4Block16SummationDelivered',
		nameObj: 'currentTier4Block16SummationDelivered',
		clusterId: 1794,
		name: 'current tier 4 block 16 summation delivered',
		server: true,
		attributeId: 1871,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 797,
		nameFun: 'CurrentTier5Block1SummationDelivered',
		nameObj: 'currentTier5Block1SummationDelivered',
		clusterId: 1794,
		name: 'current tier 5 block 1 summation delivered',
		server: true,
		attributeId: 1872,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 798,
		nameFun: 'CurrentTier5Block2SummationDelivered',
		nameObj: 'currentTier5Block2SummationDelivered',
		clusterId: 1794,
		name: 'current tier 5 block 2 summation delivered',
		server: true,
		attributeId: 1873,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 799,
		nameFun: 'CurrentTier5Block3SummationDelivered',
		nameObj: 'currentTier5Block3SummationDelivered',
		clusterId: 1794,
		name: 'current tier 5 block 3 summation delivered',
		server: true,
		attributeId: 1874,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 800,
		nameFun: 'CurrentTier5Block4SummationDelivered',
		nameObj: 'currentTier5Block4SummationDelivered',
		clusterId: 1794,
		name: 'current tier 5 block 4 summation delivered',
		server: true,
		attributeId: 1875,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 801,
		nameFun: 'CurrentTier5Block5SummationDelivered',
		nameObj: 'currentTier5Block5SummationDelivered',
		clusterId: 1794,
		name: 'current tier 5 block 5 summation delivered',
		server: true,
		attributeId: 1876,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 802,
		nameFun: 'CurrentTier5Block6SummationDelivered',
		nameObj: 'currentTier5Block6SummationDelivered',
		clusterId: 1794,
		name: 'current tier 5 block 6 summation delivered',
		server: true,
		attributeId: 1877,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 803,
		nameFun: 'CurrentTier5Block7SummationDelivered',
		nameObj: 'currentTier5Block7SummationDelivered',
		clusterId: 1794,
		name: 'current tier 5 block 7 summation delivered',
		server: true,
		attributeId: 1878,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 804,
		nameFun: 'CurrentTier5Block8SummationDelivered',
		nameObj: 'currentTier5Block8SummationDelivered',
		clusterId: 1794,
		name: 'current tier 5 block 8 summation delivered',
		server: true,
		attributeId: 1879,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 805,
		nameFun: 'CurrentTier5Block9SummationDelivered',
		nameObj: 'currentTier5Block9SummationDelivered',
		clusterId: 1794,
		name: 'current tier 5 block 9 summation delivered',
		server: true,
		attributeId: 1880,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 806,
		nameFun: 'CurrentTier5Block10SummationDelivered',
		nameObj: 'currentTier5Block10SummationDelivered',
		clusterId: 1794,
		name: 'current tier 5 block 10 summation delivered',
		server: true,
		attributeId: 1881,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 807,
		nameFun: 'CurrentTier5Block11SummationDelivered',
		nameObj: 'currentTier5Block11SummationDelivered',
		clusterId: 1794,
		name: 'current tier 5 block 11 summation delivered',
		server: true,
		attributeId: 1882,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 808,
		nameFun: 'CurrentTier5Block12SummationDelivered',
		nameObj: 'currentTier5Block12SummationDelivered',
		clusterId: 1794,
		name: 'current tier 5 block 12 summation delivered',
		server: true,
		attributeId: 1883,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 809,
		nameFun: 'CurrentTier5Block13SummationDelivered',
		nameObj: 'currentTier5Block13SummationDelivered',
		clusterId: 1794,
		name: 'current tier 5 block 13 summation delivered',
		server: true,
		attributeId: 1884,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 810,
		nameFun: 'CurrentTier5Block14SummationDelivered',
		nameObj: 'currentTier5Block14SummationDelivered',
		clusterId: 1794,
		name: 'current tier 5 block 14 summation delivered',
		server: true,
		attributeId: 1885,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 811,
		nameFun: 'CurrentTier5Block15SummationDelivered',
		nameObj: 'currentTier5Block15SummationDelivered',
		clusterId: 1794,
		name: 'current tier 5 block 15 summation delivered',
		server: true,
		attributeId: 1886,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 812,
		nameFun: 'CurrentTier5Block16SummationDelivered',
		nameObj: 'currentTier5Block16SummationDelivered',
		clusterId: 1794,
		name: 'current tier 5 block 16 summation delivered',
		server: true,
		attributeId: 1887,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 813,
		nameFun: 'CurrentTier6Block1SummationDelivered',
		nameObj: 'currentTier6Block1SummationDelivered',
		clusterId: 1794,
		name: 'current tier 6 block 1 summation delivered',
		server: true,
		attributeId: 1888,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 814,
		nameFun: 'CurrentTier6Block2SummationDelivered',
		nameObj: 'currentTier6Block2SummationDelivered',
		clusterId: 1794,
		name: 'current tier 6 block 2 summation delivered',
		server: true,
		attributeId: 1889,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 815,
		nameFun: 'CurrentTier6Block3SummationDelivered',
		nameObj: 'currentTier6Block3SummationDelivered',
		clusterId: 1794,
		name: 'current tier 6 block 3 summation delivered',
		server: true,
		attributeId: 1890,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 816,
		nameFun: 'CurrentTier6Block4SummationDelivered',
		nameObj: 'currentTier6Block4SummationDelivered',
		clusterId: 1794,
		name: 'current tier 6 block 4 summation delivered',
		server: true,
		attributeId: 1891,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 817,
		nameFun: 'CurrentTier6Block5SummationDelivered',
		nameObj: 'currentTier6Block5SummationDelivered',
		clusterId: 1794,
		name: 'current tier 6 block 5 summation delivered',
		server: true,
		attributeId: 1892,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 818,
		nameFun: 'CurrentTier6Block6SummationDelivered',
		nameObj: 'currentTier6Block6SummationDelivered',
		clusterId: 1794,
		name: 'current tier 6 block 6 summation delivered',
		server: true,
		attributeId: 1893,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 819,
		nameFun: 'CurrentTier6Block7SummationDelivered',
		nameObj: 'currentTier6Block7SummationDelivered',
		clusterId: 1794,
		name: 'current tier 6 block 7 summation delivered',
		server: true,
		attributeId: 1894,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 820,
		nameFun: 'CurrentTier6Block8SummationDelivered',
		nameObj: 'currentTier6Block8SummationDelivered',
		clusterId: 1794,
		name: 'current tier 6 block 8 summation delivered',
		server: true,
		attributeId: 1895,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 821,
		nameFun: 'CurrentTier6Block9SummationDelivered',
		nameObj: 'currentTier6Block9SummationDelivered',
		clusterId: 1794,
		name: 'current tier 6 block 9 summation delivered',
		server: true,
		attributeId: 1896,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 822,
		nameFun: 'CurrentTier6Block10SummationDelivered',
		nameObj: 'currentTier6Block10SummationDelivered',
		clusterId: 1794,
		name: 'current tier 6 block 10 summation delivered',
		server: true,
		attributeId: 1897,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 823,
		nameFun: 'CurrentTier6Block11SummationDelivered',
		nameObj: 'currentTier6Block11SummationDelivered',
		clusterId: 1794,
		name: 'current tier 6 block 11 summation delivered',
		server: true,
		attributeId: 1898,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 824,
		nameFun: 'CurrentTier6Block12SummationDelivered',
		nameObj: 'currentTier6Block12SummationDelivered',
		clusterId: 1794,
		name: 'current tier 6 block 12 summation delivered',
		server: true,
		attributeId: 1899,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 825,
		nameFun: 'CurrentTier6Block13SummationDelivered',
		nameObj: 'currentTier6Block13SummationDelivered',
		clusterId: 1794,
		name: 'current tier 6 block 13 summation delivered',
		server: true,
		attributeId: 1900,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 826,
		nameFun: 'CurrentTier6Block14SummationDelivered',
		nameObj: 'currentTier6Block14SummationDelivered',
		clusterId: 1794,
		name: 'current tier 6 block 14 summation delivered',
		server: true,
		attributeId: 1901,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 827,
		nameFun: 'CurrentTier6Block15SummationDelivered',
		nameObj: 'currentTier6Block15SummationDelivered',
		clusterId: 1794,
		name: 'current tier 6 block 15 summation delivered',
		server: true,
		attributeId: 1902,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 828,
		nameFun: 'CurrentTier6Block16SummationDelivered',
		nameObj: 'currentTier6Block16SummationDelivered',
		clusterId: 1794,
		name: 'current tier 6 block 16 summation delivered',
		server: true,
		attributeId: 1903,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 829,
		nameFun: 'CurrentTier7Block1SummationDelivered',
		nameObj: 'currentTier7Block1SummationDelivered',
		clusterId: 1794,
		name: 'current tier 7 block 1 summation delivered',
		server: true,
		attributeId: 1904,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 830,
		nameFun: 'CurrentTier7Block2SummationDelivered',
		nameObj: 'currentTier7Block2SummationDelivered',
		clusterId: 1794,
		name: 'current tier 7 block 2 summation delivered',
		server: true,
		attributeId: 1905,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 831,
		nameFun: 'CurrentTier7Block3SummationDelivered',
		nameObj: 'currentTier7Block3SummationDelivered',
		clusterId: 1794,
		name: 'current tier 7 block 3 summation delivered',
		server: true,
		attributeId: 1906,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 832,
		nameFun: 'CurrentTier7Block4SummationDelivered',
		nameObj: 'currentTier7Block4SummationDelivered',
		clusterId: 1794,
		name: 'current tier 7 block 4 summation delivered',
		server: true,
		attributeId: 1907,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 833,
		nameFun: 'CurrentTier7Block5SummationDelivered',
		nameObj: 'currentTier7Block5SummationDelivered',
		clusterId: 1794,
		name: 'current tier 7 block 5 summation delivered',
		server: true,
		attributeId: 1908,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 834,
		nameFun: 'CurrentTier7Block6SummationDelivered',
		nameObj: 'currentTier7Block6SummationDelivered',
		clusterId: 1794,
		name: 'current tier 7 block 6 summation delivered',
		server: true,
		attributeId: 1909,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 835,
		nameFun: 'CurrentTier7Block7SummationDelivered',
		nameObj: 'currentTier7Block7SummationDelivered',
		clusterId: 1794,
		name: 'current tier 7 block 7 summation delivered',
		server: true,
		attributeId: 1910,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 836,
		nameFun: 'CurrentTier7Block8SummationDelivered',
		nameObj: 'currentTier7Block8SummationDelivered',
		clusterId: 1794,
		name: 'current tier 7 block 8 summation delivered',
		server: true,
		attributeId: 1911,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 837,
		nameFun: 'CurrentTier7Block9SummationDelivered',
		nameObj: 'currentTier7Block9SummationDelivered',
		clusterId: 1794,
		name: 'current tier 7 block 9 summation delivered',
		server: true,
		attributeId: 1912,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 838,
		nameFun: 'CurrentTier7Block10SummationDelivered',
		nameObj: 'currentTier7Block10SummationDelivered',
		clusterId: 1794,
		name: 'current tier 7 block 10 summation delivered',
		server: true,
		attributeId: 1913,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 839,
		nameFun: 'CurrentTier7Block11SummationDelivered',
		nameObj: 'currentTier7Block11SummationDelivered',
		clusterId: 1794,
		name: 'current tier 7 block 11 summation delivered',
		server: true,
		attributeId: 1914,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 840,
		nameFun: 'CurrentTier7Block12SummationDelivered',
		nameObj: 'currentTier7Block12SummationDelivered',
		clusterId: 1794,
		name: 'current tier 7 block 12 summation delivered',
		server: true,
		attributeId: 1915,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 841,
		nameFun: 'CurrentTier7Block13SummationDelivered',
		nameObj: 'currentTier7Block13SummationDelivered',
		clusterId: 1794,
		name: 'current tier 7 block 13 summation delivered',
		server: true,
		attributeId: 1916,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 842,
		nameFun: 'CurrentTier7Block14SummationDelivered',
		nameObj: 'currentTier7Block14SummationDelivered',
		clusterId: 1794,
		name: 'current tier 7 block 14 summation delivered',
		server: true,
		attributeId: 1917,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 843,
		nameFun: 'CurrentTier7Block15SummationDelivered',
		nameObj: 'currentTier7Block15SummationDelivered',
		clusterId: 1794,
		name: 'current tier 7 block 15 summation delivered',
		server: true,
		attributeId: 1918,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 844,
		nameFun: 'CurrentTier7Block16SummationDelivered',
		nameObj: 'currentTier7Block16SummationDelivered',
		clusterId: 1794,
		name: 'current tier 7 block 16 summation delivered',
		server: true,
		attributeId: 1919,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 845,
		nameFun: 'CurrentTier8Block1SummationDelivered',
		nameObj: 'currentTier8Block1SummationDelivered',
		clusterId: 1794,
		name: 'current tier 8 block 1 summation delivered',
		server: true,
		attributeId: 1920,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 846,
		nameFun: 'CurrentTier8Block2SummationDelivered',
		nameObj: 'currentTier8Block2SummationDelivered',
		clusterId: 1794,
		name: 'current tier 8 block 2 summation delivered',
		server: true,
		attributeId: 1921,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 847,
		nameFun: 'CurrentTier8Block3SummationDelivered',
		nameObj: 'currentTier8Block3SummationDelivered',
		clusterId: 1794,
		name: 'current tier 8 block 3 summation delivered',
		server: true,
		attributeId: 1922,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 848,
		nameFun: 'CurrentTier8Block4SummationDelivered',
		nameObj: 'currentTier8Block4SummationDelivered',
		clusterId: 1794,
		name: 'current tier 8 block 4 summation delivered',
		server: true,
		attributeId: 1923,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 849,
		nameFun: 'CurrentTier8Block5SummationDelivered',
		nameObj: 'currentTier8Block5SummationDelivered',
		clusterId: 1794,
		name: 'current tier 8 block 5 summation delivered',
		server: true,
		attributeId: 1924,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 850,
		nameFun: 'CurrentTier8Block6SummationDelivered',
		nameObj: 'currentTier8Block6SummationDelivered',
		clusterId: 1794,
		name: 'current tier 8 block 6 summation delivered',
		server: true,
		attributeId: 1925,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 851,
		nameFun: 'CurrentTier8Block7SummationDelivered',
		nameObj: 'currentTier8Block7SummationDelivered',
		clusterId: 1794,
		name: 'current tier 8 block 7 summation delivered',
		server: true,
		attributeId: 1926,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 852,
		nameFun: 'CurrentTier8Block8SummationDelivered',
		nameObj: 'currentTier8Block8SummationDelivered',
		clusterId: 1794,
		name: 'current tier 8 block 8 summation delivered',
		server: true,
		attributeId: 1927,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 853,
		nameFun: 'CurrentTier8Block9SummationDelivered',
		nameObj: 'currentTier8Block9SummationDelivered',
		clusterId: 1794,
		name: 'current tier 8 block 9 summation delivered',
		server: true,
		attributeId: 1928,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 854,
		nameFun: 'CurrentTier8Block10SummationDelivered',
		nameObj: 'currentTier8Block10SummationDelivered',
		clusterId: 1794,
		name: 'current tier 8 block 10 summation delivered',
		server: true,
		attributeId: 1929,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 855,
		nameFun: 'CurrentTier8Block11SummationDelivered',
		nameObj: 'currentTier8Block11SummationDelivered',
		clusterId: 1794,
		name: 'current tier 8 block 11 summation delivered',
		server: true,
		attributeId: 1930,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 856,
		nameFun: 'CurrentTier8Block12SummationDelivered',
		nameObj: 'currentTier8Block12SummationDelivered',
		clusterId: 1794,
		name: 'current tier 8 block 12 summation delivered',
		server: true,
		attributeId: 1931,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 857,
		nameFun: 'CurrentTier8Block13SummationDelivered',
		nameObj: 'currentTier8Block13SummationDelivered',
		clusterId: 1794,
		name: 'current tier 8 block 13 summation delivered',
		server: true,
		attributeId: 1932,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 858,
		nameFun: 'CurrentTier8Block14SummationDelivered',
		nameObj: 'currentTier8Block14SummationDelivered',
		clusterId: 1794,
		name: 'current tier 8 block 14 summation delivered',
		server: true,
		attributeId: 1933,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 859,
		nameFun: 'CurrentTier8Block15SummationDelivered',
		nameObj: 'currentTier8Block15SummationDelivered',
		clusterId: 1794,
		name: 'current tier 8 block 15 summation delivered',
		server: true,
		attributeId: 1934,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 860,
		nameFun: 'CurrentTier8Block16SummationDelivered',
		nameObj: 'currentTier8Block16SummationDelivered',
		clusterId: 1794,
		name: 'current tier 8 block 16 summation delivered',
		server: true,
		attributeId: 1935,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 861,
		nameFun: 'CurrentTier9Block1SummationDelivered',
		nameObj: 'currentTier9Block1SummationDelivered',
		clusterId: 1794,
		name: 'current tier 9 block 1 summation delivered',
		server: true,
		attributeId: 1936,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 862,
		nameFun: 'CurrentTier9Block2SummationDelivered',
		nameObj: 'currentTier9Block2SummationDelivered',
		clusterId: 1794,
		name: 'current tier 9 block 2 summation delivered',
		server: true,
		attributeId: 1937,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 863,
		nameFun: 'CurrentTier9Block3SummationDelivered',
		nameObj: 'currentTier9Block3SummationDelivered',
		clusterId: 1794,
		name: 'current tier 9 block 3 summation delivered',
		server: true,
		attributeId: 1938,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 864,
		nameFun: 'CurrentTier9Block4SummationDelivered',
		nameObj: 'currentTier9Block4SummationDelivered',
		clusterId: 1794,
		name: 'current tier 9 block 4 summation delivered',
		server: true,
		attributeId: 1939,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 865,
		nameFun: 'CurrentTier9Block5SummationDelivered',
		nameObj: 'currentTier9Block5SummationDelivered',
		clusterId: 1794,
		name: 'current tier 9 block 5 summation delivered',
		server: true,
		attributeId: 1940,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 866,
		nameFun: 'CurrentTier9Block6SummationDelivered',
		nameObj: 'currentTier9Block6SummationDelivered',
		clusterId: 1794,
		name: 'current tier 9 block 6 summation delivered',
		server: true,
		attributeId: 1941,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 867,
		nameFun: 'CurrentTier9Block7SummationDelivered',
		nameObj: 'currentTier9Block7SummationDelivered',
		clusterId: 1794,
		name: 'current tier 9 block 7 summation delivered',
		server: true,
		attributeId: 1942,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 868,
		nameFun: 'CurrentTier9Block8SummationDelivered',
		nameObj: 'currentTier9Block8SummationDelivered',
		clusterId: 1794,
		name: 'current tier 9 block 8 summation delivered',
		server: true,
		attributeId: 1943,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 869,
		nameFun: 'CurrentTier9Block9SummationDelivered',
		nameObj: 'currentTier9Block9SummationDelivered',
		clusterId: 1794,
		name: 'current tier 9 block 9 summation delivered',
		server: true,
		attributeId: 1944,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 870,
		nameFun: 'CurrentTier9Block10SummationDelivered',
		nameObj: 'currentTier9Block10SummationDelivered',
		clusterId: 1794,
		name: 'current tier 9 block 10 summation delivered',
		server: true,
		attributeId: 1945,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 871,
		nameFun: 'CurrentTier9Block11SummationDelivered',
		nameObj: 'currentTier9Block11SummationDelivered',
		clusterId: 1794,
		name: 'current tier 9 block 11 summation delivered',
		server: true,
		attributeId: 1946,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 872,
		nameFun: 'CurrentTier9Block12SummationDelivered',
		nameObj: 'currentTier9Block12SummationDelivered',
		clusterId: 1794,
		name: 'current tier 9 block 12 summation delivered',
		server: true,
		attributeId: 1947,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 873,
		nameFun: 'CurrentTier9Block13SummationDelivered',
		nameObj: 'currentTier9Block13SummationDelivered',
		clusterId: 1794,
		name: 'current tier 9 block 13 summation delivered',
		server: true,
		attributeId: 1948,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 874,
		nameFun: 'CurrentTier9Block14SummationDelivered',
		nameObj: 'currentTier9Block14SummationDelivered',
		clusterId: 1794,
		name: 'current tier 9 block 14 summation delivered',
		server: true,
		attributeId: 1949,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 875,
		nameFun: 'CurrentTier9Block15SummationDelivered',
		nameObj: 'currentTier9Block15SummationDelivered',
		clusterId: 1794,
		name: 'current tier 9 block 15 summation delivered',
		server: true,
		attributeId: 1950,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 876,
		nameFun: 'CurrentTier9Block16SummationDelivered',
		nameObj: 'currentTier9Block16SummationDelivered',
		clusterId: 1794,
		name: 'current tier 9 block 16 summation delivered',
		server: true,
		attributeId: 1951,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 877,
		nameFun: 'CurrentTier10Block1SummationDelivered',
		nameObj: 'currentTier10Block1SummationDelivered',
		clusterId: 1794,
		name: 'current tier 10 block 1 summation delivered',
		server: true,
		attributeId: 1952,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 878,
		nameFun: 'CurrentTier10Block2SummationDelivered',
		nameObj: 'currentTier10Block2SummationDelivered',
		clusterId: 1794,
		name: 'current tier 10 block 2 summation delivered',
		server: true,
		attributeId: 1953,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 879,
		nameFun: 'CurrentTier10Block3SummationDelivered',
		nameObj: 'currentTier10Block3SummationDelivered',
		clusterId: 1794,
		name: 'current tier 10 block 3 summation delivered',
		server: true,
		attributeId: 1954,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 880,
		nameFun: 'CurrentTier10Block4SummationDelivered',
		nameObj: 'currentTier10Block4SummationDelivered',
		clusterId: 1794,
		name: 'current tier 10 block 4 summation delivered',
		server: true,
		attributeId: 1955,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 881,
		nameFun: 'CurrentTier10Block5SummationDelivered',
		nameObj: 'currentTier10Block5SummationDelivered',
		clusterId: 1794,
		name: 'current tier 10 block 5 summation delivered',
		server: true,
		attributeId: 1956,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 882,
		nameFun: 'CurrentTier10Block6SummationDelivered',
		nameObj: 'currentTier10Block6SummationDelivered',
		clusterId: 1794,
		name: 'current tier 10 block 6 summation delivered',
		server: true,
		attributeId: 1957,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 883,
		nameFun: 'CurrentTier10Block7SummationDelivered',
		nameObj: 'currentTier10Block7SummationDelivered',
		clusterId: 1794,
		name: 'current tier 10 block 7 summation delivered',
		server: true,
		attributeId: 1958,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 884,
		nameFun: 'CurrentTier10Block8SummationDelivered',
		nameObj: 'currentTier10Block8SummationDelivered',
		clusterId: 1794,
		name: 'current tier 10 block 8 summation delivered',
		server: true,
		attributeId: 1959,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 885,
		nameFun: 'CurrentTier10Block9SummationDelivered',
		nameObj: 'currentTier10Block9SummationDelivered',
		clusterId: 1794,
		name: 'current tier 10 block 9 summation delivered',
		server: true,
		attributeId: 1960,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 886,
		nameFun: 'CurrentTier10Block10SummationDelivered',
		nameObj: 'currentTier10Block10SummationDelivered',
		clusterId: 1794,
		name: 'current tier 10 block 10 summation delivered',
		server: true,
		attributeId: 1961,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 887,
		nameFun: 'CurrentTier10Block11SummationDelivered',
		nameObj: 'currentTier10Block11SummationDelivered',
		clusterId: 1794,
		name: 'current tier 10 block 11 summation delivered',
		server: true,
		attributeId: 1962,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 888,
		nameFun: 'CurrentTier10Block12SummationDelivered',
		nameObj: 'currentTier10Block12SummationDelivered',
		clusterId: 1794,
		name: 'current tier 10 block 12 summation delivered',
		server: true,
		attributeId: 1963,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 889,
		nameFun: 'CurrentTier10Block13SummationDelivered',
		nameObj: 'currentTier10Block13SummationDelivered',
		clusterId: 1794,
		name: 'current tier 10 block 13 summation delivered',
		server: true,
		attributeId: 1964,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 890,
		nameFun: 'CurrentTier10Block14SummationDelivered',
		nameObj: 'currentTier10Block14SummationDelivered',
		clusterId: 1794,
		name: 'current tier 10 block 14 summation delivered',
		server: true,
		attributeId: 1965,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 891,
		nameFun: 'CurrentTier10Block15SummationDelivered',
		nameObj: 'currentTier10Block15SummationDelivered',
		clusterId: 1794,
		name: 'current tier 10 block 15 summation delivered',
		server: true,
		attributeId: 1966,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 892,
		nameFun: 'CurrentTier10Block16SummationDelivered',
		nameObj: 'currentTier10Block16SummationDelivered',
		clusterId: 1794,
		name: 'current tier 10 block 16 summation delivered',
		server: true,
		attributeId: 1967,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 893,
		nameFun: 'CurrentTier11Block1SummationDelivered',
		nameObj: 'currentTier11Block1SummationDelivered',
		clusterId: 1794,
		name: 'current tier 11 block 1 summation delivered',
		server: true,
		attributeId: 1968,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 894,
		nameFun: 'CurrentTier11Block2SummationDelivered',
		nameObj: 'currentTier11Block2SummationDelivered',
		clusterId: 1794,
		name: 'current tier 11 block 2 summation delivered',
		server: true,
		attributeId: 1969,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 895,
		nameFun: 'CurrentTier11Block3SummationDelivered',
		nameObj: 'currentTier11Block3SummationDelivered',
		clusterId: 1794,
		name: 'current tier 11 block 3 summation delivered',
		server: true,
		attributeId: 1970,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 896,
		nameFun: 'CurrentTier11Block4SummationDelivered',
		nameObj: 'currentTier11Block4SummationDelivered',
		clusterId: 1794,
		name: 'current tier 11 block 4 summation delivered',
		server: true,
		attributeId: 1971,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 897,
		nameFun: 'CurrentTier11Block5SummationDelivered',
		nameObj: 'currentTier11Block5SummationDelivered',
		clusterId: 1794,
		name: 'current tier 11 block 5 summation delivered',
		server: true,
		attributeId: 1972,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 898,
		nameFun: 'CurrentTier11Block6SummationDelivered',
		nameObj: 'currentTier11Block6SummationDelivered',
		clusterId: 1794,
		name: 'current tier 11 block 6 summation delivered',
		server: true,
		attributeId: 1973,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 899,
		nameFun: 'CurrentTier11Block7SummationDelivered',
		nameObj: 'currentTier11Block7SummationDelivered',
		clusterId: 1794,
		name: 'current tier 11 block 7 summation delivered',
		server: true,
		attributeId: 1974,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 900,
		nameFun: 'CurrentTier11Block8SummationDelivered',
		nameObj: 'currentTier11Block8SummationDelivered',
		clusterId: 1794,
		name: 'current tier 11 block 8 summation delivered',
		server: true,
		attributeId: 1975,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 901,
		nameFun: 'CurrentTier11Block9SummationDelivered',
		nameObj: 'currentTier11Block9SummationDelivered',
		clusterId: 1794,
		name: 'current tier 11 block 9 summation delivered',
		server: true,
		attributeId: 1976,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 902,
		nameFun: 'CurrentTier11Block10SummationDelivered',
		nameObj: 'currentTier11Block10SummationDelivered',
		clusterId: 1794,
		name: 'current tier 11 block 10 summation delivered',
		server: true,
		attributeId: 1977,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 903,
		nameFun: 'CurrentTier11Block11SummationDelivered',
		nameObj: 'currentTier11Block11SummationDelivered',
		clusterId: 1794,
		name: 'current tier 11 block 11 summation delivered',
		server: true,
		attributeId: 1978,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 904,
		nameFun: 'CurrentTier11Block12SummationDelivered',
		nameObj: 'currentTier11Block12SummationDelivered',
		clusterId: 1794,
		name: 'current tier 11 block 12 summation delivered',
		server: true,
		attributeId: 1979,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 905,
		nameFun: 'CurrentTier11Block13SummationDelivered',
		nameObj: 'currentTier11Block13SummationDelivered',
		clusterId: 1794,
		name: 'current tier 11 block 13 summation delivered',
		server: true,
		attributeId: 1980,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 906,
		nameFun: 'CurrentTier11Block14SummationDelivered',
		nameObj: 'currentTier11Block14SummationDelivered',
		clusterId: 1794,
		name: 'current tier 11 block 14 summation delivered',
		server: true,
		attributeId: 1981,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 907,
		nameFun: 'CurrentTier11Block15SummationDelivered',
		nameObj: 'currentTier11Block15SummationDelivered',
		clusterId: 1794,
		name: 'current tier 11 block 15 summation delivered',
		server: true,
		attributeId: 1982,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 908,
		nameFun: 'CurrentTier11Block16SummationDelivered',
		nameObj: 'currentTier11Block16SummationDelivered',
		clusterId: 1794,
		name: 'current tier 11 block 16 summation delivered',
		server: true,
		attributeId: 1983,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 909,
		nameFun: 'CurrentTier12Block1SummationDelivered',
		nameObj: 'currentTier12Block1SummationDelivered',
		clusterId: 1794,
		name: 'current tier 12 block 1 summation delivered',
		server: true,
		attributeId: 1984,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 910,
		nameFun: 'CurrentTier12Block2SummationDelivered',
		nameObj: 'currentTier12Block2SummationDelivered',
		clusterId: 1794,
		name: 'current tier 12 block 2 summation delivered',
		server: true,
		attributeId: 1985,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 911,
		nameFun: 'CurrentTier12Block3SummationDelivered',
		nameObj: 'currentTier12Block3SummationDelivered',
		clusterId: 1794,
		name: 'current tier 12 block 3 summation delivered',
		server: true,
		attributeId: 1986,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 912,
		nameFun: 'CurrentTier12Block4SummationDelivered',
		nameObj: 'currentTier12Block4SummationDelivered',
		clusterId: 1794,
		name: 'current tier 12 block 4 summation delivered',
		server: true,
		attributeId: 1987,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 913,
		nameFun: 'CurrentTier12Block5SummationDelivered',
		nameObj: 'currentTier12Block5SummationDelivered',
		clusterId: 1794,
		name: 'current tier 12 block 5 summation delivered',
		server: true,
		attributeId: 1988,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 914,
		nameFun: 'CurrentTier12Block6SummationDelivered',
		nameObj: 'currentTier12Block6SummationDelivered',
		clusterId: 1794,
		name: 'current tier 12 block 6 summation delivered',
		server: true,
		attributeId: 1989,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 915,
		nameFun: 'CurrentTier12Block7SummationDelivered',
		nameObj: 'currentTier12Block7SummationDelivered',
		clusterId: 1794,
		name: 'current tier 12 block 7 summation delivered',
		server: true,
		attributeId: 1990,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 916,
		nameFun: 'CurrentTier12Block8SummationDelivered',
		nameObj: 'currentTier12Block8SummationDelivered',
		clusterId: 1794,
		name: 'current tier 12 block 8 summation delivered',
		server: true,
		attributeId: 1991,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 917,
		nameFun: 'CurrentTier12Block9SummationDelivered',
		nameObj: 'currentTier12Block9SummationDelivered',
		clusterId: 1794,
		name: 'current tier 12 block 9 summation delivered',
		server: true,
		attributeId: 1992,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 918,
		nameFun: 'CurrentTier12Block10SummationDelivered',
		nameObj: 'currentTier12Block10SummationDelivered',
		clusterId: 1794,
		name: 'current tier 12 block 10 summation delivered',
		server: true,
		attributeId: 1993,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 919,
		nameFun: 'CurrentTier12Block11SummationDelivered',
		nameObj: 'currentTier12Block11SummationDelivered',
		clusterId: 1794,
		name: 'current tier 12 block 11 summation delivered',
		server: true,
		attributeId: 1994,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 920,
		nameFun: 'CurrentTier12Block12SummationDelivered',
		nameObj: 'currentTier12Block12SummationDelivered',
		clusterId: 1794,
		name: 'current tier 12 block 12 summation delivered',
		server: true,
		attributeId: 1995,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 921,
		nameFun: 'CurrentTier12Block13SummationDelivered',
		nameObj: 'currentTier12Block13SummationDelivered',
		clusterId: 1794,
		name: 'current tier 12 block 13 summation delivered',
		server: true,
		attributeId: 1996,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 922,
		nameFun: 'CurrentTier12Block14SummationDelivered',
		nameObj: 'currentTier12Block14SummationDelivered',
		clusterId: 1794,
		name: 'current tier 12 block 14 summation delivered',
		server: true,
		attributeId: 1997,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 923,
		nameFun: 'CurrentTier12Block15SummationDelivered',
		nameObj: 'currentTier12Block15SummationDelivered',
		clusterId: 1794,
		name: 'current tier 12 block 15 summation delivered',
		server: true,
		attributeId: 1998,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 924,
		nameFun: 'CurrentTier12Block16SummationDelivered',
		nameObj: 'currentTier12Block16SummationDelivered',
		clusterId: 1794,
		name: 'current tier 12 block 16 summation delivered',
		server: true,
		attributeId: 1999,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 925,
		nameFun: 'CurrentTier13Block1SummationDelivered',
		nameObj: 'currentTier13Block1SummationDelivered',
		clusterId: 1794,
		name: 'current tier 13 block 1 summation delivered',
		server: true,
		attributeId: 2000,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 926,
		nameFun: 'CurrentTier13Block2SummationDelivered',
		nameObj: 'currentTier13Block2SummationDelivered',
		clusterId: 1794,
		name: 'current tier 13 block 2 summation delivered',
		server: true,
		attributeId: 2001,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 927,
		nameFun: 'CurrentTier13Block3SummationDelivered',
		nameObj: 'currentTier13Block3SummationDelivered',
		clusterId: 1794,
		name: 'current tier 13 block 3 summation delivered',
		server: true,
		attributeId: 2002,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 928,
		nameFun: 'CurrentTier13Block4SummationDelivered',
		nameObj: 'currentTier13Block4SummationDelivered',
		clusterId: 1794,
		name: 'current tier 13 block 4 summation delivered',
		server: true,
		attributeId: 2003,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 929,
		nameFun: 'CurrentTier13Block5SummationDelivered',
		nameObj: 'currentTier13Block5SummationDelivered',
		clusterId: 1794,
		name: 'current tier 13 block 5 summation delivered',
		server: true,
		attributeId: 2004,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 930,
		nameFun: 'CurrentTier13Block6SummationDelivered',
		nameObj: 'currentTier13Block6SummationDelivered',
		clusterId: 1794,
		name: 'current tier 13 block 6 summation delivered',
		server: true,
		attributeId: 2005,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 931,
		nameFun: 'CurrentTier13Block7SummationDelivered',
		nameObj: 'currentTier13Block7SummationDelivered',
		clusterId: 1794,
		name: 'current tier 13 block 7 summation delivered',
		server: true,
		attributeId: 2006,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 932,
		nameFun: 'CurrentTier13Block8SummationDelivered',
		nameObj: 'currentTier13Block8SummationDelivered',
		clusterId: 1794,
		name: 'current tier 13 block 8 summation delivered',
		server: true,
		attributeId: 2007,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 933,
		nameFun: 'CurrentTier13Block9SummationDelivered',
		nameObj: 'currentTier13Block9SummationDelivered',
		clusterId: 1794,
		name: 'current tier 13 block 9 summation delivered',
		server: true,
		attributeId: 2008,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 934,
		nameFun: 'CurrentTier13Block10SummationDelivered',
		nameObj: 'currentTier13Block10SummationDelivered',
		clusterId: 1794,
		name: 'current tier 13 block 10 summation delivered',
		server: true,
		attributeId: 2009,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 935,
		nameFun: 'CurrentTier13Block11SummationDelivered',
		nameObj: 'currentTier13Block11SummationDelivered',
		clusterId: 1794,
		name: 'current tier 13 block 11 summation delivered',
		server: true,
		attributeId: 2010,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 936,
		nameFun: 'CurrentTier13Block12SummationDelivered',
		nameObj: 'currentTier13Block12SummationDelivered',
		clusterId: 1794,
		name: 'current tier 13 block 12 summation delivered',
		server: true,
		attributeId: 2011,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 937,
		nameFun: 'CurrentTier13Block13SummationDelivered',
		nameObj: 'currentTier13Block13SummationDelivered',
		clusterId: 1794,
		name: 'current tier 13 block 13 summation delivered',
		server: true,
		attributeId: 2012,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 938,
		nameFun: 'CurrentTier13Block14SummationDelivered',
		nameObj: 'currentTier13Block14SummationDelivered',
		clusterId: 1794,
		name: 'current tier 13 block 14 summation delivered',
		server: true,
		attributeId: 2013,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 939,
		nameFun: 'CurrentTier13Block15SummationDelivered',
		nameObj: 'currentTier13Block15SummationDelivered',
		clusterId: 1794,
		name: 'current tier 13 block 15 summation delivered',
		server: true,
		attributeId: 2014,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 940,
		nameFun: 'CurrentTier13Block16SummationDelivered',
		nameObj: 'currentTier13Block16SummationDelivered',
		clusterId: 1794,
		name: 'current tier 13 block 16 summation delivered',
		server: true,
		attributeId: 2015,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 941,
		nameFun: 'CurrentTier14Block1SummationDelivered',
		nameObj: 'currentTier14Block1SummationDelivered',
		clusterId: 1794,
		name: 'current tier 14 block 1 summation delivered',
		server: true,
		attributeId: 2016,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 942,
		nameFun: 'CurrentTier14Block2SummationDelivered',
		nameObj: 'currentTier14Block2SummationDelivered',
		clusterId: 1794,
		name: 'current tier 14 block 2 summation delivered',
		server: true,
		attributeId: 2017,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 943,
		nameFun: 'CurrentTier14Block3SummationDelivered',
		nameObj: 'currentTier14Block3SummationDelivered',
		clusterId: 1794,
		name: 'current tier 14 block 3 summation delivered',
		server: true,
		attributeId: 2018,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 944,
		nameFun: 'CurrentTier14Block4SummationDelivered',
		nameObj: 'currentTier14Block4SummationDelivered',
		clusterId: 1794,
		name: 'current tier 14 block 4 summation delivered',
		server: true,
		attributeId: 2019,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 945,
		nameFun: 'CurrentTier14Block5SummationDelivered',
		nameObj: 'currentTier14Block5SummationDelivered',
		clusterId: 1794,
		name: 'current tier 14 block 5 summation delivered',
		server: true,
		attributeId: 2020,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 946,
		nameFun: 'CurrentTier14Block6SummationDelivered',
		nameObj: 'currentTier14Block6SummationDelivered',
		clusterId: 1794,
		name: 'current tier 14 block 6 summation delivered',
		server: true,
		attributeId: 2021,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 947,
		nameFun: 'CurrentTier14Block7SummationDelivered',
		nameObj: 'currentTier14Block7SummationDelivered',
		clusterId: 1794,
		name: 'current tier 14 block 7 summation delivered',
		server: true,
		attributeId: 2022,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 948,
		nameFun: 'CurrentTier14Block8SummationDelivered',
		nameObj: 'currentTier14Block8SummationDelivered',
		clusterId: 1794,
		name: 'current tier 14 block 8 summation delivered',
		server: true,
		attributeId: 2023,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 949,
		nameFun: 'CurrentTier14Block9SummationDelivered',
		nameObj: 'currentTier14Block9SummationDelivered',
		clusterId: 1794,
		name: 'current tier 14 block 9 summation delivered',
		server: true,
		attributeId: 2024,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 950,
		nameFun: 'CurrentTier14Block10SummationDelivered',
		nameObj: 'currentTier14Block10SummationDelivered',
		clusterId: 1794,
		name: 'current tier 14 block 10 summation delivered',
		server: true,
		attributeId: 2025,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 951,
		nameFun: 'CurrentTier14Block11SummationDelivered',
		nameObj: 'currentTier14Block11SummationDelivered',
		clusterId: 1794,
		name: 'current tier 14 block 11 summation delivered',
		server: true,
		attributeId: 2026,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 952,
		nameFun: 'CurrentTier14Block12SummationDelivered',
		nameObj: 'currentTier14Block12SummationDelivered',
		clusterId: 1794,
		name: 'current tier 14 block 12 summation delivered',
		server: true,
		attributeId: 2027,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 953,
		nameFun: 'CurrentTier14Block13SummationDelivered',
		nameObj: 'currentTier14Block13SummationDelivered',
		clusterId: 1794,
		name: 'current tier 14 block 13 summation delivered',
		server: true,
		attributeId: 2028,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 954,
		nameFun: 'CurrentTier14Block14SummationDelivered',
		nameObj: 'currentTier14Block14SummationDelivered',
		clusterId: 1794,
		name: 'current tier 14 block 14 summation delivered',
		server: true,
		attributeId: 2029,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 955,
		nameFun: 'CurrentTier14Block15SummationDelivered',
		nameObj: 'currentTier14Block15SummationDelivered',
		clusterId: 1794,
		name: 'current tier 14 block 15 summation delivered',
		server: true,
		attributeId: 2030,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 956,
		nameFun: 'CurrentTier14Block16SummationDelivered',
		nameObj: 'currentTier14Block16SummationDelivered',
		clusterId: 1794,
		name: 'current tier 14 block 16 summation delivered',
		server: true,
		attributeId: 2031,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 957,
		nameFun: 'CurrentTier15Block1SummationDelivered',
		nameObj: 'currentTier15Block1SummationDelivered',
		clusterId: 1794,
		name: 'current tier 15 block 1 summation delivered',
		server: true,
		attributeId: 2032,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 958,
		nameFun: 'CurrentTier15Block2SummationDelivered',
		nameObj: 'currentTier15Block2SummationDelivered',
		clusterId: 1794,
		name: 'current tier 15 block 2 summation delivered',
		server: true,
		attributeId: 2033,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 959,
		nameFun: 'CurrentTier15Block3SummationDelivered',
		nameObj: 'currentTier15Block3SummationDelivered',
		clusterId: 1794,
		name: 'current tier 15 block 3 summation delivered',
		server: true,
		attributeId: 2034,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 960,
		nameFun: 'CurrentTier15Block4SummationDelivered',
		nameObj: 'currentTier15Block4SummationDelivered',
		clusterId: 1794,
		name: 'current tier 15 block 4 summation delivered',
		server: true,
		attributeId: 2035,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 961,
		nameFun: 'CurrentTier15Block5SummationDelivered',
		nameObj: 'currentTier15Block5SummationDelivered',
		clusterId: 1794,
		name: 'current tier 15 block 5 summation delivered',
		server: true,
		attributeId: 2036,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 962,
		nameFun: 'CurrentTier15Block6SummationDelivered',
		nameObj: 'currentTier15Block6SummationDelivered',
		clusterId: 1794,
		name: 'current tier 15 block 6 summation delivered',
		server: true,
		attributeId: 2037,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 963,
		nameFun: 'CurrentTier15Block7SummationDelivered',
		nameObj: 'currentTier15Block7SummationDelivered',
		clusterId: 1794,
		name: 'current tier 15 block 7 summation delivered',
		server: true,
		attributeId: 2038,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 964,
		nameFun: 'CurrentTier15Block8SummationDelivered',
		nameObj: 'currentTier15Block8SummationDelivered',
		clusterId: 1794,
		name: 'current tier 15 block 8 summation delivered',
		server: true,
		attributeId: 2039,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 965,
		nameFun: 'CurrentTier15Block9SummationDelivered',
		nameObj: 'currentTier15Block9SummationDelivered',
		clusterId: 1794,
		name: 'current tier 15 block 9 summation delivered',
		server: true,
		attributeId: 2040,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 966,
		nameFun: 'CurrentTier15Block10SummationDelivered',
		nameObj: 'currentTier15Block10SummationDelivered',
		clusterId: 1794,
		name: 'current tier 15 block 10 summation delivered',
		server: true,
		attributeId: 2041,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 967,
		nameFun: 'CurrentTier15Block11SummationDelivered',
		nameObj: 'currentTier15Block11SummationDelivered',
		clusterId: 1794,
		name: 'current tier 15 block 11 summation delivered',
		server: true,
		attributeId: 2042,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 968,
		nameFun: 'CurrentTier15Block12SummationDelivered',
		nameObj: 'currentTier15Block12SummationDelivered',
		clusterId: 1794,
		name: 'current tier 15 block 12 summation delivered',
		server: true,
		attributeId: 2043,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 969,
		nameFun: 'CurrentTier15Block13SummationDelivered',
		nameObj: 'currentTier15Block13SummationDelivered',
		clusterId: 1794,
		name: 'current tier 15 block 13 summation delivered',
		server: true,
		attributeId: 2044,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 970,
		nameFun: 'CurrentTier15Block14SummationDelivered',
		nameObj: 'currentTier15Block14SummationDelivered',
		clusterId: 1794,
		name: 'current tier 15 block 14 summation delivered',
		server: true,
		attributeId: 2045,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 971,
		nameFun: 'CurrentTier15Block15SummationDelivered',
		nameObj: 'currentTier15Block15SummationDelivered',
		clusterId: 1794,
		name: 'current tier 15 block 15 summation delivered',
		server: true,
		attributeId: 2046,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 972,
		nameFun: 'CurrentTier15Block16SummationDelivered',
		nameObj: 'currentTier15Block16SummationDelivered',
		clusterId: 1794,
		name: 'current tier 15 block 16 summation delivered',
		server: true,
		attributeId: 2047,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 973,
		nameFun: 'GenericAlarmMask',
		nameObj: 'genericAlarmMask',
		clusterId: 1794,
		name: 'generic alarm mask',
		server: true,
		attributeId: 2048,
		type: 'BITMAP16',
		writable: true,
		mandatory: false
	}, {

		label: 974,
		nameFun: 'ElectricityAlarmMask',
		nameObj: 'electricityAlarmMask',
		clusterId: 1794,
		name: 'electricity alarm mask',
		server: true,
		attributeId: 2049,
		type: 'BITMAP32',
		writable: true,
		mandatory: false
	}, {

		label: 975,
		nameFun: 'GenericFlowPressureAlarmMask',
		nameObj: 'genericFlowPressureAlarmMask',
		clusterId: 1794,
		name: 'generic flow / pressure alarm mask',
		server: true,
		attributeId: 2050,
		type: 'BITMAP16',
		writable: true,
		mandatory: false
	}, {

		label: 976,
		nameFun: 'WaterSpecificAlarmMask',
		nameObj: 'waterSpecificAlarmMask',
		clusterId: 1794,
		name: 'water specific alarm mask',
		server: true,
		attributeId: 2051,
		type: 'BITMAP16',
		writable: true,
		mandatory: false
	}, {

		label: 977,
		nameFun: 'HeatAndCoolingSpecificAlarmMask',
		nameObj: 'heatAndCoolingSpecificAlarmMask',
		clusterId: 1794,
		name: 'heat and cooling specific alarm mask',
		server: true,
		attributeId: 2052,
		type: 'BITMAP16',
		writable: true,
		mandatory: false
	}, {

		label: 978,
		nameFun: 'GasSpecificAlarmMask',
		nameObj: 'gasSpecificAlarmMask',
		clusterId: 1794,
		name: 'gas specific alarm mask',
		server: true,
		attributeId: 2053,
		type: 'BITMAP16',
		writable: true,
		mandatory: false
	}, {

		label: 979,
		nameFun: 'CurrentBlockPeriodConsumptionReceived',
		nameObj: 'currentBlockPeriodConsumptionReceived',
		clusterId: 1794,
		name: 'current block period consumption received',
		server: true,
		attributeId: 29,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 980,
		nameFun: 'CurrentBlockReceived',
		nameObj: 'currentBlockReceived',
		clusterId: 1794,
		name: 'current block received',
		server: true,
		attributeId: 30,
		type: 'ENUM8',
		writable: false,
		mandatory: false
	}, {

		label: 981,
		nameFun: 'CurrentTier16SummationDelivered',
		nameObj: 'currentTier16SummationDelivered',
		clusterId: 1794,
		name: 'current tier 16 summation delivered',
		server: true,
		attributeId: 286,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 982,
		nameFun: 'CurrentTier16SummationReceived',
		nameObj: 'currentTier16SummationReceived',
		clusterId: 1794,
		name: 'current tier 16 summation received',
		server: true,
		attributeId: 287,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 983,
		nameFun: 'CurrentTier17SummationDelivered',
		nameObj: 'currentTier17SummationDelivered',
		clusterId: 1794,
		name: 'current tier 17 summation delivered',
		server: true,
		attributeId: 288,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 984,
		nameFun: 'CurrentTier17SummationReceived',
		nameObj: 'currentTier17SummationReceived',
		clusterId: 1794,
		name: 'current tier 17 summation received',
		server: true,
		attributeId: 289,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 985,
		nameFun: 'CurrentTier18SummationDelivered',
		nameObj: 'currentTier18SummationDelivered',
		clusterId: 1794,
		name: 'current tier 18 summation delivered',
		server: true,
		attributeId: 290,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 986,
		nameFun: 'CurrentTier18SummationReceived',
		nameObj: 'currentTier18SummationReceived',
		clusterId: 1794,
		name: 'current tier 18 summation received',
		server: true,
		attributeId: 291,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 987,
		nameFun: 'CurrentTier19SummationDelivered',
		nameObj: 'currentTier19SummationDelivered',
		clusterId: 1794,
		name: 'current tier 19 summation delivered',
		server: true,
		attributeId: 292,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 988,
		nameFun: 'CurrentTier19SummationReceived',
		nameObj: 'currentTier19SummationReceived',
		clusterId: 1794,
		name: 'current tier 19 summation received',
		server: true,
		attributeId: 293,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 989,
		nameFun: 'CurrentTier20SummationDelivered',
		nameObj: 'currentTier20SummationDelivered',
		clusterId: 1794,
		name: 'current tier 20 summation delivered',
		server: true,
		attributeId: 294,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 990,
		nameFun: 'CurrentTier20SummationReceived',
		nameObj: 'currentTier20SummationReceived',
		clusterId: 1794,
		name: 'current tier 20 summation received',
		server: true,
		attributeId: 295,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 991,
		nameFun: 'CurrentTier21SummationDelivered',
		nameObj: 'currentTier21SummationDelivered',
		clusterId: 1794,
		name: 'current tier 21 summation delivered',
		server: true,
		attributeId: 296,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 992,
		nameFun: 'CurrentTier21SummationReceived',
		nameObj: 'currentTier21SummationReceived',
		clusterId: 1794,
		name: 'current tier 21 summation received',
		server: true,
		attributeId: 297,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 993,
		nameFun: 'CurrentTier22SummationDelivered',
		nameObj: 'currentTier22SummationDelivered',
		clusterId: 1794,
		name: 'current tier 22 summation delivered',
		server: true,
		attributeId: 298,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 994,
		nameFun: 'CurrentTier22SummationReceived',
		nameObj: 'currentTier22SummationReceived',
		clusterId: 1794,
		name: 'current tier 22 summation received',
		server: true,
		attributeId: 299,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 995,
		nameFun: 'CurrentTier23SummationDelivered',
		nameObj: 'currentTier23SummationDelivered',
		clusterId: 1794,
		name: 'current tier 23 summation delivered',
		server: true,
		attributeId: 300,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 996,
		nameFun: 'CurrentTier23SummationReceived',
		nameObj: 'currentTier23SummationReceived',
		clusterId: 1794,
		name: 'current tier 23 summation received',
		server: true,
		attributeId: 301,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 997,
		nameFun: 'CurrentTier24SummationDelivered',
		nameObj: 'currentTier24SummationDelivered',
		clusterId: 1794,
		name: 'current tier 24 summation delivered',
		server: true,
		attributeId: 302,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 998,
		nameFun: 'CurrentTier24SummationReceived',
		nameObj: 'currentTier24SummationReceived',
		clusterId: 1794,
		name: 'current tier 24 summation received',
		server: true,
		attributeId: 303,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 999,
		nameFun: 'CurrentTier25SummationDelivered',
		nameObj: 'currentTier25SummationDelivered',
		clusterId: 1794,
		name: 'current tier 25 summation delivered',
		server: true,
		attributeId: 304,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 1000,
		nameFun: 'CurrentTier25SummationReceived',
		nameObj: 'currentTier25SummationReceived',
		clusterId: 1794,
		name: 'current tier 25 summation received',
		server: true,
		attributeId: 305,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 1001,
		nameFun: 'CurrentTier26SummationDelivered',
		nameObj: 'currentTier26SummationDelivered',
		clusterId: 1794,
		name: 'current tier 26 summation delivered',
		server: true,
		attributeId: 306,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 1002,
		nameFun: 'CurrentTier26SummationReceived',
		nameObj: 'currentTier26SummationReceived',
		clusterId: 1794,
		name: 'current tier 26 summation received',
		server: true,
		attributeId: 307,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 1003,
		nameFun: 'CurrentTier27SummationDelivered',
		nameObj: 'currentTier27SummationDelivered',
		clusterId: 1794,
		name: 'current tier 27 summation delivered',
		server: true,
		attributeId: 308,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 1004,
		nameFun: 'CurrentTier27SummationReceived',
		nameObj: 'currentTier27SummationReceived',
		clusterId: 1794,
		name: 'current tier 27 summation received',
		server: true,
		attributeId: 309,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 1005,
		nameFun: 'CurrentTier28SummationDelivered',
		nameObj: 'currentTier28SummationDelivered',
		clusterId: 1794,
		name: 'current tier 28 summation delivered',
		server: true,
		attributeId: 310,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 1006,
		nameFun: 'CurrentTier28SummationReceived',
		nameObj: 'currentTier28SummationReceived',
		clusterId: 1794,
		name: 'current tier 28 summation received',
		server: true,
		attributeId: 311,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 1007,
		nameFun: 'CurrentTier29SummationDelivered',
		nameObj: 'currentTier29SummationDelivered',
		clusterId: 1794,
		name: 'current tier 29 summation delivered',
		server: true,
		attributeId: 312,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 1008,
		nameFun: 'CurrentTier29SummationReceived',
		nameObj: 'currentTier29SummationReceived',
		clusterId: 1794,
		name: 'current tier 29 summation received',
		server: true,
		attributeId: 313,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 1009,
		nameFun: 'CurrentTier30SummationDelivered',
		nameObj: 'currentTier30SummationDelivered',
		clusterId: 1794,
		name: 'current tier 30 summation delivered',
		server: true,
		attributeId: 314,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 1010,
		nameFun: 'CurrentTier30SummationReceived',
		nameObj: 'currentTier30SummationReceived',
		clusterId: 1794,
		name: 'current tier 30 summation received',
		server: true,
		attributeId: 315,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 1011,
		nameFun: 'CurrentTier31SummationDelivered',
		nameObj: 'currentTier31SummationDelivered',
		clusterId: 1794,
		name: 'current tier 31 summation delivered',
		server: true,
		attributeId: 316,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 1012,
		nameFun: 'CurrentTier31SummationReceived',
		nameObj: 'currentTier31SummationReceived',
		clusterId: 1794,
		name: 'current tier 31 summation received',
		server: true,
		attributeId: 317,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 1013,
		nameFun: 'CurrentTier32SummationDelivered',
		nameObj: 'currentTier32SummationDelivered',
		clusterId: 1794,
		name: 'current tier 32 summation delivered',
		server: true,
		attributeId: 318,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 1014,
		nameFun: 'CurrentTier32SummationReceived',
		nameObj: 'currentTier32SummationReceived',
		clusterId: 1794,
		name: 'current tier 32 summation received',
		server: true,
		attributeId: 319,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 1015,
		nameFun: 'CurrentTier33SummationDelivered',
		nameObj: 'currentTier33SummationDelivered',
		clusterId: 1794,
		name: 'current tier 33 summation delivered',
		server: true,
		attributeId: 320,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 1016,
		nameFun: 'CurrentTier33SummationReceived',
		nameObj: 'currentTier33SummationReceived',
		clusterId: 1794,
		name: 'current tier 33 summation received',
		server: true,
		attributeId: 321,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 1017,
		nameFun: 'CurrentTier34SummationDelivered',
		nameObj: 'currentTier34SummationDelivered',
		clusterId: 1794,
		name: 'current tier 34 summation delivered',
		server: true,
		attributeId: 322,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 1018,
		nameFun: 'CurrentTier34SummationReceived',
		nameObj: 'currentTier34SummationReceived',
		clusterId: 1794,
		name: 'current tier 34 summation received',
		server: true,
		attributeId: 323,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 1019,
		nameFun: 'CurrentTier35SummationDelivered',
		nameObj: 'currentTier35SummationDelivered',
		clusterId: 1794,
		name: 'current tier 35 summation delivered',
		server: true,
		attributeId: 324,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 1020,
		nameFun: 'CurrentTier35SummationReceived',
		nameObj: 'currentTier35SummationReceived',
		clusterId: 1794,
		name: 'current tier 35 summation received',
		server: true,
		attributeId: 325,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 1021,
		nameFun: 'CurrentTier36SummationDelivered',
		nameObj: 'currentTier36SummationDelivered',
		clusterId: 1794,
		name: 'current tier 36 summation delivered',
		server: true,
		attributeId: 326,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 1022,
		nameFun: 'CurrentTier36SummationReceived',
		nameObj: 'currentTier36SummationReceived',
		clusterId: 1794,
		name: 'current tier 36 summation received',
		server: true,
		attributeId: 327,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 1023,
		nameFun: 'CurrentTier37SummationDelivered',
		nameObj: 'currentTier37SummationDelivered',
		clusterId: 1794,
		name: 'current tier 37 summation delivered',
		server: true,
		attributeId: 328,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 1024,
		nameFun: 'CurrentTier37SummationReceived',
		nameObj: 'currentTier37SummationReceived',
		clusterId: 1794,
		name: 'current tier 37 summation received',
		server: true,
		attributeId: 329,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 1025,
		nameFun: 'CurrentTier38SummationDelivered',
		nameObj: 'currentTier38SummationDelivered',
		clusterId: 1794,
		name: 'current tier 38 summation delivered',
		server: true,
		attributeId: 330,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 1026,
		nameFun: 'CurrentTier38SummationReceived',
		nameObj: 'currentTier38SummationReceived',
		clusterId: 1794,
		name: 'current tier 38 summation received',
		server: true,
		attributeId: 331,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 1027,
		nameFun: 'CurrentTier39SummationDelivered',
		nameObj: 'currentTier39SummationDelivered',
		clusterId: 1794,
		name: 'current tier 39 summation delivered',
		server: true,
		attributeId: 332,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 1028,
		nameFun: 'CurrentTier39SummationReceived',
		nameObj: 'currentTier39SummationReceived',
		clusterId: 1794,
		name: 'current tier 39 summation received',
		server: true,
		attributeId: 333,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 1029,
		nameFun: 'CurrentTier40SummationDelivered',
		nameObj: 'currentTier40SummationDelivered',
		clusterId: 1794,
		name: 'current tier 40 summation delivered',
		server: true,
		attributeId: 334,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 1030,
		nameFun: 'CurrentTier40SummationReceived',
		nameObj: 'currentTier40SummationReceived',
		clusterId: 1794,
		name: 'current tier 40 summation received',
		server: true,
		attributeId: 335,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 1031,
		nameFun: 'CurrentTier41SummationDelivered',
		nameObj: 'currentTier41SummationDelivered',
		clusterId: 1794,
		name: 'current tier 41 summation delivered',
		server: true,
		attributeId: 336,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 1032,
		nameFun: 'CurrentTier41SummationReceived',
		nameObj: 'currentTier41SummationReceived',
		clusterId: 1794,
		name: 'current tier 41 summation received',
		server: true,
		attributeId: 337,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 1033,
		nameFun: 'CurrentTier42SummationDelivered',
		nameObj: 'currentTier42SummationDelivered',
		clusterId: 1794,
		name: 'current tier 42 summation delivered',
		server: true,
		attributeId: 338,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 1034,
		nameFun: 'CurrentTier42SummationReceived',
		nameObj: 'currentTier42SummationReceived',
		clusterId: 1794,
		name: 'current tier 42 summation received',
		server: true,
		attributeId: 339,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 1035,
		nameFun: 'CurrentTier43SummationDelivered',
		nameObj: 'currentTier43SummationDelivered',
		clusterId: 1794,
		name: 'current tier 43 summation delivered',
		server: true,
		attributeId: 340,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 1036,
		nameFun: 'CurrentTier43SummationReceived',
		nameObj: 'currentTier43SummationReceived',
		clusterId: 1794,
		name: 'current tier 43 summation received',
		server: true,
		attributeId: 341,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 1037,
		nameFun: 'CurrentTier44SummationDelivered',
		nameObj: 'currentTier44SummationDelivered',
		clusterId: 1794,
		name: 'current tier 44 summation delivered',
		server: true,
		attributeId: 342,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 1038,
		nameFun: 'CurrentTier44SummationReceived',
		nameObj: 'currentTier44SummationReceived',
		clusterId: 1794,
		name: 'current tier 44 summation received',
		server: true,
		attributeId: 343,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 1039,
		nameFun: 'CurrentTier45SummationDelivered',
		nameObj: 'currentTier45SummationDelivered',
		clusterId: 1794,
		name: 'current tier 45 summation delivered',
		server: true,
		attributeId: 344,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 1040,
		nameFun: 'CurrentTier45SummationReceived',
		nameObj: 'currentTier45SummationReceived',
		clusterId: 1794,
		name: 'current tier 45 summation received',
		server: true,
		attributeId: 345,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 1041,
		nameFun: 'CurrentTier46SummationDelivered',
		nameObj: 'currentTier46SummationDelivered',
		clusterId: 1794,
		name: 'current tier 46 summation delivered',
		server: true,
		attributeId: 346,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 1042,
		nameFun: 'CurrentTier46SummationReceived',
		nameObj: 'currentTier46SummationReceived',
		clusterId: 1794,
		name: 'current tier 46 summation received',
		server: true,
		attributeId: 347,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 1043,
		nameFun: 'CurrentTier47SummationDelivered',
		nameObj: 'currentTier47SummationDelivered',
		clusterId: 1794,
		name: 'current tier 47 summation delivered',
		server: true,
		attributeId: 348,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 1044,
		nameFun: 'CurrentTier47SummationReceived',
		nameObj: 'currentTier47SummationReceived',
		clusterId: 1794,
		name: 'current tier 47 summation received',
		server: true,
		attributeId: 349,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 1045,
		nameFun: 'CurrentTier48SummationDelivered',
		nameObj: 'currentTier48SummationDelivered',
		clusterId: 1794,
		name: 'current tier 48 summation delivered',
		server: true,
		attributeId: 350,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 1046,
		nameFun: 'CurrentTier48SummationReceived',
		nameObj: 'currentTier48SummationReceived',
		clusterId: 1794,
		name: 'current tier 48 summation received',
		server: true,
		attributeId: 351,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 1047,
		nameFun: 'ExtendedStatus',
		nameObj: 'extendedStatus',
		clusterId: 1794,
		name: 'extended status',
		server: true,
		attributeId: 516,
		type: 'BITMAP48',
		writable: false,
		mandatory: false
	}, {

		label: 1048,
		nameFun: 'ModuleSerialNumber',
		nameObj: 'moduleSerialNumber',
		clusterId: 1794,
		name: 'module serial number',
		server: true,
		attributeId: 782,
		type: 'OCTET_STRING',
		writable: false,
		mandatory: false
	}, {

		label: 1049,
		nameFun: 'OperatingTariffLabel',
		nameObj: 'operatingTariffLabel',
		clusterId: 1794,
		name: 'operating tariff label',
		server: true,
		attributeId: 783,
		type: 'OCTET_STRING',
		writable: false,
		mandatory: false
	}, {

		label: 1050,
		nameFun: 'PreviousDay2ConsumptionDelivered',
		nameObj: 'previousDay2ConsumptionDelivered',
		clusterId: 1794,
		name: 'previous day 2 consumption delivered',
		server: true,
		attributeId: 1056,
		type: 'INT24U',
		writable: false,
		mandatory: false
	}, {

		label: 1051,
		nameFun: 'PreviousDay2ConsumptionReceived',
		nameObj: 'previousDay2ConsumptionReceived',
		clusterId: 1794,
		name: 'previous day 2 consumption received',
		server: true,
		attributeId: 1057,
		type: 'INT24U',
		writable: false,
		mandatory: false
	}, {

		label: 1052,
		nameFun: 'PreviousDay3ConsumptionDelivered',
		nameObj: 'previousDay3ConsumptionDelivered',
		clusterId: 1794,
		name: 'previous day 3 consumption delivered',
		server: true,
		attributeId: 1058,
		type: 'INT24U',
		writable: false,
		mandatory: false
	}, {

		label: 1053,
		nameFun: 'PreviousDay3ConsumptionReceived',
		nameObj: 'previousDay3ConsumptionReceived',
		clusterId: 1794,
		name: 'previous day 3 consumption received',
		server: true,
		attributeId: 1059,
		type: 'INT24U',
		writable: false,
		mandatory: false
	}, {

		label: 1054,
		nameFun: 'PreviousDay4ConsumptionDelivered',
		nameObj: 'previousDay4ConsumptionDelivered',
		clusterId: 1794,
		name: 'previous day 4 consumption delivered',
		server: true,
		attributeId: 1060,
		type: 'INT24U',
		writable: false,
		mandatory: false
	}, {

		label: 1055,
		nameFun: 'PreviousDay4ConsumptionReceived',
		nameObj: 'previousDay4ConsumptionReceived',
		clusterId: 1794,
		name: 'previous day 4 consumption received',
		server: true,
		attributeId: 1061,
		type: 'INT24U',
		writable: false,
		mandatory: false
	}, {

		label: 1056,
		nameFun: 'PreviousDay5ConsumptionDelivered',
		nameObj: 'previousDay5ConsumptionDelivered',
		clusterId: 1794,
		name: 'previous day 5 consumption delivered',
		server: true,
		attributeId: 1062,
		type: 'INT24U',
		writable: false,
		mandatory: false
	}, {

		label: 1057,
		nameFun: 'PreviousDay5ConsumptionReceived',
		nameObj: 'previousDay5ConsumptionReceived',
		clusterId: 1794,
		name: 'previous day 5 consumption received',
		server: true,
		attributeId: 1063,
		type: 'INT24U',
		writable: false,
		mandatory: false
	}, {

		label: 1058,
		nameFun: 'PreviousDay6ConsumptionDelivered',
		nameObj: 'previousDay6ConsumptionDelivered',
		clusterId: 1794,
		name: 'previous day 6 consumption delivered',
		server: true,
		attributeId: 1064,
		type: 'INT24U',
		writable: false,
		mandatory: false
	}, {

		label: 1059,
		nameFun: 'PreviousDay6ConsumptionReceived',
		nameObj: 'previousDay6ConsumptionReceived',
		clusterId: 1794,
		name: 'previous day 6 consumption received',
		server: true,
		attributeId: 1065,
		type: 'INT24U',
		writable: false,
		mandatory: false
	}, {

		label: 1060,
		nameFun: 'PreviousDay7ConsumptionDelivered',
		nameObj: 'previousDay7ConsumptionDelivered',
		clusterId: 1794,
		name: 'previous day 7 consumption delivered',
		server: true,
		attributeId: 1066,
		type: 'INT24U',
		writable: false,
		mandatory: false
	}, {

		label: 1061,
		nameFun: 'PreviousDay7ConsumptionReceived',
		nameObj: 'previousDay7ConsumptionReceived',
		clusterId: 1794,
		name: 'previous day 7 consumption received',
		server: true,
		attributeId: 1067,
		type: 'INT24U',
		writable: false,
		mandatory: false
	}, {

		label: 1062,
		nameFun: 'PreviousDay8ConsumptionDelivered',
		nameObj: 'previousDay8ConsumptionDelivered',
		clusterId: 1794,
		name: 'previous day 8 consumption delivered',
		server: true,
		attributeId: 1068,
		type: 'INT24U',
		writable: false,
		mandatory: false
	}, {

		label: 1063,
		nameFun: 'PreviousDay8ConsumptionReceived',
		nameObj: 'previousDay8ConsumptionReceived',
		clusterId: 1794,
		name: 'previous day 8 consumption received',
		server: true,
		attributeId: 1069,
		type: 'INT24U',
		writable: false,
		mandatory: false
	}, {

		label: 1064,
		nameFun: 'CurrentWeekConsumptionDelivered',
		nameObj: 'currentWeekConsumptionDelivered',
		clusterId: 1794,
		name: 'current week consumption delivered',
		server: true,
		attributeId: 1072,
		type: 'INT24U',
		writable: false,
		mandatory: false
	}, {

		label: 1065,
		nameFun: 'CurrentWeekConsumptionReceived',
		nameObj: 'currentWeekConsumptionReceived',
		clusterId: 1794,
		name: 'current week consumption received',
		server: true,
		attributeId: 1073,
		type: 'INT24U',
		writable: false,
		mandatory: false
	}, {

		label: 1066,
		nameFun: 'PreviousWeekConsumptionDelivered',
		nameObj: 'previousWeekConsumptionDelivered',
		clusterId: 1794,
		name: 'previous week consumption delivered',
		server: true,
		attributeId: 1074,
		type: 'INT24U',
		writable: false,
		mandatory: false
	}, {

		label: 1067,
		nameFun: 'PreviousWeekConsumptionReceived',
		nameObj: 'previousWeekConsumptionReceived',
		clusterId: 1794,
		name: 'previous week consumption received',
		server: true,
		attributeId: 1075,
		type: 'INT24U',
		writable: false,
		mandatory: false
	}, {

		label: 1068,
		nameFun: 'PreviousWeek2ConsumptionDelivered',
		nameObj: 'previousWeek2ConsumptionDelivered',
		clusterId: 1794,
		name: 'previous week 2 consumption delivered',
		server: true,
		attributeId: 1076,
		type: 'INT24U',
		writable: false,
		mandatory: false
	}, {

		label: 1069,
		nameFun: 'PreviousWeek2ConsumptionReceived',
		nameObj: 'previousWeek2ConsumptionReceived',
		clusterId: 1794,
		name: 'previous week 2 consumption received',
		server: true,
		attributeId: 1077,
		type: 'INT24U',
		writable: false,
		mandatory: false
	}, {

		label: 1070,
		nameFun: 'PreviousWeek3ConsumptionDelivered',
		nameObj: 'previousWeek3ConsumptionDelivered',
		clusterId: 1794,
		name: 'previous week 3 consumption delivered',
		server: true,
		attributeId: 1078,
		type: 'INT24U',
		writable: false,
		mandatory: false
	}, {

		label: 1071,
		nameFun: 'PreviousWeek3ConsumptionReceived',
		nameObj: 'previousWeek3ConsumptionReceived',
		clusterId: 1794,
		name: 'previous week 3 consumption received',
		server: true,
		attributeId: 1079,
		type: 'INT24U',
		writable: false,
		mandatory: false
	}, {

		label: 1072,
		nameFun: 'PreviousWeek4ConsumptionDelivered',
		nameObj: 'previousWeek4ConsumptionDelivered',
		clusterId: 1794,
		name: 'previous week 4 consumption delivered',
		server: true,
		attributeId: 1080,
		type: 'INT24U',
		writable: false,
		mandatory: false
	}, {

		label: 1073,
		nameFun: 'PreviousWeek4ConsumptionReceived',
		nameObj: 'previousWeek4ConsumptionReceived',
		clusterId: 1794,
		name: 'previous week 4 consumption received',
		server: true,
		attributeId: 1081,
		type: 'INT24U',
		writable: false,
		mandatory: false
	}, {

		label: 1074,
		nameFun: 'PreviousWeek5ConsumptionDelivered',
		nameObj: 'previousWeek5ConsumptionDelivered',
		clusterId: 1794,
		name: 'previous week 5 consumption delivered',
		server: true,
		attributeId: 1082,
		type: 'INT24U',
		writable: false,
		mandatory: false
	}, {

		label: 1075,
		nameFun: 'PreviousWeek5ConsumptionReceived',
		nameObj: 'previousWeek5ConsumptionReceived',
		clusterId: 1794,
		name: 'previous week 5 consumption received',
		server: true,
		attributeId: 1083,
		type: 'INT24U',
		writable: false,
		mandatory: false
	}, {

		label: 1076,
		nameFun: 'CurrentMonthConsumptionDelivered',
		nameObj: 'currentMonthConsumptionDelivered',
		clusterId: 1794,
		name: 'current month consumption delivered',
		server: true,
		attributeId: 1088,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1077,
		nameFun: 'CurrentMonthConsumptionReceived',
		nameObj: 'currentMonthConsumptionReceived',
		clusterId: 1794,
		name: 'current month consumption received',
		server: true,
		attributeId: 1089,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1078,
		nameFun: 'PreviousMonthConsumptionDelivered',
		nameObj: 'previousMonthConsumptionDelivered',
		clusterId: 1794,
		name: 'previous month consumption delivered',
		server: true,
		attributeId: 1090,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1079,
		nameFun: 'PreviousMonthConsumptionReceived',
		nameObj: 'previousMonthConsumptionReceived',
		clusterId: 1794,
		name: 'previous month consumption received',
		server: true,
		attributeId: 1091,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1080,
		nameFun: 'PreviousMonth2ConsumptionDelivered',
		nameObj: 'previousMonth2ConsumptionDelivered',
		clusterId: 1794,
		name: 'previous month 2 consumption delivered',
		server: true,
		attributeId: 1092,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1081,
		nameFun: 'PreviousMonth2ConsumptionReceived',
		nameObj: 'previousMonth2ConsumptionReceived',
		clusterId: 1794,
		name: 'previous month 2 consumption received',
		server: true,
		attributeId: 1093,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1082,
		nameFun: 'PreviousMonth3ConsumptionDelivered',
		nameObj: 'previousMonth3ConsumptionDelivered',
		clusterId: 1794,
		name: 'previous month 3 consumption delivered',
		server: true,
		attributeId: 1094,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1083,
		nameFun: 'PreviousMonth3ConsumptionReceived',
		nameObj: 'previousMonth3ConsumptionReceived',
		clusterId: 1794,
		name: 'previous month 3 consumption received',
		server: true,
		attributeId: 1095,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1084,
		nameFun: 'PreviousMonth4ConsumptionDelivered',
		nameObj: 'previousMonth4ConsumptionDelivered',
		clusterId: 1794,
		name: 'previous month 4 consumption delivered',
		server: true,
		attributeId: 1096,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1085,
		nameFun: 'PreviousMonth4ConsumptionReceived',
		nameObj: 'previousMonth4ConsumptionReceived',
		clusterId: 1794,
		name: 'previous month 4 consumption received',
		server: true,
		attributeId: 1097,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1086,
		nameFun: 'PreviousMonth5ConsumptionDelivered',
		nameObj: 'previousMonth5ConsumptionDelivered',
		clusterId: 1794,
		name: 'previous month 5 consumption delivered',
		server: true,
		attributeId: 1098,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1087,
		nameFun: 'PreviousMonth5ConsumptionReceived',
		nameObj: 'previousMonth5ConsumptionReceived',
		clusterId: 1794,
		name: 'previous month 5 consumption received',
		server: true,
		attributeId: 1099,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1088,
		nameFun: 'PreviousMonth6ConsumptionDelivered',
		nameObj: 'previousMonth6ConsumptionDelivered',
		clusterId: 1794,
		name: 'previous month 6 consumption delivered',
		server: true,
		attributeId: 1100,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1089,
		nameFun: 'PreviousMonth6ConsumptionReceived',
		nameObj: 'previousMonth6ConsumptionReceived',
		clusterId: 1794,
		name: 'previous month 6 consumption received',
		server: true,
		attributeId: 1101,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1090,
		nameFun: 'PreviousMonth7ConsumptionDelivered',
		nameObj: 'previousMonth7ConsumptionDelivered',
		clusterId: 1794,
		name: 'previous month 7 consumption delivered',
		server: true,
		attributeId: 1102,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1091,
		nameFun: 'PreviousMonth7ConsumptionReceived',
		nameObj: 'previousMonth7ConsumptionReceived',
		clusterId: 1794,
		name: 'previous month 7 consumption received',
		server: true,
		attributeId: 1103,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1092,
		nameFun: 'PreviousMonth8ConsumptionDelivered',
		nameObj: 'previousMonth8ConsumptionDelivered',
		clusterId: 1794,
		name: 'previous month 8 consumption delivered',
		server: true,
		attributeId: 1104,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1093,
		nameFun: 'PreviousMonth8ConsumptionReceived',
		nameObj: 'previousMonth8ConsumptionReceived',
		clusterId: 1794,
		name: 'previous month 8 consumption received',
		server: true,
		attributeId: 1105,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1094,
		nameFun: 'PreviousMonth9ConsumptionDelivered',
		nameObj: 'previousMonth9ConsumptionDelivered',
		clusterId: 1794,
		name: 'previous month 9 consumption delivered',
		server: true,
		attributeId: 1106,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1095,
		nameFun: 'PreviousMonth9ConsumptionReceived',
		nameObj: 'previousMonth9ConsumptionReceived',
		clusterId: 1794,
		name: 'previous month 9 consumption received',
		server: true,
		attributeId: 1107,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1096,
		nameFun: 'PreviousMonth10ConsumptionDelivered',
		nameObj: 'previousMonth10ConsumptionDelivered',
		clusterId: 1794,
		name: 'previous month 10 consumption delivered',
		server: true,
		attributeId: 1108,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1097,
		nameFun: 'PreviousMonth10ConsumptionReceived',
		nameObj: 'previousMonth10ConsumptionReceived',
		clusterId: 1794,
		name: 'previous month 10 consumption received',
		server: true,
		attributeId: 1109,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1098,
		nameFun: 'PreviousMonth11ConsumptionDelivered',
		nameObj: 'previousMonth11ConsumptionDelivered',
		clusterId: 1794,
		name: 'previous month 11 consumption delivered',
		server: true,
		attributeId: 1110,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1099,
		nameFun: 'PreviousMonth11ConsumptionReceived',
		nameObj: 'previousMonth11ConsumptionReceived',
		clusterId: 1794,
		name: 'previous month 11 consumption received',
		server: true,
		attributeId: 1111,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1100,
		nameFun: 'PreviousMonth12ConsumptionDelivered',
		nameObj: 'previousMonth12ConsumptionDelivered',
		clusterId: 1794,
		name: 'previous month 12 consumption delivered',
		server: true,
		attributeId: 1112,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1101,
		nameFun: 'PreviousMonth12ConsumptionReceived',
		nameObj: 'previousMonth12ConsumptionReceived',
		clusterId: 1794,
		name: 'previous month 12 consumption received',
		server: true,
		attributeId: 1113,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1102,
		nameFun: 'PreviousMonth13ConsumptionDelivered',
		nameObj: 'previousMonth13ConsumptionDelivered',
		clusterId: 1794,
		name: 'previous month 13 consumption delivered',
		server: true,
		attributeId: 1114,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1103,
		nameFun: 'PreviousMonth13ConsumptionReceived',
		nameObj: 'previousMonth13ConsumptionReceived',
		clusterId: 1794,
		name: 'previous month 13 consumption received',
		server: true,
		attributeId: 1115,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1104,
		nameFun: 'DemandLimitArmDurationInMinutes',
		nameObj: 'demandLimitArmDurationInMinutes',
		clusterId: 1794,
		name: 'demand limit arm duration in minutes',
		server: true,
		attributeId: 1540,
		type: 'INT16U',
		writable: false,
		mandatory: false
	}, {

		label: 1105,
		nameFun: 'ExtendedGenericAlarmMask',
		nameObj: 'extendedGenericAlarmMask',
		clusterId: 1794,
		name: 'Extended Generic Alarm Mask',
		server: true,
		attributeId: 2054,
		type: 'BITMAP16',
		writable: true,
		mandatory: false
	}, {

		label: 1106,
		nameFun: 'ManufactureAlarmMask',
		nameObj: 'manufactureAlarmMask',
		clusterId: 1794,
		name: 'Manufacture alarm mask',
		server: true,
		attributeId: 2055,
		type: 'BITMAP48',
		writable: true,
		mandatory: false
	}, {

		label: 1107,
		nameFun: 'CurrentNoTierBlock1SummationReceived',
		nameObj: 'currentNoTierBlock1SummationReceived',
		clusterId: 1794,
		name: 'current no tier block 1 summation received',
		server: true,
		attributeId: 2304,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 1108,
		nameFun: 'CurrentNoTierBlock2SummationReceived',
		nameObj: 'currentNoTierBlock2SummationReceived',
		clusterId: 1794,
		name: 'current no tier block 2 summation received',
		server: true,
		attributeId: 2305,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 1109,
		nameFun: 'CurrentNoTierBlock3SummationReceived',
		nameObj: 'currentNoTierBlock3SummationReceived',
		clusterId: 1794,
		name: 'current no tier block 3 summation received',
		server: true,
		attributeId: 2306,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 1110,
		nameFun: 'CurrentNoTierBlock4SummationReceived',
		nameObj: 'currentNoTierBlock4SummationReceived',
		clusterId: 1794,
		name: 'current no tier block 4 summation received',
		server: true,
		attributeId: 2307,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 1111,
		nameFun: 'CurrentNoTierBlock5SummationReceived',
		nameObj: 'currentNoTierBlock5SummationReceived',
		clusterId: 1794,
		name: 'current no tier block 5 summation received',
		server: true,
		attributeId: 2308,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 1112,
		nameFun: 'CurrentNoTierBlock6SummationReceived',
		nameObj: 'currentNoTierBlock6SummationReceived',
		clusterId: 1794,
		name: 'current no tier block 6 summation received',
		server: true,
		attributeId: 2309,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 1113,
		nameFun: 'CurrentNoTierBlock7SummationReceived',
		nameObj: 'currentNoTierBlock7SummationReceived',
		clusterId: 1794,
		name: 'current no tier block 7 summation received',
		server: true,
		attributeId: 2310,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 1114,
		nameFun: 'CurrentNoTierBlock8SummationReceived',
		nameObj: 'currentNoTierBlock8SummationReceived',
		clusterId: 1794,
		name: 'current no tier block 8 summation received',
		server: true,
		attributeId: 2311,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 1115,
		nameFun: 'CurrentNoTierBlock9SummationReceived',
		nameObj: 'currentNoTierBlock9SummationReceived',
		clusterId: 1794,
		name: 'current no tier block 9 summation received',
		server: true,
		attributeId: 2312,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 1116,
		nameFun: 'CurrentNoTierBlock10SummationReceived',
		nameObj: 'currentNoTierBlock10SummationReceived',
		clusterId: 1794,
		name: 'current no tier block 10 summation received',
		server: true,
		attributeId: 2313,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 1117,
		nameFun: 'CurrentNoTierBlock11SummationReceived',
		nameObj: 'currentNoTierBlock11SummationReceived',
		clusterId: 1794,
		name: 'current no tier block 11 summation received',
		server: true,
		attributeId: 2314,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 1118,
		nameFun: 'CurrentNoTierBlock12SummationReceived',
		nameObj: 'currentNoTierBlock12SummationReceived',
		clusterId: 1794,
		name: 'current no tier block 12 summation received',
		server: true,
		attributeId: 2315,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 1119,
		nameFun: 'CurrentNoTierBlock13SummationReceived',
		nameObj: 'currentNoTierBlock13SummationReceived',
		clusterId: 1794,
		name: 'current no tier block 13 summation received',
		server: true,
		attributeId: 2316,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 1120,
		nameFun: 'CurrentNoTierBlock14SummationReceived',
		nameObj: 'currentNoTierBlock14SummationReceived',
		clusterId: 1794,
		name: 'current no tier block 14 summation received',
		server: true,
		attributeId: 2317,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 1121,
		nameFun: 'CurrentNoTierBlock15SummationReceived',
		nameObj: 'currentNoTierBlock15SummationReceived',
		clusterId: 1794,
		name: 'current no tier block 15 summation received',
		server: true,
		attributeId: 2318,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 1122,
		nameFun: 'CurrentNoTierBlock16SummationReceived',
		nameObj: 'currentNoTierBlock16SummationReceived',
		clusterId: 1794,
		name: 'current no tier block 16 summation received',
		server: true,
		attributeId: 2319,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 1123,
		nameFun: 'CurrentTier1Block1SummationReceived',
		nameObj: 'currentTier1Block1SummationReceived',
		clusterId: 1794,
		name: 'current tier 1 block 1 summation received',
		server: true,
		attributeId: 2320,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 1124,
		nameFun: 'CurrentTier1Block2SummationReceived',
		nameObj: 'currentTier1Block2SummationReceived',
		clusterId: 1794,
		name: 'current tier 1 block 2 summation received',
		server: true,
		attributeId: 2321,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 1125,
		nameFun: 'CurrentTier1Block3SummationReceived',
		nameObj: 'currentTier1Block3SummationReceived',
		clusterId: 1794,
		name: 'current tier 1 block 3 summation received',
		server: true,
		attributeId: 2322,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 1126,
		nameFun: 'CurrentTier1Block4SummationReceived',
		nameObj: 'currentTier1Block4SummationReceived',
		clusterId: 1794,
		name: 'current tier 1 block 4 summation received',
		server: true,
		attributeId: 2323,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 1127,
		nameFun: 'CurrentTier1Block5SummationReceived',
		nameObj: 'currentTier1Block5SummationReceived',
		clusterId: 1794,
		name: 'current tier 1 block 5 summation received',
		server: true,
		attributeId: 2324,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 1128,
		nameFun: 'CurrentTier1Block6SummationReceived',
		nameObj: 'currentTier1Block6SummationReceived',
		clusterId: 1794,
		name: 'current tier 1 block 6 summation received',
		server: true,
		attributeId: 2325,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 1129,
		nameFun: 'CurrentTier1Block7SummationReceived',
		nameObj: 'currentTier1Block7SummationReceived',
		clusterId: 1794,
		name: 'current tier 1 block 7 summation received',
		server: true,
		attributeId: 2326,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 1130,
		nameFun: 'CurrentTier1Block8SummationReceived',
		nameObj: 'currentTier1Block8SummationReceived',
		clusterId: 1794,
		name: 'current tier 1 block 8 summation received',
		server: true,
		attributeId: 2327,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 1131,
		nameFun: 'CurrentTier1Block9SummationReceived',
		nameObj: 'currentTier1Block9SummationReceived',
		clusterId: 1794,
		name: 'current tier 1 block 9 summation received',
		server: true,
		attributeId: 2328,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 1132,
		nameFun: 'CurrentTier1Block10SummationReceived',
		nameObj: 'currentTier1Block10SummationReceived',
		clusterId: 1794,
		name: 'current tier 1 block 10 summation received',
		server: true,
		attributeId: 2329,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 1133,
		nameFun: 'CurrentTier1Block11SummationReceived',
		nameObj: 'currentTier1Block11SummationReceived',
		clusterId: 1794,
		name: 'current tier 1 block 11 summation received',
		server: true,
		attributeId: 2330,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 1134,
		nameFun: 'CurrentTier1Block12SummationReceived',
		nameObj: 'currentTier1Block12SummationReceived',
		clusterId: 1794,
		name: 'current tier 1 block 12 summation received',
		server: true,
		attributeId: 2331,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 1135,
		nameFun: 'CurrentTier1Block13SummationReceived',
		nameObj: 'currentTier1Block13SummationReceived',
		clusterId: 1794,
		name: 'current tier 1 block 13 summation received',
		server: true,
		attributeId: 2332,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 1136,
		nameFun: 'CurrentTier1Block14SummationReceived',
		nameObj: 'currentTier1Block14SummationReceived',
		clusterId: 1794,
		name: 'current tier 1 block 14 summation received',
		server: true,
		attributeId: 2333,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 1137,
		nameFun: 'CurrentTier1Block15SummationReceived',
		nameObj: 'currentTier1Block15SummationReceived',
		clusterId: 1794,
		name: 'current tier 1 block 15 summation received',
		server: true,
		attributeId: 2334,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 1138,
		nameFun: 'CurrentTier1Block16SummationReceived',
		nameObj: 'currentTier1Block16SummationReceived',
		clusterId: 1794,
		name: 'current tier 1 block 16 summation received',
		server: true,
		attributeId: 2335,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 1139,
		nameFun: 'CurrentTier2Block1SummationReceived',
		nameObj: 'currentTier2Block1SummationReceived',
		clusterId: 1794,
		name: 'current tier 2 block 1 summation received',
		server: true,
		attributeId: 2336,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 1140,
		nameFun: 'CurrentTier2Block2SummationReceived',
		nameObj: 'currentTier2Block2SummationReceived',
		clusterId: 1794,
		name: 'current tier 2 block 2 summation received',
		server: true,
		attributeId: 2337,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 1141,
		nameFun: 'CurrentTier2Block3SummationReceived',
		nameObj: 'currentTier2Block3SummationReceived',
		clusterId: 1794,
		name: 'current tier 2 block 3 summation received',
		server: true,
		attributeId: 2338,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 1142,
		nameFun: 'CurrentTier2Block4SummationReceived',
		nameObj: 'currentTier2Block4SummationReceived',
		clusterId: 1794,
		name: 'current tier 2 block 4 summation received',
		server: true,
		attributeId: 2339,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 1143,
		nameFun: 'CurrentTier2Block5SummationReceived',
		nameObj: 'currentTier2Block5SummationReceived',
		clusterId: 1794,
		name: 'current tier 2 block 5 summation received',
		server: true,
		attributeId: 2340,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 1144,
		nameFun: 'CurrentTier2Block6SummationReceived',
		nameObj: 'currentTier2Block6SummationReceived',
		clusterId: 1794,
		name: 'current tier 2 block 6 summation received',
		server: true,
		attributeId: 2341,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 1145,
		nameFun: 'CurrentTier2Block7SummationReceived',
		nameObj: 'currentTier2Block7SummationReceived',
		clusterId: 1794,
		name: 'current tier 2 block 7 summation received',
		server: true,
		attributeId: 2342,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 1146,
		nameFun: 'CurrentTier2Block8SummationReceived',
		nameObj: 'currentTier2Block8SummationReceived',
		clusterId: 1794,
		name: 'current tier 2 block 8 summation received',
		server: true,
		attributeId: 2343,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 1147,
		nameFun: 'CurrentTier2Block9SummationReceived',
		nameObj: 'currentTier2Block9SummationReceived',
		clusterId: 1794,
		name: 'current tier 2 block 9 summation received',
		server: true,
		attributeId: 2344,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 1148,
		nameFun: 'CurrentTier2Block10SummationReceived',
		nameObj: 'currentTier2Block10SummationReceived',
		clusterId: 1794,
		name: 'current tier 2 block 10 summation received',
		server: true,
		attributeId: 2345,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 1149,
		nameFun: 'CurrentTier2Block11SummationReceived',
		nameObj: 'currentTier2Block11SummationReceived',
		clusterId: 1794,
		name: 'current tier 2 block 11 summation received',
		server: true,
		attributeId: 2346,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 1150,
		nameFun: 'CurrentTier2Block12SummationReceived',
		nameObj: 'currentTier2Block12SummationReceived',
		clusterId: 1794,
		name: 'current tier 2 block 12 summation received',
		server: true,
		attributeId: 2347,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 1151,
		nameFun: 'CurrentTier2Block13SummationReceived',
		nameObj: 'currentTier2Block13SummationReceived',
		clusterId: 1794,
		name: 'current tier 2 block 13 summation received',
		server: true,
		attributeId: 2348,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 1152,
		nameFun: 'CurrentTier2Block14SummationReceived',
		nameObj: 'currentTier2Block14SummationReceived',
		clusterId: 1794,
		name: 'current tier 2 block 14 summation received',
		server: true,
		attributeId: 2349,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 1153,
		nameFun: 'CurrentTier2Block15SummationReceived',
		nameObj: 'currentTier2Block15SummationReceived',
		clusterId: 1794,
		name: 'current tier 2 block 15 summation received',
		server: true,
		attributeId: 2350,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 1154,
		nameFun: 'CurrentTier2Block16SummationReceived',
		nameObj: 'currentTier2Block16SummationReceived',
		clusterId: 1794,
		name: 'current tier 2 block 16 summation received',
		server: true,
		attributeId: 2351,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 1155,
		nameFun: 'CurrentTier3Block1SummationReceived',
		nameObj: 'currentTier3Block1SummationReceived',
		clusterId: 1794,
		name: 'current tier 3 block 1 summation received',
		server: true,
		attributeId: 2352,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 1156,
		nameFun: 'CurrentTier3Block2SummationReceived',
		nameObj: 'currentTier3Block2SummationReceived',
		clusterId: 1794,
		name: 'current tier 3 block 2 summation received',
		server: true,
		attributeId: 2353,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 1157,
		nameFun: 'CurrentTier3Block3SummationReceived',
		nameObj: 'currentTier3Block3SummationReceived',
		clusterId: 1794,
		name: 'current tier 3 block 3 summation received',
		server: true,
		attributeId: 2354,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 1158,
		nameFun: 'CurrentTier3Block4SummationReceived',
		nameObj: 'currentTier3Block4SummationReceived',
		clusterId: 1794,
		name: 'current tier 3 block 4 summation received',
		server: true,
		attributeId: 2355,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 1159,
		nameFun: 'CurrentTier3Block5SummationReceived',
		nameObj: 'currentTier3Block5SummationReceived',
		clusterId: 1794,
		name: 'current tier 3 block 5 summation received',
		server: true,
		attributeId: 2356,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 1160,
		nameFun: 'CurrentTier3Block6SummationReceived',
		nameObj: 'currentTier3Block6SummationReceived',
		clusterId: 1794,
		name: 'current tier 3 block 6 summation received',
		server: true,
		attributeId: 2357,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 1161,
		nameFun: 'CurrentTier3Block7SummationReceived',
		nameObj: 'currentTier3Block7SummationReceived',
		clusterId: 1794,
		name: 'current tier 3 block 7 summation received',
		server: true,
		attributeId: 2358,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 1162,
		nameFun: 'CurrentTier3Block8SummationReceived',
		nameObj: 'currentTier3Block8SummationReceived',
		clusterId: 1794,
		name: 'current tier 3 block 8 summation received',
		server: true,
		attributeId: 2359,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 1163,
		nameFun: 'CurrentTier3Block9SummationReceived',
		nameObj: 'currentTier3Block9SummationReceived',
		clusterId: 1794,
		name: 'current tier 3 block 9 summation received',
		server: true,
		attributeId: 2360,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 1164,
		nameFun: 'CurrentTier3Block10SummationReceived',
		nameObj: 'currentTier3Block10SummationReceived',
		clusterId: 1794,
		name: 'current tier 3 block 10 summation received',
		server: true,
		attributeId: 2361,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 1165,
		nameFun: 'CurrentTier3Block11SummationReceived',
		nameObj: 'currentTier3Block11SummationReceived',
		clusterId: 1794,
		name: 'current tier 3 block 11 summation received',
		server: true,
		attributeId: 2362,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 1166,
		nameFun: 'CurrentTier3Block12SummationReceived',
		nameObj: 'currentTier3Block12SummationReceived',
		clusterId: 1794,
		name: 'current tier 3 block 12 summation received',
		server: true,
		attributeId: 2363,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 1167,
		nameFun: 'CurrentTier3Block13SummationReceived',
		nameObj: 'currentTier3Block13SummationReceived',
		clusterId: 1794,
		name: 'current tier 3 block 13 summation received',
		server: true,
		attributeId: 2364,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 1168,
		nameFun: 'CurrentTier3Block14SummationReceived',
		nameObj: 'currentTier3Block14SummationReceived',
		clusterId: 1794,
		name: 'current tier 3 block 14 summation received',
		server: true,
		attributeId: 2365,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 1169,
		nameFun: 'CurrentTier3Block15SummationReceived',
		nameObj: 'currentTier3Block15SummationReceived',
		clusterId: 1794,
		name: 'current tier 3 block 15 summation received',
		server: true,
		attributeId: 2366,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 1170,
		nameFun: 'CurrentTier3Block16SummationReceived',
		nameObj: 'currentTier3Block16SummationReceived',
		clusterId: 1794,
		name: 'current tier 3 block 16 summation received',
		server: true,
		attributeId: 2367,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 1171,
		nameFun: 'CurrentTier4Block1SummationReceived',
		nameObj: 'currentTier4Block1SummationReceived',
		clusterId: 1794,
		name: 'current tier 4 block 1 summation received',
		server: true,
		attributeId: 2368,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 1172,
		nameFun: 'CurrentTier4Block2SummationReceived',
		nameObj: 'currentTier4Block2SummationReceived',
		clusterId: 1794,
		name: 'current tier 4 block 2 summation received',
		server: true,
		attributeId: 2369,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 1173,
		nameFun: 'CurrentTier4Block3SummationReceived',
		nameObj: 'currentTier4Block3SummationReceived',
		clusterId: 1794,
		name: 'current tier 4 block 3 summation received',
		server: true,
		attributeId: 2370,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 1174,
		nameFun: 'CurrentTier4Block4SummationReceived',
		nameObj: 'currentTier4Block4SummationReceived',
		clusterId: 1794,
		name: 'current tier 4 block 4 summation received',
		server: true,
		attributeId: 2371,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 1175,
		nameFun: 'CurrentTier4Block5SummationReceived',
		nameObj: 'currentTier4Block5SummationReceived',
		clusterId: 1794,
		name: 'current tier 4 block 5 summation received',
		server: true,
		attributeId: 2372,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 1176,
		nameFun: 'CurrentTier4Block6SummationReceived',
		nameObj: 'currentTier4Block6SummationReceived',
		clusterId: 1794,
		name: 'current tier 4 block 6 summation received',
		server: true,
		attributeId: 2373,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 1177,
		nameFun: 'CurrentTier4Block7SummationReceived',
		nameObj: 'currentTier4Block7SummationReceived',
		clusterId: 1794,
		name: 'current tier 4 block 7 summation received',
		server: true,
		attributeId: 2374,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 1178,
		nameFun: 'CurrentTier4Block8SummationReceived',
		nameObj: 'currentTier4Block8SummationReceived',
		clusterId: 1794,
		name: 'current tier 4 block 8 summation received',
		server: true,
		attributeId: 2375,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 1179,
		nameFun: 'CurrentTier4Block9SummationReceived',
		nameObj: 'currentTier4Block9SummationReceived',
		clusterId: 1794,
		name: 'current tier 4 block 9 summation received',
		server: true,
		attributeId: 2376,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 1180,
		nameFun: 'CurrentTier4Block10SummationReceived',
		nameObj: 'currentTier4Block10SummationReceived',
		clusterId: 1794,
		name: 'current tier 4 block 10 summation received',
		server: true,
		attributeId: 2377,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 1181,
		nameFun: 'CurrentTier4Block11SummationReceived',
		nameObj: 'currentTier4Block11SummationReceived',
		clusterId: 1794,
		name: 'current tier 4 block 11 summation received',
		server: true,
		attributeId: 2378,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 1182,
		nameFun: 'CurrentTier4Block12SummationReceived',
		nameObj: 'currentTier4Block12SummationReceived',
		clusterId: 1794,
		name: 'current tier 4 block 12 summation received',
		server: true,
		attributeId: 2379,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 1183,
		nameFun: 'CurrentTier4Block13SummationReceived',
		nameObj: 'currentTier4Block13SummationReceived',
		clusterId: 1794,
		name: 'current tier 4 block 13 summation received',
		server: true,
		attributeId: 2380,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 1184,
		nameFun: 'CurrentTier4Block14SummationReceived',
		nameObj: 'currentTier4Block14SummationReceived',
		clusterId: 1794,
		name: 'current tier 4 block 14 summation received',
		server: true,
		attributeId: 2381,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 1185,
		nameFun: 'CurrentTier4Block15SummationReceived',
		nameObj: 'currentTier4Block15SummationReceived',
		clusterId: 1794,
		name: 'current tier 4 block 15 summation received',
		server: true,
		attributeId: 2382,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 1186,
		nameFun: 'CurrentTier4Block16SummationReceived',
		nameObj: 'currentTier4Block16SummationReceived',
		clusterId: 1794,
		name: 'current tier 4 block 16 summation received',
		server: true,
		attributeId: 2383,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 1187,
		nameFun: 'CurrentTier5Block1SummationReceived',
		nameObj: 'currentTier5Block1SummationReceived',
		clusterId: 1794,
		name: 'current tier 5 block 1 summation received',
		server: true,
		attributeId: 2384,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 1188,
		nameFun: 'CurrentTier5Block2SummationReceived',
		nameObj: 'currentTier5Block2SummationReceived',
		clusterId: 1794,
		name: 'current tier 5 block 2 summation received',
		server: true,
		attributeId: 2385,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 1189,
		nameFun: 'CurrentTier5Block3SummationReceived',
		nameObj: 'currentTier5Block3SummationReceived',
		clusterId: 1794,
		name: 'current tier 5 block 3 summation received',
		server: true,
		attributeId: 2386,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 1190,
		nameFun: 'CurrentTier5Block4SummationReceived',
		nameObj: 'currentTier5Block4SummationReceived',
		clusterId: 1794,
		name: 'current tier 5 block 4 summation received',
		server: true,
		attributeId: 2387,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 1191,
		nameFun: 'CurrentTier5Block5SummationReceived',
		nameObj: 'currentTier5Block5SummationReceived',
		clusterId: 1794,
		name: 'current tier 5 block 5 summation received',
		server: true,
		attributeId: 2388,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 1192,
		nameFun: 'CurrentTier5Block6SummationReceived',
		nameObj: 'currentTier5Block6SummationReceived',
		clusterId: 1794,
		name: 'current tier 5 block 6 summation received',
		server: true,
		attributeId: 2389,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 1193,
		nameFun: 'CurrentTier5Block7SummationReceived',
		nameObj: 'currentTier5Block7SummationReceived',
		clusterId: 1794,
		name: 'current tier 5 block 7 summation received',
		server: true,
		attributeId: 2390,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 1194,
		nameFun: 'CurrentTier5Block8SummationReceived',
		nameObj: 'currentTier5Block8SummationReceived',
		clusterId: 1794,
		name: 'current tier 5 block 8 summation received',
		server: true,
		attributeId: 2391,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 1195,
		nameFun: 'CurrentTier5Block9SummationReceived',
		nameObj: 'currentTier5Block9SummationReceived',
		clusterId: 1794,
		name: 'current tier 5 block 9 summation received',
		server: true,
		attributeId: 2392,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 1196,
		nameFun: 'CurrentTier5Block10SummationReceived',
		nameObj: 'currentTier5Block10SummationReceived',
		clusterId: 1794,
		name: 'current tier 5 block 10 summation received',
		server: true,
		attributeId: 2393,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 1197,
		nameFun: 'CurrentTier5Block11SummationReceived',
		nameObj: 'currentTier5Block11SummationReceived',
		clusterId: 1794,
		name: 'current tier 5 block 11 summation received',
		server: true,
		attributeId: 2394,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 1198,
		nameFun: 'CurrentTier5Block12SummationReceived',
		nameObj: 'currentTier5Block12SummationReceived',
		clusterId: 1794,
		name: 'current tier 5 block 12 summation received',
		server: true,
		attributeId: 2395,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 1199,
		nameFun: 'CurrentTier5Block13SummationReceived',
		nameObj: 'currentTier5Block13SummationReceived',
		clusterId: 1794,
		name: 'current tier 5 block 13 summation received',
		server: true,
		attributeId: 2396,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 1200,
		nameFun: 'CurrentTier5Block14SummationReceived',
		nameObj: 'currentTier5Block14SummationReceived',
		clusterId: 1794,
		name: 'current tier 5 block 14 summation received',
		server: true,
		attributeId: 2397,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 1201,
		nameFun: 'CurrentTier5Block15SummationReceived',
		nameObj: 'currentTier5Block15SummationReceived',
		clusterId: 1794,
		name: 'current tier 5 block 15 summation received',
		server: true,
		attributeId: 2398,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 1202,
		nameFun: 'CurrentTier5Block16SummationReceived',
		nameObj: 'currentTier5Block16SummationReceived',
		clusterId: 1794,
		name: 'current tier 5 block 16 summation received',
		server: true,
		attributeId: 2399,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 1203,
		nameFun: 'CurrentTier6Block1SummationReceived',
		nameObj: 'currentTier6Block1SummationReceived',
		clusterId: 1794,
		name: 'current tier 6 block 1 summation received',
		server: true,
		attributeId: 2400,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 1204,
		nameFun: 'CurrentTier6Block2SummationReceived',
		nameObj: 'currentTier6Block2SummationReceived',
		clusterId: 1794,
		name: 'current tier 6 block 2 summation received',
		server: true,
		attributeId: 2401,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 1205,
		nameFun: 'CurrentTier6Block3SummationReceived',
		nameObj: 'currentTier6Block3SummationReceived',
		clusterId: 1794,
		name: 'current tier 6 block 3 summation received',
		server: true,
		attributeId: 2402,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 1206,
		nameFun: 'CurrentTier6Block4SummationReceived',
		nameObj: 'currentTier6Block4SummationReceived',
		clusterId: 1794,
		name: 'current tier 6 block 4 summation received',
		server: true,
		attributeId: 2403,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 1207,
		nameFun: 'CurrentTier6Block5SummationReceived',
		nameObj: 'currentTier6Block5SummationReceived',
		clusterId: 1794,
		name: 'current tier 6 block 5 summation received',
		server: true,
		attributeId: 2404,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 1208,
		nameFun: 'CurrentTier6Block6SummationReceived',
		nameObj: 'currentTier6Block6SummationReceived',
		clusterId: 1794,
		name: 'current tier 6 block 6 summation received',
		server: true,
		attributeId: 2405,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 1209,
		nameFun: 'CurrentTier6Block7SummationReceived',
		nameObj: 'currentTier6Block7SummationReceived',
		clusterId: 1794,
		name: 'current tier 6 block 7 summation received',
		server: true,
		attributeId: 2406,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 1210,
		nameFun: 'CurrentTier6Block8SummationReceived',
		nameObj: 'currentTier6Block8SummationReceived',
		clusterId: 1794,
		name: 'current tier 6 block 8 summation received',
		server: true,
		attributeId: 2407,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 1211,
		nameFun: 'CurrentTier6Block9SummationReceived',
		nameObj: 'currentTier6Block9SummationReceived',
		clusterId: 1794,
		name: 'current tier 6 block 9 summation received',
		server: true,
		attributeId: 2408,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 1212,
		nameFun: 'CurrentTier6Block10SummationReceived',
		nameObj: 'currentTier6Block10SummationReceived',
		clusterId: 1794,
		name: 'current tier 6 block 10 summation received',
		server: true,
		attributeId: 2409,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 1213,
		nameFun: 'CurrentTier6Block11SummationReceived',
		nameObj: 'currentTier6Block11SummationReceived',
		clusterId: 1794,
		name: 'current tier 6 block 11 summation received',
		server: true,
		attributeId: 2410,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 1214,
		nameFun: 'CurrentTier6Block12SummationReceived',
		nameObj: 'currentTier6Block12SummationReceived',
		clusterId: 1794,
		name: 'current tier 6 block 12 summation received',
		server: true,
		attributeId: 2411,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 1215,
		nameFun: 'CurrentTier6Block13SummationReceived',
		nameObj: 'currentTier6Block13SummationReceived',
		clusterId: 1794,
		name: 'current tier 6 block 13 summation received',
		server: true,
		attributeId: 2412,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 1216,
		nameFun: 'CurrentTier6Block14SummationReceived',
		nameObj: 'currentTier6Block14SummationReceived',
		clusterId: 1794,
		name: 'current tier 6 block 14 summation received',
		server: true,
		attributeId: 2413,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 1217,
		nameFun: 'CurrentTier6Block15SummationReceived',
		nameObj: 'currentTier6Block15SummationReceived',
		clusterId: 1794,
		name: 'current tier 6 block 15 summation received',
		server: true,
		attributeId: 2414,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 1218,
		nameFun: 'CurrentTier6Block16SummationReceived',
		nameObj: 'currentTier6Block16SummationReceived',
		clusterId: 1794,
		name: 'current tier 6 block 16 summation received',
		server: true,
		attributeId: 2415,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 1219,
		nameFun: 'CurrentTier7Block1SummationReceived',
		nameObj: 'currentTier7Block1SummationReceived',
		clusterId: 1794,
		name: 'current tier 7 block 1 summation received',
		server: true,
		attributeId: 2416,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 1220,
		nameFun: 'CurrentTier7Block2SummationReceived',
		nameObj: 'currentTier7Block2SummationReceived',
		clusterId: 1794,
		name: 'current tier 7 block 2 summation received',
		server: true,
		attributeId: 2417,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 1221,
		nameFun: 'CurrentTier7Block3SummationReceived',
		nameObj: 'currentTier7Block3SummationReceived',
		clusterId: 1794,
		name: 'current tier 7 block 3 summation received',
		server: true,
		attributeId: 2418,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 1222,
		nameFun: 'CurrentTier7Block4SummationReceived',
		nameObj: 'currentTier7Block4SummationReceived',
		clusterId: 1794,
		name: 'current tier 7 block 4 summation received',
		server: true,
		attributeId: 2419,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 1223,
		nameFun: 'CurrentTier7Block5SummationReceived',
		nameObj: 'currentTier7Block5SummationReceived',
		clusterId: 1794,
		name: 'current tier 7 block 5 summation received',
		server: true,
		attributeId: 2420,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 1224,
		nameFun: 'CurrentTier7Block6SummationReceived',
		nameObj: 'currentTier7Block6SummationReceived',
		clusterId: 1794,
		name: 'current tier 7 block 6 summation received',
		server: true,
		attributeId: 2421,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 1225,
		nameFun: 'CurrentTier7Block7SummationReceived',
		nameObj: 'currentTier7Block7SummationReceived',
		clusterId: 1794,
		name: 'current tier 7 block 7 summation received',
		server: true,
		attributeId: 2422,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 1226,
		nameFun: 'CurrentTier7Block8SummationReceived',
		nameObj: 'currentTier7Block8SummationReceived',
		clusterId: 1794,
		name: 'current tier 7 block 8 summation received',
		server: true,
		attributeId: 2423,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 1227,
		nameFun: 'CurrentTier7Block9SummationReceived',
		nameObj: 'currentTier7Block9SummationReceived',
		clusterId: 1794,
		name: 'current tier 7 block 9 summation received',
		server: true,
		attributeId: 2424,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 1228,
		nameFun: 'CurrentTier7Block10SummationReceived',
		nameObj: 'currentTier7Block10SummationReceived',
		clusterId: 1794,
		name: 'current tier 7 block 10 summation received',
		server: true,
		attributeId: 2425,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 1229,
		nameFun: 'CurrentTier7Block11SummationReceived',
		nameObj: 'currentTier7Block11SummationReceived',
		clusterId: 1794,
		name: 'current tier 7 block 11 summation received',
		server: true,
		attributeId: 2426,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 1230,
		nameFun: 'CurrentTier7Block12SummationReceived',
		nameObj: 'currentTier7Block12SummationReceived',
		clusterId: 1794,
		name: 'current tier 7 block 12 summation received',
		server: true,
		attributeId: 2427,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 1231,
		nameFun: 'CurrentTier7Block13SummationReceived',
		nameObj: 'currentTier7Block13SummationReceived',
		clusterId: 1794,
		name: 'current tier 7 block 13 summation received',
		server: true,
		attributeId: 2428,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 1232,
		nameFun: 'CurrentTier7Block14SummationReceived',
		nameObj: 'currentTier7Block14SummationReceived',
		clusterId: 1794,
		name: 'current tier 7 block 14 summation received',
		server: true,
		attributeId: 2429,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 1233,
		nameFun: 'CurrentTier7Block15SummationReceived',
		nameObj: 'currentTier7Block15SummationReceived',
		clusterId: 1794,
		name: 'current tier 7 block 15 summation received',
		server: true,
		attributeId: 2430,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 1234,
		nameFun: 'CurrentTier7Block16SummationReceived',
		nameObj: 'currentTier7Block16SummationReceived',
		clusterId: 1794,
		name: 'current tier 7 block 16 summation received',
		server: true,
		attributeId: 2431,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 1235,
		nameFun: 'CurrentTier8Block1SummationReceived',
		nameObj: 'currentTier8Block1SummationReceived',
		clusterId: 1794,
		name: 'current tier 8 block 1 summation received',
		server: true,
		attributeId: 2432,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 1236,
		nameFun: 'CurrentTier8Block2SummationReceived',
		nameObj: 'currentTier8Block2SummationReceived',
		clusterId: 1794,
		name: 'current tier 8 block 2 summation received',
		server: true,
		attributeId: 2433,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 1237,
		nameFun: 'CurrentTier8Block3SummationReceived',
		nameObj: 'currentTier8Block3SummationReceived',
		clusterId: 1794,
		name: 'current tier 8 block 3 summation received',
		server: true,
		attributeId: 2434,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 1238,
		nameFun: 'CurrentTier8Block4SummationReceived',
		nameObj: 'currentTier8Block4SummationReceived',
		clusterId: 1794,
		name: 'current tier 8 block 4 summation received',
		server: true,
		attributeId: 2435,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 1239,
		nameFun: 'CurrentTier8Block5SummationReceived',
		nameObj: 'currentTier8Block5SummationReceived',
		clusterId: 1794,
		name: 'current tier 8 block 5 summation received',
		server: true,
		attributeId: 2436,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 1240,
		nameFun: 'CurrentTier8Block6SummationReceived',
		nameObj: 'currentTier8Block6SummationReceived',
		clusterId: 1794,
		name: 'current tier 8 block 6 summation received',
		server: true,
		attributeId: 2437,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 1241,
		nameFun: 'CurrentTier8Block7SummationReceived',
		nameObj: 'currentTier8Block7SummationReceived',
		clusterId: 1794,
		name: 'current tier 8 block 7 summation received',
		server: true,
		attributeId: 2438,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 1242,
		nameFun: 'CurrentTier8Block8SummationReceived',
		nameObj: 'currentTier8Block8SummationReceived',
		clusterId: 1794,
		name: 'current tier 8 block 8 summation received',
		server: true,
		attributeId: 2439,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 1243,
		nameFun: 'CurrentTier8Block9SummationReceived',
		nameObj: 'currentTier8Block9SummationReceived',
		clusterId: 1794,
		name: 'current tier 8 block 9 summation received',
		server: true,
		attributeId: 2440,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 1244,
		nameFun: 'CurrentTier8Block10SummationReceived',
		nameObj: 'currentTier8Block10SummationReceived',
		clusterId: 1794,
		name: 'current tier 8 block 10 summation received',
		server: true,
		attributeId: 2441,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 1245,
		nameFun: 'CurrentTier8Block11SummationReceived',
		nameObj: 'currentTier8Block11SummationReceived',
		clusterId: 1794,
		name: 'current tier 8 block 11 summation received',
		server: true,
		attributeId: 2442,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 1246,
		nameFun: 'CurrentTier8Block12SummationReceived',
		nameObj: 'currentTier8Block12SummationReceived',
		clusterId: 1794,
		name: 'current tier 8 block 12 summation received',
		server: true,
		attributeId: 2443,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 1247,
		nameFun: 'CurrentTier8Block13SummationReceived',
		nameObj: 'currentTier8Block13SummationReceived',
		clusterId: 1794,
		name: 'current tier 8 block 13 summation received',
		server: true,
		attributeId: 2444,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 1248,
		nameFun: 'CurrentTier8Block14SummationReceived',
		nameObj: 'currentTier8Block14SummationReceived',
		clusterId: 1794,
		name: 'current tier 8 block 14 summation received',
		server: true,
		attributeId: 2445,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 1249,
		nameFun: 'CurrentTier8Block15SummationReceived',
		nameObj: 'currentTier8Block15SummationReceived',
		clusterId: 1794,
		name: 'current tier 8 block 15 summation received',
		server: true,
		attributeId: 2446,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 1250,
		nameFun: 'CurrentTier8Block16SummationReceived',
		nameObj: 'currentTier8Block16SummationReceived',
		clusterId: 1794,
		name: 'current tier 8 block 16 summation received',
		server: true,
		attributeId: 2447,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 1251,
		nameFun: 'CurrentTier9Block1SummationReceived',
		nameObj: 'currentTier9Block1SummationReceived',
		clusterId: 1794,
		name: 'current tier 9 block 1 summation received',
		server: true,
		attributeId: 2448,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 1252,
		nameFun: 'CurrentTier9Block2SummationReceived',
		nameObj: 'currentTier9Block2SummationReceived',
		clusterId: 1794,
		name: 'current tier 9 block 2 summation received',
		server: true,
		attributeId: 2449,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 1253,
		nameFun: 'CurrentTier9Block3SummationReceived',
		nameObj: 'currentTier9Block3SummationReceived',
		clusterId: 1794,
		name: 'current tier 9 block 3 summation received',
		server: true,
		attributeId: 2450,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 1254,
		nameFun: 'CurrentTier9Block4SummationReceived',
		nameObj: 'currentTier9Block4SummationReceived',
		clusterId: 1794,
		name: 'current tier 9 block 4 summation received',
		server: true,
		attributeId: 2451,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 1255,
		nameFun: 'CurrentTier9Block5SummationReceived',
		nameObj: 'currentTier9Block5SummationReceived',
		clusterId: 1794,
		name: 'current tier 9 block 5 summation received',
		server: true,
		attributeId: 2452,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 1256,
		nameFun: 'CurrentTier9Block6SummationReceived',
		nameObj: 'currentTier9Block6SummationReceived',
		clusterId: 1794,
		name: 'current tier 9 block 6 summation received',
		server: true,
		attributeId: 2453,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 1257,
		nameFun: 'CurrentTier9Block7SummationReceived',
		nameObj: 'currentTier9Block7SummationReceived',
		clusterId: 1794,
		name: 'current tier 9 block 7 summation received',
		server: true,
		attributeId: 2454,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 1258,
		nameFun: 'CurrentTier9Block8SummationReceived',
		nameObj: 'currentTier9Block8SummationReceived',
		clusterId: 1794,
		name: 'current tier 9 block 8 summation received',
		server: true,
		attributeId: 2455,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 1259,
		nameFun: 'CurrentTier9Block9SummationReceived',
		nameObj: 'currentTier9Block9SummationReceived',
		clusterId: 1794,
		name: 'current tier 9 block 9 summation received',
		server: true,
		attributeId: 2456,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 1260,
		nameFun: 'CurrentTier9Block10SummationReceived',
		nameObj: 'currentTier9Block10SummationReceived',
		clusterId: 1794,
		name: 'current tier 9 block 10 summation received',
		server: true,
		attributeId: 2457,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 1261,
		nameFun: 'CurrentTier9Block11SummationReceived',
		nameObj: 'currentTier9Block11SummationReceived',
		clusterId: 1794,
		name: 'current tier 9 block 11 summation received',
		server: true,
		attributeId: 2458,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 1262,
		nameFun: 'CurrentTier9Block12SummationReceived',
		nameObj: 'currentTier9Block12SummationReceived',
		clusterId: 1794,
		name: 'current tier 9 block 12 summation received',
		server: true,
		attributeId: 2459,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 1263,
		nameFun: 'CurrentTier9Block13SummationReceived',
		nameObj: 'currentTier9Block13SummationReceived',
		clusterId: 1794,
		name: 'current tier 9 block 13 summation received',
		server: true,
		attributeId: 2460,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 1264,
		nameFun: 'CurrentTier9Block14SummationReceived',
		nameObj: 'currentTier9Block14SummationReceived',
		clusterId: 1794,
		name: 'current tier 9 block 14 summation received',
		server: true,
		attributeId: 2461,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 1265,
		nameFun: 'CurrentTier9Block15SummationReceived',
		nameObj: 'currentTier9Block15SummationReceived',
		clusterId: 1794,
		name: 'current tier 9 block 15 summation received',
		server: true,
		attributeId: 2462,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 1266,
		nameFun: 'CurrentTier9Block16SummationReceived',
		nameObj: 'currentTier9Block16SummationReceived',
		clusterId: 1794,
		name: 'current tier 9 block 16 summation received',
		server: true,
		attributeId: 2463,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 1267,
		nameFun: 'CurrentTier10Block1SummationReceived',
		nameObj: 'currentTier10Block1SummationReceived',
		clusterId: 1794,
		name: 'current tier 10 block 1 summation received',
		server: true,
		attributeId: 2464,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 1268,
		nameFun: 'CurrentTier10Block2SummationReceived',
		nameObj: 'currentTier10Block2SummationReceived',
		clusterId: 1794,
		name: 'current tier 10 block 2 summation received',
		server: true,
		attributeId: 2465,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 1269,
		nameFun: 'CurrentTier10Block3SummationReceived',
		nameObj: 'currentTier10Block3SummationReceived',
		clusterId: 1794,
		name: 'current tier 10 block 3 summation received',
		server: true,
		attributeId: 2466,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 1270,
		nameFun: 'CurrentTier10Block4SummationReceived',
		nameObj: 'currentTier10Block4SummationReceived',
		clusterId: 1794,
		name: 'current tier 10 block 4 summation received',
		server: true,
		attributeId: 2467,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 1271,
		nameFun: 'CurrentTier10Block5SummationReceived',
		nameObj: 'currentTier10Block5SummationReceived',
		clusterId: 1794,
		name: 'current tier 10 block 5 summation received',
		server: true,
		attributeId: 2468,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 1272,
		nameFun: 'CurrentTier10Block6SummationReceived',
		nameObj: 'currentTier10Block6SummationReceived',
		clusterId: 1794,
		name: 'current tier 10 block 6 summation received',
		server: true,
		attributeId: 2469,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 1273,
		nameFun: 'CurrentTier10Block7SummationReceived',
		nameObj: 'currentTier10Block7SummationReceived',
		clusterId: 1794,
		name: 'current tier 10 block 7 summation received',
		server: true,
		attributeId: 2470,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 1274,
		nameFun: 'CurrentTier10Block8SummationReceived',
		nameObj: 'currentTier10Block8SummationReceived',
		clusterId: 1794,
		name: 'current tier 10 block 8 summation received',
		server: true,
		attributeId: 2471,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 1275,
		nameFun: 'CurrentTier10Block9SummationReceived',
		nameObj: 'currentTier10Block9SummationReceived',
		clusterId: 1794,
		name: 'current tier 10 block 9 summation received',
		server: true,
		attributeId: 2472,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 1276,
		nameFun: 'CurrentTier10Block10SummationReceived',
		nameObj: 'currentTier10Block10SummationReceived',
		clusterId: 1794,
		name: 'current tier 10 block 10 summation received',
		server: true,
		attributeId: 2473,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 1277,
		nameFun: 'CurrentTier10Block11SummationReceived',
		nameObj: 'currentTier10Block11SummationReceived',
		clusterId: 1794,
		name: 'current tier 10 block 11 summation received',
		server: true,
		attributeId: 2474,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 1278,
		nameFun: 'CurrentTier10Block12SummationReceived',
		nameObj: 'currentTier10Block12SummationReceived',
		clusterId: 1794,
		name: 'current tier 10 block 12 summation received',
		server: true,
		attributeId: 2475,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 1279,
		nameFun: 'CurrentTier10Block13SummationReceived',
		nameObj: 'currentTier10Block13SummationReceived',
		clusterId: 1794,
		name: 'current tier 10 block 13 summation received',
		server: true,
		attributeId: 2476,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 1280,
		nameFun: 'CurrentTier10Block14SummationReceived',
		nameObj: 'currentTier10Block14SummationReceived',
		clusterId: 1794,
		name: 'current tier 10 block 14 summation received',
		server: true,
		attributeId: 2477,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 1281,
		nameFun: 'CurrentTier10Block15SummationReceived',
		nameObj: 'currentTier10Block15SummationReceived',
		clusterId: 1794,
		name: 'current tier 10 block 15 summation received',
		server: true,
		attributeId: 2478,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 1282,
		nameFun: 'CurrentTier10Block16SummationReceived',
		nameObj: 'currentTier10Block16SummationReceived',
		clusterId: 1794,
		name: 'current tier 10 block 16 summation received',
		server: true,
		attributeId: 2479,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 1283,
		nameFun: 'CurrentTier11Block1SummationReceived',
		nameObj: 'currentTier11Block1SummationReceived',
		clusterId: 1794,
		name: 'current tier 11 block 1 summation received',
		server: true,
		attributeId: 2480,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 1284,
		nameFun: 'CurrentTier11Block2SummationReceived',
		nameObj: 'currentTier11Block2SummationReceived',
		clusterId: 1794,
		name: 'current tier 11 block 2 summation received',
		server: true,
		attributeId: 2481,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 1285,
		nameFun: 'CurrentTier11Block3SummationReceived',
		nameObj: 'currentTier11Block3SummationReceived',
		clusterId: 1794,
		name: 'current tier 11 block 3 summation received',
		server: true,
		attributeId: 2482,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 1286,
		nameFun: 'CurrentTier11Block4SummationReceived',
		nameObj: 'currentTier11Block4SummationReceived',
		clusterId: 1794,
		name: 'current tier 11 block 4 summation received',
		server: true,
		attributeId: 2483,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 1287,
		nameFun: 'CurrentTier11Block5SummationReceived',
		nameObj: 'currentTier11Block5SummationReceived',
		clusterId: 1794,
		name: 'current tier 11 block 5 summation received',
		server: true,
		attributeId: 2484,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 1288,
		nameFun: 'CurrentTier11Block6SummationReceived',
		nameObj: 'currentTier11Block6SummationReceived',
		clusterId: 1794,
		name: 'current tier 11 block 6 summation received',
		server: true,
		attributeId: 2485,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 1289,
		nameFun: 'CurrentTier11Block7SummationReceived',
		nameObj: 'currentTier11Block7SummationReceived',
		clusterId: 1794,
		name: 'current tier 11 block 7 summation received',
		server: true,
		attributeId: 2486,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 1290,
		nameFun: 'CurrentTier11Block8SummationReceived',
		nameObj: 'currentTier11Block8SummationReceived',
		clusterId: 1794,
		name: 'current tier 11 block 8 summation received',
		server: true,
		attributeId: 2487,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 1291,
		nameFun: 'CurrentTier11Block9SummationReceived',
		nameObj: 'currentTier11Block9SummationReceived',
		clusterId: 1794,
		name: 'current tier 11 block 9 summation received',
		server: true,
		attributeId: 2488,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 1292,
		nameFun: 'CurrentTier11Block10SummationReceived',
		nameObj: 'currentTier11Block10SummationReceived',
		clusterId: 1794,
		name: 'current tier 11 block 10 summation received',
		server: true,
		attributeId: 2489,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 1293,
		nameFun: 'CurrentTier11Block11SummationReceived',
		nameObj: 'currentTier11Block11SummationReceived',
		clusterId: 1794,
		name: 'current tier 11 block 11 summation received',
		server: true,
		attributeId: 2490,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 1294,
		nameFun: 'CurrentTier11Block12SummationReceived',
		nameObj: 'currentTier11Block12SummationReceived',
		clusterId: 1794,
		name: 'current tier 11 block 12 summation received',
		server: true,
		attributeId: 2491,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 1295,
		nameFun: 'CurrentTier11Block13SummationReceived',
		nameObj: 'currentTier11Block13SummationReceived',
		clusterId: 1794,
		name: 'current tier 11 block 13 summation received',
		server: true,
		attributeId: 2492,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 1296,
		nameFun: 'CurrentTier11Block14SummationReceived',
		nameObj: 'currentTier11Block14SummationReceived',
		clusterId: 1794,
		name: 'current tier 11 block 14 summation received',
		server: true,
		attributeId: 2493,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 1297,
		nameFun: 'CurrentTier11Block15SummationReceived',
		nameObj: 'currentTier11Block15SummationReceived',
		clusterId: 1794,
		name: 'current tier 11 block 15 summation received',
		server: true,
		attributeId: 2494,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 1298,
		nameFun: 'CurrentTier11Block16SummationReceived',
		nameObj: 'currentTier11Block16SummationReceived',
		clusterId: 1794,
		name: 'current tier 11 block 16 summation received',
		server: true,
		attributeId: 2495,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 1299,
		nameFun: 'CurrentTier12Block1SummationReceived',
		nameObj: 'currentTier12Block1SummationReceived',
		clusterId: 1794,
		name: 'current tier 12 block 1 summation received',
		server: true,
		attributeId: 2496,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 1300,
		nameFun: 'CurrentTier12Block2SummationReceived',
		nameObj: 'currentTier12Block2SummationReceived',
		clusterId: 1794,
		name: 'current tier 12 block 2 summation received',
		server: true,
		attributeId: 2497,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 1301,
		nameFun: 'CurrentTier12Block3SummationReceived',
		nameObj: 'currentTier12Block3SummationReceived',
		clusterId: 1794,
		name: 'current tier 12 block 3 summation received',
		server: true,
		attributeId: 2498,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 1302,
		nameFun: 'CurrentTier12Block4SummationReceived',
		nameObj: 'currentTier12Block4SummationReceived',
		clusterId: 1794,
		name: 'current tier 12 block 4 summation received',
		server: true,
		attributeId: 2499,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 1303,
		nameFun: 'CurrentTier12Block5SummationReceived',
		nameObj: 'currentTier12Block5SummationReceived',
		clusterId: 1794,
		name: 'current tier 12 block 5 summation received',
		server: true,
		attributeId: 2500,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 1304,
		nameFun: 'CurrentTier12Block6SummationReceived',
		nameObj: 'currentTier12Block6SummationReceived',
		clusterId: 1794,
		name: 'current tier 12 block 6 summation received',
		server: true,
		attributeId: 2501,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 1305,
		nameFun: 'CurrentTier12Block7SummationReceived',
		nameObj: 'currentTier12Block7SummationReceived',
		clusterId: 1794,
		name: 'current tier 12 block 7 summation received',
		server: true,
		attributeId: 2502,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 1306,
		nameFun: 'CurrentTier12Block8SummationReceived',
		nameObj: 'currentTier12Block8SummationReceived',
		clusterId: 1794,
		name: 'current tier 12 block 8 summation received',
		server: true,
		attributeId: 2503,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 1307,
		nameFun: 'CurrentTier12Block9SummationReceived',
		nameObj: 'currentTier12Block9SummationReceived',
		clusterId: 1794,
		name: 'current tier 12 block 9 summation received',
		server: true,
		attributeId: 2504,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 1308,
		nameFun: 'CurrentTier12Block10SummationReceived',
		nameObj: 'currentTier12Block10SummationReceived',
		clusterId: 1794,
		name: 'current tier 12 block 10 summation received',
		server: true,
		attributeId: 2505,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 1309,
		nameFun: 'CurrentTier12Block11SummationReceived',
		nameObj: 'currentTier12Block11SummationReceived',
		clusterId: 1794,
		name: 'current tier 12 block 11 summation received',
		server: true,
		attributeId: 2506,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 1310,
		nameFun: 'CurrentTier12Block12SummationReceived',
		nameObj: 'currentTier12Block12SummationReceived',
		clusterId: 1794,
		name: 'current tier 12 block 12 summation received',
		server: true,
		attributeId: 2507,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 1311,
		nameFun: 'CurrentTier12Block13SummationReceived',
		nameObj: 'currentTier12Block13SummationReceived',
		clusterId: 1794,
		name: 'current tier 12 block 13 summation received',
		server: true,
		attributeId: 2508,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 1312,
		nameFun: 'CurrentTier12Block14SummationReceived',
		nameObj: 'currentTier12Block14SummationReceived',
		clusterId: 1794,
		name: 'current tier 12 block 14 summation received',
		server: true,
		attributeId: 2509,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 1313,
		nameFun: 'CurrentTier12Block15SummationReceived',
		nameObj: 'currentTier12Block15SummationReceived',
		clusterId: 1794,
		name: 'current tier 12 block 15 summation received',
		server: true,
		attributeId: 2510,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 1314,
		nameFun: 'CurrentTier12Block16SummationReceived',
		nameObj: 'currentTier12Block16SummationReceived',
		clusterId: 1794,
		name: 'current tier 12 block 16 summation received',
		server: true,
		attributeId: 2511,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 1315,
		nameFun: 'CurrentTier13Block1SummationReceived',
		nameObj: 'currentTier13Block1SummationReceived',
		clusterId: 1794,
		name: 'current tier 13 block 1 summation received',
		server: true,
		attributeId: 2512,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 1316,
		nameFun: 'CurrentTier13Block2SummationReceived',
		nameObj: 'currentTier13Block2SummationReceived',
		clusterId: 1794,
		name: 'current tier 13 block 2 summation received',
		server: true,
		attributeId: 2513,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 1317,
		nameFun: 'CurrentTier13Block3SummationReceived',
		nameObj: 'currentTier13Block3SummationReceived',
		clusterId: 1794,
		name: 'current tier 13 block 3 summation received',
		server: true,
		attributeId: 2514,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 1318,
		nameFun: 'CurrentTier13Block4SummationReceived',
		nameObj: 'currentTier13Block4SummationReceived',
		clusterId: 1794,
		name: 'current tier 13 block 4 summation received',
		server: true,
		attributeId: 2515,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 1319,
		nameFun: 'CurrentTier13Block5SummationReceived',
		nameObj: 'currentTier13Block5SummationReceived',
		clusterId: 1794,
		name: 'current tier 13 block 5 summation received',
		server: true,
		attributeId: 2516,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 1320,
		nameFun: 'CurrentTier13Block6SummationReceived',
		nameObj: 'currentTier13Block6SummationReceived',
		clusterId: 1794,
		name: 'current tier 13 block 6 summation received',
		server: true,
		attributeId: 2517,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 1321,
		nameFun: 'CurrentTier13Block7SummationReceived',
		nameObj: 'currentTier13Block7SummationReceived',
		clusterId: 1794,
		name: 'current tier 13 block 7 summation received',
		server: true,
		attributeId: 2518,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 1322,
		nameFun: 'CurrentTier13Block8SummationReceived',
		nameObj: 'currentTier13Block8SummationReceived',
		clusterId: 1794,
		name: 'current tier 13 block 8 summation received',
		server: true,
		attributeId: 2519,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 1323,
		nameFun: 'CurrentTier13Block9SummationReceived',
		nameObj: 'currentTier13Block9SummationReceived',
		clusterId: 1794,
		name: 'current tier 13 block 9 summation received',
		server: true,
		attributeId: 2520,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 1324,
		nameFun: 'CurrentTier13Block10SummationReceived',
		nameObj: 'currentTier13Block10SummationReceived',
		clusterId: 1794,
		name: 'current tier 13 block 10 summation received',
		server: true,
		attributeId: 2521,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 1325,
		nameFun: 'CurrentTier13Block11SummationReceived',
		nameObj: 'currentTier13Block11SummationReceived',
		clusterId: 1794,
		name: 'current tier 13 block 11 summation received',
		server: true,
		attributeId: 2522,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 1326,
		nameFun: 'CurrentTier13Block12SummationReceived',
		nameObj: 'currentTier13Block12SummationReceived',
		clusterId: 1794,
		name: 'current tier 13 block 12 summation received',
		server: true,
		attributeId: 2523,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 1327,
		nameFun: 'CurrentTier13Block13SummationReceived',
		nameObj: 'currentTier13Block13SummationReceived',
		clusterId: 1794,
		name: 'current tier 13 block 13 summation received',
		server: true,
		attributeId: 2524,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 1328,
		nameFun: 'CurrentTier13Block14SummationReceived',
		nameObj: 'currentTier13Block14SummationReceived',
		clusterId: 1794,
		name: 'current tier 13 block 14 summation received',
		server: true,
		attributeId: 2525,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 1329,
		nameFun: 'CurrentTier13Block15SummationReceived',
		nameObj: 'currentTier13Block15SummationReceived',
		clusterId: 1794,
		name: 'current tier 13 block 15 summation received',
		server: true,
		attributeId: 2526,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 1330,
		nameFun: 'CurrentTier13Block16SummationReceived',
		nameObj: 'currentTier13Block16SummationReceived',
		clusterId: 1794,
		name: 'current tier 13 block 16 summation received',
		server: true,
		attributeId: 2527,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 1331,
		nameFun: 'CurrentTier14Block1SummationReceived',
		nameObj: 'currentTier14Block1SummationReceived',
		clusterId: 1794,
		name: 'current tier 14 block 1 summation received',
		server: true,
		attributeId: 2528,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 1332,
		nameFun: 'CurrentTier14Block2SummationReceived',
		nameObj: 'currentTier14Block2SummationReceived',
		clusterId: 1794,
		name: 'current tier 14 block 2 summation received',
		server: true,
		attributeId: 2529,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 1333,
		nameFun: 'CurrentTier14Block3SummationReceived',
		nameObj: 'currentTier14Block3SummationReceived',
		clusterId: 1794,
		name: 'current tier 14 block 3 summation received',
		server: true,
		attributeId: 2530,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 1334,
		nameFun: 'CurrentTier14Block4SummationReceived',
		nameObj: 'currentTier14Block4SummationReceived',
		clusterId: 1794,
		name: 'current tier 14 block 4 summation received',
		server: true,
		attributeId: 2531,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 1335,
		nameFun: 'CurrentTier14Block5SummationReceived',
		nameObj: 'currentTier14Block5SummationReceived',
		clusterId: 1794,
		name: 'current tier 14 block 5 summation received',
		server: true,
		attributeId: 2532,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 1336,
		nameFun: 'CurrentTier14Block6SummationReceived',
		nameObj: 'currentTier14Block6SummationReceived',
		clusterId: 1794,
		name: 'current tier 14 block 6 summation received',
		server: true,
		attributeId: 2533,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 1337,
		nameFun: 'CurrentTier14Block7SummationReceived',
		nameObj: 'currentTier14Block7SummationReceived',
		clusterId: 1794,
		name: 'current tier 14 block 7 summation received',
		server: true,
		attributeId: 2534,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 1338,
		nameFun: 'CurrentTier14Block8SummationReceived',
		nameObj: 'currentTier14Block8SummationReceived',
		clusterId: 1794,
		name: 'current tier 14 block 8 summation received',
		server: true,
		attributeId: 2535,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 1339,
		nameFun: 'CurrentTier14Block9SummationReceived',
		nameObj: 'currentTier14Block9SummationReceived',
		clusterId: 1794,
		name: 'current tier 14 block 9 summation received',
		server: true,
		attributeId: 2536,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 1340,
		nameFun: 'CurrentTier14Block10SummationReceived',
		nameObj: 'currentTier14Block10SummationReceived',
		clusterId: 1794,
		name: 'current tier 14 block 10 summation received',
		server: true,
		attributeId: 2537,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 1341,
		nameFun: 'CurrentTier14Block11SummationReceived',
		nameObj: 'currentTier14Block11SummationReceived',
		clusterId: 1794,
		name: 'current tier 14 block 11 summation received',
		server: true,
		attributeId: 2538,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 1342,
		nameFun: 'CurrentTier14Block12SummationReceived',
		nameObj: 'currentTier14Block12SummationReceived',
		clusterId: 1794,
		name: 'current tier 14 block 12 summation received',
		server: true,
		attributeId: 2539,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 1343,
		nameFun: 'CurrentTier14Block13SummationReceived',
		nameObj: 'currentTier14Block13SummationReceived',
		clusterId: 1794,
		name: 'current tier 14 block 13 summation received',
		server: true,
		attributeId: 2540,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 1344,
		nameFun: 'CurrentTier14Block14SummationReceived',
		nameObj: 'currentTier14Block14SummationReceived',
		clusterId: 1794,
		name: 'current tier 14 block 14 summation received',
		server: true,
		attributeId: 2541,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 1345,
		nameFun: 'CurrentTier14Block15SummationReceived',
		nameObj: 'currentTier14Block15SummationReceived',
		clusterId: 1794,
		name: 'current tier 14 block 15 summation received',
		server: true,
		attributeId: 2542,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 1346,
		nameFun: 'CurrentTier14Block16SummationReceived',
		nameObj: 'currentTier14Block16SummationReceived',
		clusterId: 1794,
		name: 'current tier 14 block 16 summation received',
		server: true,
		attributeId: 2543,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 1347,
		nameFun: 'CurrentTier15Block1SummationReceived',
		nameObj: 'currentTier15Block1SummationReceived',
		clusterId: 1794,
		name: 'current tier 15 block 1 summation received',
		server: true,
		attributeId: 2544,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 1348,
		nameFun: 'CurrentTier15Block2SummationReceived',
		nameObj: 'currentTier15Block2SummationReceived',
		clusterId: 1794,
		name: 'current tier 15 block 2 summation received',
		server: true,
		attributeId: 2545,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 1349,
		nameFun: 'CurrentTier15Block3SummationReceived',
		nameObj: 'currentTier15Block3SummationReceived',
		clusterId: 1794,
		name: 'current tier 15 block 3 summation received',
		server: true,
		attributeId: 2546,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 1350,
		nameFun: 'CurrentTier15Block4SummationReceived',
		nameObj: 'currentTier15Block4SummationReceived',
		clusterId: 1794,
		name: 'current tier 15 block 4 summation received',
		server: true,
		attributeId: 2547,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 1351,
		nameFun: 'CurrentTier15Block5SummationReceived',
		nameObj: 'currentTier15Block5SummationReceived',
		clusterId: 1794,
		name: 'current tier 15 block 5 summation received',
		server: true,
		attributeId: 2548,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 1352,
		nameFun: 'CurrentTier15Block6SummationReceived',
		nameObj: 'currentTier15Block6SummationReceived',
		clusterId: 1794,
		name: 'current tier 15 block 6 summation received',
		server: true,
		attributeId: 2549,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 1353,
		nameFun: 'CurrentTier15Block7SummationReceived',
		nameObj: 'currentTier15Block7SummationReceived',
		clusterId: 1794,
		name: 'current tier 15 block 7 summation received',
		server: true,
		attributeId: 2550,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 1354,
		nameFun: 'CurrentTier15Block8SummationReceived',
		nameObj: 'currentTier15Block8SummationReceived',
		clusterId: 1794,
		name: 'current tier 15 block 8 summation received',
		server: true,
		attributeId: 2551,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 1355,
		nameFun: 'CurrentTier15Block9SummationReceived',
		nameObj: 'currentTier15Block9SummationReceived',
		clusterId: 1794,
		name: 'current tier 15 block 9 summation received',
		server: true,
		attributeId: 2552,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 1356,
		nameFun: 'CurrentTier15Block10SummationReceived',
		nameObj: 'currentTier15Block10SummationReceived',
		clusterId: 1794,
		name: 'current tier 15 block 10 summation received',
		server: true,
		attributeId: 2553,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 1357,
		nameFun: 'CurrentTier15Block11SummationReceived',
		nameObj: 'currentTier15Block11SummationReceived',
		clusterId: 1794,
		name: 'current tier 15 block 11 summation received',
		server: true,
		attributeId: 2554,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 1358,
		nameFun: 'CurrentTier15Block12SummationReceived',
		nameObj: 'currentTier15Block12SummationReceived',
		clusterId: 1794,
		name: 'current tier 15 block 12 summation received',
		server: true,
		attributeId: 2555,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 1359,
		nameFun: 'CurrentTier15Block13SummationReceived',
		nameObj: 'currentTier15Block13SummationReceived',
		clusterId: 1794,
		name: 'current tier 15 block 13 summation received',
		server: true,
		attributeId: 2556,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 1360,
		nameFun: 'CurrentTier15Block14SummationReceived',
		nameObj: 'currentTier15Block14SummationReceived',
		clusterId: 1794,
		name: 'current tier 15 block 14 summation received',
		server: true,
		attributeId: 2557,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 1361,
		nameFun: 'CurrentTier15Block15SummationReceived',
		nameObj: 'currentTier15Block15SummationReceived',
		clusterId: 1794,
		name: 'current tier 15 block 15 summation received',
		server: true,
		attributeId: 2558,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 1362,
		nameFun: 'CurrentTier15Block16SummationReceived',
		nameObj: 'currentTier15Block16SummationReceived',
		clusterId: 1794,
		name: 'current tier 15 block 16 summation received',
		server: true,
		attributeId: 2559,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 1363,
		nameFun: 'BillToDateDelivered',
		nameObj: 'billToDateDelivered',
		clusterId: 1794,
		name: 'bill to date delivered',
		server: true,
		attributeId: 2560,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1364,
		nameFun: 'BillToDateTimeStampDelivered',
		nameObj: 'billToDateTimeStampDelivered',
		clusterId: 1794,
		name: 'bill to date time stamp delivered',
		server: true,
		attributeId: 2561,
		type: 'UTC_TIME',
		writable: false,
		mandatory: false
	}, {

		label: 1365,
		nameFun: 'ProjectedBillDelivered',
		nameObj: 'projectedBillDelivered',
		clusterId: 1794,
		name: 'projected bill delivered',
		server: true,
		attributeId: 2562,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1366,
		nameFun: 'ProjectedBillTimeStampDelivered',
		nameObj: 'projectedBillTimeStampDelivered',
		clusterId: 1794,
		name: 'projected bill time stamp delivered',
		server: true,
		attributeId: 2563,
		type: 'UTC_TIME',
		writable: false,
		mandatory: false
	}, {

		label: 1367,
		nameFun: 'BillDeliveredTrailingDigit',
		nameObj: 'billDeliveredTrailingDigit',
		clusterId: 1794,
		name: 'bill delivered trailing digit',
		server: true,
		attributeId: 2564,
		type: 'BITMAP8',
		writable: false,
		mandatory: false
	}, {

		label: 1368,
		nameFun: 'BillToDateReceived',
		nameObj: 'billToDateReceived',
		clusterId: 1794,
		name: 'bill to date received',
		server: true,
		attributeId: 2576,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1369,
		nameFun: 'BillToDateTimeStampReceived',
		nameObj: 'billToDateTimeStampReceived',
		clusterId: 1794,
		name: 'bill to date time stamp received',
		server: true,
		attributeId: 2577,
		type: 'UTC_TIME',
		writable: false,
		mandatory: false
	}, {

		label: 1370,
		nameFun: 'ProjectedBillReceived',
		nameObj: 'projectedBillReceived',
		clusterId: 1794,
		name: 'projected bill received',
		server: true,
		attributeId: 2578,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1371,
		nameFun: 'ProjectedBillTimeStampReceived',
		nameObj: 'projectedBillTimeStampReceived',
		clusterId: 1794,
		name: 'projected bill time stamp received',
		server: true,
		attributeId: 2579,
		type: 'UTC_TIME',
		writable: false,
		mandatory: false
	}, {

		label: 1372,
		nameFun: 'BillReceivedTrailingDigit',
		nameObj: 'billReceivedTrailingDigit',
		clusterId: 1794,
		name: 'bill received trailing digit',
		server: true,
		attributeId: 2580,
		type: 'BITMAP8',
		writable: false,
		mandatory: false
	}, {

		label: 1373,
		nameFun: 'AttributeReportingStatus',
		nameObj: 'attributeReportingStatus',
		clusterId: 1794,
		name: 'attribute reporting status',
		server: true,
		attributeId: 65534,
		type: 'ENUM8',
		writable: false,
		mandatory: false
	}, {

		label: 1374,
		nameFun: 'FunctionalNotificationFlags',
		nameObj: 'functionalNotificationFlags',
		clusterId: 1794,
		name: 'functional notification flags',
		server: false,
		attributeId: 0,
		type: 'BITMAP32',
		writable: true,
		mandatory: false
	}, {

		label: 1375,
		nameFun: 'PriceNotificationFlags',
		nameObj: 'priceNotificationFlags',
		clusterId: 1794,
		name: 'price notification flags',
		server: false,
		attributeId: 1,
		type: 'BITMAP32',
		writable: false,
		mandatory: false
	}, {

		label: 1376,
		nameFun: 'CalendarNotificationFlags',
		nameObj: 'calendarNotificationFlags',
		clusterId: 1794,
		name: 'calendar notification flags',
		server: false,
		attributeId: 2,
		type: 'BITMAP32',
		writable: false,
		mandatory: false
	}, {

		label: 1377,
		nameFun: 'PrePaymentNotificationFlags',
		nameObj: 'prePaymentNotificationFlags',
		clusterId: 1794,
		name: 'pre payment notification flags',
		server: false,
		attributeId: 3,
		type: 'BITMAP32',
		writable: false,
		mandatory: false
	}, {

		label: 1378,
		nameFun: 'DeviceManagementFlags',
		nameObj: 'deviceManagementFlags',
		clusterId: 1794,
		name: 'device management flags',
		server: false,
		attributeId: 4,
		type: 'BITMAP32',
		writable: false,
		mandatory: false
	}, {

		label: 1379,
		nameFun: 'ReportingProfile',
		nameObj: 'reportingProfile',
		clusterId: 1794,
		name: 'reporting profile',
		server: false,
		attributeId: 256,
		type: 'INT24U',
		writable: false,
		mandatory: false
	}, {

		label: 1380,
		nameFun: 'MirrorReporting',
		nameObj: 'mirrorReporting',
		clusterId: 1794,
		name: 'mirror reporting',
		server: false,
		attributeId: 257,
		type: 'BOOLEAN',
		writable: false,
		mandatory: false
	}, {

		label: 1381,
		nameFun: 'NotificationScheme',
		nameObj: 'notificationScheme',
		clusterId: 1794,
		name: 'notification scheme',
		server: false,
		attributeId: 258,
		type: 'ENUM8',
		writable: false,
		mandatory: false
	}, {

		label: 1382,
		nameFun: 'Tier1PriceLabel',
		nameObj: 'tier1PriceLabel',
		clusterId: 1792,
		name: 'tier 1 price label',
		server: true,
		attributeId: 0,
		type: 'OCTET_STRING',
		writable: true,
		mandatory: false
	}, {

		label: 1383,
		nameFun: 'Tier2PriceLabel',
		nameObj: 'tier2PriceLabel',
		clusterId: 1792,
		name: 'tier 2 price label',
		server: true,
		attributeId: 1,
		type: 'OCTET_STRING',
		writable: true,
		mandatory: false
	}, {

		label: 1384,
		nameFun: 'Tier3PriceLabel',
		nameObj: 'tier3PriceLabel',
		clusterId: 1792,
		name: 'tier 3 price label',
		server: true,
		attributeId: 2,
		type: 'OCTET_STRING',
		writable: true,
		mandatory: false
	}, {

		label: 1385,
		nameFun: 'Tier4PriceLabel',
		nameObj: 'tier4PriceLabel',
		clusterId: 1792,
		name: 'tier 4 price label',
		server: true,
		attributeId: 3,
		type: 'OCTET_STRING',
		writable: true,
		mandatory: false
	}, {

		label: 1386,
		nameFun: 'Tier5PriceLabel',
		nameObj: 'tier5PriceLabel',
		clusterId: 1792,
		name: 'tier 5 price label',
		server: true,
		attributeId: 4,
		type: 'OCTET_STRING',
		writable: true,
		mandatory: false
	}, {

		label: 1387,
		nameFun: 'Tier6PriceLabel',
		nameObj: 'tier6PriceLabel',
		clusterId: 1792,
		name: 'tier 6 price label',
		server: true,
		attributeId: 5,
		type: 'OCTET_STRING',
		writable: true,
		mandatory: false
	}, {

		label: 1388,
		nameFun: 'Tier7PriceLabel',
		nameObj: 'tier7PriceLabel',
		clusterId: 1792,
		name: 'tier 7 price label',
		server: true,
		attributeId: 6,
		type: 'OCTET_STRING',
		writable: false,
		mandatory: false
	}, {

		label: 1389,
		nameFun: 'Tier8PriceLabel',
		nameObj: 'tier8PriceLabel',
		clusterId: 1792,
		name: 'tier 8 price label',
		server: true,
		attributeId: 7,
		type: 'OCTET_STRING',
		writable: false,
		mandatory: false
	}, {

		label: 1390,
		nameFun: 'Tier9PriceLabel',
		nameObj: 'tier9PriceLabel',
		clusterId: 1792,
		name: 'tier 9 price label',
		server: true,
		attributeId: 8,
		type: 'OCTET_STRING',
		writable: false,
		mandatory: false
	}, {

		label: 1391,
		nameFun: 'Tier10PriceLabel',
		nameObj: 'tier10PriceLabel',
		clusterId: 1792,
		name: 'tier 10 price label',
		server: true,
		attributeId: 9,
		type: 'OCTET_STRING',
		writable: false,
		mandatory: false
	}, {

		label: 1392,
		nameFun: 'Tier11PriceLabel',
		nameObj: 'tier11PriceLabel',
		clusterId: 1792,
		name: 'tier 11 price label',
		server: true,
		attributeId: 10,
		type: 'OCTET_STRING',
		writable: false,
		mandatory: false
	}, {

		label: 1393,
		nameFun: 'Tier12PriceLabel',
		nameObj: 'tier12PriceLabel',
		clusterId: 1792,
		name: 'tier 12 price label',
		server: true,
		attributeId: 11,
		type: 'OCTET_STRING',
		writable: false,
		mandatory: false
	}, {

		label: 1394,
		nameFun: 'Tier13PriceLabel',
		nameObj: 'tier13PriceLabel',
		clusterId: 1792,
		name: 'tier 13 price label',
		server: true,
		attributeId: 12,
		type: 'OCTET_STRING',
		writable: false,
		mandatory: false
	}, {

		label: 1395,
		nameFun: 'Tier14PriceLabel',
		nameObj: 'tier14PriceLabel',
		clusterId: 1792,
		name: 'tier 14 price label',
		server: true,
		attributeId: 13,
		type: 'OCTET_STRING',
		writable: false,
		mandatory: false
	}, {

		label: 1396,
		nameFun: 'Tier15PriceLabel',
		nameObj: 'tier15PriceLabel',
		clusterId: 1792,
		name: 'tier 15 price label',
		server: true,
		attributeId: 14,
		type: 'OCTET_STRING',
		writable: false,
		mandatory: false
	}, {

		label: 1397,
		nameFun: 'Block1Threshold',
		nameObj: 'block1Threshold',
		clusterId: 1792,
		name: 'block 1 threshold',
		server: true,
		attributeId: 256,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 1398,
		nameFun: 'Block2Threshold',
		nameObj: 'block2Threshold',
		clusterId: 1792,
		name: 'block 2 threshold',
		server: true,
		attributeId: 257,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 1399,
		nameFun: 'Block3Threshold',
		nameObj: 'block3Threshold',
		clusterId: 1792,
		name: 'block 3 threshold',
		server: true,
		attributeId: 258,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 1400,
		nameFun: 'Block4Threshold',
		nameObj: 'block4Threshold',
		clusterId: 1792,
		name: 'block 4 threshold',
		server: true,
		attributeId: 259,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 1401,
		nameFun: 'Block5Threshold',
		nameObj: 'block5Threshold',
		clusterId: 1792,
		name: 'block 5 threshold',
		server: true,
		attributeId: 260,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 1402,
		nameFun: 'Block6Threshold',
		nameObj: 'block6Threshold',
		clusterId: 1792,
		name: 'block 6 threshold',
		server: true,
		attributeId: 261,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 1403,
		nameFun: 'Block7Threshold',
		nameObj: 'block7Threshold',
		clusterId: 1792,
		name: 'block 7 threshold',
		server: true,
		attributeId: 262,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 1404,
		nameFun: 'Block8Threshold',
		nameObj: 'block8Threshold',
		clusterId: 1792,
		name: 'block 8 threshold',
		server: true,
		attributeId: 263,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 1405,
		nameFun: 'Block9Threshold',
		nameObj: 'block9Threshold',
		clusterId: 1792,
		name: 'block 9 threshold',
		server: true,
		attributeId: 264,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 1406,
		nameFun: 'Block10Threshold',
		nameObj: 'block10Threshold',
		clusterId: 1792,
		name: 'block 10 threshold',
		server: true,
		attributeId: 265,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 1407,
		nameFun: 'Block11Threshold',
		nameObj: 'block11Threshold',
		clusterId: 1792,
		name: 'block 11 threshold',
		server: true,
		attributeId: 266,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 1408,
		nameFun: 'Block12Threshold',
		nameObj: 'block12Threshold',
		clusterId: 1792,
		name: 'block 12 threshold',
		server: true,
		attributeId: 267,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 1409,
		nameFun: 'Block13Threshold',
		nameObj: 'block13Threshold',
		clusterId: 1792,
		name: 'block 13 threshold',
		server: true,
		attributeId: 268,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 1410,
		nameFun: 'Block14Threshold',
		nameObj: 'block14Threshold',
		clusterId: 1792,
		name: 'block 14 threshold',
		server: true,
		attributeId: 269,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 1411,
		nameFun: 'Block15Threshold',
		nameObj: 'block15Threshold',
		clusterId: 1792,
		name: 'block 15 threshold',
		server: true,
		attributeId: 270,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 1412,
		nameFun: 'StartOfBlockPeriod',
		nameObj: 'startOfBlockPeriod',
		clusterId: 1792,
		name: 'start of block period',
		server: true,
		attributeId: 512,
		type: 'UTC_TIME',
		writable: false,
		mandatory: false
	}, {

		label: 1413,
		nameFun: 'BlockPeriodDurationMinutes',
		nameObj: 'blockPeriodDurationMinutes',
		clusterId: 1792,
		name: 'block period duration(minutes)',
		server: true,
		attributeId: 513,
		type: 'INT24U',
		writable: false,
		mandatory: false
	}, {

		label: 1414,
		nameFun: 'ThresholdMultiplier',
		nameObj: 'thresholdMultiplier',
		clusterId: 1792,
		name: 'threshold multiplier',
		server: true,
		attributeId: 514,
		type: 'INT24U',
		writable: false,
		mandatory: false
	}, {

		label: 1415,
		nameFun: 'ThresholdDivisor',
		nameObj: 'thresholdDivisor',
		clusterId: 1792,
		name: 'threshold divisor',
		server: true,
		attributeId: 515,
		type: 'INT24U',
		writable: false,
		mandatory: false
	}, {

		label: 1416,
		nameFun: 'CommodityType',
		nameObj: 'commodityType',
		clusterId: 1792,
		name: 'commodity type',
		server: true,
		attributeId: 768,
		type: 'ENUM8',
		writable: false,
		mandatory: false
	}, {

		label: 1417,
		nameFun: 'StandingCharge',
		nameObj: 'standingCharge',
		clusterId: 1792,
		name: 'standing charge',
		server: true,
		attributeId: 769,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1418,
		nameFun: 'ConversionFactor',
		nameObj: 'conversionFactor',
		clusterId: 1792,
		name: 'conversion factor',
		server: true,
		attributeId: 770,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1419,
		nameFun: 'ConversionFactorTrailingDigit',
		nameObj: 'conversionFactorTrailingDigit',
		clusterId: 1792,
		name: 'conversion Factor Trailing digit',
		server: true,
		attributeId: 771,
		type: 'BITMAP8',
		writable: false,
		mandatory: false
	}, {

		label: 1420,
		nameFun: 'CalorificValue',
		nameObj: 'calorificValue',
		clusterId: 1792,
		name: 'calorific value',
		server: true,
		attributeId: 772,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1421,
		nameFun: 'CalorificValueUnit',
		nameObj: 'calorificValueUnit',
		clusterId: 1792,
		name: 'calorific value unit',
		server: true,
		attributeId: 773,
		type: 'ENUM8',
		writable: false,
		mandatory: false
	}, {

		label: 1422,
		nameFun: 'CalorificValueTrailingDigit',
		nameObj: 'calorificValueTrailingDigit',
		clusterId: 1792,
		name: 'calorific value trailing digit',
		server: true,
		attributeId: 774,
		type: 'BITMAP8',
		writable: false,
		mandatory: false
	}, {

		label: 1423,
		nameFun: 'NoTierBlock1Price',
		nameObj: 'noTierBlock1Price',
		clusterId: 1792,
		name: 'no tier block 1 price',
		server: true,
		attributeId: 1024,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1424,
		nameFun: 'NoTierBlock2Price',
		nameObj: 'noTierBlock2Price',
		clusterId: 1792,
		name: 'no tier block 2 price',
		server: true,
		attributeId: 1025,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1425,
		nameFun: 'NoTierBlock3Price',
		nameObj: 'noTierBlock3Price',
		clusterId: 1792,
		name: 'no tier block 3 price',
		server: true,
		attributeId: 1026,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1426,
		nameFun: 'NoTierBlock4Price',
		nameObj: 'noTierBlock4Price',
		clusterId: 1792,
		name: 'no tier block 4 price',
		server: true,
		attributeId: 1027,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1427,
		nameFun: 'NoTierBlock5Price',
		nameObj: 'noTierBlock5Price',
		clusterId: 1792,
		name: 'no tier block 5 price',
		server: true,
		attributeId: 1028,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1428,
		nameFun: 'NoTierBlock6Price',
		nameObj: 'noTierBlock6Price',
		clusterId: 1792,
		name: 'no tier block 6 price',
		server: true,
		attributeId: 1029,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1429,
		nameFun: 'NoTierBlock7Price',
		nameObj: 'noTierBlock7Price',
		clusterId: 1792,
		name: 'no tier block 7 price',
		server: true,
		attributeId: 1030,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1430,
		nameFun: 'NoTierBlock8Price',
		nameObj: 'noTierBlock8Price',
		clusterId: 1792,
		name: 'no tier block 8 price',
		server: true,
		attributeId: 1031,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1431,
		nameFun: 'NoTierBlock9Price',
		nameObj: 'noTierBlock9Price',
		clusterId: 1792,
		name: 'no tier block 9 price',
		server: true,
		attributeId: 1032,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1432,
		nameFun: 'NoTierBlock10Price',
		nameObj: 'noTierBlock10Price',
		clusterId: 1792,
		name: 'no tier block 10 price',
		server: true,
		attributeId: 1033,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1433,
		nameFun: 'NoTierBlock11Price',
		nameObj: 'noTierBlock11Price',
		clusterId: 1792,
		name: 'no tier block 11 price',
		server: true,
		attributeId: 1034,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1434,
		nameFun: 'NoTierBlock12Price',
		nameObj: 'noTierBlock12Price',
		clusterId: 1792,
		name: 'no tier block 12 price',
		server: true,
		attributeId: 1035,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1435,
		nameFun: 'NoTierBlock13Price',
		nameObj: 'noTierBlock13Price',
		clusterId: 1792,
		name: 'no tier block 13 price',
		server: true,
		attributeId: 1036,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1436,
		nameFun: 'NoTierBlock14Price',
		nameObj: 'noTierBlock14Price',
		clusterId: 1792,
		name: 'no tier block 14 price',
		server: true,
		attributeId: 1037,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1437,
		nameFun: 'NoTierBlock15Price',
		nameObj: 'noTierBlock15Price',
		clusterId: 1792,
		name: 'no tier block 15 price',
		server: true,
		attributeId: 1038,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1438,
		nameFun: 'NoTierBlock16Price',
		nameObj: 'noTierBlock16Price',
		clusterId: 1792,
		name: 'no tier block 16 price',
		server: true,
		attributeId: 1039,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1439,
		nameFun: 'Tier1Block1Price',
		nameObj: 'tier1Block1Price',
		clusterId: 1792,
		name: 'tier 1 block 1 price',
		server: true,
		attributeId: 1040,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1440,
		nameFun: 'Tier1Block2Price',
		nameObj: 'tier1Block2Price',
		clusterId: 1792,
		name: 'tier 1 block 2 price',
		server: true,
		attributeId: 1041,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1441,
		nameFun: 'Tier1Block3Price',
		nameObj: 'tier1Block3Price',
		clusterId: 1792,
		name: 'tier 1 block 3 price',
		server: true,
		attributeId: 1042,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1442,
		nameFun: 'Tier1Block4Price',
		nameObj: 'tier1Block4Price',
		clusterId: 1792,
		name: 'tier 1 block 4 price',
		server: true,
		attributeId: 1043,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1443,
		nameFun: 'Tier1Block5Price',
		nameObj: 'tier1Block5Price',
		clusterId: 1792,
		name: 'tier 1 block 5 price',
		server: true,
		attributeId: 1044,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1444,
		nameFun: 'Tier1Block6Price',
		nameObj: 'tier1Block6Price',
		clusterId: 1792,
		name: 'tier 1 block 6 price',
		server: true,
		attributeId: 1045,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1445,
		nameFun: 'Tier1Block7Price',
		nameObj: 'tier1Block7Price',
		clusterId: 1792,
		name: 'tier 1 block 7 price',
		server: true,
		attributeId: 1046,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1446,
		nameFun: 'Tier1Block8Price',
		nameObj: 'tier1Block8Price',
		clusterId: 1792,
		name: 'tier 1 block 8 price',
		server: true,
		attributeId: 1047,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1447,
		nameFun: 'Tier1Block9Price',
		nameObj: 'tier1Block9Price',
		clusterId: 1792,
		name: 'tier 1 block 9 price',
		server: true,
		attributeId: 1048,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1448,
		nameFun: 'Tier1Block10Price',
		nameObj: 'tier1Block10Price',
		clusterId: 1792,
		name: 'tier 1 block 10 price',
		server: true,
		attributeId: 1049,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1449,
		nameFun: 'Tier1Block11Price',
		nameObj: 'tier1Block11Price',
		clusterId: 1792,
		name: 'tier 1 block 11 price',
		server: true,
		attributeId: 1050,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1450,
		nameFun: 'Tier1Block12Price',
		nameObj: 'tier1Block12Price',
		clusterId: 1792,
		name: 'tier 1 block 12 price',
		server: true,
		attributeId: 1051,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1451,
		nameFun: 'Tier1Block13Price',
		nameObj: 'tier1Block13Price',
		clusterId: 1792,
		name: 'tier 1 block 13 price',
		server: true,
		attributeId: 1052,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1452,
		nameFun: 'Tier1Block14Price',
		nameObj: 'tier1Block14Price',
		clusterId: 1792,
		name: 'tier 1 block 14 price',
		server: true,
		attributeId: 1053,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1453,
		nameFun: 'Tier1Block15Price',
		nameObj: 'tier1Block15Price',
		clusterId: 1792,
		name: 'tier 1 block 15 price',
		server: true,
		attributeId: 1054,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1454,
		nameFun: 'Tier1Block16Price',
		nameObj: 'tier1Block16Price',
		clusterId: 1792,
		name: 'tier 1 block 16 price',
		server: true,
		attributeId: 1055,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1455,
		nameFun: 'Tier2Block1Price',
		nameObj: 'tier2Block1Price',
		clusterId: 1792,
		name: 'tier 2 block 1 price',
		server: true,
		attributeId: 1056,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1456,
		nameFun: 'Tier2Block2Price',
		nameObj: 'tier2Block2Price',
		clusterId: 1792,
		name: 'tier 2 block 2 price',
		server: true,
		attributeId: 1057,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1457,
		nameFun: 'Tier2Block3Price',
		nameObj: 'tier2Block3Price',
		clusterId: 1792,
		name: 'tier 2 block 3 price',
		server: true,
		attributeId: 1058,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1458,
		nameFun: 'Tier2Block4Price',
		nameObj: 'tier2Block4Price',
		clusterId: 1792,
		name: 'tier 2 block 4 price',
		server: true,
		attributeId: 1059,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1459,
		nameFun: 'Tier2Block5Price',
		nameObj: 'tier2Block5Price',
		clusterId: 1792,
		name: 'tier 2 block 5 price',
		server: true,
		attributeId: 1060,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1460,
		nameFun: 'Tier2Block6Price',
		nameObj: 'tier2Block6Price',
		clusterId: 1792,
		name: 'tier 2 block 6 price',
		server: true,
		attributeId: 1061,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1461,
		nameFun: 'Tier2Block7Price',
		nameObj: 'tier2Block7Price',
		clusterId: 1792,
		name: 'tier 2 block 7 price',
		server: true,
		attributeId: 1062,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1462,
		nameFun: 'Tier2Block8Price',
		nameObj: 'tier2Block8Price',
		clusterId: 1792,
		name: 'tier 2 block 8 price',
		server: true,
		attributeId: 1063,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1463,
		nameFun: 'Tier2Block9Price',
		nameObj: 'tier2Block9Price',
		clusterId: 1792,
		name: 'tier 2 block 9 price',
		server: true,
		attributeId: 1064,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1464,
		nameFun: 'Tier2Block10Price',
		nameObj: 'tier2Block10Price',
		clusterId: 1792,
		name: 'tier 2 block 10 price',
		server: true,
		attributeId: 1065,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1465,
		nameFun: 'Tier2Block11Price',
		nameObj: 'tier2Block11Price',
		clusterId: 1792,
		name: 'tier 2 block 11 price',
		server: true,
		attributeId: 1066,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1466,
		nameFun: 'Tier2Block12Price',
		nameObj: 'tier2Block12Price',
		clusterId: 1792,
		name: 'tier 2 block 12 price',
		server: true,
		attributeId: 1067,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1467,
		nameFun: 'Tier2Block13Price',
		nameObj: 'tier2Block13Price',
		clusterId: 1792,
		name: 'tier 2 block 13 price',
		server: true,
		attributeId: 1068,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1468,
		nameFun: 'Tier2Block14Price',
		nameObj: 'tier2Block14Price',
		clusterId: 1792,
		name: 'tier 2 block 14 price',
		server: true,
		attributeId: 1069,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1469,
		nameFun: 'Tier2Block15Price',
		nameObj: 'tier2Block15Price',
		clusterId: 1792,
		name: 'tier 2 block 15 price',
		server: true,
		attributeId: 1070,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1470,
		nameFun: 'Tier2Block16Price',
		nameObj: 'tier2Block16Price',
		clusterId: 1792,
		name: 'tier 2 block 16 price',
		server: true,
		attributeId: 1071,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1471,
		nameFun: 'Tier3Block1Price',
		nameObj: 'tier3Block1Price',
		clusterId: 1792,
		name: 'tier 3 block 1 price',
		server: true,
		attributeId: 1072,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1472,
		nameFun: 'Tier3Block2Price',
		nameObj: 'tier3Block2Price',
		clusterId: 1792,
		name: 'tier 3 block 2 price',
		server: true,
		attributeId: 1073,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1473,
		nameFun: 'Tier3Block3Price',
		nameObj: 'tier3Block3Price',
		clusterId: 1792,
		name: 'tier 3 block 3 price',
		server: true,
		attributeId: 1074,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1474,
		nameFun: 'Tier3Block4Price',
		nameObj: 'tier3Block4Price',
		clusterId: 1792,
		name: 'tier 3 block 4 price',
		server: true,
		attributeId: 1075,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1475,
		nameFun: 'Tier3Block5Price',
		nameObj: 'tier3Block5Price',
		clusterId: 1792,
		name: 'tier 3 block 5 price',
		server: true,
		attributeId: 1076,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1476,
		nameFun: 'Tier3Block6Price',
		nameObj: 'tier3Block6Price',
		clusterId: 1792,
		name: 'tier 3 block 6 price',
		server: true,
		attributeId: 1077,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1477,
		nameFun: 'Tier3Block7Price',
		nameObj: 'tier3Block7Price',
		clusterId: 1792,
		name: 'tier 3 block 7 price',
		server: true,
		attributeId: 1078,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1478,
		nameFun: 'Tier3Block8Price',
		nameObj: 'tier3Block8Price',
		clusterId: 1792,
		name: 'tier 3 block 8 price',
		server: true,
		attributeId: 1079,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1479,
		nameFun: 'Tier3Block9Price',
		nameObj: 'tier3Block9Price',
		clusterId: 1792,
		name: 'tier 3 block 9 price',
		server: true,
		attributeId: 1080,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1480,
		nameFun: 'Tier3Block10Price',
		nameObj: 'tier3Block10Price',
		clusterId: 1792,
		name: 'tier 3 block 10 price',
		server: true,
		attributeId: 1081,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1481,
		nameFun: 'Tier3Block11Price',
		nameObj: 'tier3Block11Price',
		clusterId: 1792,
		name: 'tier 3 block 11 price',
		server: true,
		attributeId: 1082,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1482,
		nameFun: 'Tier3Block12Price',
		nameObj: 'tier3Block12Price',
		clusterId: 1792,
		name: 'tier 3 block 12 price',
		server: true,
		attributeId: 1083,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1483,
		nameFun: 'Tier3Block13Price',
		nameObj: 'tier3Block13Price',
		clusterId: 1792,
		name: 'tier 3 block 13 price',
		server: true,
		attributeId: 1084,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1484,
		nameFun: 'Tier3Block14Price',
		nameObj: 'tier3Block14Price',
		clusterId: 1792,
		name: 'tier 3 block 14 price',
		server: true,
		attributeId: 1085,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1485,
		nameFun: 'Tier3Block15Price',
		nameObj: 'tier3Block15Price',
		clusterId: 1792,
		name: 'tier 3 block 15 price',
		server: true,
		attributeId: 1086,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1486,
		nameFun: 'Tier3Block16Price',
		nameObj: 'tier3Block16Price',
		clusterId: 1792,
		name: 'tier 3 block 16 price',
		server: true,
		attributeId: 1087,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1487,
		nameFun: 'Tier4Block1Price',
		nameObj: 'tier4Block1Price',
		clusterId: 1792,
		name: 'tier 4 block 1 price',
		server: true,
		attributeId: 1088,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1488,
		nameFun: 'Tier4Block2Price',
		nameObj: 'tier4Block2Price',
		clusterId: 1792,
		name: 'tier 4 block 2 price',
		server: true,
		attributeId: 1089,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1489,
		nameFun: 'Tier4Block3Price',
		nameObj: 'tier4Block3Price',
		clusterId: 1792,
		name: 'tier 4 block 3 price',
		server: true,
		attributeId: 1090,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1490,
		nameFun: 'Tier4Block4Price',
		nameObj: 'tier4Block4Price',
		clusterId: 1792,
		name: 'tier 4 block 4 price',
		server: true,
		attributeId: 1091,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1491,
		nameFun: 'Tier4Block5Price',
		nameObj: 'tier4Block5Price',
		clusterId: 1792,
		name: 'tier 4 block 5 price',
		server: true,
		attributeId: 1092,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1492,
		nameFun: 'Tier4Block6Price',
		nameObj: 'tier4Block6Price',
		clusterId: 1792,
		name: 'tier 4 block 6 price',
		server: true,
		attributeId: 1093,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1493,
		nameFun: 'Tier4Block7Price',
		nameObj: 'tier4Block7Price',
		clusterId: 1792,
		name: 'tier 4 block 7 price',
		server: true,
		attributeId: 1094,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1494,
		nameFun: 'Tier4Block8Price',
		nameObj: 'tier4Block8Price',
		clusterId: 1792,
		name: 'tier 4 block 8 price',
		server: true,
		attributeId: 1095,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1495,
		nameFun: 'Tier4Block9Price',
		nameObj: 'tier4Block9Price',
		clusterId: 1792,
		name: 'tier 4 block 9 price',
		server: true,
		attributeId: 1096,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1496,
		nameFun: 'Tier4Block10Price',
		nameObj: 'tier4Block10Price',
		clusterId: 1792,
		name: 'tier 4 block 10 price',
		server: true,
		attributeId: 1097,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1497,
		nameFun: 'Tier4Block11Price',
		nameObj: 'tier4Block11Price',
		clusterId: 1792,
		name: 'tier 4 block 11 price',
		server: true,
		attributeId: 1098,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1498,
		nameFun: 'Tier4Block12Price',
		nameObj: 'tier4Block12Price',
		clusterId: 1792,
		name: 'tier 4 block 12 price',
		server: true,
		attributeId: 1099,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1499,
		nameFun: 'Tier4Block13Price',
		nameObj: 'tier4Block13Price',
		clusterId: 1792,
		name: 'tier 4 block 13 price',
		server: true,
		attributeId: 1100,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1500,
		nameFun: 'Tier4Block14Price',
		nameObj: 'tier4Block14Price',
		clusterId: 1792,
		name: 'tier 4 block 14 price',
		server: true,
		attributeId: 1101,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1501,
		nameFun: 'Tier4Block15Price',
		nameObj: 'tier4Block15Price',
		clusterId: 1792,
		name: 'tier 4 block 15 price',
		server: true,
		attributeId: 1102,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1502,
		nameFun: 'Tier4Block16Price',
		nameObj: 'tier4Block16Price',
		clusterId: 1792,
		name: 'tier 4 block 16 price',
		server: true,
		attributeId: 1103,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1503,
		nameFun: 'Tier5Block1Price',
		nameObj: 'tier5Block1Price',
		clusterId: 1792,
		name: 'tier 5 block 1 price',
		server: true,
		attributeId: 1104,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1504,
		nameFun: 'Tier5Block2Price',
		nameObj: 'tier5Block2Price',
		clusterId: 1792,
		name: 'tier 5 block 2 price',
		server: true,
		attributeId: 1105,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1505,
		nameFun: 'Tier5Block3Price',
		nameObj: 'tier5Block3Price',
		clusterId: 1792,
		name: 'tier 5 block 3 price',
		server: true,
		attributeId: 1106,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1506,
		nameFun: 'Tier5Block4Price',
		nameObj: 'tier5Block4Price',
		clusterId: 1792,
		name: 'tier 5 block 4 price',
		server: true,
		attributeId: 1107,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1507,
		nameFun: 'Tier5Block5Price',
		nameObj: 'tier5Block5Price',
		clusterId: 1792,
		name: 'tier 5 block 5 price',
		server: true,
		attributeId: 1108,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1508,
		nameFun: 'Tier5Block6Price',
		nameObj: 'tier5Block6Price',
		clusterId: 1792,
		name: 'tier 5 block 6 price',
		server: true,
		attributeId: 1109,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1509,
		nameFun: 'Tier5Block7Price',
		nameObj: 'tier5Block7Price',
		clusterId: 1792,
		name: 'tier 5 block 7 price',
		server: true,
		attributeId: 1110,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1510,
		nameFun: 'Tier5Block8Price',
		nameObj: 'tier5Block8Price',
		clusterId: 1792,
		name: 'tier 5 block 8 price',
		server: true,
		attributeId: 1111,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1511,
		nameFun: 'Tier5Block9Price',
		nameObj: 'tier5Block9Price',
		clusterId: 1792,
		name: 'tier 5 block 9 price',
		server: true,
		attributeId: 1112,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1512,
		nameFun: 'Tier5Block10Price',
		nameObj: 'tier5Block10Price',
		clusterId: 1792,
		name: 'tier 5 block 10 price',
		server: true,
		attributeId: 1113,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1513,
		nameFun: 'Tier5Block11Price',
		nameObj: 'tier5Block11Price',
		clusterId: 1792,
		name: 'tier 5 block 11 price',
		server: true,
		attributeId: 1114,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1514,
		nameFun: 'Tier5Block12Price',
		nameObj: 'tier5Block12Price',
		clusterId: 1792,
		name: 'tier 5 block 12 price',
		server: true,
		attributeId: 1115,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1515,
		nameFun: 'Tier5Block13Price',
		nameObj: 'tier5Block13Price',
		clusterId: 1792,
		name: 'tier 5 block 13 price',
		server: true,
		attributeId: 1116,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1516,
		nameFun: 'Tier5Block14Price',
		nameObj: 'tier5Block14Price',
		clusterId: 1792,
		name: 'tier 5 block 14 price',
		server: true,
		attributeId: 1117,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1517,
		nameFun: 'Tier5Block15Price',
		nameObj: 'tier5Block15Price',
		clusterId: 1792,
		name: 'tier 5 block 15 price',
		server: true,
		attributeId: 1118,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1518,
		nameFun: 'Tier5Block16Price',
		nameObj: 'tier5Block16Price',
		clusterId: 1792,
		name: 'tier 5 block 16 price',
		server: true,
		attributeId: 1119,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1519,
		nameFun: 'Tier6Block1Price',
		nameObj: 'tier6Block1Price',
		clusterId: 1792,
		name: 'tier 6 block 1 price',
		server: true,
		attributeId: 1120,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1520,
		nameFun: 'Tier6Block2Price',
		nameObj: 'tier6Block2Price',
		clusterId: 1792,
		name: 'tier 6 block 2 price',
		server: true,
		attributeId: 1121,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1521,
		nameFun: 'Tier6Block3Price',
		nameObj: 'tier6Block3Price',
		clusterId: 1792,
		name: 'tier 6 block 3 price',
		server: true,
		attributeId: 1122,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1522,
		nameFun: 'Tier6Block4Price',
		nameObj: 'tier6Block4Price',
		clusterId: 1792,
		name: 'tier 6 block 4 price',
		server: true,
		attributeId: 1123,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1523,
		nameFun: 'Tier6Block5Price',
		nameObj: 'tier6Block5Price',
		clusterId: 1792,
		name: 'tier 6 block 5 price',
		server: true,
		attributeId: 1124,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1524,
		nameFun: 'Tier6Block6Price',
		nameObj: 'tier6Block6Price',
		clusterId: 1792,
		name: 'tier 6 block 6 price',
		server: true,
		attributeId: 1125,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1525,
		nameFun: 'Tier6Block7Price',
		nameObj: 'tier6Block7Price',
		clusterId: 1792,
		name: 'tier 6 block 7 price',
		server: true,
		attributeId: 1126,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1526,
		nameFun: 'Tier6Block8Price',
		nameObj: 'tier6Block8Price',
		clusterId: 1792,
		name: 'tier 6 block 8 price',
		server: true,
		attributeId: 1127,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1527,
		nameFun: 'Tier6Block9Price',
		nameObj: 'tier6Block9Price',
		clusterId: 1792,
		name: 'tier 6 block 9 price',
		server: true,
		attributeId: 1128,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1528,
		nameFun: 'Tier6Block10Price',
		nameObj: 'tier6Block10Price',
		clusterId: 1792,
		name: 'tier 6 block 10 price',
		server: true,
		attributeId: 1129,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1529,
		nameFun: 'Tier6Block11Price',
		nameObj: 'tier6Block11Price',
		clusterId: 1792,
		name: 'tier 6 block 11 price',
		server: true,
		attributeId: 1130,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1530,
		nameFun: 'Tier6Block12Price',
		nameObj: 'tier6Block12Price',
		clusterId: 1792,
		name: 'tier 6 block 12 price',
		server: true,
		attributeId: 1131,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1531,
		nameFun: 'Tier6Block13Price',
		nameObj: 'tier6Block13Price',
		clusterId: 1792,
		name: 'tier 6 block 13 price',
		server: true,
		attributeId: 1132,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1532,
		nameFun: 'Tier6Block14Price',
		nameObj: 'tier6Block14Price',
		clusterId: 1792,
		name: 'tier 6 block 14 price',
		server: true,
		attributeId: 1133,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1533,
		nameFun: 'Tier6Block15Price',
		nameObj: 'tier6Block15Price',
		clusterId: 1792,
		name: 'tier 6 block 15 price',
		server: true,
		attributeId: 1134,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1534,
		nameFun: 'Tier6Block16Price',
		nameObj: 'tier6Block16Price',
		clusterId: 1792,
		name: 'tier 6 block 16 price',
		server: true,
		attributeId: 1135,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1535,
		nameFun: 'Tier7Block1Price',
		nameObj: 'tier7Block1Price',
		clusterId: 1792,
		name: 'tier 7 block 1 price',
		server: true,
		attributeId: 1136,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1536,
		nameFun: 'Tier7Block2Price',
		nameObj: 'tier7Block2Price',
		clusterId: 1792,
		name: 'tier 7 block 2 price',
		server: true,
		attributeId: 1137,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1537,
		nameFun: 'Tier7Block3Price',
		nameObj: 'tier7Block3Price',
		clusterId: 1792,
		name: 'tier 7 block 3 price',
		server: true,
		attributeId: 1138,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1538,
		nameFun: 'Tier7Block4Price',
		nameObj: 'tier7Block4Price',
		clusterId: 1792,
		name: 'tier 7 block 4 price',
		server: true,
		attributeId: 1139,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1539,
		nameFun: 'Tier7Block5Price',
		nameObj: 'tier7Block5Price',
		clusterId: 1792,
		name: 'tier 7 block 5 price',
		server: true,
		attributeId: 1140,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1540,
		nameFun: 'Tier7Block6Price',
		nameObj: 'tier7Block6Price',
		clusterId: 1792,
		name: 'tier 7 block 6 price',
		server: true,
		attributeId: 1141,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1541,
		nameFun: 'Tier7Block7Price',
		nameObj: 'tier7Block7Price',
		clusterId: 1792,
		name: 'tier 7 block 7 price',
		server: true,
		attributeId: 1142,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1542,
		nameFun: 'Tier7Block8Price',
		nameObj: 'tier7Block8Price',
		clusterId: 1792,
		name: 'tier 7 block 8 price',
		server: true,
		attributeId: 1143,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1543,
		nameFun: 'Tier7Block9Price',
		nameObj: 'tier7Block9Price',
		clusterId: 1792,
		name: 'tier 7 block 9 price',
		server: true,
		attributeId: 1144,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1544,
		nameFun: 'Tier7Block10Price',
		nameObj: 'tier7Block10Price',
		clusterId: 1792,
		name: 'tier 7 block 10 price',
		server: true,
		attributeId: 1145,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1545,
		nameFun: 'Tier7Block11Price',
		nameObj: 'tier7Block11Price',
		clusterId: 1792,
		name: 'tier 7 block 11 price',
		server: true,
		attributeId: 1146,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1546,
		nameFun: 'Tier7Block12Price',
		nameObj: 'tier7Block12Price',
		clusterId: 1792,
		name: 'tier 7 block 12 price',
		server: true,
		attributeId: 1147,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1547,
		nameFun: 'Tier7Block13Price',
		nameObj: 'tier7Block13Price',
		clusterId: 1792,
		name: 'tier 7 block 13 price',
		server: true,
		attributeId: 1148,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1548,
		nameFun: 'Tier7Block14Price',
		nameObj: 'tier7Block14Price',
		clusterId: 1792,
		name: 'tier 7 block 14 price',
		server: true,
		attributeId: 1149,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1549,
		nameFun: 'Tier7Block15Price',
		nameObj: 'tier7Block15Price',
		clusterId: 1792,
		name: 'tier 7 block 15 price',
		server: true,
		attributeId: 1150,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1550,
		nameFun: 'Tier7Block16Price',
		nameObj: 'tier7Block16Price',
		clusterId: 1792,
		name: 'tier 7 block 16 price',
		server: true,
		attributeId: 1151,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1551,
		nameFun: 'Tier8Block1Price',
		nameObj: 'tier8Block1Price',
		clusterId: 1792,
		name: 'tier 8 block 1 price',
		server: true,
		attributeId: 1152,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1552,
		nameFun: 'Tier8Block2Price',
		nameObj: 'tier8Block2Price',
		clusterId: 1792,
		name: 'tier 8 block 2 price',
		server: true,
		attributeId: 1153,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1553,
		nameFun: 'Tier8Block3Price',
		nameObj: 'tier8Block3Price',
		clusterId: 1792,
		name: 'tier 8 block 3 price',
		server: true,
		attributeId: 1154,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1554,
		nameFun: 'Tier8Block4Price',
		nameObj: 'tier8Block4Price',
		clusterId: 1792,
		name: 'tier 8 block 4 price',
		server: true,
		attributeId: 1155,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1555,
		nameFun: 'Tier8Block5Price',
		nameObj: 'tier8Block5Price',
		clusterId: 1792,
		name: 'tier 8 block 5 price',
		server: true,
		attributeId: 1156,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1556,
		nameFun: 'Tier8Block6Price',
		nameObj: 'tier8Block6Price',
		clusterId: 1792,
		name: 'tier 8 block 6 price',
		server: true,
		attributeId: 1157,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1557,
		nameFun: 'Tier8Block7Price',
		nameObj: 'tier8Block7Price',
		clusterId: 1792,
		name: 'tier 8 block 7 price',
		server: true,
		attributeId: 1158,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1558,
		nameFun: 'Tier8Block8Price',
		nameObj: 'tier8Block8Price',
		clusterId: 1792,
		name: 'tier 8 block 8 price',
		server: true,
		attributeId: 1159,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1559,
		nameFun: 'Tier8Block9Price',
		nameObj: 'tier8Block9Price',
		clusterId: 1792,
		name: 'tier 8 block 9 price',
		server: true,
		attributeId: 1160,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1560,
		nameFun: 'Tier8Block10Price',
		nameObj: 'tier8Block10Price',
		clusterId: 1792,
		name: 'tier 8 block 10 price',
		server: true,
		attributeId: 1161,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1561,
		nameFun: 'Tier8Block11Price',
		nameObj: 'tier8Block11Price',
		clusterId: 1792,
		name: 'tier 8 block 11 price',
		server: true,
		attributeId: 1162,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1562,
		nameFun: 'Tier8Block12Price',
		nameObj: 'tier8Block12Price',
		clusterId: 1792,
		name: 'tier 8 block 12 price',
		server: true,
		attributeId: 1163,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1563,
		nameFun: 'Tier8Block13Price',
		nameObj: 'tier8Block13Price',
		clusterId: 1792,
		name: 'tier 8 block 13 price',
		server: true,
		attributeId: 1164,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1564,
		nameFun: 'Tier8Block14Price',
		nameObj: 'tier8Block14Price',
		clusterId: 1792,
		name: 'tier 8 block 14 price',
		server: true,
		attributeId: 1165,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1565,
		nameFun: 'Tier8Block15Price',
		nameObj: 'tier8Block15Price',
		clusterId: 1792,
		name: 'tier 8 block 15 price',
		server: true,
		attributeId: 1166,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1566,
		nameFun: 'Tier8Block16Price',
		nameObj: 'tier8Block16Price',
		clusterId: 1792,
		name: 'tier 8 block 16 price',
		server: true,
		attributeId: 1167,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1567,
		nameFun: 'Tier9Block1Price',
		nameObj: 'tier9Block1Price',
		clusterId: 1792,
		name: 'tier 9 block 1 price',
		server: true,
		attributeId: 1168,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1568,
		nameFun: 'Tier9Block2Price',
		nameObj: 'tier9Block2Price',
		clusterId: 1792,
		name: 'tier 9 block 2 price',
		server: true,
		attributeId: 1169,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1569,
		nameFun: 'Tier9Block3Price',
		nameObj: 'tier9Block3Price',
		clusterId: 1792,
		name: 'tier 9 block 3 price',
		server: true,
		attributeId: 1170,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1570,
		nameFun: 'Tier9Block4Price',
		nameObj: 'tier9Block4Price',
		clusterId: 1792,
		name: 'tier 9 block 4 price',
		server: true,
		attributeId: 1171,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1571,
		nameFun: 'Tier9Block5Price',
		nameObj: 'tier9Block5Price',
		clusterId: 1792,
		name: 'tier 9 block 5 price',
		server: true,
		attributeId: 1172,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1572,
		nameFun: 'Tier9Block6Price',
		nameObj: 'tier9Block6Price',
		clusterId: 1792,
		name: 'tier 9 block 6 price',
		server: true,
		attributeId: 1173,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1573,
		nameFun: 'Tier9Block7Price',
		nameObj: 'tier9Block7Price',
		clusterId: 1792,
		name: 'tier 9 block 7 price',
		server: true,
		attributeId: 1174,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1574,
		nameFun: 'Tier9Block8Price',
		nameObj: 'tier9Block8Price',
		clusterId: 1792,
		name: 'tier 9 block 8 price',
		server: true,
		attributeId: 1175,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1575,
		nameFun: 'Tier9Block9Price',
		nameObj: 'tier9Block9Price',
		clusterId: 1792,
		name: 'tier 9 block 9 price',
		server: true,
		attributeId: 1176,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1576,
		nameFun: 'Tier9Block10Price',
		nameObj: 'tier9Block10Price',
		clusterId: 1792,
		name: 'tier 9 block 10 price',
		server: true,
		attributeId: 1177,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1577,
		nameFun: 'Tier9Block11Price',
		nameObj: 'tier9Block11Price',
		clusterId: 1792,
		name: 'tier 9 block 11 price',
		server: true,
		attributeId: 1178,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1578,
		nameFun: 'Tier9Block12Price',
		nameObj: 'tier9Block12Price',
		clusterId: 1792,
		name: 'tier 9 block 12 price',
		server: true,
		attributeId: 1179,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1579,
		nameFun: 'Tier9Block13Price',
		nameObj: 'tier9Block13Price',
		clusterId: 1792,
		name: 'tier 9 block 13 price',
		server: true,
		attributeId: 1180,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1580,
		nameFun: 'Tier9Block14Price',
		nameObj: 'tier9Block14Price',
		clusterId: 1792,
		name: 'tier 9 block 14 price',
		server: true,
		attributeId: 1181,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1581,
		nameFun: 'Tier9Block15Price',
		nameObj: 'tier9Block15Price',
		clusterId: 1792,
		name: 'tier 9 block 15 price',
		server: true,
		attributeId: 1182,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1582,
		nameFun: 'Tier9Block16Price',
		nameObj: 'tier9Block16Price',
		clusterId: 1792,
		name: 'tier 9 block 16 price',
		server: true,
		attributeId: 1183,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1583,
		nameFun: 'Tier10Block1Price',
		nameObj: 'tier10Block1Price',
		clusterId: 1792,
		name: 'tier 10 block 1 price',
		server: true,
		attributeId: 1184,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1584,
		nameFun: 'Tier10Block2Price',
		nameObj: 'tier10Block2Price',
		clusterId: 1792,
		name: 'tier 10 block 2 price',
		server: true,
		attributeId: 1185,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1585,
		nameFun: 'Tier10Block3Price',
		nameObj: 'tier10Block3Price',
		clusterId: 1792,
		name: 'tier 10 block 3 price',
		server: true,
		attributeId: 1186,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1586,
		nameFun: 'Tier10Block4Price',
		nameObj: 'tier10Block4Price',
		clusterId: 1792,
		name: 'tier 10 block 4 price',
		server: true,
		attributeId: 1187,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1587,
		nameFun: 'Tier10Block5Price',
		nameObj: 'tier10Block5Price',
		clusterId: 1792,
		name: 'tier 10 block 5 price',
		server: true,
		attributeId: 1188,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1588,
		nameFun: 'Tier10Block6Price',
		nameObj: 'tier10Block6Price',
		clusterId: 1792,
		name: 'tier 10 block 6 price',
		server: true,
		attributeId: 1189,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1589,
		nameFun: 'Tier10Block7Price',
		nameObj: 'tier10Block7Price',
		clusterId: 1792,
		name: 'tier 10 block 7 price',
		server: true,
		attributeId: 1190,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1590,
		nameFun: 'Tier10Block8Price',
		nameObj: 'tier10Block8Price',
		clusterId: 1792,
		name: 'tier 10 block 8 price',
		server: true,
		attributeId: 1191,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1591,
		nameFun: 'Tier10Block9Price',
		nameObj: 'tier10Block9Price',
		clusterId: 1792,
		name: 'tier 10 block 9 price',
		server: true,
		attributeId: 1192,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1592,
		nameFun: 'Tier10Block10Price',
		nameObj: 'tier10Block10Price',
		clusterId: 1792,
		name: 'tier 10 block 10 price',
		server: true,
		attributeId: 1193,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1593,
		nameFun: 'Tier10Block11Price',
		nameObj: 'tier10Block11Price',
		clusterId: 1792,
		name: 'tier 10 block 11 price',
		server: true,
		attributeId: 1194,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1594,
		nameFun: 'Tier10Block12Price',
		nameObj: 'tier10Block12Price',
		clusterId: 1792,
		name: 'tier 10 block 12 price',
		server: true,
		attributeId: 1195,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1595,
		nameFun: 'Tier10Block13Price',
		nameObj: 'tier10Block13Price',
		clusterId: 1792,
		name: 'tier 10 block 13 price',
		server: true,
		attributeId: 1196,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1596,
		nameFun: 'Tier10Block14Price',
		nameObj: 'tier10Block14Price',
		clusterId: 1792,
		name: 'tier 10 block 14 price',
		server: true,
		attributeId: 1197,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1597,
		nameFun: 'Tier10Block15Price',
		nameObj: 'tier10Block15Price',
		clusterId: 1792,
		name: 'tier 10 block 15 price',
		server: true,
		attributeId: 1198,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1598,
		nameFun: 'Tier10Block16Price',
		nameObj: 'tier10Block16Price',
		clusterId: 1792,
		name: 'tier 10 block 16 price',
		server: true,
		attributeId: 1199,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1599,
		nameFun: 'Tier11Block1Price',
		nameObj: 'tier11Block1Price',
		clusterId: 1792,
		name: 'tier 11 block 1 price',
		server: true,
		attributeId: 1200,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1600,
		nameFun: 'Tier11Block2Price',
		nameObj: 'tier11Block2Price',
		clusterId: 1792,
		name: 'tier 11 block 2 price',
		server: true,
		attributeId: 1201,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1601,
		nameFun: 'Tier11Block3Price',
		nameObj: 'tier11Block3Price',
		clusterId: 1792,
		name: 'tier 11 block 3 price',
		server: true,
		attributeId: 1202,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1602,
		nameFun: 'Tier11Block4Price',
		nameObj: 'tier11Block4Price',
		clusterId: 1792,
		name: 'tier 11 block 4 price',
		server: true,
		attributeId: 1203,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1603,
		nameFun: 'Tier11Block5Price',
		nameObj: 'tier11Block5Price',
		clusterId: 1792,
		name: 'tier 11 block 5 price',
		server: true,
		attributeId: 1204,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1604,
		nameFun: 'Tier11Block6Price',
		nameObj: 'tier11Block6Price',
		clusterId: 1792,
		name: 'tier 11 block 6 price',
		server: true,
		attributeId: 1205,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1605,
		nameFun: 'Tier11Block7Price',
		nameObj: 'tier11Block7Price',
		clusterId: 1792,
		name: 'tier 11 block 7 price',
		server: true,
		attributeId: 1206,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1606,
		nameFun: 'Tier11Block8Price',
		nameObj: 'tier11Block8Price',
		clusterId: 1792,
		name: 'tier 11 block 8 price',
		server: true,
		attributeId: 1207,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1607,
		nameFun: 'Tier11Block9Price',
		nameObj: 'tier11Block9Price',
		clusterId: 1792,
		name: 'tier 11 block 9 price',
		server: true,
		attributeId: 1208,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1608,
		nameFun: 'Tier11Block10Price',
		nameObj: 'tier11Block10Price',
		clusterId: 1792,
		name: 'tier 11 block 10 price',
		server: true,
		attributeId: 1209,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1609,
		nameFun: 'Tier11Block11Price',
		nameObj: 'tier11Block11Price',
		clusterId: 1792,
		name: 'tier 11 block 11 price',
		server: true,
		attributeId: 1210,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1610,
		nameFun: 'Tier11Block12Price',
		nameObj: 'tier11Block12Price',
		clusterId: 1792,
		name: 'tier 11 block 12 price',
		server: true,
		attributeId: 1211,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1611,
		nameFun: 'Tier11Block13Price',
		nameObj: 'tier11Block13Price',
		clusterId: 1792,
		name: 'tier 11 block 13 price',
		server: true,
		attributeId: 1212,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1612,
		nameFun: 'Tier11Block14Price',
		nameObj: 'tier11Block14Price',
		clusterId: 1792,
		name: 'tier 11 block 14 price',
		server: true,
		attributeId: 1213,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1613,
		nameFun: 'Tier11Block15Price',
		nameObj: 'tier11Block15Price',
		clusterId: 1792,
		name: 'tier 11 block 15 price',
		server: true,
		attributeId: 1214,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1614,
		nameFun: 'Tier11Block16Price',
		nameObj: 'tier11Block16Price',
		clusterId: 1792,
		name: 'tier 11 block 16 price',
		server: true,
		attributeId: 1215,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1615,
		nameFun: 'Tier12Block1Price',
		nameObj: 'tier12Block1Price',
		clusterId: 1792,
		name: 'tier 12 block 1 price',
		server: true,
		attributeId: 1216,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1616,
		nameFun: 'Tier12Block2Price',
		nameObj: 'tier12Block2Price',
		clusterId: 1792,
		name: 'tier 12 block 2 price',
		server: true,
		attributeId: 1217,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1617,
		nameFun: 'Tier12Block3Price',
		nameObj: 'tier12Block3Price',
		clusterId: 1792,
		name: 'tier 12 block 3 price',
		server: true,
		attributeId: 1218,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1618,
		nameFun: 'Tier12Block4Price',
		nameObj: 'tier12Block4Price',
		clusterId: 1792,
		name: 'tier 12 block 4 price',
		server: true,
		attributeId: 1219,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1619,
		nameFun: 'Tier12Block5Price',
		nameObj: 'tier12Block5Price',
		clusterId: 1792,
		name: 'tier 12 block 5 price',
		server: true,
		attributeId: 1220,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1620,
		nameFun: 'Tier12Block6Price',
		nameObj: 'tier12Block6Price',
		clusterId: 1792,
		name: 'tier 12 block 6 price',
		server: true,
		attributeId: 1221,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1621,
		nameFun: 'Tier12Block7Price',
		nameObj: 'tier12Block7Price',
		clusterId: 1792,
		name: 'tier 12 block 7 price',
		server: true,
		attributeId: 1222,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1622,
		nameFun: 'Tier12Block8Price',
		nameObj: 'tier12Block8Price',
		clusterId: 1792,
		name: 'tier 12 block 8 price',
		server: true,
		attributeId: 1223,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1623,
		nameFun: 'Tier12Block9Price',
		nameObj: 'tier12Block9Price',
		clusterId: 1792,
		name: 'tier 12 block 9 price',
		server: true,
		attributeId: 1224,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1624,
		nameFun: 'Tier12Block10Price',
		nameObj: 'tier12Block10Price',
		clusterId: 1792,
		name: 'tier 12 block 10 price',
		server: true,
		attributeId: 1225,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1625,
		nameFun: 'Tier12Block11Price',
		nameObj: 'tier12Block11Price',
		clusterId: 1792,
		name: 'tier 12 block 11 price',
		server: true,
		attributeId: 1226,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1626,
		nameFun: 'Tier12Block12Price',
		nameObj: 'tier12Block12Price',
		clusterId: 1792,
		name: 'tier 12 block 12 price',
		server: true,
		attributeId: 1227,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1627,
		nameFun: 'Tier12Block13Price',
		nameObj: 'tier12Block13Price',
		clusterId: 1792,
		name: 'tier 12 block 13 price',
		server: true,
		attributeId: 1228,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1628,
		nameFun: 'Tier12Block14Price',
		nameObj: 'tier12Block14Price',
		clusterId: 1792,
		name: 'tier 12 block 14 price',
		server: true,
		attributeId: 1229,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1629,
		nameFun: 'Tier12Block15Price',
		nameObj: 'tier12Block15Price',
		clusterId: 1792,
		name: 'tier 12 block 15 price',
		server: true,
		attributeId: 1230,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1630,
		nameFun: 'Tier12Block16Price',
		nameObj: 'tier12Block16Price',
		clusterId: 1792,
		name: 'tier 12 block 16 price',
		server: true,
		attributeId: 1231,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1631,
		nameFun: 'Tier13Block1Price',
		nameObj: 'tier13Block1Price',
		clusterId: 1792,
		name: 'tier 13 block 1 price',
		server: true,
		attributeId: 1232,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1632,
		nameFun: 'Tier13Block2Price',
		nameObj: 'tier13Block2Price',
		clusterId: 1792,
		name: 'tier 13 block 2 price',
		server: true,
		attributeId: 1233,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1633,
		nameFun: 'Tier13Block3Price',
		nameObj: 'tier13Block3Price',
		clusterId: 1792,
		name: 'tier 13 block 3 price',
		server: true,
		attributeId: 1234,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1634,
		nameFun: 'Tier13Block4Price',
		nameObj: 'tier13Block4Price',
		clusterId: 1792,
		name: 'tier 13 block 4 price',
		server: true,
		attributeId: 1235,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1635,
		nameFun: 'Tier13Block5Price',
		nameObj: 'tier13Block5Price',
		clusterId: 1792,
		name: 'tier 13 block 5 price',
		server: true,
		attributeId: 1236,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1636,
		nameFun: 'Tier13Block6Price',
		nameObj: 'tier13Block6Price',
		clusterId: 1792,
		name: 'tier 13 block 6 price',
		server: true,
		attributeId: 1237,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1637,
		nameFun: 'Tier13Block7Price',
		nameObj: 'tier13Block7Price',
		clusterId: 1792,
		name: 'tier 13 block 7 price',
		server: true,
		attributeId: 1238,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1638,
		nameFun: 'Tier13Block8Price',
		nameObj: 'tier13Block8Price',
		clusterId: 1792,
		name: 'tier 13 block 8 price',
		server: true,
		attributeId: 1239,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1639,
		nameFun: 'Tier13Block9Price',
		nameObj: 'tier13Block9Price',
		clusterId: 1792,
		name: 'tier 13 block 9 price',
		server: true,
		attributeId: 1240,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1640,
		nameFun: 'Tier13Block10Price',
		nameObj: 'tier13Block10Price',
		clusterId: 1792,
		name: 'tier 13 block 10 price',
		server: true,
		attributeId: 1241,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1641,
		nameFun: 'Tier13Block11Price',
		nameObj: 'tier13Block11Price',
		clusterId: 1792,
		name: 'tier 13 block 11 price',
		server: true,
		attributeId: 1242,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1642,
		nameFun: 'Tier13Block12Price',
		nameObj: 'tier13Block12Price',
		clusterId: 1792,
		name: 'tier 13 block 12 price',
		server: true,
		attributeId: 1243,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1643,
		nameFun: 'Tier13Block13Price',
		nameObj: 'tier13Block13Price',
		clusterId: 1792,
		name: 'tier 13 block 13 price',
		server: true,
		attributeId: 1244,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1644,
		nameFun: 'Tier13Block14Price',
		nameObj: 'tier13Block14Price',
		clusterId: 1792,
		name: 'tier 13 block 14 price',
		server: true,
		attributeId: 1245,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1645,
		nameFun: 'Tier13Block15Price',
		nameObj: 'tier13Block15Price',
		clusterId: 1792,
		name: 'tier 13 block 15 price',
		server: true,
		attributeId: 1246,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1646,
		nameFun: 'Tier13Block16Price',
		nameObj: 'tier13Block16Price',
		clusterId: 1792,
		name: 'tier 13 block 16 price',
		server: true,
		attributeId: 1247,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1647,
		nameFun: 'Tier14Block1Price',
		nameObj: 'tier14Block1Price',
		clusterId: 1792,
		name: 'tier 14 block 1 price',
		server: true,
		attributeId: 1248,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1648,
		nameFun: 'Tier14Block2Price',
		nameObj: 'tier14Block2Price',
		clusterId: 1792,
		name: 'tier 14 block 2 price',
		server: true,
		attributeId: 1249,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1649,
		nameFun: 'Tier14Block3Price',
		nameObj: 'tier14Block3Price',
		clusterId: 1792,
		name: 'tier 14 block 3 price',
		server: true,
		attributeId: 1250,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1650,
		nameFun: 'Tier14Block4Price',
		nameObj: 'tier14Block4Price',
		clusterId: 1792,
		name: 'tier 14 block 4 price',
		server: true,
		attributeId: 1251,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1651,
		nameFun: 'Tier14Block5Price',
		nameObj: 'tier14Block5Price',
		clusterId: 1792,
		name: 'tier 14 block 5 price',
		server: true,
		attributeId: 1252,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1652,
		nameFun: 'Tier14Block6Price',
		nameObj: 'tier14Block6Price',
		clusterId: 1792,
		name: 'tier 14 block 6 price',
		server: true,
		attributeId: 1253,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1653,
		nameFun: 'Tier14Block7Price',
		nameObj: 'tier14Block7Price',
		clusterId: 1792,
		name: 'tier 14 block 7 price',
		server: true,
		attributeId: 1254,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1654,
		nameFun: 'Tier14Block8Price',
		nameObj: 'tier14Block8Price',
		clusterId: 1792,
		name: 'tier 14 block 8 price',
		server: true,
		attributeId: 1255,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1655,
		nameFun: 'Tier14Block9Price',
		nameObj: 'tier14Block9Price',
		clusterId: 1792,
		name: 'tier 14 block 9 price',
		server: true,
		attributeId: 1256,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1656,
		nameFun: 'Tier14Block10Price',
		nameObj: 'tier14Block10Price',
		clusterId: 1792,
		name: 'tier 14 block 10 price',
		server: true,
		attributeId: 1257,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1657,
		nameFun: 'Tier14Block11Price',
		nameObj: 'tier14Block11Price',
		clusterId: 1792,
		name: 'tier 14 block 11 price',
		server: true,
		attributeId: 1258,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1658,
		nameFun: 'Tier14Block12Price',
		nameObj: 'tier14Block12Price',
		clusterId: 1792,
		name: 'tier 14 block 12 price',
		server: true,
		attributeId: 1259,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1659,
		nameFun: 'Tier14Block13Price',
		nameObj: 'tier14Block13Price',
		clusterId: 1792,
		name: 'tier 14 block 13 price',
		server: true,
		attributeId: 1260,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1660,
		nameFun: 'Tier14Block14Price',
		nameObj: 'tier14Block14Price',
		clusterId: 1792,
		name: 'tier 14 block 14 price',
		server: true,
		attributeId: 1261,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1661,
		nameFun: 'Tier14Block15Price',
		nameObj: 'tier14Block15Price',
		clusterId: 1792,
		name: 'tier 14 block 15 price',
		server: true,
		attributeId: 1262,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1662,
		nameFun: 'Tier14Block16Price',
		nameObj: 'tier14Block16Price',
		clusterId: 1792,
		name: 'tier 14 block 16 price',
		server: true,
		attributeId: 1263,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1663,
		nameFun: 'Tier15Block1Price',
		nameObj: 'tier15Block1Price',
		clusterId: 1792,
		name: 'tier 15 block 1 price',
		server: true,
		attributeId: 1264,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1664,
		nameFun: 'Tier15Block2Price',
		nameObj: 'tier15Block2Price',
		clusterId: 1792,
		name: 'tier 15 block 2 price',
		server: true,
		attributeId: 1265,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1665,
		nameFun: 'Tier15Block3Price',
		nameObj: 'tier15Block3Price',
		clusterId: 1792,
		name: 'tier 15 block 3 price',
		server: true,
		attributeId: 1266,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1666,
		nameFun: 'Tier15Block4Price',
		nameObj: 'tier15Block4Price',
		clusterId: 1792,
		name: 'tier 15 block 4 price',
		server: true,
		attributeId: 1267,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1667,
		nameFun: 'Tier15Block5Price',
		nameObj: 'tier15Block5Price',
		clusterId: 1792,
		name: 'tier 15 block 5 price',
		server: true,
		attributeId: 1268,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1668,
		nameFun: 'Tier15Block6Price',
		nameObj: 'tier15Block6Price',
		clusterId: 1792,
		name: 'tier 15 block 6 price',
		server: true,
		attributeId: 1269,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1669,
		nameFun: 'Tier15Block7Price',
		nameObj: 'tier15Block7Price',
		clusterId: 1792,
		name: 'tier 15 block 7 price',
		server: true,
		attributeId: 1270,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1670,
		nameFun: 'Tier15Block8Price',
		nameObj: 'tier15Block8Price',
		clusterId: 1792,
		name: 'tier 15 block 8 price',
		server: true,
		attributeId: 1271,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1671,
		nameFun: 'Tier15Block9Price',
		nameObj: 'tier15Block9Price',
		clusterId: 1792,
		name: 'tier 15 block 9 price',
		server: true,
		attributeId: 1272,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1672,
		nameFun: 'Tier15Block10Price',
		nameObj: 'tier15Block10Price',
		clusterId: 1792,
		name: 'tier 15 block 10 price',
		server: true,
		attributeId: 1273,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1673,
		nameFun: 'Tier15Block11Price',
		nameObj: 'tier15Block11Price',
		clusterId: 1792,
		name: 'tier 15 block 11 price',
		server: true,
		attributeId: 1274,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1674,
		nameFun: 'Tier15Block12Price',
		nameObj: 'tier15Block12Price',
		clusterId: 1792,
		name: 'tier 15 block 12 price',
		server: true,
		attributeId: 1275,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1675,
		nameFun: 'Tier15Block13Price',
		nameObj: 'tier15Block13Price',
		clusterId: 1792,
		name: 'tier 15 block 13 price',
		server: true,
		attributeId: 1276,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1676,
		nameFun: 'Tier15Block14Price',
		nameObj: 'tier15Block14Price',
		clusterId: 1792,
		name: 'tier 15 block 14 price',
		server: true,
		attributeId: 1277,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1677,
		nameFun: 'Tier15Block15Price',
		nameObj: 'tier15Block15Price',
		clusterId: 1792,
		name: 'tier 15 block 15 price',
		server: true,
		attributeId: 1278,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1678,
		nameFun: 'Tier15Block16Price',
		nameObj: 'tier15Block16Price',
		clusterId: 1792,
		name: 'tier 15 block 16 price',
		server: true,
		attributeId: 1279,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1679,
		nameFun: 'PriceIncreaseRandomizeMinutes',
		nameObj: 'priceIncreaseRandomizeMinutes',
		clusterId: 1792,
		name: 'price increase randomize minutes',
		server: false,
		attributeId: 0,
		type: 'INT8U',
		writable: true,
		mandatory: false
	}, {

		label: 1680,
		nameFun: 'PriceDecreaseRandomizeMinutes',
		nameObj: 'priceDecreaseRandomizeMinutes',
		clusterId: 1792,
		name: 'price decrease randomize minutes',
		server: false,
		attributeId: 1,
		type: 'INT8U',
		writable: true,
		mandatory: false
	}, {

		label: 1681,
		nameFun: 'CommodityType',
		nameObj: 'commodityType',
		clusterId: 1792,
		name: 'commodity type',
		server: false,
		attributeId: 2,
		type: 'ENUM8',
		writable: false,
		mandatory: false
	}, {

		label: 1682,
		nameFun: 'Tier16PriceLabel',
		nameObj: 'tier16PriceLabel',
		clusterId: 1792,
		name: 'tier 16 price label',
		server: true,
		attributeId: 15,
		type: 'OCTET_STRING',
		writable: true,
		mandatory: false
	}, {

		label: 1683,
		nameFun: 'Tier17PriceLabel',
		nameObj: 'tier17PriceLabel',
		clusterId: 1792,
		name: 'tier 17 price label',
		server: true,
		attributeId: 16,
		type: 'OCTET_STRING',
		writable: true,
		mandatory: false
	}, {

		label: 1684,
		nameFun: 'Tier18PriceLabel',
		nameObj: 'tier18PriceLabel',
		clusterId: 1792,
		name: 'tier 18 price label',
		server: true,
		attributeId: 17,
		type: 'OCTET_STRING',
		writable: true,
		mandatory: false
	}, {

		label: 1685,
		nameFun: 'Tier19PriceLabel',
		nameObj: 'tier19PriceLabel',
		clusterId: 1792,
		name: 'tier 19 price label',
		server: true,
		attributeId: 18,
		type: 'OCTET_STRING',
		writable: true,
		mandatory: false
	}, {

		label: 1686,
		nameFun: 'Tier20PriceLabel',
		nameObj: 'tier20PriceLabel',
		clusterId: 1792,
		name: 'tier 20 price label',
		server: true,
		attributeId: 19,
		type: 'OCTET_STRING',
		writable: true,
		mandatory: false
	}, {

		label: 1687,
		nameFun: 'Tier21PriceLabel',
		nameObj: 'tier21PriceLabel',
		clusterId: 1792,
		name: 'tier 21 price label',
		server: true,
		attributeId: 20,
		type: 'OCTET_STRING',
		writable: true,
		mandatory: false
	}, {

		label: 1688,
		nameFun: 'Tier22PriceLabel',
		nameObj: 'tier22PriceLabel',
		clusterId: 1792,
		name: 'tier 22 price label',
		server: true,
		attributeId: 21,
		type: 'OCTET_STRING',
		writable: true,
		mandatory: false
	}, {

		label: 1689,
		nameFun: 'Tier23PriceLabel',
		nameObj: 'tier23PriceLabel',
		clusterId: 1792,
		name: 'tier 23 price label',
		server: true,
		attributeId: 22,
		type: 'OCTET_STRING',
		writable: true,
		mandatory: false
	}, {

		label: 1690,
		nameFun: 'Tier24PriceLabel',
		nameObj: 'tier24PriceLabel',
		clusterId: 1792,
		name: 'tier 24 price label',
		server: true,
		attributeId: 23,
		type: 'OCTET_STRING',
		writable: true,
		mandatory: false
	}, {

		label: 1691,
		nameFun: 'Tier25PriceLabel',
		nameObj: 'tier25PriceLabel',
		clusterId: 1792,
		name: 'tier 25 price label',
		server: true,
		attributeId: 24,
		type: 'OCTET_STRING',
		writable: true,
		mandatory: false
	}, {

		label: 1692,
		nameFun: 'Tier26PriceLabel',
		nameObj: 'tier26PriceLabel',
		clusterId: 1792,
		name: 'tier 26 price label',
		server: true,
		attributeId: 25,
		type: 'OCTET_STRING',
		writable: true,
		mandatory: false
	}, {

		label: 1693,
		nameFun: 'Tier27PriceLabel',
		nameObj: 'tier27PriceLabel',
		clusterId: 1792,
		name: 'tier 27 price label',
		server: true,
		attributeId: 26,
		type: 'OCTET_STRING',
		writable: true,
		mandatory: false
	}, {

		label: 1694,
		nameFun: 'Tier28PriceLabel',
		nameObj: 'tier28PriceLabel',
		clusterId: 1792,
		name: 'tier 28 price label',
		server: true,
		attributeId: 27,
		type: 'OCTET_STRING',
		writable: true,
		mandatory: false
	}, {

		label: 1695,
		nameFun: 'Tier29PriceLabel',
		nameObj: 'tier29PriceLabel',
		clusterId: 1792,
		name: 'tier 29 price label',
		server: true,
		attributeId: 28,
		type: 'OCTET_STRING',
		writable: true,
		mandatory: false
	}, {

		label: 1696,
		nameFun: 'Tier30PriceLabel',
		nameObj: 'tier30PriceLabel',
		clusterId: 1792,
		name: 'tier 30 price label',
		server: true,
		attributeId: 29,
		type: 'OCTET_STRING',
		writable: true,
		mandatory: false
	}, {

		label: 1697,
		nameFun: 'Tier31PriceLabel',
		nameObj: 'tier31PriceLabel',
		clusterId: 1792,
		name: 'tier 31 price label',
		server: true,
		attributeId: 30,
		type: 'OCTET_STRING',
		writable: true,
		mandatory: false
	}, {

		label: 1698,
		nameFun: 'Tier32PriceLabel',
		nameObj: 'tier32PriceLabel',
		clusterId: 1792,
		name: 'tier 32 price label',
		server: true,
		attributeId: 31,
		type: 'OCTET_STRING',
		writable: true,
		mandatory: false
	}, {

		label: 1699,
		nameFun: 'Tier33PriceLabel',
		nameObj: 'tier33PriceLabel',
		clusterId: 1792,
		name: 'tier 33 price label',
		server: true,
		attributeId: 32,
		type: 'OCTET_STRING',
		writable: true,
		mandatory: false
	}, {

		label: 1700,
		nameFun: 'Tier34PriceLabel',
		nameObj: 'tier34PriceLabel',
		clusterId: 1792,
		name: 'tier 34 price label',
		server: true,
		attributeId: 33,
		type: 'OCTET_STRING',
		writable: true,
		mandatory: false
	}, {

		label: 1701,
		nameFun: 'Tier35PriceLabel',
		nameObj: 'tier35PriceLabel',
		clusterId: 1792,
		name: 'tier 35 price label',
		server: true,
		attributeId: 34,
		type: 'OCTET_STRING',
		writable: true,
		mandatory: false
	}, {

		label: 1702,
		nameFun: 'Tier36PriceLabel',
		nameObj: 'tier36PriceLabel',
		clusterId: 1792,
		name: 'tier 36 price label',
		server: true,
		attributeId: 35,
		type: 'OCTET_STRING',
		writable: true,
		mandatory: false
	}, {

		label: 1703,
		nameFun: 'Tier37PriceLabel',
		nameObj: 'tier37PriceLabel',
		clusterId: 1792,
		name: 'tier 37 price label',
		server: true,
		attributeId: 36,
		type: 'OCTET_STRING',
		writable: true,
		mandatory: false
	}, {

		label: 1704,
		nameFun: 'Tier38PriceLabel',
		nameObj: 'tier38PriceLabel',
		clusterId: 1792,
		name: 'tier 38 price label',
		server: true,
		attributeId: 37,
		type: 'OCTET_STRING',
		writable: true,
		mandatory: false
	}, {

		label: 1705,
		nameFun: 'Tier39PriceLabel',
		nameObj: 'tier39PriceLabel',
		clusterId: 1792,
		name: 'tier 39 price label',
		server: true,
		attributeId: 38,
		type: 'OCTET_STRING',
		writable: true,
		mandatory: false
	}, {

		label: 1706,
		nameFun: 'Tier40PriceLabel',
		nameObj: 'tier40PriceLabel',
		clusterId: 1792,
		name: 'tier 40 price label',
		server: true,
		attributeId: 39,
		type: 'OCTET_STRING',
		writable: true,
		mandatory: false
	}, {

		label: 1707,
		nameFun: 'Tier41PriceLabel',
		nameObj: 'tier41PriceLabel',
		clusterId: 1792,
		name: 'tier 41 price label',
		server: true,
		attributeId: 40,
		type: 'OCTET_STRING',
		writable: true,
		mandatory: false
	}, {

		label: 1708,
		nameFun: 'Tier42PriceLabel',
		nameObj: 'tier42PriceLabel',
		clusterId: 1792,
		name: 'tier 42 price label',
		server: true,
		attributeId: 41,
		type: 'OCTET_STRING',
		writable: true,
		mandatory: false
	}, {

		label: 1709,
		nameFun: 'Tier43PriceLabel',
		nameObj: 'tier43PriceLabel',
		clusterId: 1792,
		name: 'tier 43 price label',
		server: true,
		attributeId: 42,
		type: 'OCTET_STRING',
		writable: true,
		mandatory: false
	}, {

		label: 1710,
		nameFun: 'Tier44PriceLabel',
		nameObj: 'tier44PriceLabel',
		clusterId: 1792,
		name: 'tier 44 price label',
		server: true,
		attributeId: 43,
		type: 'OCTET_STRING',
		writable: true,
		mandatory: false
	}, {

		label: 1711,
		nameFun: 'Tier45PriceLabel',
		nameObj: 'tier45PriceLabel',
		clusterId: 1792,
		name: 'tier 45 price label',
		server: true,
		attributeId: 44,
		type: 'OCTET_STRING',
		writable: true,
		mandatory: false
	}, {

		label: 1712,
		nameFun: 'Tier46PriceLabel',
		nameObj: 'tier46PriceLabel',
		clusterId: 1792,
		name: 'tier 46 price label',
		server: true,
		attributeId: 45,
		type: 'OCTET_STRING',
		writable: true,
		mandatory: false
	}, {

		label: 1713,
		nameFun: 'Tier47PriceLabel',
		nameObj: 'tier47PriceLabel',
		clusterId: 1792,
		name: 'tier 47 price label',
		server: true,
		attributeId: 46,
		type: 'OCTET_STRING',
		writable: true,
		mandatory: false
	}, {

		label: 1714,
		nameFun: 'Tier48PriceLabel',
		nameObj: 'tier48PriceLabel',
		clusterId: 1792,
		name: 'tier 48 price label',
		server: true,
		attributeId: 47,
		type: 'OCTET_STRING',
		writable: true,
		mandatory: false
	}, {

		label: 1715,
		nameFun: 'PriceTier16',
		nameObj: 'priceTier16',
		clusterId: 1792,
		name: 'price tier 16',
		server: true,
		attributeId: 1295,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1716,
		nameFun: 'PriceTier17',
		nameObj: 'priceTier17',
		clusterId: 1792,
		name: 'price tier 17',
		server: true,
		attributeId: 1296,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1717,
		nameFun: 'PriceTier18',
		nameObj: 'priceTier18',
		clusterId: 1792,
		name: 'price tier 18',
		server: true,
		attributeId: 1297,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1718,
		nameFun: 'PriceTier19',
		nameObj: 'priceTier19',
		clusterId: 1792,
		name: 'price tier 19',
		server: true,
		attributeId: 1298,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1719,
		nameFun: 'PriceTier20',
		nameObj: 'priceTier20',
		clusterId: 1792,
		name: 'price tier 20',
		server: true,
		attributeId: 1299,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1720,
		nameFun: 'PriceTier21',
		nameObj: 'priceTier21',
		clusterId: 1792,
		name: 'price tier 21',
		server: true,
		attributeId: 1300,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1721,
		nameFun: 'PriceTier22',
		nameObj: 'priceTier22',
		clusterId: 1792,
		name: 'price tier 22',
		server: true,
		attributeId: 1301,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1722,
		nameFun: 'PriceTier23',
		nameObj: 'priceTier23',
		clusterId: 1792,
		name: 'price tier 23',
		server: true,
		attributeId: 1302,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1723,
		nameFun: 'PriceTier24',
		nameObj: 'priceTier24',
		clusterId: 1792,
		name: 'price tier 24',
		server: true,
		attributeId: 1303,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1724,
		nameFun: 'PriceTier25',
		nameObj: 'priceTier25',
		clusterId: 1792,
		name: 'price tier 25',
		server: true,
		attributeId: 1304,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1725,
		nameFun: 'PriceTier26',
		nameObj: 'priceTier26',
		clusterId: 1792,
		name: 'price tier 26',
		server: true,
		attributeId: 1305,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1726,
		nameFun: 'PriceTier27',
		nameObj: 'priceTier27',
		clusterId: 1792,
		name: 'price tier 27',
		server: true,
		attributeId: 1306,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1727,
		nameFun: 'PriceTier28',
		nameObj: 'priceTier28',
		clusterId: 1792,
		name: 'price tier 28',
		server: true,
		attributeId: 1307,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1728,
		nameFun: 'PriceTier29',
		nameObj: 'priceTier29',
		clusterId: 1792,
		name: 'price tier 29',
		server: true,
		attributeId: 1308,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1729,
		nameFun: 'PriceTier30',
		nameObj: 'priceTier30',
		clusterId: 1792,
		name: 'price tier 30',
		server: true,
		attributeId: 1309,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1730,
		nameFun: 'PriceTier31',
		nameObj: 'priceTier31',
		clusterId: 1792,
		name: 'price tier 31',
		server: true,
		attributeId: 1310,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1731,
		nameFun: 'PriceTier32',
		nameObj: 'priceTier32',
		clusterId: 1792,
		name: 'price tier 32',
		server: true,
		attributeId: 1311,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1732,
		nameFun: 'PriceTier33',
		nameObj: 'priceTier33',
		clusterId: 1792,
		name: 'price tier 33',
		server: true,
		attributeId: 1312,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1733,
		nameFun: 'PriceTier34',
		nameObj: 'priceTier34',
		clusterId: 1792,
		name: 'price tier 34',
		server: true,
		attributeId: 1313,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1734,
		nameFun: 'PriceTier35',
		nameObj: 'priceTier35',
		clusterId: 1792,
		name: 'price tier 35',
		server: true,
		attributeId: 1314,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1735,
		nameFun: 'PriceTier36',
		nameObj: 'priceTier36',
		clusterId: 1792,
		name: 'price tier 36',
		server: true,
		attributeId: 1315,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1736,
		nameFun: 'PriceTier37',
		nameObj: 'priceTier37',
		clusterId: 1792,
		name: 'price tier 37',
		server: true,
		attributeId: 1316,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1737,
		nameFun: 'PriceTier38',
		nameObj: 'priceTier38',
		clusterId: 1792,
		name: 'price tier 38',
		server: true,
		attributeId: 1317,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1738,
		nameFun: 'PriceTier39',
		nameObj: 'priceTier39',
		clusterId: 1792,
		name: 'price tier 39',
		server: true,
		attributeId: 1318,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1739,
		nameFun: 'PriceTier40',
		nameObj: 'priceTier40',
		clusterId: 1792,
		name: 'price tier 40',
		server: true,
		attributeId: 1319,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1740,
		nameFun: 'PriceTier41',
		nameObj: 'priceTier41',
		clusterId: 1792,
		name: 'price tier 41',
		server: true,
		attributeId: 1320,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1741,
		nameFun: 'PriceTier42',
		nameObj: 'priceTier42',
		clusterId: 1792,
		name: 'price tier 42',
		server: true,
		attributeId: 1321,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1742,
		nameFun: 'PriceTier43',
		nameObj: 'priceTier43',
		clusterId: 1792,
		name: 'price tier 43',
		server: true,
		attributeId: 1322,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1743,
		nameFun: 'PriceTier44',
		nameObj: 'priceTier44',
		clusterId: 1792,
		name: 'price tier 44',
		server: true,
		attributeId: 1323,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1744,
		nameFun: 'PriceTier45',
		nameObj: 'priceTier45',
		clusterId: 1792,
		name: 'price tier 45',
		server: true,
		attributeId: 1324,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1745,
		nameFun: 'PriceTier46',
		nameObj: 'priceTier46',
		clusterId: 1792,
		name: 'price tier 46',
		server: true,
		attributeId: 1325,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1746,
		nameFun: 'PriceTier47',
		nameObj: 'priceTier47',
		clusterId: 1792,
		name: 'price tier 47',
		server: true,
		attributeId: 1326,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1747,
		nameFun: 'PriceTier48',
		nameObj: 'priceTier48',
		clusterId: 1792,
		name: 'price tier 48',
		server: true,
		attributeId: 1327,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1748,
		nameFun: 'TariffLabel',
		nameObj: 'tariffLabel',
		clusterId: 1792,
		name: 'tariff label',
		server: true,
		attributeId: 1552,
		type: 'OCTET_STRING',
		writable: false,
		mandatory: false
	}, {

		label: 1749,
		nameFun: 'NumberOfPriceTiersInUse',
		nameObj: 'numberOfPriceTiersInUse',
		clusterId: 1792,
		name: 'number of price tiers in use',
		server: true,
		attributeId: 1553,
		type: 'INT8U',
		writable: false,
		mandatory: false
	}, {

		label: 1750,
		nameFun: 'NumberOfBlockThresholdsInUse',
		nameObj: 'numberOfBlockThresholdsInUse',
		clusterId: 1792,
		name: 'number of block thresholds in use',
		server: true,
		attributeId: 1554,
		type: 'INT8U',
		writable: false,
		mandatory: false
	}, {

		label: 1751,
		nameFun: 'TierBlockMode',
		nameObj: 'tierBlockMode',
		clusterId: 1792,
		name: 'tier block mode',
		server: true,
		attributeId: 1555,
		type: 'INT8U',
		writable: false,
		mandatory: false
	}, {

		label: 1752,
		nameFun: 'BlockThresholdMask',
		nameObj: 'blockThresholdMask',
		clusterId: 1792,
		name: 'block threshold mask',
		server: true,
		attributeId: 1556,
		type: 'BITMAP16',
		writable: false,
		mandatory: false
	}, {

		label: 1753,
		nameFun: 'UnitOfMeasure',
		nameObj: 'unitOfMeasure',
		clusterId: 1792,
		name: 'unit of measure',
		server: true,
		attributeId: 1557,
		type: 'ENUM8',
		writable: false,
		mandatory: false
	}, {

		label: 1754,
		nameFun: 'Currency',
		nameObj: 'currency',
		clusterId: 1792,
		name: 'currency',
		server: true,
		attributeId: 1558,
		type: 'INT16U',
		writable: false,
		mandatory: false
	}, {

		label: 1755,
		nameFun: 'PriceTrailingDigit',
		nameObj: 'priceTrailingDigit',
		clusterId: 1792,
		name: 'price trailing digit',
		server: true,
		attributeId: 1559,
		type: 'BITMAP8',
		writable: false,
		mandatory: false
	}, {

		label: 1756,
		nameFun: 'StandingCharge',
		nameObj: 'standingCharge',
		clusterId: 1792,
		name: 'standing charge',
		server: true,
		attributeId: 1560,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1757,
		nameFun: 'ConversionFactor',
		nameObj: 'conversionFactor',
		clusterId: 1792,
		name: 'conversion factor',
		server: true,
		attributeId: 1568,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1758,
		nameFun: 'ConversionFactorTrailingDigit',
		nameObj: 'conversionFactorTrailingDigit',
		clusterId: 1792,
		name: 'conversion factor trailing digit',
		server: true,
		attributeId: 1569,
		type: 'BITMAP8',
		writable: false,
		mandatory: false
	}, {

		label: 1759,
		nameFun: 'CalorificValue',
		nameObj: 'calorificValue',
		clusterId: 1792,
		name: 'calorific value',
		server: true,
		attributeId: 1570,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1760,
		nameFun: 'CalorificValueUnit',
		nameObj: 'calorificValueUnit',
		clusterId: 1792,
		name: 'calorific value unit',
		server: true,
		attributeId: 1571,
		type: 'ENUM8',
		writable: false,
		mandatory: false
	}, {

		label: 1761,
		nameFun: 'CalorificValueTrailingDigit',
		nameObj: 'calorificValueTrailingDigit',
		clusterId: 1792,
		name: 'calorific value trailing digit',
		server: true,
		attributeId: 1572,
		type: 'BITMAP8',
		writable: false,
		mandatory: false
	}, {

		label: 1762,
		nameFun: 'Co2',
		nameObj: 'co2',
		clusterId: 1792,
		name: 'CO2',
		server: true,
		attributeId: 1573,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1763,
		nameFun: 'Co2Unit',
		nameObj: 'co2Unit',
		clusterId: 1792,
		name: 'CO2 unit',
		server: true,
		attributeId: 1574,
		type: 'ENUM8',
		writable: false,
		mandatory: false
	}, {

		label: 1764,
		nameFun: 'Co2TrailingDigit',
		nameObj: 'co2TrailingDigit',
		clusterId: 1792,
		name: 'CO2 trailing digit',
		server: true,
		attributeId: 1575,
		type: 'BITMAP8',
		writable: false,
		mandatory: false
	}, {

		label: 1765,
		nameFun: 'CurrentBillingPeriodStart',
		nameObj: 'currentBillingPeriodStart',
		clusterId: 1792,
		name: 'current billing period start',
		server: true,
		attributeId: 1792,
		type: 'UTC_TIME',
		writable: false,
		mandatory: false
	}, {

		label: 1766,
		nameFun: 'CurrentBillingPeriodDuration',
		nameObj: 'currentBillingPeriodDuration',
		clusterId: 1792,
		name: 'current billing period duration',
		server: true,
		attributeId: 1793,
		type: 'INT24U',
		writable: false,
		mandatory: false
	}, {

		label: 1767,
		nameFun: 'LastBillingPeriodStart',
		nameObj: 'lastBillingPeriodStart',
		clusterId: 1792,
		name: 'last billing period start',
		server: true,
		attributeId: 1794,
		type: 'UTC_TIME',
		writable: false,
		mandatory: false
	}, {

		label: 1768,
		nameFun: 'LastBillingPeriodDuration',
		nameObj: 'lastBillingPeriodDuration',
		clusterId: 1792,
		name: 'last billing period duration',
		server: true,
		attributeId: 1795,
		type: 'INT24U',
		writable: false,
		mandatory: false
	}, {

		label: 1769,
		nameFun: 'LastBillingPeriodConsolidatedBill',
		nameObj: 'lastBillingPeriodConsolidatedBill',
		clusterId: 1792,
		name: 'last billing period consolidated bill',
		server: true,
		attributeId: 1796,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1770,
		nameFun: 'CreditPaymentDueDate',
		nameObj: 'creditPaymentDueDate',
		clusterId: 1792,
		name: 'credit payment due date',
		server: true,
		attributeId: 2048,
		type: 'UTC_TIME',
		writable: false,
		mandatory: false
	}, {

		label: 1771,
		nameFun: 'CreditPaymentStatus',
		nameObj: 'creditPaymentStatus',
		clusterId: 1792,
		name: 'credit payment status',
		server: true,
		attributeId: 2049,
		type: 'BITMAP8',
		writable: false,
		mandatory: false
	}, {

		label: 1772,
		nameFun: 'CreditPaymentOverDueAmount',
		nameObj: 'creditPaymentOverDueAmount',
		clusterId: 1792,
		name: 'credit payment over due amount',
		server: true,
		attributeId: 2050,
		type: 'INT32S',
		writable: false,
		mandatory: false
	}, {

		label: 1773,
		nameFun: 'PaymentDiscount',
		nameObj: 'paymentDiscount',
		clusterId: 1792,
		name: 'payment discount',
		server: true,
		attributeId: 2058,
		type: 'INT32S',
		writable: false,
		mandatory: false
	}, {

		label: 1774,
		nameFun: 'PaymentDiscountPeriod',
		nameObj: 'paymentDiscountPeriod',
		clusterId: 1792,
		name: 'payment discount period',
		server: true,
		attributeId: 2059,
		type: 'ENUM8',
		writable: false,
		mandatory: false
	}, {

		label: 1775,
		nameFun: 'CreditPayment1',
		nameObj: 'creditPayment1',
		clusterId: 1792,
		name: 'credit payment 1',
		server: true,
		attributeId: 2064,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1776,
		nameFun: 'CreditPaymentDate1',
		nameObj: 'creditPaymentDate1',
		clusterId: 1792,
		name: 'credit payment date 1',
		server: true,
		attributeId: 2065,
		type: 'UTC_TIME',
		writable: false,
		mandatory: false
	}, {

		label: 1777,
		nameFun: 'CreditPaymentRef1',
		nameObj: 'creditPaymentRef1',
		clusterId: 1792,
		name: 'credit payment ref 1',
		server: true,
		attributeId: 2066,
		type: 'OCTET_STRING',
		writable: false,
		mandatory: false
	}, {

		label: 1778,
		nameFun: 'CreditPayment2',
		nameObj: 'creditPayment2',
		clusterId: 1792,
		name: 'credit payment 2',
		server: true,
		attributeId: 2080,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1779,
		nameFun: 'CreditPaymentDate2',
		nameObj: 'creditPaymentDate2',
		clusterId: 1792,
		name: 'credit payment date 2',
		server: true,
		attributeId: 2081,
		type: 'UTC_TIME',
		writable: false,
		mandatory: false
	}, {

		label: 1780,
		nameFun: 'CreditPaymentRef2',
		nameObj: 'creditPaymentRef2',
		clusterId: 1792,
		name: 'credit payment ref 2',
		server: true,
		attributeId: 2082,
		type: 'OCTET_STRING',
		writable: false,
		mandatory: false
	}, {

		label: 1781,
		nameFun: 'CreditPayment3',
		nameObj: 'creditPayment3',
		clusterId: 1792,
		name: 'credit payment 3',
		server: true,
		attributeId: 2096,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1782,
		nameFun: 'CreditPaymentDate3',
		nameObj: 'creditPaymentDate3',
		clusterId: 1792,
		name: 'credit payment date 3',
		server: true,
		attributeId: 2097,
		type: 'UTC_TIME',
		writable: false,
		mandatory: false
	}, {

		label: 1783,
		nameFun: 'CreditPaymentRef3',
		nameObj: 'creditPaymentRef3',
		clusterId: 1792,
		name: 'credit payment ref 3',
		server: true,
		attributeId: 2098,
		type: 'OCTET_STRING',
		writable: false,
		mandatory: false
	}, {

		label: 1784,
		nameFun: 'CreditPayment4',
		nameObj: 'creditPayment4',
		clusterId: 1792,
		name: 'credit payment 4',
		server: true,
		attributeId: 2112,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1785,
		nameFun: 'CreditPaymentDate4',
		nameObj: 'creditPaymentDate4',
		clusterId: 1792,
		name: 'credit payment date 4',
		server: true,
		attributeId: 2113,
		type: 'UTC_TIME',
		writable: false,
		mandatory: false
	}, {

		label: 1786,
		nameFun: 'CreditPaymentRef4',
		nameObj: 'creditPaymentRef4',
		clusterId: 1792,
		name: 'credit payment ref 4',
		server: true,
		attributeId: 2114,
		type: 'OCTET_STRING',
		writable: false,
		mandatory: false
	}, {

		label: 1787,
		nameFun: 'CreditPayment5',
		nameObj: 'creditPayment5',
		clusterId: 1792,
		name: 'credit payment 5',
		server: true,
		attributeId: 2128,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1788,
		nameFun: 'CreditPaymentDate5',
		nameObj: 'creditPaymentDate5',
		clusterId: 1792,
		name: 'credit payment date 5',
		server: true,
		attributeId: 2129,
		type: 'UTC_TIME',
		writable: false,
		mandatory: false
	}, {

		label: 1789,
		nameFun: 'CreditPaymentRef5',
		nameObj: 'creditPaymentRef5',
		clusterId: 1792,
		name: 'credit payment ref 5',
		server: true,
		attributeId: 2130,
		type: 'OCTET_STRING',
		writable: false,
		mandatory: false
	}, {

		label: 1790,
		nameFun: 'DomesticPercentage',
		nameObj: 'domesticPercentage',
		clusterId: 1792,
		name: 'domestic percentage',
		server: true,
		attributeId: 2304,
		type: 'INT16U',
		writable: false,
		mandatory: false
	}, {

		label: 1791,
		nameFun: 'DomesticFuelTaxRate',
		nameObj: 'domesticFuelTaxRate',
		clusterId: 1792,
		name: 'domestic fuel tax rate',
		server: true,
		attributeId: 2305,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1792,
		nameFun: 'DomesticFuelTaxRateTrailingDigit',
		nameObj: 'domesticFuelTaxRateTrailingDigit',
		clusterId: 1792,
		name: 'domestic fuel tax rate trailing digit',
		server: true,
		attributeId: 2306,
		type: 'BITMAP8',
		writable: false,
		mandatory: false
	}, {

		label: 1793,
		nameFun: 'ExTier1PriceLabel',
		nameObj: 'exTier1PriceLabel',
		clusterId: 1792,
		name: 'ex tier 1 price label',
		server: true,
		attributeId: 32768,
		type: 'OCTET_STRING',
		writable: true,
		mandatory: false
	}, {

		label: 1794,
		nameFun: 'ExTier2PriceLabel',
		nameObj: 'exTier2PriceLabel',
		clusterId: 1792,
		name: 'ex tier 2 price label',
		server: true,
		attributeId: 32769,
		type: 'OCTET_STRING',
		writable: true,
		mandatory: false
	}, {

		label: 1795,
		nameFun: 'ExTier3PriceLabel',
		nameObj: 'exTier3PriceLabel',
		clusterId: 1792,
		name: 'ex tier 3 price label',
		server: true,
		attributeId: 32770,
		type: 'OCTET_STRING',
		writable: true,
		mandatory: false
	}, {

		label: 1796,
		nameFun: 'ExTier4PriceLabel',
		nameObj: 'exTier4PriceLabel',
		clusterId: 1792,
		name: 'ex tier 4 price label',
		server: true,
		attributeId: 32771,
		type: 'OCTET_STRING',
		writable: true,
		mandatory: false
	}, {

		label: 1797,
		nameFun: 'ExTier5PriceLabel',
		nameObj: 'exTier5PriceLabel',
		clusterId: 1792,
		name: 'ex tier 5 price label',
		server: true,
		attributeId: 32772,
		type: 'OCTET_STRING',
		writable: true,
		mandatory: false
	}, {

		label: 1798,
		nameFun: 'ExTier6PriceLabel',
		nameObj: 'exTier6PriceLabel',
		clusterId: 1792,
		name: 'ex tier 6 price label',
		server: true,
		attributeId: 32773,
		type: 'OCTET_STRING',
		writable: true,
		mandatory: false
	}, {

		label: 1799,
		nameFun: 'ExTier7PriceLabel',
		nameObj: 'exTier7PriceLabel',
		clusterId: 1792,
		name: 'ex tier 7 price label',
		server: true,
		attributeId: 32774,
		type: 'OCTET_STRING',
		writable: true,
		mandatory: false
	}, {

		label: 1800,
		nameFun: 'ExTier8PriceLabel',
		nameObj: 'exTier8PriceLabel',
		clusterId: 1792,
		name: 'ex tier 8 price label',
		server: true,
		attributeId: 32775,
		type: 'OCTET_STRING',
		writable: true,
		mandatory: false
	}, {

		label: 1801,
		nameFun: 'ExTier9PriceLabel',
		nameObj: 'exTier9PriceLabel',
		clusterId: 1792,
		name: 'ex tier 9 price label',
		server: true,
		attributeId: 32776,
		type: 'OCTET_STRING',
		writable: true,
		mandatory: false
	}, {

		label: 1802,
		nameFun: 'ExTier10PriceLabel',
		nameObj: 'exTier10PriceLabel',
		clusterId: 1792,
		name: 'ex tier 10 price label',
		server: true,
		attributeId: 32777,
		type: 'OCTET_STRING',
		writable: true,
		mandatory: false
	}, {

		label: 1803,
		nameFun: 'ExTier11PriceLabel',
		nameObj: 'exTier11PriceLabel',
		clusterId: 1792,
		name: 'ex tier 11 price label',
		server: true,
		attributeId: 32778,
		type: 'OCTET_STRING',
		writable: true,
		mandatory: false
	}, {

		label: 1804,
		nameFun: 'ExTier12PriceLabel',
		nameObj: 'exTier12PriceLabel',
		clusterId: 1792,
		name: 'ex tier 12 price label',
		server: true,
		attributeId: 32779,
		type: 'OCTET_STRING',
		writable: true,
		mandatory: false
	}, {

		label: 1805,
		nameFun: 'ExTier13PriceLabel',
		nameObj: 'exTier13PriceLabel',
		clusterId: 1792,
		name: 'ex tier 13 price label',
		server: true,
		attributeId: 32780,
		type: 'OCTET_STRING',
		writable: true,
		mandatory: false
	}, {

		label: 1806,
		nameFun: 'ExTier14PriceLabel',
		nameObj: 'exTier14PriceLabel',
		clusterId: 1792,
		name: 'ex tier 14 price label',
		server: true,
		attributeId: 32781,
		type: 'OCTET_STRING',
		writable: true,
		mandatory: false
	}, {

		label: 1807,
		nameFun: 'ExTier15PriceLabel',
		nameObj: 'exTier15PriceLabel',
		clusterId: 1792,
		name: 'ex tier 15 price label',
		server: true,
		attributeId: 32782,
		type: 'OCTET_STRING',
		writable: true,
		mandatory: false
	}, {

		label: 1808,
		nameFun: 'ExTier16PriceLabel',
		nameObj: 'exTier16PriceLabel',
		clusterId: 1792,
		name: 'ex tier 16 price label',
		server: true,
		attributeId: 32783,
		type: 'OCTET_STRING',
		writable: true,
		mandatory: false
	}, {

		label: 1809,
		nameFun: 'ExTier17PriceLabel',
		nameObj: 'exTier17PriceLabel',
		clusterId: 1792,
		name: 'ex tier 17 price label',
		server: true,
		attributeId: 32784,
		type: 'OCTET_STRING',
		writable: true,
		mandatory: false
	}, {

		label: 1810,
		nameFun: 'ExTier18PriceLabel',
		nameObj: 'exTier18PriceLabel',
		clusterId: 1792,
		name: 'ex tier 18 price label',
		server: true,
		attributeId: 32785,
		type: 'OCTET_STRING',
		writable: true,
		mandatory: false
	}, {

		label: 1811,
		nameFun: 'ExTier19PriceLabel',
		nameObj: 'exTier19PriceLabel',
		clusterId: 1792,
		name: 'ex tier 19 price label',
		server: true,
		attributeId: 32786,
		type: 'OCTET_STRING',
		writable: true,
		mandatory: false
	}, {

		label: 1812,
		nameFun: 'ExTier20PriceLabel',
		nameObj: 'exTier20PriceLabel',
		clusterId: 1792,
		name: 'ex tier 20 price label',
		server: true,
		attributeId: 32787,
		type: 'OCTET_STRING',
		writable: true,
		mandatory: false
	}, {

		label: 1813,
		nameFun: 'ExTier21PriceLabel',
		nameObj: 'exTier21PriceLabel',
		clusterId: 1792,
		name: 'ex tier 21 price label',
		server: true,
		attributeId: 32788,
		type: 'OCTET_STRING',
		writable: true,
		mandatory: false
	}, {

		label: 1814,
		nameFun: 'ExTier22PriceLabel',
		nameObj: 'exTier22PriceLabel',
		clusterId: 1792,
		name: 'ex tier 22 price label',
		server: true,
		attributeId: 32789,
		type: 'OCTET_STRING',
		writable: true,
		mandatory: false
	}, {

		label: 1815,
		nameFun: 'ExTier23PriceLabel',
		nameObj: 'exTier23PriceLabel',
		clusterId: 1792,
		name: 'ex tier 23 price label',
		server: true,
		attributeId: 32790,
		type: 'OCTET_STRING',
		writable: true,
		mandatory: false
	}, {

		label: 1816,
		nameFun: 'ExTier24PriceLabel',
		nameObj: 'exTier24PriceLabel',
		clusterId: 1792,
		name: 'ex tier 24 price label',
		server: true,
		attributeId: 32791,
		type: 'OCTET_STRING',
		writable: true,
		mandatory: false
	}, {

		label: 1817,
		nameFun: 'ExTier25PriceLabel',
		nameObj: 'exTier25PriceLabel',
		clusterId: 1792,
		name: 'ex tier 25 price label',
		server: true,
		attributeId: 32792,
		type: 'OCTET_STRING',
		writable: true,
		mandatory: false
	}, {

		label: 1818,
		nameFun: 'ExTier26PriceLabel',
		nameObj: 'exTier26PriceLabel',
		clusterId: 1792,
		name: 'ex tier 26 price label',
		server: true,
		attributeId: 32793,
		type: 'OCTET_STRING',
		writable: true,
		mandatory: false
	}, {

		label: 1819,
		nameFun: 'ExTier27PriceLabel',
		nameObj: 'exTier27PriceLabel',
		clusterId: 1792,
		name: 'ex tier 27 price label',
		server: true,
		attributeId: 32794,
		type: 'OCTET_STRING',
		writable: true,
		mandatory: false
	}, {

		label: 1820,
		nameFun: 'ExTier28PriceLabel',
		nameObj: 'exTier28PriceLabel',
		clusterId: 1792,
		name: 'ex tier 28 price label',
		server: true,
		attributeId: 32795,
		type: 'OCTET_STRING',
		writable: true,
		mandatory: false
	}, {

		label: 1821,
		nameFun: 'ExTier29PriceLabel',
		nameObj: 'exTier29PriceLabel',
		clusterId: 1792,
		name: 'ex tier 29 price label',
		server: true,
		attributeId: 32796,
		type: 'OCTET_STRING',
		writable: true,
		mandatory: false
	}, {

		label: 1822,
		nameFun: 'ExTier30PriceLabel',
		nameObj: 'exTier30PriceLabel',
		clusterId: 1792,
		name: 'ex tier 30 price label',
		server: true,
		attributeId: 32797,
		type: 'OCTET_STRING',
		writable: true,
		mandatory: false
	}, {

		label: 1823,
		nameFun: 'ExTier31PriceLabel',
		nameObj: 'exTier31PriceLabel',
		clusterId: 1792,
		name: 'ex tier 31 price label',
		server: true,
		attributeId: 32798,
		type: 'OCTET_STRING',
		writable: true,
		mandatory: false
	}, {

		label: 1824,
		nameFun: 'ExTier32PriceLabel',
		nameObj: 'exTier32PriceLabel',
		clusterId: 1792,
		name: 'ex tier 32 price label',
		server: true,
		attributeId: 32799,
		type: 'OCTET_STRING',
		writable: true,
		mandatory: false
	}, {

		label: 1825,
		nameFun: 'ExTier33PriceLabel',
		nameObj: 'exTier33PriceLabel',
		clusterId: 1792,
		name: 'ex tier 33 price label',
		server: true,
		attributeId: 32800,
		type: 'OCTET_STRING',
		writable: true,
		mandatory: false
	}, {

		label: 1826,
		nameFun: 'ExTier34PriceLabel',
		nameObj: 'exTier34PriceLabel',
		clusterId: 1792,
		name: 'ex tier 34 price label',
		server: true,
		attributeId: 32801,
		type: 'OCTET_STRING',
		writable: true,
		mandatory: false
	}, {

		label: 1827,
		nameFun: 'ExTier35PriceLabel',
		nameObj: 'exTier35PriceLabel',
		clusterId: 1792,
		name: 'ex tier 35 price label',
		server: true,
		attributeId: 32802,
		type: 'OCTET_STRING',
		writable: true,
		mandatory: false
	}, {

		label: 1828,
		nameFun: 'ExTier36PriceLabel',
		nameObj: 'exTier36PriceLabel',
		clusterId: 1792,
		name: 'ex tier 36 price label',
		server: true,
		attributeId: 32803,
		type: 'OCTET_STRING',
		writable: true,
		mandatory: false
	}, {

		label: 1829,
		nameFun: 'ExTier37PriceLabel',
		nameObj: 'exTier37PriceLabel',
		clusterId: 1792,
		name: 'ex tier 37 price label',
		server: true,
		attributeId: 32804,
		type: 'OCTET_STRING',
		writable: true,
		mandatory: false
	}, {

		label: 1830,
		nameFun: 'ExTier38PriceLabel',
		nameObj: 'exTier38PriceLabel',
		clusterId: 1792,
		name: 'ex tier 38 price label',
		server: true,
		attributeId: 32805,
		type: 'OCTET_STRING',
		writable: true,
		mandatory: false
	}, {

		label: 1831,
		nameFun: 'ExTier39PriceLabel',
		nameObj: 'exTier39PriceLabel',
		clusterId: 1792,
		name: 'ex tier 39 price label',
		server: true,
		attributeId: 32806,
		type: 'OCTET_STRING',
		writable: true,
		mandatory: false
	}, {

		label: 1832,
		nameFun: 'ExTier40PriceLabel',
		nameObj: 'exTier40PriceLabel',
		clusterId: 1792,
		name: 'ex tier 40 price label',
		server: true,
		attributeId: 32807,
		type: 'OCTET_STRING',
		writable: true,
		mandatory: false
	}, {

		label: 1833,
		nameFun: 'ExTier41PriceLabel',
		nameObj: 'exTier41PriceLabel',
		clusterId: 1792,
		name: 'ex tier 41 price label',
		server: true,
		attributeId: 32808,
		type: 'OCTET_STRING',
		writable: true,
		mandatory: false
	}, {

		label: 1834,
		nameFun: 'ExTier42PriceLabel',
		nameObj: 'exTier42PriceLabel',
		clusterId: 1792,
		name: 'ex tier 42 price label',
		server: true,
		attributeId: 32809,
		type: 'OCTET_STRING',
		writable: true,
		mandatory: false
	}, {

		label: 1835,
		nameFun: 'ExTier43PriceLabel',
		nameObj: 'exTier43PriceLabel',
		clusterId: 1792,
		name: 'ex tier 43 price label',
		server: true,
		attributeId: 32810,
		type: 'OCTET_STRING',
		writable: true,
		mandatory: false
	}, {

		label: 1836,
		nameFun: 'ExTier44PriceLabel',
		nameObj: 'exTier44PriceLabel',
		clusterId: 1792,
		name: 'ex tier 44 price label',
		server: true,
		attributeId: 32811,
		type: 'OCTET_STRING',
		writable: true,
		mandatory: false
	}, {

		label: 1837,
		nameFun: 'ExTier45PriceLabel',
		nameObj: 'exTier45PriceLabel',
		clusterId: 1792,
		name: 'ex tier 45 price label',
		server: true,
		attributeId: 32812,
		type: 'OCTET_STRING',
		writable: true,
		mandatory: false
	}, {

		label: 1838,
		nameFun: 'ExTier46PriceLabel',
		nameObj: 'exTier46PriceLabel',
		clusterId: 1792,
		name: 'ex tier 46 price label',
		server: true,
		attributeId: 32813,
		type: 'OCTET_STRING',
		writable: true,
		mandatory: false
	}, {

		label: 1839,
		nameFun: 'ExTier47PriceLabel',
		nameObj: 'exTier47PriceLabel',
		clusterId: 1792,
		name: 'ex tier 47 price label',
		server: true,
		attributeId: 32814,
		type: 'OCTET_STRING',
		writable: true,
		mandatory: false
	}, {

		label: 1840,
		nameFun: 'ExTier48PriceLabel',
		nameObj: 'exTier48PriceLabel',
		clusterId: 1792,
		name: 'ex tier 48 price label',
		server: true,
		attributeId: 32815,
		type: 'OCTET_STRING',
		writable: true,
		mandatory: false
	}, {

		label: 1841,
		nameFun: 'ExBlock1Threshold',
		nameObj: 'exBlock1Threshold',
		clusterId: 1792,
		name: 'ex block 1 threshold',
		server: true,
		attributeId: 33024,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 1842,
		nameFun: 'ExBlock2Threshold',
		nameObj: 'exBlock2Threshold',
		clusterId: 1792,
		name: 'ex block 2 threshold',
		server: true,
		attributeId: 33025,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 1843,
		nameFun: 'ExBlock3Threshold',
		nameObj: 'exBlock3Threshold',
		clusterId: 1792,
		name: 'ex block 3 threshold',
		server: true,
		attributeId: 33026,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 1844,
		nameFun: 'ExBlock4Threshold',
		nameObj: 'exBlock4Threshold',
		clusterId: 1792,
		name: 'ex block 4 threshold',
		server: true,
		attributeId: 33027,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 1845,
		nameFun: 'ExBlock5Threshold',
		nameObj: 'exBlock5Threshold',
		clusterId: 1792,
		name: 'ex block 5 threshold',
		server: true,
		attributeId: 33028,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 1846,
		nameFun: 'ExBlock6Threshold',
		nameObj: 'exBlock6Threshold',
		clusterId: 1792,
		name: 'ex block 6 threshold',
		server: true,
		attributeId: 33029,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 1847,
		nameFun: 'ExBlock7Threshold',
		nameObj: 'exBlock7Threshold',
		clusterId: 1792,
		name: 'ex block 7 threshold',
		server: true,
		attributeId: 33030,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 1848,
		nameFun: 'ExBlock8Threshold',
		nameObj: 'exBlock8Threshold',
		clusterId: 1792,
		name: 'ex block 8 threshold',
		server: true,
		attributeId: 33031,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 1849,
		nameFun: 'ExBlock9Threshold',
		nameObj: 'exBlock9Threshold',
		clusterId: 1792,
		name: 'ex block 9 threshold',
		server: true,
		attributeId: 33032,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 1850,
		nameFun: 'ExBlock10Threshold',
		nameObj: 'exBlock10Threshold',
		clusterId: 1792,
		name: 'ex block 10 threshold',
		server: true,
		attributeId: 33033,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 1851,
		nameFun: 'ExBlock11Threshold',
		nameObj: 'exBlock11Threshold',
		clusterId: 1792,
		name: 'ex block 11 threshold',
		server: true,
		attributeId: 33034,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 1852,
		nameFun: 'ExBlock12Threshold',
		nameObj: 'exBlock12Threshold',
		clusterId: 1792,
		name: 'ex block 12 threshold',
		server: true,
		attributeId: 33035,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 1853,
		nameFun: 'ExBlock13Threshold',
		nameObj: 'exBlock13Threshold',
		clusterId: 1792,
		name: 'ex block 13 threshold',
		server: true,
		attributeId: 33036,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 1854,
		nameFun: 'ExBlock14Threshold',
		nameObj: 'exBlock14Threshold',
		clusterId: 1792,
		name: 'ex block 14 threshold',
		server: true,
		attributeId: 33037,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 1855,
		nameFun: 'ExBlock15Threshold',
		nameObj: 'exBlock15Threshold',
		clusterId: 1792,
		name: 'ex block 15 threshold',
		server: true,
		attributeId: 33038,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 1856,
		nameFun: 'ExStartOfBlockPeriod',
		nameObj: 'exStartOfBlockPeriod',
		clusterId: 1792,
		name: 'ex start of block period',
		server: true,
		attributeId: 33280,
		type: 'UTC_TIME',
		writable: false,
		mandatory: false
	}, {

		label: 1857,
		nameFun: 'ExBlockPeriodDuration',
		nameObj: 'exBlockPeriodDuration',
		clusterId: 1792,
		name: 'ex block period duration',
		server: true,
		attributeId: 33281,
		type: 'INT24U',
		writable: false,
		mandatory: false
	}, {

		label: 1858,
		nameFun: 'ExThresholdMultiplier',
		nameObj: 'exThresholdMultiplier',
		clusterId: 1792,
		name: 'ex threshold multiplier',
		server: true,
		attributeId: 33282,
		type: 'INT24U',
		writable: false,
		mandatory: false
	}, {

		label: 1859,
		nameFun: 'ExThresholdDivisor',
		nameObj: 'exThresholdDivisor',
		clusterId: 1792,
		name: 'ex threshold divisor',
		server: true,
		attributeId: 33283,
		type: 'INT24U',
		writable: false,
		mandatory: false
	}, {

		label: 1860,
		nameFun: 'ExNoTierBlock1Price',
		nameObj: 'exNoTierBlock1Price',
		clusterId: 1792,
		name: 'ex no tier block 1 price',
		server: true,
		attributeId: 33792,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1861,
		nameFun: 'ExNoTierBlock2Price',
		nameObj: 'exNoTierBlock2Price',
		clusterId: 1792,
		name: 'ex no tier block 2 price',
		server: true,
		attributeId: 33793,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1862,
		nameFun: 'ExNoTierBlock3Price',
		nameObj: 'exNoTierBlock3Price',
		clusterId: 1792,
		name: 'ex no tier block 3 price',
		server: true,
		attributeId: 33794,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1863,
		nameFun: 'ExNoTierBlock4Price',
		nameObj: 'exNoTierBlock4Price',
		clusterId: 1792,
		name: 'ex no tier block 4 price',
		server: true,
		attributeId: 33795,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1864,
		nameFun: 'ExNoTierBlock5Price',
		nameObj: 'exNoTierBlock5Price',
		clusterId: 1792,
		name: 'ex no tier block 5 price',
		server: true,
		attributeId: 33796,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1865,
		nameFun: 'ExNoTierBlock6Price',
		nameObj: 'exNoTierBlock6Price',
		clusterId: 1792,
		name: 'ex no tier block 6 price',
		server: true,
		attributeId: 33797,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1866,
		nameFun: 'ExNoTierBlock7Price',
		nameObj: 'exNoTierBlock7Price',
		clusterId: 1792,
		name: 'ex no tier block 7 price',
		server: true,
		attributeId: 33798,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1867,
		nameFun: 'ExNoTierBlock8Price',
		nameObj: 'exNoTierBlock8Price',
		clusterId: 1792,
		name: 'ex no tier block 8 price',
		server: true,
		attributeId: 33799,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1868,
		nameFun: 'ExNoTierBlock9Price',
		nameObj: 'exNoTierBlock9Price',
		clusterId: 1792,
		name: 'ex no tier block 9 price',
		server: true,
		attributeId: 33800,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1869,
		nameFun: 'ExNoTierBlock10Price',
		nameObj: 'exNoTierBlock10Price',
		clusterId: 1792,
		name: 'ex no tier block 10 price',
		server: true,
		attributeId: 33801,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1870,
		nameFun: 'ExNoTierBlock11Price',
		nameObj: 'exNoTierBlock11Price',
		clusterId: 1792,
		name: 'ex no tier block 11 price',
		server: true,
		attributeId: 33802,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1871,
		nameFun: 'ExNoTierBlock12Price',
		nameObj: 'exNoTierBlock12Price',
		clusterId: 1792,
		name: 'ex no tier block 12 price',
		server: true,
		attributeId: 33803,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1872,
		nameFun: 'ExNoTierBlock13Price',
		nameObj: 'exNoTierBlock13Price',
		clusterId: 1792,
		name: 'ex no tier block 13 price',
		server: true,
		attributeId: 33804,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1873,
		nameFun: 'ExNoTierBlock14Price',
		nameObj: 'exNoTierBlock14Price',
		clusterId: 1792,
		name: 'ex no tier block 14 price',
		server: true,
		attributeId: 33805,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1874,
		nameFun: 'ExNoTierBlock15Price',
		nameObj: 'exNoTierBlock15Price',
		clusterId: 1792,
		name: 'ex no tier block 15 price',
		server: true,
		attributeId: 33806,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1875,
		nameFun: 'ExNoTierBlock16Price',
		nameObj: 'exNoTierBlock16Price',
		clusterId: 1792,
		name: 'ex no tier block 16 price',
		server: true,
		attributeId: 33807,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1876,
		nameFun: 'ExTier1Block1Price',
		nameObj: 'exTier1Block1Price',
		clusterId: 1792,
		name: 'ex tier 1 block 1 price',
		server: true,
		attributeId: 33808,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1877,
		nameFun: 'ExTier1Block2Price',
		nameObj: 'exTier1Block2Price',
		clusterId: 1792,
		name: 'ex tier 1 block 2 price',
		server: true,
		attributeId: 33809,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1878,
		nameFun: 'ExTier1Block3Price',
		nameObj: 'exTier1Block3Price',
		clusterId: 1792,
		name: 'ex tier 1 block 3 price',
		server: true,
		attributeId: 33810,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1879,
		nameFun: 'ExTier1Block4Price',
		nameObj: 'exTier1Block4Price',
		clusterId: 1792,
		name: 'ex tier 1 block 4 price',
		server: true,
		attributeId: 33811,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1880,
		nameFun: 'ExTier1Block5Price',
		nameObj: 'exTier1Block5Price',
		clusterId: 1792,
		name: 'ex tier 1 block 5 price',
		server: true,
		attributeId: 33812,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1881,
		nameFun: 'ExTier1Block6Price',
		nameObj: 'exTier1Block6Price',
		clusterId: 1792,
		name: 'ex tier 1 block 6 price',
		server: true,
		attributeId: 33813,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1882,
		nameFun: 'ExTier1Block7Price',
		nameObj: 'exTier1Block7Price',
		clusterId: 1792,
		name: 'ex tier 1 block 7 price',
		server: true,
		attributeId: 33814,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1883,
		nameFun: 'ExTier1Block8Price',
		nameObj: 'exTier1Block8Price',
		clusterId: 1792,
		name: 'ex tier 1 block 8 price',
		server: true,
		attributeId: 33815,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1884,
		nameFun: 'ExTier1Block9Price',
		nameObj: 'exTier1Block9Price',
		clusterId: 1792,
		name: 'ex tier 1 block 9 price',
		server: true,
		attributeId: 33816,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1885,
		nameFun: 'ExTier1Block10Price',
		nameObj: 'exTier1Block10Price',
		clusterId: 1792,
		name: 'ex tier 1 block 10 price',
		server: true,
		attributeId: 33817,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1886,
		nameFun: 'ExTier1Block11Price',
		nameObj: 'exTier1Block11Price',
		clusterId: 1792,
		name: 'ex tier 1 block 11 price',
		server: true,
		attributeId: 33818,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1887,
		nameFun: 'ExTier1Block12Price',
		nameObj: 'exTier1Block12Price',
		clusterId: 1792,
		name: 'ex tier 1 block 12 price',
		server: true,
		attributeId: 33819,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1888,
		nameFun: 'ExTier1Block13Price',
		nameObj: 'exTier1Block13Price',
		clusterId: 1792,
		name: 'ex tier 1 block 13 price',
		server: true,
		attributeId: 33820,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1889,
		nameFun: 'ExTier1Block14Price',
		nameObj: 'exTier1Block14Price',
		clusterId: 1792,
		name: 'ex tier 1 block 14 price',
		server: true,
		attributeId: 33821,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1890,
		nameFun: 'ExTier1Block15Price',
		nameObj: 'exTier1Block15Price',
		clusterId: 1792,
		name: 'ex tier 1 block 15 price',
		server: true,
		attributeId: 33822,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1891,
		nameFun: 'ExTier1Block16Price',
		nameObj: 'exTier1Block16Price',
		clusterId: 1792,
		name: 'ex tier 1 block 16 price',
		server: true,
		attributeId: 33823,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1892,
		nameFun: 'ExTier2Block1Price',
		nameObj: 'exTier2Block1Price',
		clusterId: 1792,
		name: 'ex tier 2 block 1 price',
		server: true,
		attributeId: 33824,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1893,
		nameFun: 'ExTier2Block2Price',
		nameObj: 'exTier2Block2Price',
		clusterId: 1792,
		name: 'ex tier 2 block 2 price',
		server: true,
		attributeId: 33825,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1894,
		nameFun: 'ExTier2Block3Price',
		nameObj: 'exTier2Block3Price',
		clusterId: 1792,
		name: 'ex tier 2 block 3 price',
		server: true,
		attributeId: 33826,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1895,
		nameFun: 'ExTier2Block4Price',
		nameObj: 'exTier2Block4Price',
		clusterId: 1792,
		name: 'ex tier 2 block 4 price',
		server: true,
		attributeId: 33827,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1896,
		nameFun: 'ExTier2Block5Price',
		nameObj: 'exTier2Block5Price',
		clusterId: 1792,
		name: 'ex tier 2 block 5 price',
		server: true,
		attributeId: 33828,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1897,
		nameFun: 'ExTier2Block6Price',
		nameObj: 'exTier2Block6Price',
		clusterId: 1792,
		name: 'ex tier 2 block 6 price',
		server: true,
		attributeId: 33829,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1898,
		nameFun: 'ExTier2Block7Price',
		nameObj: 'exTier2Block7Price',
		clusterId: 1792,
		name: 'ex tier 2 block 7 price',
		server: true,
		attributeId: 33830,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1899,
		nameFun: 'ExTier2Block8Price',
		nameObj: 'exTier2Block8Price',
		clusterId: 1792,
		name: 'ex tier 2 block 8 price',
		server: true,
		attributeId: 33831,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1900,
		nameFun: 'ExTier2Block9Price',
		nameObj: 'exTier2Block9Price',
		clusterId: 1792,
		name: 'ex tier 2 block 9 price',
		server: true,
		attributeId: 33832,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1901,
		nameFun: 'ExTier2Block10Price',
		nameObj: 'exTier2Block10Price',
		clusterId: 1792,
		name: 'ex tier 2 block 10 price',
		server: true,
		attributeId: 33833,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1902,
		nameFun: 'ExTier2Block11Price',
		nameObj: 'exTier2Block11Price',
		clusterId: 1792,
		name: 'ex tier 2 block 11 price',
		server: true,
		attributeId: 33834,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1903,
		nameFun: 'ExTier2Block12Price',
		nameObj: 'exTier2Block12Price',
		clusterId: 1792,
		name: 'ex tier 2 block 12 price',
		server: true,
		attributeId: 33835,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1904,
		nameFun: 'ExTier2Block13Price',
		nameObj: 'exTier2Block13Price',
		clusterId: 1792,
		name: 'ex tier 2 block 13 price',
		server: true,
		attributeId: 33836,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1905,
		nameFun: 'ExTier2Block14Price',
		nameObj: 'exTier2Block14Price',
		clusterId: 1792,
		name: 'ex tier 2 block 14 price',
		server: true,
		attributeId: 33837,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1906,
		nameFun: 'ExTier2Block15Price',
		nameObj: 'exTier2Block15Price',
		clusterId: 1792,
		name: 'ex tier 2 block 15 price',
		server: true,
		attributeId: 33838,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1907,
		nameFun: 'ExTier2Block16Price',
		nameObj: 'exTier2Block16Price',
		clusterId: 1792,
		name: 'ex tier 2 block 16 price',
		server: true,
		attributeId: 33839,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1908,
		nameFun: 'ExTier3Block1Price',
		nameObj: 'exTier3Block1Price',
		clusterId: 1792,
		name: 'ex tier 3 block 1 price',
		server: true,
		attributeId: 33840,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1909,
		nameFun: 'ExTier3Block2Price',
		nameObj: 'exTier3Block2Price',
		clusterId: 1792,
		name: 'ex tier 3 block 2 price',
		server: true,
		attributeId: 33841,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1910,
		nameFun: 'ExTier3Block3Price',
		nameObj: 'exTier3Block3Price',
		clusterId: 1792,
		name: 'ex tier 3 block 3 price',
		server: true,
		attributeId: 33842,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1911,
		nameFun: 'ExTier3Block4Price',
		nameObj: 'exTier3Block4Price',
		clusterId: 1792,
		name: 'ex tier 3 block 4 price',
		server: true,
		attributeId: 33843,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1912,
		nameFun: 'ExTier3Block5Price',
		nameObj: 'exTier3Block5Price',
		clusterId: 1792,
		name: 'ex tier 3 block 5 price',
		server: true,
		attributeId: 33844,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1913,
		nameFun: 'ExTier3Block6Price',
		nameObj: 'exTier3Block6Price',
		clusterId: 1792,
		name: 'ex tier 3 block 6 price',
		server: true,
		attributeId: 33845,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1914,
		nameFun: 'ExTier3Block7Price',
		nameObj: 'exTier3Block7Price',
		clusterId: 1792,
		name: 'ex tier 3 block 7 price',
		server: true,
		attributeId: 33846,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1915,
		nameFun: 'ExTier3Block8Price',
		nameObj: 'exTier3Block8Price',
		clusterId: 1792,
		name: 'ex tier 3 block 8 price',
		server: true,
		attributeId: 33847,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1916,
		nameFun: 'ExTier3Block9Price',
		nameObj: 'exTier3Block9Price',
		clusterId: 1792,
		name: 'ex tier 3 block 9 price',
		server: true,
		attributeId: 33848,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1917,
		nameFun: 'ExTier3Block10Price',
		nameObj: 'exTier3Block10Price',
		clusterId: 1792,
		name: 'ex tier 3 block 10 price',
		server: true,
		attributeId: 33849,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1918,
		nameFun: 'ExTier3Block11Price',
		nameObj: 'exTier3Block11Price',
		clusterId: 1792,
		name: 'ex tier 3 block 11 price',
		server: true,
		attributeId: 33850,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1919,
		nameFun: 'ExTier3Block12Price',
		nameObj: 'exTier3Block12Price',
		clusterId: 1792,
		name: 'ex tier 3 block 12 price',
		server: true,
		attributeId: 33851,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1920,
		nameFun: 'ExTier3Block13Price',
		nameObj: 'exTier3Block13Price',
		clusterId: 1792,
		name: 'ex tier 3 block 13 price',
		server: true,
		attributeId: 33852,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1921,
		nameFun: 'ExTier3Block14Price',
		nameObj: 'exTier3Block14Price',
		clusterId: 1792,
		name: 'ex tier 3 block 14 price',
		server: true,
		attributeId: 33853,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1922,
		nameFun: 'ExTier3Block15Price',
		nameObj: 'exTier3Block15Price',
		clusterId: 1792,
		name: 'ex tier 3 block 15 price',
		server: true,
		attributeId: 33854,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1923,
		nameFun: 'ExTier3Block16Price',
		nameObj: 'exTier3Block16Price',
		clusterId: 1792,
		name: 'ex tier 3 block 16 price',
		server: true,
		attributeId: 33855,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1924,
		nameFun: 'ExTier4Block1Price',
		nameObj: 'exTier4Block1Price',
		clusterId: 1792,
		name: 'ex tier 4 block 1 price',
		server: true,
		attributeId: 33856,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1925,
		nameFun: 'ExTier4Block2Price',
		nameObj: 'exTier4Block2Price',
		clusterId: 1792,
		name: 'ex tier 4 block 2 price',
		server: true,
		attributeId: 33857,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1926,
		nameFun: 'ExTier4Block3Price',
		nameObj: 'exTier4Block3Price',
		clusterId: 1792,
		name: 'ex tier 4 block 3 price',
		server: true,
		attributeId: 33858,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1927,
		nameFun: 'ExTier4Block4Price',
		nameObj: 'exTier4Block4Price',
		clusterId: 1792,
		name: 'ex tier 4 block 4 price',
		server: true,
		attributeId: 33859,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1928,
		nameFun: 'ExTier4Block5Price',
		nameObj: 'exTier4Block5Price',
		clusterId: 1792,
		name: 'ex tier 4 block 5 price',
		server: true,
		attributeId: 33860,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1929,
		nameFun: 'ExTier4Block6Price',
		nameObj: 'exTier4Block6Price',
		clusterId: 1792,
		name: 'ex tier 4 block 6 price',
		server: true,
		attributeId: 33861,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1930,
		nameFun: 'ExTier4Block7Price',
		nameObj: 'exTier4Block7Price',
		clusterId: 1792,
		name: 'ex tier 4 block 7 price',
		server: true,
		attributeId: 33862,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1931,
		nameFun: 'ExTier4Block8Price',
		nameObj: 'exTier4Block8Price',
		clusterId: 1792,
		name: 'ex tier 4 block 8 price',
		server: true,
		attributeId: 33863,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1932,
		nameFun: 'ExTier4Block9Price',
		nameObj: 'exTier4Block9Price',
		clusterId: 1792,
		name: 'ex tier 4 block 9 price',
		server: true,
		attributeId: 33864,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1933,
		nameFun: 'ExTier4Block10Price',
		nameObj: 'exTier4Block10Price',
		clusterId: 1792,
		name: 'ex tier 4 block 10 price',
		server: true,
		attributeId: 33865,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1934,
		nameFun: 'ExTier4Block11Price',
		nameObj: 'exTier4Block11Price',
		clusterId: 1792,
		name: 'ex tier 4 block 11 price',
		server: true,
		attributeId: 33866,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1935,
		nameFun: 'ExTier4Block12Price',
		nameObj: 'exTier4Block12Price',
		clusterId: 1792,
		name: 'ex tier 4 block 12 price',
		server: true,
		attributeId: 33867,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1936,
		nameFun: 'ExTier4Block13Price',
		nameObj: 'exTier4Block13Price',
		clusterId: 1792,
		name: 'ex tier 4 block 13 price',
		server: true,
		attributeId: 33868,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1937,
		nameFun: 'ExTier4Block14Price',
		nameObj: 'exTier4Block14Price',
		clusterId: 1792,
		name: 'ex tier 4 block 14 price',
		server: true,
		attributeId: 33869,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1938,
		nameFun: 'ExTier4Block15Price',
		nameObj: 'exTier4Block15Price',
		clusterId: 1792,
		name: 'ex tier 4 block 15 price',
		server: true,
		attributeId: 33870,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1939,
		nameFun: 'ExTier4Block16Price',
		nameObj: 'exTier4Block16Price',
		clusterId: 1792,
		name: 'ex tier 4 block 16 price',
		server: true,
		attributeId: 33871,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1940,
		nameFun: 'ExTier5Block1Price',
		nameObj: 'exTier5Block1Price',
		clusterId: 1792,
		name: 'ex tier 5 block 1 price',
		server: true,
		attributeId: 33872,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1941,
		nameFun: 'ExTier5Block2Price',
		nameObj: 'exTier5Block2Price',
		clusterId: 1792,
		name: 'ex tier 5 block 2 price',
		server: true,
		attributeId: 33873,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1942,
		nameFun: 'ExTier5Block3Price',
		nameObj: 'exTier5Block3Price',
		clusterId: 1792,
		name: 'ex tier 5 block 3 price',
		server: true,
		attributeId: 33874,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1943,
		nameFun: 'ExTier5Block4Price',
		nameObj: 'exTier5Block4Price',
		clusterId: 1792,
		name: 'ex tier 5 block 4 price',
		server: true,
		attributeId: 33875,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1944,
		nameFun: 'ExTier5Block5Price',
		nameObj: 'exTier5Block5Price',
		clusterId: 1792,
		name: 'ex tier 5 block 5 price',
		server: true,
		attributeId: 33876,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1945,
		nameFun: 'ExTier5Block6Price',
		nameObj: 'exTier5Block6Price',
		clusterId: 1792,
		name: 'ex tier 5 block 6 price',
		server: true,
		attributeId: 33877,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1946,
		nameFun: 'ExTier5Block7Price',
		nameObj: 'exTier5Block7Price',
		clusterId: 1792,
		name: 'ex tier 5 block 7 price',
		server: true,
		attributeId: 33878,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1947,
		nameFun: 'ExTier5Block8Price',
		nameObj: 'exTier5Block8Price',
		clusterId: 1792,
		name: 'ex tier 5 block 8 price',
		server: true,
		attributeId: 33879,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1948,
		nameFun: 'ExTier5Block9Price',
		nameObj: 'exTier5Block9Price',
		clusterId: 1792,
		name: 'ex tier 5 block 9 price',
		server: true,
		attributeId: 33880,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1949,
		nameFun: 'ExTier5Block10Price',
		nameObj: 'exTier5Block10Price',
		clusterId: 1792,
		name: 'ex tier 5 block 10 price',
		server: true,
		attributeId: 33881,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1950,
		nameFun: 'ExTier5Block11Price',
		nameObj: 'exTier5Block11Price',
		clusterId: 1792,
		name: 'ex tier 5 block 11 price',
		server: true,
		attributeId: 33882,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1951,
		nameFun: 'ExTier5Block12Price',
		nameObj: 'exTier5Block12Price',
		clusterId: 1792,
		name: 'ex tier 5 block 12 price',
		server: true,
		attributeId: 33883,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1952,
		nameFun: 'ExTier5Block13Price',
		nameObj: 'exTier5Block13Price',
		clusterId: 1792,
		name: 'ex tier 5 block 13 price',
		server: true,
		attributeId: 33884,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1953,
		nameFun: 'ExTier5Block14Price',
		nameObj: 'exTier5Block14Price',
		clusterId: 1792,
		name: 'ex tier 5 block 14 price',
		server: true,
		attributeId: 33885,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1954,
		nameFun: 'ExTier5Block15Price',
		nameObj: 'exTier5Block15Price',
		clusterId: 1792,
		name: 'ex tier 5 block 15 price',
		server: true,
		attributeId: 33886,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1955,
		nameFun: 'ExTier5Block16Price',
		nameObj: 'exTier5Block16Price',
		clusterId: 1792,
		name: 'ex tier 5 block 16 price',
		server: true,
		attributeId: 33887,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1956,
		nameFun: 'ExTier6Block1Price',
		nameObj: 'exTier6Block1Price',
		clusterId: 1792,
		name: 'ex tier 6 block 1 price',
		server: true,
		attributeId: 33888,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1957,
		nameFun: 'ExTier6Block2Price',
		nameObj: 'exTier6Block2Price',
		clusterId: 1792,
		name: 'ex tier 6 block 2 price',
		server: true,
		attributeId: 33889,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1958,
		nameFun: 'ExTier6Block3Price',
		nameObj: 'exTier6Block3Price',
		clusterId: 1792,
		name: 'ex tier 6 block 3 price',
		server: true,
		attributeId: 33890,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1959,
		nameFun: 'ExTier6Block4Price',
		nameObj: 'exTier6Block4Price',
		clusterId: 1792,
		name: 'ex tier 6 block 4 price',
		server: true,
		attributeId: 33891,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1960,
		nameFun: 'ExTier6Block5Price',
		nameObj: 'exTier6Block5Price',
		clusterId: 1792,
		name: 'ex tier 6 block 5 price',
		server: true,
		attributeId: 33892,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1961,
		nameFun: 'ExTier6Block6Price',
		nameObj: 'exTier6Block6Price',
		clusterId: 1792,
		name: 'ex tier 6 block 6 price',
		server: true,
		attributeId: 33893,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1962,
		nameFun: 'ExTier6Block7Price',
		nameObj: 'exTier6Block7Price',
		clusterId: 1792,
		name: 'ex tier 6 block 7 price',
		server: true,
		attributeId: 33894,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1963,
		nameFun: 'ExTier6Block8Price',
		nameObj: 'exTier6Block8Price',
		clusterId: 1792,
		name: 'ex tier 6 block 8 price',
		server: true,
		attributeId: 33895,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1964,
		nameFun: 'ExTier6Block9Price',
		nameObj: 'exTier6Block9Price',
		clusterId: 1792,
		name: 'ex tier 6 block 9 price',
		server: true,
		attributeId: 33896,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1965,
		nameFun: 'ExTier6Block10Price',
		nameObj: 'exTier6Block10Price',
		clusterId: 1792,
		name: 'ex tier 6 block 10 price',
		server: true,
		attributeId: 33897,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1966,
		nameFun: 'ExTier6Block11Price',
		nameObj: 'exTier6Block11Price',
		clusterId: 1792,
		name: 'ex tier 6 block 11 price',
		server: true,
		attributeId: 33898,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1967,
		nameFun: 'ExTier6Block12Price',
		nameObj: 'exTier6Block12Price',
		clusterId: 1792,
		name: 'ex tier 6 block 12 price',
		server: true,
		attributeId: 33899,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1968,
		nameFun: 'ExTier6Block13Price',
		nameObj: 'exTier6Block13Price',
		clusterId: 1792,
		name: 'ex tier 6 block 13 price',
		server: true,
		attributeId: 33900,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1969,
		nameFun: 'ExTier6Block14Price',
		nameObj: 'exTier6Block14Price',
		clusterId: 1792,
		name: 'ex tier 6 block 14 price',
		server: true,
		attributeId: 33901,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1970,
		nameFun: 'ExTier6Block15Price',
		nameObj: 'exTier6Block15Price',
		clusterId: 1792,
		name: 'ex tier 6 block 15 price',
		server: true,
		attributeId: 33902,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1971,
		nameFun: 'ExTier6Block16Price',
		nameObj: 'exTier6Block16Price',
		clusterId: 1792,
		name: 'ex tier 6 block 16 price',
		server: true,
		attributeId: 33903,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1972,
		nameFun: 'ExTier7Block1Price',
		nameObj: 'exTier7Block1Price',
		clusterId: 1792,
		name: 'ex tier 7 block 1 price',
		server: true,
		attributeId: 33904,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1973,
		nameFun: 'ExTier7Block2Price',
		nameObj: 'exTier7Block2Price',
		clusterId: 1792,
		name: 'ex tier 7 block 2 price',
		server: true,
		attributeId: 33905,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1974,
		nameFun: 'ExTier7Block3Price',
		nameObj: 'exTier7Block3Price',
		clusterId: 1792,
		name: 'ex tier 7 block 3 price',
		server: true,
		attributeId: 33906,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1975,
		nameFun: 'ExTier7Block4Price',
		nameObj: 'exTier7Block4Price',
		clusterId: 1792,
		name: 'ex tier 7 block 4 price',
		server: true,
		attributeId: 33907,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1976,
		nameFun: 'ExTier7Block5Price',
		nameObj: 'exTier7Block5Price',
		clusterId: 1792,
		name: 'ex tier 7 block 5 price',
		server: true,
		attributeId: 33908,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1977,
		nameFun: 'ExTier7Block6Price',
		nameObj: 'exTier7Block6Price',
		clusterId: 1792,
		name: 'ex tier 7 block 6 price',
		server: true,
		attributeId: 33909,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1978,
		nameFun: 'ExTier7Block7Price',
		nameObj: 'exTier7Block7Price',
		clusterId: 1792,
		name: 'ex tier 7 block 7 price',
		server: true,
		attributeId: 33910,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1979,
		nameFun: 'ExTier7Block8Price',
		nameObj: 'exTier7Block8Price',
		clusterId: 1792,
		name: 'ex tier 7 block 8 price',
		server: true,
		attributeId: 33911,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1980,
		nameFun: 'ExTier7Block9Price',
		nameObj: 'exTier7Block9Price',
		clusterId: 1792,
		name: 'ex tier 7 block 9 price',
		server: true,
		attributeId: 33912,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1981,
		nameFun: 'ExTier7Block10Price',
		nameObj: 'exTier7Block10Price',
		clusterId: 1792,
		name: 'ex tier 7 block 10 price',
		server: true,
		attributeId: 33913,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1982,
		nameFun: 'ExTier7Block11Price',
		nameObj: 'exTier7Block11Price',
		clusterId: 1792,
		name: 'ex tier 7 block 11 price',
		server: true,
		attributeId: 33914,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1983,
		nameFun: 'ExTier7Block12Price',
		nameObj: 'exTier7Block12Price',
		clusterId: 1792,
		name: 'ex tier 7 block 12 price',
		server: true,
		attributeId: 33915,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1984,
		nameFun: 'ExTier7Block13Price',
		nameObj: 'exTier7Block13Price',
		clusterId: 1792,
		name: 'ex tier 7 block 13 price',
		server: true,
		attributeId: 33916,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1985,
		nameFun: 'ExTier7Block14Price',
		nameObj: 'exTier7Block14Price',
		clusterId: 1792,
		name: 'ex tier 7 block 14 price',
		server: true,
		attributeId: 33917,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1986,
		nameFun: 'ExTier7Block15Price',
		nameObj: 'exTier7Block15Price',
		clusterId: 1792,
		name: 'ex tier 7 block 15 price',
		server: true,
		attributeId: 33918,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1987,
		nameFun: 'ExTier7Block16Price',
		nameObj: 'exTier7Block16Price',
		clusterId: 1792,
		name: 'ex tier 7 block 16 price',
		server: true,
		attributeId: 33919,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1988,
		nameFun: 'ExTier8Block1Price',
		nameObj: 'exTier8Block1Price',
		clusterId: 1792,
		name: 'ex tier 8 block 1 price',
		server: true,
		attributeId: 33920,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1989,
		nameFun: 'ExTier8Block2Price',
		nameObj: 'exTier8Block2Price',
		clusterId: 1792,
		name: 'ex tier 8 block 2 price',
		server: true,
		attributeId: 33921,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1990,
		nameFun: 'ExTier8Block3Price',
		nameObj: 'exTier8Block3Price',
		clusterId: 1792,
		name: 'ex tier 8 block 3 price',
		server: true,
		attributeId: 33922,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1991,
		nameFun: 'ExTier8Block4Price',
		nameObj: 'exTier8Block4Price',
		clusterId: 1792,
		name: 'ex tier 8 block 4 price',
		server: true,
		attributeId: 33923,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1992,
		nameFun: 'ExTier8Block5Price',
		nameObj: 'exTier8Block5Price',
		clusterId: 1792,
		name: 'ex tier 8 block 5 price',
		server: true,
		attributeId: 33924,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1993,
		nameFun: 'ExTier8Block6Price',
		nameObj: 'exTier8Block6Price',
		clusterId: 1792,
		name: 'ex tier 8 block 6 price',
		server: true,
		attributeId: 33925,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1994,
		nameFun: 'ExTier8Block7Price',
		nameObj: 'exTier8Block7Price',
		clusterId: 1792,
		name: 'ex tier 8 block 7 price',
		server: true,
		attributeId: 33926,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1995,
		nameFun: 'ExTier8Block8Price',
		nameObj: 'exTier8Block8Price',
		clusterId: 1792,
		name: 'ex tier 8 block 8 price',
		server: true,
		attributeId: 33927,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1996,
		nameFun: 'ExTier8Block9Price',
		nameObj: 'exTier8Block9Price',
		clusterId: 1792,
		name: 'ex tier 8 block 9 price',
		server: true,
		attributeId: 33928,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1997,
		nameFun: 'ExTier8Block10Price',
		nameObj: 'exTier8Block10Price',
		clusterId: 1792,
		name: 'ex tier 8 block 10 price',
		server: true,
		attributeId: 33929,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1998,
		nameFun: 'ExTier8Block11Price',
		nameObj: 'exTier8Block11Price',
		clusterId: 1792,
		name: 'ex tier 8 block 11 price',
		server: true,
		attributeId: 33930,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 1999,
		nameFun: 'ExTier8Block12Price',
		nameObj: 'exTier8Block12Price',
		clusterId: 1792,
		name: 'ex tier 8 block 12 price',
		server: true,
		attributeId: 33931,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 2000,
		nameFun: 'ExTier8Block13Price',
		nameObj: 'exTier8Block13Price',
		clusterId: 1792,
		name: 'ex tier 8 block 13 price',
		server: true,
		attributeId: 33932,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 2001,
		nameFun: 'ExTier8Block14Price',
		nameObj: 'exTier8Block14Price',
		clusterId: 1792,
		name: 'ex tier 8 block 14 price',
		server: true,
		attributeId: 33933,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 2002,
		nameFun: 'ExTier8Block15Price',
		nameObj: 'exTier8Block15Price',
		clusterId: 1792,
		name: 'ex tier 8 block 15 price',
		server: true,
		attributeId: 33934,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 2003,
		nameFun: 'ExTier8Block16Price',
		nameObj: 'exTier8Block16Price',
		clusterId: 1792,
		name: 'ex tier 8 block 16 price',
		server: true,
		attributeId: 33935,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 2004,
		nameFun: 'ExTier9Block1Price',
		nameObj: 'exTier9Block1Price',
		clusterId: 1792,
		name: 'ex tier 9 block 1 price',
		server: true,
		attributeId: 33936,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 2005,
		nameFun: 'ExTier9Block2Price',
		nameObj: 'exTier9Block2Price',
		clusterId: 1792,
		name: 'ex tier 9 block 2 price',
		server: true,
		attributeId: 33937,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 2006,
		nameFun: 'ExTier9Block3Price',
		nameObj: 'exTier9Block3Price',
		clusterId: 1792,
		name: 'ex tier 9 block 3 price',
		server: true,
		attributeId: 33938,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 2007,
		nameFun: 'ExTier9Block4Price',
		nameObj: 'exTier9Block4Price',
		clusterId: 1792,
		name: 'ex tier 9 block 4 price',
		server: true,
		attributeId: 33939,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 2008,
		nameFun: 'ExTier9Block5Price',
		nameObj: 'exTier9Block5Price',
		clusterId: 1792,
		name: 'ex tier 9 block 5 price',
		server: true,
		attributeId: 33940,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 2009,
		nameFun: 'ExTier9Block6Price',
		nameObj: 'exTier9Block6Price',
		clusterId: 1792,
		name: 'ex tier 9 block 6 price',
		server: true,
		attributeId: 33941,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 2010,
		nameFun: 'ExTier9Block7Price',
		nameObj: 'exTier9Block7Price',
		clusterId: 1792,
		name: 'ex tier 9 block 7 price',
		server: true,
		attributeId: 33942,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 2011,
		nameFun: 'ExTier9Block8Price',
		nameObj: 'exTier9Block8Price',
		clusterId: 1792,
		name: 'ex tier 9 block 8 price',
		server: true,
		attributeId: 33943,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 2012,
		nameFun: 'ExTier9Block9Price',
		nameObj: 'exTier9Block9Price',
		clusterId: 1792,
		name: 'ex tier 9 block 9 price',
		server: true,
		attributeId: 33944,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 2013,
		nameFun: 'ExTier9Block10Price',
		nameObj: 'exTier9Block10Price',
		clusterId: 1792,
		name: 'ex tier 9 block 10 price',
		server: true,
		attributeId: 33945,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 2014,
		nameFun: 'ExTier9Block11Price',
		nameObj: 'exTier9Block11Price',
		clusterId: 1792,
		name: 'ex tier 9 block 11 price',
		server: true,
		attributeId: 33946,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 2015,
		nameFun: 'ExTier9Block12Price',
		nameObj: 'exTier9Block12Price',
		clusterId: 1792,
		name: 'ex tier 9 block 12 price',
		server: true,
		attributeId: 33947,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 2016,
		nameFun: 'ExTier9Block13Price',
		nameObj: 'exTier9Block13Price',
		clusterId: 1792,
		name: 'ex tier 9 block 13 price',
		server: true,
		attributeId: 33948,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 2017,
		nameFun: 'ExTier9Block14Price',
		nameObj: 'exTier9Block14Price',
		clusterId: 1792,
		name: 'ex tier 9 block 14 price',
		server: true,
		attributeId: 33949,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 2018,
		nameFun: 'ExTier9Block15Price',
		nameObj: 'exTier9Block15Price',
		clusterId: 1792,
		name: 'ex tier 9 block 15 price',
		server: true,
		attributeId: 33950,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 2019,
		nameFun: 'ExTier9Block16Price',
		nameObj: 'exTier9Block16Price',
		clusterId: 1792,
		name: 'ex tier 9 block 16 price',
		server: true,
		attributeId: 33951,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 2020,
		nameFun: 'ExTier10Block1Price',
		nameObj: 'exTier10Block1Price',
		clusterId: 1792,
		name: 'ex tier 10 block 1 price',
		server: true,
		attributeId: 33952,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 2021,
		nameFun: 'ExTier10Block2Price',
		nameObj: 'exTier10Block2Price',
		clusterId: 1792,
		name: 'ex tier 10 block 2 price',
		server: true,
		attributeId: 33953,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 2022,
		nameFun: 'ExTier10Block3Price',
		nameObj: 'exTier10Block3Price',
		clusterId: 1792,
		name: 'ex tier 10 block 3 price',
		server: true,
		attributeId: 33954,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 2023,
		nameFun: 'ExTier10Block4Price',
		nameObj: 'exTier10Block4Price',
		clusterId: 1792,
		name: 'ex tier 10 block 4 price',
		server: true,
		attributeId: 33955,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 2024,
		nameFun: 'ExTier10Block5Price',
		nameObj: 'exTier10Block5Price',
		clusterId: 1792,
		name: 'ex tier 10 block 5 price',
		server: true,
		attributeId: 33956,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 2025,
		nameFun: 'ExTier10Block6Price',
		nameObj: 'exTier10Block6Price',
		clusterId: 1792,
		name: 'ex tier 10 block 6 price',
		server: true,
		attributeId: 33957,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 2026,
		nameFun: 'ExTier10Block7Price',
		nameObj: 'exTier10Block7Price',
		clusterId: 1792,
		name: 'ex tier 10 block 7 price',
		server: true,
		attributeId: 33958,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 2027,
		nameFun: 'ExTier10Block8Price',
		nameObj: 'exTier10Block8Price',
		clusterId: 1792,
		name: 'ex tier 10 block 8 price',
		server: true,
		attributeId: 33959,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 2028,
		nameFun: 'ExTier10Block9Price',
		nameObj: 'exTier10Block9Price',
		clusterId: 1792,
		name: 'ex tier 10 block 9 price',
		server: true,
		attributeId: 33960,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 2029,
		nameFun: 'ExTier10Block10Price',
		nameObj: 'exTier10Block10Price',
		clusterId: 1792,
		name: 'ex tier 10 block 10 price',
		server: true,
		attributeId: 33961,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 2030,
		nameFun: 'ExTier10Block11Price',
		nameObj: 'exTier10Block11Price',
		clusterId: 1792,
		name: 'ex tier 10 block 11 price',
		server: true,
		attributeId: 33962,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 2031,
		nameFun: 'ExTier10Block12Price',
		nameObj: 'exTier10Block12Price',
		clusterId: 1792,
		name: 'ex tier 10 block 12 price',
		server: true,
		attributeId: 33963,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 2032,
		nameFun: 'ExTier10Block13Price',
		nameObj: 'exTier10Block13Price',
		clusterId: 1792,
		name: 'ex tier 10 block 13 price',
		server: true,
		attributeId: 33964,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 2033,
		nameFun: 'ExTier10Block14Price',
		nameObj: 'exTier10Block14Price',
		clusterId: 1792,
		name: 'ex tier 10 block 14 price',
		server: true,
		attributeId: 33965,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 2034,
		nameFun: 'ExTier10Block15Price',
		nameObj: 'exTier10Block15Price',
		clusterId: 1792,
		name: 'ex tier 10 block 15 price',
		server: true,
		attributeId: 33966,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 2035,
		nameFun: 'ExTier10Block16Price',
		nameObj: 'exTier10Block16Price',
		clusterId: 1792,
		name: 'ex tier 10 block 16 price',
		server: true,
		attributeId: 33967,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 2036,
		nameFun: 'ExTier11Block1Price',
		nameObj: 'exTier11Block1Price',
		clusterId: 1792,
		name: 'ex tier 11 block 1 price',
		server: true,
		attributeId: 33968,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 2037,
		nameFun: 'ExTier11Block2Price',
		nameObj: 'exTier11Block2Price',
		clusterId: 1792,
		name: 'ex tier 11 block 2 price',
		server: true,
		attributeId: 33969,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 2038,
		nameFun: 'ExTier11Block3Price',
		nameObj: 'exTier11Block3Price',
		clusterId: 1792,
		name: 'ex tier 11 block 3 price',
		server: true,
		attributeId: 33970,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 2039,
		nameFun: 'ExTier11Block4Price',
		nameObj: 'exTier11Block4Price',
		clusterId: 1792,
		name: 'ex tier 11 block 4 price',
		server: true,
		attributeId: 33971,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 2040,
		nameFun: 'ExTier11Block5Price',
		nameObj: 'exTier11Block5Price',
		clusterId: 1792,
		name: 'ex tier 11 block 5 price',
		server: true,
		attributeId: 33972,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 2041,
		nameFun: 'ExTier11Block6Price',
		nameObj: 'exTier11Block6Price',
		clusterId: 1792,
		name: 'ex tier 11 block 6 price',
		server: true,
		attributeId: 33973,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 2042,
		nameFun: 'ExTier11Block7Price',
		nameObj: 'exTier11Block7Price',
		clusterId: 1792,
		name: 'ex tier 11 block 7 price',
		server: true,
		attributeId: 33974,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 2043,
		nameFun: 'ExTier11Block8Price',
		nameObj: 'exTier11Block8Price',
		clusterId: 1792,
		name: 'ex tier 11 block 8 price',
		server: true,
		attributeId: 33975,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 2044,
		nameFun: 'ExTier11Block9Price',
		nameObj: 'exTier11Block9Price',
		clusterId: 1792,
		name: 'ex tier 11 block 9 price',
		server: true,
		attributeId: 33976,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 2045,
		nameFun: 'ExTier11Block10Price',
		nameObj: 'exTier11Block10Price',
		clusterId: 1792,
		name: 'ex tier 11 block 10 price',
		server: true,
		attributeId: 33977,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 2046,
		nameFun: 'ExTier11Block11Price',
		nameObj: 'exTier11Block11Price',
		clusterId: 1792,
		name: 'ex tier 11 block 11 price',
		server: true,
		attributeId: 33978,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 2047,
		nameFun: 'ExTier11Block12Price',
		nameObj: 'exTier11Block12Price',
		clusterId: 1792,
		name: 'ex tier 11 block 12 price',
		server: true,
		attributeId: 33979,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 2048,
		nameFun: 'ExTier11Block13Price',
		nameObj: 'exTier11Block13Price',
		clusterId: 1792,
		name: 'ex tier 11 block 13 price',
		server: true,
		attributeId: 33980,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 2049,
		nameFun: 'ExTier11Block14Price',
		nameObj: 'exTier11Block14Price',
		clusterId: 1792,
		name: 'ex tier 11 block 14 price',
		server: true,
		attributeId: 33981,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 2050,
		nameFun: 'ExTier11Block15Price',
		nameObj: 'exTier11Block15Price',
		clusterId: 1792,
		name: 'ex tier 11 block 15 price',
		server: true,
		attributeId: 33982,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 2051,
		nameFun: 'ExTier11Block16Price',
		nameObj: 'exTier11Block16Price',
		clusterId: 1792,
		name: 'ex tier 11 block 16 price',
		server: true,
		attributeId: 33983,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 2052,
		nameFun: 'ExTier12Block1Price',
		nameObj: 'exTier12Block1Price',
		clusterId: 1792,
		name: 'ex tier 12 block 1 price',
		server: true,
		attributeId: 33984,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 2053,
		nameFun: 'ExTier12Block2Price',
		nameObj: 'exTier12Block2Price',
		clusterId: 1792,
		name: 'ex tier 12 block 2 price',
		server: true,
		attributeId: 33985,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 2054,
		nameFun: 'ExTier12Block3Price',
		nameObj: 'exTier12Block3Price',
		clusterId: 1792,
		name: 'ex tier 12 block 3 price',
		server: true,
		attributeId: 33986,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 2055,
		nameFun: 'ExTier12Block4Price',
		nameObj: 'exTier12Block4Price',
		clusterId: 1792,
		name: 'ex tier 12 block 4 price',
		server: true,
		attributeId: 33987,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 2056,
		nameFun: 'ExTier12Block5Price',
		nameObj: 'exTier12Block5Price',
		clusterId: 1792,
		name: 'ex tier 12 block 5 price',
		server: true,
		attributeId: 33988,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 2057,
		nameFun: 'ExTier12Block6Price',
		nameObj: 'exTier12Block6Price',
		clusterId: 1792,
		name: 'ex tier 12 block 6 price',
		server: true,
		attributeId: 33989,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 2058,
		nameFun: 'ExTier12Block7Price',
		nameObj: 'exTier12Block7Price',
		clusterId: 1792,
		name: 'ex tier 12 block 7 price',
		server: true,
		attributeId: 33990,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 2059,
		nameFun: 'ExTier12Block8Price',
		nameObj: 'exTier12Block8Price',
		clusterId: 1792,
		name: 'ex tier 12 block 8 price',
		server: true,
		attributeId: 33991,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 2060,
		nameFun: 'ExTier12Block9Price',
		nameObj: 'exTier12Block9Price',
		clusterId: 1792,
		name: 'ex tier 12 block 9 price',
		server: true,
		attributeId: 33992,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 2061,
		nameFun: 'ExTier12Block10Price',
		nameObj: 'exTier12Block10Price',
		clusterId: 1792,
		name: 'ex tier 12 block 10 price',
		server: true,
		attributeId: 33993,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 2062,
		nameFun: 'ExTier12Block11Price',
		nameObj: 'exTier12Block11Price',
		clusterId: 1792,
		name: 'ex tier 12 block 11 price',
		server: true,
		attributeId: 33994,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 2063,
		nameFun: 'ExTier12Block12Price',
		nameObj: 'exTier12Block12Price',
		clusterId: 1792,
		name: 'ex tier 12 block 12 price',
		server: true,
		attributeId: 33995,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 2064,
		nameFun: 'ExTier12Block13Price',
		nameObj: 'exTier12Block13Price',
		clusterId: 1792,
		name: 'ex tier 12 block 13 price',
		server: true,
		attributeId: 33996,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 2065,
		nameFun: 'ExTier12Block14Price',
		nameObj: 'exTier12Block14Price',
		clusterId: 1792,
		name: 'ex tier 12 block 14 price',
		server: true,
		attributeId: 33997,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 2066,
		nameFun: 'ExTier12Block15Price',
		nameObj: 'exTier12Block15Price',
		clusterId: 1792,
		name: 'ex tier 12 block 15 price',
		server: true,
		attributeId: 33998,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 2067,
		nameFun: 'ExTier12Block16Price',
		nameObj: 'exTier12Block16Price',
		clusterId: 1792,
		name: 'ex tier 12 block 16 price',
		server: true,
		attributeId: 33999,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 2068,
		nameFun: 'ExTier13Block1Price',
		nameObj: 'exTier13Block1Price',
		clusterId: 1792,
		name: 'ex tier 13 block 1 price',
		server: true,
		attributeId: 34000,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 2069,
		nameFun: 'ExTier13Block2Price',
		nameObj: 'exTier13Block2Price',
		clusterId: 1792,
		name: 'ex tier 13 block 2 price',
		server: true,
		attributeId: 34001,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 2070,
		nameFun: 'ExTier13Block3Price',
		nameObj: 'exTier13Block3Price',
		clusterId: 1792,
		name: 'ex tier 13 block 3 price',
		server: true,
		attributeId: 34002,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 2071,
		nameFun: 'ExTier13Block4Price',
		nameObj: 'exTier13Block4Price',
		clusterId: 1792,
		name: 'ex tier 13 block 4 price',
		server: true,
		attributeId: 34003,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 2072,
		nameFun: 'ExTier13Block5Price',
		nameObj: 'exTier13Block5Price',
		clusterId: 1792,
		name: 'ex tier 13 block 5 price',
		server: true,
		attributeId: 34004,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 2073,
		nameFun: 'ExTier13Block6Price',
		nameObj: 'exTier13Block6Price',
		clusterId: 1792,
		name: 'ex tier 13 block 6 price',
		server: true,
		attributeId: 34005,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 2074,
		nameFun: 'ExTier13Block7Price',
		nameObj: 'exTier13Block7Price',
		clusterId: 1792,
		name: 'ex tier 13 block 7 price',
		server: true,
		attributeId: 34006,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 2075,
		nameFun: 'ExTier13Block8Price',
		nameObj: 'exTier13Block8Price',
		clusterId: 1792,
		name: 'ex tier 13 block 8 price',
		server: true,
		attributeId: 34007,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 2076,
		nameFun: 'ExTier13Block9Price',
		nameObj: 'exTier13Block9Price',
		clusterId: 1792,
		name: 'ex tier 13 block 9 price',
		server: true,
		attributeId: 34008,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 2077,
		nameFun: 'ExTier13Block10Price',
		nameObj: 'exTier13Block10Price',
		clusterId: 1792,
		name: 'ex tier 13 block 10 price',
		server: true,
		attributeId: 34009,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 2078,
		nameFun: 'ExTier13Block11Price',
		nameObj: 'exTier13Block11Price',
		clusterId: 1792,
		name: 'ex tier 13 block 11 price',
		server: true,
		attributeId: 34010,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 2079,
		nameFun: 'ExTier13Block12Price',
		nameObj: 'exTier13Block12Price',
		clusterId: 1792,
		name: 'ex tier 13 block 12 price',
		server: true,
		attributeId: 34011,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 2080,
		nameFun: 'ExTier13Block13Price',
		nameObj: 'exTier13Block13Price',
		clusterId: 1792,
		name: 'ex tier 13 block 13 price',
		server: true,
		attributeId: 34012,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 2081,
		nameFun: 'ExTier13Block14Price',
		nameObj: 'exTier13Block14Price',
		clusterId: 1792,
		name: 'ex tier 13 block 14 price',
		server: true,
		attributeId: 34013,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 2082,
		nameFun: 'ExTier13Block15Price',
		nameObj: 'exTier13Block15Price',
		clusterId: 1792,
		name: 'ex tier 13 block 15 price',
		server: true,
		attributeId: 34014,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 2083,
		nameFun: 'ExTier13Block16Price',
		nameObj: 'exTier13Block16Price',
		clusterId: 1792,
		name: 'ex tier 13 block 16 price',
		server: true,
		attributeId: 34015,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 2084,
		nameFun: 'ExTier14Block1Price',
		nameObj: 'exTier14Block1Price',
		clusterId: 1792,
		name: 'ex tier 14 block 1 price',
		server: true,
		attributeId: 34016,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 2085,
		nameFun: 'ExTier14Block2Price',
		nameObj: 'exTier14Block2Price',
		clusterId: 1792,
		name: 'ex tier 14 block 2 price',
		server: true,
		attributeId: 34017,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 2086,
		nameFun: 'ExTier14Block3Price',
		nameObj: 'exTier14Block3Price',
		clusterId: 1792,
		name: 'ex tier 14 block 3 price',
		server: true,
		attributeId: 34018,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 2087,
		nameFun: 'ExTier14Block4Price',
		nameObj: 'exTier14Block4Price',
		clusterId: 1792,
		name: 'ex tier 14 block 4 price',
		server: true,
		attributeId: 34019,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 2088,
		nameFun: 'ExTier14Block5Price',
		nameObj: 'exTier14Block5Price',
		clusterId: 1792,
		name: 'ex tier 14 block 5 price',
		server: true,
		attributeId: 34020,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 2089,
		nameFun: 'ExTier14Block6Price',
		nameObj: 'exTier14Block6Price',
		clusterId: 1792,
		name: 'ex tier 14 block 6 price',
		server: true,
		attributeId: 34021,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 2090,
		nameFun: 'ExTier14Block7Price',
		nameObj: 'exTier14Block7Price',
		clusterId: 1792,
		name: 'ex tier 14 block 7 price',
		server: true,
		attributeId: 34022,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 2091,
		nameFun: 'ExTier14Block8Price',
		nameObj: 'exTier14Block8Price',
		clusterId: 1792,
		name: 'ex tier 14 block 8 price',
		server: true,
		attributeId: 34023,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 2092,
		nameFun: 'ExTier14Block9Price',
		nameObj: 'exTier14Block9Price',
		clusterId: 1792,
		name: 'ex tier 14 block 9 price',
		server: true,
		attributeId: 34024,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 2093,
		nameFun: 'ExTier14Block10Price',
		nameObj: 'exTier14Block10Price',
		clusterId: 1792,
		name: 'ex tier 14 block 10 price',
		server: true,
		attributeId: 34025,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 2094,
		nameFun: 'ExTier14Block11Price',
		nameObj: 'exTier14Block11Price',
		clusterId: 1792,
		name: 'ex tier 14 block 11 price',
		server: true,
		attributeId: 34026,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 2095,
		nameFun: 'ExTier14Block12Price',
		nameObj: 'exTier14Block12Price',
		clusterId: 1792,
		name: 'ex tier 14 block 12 price',
		server: true,
		attributeId: 34027,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 2096,
		nameFun: 'ExTier14Block13Price',
		nameObj: 'exTier14Block13Price',
		clusterId: 1792,
		name: 'ex tier 14 block 13 price',
		server: true,
		attributeId: 34028,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 2097,
		nameFun: 'ExTier14Block14Price',
		nameObj: 'exTier14Block14Price',
		clusterId: 1792,
		name: 'ex tier 14 block 14 price',
		server: true,
		attributeId: 34029,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 2098,
		nameFun: 'ExTier14Block15Price',
		nameObj: 'exTier14Block15Price',
		clusterId: 1792,
		name: 'ex tier 14 block 15 price',
		server: true,
		attributeId: 34030,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 2099,
		nameFun: 'ExTier14Block16Price',
		nameObj: 'exTier14Block16Price',
		clusterId: 1792,
		name: 'ex tier 14 block 16 price',
		server: true,
		attributeId: 34031,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 2100,
		nameFun: 'ExTier15Block1Price',
		nameObj: 'exTier15Block1Price',
		clusterId: 1792,
		name: 'ex tier 15 block 1 price',
		server: true,
		attributeId: 34032,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 2101,
		nameFun: 'ExTier15Block2Price',
		nameObj: 'exTier15Block2Price',
		clusterId: 1792,
		name: 'ex tier 15 block 2 price',
		server: true,
		attributeId: 34033,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 2102,
		nameFun: 'ExTier15Block3Price',
		nameObj: 'exTier15Block3Price',
		clusterId: 1792,
		name: 'ex tier 15 block 3 price',
		server: true,
		attributeId: 34034,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 2103,
		nameFun: 'ExTier15Block4Price',
		nameObj: 'exTier15Block4Price',
		clusterId: 1792,
		name: 'ex tier 15 block 4 price',
		server: true,
		attributeId: 34035,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 2104,
		nameFun: 'ExTier15Block5Price',
		nameObj: 'exTier15Block5Price',
		clusterId: 1792,
		name: 'ex tier 15 block 5 price',
		server: true,
		attributeId: 34036,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 2105,
		nameFun: 'ExTier15Block6Price',
		nameObj: 'exTier15Block6Price',
		clusterId: 1792,
		name: 'ex tier 15 block 6 price',
		server: true,
		attributeId: 34037,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 2106,
		nameFun: 'ExTier15Block7Price',
		nameObj: 'exTier15Block7Price',
		clusterId: 1792,
		name: 'ex tier 15 block 7 price',
		server: true,
		attributeId: 34038,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 2107,
		nameFun: 'ExTier15Block8Price',
		nameObj: 'exTier15Block8Price',
		clusterId: 1792,
		name: 'ex tier 15 block 8 price',
		server: true,
		attributeId: 34039,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 2108,
		nameFun: 'ExTier15Block9Price',
		nameObj: 'exTier15Block9Price',
		clusterId: 1792,
		name: 'ex tier 15 block 9 price',
		server: true,
		attributeId: 34040,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 2109,
		nameFun: 'ExTier15Block10Price',
		nameObj: 'exTier15Block10Price',
		clusterId: 1792,
		name: 'ex tier 15 block 10 price',
		server: true,
		attributeId: 34041,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 2110,
		nameFun: 'ExTier15Block11Price',
		nameObj: 'exTier15Block11Price',
		clusterId: 1792,
		name: 'ex tier 15 block 11 price',
		server: true,
		attributeId: 34042,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 2111,
		nameFun: 'ExTier15Block12Price',
		nameObj: 'exTier15Block12Price',
		clusterId: 1792,
		name: 'ex tier 15 block 12 price',
		server: true,
		attributeId: 34043,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 2112,
		nameFun: 'ExTier15Block13Price',
		nameObj: 'exTier15Block13Price',
		clusterId: 1792,
		name: 'ex tier 15 block 13 price',
		server: true,
		attributeId: 34044,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 2113,
		nameFun: 'ExTier15Block14Price',
		nameObj: 'exTier15Block14Price',
		clusterId: 1792,
		name: 'ex tier 15 block 14 price',
		server: true,
		attributeId: 34045,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 2114,
		nameFun: 'ExTier15Block15Price',
		nameObj: 'exTier15Block15Price',
		clusterId: 1792,
		name: 'ex tier 15 block 15 price',
		server: true,
		attributeId: 34046,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 2115,
		nameFun: 'ExTier15Block16Price',
		nameObj: 'exTier15Block16Price',
		clusterId: 1792,
		name: 'ex tier 15 block 16 price',
		server: true,
		attributeId: 34047,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 2116,
		nameFun: 'ExPriceTier16',
		nameObj: 'exPriceTier16',
		clusterId: 1792,
		name: 'ex price tier 16',
		server: true,
		attributeId: 34063,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 2117,
		nameFun: 'ExPriceTier17',
		nameObj: 'exPriceTier17',
		clusterId: 1792,
		name: 'ex price tier 17',
		server: true,
		attributeId: 34064,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 2118,
		nameFun: 'ExPriceTier18',
		nameObj: 'exPriceTier18',
		clusterId: 1792,
		name: 'ex price tier 18',
		server: true,
		attributeId: 34065,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 2119,
		nameFun: 'ExPriceTier19',
		nameObj: 'exPriceTier19',
		clusterId: 1792,
		name: 'ex price tier 19',
		server: true,
		attributeId: 34066,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 2120,
		nameFun: 'ExPriceTier20',
		nameObj: 'exPriceTier20',
		clusterId: 1792,
		name: 'ex price tier 20',
		server: true,
		attributeId: 34067,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 2121,
		nameFun: 'ExPriceTier21',
		nameObj: 'exPriceTier21',
		clusterId: 1792,
		name: 'ex price tier 21',
		server: true,
		attributeId: 34068,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 2122,
		nameFun: 'ExPriceTier22',
		nameObj: 'exPriceTier22',
		clusterId: 1792,
		name: 'ex price tier 22',
		server: true,
		attributeId: 34069,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 2123,
		nameFun: 'ExPriceTier23',
		nameObj: 'exPriceTier23',
		clusterId: 1792,
		name: 'ex price tier 23',
		server: true,
		attributeId: 34070,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 2124,
		nameFun: 'ExPriceTier24',
		nameObj: 'exPriceTier24',
		clusterId: 1792,
		name: 'ex price tier 24',
		server: true,
		attributeId: 34071,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 2125,
		nameFun: 'ExPriceTier25',
		nameObj: 'exPriceTier25',
		clusterId: 1792,
		name: 'ex price tier 25',
		server: true,
		attributeId: 34072,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 2126,
		nameFun: 'ExPriceTier26',
		nameObj: 'exPriceTier26',
		clusterId: 1792,
		name: 'ex price tier 26',
		server: true,
		attributeId: 34073,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 2127,
		nameFun: 'ExPriceTier27',
		nameObj: 'exPriceTier27',
		clusterId: 1792,
		name: 'ex price tier 27',
		server: true,
		attributeId: 34074,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 2128,
		nameFun: 'ExPriceTier28',
		nameObj: 'exPriceTier28',
		clusterId: 1792,
		name: 'ex price tier 28',
		server: true,
		attributeId: 34075,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 2129,
		nameFun: 'ExPriceTier29',
		nameObj: 'exPriceTier29',
		clusterId: 1792,
		name: 'ex price tier 29',
		server: true,
		attributeId: 34076,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 2130,
		nameFun: 'ExPriceTier30',
		nameObj: 'exPriceTier30',
		clusterId: 1792,
		name: 'ex price tier 30',
		server: true,
		attributeId: 34077,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 2131,
		nameFun: 'ExPriceTier31',
		nameObj: 'exPriceTier31',
		clusterId: 1792,
		name: 'ex price tier 31',
		server: true,
		attributeId: 34078,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 2132,
		nameFun: 'ExPriceTier32',
		nameObj: 'exPriceTier32',
		clusterId: 1792,
		name: 'ex price tier 32',
		server: true,
		attributeId: 34079,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 2133,
		nameFun: 'ExPriceTier33',
		nameObj: 'exPriceTier33',
		clusterId: 1792,
		name: 'ex price tier 33',
		server: true,
		attributeId: 34080,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 2134,
		nameFun: 'ExPriceTier34',
		nameObj: 'exPriceTier34',
		clusterId: 1792,
		name: 'ex price tier 34',
		server: true,
		attributeId: 34081,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 2135,
		nameFun: 'ExPriceTier35',
		nameObj: 'exPriceTier35',
		clusterId: 1792,
		name: 'ex price tier 35',
		server: true,
		attributeId: 34082,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 2136,
		nameFun: 'ExPriceTier36',
		nameObj: 'exPriceTier36',
		clusterId: 1792,
		name: 'ex price tier 36',
		server: true,
		attributeId: 34083,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 2137,
		nameFun: 'ExPriceTier37',
		nameObj: 'exPriceTier37',
		clusterId: 1792,
		name: 'ex price tier 37',
		server: true,
		attributeId: 34084,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 2138,
		nameFun: 'ExPriceTier38',
		nameObj: 'exPriceTier38',
		clusterId: 1792,
		name: 'ex price tier 38',
		server: true,
		attributeId: 34085,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 2139,
		nameFun: 'ExPriceTier39',
		nameObj: 'exPriceTier39',
		clusterId: 1792,
		name: 'ex price tier 39',
		server: true,
		attributeId: 34086,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 2140,
		nameFun: 'ExPriceTier40',
		nameObj: 'exPriceTier40',
		clusterId: 1792,
		name: 'ex price tier 40',
		server: true,
		attributeId: 34087,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 2141,
		nameFun: 'ExPriceTier41',
		nameObj: 'exPriceTier41',
		clusterId: 1792,
		name: 'ex price tier 41',
		server: true,
		attributeId: 34088,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 2142,
		nameFun: 'ExPriceTier42',
		nameObj: 'exPriceTier42',
		clusterId: 1792,
		name: 'ex price tier 42',
		server: true,
		attributeId: 34089,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 2143,
		nameFun: 'ExPriceTier43',
		nameObj: 'exPriceTier43',
		clusterId: 1792,
		name: 'ex price tier 43',
		server: true,
		attributeId: 34090,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 2144,
		nameFun: 'ExPriceTier44',
		nameObj: 'exPriceTier44',
		clusterId: 1792,
		name: 'ex price tier 44',
		server: true,
		attributeId: 34091,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 2145,
		nameFun: 'ExPriceTier45',
		nameObj: 'exPriceTier45',
		clusterId: 1792,
		name: 'ex price tier 45',
		server: true,
		attributeId: 34092,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 2146,
		nameFun: 'ExPriceTier46',
		nameObj: 'exPriceTier46',
		clusterId: 1792,
		name: 'ex price tier 46',
		server: true,
		attributeId: 34093,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 2147,
		nameFun: 'ExPriceTier47',
		nameObj: 'exPriceTier47',
		clusterId: 1792,
		name: 'ex price tier 47',
		server: true,
		attributeId: 34094,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 2148,
		nameFun: 'ExPriceTier48',
		nameObj: 'exPriceTier48',
		clusterId: 1792,
		name: 'ex price tier 48',
		server: true,
		attributeId: 34095,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 2149,
		nameFun: 'ExTariffLabel',
		nameObj: 'exTariffLabel',
		clusterId: 1792,
		name: 'ex tariff label',
		server: true,
		attributeId: 34320,
		type: 'OCTET_STRING',
		writable: false,
		mandatory: false
	}, {

		label: 2150,
		nameFun: 'ExNumberOfPriceTiersInUse',
		nameObj: 'exNumberOfPriceTiersInUse',
		clusterId: 1792,
		name: 'ex number of price tiers in use',
		server: true,
		attributeId: 34321,
		type: 'INT8U',
		writable: false,
		mandatory: false
	}, {

		label: 2151,
		nameFun: 'ExNumberOfBlockThresholdsInUse',
		nameObj: 'exNumberOfBlockThresholdsInUse',
		clusterId: 1792,
		name: 'ex number of block thresholds in use',
		server: true,
		attributeId: 34322,
		type: 'INT8U',
		writable: false,
		mandatory: false
	}, {

		label: 2152,
		nameFun: 'ExTierBlockMode',
		nameObj: 'exTierBlockMode',
		clusterId: 1792,
		name: 'ex tier block mode',
		server: true,
		attributeId: 34323,
		type: 'INT8U',
		writable: false,
		mandatory: false
	}, {

		label: 2153,
		nameFun: 'ExBlockThresholdMask',
		nameObj: 'exBlockThresholdMask',
		clusterId: 1792,
		name: 'ex block threshold mask',
		server: true,
		attributeId: 34324,
		type: 'BITMAP16',
		writable: false,
		mandatory: false
	}, {

		label: 2154,
		nameFun: 'ExCo2',
		nameObj: 'exCo2',
		clusterId: 1792,
		name: 'ex CO2',
		server: true,
		attributeId: 34341,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 2155,
		nameFun: 'ExCo2Unit',
		nameObj: 'exCo2Unit',
		clusterId: 1792,
		name: 'ex CO2 unit',
		server: true,
		attributeId: 34342,
		type: 'ENUM8',
		writable: false,
		mandatory: false
	}, {

		label: 2156,
		nameFun: 'ExCo2TrailingDigit',
		nameObj: 'exCo2TrailingDigit',
		clusterId: 1792,
		name: 'ex CO2 trailing digit',
		server: true,
		attributeId: 34343,
		type: 'BITMAP8',
		writable: false,
		mandatory: false
	}, {

		label: 2157,
		nameFun: 'ExCurrentBillingPeriodStart',
		nameObj: 'exCurrentBillingPeriodStart',
		clusterId: 1792,
		name: 'ex current billing period start',
		server: true,
		attributeId: 34560,
		type: 'UTC_TIME',
		writable: false,
		mandatory: false
	}, {

		label: 2158,
		nameFun: 'ExCurrentBillingPeriodDuration',
		nameObj: 'exCurrentBillingPeriodDuration',
		clusterId: 1792,
		name: 'ex current billing period duration',
		server: true,
		attributeId: 34561,
		type: 'INT24U',
		writable: false,
		mandatory: false
	}, {

		label: 2159,
		nameFun: 'ExLastBillingPeriodStart',
		nameObj: 'exLastBillingPeriodStart',
		clusterId: 1792,
		name: 'ex last billing period start',
		server: true,
		attributeId: 34562,
		type: 'UTC_TIME',
		writable: false,
		mandatory: false
	}, {

		label: 2160,
		nameFun: 'ExLastBillingPeriodDuration',
		nameObj: 'exLastBillingPeriodDuration',
		clusterId: 1792,
		name: 'ex last billing period duration',
		server: true,
		attributeId: 34563,
		type: 'INT24U',
		writable: false,
		mandatory: false
	}, {

		label: 2161,
		nameFun: 'ExLastBillingPeriodConsolidatedBill',
		nameObj: 'exLastBillingPeriodConsolidatedBill',
		clusterId: 1792,
		name: 'ex last billing period consolidated bill',
		server: true,
		attributeId: 34564,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 2162,
		nameFun: 'CloseTunnelTimeout',
		nameObj: 'closeTunnelTimeout',
		clusterId: 1796,
		name: 'close tunnel timeout',
		server: true,
		attributeId: 0,
		type: 'INT16U',
		writable: false,
		mandatory: true
	}, {

		label: 2163,
		nameFun: 'PaymentControl',
		nameObj: 'paymentControl',
		clusterId: 1797,
		name: 'payment control',
		server: true,
		attributeId: 0,
		type: 'BITMAP16',
		writable: false,
		mandatory: true
	}, {

		label: 2164,
		nameFun: 'CreditRemaining',
		nameObj: 'creditRemaining',
		clusterId: 1797,
		name: 'credit remaining',
		server: true,
		attributeId: 1,
		type: 'INT32S',
		writable: false,
		mandatory: false
	}, {

		label: 2165,
		nameFun: 'EmergencyCreditRemaining',
		nameObj: 'emergencyCreditRemaining',
		clusterId: 1797,
		name: 'emergency credit remaining',
		server: true,
		attributeId: 2,
		type: 'INT32S',
		writable: false,
		mandatory: false
	}, {

		label: 2166,
		nameFun: 'CreditStatus',
		nameObj: 'creditStatus',
		clusterId: 1797,
		name: 'credit status',
		server: true,
		attributeId: 3,
		type: 'BITMAP8',
		writable: false,
		mandatory: false
	}, {

		label: 2167,
		nameFun: 'EmergencyCreditLimitAllowance',
		nameObj: 'emergencyCreditLimitAllowance',
		clusterId: 1797,
		name: 'emergency credit limit allowance',
		server: true,
		attributeId: 16,
		type: 'INT32S',
		writable: false,
		mandatory: false
	}, {

		label: 2168,
		nameFun: 'EmergencyCreditThreshold',
		nameObj: 'emergencyCreditThreshold',
		clusterId: 1797,
		name: 'emergency credit threshold',
		server: true,
		attributeId: 17,
		type: 'INT32S',
		writable: false,
		mandatory: false
	}, {

		label: 2169,
		nameFun: 'TotalCreditAdded',
		nameObj: 'totalCreditAdded',
		clusterId: 1797,
		name: 'total credit added',
		server: true,
		attributeId: 32,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 2170,
		nameFun: 'MaxCreditLimit',
		nameObj: 'maxCreditLimit',
		clusterId: 1797,
		name: 'max credit limit',
		server: true,
		attributeId: 33,
		type: 'INT32U',
		writable: true,
		mandatory: false
	}, {

		label: 2171,
		nameFun: 'FriendlyCreditWarning',
		nameObj: 'friendlyCreditWarning',
		clusterId: 1797,
		name: 'friendly credit warning',
		server: true,
		attributeId: 48,
		type: 'INT8U',
		writable: false,
		mandatory: false
	}, {

		label: 2172,
		nameFun: 'LowCreditWarningLimit',
		nameObj: 'lowCreditWarningLimit',
		clusterId: 1797,
		name: 'low credit warning limit',
		server: true,
		attributeId: 49,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 2173,
		nameFun: 'IhdLowCreditWarningLimit',
		nameObj: 'ihdLowCreditWarningLimit',
		clusterId: 1797,
		name: 'IHD low credit warning limit',
		server: true,
		attributeId: 50,
		type: 'INT32U',
		writable: true,
		mandatory: false
	}, {

		label: 2174,
		nameFun: 'InterruptSuspendTime',
		nameObj: 'interruptSuspendTime',
		clusterId: 1797,
		name: 'Interrupt Suspend Time',
		server: true,
		attributeId: 51,
		type: 'INT8U',
		writable: false,
		mandatory: false
	}, {

		label: 2175,
		nameFun: 'CutOffValue',
		nameObj: 'cutOffValue',
		clusterId: 1797,
		name: 'cut off value',
		server: true,
		attributeId: 64,
		type: 'INT32S',
		writable: false,
		mandatory: false
	}, {

		label: 2176,
		nameFun: 'PaymentCardId',
		nameObj: 'paymentCardId',
		clusterId: 1797,
		name: 'payment card id',
		server: true,
		attributeId: 128,
		type: 'OCTET_STRING',
		writable: true,
		mandatory: false
	}, {

		label: 2177,
		nameFun: 'TopUpDateTime1',
		nameObj: 'topUpDateTime1',
		clusterId: 1797,
		name: 'top up date / time # 1',
		server: true,
		attributeId: 256,
		type: 'UTC_TIME',
		writable: false,
		mandatory: false
	}, {

		label: 2178,
		nameFun: 'TopUpAmount1',
		nameObj: 'topUpAmount1',
		clusterId: 1797,
		name: 'top up amount # 1',
		server: true,
		attributeId: 257,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 2179,
		nameFun: 'TopUpOriginatingDevice1',
		nameObj: 'topUpOriginatingDevice1',
		clusterId: 1797,
		name: 'top up originating device # 1',
		server: true,
		attributeId: 258,
		type: 'ENUM8',
		writable: false,
		mandatory: false
	}, {

		label: 2180,
		nameFun: 'TopUpCode1',
		nameObj: 'topUpCode1',
		clusterId: 1797,
		name: 'top up code # 1',
		server: true,
		attributeId: 259,
		type: 'OCTET_STRING',
		writable: false,
		mandatory: false
	}, {

		label: 2181,
		nameFun: 'TopUpDateTime1',
		nameObj: 'topUpDateTime1',
		clusterId: 1797,
		name: 'top up date / time # 1',
		server: true,
		attributeId: 272,
		type: 'UTC_TIME',
		writable: false,
		mandatory: false
	}, {

		label: 2182,
		nameFun: 'TopUpAmount1',
		nameObj: 'topUpAmount1',
		clusterId: 1797,
		name: 'top up amount # 1',
		server: true,
		attributeId: 273,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 2183,
		nameFun: 'TopUpOriginatingDevice1',
		nameObj: 'topUpOriginatingDevice1',
		clusterId: 1797,
		name: 'top up originating device # 1',
		server: true,
		attributeId: 274,
		type: 'ENUM8',
		writable: false,
		mandatory: false
	}, {

		label: 2184,
		nameFun: 'TopUpCode2',
		nameObj: 'topUpCode2',
		clusterId: 1797,
		name: 'top up code # 2',
		server: true,
		attributeId: 275,
		type: 'OCTET_STRING',
		writable: false,
		mandatory: false
	}, {

		label: 2185,
		nameFun: 'TopUpDateTime3',
		nameObj: 'topUpDateTime3',
		clusterId: 1797,
		name: 'top up date / time # 3',
		server: true,
		attributeId: 288,
		type: 'UTC_TIME',
		writable: false,
		mandatory: false
	}, {

		label: 2186,
		nameFun: 'TopUpAmount3',
		nameObj: 'topUpAmount3',
		clusterId: 1797,
		name: 'top up amount # 3',
		server: true,
		attributeId: 289,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 2187,
		nameFun: 'TopUpOriginatingDevice3',
		nameObj: 'topUpOriginatingDevice3',
		clusterId: 1797,
		name: 'top up originating device # 3',
		server: true,
		attributeId: 290,
		type: 'ENUM8',
		writable: false,
		mandatory: false
	}, {

		label: 2188,
		nameFun: 'TopUpCode3',
		nameObj: 'topUpCode3',
		clusterId: 1797,
		name: 'top up code # 3',
		server: true,
		attributeId: 291,
		type: 'OCTET_STRING',
		writable: false,
		mandatory: false
	}, {

		label: 2189,
		nameFun: 'TopUpDateTime4',
		nameObj: 'topUpDateTime4',
		clusterId: 1797,
		name: 'top up date / time # 4',
		server: true,
		attributeId: 304,
		type: 'UTC_TIME',
		writable: false,
		mandatory: false
	}, {

		label: 2190,
		nameFun: 'TopUpAmount4',
		nameObj: 'topUpAmount4',
		clusterId: 1797,
		name: 'top up amount # 4',
		server: true,
		attributeId: 305,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 2191,
		nameFun: 'TopUpOriginatingDevice4',
		nameObj: 'topUpOriginatingDevice4',
		clusterId: 1797,
		name: 'top up originating device # 4',
		server: true,
		attributeId: 306,
		type: 'ENUM8',
		writable: false,
		mandatory: false
	}, {

		label: 2192,
		nameFun: 'TopUpCode4',
		nameObj: 'topUpCode4',
		clusterId: 1797,
		name: 'top up code # 4',
		server: true,
		attributeId: 307,
		type: 'OCTET_STRING',
		writable: false,
		mandatory: false
	}, {

		label: 2193,
		nameFun: 'TopUpDateTime5',
		nameObj: 'topUpDateTime5',
		clusterId: 1797,
		name: 'top up date / time # 5',
		server: true,
		attributeId: 320,
		type: 'UTC_TIME',
		writable: false,
		mandatory: false
	}, {

		label: 2194,
		nameFun: 'TopUpAmount5',
		nameObj: 'topUpAmount5',
		clusterId: 1797,
		name: 'top up amount # 5',
		server: true,
		attributeId: 321,
		type: 'INT48U',
		writable: false,
		mandatory: false
	}, {

		label: 2195,
		nameFun: 'TopUpOriginatingDevice5',
		nameObj: 'topUpOriginatingDevice5',
		clusterId: 1797,
		name: 'top up originating device # 5',
		server: true,
		attributeId: 322,
		type: 'ENUM8',
		writable: false,
		mandatory: false
	}, {

		label: 2196,
		nameFun: 'TopUpCode5',
		nameObj: 'topUpCode5',
		clusterId: 1797,
		name: 'top up code # 5',
		server: true,
		attributeId: 323,
		type: 'OCTET_STRING',
		writable: false,
		mandatory: false
	}, {

		label: 2197,
		nameFun: 'DebtLabel1',
		nameObj: 'debtLabel1',
		clusterId: 1797,
		name: 'debt label 1',
		server: true,
		attributeId: 512,
		type: 'OCTET_STRING',
		writable: false,
		mandatory: false
	}, {

		label: 2198,
		nameFun: 'DebtAmount1',
		nameObj: 'debtAmount1',
		clusterId: 1797,
		name: 'debt amount 1',
		server: true,
		attributeId: 513,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 2199,
		nameFun: 'DebtRecoveryMethod1',
		nameObj: 'debtRecoveryMethod1',
		clusterId: 1797,
		name: 'debt recovery method 1',
		server: true,
		attributeId: 514,
		type: 'ENUM8',
		writable: false,
		mandatory: false
	}, {

		label: 2200,
		nameFun: 'DebtRecoveryStartTime1',
		nameObj: 'debtRecoveryStartTime1',
		clusterId: 1797,
		name: 'debt recovery start time 1',
		server: true,
		attributeId: 515,
		type: 'UTC_TIME',
		writable: false,
		mandatory: false
	}, {

		label: 2201,
		nameFun: 'DebtRecoveryCollectionTime1',
		nameObj: 'debtRecoveryCollectionTime1',
		clusterId: 1797,
		name: 'debt recovery collection time 1',
		server: true,
		attributeId: 516,
		type: 'INT16U',
		writable: false,
		mandatory: false
	}, {

		label: 2202,
		nameFun: 'DebtRecoveryFrequency1',
		nameObj: 'debtRecoveryFrequency1',
		clusterId: 1797,
		name: 'debt recovery frequency 1',
		server: true,
		attributeId: 518,
		type: 'ENUM8',
		writable: false,
		mandatory: false
	}, {

		label: 2203,
		nameFun: 'DebtRecoveryAmount1',
		nameObj: 'debtRecoveryAmount1',
		clusterId: 1797,
		name: 'debt recovery amount 1',
		server: true,
		attributeId: 519,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 2204,
		nameFun: 'DebtRecoveryBalancePercentage1',
		nameObj: 'debtRecoveryBalancePercentage1',
		clusterId: 1797,
		name: 'debt recovery balance percentage 1',
		server: true,
		attributeId: 521,
		type: 'INT16U',
		writable: false,
		mandatory: false
	}, {

		label: 2205,
		nameFun: 'DebtRecoveryMaxMissed1',
		nameObj: 'debtRecoveryMaxMissed1',
		clusterId: 1797,
		name: 'debt recovery max missed 1',
		server: true,
		attributeId: 523,
		type: 'INT8U',
		writable: false,
		mandatory: false
	}, {

		label: 2206,
		nameFun: 'DebtLabel2',
		nameObj: 'debtLabel2',
		clusterId: 1797,
		name: 'debt label 2',
		server: true,
		attributeId: 528,
		type: 'OCTET_STRING',
		writable: false,
		mandatory: false
	}, {

		label: 2207,
		nameFun: 'DebtAmount2',
		nameObj: 'debtAmount2',
		clusterId: 1797,
		name: 'debt amount 2',
		server: true,
		attributeId: 529,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 2208,
		nameFun: 'DebtRecoveryMethod2',
		nameObj: 'debtRecoveryMethod2',
		clusterId: 1797,
		name: 'debt recovery method 2',
		server: true,
		attributeId: 530,
		type: 'ENUM8',
		writable: false,
		mandatory: false
	}, {

		label: 2209,
		nameFun: 'DebtRecoveryStartTime2',
		nameObj: 'debtRecoveryStartTime2',
		clusterId: 1797,
		name: 'debt recovery start time 2',
		server: true,
		attributeId: 531,
		type: 'UTC_TIME',
		writable: false,
		mandatory: false
	}, {

		label: 2210,
		nameFun: 'DebtRecoveryCollectionTime2',
		nameObj: 'debtRecoveryCollectionTime2',
		clusterId: 1797,
		name: 'debt recovery collection time 2',
		server: true,
		attributeId: 532,
		type: 'INT16U',
		writable: false,
		mandatory: false
	}, {

		label: 2211,
		nameFun: 'DebtRecoveryFrequency2',
		nameObj: 'debtRecoveryFrequency2',
		clusterId: 1797,
		name: 'debt recovery frequency 2',
		server: true,
		attributeId: 534,
		type: 'ENUM8',
		writable: false,
		mandatory: false
	}, {

		label: 2212,
		nameFun: 'DebtRecoveryAmount2',
		nameObj: 'debtRecoveryAmount2',
		clusterId: 1797,
		name: 'debt recovery amount 2',
		server: true,
		attributeId: 535,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 2213,
		nameFun: 'DebtRecoveryBalancePercentage2',
		nameObj: 'debtRecoveryBalancePercentage2',
		clusterId: 1797,
		name: 'debt recovery balance percentage 2',
		server: true,
		attributeId: 537,
		type: 'INT16U',
		writable: false,
		mandatory: false
	}, {

		label: 2214,
		nameFun: 'DebtRecoveryMaxMissed2',
		nameObj: 'debtRecoveryMaxMissed2',
		clusterId: 1797,
		name: 'debt recovery max missed 2',
		server: true,
		attributeId: 539,
		type: 'INT8U',
		writable: false,
		mandatory: false
	}, {

		label: 2215,
		nameFun: 'DebtLabel3',
		nameObj: 'debtLabel3',
		clusterId: 1797,
		name: 'debt label 3',
		server: true,
		attributeId: 544,
		type: 'OCTET_STRING',
		writable: false,
		mandatory: false
	}, {

		label: 2216,
		nameFun: 'DebtAmount3',
		nameObj: 'debtAmount3',
		clusterId: 1797,
		name: 'debt amount 3',
		server: true,
		attributeId: 545,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 2217,
		nameFun: 'DebtRecoveryMethod3',
		nameObj: 'debtRecoveryMethod3',
		clusterId: 1797,
		name: 'debt recovery method 3',
		server: true,
		attributeId: 546,
		type: 'ENUM8',
		writable: false,
		mandatory: false
	}, {

		label: 2218,
		nameFun: 'DebtRecoveryStartTime3',
		nameObj: 'debtRecoveryStartTime3',
		clusterId: 1797,
		name: 'debt recovery start time 3',
		server: true,
		attributeId: 547,
		type: 'UTC_TIME',
		writable: false,
		mandatory: false
	}, {

		label: 2219,
		nameFun: 'DebtRecoveryCollectionTime3',
		nameObj: 'debtRecoveryCollectionTime3',
		clusterId: 1797,
		name: 'debt recovery collection time 3',
		server: true,
		attributeId: 548,
		type: 'INT16U',
		writable: false,
		mandatory: false
	}, {

		label: 2220,
		nameFun: 'DebtRecoveryFrequency3',
		nameObj: 'debtRecoveryFrequency3',
		clusterId: 1797,
		name: 'debt recovery frequency 3',
		server: true,
		attributeId: 550,
		type: 'ENUM8',
		writable: false,
		mandatory: false
	}, {

		label: 2221,
		nameFun: 'DebtRecoveryAmount3',
		nameObj: 'debtRecoveryAmount3',
		clusterId: 1797,
		name: 'debt recovery amount 3',
		server: true,
		attributeId: 551,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 2222,
		nameFun: 'DebtRecoveryBalancePercentage3',
		nameObj: 'debtRecoveryBalancePercentage3',
		clusterId: 1797,
		name: 'debt recovery balance percentage 3',
		server: true,
		attributeId: 553,
		type: 'INT16U',
		writable: false,
		mandatory: false
	}, {

		label: 2223,
		nameFun: 'DebtRecoveryMaxMissed3',
		nameObj: 'debtRecoveryMaxMissed3',
		clusterId: 1797,
		name: 'debt recovery max missed 3',
		server: true,
		attributeId: 555,
		type: 'INT8U',
		writable: false,
		mandatory: false
	}, {

		label: 2224,
		nameFun: 'PrepayAlarmStatus',
		nameObj: 'prepayAlarmStatus',
		clusterId: 1797,
		name: 'prepay alarm status',
		server: true,
		attributeId: 768,
		type: 'BITMAP16',
		writable: true,
		mandatory: false
	}, {

		label: 2225,
		nameFun: 'GenericAlarmMask',
		nameObj: 'genericAlarmMask',
		clusterId: 1797,
		name: 'generic alarm mask',
		server: true,
		attributeId: 769,
		type: 'BITMAP16',
		writable: true,
		mandatory: false
	}, {

		label: 2226,
		nameFun: 'PrepaySwitchAlarmMask',
		nameObj: 'prepaySwitchAlarmMask',
		clusterId: 1797,
		name: 'prepay switch alarm mask',
		server: true,
		attributeId: 770,
		type: 'BITMAP16',
		writable: true,
		mandatory: false
	}, {

		label: 2227,
		nameFun: 'PrepayEventAlarmMask',
		nameObj: 'prepayEventAlarmMask',
		clusterId: 1797,
		name: 'prepay event alarm mask',
		server: true,
		attributeId: 771,
		type: 'BITMAP16',
		writable: true,
		mandatory: false
	}, {

		label: 2228,
		nameFun: 'LoadControlState',
		nameObj: 'loadControlState',
		clusterId: 1798,
		name: 'Load Control State',
		server: true,
		attributeId: 0,
		type: 'BITMAP8',
		writable: false,
		mandatory: true
	}, {

		label: 2229,
		nameFun: 'CurrentEventId',
		nameObj: 'currentEventId',
		clusterId: 1798,
		name: 'Current Event ID',
		server: true,
		attributeId: 1,
		type: 'INT32U',
		writable: false,
		mandatory: true
	}, {

		label: 2230,
		nameFun: 'CurrentEventStatus',
		nameObj: 'currentEventStatus',
		clusterId: 1798,
		name: 'Current Event Status',
		server: true,
		attributeId: 2,
		type: 'BITMAP8',
		writable: false,
		mandatory: true
	}, {

		label: 2231,
		nameFun: 'ConformanceLevel',
		nameObj: 'conformanceLevel',
		clusterId: 1798,
		name: 'Conformance Level',
		server: true,
		attributeId: 3,
		type: 'INT8U',
		writable: true,
		mandatory: true
	}, {

		label: 2232,
		nameFun: 'MinimumOffTime',
		nameObj: 'minimumOffTime',
		clusterId: 1798,
		name: 'Minimum Off Time',
		server: true,
		attributeId: 4,
		type: 'INT16U',
		writable: true,
		mandatory: true
	}, {

		label: 2233,
		nameFun: 'MinimumOnTime',
		nameObj: 'minimumOnTime',
		clusterId: 1798,
		name: 'Minimum On Time',
		server: true,
		attributeId: 5,
		type: 'INT16U',
		writable: true,
		mandatory: true
	}, {

		label: 2234,
		nameFun: 'MinimumCyclePeriod',
		nameObj: 'minimumCyclePeriod',
		clusterId: 1798,
		name: 'Minimum Cycle Period',
		server: true,
		attributeId: 6,
		type: 'INT16U',
		writable: true,
		mandatory: true
	}, {

		label: 2235,
		nameFun: 'AuxiliarySwitch1Label',
		nameObj: 'auxiliarySwitch1Label',
		clusterId: 1799,
		name: 'Auxiliary Switch 1 Label',
		server: true,
		attributeId: 0,
		type: 'OCTET_STRING',
		writable: true,
		mandatory: false
	}, {

		label: 2236,
		nameFun: 'AuxiliarySwitch2Label',
		nameObj: 'auxiliarySwitch2Label',
		clusterId: 1799,
		name: 'Auxiliary Switch 2 Label',
		server: true,
		attributeId: 1,
		type: 'OCTET_STRING',
		writable: true,
		mandatory: false
	}, {

		label: 2237,
		nameFun: 'AuxiliarySwitch3Label',
		nameObj: 'auxiliarySwitch3Label',
		clusterId: 1799,
		name: 'Auxiliary Switch 3 Label',
		server: true,
		attributeId: 2,
		type: 'OCTET_STRING',
		writable: true,
		mandatory: false
	}, {

		label: 2238,
		nameFun: 'AuxiliarySwitch4Label',
		nameObj: 'auxiliarySwitch4Label',
		clusterId: 1799,
		name: 'Auxiliary Switch 4 Label',
		server: true,
		attributeId: 3,
		type: 'OCTET_STRING',
		writable: true,
		mandatory: false
	}, {

		label: 2239,
		nameFun: 'AuxiliarySwitch5Label',
		nameObj: 'auxiliarySwitch5Label',
		clusterId: 1799,
		name: 'Auxiliary Switch 5 Label',
		server: true,
		attributeId: 4,
		type: 'OCTET_STRING',
		writable: true,
		mandatory: false
	}, {

		label: 2240,
		nameFun: 'AuxiliarySwitch6Label',
		nameObj: 'auxiliarySwitch6Label',
		clusterId: 1799,
		name: 'Auxiliary Switch 6 Label',
		server: true,
		attributeId: 5,
		type: 'OCTET_STRING',
		writable: true,
		mandatory: false
	}, {

		label: 2241,
		nameFun: 'AuxiliarySwitch7Label',
		nameObj: 'auxiliarySwitch7Label',
		clusterId: 1799,
		name: 'Auxiliary Switch 7 Label',
		server: true,
		attributeId: 6,
		type: 'OCTET_STRING',
		writable: true,
		mandatory: false
	}, {

		label: 2242,
		nameFun: 'AuxiliarySwitch8Label',
		nameObj: 'auxiliarySwitch8Label',
		clusterId: 1799,
		name: 'Auxiliary Switch 8 Label',
		server: true,
		attributeId: 7,
		type: 'OCTET_STRING',
		writable: true,
		mandatory: false
	}, {

		label: 2243,
		nameFun: 'ProposedChangeSupplyImplementationTime',
		nameObj: 'proposedChangeSupplyImplementationTime',
		clusterId: 1800,
		name: 'proposed change supply implementation time',
		server: true,
		attributeId: 0,
		type: 'UTC_TIME',
		writable: false,
		mandatory: false
	}, {

		label: 2244,
		nameFun: 'ProposedChangeSupplyStatus',
		nameObj: 'proposedChangeSupplyStatus',
		clusterId: 1800,
		name: 'proposed change supply status',
		server: true,
		attributeId: 1,
		type: 'ENUM8',
		writable: false,
		mandatory: false
	}, {

		label: 2245,
		nameFun: 'UncontrolledFlowThreshold',
		nameObj: 'uncontrolledFlowThreshold',
		clusterId: 1800,
		name: 'Uncontrolled Flow Threshold',
		server: true,
		attributeId: 16,
		type: 'INT16U',
		writable: false,
		mandatory: false
	}, {

		label: 2246,
		nameFun: 'UncontrolledFlowThresholdUnitOfMeasure',
		nameObj: 'uncontrolledFlowThresholdUnitOfMeasure',
		clusterId: 1800,
		name: 'Uncontrolled Flow Threshold Unit of Measure',
		server: true,
		attributeId: 17,
		type: 'ENUM8',
		writable: false,
		mandatory: false
	}, {

		label: 2247,
		nameFun: 'UncontrolledFlowMultiplier',
		nameObj: 'uncontrolledFlowMultiplier',
		clusterId: 1800,
		name: 'Uncontrolled Flow Multiplier',
		server: true,
		attributeId: 18,
		type: 'INT16U',
		writable: false,
		mandatory: false
	}, {

		label: 2248,
		nameFun: 'UncontrolledFlowDivisor',
		nameObj: 'uncontrolledFlowDivisor',
		clusterId: 1800,
		name: 'Uncontrolled Flow Divisor',
		server: true,
		attributeId: 19,
		type: 'INT16U',
		writable: false,
		mandatory: false
	}, {

		label: 2249,
		nameFun: 'FlowStabilisationPeriod',
		nameObj: 'flowStabilisationPeriod',
		clusterId: 1800,
		name: 'Flow Stabilisation Period',
		server: true,
		attributeId: 20,
		type: 'INT8U',
		writable: false,
		mandatory: false
	}, {

		label: 2250,
		nameFun: 'FlowMeasurementPeriod',
		nameObj: 'flowMeasurementPeriod',
		clusterId: 1800,
		name: 'Flow Measurement Period',
		server: true,
		attributeId: 21,
		type: 'INT16U',
		writable: false,
		mandatory: false
	}, {

		label: 2251,
		nameFun: 'SupplierIdServer',
		nameObj: 'supplierIdServer',
		clusterId: 1800,
		name: 'supplier id(server)',
		server: true,
		attributeId: 256,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 2252,
		nameFun: 'SupplierNameServer',
		nameObj: 'supplierNameServer',
		clusterId: 1800,
		name: 'supplier name(server)',
		server: true,
		attributeId: 257,
		type: 'OCTET_STRING',
		writable: false,
		mandatory: false
	}, {

		label: 2253,
		nameFun: 'ProposedSupplierId',
		nameObj: 'proposedSupplierId',
		clusterId: 1800,
		name: 'proposed supplier id',
		server: true,
		attributeId: 272,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 2254,
		nameFun: 'ProposedSupplierName',
		nameObj: 'proposedSupplierName',
		clusterId: 1800,
		name: 'proposed supplier name',
		server: true,
		attributeId: 273,
		type: 'OCTET_STRING',
		writable: false,
		mandatory: false
	}, {

		label: 2255,
		nameFun: 'ProposedSupplierChangeDateTime',
		nameObj: 'proposedSupplierChangeDateTime',
		clusterId: 1800,
		name: 'proposed supplier change date time',
		server: true,
		attributeId: 274,
		type: 'UTC_TIME',
		writable: false,
		mandatory: false
	}, {

		label: 2256,
		nameFun: 'ProposedSupplierChangeControl',
		nameObj: 'proposedSupplierChangeControl',
		clusterId: 1800,
		name: 'proposed supplier change control',
		server: true,
		attributeId: 275,
		type: 'BITMAP32',
		writable: false,
		mandatory: false
	}, {

		label: 2257,
		nameFun: 'ExSupplierId',
		nameObj: 'exSupplierId',
		clusterId: 1800,
		name: 'ex supplier id',
		server: true,
		attributeId: 288,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 2258,
		nameFun: 'ExSupplierName',
		nameObj: 'exSupplierName',
		clusterId: 1800,
		name: 'ex supplier name',
		server: true,
		attributeId: 289,
		type: 'OCTET_STRING',
		writable: false,
		mandatory: false
	}, {

		label: 2259,
		nameFun: 'ExProposedSupplierId',
		nameObj: 'exProposedSupplierId',
		clusterId: 1800,
		name: 'ex proposed supplier id',
		server: true,
		attributeId: 304,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 2260,
		nameFun: 'ExProposedSupplierName',
		nameObj: 'exProposedSupplierName',
		clusterId: 1800,
		name: 'ex proposed supplier name',
		server: true,
		attributeId: 305,
		type: 'OCTET_STRING',
		writable: false,
		mandatory: false
	}, {

		label: 2261,
		nameFun: 'ExProposedSupplierChangeDateTime',
		nameObj: 'exProposedSupplierChangeDateTime',
		clusterId: 1800,
		name: 'ex proposed supplier change date time',
		server: true,
		attributeId: 306,
		type: 'UTC_TIME',
		writable: false,
		mandatory: false
	}, {

		label: 2262,
		nameFun: 'ExProposedSupplierChangeControl',
		nameObj: 'exProposedSupplierChangeControl',
		clusterId: 1800,
		name: 'ex proposed supplier change control',
		server: true,
		attributeId: 307,
		type: 'BITMAP32',
		writable: false,
		mandatory: false
	}, {

		label: 2263,
		nameFun: 'ChangeOfTenancyUpdateDateTime',
		nameObj: 'changeOfTenancyUpdateDateTime',
		clusterId: 1800,
		name: 'change of tenancy update date time',
		server: true,
		attributeId: 512,
		type: 'UTC_TIME',
		writable: false,
		mandatory: false
	}, {

		label: 2264,
		nameFun: 'ProposedTenancyChangeControl',
		nameObj: 'proposedTenancyChangeControl',
		clusterId: 1800,
		name: 'proposed tenancy change control',
		server: true,
		attributeId: 513,
		type: 'BITMAP32',
		writable: false,
		mandatory: false
	}, {

		label: 2265,
		nameFun: 'WanStatus',
		nameObj: 'wanStatus',
		clusterId: 1800,
		name: 'wan status',
		server: true,
		attributeId: 768,
		type: 'ENUM8',
		writable: false,
		mandatory: false
	}, {

		label: 2266,
		nameFun: 'SupplierIdClient',
		nameObj: 'supplierIdClient',
		clusterId: 1800,
		name: 'supplier id(client)',
		server: false,
		attributeId: 0,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 2267,
		nameFun: 'ExSupplierIdClient',
		nameObj: 'exSupplierIdClient',
		clusterId: 1800,
		name: 'ex supplier id(client)',
		server: false,
		attributeId: 16,
		type: 'INT32U',
		writable: false,
		mandatory: false
	}, {

		label: 2268,
		nameFun: 'TouTariffActivation',
		nameObj: 'touTariffActivation',
		clusterId: 1800,
		name: 'tou tariff activation',
		server: false,
		attributeId: 256,
		type: 'BITMAP8',
		writable: false,
		mandatory: false
	}, {

		label: 2269,
		nameFun: 'Tariff8X8Activated',
		nameObj: 'tariff8X8Activated',
		clusterId: 1800,
		name: 'tariff 8 x 8 activated',
		server: false,
		attributeId: 257,
		type: 'BITMAP8',
		writable: false,
		mandatory: false
	}, {

		label: 2270,
		nameFun: 'Tariff8X8Activated',
		nameObj: 'tariff8X8Activated',
		clusterId: 1800,
		name: 'tariff 8 x 8 activated',
		server: false,
		attributeId: 258,
		type: 'BITMAP8',
		writable: false,
		mandatory: false
	}, {

		label: 2271,
		nameFun: 'SingleTariffRateActivated',
		nameObj: 'singleTariffRateActivated',
		clusterId: 1800,
		name: 'single tariff rate activated',
		server: false,
		attributeId: 259,
		type: 'BITMAP8',
		writable: false,
		mandatory: false
	}, {

		label: 2272,
		nameFun: 'AsynchronousBillingOccurred',
		nameObj: 'asynchronousBillingOccurred',
		clusterId: 1800,
		name: 'asynchronous billing occurred',
		server: false,
		attributeId: 260,
		type: 'BITMAP8',
		writable: false,
		mandatory: false
	}, {

		label: 2273,
		nameFun: 'SynchronousBillingOccurred',
		nameObj: 'synchronousBillingOccurred',
		clusterId: 1800,
		name: 'synchronous billing occurred',
		server: false,
		attributeId: 261,
		type: 'BITMAP8',
		writable: false,
		mandatory: false
	}, {

		label: 2274,
		nameFun: 'TariffNotSupported',
		nameObj: 'tariffNotSupported',
		clusterId: 1800,
		name: 'tariff not supported',
		server: false,
		attributeId: 262,
		type: 'BITMAP8',
		writable: false,
		mandatory: false
	}, {

		label: 2275,
		nameFun: 'PriceClusterNotFound',
		nameObj: 'priceClusterNotFound',
		clusterId: 1800,
		name: 'price cluster not found',
		server: false,
		attributeId: 263,
		type: 'BITMAP8',
		writable: false,
		mandatory: false
	}, {

		label: 2276,
		nameFun: 'PriceEventLogCleared',
		nameObj: 'priceEventLogCleared',
		clusterId: 1800,
		name: 'price event log cleared',
		server: false,
		attributeId: 264,
		type: 'BITMAP8',
		writable: false,
		mandatory: false
	}, {

		label: 2277,
		nameFun: 'PublishPriceReceived',
		nameObj: 'publishPriceReceived',
		clusterId: 1800,
		name: 'publish price received',
		server: false,
		attributeId: 448,
		type: 'BITMAP8',
		writable: false,
		mandatory: false
	}, {

		label: 2278,
		nameFun: 'PublishPriceActioned',
		nameObj: 'publishPriceActioned',
		clusterId: 1800,
		name: 'publish price actioned',
		server: false,
		attributeId: 449,
		type: 'BITMAP8',
		writable: false,
		mandatory: false
	}, {

		label: 2279,
		nameFun: 'PublishPriceCancelled',
		nameObj: 'publishPriceCancelled',
		clusterId: 1800,
		name: 'publish price cancelled',
		server: false,
		attributeId: 450,
		type: 'BITMAP8',
		writable: false,
		mandatory: false
	}, {

		label: 2280,
		nameFun: 'PublishPriceRejected',
		nameObj: 'publishPriceRejected',
		clusterId: 1800,
		name: 'publish price rejected',
		server: false,
		attributeId: 451,
		type: 'BITMAP8',
		writable: false,
		mandatory: false
	}, {

		label: 2281,
		nameFun: 'PublishBlockPeriodReceived',
		nameObj: 'publishBlockPeriodReceived',
		clusterId: 1800,
		name: 'publish block period received',
		server: false,
		attributeId: 452,
		type: 'BITMAP8',
		writable: false,
		mandatory: false
	}, {

		label: 2282,
		nameFun: 'PublishBlockPeriodActioned',
		nameObj: 'publishBlockPeriodActioned',
		clusterId: 1800,
		name: 'publish block period actioned',
		server: false,
		attributeId: 453,
		type: 'BITMAP8',
		writable: false,
		mandatory: false
	}, {

		label: 2283,
		nameFun: 'PublishBlockPeriodCancelled',
		nameObj: 'publishBlockPeriodCancelled',
		clusterId: 1800,
		name: 'publish block period cancelled',
		server: false,
		attributeId: 454,
		type: 'BITMAP8',
		writable: false,
		mandatory: false
	}, {

		label: 2284,
		nameFun: 'PublishBlockPeriodRejected',
		nameObj: 'publishBlockPeriodRejected',
		clusterId: 1800,
		name: 'publish block period rejected',
		server: false,
		attributeId: 455,
		type: 'BITMAP8',
		writable: false,
		mandatory: false
	}, {

		label: 2285,
		nameFun: 'PublishTariffInformationReceived',
		nameObj: 'publishTariffInformationReceived',
		clusterId: 1800,
		name: 'publish tariff information received',
		server: false,
		attributeId: 456,
		type: 'BITMAP8',
		writable: false,
		mandatory: false
	}, {

		label: 2286,
		nameFun: 'PublishTariffInformationActioned',
		nameObj: 'publishTariffInformationActioned',
		clusterId: 1800,
		name: 'publish tariff information actioned',
		server: false,
		attributeId: 457,
		type: 'BITMAP8',
		writable: false,
		mandatory: false
	}, {

		label: 2287,
		nameFun: 'PublishTariffInformationCancelled',
		nameObj: 'publishTariffInformationCancelled',
		clusterId: 1800,
		name: 'publish tariff information cancelled',
		server: false,
		attributeId: 458,
		type: 'BITMAP8',
		writable: false,
		mandatory: false
	}, {

		label: 2288,
		nameFun: 'PublishTariffInformationRejected',
		nameObj: 'publishTariffInformationRejected',
		clusterId: 1800,
		name: 'publish tariff information rejected',
		server: false,
		attributeId: 459,
		type: 'BITMAP8',
		writable: false,
		mandatory: false
	}, {

		label: 2289,
		nameFun: 'PublishPriceMatrixReceived',
		nameObj: 'publishPriceMatrixReceived',
		clusterId: 1800,
		name: 'publish price matrix received',
		server: false,
		attributeId: 460,
		type: 'BITMAP8',
		writable: false,
		mandatory: false
	}, {

		label: 2290,
		nameFun: 'PublishPriceMatrixActioned',
		nameObj: 'publishPriceMatrixActioned',
		clusterId: 1800,
		name: 'publish price matrix actioned',
		server: false,
		attributeId: 461,
		type: 'BITMAP8',
		writable: false,
		mandatory: false
	}, {

		label: 2291,
		nameFun: 'PublishPriceMatrixCancelled',
		nameObj: 'publishPriceMatrixCancelled',
		clusterId: 1800,
		name: 'publish price matrix cancelled',
		server: false,
		attributeId: 462,
		type: 'BITMAP8',
		writable: false,
		mandatory: false
	}, {

		label: 2292,
		nameFun: 'PublishPriceMatrixRejected',
		nameObj: 'publishPriceMatrixRejected',
		clusterId: 1800,
		name: 'publish price matrix rejected',
		server: false,
		attributeId: 463,
		type: 'BITMAP8',
		writable: false,
		mandatory: false
	}, {

		label: 2293,
		nameFun: 'PublishBlockThresholdsReceived',
		nameObj: 'publishBlockThresholdsReceived',
		clusterId: 1800,
		name: 'publish block thresholds received',
		server: false,
		attributeId: 464,
		type: 'BITMAP8',
		writable: false,
		mandatory: false
	}, {

		label: 2294,
		nameFun: 'PublishBlockThresholdsActioned',
		nameObj: 'publishBlockThresholdsActioned',
		clusterId: 1800,
		name: 'publish block thresholds actioned',
		server: false,
		attributeId: 465,
		type: 'BITMAP8',
		writable: false,
		mandatory: false
	}, {

		label: 2295,
		nameFun: 'PublishBlockThresholdsCancelled',
		nameObj: 'publishBlockThresholdsCancelled',
		clusterId: 1800,
		name: 'publish block thresholds cancelled',
		server: false,
		attributeId: 466,
		type: 'BITMAP8',
		writable: false,
		mandatory: false
	}, {

		label: 2296,
		nameFun: 'PublishBlockThresholdsRejected',
		nameObj: 'publishBlockThresholdsRejected',
		clusterId: 1800,
		name: 'publish block thresholds rejected',
		server: false,
		attributeId: 467,
		type: 'BITMAP8',
		writable: false,
		mandatory: false
	}, {

		label: 2297,
		nameFun: 'PublishConversionFactorReceived',
		nameObj: 'publishConversionFactorReceived',
		clusterId: 1800,
		name: 'publish conversion factor received',
		server: false,
		attributeId: 468,
		type: 'BITMAP8',
		writable: false,
		mandatory: false
	}, {

		label: 2298,
		nameFun: 'PublishConversionFactorActioned',
		nameObj: 'publishConversionFactorActioned',
		clusterId: 1800,
		name: 'publish conversion factor actioned',
		server: false,
		attributeId: 469,
		type: 'BITMAP8',
		writable: false,
		mandatory: false
	}, {

		label: 2299,
		nameFun: 'PublishConversionFactorCancelled',
		nameObj: 'publishConversionFactorCancelled',
		clusterId: 1800,
		name: 'publish conversion factor cancelled',
		server: false,
		attributeId: 470,
		type: 'BITMAP8',
		writable: false,
		mandatory: false
	}, {

		label: 2300,
		nameFun: 'PublishConversionFactorRejected',
		nameObj: 'publishConversionFactorRejected',
		clusterId: 1800,
		name: 'publish conversion factor rejected',
		server: false,
		attributeId: 471,
		type: 'BITMAP8',
		writable: false,
		mandatory: false
	}, {

		label: 2301,
		nameFun: 'PublishCalorificValueReceived',
		nameObj: 'publishCalorificValueReceived',
		clusterId: 1800,
		name: 'publish calorific value received',
		server: false,
		attributeId: 472,
		type: 'BITMAP8',
		writable: false,
		mandatory: false
	}, {

		label: 2302,
		nameFun: 'PublishCalorificValueActioned',
		nameObj: 'publishCalorificValueActioned',
		clusterId: 1800,
		name: 'publish calorific value actioned',
		server: false,
		attributeId: 473,
		type: 'BITMAP8',
		writable: false,
		mandatory: false
	}, {

		label: 2303,
		nameFun: 'PublishCalorificValueCancelled',
		nameObj: 'publishCalorificValueCancelled',
		clusterId: 1800,
		name: 'publish calorific value cancelled',
		server: false,
		attributeId: 474,
		type: 'BITMAP8',
		writable: false,
		mandatory: false
	}, {

		label: 2304,
		nameFun: 'PublishCalorificValueRejected',
		nameObj: 'publishCalorificValueRejected',
		clusterId: 1800,
		name: 'publish calorific value rejected',
		server: false,
		attributeId: 475,
		type: 'BITMAP8',
		writable: false,
		mandatory: false
	}, {

		label: 2305,
		nameFun: 'PublishCo2ValueReceived',
		nameObj: 'publishCo2ValueReceived',
		clusterId: 1800,
		name: 'publish co2 value received',
		server: false,
		attributeId: 476,
		type: 'BITMAP8',
		writable: false,
		mandatory: false
	}, {

		label: 2306,
		nameFun: 'PublishCo2ValueActioned',
		nameObj: 'publishCo2ValueActioned',
		clusterId: 1800,
		name: 'publish co2 value actioned',
		server: false,
		attributeId: 477,
		type: 'BITMAP8',
		writable: false,
		mandatory: false
	}, {

		label: 2307,
		nameFun: 'PublishCo2ValueCancelled',
		nameObj: 'publishCo2ValueCancelled',
		clusterId: 1800,
		name: 'publish co2 value cancelled',
		server: false,
		attributeId: 478,
		type: 'BITMAP8',
		writable: false,
		mandatory: false
	}, {

		label: 2308,
		nameFun: 'PublishCo2ValueRejected',
		nameObj: 'publishCo2ValueRejected',
		clusterId: 1800,
		name: 'publish co2 value rejected',
		server: false,
		attributeId: 479,
		type: 'BITMAP8',
		writable: false,
		mandatory: false
	}, {

		label: 2309,
		nameFun: 'PublishCppEventReceived',
		nameObj: 'publishCppEventReceived',
		clusterId: 1800,
		name: 'publish cpp event received',
		server: false,
		attributeId: 480,
		type: 'BITMAP8',
		writable: false,
		mandatory: false
	}, {

		label: 2310,
		nameFun: 'PublishCppEventActioned',
		nameObj: 'publishCppEventActioned',
		clusterId: 1800,
		name: 'publish cpp event actioned',
		server: false,
		attributeId: 481,
		type: 'BITMAP8',
		writable: false,
		mandatory: false
	}, {

		label: 2311,
		nameFun: 'PublishCppEventCancelled',
		nameObj: 'publishCppEventCancelled',
		clusterId: 1800,
		name: 'publish cpp event cancelled',
		server: false,
		attributeId: 482,
		type: 'BITMAP8',
		writable: false,
		mandatory: false
	}, {

		label: 2312,
		nameFun: 'PublishCppEventRejected',
		nameObj: 'publishCppEventRejected',
		clusterId: 1800,
		name: 'publish cpp event rejected',
		server: false,
		attributeId: 483,
		type: 'BITMAP8',
		writable: false,
		mandatory: false
	}, {

		label: 2313,
		nameFun: 'PublishBillingPeriodReceived',
		nameObj: 'publishBillingPeriodReceived',
		clusterId: 1800,
		name: 'publish billing period received',
		server: false,
		attributeId: 484,
		type: 'BITMAP8',
		writable: false,
		mandatory: false
	}, {

		label: 2314,
		nameFun: 'PublishBillingPeriodActioned',
		nameObj: 'publishBillingPeriodActioned',
		clusterId: 1800,
		name: 'publish billing period actioned',
		server: false,
		attributeId: 485,
		type: 'BITMAP8',
		writable: false,
		mandatory: false
	}, {

		label: 2315,
		nameFun: 'PublishBillingPeriodCancelled',
		nameObj: 'publishBillingPeriodCancelled',
		clusterId: 1800,
		name: 'publish billing period cancelled',
		server: false,
		attributeId: 486,
		type: 'BITMAP8',
		writable: false,
		mandatory: false
	}, {

		label: 2316,
		nameFun: 'PublishBillingPeriodRejected',
		nameObj: 'publishBillingPeriodRejected',
		clusterId: 1800,
		name: 'publish billing period rejected',
		server: false,
		attributeId: 487,
		type: 'BITMAP8',
		writable: false,
		mandatory: false
	}, {

		label: 2317,
		nameFun: 'PublishConsolidatedBillReceived',
		nameObj: 'publishConsolidatedBillReceived',
		clusterId: 1800,
		name: 'publish consolidated bill received',
		server: false,
		attributeId: 488,
		type: 'BITMAP8',
		writable: false,
		mandatory: false
	}, {

		label: 2318,
		nameFun: 'PublishConsolidatedBillActioned',
		nameObj: 'publishConsolidatedBillActioned',
		clusterId: 1800,
		name: 'publish consolidated bill actioned',
		server: false,
		attributeId: 489,
		type: 'BITMAP8',
		writable: false,
		mandatory: false
	}, {

		label: 2319,
		nameFun: 'PublishConsolidatedBillCancelled',
		nameObj: 'publishConsolidatedBillCancelled',
		clusterId: 1800,
		name: 'publish consolidated bill cancelled',
		server: false,
		attributeId: 490,
		type: 'BITMAP8',
		writable: false,
		mandatory: false
	}, {

		label: 2320,
		nameFun: 'PublishConsolidatedBillRejected',
		nameObj: 'publishConsolidatedBillRejected',
		clusterId: 1800,
		name: 'publish consolidated bill rejected',
		server: false,
		attributeId: 491,
		type: 'BITMAP8',
		writable: false,
		mandatory: false
	}, {

		label: 2321,
		nameFun: 'PublishCreditPaymentInfoReceived',
		nameObj: 'publishCreditPaymentInfoReceived',
		clusterId: 1800,
		name: 'publish credit payment info received',
		server: false,
		attributeId: 492,
		type: 'BITMAP8',
		writable: false,
		mandatory: false
	}, {

		label: 2322,
		nameFun: 'PublishCreditPaymentInfoActioned',
		nameObj: 'publishCreditPaymentInfoActioned',
		clusterId: 1800,
		name: 'publish credit payment info actioned',
		server: false,
		attributeId: 493,
		type: 'BITMAP8',
		writable: false,
		mandatory: false
	}, {

		label: 2323,
		nameFun: 'PublishCreditPaymentInfoCancelled',
		nameObj: 'publishCreditPaymentInfoCancelled',
		clusterId: 1800,
		name: 'publish credit payment info cancelled',
		server: false,
		attributeId: 494,
		type: 'BITMAP8',
		writable: false,
		mandatory: false
	}, {

		label: 2324,
		nameFun: 'PublishCreditPaymentInfoRejected',
		nameObj: 'publishCreditPaymentInfoRejected',
		clusterId: 1800,
		name: 'publish credit payment info rejected',
		server: false,
		attributeId: 495,
		type: 'BITMAP8',
		writable: false,
		mandatory: false
	}, {

		label: 2325,
		nameFun: 'CheckMeter',
		nameObj: 'checkMeter',
		clusterId: 1800,
		name: 'check meter',
		server: false,
		attributeId: 512,
		type: 'BITMAP8',
		writable: false,
		mandatory: false
	}, {

		label: 2326,
		nameFun: 'LowBattery',
		nameObj: 'lowBattery',
		clusterId: 1800,
		name: 'low battery',
		server: false,
		attributeId: 513,
		type: 'BITMAP8',
		writable: false,
		mandatory: false
	}, {

		label: 2327,
		nameFun: 'TamperDetect',
		nameObj: 'tamperDetect',
		clusterId: 1800,
		name: 'tamper detect',
		server: false,
		attributeId: 514,
		type: 'BITMAP8',
		writable: false,
		mandatory: false
	}, {

		label: 2328,
		nameFun: 'SupplyStatus',
		nameObj: 'supplyStatus',
		clusterId: 1800,
		name: 'supply status',
		server: false,
		attributeId: 515,
		type: 'BITMAP8',
		writable: false,
		mandatory: false
	}, {

		label: 2329,
		nameFun: 'SupplyQuality',
		nameObj: 'supplyQuality',
		clusterId: 1800,
		name: 'supply quality',
		server: false,
		attributeId: 516,
		type: 'BITMAP8',
		writable: false,
		mandatory: false
	}, {

		label: 2330,
		nameFun: 'LeakDetect',
		nameObj: 'leakDetect',
		clusterId: 1800,
		name: 'leak detect',
		server: false,
		attributeId: 517,
		type: 'BITMAP8',
		writable: false,
		mandatory: false
	}, {

		label: 2331,
		nameFun: 'ServiceDisconnect',
		nameObj: 'serviceDisconnect',
		clusterId: 1800,
		name: 'service disconnect',
		server: false,
		attributeId: 518,
		type: 'BITMAP8',
		writable: false,
		mandatory: false
	}, {

		label: 2332,
		nameFun: 'ReverseFlowGeneral',
		nameObj: 'reverseFlowGeneral',
		clusterId: 1800,
		name: 'reverse flow general',
		server: false,
		attributeId: 519,
		type: 'BITMAP8',
		writable: false,
		mandatory: false
	}, {

		label: 2333,
		nameFun: 'MeterCoverRemoved',
		nameObj: 'meterCoverRemoved',
		clusterId: 1800,
		name: 'meter cover removed',
		server: false,
		attributeId: 520,
		type: 'BITMAP8',
		writable: false,
		mandatory: false
	}, {

		label: 2334,
		nameFun: 'MeterCoverClosed',
		nameObj: 'meterCoverClosed',
		clusterId: 1800,
		name: 'meter cover closed',
		server: false,
		attributeId: 521,
		type: 'BITMAP8',
		writable: false,
		mandatory: false
	}, {

		label: 2335,
		nameFun: 'StrongMagneticField',
		nameObj: 'strongMagneticField',
		clusterId: 1800,
		name: 'strong magnetic field',
		server: false,
		attributeId: 522,
		type: 'BITMAP8',
		writable: false,
		mandatory: false
	}, {

		label: 2336,
		nameFun: 'NoStrongMagneticField',
		nameObj: 'noStrongMagneticField',
		clusterId: 1800,
		name: 'no strong magnetic field',
		server: false,
		attributeId: 523,
		type: 'BITMAP8',
		writable: false,
		mandatory: false
	}, {

		label: 2337,
		nameFun: 'BatteryFailure',
		nameObj: 'batteryFailure',
		clusterId: 1800,
		name: 'battery failure',
		server: false,
		attributeId: 524,
		type: 'BITMAP8',
		writable: false,
		mandatory: false
	}, {

		label: 2338,
		nameFun: 'ProgramMemoryError',
		nameObj: 'programMemoryError',
		clusterId: 1800,
		name: 'program memory error',
		server: false,
		attributeId: 525,
		type: 'BITMAP8',
		writable: false,
		mandatory: false
	}, {

		label: 2339,
		nameFun: 'RamError',
		nameObj: 'ramError',
		clusterId: 1800,
		name: 'ram error',
		server: false,
		attributeId: 526,
		type: 'BITMAP8',
		writable: false,
		mandatory: false
	}, {

		label: 2340,
		nameFun: 'NvMemoryError',
		nameObj: 'nvMemoryError',
		clusterId: 1800,
		name: 'nv memory error',
		server: false,
		attributeId: 527,
		type: 'BITMAP8',
		writable: false,
		mandatory: false
	}, {

		label: 2341,
		nameFun: 'LowVoltageL1',
		nameObj: 'lowVoltageL1',
		clusterId: 1800,
		name: 'low voltage L1',
		server: false,
		attributeId: 528,
		type: 'BITMAP8',
		writable: false,
		mandatory: false
	}, {

		label: 2342,
		nameFun: 'HighVoltageL1',
		nameObj: 'highVoltageL1',
		clusterId: 1800,
		name: 'high voltage L1',
		server: false,
		attributeId: 529,
		type: 'BITMAP8',
		writable: false,
		mandatory: false
	}, {

		label: 2343,
		nameFun: 'LowVoltageL2',
		nameObj: 'lowVoltageL2',
		clusterId: 1800,
		name: 'low voltage L2',
		server: false,
		attributeId: 530,
		type: 'BITMAP8',
		writable: false,
		mandatory: false
	}, {

		label: 2344,
		nameFun: 'HighVoltageL2',
		nameObj: 'highVoltageL2',
		clusterId: 1800,
		name: 'high voltage L2',
		server: false,
		attributeId: 531,
		type: 'BITMAP8',
		writable: false,
		mandatory: false
	}, {

		label: 2345,
		nameFun: 'LowVoltageL3',
		nameObj: 'lowVoltageL3',
		clusterId: 1800,
		name: 'low voltage L3',
		server: false,
		attributeId: 532,
		type: 'BITMAP8',
		writable: false,
		mandatory: false
	}, {

		label: 2346,
		nameFun: 'HighVoltageL3',
		nameObj: 'highVoltageL3',
		clusterId: 1800,
		name: 'high voltage L3',
		server: false,
		attributeId: 533,
		type: 'BITMAP8',
		writable: false,
		mandatory: false
	}, {

		label: 2347,
		nameFun: 'OverCurrentL1',
		nameObj: 'overCurrentL1',
		clusterId: 1800,
		name: 'over current L1',
		server: false,
		attributeId: 534,
		type: 'BITMAP8',
		writable: false,
		mandatory: false
	}, {

		label: 2348,
		nameFun: 'OverCurrentL2',
		nameObj: 'overCurrentL2',
		clusterId: 1800,
		name: 'over current L2',
		server: false,
		attributeId: 535,
		type: 'BITMAP8',
		writable: false,
		mandatory: false
	}, {

		label: 2349,
		nameFun: 'OverCurrentL3',
		nameObj: 'overCurrentL3',
		clusterId: 1800,
		name: 'over current L3',
		server: false,
		attributeId: 536,
		type: 'BITMAP8',
		writable: false,
		mandatory: false
	}, {

		label: 2350,
		nameFun: 'FrequencyTooLowL1',
		nameObj: 'frequencyTooLowL1',
		clusterId: 1800,
		name: 'frequency too low L1',
		server: false,
		attributeId: 537,
		type: 'BITMAP8',
		writable: false,
		mandatory: false
	}, {

		label: 2351,
		nameFun: 'FrequencyTooHighL1',
		nameObj: 'frequencyTooHighL1',
		clusterId: 1800,
		name: 'frequency too high L1',
		server: false,
		attributeId: 538,
		type: 'BITMAP8',
		writable: false,
		mandatory: false
	}, {

		label: 2352,
		nameFun: 'FrequencyTooLowL2',
		nameObj: 'frequencyTooLowL2',
		clusterId: 1800,
		name: 'frequency too low L2',
		server: false,
		attributeId: 539,
		type: 'BITMAP8',
		writable: false,
		mandatory: false
	}, {

		label: 2353,
		nameFun: 'FrequencyTooHighL2',
		nameObj: 'frequencyTooHighL2',
		clusterId: 1800,
		name: 'frequency too high L2',
		server: false,
		attributeId: 540,
		type: 'BITMAP8',
		writable: false,
		mandatory: false
	}, {

		label: 2354,
		nameFun: 'FrequencyTooLowL3',
		nameObj: 'frequencyTooLowL3',
		clusterId: 1800,
		name: 'frequency too low L3',
		server: false,
		attributeId: 541,
		type: 'BITMAP8',
		writable: false,
		mandatory: false
	}, {

		label: 2355,
		nameFun: 'FrequencyTooHighL3',
		nameObj: 'frequencyTooHighL3',
		clusterId: 1800,
		name: 'frequency too high L3',
		server: false,
		attributeId: 542,
		type: 'BITMAP8',
		writable: false,
		mandatory: false
	}, {

		label: 2356,
		nameFun: 'GroundFault',
		nameObj: 'groundFault',
		clusterId: 1800,
		name: 'ground fault',
		server: false,
		attributeId: 543,
		type: 'BITMAP8',
		writable: false,
		mandatory: false
	}, {

		label: 2357,
		nameFun: 'ElectricTamperDetect',
		nameObj: 'electricTamperDetect',
		clusterId: 1800,
		name: 'electric tamper detect',
		server: false,
		attributeId: 544,
		type: 'BITMAP8',
		writable: false,
		mandatory: false
	}, {

		label: 2358,
		nameFun: 'IncorrectPolarity',
		nameObj: 'incorrectPolarity',
		clusterId: 1800,
		name: 'incorrect polarity',
		server: false,
		attributeId: 545,
		type: 'BITMAP8',
		writable: false,
		mandatory: false
	}, {

		label: 2359,
		nameFun: 'CurrentNoVoltage',
		nameObj: 'currentNoVoltage',
		clusterId: 1800,
		name: 'current no voltage',
		server: false,
		attributeId: 546,
		type: 'BITMAP8',
		writable: false,
		mandatory: false
	}, {

		label: 2360,
		nameFun: 'UnderVoltage',
		nameObj: 'underVoltage',
		clusterId: 1800,
		name: 'under voltage',
		server: false,
		attributeId: 547,
		type: 'BITMAP8',
		writable: false,
		mandatory: false
	}, {

		label: 2361,
		nameFun: 'OverVoltage',
		nameObj: 'overVoltage',
		clusterId: 1800,
		name: 'over voltage',
		server: false,
		attributeId: 548,
		type: 'BITMAP8',
		writable: false,
		mandatory: false
	}, {

		label: 2362,
		nameFun: 'NormalVoltage',
		nameObj: 'normalVoltage',
		clusterId: 1800,
		name: 'normal voltage',
		server: false,
		attributeId: 549,
		type: 'BITMAP8',
		writable: false,
		mandatory: false
	}, {

		label: 2363,
		nameFun: 'PfBelowThreshold',
		nameObj: 'pfBelowThreshold',
		clusterId: 1800,
		name: 'pf below threshold',
		server: false,
		attributeId: 550,
		type: 'BITMAP8',
		writable: false,
		mandatory: false
	}, {

		label: 2364,
		nameFun: 'PfAboveThreshold',
		nameObj: 'pfAboveThreshold',
		clusterId: 1800,
		name: 'pf above threshold',
		server: false,
		attributeId: 551,
		type: 'BITMAP8',
		writable: false,
		mandatory: false
	}, {

		label: 2365,
		nameFun: 'TerminalCoverRemoved',
		nameObj: 'terminalCoverRemoved',
		clusterId: 1800,
		name: 'terminal cover removed',
		server: false,
		attributeId: 552,
		type: 'BITMAP8',
		writable: false,
		mandatory: false
	}, {

		label: 2366,
		nameFun: 'TerminalCoverClosed',
		nameObj: 'terminalCoverClosed',
		clusterId: 1800,
		name: 'terminal cover closed',
		server: false,
		attributeId: 553,
		type: 'BITMAP8',
		writable: false,
		mandatory: false
	}, {

		label: 2367,
		nameFun: 'BurstDetect',
		nameObj: 'burstDetect',
		clusterId: 1800,
		name: 'burst detect',
		server: false,
		attributeId: 560,
		type: 'BITMAP8',
		writable: false,
		mandatory: false
	}, {

		label: 2368,
		nameFun: 'PressureTooLow',
		nameObj: 'pressureTooLow',
		clusterId: 1800,
		name: 'pressure too low',
		server: false,
		attributeId: 561,
		type: 'BITMAP8',
		writable: false,
		mandatory: false
	}, {

		label: 2369,
		nameFun: 'PressureTooHigh',
		nameObj: 'pressureTooHigh',
		clusterId: 1800,
		name: 'pressure too high',
		server: false,
		attributeId: 562,
		type: 'BITMAP8',
		writable: false,
		mandatory: false
	}, {

		label: 2370,
		nameFun: 'FlowSensorCommunicationError',
		nameObj: 'flowSensorCommunicationError',
		clusterId: 1800,
		name: 'flow sensor communication error',
		server: false,
		attributeId: 563,
		type: 'BITMAP8',
		writable: false,
		mandatory: false
	}, {

		label: 2371,
		nameFun: 'FlowSensorMeasurementFault',
		nameObj: 'flowSensorMeasurementFault',
		clusterId: 1800,
		name: 'flow sensor measurement fault',
		server: false,
		attributeId: 564,
		type: 'BITMAP8',
		writable: false,
		mandatory: false
	}, {

		label: 2372,
		nameFun: 'FlowSensorReverseFlow',
		nameObj: 'flowSensorReverseFlow',
		clusterId: 1800,
		name: 'flow sensor reverse flow',
		server: false,
		attributeId: 565,
		type: 'BITMAP8',
		writable: false,
		mandatory: false
	}, {

		label: 2373,
		nameFun: 'FlowSensorAirDetect',
		nameObj: 'flowSensorAirDetect',
		clusterId: 1800,
		name: 'flow sensor air detect',
		server: false,
		attributeId: 566,
		type: 'BITMAP8',
		writable: false,
		mandatory: false
	}, {

		label: 2374,
		nameFun: 'PipeEmpty',
		nameObj: 'pipeEmpty',
		clusterId: 1800,
		name: 'pipe empty',
		server: false,
		attributeId: 567,
		type: 'BITMAP8',
		writable: false,
		mandatory: false
	}, {

		label: 2375,
		nameFun: 'InletTemperatureSensorFault',
		nameObj: 'inletTemperatureSensorFault',
		clusterId: 1800,
		name: 'inlet temperature sensor fault',
		server: false,
		attributeId: 592,
		type: 'BITMAP8',
		writable: false,
		mandatory: false
	}, {

		label: 2376,
		nameFun: 'OutletTemperatureSensorFault',
		nameObj: 'outletTemperatureSensorFault',
		clusterId: 1800,
		name: 'outlet temperature sensor fault',
		server: false,
		attributeId: 593,
		type: 'BITMAP8',
		writable: false,
		mandatory: false
	}, {

		label: 2377,
		nameFun: 'ReverseFlow',
		nameObj: 'reverseFlow',
		clusterId: 1800,
		name: 'reverse flow',
		server: false,
		attributeId: 608,
		type: 'BITMAP8',
		writable: false,
		mandatory: false
	}, {

		label: 2378,
		nameFun: 'TiltTamper',
		nameObj: 'tiltTamper',
		clusterId: 1800,
		name: 'tilt tamper',
		server: false,
		attributeId: 609,
		type: 'BITMAP8',
		writable: false,
		mandatory: false
	}, {

		label: 2379,
		nameFun: 'BatteryCoverRemoved',
		nameObj: 'batteryCoverRemoved',
		clusterId: 1800,
		name: 'battery cover removed',
		server: false,
		attributeId: 610,
		type: 'BITMAP8',
		writable: false,
		mandatory: false
	}, {

		label: 2380,
		nameFun: 'BatteryCoverClosed',
		nameObj: 'batteryCoverClosed',
		clusterId: 1800,
		name: 'battery cover closed',
		server: false,
		attributeId: 611,
		type: 'BITMAP8',
		writable: false,
		mandatory: false
	}, {

		label: 2381,
		nameFun: 'ExcessFlow',
		nameObj: 'excessFlow',
		clusterId: 1800,
		name: 'excess flow',
		server: false,
		attributeId: 612,
		type: 'BITMAP8',
		writable: false,
		mandatory: false
	}, {

		label: 2382,
		nameFun: 'MeasurementSystemError',
		nameObj: 'measurementSystemError',
		clusterId: 1800,
		name: 'measurement system error',
		server: false,
		attributeId: 624,
		type: 'BITMAP8',
		writable: false,
		mandatory: false
	}, {

		label: 2383,
		nameFun: 'WatchdogError',
		nameObj: 'watchdogError',
		clusterId: 1800,
		name: 'watchdog error',
		server: false,
		attributeId: 625,
		type: 'BITMAP8',
		writable: false,
		mandatory: false
	}, {

		label: 2384,
		nameFun: 'SupplyDisconnectFailure',
		nameObj: 'supplyDisconnectFailure',
		clusterId: 1800,
		name: 'supply disconnect failure',
		server: false,
		attributeId: 626,
		type: 'BITMAP8',
		writable: false,
		mandatory: false
	}, {

		label: 2385,
		nameFun: 'SupplyConnectFailure',
		nameObj: 'supplyConnectFailure',
		clusterId: 1800,
		name: 'supply connect failure',
		server: false,
		attributeId: 627,
		type: 'BITMAP8',
		writable: false,
		mandatory: false
	}, {

		label: 2386,
		nameFun: 'MeasurementSoftwareChanged',
		nameObj: 'measurementSoftwareChanged',
		clusterId: 1800,
		name: 'measurement software changed',
		server: false,
		attributeId: 628,
		type: 'BITMAP8',
		writable: false,
		mandatory: false
	}, {

		label: 2387,
		nameFun: 'DstEnabled',
		nameObj: 'dstEnabled',
		clusterId: 1800,
		name: 'dst enabled',
		server: false,
		attributeId: 629,
		type: 'BITMAP8',
		writable: false,
		mandatory: false
	}, {

		label: 2388,
		nameFun: 'DstDisabled',
		nameObj: 'dstDisabled',
		clusterId: 1800,
		name: 'dst disabled',
		server: false,
		attributeId: 630,
		type: 'BITMAP8',
		writable: false,
		mandatory: false
	}, {

		label: 2389,
		nameFun: 'ClockAdjBackward',
		nameObj: 'clockAdjBackward',
		clusterId: 1800,
		name: 'clock adj backward',
		server: false,
		attributeId: 631,
		type: 'BITMAP8',
		writable: false,
		mandatory: false
	}, {

		label: 2390,
		nameFun: 'ClockAdjForward',
		nameObj: 'clockAdjForward',
		clusterId: 1800,
		name: 'clock adj forward',
		server: false,
		attributeId: 632,
		type: 'BITMAP8',
		writable: false,
		mandatory: false
	}, {

		label: 2391,
		nameFun: 'ClockInvalid',
		nameObj: 'clockInvalid',
		clusterId: 1800,
		name: 'clock invalid',
		server: false,
		attributeId: 633,
		type: 'BITMAP8',
		writable: false,
		mandatory: false
	}, {

		label: 2392,
		nameFun: 'CommunicationErrorHan',
		nameObj: 'communicationErrorHan',
		clusterId: 1800,
		name: 'communication error han',
		server: false,
		attributeId: 634,
		type: 'BITMAP8',
		writable: false,
		mandatory: false
	}, {

		label: 2393,
		nameFun: 'CommunicationOkHan',
		nameObj: 'communicationOkHan',
		clusterId: 1800,
		name: 'communication ok han',
		server: false,
		attributeId: 635,
		type: 'BITMAP8',
		writable: false,
		mandatory: false
	}, {

		label: 2394,
		nameFun: 'FraudAttempt',
		nameObj: 'fraudAttempt',
		clusterId: 1800,
		name: 'fraud attempt',
		server: false,
		attributeId: 636,
		type: 'BITMAP8',
		writable: false,
		mandatory: false
	}, {

		label: 2395,
		nameFun: 'PowerLoss',
		nameObj: 'powerLoss',
		clusterId: 1800,
		name: 'power loss',
		server: false,
		attributeId: 637,
		type: 'BITMAP8',
		writable: false,
		mandatory: false
	}, {

		label: 2396,
		nameFun: 'UnusualHanTraffic',
		nameObj: 'unusualHanTraffic',
		clusterId: 1800,
		name: 'unusual han traffic',
		server: false,
		attributeId: 638,
		type: 'BITMAP8',
		writable: false,
		mandatory: false
	}, {

		label: 2397,
		nameFun: 'UnexpectedClockChange',
		nameObj: 'unexpectedClockChange',
		clusterId: 1800,
		name: 'unexpected clock change',
		server: false,
		attributeId: 639,
		type: 'BITMAP8',
		writable: false,
		mandatory: false
	}, {

		label: 2398,
		nameFun: 'CommsUsingUnauthenticatedComponent',
		nameObj: 'commsUsingUnauthenticatedComponent',
		clusterId: 1800,
		name: 'comms using unauthenticated component',
		server: false,
		attributeId: 640,
		type: 'BITMAP8',
		writable: false,
		mandatory: false
	}, {

		label: 2399,
		nameFun: 'MeteringErrorRegClear',
		nameObj: 'meteringErrorRegClear',
		clusterId: 1800,
		name: 'metering error reg clear',
		server: false,
		attributeId: 641,
		type: 'BITMAP8',
		writable: false,
		mandatory: false
	}, {

		label: 2400,
		nameFun: 'MeteringAlarmRegClear',
		nameObj: 'meteringAlarmRegClear',
		clusterId: 1800,
		name: 'metering alarm reg clear',
		server: false,
		attributeId: 642,
		type: 'BITMAP8',
		writable: false,
		mandatory: false
	}, {

		label: 2401,
		nameFun: 'UnexpectedHwReset',
		nameObj: 'unexpectedHwReset',
		clusterId: 1800,
		name: 'unexpected hw reset',
		server: false,
		attributeId: 643,
		type: 'BITMAP8',
		writable: false,
		mandatory: false
	}, {

		label: 2402,
		nameFun: 'UnexpectedProgramExecution',
		nameObj: 'unexpectedProgramExecution',
		clusterId: 1800,
		name: 'unexpected program execution',
		server: false,
		attributeId: 644,
		type: 'BITMAP8',
		writable: false,
		mandatory: false
	}, {

		label: 2403,
		nameFun: 'EventLogCleared',
		nameObj: 'eventLogCleared',
		clusterId: 1800,
		name: 'event log cleared',
		server: false,
		attributeId: 645,
		type: 'BITMAP8',
		writable: false,
		mandatory: false
	}, {

		label: 2404,
		nameFun: 'LimitThresholdExceeded',
		nameObj: 'limitThresholdExceeded',
		clusterId: 1800,
		name: 'limit threshold exceeded',
		server: false,
		attributeId: 646,
		type: 'BITMAP8',
		writable: false,
		mandatory: false
	}, {

		label: 2405,
		nameFun: 'LimitThresholdOk',
		nameObj: 'limitThresholdOk',
		clusterId: 1800,
		name: 'limit threshold ok',
		server: false,
		attributeId: 647,
		type: 'BITMAP8',
		writable: false,
		mandatory: false
	}, {

		label: 2406,
		nameFun: 'LimitThresholdChanged',
		nameObj: 'limitThresholdChanged',
		clusterId: 1800,
		name: 'limit threshold changed',
		server: false,
		attributeId: 648,
		type: 'BITMAP8',
		writable: false,
		mandatory: false
	}, {

		label: 2407,
		nameFun: 'MaximumDemandExceeded',
		nameObj: 'maximumDemandExceeded',
		clusterId: 1800,
		name: 'maximum demand exceeded',
		server: false,
		attributeId: 649,
		type: 'BITMAP8',
		writable: false,
		mandatory: false
	}, {

		label: 2408,
		nameFun: 'ProfileCleared',
		nameObj: 'profileCleared',
		clusterId: 1800,
		name: 'profile cleared',
		server: false,
		attributeId: 650,
		type: 'BITMAP8',
		writable: false,
		mandatory: false
	}, {

		label: 2409,
		nameFun: 'LoadProfileCleared',
		nameObj: 'loadProfileCleared',
		clusterId: 1800,
		name: 'load profile cleared',
		server: false,
		attributeId: 651,
		type: 'BITMAP8',
		writable: false,
		mandatory: false
	}, {

		label: 2410,
		nameFun: 'BatteryWarn',
		nameObj: 'batteryWarn',
		clusterId: 1800,
		name: 'battery warn',
		server: false,
		attributeId: 652,
		type: 'BITMAP8',
		writable: false,
		mandatory: false
	}, {

		label: 2411,
		nameFun: 'WrongSignature',
		nameObj: 'wrongSignature',
		clusterId: 1800,
		name: 'wrong signature',
		server: false,
		attributeId: 653,
		type: 'BITMAP8',
		writable: false,
		mandatory: false
	}, {

		label: 2412,
		nameFun: 'WrongSignature',
		nameObj: 'wrongSignature',
		clusterId: 1800,
		name: 'wrong signature',
		server: false,
		attributeId: 654,
		type: 'BITMAP8',
		writable: false,
		mandatory: false
	}, {

		label: 2413,
		nameFun: 'UnauthoriseActionFromHan',
		nameObj: 'unauthoriseActionFromHan',
		clusterId: 1800,
		name: 'unauthorise action from HAN',
		server: false,
		attributeId: 655,
		type: 'BITMAP8',
		writable: false,
		mandatory: false
	}, {

		label: 2414,
		nameFun: 'FastPollingStart',
		nameObj: 'fastPollingStart',
		clusterId: 1800,
		name: 'fast polling start',
		server: false,
		attributeId: 656,
		type: 'BITMAP8',
		writable: false,
		mandatory: false
	}, {

		label: 2415,
		nameFun: 'FastPollingEnd',
		nameObj: 'fastPollingEnd',
		clusterId: 1800,
		name: 'fast polling end',
		server: false,
		attributeId: 657,
		type: 'BITMAP8',
		writable: false,
		mandatory: false
	}, {

		label: 2416,
		nameFun: 'MeterReportingIntervalChanged',
		nameObj: 'meterReportingIntervalChanged',
		clusterId: 1800,
		name: 'meter reporting interval changed',
		server: false,
		attributeId: 658,
		type: 'BITMAP8',
		writable: false,
		mandatory: false
	}, {

		label: 2417,
		nameFun: 'DisconnectToLoadLimit',
		nameObj: 'disconnectToLoadLimit',
		clusterId: 1800,
		name: 'disconnect to load limit',
		server: false,
		attributeId: 659,
		type: 'BITMAP8',
		writable: false,
		mandatory: false
	}, {

		label: 2418,
		nameFun: 'MeterSupplyStatusRegisterChanged',
		nameObj: 'meterSupplyStatusRegisterChanged',
		clusterId: 1800,
		name: 'meter supply status register changed',
		server: false,
		attributeId: 660,
		type: 'BITMAP8',
		writable: false,
		mandatory: false
	}, {

		label: 2419,
		nameFun: 'MeterAlarmStatusRegisterChanged',
		nameObj: 'meterAlarmStatusRegisterChanged',
		clusterId: 1800,
		name: 'meter alarm status register changed',
		server: false,
		attributeId: 661,
		type: 'BITMAP8',
		writable: false,
		mandatory: false
	}, {

		label: 2420,
		nameFun: 'ExtendedMeterAlarmStatusRegisterChanged',
		nameObj: 'extendedMeterAlarmStatusRegisterChanged',
		clusterId: 1800,
		name: 'extended meter alarm status register changed',
		server: false,
		attributeId: 662,
		type: 'BITMAP8',
		writable: false,
		mandatory: false
	}, {

		label: 2421,
		nameFun: 'ManufacturerSpecificA',
		nameObj: 'manufacturerSpecificA',
		clusterId: 1800,
		name: 'manufacturer specific a',
		server: false,
		attributeId: 688,
		type: 'BITMAP8',
		writable: false,
		mandatory: false
	}, {

		label: 2422,
		nameFun: 'ManufacturerSpecificB',
		nameObj: 'manufacturerSpecificB',
		clusterId: 1800,
		name: 'manufacturer specific b',
		server: false,
		attributeId: 689,
		type: 'BITMAP8',
		writable: false,
		mandatory: false
	}, {

		label: 2423,
		nameFun: 'ManufacturerSpecificC',
		nameObj: 'manufacturerSpecificC',
		clusterId: 1800,
		name: 'manufacturer specific c',
		server: false,
		attributeId: 690,
		type: 'BITMAP8',
		writable: false,
		mandatory: false
	}, {

		label: 2424,
		nameFun: 'ManufacturerSpecificD',
		nameObj: 'manufacturerSpecificD',
		clusterId: 1800,
		name: 'manufacturer specific d',
		server: false,
		attributeId: 691,
		type: 'BITMAP8',
		writable: false,
		mandatory: false
	}, {

		label: 2425,
		nameFun: 'ManufacturerSpecificE',
		nameObj: 'manufacturerSpecificE',
		clusterId: 1800,
		name: 'manufacturer specific e',
		server: false,
		attributeId: 692,
		type: 'BITMAP8',
		writable: false,
		mandatory: false
	}, {

		label: 2426,
		nameFun: 'ManufacturerSpecificF',
		nameObj: 'manufacturerSpecificF',
		clusterId: 1800,
		name: 'manufacturer specific f',
		server: false,
		attributeId: 693,
		type: 'BITMAP8',
		writable: false,
		mandatory: false
	}, {

		label: 2427,
		nameFun: 'ManufacturerSpecificG',
		nameObj: 'manufacturerSpecificG',
		clusterId: 1800,
		name: 'manufacturer specific g',
		server: false,
		attributeId: 694,
		type: 'BITMAP8',
		writable: false,
		mandatory: false
	}, {

		label: 2428,
		nameFun: 'ManufacturerSpecificH',
		nameObj: 'manufacturerSpecificH',
		clusterId: 1800,
		name: 'manufacturer specific h',
		server: false,
		attributeId: 695,
		type: 'BITMAP8',
		writable: false,
		mandatory: false
	}, {

		label: 2429,
		nameFun: 'ManufacturerSpecificI',
		nameObj: 'manufacturerSpecificI',
		clusterId: 1800,
		name: 'manufacturer specific i',
		server: false,
		attributeId: 696,
		type: 'BITMAP8',
		writable: false,
		mandatory: false
	}, {

		label: 2430,
		nameFun: 'MirrorResponseCommandReceived',
		nameObj: 'mirrorResponseCommandReceived',
		clusterId: 1800,
		name: 'mirror response command received',
		server: false,
		attributeId: 705,
		type: 'BITMAP8',
		writable: false,
		mandatory: false
	}, {

		label: 2431,
		nameFun: 'MirrorResponseCommandActioned',
		nameObj: 'mirrorResponseCommandActioned',
		clusterId: 1800,
		name: 'mirror response command actioned',
		server: false,
		attributeId: 706,
		type: 'BITMAP8',
		writable: false,
		mandatory: false
	}, {

		label: 2432,
		nameFun: 'MirrorResponseCommandCancelled',
		nameObj: 'mirrorResponseCommandCancelled',
		clusterId: 1800,
		name: 'mirror response command cancelled',
		server: false,
		attributeId: 707,
		type: 'BITMAP8',
		writable: false,
		mandatory: false
	}, {

		label: 2433,
		nameFun: 'MirrorResponseCommandRejected',
		nameObj: 'mirrorResponseCommandRejected',
		clusterId: 1800,
		name: 'mirror response command rejected',
		server: false,
		attributeId: 708,
		type: 'BITMAP8',
		writable: false,
		mandatory: false
	}, {

		label: 2434,
		nameFun: 'MessagingEventLogCleared',
		nameObj: 'messagingEventLogCleared',
		clusterId: 1800,
		name: 'messaging event log cleared',
		server: false,
		attributeId: 768,
		type: 'BITMAP8',
		writable: false,
		mandatory: false
	}, {

		label: 2435,
		nameFun: 'DisplayMessageReceived',
		nameObj: 'displayMessageReceived',
		clusterId: 1800,
		name: 'display message received',
		server: false,
		attributeId: 769,
		type: 'BITMAP8',
		writable: false,
		mandatory: false
	}, {

		label: 2436,
		nameFun: 'DisplayMessageActioned',
		nameObj: 'displayMessageActioned',
		clusterId: 1800,
		name: 'display message actioned',
		server: false,
		attributeId: 770,
		type: 'BITMAP8',
		writable: false,
		mandatory: false
	}, {

		label: 2437,
		nameFun: 'DisplayMessageCancelled',
		nameObj: 'displayMessageCancelled',
		clusterId: 1800,
		name: 'display message cancelled',
		server: false,
		attributeId: 771,
		type: 'BITMAP8',
		writable: false,
		mandatory: false
	}, {

		label: 2438,
		nameFun: 'DisplayMessageRejected',
		nameObj: 'displayMessageRejected',
		clusterId: 1800,
		name: 'display message rejected',
		server: false,
		attributeId: 772,
		type: 'BITMAP8',
		writable: false,
		mandatory: false
	}, {

		label: 2439,
		nameFun: 'CancelMessageReceived',
		nameObj: 'cancelMessageReceived',
		clusterId: 1800,
		name: 'cancel message received',
		server: false,
		attributeId: 773,
		type: 'BITMAP8',
		writable: false,
		mandatory: false
	}, {

		label: 2440,
		nameFun: 'CancelMessageActioned',
		nameObj: 'cancelMessageActioned',
		clusterId: 1800,
		name: 'cancel message actioned',
		server: false,
		attributeId: 774,
		type: 'BITMAP8',
		writable: false,
		mandatory: false
	}, {

		label: 2441,
		nameFun: 'CancelMessageCancelled',
		nameObj: 'cancelMessageCancelled',
		clusterId: 1800,
		name: 'cancel message cancelled',
		server: false,
		attributeId: 775,
		type: 'BITMAP8',
		writable: false,
		mandatory: false
	}, {

		label: 2442,
		nameFun: 'CancelMessageRejected',
		nameObj: 'cancelMessageRejected',
		clusterId: 1800,
		name: 'cancel message rejected',
		server: false,
		attributeId: 776,
		type: 'BITMAP8',
		writable: false,
		mandatory: false
	}, {

		label: 2443,
		nameFun: 'MessageConfirmationSent',
		nameObj: 'messageConfirmationSent',
		clusterId: 1800,
		name: 'message confirmation sent',
		server: false,
		attributeId: 976,
		type: 'BITMAP8',
		writable: false,
		mandatory: false
	}, {

		label: 2444,
		nameFun: 'LowCredit',
		nameObj: 'lowCredit',
		clusterId: 1800,
		name: 'low credit',
		server: false,
		attributeId: 1024,
		type: 'BITMAP8',
		writable: false,
		mandatory: false
	}, {

		label: 2445,
		nameFun: 'NoCredit',
		nameObj: 'noCredit',
		clusterId: 1800,
		name: 'no credit',
		server: false,
		attributeId: 1025,
		type: 'BITMAP8',
		writable: false,
		mandatory: false
	}, {

		label: 2446,
		nameFun: 'CreditExhausted',
		nameObj: 'creditExhausted',
		clusterId: 1800,
		name: 'credit exhausted',
		server: false,
		attributeId: 1026,
		type: 'BITMAP8',
		writable: false,
		mandatory: false
	}, {

		label: 2447,
		nameFun: 'EmergencyCreditEnabled',
		nameObj: 'emergencyCreditEnabled',
		clusterId: 1800,
		name: 'emergency credit enabled',
		server: false,
		attributeId: 1027,
		type: 'BITMAP8',
		writable: false,
		mandatory: false
	}, {

		label: 2448,
		nameFun: 'EmergencyCreditExhausted',
		nameObj: 'emergencyCreditExhausted',
		clusterId: 1800,
		name: 'emergency credit exhausted',
		server: false,
		attributeId: 1028,
		type: 'BITMAP8',
		writable: false,
		mandatory: false
	}, {

		label: 2449,
		nameFun: 'IhdLowCreditWarning',
		nameObj: 'ihdLowCreditWarning',
		clusterId: 1800,
		name: 'IHD low credit warning',
		server: false,
		attributeId: 1029,
		type: 'BITMAP8',
		writable: false,
		mandatory: false
	}, {

		label: 2450,
		nameFun: 'PrepayEventLogCleared',
		nameObj: 'prepayEventLogCleared',
		clusterId: 1800,
		name: 'prepay event log cleared',
		server: false,
		attributeId: 1030,
		type: 'BITMAP8',
		writable: false,
		mandatory: false
	}, {

		label: 2451,
		nameFun: 'SupplyOn',
		nameObj: 'supplyOn',
		clusterId: 1800,
		name: 'supply on',
		server: false,
		attributeId: 1040,
		type: 'BITMAP8',
		writable: false,
		mandatory: false
	}, {

		label: 2452,
		nameFun: 'SupplyArmed',
		nameObj: 'supplyArmed',
		clusterId: 1800,
		name: 'supply armed',
		server: false,
		attributeId: 1041,
		type: 'BITMAP8',
		writable: false,
		mandatory: false
	}, {

		label: 2453,
		nameFun: 'SupplyOff',
		nameObj: 'supplyOff',
		clusterId: 1800,
		name: 'supply off',
		server: false,
		attributeId: 1042,
		type: 'BITMAP8',
		writable: false,
		mandatory: false
	}, {

		label: 2454,
		nameFun: 'DisconnectionFailure',
		nameObj: 'disconnectionFailure',
		clusterId: 1800,
		name: 'disconnection failure',
		server: false,
		attributeId: 1043,
		type: 'BITMAP8',
		writable: false,
		mandatory: false
	}, {

		label: 2455,
		nameFun: 'DisconnectionDueToTamper',
		nameObj: 'disconnectionDueToTamper',
		clusterId: 1800,
		name: 'disconnection due to tamper',
		server: false,
		attributeId: 1044,
		type: 'BITMAP8',
		writable: false,
		mandatory: false
	}, {

		label: 2456,
		nameFun: 'DisconnectionDueToCutOffValve',
		nameObj: 'disconnectionDueToCutOffValve',
		clusterId: 1800,
		name: 'disconnection due to cut off valve',
		server: false,
		attributeId: 1045,
		type: 'BITMAP8',
		writable: false,
		mandatory: false
	}, {

		label: 2457,
		nameFun: 'RemoteDisconnected',
		nameObj: 'remoteDisconnected',
		clusterId: 1800,
		name: 'remote disconnected',
		server: false,
		attributeId: 1046,
		type: 'BITMAP8',
		writable: false,
		mandatory: false
	}, {

		label: 2458,
		nameFun: 'PhysicalAttackOnThePrepayMeter',
		nameObj: 'physicalAttackOnThePrepayMeter',
		clusterId: 1800,
		name: 'physical attack on the prepay meter',
		server: false,
		attributeId: 1056,
		type: 'BITMAP8',
		writable: false,
		mandatory: false
	}, {

		label: 2459,
		nameFun: 'ElectronicAttackOnThePrepayMeter',
		nameObj: 'electronicAttackOnThePrepayMeter',
		clusterId: 1800,
		name: 'electronic attack on the prepay meter',
		server: false,
		attributeId: 1057,
		type: 'BITMAP8',
		writable: false,
		mandatory: false
	}, {

		label: 2460,
		nameFun: 'DiscountApplied',
		nameObj: 'discountApplied',
		clusterId: 1800,
		name: 'discount applied',
		server: false,
		attributeId: 1058,
		type: 'BITMAP8',
		writable: false,
		mandatory: false
	}, {

		label: 2461,
		nameFun: 'CreditAdjustment',
		nameObj: 'creditAdjustment',
		clusterId: 1800,
		name: 'credit adjustment',
		server: false,
		attributeId: 1059,
		type: 'BITMAP8',
		writable: false,
		mandatory: false
	}, {

		label: 2462,
		nameFun: 'CreditAdjustFail',
		nameObj: 'creditAdjustFail',
		clusterId: 1800,
		name: 'credit adjust fail',
		server: false,
		attributeId: 1060,
		type: 'BITMAP8',
		writable: false,
		mandatory: false
	}, {

		label: 2463,
		nameFun: 'DebtAdjustment',
		nameObj: 'debtAdjustment',
		clusterId: 1800,
		name: 'debt adjustment',
		server: false,
		attributeId: 1061,
		type: 'BITMAP8',
		writable: false,
		mandatory: false
	}, {

		label: 2464,
		nameFun: 'DebtAdjustFail',
		nameObj: 'debtAdjustFail',
		clusterId: 1800,
		name: 'debt adjust fail',
		server: false,
		attributeId: 1062,
		type: 'BITMAP8',
		writable: false,
		mandatory: false
	}, {

		label: 2465,
		nameFun: 'ModeChange',
		nameObj: 'modeChange',
		clusterId: 1800,
		name: 'mode change',
		server: false,
		attributeId: 1063,
		type: 'BITMAP8',
		writable: false,
		mandatory: false
	}, {

		label: 2466,
		nameFun: 'TopupCodeError',
		nameObj: 'topupCodeError',
		clusterId: 1800,
		name: 'topup code error',
		server: false,
		attributeId: 1064,
		type: 'BITMAP8',
		writable: false,
		mandatory: false
	}, {

		label: 2467,
		nameFun: 'TopupAlreadyUsed',
		nameObj: 'topupAlreadyUsed',
		clusterId: 1800,
		name: 'topup already used',
		server: false,
		attributeId: 1065,
		type: 'BITMAP8',
		writable: false,
		mandatory: false
	}, {

		label: 2468,
		nameFun: 'TopupCodeInvalid',
		nameObj: 'topupCodeInvalid',
		clusterId: 1800,
		name: 'topup code invalid',
		server: false,
		attributeId: 1066,
		type: 'BITMAP8',
		writable: false,
		mandatory: false
	}, {

		label: 2469,
		nameFun: 'FriendlyCreditInUse',
		nameObj: 'friendlyCreditInUse',
		clusterId: 1800,
		name: 'friendly credit in use',
		server: false,
		attributeId: 1067,
		type: 'BITMAP8',
		writable: false,
		mandatory: false
	}, {

		label: 2470,
		nameFun: 'FriendlyCreditEndWarning',
		nameObj: 'friendlyCreditEndWarning',
		clusterId: 1800,
		name: 'friendly credit end warning',
		server: false,
		attributeId: 1068,
		type: 'BITMAP8',
		writable: false,
		mandatory: false
	}, {

		label: 2471,
		nameFun: 'FriendlyCreditPeriodEnd',
		nameObj: 'friendlyCreditPeriodEnd',
		clusterId: 1800,
		name: 'friendly credit period end',
		server: false,
		attributeId: 1069,
		type: 'BITMAP8',
		writable: false,
		mandatory: false
	}, {

		label: 2472,
		nameFun: 'PrepayErrorRegClear',
		nameObj: 'prepayErrorRegClear',
		clusterId: 1800,
		name: 'prepay error reg clear',
		server: false,
		attributeId: 1072,
		type: 'BITMAP8',
		writable: false,
		mandatory: false
	}, {

		label: 2473,
		nameFun: 'PrepayAlarmRegClear',
		nameObj: 'prepayAlarmRegClear',
		clusterId: 1800,
		name: 'prepay alarm reg clear',
		server: false,
		attributeId: 1073,
		type: 'BITMAP8',
		writable: false,
		mandatory: false
	}, {

		label: 2474,
		nameFun: 'PrepayClusterNotFound',
		nameObj: 'prepayClusterNotFound',
		clusterId: 1800,
		name: 'prepay cluster not found',
		server: false,
		attributeId: 1074,
		type: 'BITMAP8',
		writable: false,
		mandatory: false
	}, {

		label: 2475,
		nameFun: 'ModeCredit2Prepay',
		nameObj: 'modeCredit2Prepay',
		clusterId: 1800,
		name: 'mode credit 2 prepay',
		server: false,
		attributeId: 1088,
		type: 'BITMAP8',
		writable: false,
		mandatory: false
	}, {

		label: 2476,
		nameFun: 'ModePrepay2Credit',
		nameObj: 'modePrepay2Credit',
		clusterId: 1800,
		name: 'mode prepay 2 credit',
		server: false,
		attributeId: 1089,
		type: 'BITMAP8',
		writable: false,
		mandatory: false
	}, {

		label: 2477,
		nameFun: 'ModeDefault',
		nameObj: 'modeDefault',
		clusterId: 1800,
		name: 'mode default',
		server: false,
		attributeId: 1090,
		type: 'BITMAP8',
		writable: false,
		mandatory: false
	}, {

		label: 2478,
		nameFun: 'ChangeDebtReceived',
		nameObj: 'changeDebtReceived',
		clusterId: 1800,
		name: 'change debt received',
		server: false,
		attributeId: 1216,
		type: 'BITMAP8',
		writable: false,
		mandatory: false
	}, {

		label: 2479,
		nameFun: 'ChangeDebtActioned',
		nameObj: 'changeDebtActioned',
		clusterId: 1800,
		name: 'change debt actioned',
		server: false,
		attributeId: 1217,
		type: 'BITMAP8',
		writable: false,
		mandatory: false
	}, {

		label: 2480,
		nameFun: 'ChangeDebtCancelled',
		nameObj: 'changeDebtCancelled',
		clusterId: 1800,
		name: 'change debt cancelled',
		server: false,
		attributeId: 1218,
		type: 'BITMAP8',
		writable: false,
		mandatory: false
	}, {

		label: 2481,
		nameFun: 'ChangeDebtRejected',
		nameObj: 'changeDebtRejected',
		clusterId: 1800,
		name: 'change debt rejected',
		server: false,
		attributeId: 1219,
		type: 'BITMAP8',
		writable: false,
		mandatory: false
	}, {

		label: 2482,
		nameFun: 'EmergencyCreditSetupReceived',
		nameObj: 'emergencyCreditSetupReceived',
		clusterId: 1800,
		name: 'emergency credit setup received',
		server: false,
		attributeId: 1220,
		type: 'BITMAP8',
		writable: false,
		mandatory: false
	}, {

		label: 2483,
		nameFun: 'EmergencyCreditSetupActioned',
		nameObj: 'emergencyCreditSetupActioned',
		clusterId: 1800,
		name: 'emergency credit setup actioned',
		server: false,
		attributeId: 1221,
		type: 'BITMAP8',
		writable: false,
		mandatory: false
	}, {

		label: 2484,
		nameFun: 'EmergencyCreditSetupCancelled',
		nameObj: 'emergencyCreditSetupCancelled',
		clusterId: 1800,
		name: 'emergency credit setup cancelled',
		server: false,
		attributeId: 1222,
		type: 'BITMAP8',
		writable: false,
		mandatory: false
	}, {

		label: 2485,
		nameFun: 'EmergencyCreditSetupRejected',
		nameObj: 'emergencyCreditSetupRejected',
		clusterId: 1800,
		name: 'emergency credit setup rejected',
		server: false,
		attributeId: 1223,
		type: 'BITMAP8',
		writable: false,
		mandatory: false
	}, {

		label: 2486,
		nameFun: 'CreditAdjustmentReceived',
		nameObj: 'creditAdjustmentReceived',
		clusterId: 1800,
		name: 'credit adjustment received',
		server: false,
		attributeId: 1225,
		type: 'BITMAP8',
		writable: false,
		mandatory: false
	}, {

		label: 2487,
		nameFun: 'CreditAdjustmentActioned',
		nameObj: 'creditAdjustmentActioned',
		clusterId: 1800,
		name: 'credit adjustment actioned',
		server: false,
		attributeId: 1226,
		type: 'BITMAP8',
		writable: false,
		mandatory: false
	}, {

		label: 2488,
		nameFun: 'CreditAdjustmentCancelled',
		nameObj: 'creditAdjustmentCancelled',
		clusterId: 1800,
		name: 'credit adjustment cancelled',
		server: false,
		attributeId: 1227,
		type: 'BITMAP8',
		writable: false,
		mandatory: false
	}, {

		label: 2489,
		nameFun: 'CreditAdjustmentRejected',
		nameObj: 'creditAdjustmentRejected',
		clusterId: 1800,
		name: 'credit adjustment rejected',
		server: false,
		attributeId: 1228,
		type: 'BITMAP8',
		writable: false,
		mandatory: false
	}, {

		label: 2490,
		nameFun: 'ChangePaymentModeReceived',
		nameObj: 'changePaymentModeReceived',
		clusterId: 1800,
		name: 'change payment mode received',
		server: false,
		attributeId: 1229,
		type: 'BITMAP8',
		writable: false,
		mandatory: false
	}, {

		label: 2491,
		nameFun: 'ChangePaymentModeActioned',
		nameObj: 'changePaymentModeActioned',
		clusterId: 1800,
		name: 'change payment mode actioned',
		server: false,
		attributeId: 1230,
		type: 'BITMAP8',
		writable: false,
		mandatory: false
	}, {

		label: 2492,
		nameFun: 'ChangePaymentModeCancelled',
		nameObj: 'changePaymentModeCancelled',
		clusterId: 1800,
		name: 'change payment mode cancelled',
		server: false,
		attributeId: 1231,
		type: 'BITMAP8',
		writable: false,
		mandatory: false
	}, {

		label: 2493,
		nameFun: 'ChangePaymentModeRejected',
		nameObj: 'changePaymentModeRejected',
		clusterId: 1800,
		name: 'change payment mode rejected',
		server: false,
		attributeId: 1233,
		type: 'BITMAP8',
		writable: false,
		mandatory: false
	}, {

		label: 2494,
		nameFun: 'SetLowCreditWarningLevelReceived',
		nameObj: 'setLowCreditWarningLevelReceived',
		clusterId: 1800,
		name: 'set low credit warning level received',
		server: false,
		attributeId: 1234,
		type: 'BITMAP8',
		writable: false,
		mandatory: false
	}, {

		label: 2495,
		nameFun: 'SetLowCreditWarningLevelActioned',
		nameObj: 'setLowCreditWarningLevelActioned',
		clusterId: 1800,
		name: 'set low credit warning level actioned',
		server: false,
		attributeId: 1235,
		type: 'BITMAP8',
		writable: false,
		mandatory: false
	}, {

		label: 2496,
		nameFun: 'SetLowCreditWarningLevelCancelled',
		nameObj: 'setLowCreditWarningLevelCancelled',
		clusterId: 1800,
		name: 'set low credit warning level cancelled',
		server: false,
		attributeId: 1236,
		type: 'BITMAP8',
		writable: false,
		mandatory: false
	}, {

		label: 2497,
		nameFun: 'SetLowCreditWarningLevelRejected',
		nameObj: 'setLowCreditWarningLevelRejected',
		clusterId: 1800,
		name: 'set low credit warning level rejected',
		server: false,
		attributeId: 1237,
		type: 'BITMAP8',
		writable: false,
		mandatory: false
	}, {

		label: 2498,
		nameFun: 'TopupReceived',
		nameObj: 'topupReceived',
		clusterId: 1800,
		name: 'topup received',
		server: false,
		attributeId: 1239,
		type: 'BITMAP8',
		writable: false,
		mandatory: false
	}, {

		label: 2499,
		nameFun: 'TopupActioned',
		nameObj: 'topupActioned',
		clusterId: 1800,
		name: 'topup actioned',
		server: false,
		attributeId: 1240,
		type: 'BITMAP8',
		writable: false,
		mandatory: false
	}, {

		label: 2500,
		nameFun: 'TopupCancelled',
		nameObj: 'topupCancelled',
		clusterId: 1800,
		name: 'topup cancelled',
		server: false,
		attributeId: 1241,
		type: 'BITMAP8',
		writable: false,
		mandatory: false
	}, {

		label: 2501,
		nameFun: 'TopupRejected',
		nameObj: 'topupRejected',
		clusterId: 1800,
		name: 'topup rejected',
		server: false,
		attributeId: 1242,
		type: 'BITMAP8',
		writable: false,
		mandatory: false
	}, {

		label: 2502,
		nameFun: 'CalendarEventLogCleared',
		nameObj: 'calendarEventLogCleared',
		clusterId: 1800,
		name: 'calendar event log cleared',
		server: false,
		attributeId: 1280,
		type: 'BITMAP8',
		writable: false,
		mandatory: false
	}, {

		label: 2503,
		nameFun: 'CalendarClusterNotFound',
		nameObj: 'calendarClusterNotFound',
		clusterId: 1800,
		name: 'calendar cluster not found',
		server: false,
		attributeId: 1281,
		type: 'BITMAP8',
		writable: false,
		mandatory: false
	}, {

		label: 2504,
		nameFun: 'PublishCalendarReceived',
		nameObj: 'publishCalendarReceived',
		clusterId: 1800,
		name: 'publish calendar received',
		server: false,
		attributeId: 1472,
		type: 'BITMAP8',
		writable: false,
		mandatory: false
	}, {

		label: 2505,
		nameFun: 'PublishCalendarActioned',
		nameObj: 'publishCalendarActioned',
		clusterId: 1800,
		name: 'publish calendar actioned',
		server: false,
		attributeId: 1473,
		type: 'BITMAP8',
		writable: false,
		mandatory: false
	}, {

		label: 2506,
		nameFun: 'PublishCalendarCancelled',
		nameObj: 'publishCalendarCancelled',
		clusterId: 1800,
		name: 'publish calendar cancelled',
		server: false,
		attributeId: 1474,
		type: 'BITMAP8',
		writable: false,
		mandatory: false
	}, {

		label: 2507,
		nameFun: 'PublishCalendarRejected',
		nameObj: 'publishCalendarRejected',
		clusterId: 1800,
		name: 'publish calendar rejected',
		server: false,
		attributeId: 1475,
		type: 'BITMAP8',
		writable: false,
		mandatory: false
	}, {

		label: 2508,
		nameFun: 'PublishDayProfileReceived',
		nameObj: 'publishDayProfileReceived',
		clusterId: 1800,
		name: 'publish day profile received',
		server: false,
		attributeId: 1478,
		type: 'BITMAP8',
		writable: false,
		mandatory: false
	}, {

		label: 2509,
		nameFun: 'PublishDayProfileActioned',
		nameObj: 'publishDayProfileActioned',
		clusterId: 1800,
		name: 'publish day profile actioned',
		server: false,
		attributeId: 1479,
		type: 'BITMAP8',
		writable: false,
		mandatory: false
	}, {

		label: 2510,
		nameFun: 'PublishDayProfileCancelled',
		nameObj: 'publishDayProfileCancelled',
		clusterId: 1800,
		name: 'publish day profile cancelled',
		server: false,
		attributeId: 1480,
		type: 'BITMAP8',
		writable: false,
		mandatory: false
	}, {

		label: 2511,
		nameFun: 'PublishDayProfileRejected',
		nameObj: 'publishDayProfileRejected',
		clusterId: 1800,
		name: 'publish day profile rejected',
		server: false,
		attributeId: 1481,
		type: 'BITMAP8',
		writable: false,
		mandatory: false
	}, {

		label: 2512,
		nameFun: 'PublishWeekProfileReceived',
		nameObj: 'publishWeekProfileReceived',
		clusterId: 1800,
		name: 'publish week profile received',
		server: false,
		attributeId: 1484,
		type: 'BITMAP8',
		writable: false,
		mandatory: false
	}, {

		label: 2513,
		nameFun: 'PublishWeekProfileActioned',
		nameObj: 'publishWeekProfileActioned',
		clusterId: 1800,
		name: 'publish week profile actioned',
		server: false,
		attributeId: 1485,
		type: 'BITMAP8',
		writable: false,
		mandatory: false
	}, {

		label: 2514,
		nameFun: 'PublishWeekProfileCancelled',
		nameObj: 'publishWeekProfileCancelled',
		clusterId: 1800,
		name: 'publish week profile cancelled',
		server: false,
		attributeId: 1486,
		type: 'BITMAP8',
		writable: false,
		mandatory: false
	}, {

		label: 2515,
		nameFun: 'PublishWeekProfileRejected',
		nameObj: 'publishWeekProfileRejected',
		clusterId: 1800,
		name: 'publish week profile rejected',
		server: false,
		attributeId: 1487,
		type: 'BITMAP8',
		writable: false,
		mandatory: false
	}, {

		label: 2516,
		nameFun: 'PublishSeasonsReceived',
		nameObj: 'publishSeasonsReceived',
		clusterId: 1800,
		name: 'publish seasons received',
		server: false,
		attributeId: 1490,
		type: 'BITMAP8',
		writable: false,
		mandatory: false
	}, {

		label: 2517,
		nameFun: 'PublishSeasonsActioned',
		nameObj: 'publishSeasonsActioned',
		clusterId: 1800,
		name: 'publish seasons actioned',
		server: false,
		attributeId: 1491,
		type: 'BITMAP8',
		writable: false,
		mandatory: false
	}, {

		label: 2518,
		nameFun: 'PublishSeasonsCancelled',
		nameObj: 'publishSeasonsCancelled',
		clusterId: 1800,
		name: 'publish seasons cancelled',
		server: false,
		attributeId: 1492,
		type: 'BITMAP8',
		writable: false,
		mandatory: false
	}, {

		label: 2519,
		nameFun: 'PublishSeasonsRejected',
		nameObj: 'publishSeasonsRejected',
		clusterId: 1800,
		name: 'publish seasons rejected',
		server: false,
		attributeId: 1493,
		type: 'BITMAP8',
		writable: false,
		mandatory: false
	}, {

		label: 2520,
		nameFun: 'PublishSpecialDaysReceived',
		nameObj: 'publishSpecialDaysReceived',
		clusterId: 1800,
		name: 'publish special days received',
		server: false,
		attributeId: 1494,
		type: 'BITMAP8',
		writable: false,
		mandatory: false
	}, {

		label: 2521,
		nameFun: 'PublishSpecialDaysActioned',
		nameObj: 'publishSpecialDaysActioned',
		clusterId: 1800,
		name: 'publish special days actioned',
		server: false,
		attributeId: 1495,
		type: 'BITMAP8',
		writable: false,
		mandatory: false
	}, {

		label: 2522,
		nameFun: 'PublishSpecialDaysCancelled',
		nameObj: 'publishSpecialDaysCancelled',
		clusterId: 1800,
		name: 'publish special days cancelled',
		server: false,
		attributeId: 1496,
		type: 'BITMAP8',
		writable: false,
		mandatory: false
	}, {

		label: 2523,
		nameFun: 'PublishSpecialDaysRejected',
		nameObj: 'publishSpecialDaysRejected',
		clusterId: 1800,
		name: 'publish special days rejected',
		server: false,
		attributeId: 1497,
		type: 'BITMAP8',
		writable: false,
		mandatory: false
	}, {

		label: 2524,
		nameFun: 'Password1Change',
		nameObj: 'password1Change',
		clusterId: 1800,
		name: 'password 1 change',
		server: false,
		attributeId: 1536,
		type: 'BITMAP8',
		writable: false,
		mandatory: false
	}, {

		label: 2525,
		nameFun: 'Password2Change',
		nameObj: 'password2Change',
		clusterId: 1800,
		name: 'password 2 change',
		server: false,
		attributeId: 1537,
		type: 'BITMAP8',
		writable: false,
		mandatory: false
	}, {

		label: 2526,
		nameFun: 'Password3Change',
		nameObj: 'password3Change',
		clusterId: 1800,
		name: 'password 3 change',
		server: false,
		attributeId: 1538,
		type: 'BITMAP8',
		writable: false,
		mandatory: false
	}, {

		label: 2527,
		nameFun: 'Password4Change',
		nameObj: 'password4Change',
		clusterId: 1800,
		name: 'password 4 change',
		server: false,
		attributeId: 1539,
		type: 'BITMAP8',
		writable: false,
		mandatory: false
	}, {

		label: 2528,
		nameFun: 'Password4Change',
		nameObj: 'password4Change',
		clusterId: 1800,
		name: 'password 4 change',
		server: false,
		attributeId: 1540,
		type: 'BITMAP8',
		writable: false,
		mandatory: false
	}, {

		label: 2529,
		nameFun: 'DeviceManagementSupplyOn',
		nameObj: 'deviceManagementSupplyOn',
		clusterId: 1800,
		name: 'device management supply on',
		server: false,
		attributeId: 1552,
		type: 'BITMAP8',
		writable: false,
		mandatory: false
	}, {

		label: 2530,
		nameFun: 'DeviceManagementSupplyArmed',
		nameObj: 'deviceManagementSupplyArmed',
		clusterId: 1800,
		name: 'device management supply armed',
		server: false,
		attributeId: 1553,
		type: 'BITMAP8',
		writable: false,
		mandatory: false
	}, {

		label: 2531,
		nameFun: 'DeviceManagementSupplyOff',
		nameObj: 'deviceManagementSupplyOff',
		clusterId: 1800,
		name: 'device management supply off',
		server: false,
		attributeId: 1554,
		type: 'BITMAP8',
		writable: false,
		mandatory: false
	}, {

		label: 2532,
		nameFun: 'DeviceManagementDisconnectionDueToTamper',
		nameObj: 'deviceManagementDisconnectionDueToTamper',
		clusterId: 1800,
		name: 'device management disconnection due to tamper',
		server: false,
		attributeId: 1555,
		type: 'BITMAP8',
		writable: false,
		mandatory: false
	}, {

		label: 2533,
		nameFun: 'ManualDisconnect',
		nameObj: 'manualDisconnect',
		clusterId: 1800,
		name: 'manual disconnect',
		server: false,
		attributeId: 1556,
		type: 'BITMAP8',
		writable: false,
		mandatory: false
	}, {

		label: 2534,
		nameFun: 'ManualConnect',
		nameObj: 'manualConnect',
		clusterId: 1800,
		name: 'manual connect',
		server: false,
		attributeId: 1557,
		type: 'BITMAP8',
		writable: false,
		mandatory: false
	}, {

		label: 2535,
		nameFun: 'DeviceManagementRemoteDisconnection',
		nameObj: 'deviceManagementRemoteDisconnection',
		clusterId: 1800,
		name: 'device management remote disconnection',
		server: false,
		attributeId: 1558,
		type: 'BITMAP8',
		writable: false,
		mandatory: false
	}, {

		label: 2536,
		nameFun: 'RemoteConnect',
		nameObj: 'remoteConnect',
		clusterId: 1800,
		name: 'remote connect',
		server: false,
		attributeId: 1559,
		type: 'BITMAP8',
		writable: false,
		mandatory: false
	}, {

		label: 2537,
		nameFun: 'LocalDisconnect',
		nameObj: 'localDisconnect',
		clusterId: 1800,
		name: 'local disconnect',
		server: false,
		attributeId: 1560,
		type: 'BITMAP8',
		writable: false,
		mandatory: false
	}, {

		label: 2538,
		nameFun: 'LocalConnect',
		nameObj: 'localConnect',
		clusterId: 1800,
		name: 'local connect',
		server: false,
		attributeId: 1561,
		type: 'BITMAP8',
		writable: false,
		mandatory: false
	}, {

		label: 2539,
		nameFun: 'PublishCotReceived',
		nameObj: 'publishCotReceived',
		clusterId: 1800,
		name: 'publish cot received',
		server: false,
		attributeId: 1728,
		type: 'BITMAP8',
		writable: false,
		mandatory: false
	}, {

		label: 2540,
		nameFun: 'PublishCotActioned',
		nameObj: 'publishCotActioned',
		clusterId: 1800,
		name: 'publish cot actioned',
		server: false,
		attributeId: 1729,
		type: 'BITMAP8',
		writable: false,
		mandatory: false
	}, {

		label: 2541,
		nameFun: 'PublishCotCancelled',
		nameObj: 'publishCotCancelled',
		clusterId: 1800,
		name: 'publish cot cancelled',
		server: false,
		attributeId: 1730,
		type: 'BITMAP8',
		writable: false,
		mandatory: false
	}, {

		label: 2542,
		nameFun: 'PublishCotRejected',
		nameObj: 'publishCotRejected',
		clusterId: 1800,
		name: 'publish cot rejected',
		server: false,
		attributeId: 1731,
		type: 'BITMAP8',
		writable: false,
		mandatory: false
	}, {

		label: 2543,
		nameFun: 'PublishCosReceived',
		nameObj: 'publishCosReceived',
		clusterId: 1800,
		name: 'publish cos received',
		server: false,
		attributeId: 1732,
		type: 'BITMAP8',
		writable: false,
		mandatory: false
	}, {

		label: 2544,
		nameFun: 'PublishCosActioned',
		nameObj: 'publishCosActioned',
		clusterId: 1800,
		name: 'publish cos actioned',
		server: false,
		attributeId: 1733,
		type: 'BITMAP8',
		writable: false,
		mandatory: false
	}, {

		label: 2545,
		nameFun: 'PublishCosCancelled',
		nameObj: 'publishCosCancelled',
		clusterId: 1800,
		name: 'publish cos cancelled',
		server: false,
		attributeId: 1734,
		type: 'BITMAP8',
		writable: false,
		mandatory: false
	}, {

		label: 2546,
		nameFun: 'PublishCosRejected',
		nameObj: 'publishCosRejected',
		clusterId: 1800,
		name: 'publish cos rejected',
		server: false,
		attributeId: 1735,
		type: 'BITMAP8',
		writable: false,
		mandatory: false
	}, {

		label: 2547,
		nameFun: 'ChangeSupplyReceived',
		nameObj: 'changeSupplyReceived',
		clusterId: 1800,
		name: 'change supply received',
		server: false,
		attributeId: 1736,
		type: 'BITMAP8',
		writable: false,
		mandatory: false
	}, {

		label: 2548,
		nameFun: 'ChangeSupplyActioned',
		nameObj: 'changeSupplyActioned',
		clusterId: 1800,
		name: 'change supply actioned',
		server: false,
		attributeId: 1737,
		type: 'BITMAP8',
		writable: false,
		mandatory: false
	}, {

		label: 2549,
		nameFun: 'ChangeSupplyCancelled',
		nameObj: 'changeSupplyCancelled',
		clusterId: 1800,
		name: 'change supply cancelled',
		server: false,
		attributeId: 1738,
		type: 'BITMAP8',
		writable: false,
		mandatory: false
	}, {

		label: 2550,
		nameFun: 'ChangeSupplyRejected',
		nameObj: 'changeSupplyRejected',
		clusterId: 1800,
		name: 'change supply rejected',
		server: false,
		attributeId: 1739,
		type: 'BITMAP8',
		writable: false,
		mandatory: false
	}, {

		label: 2551,
		nameFun: 'ChangePasswordReceived',
		nameObj: 'changePasswordReceived',
		clusterId: 1800,
		name: 'change password received',
		server: false,
		attributeId: 1740,
		type: 'BITMAP8',
		writable: false,
		mandatory: false
	}, {

		label: 2552,
		nameFun: 'ChangePasswordActioned',
		nameObj: 'changePasswordActioned',
		clusterId: 1800,
		name: 'change password actioned',
		server: false,
		attributeId: 1741,
		type: 'BITMAP8',
		writable: false,
		mandatory: false
	}, {

		label: 2553,
		nameFun: 'ChangePasswordCancelled',
		nameObj: 'changePasswordCancelled',
		clusterId: 1800,
		name: 'change password cancelled',
		server: false,
		attributeId: 1742,
		type: 'BITMAP8',
		writable: false,
		mandatory: false
	}, {

		label: 2554,
		nameFun: 'ChangePasswordRejected',
		nameObj: 'changePasswordRejected',
		clusterId: 1800,
		name: 'change password rejected',
		server: false,
		attributeId: 1743,
		type: 'BITMAP8',
		writable: false,
		mandatory: false
	}, {

		label: 2555,
		nameFun: 'LocalChangeSupplyReceived',
		nameObj: 'localChangeSupplyReceived',
		clusterId: 1800,
		name: 'local change supply received',
		server: false,
		attributeId: 1744,
		type: 'BITMAP8',
		writable: false,
		mandatory: false
	}, {

		label: 2556,
		nameFun: 'LocalChangeSupplyActioned',
		nameObj: 'localChangeSupplyActioned',
		clusterId: 1800,
		name: 'local change supply actioned',
		server: false,
		attributeId: 1745,
		type: 'BITMAP8',
		writable: false,
		mandatory: false
	}, {

		label: 2557,
		nameFun: 'LocalChangeSupplyCancelled',
		nameObj: 'localChangeSupplyCancelled',
		clusterId: 1800,
		name: 'local change supply cancelled',
		server: false,
		attributeId: 1746,
		type: 'BITMAP8',
		writable: false,
		mandatory: false
	}, {

		label: 2558,
		nameFun: 'LocalChangeSupplyRejected',
		nameObj: 'localChangeSupplyRejected',
		clusterId: 1800,
		name: 'local change supply rejected',
		server: false,
		attributeId: 1747,
		type: 'BITMAP8',
		writable: false,
		mandatory: false
	}, {

		label: 2559,
		nameFun: 'SetEventConfigurationReceived',
		nameObj: 'setEventConfigurationReceived',
		clusterId: 1800,
		name: 'set event configuration received',
		server: false,
		attributeId: 1748,
		type: 'BITMAP8',
		writable: false,
		mandatory: false
	}, {

		label: 2560,
		nameFun: 'SetEventConfigurationActioned',
		nameObj: 'setEventConfigurationActioned',
		clusterId: 1800,
		name: 'set event configuration actioned',
		server: false,
		attributeId: 1749,
		type: 'BITMAP8',
		writable: false,
		mandatory: false
	}, {

		label: 2561,
		nameFun: 'SetEventConfigurationCancelled',
		nameObj: 'setEventConfigurationCancelled',
		clusterId: 1800,
		name: 'set event configuration cancelled',
		server: false,
		attributeId: 1750,
		type: 'BITMAP8',
		writable: false,
		mandatory: false
	}, {

		label: 2562,
		nameFun: 'SetEventConfigurationRejected',
		nameObj: 'setEventConfigurationRejected',
		clusterId: 1800,
		name: 'set event configuration rejected',
		server: false,
		attributeId: 1751,
		type: 'BITMAP8',
		writable: false,
		mandatory: false
	}, {

		label: 2563,
		nameFun: 'TunnelingClusterNotFound',
		nameObj: 'tunnelingClusterNotFound',
		clusterId: 1800,
		name: 'tunneling cluster not found',
		server: false,
		attributeId: 1792,
		type: 'BITMAP8',
		writable: false,
		mandatory: false
	}, {

		label: 2564,
		nameFun: 'UnsupportedProtocol',
		nameObj: 'unsupportedProtocol',
		clusterId: 1800,
		name: 'unsupported protocol',
		server: false,
		attributeId: 1793,
		type: 'BITMAP8',
		writable: false,
		mandatory: false
	}, {

		label: 2565,
		nameFun: 'UnsupportedProtocol',
		nameObj: 'unsupportedProtocol',
		clusterId: 1800,
		name: 'unsupported protocol',
		server: false,
		attributeId: 1794,
		type: 'BITMAP8',
		writable: false,
		mandatory: false
	}, {

		label: 2566,
		nameFun: 'TunnelingEventLogCleared',
		nameObj: 'tunnelingEventLogCleared',
		clusterId: 1800,
		name: 'tunneling event log cleared',
		server: false,
		attributeId: 1795,
		type: 'BITMAP8',
		writable: false,
		mandatory: false
	}, {

		label: 2567,
		nameFun: 'FirmwareReadyForActivation',
		nameObj: 'firmwareReadyForActivation',
		clusterId: 1800,
		name: 'firmware ready for activation',
		server: false,
		attributeId: 2048,
		type: 'BITMAP8',
		writable: false,
		mandatory: false
	}, {

		label: 2568,
		nameFun: 'FirmwareActivated',
		nameObj: 'firmwareActivated',
		clusterId: 1800,
		name: 'firmware activated',
		server: false,
		attributeId: 2049,
		type: 'BITMAP8',
		writable: false,
		mandatory: false
	}, {

		label: 2569,
		nameFun: 'FirmwareActivationFailure',
		nameObj: 'firmwareActivationFailure',
		clusterId: 1800,
		name: 'firmware activation failure',
		server: false,
		attributeId: 2050,
		type: 'BITMAP8',
		writable: false,
		mandatory: false
	}, {

		label: 2570,
		nameFun: 'PatchReadyForActivation',
		nameObj: 'patchReadyForActivation',
		clusterId: 1800,
		name: 'patch ready for activation',
		server: false,
		attributeId: 2051,
		type: 'BITMAP8',
		writable: false,
		mandatory: false
	}, {

		label: 2571,
		nameFun: 'PatchActivated',
		nameObj: 'patchActivated',
		clusterId: 1800,
		name: 'patch activated',
		server: false,
		attributeId: 2052,
		type: 'BITMAP8',
		writable: false,
		mandatory: false
	}, {

		label: 2572,
		nameFun: 'PatchFailure',
		nameObj: 'patchFailure',
		clusterId: 1800,
		name: 'patch failure',
		server: false,
		attributeId: 2053,
		type: 'BITMAP8',
		writable: false,
		mandatory: false
	}, {

		label: 2573,
		nameFun: 'OtaEventLogCleared',
		nameObj: 'otaEventLogCleared',
		clusterId: 1800,
		name: 'ota event log cleared',
		server: false,
		attributeId: 2054,
		type: 'BITMAP8',
		writable: false,
		mandatory: false
	}, {

		label: 2574,
		nameFun: 'OtaReceived',
		nameObj: 'otaReceived',
		clusterId: 1800,
		name: 'ota received',
		server: false,
		attributeId: 2240,
		type: 'BITMAP8',
		writable: false,
		mandatory: false
	}, {

		label: 2575,
		nameFun: 'OtaActioned',
		nameObj: 'otaActioned',
		clusterId: 1800,
		name: 'ota actioned',
		server: false,
		attributeId: 2241,
		type: 'BITMAP8',
		writable: false,
		mandatory: false
	}, {

		label: 2576,
		nameFun: 'OtaCancelled',
		nameObj: 'otaCancelled',
		clusterId: 1800,
		name: 'ota cancelled',
		server: false,
		attributeId: 2242,
		type: 'BITMAP8',
		writable: false,
		mandatory: false
	}, {

		label: 2577,
		nameFun: 'OtaRejected',
		nameObj: 'otaRejected',
		clusterId: 1800,
		name: 'ota rejected',
		server: false,
		attributeId: 2243,
		type: 'BITMAP8',
		writable: false,
		mandatory: false
	}];

	/**
	 * {Object} commands object.
	 *
	 * @description This variable contains all command documentation information as an array.
	 */
	var commands = [{

		label: 0,
		nameFun: 'ResetToFactoryDefault',
		nameObj: 'resetToFactoryDefault',
		commandClusterId: 0,
		server: false,
		commandId: 0,
		name: 'Reset to Factory Default',
		mandatory: false,
		arg: []
	}, {

		label: 1,
		nameFun: 'Identify',
		nameObj: 'identify',
		commandClusterId: 3,
		server: false,
		commandId: 0,
		name: 'Identify',
		mandatory: true,
		arg: [{

			label: 0,
			name: 'identifyTime',
			type: 'INT16U',
			array: false,
			arg: []
		}]
	}, {

		label: 2,
		nameFun: 'IdentifyQuery',
		nameObj: 'identifyQuery',
		commandClusterId: 3,
		server: false,
		commandId: 1,
		name: 'IdentifyQuery',
		mandatory: true,
		arg: []
	}, {

		label: 3,
		nameFun: 'EZModeInvoke',
		nameObj: 'eZModeInvoke',
		commandClusterId: 3,
		server: false,
		commandId: 2,
		name: 'EZModeInvoke',
		mandatory: false,
		arg: [{

			label: 0,
			name: 'action',
			type: 'BITMAP8',
			array: false,
			arg: []
		}]
	}, {

		label: 4,
		nameFun: 'UpdateCommissionState',
		nameObj: 'updateCommissionState',
		commandClusterId: 3,
		server: false,
		commandId: 3,
		name: 'UpdateCommissionState',
		mandatory: false,
		arg: [{

			label: 0,
			name: 'action',
			type: 'ENUM8',
			array: false,
			arg: []
		}, {

			label: 1,
			name: 'commissionStateMask',
			type: 'BITMAP8',
			array: false,
			arg: []
		}]
	}, {

		label: 5,
		nameFun: 'IdentifyQueryResponse',
		nameObj: 'identifyQueryResponse',
		commandClusterId: 3,
		server: true,
		commandId: 0,
		name: 'IdentifyQueryResponse',
		mandatory: true,
		arg: [{

			label: 0,
			name: 'timeout',
			type: 'INT16U',
			array: false,
			arg: []
		}]
	}, {

		label: 6,
		nameFun: 'AddGroup',
		nameObj: 'addGroup',
		commandClusterId: 4,
		server: false,
		commandId: 0,
		name: 'AddGroup',
		mandatory: true,
		arg: [{

			label: 0,
			name: 'groupId',
			type: 'INT16U',
			array: false,
			arg: []
		}, {

			label: 1,
			name: 'groupName',
			type: 'CHAR_STRING',
			array: false,
			arg: []
		}]
	}, {

		label: 7,
		nameFun: 'ViewGroup',
		nameObj: 'viewGroup',
		commandClusterId: 4,
		server: false,
		commandId: 1,
		name: 'ViewGroup',
		mandatory: true,
		arg: [{

			label: 0,
			name: 'groupId',
			type: 'INT16U',
			array: false,
			arg: []
		}]
	}, {

		label: 8,
		nameFun: 'GetGroupMembership',
		nameObj: 'getGroupMembership',
		commandClusterId: 4,
		server: false,
		commandId: 2,
		name: 'GetGroupMembership',
		mandatory: true,
		arg: [{

			label: 0,
			name: 'groupCount',
			type: 'INT8U',
			array: false,
			arg: []
		}, {

			label: 1,
			name: 'groupList',
			type: 'INT16U',
			array: true,
			arg: []
		}]
	}, {

		label: 9,
		nameFun: 'RemoveGroup',
		nameObj: 'removeGroup',
		commandClusterId: 4,
		server: false,
		commandId: 3,
		name: 'RemoveGroup',
		mandatory: true,
		arg: [{

			label: 0,
			name: 'groupId',
			type: 'INT16U',
			array: false,
			arg: []
		}]
	}, {

		label: 10,
		nameFun: 'RemoveAllGroups',
		nameObj: 'removeAllGroups',
		commandClusterId: 4,
		server: false,
		commandId: 4,
		name: 'RemoveAllGroups',
		mandatory: true,
		arg: []
	}, {

		label: 11,
		nameFun: 'AddGroupIfIdentifying',
		nameObj: 'addGroupIfIdentifying',
		commandClusterId: 4,
		server: false,
		commandId: 5,
		name: 'AddGroupIfIdentifying',
		mandatory: true,
		arg: [{

			label: 0,
			name: 'groupId',
			type: 'INT16U',
			array: false,
			arg: []
		}, {

			label: 1,
			name: 'groupName',
			type: 'CHAR_STRING',
			array: false,
			arg: []
		}]
	}, {

		label: 12,
		nameFun: 'AddGroupResponse',
		nameObj: 'addGroupResponse',
		commandClusterId: 4,
		server: true,
		commandId: 0,
		name: 'AddGroupResponse',
		mandatory: true,
		arg: [{

			label: 0,
			name: 'status',
			type: 'Status',
			array: false,
			arg: []
		}, {

			label: 1,
			name: 'groupId',
			type: 'INT16U',
			array: false,
			arg: []
		}]
	}, {

		label: 13,
		nameFun: 'ViewGroupResponse',
		nameObj: 'viewGroupResponse',
		commandClusterId: 4,
		server: true,
		commandId: 1,
		name: 'ViewGroupResponse',
		mandatory: true,
		arg: [{

			label: 0,
			name: 'status',
			type: 'Status',
			array: false,
			arg: []
		}, {

			label: 1,
			name: 'groupId',
			type: 'INT16U',
			array: false,
			arg: []
		}, {

			label: 2,
			name: 'groupName',
			type: 'CHAR_STRING',
			array: false,
			arg: []
		}]
	}, {

		label: 14,
		nameFun: 'GetGroupMembershipResponse',
		nameObj: 'getGroupMembershipResponse',
		commandClusterId: 4,
		server: true,
		commandId: 2,
		name: 'GetGroupMembershipResponse',
		mandatory: true,
		arg: [{

			label: 0,
			name: 'capacity',
			type: 'INT8U',
			array: false,
			arg: []
		}, {

			label: 1,
			name: 'groupCount',
			type: 'INT8U',
			array: false,
			arg: []
		}, {

			label: 2,
			name: 'groupList',
			type: 'INT16U',
			array: true,
			arg: []
		}]
	}, {

		label: 15,
		nameFun: 'RemoveGroupResponse',
		nameObj: 'removeGroupResponse',
		commandClusterId: 4,
		server: true,
		commandId: 3,
		name: 'RemoveGroupResponse',
		mandatory: true,
		arg: [{

			label: 0,
			name: 'status',
			type: 'Status',
			array: false,
			arg: []
		}, {

			label: 1,
			name: 'groupId',
			type: 'INT16U',
			array: false,
			arg: []
		}]
	}, {

		label: 16,
		nameFun: 'AddScene',
		nameObj: 'addScene',
		commandClusterId: 5,
		server: false,
		commandId: 0,
		name: 'AddScene',
		mandatory: true,
		arg: [{

			label: 0,
			name: 'groupId',
			type: 'INT16U',
			array: false,
			arg: []
		}, {

			label: 1,
			name: 'sceneId',
			type: 'INT8U',
			array: false,
			arg: []
		}, {

			label: 2,
			name: 'transitionTime',
			type: 'INT16U',
			array: false,
			arg: []
		}, {

			label: 3,
			name: 'sceneName',
			type: 'CHAR_STRING',
			array: false,
			arg: []
		}, {

			label: 4,
			name: 'extensionFieldSets',
			type: 'SceneExtensionFieldSet',
			array: true,
			arg: [{

				name: 'clusterId',
				type: 'CLUSTER_ID',
				label: 0
			}, {

				name: 'length',
				type: 'INT8U',
				label: 1
			}, {

				name: 'value',
				type: 'INT8U',
				label: 2
			}]
		}]
	}, {

		label: 17,
		nameFun: 'ViewScene',
		nameObj: 'viewScene',
		commandClusterId: 5,
		server: false,
		commandId: 1,
		name: 'ViewScene',
		mandatory: true,
		arg: [{

			label: 0,
			name: 'groupId',
			type: 'INT16U',
			array: false,
			arg: []
		}, {

			label: 1,
			name: 'sceneId',
			type: 'INT8U',
			array: false,
			arg: []
		}]
	}, {

		label: 18,
		nameFun: 'RemoveScene',
		nameObj: 'removeScene',
		commandClusterId: 5,
		server: false,
		commandId: 2,
		name: 'RemoveScene',
		mandatory: true,
		arg: [{

			label: 0,
			name: 'groupId',
			type: 'INT16U',
			array: false,
			arg: []
		}, {

			label: 1,
			name: 'sceneId',
			type: 'INT8U',
			array: false,
			arg: []
		}]
	}, {

		label: 19,
		nameFun: 'RemoveAllScenes',
		nameObj: 'removeAllScenes',
		commandClusterId: 5,
		server: false,
		commandId: 3,
		name: 'RemoveAllScenes',
		mandatory: true,
		arg: [{

			label: 0,
			name: 'groupId',
			type: 'INT16U',
			array: false,
			arg: []
		}]
	}, {

		label: 20,
		nameFun: 'StoreScene',
		nameObj: 'storeScene',
		commandClusterId: 5,
		server: false,
		commandId: 4,
		name: 'StoreScene',
		mandatory: true,
		arg: [{

			label: 0,
			name: 'groupId',
			type: 'INT16U',
			array: false,
			arg: []
		}, {

			label: 1,
			name: 'sceneId',
			type: 'INT8U',
			array: false,
			arg: []
		}]
	}, {

		label: 21,
		nameFun: 'RecallScene',
		nameObj: 'recallScene',
		commandClusterId: 5,
		server: false,
		commandId: 5,
		name: 'RecallScene',
		mandatory: true,
		arg: [{

			label: 0,
			name: 'groupId',
			type: 'INT16U',
			array: false,
			arg: []
		}, {

			label: 1,
			name: 'sceneId',
			type: 'INT8U',
			array: false,
			arg: []
		}]
	}, {

		label: 22,
		nameFun: 'GetSceneMembership',
		nameObj: 'getSceneMembership',
		commandClusterId: 5,
		server: false,
		commandId: 6,
		name: 'GetSceneMembership',
		mandatory: true,
		arg: [{

			label: 0,
			name: 'groupId',
			type: 'INT16U',
			array: false,
			arg: []
		}]
	}, {

		label: 23,
		nameFun: 'AddSceneResponse',
		nameObj: 'addSceneResponse',
		commandClusterId: 5,
		server: true,
		commandId: 0,
		name: 'AddSceneResponse',
		mandatory: true,
		arg: [{

			label: 0,
			name: 'status',
			type: 'Status',
			array: false,
			arg: []
		}, {

			label: 1,
			name: 'groupId',
			type: 'INT16U',
			array: false,
			arg: []
		}, {

			label: 2,
			name: 'sceneId',
			type: 'INT8U',
			array: false,
			arg: []
		}]
	}, {

		label: 24,
		nameFun: 'ViewSceneResponse',
		nameObj: 'viewSceneResponse',
		commandClusterId: 5,
		server: true,
		commandId: 1,
		name: 'ViewSceneResponse',
		mandatory: true,
		arg: [{

			label: 0,
			name: 'status',
			type: 'Status',
			array: false,
			arg: []
		}, {

			label: 1,
			name: 'groupId',
			type: 'INT16U',
			array: false,
			arg: []
		}, {

			label: 2,
			name: 'sceneId',
			type: 'INT8U',
			array: false,
			arg: []
		}, {

			label: 3,
			name: 'transitionTime',
			type: 'INT16U',
			array: false,
			arg: []
		}, {

			label: 4,
			name: 'sceneName',
			type: 'CHAR_STRING',
			array: false,
			arg: []
		}, {

			label: 5,
			name: 'extensionFieldSets',
			type: 'SceneExtensionFieldSet',
			array: true,
			arg: [{

				name: 'clusterId',
				type: 'CLUSTER_ID',
				label: 0
			}, {

				name: 'length',
				type: 'INT8U',
				label: 1
			}, {

				name: 'value',
				type: 'INT8U',
				label: 2
			}]
		}]
	}, {

		label: 25,
		nameFun: 'RemoveSceneResponse',
		nameObj: 'removeSceneResponse',
		commandClusterId: 5,
		server: true,
		commandId: 2,
		name: 'RemoveSceneResponse',
		mandatory: true,
		arg: [{

			label: 0,
			name: 'status',
			type: 'Status',
			array: false,
			arg: []
		}, {

			label: 1,
			name: 'groupId',
			type: 'INT16U',
			array: false,
			arg: []
		}, {

			label: 2,
			name: 'sceneId',
			type: 'INT8U',
			array: false,
			arg: []
		}]
	}, {

		label: 26,
		nameFun: 'RemoveAllScenesResponse',
		nameObj: 'removeAllScenesResponse',
		commandClusterId: 5,
		server: true,
		commandId: 3,
		name: 'RemoveAllScenesResponse',
		mandatory: true,
		arg: [{

			label: 0,
			name: 'status',
			type: 'Status',
			array: false,
			arg: []
		}, {

			label: 1,
			name: 'groupId',
			type: 'INT16U',
			array: false,
			arg: []
		}]
	}, {

		label: 27,
		nameFun: 'StoreSceneResponse',
		nameObj: 'storeSceneResponse',
		commandClusterId: 5,
		server: true,
		commandId: 4,
		name: 'StoreSceneResponse',
		mandatory: true,
		arg: [{

			label: 0,
			name: 'status',
			type: 'Status',
			array: false,
			arg: []
		}, {

			label: 1,
			name: 'groupId',
			type: 'INT16U',
			array: false,
			arg: []
		}, {

			label: 2,
			name: 'sceneId',
			type: 'INT8U',
			array: false,
			arg: []
		}]
	}, {

		label: 28,
		nameFun: 'GetSceneMembershipResponse',
		nameObj: 'getSceneMembershipResponse',
		commandClusterId: 5,
		server: true,
		commandId: 6,
		name: 'GetSceneMembershipResponse',
		mandatory: true,
		arg: [{

			label: 0,
			name: 'status',
			type: 'Status',
			array: false,
			arg: []
		}, {

			label: 1,
			name: 'capacity',
			type: 'INT8U',
			array: false,
			arg: []
		}, {

			label: 2,
			name: 'groupId',
			type: 'INT16U',
			array: false,
			arg: []
		}, {

			label: 3,
			name: 'sceneCount',
			type: 'INT8U',
			array: false,
			arg: []
		}, {

			label: 4,
			name: 'sceneList',
			type: 'INT8U',
			array: true,
			arg: []
		}]
	}, {

		label: 29,
		nameFun: 'Off',
		nameObj: 'off',
		commandClusterId: 6,
		server: false,
		commandId: 0,
		name: 'Off',
		mandatory: true,
		arg: []
	}, {

		label: 30,
		nameFun: 'On',
		nameObj: 'on',
		commandClusterId: 6,
		server: false,
		commandId: 1,
		name: 'On',
		mandatory: true,
		arg: []
	}, {

		label: 31,
		nameFun: 'Toggle',
		nameObj: 'toggle',
		commandClusterId: 6,
		server: false,
		commandId: 2,
		name: 'Toggle',
		mandatory: true,
		arg: []
	}, {

		label: 32,
		nameFun: 'MoveToLevel',
		nameObj: 'moveToLevel',
		commandClusterId: 8,
		server: false,
		commandId: 0,
		name: 'MoveToLevel',
		mandatory: true,
		arg: [{

			label: 0,
			name: 'level',
			type: 'INT8U',
			array: false,
			arg: []
		}, {

			label: 1,
			name: 'transitionTime',
			type: 'INT16U',
			array: false,
			arg: []
		}]
	}, {

		label: 33,
		nameFun: 'Move',
		nameObj: 'move',
		commandClusterId: 8,
		server: false,
		commandId: 1,
		name: 'Move',
		mandatory: true,
		arg: [{

			label: 0,
			name: 'moveMode',
			type: 'MoveMode',
			array: false,
			arg: []
		}, {

			label: 1,
			name: 'rate',
			type: 'INT8U',
			array: false,
			arg: []
		}]
	}, {

		label: 34,
		nameFun: 'Step',
		nameObj: 'step',
		commandClusterId: 8,
		server: false,
		commandId: 2,
		name: 'Step',
		mandatory: true,
		arg: [{

			label: 0,
			name: 'stepMode',
			type: 'StepMode',
			array: false,
			arg: []
		}, {

			label: 1,
			name: 'stepSize',
			type: 'INT8U',
			array: false,
			arg: []
		}, {

			label: 2,
			name: 'transitionTime',
			type: 'INT16U',
			array: false,
			arg: []
		}]
	}, {

		label: 35,
		nameFun: 'Stop',
		nameObj: 'stop',
		commandClusterId: 8,
		server: false,
		commandId: 3,
		name: 'Stop',
		mandatory: true,
		arg: []
	}, {

		label: 36,
		nameFun: 'MoveToLevelWithOnOff',
		nameObj: 'moveToLevelWithOnOff',
		commandClusterId: 8,
		server: false,
		commandId: 4,
		name: 'MoveToLevelWithOnOff',
		mandatory: true,
		arg: [{

			label: 0,
			name: 'level',
			type: 'INT8U',
			array: false,
			arg: []
		}, {

			label: 1,
			name: 'transitionTime',
			type: 'INT16U',
			array: false,
			arg: []
		}]
	}, {

		label: 37,
		nameFun: 'MoveWithOnOff',
		nameObj: 'moveWithOnOff',
		commandClusterId: 8,
		server: false,
		commandId: 5,
		name: 'MoveWithOnOff',
		mandatory: true,
		arg: [{

			label: 0,
			name: 'moveMode',
			type: 'MoveMode',
			array: false,
			arg: []
		}, {

			label: 1,
			name: 'rate',
			type: 'INT8U',
			array: false,
			arg: []
		}]
	}, {

		label: 38,
		nameFun: 'StepWithOnOff',
		nameObj: 'stepWithOnOff',
		commandClusterId: 8,
		server: false,
		commandId: 6,
		name: 'StepWithOnOff',
		mandatory: true,
		arg: [{

			label: 0,
			name: 'stepMode',
			type: 'StepMode',
			array: false,
			arg: []
		}, {

			label: 1,
			name: 'stepSize',
			type: 'INT8U',
			array: false,
			arg: []
		}, {

			label: 2,
			name: 'transitionTime',
			type: 'INT16U',
			array: false,
			arg: []
		}]
	}, {

		label: 39,
		nameFun: 'StopWithOnOff',
		nameObj: 'stopWithOnOff',
		commandClusterId: 8,
		server: false,
		commandId: 7,
		name: 'StopWithOnOff',
		mandatory: true,
		arg: []
	}, {

		label: 40,
		nameFun: 'ResetAlarm',
		nameObj: 'resetAlarm',
		commandClusterId: 9,
		server: false,
		commandId: 0,
		name: 'ResetAlarm',
		mandatory: true,
		arg: [{

			label: 0,
			name: 'alarmCode',
			type: 'ENUM8',
			array: false,
			arg: []
		}, {

			label: 1,
			name: 'clusterId',
			type: 'CLUSTER_ID',
			array: false,
			arg: []
		}]
	}, {

		label: 41,
		nameFun: 'ResetAllAlarms',
		nameObj: 'resetAllAlarms',
		commandClusterId: 9,
		server: false,
		commandId: 1,
		name: 'ResetAllAlarms',
		mandatory: true,
		arg: []
	}, {

		label: 42,
		nameFun: 'GetAlarm',
		nameObj: 'getAlarm',
		commandClusterId: 9,
		server: false,
		commandId: 2,
		name: 'GetAlarm',
		mandatory: false,
		arg: []
	}, {

		label: 43,
		nameFun: 'ResetAlarmLog',
		nameObj: 'resetAlarmLog',
		commandClusterId: 9,
		server: false,
		commandId: 3,
		name: 'ResetAlarmLog',
		mandatory: false,
		arg: []
	}, {

		label: 44,
		nameFun: 'Alarm',
		nameObj: 'alarm',
		commandClusterId: 9,
		server: true,
		commandId: 0,
		name: 'Alarm',
		mandatory: true,
		arg: [{

			label: 0,
			name: 'alarmCode',
			type: 'ENUM8',
			array: false,
			arg: []
		}, {

			label: 1,
			name: 'clusterId',
			type: 'CLUSTER_ID',
			array: false,
			arg: []
		}]
	}, {

		label: 45,
		nameFun: 'GetAlarmResponse',
		nameObj: 'getAlarmResponse',
		commandClusterId: 9,
		server: true,
		commandId: 1,
		name: 'GetAlarmResponse',
		mandatory: false,
		arg: [{

			label: 0,
			name: 'status',
			type: 'Status',
			array: false,
			arg: []
		}, {

			label: 1,
			name: 'alarmCode',
			type: 'ENUM8',
			array: false,
			arg: []
		}, {

			label: 2,
			name: 'clusterId',
			type: 'CLUSTER_ID',
			array: false,
			arg: []
		}, {

			label: 3,
			name: 'timeStamp',
			type: 'INT32U',
			array: false,
			arg: []
		}]
	}, {

		label: 46,
		nameFun: 'SetAbsoluteLocation',
		nameObj: 'setAbsoluteLocation',
		commandClusterId: 11,
		server: false,
		commandId: 0,
		name: 'SetAbsoluteLocation',
		mandatory: true,
		arg: [{

			label: 0,
			name: 'coordinate1',
			type: 'INT16S',
			array: false,
			arg: []
		}, {

			label: 1,
			name: 'coordinate2',
			type: 'INT16S',
			array: false,
			arg: []
		}, {

			label: 2,
			name: 'coordinate3',
			type: 'INT16S',
			array: false,
			arg: []
		}, {

			label: 3,
			name: 'power',
			type: 'INT16S',
			array: false,
			arg: []
		}, {

			label: 4,
			name: 'pathLossExponent',
			type: 'INT16U',
			array: false,
			arg: []
		}]
	}, {

		label: 47,
		nameFun: 'SetDeviceConfiguration',
		nameObj: 'setDeviceConfiguration',
		commandClusterId: 11,
		server: false,
		commandId: 1,
		name: 'SetDeviceConfiguration',
		mandatory: true,
		arg: [{

			label: 0,
			name: 'power',
			type: 'INT16S',
			array: false,
			arg: []
		}, {

			label: 1,
			name: 'pathLossExponent',
			type: 'INT16U',
			array: false,
			arg: []
		}, {

			label: 2,
			name: 'calculationPeriod',
			type: 'INT16U',
			array: false,
			arg: []
		}, {

			label: 3,
			name: 'numberRssiMeasurements',
			type: 'INT8U',
			array: false,
			arg: []
		}, {

			label: 4,
			name: 'reportingPeriod',
			type: 'INT16U',
			array: false,
			arg: []
		}]
	}, {

		label: 48,
		nameFun: 'GetDeviceConfiguration',
		nameObj: 'getDeviceConfiguration',
		commandClusterId: 11,
		server: false,
		commandId: 2,
		name: 'GetDeviceConfiguration',
		mandatory: true,
		arg: [{

			label: 0,
			name: 'targetAddress',
			type: 'IEEE_ADDRESS',
			array: false,
			arg: []
		}]
	}, {

		label: 49,
		nameFun: 'GetLocationData',
		nameObj: 'getLocationData',
		commandClusterId: 11,
		server: false,
		commandId: 3,
		name: 'GetLocationData',
		mandatory: true,
		arg: [{

			label: 0,
			name: 'flags',
			type: 'GetLocationDataFlags',
			array: false,
			arg: []
		}, {

			label: 1,
			name: 'numberResponses',
			type: 'INT8U',
			array: false,
			arg: []
		}, {

			label: 2,
			name: 'targetAddress',
			type: 'IEEE_ADDRESS',
			array: false,
			arg: []
		}]
	}, {

		label: 50,
		nameFun: 'RssiResponse',
		nameObj: 'rssiResponse',
		commandClusterId: 11,
		server: false,
		commandId: 4,
		name: 'RssiResponse',
		mandatory: false,
		arg: [{

			label: 0,
			name: 'replyingDevice',
			type: 'IEEE_ADDRESS',
			array: false,
			arg: []
		}, {

			label: 1,
			name: 'coordinate1',
			type: 'INT16S',
			array: false,
			arg: []
		}, {

			label: 2,
			name: 'coordinate2',
			type: 'INT16S',
			array: false,
			arg: []
		}, {

			label: 3,
			name: 'coordinate3',
			type: 'INT16S',
			array: false,
			arg: []
		}, {

			label: 4,
			name: 'rssi',
			type: 'INT8S',
			array: false,
			arg: []
		}, {

			label: 5,
			name: 'numberRssiMeasurements',
			type: 'INT8U',
			array: false,
			arg: []
		}]
	}, {

		label: 51,
		nameFun: 'SendPings',
		nameObj: 'sendPings',
		commandClusterId: 11,
		server: false,
		commandId: 5,
		name: 'SendPings',
		mandatory: false,
		arg: [{

			label: 0,
			name: 'targetAddress',
			type: 'IEEE_ADDRESS',
			array: false,
			arg: []
		}, {

			label: 1,
			name: 'numberRssiMeasurements',
			type: 'INT8U',
			array: false,
			arg: []
		}, {

			label: 2,
			name: 'calculationPeriod',
			type: 'INT16U',
			array: false,
			arg: []
		}]
	}, {

		label: 52,
		nameFun: 'AnchorNodeAnnounce',
		nameObj: 'anchorNodeAnnounce',
		commandClusterId: 11,
		server: false,
		commandId: 6,
		name: 'AnchorNodeAnnounce',
		mandatory: false,
		arg: [{

			label: 0,
			name: 'anchorNodeIeeeAddress',
			type: 'IEEE_ADDRESS',
			array: false,
			arg: []
		}, {

			label: 1,
			name: 'coordinate1',
			type: 'INT16S',
			array: false,
			arg: []
		}, {

			label: 2,
			name: 'coordinate2',
			type: 'INT16S',
			array: false,
			arg: []
		}, {

			label: 3,
			name: 'coordinate3',
			type: 'INT16S',
			array: false,
			arg: []
		}]
	}, {

		label: 53,
		nameFun: 'DeviceConfigurationResponse',
		nameObj: 'deviceConfigurationResponse',
		commandClusterId: 11,
		server: true,
		commandId: 0,
		name: 'DeviceConfigurationResponse',
		mandatory: true,
		arg: [{

			label: 0,
			name: 'status',
			type: 'Status',
			array: false,
			arg: []
		}, {

			label: 1,
			name: 'power',
			type: 'INT16S',
			array: false,
			arg: []
		}, {

			label: 2,
			name: 'pathLossExponent',
			type: 'INT16U',
			array: false,
			arg: []
		}, {

			label: 3,
			name: 'calculationPeriod',
			type: 'INT16U',
			array: false,
			arg: []
		}, {

			label: 4,
			name: 'numberRssiMeasurements',
			type: 'INT8U',
			array: false,
			arg: []
		}, {

			label: 5,
			name: 'reportingPeriod',
			type: 'INT16U',
			array: false,
			arg: []
		}]
	}, {

		label: 54,
		nameFun: 'LocationDataResponse',
		nameObj: 'locationDataResponse',
		commandClusterId: 11,
		server: true,
		commandId: 1,
		name: 'LocationDataResponse',
		mandatory: true,
		arg: [{

			label: 0,
			name: 'status',
			type: 'Status',
			array: false,
			arg: []
		}, {

			label: 1,
			name: 'locationType',
			type: 'LocationType',
			array: false,
			arg: []
		}, {

			label: 2,
			name: 'coordinate1',
			type: 'INT16S',
			array: false,
			arg: []
		}, {

			label: 3,
			name: 'coordinate2',
			type: 'INT16S',
			array: false,
			arg: []
		}, {

			label: 4,
			name: 'coordinate3',
			type: 'INT16S',
			array: false,
			arg: []
		}, {

			label: 5,
			name: 'power',
			type: 'INT16S',
			array: false,
			arg: []
		}, {

			label: 6,
			name: 'pathLossExponent',
			type: 'INT16U',
			array: false,
			arg: []
		}, {

			label: 7,
			name: 'locationMethod',
			type: 'LocationMethod',
			array: false,
			arg: []
		}, {

			label: 8,
			name: 'qualityMeasure',
			type: 'INT8U',
			array: false,
			arg: []
		}, {

			label: 9,
			name: 'locationAge',
			type: 'INT16U',
			array: false,
			arg: []
		}]
	}, {

		label: 55,
		nameFun: 'LocationDataNotification',
		nameObj: 'locationDataNotification',
		commandClusterId: 11,
		server: true,
		commandId: 2,
		name: 'LocationDataNotification',
		mandatory: true,
		arg: [{

			label: 0,
			name: 'locationType',
			type: 'LocationType',
			array: false,
			arg: []
		}, {

			label: 1,
			name: 'coordinate1',
			type: 'INT16S',
			array: false,
			arg: []
		}, {

			label: 2,
			name: 'coordinate2',
			type: 'INT16S',
			array: false,
			arg: []
		}, {

			label: 3,
			name: 'coordinate3',
			type: 'INT16S',
			array: false,
			arg: []
		}, {

			label: 4,
			name: 'power',
			type: 'INT16S',
			array: false,
			arg: []
		}, {

			label: 5,
			name: 'pathLossExponent',
			type: 'INT16U',
			array: false,
			arg: []
		}, {

			label: 6,
			name: 'locationMethod',
			type: 'LocationMethod',
			array: false,
			arg: []
		}, {

			label: 7,
			name: 'qualityMeasure',
			type: 'INT8U',
			array: false,
			arg: []
		}, {

			label: 8,
			name: 'locationAge',
			type: 'INT16U',
			array: false,
			arg: []
		}]
	}, {

		label: 56,
		nameFun: 'CompactLocationDataNotification',
		nameObj: 'compactLocationDataNotification',
		commandClusterId: 11,
		server: true,
		commandId: 3,
		name: 'CompactLocationDataNotification',
		mandatory: true,
		arg: [{

			label: 0,
			name: 'locationType',
			type: 'LocationType',
			array: false,
			arg: []
		}, {

			label: 1,
			name: 'coordinate1',
			type: 'INT16S',
			array: false,
			arg: []
		}, {

			label: 2,
			name: 'coordinate2',
			type: 'INT16S',
			array: false,
			arg: []
		}, {

			label: 3,
			name: 'coordinate3',
			type: 'INT16S',
			array: false,
			arg: []
		}, {

			label: 4,
			name: 'qualityMeasure',
			type: 'INT8U',
			array: false,
			arg: []
		}, {

			label: 5,
			name: 'locationAge',
			type: 'INT16U',
			array: false,
			arg: []
		}]
	}, {

		label: 57,
		nameFun: 'RssiPing',
		nameObj: 'rssiPing',
		commandClusterId: 11,
		server: true,
		commandId: 4,
		name: 'RssiPing',
		mandatory: true,
		arg: [{

			label: 0,
			name: 'locationType',
			type: 'LocationType',
			array: false,
			arg: []
		}]
	}, {

		label: 58,
		nameFun: 'RssiRequest',
		nameObj: 'rssiRequest',
		commandClusterId: 11,
		server: true,
		commandId: 5,
		name: 'RssiRequest',
		mandatory: false,
		arg: []
	}, {

		label: 59,
		nameFun: 'ReportRssiMeasurements',
		nameObj: 'reportRssiMeasurements',
		commandClusterId: 11,
		server: true,
		commandId: 6,
		name: 'ReportRssiMeasurements',
		mandatory: false,
		arg: [{

			label: 0,
			name: 'measuringDevice',
			type: 'IEEE_ADDRESS',
			array: false,
			arg: []
		}, {

			label: 1,
			name: 'neighbors',
			type: 'INT8U',
			array: false,
			arg: []
		}, {

			label: 2,
			name: 'neighborsInfo',
			type: 'NeighborInfo',
			array: true,
			arg: [{

				name: 'neighbor',
				type: 'IEEE_ADDRESS',
				label: 0
			}, {

				name: 'x',
				type: 'INT16S',
				label: 1
			}, {

				name: 'y',
				type: 'INT16S',
				label: 2
			}, {

				name: 'z',
				type: 'INT16S',
				label: 3
			}, {

				name: 'rssi',
				type: 'INT8S',
				label: 4
			}, {

				name: 'numberRssiMeasurements',
				type: 'INT8U',
				label: 5
			}]
		}]
	}, {

		label: 60,
		nameFun: 'RequestOwnLocation',
		nameObj: 'requestOwnLocation',
		commandClusterId: 11,
		server: true,
		commandId: 7,
		name: 'RequestOwnLocation',
		mandatory: false,
		arg: [{

			label: 0,
			name: 'blindNode',
			type: 'IEEE_ADDRESS',
			array: false,
			arg: []
		}]
	}, {

		label: 61,
		nameFun: 'RestartDevice',
		nameObj: 'restartDevice',
		commandClusterId: 21,
		server: false,
		commandId: 0,
		name: 'RestartDevice',
		mandatory: true,
		arg: [{

			label: 0,
			name: 'options',
			type: 'RestartOptions',
			array: false,
			arg: []
		}, {

			label: 1,
			name: 'delay',
			type: 'INT8U',
			array: false,
			arg: []
		}, {

			label: 2,
			name: 'jitter',
			type: 'INT8U',
			array: false,
			arg: []
		}]
	}, {

		label: 62,
		nameFun: 'SaveStartupParameters',
		nameObj: 'saveStartupParameters',
		commandClusterId: 21,
		server: false,
		commandId: 1,
		name: 'SaveStartupParameters',
		mandatory: false,
		arg: [{

			label: 0,
			name: 'options',
			type: 'BITMAP8',
			array: false,
			arg: []
		}, {

			label: 1,
			name: 'index',
			type: 'INT8U',
			array: false,
			arg: []
		}]
	}, {

		label: 63,
		nameFun: 'RestoreStartupParameters',
		nameObj: 'restoreStartupParameters',
		commandClusterId: 21,
		server: false,
		commandId: 2,
		name: 'RestoreStartupParameters',
		mandatory: false,
		arg: [{

			label: 0,
			name: 'options',
			type: 'BITMAP8',
			array: false,
			arg: []
		}, {

			label: 1,
			name: 'index',
			type: 'INT8U',
			array: false,
			arg: []
		}]
	}, {

		label: 64,
		nameFun: 'ResetStartupParameters',
		nameObj: 'resetStartupParameters',
		commandClusterId: 21,
		server: false,
		commandId: 3,
		name: 'ResetStartupParameters',
		mandatory: true,
		arg: [{

			label: 0,
			name: 'options',
			type: 'ResetOptions',
			array: false,
			arg: []
		}, {

			label: 1,
			name: 'index',
			type: 'INT8U',
			array: false,
			arg: []
		}]
	}, {

		label: 65,
		nameFun: 'RestartDeviceResponse',
		nameObj: 'restartDeviceResponse',
		commandClusterId: 21,
		server: true,
		commandId: 0,
		name: 'RestartDeviceResponse',
		mandatory: true,
		arg: [{

			label: 0,
			name: 'status',
			type: 'ENUM8',
			array: false,
			arg: []
		}]
	}, {

		label: 66,
		nameFun: 'SaveStartupParametersResponse',
		nameObj: 'saveStartupParametersResponse',
		commandClusterId: 21,
		server: true,
		commandId: 1,
		name: 'SaveStartupParametersResponse',
		mandatory: true,
		arg: [{

			label: 0,
			name: 'status',
			type: 'ENUM8',
			array: false,
			arg: []
		}]
	}, {

		label: 67,
		nameFun: 'RestoreStartupParametersResponse',
		nameObj: 'restoreStartupParametersResponse',
		commandClusterId: 21,
		server: true,
		commandId: 2,
		name: 'RestoreStartupParametersResponse',
		mandatory: true,
		arg: [{

			label: 0,
			name: 'status',
			type: 'ENUM8',
			array: false,
			arg: []
		}]
	}, {

		label: 68,
		nameFun: 'ResetStartupParametersResponse',
		nameObj: 'resetStartupParametersResponse',
		commandClusterId: 21,
		server: true,
		commandId: 3,
		name: 'ResetStartupParametersResponse',
		mandatory: true,
		arg: [{

			label: 0,
			name: 'status',
			type: 'ENUM8',
			array: false,
			arg: []
		}]
	}, {

		label: 69,
		nameFun: 'SetpointRaiseLower',
		nameObj: 'setpointRaiseLower',
		commandClusterId: 513,
		server: false,
		commandId: 0,
		name: 'SetpointRaiseLower',
		mandatory: true,
		arg: [{

			label: 0,
			name: 'mode',
			type: 'SetpointAdjustMode',
			array: false,
			arg: []
		}, {

			label: 1,
			name: 'amount',
			type: 'INT8S',
			array: false,
			arg: []
		}]
	}, {

		label: 70,
		nameFun: 'SetWeeklySchedule',
		nameObj: 'setWeeklySchedule',
		commandClusterId: 513,
		server: false,
		commandId: 1,
		name: 'SetWeeklySchedule',
		mandatory: true,
		arg: [{

			label: 0,
			name: 'numberOfTransitionsForSequence',
			type: 'ENUM8',
			array: false,
			arg: []
		}, {

			label: 1,
			name: 'dayOfWeekForSequence',
			type: 'DayOfWeek',
			array: false,
			arg: []
		}, {

			label: 2,
			name: 'modeForSequence',
			type: 'ModeForSequence',
			array: false,
			arg: []
		}, {

			label: 3,
			name: 'payload',
			type: 'INT8U',
			array: true,
			arg: []
		}]
	}, {

		label: 71,
		nameFun: 'GetWeeklySchedule',
		nameObj: 'getWeeklySchedule',
		commandClusterId: 513,
		server: false,
		commandId: 2,
		name: 'GetWeeklySchedule',
		mandatory: true,
		arg: [{

			label: 0,
			name: 'daysToReturn',
			type: 'DayOfWeek',
			array: false,
			arg: []
		}, {

			label: 1,
			name: 'modeToReturn',
			type: 'ModeForSequence',
			array: false,
			arg: []
		}]
	}, {

		label: 72,
		nameFun: 'ClearWeeklySchedule',
		nameObj: 'clearWeeklySchedule',
		commandClusterId: 513,
		server: false,
		commandId: 3,
		name: 'ClearWeeklySchedule',
		mandatory: true,
		arg: []
	}, {

		label: 73,
		nameFun: 'GetRelayStatusLog',
		nameObj: 'getRelayStatusLog',
		commandClusterId: 513,
		server: false,
		commandId: 4,
		name: 'GetRelayStatusLog',
		mandatory: true,
		arg: []
	}, {

		label: 74,
		nameFun: 'CurrentWeeklySchedule',
		nameObj: 'currentWeeklySchedule',
		commandClusterId: 513,
		server: true,
		commandId: 0,
		name: 'CurrentWeeklySchedule',
		mandatory: true,
		arg: [{

			label: 0,
			name: 'numberOfTransitionsForSequence',
			type: 'ENUM8',
			array: false,
			arg: []
		}, {

			label: 1,
			name: 'dayOfWeekForSequence',
			type: 'DayOfWeek',
			array: false,
			arg: []
		}, {

			label: 2,
			name: 'modeForSequence',
			type: 'ModeForSequence',
			array: false,
			arg: []
		}, {

			label: 3,
			name: 'payload',
			type: 'INT8U',
			array: true,
			arg: []
		}]
	}, {

		label: 75,
		nameFun: 'RelayStatusLog',
		nameObj: 'relayStatusLog',
		commandClusterId: 513,
		server: true,
		commandId: 1,
		name: 'RelayStatusLog',
		mandatory: true,
		arg: [{

			label: 0,
			name: 'timeOfDay',
			type: 'INT16U',
			array: false,
			arg: []
		}, {

			label: 1,
			name: 'relayStatus',
			type: 'BITMAP16',
			array: false,
			arg: []
		}, {

			label: 2,
			name: 'localTemperature',
			type: 'INT16S',
			array: false,
			arg: []
		}, {

			label: 3,
			name: 'humidityInPercentage',
			type: 'INT8U',
			array: false,
			arg: []
		}, {

			label: 4,
			name: 'setpoint',
			type: 'INT16S',
			array: false,
			arg: []
		}, {

			label: 5,
			name: 'unreadEntries',
			type: 'INT16U',
			array: false,
			arg: []
		}]
	}, {

		label: 76,
		nameFun: 'MoveToHue',
		nameObj: 'moveToHue',
		commandClusterId: 768,
		server: false,
		commandId: 0,
		name: 'MoveToHue',
		mandatory: false,
		arg: [{

			label: 0,
			name: 'hue',
			type: 'INT8U',
			array: false,
			arg: []
		}, {

			label: 1,
			name: 'direction',
			type: 'HueDirection',
			array: false,
			arg: []
		}, {

			label: 2,
			name: 'transitionTime',
			type: 'INT16U',
			array: false,
			arg: []
		}]
	}, {

		label: 77,
		nameFun: 'MoveHue',
		nameObj: 'moveHue',
		commandClusterId: 768,
		server: false,
		commandId: 1,
		name: 'MoveHue',
		mandatory: false,
		arg: [{

			label: 0,
			name: 'moveMode',
			type: 'HueMoveMode',
			array: false,
			arg: []
		}, {

			label: 1,
			name: 'rate',
			type: 'INT8U',
			array: false,
			arg: []
		}]
	}, {

		label: 78,
		nameFun: 'StepHue',
		nameObj: 'stepHue',
		commandClusterId: 768,
		server: false,
		commandId: 2,
		name: 'StepHue',
		mandatory: false,
		arg: [{

			label: 0,
			name: 'stepMode',
			type: 'HueStepMode',
			array: false,
			arg: []
		}, {

			label: 1,
			name: 'stepSize',
			type: 'INT8U',
			array: false,
			arg: []
		}, {

			label: 2,
			name: 'transitionTime',
			type: 'INT8U',
			array: false,
			arg: []
		}]
	}, {

		label: 79,
		nameFun: 'MoveToSaturation',
		nameObj: 'moveToSaturation',
		commandClusterId: 768,
		server: false,
		commandId: 3,
		name: 'MoveToSaturation',
		mandatory: false,
		arg: [{

			label: 0,
			name: 'saturation',
			type: 'INT8U',
			array: false,
			arg: []
		}, {

			label: 1,
			name: 'transitionTime',
			type: 'INT16U',
			array: false,
			arg: []
		}]
	}, {

		label: 80,
		nameFun: 'MoveSaturation',
		nameObj: 'moveSaturation',
		commandClusterId: 768,
		server: false,
		commandId: 4,
		name: 'MoveSaturation',
		mandatory: false,
		arg: [{

			label: 0,
			name: 'moveMode',
			type: 'SaturationMoveMode',
			array: false,
			arg: []
		}, {

			label: 1,
			name: 'rate',
			type: 'INT8U',
			array: false,
			arg: []
		}]
	}, {

		label: 81,
		nameFun: 'StepSaturation',
		nameObj: 'stepSaturation',
		commandClusterId: 768,
		server: false,
		commandId: 5,
		name: 'StepSaturation',
		mandatory: false,
		arg: [{

			label: 0,
			name: 'stepMode',
			type: 'SaturationStepMode',
			array: false,
			arg: []
		}, {

			label: 1,
			name: 'stepSize',
			type: 'INT8U',
			array: false,
			arg: []
		}, {

			label: 2,
			name: 'transitionTime',
			type: 'INT8U',
			array: false,
			arg: []
		}]
	}, {

		label: 82,
		nameFun: 'MoveToHueAndSaturation',
		nameObj: 'moveToHueAndSaturation',
		commandClusterId: 768,
		server: false,
		commandId: 6,
		name: 'MoveToHueAndSaturation',
		mandatory: false,
		arg: [{

			label: 0,
			name: 'hue',
			type: 'INT8U',
			array: false,
			arg: []
		}, {

			label: 1,
			name: 'saturation',
			type: 'INT8U',
			array: false,
			arg: []
		}, {

			label: 2,
			name: 'transitionTime',
			type: 'INT16U',
			array: false,
			arg: []
		}]
	}, {

		label: 83,
		nameFun: 'MoveToColor',
		nameObj: 'moveToColor',
		commandClusterId: 768,
		server: false,
		commandId: 7,
		name: 'MoveToColor',
		mandatory: true,
		arg: [{

			label: 0,
			name: 'colorX',
			type: 'INT16U',
			array: false,
			arg: []
		}, {

			label: 1,
			name: 'colorY',
			type: 'INT16U',
			array: false,
			arg: []
		}, {

			label: 2,
			name: 'transitionTime',
			type: 'INT16U',
			array: false,
			arg: []
		}]
	}, {

		label: 84,
		nameFun: 'MoveColor',
		nameObj: 'moveColor',
		commandClusterId: 768,
		server: false,
		commandId: 8,
		name: 'MoveColor',
		mandatory: true,
		arg: [{

			label: 0,
			name: 'rateX',
			type: 'INT16S',
			array: false,
			arg: []
		}, {

			label: 1,
			name: 'rateY',
			type: 'INT16S',
			array: false,
			arg: []
		}]
	}, {

		label: 85,
		nameFun: 'StepColor',
		nameObj: 'stepColor',
		commandClusterId: 768,
		server: false,
		commandId: 9,
		name: 'StepColor',
		mandatory: true,
		arg: [{

			label: 0,
			name: 'stepX',
			type: 'INT16S',
			array: false,
			arg: []
		}, {

			label: 1,
			name: 'stepY',
			type: 'INT16S',
			array: false,
			arg: []
		}, {

			label: 2,
			name: 'transitionTime',
			type: 'INT16U',
			array: false,
			arg: []
		}]
	}, {

		label: 86,
		nameFun: 'MoveToColorTemperature',
		nameObj: 'moveToColorTemperature',
		commandClusterId: 768,
		server: false,
		commandId: 10,
		name: 'MoveToColorTemperature',
		mandatory: false,
		arg: [{

			label: 0,
			name: 'colorTemperature',
			type: 'INT16U',
			array: false,
			arg: []
		}, {

			label: 1,
			name: 'transitionTime',
			type: 'INT16U',
			array: false,
			arg: []
		}]
	}, {

		label: 87,
		nameFun: 'ZoneEnrollResponse',
		nameObj: 'zoneEnrollResponse',
		commandClusterId: 1280,
		server: false,
		commandId: 0,
		name: 'ZoneEnrollResponse',
		mandatory: true,
		arg: [{

			label: 0,
			name: 'enrollResponseCode',
			type: 'IasEnrollResponseCode',
			array: false,
			arg: []
		}, {

			label: 1,
			name: 'zoneId',
			type: 'INT8U',
			array: false,
			arg: []
		}]
	}, {

		label: 88,
		nameFun: 'InitiateNormalOperationMode',
		nameObj: 'initiateNormalOperationMode',
		commandClusterId: 1280,
		server: false,
		commandId: 1,
		name: 'InitiateNormalOperationMode',
		mandatory: false,
		arg: []
	}, {

		label: 89,
		nameFun: 'InitiateTestMode',
		nameObj: 'initiateTestMode',
		commandClusterId: 1280,
		server: false,
		commandId: 2,
		name: 'InitiateTestMode',
		mandatory: false,
		arg: [{

			label: 0,
			name: 'testModeDuration',
			type: 'INT8U',
			array: false,
			arg: []
		}, {

			label: 1,
			name: 'currentZoneSensitivityLevel',
			type: 'INT8U',
			array: false,
			arg: []
		}]
	}, {

		label: 90,
		nameFun: 'ZoneStatusChangeNotification',
		nameObj: 'zoneStatusChangeNotification',
		commandClusterId: 1280,
		server: true,
		commandId: 0,
		name: 'ZoneStatusChangeNotification',
		mandatory: true,
		arg: [{

			label: 0,
			name: 'zoneStatus',
			type: 'IasZoneStatus',
			array: false,
			arg: []
		}, {

			label: 1,
			name: 'extendedStatus',
			type: 'BITMAP8',
			array: false,
			arg: []
		}, {

			label: 2,
			name: 'zoneId',
			type: 'INT8U',
			array: false,
			arg: []
		}, {

			label: 3,
			name: 'delay',
			type: 'INT16U',
			array: false,
			arg: []
		}]
	}, {

		label: 91,
		nameFun: 'ZoneEnrollRequest',
		nameObj: 'zoneEnrollRequest',
		commandClusterId: 1280,
		server: true,
		commandId: 1,
		name: 'ZoneEnrollRequest',
		mandatory: true,
		arg: [{

			label: 0,
			name: 'zoneType',
			type: 'IasZoneType',
			array: false,
			arg: []
		}, {

			label: 1,
			name: 'manufacturerCode',
			type: 'INT16U',
			array: false,
			arg: []
		}]
	}, {

		label: 92,
		nameFun: 'InitiateNormalOperationModeResponse',
		nameObj: 'initiateNormalOperationModeResponse',
		commandClusterId: 1280,
		server: true,
		commandId: 2,
		name: 'InitiateNormalOperationModeResponse',
		mandatory: false,
		arg: []
	}, {

		label: 93,
		nameFun: 'InitiateTestModeResponse',
		nameObj: 'initiateTestModeResponse',
		commandClusterId: 1280,
		server: true,
		commandId: 3,
		name: 'InitiateTestModeResponse',
		mandatory: false,
		arg: []
	}, {

		label: 94,
		nameFun: 'Arm',
		nameObj: 'arm',
		commandClusterId: 1281,
		server: false,
		commandId: 0,
		name: 'Arm',
		mandatory: true,
		arg: [{

			label: 0,
			name: 'armMode',
			type: 'IasAceArmMode',
			array: false,
			arg: []
		}, {

			label: 1,
			name: 'armDisarmCode',
			type: 'CHAR_STRING',
			array: false,
			arg: []
		}, {

			label: 2,
			name: 'zoneId',
			type: 'INT8U',
			array: false,
			arg: []
		}]
	}, {

		label: 95,
		nameFun: 'Bypass',
		nameObj: 'bypass',
		commandClusterId: 1281,
		server: false,
		commandId: 1,
		name: 'Bypass',
		mandatory: true,
		arg: [{

			label: 0,
			name: 'numberOfZones',
			type: 'INT8U',
			array: false,
			arg: []
		}, {

			label: 1,
			name: 'zoneIds',
			type: 'INT8U',
			array: true,
			arg: []
		}, {

			label: 2,
			name: 'armDisarmCode',
			type: 'CHAR_STRING',
			array: false,
			arg: []
		}]
	}, {

		label: 96,
		nameFun: 'Emergency',
		nameObj: 'emergency',
		commandClusterId: 1281,
		server: false,
		commandId: 2,
		name: 'Emergency',
		mandatory: true,
		arg: []
	}, {

		label: 97,
		nameFun: 'Fire',
		nameObj: 'fire',
		commandClusterId: 1281,
		server: false,
		commandId: 3,
		name: 'Fire',
		mandatory: true,
		arg: []
	}, {

		label: 98,
		nameFun: 'Panic',
		nameObj: 'panic',
		commandClusterId: 1281,
		server: false,
		commandId: 4,
		name: 'Panic',
		mandatory: true,
		arg: []
	}, {

		label: 99,
		nameFun: 'GetZoneIdMap',
		nameObj: 'getZoneIdMap',
		commandClusterId: 1281,
		server: false,
		commandId: 5,
		name: 'GetZoneIdMap',
		mandatory: true,
		arg: []
	}, {

		label: 100,
		nameFun: 'GetZoneInformation',
		nameObj: 'getZoneInformation',
		commandClusterId: 1281,
		server: false,
		commandId: 6,
		name: 'GetZoneInformation',
		mandatory: true,
		arg: [{

			label: 0,
			name: 'zoneId',
			type: 'INT8U',
			array: false,
			arg: []
		}]
	}, {

		label: 101,
		nameFun: 'GetPanelStatus',
		nameObj: 'getPanelStatus',
		commandClusterId: 1281,
		server: false,
		commandId: 7,
		name: 'GetPanelStatus',
		mandatory: true,
		arg: []
	}, {

		label: 102,
		nameFun: 'GetBypassedZoneList',
		nameObj: 'getBypassedZoneList',
		commandClusterId: 1281,
		server: false,
		commandId: 8,
		name: 'GetBypassedZoneList',
		mandatory: true,
		arg: []
	}, {

		label: 103,
		nameFun: 'GetZoneStatus',
		nameObj: 'getZoneStatus',
		commandClusterId: 1281,
		server: false,
		commandId: 9,
		name: 'GetZoneStatus',
		mandatory: true,
		arg: [{

			label: 0,
			name: 'startingZoneId',
			type: 'INT8U',
			array: false,
			arg: []
		}, {

			label: 1,
			name: 'maxNumberOfZoneIds',
			type: 'INT8U',
			array: false,
			arg: []
		}, {

			label: 2,
			name: 'zoneStatusMaskFlag',
			type: 'BOOLEAN',
			array: false,
			arg: []
		}, {

			label: 3,
			name: 'zoneStatusMask',
			type: 'BITMAP16',
			array: false,
			arg: []
		}]
	}, {

		label: 104,
		nameFun: 'ArmResponse',
		nameObj: 'armResponse',
		commandClusterId: 1281,
		server: true,
		commandId: 0,
		name: 'ArmResponse',
		mandatory: true,
		arg: [{

			label: 0,
			name: 'armNotification',
			type: 'IasAceArmNotification',
			array: false,
			arg: []
		}]
	}, {

		label: 105,
		nameFun: 'GetZoneIdMapResponse',
		nameObj: 'getZoneIdMapResponse',
		commandClusterId: 1281,
		server: true,
		commandId: 1,
		name: 'GetZoneIdMapResponse',
		mandatory: true,
		arg: [{

			label: 0,
			name: 'section0',
			type: 'BITMAP16',
			array: false,
			arg: []
		}, {

			label: 1,
			name: 'section1',
			type: 'BITMAP16',
			array: false,
			arg: []
		}, {

			label: 2,
			name: 'section2',
			type: 'BITMAP16',
			array: false,
			arg: []
		}, {

			label: 3,
			name: 'section3',
			type: 'BITMAP16',
			array: false,
			arg: []
		}, {

			label: 4,
			name: 'section4',
			type: 'BITMAP16',
			array: false,
			arg: []
		}, {

			label: 5,
			name: 'section5',
			type: 'BITMAP16',
			array: false,
			arg: []
		}, {

			label: 6,
			name: 'section6',
			type: 'BITMAP16',
			array: false,
			arg: []
		}, {

			label: 7,
			name: 'section7',
			type: 'BITMAP16',
			array: false,
			arg: []
		}, {

			label: 8,
			name: 'section8',
			type: 'BITMAP16',
			array: false,
			arg: []
		}, {

			label: 9,
			name: 'section9',
			type: 'BITMAP16',
			array: false,
			arg: []
		}, {

			label: 10,
			name: 'section10',
			type: 'BITMAP16',
			array: false,
			arg: []
		}, {

			label: 11,
			name: 'section11',
			type: 'BITMAP16',
			array: false,
			arg: []
		}, {

			label: 12,
			name: 'section12',
			type: 'BITMAP16',
			array: false,
			arg: []
		}, {

			label: 13,
			name: 'section13',
			type: 'BITMAP16',
			array: false,
			arg: []
		}, {

			label: 14,
			name: 'section14',
			type: 'BITMAP16',
			array: false,
			arg: []
		}, {

			label: 15,
			name: 'section15',
			type: 'BITMAP16',
			array: false,
			arg: []
		}]
	}, {

		label: 106,
		nameFun: 'GetZoneInformationResponse',
		nameObj: 'getZoneInformationResponse',
		commandClusterId: 1281,
		server: true,
		commandId: 2,
		name: 'GetZoneInformationResponse',
		mandatory: true,
		arg: [{

			label: 0,
			name: 'zoneId',
			type: 'INT8U',
			array: false,
			arg: []
		}, {

			label: 1,
			name: 'zoneType',
			type: 'IasZoneType',
			array: false,
			arg: []
		}, {

			label: 2,
			name: 'ieeeAddress',
			type: 'IEEE_ADDRESS',
			array: false,
			arg: []
		}, {

			label: 3,
			name: 'zoneLabel',
			type: 'CHAR_STRING',
			array: false,
			arg: []
		}]
	}, {

		label: 107,
		nameFun: 'ZoneStatusChanged',
		nameObj: 'zoneStatusChanged',
		commandClusterId: 1281,
		server: true,
		commandId: 3,
		name: 'ZoneStatusChanged',
		mandatory: true,
		arg: [{

			label: 0,
			name: 'zoneId',
			type: 'INT8U',
			array: false,
			arg: []
		}, {

			label: 1,
			name: 'zoneStatus',
			type: 'ENUM16',
			array: false,
			arg: []
		}, {

			label: 2,
			name: 'audibleNotification',
			type: 'IasAceAudibleNotification',
			array: false,
			arg: []
		}, {

			label: 3,
			name: 'zoneLabel',
			type: 'CHAR_STRING',
			array: false,
			arg: []
		}]
	}, {

		label: 108,
		nameFun: 'PanelStatusChanged',
		nameObj: 'panelStatusChanged',
		commandClusterId: 1281,
		server: true,
		commandId: 4,
		name: 'PanelStatusChanged',
		mandatory: true,
		arg: [{

			label: 0,
			name: 'panelStatus',
			type: 'IasAcePanelStatus',
			array: false,
			arg: []
		}, {

			label: 1,
			name: 'secondsRemaining',
			type: 'INT8U',
			array: false,
			arg: []
		}, {

			label: 2,
			name: 'audibleNotification',
			type: 'IasAceAudibleNotification',
			array: false,
			arg: []
		}, {

			label: 3,
			name: 'alarmStatus',
			type: 'IasAceAlarmStatus',
			array: false,
			arg: []
		}]
	}, {

		label: 109,
		nameFun: 'GetPanelStatusResponse',
		nameObj: 'getPanelStatusResponse',
		commandClusterId: 1281,
		server: true,
		commandId: 5,
		name: 'GetPanelStatusResponse',
		mandatory: true,
		arg: [{

			label: 0,
			name: 'panelStatus',
			type: 'IasAcePanelStatus',
			array: false,
			arg: []
		}, {

			label: 1,
			name: 'secondsRemaining',
			type: 'INT8U',
			array: false,
			arg: []
		}, {

			label: 2,
			name: 'audibleNotification',
			type: 'IasAceAudibleNotification',
			array: false,
			arg: []
		}, {

			label: 3,
			name: 'alarmStatus',
			type: 'IasAceAlarmStatus',
			array: false,
			arg: []
		}]
	}, {

		label: 110,
		nameFun: 'SetBypassedZoneList',
		nameObj: 'setBypassedZoneList',
		commandClusterId: 1281,
		server: true,
		commandId: 6,
		name: 'SetBypassedZoneList',
		mandatory: true,
		arg: [{

			label: 0,
			name: 'numberOfZones',
			type: 'INT8U',
			array: false,
			arg: []
		}, {

			label: 1,
			name: 'zoneIds',
			type: 'INT8U',
			array: true,
			arg: []
		}]
	}, {

		label: 111,
		nameFun: 'BypassResponse',
		nameObj: 'bypassResponse',
		commandClusterId: 1281,
		server: true,
		commandId: 7,
		name: 'BypassResponse',
		mandatory: true,
		arg: [{

			label: 0,
			name: 'numberOfZones',
			type: 'INT8U',
			array: false,
			arg: []
		}, {

			label: 1,
			name: 'bypassResult',
			type: 'IasAceBypassResult',
			array: true,
			arg: []
		}]
	}, {

		label: 112,
		nameFun: 'GetZoneStatusResponse',
		nameObj: 'getZoneStatusResponse',
		commandClusterId: 1281,
		server: true,
		commandId: 8,
		name: 'GetZoneStatusResponse',
		mandatory: true,
		arg: [{

			label: 0,
			name: 'zoneStatusComplete',
			type: 'BOOLEAN',
			array: false,
			arg: []
		}, {

			label: 1,
			name: 'numberOfZones',
			type: 'INT8U',
			array: false,
			arg: []
		}, {

			label: 2,
			name: 'zoneStatusResult',
			type: 'IasAceZoneStatusResult',
			array: true,
			arg: [{

				name: 'zoneId',
				type: 'INT8U',
				label: 0
			}, {

				name: 'zoneStatus',
				type: 'IasZoneStatus',
				label: 1
			}]
		}]
	}, {

		label: 113,
		nameFun: 'StartWarning',
		nameObj: 'startWarning',
		commandClusterId: 1282,
		server: false,
		commandId: 0,
		name: 'StartWarning',
		mandatory: true,
		arg: [{

			label: 0,
			name: 'warningInfo',
			type: 'WarningInfo',
			array: false,
			arg: []
		}, {

			label: 1,
			name: 'warningDuration',
			type: 'INT16U',
			array: false,
			arg: []
		}, {

			label: 2,
			name: 'strobeDutyCycle',
			type: 'INT8U',
			array: false,
			arg: []
		}, {

			label: 3,
			name: 'strobeLevel',
			type: 'ENUM8',
			array: false,
			arg: []
		}]
	}, {

		label: 114,
		nameFun: 'Squawk',
		nameObj: 'squawk',
		commandClusterId: 1282,
		server: false,
		commandId: 1,
		name: 'Squawk',
		mandatory: true,
		arg: [{

			label: 0,
			name: 'squawkInfo',
			type: 'SquawkInfo',
			array: false,
			arg: []
		}]
	}, {

		label: 115,
		nameFun: 'LockDoor',
		nameObj: 'lockDoor',
		commandClusterId: 257,
		server: false,
		commandId: 0,
		name: 'LockDoor',
		mandatory: true,
		arg: [{

			label: 0,
			name: 'PIN',
			type: 'CHAR_STRING',
			array: false,
			arg: []
		}]
	}, {

		label: 116,
		nameFun: 'UnlockDoor',
		nameObj: 'unlockDoor',
		commandClusterId: 257,
		server: false,
		commandId: 1,
		name: 'UnlockDoor',
		mandatory: true,
		arg: [{

			label: 0,
			name: 'PIN',
			type: 'CHAR_STRING',
			array: false,
			arg: []
		}]
	}, {

		label: 117,
		nameFun: 'ToggleLock',
		nameObj: 'toggleLock',
		commandClusterId: 257,
		server: false,
		commandId: 2,
		name: 'ToggleLock',
		mandatory: false,
		arg: [{

			label: 0,
			name: 'pin',
			type: 'CHAR_STRING',
			array: false,
			arg: []
		}]
	}, {

		label: 118,
		nameFun: 'UnlockWithTimeout',
		nameObj: 'unlockWithTimeout',
		commandClusterId: 257,
		server: false,
		commandId: 3,
		name: 'UnlockWithTimeout',
		mandatory: false,
		arg: [{

			label: 0,
			name: 'timeoutInSeconds',
			type: 'INT16U',
			array: false,
			arg: []
		}, {

			label: 1,
			name: 'pin',
			type: 'CHAR_STRING',
			array: false,
			arg: []
		}]
	}, {

		label: 119,
		nameFun: 'GetLogRecord',
		nameObj: 'getLogRecord',
		commandClusterId: 257,
		server: false,
		commandId: 4,
		name: 'GetLogRecord',
		mandatory: false,
		arg: [{

			label: 0,
			name: 'logIndex',
			type: 'INT16U',
			array: false,
			arg: []
		}]
	}, {

		label: 120,
		nameFun: 'SetPin',
		nameObj: 'setPin',
		commandClusterId: 257,
		server: false,
		commandId: 5,
		name: 'SetPin',
		mandatory: false,
		arg: [{

			label: 0,
			name: 'userId',
			type: 'INT16U',
			array: false,
			arg: []
		}, {

			label: 1,
			name: 'userStatus',
			type: 'DoorLockUserStatus',
			array: false,
			arg: []
		}, {

			label: 2,
			name: 'userType',
			type: 'DoorLockUserType',
			array: false,
			arg: []
		}, {

			label: 3,
			name: 'pin',
			type: 'CHAR_STRING',
			array: false,
			arg: []
		}]
	}, {

		label: 121,
		nameFun: 'GetPin',
		nameObj: 'getPin',
		commandClusterId: 257,
		server: false,
		commandId: 6,
		name: 'GetPin',
		mandatory: false,
		arg: [{

			label: 0,
			name: 'userId',
			type: 'INT16U',
			array: false,
			arg: []
		}]
	}, {

		label: 122,
		nameFun: 'ClearPin',
		nameObj: 'clearPin',
		commandClusterId: 257,
		server: false,
		commandId: 7,
		name: 'ClearPin',
		mandatory: false,
		arg: [{

			label: 0,
			name: 'userId',
			type: 'INT16U',
			array: false,
			arg: []
		}]
	}, {

		label: 123,
		nameFun: 'ClearAllPins',
		nameObj: 'clearAllPins',
		commandClusterId: 257,
		server: false,
		commandId: 8,
		name: 'ClearAllPins',
		mandatory: false,
		arg: []
	}, {

		label: 124,
		nameFun: 'SetUserStatus',
		nameObj: 'setUserStatus',
		commandClusterId: 257,
		server: false,
		commandId: 9,
		name: 'SetUserStatus',
		mandatory: false,
		arg: [{

			label: 0,
			name: 'userId',
			type: 'INT16U',
			array: false,
			arg: []
		}, {

			label: 1,
			name: 'userStatus',
			type: 'INT8U',
			array: false,
			arg: []
		}]
	}, {

		label: 125,
		nameFun: 'GetUserStatus',
		nameObj: 'getUserStatus',
		commandClusterId: 257,
		server: false,
		commandId: 10,
		name: 'GetUserStatus',
		mandatory: false,
		arg: [{

			label: 0,
			name: 'userId',
			type: 'INT16U',
			array: false,
			arg: []
		}]
	}, {

		label: 126,
		nameFun: 'SetWeekdaySchedule',
		nameObj: 'setWeekdaySchedule',
		commandClusterId: 257,
		server: false,
		commandId: 11,
		name: 'SetWeekdaySchedule',
		mandatory: false,
		arg: [{

			label: 0,
			name: 'scheduleId',
			type: 'INT8U',
			array: false,
			arg: []
		}, {

			label: 1,
			name: 'userId',
			type: 'INT16U',
			array: false,
			arg: []
		}, {

			label: 2,
			name: 'daysMask',
			type: 'DoorLockDayOfWeek',
			array: false,
			arg: []
		}, {

			label: 3,
			name: 'startHour',
			type: 'INT8U',
			array: false,
			arg: []
		}, {

			label: 4,
			name: 'startMinute',
			type: 'INT8U',
			array: false,
			arg: []
		}, {

			label: 5,
			name: 'endHour',
			type: 'INT8U',
			array: false,
			arg: []
		}, {

			label: 6,
			name: 'endMinute',
			type: 'INT8U',
			array: false,
			arg: []
		}]
	}, {

		label: 127,
		nameFun: 'GetWeekdaySchedule',
		nameObj: 'getWeekdaySchedule',
		commandClusterId: 257,
		server: false,
		commandId: 12,
		name: 'GetWeekdaySchedule',
		mandatory: false,
		arg: [{

			label: 0,
			name: 'scheduleId',
			type: 'INT8U',
			array: false,
			arg: []
		}, {

			label: 1,
			name: 'userId',
			type: 'INT16U',
			array: false,
			arg: []
		}]
	}, {

		label: 128,
		nameFun: 'ClearWeekdaySchedule',
		nameObj: 'clearWeekdaySchedule',
		commandClusterId: 257,
		server: false,
		commandId: 13,
		name: 'ClearWeekdaySchedule',
		mandatory: false,
		arg: [{

			label: 0,
			name: 'scheduleId',
			type: 'INT8U',
			array: false,
			arg: []
		}, {

			label: 1,
			name: 'userId',
			type: 'INT16U',
			array: false,
			arg: []
		}]
	}, {

		label: 129,
		nameFun: 'SetYeardaySchedule',
		nameObj: 'setYeardaySchedule',
		commandClusterId: 257,
		server: false,
		commandId: 14,
		name: 'SetYeardaySchedule',
		mandatory: false,
		arg: [{

			label: 0,
			name: 'scheduleId',
			type: 'INT8U',
			array: false,
			arg: []
		}, {

			label: 1,
			name: 'userId',
			type: 'INT16U',
			array: false,
			arg: []
		}, {

			label: 2,
			name: 'localStartTime',
			type: 'INT32U',
			array: false,
			arg: []
		}, {

			label: 3,
			name: 'localEndTime',
			type: 'INT32U',
			array: false,
			arg: []
		}]
	}, {

		label: 130,
		nameFun: 'GetYeardaySchedule',
		nameObj: 'getYeardaySchedule',
		commandClusterId: 257,
		server: false,
		commandId: 15,
		name: 'GetYeardaySchedule',
		mandatory: false,
		arg: [{

			label: 0,
			name: 'scheduleId',
			type: 'INT8U',
			array: false,
			arg: []
		}, {

			label: 1,
			name: 'userId',
			type: 'INT16U',
			array: false,
			arg: []
		}]
	}, {

		label: 131,
		nameFun: 'ClearYeardaySchedule',
		nameObj: 'clearYeardaySchedule',
		commandClusterId: 257,
		server: false,
		commandId: 16,
		name: 'ClearYeardaySchedule',
		mandatory: false,
		arg: [{

			label: 0,
			name: 'scheduleId',
			type: 'INT8U',
			array: false,
			arg: []
		}, {

			label: 1,
			name: 'userId',
			type: 'INT16U',
			array: false,
			arg: []
		}]
	}, {

		label: 132,
		nameFun: 'SetHolidaySchedule',
		nameObj: 'setHolidaySchedule',
		commandClusterId: 257,
		server: false,
		commandId: 17,
		name: 'SetHolidaySchedule',
		mandatory: false,
		arg: [{

			label: 0,
			name: 'scheduleId',
			type: 'INT8U',
			array: false,
			arg: []
		}, {

			label: 1,
			name: 'localStartTime',
			type: 'INT32U',
			array: false,
			arg: []
		}, {

			label: 2,
			name: 'localEndTime',
			type: 'INT32U',
			array: false,
			arg: []
		}, {

			label: 3,
			name: 'operatingModeDuringHoliday',
			type: 'ENUM8',
			array: false,
			arg: []
		}]
	}, {

		label: 133,
		nameFun: 'GetHolidaySchedule',
		nameObj: 'getHolidaySchedule',
		commandClusterId: 257,
		server: false,
		commandId: 18,
		name: 'GetHolidaySchedule',
		mandatory: false,
		arg: [{

			label: 0,
			name: 'scheduleId',
			type: 'INT8U',
			array: false,
			arg: []
		}]
	}, {

		label: 134,
		nameFun: 'ClearHolidaySchedule',
		nameObj: 'clearHolidaySchedule',
		commandClusterId: 257,
		server: false,
		commandId: 19,
		name: 'ClearHolidaySchedule',
		mandatory: false,
		arg: [{

			label: 0,
			name: 'scheduleId',
			type: 'INT8U',
			array: false,
			arg: []
		}]
	}, {

		label: 135,
		nameFun: 'SetUserType',
		nameObj: 'setUserType',
		commandClusterId: 257,
		server: false,
		commandId: 20,
		name: 'SetUserType',
		mandatory: false,
		arg: [{

			label: 0,
			name: 'userId',
			type: 'INT16U',
			array: false,
			arg: []
		}, {

			label: 1,
			name: 'userType',
			type: 'DoorLockUserType',
			array: false,
			arg: []
		}]
	}, {

		label: 136,
		nameFun: 'GetUserType',
		nameObj: 'getUserType',
		commandClusterId: 257,
		server: false,
		commandId: 21,
		name: 'GetUserType',
		mandatory: false,
		arg: [{

			label: 0,
			name: 'userId',
			type: 'INT16U',
			array: false,
			arg: []
		}]
	}, {

		label: 137,
		nameFun: 'SetRfid',
		nameObj: 'setRfid',
		commandClusterId: 257,
		server: false,
		commandId: 22,
		name: 'SetRfid',
		mandatory: false,
		arg: [{

			label: 0,
			name: 'userId',
			type: 'INT16U',
			array: false,
			arg: []
		}, {

			label: 1,
			name: 'userStatus',
			type: 'DoorLockUserStatus',
			array: false,
			arg: []
		}, {

			label: 2,
			name: 'userType',
			type: 'DoorLockUserType',
			array: false,
			arg: []
		}, {

			label: 3,
			name: 'id',
			type: 'CHAR_STRING',
			array: false,
			arg: []
		}]
	}, {

		label: 138,
		nameFun: 'GetRfid',
		nameObj: 'getRfid',
		commandClusterId: 257,
		server: false,
		commandId: 23,
		name: 'GetRfid',
		mandatory: false,
		arg: [{

			label: 0,
			name: 'userId',
			type: 'INT16U',
			array: false,
			arg: []
		}]
	}, {

		label: 139,
		nameFun: 'ClearRfid',
		nameObj: 'clearRfid',
		commandClusterId: 257,
		server: false,
		commandId: 24,
		name: 'ClearRfid',
		mandatory: false,
		arg: [{

			label: 0,
			name: 'userId',
			type: 'INT16U',
			array: false,
			arg: []
		}]
	}, {

		label: 140,
		nameFun: 'ClearAllRfids',
		nameObj: 'clearAllRfids',
		commandClusterId: 257,
		server: false,
		commandId: 25,
		name: 'ClearAllRfids',
		mandatory: false,
		arg: []
	}, {

		label: 141,
		nameFun: 'LockDoorResponse',
		nameObj: 'lockDoorResponse',
		commandClusterId: 257,
		server: true,
		commandId: 0,
		name: 'LockDoorResponse',
		mandatory: true,
		arg: [{

			label: 0,
			name: 'status',
			type: 'INT8U',
			array: false,
			arg: []
		}]
	}, {

		label: 142,
		nameFun: 'UnlockDoorResponse',
		nameObj: 'unlockDoorResponse',
		commandClusterId: 257,
		server: true,
		commandId: 1,
		name: 'UnlockDoorResponse',
		mandatory: true,
		arg: [{

			label: 0,
			name: 'status',
			type: 'INT8U',
			array: false,
			arg: []
		}]
	}, {

		label: 143,
		nameFun: 'ToggleResponse',
		nameObj: 'toggleResponse',
		commandClusterId: 257,
		server: true,
		commandId: 2,
		name: 'ToggleResponse',
		mandatory: false,
		arg: [{

			label: 0,
			name: 'status',
			type: 'INT8U',
			array: false,
			arg: []
		}]
	}, {

		label: 144,
		nameFun: 'UnlockWithTimeoutResponse',
		nameObj: 'unlockWithTimeoutResponse',
		commandClusterId: 257,
		server: true,
		commandId: 3,
		name: 'UnlockWithTimeoutResponse',
		mandatory: false,
		arg: [{

			label: 0,
			name: 'status',
			type: 'INT8U',
			array: false,
			arg: []
		}]
	}, {

		label: 145,
		nameFun: 'GetLogRecordResponse',
		nameObj: 'getLogRecordResponse',
		commandClusterId: 257,
		server: true,
		commandId: 4,
		name: 'GetLogRecordResponse',
		mandatory: false,
		arg: [{

			label: 0,
			name: 'logEntryId',
			type: 'INT16U',
			array: false,
			arg: []
		}, {

			label: 1,
			name: 'timestamp',
			type: 'INT32U',
			array: false,
			arg: []
		}, {

			label: 2,
			name: 'eventType',
			type: 'ENUM8',
			array: false,
			arg: []
		}, {

			label: 3,
			name: 'source',
			type: 'INT8U',
			array: false,
			arg: []
		}, {

			label: 4,
			name: 'eventIdOrAlarmCode',
			type: 'INT8U',
			array: false,
			arg: []
		}, {

			label: 5,
			name: 'userId',
			type: 'INT16U',
			array: false,
			arg: []
		}, {

			label: 6,
			name: 'pin',
			type: 'CHAR_STRING',
			array: false,
			arg: []
		}]
	}, {

		label: 146,
		nameFun: 'SetPinResponse',
		nameObj: 'setPinResponse',
		commandClusterId: 257,
		server: true,
		commandId: 5,
		name: 'SetPinResponse',
		mandatory: false,
		arg: [{

			label: 0,
			name: 'status',
			type: 'DoorLockSetPinOrIdStatus',
			array: false,
			arg: []
		}]
	}, {

		label: 147,
		nameFun: 'GetPinResponse',
		nameObj: 'getPinResponse',
		commandClusterId: 257,
		server: true,
		commandId: 6,
		name: 'GetPinResponse',
		mandatory: false,
		arg: [{

			label: 0,
			name: 'userId',
			type: 'INT16U',
			array: false,
			arg: []
		}, {

			label: 1,
			name: 'userStatus',
			type: 'DoorLockUserStatus',
			array: false,
			arg: []
		}, {

			label: 2,
			name: 'userType',
			type: 'DoorLockUserType',
			array: false,
			arg: []
		}, {

			label: 3,
			name: 'pin',
			type: 'CHAR_STRING',
			array: false,
			arg: []
		}]
	}, {

		label: 148,
		nameFun: 'ClearPinResponse',
		nameObj: 'clearPinResponse',
		commandClusterId: 257,
		server: true,
		commandId: 7,
		name: 'ClearPinResponse',
		mandatory: false,
		arg: [{

			label: 0,
			name: 'status',
			type: 'INT8U',
			array: false,
			arg: []
		}]
	}, {

		label: 149,
		nameFun: 'ClearAllPinsResponse',
		nameObj: 'clearAllPinsResponse',
		commandClusterId: 257,
		server: true,
		commandId: 8,
		name: 'ClearAllPinsResponse',
		mandatory: false,
		arg: [{

			label: 0,
			name: 'status',
			type: 'INT8U',
			array: false,
			arg: []
		}]
	}, {

		label: 150,
		nameFun: 'SetUserStatusResponse',
		nameObj: 'setUserStatusResponse',
		commandClusterId: 257,
		server: true,
		commandId: 9,
		name: 'SetUserStatusResponse',
		mandatory: false,
		arg: [{

			label: 0,
			name: 'status',
			type: 'INT8U',
			array: false,
			arg: []
		}]
	}, {

		label: 151,
		nameFun: 'GetUserStatusResponse',
		nameObj: 'getUserStatusResponse',
		commandClusterId: 257,
		server: true,
		commandId: 10,
		name: 'GetUserStatusResponse',
		mandatory: false,
		arg: [{

			label: 0,
			name: 'userId',
			type: 'INT16U',
			array: false,
			arg: []
		}, {

			label: 1,
			name: 'status',
			type: 'INT8U',
			array: false,
			arg: []
		}]
	}, {

		label: 152,
		nameFun: 'SetWeekdayScheduleResponse',
		nameObj: 'setWeekdayScheduleResponse',
		commandClusterId: 257,
		server: true,
		commandId: 11,
		name: 'SetWeekdayScheduleResponse',
		mandatory: false,
		arg: [{

			label: 0,
			name: 'status',
			type: 'INT8U',
			array: false,
			arg: []
		}]
	}, {

		label: 153,
		nameFun: 'GetWeekdayScheduleResponse',
		nameObj: 'getWeekdayScheduleResponse',
		commandClusterId: 257,
		server: true,
		commandId: 12,
		name: 'GetWeekdayScheduleResponse',
		mandatory: false,
		arg: [{

			label: 0,
			name: 'scheduleId',
			type: 'INT8U',
			array: false,
			arg: []
		}, {

			label: 1,
			name: 'userId',
			type: 'INT16U',
			array: false,
			arg: []
		}, {

			label: 2,
			name: 'status',
			type: 'INT8U',
			array: false,
			arg: []
		}, {

			label: 3,
			name: 'daysMask',
			type: 'INT8U',
			array: false,
			arg: []
		}, {

			label: 4,
			name: 'startHour',
			type: 'INT8U',
			array: false,
			arg: []
		}, {

			label: 5,
			name: 'startMinute',
			type: 'INT8U',
			array: false,
			arg: []
		}, {

			label: 6,
			name: 'endHour',
			type: 'INT8U',
			array: false,
			arg: []
		}, {

			label: 7,
			name: 'endMinute',
			type: 'INT8U',
			array: false,
			arg: []
		}]
	}, {

		label: 154,
		nameFun: 'ClearWeekdayScheduleResponse',
		nameObj: 'clearWeekdayScheduleResponse',
		commandClusterId: 257,
		server: true,
		commandId: 13,
		name: 'ClearWeekdayScheduleResponse',
		mandatory: false,
		arg: [{

			label: 0,
			name: 'status',
			type: 'INT8U',
			array: false,
			arg: []
		}]
	}, {

		label: 155,
		nameFun: 'SetYeardayScheduleResponse',
		nameObj: 'setYeardayScheduleResponse',
		commandClusterId: 257,
		server: true,
		commandId: 14,
		name: 'SetYeardayScheduleResponse',
		mandatory: false,
		arg: [{

			label: 0,
			name: 'status',
			type: 'INT8U',
			array: false,
			arg: []
		}]
	}, {

		label: 156,
		nameFun: 'GetYeardayScheduleResponse',
		nameObj: 'getYeardayScheduleResponse',
		commandClusterId: 257,
		server: true,
		commandId: 15,
		name: 'GetYeardayScheduleResponse',
		mandatory: false,
		arg: [{

			label: 0,
			name: 'scheduleId',
			type: 'INT8U',
			array: false,
			arg: []
		}, {

			label: 1,
			name: 'userId',
			type: 'INT16U',
			array: false,
			arg: []
		}, {

			label: 2,
			name: 'status',
			type: 'INT8U',
			array: false,
			arg: []
		}, {

			label: 3,
			name: 'localStartTime',
			type: 'INT32U',
			array: false,
			arg: []
		}, {

			label: 4,
			name: 'localEndTime',
			type: 'INT32U',
			array: false,
			arg: []
		}]
	}, {

		label: 157,
		nameFun: 'ClearYeardayScheduleResponse',
		nameObj: 'clearYeardayScheduleResponse',
		commandClusterId: 257,
		server: true,
		commandId: 16,
		name: 'ClearYeardayScheduleResponse',
		mandatory: false,
		arg: [{

			label: 0,
			name: 'status',
			type: 'INT8U',
			array: false,
			arg: []
		}]
	}, {

		label: 158,
		nameFun: 'SetHolidayScheduleResponse',
		nameObj: 'setHolidayScheduleResponse',
		commandClusterId: 257,
		server: true,
		commandId: 17,
		name: 'SetHolidayScheduleResponse',
		mandatory: false,
		arg: [{

			label: 0,
			name: 'status',
			type: 'INT8U',
			array: false,
			arg: []
		}]
	}, {

		label: 159,
		nameFun: 'GetHolidayScheduleResponse',
		nameObj: 'getHolidayScheduleResponse',
		commandClusterId: 257,
		server: true,
		commandId: 18,
		name: 'GetHolidayScheduleResponse',
		mandatory: false,
		arg: [{

			label: 0,
			name: 'scheduleId',
			type: 'INT8U',
			array: false,
			arg: []
		}, {

			label: 1,
			name: 'status',
			type: 'INT8U',
			array: false,
			arg: []
		}, {

			label: 2,
			name: 'localStartTime',
			type: 'INT32U',
			array: false,
			arg: []
		}, {

			label: 3,
			name: 'localEndTime',
			type: 'INT32U',
			array: false,
			arg: []
		}, {

			label: 4,
			name: 'operatingModeDuringHoliday',
			type: 'ENUM8',
			array: false,
			arg: []
		}]
	}, {

		label: 160,
		nameFun: 'ClearHolidayScheduleResponse',
		nameObj: 'clearHolidayScheduleResponse',
		commandClusterId: 257,
		server: true,
		commandId: 19,
		name: 'ClearHolidayScheduleResponse',
		mandatory: false,
		arg: [{

			label: 0,
			name: 'status',
			type: 'INT8U',
			array: false,
			arg: []
		}]
	}, {

		label: 161,
		nameFun: 'SetUserTypeResponse',
		nameObj: 'setUserTypeResponse',
		commandClusterId: 257,
		server: true,
		commandId: 20,
		name: 'SetUserTypeResponse',
		mandatory: false,
		arg: [{

			label: 0,
			name: 'status',
			type: 'INT8U',
			array: false,
			arg: []
		}]
	}, {

		label: 162,
		nameFun: 'GetUserTypeResponse',
		nameObj: 'getUserTypeResponse',
		commandClusterId: 257,
		server: true,
		commandId: 21,
		name: 'GetUserTypeResponse',
		mandatory: false,
		arg: [{

			label: 0,
			name: 'userId',
			type: 'INT16U',
			array: false,
			arg: []
		}, {

			label: 1,
			name: 'userType',
			type: 'DoorLockUserType',
			array: false,
			arg: []
		}]
	}, {

		label: 163,
		nameFun: 'SetRfidResponse',
		nameObj: 'setRfidResponse',
		commandClusterId: 257,
		server: true,
		commandId: 22,
		name: 'SetRfidResponse',
		mandatory: false,
		arg: [{

			label: 0,
			name: 'status',
			type: 'DoorLockSetPinOrIdStatus',
			array: false,
			arg: []
		}]
	}, {

		label: 164,
		nameFun: 'GetRfidResponse',
		nameObj: 'getRfidResponse',
		commandClusterId: 257,
		server: true,
		commandId: 23,
		name: 'GetRfidResponse',
		mandatory: false,
		arg: [{

			label: 0,
			name: 'userId',
			type: 'INT16U',
			array: false,
			arg: []
		}, {

			label: 1,
			name: 'userStatus',
			type: 'DoorLockUserStatus',
			array: false,
			arg: []
		}, {

			label: 2,
			name: 'userType',
			type: 'DoorLockUserType',
			array: false,
			arg: []
		}, {

			label: 3,
			name: 'rfid',
			type: 'CHAR_STRING',
			array: false,
			arg: []
		}]
	}, {

		label: 165,
		nameFun: 'ClearRfidResponse',
		nameObj: 'clearRfidResponse',
		commandClusterId: 257,
		server: true,
		commandId: 24,
		name: 'ClearRfidResponse',
		mandatory: false,
		arg: [{

			label: 0,
			name: 'status',
			type: 'INT8U',
			array: false,
			arg: []
		}]
	}, {

		label: 166,
		nameFun: 'ClearAllRfidsResponse',
		nameObj: 'clearAllRfidsResponse',
		commandClusterId: 257,
		server: true,
		commandId: 25,
		name: 'ClearAllRfidsResponse',
		mandatory: false,
		arg: [{

			label: 0,
			name: 'status',
			type: 'INT8U',
			array: false,
			arg: []
		}]
	}, {

		label: 167,
		nameFun: 'OperationEventNotification',
		nameObj: 'operationEventNotification',
		commandClusterId: 257,
		server: true,
		commandId: 32,
		name: 'OperationEventNotification',
		mandatory: false,
		arg: [{

			label: 0,
			name: 'source',
			type: 'INT8U',
			array: false,
			arg: []
		}, {

			label: 1,
			name: 'eventCode',
			type: 'DoorLockOperationEventCode',
			array: false,
			arg: []
		}, {

			label: 2,
			name: 'userId',
			type: 'INT16U',
			array: false,
			arg: []
		}, {

			label: 3,
			name: 'pin',
			type: 'CHAR_STRING',
			array: false,
			arg: []
		}, {

			label: 4,
			name: 'timeStamp',
			type: 'INT32U',
			array: false,
			arg: []
		}, {

			label: 5,
			name: 'data',
			type: 'CHAR_STRING',
			array: false,
			arg: []
		}]
	}, {

		label: 168,
		nameFun: 'ProgrammingEventNotification',
		nameObj: 'programmingEventNotification',
		commandClusterId: 257,
		server: true,
		commandId: 33,
		name: 'ProgrammingEventNotification',
		mandatory: false,
		arg: [{

			label: 0,
			name: 'source',
			type: 'INT8U',
			array: false,
			arg: []
		}, {

			label: 1,
			name: 'eventCode',
			type: 'DoorLockProgrammingEventCode',
			array: false,
			arg: []
		}, {

			label: 2,
			name: 'userId',
			type: 'INT16U',
			array: false,
			arg: []
		}, {

			label: 3,
			name: 'pin',
			type: 'CHAR_STRING',
			array: false,
			arg: []
		}, {

			label: 4,
			name: 'userType',
			type: 'DoorLockUserType',
			array: false,
			arg: []
		}, {

			label: 5,
			name: 'userStatus',
			type: 'DoorLockUserStatus',
			array: false,
			arg: []
		}, {

			label: 6,
			name: 'timeStamp',
			type: 'INT32U',
			array: false,
			arg: []
		}, {

			label: 7,
			name: 'data',
			type: 'CHAR_STRING',
			array: false,
			arg: []
		}]
	}, {

		label: 169,
		nameFun: 'WindowCoveringUpOpen',
		nameObj: 'windowCoveringUpOpen',
		commandClusterId: 258,
		server: false,
		commandId: 0,
		name: 'WindowCoveringUpOpen',
		mandatory: true,
		arg: []
	}, {

		label: 170,
		nameFun: 'WindowCoveringDownClose',
		nameObj: 'windowCoveringDownClose',
		commandClusterId: 258,
		server: false,
		commandId: 1,
		name: 'WindowCoveringDownClose',
		mandatory: true,
		arg: []
	}, {

		label: 171,
		nameFun: 'WindowCoveringStop',
		nameObj: 'windowCoveringStop',
		commandClusterId: 258,
		server: false,
		commandId: 2,
		name: 'WindowCoveringStop',
		mandatory: true,
		arg: []
	}, {

		label: 172,
		nameFun: 'WindowCoveringGoToLiftValue',
		nameObj: 'windowCoveringGoToLiftValue',
		commandClusterId: 258,
		server: false,
		commandId: 4,
		name: 'WindowCoveringGoToLiftValue',
		mandatory: false,
		arg: [{

			label: 0,
			name: 'liftValue',
			type: 'INT16U',
			array: false,
			arg: []
		}]
	}, {

		label: 173,
		nameFun: 'WindowCoveringGoToLiftPercentage',
		nameObj: 'windowCoveringGoToLiftPercentage',
		commandClusterId: 258,
		server: false,
		commandId: 5,
		name: 'WindowCoveringGoToLiftPercentage',
		mandatory: false,
		arg: [{

			label: 0,
			name: 'percentageLiftValue',
			type: 'INT8U',
			array: false,
			arg: []
		}]
	}, {

		label: 174,
		nameFun: 'WindowCoveringGoToTiltValue',
		nameObj: 'windowCoveringGoToTiltValue',
		commandClusterId: 258,
		server: false,
		commandId: 7,
		name: 'WindowCoveringGoToTiltValue',
		mandatory: false,
		arg: [{

			label: 0,
			name: 'tiltValue',
			type: 'INT16U',
			array: false,
			arg: []
		}]
	}, {

		label: 175,
		nameFun: 'WindowCoveringGoToTiltPercentage',
		nameObj: 'windowCoveringGoToTiltPercentage',
		commandClusterId: 258,
		server: false,
		commandId: 8,
		name: 'WindowCoveringGoToTiltPercentage',
		mandatory: false,
		arg: [{

			label: 0,
			name: 'percentageTiltValue',
			type: 'INT8U',
			array: false,
			arg: []
		}]
	}, {

		label: 176,
		nameFun: 'ExecutionOfACommand',
		nameObj: 'executionOfACommand',
		commandClusterId: 27,
		server: false,
		commandId: 0,
		name: 'ExecutionOfACommand',
		mandatory: true,
		arg: [{

			label: 0,
			name: 'commandId',
			type: 'CommandIdentification',
			array: false,
			arg: []
		}]
	}, {

		label: 177,
		nameFun: 'SignalState',
		nameObj: 'signalState',
		commandClusterId: 27,
		server: false,
		commandId: 1,
		name: 'SignalState',
		mandatory: true,
		arg: []
	}, {

		label: 178,
		nameFun: 'WriteFunctions',
		nameObj: 'writeFunctions',
		commandClusterId: 27,
		server: false,
		commandId: 2,
		name: 'WriteFunctions',
		mandatory: false,
		arg: [{

			label: 0,
			name: 'functionId',
			type: 'INT16U',
			array: false,
			arg: []
		}, {

			label: 1,
			name: 'functionDataType',
			type: 'ENUM8',
			array: false,
			arg: []
		}, {

			label: 2,
			name: 'functionData',
			type: 'INT8U',
			array: true,
			arg: []
		}]
	}, {

		label: 179,
		nameFun: 'OverloadPauseResume',
		nameObj: 'overloadPauseResume',
		commandClusterId: 27,
		server: false,
		commandId: 3,
		name: 'OverloadPauseResume',
		mandatory: false,
		arg: []
	}, {

		label: 180,
		nameFun: 'OverloadPause',
		nameObj: 'overloadPause',
		commandClusterId: 27,
		server: false,
		commandId: 4,
		name: 'OverloadPause',
		mandatory: false,
		arg: []
	}, {

		label: 181,
		nameFun: 'OverloadWarning',
		nameObj: 'overloadWarning',
		commandClusterId: 27,
		server: false,
		commandId: 5,
		name: 'OverloadWarning',
		mandatory: false,
		arg: [{

			label: 0,
			name: 'warningEvent',
			type: 'WarningEvent',
			array: false,
			arg: []
		}]
	}, {

		label: 182,
		nameFun: 'SignalStateResponse',
		nameObj: 'signalStateResponse',
		commandClusterId: 27,
		server: true,
		commandId: 0,
		name: 'SignalStateResponse',
		mandatory: true,
		arg: [{

			label: 0,
			name: 'applianceStatus',
			type: 'ApplianceStatus',
			array: false,
			arg: []
		}, {

			label: 1,
			name: 'remoteEnableFlagsAndDeviceStatus2',
			type: 'RemoteEnableFlagsAndDeviceStatus2',
			array: false,
			arg: []
		}, {

			label: 2,
			name: 'applianceStatus2',
			type: 'INT24U',
			array: false,
			arg: []
		}]
	}, {

		label: 183,
		nameFun: 'SignalStateNotification',
		nameObj: 'signalStateNotification',
		commandClusterId: 27,
		server: true,
		commandId: 1,
		name: 'SignalStateNotification',
		mandatory: true,
		arg: [{

			label: 0,
			name: 'applianceStatus',
			type: 'ApplianceStatus',
			array: false,
			arg: []
		}, {

			label: 1,
			name: 'remoteEnableFlagsAndDeviceStatus2',
			type: 'RemoteEnableFlagsAndDeviceStatus2',
			array: false,
			arg: []
		}, {

			label: 2,
			name: 'applianceStatus2',
			type: 'INT24U',
			array: false,
			arg: []
		}]
	}, {

		label: 184,
		nameFun: 'PowerProfileRequest',
		nameObj: 'powerProfileRequest',
		commandClusterId: 26,
		server: false,
		commandId: 0,
		name: 'PowerProfileRequest',
		mandatory: true,
		arg: [{

			label: 0,
			name: 'powerProfileId',
			type: 'INT8U',
			array: false,
			arg: []
		}]
	}, {

		label: 185,
		nameFun: 'PowerProfileStateRequest',
		nameObj: 'powerProfileStateRequest',
		commandClusterId: 26,
		server: false,
		commandId: 1,
		name: 'PowerProfileStateRequest',
		mandatory: true,
		arg: []
	}, {

		label: 186,
		nameFun: 'GetPowerProfilePriceResponse',
		nameObj: 'getPowerProfilePriceResponse',
		commandClusterId: 26,
		server: false,
		commandId: 2,
		name: 'GetPowerProfilePriceResponse',
		mandatory: true,
		arg: [{

			label: 0,
			name: 'powerProfileId',
			type: 'INT8U',
			array: false,
			arg: []
		}, {

			label: 1,
			name: 'currency',
			type: 'INT16U',
			array: false,
			arg: []
		}, {

			label: 2,
			name: 'price',
			type: 'INT32U',
			array: false,
			arg: []
		}, {

			label: 3,
			name: 'priceTrailingDigit',
			type: 'INT8U',
			array: false,
			arg: []
		}]
	}, {

		label: 187,
		nameFun: 'GetOverallSchedulePriceResponse',
		nameObj: 'getOverallSchedulePriceResponse',
		commandClusterId: 26,
		server: false,
		commandId: 3,
		name: 'GetOverallSchedulePriceResponse',
		mandatory: true,
		arg: [{

			label: 0,
			name: 'currency',
			type: 'INT16U',
			array: false,
			arg: []
		}, {

			label: 1,
			name: 'price',
			type: 'INT32U',
			array: false,
			arg: []
		}, {

			label: 2,
			name: 'priceTrailingDigit',
			type: 'INT8U',
			array: false,
			arg: []
		}]
	}, {

		label: 188,
		nameFun: 'EnergyPhasesScheduleNotification',
		nameObj: 'energyPhasesScheduleNotification',
		commandClusterId: 26,
		server: false,
		commandId: 4,
		name: 'EnergyPhasesScheduleNotification',
		mandatory: true,
		arg: [{

			label: 0,
			name: 'powerProfileId',
			type: 'INT8U',
			array: false,
			arg: []
		}, {

			label: 1,
			name: 'numOfScheduledPhases',
			type: 'INT8U',
			array: false,
			arg: []
		}, {

			label: 2,
			name: 'scheduledPhases',
			type: 'ScheduledPhase',
			array: true,
			arg: [{

				name: 'energyPhaseId',
				type: 'INT8U',
				label: 0
			}, {

				name: 'scheduledTime',
				type: 'INT16U',
				label: 1
			}]
		}]
	}, {

		label: 189,
		nameFun: 'EnergyPhasesScheduleResponse',
		nameObj: 'energyPhasesScheduleResponse',
		commandClusterId: 26,
		server: false,
		commandId: 5,
		name: 'EnergyPhasesScheduleResponse',
		mandatory: true,
		arg: [{

			label: 0,
			name: 'powerProfileId',
			type: 'INT8U',
			array: false,
			arg: []
		}, {

			label: 1,
			name: 'numOfScheduledPhases',
			type: 'INT8U',
			array: false,
			arg: []
		}, {

			label: 2,
			name: 'scheduledPhases',
			type: 'ScheduledPhase',
			array: true,
			arg: [{

				name: 'energyPhaseId',
				type: 'INT8U',
				label: 0
			}, {

				name: 'scheduledTime',
				type: 'INT16U',
				label: 1
			}]
		}]
	}, {

		label: 190,
		nameFun: 'PowerProfileScheduleConstraintsRequest',
		nameObj: 'powerProfileScheduleConstraintsRequest',
		commandClusterId: 26,
		server: false,
		commandId: 6,
		name: 'PowerProfileScheduleConstraintsRequest',
		mandatory: true,
		arg: [{

			label: 0,
			name: 'powerProfileId',
			type: 'INT8U',
			array: false,
			arg: []
		}]
	}, {

		label: 191,
		nameFun: 'EnergyPhasesScheduleStateRequest',
		nameObj: 'energyPhasesScheduleStateRequest',
		commandClusterId: 26,
		server: false,
		commandId: 7,
		name: 'EnergyPhasesScheduleStateRequest',
		mandatory: true,
		arg: [{

			label: 0,
			name: 'powerProfileId',
			type: 'INT8U',
			array: false,
			arg: []
		}]
	}, {

		label: 192,
		nameFun: 'GetPowerProfilePriceExtendedResponse',
		nameObj: 'getPowerProfilePriceExtendedResponse',
		commandClusterId: 26,
		server: false,
		commandId: 8,
		name: 'GetPowerProfilePriceExtendedResponse',
		mandatory: true,
		arg: [{

			label: 0,
			name: 'powerProfileId',
			type: 'INT8U',
			array: false,
			arg: []
		}, {

			label: 1,
			name: 'currency',
			type: 'INT16U',
			array: false,
			arg: []
		}, {

			label: 2,
			name: 'price',
			type: 'INT32U',
			array: false,
			arg: []
		}, {

			label: 3,
			name: 'priceTrailingDigit',
			type: 'INT8U',
			array: false,
			arg: []
		}]
	}, {

		label: 193,
		nameFun: 'PowerProfileNotification',
		nameObj: 'powerProfileNotification',
		commandClusterId: 26,
		server: true,
		commandId: 0,
		name: 'PowerProfileNotification',
		mandatory: true,
		arg: [{

			label: 0,
			name: 'totalProfileNum',
			type: 'INT8U',
			array: false,
			arg: []
		}, {

			label: 1,
			name: 'powerProfileId',
			type: 'INT8U',
			array: false,
			arg: []
		}, {

			label: 2,
			name: 'numOfTransferredPhases',
			type: 'INT8U',
			array: false,
			arg: []
		}, {

			label: 3,
			name: 'transferredPhases',
			type: 'TransferredPhase',
			array: true,
			arg: [{

				name: 'energyPhaseId',
				type: 'INT8U',
				label: 0
			}, {

				name: 'macroPhaseId',
				type: 'INT8U',
				label: 1
			}, {

				name: 'expectedDuration',
				type: 'INT16U',
				label: 2
			}, {

				name: 'peakPower',
				type: 'INT16U',
				label: 3
			}, {

				name: 'energy',
				type: 'INT16U',
				label: 4
			}, {

				name: 'maxActivationDelay',
				type: 'INT16U',
				label: 5
			}]
		}]
	}, {

		label: 194,
		nameFun: 'PowerProfileResponse',
		nameObj: 'powerProfileResponse',
		commandClusterId: 26,
		server: true,
		commandId: 1,
		name: 'PowerProfileResponse',
		mandatory: true,
		arg: [{

			label: 0,
			name: 'totalProfileNum',
			type: 'INT8U',
			array: false,
			arg: []
		}, {

			label: 1,
			name: 'powerProfileId',
			type: 'INT8U',
			array: false,
			arg: []
		}, {

			label: 2,
			name: 'numOfTransferredPhases',
			type: 'INT8U',
			array: false,
			arg: []
		}, {

			label: 3,
			name: 'transferredPhases',
			type: 'TransferredPhase',
			array: true,
			arg: [{

				name: 'energyPhaseId',
				type: 'INT8U',
				label: 0
			}, {

				name: 'macroPhaseId',
				type: 'INT8U',
				label: 1
			}, {

				name: 'expectedDuration',
				type: 'INT16U',
				label: 2
			}, {

				name: 'peakPower',
				type: 'INT16U',
				label: 3
			}, {

				name: 'energy',
				type: 'INT16U',
				label: 4
			}, {

				name: 'maxActivationDelay',
				type: 'INT16U',
				label: 5
			}]
		}]
	}, {

		label: 195,
		nameFun: 'PowerProfileStateResponse',
		nameObj: 'powerProfileStateResponse',
		commandClusterId: 26,
		server: true,
		commandId: 2,
		name: 'PowerProfileStateResponse',
		mandatory: true,
		arg: [{

			label: 0,
			name: 'powerProfileCount',
			type: 'INT8U',
			array: false,
			arg: []
		}, {

			label: 1,
			name: 'powerProfileRecords',
			type: 'PowerProfileRecord',
			array: true,
			arg: [{

				name: 'powerProfileId',
				type: 'INT8U',
				label: 0
			}, {

				name: 'energyPhaseId',
				type: 'INT8U',
				label: 1
			}, {

				name: 'powerProfileRemoteControl',
				type: 'BOOLEAN',
				label: 2
			}, {

				name: 'powerProfileState',
				type: 'ENUM8',
				label: 3
			}]
		}]
	}, {

		label: 196,
		nameFun: 'GetPowerProfilePrice',
		nameObj: 'getPowerProfilePrice',
		commandClusterId: 26,
		server: true,
		commandId: 3,
		name: 'GetPowerProfilePrice',
		mandatory: false,
		arg: [{

			label: 0,
			name: 'powerProfileId',
			type: 'INT8U',
			array: false,
			arg: []
		}]
	}, {

		label: 197,
		nameFun: 'PowerProfilesStateNotification',
		nameObj: 'powerProfilesStateNotification',
		commandClusterId: 26,
		server: true,
		commandId: 4,
		name: 'PowerProfilesStateNotification',
		mandatory: true,
		arg: [{

			label: 0,
			name: 'powerProfileCount',
			type: 'INT8U',
			array: false,
			arg: []
		}, {

			label: 1,
			name: 'powerProfileRecords',
			type: 'PowerProfileRecord',
			array: true,
			arg: [{

				name: 'powerProfileId',
				type: 'INT8U',
				label: 0
			}, {

				name: 'energyPhaseId',
				type: 'INT8U',
				label: 1
			}, {

				name: 'powerProfileRemoteControl',
				type: 'BOOLEAN',
				label: 2
			}, {

				name: 'powerProfileState',
				type: 'ENUM8',
				label: 3
			}]
		}]
	}, {

		label: 198,
		nameFun: 'GetOverallSchedulePrice',
		nameObj: 'getOverallSchedulePrice',
		commandClusterId: 26,
		server: true,
		commandId: 5,
		name: 'GetOverallSchedulePrice',
		mandatory: false,
		arg: []
	}, {

		label: 199,
		nameFun: 'EnergyPhasesScheduleRequest',
		nameObj: 'energyPhasesScheduleRequest',
		commandClusterId: 26,
		server: true,
		commandId: 6,
		name: 'EnergyPhasesScheduleRequest',
		mandatory: true,
		arg: [{

			label: 0,
			name: 'powerProfileId',
			type: 'INT8U',
			array: false,
			arg: []
		}]
	}, {

		label: 200,
		nameFun: 'EnergyPhasesScheduleStateResponse',
		nameObj: 'energyPhasesScheduleStateResponse',
		commandClusterId: 26,
		server: true,
		commandId: 7,
		name: 'EnergyPhasesScheduleStateResponse',
		mandatory: true,
		arg: [{

			label: 0,
			name: 'powerProfileId',
			type: 'INT8U',
			array: false,
			arg: []
		}, {

			label: 1,
			name: 'numOfScheduledPhases',
			type: 'INT8U',
			array: false,
			arg: []
		}, {

			label: 2,
			name: 'scheduledPhases',
			type: 'ScheduledPhase',
			array: true,
			arg: [{

				name: 'energyPhaseId',
				type: 'INT8U',
				label: 0
			}, {

				name: 'scheduledTime',
				type: 'INT16U',
				label: 1
			}]
		}]
	}, {

		label: 201,
		nameFun: 'EnergyPhasesScheduleStateNotification',
		nameObj: 'energyPhasesScheduleStateNotification',
		commandClusterId: 26,
		server: true,
		commandId: 8,
		name: 'EnergyPhasesScheduleStateNotification',
		mandatory: true,
		arg: [{

			label: 0,
			name: 'powerProfileId',
			type: 'INT8U',
			array: false,
			arg: []
		}, {

			label: 1,
			name: 'numOfScheduledPhases',
			type: 'INT8U',
			array: false,
			arg: []
		}, {

			label: 2,
			name: 'scheduledPhases',
			type: 'ScheduledPhase',
			array: true,
			arg: [{

				name: 'energyPhaseId',
				type: 'INT8U',
				label: 0
			}, {

				name: 'scheduledTime',
				type: 'INT16U',
				label: 1
			}]
		}]
	}, {

		label: 202,
		nameFun: 'PowerProfileScheduleConstraintsNotification',
		nameObj: 'powerProfileScheduleConstraintsNotification',
		commandClusterId: 26,
		server: true,
		commandId: 9,
		name: 'PowerProfileScheduleConstraintsNotification',
		mandatory: true,
		arg: [{

			label: 0,
			name: 'powerProfileId',
			type: 'INT8U',
			array: false,
			arg: []
		}, {

			label: 1,
			name: 'startAfter',
			type: 'INT16U',
			array: false,
			arg: []
		}, {

			label: 2,
			name: 'stopBefore',
			type: 'INT16U',
			array: false,
			arg: []
		}]
	}, {

		label: 203,
		nameFun: 'PowerProfileScheduleConstraintsResponse',
		nameObj: 'powerProfileScheduleConstraintsResponse',
		commandClusterId: 26,
		server: true,
		commandId: 10,
		name: 'PowerProfileScheduleConstraintsResponse',
		mandatory: true,
		arg: [{

			label: 0,
			name: 'powerProfileId',
			type: 'INT8U',
			array: false,
			arg: []
		}, {

			label: 1,
			name: 'startAfter',
			type: 'INT16U',
			array: false,
			arg: []
		}, {

			label: 2,
			name: 'stopBefore',
			type: 'INT16U',
			array: false,
			arg: []
		}]
	}, {

		label: 204,
		nameFun: 'GetPowerProfilePriceExtended',
		nameObj: 'getPowerProfilePriceExtended',
		commandClusterId: 26,
		server: true,
		commandId: 11,
		name: 'GetPowerProfilePriceExtended',
		mandatory: false,
		arg: [{

			label: 0,
			name: 'options',
			type: 'BITMAP8',
			array: false,
			arg: []
		}, {

			label: 1,
			name: 'powerProfileId',
			type: 'INT8U',
			array: false,
			arg: []
		}, {

			label: 2,
			name: 'powerProfileStartTime',
			type: 'INT16U',
			array: false,
			arg: []
		}]
	}, {

		label: 205,
		nameFun: 'CheckIn',
		nameObj: 'checkIn',
		commandClusterId: 32,
		server: true,
		commandId: 0,
		name: 'CheckIn',
		mandatory: true,
		arg: []
	}, {

		label: 206,
		nameFun: 'CheckInResponse',
		nameObj: 'checkInResponse',
		commandClusterId: 32,
		server: false,
		commandId: 0,
		name: 'CheckInResponse',
		mandatory: true,
		arg: [{

			label: 0,
			name: 'startFastPolling',
			type: 'BOOLEAN',
			array: false,
			arg: []
		}, {

			label: 1,
			name: 'fastPollTimeout',
			type: 'INT16U',
			array: false,
			arg: []
		}]
	}, {

		label: 207,
		nameFun: 'FastPollStop',
		nameObj: 'fastPollStop',
		commandClusterId: 32,
		server: false,
		commandId: 1,
		name: 'FastPollStop',
		mandatory: true,
		arg: []
	}, {

		label: 208,
		nameFun: 'SetLongPollInterval',
		nameObj: 'setLongPollInterval',
		commandClusterId: 32,
		server: false,
		commandId: 2,
		name: 'SetLongPollInterval',
		mandatory: false,
		arg: [{

			label: 0,
			name: 'newLongPollInterval',
			type: 'INT32U',
			array: false,
			arg: []
		}]
	}, {

		label: 209,
		nameFun: 'SetShortPollInterval',
		nameObj: 'setShortPollInterval',
		commandClusterId: 32,
		server: false,
		commandId: 3,
		name: 'SetShortPollInterval',
		mandatory: false,
		arg: [{

			label: 0,
			name: 'newShortPollInterval',
			type: 'INT16U',
			array: false,
			arg: []
		}]
	}, {

		label: 210,
		nameFun: 'GetAlerts',
		nameObj: 'getAlerts',
		commandClusterId: 2818,
		server: false,
		commandId: 0,
		name: 'GetAlerts',
		mandatory: true,
		arg: []
	}, {

		label: 211,
		nameFun: 'GetAlertsResponse',
		nameObj: 'getAlertsResponse',
		commandClusterId: 2818,
		server: true,
		commandId: 0,
		name: 'GetAlertsResponse',
		mandatory: true,
		arg: [{

			label: 0,
			name: 'alertsCount',
			type: 'AlertCount',
			array: false,
			arg: []
		}, {

			label: 1,
			name: 'alertStructures',
			type: 'AlertStructure',
			array: true,
			arg: []
		}]
	}, {

		label: 212,
		nameFun: 'AlertsNotification',
		nameObj: 'alertsNotification',
		commandClusterId: 2818,
		server: true,
		commandId: 1,
		name: 'AlertsNotification',
		mandatory: true,
		arg: [{

			label: 0,
			name: 'alertsCount',
			type: 'AlertCount',
			array: false,
			arg: []
		}, {

			label: 1,
			name: 'alertStructures',
			type: 'AlertStructure',
			array: true,
			arg: []
		}]
	}, {

		label: 213,
		nameFun: 'EventsNotification',
		nameObj: 'eventsNotification',
		commandClusterId: 2818,
		server: true,
		commandId: 2,
		name: 'EventsNotification',
		mandatory: true,
		arg: [{

			label: 0,
			name: 'eventHeader',
			type: 'INT8U',
			array: false,
			arg: []
		}, {

			label: 1,
			name: 'eventId',
			type: 'EventIdentification',
			array: false,
			arg: []
		}]
	}, {

		label: 214,
		nameFun: 'LogNotification',
		nameObj: 'logNotification',
		commandClusterId: 2819,
		server: true,
		commandId: 0,
		name: 'LogNotification',
		mandatory: true,
		arg: [{

			label: 0,
			name: 'timeStamp',
			type: 'TIME_OF_DAY',
			array: false,
			arg: []
		}, {

			label: 1,
			name: 'logId',
			type: 'INT32U',
			array: false,
			arg: []
		}, {

			label: 2,
			name: 'logLength',
			type: 'INT32U',
			array: false,
			arg: []
		}, {

			label: 3,
			name: 'logPayload',
			type: 'INT8U',
			array: true,
			arg: []
		}]
	}, {

		label: 215,
		nameFun: 'LogResponse',
		nameObj: 'logResponse',
		commandClusterId: 2819,
		server: true,
		commandId: 1,
		name: 'LogResponse',
		mandatory: true,
		arg: [{

			label: 0,
			name: 'timeStamp',
			type: 'TIME_OF_DAY',
			array: false,
			arg: []
		}, {

			label: 1,
			name: 'logId',
			type: 'INT32U',
			array: false,
			arg: []
		}, {

			label: 2,
			name: 'logLength',
			type: 'INT32U',
			array: false,
			arg: []
		}, {

			label: 3,
			name: 'logPayload',
			type: 'INT8U',
			array: true,
			arg: []
		}]
	}, {

		label: 216,
		nameFun: 'LogQueueResponse',
		nameObj: 'logQueueResponse',
		commandClusterId: 2819,
		server: true,
		commandId: 2,
		name: 'LogQueueResponse',
		mandatory: true,
		arg: [{

			label: 0,
			name: 'logQueueSize',
			type: 'INT8U',
			array: false,
			arg: []
		}, {

			label: 1,
			name: 'logIds',
			type: 'INT32U',
			array: true,
			arg: []
		}]
	}, {

		label: 217,
		nameFun: 'StatisticsAvailable',
		nameObj: 'statisticsAvailable',
		commandClusterId: 2819,
		server: true,
		commandId: 3,
		name: 'StatisticsAvailable',
		mandatory: true,
		arg: [{

			label: 0,
			name: 'logQueueSize',
			type: 'INT8U',
			array: false,
			arg: []
		}, {

			label: 1,
			name: 'logIds',
			type: 'INT32U',
			array: true,
			arg: []
		}]
	}, {

		label: 218,
		nameFun: 'LogRequest',
		nameObj: 'logRequest',
		commandClusterId: 2819,
		server: false,
		commandId: 0,
		name: 'LogRequest',
		mandatory: true,
		arg: [{

			label: 0,
			name: 'logId',
			type: 'INT32U',
			array: false,
			arg: []
		}]
	}, {

		label: 219,
		nameFun: 'LogQueueRequest',
		nameObj: 'logQueueRequest',
		commandClusterId: 2819,
		server: false,
		commandId: 1,
		name: 'LogQueueRequest',
		mandatory: true,
		arg: []
	}, {

		label: 220,
		nameFun: 'GetProfileInfoResponseCommand',
		nameObj: 'getProfileInfoResponseCommand',
		commandClusterId: 2820,
		server: true,
		commandId: 0,
		name: 'GetProfileInfoResponseCommand',
		mandatory: false,
		arg: [{

			label: 0,
			name: 'profileCount',
			type: 'INT8U',
			array: false,
			arg: []
		}, {

			label: 1,
			name: 'profileIntervalPeriod',
			type: 'ENUM8',
			array: false,
			arg: []
		}, {

			label: 2,
			name: 'maxNumberOfIntervals',
			type: 'INT8U',
			array: false,
			arg: []
		}, {

			label: 3,
			name: 'listOfAttributes',
			type: 'INT16U',
			array: true,
			arg: []
		}]
	}, {

		label: 221,
		nameFun: 'GetMeasurementProfileResponseCommand',
		nameObj: 'getMeasurementProfileResponseCommand',
		commandClusterId: 2820,
		server: true,
		commandId: 1,
		name: 'GetMeasurementProfileResponseCommand',
		mandatory: false,
		arg: [{

			label: 0,
			name: 'startTime',
			type: 'INT32U',
			array: false,
			arg: []
		}, {

			label: 1,
			name: 'status',
			type: 'ENUM8',
			array: false,
			arg: []
		}, {

			label: 2,
			name: 'profileIntervalPeriod',
			type: 'ENUM8',
			array: false,
			arg: []
		}, {

			label: 3,
			name: 'numberOfIntervalsDelivered',
			type: 'INT8U',
			array: false,
			arg: []
		}, {

			label: 4,
			name: 'attributeId',
			type: 'INT16U',
			array: false,
			arg: []
		}, {

			label: 5,
			name: 'intervals',
			type: 'INT8U',
			array: true,
			arg: []
		}]
	}, {

		label: 222,
		nameFun: 'GetProfileInfoCommand',
		nameObj: 'getProfileInfoCommand',
		commandClusterId: 2820,
		server: false,
		commandId: 0,
		name: 'GetProfileInfoCommand',
		mandatory: false,
		arg: []
	}, {

		label: 223,
		nameFun: 'GetMeasurementProfileCommand',
		nameObj: 'getMeasurementProfileCommand',
		commandClusterId: 2820,
		server: false,
		commandId: 1,
		name: 'GetMeasurementProfileCommand',
		mandatory: false,
		arg: [{

			label: 0,
			name: 'attributeId',
			type: 'INT16U',
			array: false,
			arg: []
		}, {

			label: 1,
			name: 'startTime',
			type: 'INT32U',
			array: false,
			arg: []
		}, {

			label: 2,
			name: 'numberOfIntervals',
			type: 'ENUM8',
			array: false,
			arg: []
		}]
	}, {

		label: 224,
		nameFun: 'LoadControlEvent',
		nameObj: 'loadControlEvent',
		commandClusterId: 1793,
		server: true,
		commandId: 0,
		name: 'LoadControlEvent',
		mandatory: true,
		arg: [{

			label: 0,
			name: 'issuerEventId',
			type: 'INT32U',
			array: false,
			arg: []
		}, {

			label: 1,
			name: 'deviceClass',
			type: 'AmiDeviceClass',
			array: false,
			arg: []
		}, {

			label: 2,
			name: 'utilityEnrollmentGroup',
			type: 'INT8U',
			array: false,
			arg: []
		}, {

			label: 3,
			name: 'startTime',
			type: 'TIME_OF_DAY',
			array: false,
			arg: []
		}, {

			label: 4,
			name: 'durationInMinutes',
			type: 'INT16U',
			array: false,
			arg: []
		}, {

			label: 5,
			name: 'criticalityLevel',
			type: 'AmiCriticalityLevel',
			array: false,
			arg: []
		}, {

			label: 6,
			name: 'coolingTemperatureOffset',
			type: 'INT8U',
			array: false,
			arg: []
		}, {

			label: 7,
			name: 'heatingTemperatureOffset',
			type: 'INT8U',
			array: false,
			arg: []
		}, {

			label: 8,
			name: 'coolingTemperatureSetPoint',
			type: 'INT16S',
			array: false,
			arg: []
		}, {

			label: 9,
			name: 'heatingTemperatureSetPoint',
			type: 'INT16S',
			array: false,
			arg: []
		}, {

			label: 10,
			name: 'averageLoadAdjustmentPercentage',
			type: 'INT8S',
			array: false,
			arg: []
		}, {

			label: 11,
			name: 'dutyCycle',
			type: 'INT8U',
			array: false,
			arg: []
		}, {

			label: 12,
			name: 'eventControl',
			type: 'AmiEventControl',
			array: false,
			arg: []
		}]
	}, {

		label: 225,
		nameFun: 'CancelLoadControlEvent',
		nameObj: 'cancelLoadControlEvent',
		commandClusterId: 1793,
		server: true,
		commandId: 1,
		name: 'CancelLoadControlEvent',
		mandatory: true,
		arg: [{

			label: 0,
			name: 'issuerEventId',
			type: 'INT32U',
			array: false,
			arg: []
		}, {

			label: 1,
			name: 'deviceClass',
			type: 'AmiDeviceClass',
			array: false,
			arg: []
		}, {

			label: 2,
			name: 'utilityEnrollmentGroup',
			type: 'INT8U',
			array: false,
			arg: []
		}, {

			label: 3,
			name: 'cancelControl',
			type: 'AmiCancelControl',
			array: false,
			arg: []
		}, {

			label: 4,
			name: 'effectiveTime',
			type: 'TIME_OF_DAY',
			array: false,
			arg: []
		}]
	}, {

		label: 226,
		nameFun: 'CancelAllLoadControlEvents',
		nameObj: 'cancelAllLoadControlEvents',
		commandClusterId: 1793,
		server: true,
		commandId: 2,
		name: 'CancelAllLoadControlEvents',
		mandatory: true,
		arg: [{

			label: 0,
			name: 'cancelControl',
			type: 'AmiCancelControl',
			array: false,
			arg: []
		}]
	}, {

		label: 227,
		nameFun: 'ReportEventStatus',
		nameObj: 'reportEventStatus',
		commandClusterId: 1793,
		server: false,
		commandId: 0,
		name: 'ReportEventStatus',
		mandatory: true,
		arg: [{

			label: 0,
			name: 'issuerEventId',
			type: 'INT32U',
			array: false,
			arg: []
		}, {

			label: 1,
			name: 'eventStatus',
			type: 'AmiEventStatus',
			array: false,
			arg: []
		}, {

			label: 2,
			name: 'eventStatusTime',
			type: 'TIME_OF_DAY',
			array: false,
			arg: []
		}, {

			label: 3,
			name: 'criticalityLevelApplied',
			type: 'AmiCriticalityLevel',
			array: false,
			arg: []
		}, {

			label: 4,
			name: 'coolingTemperatureSetPointApplied',
			type: 'INT16S',
			array: false,
			arg: []
		}, {

			label: 5,
			name: 'heatingTemperatureSetPointApplied',
			type: 'INT16S',
			array: false,
			arg: []
		}, {

			label: 6,
			name: 'averageLoadAdjustmentPercentageApplied',
			type: 'INT8S',
			array: false,
			arg: []
		}, {

			label: 7,
			name: 'dutyCycleApplied',
			type: 'INT8U',
			array: false,
			arg: []
		}, {

			label: 8,
			name: 'eventControl',
			type: 'AmiEventControl',
			array: false,
			arg: []
		}, {

			label: 9,
			name: 'signatureType',
			type: 'SignatureType',
			array: false,
			arg: []
		}, {

			label: 10,
			name: 'signature',
			type: 'Signature',
			array: false,
			arg: []
		}]
	}, {

		label: 228,
		nameFun: 'GetScheduledEvents',
		nameObj: 'getScheduledEvents',
		commandClusterId: 1793,
		server: false,
		commandId: 1,
		name: 'GetScheduledEvents',
		mandatory: true,
		arg: [{

			label: 0,
			name: 'startTime',
			type: 'TIME_OF_DAY',
			array: false,
			arg: []
		}, {

			label: 1,
			name: 'numberOfEvents',
			type: 'INT8U',
			array: false,
			arg: []
		}]
	}, {

		label: 229,
		nameFun: 'GetProfileResponse',
		nameObj: 'getProfileResponse',
		commandClusterId: 1794,
		server: true,
		commandId: 0,
		name: 'GetProfileResponse',
		mandatory: false,
		arg: [{

			label: 0,
			name: 'endTime',
			type: 'UTC_TIME',
			array: false,
			arg: []
		}, {

			label: 1,
			name: 'status',
			type: 'AmiGetProfileStatus',
			array: false,
			arg: []
		}, {

			label: 2,
			name: 'profileIntervalPeriod',
			type: 'AmiIntervalPeriod',
			array: false,
			arg: []
		}, {

			label: 3,
			name: 'numberOfPeriodsDelivered',
			type: 'INT8U',
			array: false,
			arg: []
		}, {

			label: 4,
			name: 'intervals',
			type: 'INT24U',
			array: true,
			arg: []
		}]
	}, {

		label: 230,
		nameFun: 'RequestMirror',
		nameObj: 'requestMirror',
		commandClusterId: 1794,
		server: true,
		commandId: 1,
		name: 'RequestMirror',
		mandatory: false,
		arg: []
	}, {

		label: 231,
		nameFun: 'RemoveMirror',
		nameObj: 'removeMirror',
		commandClusterId: 1794,
		server: true,
		commandId: 2,
		name: 'RemoveMirror',
		mandatory: false,
		arg: []
	}, {

		label: 232,
		nameFun: 'RequestFastPollModeResponse',
		nameObj: 'requestFastPollModeResponse',
		commandClusterId: 1794,
		server: true,
		commandId: 3,
		name: 'RequestFastPollModeResponse',
		mandatory: false,
		arg: [{

			label: 0,
			name: 'appliedUpdatePeriod',
			type: 'INT8U',
			array: false,
			arg: []
		}, {

			label: 1,
			name: 'fastPollModeEndtime',
			type: 'UTC_TIME',
			array: false,
			arg: []
		}]
	}, {

		label: 233,
		nameFun: 'ConfigureMirror',
		nameObj: 'configureMirror',
		commandClusterId: 1794,
		server: true,
		commandId: 8,
		name: 'ConfigureMirror',
		mandatory: false,
		arg: [{

			label: 0,
			name: 'issuerEventId',
			type: 'INT32U',
			array: false,
			arg: []
		}, {

			label: 1,
			name: 'changeReportingProfile',
			type: 'INT24U',
			array: false,
			arg: []
		}, {

			label: 2,
			name: 'mirrorNotificationReporting',
			type: 'BOOLEAN',
			array: false,
			arg: []
		}, {

			label: 3,
			name: 'notificationScheme',
			type: 'INT8U',
			array: false,
			arg: []
		}]
	}, {

		label: 234,
		nameFun: 'ConfigureNotificationScheme',
		nameObj: 'configureNotificationScheme',
		commandClusterId: 1794,
		server: true,
		commandId: 9,
		name: 'ConfigureNotificationScheme',
		mandatory: false,
		arg: [{

			label: 0,
			name: 'issuerEventId',
			type: 'INT32U',
			array: false,
			arg: []
		}, {

			label: 1,
			name: 'notificationScheme',
			type: 'INT8U',
			array: false,
			arg: []
		}, {

			label: 2,
			name: 'notificationFlagOrder',
			type: 'BITMAP32',
			array: false,
			arg: []
		}]
	}, {

		label: 235,
		nameFun: 'ConfigureNotificationFlags',
		nameObj: 'configureNotificationFlags',
		commandClusterId: 1794,
		server: true,
		commandId: 10,
		name: 'ConfigureNotificationFlags',
		mandatory: false,
		arg: [{

			label: 0,
			name: 'issuerEventId',
			type: 'INT32U',
			array: false,
			arg: []
		}, {

			label: 1,
			name: 'notificationScheme',
			type: 'INT8U',
			array: false,
			arg: []
		}, {

			label: 2,
			name: 'notificationFlagAttributeId',
			type: 'INT16U',
			array: false,
			arg: []
		}, {

			label: 3,
			name: 'clusterId',
			type: 'INT16U',
			array: false,
			arg: []
		}, {

			label: 4,
			name: 'manufacturerCode',
			type: 'INT16U',
			array: false,
			arg: []
		}, {

			label: 5,
			name: 'numberOfCommands',
			type: 'INT8U',
			array: false,
			arg: []
		}, {

			label: 6,
			name: 'commandIds',
			type: 'INT8U',
			array: true,
			arg: []
		}]
	}, {

		label: 236,
		nameFun: 'GetNotificationFlag',
		nameObj: 'getNotificationFlag',
		commandClusterId: 1794,
		server: true,
		commandId: 11,
		name: 'GetNotificationFlag',
		mandatory: false,
		arg: [{

			label: 0,
			name: 'notificationScheme',
			type: 'INT8U',
			array: false,
			arg: []
		}, {

			label: 1,
			name: 'notificationFlagAttributeId',
			type: 'INT16U',
			array: false,
			arg: []
		}, {

			label: 2,
			name: 'notificationFlagsN',
			type: 'BITMAP32',
			array: false,
			arg: []
		}]
	}, {

		label: 237,
		nameFun: 'GetProfile',
		nameObj: 'getProfile',
		commandClusterId: 1794,
		server: false,
		commandId: 0,
		name: 'GetProfile',
		mandatory: false,
		arg: [{

			label: 0,
			name: 'intervalChannel',
			type: 'AmiIntervalChannel',
			array: false,
			arg: []
		}, {

			label: 1,
			name: 'endTime',
			type: 'UTC_TIME',
			array: false,
			arg: []
		}, {

			label: 2,
			name: 'numberOfPeriods',
			type: 'INT8U',
			array: false,
			arg: []
		}]
	}, {

		label: 238,
		nameFun: 'RequestMirrorResponse',
		nameObj: 'requestMirrorResponse',
		commandClusterId: 1794,
		server: false,
		commandId: 1,
		name: 'RequestMirrorResponse',
		mandatory: false,
		arg: [{

			label: 0,
			name: 'endpointId',
			type: 'INT16U',
			array: false,
			arg: []
		}]
	}, {

		label: 239,
		nameFun: 'MirrorRemoved',
		nameObj: 'mirrorRemoved',
		commandClusterId: 1794,
		server: false,
		commandId: 2,
		name: 'MirrorRemoved',
		mandatory: false,
		arg: [{

			label: 0,
			name: 'endpointId',
			type: 'INT16U',
			array: false,
			arg: []
		}]
	}, {

		label: 240,
		nameFun: 'RequestFastPollMode',
		nameObj: 'requestFastPollMode',
		commandClusterId: 1794,
		server: false,
		commandId: 3,
		name: 'RequestFastPollMode',
		mandatory: false,
		arg: [{

			label: 0,
			name: 'fastPollUpdatePeriod',
			type: 'INT8U',
			array: false,
			arg: []
		}, {

			label: 1,
			name: 'duration',
			type: 'INT8U',
			array: false,
			arg: []
		}]
	}, {

		label: 241,
		nameFun: 'ScheduleSnapshotResponse',
		nameObj: 'scheduleSnapshotResponse',
		commandClusterId: 1794,
		server: true,
		commandId: 4,
		name: 'ScheduleSnapshotResponse',
		mandatory: false,
		arg: [{

			label: 0,
			name: 'issuerEventId',
			type: 'INT32U',
			array: false,
			arg: []
		}, {

			label: 1,
			name: 'snapshotResponsePayload',
			type: 'INT8U',
			array: true,
			arg: []
		}]
	}, {

		label: 242,
		nameFun: 'TakeSnapshotResponse',
		nameObj: 'takeSnapshotResponse',
		commandClusterId: 1794,
		server: true,
		commandId: 5,
		name: 'TakeSnapshotResponse',
		mandatory: false,
		arg: [{

			label: 0,
			name: 'snapshotId',
			type: 'INT32U',
			array: false,
			arg: []
		}, {

			label: 1,
			name: 'snapshotConfirmation',
			type: 'INT8U',
			array: false,
			arg: []
		}]
	}, {

		label: 243,
		nameFun: 'PublishSnapshot',
		nameObj: 'publishSnapshot',
		commandClusterId: 1794,
		server: true,
		commandId: 6,
		name: 'PublishSnapshot',
		mandatory: false,
		arg: [{

			label: 0,
			name: 'snapshotId',
			type: 'INT32U',
			array: false,
			arg: []
		}, {

			label: 1,
			name: 'snapshotTime',
			type: 'UTC_TIME',
			array: false,
			arg: []
		}, {

			label: 2,
			name: 'totalSnapshotsFound',
			type: 'INT8U',
			array: false,
			arg: []
		}, {

			label: 3,
			name: 'commandIndex',
			type: 'INT8U',
			array: false,
			arg: []
		}, {

			label: 4,
			name: 'totalCommands',
			type: 'INT8U',
			array: false,
			arg: []
		}, {

			label: 5,
			name: 'snapshotCause',
			type: 'SnapshotCause',
			array: false,
			arg: []
		}, {

			label: 6,
			name: 'snapshotPayloadType',
			type: 'SnapshotPayloadType',
			array: false,
			arg: []
		}, {

			label: 7,
			name: 'snapshotPayload',
			type: 'INT8U',
			array: true,
			arg: []
		}]
	}, {

		label: 244,
		nameFun: 'GetSampledDataResponse',
		nameObj: 'getSampledDataResponse',
		commandClusterId: 1794,
		server: true,
		commandId: 7,
		name: 'GetSampledDataResponse',
		mandatory: false,
		arg: [{

			label: 0,
			name: 'sampleRequestId',
			type: 'INT32U',
			array: false,
			arg: []
		}, {

			label: 1,
			name: 'sampleStartTime',
			type: 'UTC_TIME',
			array: false,
			arg: []
		}, {

			label: 2,
			name: 'sampleType',
			type: 'ENUM8',
			array: false,
			arg: []
		}, {

			label: 3,
			name: 'numberOfSamples',
			type: 'INT16U',
			array: false,
			arg: []
		}, {

			label: 4,
			name: 'samples',
			type: 'INT24U',
			array: true,
			arg: []
		}]
	}, {

		label: 245,
		nameFun: 'ScheduleSnapshot',
		nameObj: 'scheduleSnapshot',
		commandClusterId: 1794,
		server: false,
		commandId: 4,
		name: 'ScheduleSnapshot',
		mandatory: false,
		arg: [{

			label: 0,
			name: 'issuerEventId',
			type: 'INT32U',
			array: false,
			arg: []
		}, {

			label: 1,
			name: 'commandIndex',
			type: 'INT8U',
			array: false,
			arg: []
		}, {

			label: 2,
			name: 'commandCount',
			type: 'INT8U',
			array: false,
			arg: []
		}, {

			label: 3,
			name: 'snapshotSchedulePayload',
			type: 'SnapshotSchedulePayload',
			array: true,
			arg: []
		}]
	}, {

		label: 246,
		nameFun: 'TakeSnapshot',
		nameObj: 'takeSnapshot',
		commandClusterId: 1794,
		server: false,
		commandId: 5,
		name: 'TakeSnapshot',
		mandatory: false,
		arg: [{

			label: 0,
			name: 'snapshotCause',
			type: 'SnapshotCause',
			array: false,
			arg: []
		}]
	}, {

		label: 247,
		nameFun: 'GetSnapshot',
		nameObj: 'getSnapshot',
		commandClusterId: 1794,
		server: false,
		commandId: 6,
		name: 'GetSnapshot',
		mandatory: false,
		arg: [{

			label: 0,
			name: 'earliestStartTime',
			type: 'UTC_TIME',
			array: false,
			arg: []
		}, {

			label: 1,
			name: 'snapshotOffset',
			type: 'INT8U',
			array: false,
			arg: []
		}, {

			label: 2,
			name: 'snapshotCause',
			type: 'SnapshotCause',
			array: false,
			arg: []
		}]
	}, {

		label: 248,
		nameFun: 'StartSampling',
		nameObj: 'startSampling',
		commandClusterId: 1794,
		server: false,
		commandId: 7,
		name: 'StartSampling',
		mandatory: false,
		arg: [{

			label: 0,
			name: 'issuerEventId',
			type: 'INT32U',
			array: false,
			arg: []
		}, {

			label: 1,
			name: 'startSamplingTime',
			type: 'UTC_TIME',
			array: false,
			arg: []
		}, {

			label: 2,
			name: 'sampleType',
			type: 'ENUM8',
			array: false,
			arg: []
		}, {

			label: 3,
			name: 'sampleRequestInterval',
			type: 'INT16U',
			array: false,
			arg: []
		}, {

			label: 4,
			name: 'maxNumberOfSamples',
			type: 'INT16U',
			array: false,
			arg: []
		}]
	}, {

		label: 249,
		nameFun: 'GetSampledData',
		nameObj: 'getSampledData',
		commandClusterId: 1794,
		server: false,
		commandId: 8,
		name: 'GetSampledData',
		mandatory: false,
		arg: [{

			label: 0,
			name: 'sampleRequestId',
			type: 'INT32U',
			array: false,
			arg: []
		}, {

			label: 1,
			name: 'sampleStartTime',
			type: 'UTC_TIME',
			array: false,
			arg: []
		}, {

			label: 2,
			name: 'sampleType',
			type: 'ENUM8',
			array: false,
			arg: []
		}, {

			label: 3,
			name: 'numberOfSamples',
			type: 'INT16U',
			array: false,
			arg: []
		}]
	}, {

		label: 250,
		nameFun: 'MirrorReportAttributeResponse',
		nameObj: 'mirrorReportAttributeResponse',
		commandClusterId: 1794,
		server: false,
		commandId: 9,
		name: 'MirrorReportAttributeResponse',
		mandatory: false,
		arg: [{

			label: 0,
			name: 'notificationScheme',
			type: 'INT8U',
			array: false,
			arg: []
		}, {

			label: 1,
			name: 'notificationFlags',
			type: 'INT32U',
			array: true,
			arg: []
		}]
	}, {

		label: 251,
		nameFun: 'ResetLoadLimitCounter',
		nameObj: 'resetLoadLimitCounter',
		commandClusterId: 1794,
		server: false,
		commandId: 10,
		name: 'ResetLoadLimitCounter',
		mandatory: false,
		arg: [{

			label: 0,
			name: 'providerId',
			type: 'INT32U',
			array: false,
			arg: []
		}, {

			label: 1,
			name: 'issuerEventId',
			type: 'INT32U',
			array: false,
			arg: []
		}]
	}, {

		label: 252,
		nameFun: 'PublishPrice',
		nameObj: 'publishPrice',
		commandClusterId: 1792,
		server: true,
		commandId: 0,
		name: 'PublishPrice',
		mandatory: true,
		arg: [{

			label: 0,
			name: 'providerId',
			type: 'INT32U',
			array: false,
			arg: []
		}, {

			label: 1,
			name: 'rateLabel',
			type: 'OCTET_STRING',
			array: false,
			arg: []
		}, {

			label: 2,
			name: 'issuerEventId',
			type: 'INT32U',
			array: false,
			arg: []
		}, {

			label: 3,
			name: 'currentTime',
			type: 'TIME_OF_DAY',
			array: false,
			arg: []
		}, {

			label: 4,
			name: 'unitOfMeasure',
			type: 'AmiUnitOfMeasure',
			array: false,
			arg: []
		}, {

			label: 5,
			name: 'currency',
			type: 'INT16U',
			array: false,
			arg: []
		}, {

			label: 6,
			name: 'priceTrailingDigitAndPriceTier',
			type: 'BITMAP8',
			array: false,
			arg: []
		}, {

			label: 7,
			name: 'numberOfPriceTiersAndRegisterTier',
			type: 'BITMAP8',
			array: false,
			arg: []
		}, {

			label: 8,
			name: 'startTime',
			type: 'TIME_OF_DAY',
			array: false,
			arg: []
		}, {

			label: 9,
			name: 'durationInMinutes',
			type: 'INT16U',
			array: false,
			arg: []
		}, {

			label: 10,
			name: 'price',
			type: 'INT32U',
			array: false,
			arg: []
		}, {

			label: 11,
			name: 'priceRatio',
			type: 'INT8U',
			array: false,
			arg: []
		}, {

			label: 12,
			name: 'generationPrice',
			type: 'INT32U',
			array: false,
			arg: []
		}, {

			label: 13,
			name: 'generationPriceRatio',
			type: 'INT8U',
			array: false,
			arg: []
		}, {

			label: 14,
			name: 'alternateCostDelivered',
			type: 'INT32U',
			array: false,
			arg: []
		}, {

			label: 15,
			name: 'alternateCostUnit',
			type: 'ENUM8',
			array: false,
			arg: []
		}, {

			label: 16,
			name: 'alternateCostTrailingDigit',
			type: 'BITMAP8',
			array: false,
			arg: []
		}, {

			label: 17,
			name: 'numberOfBlockThresholds',
			type: 'INT8U',
			array: false,
			arg: []
		}, {

			label: 18,
			name: 'priceControl',
			type: 'PriceControlMask',
			array: false,
			arg: []
		}, {

			label: 19,
			name: 'numberOfGenerationTiers',
			type: 'INT8U',
			array: false,
			arg: []
		}, {

			label: 20,
			name: 'generationTier',
			type: 'ENUM8',
			array: false,
			arg: []
		}, {

			label: 21,
			name: 'extendedNumberOfPriceTiers',
			type: 'ENUM8',
			array: false,
			arg: []
		}, {

			label: 22,
			name: 'extendedPriceTier',
			type: 'ENUM8',
			array: false,
			arg: []
		}, {

			label: 23,
			name: 'extendedRegisterTier',
			type: 'ENUM8',
			array: false,
			arg: []
		}]
	}, {

		label: 253,
		nameFun: 'PublishConversionFactor',
		nameObj: 'publishConversionFactor',
		commandClusterId: 1792,
		server: true,
		commandId: 2,
		name: 'PublishConversionFactor',
		mandatory: false,
		arg: [{

			label: 0,
			name: 'issuerEventId',
			type: 'INT32U',
			array: false,
			arg: []
		}, {

			label: 1,
			name: 'startTime',
			type: 'UTC_TIME',
			array: false,
			arg: []
		}, {

			label: 2,
			name: 'conversionFactor',
			type: 'INT32U',
			array: false,
			arg: []
		}, {

			label: 3,
			name: 'conversionFactorTrailingDigit',
			type: 'BITMAP8',
			array: false,
			arg: []
		}]
	}, {

		label: 254,
		nameFun: 'PublishCalorificValue',
		nameObj: 'publishCalorificValue',
		commandClusterId: 1792,
		server: true,
		commandId: 3,
		name: 'PublishCalorificValue',
		mandatory: false,
		arg: [{

			label: 0,
			name: 'issuerEventId',
			type: 'INT32U',
			array: false,
			arg: []
		}, {

			label: 1,
			name: 'startTime',
			type: 'UTC_TIME',
			array: false,
			arg: []
		}, {

			label: 2,
			name: 'calorificValue',
			type: 'INT32U',
			array: false,
			arg: []
		}, {

			label: 3,
			name: 'calorificValueUnit',
			type: 'CalorificValueUnit',
			array: false,
			arg: []
		}, {

			label: 4,
			name: 'calorificValueTrailingDigit',
			type: 'BITMAP8',
			array: false,
			arg: []
		}]
	}, {

		label: 255,
		nameFun: 'GetCurrentPrice',
		nameObj: 'getCurrentPrice',
		commandClusterId: 1792,
		server: false,
		commandId: 0,
		name: 'GetCurrentPrice',
		mandatory: true,
		arg: [{

			label: 0,
			name: 'commandOptions',
			type: 'AmiCommandOptions',
			array: false,
			arg: []
		}]
	}, {

		label: 256,
		nameFun: 'GetScheduledPrices',
		nameObj: 'getScheduledPrices',
		commandClusterId: 1792,
		server: false,
		commandId: 1,
		name: 'GetScheduledPrices',
		mandatory: false,
		arg: [{

			label: 0,
			name: 'startTime',
			type: 'TIME_OF_DAY',
			array: false,
			arg: []
		}, {

			label: 1,
			name: 'numberOfEvents',
			type: 'INT8U',
			array: false,
			arg: []
		}]
	}, {

		label: 257,
		nameFun: 'PriceAcknowledgement',
		nameObj: 'priceAcknowledgement',
		commandClusterId: 1792,
		server: false,
		commandId: 2,
		name: 'PriceAcknowledgement',
		mandatory: true,
		arg: [{

			label: 0,
			name: 'providerId',
			type: 'INT32U',
			array: false,
			arg: []
		}, {

			label: 1,
			name: 'issuerEventId',
			type: 'INT32U',
			array: false,
			arg: []
		}, {

			label: 2,
			name: 'priceAckTime',
			type: 'TIME_OF_DAY',
			array: false,
			arg: []
		}, {

			label: 3,
			name: 'control',
			type: 'BITMAP8',
			array: false,
			arg: []
		}]
	}, {

		label: 258,
		nameFun: 'GetBlockPeriods',
		nameObj: 'getBlockPeriods',
		commandClusterId: 1792,
		server: false,
		commandId: 3,
		name: 'GetBlockPeriods',
		mandatory: false,
		arg: [{

			label: 0,
			name: 'startTime',
			type: 'TIME_OF_DAY',
			array: false,
			arg: []
		}, {

			label: 1,
			name: 'numberOfEvents',
			type: 'INT8U',
			array: false,
			arg: []
		}, {

			label: 2,
			name: 'tariffType',
			type: 'BITMAP8',
			array: false,
			arg: []
		}]
	}, {

		label: 259,
		nameFun: 'GetConversionFactor',
		nameObj: 'getConversionFactor',
		commandClusterId: 1792,
		server: false,
		commandId: 4,
		name: 'GetConversionFactor',
		mandatory: false,
		arg: [{

			label: 0,
			name: 'earliestStartTime',
			type: 'UTC_TIME',
			array: false,
			arg: []
		}, {

			label: 1,
			name: 'minIssuerEventId',
			type: 'INT32U',
			array: false,
			arg: []
		}, {

			label: 2,
			name: 'numberOfCommands',
			type: 'INT8U',
			array: false,
			arg: []
		}]
	}, {

		label: 260,
		nameFun: 'GetCalorificValue',
		nameObj: 'getCalorificValue',
		commandClusterId: 1792,
		server: false,
		commandId: 5,
		name: 'GetCalorificValue',
		mandatory: false,
		arg: [{

			label: 0,
			name: 'earliestStartTime',
			type: 'UTC_TIME',
			array: false,
			arg: []
		}, {

			label: 1,
			name: 'minIssuerEventId',
			type: 'INT32U',
			array: false,
			arg: []
		}, {

			label: 2,
			name: 'numberOfCommands',
			type: 'INT8U',
			array: false,
			arg: []
		}]
	}, {

		label: 261,
		nameFun: 'PublishBlockPeriod',
		nameObj: 'publishBlockPeriod',
		commandClusterId: 1792,
		server: true,
		commandId: 1,
		name: 'PublishBlockPeriod',
		mandatory: false,
		arg: [{

			label: 0,
			name: 'providerId',
			type: 'INT32U',
			array: false,
			arg: []
		}, {

			label: 1,
			name: 'issuerEventId',
			type: 'INT32U',
			array: false,
			arg: []
		}, {

			label: 2,
			name: 'blockPeriodStartTime',
			type: 'UTC_TIME',
			array: false,
			arg: []
		}, {

			label: 3,
			name: 'blockPeriodDuration',
			type: 'BlockPeriodDuration',
			array: false,
			arg: []
		}, {

			label: 4,
			name: 'numberOfPriceTiersAndNumberOfBlockThresholds',
			type: 'NumberOfPriceTiersAndNumberOfBlockThresholds',
			array: false,
			arg: []
		}, {

			label: 5,
			name: 'blockPeriodControl',
			type: 'BlockPeriodControl',
			array: false,
			arg: []
		}, {

			label: 6,
			name: 'tariffType',
			type: 'TariffType',
			array: false,
			arg: []
		}, {

			label: 7,
			name: 'tariffResolutionPeriod',
			type: 'TariffResolutionPeriod',
			array: false,
			arg: []
		}]
	}, {

		label: 262,
		nameFun: 'PublishTariffInformation',
		nameObj: 'publishTariffInformation',
		commandClusterId: 1792,
		server: true,
		commandId: 4,
		name: 'PublishTariffInformation',
		mandatory: false,
		arg: [{

			label: 0,
			name: 'providerId',
			type: 'INT32U',
			array: false,
			arg: []
		}, {

			label: 1,
			name: 'issuerEventId',
			type: 'INT32U',
			array: false,
			arg: []
		}, {

			label: 2,
			name: 'issuerTariffId',
			type: 'INT32U',
			array: false,
			arg: []
		}, {

			label: 3,
			name: 'startTime',
			type: 'UTC_TIME',
			array: false,
			arg: []
		}, {

			label: 4,
			name: 'tariffTypeChargingScheme',
			type: 'TariffType',
			array: false,
			arg: []
		}, {

			label: 5,
			name: 'tariffLabel',
			type: 'OCTET_STRING',
			array: false,
			arg: []
		}, {

			label: 6,
			name: 'numberOfPriceTiersInUse',
			type: 'INT8U',
			array: false,
			arg: []
		}, {

			label: 7,
			name: 'numberOfBlockThresholdsInUse',
			type: 'INT8U',
			array: false,
			arg: []
		}, {

			label: 8,
			name: 'unitOfMeasure',
			type: 'AmiUnitOfMeasure',
			array: false,
			arg: []
		}, {

			label: 9,
			name: 'currency',
			type: 'INT16U',
			array: false,
			arg: []
		}, {

			label: 10,
			name: 'priceTrailingDigit',
			type: 'BITMAP8',
			array: false,
			arg: []
		}, {

			label: 11,
			name: 'standingCharge',
			type: 'INT32U',
			array: false,
			arg: []
		}, {

			label: 12,
			name: 'tierBlockMode',
			type: 'TierBlockMode',
			array: false,
			arg: []
		}, {

			label: 13,
			name: 'blockThresholdMultiplier',
			type: 'INT24U',
			array: false,
			arg: []
		}, {

			label: 14,
			name: 'blockThresholdDivisor',
			type: 'INT24U',
			array: false,
			arg: []
		}]
	}, {

		label: 263,
		nameFun: 'PublishPriceMatrix',
		nameObj: 'publishPriceMatrix',
		commandClusterId: 1792,
		server: true,
		commandId: 5,
		name: 'PublishPriceMatrix',
		mandatory: false,
		arg: [{

			label: 0,
			name: 'providerId',
			type: 'INT32U',
			array: false,
			arg: []
		}, {

			label: 1,
			name: 'issuerEventId',
			type: 'INT32U',
			array: false,
			arg: []
		}, {

			label: 2,
			name: 'startTime',
			type: 'UTC_TIME',
			array: false,
			arg: []
		}, {

			label: 3,
			name: 'issuerTariffId',
			type: 'INT32U',
			array: false,
			arg: []
		}, {

			label: 4,
			name: 'commandIndex',
			type: 'INT8U',
			array: false,
			arg: []
		}, {

			label: 5,
			name: 'numberOfCommands',
			type: 'INT8U',
			array: false,
			arg: []
		}, {

			label: 6,
			name: 'subPayloadControl',
			type: 'BITMAP8',
			array: false,
			arg: []
		}, {

			label: 7,
			name: 'payload',
			type: 'PriceMatrixSubPayload',
			array: true,
			arg: []
		}]
	}, {

		label: 264,
		nameFun: 'PublishBlockThresholds',
		nameObj: 'publishBlockThresholds',
		commandClusterId: 1792,
		server: true,
		commandId: 6,
		name: 'PublishBlockThresholds',
		mandatory: false,
		arg: [{

			label: 0,
			name: 'providerId',
			type: 'INT32U',
			array: false,
			arg: []
		}, {

			label: 1,
			name: 'issuerEventId',
			type: 'INT32U',
			array: false,
			arg: []
		}, {

			label: 2,
			name: 'startTime',
			type: 'UTC_TIME',
			array: false,
			arg: []
		}, {

			label: 3,
			name: 'issuerTariffId',
			type: 'INT32U',
			array: false,
			arg: []
		}, {

			label: 4,
			name: 'commandIndex',
			type: 'INT8U',
			array: false,
			arg: []
		}, {

			label: 5,
			name: 'numberOfCommands',
			type: 'INT8U',
			array: false,
			arg: []
		}, {

			label: 6,
			name: 'subPayloadControl',
			type: 'BITMAP8',
			array: false,
			arg: []
		}, {

			label: 7,
			name: 'payload',
			type: 'BlockThresholdSubPayload',
			array: true,
			arg: []
		}]
	}, {

		label: 265,
		nameFun: 'PublishCO2Value',
		nameObj: 'publishCO2Value',
		commandClusterId: 1792,
		server: true,
		commandId: 7,
		name: 'PublishCO2Value',
		mandatory: false,
		arg: [{

			label: 0,
			name: 'issuerEventId',
			type: 'INT32U',
			array: false,
			arg: []
		}, {

			label: 1,
			name: 'startTime',
			type: 'UTC_TIME',
			array: false,
			arg: []
		}, {

			label: 2,
			name: 'tariffType',
			type: 'TariffType',
			array: false,
			arg: []
		}, {

			label: 3,
			name: 'cO2Value',
			type: 'INT32U',
			array: false,
			arg: []
		}, {

			label: 4,
			name: 'cO2ValueUnit',
			type: 'CO2Unit',
			array: false,
			arg: []
		}, {

			label: 5,
			name: 'cO2ValueTrailingDigit',
			type: 'BITMAP8',
			array: false,
			arg: []
		}]
	}, {

		label: 266,
		nameFun: 'PublishTierLabels',
		nameObj: 'publishTierLabels',
		commandClusterId: 1792,
		server: true,
		commandId: 8,
		name: 'PublishTierLabels',
		mandatory: false,
		arg: [{

			label: 0,
			name: 'providerId',
			type: 'INT32U',
			array: false,
			arg: []
		}, {

			label: 1,
			name: 'issuerEventId',
			type: 'INT32U',
			array: false,
			arg: []
		}, {

			label: 2,
			name: 'issuerTariffId',
			type: 'INT32U',
			array: false,
			arg: []
		}, {

			label: 3,
			name: 'commandIndex',
			type: 'INT8U',
			array: false,
			arg: []
		}, {

			label: 4,
			name: 'numberOfCommands',
			type: 'INT8U',
			array: false,
			arg: []
		}, {

			label: 5,
			name: 'numberOfLabels',
			type: 'INT8U',
			array: false,
			arg: []
		}, {

			label: 6,
			name: 'tierLabelsPayload',
			type: 'TierLabelsPayload',
			array: true,
			arg: []
		}]
	}, {

		label: 267,
		nameFun: 'PublishBillingPeriod',
		nameObj: 'publishBillingPeriod',
		commandClusterId: 1792,
		server: true,
		commandId: 9,
		name: 'PublishBillingPeriod',
		mandatory: false,
		arg: [{

			label: 0,
			name: 'issuerEventId',
			type: 'INT32U',
			array: false,
			arg: []
		}, {

			label: 1,
			name: 'billingPeriodStartTime',
			type: 'UTC_TIME',
			array: false,
			arg: []
		}, {

			label: 2,
			name: 'billingPeriodDuration',
			type: 'BillingPeriodDuration',
			array: false,
			arg: []
		}, {

			label: 3,
			name: 'tariffType',
			type: 'TariffType',
			array: false,
			arg: []
		}]
	}, {

		label: 268,
		nameFun: 'PublishConsolidatedBill',
		nameObj: 'publishConsolidatedBill',
		commandClusterId: 1792,
		server: true,
		commandId: 10,
		name: 'PublishConsolidatedBill',
		mandatory: false,
		arg: [{

			label: 0,
			name: 'issuerEventId',
			type: 'INT32U',
			array: false,
			arg: []
		}, {

			label: 1,
			name: 'billingPeriodStartTime',
			type: 'UTC_TIME',
			array: false,
			arg: []
		}, {

			label: 2,
			name: 'billingPeriodDuration',
			type: 'BillingPeriodDuration',
			array: false,
			arg: []
		}, {

			label: 3,
			name: 'tariffType',
			type: 'TariffType',
			array: false,
			arg: []
		}, {

			label: 4,
			name: 'consolidatedBill',
			type: 'INT32U',
			array: false,
			arg: []
		}, {

			label: 5,
			name: 'currency',
			type: 'INT16U',
			array: false,
			arg: []
		}, {

			label: 6,
			name: 'billTrailingDigit',
			type: 'BITMAP8',
			array: false,
			arg: []
		}]
	}, {

		label: 269,
		nameFun: 'PublishCppEvent',
		nameObj: 'publishCppEvent',
		commandClusterId: 1792,
		server: true,
		commandId: 11,
		name: 'PublishCppEvent',
		mandatory: false,
		arg: [{

			label: 0,
			name: 'issuerEventId',
			type: 'INT32U',
			array: false,
			arg: []
		}, {

			label: 1,
			name: 'startTime',
			type: 'UTC_TIME',
			array: false,
			arg: []
		}, {

			label: 2,
			name: 'durationInMinutes',
			type: 'INT16U',
			array: false,
			arg: []
		}, {

			label: 3,
			name: 'tariffType',
			type: 'TariffType',
			array: false,
			arg: []
		}, {

			label: 4,
			name: 'cppPriceTier',
			type: 'INT8U',
			array: false,
			arg: []
		}, {

			label: 5,
			name: 'cppAuth',
			type: 'PublishCppEventCppAuth',
			array: false,
			arg: []
		}]
	}, {

		label: 270,
		nameFun: 'PublishCreditPayment',
		nameObj: 'publishCreditPayment',
		commandClusterId: 1792,
		server: true,
		commandId: 12,
		name: 'PublishCreditPayment',
		mandatory: false,
		arg: [{

			label: 0,
			name: 'issuerEventId',
			type: 'INT32U',
			array: false,
			arg: []
		}, {

			label: 1,
			name: 'creditPaymentDueDate',
			type: 'UTC_TIME',
			array: false,
			arg: []
		}, {

			label: 2,
			name: 'creditPaymentOverDueAmount',
			type: 'INT32U',
			array: false,
			arg: []
		}, {

			label: 3,
			name: 'creditPaymentStatus',
			type: 'CreditPaymentStatus',
			array: false,
			arg: []
		}, {

			label: 4,
			name: 'creditPayment',
			type: 'INT32U',
			array: false,
			arg: []
		}, {

			label: 5,
			name: 'creditPaymentDate',
			type: 'UTC_TIME',
			array: false,
			arg: []
		}, {

			label: 6,
			name: 'creditPaymentRef',
			type: 'OCTET_STRING',
			array: false,
			arg: []
		}]
	}, {

		label: 271,
		nameFun: 'PublishCurrencyConversion',
		nameObj: 'publishCurrencyConversion',
		commandClusterId: 1792,
		server: true,
		commandId: 13,
		name: 'PublishCurrencyConversion',
		mandatory: false,
		arg: [{

			label: 0,
			name: 'issuerEventId',
			type: 'INT32U',
			array: false,
			arg: []
		}, {

			label: 1,
			name: 'utcTime',
			type: 'UTC_TIME',
			array: false,
			arg: []
		}, {

			label: 2,
			name: 'oldCurrency',
			type: 'INT16U',
			array: false,
			arg: []
		}, {

			label: 3,
			name: 'newCurrency',
			type: 'INT16U',
			array: false,
			arg: []
		}, {

			label: 4,
			name: 'conversionFactor',
			type: 'INT32U',
			array: false,
			arg: []
		}, {

			label: 5,
			name: 'conversionFactorTrailingDigit',
			type: 'BITMAP8',
			array: false,
			arg: []
		}, {

			label: 6,
			name: 'currencyChangeControlFlags',
			type: 'INT32U',
			array: false,
			arg: []
		}, {

			label: 7,
			name: 'signatureType',
			type: 'INT8U',
			array: false,
			arg: []
		}, {

			label: 8,
			name: 'signature',
			type: 'OCTET_STRING',
			array: false,
			arg: []
		}]
	}, {

		label: 272,
		nameFun: 'CancelTariff',
		nameObj: 'cancelTariff',
		commandClusterId: 1792,
		server: true,
		commandId: 14,
		name: 'CancelTariff',
		mandatory: false,
		arg: [{

			label: 0,
			name: 'providerId',
			type: 'INT32U',
			array: false,
			arg: []
		}, {

			label: 1,
			name: 'issuerTariffId',
			type: 'INT32U',
			array: false,
			arg: []
		}, {

			label: 2,
			name: 'tariffType',
			type: 'BITMAP8',
			array: false,
			arg: []
		}]
	}, {

		label: 273,
		nameFun: 'GetTariffInformation',
		nameObj: 'getTariffInformation',
		commandClusterId: 1792,
		server: false,
		commandId: 6,
		name: 'GetTariffInformation',
		mandatory: false,
		arg: [{

			label: 0,
			name: 'earliestStartTime',
			type: 'UTC_TIME',
			array: false,
			arg: []
		}, {

			label: 1,
			name: 'minIssuerEventId',
			type: 'INT32U',
			array: false,
			arg: []
		}, {

			label: 2,
			name: 'numberOfCommands',
			type: 'INT8U',
			array: false,
			arg: []
		}, {

			label: 3,
			name: 'tariffType',
			type: 'TariffType',
			array: false,
			arg: []
		}]
	}, {

		label: 274,
		nameFun: 'GetPriceMatrix',
		nameObj: 'getPriceMatrix',
		commandClusterId: 1792,
		server: false,
		commandId: 7,
		name: 'GetPriceMatrix',
		mandatory: false,
		arg: [{

			label: 0,
			name: 'issuerTariffId',
			type: 'INT32U',
			array: false,
			arg: []
		}]
	}, {

		label: 275,
		nameFun: 'GetBlockThresholds',
		nameObj: 'getBlockThresholds',
		commandClusterId: 1792,
		server: false,
		commandId: 8,
		name: 'GetBlockThresholds',
		mandatory: false,
		arg: [{

			label: 0,
			name: 'issuerTariffId',
			type: 'INT32U',
			array: false,
			arg: []
		}]
	}, {

		label: 276,
		nameFun: 'GetCO2Value',
		nameObj: 'getCO2Value',
		commandClusterId: 1792,
		server: false,
		commandId: 9,
		name: 'GetCO2Value',
		mandatory: false,
		arg: [{

			label: 0,
			name: 'earliestStartTime',
			type: 'UTC_TIME',
			array: false,
			arg: []
		}, {

			label: 1,
			name: 'minIssuerEventId',
			type: 'INT32U',
			array: false,
			arg: []
		}, {

			label: 2,
			name: 'numberOfCommands',
			type: 'INT8U',
			array: false,
			arg: []
		}, {

			label: 3,
			name: 'tariffType',
			type: 'TariffType',
			array: false,
			arg: []
		}]
	}, {

		label: 277,
		nameFun: 'GetTierLabels',
		nameObj: 'getTierLabels',
		commandClusterId: 1792,
		server: false,
		commandId: 10,
		name: 'GetTierLabels',
		mandatory: false,
		arg: [{

			label: 0,
			name: 'issuerTariffId',
			type: 'INT32U',
			array: false,
			arg: []
		}]
	}, {

		label: 278,
		nameFun: 'GetBillingPeriod',
		nameObj: 'getBillingPeriod',
		commandClusterId: 1792,
		server: false,
		commandId: 11,
		name: 'GetBillingPeriod',
		mandatory: false,
		arg: [{

			label: 0,
			name: 'startTime',
			type: 'UTC_TIME',
			array: false,
			arg: []
		}, {

			label: 1,
			name: 'minIssuerEventId',
			type: 'INT32U',
			array: false,
			arg: []
		}, {

			label: 2,
			name: 'numberOfCommands',
			type: 'INT8U',
			array: false,
			arg: []
		}, {

			label: 3,
			name: 'tariffType',
			type: 'TariffType',
			array: false,
			arg: []
		}]
	}, {

		label: 279,
		nameFun: 'GetConsolidatedBill',
		nameObj: 'getConsolidatedBill',
		commandClusterId: 1792,
		server: false,
		commandId: 12,
		name: 'GetConsolidatedBill',
		mandatory: false,
		arg: [{

			label: 0,
			name: 'startTime',
			type: 'UTC_TIME',
			array: false,
			arg: []
		}, {

			label: 1,
			name: 'minIssuerEventId',
			type: 'INT32U',
			array: false,
			arg: []
		}, {

			label: 2,
			name: 'numberOfCommands',
			type: 'INT8U',
			array: false,
			arg: []
		}, {

			label: 3,
			name: 'tariffType',
			type: 'TariffType',
			array: false,
			arg: []
		}]
	}, {

		label: 280,
		nameFun: 'CppEventResponse',
		nameObj: 'cppEventResponse',
		commandClusterId: 1792,
		server: false,
		commandId: 13,
		name: 'CppEventResponse',
		mandatory: false,
		arg: [{

			label: 0,
			name: 'issuerEventId',
			type: 'INT32U',
			array: false,
			arg: []
		}, {

			label: 1,
			name: 'cppAuth',
			type: 'CppEventResponseCppAuth',
			array: false,
			arg: []
		}]
	}, {

		label: 281,
		nameFun: 'GetCreditPayment',
		nameObj: 'getCreditPayment',
		commandClusterId: 1792,
		server: false,
		commandId: 14,
		name: 'GetCreditPayment',
		mandatory: false,
		arg: [{

			label: 0,
			name: 'latestEndTime',
			type: 'UTC_TIME',
			array: false,
			arg: []
		}, {

			label: 1,
			name: 'numberOfRecords',
			type: 'INT8U',
			array: false,
			arg: []
		}]
	}, {

		label: 282,
		nameFun: 'GetCurrencyConversionCommand',
		nameObj: 'getCurrencyConversionCommand',
		commandClusterId: 1792,
		server: false,
		commandId: 15,
		name: 'GetCurrencyConversionCommand',
		mandatory: false,
		arg: []
	}, {

		label: 283,
		nameFun: 'GetTariffCancellation',
		nameObj: 'getTariffCancellation',
		commandClusterId: 1792,
		server: false,
		commandId: 16,
		name: 'GetTariffCancellation',
		mandatory: false,
		arg: []
	}, {

		label: 284,
		nameFun: 'DisplayMessage',
		nameObj: 'displayMessage',
		commandClusterId: 1795,
		server: true,
		commandId: 0,
		name: 'DisplayMessage',
		mandatory: true,
		arg: [{

			label: 0,
			name: 'messageId',
			type: 'INT32U',
			array: false,
			arg: []
		}, {

			label: 1,
			name: 'messageControl',
			type: 'MessagingControlMask',
			array: false,
			arg: []
		}, {

			label: 2,
			name: 'startTime',
			type: 'TIME_OF_DAY',
			array: false,
			arg: []
		}, {

			label: 3,
			name: 'durationInMinutes',
			type: 'INT16U',
			array: false,
			arg: []
		}, {

			label: 4,
			name: 'message',
			type: 'CHAR_STRING',
			array: false,
			arg: []
		}]
	}, {

		label: 285,
		nameFun: 'CancelMessage',
		nameObj: 'cancelMessage',
		commandClusterId: 1795,
		server: true,
		commandId: 1,
		name: 'CancelMessage',
		mandatory: true,
		arg: [{

			label: 0,
			name: 'messageId',
			type: 'INT32U',
			array: false,
			arg: []
		}, {

			label: 1,
			name: 'messageControl',
			type: 'MessagingControlMask',
			array: false,
			arg: []
		}]
	}, {

		label: 286,
		nameFun: 'GetLastMessage',
		nameObj: 'getLastMessage',
		commandClusterId: 1795,
		server: false,
		commandId: 0,
		name: 'GetLastMessage',
		mandatory: true,
		arg: []
	}, {

		label: 287,
		nameFun: 'MessageConfirmation',
		nameObj: 'messageConfirmation',
		commandClusterId: 1795,
		server: false,
		commandId: 1,
		name: 'MessageConfirmation',
		mandatory: true,
		arg: [{

			label: 0,
			name: 'messageId',
			type: 'INT32U',
			array: false,
			arg: []
		}, {

			label: 1,
			name: 'confirmationTime',
			type: 'TIME_OF_DAY',
			array: false,
			arg: []
		}, {

			label: 2,
			name: 'messageConfirmationContral',
			type: 'BITMAP8',
			array: false,
			arg: []
		}, {

			label: 3,
			name: 'messageResponse',
			type: 'CHAR_STRING',
			array: false,
			arg: []
		}]
	}, {

		label: 288,
		nameFun: 'RequestTunnel',
		nameObj: 'requestTunnel',
		commandClusterId: 1796,
		server: false,
		commandId: 0,
		name: 'RequestTunnel',
		mandatory: true,
		arg: [{

			label: 0,
			name: 'protocolId',
			type: 'INT8U',
			array: false,
			arg: []
		}, {

			label: 1,
			name: 'manufacturerCode',
			type: 'INT16U',
			array: false,
			arg: []
		}, {

			label: 2,
			name: 'flowControlSupport',
			type: 'BOOLEAN',
			array: false,
			arg: []
		}, {

			label: 3,
			name: 'maximumIncomingTransferSize',
			type: 'INT16U',
			array: false,
			arg: []
		}]
	}, {

		label: 289,
		nameFun: 'CloseTunnel',
		nameObj: 'closeTunnel',
		commandClusterId: 1796,
		server: false,
		commandId: 1,
		name: 'CloseTunnel',
		mandatory: true,
		arg: [{

			label: 0,
			name: 'tunnelId',
			type: 'INT16U',
			array: false,
			arg: []
		}]
	}, {

		label: 290,
		nameFun: 'TransferDataClientToServer',
		nameObj: 'transferDataClientToServer',
		commandClusterId: 1796,
		server: false,
		commandId: 2,
		name: 'TransferDataClientToServer',
		mandatory: true,
		arg: [{

			label: 0,
			name: 'tunnelId',
			type: 'INT16U',
			array: false,
			arg: []
		}, {

			label: 1,
			name: 'data',
			type: 'INT8U',
			array: true,
			arg: []
		}]
	}, {

		label: 291,
		nameFun: 'TransferDataErrorClientToServer',
		nameObj: 'transferDataErrorClientToServer',
		commandClusterId: 1796,
		server: false,
		commandId: 3,
		name: 'TransferDataErrorClientToServer',
		mandatory: true,
		arg: [{

			label: 0,
			name: 'tunnelId',
			type: 'INT16U',
			array: false,
			arg: []
		}, {

			label: 1,
			name: 'transferDataStatus',
			type: 'TunnelingTransferDataStatus',
			array: false,
			arg: []
		}]
	}, {

		label: 292,
		nameFun: 'AckTransferDataClientToServer',
		nameObj: 'ackTransferDataClientToServer',
		commandClusterId: 1796,
		server: false,
		commandId: 4,
		name: 'AckTransferDataClientToServer',
		mandatory: false,
		arg: [{

			label: 0,
			name: 'tunnelId',
			type: 'INT16U',
			array: false,
			arg: []
		}, {

			label: 1,
			name: 'numberOfBytesLeft',
			type: 'INT16U',
			array: false,
			arg: []
		}]
	}, {

		label: 293,
		nameFun: 'ReadyDataClientToServer',
		nameObj: 'readyDataClientToServer',
		commandClusterId: 1796,
		server: false,
		commandId: 5,
		name: 'ReadyDataClientToServer',
		mandatory: false,
		arg: [{

			label: 0,
			name: 'tunnelId',
			type: 'INT16U',
			array: false,
			arg: []
		}, {

			label: 1,
			name: 'numberOfOctetsLeft',
			type: 'INT16U',
			array: false,
			arg: []
		}]
	}, {

		label: 294,
		nameFun: 'GetSupportedTunnelProtocols',
		nameObj: 'getSupportedTunnelProtocols',
		commandClusterId: 1796,
		server: false,
		commandId: 6,
		name: 'GetSupportedTunnelProtocols',
		mandatory: false,
		arg: [{

			label: 0,
			name: 'protocolOffset',
			type: 'INT8U',
			array: false,
			arg: []
		}]
	}, {

		label: 295,
		nameFun: 'RequestTunnelResponse',
		nameObj: 'requestTunnelResponse',
		commandClusterId: 1796,
		server: true,
		commandId: 0,
		name: 'RequestTunnelResponse',
		mandatory: true,
		arg: [{

			label: 0,
			name: 'tunnelId',
			type: 'INT16U',
			array: false,
			arg: []
		}, {

			label: 1,
			name: 'tunnelStatus',
			type: 'TunnelingTunnelStatus',
			array: false,
			arg: []
		}, {

			label: 2,
			name: 'maximumIncomingTransferSize',
			type: 'INT16U',
			array: false,
			arg: []
		}]
	}, {

		label: 296,
		nameFun: 'TransferDataServerToClient',
		nameObj: 'transferDataServerToClient',
		commandClusterId: 1796,
		server: true,
		commandId: 1,
		name: 'TransferDataServerToClient',
		mandatory: true,
		arg: [{

			label: 0,
			name: 'tunnelId',
			type: 'INT16U',
			array: false,
			arg: []
		}, {

			label: 1,
			name: 'data',
			type: 'INT8U',
			array: true,
			arg: []
		}]
	}, {

		label: 297,
		nameFun: 'TransferDataErrorServerToClient',
		nameObj: 'transferDataErrorServerToClient',
		commandClusterId: 1796,
		server: true,
		commandId: 2,
		name: 'TransferDataErrorServerToClient',
		mandatory: true,
		arg: [{

			label: 0,
			name: 'tunnelId',
			type: 'INT16U',
			array: false,
			arg: []
		}, {

			label: 1,
			name: 'transferDataStatus',
			type: 'TunnelingTransferDataStatus',
			array: false,
			arg: []
		}]
	}, {

		label: 298,
		nameFun: 'AckTransferDataServerToClient',
		nameObj: 'ackTransferDataServerToClient',
		commandClusterId: 1796,
		server: true,
		commandId: 3,
		name: 'AckTransferDataServerToClient',
		mandatory: false,
		arg: [{

			label: 0,
			name: 'tunnelId',
			type: 'INT16U',
			array: false,
			arg: []
		}, {

			label: 1,
			name: 'numberOfBytesLeft',
			type: 'INT16U',
			array: false,
			arg: []
		}]
	}, {

		label: 299,
		nameFun: 'ReadyDataServerToClient',
		nameObj: 'readyDataServerToClient',
		commandClusterId: 1796,
		server: true,
		commandId: 4,
		name: 'ReadyDataServerToClient',
		mandatory: false,
		arg: [{

			label: 0,
			name: 'tunnelId',
			type: 'INT16U',
			array: false,
			arg: []
		}, {

			label: 1,
			name: 'numberOfOctetsLeft',
			type: 'INT16U',
			array: false,
			arg: []
		}]
	}, {

		label: 300,
		nameFun: 'SupportedTunnelProtocolsResponse',
		nameObj: 'supportedTunnelProtocolsResponse',
		commandClusterId: 1796,
		server: true,
		commandId: 5,
		name: 'SupportedTunnelProtocolsResponse',
		mandatory: false,
		arg: [{

			label: 0,
			name: 'protocolListComplete',
			type: 'BOOLEAN',
			array: false,
			arg: []
		}, {

			label: 1,
			name: 'protocolCount',
			type: 'INT8U',
			array: false,
			arg: []
		}, {

			label: 2,
			name: 'protocolList',
			type: 'Protocol',
			array: true,
			arg: []
		}]
	}, {

		label: 301,
		nameFun: 'TunnelClosureNotification',
		nameObj: 'tunnelClosureNotification',
		commandClusterId: 1796,
		server: true,
		commandId: 6,
		name: 'TunnelClosureNotification',
		mandatory: false,
		arg: [{

			label: 0,
			name: 'tunnelId',
			type: 'INT16U',
			array: false,
			arg: []
		}]
	}, {

		label: 302,
		nameFun: 'SelectAvailableEmergencyCredit',
		nameObj: 'selectAvailableEmergencyCredit',
		commandClusterId: 1797,
		server: false,
		commandId: 0,
		name: 'SelectAvailableEmergencyCredit',
		mandatory: false,
		arg: [{

			label: 0,
			name: 'commandIssueDateTime',
			type: 'UTC_TIME',
			array: false,
			arg: []
		}, {

			label: 1,
			name: 'originatingDevice',
			type: 'OriginatingDevice',
			array: false,
			arg: []
		}]
	}, {

		label: 303,
		nameFun: 'ChangeDebt',
		nameObj: 'changeDebt',
		commandClusterId: 1797,
		server: false,
		commandId: 2,
		name: 'ChangeDebt',
		mandatory: false,
		arg: [{

			label: 0,
			name: 'commandIssueDateTime',
			type: 'UTC_TIME',
			array: false,
			arg: []
		}, {

			label: 1,
			name: 'debtLabel',
			type: 'OCTET_STRING',
			array: false,
			arg: []
		}, {

			label: 2,
			name: 'debtAmount',
			type: 'INT32S',
			array: false,
			arg: []
		}, {

			label: 3,
			name: 'debtRecoveryMethod',
			type: 'DebtRecoveryMethod',
			array: false,
			arg: []
		}, {

			label: 4,
			name: 'debtType',
			type: 'ChangeDebtDebtType',
			array: false,
			arg: []
		}, {

			label: 5,
			name: 'debtRecoveryStartTime',
			type: 'UTC_TIME',
			array: false,
			arg: []
		}, {

			label: 6,
			name: 'debtRecoveryCollectionTime',
			type: 'INT16U',
			array: false,
			arg: []
		}, {

			label: 7,
			name: 'debtRecoveryFrequency',
			type: 'ENUM8',
			array: false,
			arg: []
		}, {

			label: 8,
			name: 'debtRecoveryAmount',
			type: 'INT32S',
			array: false,
			arg: []
		}, {

			label: 9,
			name: 'debtRecoveryBalancePercentage',
			type: 'INT16U',
			array: false,
			arg: []
		}]
	}, {

		label: 304,
		nameFun: 'EmergencyCreditSetup',
		nameObj: 'emergencyCreditSetup',
		commandClusterId: 1797,
		server: false,
		commandId: 3,
		name: 'EmergencyCreditSetup',
		mandatory: false,
		arg: [{

			label: 0,
			name: 'issuerEventId',
			type: 'INT32U',
			array: false,
			arg: []
		}, {

			label: 1,
			name: 'commandIssueDateTime',
			type: 'UTC_TIME',
			array: false,
			arg: []
		}, {

			label: 2,
			name: 'emergencyCreditLimit',
			type: 'INT32U',
			array: false,
			arg: []
		}, {

			label: 3,
			name: 'emergencyCreditThreshold',
			type: 'INT32U',
			array: false,
			arg: []
		}]
	}, {

		label: 305,
		nameFun: 'ConsumerTopUp',
		nameObj: 'consumerTopUp',
		commandClusterId: 1797,
		server: false,
		commandId: 4,
		name: 'ConsumerTopUp',
		mandatory: false,
		arg: [{

			label: 0,
			name: 'originatingDevice',
			type: 'OriginatingDevice',
			array: false,
			arg: []
		}, {

			label: 1,
			name: 'topUpCode',
			type: 'OCTET_STRING',
			array: false,
			arg: []
		}]
	}, {

		label: 306,
		nameFun: 'CreditAdjustment',
		nameObj: 'creditAdjustment',
		commandClusterId: 1797,
		server: false,
		commandId: 5,
		name: 'CreditAdjustment',
		mandatory: false,
		arg: [{

			label: 0,
			name: 'issuerEventId',
			type: 'INT32U',
			array: false,
			arg: []
		}, {

			label: 1,
			name: 'startTime',
			type: 'UTC_TIME',
			array: false,
			arg: []
		}, {

			label: 2,
			name: 'creditAdjustmentType',
			type: 'CreditAdjustmentType',
			array: false,
			arg: []
		}, {

			label: 3,
			name: 'creditAdjustmentValue',
			type: 'INT32S',
			array: false,
			arg: []
		}]
	}, {

		label: 307,
		nameFun: 'ChangePaymentMode',
		nameObj: 'changePaymentMode',
		commandClusterId: 1797,
		server: false,
		commandId: 6,
		name: 'ChangePaymentMode',
		mandatory: false,
		arg: [{

			label: 0,
			name: 'supplierId',
			type: 'INT32U',
			array: false,
			arg: []
		}, {

			label: 1,
			name: 'issuerEventId',
			type: 'INT32U',
			array: false,
			arg: []
		}, {

			label: 2,
			name: 'implementationDateTime',
			type: 'UTC_TIME',
			array: false,
			arg: []
		}, {

			label: 3,
			name: 'proposedPaymentControl',
			type: 'BITMAP16',
			array: false,
			arg: []
		}, {

			label: 4,
			name: 'cutOffValue',
			type: 'INT32S',
			array: false,
			arg: []
		}]
	}, {

		label: 308,
		nameFun: 'GetPrepaySnapshot',
		nameObj: 'getPrepaySnapshot',
		commandClusterId: 1797,
		server: false,
		commandId: 7,
		name: 'GetPrepaySnapshot',
		mandatory: false,
		arg: [{

			label: 0,
			name: 'startTime',
			type: 'UTC_TIME',
			array: false,
			arg: []
		}, {

			label: 1,
			name: 'numberOfSnapshots',
			type: 'INT8U',
			array: false,
			arg: []
		}, {

			label: 2,
			name: 'snapshotCause',
			type: 'BITMAP16',
			array: false,
			arg: []
		}]
	}, {

		label: 309,
		nameFun: 'GetTopUpLog',
		nameObj: 'getTopUpLog',
		commandClusterId: 1797,
		server: false,
		commandId: 8,
		name: 'GetTopUpLog',
		mandatory: false,
		arg: [{

			label: 0,
			name: 'numberOfEvents',
			type: 'INT8U',
			array: false,
			arg: []
		}]
	}, {

		label: 310,
		nameFun: 'SetLowCreditWarningLevel',
		nameObj: 'setLowCreditWarningLevel',
		commandClusterId: 1797,
		server: false,
		commandId: 9,
		name: 'SetLowCreditWarningLevel',
		mandatory: false,
		arg: [{

			label: 0,
			name: 'lowCreditWarningLevel',
			type: 'INT32U',
			array: false,
			arg: []
		}]
	}, {

		label: 311,
		nameFun: 'GetDebtRepaymentyLog',
		nameObj: 'getDebtRepaymentyLog',
		commandClusterId: 1797,
		server: false,
		commandId: 10,
		name: 'GetDebtRepaymentyLog',
		mandatory: false,
		arg: [{

			label: 0,
			name: 'numberOfDebt',
			type: 'INT8U',
			array: false,
			arg: []
		}, {

			label: 1,
			name: 'debtType',
			type: 'GetDebtRepaymentyLogDebtType',
			array: false,
			arg: []
		}]
	}, {

		label: 312,
		nameFun: 'SetMaximumCreditLimit',
		nameObj: 'setMaximumCreditLimit',
		commandClusterId: 1797,
		server: false,
		commandId: 11,
		name: 'SetMaximumCreditLimit',
		mandatory: false,
		arg: [{

			label: 0,
			name: 'providerId',
			type: 'INT32U',
			array: false,
			arg: []
		}, {

			label: 1,
			name: 'issuerEventId',
			type: 'INT32U',
			array: false,
			arg: []
		}, {

			label: 2,
			name: 'implementationDateTime',
			type: 'UTC_TIME',
			array: false,
			arg: []
		}, {

			label: 3,
			name: 'maximumCreditLevel',
			type: 'INT32U',
			array: false,
			arg: []
		}]
	}, {

		label: 313,
		nameFun: 'SetOverallDebtCap',
		nameObj: 'setOverallDebtCap',
		commandClusterId: 1797,
		server: false,
		commandId: 12,
		name: 'SetOverallDebtCap',
		mandatory: false,
		arg: [{

			label: 0,
			name: 'providerId',
			type: 'INT32U',
			array: false,
			arg: []
		}, {

			label: 1,
			name: 'issuerEventId',
			type: 'INT32U',
			array: false,
			arg: []
		}, {

			label: 2,
			name: 'implementationDateTime',
			type: 'UTC_TIME',
			array: false,
			arg: []
		}, {

			label: 3,
			name: 'overallDebtCap',
			type: 'INT32S',
			array: false,
			arg: []
		}]
	}, {

		label: 314,
		nameFun: 'GetPrepaySnapshotResponse',
		nameObj: 'getPrepaySnapshotResponse',
		commandClusterId: 1797,
		server: true,
		commandId: 1,
		name: 'GetPrepaySnapshotResponse',
		mandatory: false,
		arg: [{

			label: 0,
			name: 'issuerEventId',
			type: 'INT32U',
			array: false,
			arg: []
		}, {

			label: 1,
			name: 'snapshotTime',
			type: 'UTC_TIME',
			array: false,
			arg: []
		}, {

			label: 2,
			name: 'commandIndex',
			type: 'INT8U',
			array: false,
			arg: []
		}, {

			label: 3,
			name: 'snapshotCause',
			type: 'SnapshotPayloadCause',
			array: false,
			arg: []
		}, {

			label: 4,
			name: 'snapshotPayloadType',
			type: 'SnapshotPayloadType',
			array: false,
			arg: []
		}, {

			label: 5,
			name: 'snapshotPayload',
			type: 'INT8U',
			array: true,
			arg: []
		}]
	}, {

		label: 315,
		nameFun: 'ChangePaymentModeResponse',
		nameObj: 'changePaymentModeResponse',
		commandClusterId: 1797,
		server: true,
		commandId: 2,
		name: 'ChangePaymentModeResponse',
		mandatory: false,
		arg: [{

			label: 0,
			name: 'friendlyCredit',
			type: 'FriendlyCredit',
			array: false,
			arg: []
		}, {

			label: 1,
			name: 'friendlyCreditCalendarId',
			type: 'INT32U',
			array: false,
			arg: []
		}, {

			label: 2,
			name: 'emergencyCreditLimit',
			type: 'INT32U',
			array: false,
			arg: []
		}, {

			label: 3,
			name: 'emergencyCreditThreshold',
			type: 'INT32U',
			array: false,
			arg: []
		}]
	}, {

		label: 316,
		nameFun: 'ConsumerTopUpResponse',
		nameObj: 'consumerTopUpResponse',
		commandClusterId: 1797,
		server: true,
		commandId: 3,
		name: 'ConsumerTopUpResponse',
		mandatory: false,
		arg: [{

			label: 0,
			name: 'resultType',
			type: 'ResultType',
			array: false,
			arg: []
		}, {

			label: 1,
			name: 'topUpValue',
			type: 'INT32S',
			array: false,
			arg: []
		}, {

			label: 2,
			name: 'sourceOfTopUp',
			type: 'SourceOfTopUp',
			array: false,
			arg: []
		}, {

			label: 3,
			name: 'creditRemaining',
			type: 'INT32S',
			array: false,
			arg: []
		}]
	}, {

		label: 317,
		nameFun: 'GetCommand',
		nameObj: 'getCommand',
		commandClusterId: 1797,
		server: true,
		commandId: 4,
		name: 'GetCommand',
		mandatory: false,
		arg: [{

			label: 0,
			name: 'prePayNotificationFlags',
			type: 'PrePayNotificationFlags',
			array: false,
			arg: []
		}]
	}, {

		label: 318,
		nameFun: 'PublishTopUpLog',
		nameObj: 'publishTopUpLog',
		commandClusterId: 1797,
		server: true,
		commandId: 5,
		name: 'PublishTopUpLog',
		mandatory: false,
		arg: [{

			label: 0,
			name: 'commandIndex',
			type: 'INT8U',
			array: false,
			arg: []
		}, {

			label: 1,
			name: 'totalNumberOfCommands',
			type: 'INT8U',
			array: false,
			arg: []
		}, {

			label: 2,
			name: 'topUpCodes',
			type: 'OCTET_STRING',
			array: true,
			arg: []
		}]
	}, {

		label: 319,
		nameFun: 'PublishDebtLog',
		nameObj: 'publishDebtLog',
		commandClusterId: 1797,
		server: true,
		commandId: 6,
		name: 'PublishDebtLog',
		mandatory: false,
		arg: [{

			label: 0,
			name: 'commandIndex',
			type: 'INT8U',
			array: false,
			arg: []
		}, {

			label: 1,
			name: 'totalNumberOfCommands',
			type: 'INT8U',
			array: false,
			arg: []
		}, {

			label: 2,
			name: 'debtPayload',
			type: 'INT8U',
			array: true,
			arg: []
		}]
	}, {

		label: 320,
		nameFun: 'ReportEventStatus',
		nameObj: 'reportEventStatus',
		commandClusterId: 1798,
		server: true,
		commandId: 0,
		name: 'ReportEventStatus',
		mandatory: true,
		arg: [{

			label: 0,
			name: 'issuerEventId',
			type: 'INT32U',
			array: false,
			arg: []
		}, {

			label: 1,
			name: 'eventStatus',
			type: 'INT8U',
			array: false,
			arg: []
		}, {

			label: 2,
			name: 'eventStatusTime',
			type: 'UTC_TIME',
			array: false,
			arg: []
		}, {

			label: 3,
			name: 'criticalityLevelApplied',
			type: 'INT8U',
			array: false,
			arg: []
		}, {

			label: 4,
			name: 'coolingTemperatureSetPointApplied',
			type: 'INT16U',
			array: false,
			arg: []
		}, {

			label: 5,
			name: 'heatingTemperatureSetPointApplied',
			type: 'INT16U',
			array: false,
			arg: []
		}, {

			label: 6,
			name: 'averageLoadAdjustmentPercentageApplied',
			type: 'INT8S',
			array: false,
			arg: []
		}, {

			label: 7,
			name: 'dutyCycleApplied',
			type: 'INT8U',
			array: false,
			arg: []
		}, {

			label: 8,
			name: 'eventControl',
			type: 'BITMAP8',
			array: false,
			arg: []
		}]
	}, {

		label: 321,
		nameFun: 'ManageEvent',
		nameObj: 'manageEvent',
		commandClusterId: 1798,
		server: false,
		commandId: 0,
		name: 'ManageEvent',
		mandatory: true,
		arg: [{

			label: 0,
			name: 'issuerEventId',
			type: 'INT32U',
			array: false,
			arg: []
		}, {

			label: 1,
			name: 'deviceClass',
			type: 'BITMAP16',
			array: false,
			arg: []
		}, {

			label: 2,
			name: 'utilityEnrollmentGroup',
			type: 'INT8U',
			array: false,
			arg: []
		}, {

			label: 3,
			name: 'actionRequired',
			type: 'INT8U',
			array: false,
			arg: []
		}]
	}, {

		label: 322,
		nameFun: 'PublishCalendar',
		nameObj: 'publishCalendar',
		commandClusterId: 1799,
		server: true,
		commandId: 0,
		name: 'PublishCalendar',
		mandatory: true,
		arg: [{

			label: 0,
			name: 'providerId',
			type: 'INT32U',
			array: false,
			arg: []
		}, {

			label: 1,
			name: 'issuerEventId',
			type: 'INT32U',
			array: false,
			arg: []
		}, {

			label: 2,
			name: 'issuerCalendarId',
			type: 'INT32U',
			array: false,
			arg: []
		}, {

			label: 3,
			name: 'startTime',
			type: 'UTC_TIME',
			array: false,
			arg: []
		}, {

			label: 4,
			name: 'calendarType',
			type: 'CalendarType',
			array: false,
			arg: []
		}, {

			label: 5,
			name: 'calendarName',
			type: 'OCTET_STRING',
			array: false,
			arg: []
		}, {

			label: 6,
			name: 'numberOfSeasons',
			type: 'INT8U',
			array: false,
			arg: []
		}, {

			label: 7,
			name: 'numberOfWeekProfiles',
			type: 'INT8U',
			array: false,
			arg: []
		}, {

			label: 8,
			name: 'numberOfDayProfiles',
			type: 'INT8U',
			array: false,
			arg: []
		}]
	}, {

		label: 323,
		nameFun: 'PublishDayProfile',
		nameObj: 'publishDayProfile',
		commandClusterId: 1799,
		server: true,
		commandId: 1,
		name: 'PublishDayProfile',
		mandatory: true,
		arg: [{

			label: 0,
			name: 'providerId',
			type: 'INT32U',
			array: false,
			arg: []
		}, {

			label: 1,
			name: 'issuerEventId',
			type: 'INT32U',
			array: false,
			arg: []
		}, {

			label: 2,
			name: 'issuerCalendarId',
			type: 'INT32U',
			array: false,
			arg: []
		}, {

			label: 3,
			name: 'dayId',
			type: 'INT8U',
			array: false,
			arg: []
		}, {

			label: 4,
			name: 'totalNumberOfScheduleEntries',
			type: 'INT8U',
			array: false,
			arg: []
		}, {

			label: 5,
			name: 'commandIndex',
			type: 'INT8U',
			array: false,
			arg: []
		}, {

			label: 6,
			name: 'totalNumberOfCommands',
			type: 'INT8U',
			array: false,
			arg: []
		}, {

			label: 7,
			name: 'calendarType',
			type: 'CalendarType',
			array: false,
			arg: []
		}, {

			label: 8,
			name: 'dayScheduleEntries',
			type: 'ScheduleEntry',
			array: true,
			arg: []
		}]
	}, {

		label: 324,
		nameFun: 'PublishWeekProfile',
		nameObj: 'publishWeekProfile',
		commandClusterId: 1799,
		server: true,
		commandId: 2,
		name: 'PublishWeekProfile',
		mandatory: true,
		arg: [{

			label: 0,
			name: 'providerId',
			type: 'INT32U',
			array: false,
			arg: []
		}, {

			label: 1,
			name: 'issuerEventId',
			type: 'INT32U',
			array: false,
			arg: []
		}, {

			label: 2,
			name: 'issuerCalendarId',
			type: 'INT32U',
			array: false,
			arg: []
		}, {

			label: 3,
			name: 'weekId',
			type: 'INT8U',
			array: false,
			arg: []
		}, {

			label: 4,
			name: 'dayIdRefMonday',
			type: 'INT8U',
			array: false,
			arg: []
		}, {

			label: 5,
			name: 'dayIdRefTuesday',
			type: 'INT8U',
			array: false,
			arg: []
		}, {

			label: 6,
			name: 'dayIdRefWednesday',
			type: 'INT8U',
			array: false,
			arg: []
		}, {

			label: 7,
			name: 'dayIdRefThursday',
			type: 'INT8U',
			array: false,
			arg: []
		}, {

			label: 8,
			name: 'dayIdRefFriday',
			type: 'INT8U',
			array: false,
			arg: []
		}, {

			label: 9,
			name: 'dayIdRefSaturday',
			type: 'INT8U',
			array: false,
			arg: []
		}, {

			label: 10,
			name: 'dayIdRefSunday',
			type: 'INT8U',
			array: false,
			arg: []
		}]
	}, {

		label: 325,
		nameFun: 'PublishSeasons',
		nameObj: 'publishSeasons',
		commandClusterId: 1799,
		server: true,
		commandId: 3,
		name: 'PublishSeasons',
		mandatory: true,
		arg: [{

			label: 0,
			name: 'providerId',
			type: 'INT32U',
			array: false,
			arg: []
		}, {

			label: 1,
			name: 'issuerEventId',
			type: 'INT32U',
			array: false,
			arg: []
		}, {

			label: 2,
			name: 'issuerCalendarId',
			type: 'INT32U',
			array: false,
			arg: []
		}, {

			label: 3,
			name: 'commandIndex',
			type: 'INT8U',
			array: false,
			arg: []
		}, {

			label: 4,
			name: 'totalNumberOfCommands',
			type: 'INT8U',
			array: false,
			arg: []
		}, {

			label: 5,
			name: 'seasonEntries',
			type: 'SeasonEntry',
			array: true,
			arg: []
		}]
	}, {

		label: 326,
		nameFun: 'PublishSpecialDays',
		nameObj: 'publishSpecialDays',
		commandClusterId: 1799,
		server: true,
		commandId: 4,
		name: 'PublishSpecialDays',
		mandatory: true,
		arg: [{

			label: 0,
			name: 'providerId',
			type: 'INT32U',
			array: false,
			arg: []
		}, {

			label: 1,
			name: 'issuerEventId',
			type: 'INT32U',
			array: false,
			arg: []
		}, {

			label: 2,
			name: 'issuerCalendarId',
			type: 'INT32U',
			array: false,
			arg: []
		}, {

			label: 3,
			name: 'startTime',
			type: 'UTC_TIME',
			array: false,
			arg: []
		}, {

			label: 4,
			name: 'calendarType',
			type: 'CalendarType',
			array: false,
			arg: []
		}, {

			label: 5,
			name: 'totalNumberOfSpecialDays',
			type: 'INT8U',
			array: false,
			arg: []
		}, {

			label: 6,
			name: 'commandIndex',
			type: 'INT8U',
			array: false,
			arg: []
		}, {

			label: 7,
			name: 'totalNumberOfCommands',
			type: 'INT8U',
			array: false,
			arg: []
		}, {

			label: 8,
			name: 'specialDayEntries',
			type: 'SpecialDay',
			array: true,
			arg: []
		}]
	}, {

		label: 327,
		nameFun: 'CancelCalendar',
		nameObj: 'cancelCalendar',
		commandClusterId: 1799,
		server: true,
		commandId: 5,
		name: 'CancelCalendar',
		mandatory: false,
		arg: [{

			label: 0,
			name: 'providerId',
			type: 'INT32U',
			array: false,
			arg: []
		}, {

			label: 1,
			name: 'issuerEventId',
			type: 'INT32U',
			array: false,
			arg: []
		}, {

			label: 2,
			name: 'calendarType',
			type: 'CalendarType',
			array: false,
			arg: []
		}]
	}, {

		label: 328,
		nameFun: 'GetCalendar',
		nameObj: 'getCalendar',
		commandClusterId: 1799,
		server: false,
		commandId: 0,
		name: 'GetCalendar',
		mandatory: false,
		arg: [{

			label: 0,
			name: 'earliestStartTime',
			type: 'UTC_TIME',
			array: false,
			arg: []
		}, {

			label: 1,
			name: 'minIssuerEventId',
			type: 'INT32U',
			array: false,
			arg: []
		}, {

			label: 2,
			name: 'numberOfCalendars',
			type: 'INT8U',
			array: false,
			arg: []
		}, {

			label: 3,
			name: 'calendarType',
			type: 'CalendarType',
			array: false,
			arg: []
		}, {

			label: 4,
			name: 'providerId',
			type: 'INT32U',
			array: false,
			arg: []
		}]
	}, {

		label: 329,
		nameFun: 'GetDayProfiles',
		nameObj: 'getDayProfiles',
		commandClusterId: 1799,
		server: false,
		commandId: 1,
		name: 'GetDayProfiles',
		mandatory: false,
		arg: [{

			label: 0,
			name: 'providerId',
			type: 'INT32U',
			array: false,
			arg: []
		}, {

			label: 1,
			name: 'issuerCalendarId',
			type: 'INT32U',
			array: false,
			arg: []
		}, {

			label: 2,
			name: 'startDayId',
			type: 'INT8U',
			array: false,
			arg: []
		}, {

			label: 3,
			name: 'numberOfDays',
			type: 'INT8U',
			array: false,
			arg: []
		}]
	}, {

		label: 330,
		nameFun: 'GetWeekProfiles',
		nameObj: 'getWeekProfiles',
		commandClusterId: 1799,
		server: false,
		commandId: 2,
		name: 'GetWeekProfiles',
		mandatory: false,
		arg: [{

			label: 0,
			name: 'providerId',
			type: 'INT32U',
			array: false,
			arg: []
		}, {

			label: 1,
			name: 'issuerCalendarId',
			type: 'INT32U',
			array: false,
			arg: []
		}, {

			label: 2,
			name: 'startWeekId',
			type: 'INT8U',
			array: false,
			arg: []
		}, {

			label: 3,
			name: 'numberOfWeeks',
			type: 'INT8U',
			array: false,
			arg: []
		}]
	}, {

		label: 331,
		nameFun: 'GetSeasons',
		nameObj: 'getSeasons',
		commandClusterId: 1799,
		server: false,
		commandId: 3,
		name: 'GetSeasons',
		mandatory: false,
		arg: [{

			label: 0,
			name: 'providerId',
			type: 'INT32U',
			array: false,
			arg: []
		}, {

			label: 1,
			name: 'issuerCalendarId',
			type: 'INT32U',
			array: false,
			arg: []
		}]
	}, {

		label: 332,
		nameFun: 'GetSpecialDays',
		nameObj: 'getSpecialDays',
		commandClusterId: 1799,
		server: false,
		commandId: 4,
		name: 'GetSpecialDays',
		mandatory: true,
		arg: [{

			label: 0,
			name: 'startTime',
			type: 'UTC_TIME',
			array: false,
			arg: []
		}, {

			label: 1,
			name: 'numberOfEvents',
			type: 'INT8U',
			array: false,
			arg: []
		}, {

			label: 2,
			name: 'calendarType',
			type: 'CalendarType',
			array: false,
			arg: []
		}, {

			label: 3,
			name: 'providerId',
			type: 'INT32U',
			array: false,
			arg: []
		}, {

			label: 4,
			name: 'issuerCalendarId',
			type: 'INT32U',
			array: false,
			arg: []
		}]
	}, {

		label: 333,
		nameFun: 'GetCalendarCancellation',
		nameObj: 'getCalendarCancellation',
		commandClusterId: 1799,
		server: false,
		commandId: 5,
		name: 'GetCalendarCancellation',
		mandatory: true,
		arg: []
	}, {

		label: 334,
		nameFun: 'GetChangeOfTenancy',
		nameObj: 'getChangeOfTenancy',
		commandClusterId: 1800,
		server: false,
		commandId: 0,
		name: 'GetChangeOfTenancy',
		mandatory: false,
		arg: []
	}, {

		label: 335,
		nameFun: 'GetChangeOfSupplier',
		nameObj: 'getChangeOfSupplier',
		commandClusterId: 1800,
		server: false,
		commandId: 1,
		name: 'GetChangeOfSupplier',
		mandatory: false,
		arg: []
	}, {

		label: 336,
		nameFun: 'RequestNewPassword',
		nameObj: 'requestNewPassword',
		commandClusterId: 1800,
		server: false,
		commandId: 2,
		name: 'RequestNewPassword',
		mandatory: false,
		arg: [{

			label: 0,
			name: 'passwordType',
			type: 'INT8U',
			array: false,
			arg: []
		}]
	}, {

		label: 337,
		nameFun: 'GetSiteId',
		nameObj: 'getSiteId',
		commandClusterId: 1800,
		server: false,
		commandId: 3,
		name: 'GetSiteId',
		mandatory: false,
		arg: []
	}, {

		label: 338,
		nameFun: 'ReportEventConfiguration',
		nameObj: 'reportEventConfiguration',
		commandClusterId: 1800,
		server: false,
		commandId: 4,
		name: 'ReportEventConfiguration',
		mandatory: true,
		arg: [{

			label: 0,
			name: 'commandIndex',
			type: 'INT8U',
			array: false,
			arg: []
		}, {

			label: 1,
			name: 'totalCommands',
			type: 'INT8U',
			array: false,
			arg: []
		}, {

			label: 2,
			name: 'eventConfigurationPayload',
			type: 'EventConfigurationPayloadStruct',
			array: true,
			arg: []
		}]
	}, {

		label: 339,
		nameFun: 'GetCIN',
		nameObj: 'getCIN',
		commandClusterId: 1800,
		server: false,
		commandId: 5,
		name: 'GetCIN',
		mandatory: false,
		arg: []
	}, {

		label: 340,
		nameFun: 'PublishChangeOfTenancy',
		nameObj: 'publishChangeOfTenancy',
		commandClusterId: 1800,
		server: true,
		commandId: 0,
		name: 'PublishChangeOfTenancy',
		mandatory: false,
		arg: [{

			label: 0,
			name: 'supplierId',
			type: 'INT32U',
			array: false,
			arg: []
		}, {

			label: 1,
			name: 'issuerEventId',
			type: 'INT32U',
			array: false,
			arg: []
		}, {

			label: 2,
			name: 'tariffType',
			type: 'TariffType',
			array: false,
			arg: []
		}, {

			label: 3,
			name: 'implementationDateTime',
			type: 'UTC_TIME',
			array: false,
			arg: []
		}, {

			label: 4,
			name: 'proposedTenancyChangeControl',
			type: 'INT32U',
			array: false,
			arg: []
		}, {

			label: 5,
			name: 'signatureType',
			type: 'INT8U',
			array: false,
			arg: []
		}, {

			label: 6,
			name: 'signature',
			type: 'OCTET_STRING',
			array: false,
			arg: []
		}]
	}, {

		label: 341,
		nameFun: 'PublishChangeOfSupplier',
		nameObj: 'publishChangeOfSupplier',
		commandClusterId: 1800,
		server: true,
		commandId: 1,
		name: 'PublishChangeOfSupplier',
		mandatory: false,
		arg: [{

			label: 0,
			name: 'currentSupplierId',
			type: 'INT32U',
			array: false,
			arg: []
		}, {

			label: 1,
			name: 'issuerEventId',
			type: 'INT32U',
			array: false,
			arg: []
		}, {

			label: 2,
			name: 'tariffType',
			type: 'TariffType',
			array: false,
			arg: []
		}, {

			label: 3,
			name: 'proposedChangeSupplierId',
			type: 'INT32U',
			array: false,
			arg: []
		}, {

			label: 4,
			name: 'supplierIdImplementationTime',
			type: 'UTC_TIME',
			array: false,
			arg: []
		}, {

			label: 5,
			name: 'supplierChangeControl',
			type: 'ProposedChangeControl',
			array: false,
			arg: []
		}, {

			label: 6,
			name: 'proposedSupplierIdName',
			type: 'OCTET_STRING',
			array: false,
			arg: []
		}, {

			label: 7,
			name: 'signatureType',
			type: 'INT8U',
			array: false,
			arg: []
		}, {

			label: 8,
			name: 'signature',
			type: 'OCTET_STRING',
			array: false,
			arg: []
		}]
	}, {

		label: 342,
		nameFun: 'RequestNewPasswordResponse',
		nameObj: 'requestNewPasswordResponse',
		commandClusterId: 1800,
		server: true,
		commandId: 2,
		name: 'RequestNewPasswordResponse',
		mandatory: false,
		arg: [{

			label: 0,
			name: 'issuerEventId',
			type: 'INT32U',
			array: false,
			arg: []
		}, {

			label: 1,
			name: 'implementationDateTime',
			type: 'UTC_TIME',
			array: false,
			arg: []
		}, {

			label: 2,
			name: 'durationInMinutes',
			type: 'INT16U',
			array: false,
			arg: []
		}, {

			label: 3,
			name: 'passwordType',
			type: 'ENUM8',
			array: false,
			arg: []
		}, {

			label: 4,
			name: 'password',
			type: 'OCTET_STRING',
			array: false,
			arg: []
		}]
	}, {

		label: 343,
		nameFun: 'UpdateSiteId',
		nameObj: 'updateSiteId',
		commandClusterId: 1800,
		server: true,
		commandId: 3,
		name: 'UpdateSiteId',
		mandatory: false,
		arg: [{

			label: 0,
			name: 'issuerEventId',
			type: 'INT32U',
			array: false,
			arg: []
		}, {

			label: 1,
			name: 'siteIdTime',
			type: 'UTC_TIME',
			array: false,
			arg: []
		}, {

			label: 2,
			name: 'supplierId',
			type: 'INT32U',
			array: false,
			arg: []
		}, {

			label: 3,
			name: 'siteId',
			type: 'OCTET_STRING',
			array: false,
			arg: []
		}, {

			label: 4,
			name: 'signatureType',
			type: 'INT8U',
			array: false,
			arg: []
		}, {

			label: 5,
			name: 'signature',
			type: 'OCTET_STRING',
			array: false,
			arg: []
		}]
	}, {

		label: 344,
		nameFun: 'SetEventConfiguration',
		nameObj: 'setEventConfiguration',
		commandClusterId: 1800,
		server: true,
		commandId: 4,
		name: 'SetEventConfiguration',
		mandatory: true,
		arg: [{

			label: 0,
			name: 'issuerEventId',
			type: 'INT32U',
			array: false,
			arg: []
		}, {

			label: 1,
			name: 'startDateTime',
			type: 'UTC_TIME',
			array: false,
			arg: []
		}, {

			label: 2,
			name: 'eventConfiguration',
			type: 'BITMAP8',
			array: false,
			arg: []
		}, {

			label: 3,
			name: 'eventConfigurationPayload',
			type: 'EventConfigurationPayloadStruct',
			array: false,
			arg: []
		}]
	}, {

		label: 345,
		nameFun: 'GetEventConfiguration',
		nameObj: 'getEventConfiguration',
		commandClusterId: 1800,
		server: true,
		commandId: 5,
		name: 'GetEventConfiguration',
		mandatory: false,
		arg: [{

			label: 0,
			name: 'eventGroupId',
			type: 'INT8U',
			array: false,
			arg: []
		}, {

			label: 1,
			name: 'eventCode',
			type: 'INT8U',
			array: false,
			arg: []
		}]
	}];

	/**
	 * {Object} Collapse data.
	 *
	 * @description Contains collapsible items.
	 */
	var isCollapsed = {

		sdk: true,
		net2gridApiModule: true,
		ipAddressService: true,
		euiService: true,
		generalDevicesService: true,
		getGeneralDevices: true,
		generalDevices: true,
		setupGeneralDevices: true,
		iasDevicesService: true,
		getSensorDevices: true,
		sensorDevices: true,
		zigbeeLutService: true,
		getClusterLut: true,
		getLogClusterLut: true,
		getIasLut: true,
		getArmStateLut: true,
		utilityService: true,
		radioFrequencyDevicesService: true,
		userService: true,
		getImpulsPlug: true,
		getBrennenstuhlRCS1000NPlug: true,
		getClickOnClickOffAPA22300RPlug: true,
		getIntertechnoITR1500Plug:true,
		getElroHomeEasyHE877Plug: true,
		getSiemensRC018Plug: true,
		getDataTypeLut: true,
		getStatusLut: true,
		getArgDataTypeLut: true,
		getZclVersionAttribute: true,
		getApplicationVersionAttribute: true,
		getStackVersionAttribute: true,
		getHardwareVersionAttribute: true,
		getManufacturerNameAttribute: true,
		getModelIdentifierAttribute: true,
		getDateCodeAttribute: true,
		getPowerSourceAttribute: true,
		getApplicationProfileVersionAttribute: true,
		getLocationDescriptionAttribute: true,
		getPhysicalEnvironmentAttribute: true,
		getDeviceEnabledAttribute: true,
		getAlarmMaskAttribute: true,
		getDisableLocalConfigAttribute: true,
		getMainsVoltageAttribute: true,
		getMainsFrequencyAttribute: true,
		getMainsAlarmMaskAttribute: true,
		getMainsVoltageMinThresholdAttribute: true,
		getMainsVoltageMaxThresholdAttribute: true,
		getMainsVoltageDwellTripAttribute: true,
		getBatteryVoltageAttribute: true,
		getBatteryPercentageRemainingAttribute: true,
		getBatteryManufacturerAttribute: true,
		getBatterySizeAttribute: true,
		getBatteryAhrRatingAttribute: true,
		getBatteryQuantityAttribute: true,
		getBatteryRatedVoltageAttribute: true,
		getBatteryAlarmMaskAttribute: true,
		getBatteryVoltageMinThresholdAttribute: true,
		getBatteryVoltageThreshold1Attribute: true,
		getBatteryVoltageThreshold2Attribute: true,
		getBatteryVoltageThreshold3Attribute: true,
		getBatteryPercentageMinThresholdAttribute: true,
		getBatteryPercentageThreshold1Attribute: true,
		getBatteryPercentageThreshold2Attribute: true,
		getBatteryPercentageThreshold3Attribute: true,
		getBatteryAlarmStateAttribute: true,
		getBattery2VoltageAttribute: true,
		getBattery2PercentageRemainingAttribute: true,
		getBattery2ManufacturerAttribute: true,
		getBattery2SizeAttribute: true,
		getBattery2AhrRatingAttribute: true,
		getBattery2QuantityAttribute: true,
		getBattery2RatedVoltageAttribute: true,
		getBattery2AlarmMaskAttribute: true,
		getBattery2VoltageMinThresholdAttribute: true,
		getBattery2VoltageThreshold1Attribute: true,
		getBattery2VoltageThreshold2Attribute: true,
		getBattery2VoltageThreshold3Attribute: true,
		getBattery2PercentageMinThresholdAttribute: true,
		getBattery2PercentageThreshold1Attribute: true,
		getBattery2PercentageThreshold2Attribute: true,
		getBattery2PercentageThreshold3Attribute: true,
		getBattery2AlarmStateAttribute: true,
		getBattery3VoltageAttribute: true,
		getBattery3PercentageRemainingAttribute: true,
		getBattery3ManufacturerAttribute: true,
		getBattery3SizeAttribute: true,
		getBattery3AhrRatingAttribute: true,
		getBattery3QuantityAttribute: true,
		getBattery3RatedVoltageAttribute: true,
		getBattery3AlarmMaskAttribute: true,
		getBattery3VoltageMinThresholdAttribute: true,
		getBattery3VoltageThreshold1Attribute: true,
		getBattery3VoltageThreshold2Attribute: true,
		getBattery3VoltageThreshold3Attribute: true,
		getBattery3PercentageMinThresholdAttribute: true,
		getBattery3PercentageThreshold1Attribute: true,
		getBattery3PercentageThreshold2Attribute: true,
		getBattery3PercentageThreshold3Attribute: true,
		getBattery3AlarmStateAttribute: true,
		getCurrentTemperatureAttribute: true,
		getMinTempExperiencedAttribute: true,
		getMaxTempExperiencedAttribute: true,
		getOverTempTotalDwellAttribute: true,
		getDeviceTempAlarmMaskAttribute: true,
		getLowTempThresholdAttribute: true,
		getHighTempThresholdAttribute: true,
		getLowTempDwellTripPointAttribute: true,
		getHighTempDwellTripPointAttribute: true,
		getIdentifyTimeAttribute: true,
		getCommissionStateAttribute: true,
		getGroupNameSupportAttribute: true,
		getSceneCountAttribute: true,
		getCurrentSceneAttribute: true,
		getCurrentGroupAttribute: true,
		getSceneValidAttribute: true,
		getSceneNameSupportAttribute: true,
		getLastConfiguredByAttribute: true,
		getOnOffAttribute: true,
		getSwitchTypeAttribute: true,
		getSwitchActionsAttribute: true,
		getCurrentLevelAttribute: true,
		getRemainingTimeAttribute: true,
		getOnOffTransitionTimeAttribute: true,
		getOnLevelAttribute: true,
		getOnTransitionTimeAttribute: true,
		getOffTransitionTimeAttribute: true,
		getDefaultmoveRateAttribute: true,
		getAlarmCountAttribute: true,
		getTimeAttribute: true,
		getTimeStatusAttribute: true,
		getTimeZoneAttribute: true,
		getDstStartAttribute: true,
		getDstEndAttribute: true,
		getDstShiftAttribute: true,
		getStandardTimeAttribute: true,
		getLocalTimeAttribute: true,
		getLastSetTimeAttribute: true,
		getValidUntilTimeAttribute: true,
		getLocationTypeAttribute: true,
		getLocationMethodAttribute: true,
		getLocationAgeAttribute: true,
		getQualityMeasureAttribute: true,
		getNumberOfDevicesAttribute: true,
		getCoordinate1Attribute: true,
		getCoordinate2Attribute: true,
		getCoordinate3Attribute: true,
		getPowerAttribute: true,
		getPathLossExponentAttribute: true,
		getReportingPeriodAttribute: true,
		getCalculationPeriodAttribute: true,
		getNumberRssiMeasurementsAttribute: true,
		getActiveTextAttribute: true,
		getDescriptionAttribute: true,
		getInactiveTextAttribute: true,
		getOutOfServiceAttribute: true,
		getPolarityAttribute: true,
		getPresentValueAttribute: true,
		getReliabilityAttribute: true,
		getStatusFlagsAttribute: true,
		getApplicationTypeAttribute: true,
		getShortAddressAttribute: true,
		getExtendedPanIdAttribute: true,
		getPanIdAttribute: true,
		getChannelMaskAttribute: true,
		getProtocolVersionAttribute: true,
		getStackProfileAttribute: true,
		getStartupControlAttribute: true,
		getTrustCenterAddressAttribute: true,
		getTrustCenterMasterKeyAttribute: true,
		getNetworkKeyAttribute: true,
		getUseInsecureJoinAttribute: true,
		getPreconfiguredLinkKeyAttribute: true,
		getNetworkKeySequenceNumberAttribute: true,
		getNetworkKeyTypeAttribute: true,
		getNetworkManagerAddressAttribute: true,
		getScanAttemptsAttribute: true,
		getTimeBetweenScansAttribute: true,
		getRejoinIntervalAttribute: true,
		getMaxRejoinIntervalAttribute: true,
		getIndirectPollRateAttribute: true,
		getParentRetryThresholdAttribute: true,
		getConcentratorFlagAttribute: true,
		getConcentratorRadiusAttribute: true,
		getConcentratorDiscoveryTimeAttribute: true,
		getPhysicalClosedLimitAttribute: true,
		getMotorStepSizeAttribute: true,
		getStatusAttribute: true,
		getClosedLimitAttribute: true,
		getModeAttribute: true,
		getMaxPressureAttribute: true,
		getMaxSpeedAttribute: true,
		getMaxFlowAttribute: true,
		getMinConstPressureAttribute: true,
		getMaxConstPressureAttribute: true,
		getMinCompPressureAttribute: true,
		getMaxCompPressureAttribute: true,
		getMinConstSpeedAttribute: true,
		getMaxConstSpeedAttribute: true,
		getMinConstFlowAttribute: true,
		getMaxConstFlowAttribute: true,
		getMinConstTempAttribute: true,
		getMaxConstTempAttribute: true,
		getPumpStatusAttribute: true,
		getEffectiveOperationModeAttribute: true,
		getEffectiveControlModeAttribute: true,
		getCapacityAttribute: true,
		getSpeedAttribute: true,
		getLifetimeRunningHoursAttribute: true,
		getPowerAttribute: true,
		getLifetimeEnergyConsumedAttribute: true,
		getOperationModeAttribute: true,
		getControlModeAttribute: true,
		getAlarmMaskAttribute: true,
		getLocalTemperatureAttribute: true,
		getOutdoorTemperatureAttribute: true,
		getOccupancyAttribute: true,
		getAbsMinHeatSetpointLimitAttribute: true,
		getAbsMaxHeatSetpointLimitAttribute: true,
		getAbsMinCoolSetpointLimitAttribute: true,
		getAbsMaxCoolSetpointLimitAttribute: true,
		getPiCoolingDemandAttribute: true,
		getPiHeatingDemandAttribute: true,
		getHvacSystemTypeConfigurationAttribute: true,
		getLocalTemperatureCalibrationAttribute: true,
		getOccupiedCoolingSetpointAttribute: true,
		getOccupiedHeatingSetpointAttribute: true,
		getUnoccupiedCoolingSetpointAttribute: true,
		getUnoccupiedHeatingSetpointAttribute: true,
		getMinHeatSetpointLimitAttribute: true,
		getMaxHeatSetpointLimitAttribute: true,
		getMinCoolSetpointLimitAttribute: true,
		getMaxCoolSetpointLimitAttribute: true,
		getMinSetpointDeadBandAttribute: true,
		getRemoteSensingAttribute: true,
		getControlSequenceOfOperationAttribute: true,
		getSystemModeAttribute: true,
		getAlarmMaskAttribute: true,
		getThermostatRunningModeAttribute: true,
		getStartOfWeekAttribute: true,
		getNumberOfWeeklyTransitionsAttribute: true,
		getNumberOfDailyTransitionsAttribute: true,
		getTemperatureSetpointHoldAttribute: true,
		getTemperatureSetpointHoldDurationAttribute: true,
		getThermostatProgrammingOperationModeAttribute: true,
		getHvacRelayStateAttribute: true,
		getSetpointChangeSourceAttribute: true,
		getSetpointChangeAmountAttribute: true,
		getSetpointChangeSourceTimestampAttribute: true,
		getAcTypeAttribute: true,
		getAcCapacityAttribute: true,
		getAcRefrigerantTypeAttribute: true,
		getAcCompressorAttribute: true,
		getAcErrorCodeAttribute: true,
		getAcLouverPositionAttribute: true,
		getAcCoilTemperatureAttribute: true,
		getAcCapacityFormatAttribute: true,
		getFanModeAttribute: true,
		getFanModeSequenceAttribute: true,
		getRelativeHumidityAttribute: true,
		getDehumidificationCoolingAttribute: true,
		getRhDehumidificationSetpointAttribute: true,
		getRelativeHumidityModeAttribute: true,
		getDehumidificationLockoutAttribute: true,
		getDehumidificationHysteresisAttribute: true,
		getDehumidificationMaxCoolAttribute: true,
		getRelativeHumidityDisplayAttribute: true,
		getTemperatureDisplayModeAttribute: true,
		getKeypadLockoutAttribute: true,
		getScheduleProgrammingVisibilityAttribute: true,
		getCurrentHueAttribute: true,
		getCurrentSaturationAttribute: true,
		getRemainingTimeAttribute: true,
		getCurrentXAttribute: true,
		getCurrentYAttribute: true,
		getDriftCompensationAttribute: true,
		getCompensationTextAttribute: true,
		getColorTemperatureAttribute: true,
		getColorModeAttribute: true,
		getNumberOfPrimariesAttribute: true,
		getPrimary1XAttribute: true,
		getPrimary1YAttribute: true,
		getPrimary1IntensityAttribute: true,
		getPrimary2XAttribute: true,
		getPrimary2YAttribute: true,
		getPrimary2IntensityAttribute: true,
		getPrimary3XAttribute: true,
		getPrimary3YAttribute: true,
		getPrimary3IntensityAttribute: true,
		getPrimary4XAttribute: true,
		getPrimary4YAttribute: true,
		getPrimary4IntensityAttribute: true,
		getPrimary5XAttribute: true,
		getPrimary5YAttribute: true,
		getPrimary5IntensityAttribute: true,
		getPrimary6XAttribute: true,
		getPrimary6YAttribute: true,
		getPrimary6IntensityAttribute: true,
		getWhitePointXAttribute: true,
		getWhitePointYAttribute: true,
		getColorPointRXAttribute: true,
		getColorPointRYAttribute: true,
		getColorPointRIntensityAttribute: true,
		getColorPointGXAttribute: true,
		getColorPointGYAttribute: true,
		getColorPointGIntensityAttribute: true,
		getColorPointBXAttribute: true,
		getColorPointBYAttribute: true,
		getColorPointBIntensityAttribute: true,
		getPhysicalMinLevelAttribute: true,
		getPhysicalMaxLevelAttribute: true,
		getBallastStatusAttribute: true,
		getMinLevelAttribute: true,
		getMaxLevelAttribute: true,
		getPowerOnLevelAttribute: true,
		getPowerOnFadeTimeAttribute: true,
		getIntrinsicBallastFactorAttribute: true,
		getBallastFactorAdjustmentAttribute: true,
		getLampQualityAttribute: true,
		getLampTypeAttribute: true,
		getLampManufacturerAttribute: true,
		getLampRatedHoursAttribute: true,
		getLampBurnHoursAttribute: true,
		getLampAlarmModeAttribute: true,
		getLampBurnHoursTripPointAttribute: true,
		getMeasuredValueAttribute: true,
		getMinMeasuredValueAttribute: true,
		getMaxMeasuredValueAttribute: true,
		getToleranceAttribute: true,
		getLightSensorTypeAttribute: true,
		getLevelStatusAttribute: true,
		getLightSensorTypeAttribute: true,
		getIlluminanceLevelTargetAttribute: true,
		getMeasuredValueAttribute: true,
		getMinMeasuredValueAttribute: true,
		getMaxMeasuredValueAttribute: true,
		getToleranceAttribute: true,
		getMeasuredValueAttribute: true,
		getMinMeasuredValueAttribute: true,
		getMaxMeasuredValueAttribute: true,
		getToleranceAttribute: true,
		getScaledValueAttribute: true,
		getMinScaledValueAttribute: true,
		getMaxScaledValueAttribute: true,
		getScaledToleranceAttribute: true,
		getScaleAttribute: true,
		getMeasuredValueAttribute: true,
		getMinMeasuredValueAttribute: true,
		getMaxMeasuredValueAttribute: true,
		getToleranceAttribute: true,
		getMeasuredValueAttribute: true,
		getMinMeasuredValueAttribute: true,
		getMaxMeasuredValueAttribute: true,
		getToleranceAttribute: true,
		getOccupancyAttribute: true,
		getOccupancySensorTypeAttribute: true,
		getPirOccupiedToUnoccupiedDelayAttribute: true,
		getPirUnoccupiedToOccupiedDelayAttribute: true,
		getPirUnoccupiedToOccupiedThresholdAttribute: true,
		getUltrasonicOccupiedToUnoccupiedDelayAttribute: true,
		getUltrasonicUnoccupiedToOccupiedDelayAttribute: true,
		getUltrasonicUnoccupiedToOccupiedThresholdAttribute: true,
		getZoneStateAttribute: true,
		getZoneTypeAttribute: true,
		getZoneStatusAttribute: true,
		getIasCieAddressAttribute: true,
		getZoneIdAttribute: true,
		getNumberOfZoneSensitivityLevelsSupportedAttribute: true,
		getCurrentZoneSensitivityLevelAttribute: true,
		getMaxDurationAttribute: true,
		getLockStateAttribute: true,
		getLockTypeAttribute: true,
		getActuatorEnabledAttribute: true,
		getDoorStateAttribute: true,
		getDoorOpenEventsAttribute: true,
		getDoorClosedEventsAttribute: true,
		getOpenPeriodAttribute: true,
		getNumLockRecordsSupportedAttribute: true,
		getNumTotalUsersSupportedAttribute: true,
		getNumPinUsersSupportedAttribute: true,
		getNumRfidUsersSupportedAttribute: true,
		getNumWeekdaySchedulesSupportedPerUserAttribute: true,
		getNumYeardaySchedulesSupportedPerUserAttribute: true,
		getNumHolidaySchedulesSupportedPerUserAttribute: true,
		getMaxPinLengthAttribute: true,
		getMinPinLengthAttribute: true,
		getMaxRfidCodeLengthAttribute: true,
		getMinRfidCodeLengthAttribute: true,
		getEnableLoggingAttribute: true,
		getLanguageAttribute: true,
		getLedSettingsAttribute: true,
		getAutoRelockTimeAttribute: true,
		getSoundVolumeAttribute: true,
		getOperatingModeAttribute: true,
		getSupportedOperatingModesAttribute: true,
		getDefaultconfigurationRegisterAttribute: true,
		getEnableLocalProgrammingAttribute: true,
		getEnableOneTouchLockingAttribute: true,
		getEnableInsideStatusLedAttribute: true,
		getEnablePrivacyModeButtonAttribute: true,
		getWrongCodeEntryLimitAttribute: true,
		getUserCodeTemporaryDisableTimeAttribute: true,
		getSendPinOverTheAirAttribute: true,
		getRequirePinForRfOperationAttribute: true,
		getZigbeeSecurityLevelAttribute: true,
		getAlarmMaskAttribute: true,
		getKeypadOperationEventMaskAttribute: true,
		getRfOperationEventMaskAttribute: true,
		getManualOperationEventMaskAttribute: true,
		getRfidOperationEventMaskAttribute: true,
		getKeypadProgrammingEventMaskAttribute: true,
		getRfProgrammingEventMaskAttribute: true,
		getRfidProgrammingEventMaskAttribute: true,
		getWindowCoveringTypeAttribute: true,
		getPhysicalClosedLimitLiftAttribute: true,
		getPhysicalClosedLimitTiltAttribute: true,
		getCurrentPositionLiftAttribute: true,
		getCurrentPositionTiltAttribute: true,
		getNumberOfActuationsLiftAttribute: true,
		getNumberOfActuationsTiltAttribute: true,
		getConfigStatusAttribute: true,
		getCurrentPositionLiftPercentageAttribute: true,
		getCurrentPositionTiltPercentageAttribute: true,
		getInstalledOpenLimitLiftAttribute: true,
		getInstalledClosedLimitLiftAttribute: true,
		getInstalledOpenLimitTiltAttribute: true,
		getInstalledClosedLimitTiltAttribute: true,
		getVelocityLiftAttribute: true,
		getAccelerationTimeLiftAttribute: true,
		getDecelerationTimeLiftAttribute: true,
		getModeAttribute: true,
		getIntermediateSetpointsLiftAttribute: true,
		getIntermediateSetpointsTiltAttribute: true,
		getStartTimeAttribute: true,
		getFinishTimeAttribute: true,
		getRemainingTimeAttribute: true,
		getTotalProfileNumAttribute: true,
		getMultipleSchedulingAttribute: true,
		getEnergyFormattingAttribute: true,
		getEnergyRemoteAttribute: true,
		getScheduleModeAttribute: true,
		getCheckInIntervalAttribute: true,
		getLongPollIntervalAttribute: true,
		getShortPollIntervalAttribute: true,
		getFastPollTimeoutAttribute: true,
		getCheckInIntervalMinAttribute: true,
		getLongPollIntervalMinAttribute: true,
		getFastPollTimeoutMaxAttribute: true,
		getBasicIdentificationAttribute: true,
		getCompanyNameAttribute: true,
		getCompanyIdAttribute: true,
		getBrandNameAttribute: true,
		getBrandIdAttribute: true,
		getModelAttribute: true,
		getPartNumberAttribute: true,
		getProductRevisionAttribute: true,
		getSoftwareRevisionAttribute: true,
		getProductTypeNameAttribute: true,
		getProductTypeIdAttribute: true,
		getCecedSpecificationVersionAttribute: true,
		getCompanyNameAttribute: true,
		getMeterTypeIdAttribute: true,
		getDataQualityIdAttribute: true,
		getCustomerNameAttribute: true,
		getModelAttribute: true,
		getPartNumberAttribute: true,
		getProductRevisionAttribute: true,
		getSoftwareRevisionAttribute: true,
		getUtilityNameAttribute: true,
		getPodAttribute: true,
		getAvailablePowerAttribute: true,
		getPowerThresholdAttribute: true,
		getLogMaxSizeAttribute: true,
		getLogQueueMaxSizeAttribute: true,
		getMeasurementTypeAttribute: true,
		getDcVoltageAttribute: true,
		getDcVoltageMinAttribute: true,
		getDcVoltageMaxAttribute: true,
		getDcCurrentAttribute: true,
		getDcCurrentMinAttribute: true,
		getDcCurrentMaxAttribute: true,
		getDcPowerAttribute: true,
		getDcPowerMinAttribute: true,
		getDcPowerMaxAttribute: true,
		getDcVoltageMultiplierAttribute: true,
		getDcVoltageDivisorAttribute: true,
		getDcCurrentMultiplierAttribute: true,
		getDcCurrentDivisorAttribute: true,
		getDcPowerMultiplierAttribute: true,
		getDcPowerDivisorAttribute: true,
		getAcFrequencyAttribute: true,
		getAcFrequencyMinAttribute: true,
		getAcFrequencyMaxAttribute: true,
		getNeutralCurrentAttribute: true,
		getTotalActivePowerAttribute: true,
		getTotalReactivePowerAttribute: true,
		getTotalApparentPowerAttribute: true,
		getMeasured1stHarmonicCurrentAttribute: true,
		getMeasured3rdHarmonicCurrentAttribute: true,
		getMeasured5thHarmonicCurrentAttribute: true,
		getMeasured7thHarmonicCurrentAttribute: true,
		getMeasured9thHarmonicCurrentAttribute: true,
		getMeasured11thHarmonicCurrentAttribute: true,
		getMeasuredPhase1stHarmonicCurrentAttribute: true,
		getMeasuredPhase3rdHarmonicCurrentAttribute: true,
		getMeasuredPhase5thHarmonicCurrentAttribute: true,
		getMeasuredPhase7thHarmonicCurrentAttribute: true,
		getMeasuredPhase9thHarmonicCurrentAttribute: true,
		getMeasuredPhase11thHarmonicCurrentAttribute: true,
		getAcFrequencyMultiplierAttribute: true,
		getAcFrequencyDivisorAttribute: true,
		getPowerMultiplierAttribute: true,
		getPowerDivisorAttribute: true,
		getHarmonicCurrentMultiplierAttribute: true,
		getPhaseHarmonicCurrentMultiplierAttribute: true,
		getInstantaneousVoltageAttribute: true,
		getInstantaneousLineCurrentAttribute: true,
		getInstantaneousActiveCurrentAttribute: true,
		getInstantaneousReactiveCurrentAttribute: true,
		getInstantaneousPowerAttribute: true,
		getRmsVoltageAttribute: true,
		getRmsVoltageMinAttribute: true,
		getRmsVoltageMaxAttribute: true,
		getRmsCurrentAttribute: true,
		getRmsCurrentMinAttribute: true,
		getRmsCurrentMaxAttribute: true,
		getActivePowerAttribute: true,
		getActivePowerMinAttribute: true,
		getActivePowerMaxAttribute: true,
		getReactivePowerAttribute: true,
		getApparentPowerAttribute: true,
		getPowerFactorAttribute: true,
		getAverageRmsVoltageMeasurementPeriodAttribute: true,
		getAverageRmsUnderVoltageCounterAttribute: true,
		getRmsExtremeOverVoltagePeriodAttribute: true,
		getRmsExtremeUnderVoltagePeriodAttribute: true,
		getRmsVoltageSagPeriodAttribute: true,
		getRmsVoltageSwellPeriodAttribute: true,
		getAcVoltageMultiplierAttribute: true,
		getAcVoltageDivisorAttribute: true,
		getAcCurrentMultiplierAttribute: true,
		getAcCurrentDivisorAttribute: true,
		getAcPowerMultiplierAttribute: true,
		getAcPowerDivisorAttribute: true,
		getOverloadAlarmsMaskAttribute: true,
		getVoltageOverloadAttribute: true,
		getCurrentOverloadAttribute: true,
		getAcOverloadAlarmsMaskAttribute: true,
		getAcVoltageOverloadAttribute: true,
		getAcCurrentOverloadAttribute: true,
		getAcActivePowerOverloadAttribute: true,
		getAcReactivePowerOverloadAttribute: true,
		getAverageRmsOverVoltageAttribute: true,
		getAverageRmsUnderVoltageAttribute: true,
		getRmsExtremeOverVoltageAttribute: true,
		getRmsExtremeUnderVoltageAttribute: true,
		getRmsVoltageSagAttribute: true,
		getRmsVoltageSwellAttribute: true,
		getLineCurrentPhaseBAttribute: true,
		getActiveCurrentPhaseBAttribute: true,
		getReactiveCurrentPhaseBAttribute: true,
		getRmsVoltagePhaseBAttribute: true,
		getRmsVoltageMinPhaseBAttribute: true,
		getRmsVoltageMaxPhaseBAttribute: true,
		getRmsCurrentPhaseBAttribute: true,
		getRmsCurrentMinPhaseBAttribute: true,
		getRmsCurrentMaxPhaseBAttribute: true,
		getActivePowerPhaseBAttribute: true,
		getActivePowerMinPhaseBAttribute: true,
		getActivePowerMaxPhaseBAttribute: true,
		getReactivePowerPhaseBAttribute: true,
		getApparentPowerPhaseBAttribute: true,
		getPowerFactorPhaseBAttribute: true,
		getAverageRmsVoltageMeasurementPeriodPhaseBAttribute: true,
		getAverageRmsOverVoltageCounterPhaseBAttribute: true,
		getAverageRmsUnderVoltageCounterPhaseBAttribute: true,
		getRmsExtremeOverVoltagePeriodPhaseBAttribute: true,
		getRmsExtremeUnderVoltagePeriodPhaseBAttribute: true,
		getRmsVoltageSagPeriodPhaseBAttribute: true,
		getRmsVoltageSwellPeriodPhaseBAttribute: true,
		getLineCurrentPhaseCAttribute: true,
		getActiveCurrentPhaseCAttribute: true,
		getReactiveCurrentPhaseCAttribute: true,
		getRmsVoltagePhaseCAttribute: true,
		getRmsVoltageMinPhaseCAttribute: true,
		getRmsVoltageMaxPhaseCAttribute: true,
		getRmsCurrentPhaseBAttribute: true,
		getRmsCurrentMinPhaseCAttribute: true,
		getRmsCurrentMaxPhaseCAttribute: true,
		getActivePowerPhaseCAttribute: true,
		getActivePowerMinPhaseCAttribute: true,
		getActivePowerMaxPhaseCAttribute: true,
		getReactivePowerPhaseCAttribute: true,
		getApparentPowerPhaseCAttribute: true,
		getPowerFactorPhaseCAttribute: true,
		getAverageRmsVoltageMeasurementPeriodPhaseCAttribute: true,
		getAverageRmsOverVoltageCounterPhaseCAttribute: true,
		getAverageRmsUnderVoltageCounterPhaseCAttribute: true,
		getRmsExtremeOverVoltagePeriodPhaseCAttribute: true,
		getRmsExtremeUnderVoltagePeriodPhaseCAttribute: true,
		getRmsVoltageSagPeriodPhaseCAttribute: true,
		getRmsVoltageSwellPeriodPhaseCAttribute: true,
		getNumberOfResetsAttribute: true,
		getPersistentMemoryWritesAttribute: true,
		getMacRxBroadcastAttribute: true,
		getMacTxBroadcastAttribute: true,
		getMacRxUnicastAttribute: true,
		getMacTxUnicastAttribute: true,
		getMacTxUnicastRetryAttribute: true,
		getMacTxUnicastFailAttribute: true,
		getApsRxBroadcastAttribute: true,
		getApsTxBroadcastAttribute: true,
		getApsRxUnicastAttribute: true,
		getApsUnicastSuccessAttribute: true,
		getApsTxUnicastRetriesAttribute: true,
		getApsTxUnicastFailuresAttribute: true,
		getRouteDiscoveryInitiatedAttribute: true,
		getNeighborAddedAttribute: true,
		getNeighborMovedAttribute: true,
		getNeighborStaleAttribute: true,
		getJoinIndicationAttribute: true,
		getChildMovedAttribute: true,
		getNetworkFrameControlFailureAttribute: true,
		getApsFrameControlFailureAttribute: true,
		getApsUnauthorizedKeyAttribute: true,
		getNetworkDecryptionFailureAttribute: true,
		getApsDecryptionFailureAttribute: true,
		getPacketBufferAllocationFailuresAttribute: true,
		getRelayedUnicastsAttribute: true,
		getPhyToMacQueueLimitReachedAttribute: true,
		getPacketValidateDropCountAttribute: true,
		getAverageMacRetryPerApsMessageSentAttribute: true,
		getLastMessageLqiAttribute: true,
		getLastMessageRssiAttribute: true,
		getUtilityEnrollmentGroupAttribute: true,
		getStartRandomizeMinutesAttribute: true,
		getStopRandomizeMinutesAttribute: true,
		getDeviceClassValueAttribute: true,
		getCurrentSummationDeliveredAttribute: true,
		getCurrentSummationReceivedAttribute: true,
		getCurrentMaxDemandDeliveredAttribute: true,
		getCurrentMaxDemandReceivedAttribute: true,
		getDftSummationAttribute: true,
		getDailyFreezeTimeAttribute: true,
		getPowerFactorAttribute: true,
		getReadingSnapshotTimeAttribute: true,
		getCurrentMaxDemandDeliveredTimeAttribute: true,
		getCurrentMaxDemandReceivedTimeAttribute: true,
		getDefaultupdatePeriodAttribute: true,
		getFastPollUpdatePeriodAttribute: true,
		getCurrentBlockPeriodConsumptionDeliveredAttribute: true,
		getDailyConsumptionTargetAttribute: true,
		getCurrentBlockAttribute: true,
		getProfileIntervalPeriodAttribute: true,
		getIntervalReadReportingPeriodAttribute: true,
		getPresetReadingTimeAttribute: true,
		getVolumePerReportAttribute: true,
		getFlowRestrictionAttribute: true,
		getSupplyStatusAttribute: true,
		getCurrentInletEnergyCarrierSummationAttribute: true,
		getCurrentOutletEnergyCarrierSummationAttribute: true,
		getInletTemperatureAttribute: true,
		getOutletTemperatureAttribute: true,
		getControlTemperatureAttribute: true,
		getCurrentInletEnergyCarrierDemandAttribute: true,
		getCurrentOutletEnergyCarrierDemandAttribute: true,
		getPreviousBlockPeriodConsumptionDeliveredAttribute: true,
		getActiveRegisterTierDeliveredAttribute: true,
		getActiveRegisterTierReceivedAttribute: true,
		getLastBlockSwitchTimeAttribute: true,
		getCurrentTier1SummationDeliveredAttribute: true,
		getCurrentTier1SummationReceivedAttribute: true,
		getCurrentTier2SummationDeliveredAttribute: true,
		getCurrentTier2SummationReceivedAttribute: true,
		getCurrentTier3SummationDeliveredAttribute: true,
		getCurrentTier3SummationReceivedAttribute: true,
		getCurrentTier4SummationDeliveredAttribute: true,
		getCurrentTier4SummationReceivedAttribute: true,
		getCurrentTier5SummationDeliveredAttribute: true,
		getCurrentTier5SummationReceivedAttribute: true,
		getCurrentTier6SummationDeliveredAttribute: true,
		getCurrentTier6SummationReceivedAttribute: true,
		getCurrentTier7SummationDeliveredAttribute: true,
		getCurrentTier7SummationReceivedAttribute: true,
		getCurrentTier8SummationDeliveredAttribute: true,
		getCurrentTier8SummationReceivedAttribute: true,
		getCurrentTier9SummationDeliveredAttribute: true,
		getCurrentTier9SummationReceivedAttribute: true,
		getCurrentTier10SummationDeliveredAttribute: true,
		getCurrentTier10SummationReceivedAttribute: true,
		getCurrentTier11SummationDeliveredAttribute: true,
		getCurrentTier11SummationReceivedAttribute: true,
		getCurrentTier12SummationDeliveredAttribute: true,
		getCurrentTier12SummationReceivedAttribute: true,
		getCurrentTier13SummationDeliveredAttribute: true,
		getCurrentTier13SummationReceivedAttribute: true,
		getCurrentTier14SummationDeliveredAttribute: true,
		getCurrentTier14SummationReceivedAttribute: true,
		getCurrentTier15SummationDeliveredAttribute: true,
		getCurrentTier15SummationReceivedAttribute: true,
		getStatusAttribute: true,
		getRemainingBatteryLifeAttribute: true,
		getHoursInOperationAttribute: true,
		getHoursInFaultAttribute: true,
		getUnitOfMeasureAttribute: true,
		getMultiplierAttribute: true,
		getDivisorAttribute: true,
		getSummationFormattingAttribute: true,
		getDemandFormattingAttribute: true,
		getHistoricalConsumptionFormattingAttribute: true,
		getMeteringDeviceTypeAttribute: true,
		getSiteIdAttribute: true,
		getMeterSerialNumberAttribute: true,
		getEnergyCarrierUnitOfMeasureAttribute: true,
		getEnergyCarrierSummationFormattingAttribute: true,
		getEnergyCarrierDemandFormattingAttribute: true,
		getTemperatureUnitOfMeasureAttribute: true,
		getTemperatureFormattingAttribute: true,
		getInstantaneousDemandAttribute: true,
		getCurrentDayConsumptionDeliveredAttribute: true,
		getCurrentDayConsumptionReceivedAttribute: true,
		getPreviousDayConsumptionDeliveredAttribute: true,
		getPreviousDayConsumptionReceivedAttribute: true,
		getCurrentPartialProfileIntervalStartTimeDeliveredAttribute: true,
		getCurrentPartialProfileIntervalStartTimeReceivedAttribute: true,
		getCurrentPartialProfileIntervalValueDeliveredAttribute: true,
		getCurrentPartialProfileIntervalValueReceivedAttribute: true,
		getCurrentDayMaxPressureAttribute: true,
		getCurrentDayMinPressureAttribute: true,
		getPreviousDayMaxPressureAttribute: true,
		getPreviousDayMinPressureAttribute: true,
		getCurrentDayMaxDemandAttribute: true,
		getPreviousDayMaxDemandAttribute: true,
		getCurrentMonthMaxDemandAttribute: true,
		getCurrentYearMaxDemandAttribute: true,
		getCurrentDayMaxEnergyCarrierDemandAttribute: true,
		getPreviousDayMaxEnergyCarrierDemandAttribute: true,
		getCurrentMonthMaxEnergyCarrierDemandAttribute: true,
		getCurrentMonthMinEnergyCarrierDemandAttribute: true,
		getCurrentYearMaxEnergyCarrierDemandAttribute: true,
		getCurrentYearMinEnergyCarrierDemandAttribute: true,
		getMaxNumberOfPeriodsDeliveredAttribute: true,
		getCurrentDemandDeliveredAttribute: true,
		getDemandLimitAttribute: true,
		getDemandIntegrationPeriodAttribute: true,
		getNumberOfDemandSubintervalsAttribute: true,
		getCurrentNoTierBlock1SummationDeliveredAttribute: true,
		getCurrentNoTierBlock2SummationDeliveredAttribute: true,
		getCurrentNoTierBlock3SummationDeliveredAttribute: true,
		getCurrentNoTierBlock4SummationDeliveredAttribute: true,
		getCurrentNoTierBlock5SummationDeliveredAttribute: true,
		getCurrentNoTierBlock6SummationDeliveredAttribute: true,
		getCurrentNoTierBlock7SummationDeliveredAttribute: true,
		getCurrentNoTierBlock8SummationDeliveredAttribute: true,
		getCurrentNoTierBlock9SummationDeliveredAttribute: true,
		getCurrentNoTierBlock10SummationDeliveredAttribute: true,
		getCurrentNoTierBlock11SummationDeliveredAttribute: true,
		getCurrentNoTierBlock12SummationDeliveredAttribute: true,
		getCurrentNoTierBlock13SummationDeliveredAttribute: true,
		getCurrentNoTierBlock14SummationDeliveredAttribute: true,
		getCurrentNoTierBlock15SummationDeliveredAttribute: true,
		getCurrentNoTierBlock16SummationDeliveredAttribute: true,
		getCurrentTier1Block1SummationDeliveredAttribute: true,
		getCurrentTier1Block2SummationDeliveredAttribute: true,
		getCurrentTier1Block3SummationDeliveredAttribute: true,
		getCurrentTier1Block4SummationDeliveredAttribute: true,
		getCurrentTier1Block5SummationDeliveredAttribute: true,
		getCurrentTier1Block6SummationDeliveredAttribute: true,
		getCurrentTier1Block7SummationDeliveredAttribute: true,
		getCurrentTier1Block8SummationDeliveredAttribute: true,
		getCurrentTier1Block9SummationDeliveredAttribute: true,
		getCurrentTier1Block10SummationDeliveredAttribute: true,
		getCurrentTier1Block11SummationDeliveredAttribute: true,
		getCurrentTier1Block12SummationDeliveredAttribute: true,
		getCurrentTier1Block13SummationDeliveredAttribute: true,
		getCurrentTier1Block14SummationDeliveredAttribute: true,
		getCurrentTier1Block15SummationDeliveredAttribute: true,
		getCurrentTier1Block16SummationDeliveredAttribute: true,
		getCurrentTier2Block1SummationDeliveredAttribute: true,
		getCurrentTier2Block2SummationDeliveredAttribute: true,
		getCurrentTier2Block3SummationDeliveredAttribute: true,
		getCurrentTier2Block4SummationDeliveredAttribute: true,
		getCurrentTier2Block5SummationDeliveredAttribute: true,
		getCurrentTier2Block6SummationDeliveredAttribute: true,
		getCurrentTier2Block7SummationDeliveredAttribute: true,
		getCurrentTier2Block8SummationDeliveredAttribute: true,
		getCurrentTier2Block9SummationDeliveredAttribute: true,
		getCurrentTier2Block10SummationDeliveredAttribute: true,
		getCurrentTier2Block11SummationDeliveredAttribute: true,
		getCurrentTier2Block12SummationDeliveredAttribute: true,
		getCurrentTier2Block13SummationDeliveredAttribute: true,
		getCurrentTier2Block14SummationDeliveredAttribute: true,
		getCurrentTier2Block15SummationDeliveredAttribute: true,
		getCurrentTier2Block16SummationDeliveredAttribute: true,
		getCurrentTier3Block1SummationDeliveredAttribute: true,
		getCurrentTier3Block2SummationDeliveredAttribute: true,
		getCurrentTier3Block3SummationDeliveredAttribute: true,
		getCurrentTier3Block4SummationDeliveredAttribute: true,
		getCurrentTier3Block5SummationDeliveredAttribute: true,
		getCurrentTier3Block6SummationDeliveredAttribute: true,
		getCurrentTier3Block7SummationDeliveredAttribute: true,
		getCurrentTier3Block8SummationDeliveredAttribute: true,
		getCurrentTier3Block9SummationDeliveredAttribute: true,
		getCurrentTier3Block10SummationDeliveredAttribute: true,
		getCurrentTier3Block11SummationDeliveredAttribute: true,
		getCurrentTier3Block12SummationDeliveredAttribute: true,
		getCurrentTier3Block13SummationDeliveredAttribute: true,
		getCurrentTier3Block14SummationDeliveredAttribute: true,
		getCurrentTier3Block15SummationDeliveredAttribute: true,
		getCurrentTier3Block16SummationDeliveredAttribute: true,
		getCurrentTier4Block1SummationDeliveredAttribute: true,
		getCurrentTier4Block2SummationDeliveredAttribute: true,
		getCurrentTier4Block3SummationDeliveredAttribute: true,
		getCurrentTier4Block4SummationDeliveredAttribute: true,
		getCurrentTier4Block5SummationDeliveredAttribute: true,
		getCurrentTier4Block6SummationDeliveredAttribute: true,
		getCurrentTier4Block7SummationDeliveredAttribute: true,
		getCurrentTier4Block8SummationDeliveredAttribute: true,
		getCurrentTier4Block9SummationDeliveredAttribute: true,
		getCurrentTier4Block10SummationDeliveredAttribute: true,
		getCurrentTier4Block11SummationDeliveredAttribute: true,
		getCurrentTier4Block12SummationDeliveredAttribute: true,
		getCurrentTier4Block13SummationDeliveredAttribute: true,
		getCurrentTier4Block14SummationDeliveredAttribute: true,
		getCurrentTier4Block15SummationDeliveredAttribute: true,
		getCurrentTier4Block16SummationDeliveredAttribute: true,
		getCurrentTier5Block1SummationDeliveredAttribute: true,
		getCurrentTier5Block2SummationDeliveredAttribute: true,
		getCurrentTier5Block3SummationDeliveredAttribute: true,
		getCurrentTier5Block4SummationDeliveredAttribute: true,
		getCurrentTier5Block5SummationDeliveredAttribute: true,
		getCurrentTier5Block6SummationDeliveredAttribute: true,
		getCurrentTier5Block7SummationDeliveredAttribute: true,
		getCurrentTier5Block8SummationDeliveredAttribute: true,
		getCurrentTier5Block9SummationDeliveredAttribute: true,
		getCurrentTier5Block10SummationDeliveredAttribute: true,
		getCurrentTier5Block11SummationDeliveredAttribute: true,
		getCurrentTier5Block12SummationDeliveredAttribute: true,
		getCurrentTier5Block13SummationDeliveredAttribute: true,
		getCurrentTier5Block14SummationDeliveredAttribute: true,
		getCurrentTier5Block15SummationDeliveredAttribute: true,
		getCurrentTier5Block16SummationDeliveredAttribute: true,
		getCurrentTier6Block1SummationDeliveredAttribute: true,
		getCurrentTier6Block2SummationDeliveredAttribute: true,
		getCurrentTier6Block3SummationDeliveredAttribute: true,
		getCurrentTier6Block4SummationDeliveredAttribute: true,
		getCurrentTier6Block5SummationDeliveredAttribute: true,
		getCurrentTier6Block6SummationDeliveredAttribute: true,
		getCurrentTier6Block7SummationDeliveredAttribute: true,
		getCurrentTier6Block8SummationDeliveredAttribute: true,
		getCurrentTier6Block9SummationDeliveredAttribute: true,
		getCurrentTier6Block10SummationDeliveredAttribute: true,
		getCurrentTier6Block11SummationDeliveredAttribute: true,
		getCurrentTier6Block12SummationDeliveredAttribute: true,
		getCurrentTier6Block13SummationDeliveredAttribute: true,
		getCurrentTier6Block14SummationDeliveredAttribute: true,
		getCurrentTier6Block15SummationDeliveredAttribute: true,
		getCurrentTier6Block16SummationDeliveredAttribute: true,
		getCurrentTier7Block1SummationDeliveredAttribute: true,
		getCurrentTier7Block2SummationDeliveredAttribute: true,
		getCurrentTier7Block3SummationDeliveredAttribute: true,
		getCurrentTier7Block4SummationDeliveredAttribute: true,
		getCurrentTier7Block5SummationDeliveredAttribute: true,
		getCurrentTier7Block6SummationDeliveredAttribute: true,
		getCurrentTier7Block7SummationDeliveredAttribute: true,
		getCurrentTier7Block8SummationDeliveredAttribute: true,
		getCurrentTier7Block9SummationDeliveredAttribute: true,
		getCurrentTier7Block10SummationDeliveredAttribute: true,
		getCurrentTier7Block11SummationDeliveredAttribute: true,
		getCurrentTier7Block12SummationDeliveredAttribute: true,
		getCurrentTier7Block13SummationDeliveredAttribute: true,
		getCurrentTier7Block14SummationDeliveredAttribute: true,
		getCurrentTier7Block15SummationDeliveredAttribute: true,
		getCurrentTier7Block16SummationDeliveredAttribute: true,
		getCurrentTier8Block1SummationDeliveredAttribute: true,
		getCurrentTier8Block2SummationDeliveredAttribute: true,
		getCurrentTier8Block3SummationDeliveredAttribute: true,
		getCurrentTier8Block4SummationDeliveredAttribute: true,
		getCurrentTier8Block5SummationDeliveredAttribute: true,
		getCurrentTier8Block6SummationDeliveredAttribute: true,
		getCurrentTier8Block7SummationDeliveredAttribute: true,
		getCurrentTier8Block8SummationDeliveredAttribute: true,
		getCurrentTier8Block9SummationDeliveredAttribute: true,
		getCurrentTier8Block10SummationDeliveredAttribute: true,
		getCurrentTier8Block11SummationDeliveredAttribute: true,
		getCurrentTier8Block12SummationDeliveredAttribute: true,
		getCurrentTier8Block13SummationDeliveredAttribute: true,
		getCurrentTier8Block14SummationDeliveredAttribute: true,
		getCurrentTier8Block15SummationDeliveredAttribute: true,
		getCurrentTier8Block16SummationDeliveredAttribute: true,
		getCurrentTier9Block1SummationDeliveredAttribute: true,
		getCurrentTier9Block2SummationDeliveredAttribute: true,
		getCurrentTier9Block3SummationDeliveredAttribute: true,
		getCurrentTier9Block4SummationDeliveredAttribute: true,
		getCurrentTier9Block5SummationDeliveredAttribute: true,
		getCurrentTier9Block6SummationDeliveredAttribute: true,
		getCurrentTier9Block7SummationDeliveredAttribute: true,
		getCurrentTier9Block8SummationDeliveredAttribute: true,
		getCurrentTier9Block9SummationDeliveredAttribute: true,
		getCurrentTier9Block10SummationDeliveredAttribute: true,
		getCurrentTier9Block11SummationDeliveredAttribute: true,
		getCurrentTier9Block12SummationDeliveredAttribute: true,
		getCurrentTier9Block13SummationDeliveredAttribute: true,
		getCurrentTier9Block14SummationDeliveredAttribute: true,
		getCurrentTier9Block15SummationDeliveredAttribute: true,
		getCurrentTier9Block16SummationDeliveredAttribute: true,
		getCurrentTier10Block1SummationDeliveredAttribute: true,
		getCurrentTier10Block2SummationDeliveredAttribute: true,
		getCurrentTier10Block3SummationDeliveredAttribute: true,
		getCurrentTier10Block4SummationDeliveredAttribute: true,
		getCurrentTier10Block5SummationDeliveredAttribute: true,
		getCurrentTier10Block6SummationDeliveredAttribute: true,
		getCurrentTier10Block7SummationDeliveredAttribute: true,
		getCurrentTier10Block8SummationDeliveredAttribute: true,
		getCurrentTier10Block9SummationDeliveredAttribute: true,
		getCurrentTier10Block10SummationDeliveredAttribute: true,
		getCurrentTier10Block11SummationDeliveredAttribute: true,
		getCurrentTier10Block12SummationDeliveredAttribute: true,
		getCurrentTier10Block13SummationDeliveredAttribute: true,
		getCurrentTier10Block14SummationDeliveredAttribute: true,
		getCurrentTier10Block15SummationDeliveredAttribute: true,
		getCurrentTier10Block16SummationDeliveredAttribute: true,
		getCurrentTier11Block1SummationDeliveredAttribute: true,
		getCurrentTier11Block2SummationDeliveredAttribute: true,
		getCurrentTier11Block3SummationDeliveredAttribute: true,
		getCurrentTier11Block4SummationDeliveredAttribute: true,
		getCurrentTier11Block5SummationDeliveredAttribute: true,
		getCurrentTier11Block6SummationDeliveredAttribute: true,
		getCurrentTier11Block7SummationDeliveredAttribute: true,
		getCurrentTier11Block8SummationDeliveredAttribute: true,
		getCurrentTier11Block9SummationDeliveredAttribute: true,
		getCurrentTier11Block10SummationDeliveredAttribute: true,
		getCurrentTier11Block11SummationDeliveredAttribute: true,
		getCurrentTier11Block12SummationDeliveredAttribute: true,
		getCurrentTier11Block13SummationDeliveredAttribute: true,
		getCurrentTier11Block14SummationDeliveredAttribute: true,
		getCurrentTier11Block15SummationDeliveredAttribute: true,
		getCurrentTier11Block16SummationDeliveredAttribute: true,
		getCurrentTier12Block1SummationDeliveredAttribute: true,
		getCurrentTier12Block2SummationDeliveredAttribute: true,
		getCurrentTier12Block3SummationDeliveredAttribute: true,
		getCurrentTier12Block4SummationDeliveredAttribute: true,
		getCurrentTier12Block5SummationDeliveredAttribute: true,
		getCurrentTier12Block6SummationDeliveredAttribute: true,
		getCurrentTier12Block7SummationDeliveredAttribute: true,
		getCurrentTier12Block8SummationDeliveredAttribute: true,
		getCurrentTier12Block9SummationDeliveredAttribute: true,
		getCurrentTier12Block10SummationDeliveredAttribute: true,
		getCurrentTier12Block11SummationDeliveredAttribute: true,
		getCurrentTier12Block12SummationDeliveredAttribute: true,
		getCurrentTier12Block13SummationDeliveredAttribute: true,
		getCurrentTier12Block14SummationDeliveredAttribute: true,
		getCurrentTier12Block15SummationDeliveredAttribute: true,
		getCurrentTier12Block16SummationDeliveredAttribute: true,
		getCurrentTier13Block1SummationDeliveredAttribute: true,
		getCurrentTier13Block2SummationDeliveredAttribute: true,
		getCurrentTier13Block3SummationDeliveredAttribute: true,
		getCurrentTier13Block4SummationDeliveredAttribute: true,
		getCurrentTier13Block5SummationDeliveredAttribute: true,
		getCurrentTier13Block6SummationDeliveredAttribute: true,
		getCurrentTier13Block7SummationDeliveredAttribute: true,
		getCurrentTier13Block8SummationDeliveredAttribute: true,
		getCurrentTier13Block9SummationDeliveredAttribute: true,
		getCurrentTier13Block10SummationDeliveredAttribute: true,
		getCurrentTier13Block11SummationDeliveredAttribute: true,
		getCurrentTier13Block12SummationDeliveredAttribute: true,
		getCurrentTier13Block13SummationDeliveredAttribute: true,
		getCurrentTier13Block14SummationDeliveredAttribute: true,
		getCurrentTier13Block15SummationDeliveredAttribute: true,
		getCurrentTier13Block16SummationDeliveredAttribute: true,
		getCurrentTier14Block1SummationDeliveredAttribute: true,
		getCurrentTier14Block2SummationDeliveredAttribute: true,
		getCurrentTier14Block3SummationDeliveredAttribute: true,
		getCurrentTier14Block4SummationDeliveredAttribute: true,
		getCurrentTier14Block5SummationDeliveredAttribute: true,
		getCurrentTier14Block6SummationDeliveredAttribute: true,
		getCurrentTier14Block7SummationDeliveredAttribute: true,
		getCurrentTier14Block8SummationDeliveredAttribute: true,
		getCurrentTier14Block9SummationDeliveredAttribute: true,
		getCurrentTier14Block10SummationDeliveredAttribute: true,
		getCurrentTier14Block11SummationDeliveredAttribute: true,
		getCurrentTier14Block12SummationDeliveredAttribute: true,
		getCurrentTier14Block13SummationDeliveredAttribute: true,
		getCurrentTier14Block14SummationDeliveredAttribute: true,
		getCurrentTier14Block15SummationDeliveredAttribute: true,
		getCurrentTier14Block16SummationDeliveredAttribute: true,
		getCurrentTier15Block1SummationDeliveredAttribute: true,
		getCurrentTier15Block2SummationDeliveredAttribute: true,
		getCurrentTier15Block3SummationDeliveredAttribute: true,
		getCurrentTier15Block4SummationDeliveredAttribute: true,
		getCurrentTier15Block5SummationDeliveredAttribute: true,
		getCurrentTier15Block6SummationDeliveredAttribute: true,
		getCurrentTier15Block7SummationDeliveredAttribute: true,
		getCurrentTier15Block8SummationDeliveredAttribute: true,
		getCurrentTier15Block9SummationDeliveredAttribute: true,
		getCurrentTier15Block10SummationDeliveredAttribute: true,
		getCurrentTier15Block11SummationDeliveredAttribute: true,
		getCurrentTier15Block12SummationDeliveredAttribute: true,
		getCurrentTier15Block13SummationDeliveredAttribute: true,
		getCurrentTier15Block14SummationDeliveredAttribute: true,
		getCurrentTier15Block15SummationDeliveredAttribute: true,
		getCurrentTier15Block16SummationDeliveredAttribute: true,
		getGenericAlarmMaskAttribute: true,
		getElectricityAlarmMaskAttribute: true,
		getGenericFlowPressureAlarmMaskAttribute: true,
		getWaterSpecificAlarmMaskAttribute: true,
		getHeatAndCoolingSpecificAlarmMaskAttribute: true,
		getGasSpecificAlarmMaskAttribute: true,
		getCurrentBlockPeriodConsumptionReceivedAttribute: true,
		getCurrentBlockReceivedAttribute: true,
		getCurrentTier16SummationDeliveredAttribute: true,
		getCurrentTier16SummationReceivedAttribute: true,
		getCurrentTier17SummationDeliveredAttribute: true,
		getCurrentTier17SummationReceivedAttribute: true,
		getCurrentTier18SummationDeliveredAttribute: true,
		getCurrentTier18SummationReceivedAttribute: true,
		getCurrentTier19SummationDeliveredAttribute: true,
		getCurrentTier19SummationReceivedAttribute: true,
		getCurrentTier20SummationDeliveredAttribute: true,
		getCurrentTier20SummationReceivedAttribute: true,
		getCurrentTier21SummationDeliveredAttribute: true,
		getCurrentTier21SummationReceivedAttribute: true,
		getCurrentTier22SummationDeliveredAttribute: true,
		getCurrentTier22SummationReceivedAttribute: true,
		getCurrentTier23SummationDeliveredAttribute: true,
		getCurrentTier23SummationReceivedAttribute: true,
		getCurrentTier24SummationDeliveredAttribute: true,
		getCurrentTier24SummationReceivedAttribute: true,
		getCurrentTier25SummationDeliveredAttribute: true,
		getCurrentTier25SummationReceivedAttribute: true,
		getCurrentTier26SummationDeliveredAttribute: true,
		getCurrentTier26SummationReceivedAttribute: true,
		getCurrentTier27SummationDeliveredAttribute: true,
		getCurrentTier27SummationReceivedAttribute: true,
		getCurrentTier28SummationDeliveredAttribute: true,
		getCurrentTier28SummationReceivedAttribute: true,
		getCurrentTier29SummationDeliveredAttribute: true,
		getCurrentTier29SummationReceivedAttribute: true,
		getCurrentTier30SummationDeliveredAttribute: true,
		getCurrentTier30SummationReceivedAttribute: true,
		getCurrentTier31SummationDeliveredAttribute: true,
		getCurrentTier31SummationReceivedAttribute: true,
		getCurrentTier32SummationDeliveredAttribute: true,
		getCurrentTier32SummationReceivedAttribute: true,
		getCurrentTier33SummationDeliveredAttribute: true,
		getCurrentTier33SummationReceivedAttribute: true,
		getCurrentTier34SummationDeliveredAttribute: true,
		getCurrentTier34SummationReceivedAttribute: true,
		getCurrentTier35SummationDeliveredAttribute: true,
		getCurrentTier35SummationReceivedAttribute: true,
		getCurrentTier36SummationDeliveredAttribute: true,
		getCurrentTier36SummationReceivedAttribute: true,
		getCurrentTier37SummationDeliveredAttribute: true,
		getCurrentTier37SummationReceivedAttribute: true,
		getCurrentTier38SummationDeliveredAttribute: true,
		getCurrentTier38SummationReceivedAttribute: true,
		getCurrentTier39SummationDeliveredAttribute: true,
		getCurrentTier39SummationReceivedAttribute: true,
		getCurrentTier40SummationDeliveredAttribute: true,
		getCurrentTier40SummationReceivedAttribute: true,
		getCurrentTier41SummationDeliveredAttribute: true,
		getCurrentTier41SummationReceivedAttribute: true,
		getCurrentTier42SummationDeliveredAttribute: true,
		getCurrentTier42SummationReceivedAttribute: true,
		getCurrentTier43SummationDeliveredAttribute: true,
		getCurrentTier43SummationReceivedAttribute: true,
		getCurrentTier44SummationDeliveredAttribute: true,
		getCurrentTier44SummationReceivedAttribute: true,
		getCurrentTier45SummationDeliveredAttribute: true,
		getCurrentTier45SummationReceivedAttribute: true,
		getCurrentTier46SummationDeliveredAttribute: true,
		getCurrentTier46SummationReceivedAttribute: true,
		getCurrentTier47SummationDeliveredAttribute: true,
		getCurrentTier47SummationReceivedAttribute: true,
		getCurrentTier48SummationDeliveredAttribute: true,
		getCurrentTier48SummationReceivedAttribute: true,
		getExtendedStatusAttribute: true,
		getModuleSerialNumberAttribute: true,
		getOperatingTariffLabelAttribute: true,
		getPreviousDay2ConsumptionDeliveredAttribute: true,
		getPreviousDay2ConsumptionReceivedAttribute: true,
		getPreviousDay3ConsumptionDeliveredAttribute: true,
		getPreviousDay3ConsumptionReceivedAttribute: true,
		getPreviousDay4ConsumptionDeliveredAttribute: true,
		getPreviousDay4ConsumptionReceivedAttribute: true,
		getPreviousDay5ConsumptionDeliveredAttribute: true,
		getPreviousDay5ConsumptionReceivedAttribute: true,
		getPreviousDay6ConsumptionDeliveredAttribute: true,
		getPreviousDay6ConsumptionReceivedAttribute: true,
		getPreviousDay7ConsumptionDeliveredAttribute: true,
		getPreviousDay7ConsumptionReceivedAttribute: true,
		getPreviousDay8ConsumptionDeliveredAttribute: true,
		getPreviousDay8ConsumptionReceivedAttribute: true,
		getCurrentWeekConsumptionDeliveredAttribute: true,
		getCurrentWeekConsumptionReceivedAttribute: true,
		getPreviousWeekConsumptionDeliveredAttribute: true,
		getPreviousWeekConsumptionReceivedAttribute: true,
		getPreviousWeek2ConsumptionDeliveredAttribute: true,
		getPreviousWeek2ConsumptionReceivedAttribute: true,
		getPreviousWeek3ConsumptionDeliveredAttribute: true,
		getPreviousWeek3ConsumptionReceivedAttribute: true,
		getPreviousWeek4ConsumptionDeliveredAttribute: true,
		getPreviousWeek4ConsumptionReceivedAttribute: true,
		getPreviousWeek5ConsumptionDeliveredAttribute: true,
		getPreviousWeek5ConsumptionReceivedAttribute: true,
		getCurrentMonthConsumptionDeliveredAttribute: true,
		getCurrentMonthConsumptionReceivedAttribute: true,
		getPreviousMonthConsumptionDeliveredAttribute: true,
		getPreviousMonthConsumptionReceivedAttribute: true,
		getPreviousMonth2ConsumptionDeliveredAttribute: true,
		getPreviousMonth2ConsumptionReceivedAttribute: true,
		getPreviousMonth3ConsumptionDeliveredAttribute: true,
		getPreviousMonth3ConsumptionReceivedAttribute: true,
		getPreviousMonth4ConsumptionDeliveredAttribute: true,
		getPreviousMonth4ConsumptionReceivedAttribute: true,
		getPreviousMonth5ConsumptionDeliveredAttribute: true,
		getPreviousMonth5ConsumptionReceivedAttribute: true,
		getPreviousMonth6ConsumptionDeliveredAttribute: true,
		getPreviousMonth6ConsumptionReceivedAttribute: true,
		getPreviousMonth7ConsumptionDeliveredAttribute: true,
		getPreviousMonth7ConsumptionReceivedAttribute: true,
		getPreviousMonth8ConsumptionDeliveredAttribute: true,
		getPreviousMonth8ConsumptionReceivedAttribute: true,
		getPreviousMonth9ConsumptionDeliveredAttribute: true,
		getPreviousMonth9ConsumptionReceivedAttribute: true,
		getPreviousMonth10ConsumptionDeliveredAttribute: true,
		getPreviousMonth10ConsumptionReceivedAttribute: true,
		getPreviousMonth11ConsumptionDeliveredAttribute: true,
		getPreviousMonth11ConsumptionReceivedAttribute: true,
		getPreviousMonth12ConsumptionDeliveredAttribute: true,
		getPreviousMonth12ConsumptionReceivedAttribute: true,
		getPreviousMonth13ConsumptionDeliveredAttribute: true,
		getPreviousMonth13ConsumptionReceivedAttribute: true,
		getDemandLimitArmDurationInMinutesAttribute: true,
		getExtendedGenericAlarmMaskAttribute: true,
		getManufactureAlarmMaskAttribute: true,
		getCurrentNoTierBlock1SummationReceivedAttribute: true,
		getCurrentNoTierBlock2SummationReceivedAttribute: true,
		getCurrentNoTierBlock3SummationReceivedAttribute: true,
		getCurrentNoTierBlock4SummationReceivedAttribute: true,
		getCurrentNoTierBlock5SummationReceivedAttribute: true,
		getCurrentNoTierBlock6SummationReceivedAttribute: true,
		getCurrentNoTierBlock7SummationReceivedAttribute: true,
		getCurrentNoTierBlock8SummationReceivedAttribute: true,
		getCurrentNoTierBlock9SummationReceivedAttribute: true,
		getCurrentNoTierBlock10SummationReceivedAttribute: true,
		getCurrentNoTierBlock11SummationReceivedAttribute: true,
		getCurrentNoTierBlock12SummationReceivedAttribute: true,
		getCurrentNoTierBlock13SummationReceivedAttribute: true,
		getCurrentNoTierBlock14SummationReceivedAttribute: true,
		getCurrentNoTierBlock15SummationReceivedAttribute: true,
		getCurrentNoTierBlock16SummationReceivedAttribute: true,
		getCurrentTier1Block1SummationReceivedAttribute: true,
		getCurrentTier1Block2SummationReceivedAttribute: true,
		getCurrentTier1Block3SummationReceivedAttribute: true,
		getCurrentTier1Block4SummationReceivedAttribute: true,
		getCurrentTier1Block5SummationReceivedAttribute: true,
		getCurrentTier1Block6SummationReceivedAttribute: true,
		getCurrentTier1Block7SummationReceivedAttribute: true,
		getCurrentTier1Block8SummationReceivedAttribute: true,
		getCurrentTier1Block9SummationReceivedAttribute: true,
		getCurrentTier1Block10SummationReceivedAttribute: true,
		getCurrentTier1Block11SummationReceivedAttribute: true,
		getCurrentTier1Block12SummationReceivedAttribute: true,
		getCurrentTier1Block13SummationReceivedAttribute: true,
		getCurrentTier1Block14SummationReceivedAttribute: true,
		getCurrentTier1Block15SummationReceivedAttribute: true,
		getCurrentTier1Block16SummationReceivedAttribute: true,
		getCurrentTier2Block1SummationReceivedAttribute: true,
		getCurrentTier2Block2SummationReceivedAttribute: true,
		getCurrentTier2Block3SummationReceivedAttribute: true,
		getCurrentTier2Block4SummationReceivedAttribute: true,
		getCurrentTier2Block5SummationReceivedAttribute: true,
		getCurrentTier2Block6SummationReceivedAttribute: true,
		getCurrentTier2Block7SummationReceivedAttribute: true,
		getCurrentTier2Block8SummationReceivedAttribute: true,
		getCurrentTier2Block9SummationReceivedAttribute: true,
		getCurrentTier2Block10SummationReceivedAttribute: true,
		getCurrentTier2Block11SummationReceivedAttribute: true,
		getCurrentTier2Block12SummationReceivedAttribute: true,
		getCurrentTier2Block13SummationReceivedAttribute: true,
		getCurrentTier2Block14SummationReceivedAttribute: true,
		getCurrentTier2Block15SummationReceivedAttribute: true,
		getCurrentTier2Block16SummationReceivedAttribute: true,
		getCurrentTier3Block1SummationReceivedAttribute: true,
		getCurrentTier3Block2SummationReceivedAttribute: true,
		getCurrentTier3Block3SummationReceivedAttribute: true,
		getCurrentTier3Block4SummationReceivedAttribute: true,
		getCurrentTier3Block5SummationReceivedAttribute: true,
		getCurrentTier3Block6SummationReceivedAttribute: true,
		getCurrentTier3Block7SummationReceivedAttribute: true,
		getCurrentTier3Block8SummationReceivedAttribute: true,
		getCurrentTier3Block9SummationReceivedAttribute: true,
		getCurrentTier3Block10SummationReceivedAttribute: true,
		getCurrentTier3Block11SummationReceivedAttribute: true,
		getCurrentTier3Block12SummationReceivedAttribute: true,
		getCurrentTier3Block13SummationReceivedAttribute: true,
		getCurrentTier3Block14SummationReceivedAttribute: true,
		getCurrentTier3Block15SummationReceivedAttribute: true,
		getCurrentTier3Block16SummationReceivedAttribute: true,
		getCurrentTier4Block1SummationReceivedAttribute: true,
		getCurrentTier4Block2SummationReceivedAttribute: true,
		getCurrentTier4Block3SummationReceivedAttribute: true,
		getCurrentTier4Block4SummationReceivedAttribute: true,
		getCurrentTier4Block5SummationReceivedAttribute: true,
		getCurrentTier4Block6SummationReceivedAttribute: true,
		getCurrentTier4Block7SummationReceivedAttribute: true,
		getCurrentTier4Block8SummationReceivedAttribute: true,
		getCurrentTier4Block9SummationReceivedAttribute: true,
		getCurrentTier4Block10SummationReceivedAttribute: true,
		getCurrentTier4Block11SummationReceivedAttribute: true,
		getCurrentTier4Block12SummationReceivedAttribute: true,
		getCurrentTier4Block13SummationReceivedAttribute: true,
		getCurrentTier4Block14SummationReceivedAttribute: true,
		getCurrentTier4Block15SummationReceivedAttribute: true,
		getCurrentTier4Block16SummationReceivedAttribute: true,
		getCurrentTier5Block1SummationReceivedAttribute: true,
		getCurrentTier5Block2SummationReceivedAttribute: true,
		getCurrentTier5Block3SummationReceivedAttribute: true,
		getCurrentTier5Block4SummationReceivedAttribute: true,
		getCurrentTier5Block5SummationReceivedAttribute: true,
		getCurrentTier5Block6SummationReceivedAttribute: true,
		getCurrentTier5Block7SummationReceivedAttribute: true,
		getCurrentTier5Block8SummationReceivedAttribute: true,
		getCurrentTier5Block9SummationReceivedAttribute: true,
		getCurrentTier5Block10SummationReceivedAttribute: true,
		getCurrentTier5Block11SummationReceivedAttribute: true,
		getCurrentTier5Block12SummationReceivedAttribute: true,
		getCurrentTier5Block13SummationReceivedAttribute: true,
		getCurrentTier5Block14SummationReceivedAttribute: true,
		getCurrentTier5Block15SummationReceivedAttribute: true,
		getCurrentTier5Block16SummationReceivedAttribute: true,
		getCurrentTier6Block1SummationReceivedAttribute: true,
		getCurrentTier6Block2SummationReceivedAttribute: true,
		getCurrentTier6Block3SummationReceivedAttribute: true,
		getCurrentTier6Block4SummationReceivedAttribute: true,
		getCurrentTier6Block5SummationReceivedAttribute: true,
		getCurrentTier6Block6SummationReceivedAttribute: true,
		getCurrentTier6Block7SummationReceivedAttribute: true,
		getCurrentTier6Block8SummationReceivedAttribute: true,
		getCurrentTier6Block9SummationReceivedAttribute: true,
		getCurrentTier6Block10SummationReceivedAttribute: true,
		getCurrentTier6Block11SummationReceivedAttribute: true,
		getCurrentTier6Block12SummationReceivedAttribute: true,
		getCurrentTier6Block13SummationReceivedAttribute: true,
		getCurrentTier6Block14SummationReceivedAttribute: true,
		getCurrentTier6Block15SummationReceivedAttribute: true,
		getCurrentTier6Block16SummationReceivedAttribute: true,
		getCurrentTier7Block1SummationReceivedAttribute: true,
		getCurrentTier7Block2SummationReceivedAttribute: true,
		getCurrentTier7Block3SummationReceivedAttribute: true,
		getCurrentTier7Block4SummationReceivedAttribute: true,
		getCurrentTier7Block5SummationReceivedAttribute: true,
		getCurrentTier7Block6SummationReceivedAttribute: true,
		getCurrentTier7Block7SummationReceivedAttribute: true,
		getCurrentTier7Block8SummationReceivedAttribute: true,
		getCurrentTier7Block9SummationReceivedAttribute: true,
		getCurrentTier7Block10SummationReceivedAttribute: true,
		getCurrentTier7Block11SummationReceivedAttribute: true,
		getCurrentTier7Block12SummationReceivedAttribute: true,
		getCurrentTier7Block13SummationReceivedAttribute: true,
		getCurrentTier7Block14SummationReceivedAttribute: true,
		getCurrentTier7Block15SummationReceivedAttribute: true,
		getCurrentTier7Block16SummationReceivedAttribute: true,
		getCurrentTier8Block1SummationReceivedAttribute: true,
		getCurrentTier8Block2SummationReceivedAttribute: true,
		getCurrentTier8Block3SummationReceivedAttribute: true,
		getCurrentTier8Block4SummationReceivedAttribute: true,
		getCurrentTier8Block5SummationReceivedAttribute: true,
		getCurrentTier8Block6SummationReceivedAttribute: true,
		getCurrentTier8Block7SummationReceivedAttribute: true,
		getCurrentTier8Block8SummationReceivedAttribute: true,
		getCurrentTier8Block9SummationReceivedAttribute: true,
		getCurrentTier8Block10SummationReceivedAttribute: true,
		getCurrentTier8Block11SummationReceivedAttribute: true,
		getCurrentTier8Block12SummationReceivedAttribute: true,
		getCurrentTier8Block13SummationReceivedAttribute: true,
		getCurrentTier8Block14SummationReceivedAttribute: true,
		getCurrentTier8Block15SummationReceivedAttribute: true,
		getCurrentTier8Block16SummationReceivedAttribute: true,
		getCurrentTier9Block1SummationReceivedAttribute: true,
		getCurrentTier9Block2SummationReceivedAttribute: true,
		getCurrentTier9Block3SummationReceivedAttribute: true,
		getCurrentTier9Block4SummationReceivedAttribute: true,
		getCurrentTier9Block5SummationReceivedAttribute: true,
		getCurrentTier9Block6SummationReceivedAttribute: true,
		getCurrentTier9Block7SummationReceivedAttribute: true,
		getCurrentTier9Block8SummationReceivedAttribute: true,
		getCurrentTier9Block9SummationReceivedAttribute: true,
		getCurrentTier9Block10SummationReceivedAttribute: true,
		getCurrentTier9Block11SummationReceivedAttribute: true,
		getCurrentTier9Block12SummationReceivedAttribute: true,
		getCurrentTier9Block13SummationReceivedAttribute: true,
		getCurrentTier9Block14SummationReceivedAttribute: true,
		getCurrentTier9Block15SummationReceivedAttribute: true,
		getCurrentTier9Block16SummationReceivedAttribute: true,
		getCurrentTier10Block1SummationReceivedAttribute: true,
		getCurrentTier10Block2SummationReceivedAttribute: true,
		getCurrentTier10Block3SummationReceivedAttribute: true,
		getCurrentTier10Block4SummationReceivedAttribute: true,
		getCurrentTier10Block5SummationReceivedAttribute: true,
		getCurrentTier10Block6SummationReceivedAttribute: true,
		getCurrentTier10Block7SummationReceivedAttribute: true,
		getCurrentTier10Block8SummationReceivedAttribute: true,
		getCurrentTier10Block9SummationReceivedAttribute: true,
		getCurrentTier10Block10SummationReceivedAttribute: true,
		getCurrentTier10Block11SummationReceivedAttribute: true,
		getCurrentTier10Block12SummationReceivedAttribute: true,
		getCurrentTier10Block13SummationReceivedAttribute: true,
		getCurrentTier10Block14SummationReceivedAttribute: true,
		getCurrentTier10Block15SummationReceivedAttribute: true,
		getCurrentTier10Block16SummationReceivedAttribute: true,
		getCurrentTier11Block1SummationReceivedAttribute: true,
		getCurrentTier11Block2SummationReceivedAttribute: true,
		getCurrentTier11Block3SummationReceivedAttribute: true,
		getCurrentTier11Block4SummationReceivedAttribute: true,
		getCurrentTier11Block5SummationReceivedAttribute: true,
		getCurrentTier11Block6SummationReceivedAttribute: true,
		getCurrentTier11Block7SummationReceivedAttribute: true,
		getCurrentTier11Block8SummationReceivedAttribute: true,
		getCurrentTier11Block9SummationReceivedAttribute: true,
		getCurrentTier11Block10SummationReceivedAttribute: true,
		getCurrentTier11Block11SummationReceivedAttribute: true,
		getCurrentTier11Block12SummationReceivedAttribute: true,
		getCurrentTier11Block13SummationReceivedAttribute: true,
		getCurrentTier11Block14SummationReceivedAttribute: true,
		getCurrentTier11Block15SummationReceivedAttribute: true,
		getCurrentTier11Block16SummationReceivedAttribute: true,
		getCurrentTier12Block1SummationReceivedAttribute: true,
		getCurrentTier12Block2SummationReceivedAttribute: true,
		getCurrentTier12Block3SummationReceivedAttribute: true,
		getCurrentTier12Block4SummationReceivedAttribute: true,
		getCurrentTier12Block5SummationReceivedAttribute: true,
		getCurrentTier12Block6SummationReceivedAttribute: true,
		getCurrentTier12Block7SummationReceivedAttribute: true,
		getCurrentTier12Block8SummationReceivedAttribute: true,
		getCurrentTier12Block9SummationReceivedAttribute: true,
		getCurrentTier12Block10SummationReceivedAttribute: true,
		getCurrentTier12Block11SummationReceivedAttribute: true,
		getCurrentTier12Block12SummationReceivedAttribute: true,
		getCurrentTier12Block13SummationReceivedAttribute: true,
		getCurrentTier12Block14SummationReceivedAttribute: true,
		getCurrentTier12Block15SummationReceivedAttribute: true,
		getCurrentTier12Block16SummationReceivedAttribute: true,
		getCurrentTier13Block1SummationReceivedAttribute: true,
		getCurrentTier13Block2SummationReceivedAttribute: true,
		getCurrentTier13Block3SummationReceivedAttribute: true,
		getCurrentTier13Block4SummationReceivedAttribute: true,
		getCurrentTier13Block5SummationReceivedAttribute: true,
		getCurrentTier13Block6SummationReceivedAttribute: true,
		getCurrentTier13Block7SummationReceivedAttribute: true,
		getCurrentTier13Block8SummationReceivedAttribute: true,
		getCurrentTier13Block9SummationReceivedAttribute: true,
		getCurrentTier13Block10SummationReceivedAttribute: true,
		getCurrentTier13Block11SummationReceivedAttribute: true,
		getCurrentTier13Block12SummationReceivedAttribute: true,
		getCurrentTier13Block13SummationReceivedAttribute: true,
		getCurrentTier13Block14SummationReceivedAttribute: true,
		getCurrentTier13Block15SummationReceivedAttribute: true,
		getCurrentTier13Block16SummationReceivedAttribute: true,
		getCurrentTier14Block1SummationReceivedAttribute: true,
		getCurrentTier14Block2SummationReceivedAttribute: true,
		getCurrentTier14Block3SummationReceivedAttribute: true,
		getCurrentTier14Block4SummationReceivedAttribute: true,
		getCurrentTier14Block5SummationReceivedAttribute: true,
		getCurrentTier14Block6SummationReceivedAttribute: true,
		getCurrentTier14Block7SummationReceivedAttribute: true,
		getCurrentTier14Block8SummationReceivedAttribute: true,
		getCurrentTier14Block9SummationReceivedAttribute: true,
		getCurrentTier14Block10SummationReceivedAttribute: true,
		getCurrentTier14Block11SummationReceivedAttribute: true,
		getCurrentTier14Block12SummationReceivedAttribute: true,
		getCurrentTier14Block13SummationReceivedAttribute: true,
		getCurrentTier14Block14SummationReceivedAttribute: true,
		getCurrentTier14Block15SummationReceivedAttribute: true,
		getCurrentTier14Block16SummationReceivedAttribute: true,
		getCurrentTier15Block1SummationReceivedAttribute: true,
		getCurrentTier15Block2SummationReceivedAttribute: true,
		getCurrentTier15Block3SummationReceivedAttribute: true,
		getCurrentTier15Block4SummationReceivedAttribute: true,
		getCurrentTier15Block5SummationReceivedAttribute: true,
		getCurrentTier15Block6SummationReceivedAttribute: true,
		getCurrentTier15Block7SummationReceivedAttribute: true,
		getCurrentTier15Block8SummationReceivedAttribute: true,
		getCurrentTier15Block9SummationReceivedAttribute: true,
		getCurrentTier15Block10SummationReceivedAttribute: true,
		getCurrentTier15Block11SummationReceivedAttribute: true,
		getCurrentTier15Block12SummationReceivedAttribute: true,
		getCurrentTier15Block13SummationReceivedAttribute: true,
		getCurrentTier15Block14SummationReceivedAttribute: true,
		getCurrentTier15Block15SummationReceivedAttribute: true,
		getCurrentTier15Block16SummationReceivedAttribute: true,
		getBillToDateDeliveredAttribute: true,
		getBillToDateTimeStampDeliveredAttribute: true,
		getProjectedBillDeliveredAttribute: true,
		getProjectedBillTimeStampDeliveredAttribute: true,
		getBillDeliveredTrailingDigitAttribute: true,
		getBillToDateReceivedAttribute: true,
		getBillToDateTimeStampReceivedAttribute: true,
		getProjectedBillReceivedAttribute: true,
		getProjectedBillTimeStampReceivedAttribute: true,
		getBillReceivedTrailingDigitAttribute: true,
		getAttributeReportingStatusAttribute: true,
		getFunctionalNotificationFlagsAttribute: true,
		getPriceNotificationFlagsAttribute: true,
		getCalendarNotificationFlagsAttribute: true,
		getPrePaymentNotificationFlagsAttribute: true,
		getDeviceManagementFlagsAttribute: true,
		getReportingProfileAttribute: true,
		getMirrorReportingAttribute: true,
		getNotificationSchemeAttribute: true,
		getTier1PriceLabelAttribute: true,
		getTier2PriceLabelAttribute: true,
		getTier3PriceLabelAttribute: true,
		getTier4PriceLabelAttribute: true,
		getTier5PriceLabelAttribute: true,
		getTier6PriceLabelAttribute: true,
		getTier7PriceLabelAttribute: true,
		getTier8PriceLabelAttribute: true,
		getTier9PriceLabelAttribute: true,
		getTier10PriceLabelAttribute: true,
		getTier11PriceLabelAttribute: true,
		getTier12PriceLabelAttribute: true,
		getTier13PriceLabelAttribute: true,
		getTier14PriceLabelAttribute: true,
		getTier15PriceLabelAttribute: true,
		getBlock1ThresholdAttribute: true,
		getBlock2ThresholdAttribute: true,
		getBlock3ThresholdAttribute: true,
		getBlock4ThresholdAttribute: true,
		getBlock5ThresholdAttribute: true,
		getBlock6ThresholdAttribute: true,
		getBlock7ThresholdAttribute: true,
		getBlock8ThresholdAttribute: true,
		getBlock9ThresholdAttribute: true,
		getBlock10ThresholdAttribute: true,
		getBlock11ThresholdAttribute: true,
		getBlock12ThresholdAttribute: true,
		getBlock13ThresholdAttribute: true,
		getBlock14ThresholdAttribute: true,
		getBlock15ThresholdAttribute: true,
		getStartOfBlockPeriodAttribute: true,
		getBlockPeriodDurationMinutesAttribute: true,
		getThresholdMultiplierAttribute: true,
		getThresholdDivisorAttribute: true,
		getCommodityTypeAttribute: true,
		getStandingChargeAttribute: true,
		getConversionFactorAttribute: true,
		getConversionFactorTrailingDigitAttribute: true,
		getCalorificValueAttribute: true,
		getCalorificValueUnitAttribute: true,
		getCalorificValueTrailingDigitAttribute: true,
		getNoTierBlock1PriceAttribute: true,
		getNoTierBlock2PriceAttribute: true,
		getNoTierBlock3PriceAttribute: true,
		getNoTierBlock4PriceAttribute: true,
		getNoTierBlock5PriceAttribute: true,
		getNoTierBlock6PriceAttribute: true,
		getNoTierBlock7PriceAttribute: true,
		getNoTierBlock8PriceAttribute: true,
		getNoTierBlock9PriceAttribute: true,
		getNoTierBlock10PriceAttribute: true,
		getNoTierBlock11PriceAttribute: true,
		getNoTierBlock12PriceAttribute: true,
		getNoTierBlock13PriceAttribute: true,
		getNoTierBlock14PriceAttribute: true,
		getNoTierBlock15PriceAttribute: true,
		getNoTierBlock16PriceAttribute: true,
		getTier1Block1PriceAttribute: true,
		getTier1Block2PriceAttribute: true,
		getTier1Block3PriceAttribute: true,
		getTier1Block4PriceAttribute: true,
		getTier1Block5PriceAttribute: true,
		getTier1Block6PriceAttribute: true,
		getTier1Block7PriceAttribute: true,
		getTier1Block8PriceAttribute: true,
		getTier1Block9PriceAttribute: true,
		getTier1Block10PriceAttribute: true,
		getTier1Block11PriceAttribute: true,
		getTier1Block12PriceAttribute: true,
		getTier1Block13PriceAttribute: true,
		getTier1Block14PriceAttribute: true,
		getTier1Block15PriceAttribute: true,
		getTier1Block16PriceAttribute: true,
		getTier2Block1PriceAttribute: true,
		getTier2Block2PriceAttribute: true,
		getTier2Block3PriceAttribute: true,
		getTier2Block4PriceAttribute: true,
		getTier2Block5PriceAttribute: true,
		getTier2Block6PriceAttribute: true,
		getTier2Block7PriceAttribute: true,
		getTier2Block8PriceAttribute: true,
		getTier2Block9PriceAttribute: true,
		getTier2Block10PriceAttribute: true,
		getTier2Block11PriceAttribute: true,
		getTier2Block12PriceAttribute: true,
		getTier2Block13PriceAttribute: true,
		getTier2Block14PriceAttribute: true,
		getTier2Block15PriceAttribute: true,
		getTier2Block16PriceAttribute: true,
		getTier3Block1PriceAttribute: true,
		getTier3Block2PriceAttribute: true,
		getTier3Block3PriceAttribute: true,
		getTier3Block4PriceAttribute: true,
		getTier3Block5PriceAttribute: true,
		getTier3Block6PriceAttribute: true,
		getTier3Block7PriceAttribute: true,
		getTier3Block8PriceAttribute: true,
		getTier3Block9PriceAttribute: true,
		getTier3Block10PriceAttribute: true,
		getTier3Block11PriceAttribute: true,
		getTier3Block12PriceAttribute: true,
		getTier3Block13PriceAttribute: true,
		getTier3Block14PriceAttribute: true,
		getTier3Block15PriceAttribute: true,
		getTier3Block16PriceAttribute: true,
		getTier4Block1PriceAttribute: true,
		getTier4Block2PriceAttribute: true,
		getTier4Block3PriceAttribute: true,
		getTier4Block4PriceAttribute: true,
		getTier4Block5PriceAttribute: true,
		getTier4Block6PriceAttribute: true,
		getTier4Block7PriceAttribute: true,
		getTier4Block8PriceAttribute: true,
		getTier4Block9PriceAttribute: true,
		getTier4Block10PriceAttribute: true,
		getTier4Block11PriceAttribute: true,
		getTier4Block12PriceAttribute: true,
		getTier4Block13PriceAttribute: true,
		getTier4Block14PriceAttribute: true,
		getTier4Block15PriceAttribute: true,
		getTier4Block16PriceAttribute: true,
		getTier5Block1PriceAttribute: true,
		getTier5Block2PriceAttribute: true,
		getTier5Block3PriceAttribute: true,
		getTier5Block4PriceAttribute: true,
		getTier5Block5PriceAttribute: true,
		getTier5Block6PriceAttribute: true,
		getTier5Block7PriceAttribute: true,
		getTier5Block8PriceAttribute: true,
		getTier5Block9PriceAttribute: true,
		getTier5Block10PriceAttribute: true,
		getTier5Block11PriceAttribute: true,
		getTier5Block12PriceAttribute: true,
		getTier5Block13PriceAttribute: true,
		getTier5Block14PriceAttribute: true,
		getTier5Block15PriceAttribute: true,
		getTier5Block16PriceAttribute: true,
		getTier6Block1PriceAttribute: true,
		getTier6Block2PriceAttribute: true,
		getTier6Block3PriceAttribute: true,
		getTier6Block4PriceAttribute: true,
		getTier6Block5PriceAttribute: true,
		getTier6Block6PriceAttribute: true,
		getTier6Block7PriceAttribute: true,
		getTier6Block8PriceAttribute: true,
		getTier6Block9PriceAttribute: true,
		getTier6Block10PriceAttribute: true,
		getTier6Block11PriceAttribute: true,
		getTier6Block12PriceAttribute: true,
		getTier6Block13PriceAttribute: true,
		getTier6Block14PriceAttribute: true,
		getTier6Block15PriceAttribute: true,
		getTier6Block16PriceAttribute: true,
		getTier7Block1PriceAttribute: true,
		getTier7Block2PriceAttribute: true,
		getTier7Block3PriceAttribute: true,
		getTier7Block4PriceAttribute: true,
		getTier7Block5PriceAttribute: true,
		getTier7Block6PriceAttribute: true,
		getTier7Block7PriceAttribute: true,
		getTier7Block8PriceAttribute: true,
		getTier7Block9PriceAttribute: true,
		getTier7Block10PriceAttribute: true,
		getTier7Block11PriceAttribute: true,
		getTier7Block12PriceAttribute: true,
		getTier7Block13PriceAttribute: true,
		getTier7Block14PriceAttribute: true,
		getTier7Block15PriceAttribute: true,
		getTier7Block16PriceAttribute: true,
		getTier8Block1PriceAttribute: true,
		getTier8Block2PriceAttribute: true,
		getTier8Block3PriceAttribute: true,
		getTier8Block4PriceAttribute: true,
		getTier8Block5PriceAttribute: true,
		getTier8Block6PriceAttribute: true,
		getTier8Block7PriceAttribute: true,
		getTier8Block8PriceAttribute: true,
		getTier8Block9PriceAttribute: true,
		getTier8Block10PriceAttribute: true,
		getTier8Block11PriceAttribute: true,
		getTier8Block12PriceAttribute: true,
		getTier8Block13PriceAttribute: true,
		getTier8Block14PriceAttribute: true,
		getTier8Block15PriceAttribute: true,
		getTier8Block16PriceAttribute: true,
		getTier9Block1PriceAttribute: true,
		getTier9Block2PriceAttribute: true,
		getTier9Block3PriceAttribute: true,
		getTier9Block4PriceAttribute: true,
		getTier9Block5PriceAttribute: true,
		getTier9Block6PriceAttribute: true,
		getTier9Block7PriceAttribute: true,
		getTier9Block8PriceAttribute: true,
		getTier9Block9PriceAttribute: true,
		getTier9Block10PriceAttribute: true,
		getTier9Block11PriceAttribute: true,
		getTier9Block12PriceAttribute: true,
		getTier9Block13PriceAttribute: true,
		getTier9Block14PriceAttribute: true,
		getTier9Block15PriceAttribute: true,
		getTier9Block16PriceAttribute: true,
		getTier10Block1PriceAttribute: true,
		getTier10Block2PriceAttribute: true,
		getTier10Block3PriceAttribute: true,
		getTier10Block4PriceAttribute: true,
		getTier10Block5PriceAttribute: true,
		getTier10Block6PriceAttribute: true,
		getTier10Block7PriceAttribute: true,
		getTier10Block8PriceAttribute: true,
		getTier10Block9PriceAttribute: true,
		getTier10Block10PriceAttribute: true,
		getTier10Block11PriceAttribute: true,
		getTier10Block12PriceAttribute: true,
		getTier10Block13PriceAttribute: true,
		getTier10Block14PriceAttribute: true,
		getTier10Block15PriceAttribute: true,
		getTier10Block16PriceAttribute: true,
		getTier11Block1PriceAttribute: true,
		getTier11Block2PriceAttribute: true,
		getTier11Block3PriceAttribute: true,
		getTier11Block4PriceAttribute: true,
		getTier11Block5PriceAttribute: true,
		getTier11Block6PriceAttribute: true,
		getTier11Block7PriceAttribute: true,
		getTier11Block8PriceAttribute: true,
		getTier11Block9PriceAttribute: true,
		getTier11Block10PriceAttribute: true,
		getTier11Block11PriceAttribute: true,
		getTier11Block12PriceAttribute: true,
		getTier11Block13PriceAttribute: true,
		getTier11Block14PriceAttribute: true,
		getTier11Block15PriceAttribute: true,
		getTier11Block16PriceAttribute: true,
		getTier12Block1PriceAttribute: true,
		getTier12Block2PriceAttribute: true,
		getTier12Block3PriceAttribute: true,
		getTier12Block4PriceAttribute: true,
		getTier12Block5PriceAttribute: true,
		getTier12Block6PriceAttribute: true,
		getTier12Block7PriceAttribute: true,
		getTier12Block8PriceAttribute: true,
		getTier12Block9PriceAttribute: true,
		getTier12Block10PriceAttribute: true,
		getTier12Block11PriceAttribute: true,
		getTier12Block12PriceAttribute: true,
		getTier12Block13PriceAttribute: true,
		getTier12Block14PriceAttribute: true,
		getTier12Block15PriceAttribute: true,
		getTier12Block16PriceAttribute: true,
		getTier13Block1PriceAttribute: true,
		getTier13Block2PriceAttribute: true,
		getTier13Block3PriceAttribute: true,
		getTier13Block4PriceAttribute: true,
		getTier13Block5PriceAttribute: true,
		getTier13Block6PriceAttribute: true,
		getTier13Block7PriceAttribute: true,
		getTier13Block8PriceAttribute: true,
		getTier13Block9PriceAttribute: true,
		getTier13Block10PriceAttribute: true,
		getTier13Block11PriceAttribute: true,
		getTier13Block12PriceAttribute: true,
		getTier13Block13PriceAttribute: true,
		getTier13Block14PriceAttribute: true,
		getTier13Block15PriceAttribute: true,
		getTier13Block16PriceAttribute: true,
		getTier14Block1PriceAttribute: true,
		getTier14Block2PriceAttribute: true,
		getTier14Block3PriceAttribute: true,
		getTier14Block4PriceAttribute: true,
		getTier14Block5PriceAttribute: true,
		getTier14Block6PriceAttribute: true,
		getTier14Block7PriceAttribute: true,
		getTier14Block8PriceAttribute: true,
		getTier14Block9PriceAttribute: true,
		getTier14Block10PriceAttribute: true,
		getTier14Block11PriceAttribute: true,
		getTier14Block12PriceAttribute: true,
		getTier14Block13PriceAttribute: true,
		getTier14Block14PriceAttribute: true,
		getTier14Block15PriceAttribute: true,
		getTier14Block16PriceAttribute: true,
		getTier15Block1PriceAttribute: true,
		getTier15Block2PriceAttribute: true,
		getTier15Block3PriceAttribute: true,
		getTier15Block4PriceAttribute: true,
		getTier15Block5PriceAttribute: true,
		getTier15Block6PriceAttribute: true,
		getTier15Block7PriceAttribute: true,
		getTier15Block8PriceAttribute: true,
		getTier15Block9PriceAttribute: true,
		getTier15Block10PriceAttribute: true,
		getTier15Block11PriceAttribute: true,
		getTier15Block12PriceAttribute: true,
		getTier15Block13PriceAttribute: true,
		getTier15Block14PriceAttribute: true,
		getTier15Block15PriceAttribute: true,
		getTier15Block16PriceAttribute: true,
		getPriceIncreaseRandomizeMinutesAttribute: true,
		getPriceDecreaseRandomizeMinutesAttribute: true,
		getCommodityTypeAttribute: true,
		getTier16PriceLabelAttribute: true,
		getTier17PriceLabelAttribute: true,
		getTier18PriceLabelAttribute: true,
		getTier19PriceLabelAttribute: true,
		getTier20PriceLabelAttribute: true,
		getTier21PriceLabelAttribute: true,
		getTier22PriceLabelAttribute: true,
		getTier23PriceLabelAttribute: true,
		getTier24PriceLabelAttribute: true,
		getTier25PriceLabelAttribute: true,
		getTier26PriceLabelAttribute: true,
		getTier27PriceLabelAttribute: true,
		getTier28PriceLabelAttribute: true,
		getTier29PriceLabelAttribute: true,
		getTier30PriceLabelAttribute: true,
		getTier31PriceLabelAttribute: true,
		getTier32PriceLabelAttribute: true,
		getTier33PriceLabelAttribute: true,
		getTier34PriceLabelAttribute: true,
		getTier35PriceLabelAttribute: true,
		getTier36PriceLabelAttribute: true,
		getTier37PriceLabelAttribute: true,
		getTier38PriceLabelAttribute: true,
		getTier39PriceLabelAttribute: true,
		getTier40PriceLabelAttribute: true,
		getTier41PriceLabelAttribute: true,
		getTier42PriceLabelAttribute: true,
		getTier43PriceLabelAttribute: true,
		getTier44PriceLabelAttribute: true,
		getTier45PriceLabelAttribute: true,
		getTier46PriceLabelAttribute: true,
		getTier47PriceLabelAttribute: true,
		getTier48PriceLabelAttribute: true,
		getPriceTier16Attribute: true,
		getPriceTier17Attribute: true,
		getPriceTier18Attribute: true,
		getPriceTier19Attribute: true,
		getPriceTier20Attribute: true,
		getPriceTier21Attribute: true,
		getPriceTier22Attribute: true,
		getPriceTier23Attribute: true,
		getPriceTier24Attribute: true,
		getPriceTier25Attribute: true,
		getPriceTier26Attribute: true,
		getPriceTier27Attribute: true,
		getPriceTier28Attribute: true,
		getPriceTier29Attribute: true,
		getPriceTier30Attribute: true,
		getPriceTier31Attribute: true,
		getPriceTier32Attribute: true,
		getPriceTier33Attribute: true,
		getPriceTier34Attribute: true,
		getPriceTier35Attribute: true,
		getPriceTier36Attribute: true,
		getPriceTier37Attribute: true,
		getPriceTier38Attribute: true,
		getPriceTier39Attribute: true,
		getPriceTier40Attribute: true,
		getPriceTier41Attribute: true,
		getPriceTier42Attribute: true,
		getPriceTier43Attribute: true,
		getPriceTier44Attribute: true,
		getPriceTier45Attribute: true,
		getPriceTier46Attribute: true,
		getPriceTier47Attribute: true,
		getPriceTier48Attribute: true,
		getTariffLabelAttribute: true,
		getNumberOfPriceTiersInUseAttribute: true,
		getNumberOfBlockThresholdsInUseAttribute: true,
		getTierBlockModeAttribute: true,
		getBlockThresholdMaskAttribute: true,
		getUnitOfMeasureAttribute: true,
		getCurrencyAttribute: true,
		getPriceTrailingDigitAttribute: true,
		getStandingChargeAttribute: true,
		getConversionFactorAttribute: true,
		getConversionFactorTrailingDigitAttribute: true,
		getCalorificValueAttribute: true,
		getCalorificValueUnitAttribute: true,
		getCalorificValueTrailingDigitAttribute: true,
		getCo2Attribute: true,
		getCo2UnitAttribute: true,
		getCo2TrailingDigitAttribute: true,
		getCurrentBillingPeriodStartAttribute: true,
		getCurrentBillingPeriodDurationAttribute: true,
		getLastBillingPeriodStartAttribute: true,
		getLastBillingPeriodDurationAttribute: true,
		getLastBillingPeriodConsolidatedBillAttribute: true,
		getCreditPaymentDueDateAttribute: true,
		getCreditPaymentStatusAttribute: true,
		getCreditPaymentOverDueAmountAttribute: true,
		getPaymentDiscountAttribute: true,
		getPaymentDiscountPeriodAttribute: true,
		getCreditPayment1Attribute: true,
		getCreditPaymentDate1Attribute: true,
		getCreditPaymentRef1Attribute: true,
		getCreditPayment2Attribute: true,
		getCreditPaymentDate2Attribute: true,
		getCreditPaymentRef2Attribute: true,
		getCreditPayment3Attribute: true,
		getCreditPaymentDate3Attribute: true,
		getCreditPaymentRef3Attribute: true,
		getCreditPayment4Attribute: true,
		getCreditPaymentDate4Attribute: true,
		getCreditPaymentRef4Attribute: true,
		getCreditPayment5Attribute: true,
		getCreditPaymentDate5Attribute: true,
		getCreditPaymentRef5Attribute: true,
		getDomesticPercentageAttribute: true,
		getDomesticFuelTaxRateAttribute: true,
		getDomesticFuelTaxRateTrailingDigitAttribute: true,
		getExTier1PriceLabelAttribute: true,
		getExTier2PriceLabelAttribute: true,
		getExTier3PriceLabelAttribute: true,
		getExTier4PriceLabelAttribute: true,
		getExTier5PriceLabelAttribute: true,
		getExTier6PriceLabelAttribute: true,
		getExTier7PriceLabelAttribute: true,
		getExTier8PriceLabelAttribute: true,
		getExTier9PriceLabelAttribute: true,
		getExTier10PriceLabelAttribute: true,
		getExTier11PriceLabelAttribute: true,
		getExTier12PriceLabelAttribute: true,
		getExTier13PriceLabelAttribute: true,
		getExTier14PriceLabelAttribute: true,
		getExTier15PriceLabelAttribute: true,
		getExTier16PriceLabelAttribute: true,
		getExTier17PriceLabelAttribute: true,
		getExTier18PriceLabelAttribute: true,
		getExTier19PriceLabelAttribute: true,
		getExTier20PriceLabelAttribute: true,
		getExTier21PriceLabelAttribute: true,
		getExTier22PriceLabelAttribute: true,
		getExTier23PriceLabelAttribute: true,
		getExTier24PriceLabelAttribute: true,
		getExTier25PriceLabelAttribute: true,
		getExTier26PriceLabelAttribute: true,
		getExTier27PriceLabelAttribute: true,
		getExTier28PriceLabelAttribute: true,
		getExTier29PriceLabelAttribute: true,
		getExTier30PriceLabelAttribute: true,
		getExTier31PriceLabelAttribute: true,
		getExTier32PriceLabelAttribute: true,
		getExTier33PriceLabelAttribute: true,
		getExTier34PriceLabelAttribute: true,
		getExTier35PriceLabelAttribute: true,
		getExTier36PriceLabelAttribute: true,
		getExTier37PriceLabelAttribute: true,
		getExTier38PriceLabelAttribute: true,
		getExTier39PriceLabelAttribute: true,
		getExTier40PriceLabelAttribute: true,
		getExTier41PriceLabelAttribute: true,
		getExTier42PriceLabelAttribute: true,
		getExTier43PriceLabelAttribute: true,
		getExTier44PriceLabelAttribute: true,
		getExTier45PriceLabelAttribute: true,
		getExTier46PriceLabelAttribute: true,
		getExTier47PriceLabelAttribute: true,
		getExTier48PriceLabelAttribute: true,
		getExBlock1ThresholdAttribute: true,
		getExBlock2ThresholdAttribute: true,
		getExBlock3ThresholdAttribute: true,
		getExBlock4ThresholdAttribute: true,
		getExBlock5ThresholdAttribute: true,
		getExBlock6ThresholdAttribute: true,
		getExBlock7ThresholdAttribute: true,
		getExBlock8ThresholdAttribute: true,
		getExBlock9ThresholdAttribute: true,
		getExBlock10ThresholdAttribute: true,
		getExBlock11ThresholdAttribute: true,
		getExBlock12ThresholdAttribute: true,
		getExBlock13ThresholdAttribute: true,
		getExBlock14ThresholdAttribute: true,
		getExBlock15ThresholdAttribute: true,
		getExStartOfBlockPeriodAttribute: true,
		getExBlockPeriodDurationAttribute: true,
		getExThresholdMultiplierAttribute: true,
		getExThresholdDivisorAttribute: true,
		getExNoTierBlock1PriceAttribute: true,
		getExNoTierBlock2PriceAttribute: true,
		getExNoTierBlock3PriceAttribute: true,
		getExNoTierBlock4PriceAttribute: true,
		getExNoTierBlock5PriceAttribute: true,
		getExNoTierBlock6PriceAttribute: true,
		getExNoTierBlock7PriceAttribute: true,
		getExNoTierBlock8PriceAttribute: true,
		getExNoTierBlock9PriceAttribute: true,
		getExNoTierBlock10PriceAttribute: true,
		getExNoTierBlock11PriceAttribute: true,
		getExNoTierBlock12PriceAttribute: true,
		getExNoTierBlock13PriceAttribute: true,
		getExNoTierBlock14PriceAttribute: true,
		getExNoTierBlock15PriceAttribute: true,
		getExNoTierBlock16PriceAttribute: true,
		getExTier1Block1PriceAttribute: true,
		getExTier1Block2PriceAttribute: true,
		getExTier1Block3PriceAttribute: true,
		getExTier1Block4PriceAttribute: true,
		getExTier1Block5PriceAttribute: true,
		getExTier1Block6PriceAttribute: true,
		getExTier1Block7PriceAttribute: true,
		getExTier1Block8PriceAttribute: true,
		getExTier1Block9PriceAttribute: true,
		getExTier1Block10PriceAttribute: true,
		getExTier1Block11PriceAttribute: true,
		getExTier1Block12PriceAttribute: true,
		getExTier1Block13PriceAttribute: true,
		getExTier1Block14PriceAttribute: true,
		getExTier1Block15PriceAttribute: true,
		getExTier1Block16PriceAttribute: true,
		getExTier2Block1PriceAttribute: true,
		getExTier2Block2PriceAttribute: true,
		getExTier2Block3PriceAttribute: true,
		getExTier2Block4PriceAttribute: true,
		getExTier2Block5PriceAttribute: true,
		getExTier2Block6PriceAttribute: true,
		getExTier2Block7PriceAttribute: true,
		getExTier2Block8PriceAttribute: true,
		getExTier2Block9PriceAttribute: true,
		getExTier2Block10PriceAttribute: true,
		getExTier2Block11PriceAttribute: true,
		getExTier2Block12PriceAttribute: true,
		getExTier2Block13PriceAttribute: true,
		getExTier2Block14PriceAttribute: true,
		getExTier2Block15PriceAttribute: true,
		getExTier2Block16PriceAttribute: true,
		getExTier3Block1PriceAttribute: true,
		getExTier3Block2PriceAttribute: true,
		getExTier3Block3PriceAttribute: true,
		getExTier3Block4PriceAttribute: true,
		getExTier3Block5PriceAttribute: true,
		getExTier3Block6PriceAttribute: true,
		getExTier3Block7PriceAttribute: true,
		getExTier3Block8PriceAttribute: true,
		getExTier3Block9PriceAttribute: true,
		getExTier3Block10PriceAttribute: true,
		getExTier3Block11PriceAttribute: true,
		getExTier3Block12PriceAttribute: true,
		getExTier3Block13PriceAttribute: true,
		getExTier3Block14PriceAttribute: true,
		getExTier3Block15PriceAttribute: true,
		getExTier3Block16PriceAttribute: true,
		getExTier4Block1PriceAttribute: true,
		getExTier4Block2PriceAttribute: true,
		getExTier4Block3PriceAttribute: true,
		getExTier4Block4PriceAttribute: true,
		getExTier4Block5PriceAttribute: true,
		getExTier4Block6PriceAttribute: true,
		getExTier4Block7PriceAttribute: true,
		getExTier4Block8PriceAttribute: true,
		getExTier4Block9PriceAttribute: true,
		getExTier4Block10PriceAttribute: true,
		getExTier4Block11PriceAttribute: true,
		getExTier4Block12PriceAttribute: true,
		getExTier4Block13PriceAttribute: true,
		getExTier4Block14PriceAttribute: true,
		getExTier4Block15PriceAttribute: true,
		getExTier4Block16PriceAttribute: true,
		getExTier5Block1PriceAttribute: true,
		getExTier5Block2PriceAttribute: true,
		getExTier5Block3PriceAttribute: true,
		getExTier5Block4PriceAttribute: true,
		getExTier5Block5PriceAttribute: true,
		getExTier5Block6PriceAttribute: true,
		getExTier5Block7PriceAttribute: true,
		getExTier5Block8PriceAttribute: true,
		getExTier5Block9PriceAttribute: true,
		getExTier5Block10PriceAttribute: true,
		getExTier5Block11PriceAttribute: true,
		getExTier5Block12PriceAttribute: true,
		getExTier5Block13PriceAttribute: true,
		getExTier5Block14PriceAttribute: true,
		getExTier5Block15PriceAttribute: true,
		getExTier5Block16PriceAttribute: true,
		getExTier6Block1PriceAttribute: true,
		getExTier6Block2PriceAttribute: true,
		getExTier6Block3PriceAttribute: true,
		getExTier6Block4PriceAttribute: true,
		getExTier6Block5PriceAttribute: true,
		getExTier6Block6PriceAttribute: true,
		getExTier6Block7PriceAttribute: true,
		getExTier6Block8PriceAttribute: true,
		getExTier6Block9PriceAttribute: true,
		getExTier6Block10PriceAttribute: true,
		getExTier6Block11PriceAttribute: true,
		getExTier6Block12PriceAttribute: true,
		getExTier6Block13PriceAttribute: true,
		getExTier6Block14PriceAttribute: true,
		getExTier6Block15PriceAttribute: true,
		getExTier6Block16PriceAttribute: true,
		getExTier7Block1PriceAttribute: true,
		getExTier7Block2PriceAttribute: true,
		getExTier7Block3PriceAttribute: true,
		getExTier7Block4PriceAttribute: true,
		getExTier7Block5PriceAttribute: true,
		getExTier7Block6PriceAttribute: true,
		getExTier7Block7PriceAttribute: true,
		getExTier7Block8PriceAttribute: true,
		getExTier7Block9PriceAttribute: true,
		getExTier7Block10PriceAttribute: true,
		getExTier7Block11PriceAttribute: true,
		getExTier7Block12PriceAttribute: true,
		getExTier7Block13PriceAttribute: true,
		getExTier7Block14PriceAttribute: true,
		getExTier7Block15PriceAttribute: true,
		getExTier7Block16PriceAttribute: true,
		getExTier8Block1PriceAttribute: true,
		getExTier8Block2PriceAttribute: true,
		getExTier8Block3PriceAttribute: true,
		getExTier8Block4PriceAttribute: true,
		getExTier8Block5PriceAttribute: true,
		getExTier8Block6PriceAttribute: true,
		getExTier8Block7PriceAttribute: true,
		getExTier8Block8PriceAttribute: true,
		getExTier8Block9PriceAttribute: true,
		getExTier8Block10PriceAttribute: true,
		getExTier8Block11PriceAttribute: true,
		getExTier8Block12PriceAttribute: true,
		getExTier8Block13PriceAttribute: true,
		getExTier8Block14PriceAttribute: true,
		getExTier8Block15PriceAttribute: true,
		getExTier8Block16PriceAttribute: true,
		getExTier9Block1PriceAttribute: true,
		getExTier9Block2PriceAttribute: true,
		getExTier9Block3PriceAttribute: true,
		getExTier9Block4PriceAttribute: true,
		getExTier9Block5PriceAttribute: true,
		getExTier9Block6PriceAttribute: true,
		getExTier9Block7PriceAttribute: true,
		getExTier9Block8PriceAttribute: true,
		getExTier9Block9PriceAttribute: true,
		getExTier9Block10PriceAttribute: true,
		getExTier9Block11PriceAttribute: true,
		getExTier9Block12PriceAttribute: true,
		getExTier9Block13PriceAttribute: true,
		getExTier9Block14PriceAttribute: true,
		getExTier9Block15PriceAttribute: true,
		getExTier9Block16PriceAttribute: true,
		getExTier10Block1PriceAttribute: true,
		getExTier10Block2PriceAttribute: true,
		getExTier10Block3PriceAttribute: true,
		getExTier10Block4PriceAttribute: true,
		getExTier10Block5PriceAttribute: true,
		getExTier10Block6PriceAttribute: true,
		getExTier10Block7PriceAttribute: true,
		getExTier10Block8PriceAttribute: true,
		getExTier10Block9PriceAttribute: true,
		getExTier10Block10PriceAttribute: true,
		getExTier10Block11PriceAttribute: true,
		getExTier10Block12PriceAttribute: true,
		getExTier10Block13PriceAttribute: true,
		getExTier10Block14PriceAttribute: true,
		getExTier10Block15PriceAttribute: true,
		getExTier10Block16PriceAttribute: true,
		getExTier11Block1PriceAttribute: true,
		getExTier11Block2PriceAttribute: true,
		getExTier11Block3PriceAttribute: true,
		getExTier11Block4PriceAttribute: true,
		getExTier11Block5PriceAttribute: true,
		getExTier11Block6PriceAttribute: true,
		getExTier11Block7PriceAttribute: true,
		getExTier11Block8PriceAttribute: true,
		getExTier11Block9PriceAttribute: true,
		getExTier11Block10PriceAttribute: true,
		getExTier11Block11PriceAttribute: true,
		getExTier11Block12PriceAttribute: true,
		getExTier11Block13PriceAttribute: true,
		getExTier11Block14PriceAttribute: true,
		getExTier11Block15PriceAttribute: true,
		getExTier11Block16PriceAttribute: true,
		getExTier12Block1PriceAttribute: true,
		getExTier12Block2PriceAttribute: true,
		getExTier12Block3PriceAttribute: true,
		getExTier12Block4PriceAttribute: true,
		getExTier12Block5PriceAttribute: true,
		getExTier12Block6PriceAttribute: true,
		getExTier12Block7PriceAttribute: true,
		getExTier12Block8PriceAttribute: true,
		getExTier12Block9PriceAttribute: true,
		getExTier12Block10PriceAttribute: true,
		getExTier12Block11PriceAttribute: true,
		getExTier12Block12PriceAttribute: true,
		getExTier12Block13PriceAttribute: true,
		getExTier12Block14PriceAttribute: true,
		getExTier12Block15PriceAttribute: true,
		getExTier12Block16PriceAttribute: true,
		getExTier13Block1PriceAttribute: true,
		getExTier13Block2PriceAttribute: true,
		getExTier13Block3PriceAttribute: true,
		getExTier13Block4PriceAttribute: true,
		getExTier13Block5PriceAttribute: true,
		getExTier13Block6PriceAttribute: true,
		getExTier13Block7PriceAttribute: true,
		getExTier13Block8PriceAttribute: true,
		getExTier13Block9PriceAttribute: true,
		getExTier13Block10PriceAttribute: true,
		getExTier13Block11PriceAttribute: true,
		getExTier13Block12PriceAttribute: true,
		getExTier13Block13PriceAttribute: true,
		getExTier13Block14PriceAttribute: true,
		getExTier13Block15PriceAttribute: true,
		getExTier13Block16PriceAttribute: true,
		getExTier14Block1PriceAttribute: true,
		getExTier14Block2PriceAttribute: true,
		getExTier14Block3PriceAttribute: true,
		getExTier14Block4PriceAttribute: true,
		getExTier14Block5PriceAttribute: true,
		getExTier14Block6PriceAttribute: true,
		getExTier14Block7PriceAttribute: true,
		getExTier14Block8PriceAttribute: true,
		getExTier14Block9PriceAttribute: true,
		getExTier14Block10PriceAttribute: true,
		getExTier14Block11PriceAttribute: true,
		getExTier14Block12PriceAttribute: true,
		getExTier14Block13PriceAttribute: true,
		getExTier14Block14PriceAttribute: true,
		getExTier14Block15PriceAttribute: true,
		getExTier14Block16PriceAttribute: true,
		getExTier15Block1PriceAttribute: true,
		getExTier15Block2PriceAttribute: true,
		getExTier15Block3PriceAttribute: true,
		getExTier15Block4PriceAttribute: true,
		getExTier15Block5PriceAttribute: true,
		getExTier15Block6PriceAttribute: true,
		getExTier15Block7PriceAttribute: true,
		getExTier15Block8PriceAttribute: true,
		getExTier15Block9PriceAttribute: true,
		getExTier15Block10PriceAttribute: true,
		getExTier15Block11PriceAttribute: true,
		getExTier15Block12PriceAttribute: true,
		getExTier15Block13PriceAttribute: true,
		getExTier15Block14PriceAttribute: true,
		getExTier15Block15PriceAttribute: true,
		getExTier15Block16PriceAttribute: true,
		getExPriceTier16Attribute: true,
		getExPriceTier17Attribute: true,
		getExPriceTier18Attribute: true,
		getExPriceTier19Attribute: true,
		getExPriceTier20Attribute: true,
		getExPriceTier21Attribute: true,
		getExPriceTier22Attribute: true,
		getExPriceTier23Attribute: true,
		getExPriceTier24Attribute: true,
		getExPriceTier25Attribute: true,
		getExPriceTier26Attribute: true,
		getExPriceTier27Attribute: true,
		getExPriceTier28Attribute: true,
		getExPriceTier29Attribute: true,
		getExPriceTier30Attribute: true,
		getExPriceTier31Attribute: true,
		getExPriceTier32Attribute: true,
		getExPriceTier33Attribute: true,
		getExPriceTier34Attribute: true,
		getExPriceTier35Attribute: true,
		getExPriceTier36Attribute: true,
		getExPriceTier37Attribute: true,
		getExPriceTier38Attribute: true,
		getExPriceTier39Attribute: true,
		getExPriceTier40Attribute: true,
		getExPriceTier41Attribute: true,
		getExPriceTier42Attribute: true,
		getExPriceTier43Attribute: true,
		getExPriceTier44Attribute: true,
		getExPriceTier45Attribute: true,
		getExPriceTier46Attribute: true,
		getExPriceTier47Attribute: true,
		getExPriceTier48Attribute: true,
		getExTariffLabelAttribute: true,
		getExNumberOfPriceTiersInUseAttribute: true,
		getExNumberOfBlockThresholdsInUseAttribute: true,
		getExTierBlockModeAttribute: true,
		getExBlockThresholdMaskAttribute: true,
		getExCo2Attribute: true,
		getExCo2UnitAttribute: true,
		getExCo2TrailingDigitAttribute: true,
		getExCurrentBillingPeriodStartAttribute: true,
		getExCurrentBillingPeriodDurationAttribute: true,
		getExLastBillingPeriodStartAttribute: true,
		getExLastBillingPeriodDurationAttribute: true,
		getExLastBillingPeriodConsolidatedBillAttribute: true,
		getCloseTunnelTimeoutAttribute: true,
		getPaymentControlAttribute: true,
		getCreditRemainingAttribute: true,
		getEmergencyCreditRemainingAttribute: true,
		getCreditStatusAttribute: true,
		getEmergencyCreditLimitAllowanceAttribute: true,
		getEmergencyCreditThresholdAttribute: true,
		getTotalCreditAddedAttribute: true,
		getMaxCreditLimitAttribute: true,
		getFriendlyCreditWarningAttribute: true,
		getLowCreditWarningLimitAttribute: true,
		getIhdLowCreditWarningLimitAttribute: true,
		getInterruptSuspendTimeAttribute: true,
		getCutOffValueAttribute: true,
		getPaymentCardIdAttribute: true,
		getTopUpDateTime1Attribute: true,
		getTopUpAmount1Attribute: true,
		getTopUpOriginatingDevice1Attribute: true,
		getTopUpCode1Attribute: true,
		getTopUpDateTime1Attribute: true,
		getTopUpAmount1Attribute: true,
		getTopUpOriginatingDevice1Attribute: true,
		getTopUpCode2Attribute: true,
		getTopUpDateTime3Attribute: true,
		getTopUpAmount3Attribute: true,
		getTopUpOriginatingDevice3Attribute: true,
		getTopUpCode3Attribute: true,
		getTopUpDateTime4Attribute: true,
		getTopUpAmount4Attribute: true,
		getTopUpOriginatingDevice4Attribute: true,
		getTopUpCode4Attribute: true,
		getTopUpDateTime5Attribute: true,
		getTopUpAmount5Attribute: true,
		getTopUpOriginatingDevice5Attribute: true,
		getTopUpCode5Attribute: true,
		getDebtLabel1Attribute: true,
		getDebtAmount1Attribute: true,
		getDebtRecoveryMethod1Attribute: true,
		getDebtRecoveryStartTime1Attribute: true,
		getDebtRecoveryCollectionTime1Attribute: true,
		getDebtRecoveryFrequency1Attribute: true,
		getDebtRecoveryAmount1Attribute: true,
		getDebtRecoveryBalancePercentage1Attribute: true,
		getDebtRecoveryMaxMissed1Attribute: true,
		getDebtLabel2Attribute: true,
		getDebtAmount2Attribute: true,
		getDebtRecoveryMethod2Attribute: true,
		getDebtRecoveryStartTime2Attribute: true,
		getDebtRecoveryCollectionTime2Attribute: true,
		getDebtRecoveryFrequency2Attribute: true,
		getDebtRecoveryAmount2Attribute: true,
		getDebtRecoveryBalancePercentage2Attribute: true,
		getDebtRecoveryMaxMissed2Attribute: true,
		getDebtLabel3Attribute: true,
		getDebtAmount3Attribute: true,
		getDebtRecoveryMethod3Attribute: true,
		getDebtRecoveryStartTime3Attribute: true,
		getDebtRecoveryCollectionTime3Attribute: true,
		getDebtRecoveryFrequency3Attribute: true,
		getDebtRecoveryAmount3Attribute: true,
		getDebtRecoveryBalancePercentage3Attribute: true,
		getDebtRecoveryMaxMissed3Attribute: true,
		getPrepayAlarmStatusAttribute: true,
		getGenericAlarmMaskAttribute: true,
		getPrepaySwitchAlarmMaskAttribute: true,
		getPrepayEventAlarmMaskAttribute: true,
		getLoadControlStateAttribute: true,
		getCurrentEventIdAttribute: true,
		getCurrentEventStatusAttribute: true,
		getConformanceLevelAttribute: true,
		getMinimumOffTimeAttribute: true,
		getMinimumOnTimeAttribute: true,
		getMinimumCyclePeriodAttribute: true,
		getAuxiliarySwitch1LabelAttribute: true,
		getAuxiliarySwitch2LabelAttribute: true,
		getAuxiliarySwitch3LabelAttribute: true,
		getAuxiliarySwitch4LabelAttribute: true,
		getAuxiliarySwitch5LabelAttribute: true,
		getAuxiliarySwitch6LabelAttribute: true,
		getAuxiliarySwitch7LabelAttribute: true,
		getAuxiliarySwitch8LabelAttribute: true,
		getProposedChangeSupplyImplementationTimeAttribute: true,
		getProposedChangeSupplyStatusAttribute: true,
		getUncontrolledFlowThresholdAttribute: true,
		getUncontrolledFlowThresholdUnitOfMeasureAttribute: true,
		getUncontrolledFlowMultiplierAttribute: true,
		getUncontrolledFlowDivisorAttribute: true,
		getFlowStabilisationPeriodAttribute: true,
		getFlowMeasurementPeriodAttribute: true,
		getSupplierIdServerAttribute: true,
		getSupplierNameServerAttribute: true,
		getProposedSupplierIdAttribute: true,
		getProposedSupplierNameAttribute: true,
		getProposedSupplierChangeDateTimeAttribute: true,
		getProposedSupplierChangeControlAttribute: true,
		getExSupplierIdAttribute: true,
		getExSupplierNameAttribute: true,
		getExProposedSupplierIdAttribute: true,
		getExProposedSupplierNameAttribute: true,
		getExProposedSupplierChangeDateTimeAttribute: true,
		getExProposedSupplierChangeControlAttribute: true,
		getChangeOfTenancyUpdateDateTimeAttribute: true,
		getProposedTenancyChangeControlAttribute: true,
		getWanStatusAttribute: true,
		getSupplierIdClientAttribute: true,
		getExSupplierIdClientAttribute: true,
		getTouTariffActivationAttribute: true,
		getTariff8X8ActivatedAttribute: true,
		getTariff8X8ActivatedAttribute: true,
		getSingleTariffRateActivatedAttribute: true,
		getAsynchronousBillingOccurredAttribute: true,
		getSynchronousBillingOccurredAttribute: true,
		getTariffNotSupportedAttribute: true,
		getPriceClusterNotFoundAttribute: true,
		getPriceEventLogClearedAttribute: true,
		getPublishPriceReceivedAttribute: true,
		getPublishPriceActionedAttribute: true,
		getPublishPriceCancelledAttribute: true,
		getPublishPriceRejectedAttribute: true,
		getPublishBlockPeriodReceivedAttribute: true,
		getPublishBlockPeriodActionedAttribute: true,
		getPublishBlockPeriodCancelledAttribute: true,
		getPublishBlockPeriodRejectedAttribute: true,
		getPublishTariffInformationReceivedAttribute: true,
		getPublishTariffInformationActionedAttribute: true,
		getPublishTariffInformationCancelledAttribute: true,
		getPublishTariffInformationRejectedAttribute: true,
		getPublishPriceMatrixReceivedAttribute: true,
		getPublishPriceMatrixActionedAttribute: true,
		getPublishPriceMatrixCancelledAttribute: true,
		getPublishPriceMatrixRejectedAttribute: true,
		getPublishBlockThresholdsReceivedAttribute: true,
		getPublishBlockThresholdsActionedAttribute: true,
		getPublishBlockThresholdsCancelledAttribute: true,
		getPublishBlockThresholdsRejectedAttribute: true,
		getPublishConversionFactorReceivedAttribute: true,
		getPublishConversionFactorActionedAttribute: true,
		getPublishConversionFactorCancelledAttribute: true,
		getPublishConversionFactorRejectedAttribute: true,
		getPublishCalorificValueReceivedAttribute: true,
		getPublishCalorificValueActionedAttribute: true,
		getPublishCalorificValueCancelledAttribute: true,
		getPublishCalorificValueRejectedAttribute: true,
		getPublishCo2ValueReceivedAttribute: true,
		getPublishCo2ValueActionedAttribute: true,
		getPublishCo2ValueCancelledAttribute: true,
		getPublishCo2ValueRejectedAttribute: true,
		getPublishCppEventReceivedAttribute: true,
		getPublishCppEventActionedAttribute: true,
		getPublishCppEventCancelledAttribute: true,
		getPublishCppEventRejectedAttribute: true,
		getPublishBillingPeriodReceivedAttribute: true,
		getPublishBillingPeriodActionedAttribute: true,
		getPublishBillingPeriodCancelledAttribute: true,
		getPublishBillingPeriodRejectedAttribute: true,
		getPublishConsolidatedBillReceivedAttribute: true,
		getPublishConsolidatedBillActionedAttribute: true,
		getPublishConsolidatedBillCancelledAttribute: true,
		getPublishConsolidatedBillRejectedAttribute: true,
		getPublishCreditPaymentInfoReceivedAttribute: true,
		getPublishCreditPaymentInfoActionedAttribute: true,
		getPublishCreditPaymentInfoCancelledAttribute: true,
		getPublishCreditPaymentInfoRejectedAttribute: true,
		getCheckMeterAttribute: true,
		getLowBatteryAttribute: true,
		getTamperDetectAttribute: true,
		getSupplyStatusAttribute: true,
		getSupplyQualityAttribute: true,
		getLeakDetectAttribute: true,
		getServiceDisconnectAttribute: true,
		getReverseFlowGeneralAttribute: true,
		getMeterCoverRemovedAttribute: true,
		getMeterCoverClosedAttribute: true,
		getStrongMagneticFieldAttribute: true,
		getNoStrongMagneticFieldAttribute: true,
		getBatteryFailureAttribute: true,
		getProgramMemoryErrorAttribute: true,
		getRamErrorAttribute: true,
		getNvMemoryErrorAttribute: true,
		getLowVoltageL1Attribute: true,
		getHighVoltageL1Attribute: true,
		getLowVoltageL2Attribute: true,
		getHighVoltageL2Attribute: true,
		getLowVoltageL3Attribute: true,
		getHighVoltageL3Attribute: true,
		getOverCurrentL1Attribute: true,
		getOverCurrentL2Attribute: true,
		getOverCurrentL3Attribute: true,
		getFrequencyTooLowL1Attribute: true,
		getFrequencyTooHighL1Attribute: true,
		getFrequencyTooLowL2Attribute: true,
		getFrequencyTooHighL2Attribute: true,
		getFrequencyTooLowL3Attribute: true,
		getFrequencyTooHighL3Attribute: true,
		getGroundFaultAttribute: true,
		getElectricTamperDetectAttribute: true,
		getIncorrectPolarityAttribute: true,
		getCurrentNoVoltageAttribute: true,
		getUnderVoltageAttribute: true,
		getOverVoltageAttribute: true,
		getNormalVoltageAttribute: true,
		getPfBelowThresholdAttribute: true,
		getPfAboveThresholdAttribute: true,
		getTerminalCoverRemovedAttribute: true,
		getTerminalCoverClosedAttribute: true,
		getBurstDetectAttribute: true,
		getPressureTooLowAttribute: true,
		getPressureTooHighAttribute: true,
		getFlowSensorCommunicationErrorAttribute: true,
		getFlowSensorMeasurementFaultAttribute: true,
		getFlowSensorReverseFlowAttribute: true,
		getFlowSensorAirDetectAttribute: true,
		getPipeEmptyAttribute: true,
		getInletTemperatureSensorFaultAttribute: true,
		getOutletTemperatureSensorFaultAttribute: true,
		getReverseFlowAttribute: true,
		getTiltTamperAttribute: true,
		getBatteryCoverRemovedAttribute: true,
		getBatteryCoverClosedAttribute: true,
		getExcessFlowAttribute: true,
		getMeasurementSystemErrorAttribute: true,
		getWatchdogErrorAttribute: true,
		getSupplyDisconnectFailureAttribute: true,
		getSupplyConnectFailureAttribute: true,
		getMeasurementSoftwareChangedAttribute: true,
		getDstEnabledAttribute: true,
		getDstDisabledAttribute: true,
		getClockAdjBackwardAttribute: true,
		getClockAdjForwardAttribute: true,
		getClockInvalidAttribute: true,
		getCommunicationErrorHanAttribute: true,
		getCommunicationOkHanAttribute: true,
		getFraudAttemptAttribute: true,
		getPowerLossAttribute: true,
		getUnusualHanTrafficAttribute: true,
		getUnexpectedClockChangeAttribute: true,
		getCommsUsingUnauthenticatedComponentAttribute: true,
		getMeteringErrorRegClearAttribute: true,
		getMeteringAlarmRegClearAttribute: true,
		getUnexpectedHwResetAttribute: true,
		getUnexpectedProgramExecutionAttribute: true,
		getEventLogClearedAttribute: true,
		getLimitThresholdExceededAttribute: true,
		getLimitThresholdOkAttribute: true,
		getLimitThresholdChangedAttribute: true,
		getMaximumDemandExceededAttribute: true,
		getProfileClearedAttribute: true,
		getLoadProfileClearedAttribute: true,
		getBatteryWarnAttribute: true,
		getWrongSignatureAttribute: true,
		getWrongSignatureAttribute: true,
		getUnauthoriseActionFromHanAttribute: true,
		getFastPollingStartAttribute: true,
		getFastPollingEndAttribute: true,
		getMeterReportingIntervalChangedAttribute: true,
		getDisconnectToLoadLimitAttribute: true,
		getMeterSupplyStatusRegisterChangedAttribute: true,
		getMeterAlarmStatusRegisterChangedAttribute: true,
		getExtendedMeterAlarmStatusRegisterChangedAttribute: true,
		getManufacturerSpecificAAttribute: true,
		getManufacturerSpecificBAttribute: true,
		getManufacturerSpecificCAttribute: true,
		getManufacturerSpecificDAttribute: true,
		getManufacturerSpecificEAttribute: true,
		getManufacturerSpecificFAttribute: true,
		getManufacturerSpecificGAttribute: true,
		getManufacturerSpecificHAttribute: true,
		getManufacturerSpecificIAttribute: true,
		getMirrorResponseCommandReceivedAttribute: true,
		getMirrorResponseCommandActionedAttribute: true,
		getMirrorResponseCommandCancelledAttribute: true,
		getMirrorResponseCommandRejectedAttribute: true,
		getMessagingEventLogClearedAttribute: true,
		getDisplayMessageReceivedAttribute: true,
		getDisplayMessageActionedAttribute: true,
		getDisplayMessageCancelledAttribute: true,
		getDisplayMessageRejectedAttribute: true,
		getCancelMessageReceivedAttribute: true,
		getCancelMessageActionedAttribute: true,
		getCancelMessageCancelledAttribute: true,
		getCancelMessageRejectedAttribute: true,
		getMessageConfirmationSentAttribute: true,
		getLowCreditAttribute: true,
		getNoCreditAttribute: true,
		getCreditExhaustedAttribute: true,
		getEmergencyCreditEnabledAttribute: true,
		getEmergencyCreditExhaustedAttribute: true,
		getIhdLowCreditWarningAttribute: true,
		getPrepayEventLogClearedAttribute: true,
		getSupplyOnAttribute: true,
		getSupplyArmedAttribute: true,
		getSupplyOffAttribute: true,
		getDisconnectionFailureAttribute: true,
		getDisconnectionDueToTamperAttribute: true,
		getDisconnectionDueToCutOffValveAttribute: true,
		getRemoteDisconnectedAttribute: true,
		getPhysicalAttackOnThePrepayMeterAttribute: true,
		getElectronicAttackOnThePrepayMeterAttribute: true,
		getDiscountAppliedAttribute: true,
		getCreditAdjustmentAttribute: true,
		getCreditAdjustFailAttribute: true,
		getDebtAdjustmentAttribute: true,
		getDebtAdjustFailAttribute: true,
		getModeChangeAttribute: true,
		getTopupCodeErrorAttribute: true,
		getTopupAlreadyUsedAttribute: true,
		getTopupCodeInvalidAttribute: true,
		getFriendlyCreditInUseAttribute: true,
		getFriendlyCreditEndWarningAttribute: true,
		getFriendlyCreditPeriodEndAttribute: true,
		getPrepayErrorRegClearAttribute: true,
		getPrepayAlarmRegClearAttribute: true,
		getPrepayClusterNotFoundAttribute: true,
		getModeCredit2PrepayAttribute: true,
		getModePrepay2CreditAttribute: true,
		getModeDefaultAttribute: true,
		getChangeDebtReceivedAttribute: true,
		getChangeDebtActionedAttribute: true,
		getChangeDebtCancelledAttribute: true,
		getChangeDebtRejectedAttribute: true,
		getEmergencyCreditSetupReceivedAttribute: true,
		getEmergencyCreditSetupActionedAttribute: true,
		getEmergencyCreditSetupCancelledAttribute: true,
		getEmergencyCreditSetupRejectedAttribute: true,
		getCreditAdjustmentReceivedAttribute: true,
		getCreditAdjustmentActionedAttribute: true,
		getCreditAdjustmentCancelledAttribute: true,
		getCreditAdjustmentRejectedAttribute: true,
		getChangePaymentModeReceivedAttribute: true,
		getChangePaymentModeActionedAttribute: true,
		getChangePaymentModeCancelledAttribute: true,
		getChangePaymentModeRejectedAttribute: true,
		getSetLowCreditWarningLevelReceivedAttribute: true,
		getSetLowCreditWarningLevelActionedAttribute: true,
		getSetLowCreditWarningLevelCancelledAttribute: true,
		getSetLowCreditWarningLevelRejectedAttribute: true,
		getTopupReceivedAttribute: true,
		getTopupActionedAttribute: true,
		getTopupCancelledAttribute: true,
		getTopupRejectedAttribute: true,
		getCalendarEventLogClearedAttribute: true,
		getCalendarClusterNotFoundAttribute: true,
		getPublishCalendarReceivedAttribute: true,
		getPublishCalendarActionedAttribute: true,
		getPublishCalendarCancelledAttribute: true,
		getPublishCalendarRejectedAttribute: true,
		getPublishDayProfileReceivedAttribute: true,
		getPublishDayProfileActionedAttribute: true,
		getPublishDayProfileCancelledAttribute: true,
		getPublishDayProfileRejectedAttribute: true,
		getPublishWeekProfileReceivedAttribute: true,
		getPublishWeekProfileActionedAttribute: true,
		getPublishWeekProfileCancelledAttribute: true,
		getPublishWeekProfileRejectedAttribute: true,
		getPublishSeasonsReceivedAttribute: true,
		getPublishSeasonsActionedAttribute: true,
		getPublishSeasonsCancelledAttribute: true,
		getPublishSeasonsRejectedAttribute: true,
		getPublishSpecialDaysReceivedAttribute: true,
		getPublishSpecialDaysActionedAttribute: true,
		getPublishSpecialDaysCancelledAttribute: true,
		getPublishSpecialDaysRejectedAttribute: true,
		getPassword1ChangeAttribute: true,
		getPassword2ChangeAttribute: true,
		getPassword3ChangeAttribute: true,
		getPassword4ChangeAttribute: true,
		getPassword4ChangeAttribute: true,
		getDeviceManagementSupplyOnAttribute: true,
		getDeviceManagementSupplyArmedAttribute: true,
		getDeviceManagementSupplyOffAttribute: true,
		getDeviceManagementDisconnectionDueToTamperAttribute: true,
		getManualDisconnectAttribute: true,
		getManualConnectAttribute: true,
		getDeviceManagementRemoteDisconnectionAttribute: true,
		getRemoteConnectAttribute: true,
		getLocalDisconnectAttribute: true,
		getLocalConnectAttribute: true,
		getPublishCotReceivedAttribute: true,
		getPublishCotActionedAttribute: true,
		getPublishCotCancelledAttribute: true,
		getPublishCotRejectedAttribute: true,
		getPublishCosReceivedAttribute: true,
		getPublishCosActionedAttribute: true,
		getPublishCosCancelledAttribute: true,
		getPublishCosRejectedAttribute: true,
		getChangeSupplyReceivedAttribute: true,
		getChangeSupplyActionedAttribute: true,
		getChangeSupplyCancelledAttribute: true,
		getChangeSupplyRejectedAttribute: true,
		getChangePasswordReceivedAttribute: true,
		getChangePasswordActionedAttribute: true,
		getChangePasswordCancelledAttribute: true,
		getChangePasswordRejectedAttribute: true,
		getLocalChangeSupplyReceivedAttribute: true,
		getLocalChangeSupplyActionedAttribute: true,
		getLocalChangeSupplyCancelledAttribute: true,
		getLocalChangeSupplyRejectedAttribute: true,
		getSetEventConfigurationReceivedAttribute: true,
		getSetEventConfigurationActionedAttribute: true,
		getSetEventConfigurationCancelledAttribute: true,
		getSetEventConfigurationRejectedAttribute: true,
		getTunnelingClusterNotFoundAttribute: true,
		getUnsupportedProtocolAttribute: true,
		getUnsupportedProtocolAttribute: true,
		getTunnelingEventLogClearedAttribute: true,
		getFirmwareReadyForActivationAttribute: true,
		getFirmwareActivatedAttribute: true,
		getFirmwareActivationFailureAttribute: true,
		getPatchReadyForActivationAttribute: true,
		getPatchActivatedAttribute: true,
		getPatchFailureAttribute: true,
		getOtaEventLogClearedAttribute: true,
		getOtaReceivedAttribute: true,
		getOtaActionedAttribute: true,
		getOtaCancelledAttribute: true,
		getOtaRejectedAttribute: true,
		getResetToFactoryDefaultCommand: true,
		getIdentifyCommand: true,
		getIdentifyQueryCommand: true,
		getEZModeInvokeCommand: true,
		getUpdateCommissionStateCommand: true,
		getIdentifyQueryResponseCommand: true,
		getAddGroupCommand: true,
		getViewGroupCommand: true,
		getGetGroupMembershipCommand: true,
		getRemoveGroupCommand: true,
		getRemoveAllGroupsCommand: true,
		getAddGroupIfIdentifyingCommand: true,
		getAddGroupResponseCommand: true,
		getViewGroupResponseCommand: true,
		getGetGroupMembershipResponseCommand: true,
		getRemoveGroupResponseCommand: true,
		getAddSceneCommand: true,
		getViewSceneCommand: true,
		getRemoveSceneCommand: true,
		getRemoveAllScenesCommand: true,
		getStoreSceneCommand: true,
		getRecallSceneCommand: true,
		getGetSceneMembershipCommand: true,
		getAddSceneResponseCommand: true,
		getViewSceneResponseCommand: true,
		getRemoveSceneResponseCommand: true,
		getRemoveAllScenesResponseCommand: true,
		getStoreSceneResponseCommand: true,
		getGetSceneMembershipResponseCommand: true,
		getOffCommand: true,
		getOnCommand: true,
		getToggleCommand: true,
		getMoveToLevelCommand: true,
		getMoveCommand: true,
		getStepCommand: true,
		getStopCommand: true,
		getMoveToLevelWithOnOffCommand: true,
		getMoveWithOnOffCommand: true,
		getStepWithOnOffCommand: true,
		getStopWithOnOffCommand: true,
		getResetAlarmCommand: true,
		getResetAllAlarmsCommand: true,
		getGetAlarmCommand: true,
		getResetAlarmLogCommand: true,
		getAlarmCommand: true,
		getGetAlarmResponseCommand: true,
		getSetAbsoluteLocationCommand: true,
		getSetDeviceConfigurationCommand: true,
		getGetDeviceConfigurationCommand: true,
		getGetLocationDataCommand: true,
		getRssiResponseCommand: true,
		getSendPingsCommand: true,
		getAnchorNodeAnnounceCommand: true,
		getDeviceConfigurationResponseCommand: true,
		getLocationDataResponseCommand: true,
		getLocationDataNotificationCommand: true,
		getCompactLocationDataNotificationCommand: true,
		getRssiPingCommand: true,
		getRssiRequestCommand: true,
		getReportRssiMeasurementsCommand: true,
		getRequestOwnLocationCommand: true,
		getRestartDeviceCommand: true,
		getSaveStartupParametersCommand: true,
		getRestoreStartupParametersCommand: true,
		getResetStartupParametersCommand: true,
		getRestartDeviceResponseCommand: true,
		getSaveStartupParametersResponseCommand: true,
		getRestoreStartupParametersResponseCommand: true,
		getResetStartupParametersResponseCommand: true,
		getSetpointRaiseLowerCommand: true,
		getSetWeeklyScheduleCommand: true,
		getGetWeeklyScheduleCommand: true,
		getClearWeeklyScheduleCommand: true,
		getGetRelayStatusLogCommand: true,
		getCurrentWeeklyScheduleCommand: true,
		getRelayStatusLogCommand: true,
		getMoveToHueCommand: true,
		getMoveHueCommand: true,
		getStepHueCommand: true,
		getMoveToSaturationCommand: true,
		getMoveSaturationCommand: true,
		getStepSaturationCommand: true,
		getMoveToHueAndSaturationCommand: true,
		getMoveToColorCommand: true,
		getMoveColorCommand: true,
		getStepColorCommand: true,
		getMoveToColorTemperatureCommand: true,
		getZoneEnrollResponseCommand: true,
		getInitiateNormalOperationModeCommand: true,
		getInitiateTestModeCommand: true,
		getZoneStatusChangeNotificationCommand: true,
		getZoneEnrollRequestCommand: true,
		getInitiateNormalOperationModeResponseCommand: true,
		getInitiateTestModeResponseCommand: true,
		getArmCommand: true,
		getBypassCommand: true,
		getEmergencyCommand: true,
		getFireCommand: true,
		getPanicCommand: true,
		getGetZoneIdMapCommand: true,
		getGetZoneInformationCommand: true,
		getGetPanelStatusCommand: true,
		getGetBypassedZoneListCommand: true,
		getGetZoneStatusCommand: true,
		getArmResponseCommand: true,
		getGetZoneIdMapResponseCommand: true,
		getGetZoneInformationResponseCommand: true,
		getZoneStatusChangedCommand: true,
		getPanelStatusChangedCommand: true,
		getGetPanelStatusResponseCommand: true,
		getSetBypassedZoneListCommand: true,
		getBypassResponseCommand: true,
		getGetZoneStatusResponseCommand: true,
		getStartWarningCommand: true,
		getSquawkCommand: true,
		getLockDoorCommand: true,
		getUnlockDoorCommand: true,
		getToggleLockCommand: true,
		getUnlockWithTimeoutCommand: true,
		getGetLogRecordCommand: true,
		getSetPinCommand: true,
		getGetPinCommand: true,
		getClearPinCommand: true,
		getClearAllPinsCommand: true,
		getSetUserStatusCommand: true,
		getGetUserStatusCommand: true,
		getSetWeekdayScheduleCommand: true,
		getGetWeekdayScheduleCommand: true,
		getClearWeekdayScheduleCommand: true,
		getSetYeardayScheduleCommand: true,
		getGetYeardayScheduleCommand: true,
		getClearYeardayScheduleCommand: true,
		getSetHolidayScheduleCommand: true,
		getGetHolidayScheduleCommand: true,
		getClearHolidayScheduleCommand: true,
		getSetUserTypeCommand: true,
		getGetUserTypeCommand: true,
		getSetRfidCommand: true,
		getGetRfidCommand: true,
		getClearRfidCommand: true,
		getClearAllRfidsCommand: true,
		getLockDoorResponseCommand: true,
		getUnlockDoorResponseCommand: true,
		getToggleResponseCommand: true,
		getUnlockWithTimeoutResponseCommand: true,
		getGetLogRecordResponseCommand: true,
		getSetPinResponseCommand: true,
		getGetPinResponseCommand: true,
		getClearPinResponseCommand: true,
		getClearAllPinsResponseCommand: true,
		getSetUserStatusResponseCommand: true,
		getGetUserStatusResponseCommand: true,
		getSetWeekdayScheduleResponseCommand: true,
		getGetWeekdayScheduleResponseCommand: true,
		getClearWeekdayScheduleResponseCommand: true,
		getSetYeardayScheduleResponseCommand: true,
		getGetYeardayScheduleResponseCommand: true,
		getClearYeardayScheduleResponseCommand: true,
		getSetHolidayScheduleResponseCommand: true,
		getGetHolidayScheduleResponseCommand: true,
		getClearHolidayScheduleResponseCommand: true,
		getSetUserTypeResponseCommand: true,
		getGetUserTypeResponseCommand: true,
		getSetRfidResponseCommand: true,
		getGetRfidResponseCommand: true,
		getClearRfidResponseCommand: true,
		getClearAllRfidsResponseCommand: true,
		getOperationEventNotificationCommand: true,
		getProgrammingEventNotificationCommand: true,
		getWindowCoveringUpOpenCommand: true,
		getWindowCoveringDownCloseCommand: true,
		getWindowCoveringStopCommand: true,
		getWindowCoveringGoToLiftValueCommand: true,
		getWindowCoveringGoToLiftPercentageCommand: true,
		getWindowCoveringGoToTiltValueCommand: true,
		getWindowCoveringGoToTiltPercentageCommand: true,
		getExecutionOfACommandCommand: true,
		getSignalStateCommand: true,
		getWriteFunctionsCommand: true,
		getOverloadPauseResumeCommand: true,
		getOverloadPauseCommand: true,
		getOverloadWarningCommand: true,
		getSignalStateResponseCommand: true,
		getSignalStateNotificationCommand: true,
		getPowerProfileRequestCommand: true,
		getPowerProfileStateRequestCommand: true,
		getGetPowerProfilePriceResponseCommand: true,
		getGetOverallSchedulePriceResponseCommand: true,
		getEnergyPhasesScheduleNotificationCommand: true,
		getEnergyPhasesScheduleResponseCommand: true,
		getPowerProfileScheduleConstraintsRequestCommand: true,
		getEnergyPhasesScheduleStateRequestCommand: true,
		getGetPowerProfilePriceExtendedResponseCommand: true,
		getPowerProfileNotificationCommand: true,
		getPowerProfileResponseCommand: true,
		getPowerProfileStateResponseCommand: true,
		getGetPowerProfilePriceCommand: true,
		getPowerProfilesStateNotificationCommand: true,
		getGetOverallSchedulePriceCommand: true,
		getEnergyPhasesScheduleRequestCommand: true,
		getEnergyPhasesScheduleStateResponseCommand: true,
		getEnergyPhasesScheduleStateNotificationCommand: true,
		getPowerProfileScheduleConstraintsNotificationCommand: true,
		getPowerProfileScheduleConstraintsResponseCommand: true,
		getGetPowerProfilePriceExtendedCommand: true,
		getCheckInCommand: true,
		getCheckInResponseCommand: true,
		getFastPollStopCommand: true,
		getSetLongPollIntervalCommand: true,
		getSetShortPollIntervalCommand: true,
		getGetAlertsCommand: true,
		getGetAlertsResponseCommand: true,
		getAlertsNotificationCommand: true,
		getEventsNotificationCommand: true,
		getLogNotificationCommand: true,
		getLogResponseCommand: true,
		getLogQueueResponseCommand: true,
		getStatisticsAvailableCommand: true,
		getLogRequestCommand: true,
		getLogQueueRequestCommand: true,
		getGetProfileInfoResponseCommandCommand: true,
		getGetMeasurementProfileResponseCommandCommand: true,
		getGetProfileInfoCommandCommand: true,
		getGetMeasurementProfileCommandCommand: true,
		getLoadControlEventCommand: true,
		getCancelLoadControlEventCommand: true,
		getCancelAllLoadControlEventsCommand: true,
		getReportEventStatusCommand: true,
		getGetScheduledEventsCommand: true,
		getGetProfileResponseCommand: true,
		getRequestMirrorCommand: true,
		getRemoveMirrorCommand: true,
		getRequestFastPollModeResponseCommand: true,
		getConfigureMirrorCommand: true,
		getConfigureNotificationSchemeCommand: true,
		getConfigureNotificationFlagsCommand: true,
		getGetNotificationFlagCommand: true,
		getGetProfileCommand: true,
		getRequestMirrorResponseCommand: true,
		getMirrorRemovedCommand: true,
		getRequestFastPollModeCommand: true,
		getScheduleSnapshotResponseCommand: true,
		getTakeSnapshotResponseCommand: true,
		getPublishSnapshotCommand: true,
		getGetSampledDataResponseCommand: true,
		getScheduleSnapshotCommand: true,
		getTakeSnapshotCommand: true,
		getGetSnapshotCommand: true,
		getStartSamplingCommand: true,
		getGetSampledDataCommand: true,
		getMirrorReportAttributeResponseCommand: true,
		getResetLoadLimitCounterCommand: true,
		getPublishPriceCommand: true,
		getPublishConversionFactorCommand: true,
		getPublishCalorificValueCommand: true,
		getGetCurrentPriceCommand: true,
		getGetScheduledPricesCommand: true,
		getPriceAcknowledgementCommand: true,
		getGetBlockPeriodsCommand: true,
		getGetConversionFactorCommand: true,
		getGetCalorificValueCommand: true,
		getPublishBlockPeriodCommand: true,
		getPublishTariffInformationCommand: true,
		getPublishPriceMatrixCommand: true,
		getPublishBlockThresholdsCommand: true,
		getPublishCO2ValueCommand: true,
		getPublishTierLabelsCommand: true,
		getPublishBillingPeriodCommand: true,
		getPublishConsolidatedBillCommand: true,
		getPublishCppEventCommand: true,
		getPublishCreditPaymentCommand: true,
		getPublishCurrencyConversionCommand: true,
		getCancelTariffCommand: true,
		getGetTariffInformationCommand: true,
		getGetPriceMatrixCommand: true,
		getGetBlockThresholdsCommand: true,
		getGetCO2ValueCommand: true,
		getGetTierLabelsCommand: true,
		getGetBillingPeriodCommand: true,
		getGetConsolidatedBillCommand: true,
		getCppEventResponseCommand: true,
		getGetCreditPaymentCommand: true,
		getGetCurrencyConversionCommandCommand: true,
		getGetTariffCancellationCommand: true,
		getDisplayMessageCommand: true,
		getCancelMessageCommand: true,
		getGetLastMessageCommand: true,
		getMessageConfirmationCommand: true,
		getRequestTunnelCommand: true,
		getCloseTunnelCommand: true,
		getTransferDataClientToServerCommand: true,
		getTransferDataErrorClientToServerCommand: true,
		getAckTransferDataClientToServerCommand: true,
		getReadyDataClientToServerCommand: true,
		getGetSupportedTunnelProtocolsCommand: true,
		getRequestTunnelResponseCommand: true,
		getTransferDataServerToClientCommand: true,
		getTransferDataErrorServerToClientCommand: true,
		getAckTransferDataServerToClientCommand: true,
		getReadyDataServerToClientCommand: true,
		getSupportedTunnelProtocolsResponseCommand: true,
		getTunnelClosureNotificationCommand: true,
		getSelectAvailableEmergencyCreditCommand: true,
		getChangeDebtCommand: true,
		getEmergencyCreditSetupCommand: true,
		getConsumerTopUpCommand: true,
		getCreditAdjustmentCommand: true,
		getChangePaymentModeCommand: true,
		getGetPrepaySnapshotCommand: true,
		getGetTopUpLogCommand: true,
		getSetLowCreditWarningLevelCommand: true,
		getGetDebtRepaymentyLogCommand: true,
		getSetMaximumCreditLimitCommand: true,
		getSetOverallDebtCapCommand: true,
		getGetPrepaySnapshotResponseCommand: true,
		getChangePaymentModeResponseCommand: true,
		getConsumerTopUpResponseCommand: true,
		getGetCommandCommand: true,
		getPublishTopUpLogCommand: true,
		getPublishDebtLogCommand: true,
		getReportEventStatusCommand: true,
		getManageEventCommand: true,
		getPublishCalendarCommand: true,
		getPublishDayProfileCommand: true,
		getPublishWeekProfileCommand: true,
		getPublishSeasonsCommand: true,
		getPublishSpecialDaysCommand: true,
		getCancelCalendarCommand: true,
		getGetCalendarCommand: true,
		getGetDayProfilesCommand: true,
		getGetWeekProfilesCommand: true,
		getGetSeasonsCommand: true,
		getGetSpecialDaysCommand: true,
		getGetCalendarCancellationCommand: true,
		getGetChangeOfTenancyCommand: true,
		getGetChangeOfSupplierCommand: true,
		getRequestNewPasswordCommand: true,
		getGetSiteIdCommand: true,
		getReportEventConfigurationCommand: true,
		getGetCINCommand: true,
		getPublishChangeOfTenancyCommand: true,
		getPublishChangeOfSupplierCommand: true,
		getRequestNewPasswordResponseCommand: true,
		getUpdateSiteIdCommand: true,
		getSetEventConfigurationCommand: true,
		getGetEventConfigurationCommand: true
	};

	/**
	 * {Function} Returns commands.
	 *
	 * @return {Array} commands.
	 */
	var getCommands = function() {

		return commands;
	}

	/**
	 * {Function} Returns attributes.
	 *
	 * @return {Array} attributes.
	 */
	var getAttributes = function() {

		return attributes;
	}

	/**
	 * {Function} Returns isCollapsed object.
	 *
	 * @returns {Object} isCollapsed.
	 */
	var getIsCollapsed = function() {

		return isCollapsed;
	}

	return {

		getAttributes: getAttributes,
		getCommands: getCommands,
		getIsCollapsed: getIsCollapsed
	};
});