(function(){
    var usersCtrl = angular.module('usersCtrl', []);

    usersCtrl.controller("usersCtrl",[ '$scope', '$http', function($scope, $http) {
        $scope.data = [];

        $scope.loadData = function() {
        /*
            $http.get('http://mole:8088/Users').success(function (data) {
                console.log(data);
                $scope.data = data;
            });
            */
            $scope.data = [
                {firstName:'jack',lastName:'bauer',createdBy:101,modifiedBy:101},
                {firstName:'jill',lastName:'bauer',createdBy:101,modifiedBy:101},
            ];
        };
        $scope.loadData();


        $scope.newUser = {};
        $scope.addUser = function(){
            alert('add User');
            console.log($scope.data);

            $scope.newUser.createdBy = 1;
            $scope.newUser.modifiedBy = 1;
            console.log($scope.newUser);

            var res = $http.post('http://mole:8088/Users/Add', $scope.newUser);
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
        $scope.hasPower = function(user){
            if(true){ // TODO this should be 'if current user has less or equal power to passed user'
                return true;
            }
            return false;
        };
        $scope.editUser = function(user){
            alert("trying to edit a user");
        };
    }]);
})();