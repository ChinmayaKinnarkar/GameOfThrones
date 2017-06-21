myApp.factory('apiService', function apiFactory($http) {

  var baseUrl = 'https://anapioficeandfire.com/api';
  var apiFactory = {};

  apiFactory.getBooks = function() {
    return $http.get(baseUrl + '/books?page=1&pageSize=50');
  }
  apiFactory.getHouses = function(pagenox) {
    return $http.get(baseUrl + '/houses?page=' + pagenox + '&pageSize=50')

  }
  apiFactory.getCharacters = function(pageno) {
    return $http.get(baseUrl + '/characters?page=' + pageno + '&pageSize=50')
  }
  apiFactory.getBook = function(bookid) {
    return $http.get(baseUrl + '/books/' + bookid)

  }

  apiFactory.getHouse = function(houseid) {
    return $http.get(baseUrl + '/houses/' + houseid)

  }

  apiFactory.getCharacter = function(characterid) {
    return $http.get(baseUrl + '/characters/' + characterid)

  }


  return apiFactory;


}); //end apiFactory service