myApp.controller('houseController', ['$http','apiService','$routeParams', function($http,apiService,$routeParams) {
  var main = this;
  this.house = {};
  this.houseid = $routeParams.houseid;

  // get house
  this.getHouseFunction = function() {
    apiService.getHouse(main.houseid).then(function successCallback(response) {
        main.house = response.data;
        console.log(main.house);
      },

      function errorCallback(response) {
        alert("404 error not found");
        console.log(response);
      });

    return main.house;
  }; //function end
  main.getHouseFunction();

}]); // controller end