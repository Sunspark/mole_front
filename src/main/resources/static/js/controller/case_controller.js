(function(){
    var casesCtrl = angular.module('casesCtrl', []);

    casesCtrl.controller("casesCtrl",[ '$scope', '$http', function($scope, $http) {
        $scope.data = [];

        $scope.loadData = function() {
            /*
             $http.get('http://mole:8088/Cases').success(function (data) {
             console.log(data);
             $scope.data = data;
             });
             */
            $scope.data = [
                {caseId:1,agencyRefCode:'sa-789',agencyId:2,claimantId:3,createdBy:101,modifiedBy:101},
                {caseId:2,agencyRefCode:'sa-734',agencyId:2,claimantId:1,createdBy:101,modifiedBy:101},
                {caseId:3,agencyRefCode:'sa-767',agencyId:2,claimantId:2,createdBy:101,modifiedBy:101},
            ];
        };
        $scope.loadData();


        $scope.newCase = {};
        $scope.addCase = function(){
            alert('add Case');
            console.log($scope.data);

            $scope.newCase.createdBy = 1;
            $scope.newCase.modifiedBy = 1;
            console.log($scope.newCase);

            var res = $http.post('http://mole:8088/Cases/Add', $scope.newCase);
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
            $scope.newCase = {};
        };
        $scope.hasPower = function(casse){
            if(true){ // TODO this should be 'if logged in user has power to edit'
                return true;
            }
            return false;
        };
        $scope.editCase = function(casse){
            alert("trying to edit a case");
        };

    }]);

})();