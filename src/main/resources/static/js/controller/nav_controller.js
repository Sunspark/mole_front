(function(){
    var navCtrl = angular.module('navCtrl', []);

    navCtrl.controller('navCtrl', function($scope){
        $scope.loginLink = {
            title: 'Login',
            url: '/views/login.html'
        };
        $scope.currentLink = {};
        $scope.tabs = [
            {
                title: 'Users',
                links: [
                    {
                        title: 'View Users',
                        url: '/views/users.html'
                    },
                    {
                        title: 'Create User'
                    },
                ]
            },
            {
                title: 'Cases',
                links: [
                    {
                        title: 'View Cases',
                        url:'/views/cases.html'
                    },
                    {
                        title: 'Create Case'
                    },
                ]
            },
            {
                title: 'Clinics',
                links: [
                    {
                        title: 'View Clinics'
                    },
                    {
                        title: 'Create Clinic'
                    },
                ]
            },
            {
                title: 'Reporting',
                links: [
                    {
                        title: 'Due Soon'
                    },
                    {
                        title: 'Overdue by Offender'
                    },
                    {
                        title: 'Pending Files'
                    },
                ]
            },
        ];
        // load login into current. Only during initial pass.
        $scope.currentLink = $scope.loginLink;

        $scope.getIncludeUrl = function() {
            return $scope.currentLink.url;
        };

        $scope.changeTab = function(link) {
            alert("tab clicked: " + link.title);
            $scope.currentLink = link;
        };
    });

})();