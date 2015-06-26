/**
 * Directive handling color control.
 * 
 * @services $compile, zigBeeLutService.
 */
viewModule.directive('colorControlDir', [ '$compile',
                                          'zigbeeLutService',
                                          function ($compile,
                                        		  	zigbeeLutService) {

	// Adds color button group
    return {

        link: function (scope, element, attrs) {

            // Checks whether cluster is available in the device (SDK)
            if (scope.settings.generalDevices[scope.settings.devicePointer].checkCluster(zigbeeLutService.getClusterLut().ColorControl) === true) {

                // HTML button group
                var template = '<div class="button-bar"><a class="button button-assertive" ng-click="colorRed()">Red</a>'+
                               '<a class="button button-balanced" ng-click="colorGreen()">Green</a><a class="button '+
                               'button-positive" ng-click="colorBlue()">Blue</a></div>';

                // Link template to scope
                element.append($compile(template)(scope));
            }
        }
    }
}])