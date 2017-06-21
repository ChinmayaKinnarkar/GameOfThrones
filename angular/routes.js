//var myApp = angular.module('eplApp', ['ngRoute']);
myApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/', {
      // location of the template
      templateUrl: 'views/listAll-view.html',
      // Which controller it should use
      controller: 'listAllCtrl',
      // what is the alias of that controller.
      controllerAs: 'listAll'
    })
    .when('/view-book/:bookid', {
      templateUrl: 'views/book-view.html',
      controller: 'bookCtrl',
      controllerAs: 'currentBook'
    })
    .when('/view-house/:houseid', {
      templateUrl: 'views/house-view.html',
      controller: 'houseCtrl',
      controllerAs: 'currentHouse'
    })
    .when('/view-character/:characterid', {
      templateUrl: 'views/character-view.html',
      controller: 'characterCtrl',
      controllerAs: 'currentCharacter'
    })

    .otherwise({
      //redirectTo:'/' //we have a better option
      template: '<div class="notFound"><h1>404 page not found</h1><hr><a href="#/" class="btn btn-primary btn-primary"><span class="glyphicon glyphicon-home"></span> Go To HomePage</a></div>'
    });
}]);