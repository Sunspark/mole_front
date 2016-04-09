(function(){
    var dropdownSvc = angular.module('dropdownSvc', []);

    dropdownSvc.factory('dropdownSvc', function() {
        return {
            getAgencies: function() {
                return [
                    { name: 'Number one', agencyId: 1 },
                    { name: 'It takes two', agencyId: 2 }
                ];
            }
        };
    });
})();