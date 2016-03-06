(function(){
    var usersCtrl = angular.module('usersCtrl', []);

    usersCtrl.controller("users", function($scope) {
        $scope.user_id = 2;
        $scope.getNewUserId = function(){
            this.user_id = this.user_id + 1;
            return this.user_id;
        };

        $scope.data = [
            {user_id:1, first_name:"fred", last_name:"flintstone"},
            {user_id:2, first_name:"barney", last_name:"rubble"}

        ];
        $scope.newUser = {};
        $scope.addUser = function(){
            alert('add User');
            $scope.newUser.user_id = $scope.getNewUserId();
            console.log($scope.newUser);
            $scope.data.push($scope.newUser);
            $scope.reset();
        };
        $scope.reset = function(){
            $scope.newUser = {};
        };
    });
})();