/**
 * http://usejsdoc.org/
 */

/* Define app */
var app = angular.module('calculatorApp', []);

/* Define Controller */
app.controller('calculatorCtrl', function($scope,$http,$window) {
	var num1 = 0,num2 =0, result = 0,opera="notset";
	$scope.dScreen="";
//	while(true){
	$scope.number = function(n){
		if( n == 12){
			$scope.dScreen = "";
//			opera = 0;
//			result = 0;
//			$window.alert("Hello " + n);
		}
		
		if ( n == 0 || n == 1 || n == 2 || n == 3 || n == 4 || n == 5 || n == 6 || n == 7 || n == 8 || n == 9){ 
			$scope.dScreen = $scope.dScreen.concat(n);
		}
		else if (n == 10){
//		else{
			$scope.dScreen = $scope.dScreen;
			if($scope.dScreen%1==0){
				$scope.dScreen = $scope.dScreen.concat(".");				
			}
		}
	};
	
	
	
	$scope.op = function(o){
		if( o == 13){
			if(opera == "notset"){
			num1 = Number($scope.dScreen);
			$scope.dScreen = "";
			opera = "division";
		}
		}
		
		else if(o == 14){
			if(opera == "notset"){
				num1 = Number($scope.dScreen);
				$scope.dScreen = "";
				opera = "multiplication";
				
		}
		}
		else if( o == 15 ){
			if(opera == "notset"){
				num1 = Number($scope.dScreen);
				$scope.dScreen = "";
				opera = "subtraction";
		}
		}
		else if( o == 16 ){
//			$window.alert("Hello " + " varsha check ");
			if(opera == "notset"){
				num1 = Number($scope.dScreen);
				$scope.dScreen = "";
				opera = "addition";
			
						
			}
		}
//				$window.alert("Hello " + " varsha not set");

//			}
			
			else {
//		 $scope.dScreen = result;
				num2 = Number($scope.dScreen);
				$scope.dScreen="";
				$scope.nums = {
						number_2:num2,
						number_1:num1
				};
				if(opera == "addition"){
					$http({
						method : "POST",
						url : '/add_cal',
						data : $scope.nums
					}).success(function(data) {
						$scope.dScreen = data;
						console.log(num1+"+"+num2 +"="+data);
					}).error(function(error) {
						console.log("Error");
					});
					opera="notset";
				}
				
				else if(opera == "subtraction"){
					$http({
						method : "POST",
						url : '/sub_cal',
						data : $scope.nums
					}).success(function(data) {
						$scope.dScreen = data;
						console.log(num1+"-"+num2 +"="+data);
					}).error(function(error) {
						console.log("Error");
					});
					opera="notset";
			}
				else if(opera == "multiplication"){
					$http({
						method : "POST",
						url : '/mul_cal',
						data : $scope.nums
					}).success(function(data) {
						console.log(num1+"*"+num2 +"="+data);
						$scope.dScreen = data;
					}).error(function(error) {
						console.log("Error");
					});
					opera="notset";
			}
//			else if(opera.equals("division")){
				else{
					
					if(num2 == 0){
						$scope.dScreen = "Invalid";
					}
					else{
					$http({
						method : "POST",
						url : '/div_cal',
						data : $scope.nums
					}).success(function(data) {
						$scope.dScreen = data;
						console.log(num1+"/"+num2 +"="+data);
					}).error(function(error) {
						console.log("Error");
					});
					opera="notset";
					}
			}
	
		}
	};
});