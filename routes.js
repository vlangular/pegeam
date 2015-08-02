swApp.config(function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise("/");

  $stateProvider
    .state('home', {
      url: "/",
      templateUrl: "public/partials/home.htm",
      controller: 'homeController'
    })
    .state('vremea', {
      url: "/vremea",
      templateUrl: "public/partials/vremea.htm",
      controller: 'vremeaController'
    });

});
