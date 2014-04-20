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
	// Might use a resource here that returns a JSON array
	var winery = null;
	// Some fake testing data
	var wines = [
	             { id: 0, title: 'Veuve Clique Champagne, France', description: 'A blend of Pinot Noir, Pinot Meunier and Chardonnay with a rich, creamy texture and round balance.' },
	             { id: 1, title: 'Laboure-Roi Pommard, France', description: 'Powerful scents of black currant, musk and liquorice.' },
	             { id: 2, title: 'Chateau Ste Michelle & Dr. Loosen Eroica Riesling, Washington', description: 'This Riesling exudes mandarin orange and sweet lime aromas and flavors with subtle mineral notes.' },
	             { id: 3, title: 'Castello Banfi Brunello Di Montalcino, Italy', description: 'Soft and velvety with liquorice, spices and cherry notes.' },
	             { id: 4, title: 'Grahams Six Grapes Reserve, Portugal', description: 'Dark red color with a rich perfume of ripe plums and cherries. Complex on the palate, with a good structure and a long lingering finish.' },
	             { id: 5, title: 'Errazuriz Late Harvest Sauvignon Blanc, Chile', description: 'Golden yellow in color with excellent aromatic intensity. Aromas of citrus and ripe apricots with a taste of honey and raisins.' }
	             ];

	return {
		all: function() {
			return wines;
		},
		get: function(wineId) {
			// Simple index lookup
			return wines[wineId];
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
		}
	};
})

;
