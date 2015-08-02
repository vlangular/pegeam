var swApp = angular.module('swApp',['ui.router','ngResource']);

// Services

swApp.service('swCityService', function() {

    this.city = 'Bucuresti';

});

// Directives

swApp.directive('dayItem', function() {

    return {
        restrict: 'E',
        templateUrl: '/public/partials/day.htm',
        replace: true,
        scope: {
            dayResults: '=',
            convertMyDate: '&',
            convertToCelsius: '&'
        }
    }

});


// Controllers

swApp.controller('homeController',['$scope', 'swCityService', function($scope, swCityService) {

    $scope.city = swCityService.city;

    $scope.$watch('city', function() {
        swCityService.city = $scope.city;
    });

}]);

swApp.controller('vremeaController',['$scope', '$resource', 'swCityService', function($scope, $resource, swCityService) {

    $scope.city = swCityService.city;

    var weatherAPI = $resource(
                    "http://api.openweathermap.org/data/2.5/forecast",
                    {
                        callback: "JSON_CALLBACK"
                    },
                    {
                        get: {
                            method: "JSONP"
                        }
                    }
                );
    $scope.weatherResult = weatherAPI.get({ q: $scope.city + ',ro',
                                     cnt: 2,
                                     lang: 'ro'
                                    })

    $scope.convertMyDate = function(dt) {
            return new Date(dt * 1000);
    };

    $scope.convertToCelsius = function(temp) {
        return Math.round(temp - 273.15);
    };

}]);
