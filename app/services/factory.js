'use strict';
/*
 * New hotness
 */
// use uA to add providers
// upgradeAdapter.addProvider(ng.http.HTTP_PROVIDERS);

// var factoryService


/*
 * Busted ass old code
 */
angular.module('myApp.factoryService', [])
.factory('factoryService', ['$http', function($http){
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

