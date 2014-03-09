// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('palati', ['ionic', 'palati.services', 'palati.controllers'])
.factory('authProvider', function(){
	var widget = new Auth0Widget({
		domain:         'palatime.auth0.com',
		clientID:       't36ibpYH70xL1KyBEPAURJLI4sAJcPlG',
		callbackURL:    'https://palatime.auth0.com/mobile'
	});
	
	return {
		signIn: function(){
			
		}
	};
})

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
  	.state('login', {
  		url: "/login",
  		templateUrl: "templates/login.html",
  		controller: 'SignInCtrl'
  	})
  	.state('logout', {
  		url: "/logout",
  		templateUrl: "templates/login.html",
  		controller: 'SignOutCtrl'
  	})
    // setup an abstract state for the tabs directive
    .state('tab', {
      url: "/tab",
      abstract: true,
      templateUrl: "templates/tabs.html"
    })

    // the wine tab has its own child nav-view and history
    .state('tab.wine-index', {
      url: '/wines',
      views: {
        'wines-tab': {
          templateUrl: 'templates/wine-index.html',
          controller: 'WineIndexCtrl'
        }
      }
    })

    .state('tab.wine-detail', {
      url: '/wine/:wineId',
      views: {
        'wines-tab': {
          templateUrl: 'templates/wine-detail.html',
          controller: 'WineDetailCtrl'
        }
      }
    })

    .state('tab.register', {
      url: '/register',
      views: {
        'register-tab': {
          templateUrl: 'templates/register.html'
        }
      }
    })

    .state('tab.about', {
      url: '/about',
      views: {
        'about-tab': {
          templateUrl: 'templates/about.html'
        }
      }
    });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/login');

});
