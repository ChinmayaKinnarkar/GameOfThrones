myApp.controller('bookController', ['$http','apiService','$routeParams', function($http,apiService, $routeParams) {
  var main = this;
  this.book = {};
  this.bookid = $routeParams.bookid;


  // get book
  this.getBookFunction = function() {
    apiService.getBook(main.bookid).then(function successCallback(response) {
        main.book = response.data;
        console.log(main.book);
      },

      function errorCallback(response) {
        alert("404 error not found");
        console.log(response);
      });
    return main.book;
  }; //function end
  main.getBookFunction();

}]); // controller end