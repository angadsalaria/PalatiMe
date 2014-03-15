angular.module('palati.controllers', [])

.controller('SignInCtrl', function($scope, $state) {
	var auth0 = new Auth0Client(
		    "palatime.auth0.com",
		    "t36ibpYH70xL1KyBEPAURJLI4sAJcPlG");
	
	$scope.googleSignIn = function(){
		auth0.login({connection: 'google-oauth2'}, function(err,result){
			if(err){
				alert('Error login');
			}
			else{
				 
				 $state.go('tab.wine-index');
			}
		}); 
	};
	$scope.facebookSignIn = function(){
		auth0.login({connection: 'facebook'}, function(err,result){
			if(err){
				alert('Error login');
			}
			else{
				 $state.go('tab.wine-index');
			}
		}); 
	};
	
	 var loggedInUser = auth0.getCurrentUser();
     if (loggedInUser) {
     	$state.go('tab.wine-index');
     	alert('in loggedInUser()');
     }
     
   
	
	$scope.quickPullUp = function(){
      	$state.go('tab.wine-index');
	};

	/*	  $scope.signIn = function(user) {
		  var domain        = 'contoso.auth0.com';
	        var clientId      = 'KPmb7b0Pps5jwzBRTc3wJzR9zQeCfDr5';

	        var auth0Client = new Auth0Client(domain, clientId);
	        var loggedInUser = auth0Client.getCurrentUser();
            if (loggedInUser) {
            	alert(loggedInUser);
            	alert(angular.toJson(auth0Client));
            	$state.go('tab.wine-index');
            }
            else {
            	auth0Client.login(function (err, auth0User) {
    	            if (err) {
    	            	alert('error');
    	            }
    	            else {
    	                alert(angular.toJson(auth0User));
    	            }
    	        });
            }
	  };*/

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
