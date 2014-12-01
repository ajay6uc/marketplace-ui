
var marketPlace =  angular.module('marketPlace', []);
marketPlace.controller('getList', ['$scope', function($scope){

 var teachers = ['ajay', 'vijay'];
 var students = ['nama-haram', 'pappu pager'];

  var a   = function  getList(type){
  		if(type==='teachers')
  			return teachers;
  		else if(type==="students"){
  			return students;
  		}
  };
  var teachersList = a("teachers");

  $scope.teachers=a("teachers");

  $scope.students=a("students");

	
}]);
