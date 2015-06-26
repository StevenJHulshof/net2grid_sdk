/**
 * Service for handling the IP address.
 *
 * @return	{Function} getIp(); Returns stored IP address.
 *			{Function} setIp(ip); Changes the stored IP address, used to address the ZGD.
 */
net2gridApiModule.service('ipAddressService', function() {

	/**
	 * {String} IP address.
	 *
	 * @description The IP address of the used ZGD.
	 */
	var ipZgd = '';

	/**
	 * {Function} Returns stored IP address.
	 *
	 * @return {String} ipZgd.
	 */
	var getIp = function() {

		return ipZgd;
	}

	/**
	 * {Function} Changes the stored IP address, used to address the ZGD.
	 *
	 * @param {String} ip.
	 */
	var setIp = function(ip) {

		ipZgd = ip;
	}

	return {

		getIp: getIp,
		setIp: setIp
	};
});