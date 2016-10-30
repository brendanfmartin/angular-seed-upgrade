'use strict';

angular.module('myApp.factory', [])
.factory('factory', ['$http', function($http){
  return {
    getNews: function() {
      return $http.get('http://weather.com').then(
        function(response) {
          return response.data;
        }
      );
    }
  }
}]);