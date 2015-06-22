app.factory('SessionFactory', function($http, $location) {

	var factory = {};

	factory.create = function(user, callback){
		console.log("IN FACTORY SESSIONS");
		$http.post('/sessions/authenticate', user).success(function(server_response){
			console.log("in factory ", server_response)
			if (server_response.status) {
				console.log("SUCCESSFUL LOGIN");
			}
			else {
				callback(server_response)
			}
		})
	}

	return factory;
})
.factory('UserFactory', function($http) {

	var factory = {};

	factory.create = function(newUser, callback){
		$http.post('/users', newUser).success(function(server_response){
			callback(server_response)
		})
	}

	return factory;
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