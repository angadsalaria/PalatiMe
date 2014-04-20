angular.module('palati.controllers', [])

.controller('SignInCtrl', function($scope, $state, AuthService, AuthProvider, QRLkpService) {
	
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
		QRLkpService.lookup();
	};

})

.controller('SignOutCtrl', function($scope, AuthService, AuthProvider) {
		
		AuthService.logout();	
	  
})

//A simple controller that fetches a list of data from a service
.controller('WineIndexCtrl', function($scope, WineService) {
	// "WineService" is a service returning mock data (services.js)
	$scope.wines = WineService.all();
	$scope.winery = WineService.getWinery();
	$scope.saveTasting = function(){
		var tasting = {};
		tasting['wines'] = $scope.wines;
		tasting['wineryId'] = $scope.winery.id;
		tasting['date'] = new Date();
		console.log($scope.wines);
	};
})


.controller('WineDetailCtrl', function($scope, $stateParams, $rootScope, $ionicModal, WineService) {

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
	
	if($rootScope.wine.basicList==null){
		$rootScope.wine['basicList'] = AttributesService.getBasicList();
	}
	if($rootScope.wine.extendedList==null){
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
	


})


.controller('WineryCtrl', function($scope, QRLkpService) {
	$scope.lookupWinery = function() {
		QRLkpService.lookup();
	};
});
