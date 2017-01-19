vstda = angular.module('vstda', []);

vstda.controller('mainController', ['$scope', function($scope) {



    $scope.newEntry = [];
    $scope.entry = function() {

        $scope.newEntry.push({ 'description': $scope.description, 'setPriority': $scope.setPriority, 'setOrder': $scope.setOrder });

        $scope.description = '';

        $scope.sortPriority = '';


    };

    $scope.priority = function(priorityColor) {
        return (parseInt(priorityColor.setPriority) === 1) ? 'bg-warning' : (parseInt(priorityColor.setPriority) === 2) ? 'bg-info' : 'bg-success';

    }
}])
