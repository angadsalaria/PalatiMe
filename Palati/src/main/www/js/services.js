angular.module('palati.services', [])


.factory('AuthService', function($http, baseURL, $state, AuthProvider){
	var user = null;
	return{
		setUser: function(loggedInUser){
			user = loggedInUser;
		},
		getUserName: function(){
			return user.profile.given_name+' '+user.profile.family_name;
		},
		getToken: function(){
			return user.idToken;
		},
		isUserLoggedIn : function(){
			return user != null;
		},
		verify: function(){

			$http({method: 'GET', url: baseURL + 'verifyToken.do', params: {token : user.idToken}})
			.then(function(success){},function(error){});
		},
		logout: function(){
			AuthProvider.client().logout(function(){
				$http({method: 'GET', url: AuthProvider.getLogoutURL()})
				.then(function(success){
					$state.go('login');
				},function(error){});
			});
		}
	};
})
/** WineService with singleton variables 'winery' and 'wines' **/
.factory('WineService', function($http, $state, baseURL) {

	var winery = null;
	var wines = null;

	return {
		all: function() {
			return wines;
		},
		get: function(wineSeqNum) {
			// Simple index lookup
			return wines[wineSeqNum];
		},
		initialize: function(wineryId){
			$http({method: 'GET', url: baseURL + 'getWineryDetails.do', params: {wineryId : wineryId}})
			.then(function(success){
				winery = success.data.winery;
				wines = success.data.wines;
				$state.go('tab.wine-index');
			},function(error){});
		},
		getWinery: function(){
			return winery;
		}
	};
})

.factory('AttributesService', function($http, baseURL) {
	var basicAttributes;
	var extendedAttributes;

	var initialize = function(){	
		$http({method: 'GET', url: baseURL + 'getAttributesByType.do'})
		.then(function(success){
			basicAttributes = success.data.basicList;
			extendedAttributes = success.data.extendedList;
		},function(error){

		});
	};

	return {
		getBasicList: function() {
			return angular.copy(basicAttributes);
		},
		getExtendedList: function() {
			return angular.copy(extendedAttributes);
		},
		initialize: function(){
			initialize();
		}
	};
})

.factory('TastingService', function($http,baseURL, AuthService, $ionicPopup) {
	return {
		lookupTasting: function() {
			
		},
		saveTasting: function(tasting){
			$http({method: 'POST', url: baseURL + 'saveTasting.do', data: tasting})
			.then(function(success){
				 $ionicPopup.alert({
			          title: 'Hurray!',
			          content: 'Tasting saved.'
			        }).then(function(res) {
			          console.log('Ooops...');
			        });
			},function(error){});
		}
	};
})

.factory('QRLkpService', function(WineService) {
	return {
		lookup: function() {
			
			var scanner = cordova.require("cordova/plugin/BarcodeScanner");
	        scanner.scan( function (result) {
	         /*   alert("We got a "+result.format+"\n" + 
	            "Result: " + result.text + "\n" +             
	            "Cancelled: " + result.cancelled); */ 
	        	if(result.text!=null && result.text!=''){
	        		WineService.initialize(result.text);
	        	}
	        	else
	            if(result.cancelled){
	            	WineService.initialize(10001);
	            }
	        }, function (error) { 
	            alert("Scanning failed: " + error); 
	        } );
		},
		devLookup: function(){
			WineService.initialize(10001);
		}
	};
})

;
