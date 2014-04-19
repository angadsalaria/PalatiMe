angular.module('palati.controllers', [])

.controller('SignInCtrl', function($scope, $state, AuthService, AuthProvider) {
	
	$scope.googleSignIn = function(){
		AuthProvider.client().login({connection: 'google-oauth2', scope: 'openid email name'}, function(err,result){
			if(err){
				alert('Error login');
			}
			else{
				 AuthService.setUser(result);
				 $state.go('tab.wine-index');
			}
		}); 
	};
	$scope.facebookSignIn = function(){
		AuthProvider.client().login({connection: 'facebook', scope: 'openid email name'}, function(err,result){
			if(err){
				alert('Error login');
			}
			else{
				AuthService.setUser(result);
				$state.go('tab.wine-index');
			}
		}); 
	};
		
	 var loggedInUser = AuthProvider.client().getCurrentUser();
     if (loggedInUser) {
    	AuthService.setUser(loggedInUser);
     	$state.go('tab.wine-index');
     	AuthService.verify();
     }
     
   
	
	$scope.quickPullUp = function(){
      	$state.go('tab.wine-index');
	};

})

.controller('SignOutCtrl', function($scope, $state) {
	var auth0 = new Auth0Client(
		    "palatime.auth0.com",
		    "t36ibpYH70xL1KyBEPAURJLI4sAJcPlG");
	auth0.logout(function(){
		
		$state.go('login');	
	});
	//$location.path('/login');
	  
})

//A simple controller that fetches a list of data from a service
.controller('WineIndexCtrl', function($scope, WineService) {
	// "WineService" is a service returning mock data (services.js)
	$scope.wines = WineService.all();
	$scope.winery = 'Test Winery';
	$scope.saveVisit = function(){
		var tasting = {};
		visit['wines'] = $scope.wines;
		visit['winery'] = $scope.winery;
		visit['date'] = new Date();
		console.log($scope.wines);
	};
})


//A simple controller that shows a tapped item's data
.controller('WineDetailCtrl', function($scope, $stateParams, $rootScope, $ionicModal, WineService) {
	// "WineService" is a service returning mock data (services.js)
	$rootScope.wine = WineService.get($stateParams.wineId);

	$scope.attributesBtn = [{type: 'button-icon ion-waterdrop', tap: function(e) {$scope.modal.show();}}];

	$ionicModal.fromTemplateUrl('templates/attributes.html', function(modal) {
		$scope.modal = modal;
		}, 
		{
			animation: 'slide-in-up',
			focusFirstInput: true
		});
	
	

})

.controller('AttributesCtrl', function($scope, $rootScope, AttributesService) {
	
	if(!angular.isDefined($rootScope.wine.basicList)){
		$rootScope.wine['basicList'] = AttributesService.getBasicList();
	}
	if(!angular.isDefined($rootScope.wine.extendedList)){
		$rootScope.wine['extendedList'] = AttributesService.getExtendedList();
	}
	$scope.basicList = $rootScope.wine.basicList;
	$scope.extendedList = $rootScope.wine.extendedList;
	
	//$scope.basicList = AttributesService.getBasicList();
	
	//$scope.extendedList = AttributesService.getExtendedList();
	
	$scope.attributeReset = function(){
		angular.forEach($scope.basicList, function(value, key){
			value.checked=true;
		}) ;
		angular.forEach($scope.extendedList, function(value, key){
			value.checked=false;
		}) ;
	};

	$scope.exitModal = function() {

		$scope.modal.hide();
	};
	


});
