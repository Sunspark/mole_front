(function(){
    var app = angular.module('moleApp', [
        'ngRoute',
        'usersCtrl'
    ]);

    app.config(['$routeProvider',
        function($routeProvider) {
            $routeProvider
                .when('/Users/Edit', {
                    templateUrl: '/views/users/users.html',
                    controller: 'users'
                })
                .when('/Users/Login', {
                    templateUrl: '/views/users/login.html',
                    controller: 'users'
                })
                .otherwise({
                    redirectTo: '/Users/Login'
                });
        }]);


    app.controller('fishCtrl', function($scope){
        $scope.sauce ="gravy";
    });

})();