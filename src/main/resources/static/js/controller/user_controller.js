(function(){
    var usersCtrl = angular.module('usersCtrl', []);

    usersCtrl.controller("users",[ '$scope', '$http', function($scope, $http) {
        $scope.data = [];

        $scope.loadData = function() {
            $http.get('http://localhost:8088/Users').success(function (data) {
                $scope.data = data;
            });
        };
        $scope.loadData();


        $scope.newUser = {};
        $scope.addUser = function(){
            alert('add User');
            console.log($scope.data);

            $scope.newUser.createdBy = 1;
            $scope.newUser.modifiedBy = 1;
            console.log($scope.newUser);

            var res = $http.post('http://localhost:8088/Users/Add', $scope.newUser);
            res.success(function(data, status, headers, config) {
                console.log('success');
                $scope.loadData();
            });
            res.error(function(data, status, headers, config) {
                alert( "failure message: " + JSON.stringify({data: data}));
            });


            $scope.reset();
        };
        $scope.reset = function(){
            $scope.newUser = {};
        };
    }]);
})();