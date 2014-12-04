var marketPlace = angular.module('marketPlace', ['ngResource', 'ui.router','ui.bootstrap', 'angularFileUpload']);

marketPlace.config(['$stateProvider', '$urlRouterProvider', function($stateProvider,   $urlRouterProvider) {
	
  $urlRouterProvider  
      .when('/', '/home')     
      .otherwise('/');


  $stateProvider
      .state('home1', {
        url: "/about/index.html",
        abstract: true,
        templateUrl: "resources/ui-views/content/content.html"
        
      })
      .state('home', {
        url: "/home",
        templateUrl: "views/dpView.html",
        controller: "userController"
        
      }).state('uploadquestion', {
        url: "/uploadquestion",
        templateUrl: "views/uploadQuestion.html",
        controller: "uploadQuestionController"
        
      });
	
}]);

marketPlace.run(
      [        '$rootScope', '$state', '$stateParams',
      function ($rootScope,   $state,   $stateParams) {

        // It's very handy to add references to $state and $stateParams to the $rootScope
        // so that you can access them from any scope within your applications.For example,
        // <li ui-sref-active="active }"> will set the <li> // to active whenever
        // 'contacts.list' or one of its decendents is active.
        $rootScope.$state = $state;
        //alert('state is ' + $state.current.name);
        $rootScope.$stateParams = $stateParams;
        //$state.go('home');
      }]);


