app

.controller('PostController', function($scope, $routeParams, forumFactory) {

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

})

.controller('ForumController', function($scope) {


})

.controller('MainController', function($scope) {


})

.controller('DashboardController', function($scope, SessionFactory) {
	this.login = function(user){
		console.log("LOGIN")
		SessionFactory.create(user, function(server_response){
			if (server_response.status)
				$scope.errors = "";
			else {
				if(server_response.attempt == 5)
					$scope.errors = "Too many attemps, try again later...";
				else
					$scope.errors = server_response.msg;
			} 
		});
	}
})