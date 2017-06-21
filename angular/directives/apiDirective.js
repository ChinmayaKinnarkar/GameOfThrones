myApp.directive('booksData', function() {
  return {
    restrict: "E",
    templateUrl: "views/all-books.html",
  }
});

myApp.directive('housesData', function() {
  return {
    restrict: "E",
    templateUrl: "views/all-houses.html",
  }
});
myApp.directive('charactersData', function() {
  return {
    restrict: "E",
    templateUrl: "views/all-characters.html",
  }
});
