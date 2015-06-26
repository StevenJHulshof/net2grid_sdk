/**
 * Directive handling the toggle button.
 * 
 * @services $compile, zigBeeLutService.
 */
viewModule.directive('toggleButtonDir', [ '$compile',
                                          'zigbeeLutService',
                                          function ($compile,
                                        		  	zigbeeLutService) {

    // Adds 'Toggle' buttons
    return {

        link: function (scope, element, attrs) {

            // Checks whether cluster is available in the device (SDK)
            if (scope.settings.generalDevices[scope.settings.devicePointer].checkCluster(zigbeeLutService.getClusterLut().OnOff) === true) {

                // Read on off attribute value
                scope.getState();

                // HTML toggle button
                var template = '<ion-toggle ng-model="$parent.settings.toggleMode" toggle-class="toggle-calm"'+
                               'ng-click="toggleDevice()">Toggle device</ion-toggle>';

                // Link template to scope
                element.append($compile(template)(scope));
            }
        }
    }
}])