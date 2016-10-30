'use strict';
/*
 * New hotness
 */
// use uA to add providers
var upgradeAdapter = new ng.upgrade.UpgradeAdapter();
upgradeAdapter.addProvider(ng.http.HTTP_PROVIDERS);

console.log(ng.http.Http)


var factoryService = ng.core.
  Injectable().
  Class({
    // fake $http injection
    constructor: [ng.http.Http, function(http) {
      // this.http = http;
    }],
    getNews: function() {
      // return this.http.get('http://weather.com').map(
      //   function(res) {
      //     return res.json();
      //   }
      // ).toPromise();
    }
  });

angular.module('myApp.factoryService', [])
.factory('factoryService', factoryService)


/*
 * Old busted ass
 */
// angular.module('myApp.factoryService', [])
// .factory('factoryService', ['$http', function($http){
//   return {
//     getNews: function() {
//       return $http.get('http://weather.com').then(
//         function(response) {
//           return response.data;
//         }
//       );
//     }
//   }
// }]);

