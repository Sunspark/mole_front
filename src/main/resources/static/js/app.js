(function(){
    var app = angular.module('moleApp', [
        'ngRoute',
        'usersCtrl'
    ]);

    app.config(['$routeProvider',
        function($routeProvider) {
            $routeProvider
                .when('/', {
                    templateUrl: '/views/users.html',
                    controller: 'users'
                })
                .otherwise({
                    redirectTo: '/'
                });
        }]);


    app.controller('fishCtrl', function($scope){
        $scope.sauce ="gravy";
    });

/*
var app = angular.module('moleApp', [
    'ngRoute',
    'moleControllers'
]);

moleApp.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider
        .when('/', {
            templateUrl: 'users.html',
            controller: 'usersCtrl'
        })
        .otherwise({
            redirectTo: '/'
        });
    }]);
*/
})();