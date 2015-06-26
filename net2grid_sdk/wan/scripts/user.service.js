/**
 * Service handling user data.
 * 
 * @return 	{Function} setUserData(clientId, clientSecret, userName, passWord); Sets user data into service.
 * 			{Function} getUserData(); Returns user data.
 * 			{Function} getToken(); Returns token.
 * 			{Function} postTokenRequest(); Post token request to server.
 * 			{Function} setEui(euiStr); Sets EUI.
 * 			{Function} getEui(); Returns EUI.
 */
net2gridApiModule.service('userService', ['$http', '$log', 'utilityService', function($http, $log, utilityService) {
	
	var eui = "";
	var token = "";
	var user = {
			
		clientId: "",
		clientSecret: "",
		userName: "",
		passWord: ""
	}
	
	/**
	 * {Function} Sets user data into service.
	 * 
	 * @param {String} clientId, {String} clientSecret, {String} userName, {String} passWord.
	 */
	var setUserData = function(clientId, clientSecret, userName, passWord) {
		
		user.clientId = clientId;
		user.clientSecret = clientSecret;
		user.userName = userName;
		user.passWord = passWord;
	}
	
	/**
	 * {Function} Sets EUI.
	 * 
	 * @param {String} euiStr.
	 */
	var setEui = function(euiStr) {
		
		eui = utilityService.euiToDec(euiStr);
	}
	
	/**
	 * {Function} Returns EUI.
	 * 
	 * @return {Number} eui.
	 */
	var getEui = function() {
		
		return eui;
	}
	
	/**
	 * {Function} Returns user data.
	 * 
	 * @return {Object} user.
	 */
	var getUserData = function() {
		
		return user;
	}
	
	/**
	 * {Function} Returns token.
	 * 
	 * @return {String} token.
	 */
	var getToken = function() {
	
		return token;
	}
	
	/**
	 * {Function} Post token request to server.
	 */
	var postTokenRequest = function() {
				
		var req = {
				
			method: 'POST',
			url: 'https://ipha-web.net2grid.net/v1/token',
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded'
			},
			transformRequest: function(obj) {
       			var str = [];
        		for(var p in obj)
        		str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
        		return str.join("&");
        	},
			data: { 
				"client_id": user.clientId,
				"client_secret": user.clientSecret,
				"username": user.userName,
				"password": user.passWord,
				"grant_type": "password"
			}
		}

		$http(req).success(function(promise) {
			
			token = promise.access_token;
		})
		.error(function(httpError) {
						
			$log.error("Failed to get token!");
			$log.error("data: " + httpError.data);
			$log.error("status: " + httpError.status);	
		});
	}
	
	return {
		
		setUserData: setUserData,
		getUserData: getUserData,
		setEui: setEui,
		getEui: getEui,
		postTokenRequest: postTokenRequest,
		getToken: getToken
	};
}]);
