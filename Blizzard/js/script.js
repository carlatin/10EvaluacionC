var app=angular.module("app",[])
app.controller("control",function($scope){
	$scope.a=true;
	$scope.funcion=function(x){
		if(x==1){
			$scope.a=false;
			$scope.b=true;
		}else{
			$scope.a=true;
			$scope.b=false;
		}
	};
})