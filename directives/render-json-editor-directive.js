var app = angular.module('jsonApp');

function renderJsonEditorDirective($compile) {
    return {
        restrict: 'E',
        scope: {
            json: '='
        },
        templateUrl: 'directives/views/renderJSON.html',
        link(scope, element, attrs) {
            var nodes = [];
            for (var key in scope.json) {
                console.log('select directive for ', key);
                node = scope.json[key];

                var isArray = node instanceof Array;
                var isObject = typeof node === 'object';

                if (isArray) {
                    console.log('type is array, render array directive');
                } else if (isObject) {
                    console.log('type is object, re-run this directive');
                } else {
                    console.log('type is primitive:' + typeof node + '  choose proper template');

                    if (typeof node === 'string') {
                        console.log('select string template');
                        element.append("<text-value key='" + key + "' value='json." + key + "'></text-value>");
                    } else if (typeof node === 'number') {
                        console.log('select number template');
                        element.append("<number-value key='" + key + "' value='json." + key + "'></number-value>");
                    }
                    $compile(element.contents())(scope);
                }
            }
        }
    };
};
app.directive('renderJsonEditor', ['$compile', renderJsonEditorDirective]);