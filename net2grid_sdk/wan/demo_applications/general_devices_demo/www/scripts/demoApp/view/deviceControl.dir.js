/**
 * Directive handling device selection.
 */
viewModule.directive('deviceControlDir', function () {

    // Change device pointer and return state of device
    return function (scope, element, attrs) {

        // On click
        element.bind('click', function () {
        	
            scope.deviceSelect(attrs.deviceControlDir);
        });
    };
})