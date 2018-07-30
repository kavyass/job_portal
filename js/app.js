var app =angular.module("myApp",["ngRoute"]);

app.config(function($routeProvider){
    $routeProvider.when("/",{
      controller:"myController",
      controller:"tableController1",
      controller:"tableController2",
      templateUrl:"home.html"
    }).when("/register",{
        templateUrl:"Register.html"
    }).when("/logIn",{
        templateUrl:"LogIn.html"
    }).when("/postjob",{
        templateUrl:"addjob.html"
    }).when("/recuiter",{
      templateUrl:"Recuiter.html"
    }).when("/employee",{
      templateUrl:"Employee.html"
    }).when("/employeeprofile",{
      templateUrl:"Employee_Profile.html"
    }).when("/addskill",{
      templateUrl:"Add_Skill.html"
    }).when("/forgot",{
      templateUrl:"forgot.html"
    }).when("/recovery",{
      templateUrl:"recovery.html"
    }).when("/recuiterprofile",{
      templateUrl:"Recuiter_Profile.html"
    }).when("/addjobs",{
      templateUrl:"addjob.html"
    }).when("/aboutus",{
      templateUrl:"AboutUs.html"
    }).when("/redit",{
      templateUrl:"redit.html"
    }).when("/eedit",{
      templateUrl:"eedit.html"
    });

});



app.controller("tableController1",function($scope,$http){
  $http.get("http://localhost:3050/candidates").then(function(response){
				$scope.data=response.data;
				console.log(response.data);
			})
});

app.controller("tableController2",function($scope,$http){
  $http.get("http://localhost:3050/jobs").then(function(response){
				$scope.dataj=response.data;
				console.log(response.data);
			})
});
