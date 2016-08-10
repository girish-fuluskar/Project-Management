angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('tabsController.dashboard', {
    url: '/dashboard',
    cache:false,
    views: {
      'tab1': {
        templateUrl: 'templates/dashboard.html',
        controller: 'dashboardCtrl'
      }
    }
  })

  .state('tabsController.report', {
    url: '/report',
    views: {
      'tab2': {
        templateUrl: 'templates/report.html',
        controller: 'reportCtrl'
      }
    }
  })

  .state('tabsController.updates', {
    url: '/updates',
    views: {
      'tab3': {
        templateUrl: 'templates/updates.html',
        controller: 'updatesCtrl'
      }
    }
  })

  .state('addNewSprint', {
    url: '/addnewsprint',
    templateUrl: 'templates/addNewSprint.html',
    controller: 'addNewSprintCtrl'
  })

  .state('tabsController', {
    url: '/tabs',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

  .state('signUp', {
    url: '/signup',
    templateUrl: 'templates/signUp.html',
    controller: 'signUpCtrl'
  })

  .state('signIn', {
    url: '/signin',
    cache:false,
    templateUrl: 'templates/signIn.html',
    controller: 'signInCtrl'
  })

$urlRouterProvider.otherwise('/signup')  

});