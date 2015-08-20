angular.module('enrollment').config(['$urlRouterProvider', '$stateProvider', '$locationProvider',
    function($urlRouterProvider, $stateProvider, $locationProvider){

        $locationProvider.html5Mode(true);

        $stateProvider
            .state('enrollments', {
                url: '/enrollments',
                templateUrl: 'client/enrollments/views/enrollments-list.ng.html',
                controller: 'EnrollmentsListCtrl'
            })
            .state('enrollmentDetails', {
                url: '/enrollments/:enrollmentId',
                templateUrl: 'client/enrollments/views/enrollments-details.ng.html',
                controller: 'EnrollmentDetailsCtrl',
            });

        $urlRouterProvider.otherwise('/enrollments');
    }]);