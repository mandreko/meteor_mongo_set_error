angular.module('enrollment').controller('EnrollmentDetailsCtrl', ['$scope', '$stateParams', '$meteor', '$location',
    function($scope, $stateParams, $meteor, $location) {
        $scope.newEnrollment = $meteor.object(Enrollments, $stateParams.enrollmentId);

        $scope.saveEnrollment = function() {
            $scope.newEnrollment.save();
            $location.path("/enrollments");
        };
    }
]);