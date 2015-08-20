angular.module('enrollment').controller('EnrollmentsListCtrl', ['$scope', '$meteor',
    function($scope, $meteor) {
        $scope.enrollments = $meteor.collection(Enrollments);

        $scope.remove = function(enrollment){
            $scope.enrollments.remove(enrollment);
        };
    }
]);