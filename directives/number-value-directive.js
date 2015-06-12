var app = angular.module('jsonApp');

function numberValueDirective() {
    return {
        scope: {
            value: '='
        },
        restrict: 'E',
        templateUrl: 'directives/views/number.html',
        link(scope, element, attrs) {
            var pathToParentJson = attrs.value;
            scope.namespace = pathToParentJson;
            $('input', element).on('change', function(e) {
                scope.$emit('JSON_EDITOR.updated', {
                    namespace: pathToParentJson,
                    value: parseInt(this.value, 10)
                });
            });
        }
    };
};
app.directive('numberValue', [numberValueDirective]);