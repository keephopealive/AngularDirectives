app.factory('SessionFactory', function($http, $location) {

	var factory = {};

	factory.create = function(user, callback){
		$http.post('/sessions/authenticate', user).success(function(server_response){
			console.log("in factory ", server_response)
			if (server_response.status) {
				window.location.href = '/sessions/authenticated/123abc/'+server_response.uid;
				// window.location.href = '/sessions/authenticated/'+server_response.auth_token+'/'+server_response.uid;
			}
			else {
				callback(server_response)
			}
		})
	}

	return factory;
});