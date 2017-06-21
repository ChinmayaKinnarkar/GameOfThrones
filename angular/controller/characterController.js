myApp.controller('characterController', ['$http','apiService','$routeParams', function($http,apiService,$routeParams) {
  var main = this;
  this.character = {};
  this.characterid = $routeParams.characterid;

  // get house
  this.getCharFucntion = function() {
    apiService.getChar(main.characterid).then(function successCallback(response) {
        main.character = response.data;
        console.log(main.character);
      },

      function errorCallback(response) {
        alert("404 error not found");
        console.log(response);
      });
    
    return main.character;
  }; //function end
  main.getCharFunction();

}]); // controller end