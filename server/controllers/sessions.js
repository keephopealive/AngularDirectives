var User = mongoose.model('User');

module.exports = (function() {

	return {
		index: function(request, response){
			console.log("Server / Ctrl / Sessions - Index")
		},
		new: function(request, response){
			console.log("Server / Ctrl / Sessions - New")
		},
		authenticate: function(request, response) {
			if (!request.session.tries)
				request.session.tries = 0
			if (request.session.tries >= 5) {
				response.json({
					action: 'login',
					status: false,
					attempt: request.session.tries,
					msg: ('Invalid Credentials ( Attempt '+request.session.tries+' / 5 '+') Invalid request, please try again later.')
				})
			}
			else {
				request.session.tries += 1
				User.findOne({email: request.body.email, password:request.body.password}, function(err, record){
					if(record){

						// Actionable

						// Generate auth_token
						// Store auth_token into session
						// request.session.lag = Date.time // Store Date/time into session
						response.json({
							action: 'login',
							status: true,
							auth_token: '123abc', // pass auth_token
							uid: record.id
						})
					}
					else{
						response.json({
							action: 'login',
							status: false,
							errors: err,
							msg: ('Invalid Credentials ( Attempt '+request.session.tries+' / 5 '+')')
						})
					}
						
				})
			}
		},
		create: function(request, response){

			User.findOne({_id: request.params.uid}, function(err, record){
				
				// Actionable

				// If the record exists, and the auth token matches, and the uid matches this record, and the time between the post request and the get request which follows is under ~1 second, session the user, redirect and confirm 'logged in'
				// if ( record 
				// && request.session.auth_token == request.params.auth_token 
				// && record._id == request.params.uid 
				// && (Date.time - request.session.lag) < 1 ){


				if(record && '123abc' == request.params.auth_token && record._id == request.params.uid){
					// Set new Auth token for someone logged in.
					request.session.auth = '5389uhyjw0ju0589j03h89jw3890'
					response.redirect('/dashboard')
				}	
			})

		},
		edit: function(request, response){
			console.log("Server / Ctrl / Sessions - Edit")
		},
		update: function(request, response){
			console.log("Server / Ctrl / Sessions - Update")
		},
		show: function(request, response){
			console.log("Server / Ctrl / Sessions - Show")
		},
		destroy: function(request, response){
			console.log("Server / Ctrl / Sessions - Destroy")

		},

	
	}

})();