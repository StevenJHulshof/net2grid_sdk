/**
 * Directive handling the save button on the settings navigation page.
 */
frontModule.directive('saveSettingsDir', function() {

    return function (scope, element, attrs) {

        // On click
        element.bind('click', function () {

        	scope.showSavePopup().then(function(data) {
        		
        		scope.settings.password = data;

        	    if (scope.settings.password != undefined) {
	        			
        	        if (scope.settings.password != scope.getPassword()) {
	        			
	        			scope.showAlertPopup();
	        		}
	        		else {
	        			
	            		scope.saveSettings();
	        		}
        		}
        	});			
        });
    };
});