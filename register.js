/***** Multi - step form in register.html *****/
$("#form2").hide();
$("#form3").hide();

$("#next1").click(function(){
    $("#form1").hide();
    $("#form2").show();
});

$("#back1").click(function(){
    $("#form2").hide();
    $("#form1").show();
});

$("#next2").click(function(){
    $("#form2").hide();
    $("#form3").show();
});

$("#back2").click(function(){
    $("#form3").hide();
    $("#form2").show();
});

// function validate(){
//     var errs = new Array()
//     errs[0] = "errFirst";
//     errs[1] = "errLast";
//     errs[2] = "errEmail";
//     var inputs = new Array();
//     inputs[0] = document.getElementById('fname').value;
//     inputs[1] = document.getElementById('lname').value;
//     inputs[2] = document.getElementById('email').value;

//     console.log(inputs[0]);
// }

// var app = angular.module("mainApp", []);

// app.controller('studentController', function($scope){
//     $scope.reset = function(){  
//         $scope.firstName = "";  
//         $scope.lastName = "";  
//         $scope.email = "";  
//     }  
              
//     $scope.reset();
// })

var mainApp = angular.module("mainApp", []);

	mainApp.controller('studentController', function($scope){
		$scope.reset = function(){
			$scope.firstname = "";
			$scope.lastname = "";
            $scope.sapid = "";
			$scope.email = "";
		}
		$scope.reset();
});
