angular.module('app')
.controller('PostController', ['$scope', '$routeParams', 'forumFactory', function($scope, $routeParams, forumFactory) {
	console.log("PostController Loaded")

	$scope.currentPage = 0;
    $scope.pageSize = 10;
    $scope.data = [];
    $scope.numberOfPages=function(){
	 	return Math.ceil($scope.data.length/$scope.pageSize);                
    }

	function getPostComments(){
		forumFactory.getPostComments({id:$routeParams.id}, function(content){
			$scope.post = content[0][0];
			$scope.comments = content[1];
			$scope.data = content[1];
		});
	}
	getPostComments();

}])

.controller('ForumController', ['$scope', function($scope) {
	console.log("ForumController Loaded")

}])

.controller('DashboardController', ['$scope', function($scope) {
	console.log("DashboardController Loaded")
	// this.register

}])



.controller('MainController', ['$scope', 'SessionFactory', 'UserFactory', function($scope, SessionFactory, UserFactory) {
	var that = this;
	this.loginTimeout = false;
	this.loggedIn = false;
	this.login = function(user){
		SessionFactory.create(user, function(response){
			if (response.status){
				that.loggedIn = true;
				that.loginErrors = "";
			}
			else {
				if(response.attempt == 5){
					that.loginTimeout = true;
					that.loginErrors = "Too many attemps, try again later...";
				}
				else
					that.loginErrors = response.msg;
			} 
		});
	}

	this.register = function(newUser){
		UserFactory.create(newUser);
	}
}])








