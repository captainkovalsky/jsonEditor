var app = angular.module('jsonApp');

function textValueDirective() {
    return {
        scope: {
            value: '='
        },
        restrict: 'E',
        templateUrl: 'directives/views/text.html',
        link(scope, element, attrs) {
            console.log('init text directive');
            var pathToParentJson = attrs.value;
            scope.namespace = pathToParentJson;
            $('input', element).on('change click keyup input paste', function(e) {
                scope.$emit('JSON_EDITOR.updated', {
                    namespace: pathToParentJson,
                    value: this.value
                });
            });
        }
    };
};
app.directive('textValue', [textValueDirective]);