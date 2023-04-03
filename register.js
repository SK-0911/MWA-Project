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

function validate(){
    var fname = document.studentForm.firstName.value;
    var lname = document.studentForm.lastName.value;
    var email = document.studentForm.ClgEmail.value;
    var ph = document.studentForm.Phone.value;

    var errfname = document.getElementById("errfname");
    var errlname = document.getElementById("errlname");
    var errEmail = document.getElementById("errEmail");
    var errPh = document.getElementById("errPh");

    var regex = /^[a-zA-Z\s]+$/;   
    var eRegex = /^[a-z]\.[a-z][0-9]{3}@nmims\.edu\.in$/;  
    var phRegex = /^[0-9]{10}$/;           
    if(regex.test(fname) === false) {
        errfname.style.display = "block";
    } 
    if (fname === ""){
        errfname.style.display = "none";
    }

    if(regex.test(lname) === false) {
        errlname.style.display = "block";
    } 
    if (lname === ""){
        errlname.style.display = "none";
    }

    if(eRegex.test(email) === false) {
        errEmail.style.display = "block";
    } 
    if (email === ""){
        errEmail.style.display = "none";
    }

    if(phRegex.test(ph) === false) {
        errPh.style.display = "block";
    }

    if (phRegex.test(ph) === true){
        errPh.style.display = "none";
    }

}

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
