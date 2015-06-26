/**
 * Directive handling the refresh button on the home tab
 */
frontModule.directive('refreshSensorsDir', function() {
	
	return function(scope, element, attrs) {
		
		element.bind('click', function() {
			
			scope.saveSensors();
		});
	};
});