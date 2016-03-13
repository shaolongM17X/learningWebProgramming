var userInfoModule = angular.module('UserInfoModule', []);
userInfoModule.controller('UserInfoCtrl', ['$scope', function($scope) {
	$scope.userInfo = {
		email: '546046245@qq.com',
		password: '123123123',
		autoLogin: true
	};
	$scope.getFormData = function() {
		console.log($scope.userInfo);
	};
	$scope.setFormData = function() {
		$scope.userInfo = {
			email: '6666@qq.com',
			password: '6666',
			autoLogin: false
		}
	};
	$scope.reset = function() {
		$scope.userInfo = {
		email: '546046245@qq.com',
		password: '123123123',
		autoLogin: true
	};
	}
}]);