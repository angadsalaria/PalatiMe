angular.module('palati.controllers', [])

.controller('SignInCtrl', function($scope, $state, AuthService, AuthProvider, QRLkpService) {

	$scope.googleSignIn = function(){
		AuthProvider.client().login({connection: 'google-oauth2', scope: 'openid email name'}, function(err,result){
			if(err){
				alert('Error login');
			}
			else{
				AuthService.setUser(result);
				$state.go('tab.archive');
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
				$state.go('tab.archive');
			}
		}); 
	};

	var loggedInUser = AuthProvider.client().getCurrentUser();
	if (loggedInUser) {
		AuthService.setUser(loggedInUser);
		$state.go('tab.archive');
		AuthService.verify();
	}



	$scope.quickPullUp = function(){
		QRLkpService.lookup();
	};
	//Remove below in production
	$scope.devPullUp = function(){
		QRLkpService.devLookup();
	};

})

.controller('SignOutCtrl', function($scope, AuthService, AuthProvider) {

	AuthService.logout();	

})

//A simple controller that fetches a list of data from a service
.controller('WineIndexCtrl', function($scope, $ionicPopup, $state, AuthProvider, AuthService, 
		WineService, TastingService, QRLkpService) {
	// "WineService" is a service returning mock data (services.js)
	$scope.wines = WineService.all();
	$scope.winery = WineService.getWinery();
	$scope.saveTasting = function(){
		var tasting = {};
		tasting['wines'] = $scope.wines;
		tasting['wineryId'] = $scope.winery.id;
		tasting['date'] = new Date();
		if(AuthService.isUserLoggedIn()){
			$ionicPopup.show({
				template: '',
				title: "We're yet to login.",
				scope: $scope,
				buttons: [
				          { 	text: '<span class="icon ion-social-googleplus-outline"></span>',
				        	  	type: 'button-assertive',
				        	  	onTap: function(e) {
				        		  AuthProvider.client().login({connection: 'google-oauth2', scope: 'openid email name'}, function(err,result){
				        			  if(err){
				        				  alert('Error login');
				        			  }
				        			  else{
				        				  AuthService.setUser(result);
				        				  $scope.$apply();
				        				  TastingService.saveTasting(tasting);	
				        			  }
				        		  }); 
				        		  return 'true';

				        	  } 
				          },
				          { 	text: '<span class="icon ion-social-facebook"></span>',
				        	  	type: 'button-positive',
				        	  	onTap: function(e) {
				        		  return AuthProvider.client().login({connection: 'facebook', scope: 'openid email name'}, function(err,result){
				        			  if(err){
				        				  alert('Error login');
				        			  }
				        			  else{
				        				  AuthService.setUser(result);
				        				  $scope.$apply();
				        				  TastingService.saveTasting(tasting);	
				        			  }
				        		  }); 
				        		  return 'true';
				        	  } 
				          },
				          { text: 'Cancel', type: 'button-stable', onTap: function(e) { return 'false'; }},
				          ]
			}).then(function(res) {
				if(res==='false'){
					alert('Error occured');
				}

			}, function(err) {
				console.log('Err:', err);
			}, function(popup) {
				// If you need to access the popup directly, do it in the notify method
				// This is also where you can programatically close the popup:
				// popup.close();
			});
		}
		else{
			TastingService.saveTasting(tasting);
		}
		/*	TastingService.saveTasting(tasting)
		.then(function(success){
			 $ionicPopup.alert({
		          title: 'Hurray!',
		          content: 'Tasting saved.'
		        }).then(function(res) {
		          console.log('Ooops...');
		        });
		},function(error){});*/
	};
	$scope.lookupWinery = function(){
		QRLkpService.lookup();
	};
})


.controller('WineDetailCtrl', function($scope, $stateParams, $rootScope, $ionicModal, WineService) {

	$rootScope.wine = WineService.get($stateParams.wineSeqNum);
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


.controller('WineryCtrl', function($scope, QRLkpService, WineService) {
	$scope.winery = WineService.getWinery();
	$scope.lookupWinery = function() {
		QRLkpService.lookup();
	};
})

.controller('ArchiveCtrl', function($scope, ArchiveService, AuthService) {
	AuthService.setUser('Angad');
	$scope.tastings = {};
	ArchiveService.getTastings()
	.then(function(success){
		$scope.tastings = success.data;
		ArchiveService.setTastings(success.data);
	},function(error){});
})

.controller('ArchiveDetailCtrl', function($scope, $rootScope, $stateParams, ArchiveService) {

	$rootScope.tasting = ArchiveService.getTasting($stateParams.tastingId);

})

.controller('TastedWineCtrl', function($scope, $rootScope, $stateParams, ArchiveService) {
	$scope.wine = $rootScope.tasting.wines[$stateParams.wineSeqNum];	
})

.controller('TabsCtrl', function($scope, AuthService) {
	$scope.displayAsSignedIn = function(){
		//return AuthService.isUserLoggedIn();
		return true;
	};

})

;
