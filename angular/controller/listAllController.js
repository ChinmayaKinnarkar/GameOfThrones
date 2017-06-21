myApp.controller('listAllController', ['$http', 'apiService', function($http, apiService) {
  var main = this;
  this.books = [];
  this.characters = [];
  this.houses = [];
  this.booksVisible = true;
  this.housesVisible = false;
  this.charactersVisible = false;


  this.apiPaginationLengthForCharacters = 30; 
  this.apiPaginationLengthForHouses = 20; 

  this.ShowHideBooks = function() {
   if(main.booksVisible = main.booksVisible){
      return 'false'; 
   }
   else{
       return 'true';
   }
    main.housesVisible = false;
    main.charactersVisible = false;
  };

  this.ShowHideHouses = function() {
    if(main.housesVisible = main.housesVisible){
      return 'false';
    }
    else{
      return 'true';
    }
    main.booksVisible = false;
    main.charactersVisible = false;

  };

  this.ShowHideCharacters = function() {
    if(main.charactersVisible = main.charactersVisible){
      return 'false';
    }
    else{
      return 'true';
    }
    main.booksVisible = false;
    main.housesVisible = false;

  };


  // get all books
  this.getBooksFucntion = function() {
    apiService.getBooks().then(function successCallback(response) {
        main.books.push.apply(main.books, response.data);
      },
      function errorCallback(response) {
        alert("404 error not found");
        console.log(response);
      });
    return main.books;

  }; //function end
  main.getBooksFucntion();
  // get all books end


  //get all houses
  this.getHousesFucntion = function() {
    for (var i = 1; i < main.apiPaginationLengthForHouses; i++) {
      apiService.getHouses([i]).then(function successCallback(response) {
          if (response.data.length > 0) {
            main.houses.push.apply(main.houses, response.data);
          }
        },
        function errorCallback(response) {
          alert("404 error not found");
          console.log(response);
        });
    } //end for loop
  }; //function end
  main.getHousesFucntion();
  //get all houses end


  //get all characters
  this.getCharactersFucntion = function() {
    for (var i = 1; i < main.apiPaginationLengthForCharacters; i++) {
      apiService.getCharacters([i]).then(function successCallback(response) {
          if (response.data.length > 0) {
            main.characters.push.apply(main.characters, response.data);
          }
        },
        function errorCallback(response) {
          alert("404 error not found");
          console.log(response);
        });
    } //end for loop
  }; //function end
  main.getCharactersFucntion();
  //get all characters end

  console.log(main.books);
  console.log(main.houses);
  console.log(main.characters);

}]); // controller end