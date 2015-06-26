/**
 * Service containing utility functions.
 * 
 * @services $ionicPopup, $timeout.
 * @return 	{Function} retrieveSpinnerPopup(); Shows spinner pop up.
 * 			{Function} toggleSpinnerPopup(); Shows retrieve spinner pop up.
 * 			{Function} colorSpinnerPopup(); Shows color spinner pop up.
 * 			{Function} decToBool(dec); Converts decimal to boolean.
 */
viewModule.service('viewUtilityService', ['$ionicPopup',
                                    '$timeout', 
                                    function(	$ionicPopup,
                                    			$timeout) {
		
	/**
	 * Shows retrieve spinner pop up.
	 */
	var retrieveSpinnerPopup = function() {
		
		var myPopup = $ionicPopup.show({
		
			title: 'Retrieving device data',
			template: '<ion-spinner></ion-spinner>   loading...'
		});
		$timeout(function() {
			
		     myPopup.close(); 
		}, 1500);
	}
	
	/**
	 * Shows toggle spinner pop up.
	 */
	var toggleSpinnerPopup = function() {
		
		var myPopup = $ionicPopup.show({
		
			title: 'Sending request',
			template: '<ion-spinner></ion-spinner>   toggling...'
		});
		$timeout(function() {
			
		     myPopup.close(); 
		}, 1500);
	}
	
	/**
	 * Shows color spinner pop up.
	 */
	var colorSpinnerPopup = function() {
		
		var myPopup = $ionicPopup.show({
		
			title: 'Sending request',
			template: '<ion-spinner></ion-spinner>   changing color...'
		});
		$timeout(function() {
			
		     myPopup.close(); 
		}, 1500);
	}
	
	/**
	 * Converts decimal to boolean.
	 * 
	 * @param {Number} dec.
	 * @return {Boolean} bool.
	 */
	var decToBool = function(dec) {
		
		var bool = true;
		
		if(dec === 0) {
			
			bool = false;
		}
		
		return bool;
	}
	
	return {
		
		retrieveSpinnerPopup: retrieveSpinnerPopup,
		toggleSpinnerPopup: toggleSpinnerPopup,
		colorSpinnerPopup: colorSpinnerPopup,
		decToBool: decToBool
	}	
}]);