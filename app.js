var app = angular.module('jsonApp', []);

app.controller('MainCtrl', ['$scope', function($scope) {
    $scope.name = 'World';

    $scope.myJSON = {
        "valueOne": 666,
        "arrayTwo": [1, 2, 3, 4],
        "stringThird": "String example",
        "booleanFour": true,
        "nestedObject": {
            "propNUmber": 2
        }
    };

    $scope.$on('JSON_EDITOR.updated', function(e, data) {
        var correctNamespace = data.namespace.split('.').splice(1).join('.');
        $scope.$apply(function() {
            $scope.myJSON[correctNamespace] = data.value;
        });
    }, true);
}]);