'use strict';

/**
 * @ngdoc function
 * @name domoHacksApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the domoHacksApp
 */
angular.module('domoHacksApp')
  .controller('MainCtrl', function ($scope, $http, getStuffFactory) {

  	window.MY_SCOPE = $scope;

    // var URL = 'http://api.chartbeat.com/';
    // var topPages = 'live/toppages/v3/';
    // var apiKey = '892d102fc82d130093db94d544ab792f';
    // var host = 'foxsports.com.au';

    // var assignCbData = function	() {
    // 	getStuffFactory.getStuff(URL, topPages, apiKey, host)
    	// .then(function(data){
    	// 	$scope.cbData = data;
    	// 	console.log($scope.cbData);
    	// })
    // };

   	// assignCbData();

    $scope.cbData = getStuffFactory.theData.data;
    $scope.config = getStuffFactory.config;
    console.log(getStuffFactory.theData);

    // timing.getOnInterval(assignCbData);

  })

  .factory('getStuffFactory', function ($http, $interval){
  // 	function getStuff(url, endpoint, key, host){
  // 		return $http({
  // 			method: 'GET',
  // 			url: url+endpoint+'?apikey='+key+'&host='+host
  // 		}).then(function successCallback(response){
  // 			return response;
  // 		}) .catch(function errorCallback(response){
  // 			return 'Error: '+response;
  // 		});
  // 	}

  // 	return {
  // 		getStuff: getStuff
  // 	};
  // })
  	var theData = {};

  	var config = {
  		URL: 'http://api.chartbeat.com/',
  		topPages: 'live/toppages/v3/',
  		apiKey: '',
  		host: ''
  	};

  	function getStuff(url, endpoint, key, host){
  		return $http({
  			method: 'GET',
  			url: url+endpoint+'?apikey='+key+'&host='+host
  		}).then(
  		function successCallback(response){
  			console.log('Success! '+response);
  			theData.data = response;
  		},
  		function errorCallback(response){
  			console.log('Error! '+response);
  			return 'Error: '+response;
  		}
  		);
  }

  getStuff(config.URL, config.topPages, config.apiKey, config.host);

  $interval(
  	function() {
  		getStuff(config.URL, config.topPages, config.apiKey, config.host);
  	},
  	5000
  	);

  return {
  	theData: theData,
  	config: config
  };

 });

 //  .factory('timing', function ($timeout){
 //  	var timeIntervalInSec = 5;


 //  	var getOnInterval = function (fn, timeInterval) {
 //  		var promise = $timeout(fn, 1000 * timeIntervalInSec);

 //  		return promise.then(function(){
 //  			getOnInterval(fn, timeInterval);
 //  		});
 //  	};

	// return {
	// 	getOnInterval: getOnInterval
	// };

 //  });
