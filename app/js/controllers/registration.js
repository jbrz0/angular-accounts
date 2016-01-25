myApp.controller('RegistrationController', 
	['$scope', 'Authentication',
	 function($scope, Authentication){

	$scope.login = function(){
		Authentication.login($scope.user); 
	}; // Login

	$scope.logout = function() {
		Authentication.logout();
	}; // Logout

	$scope.register = function(){
		Authentication.register($scope.user);
	}; // Register

}]); // Controller 