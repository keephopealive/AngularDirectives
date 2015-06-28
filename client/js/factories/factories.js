angular.module('app')
.factory('SessionFactory', function($http, $location) {

	var factory = {};

	factory.create = function(user, callback){
		console.log("IN FACTORY SESSIONS");
		$http.post('/sessions/authenticate', user).success(function(server_response){
			console.log("in factory ", response)
			if (response.status) {
				console.log("SUCCESSFUL LOGIN");
			}
			else {
				callback(response);
			}
		})
	}

	return factory;
})

.factory('UserFactory', function($http, $location) {
	return {
		create: function(newUser){
			console.log("Call to back end for login");
			// $http.post('/users/create', newUser)
			// .success(function(response){
			// 	console.log('response: ', response)
			// })
		}
	};
})





.factory('ForumFactory', function($http) {

	var factory = {};

	factory.getThread = function(data, callback) {
		$http.post('/threads/retrieve.json', data)
		.success(function(response){
			callback(response);
		});
	};

	factory.getPostComments = function(data, callback) {
		$http.get('/post/'+ data.id)
		.success(function(response){
			callback(response);
		});
	};


	return factory;

})