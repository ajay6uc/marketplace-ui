
marketPlace.controller('userController', ['$scope', 'userService', '$state', function($scope, userService, $state){

 var teachers = ['ajay', 'vijay'];
 var students = ['nama-haram', 'pappu pager'];

  $scope.user = {};
  
  $scope.user.getUserList = function(){
      userService.getUserList().$promise.then(function(userList) {

        $scope.user.userList = userList;
      }, 
        function(){}
      );
  };

   $scope.user.createUser = function(){

      userService.createUser().$promise.then(function(userList) {

        $scope.user.userList = userList;
      }, 
        function(){}
      );
  };

 $scope.user.getUserList();

	
}]);
