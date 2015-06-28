
module.exports = function(app) {
  	var users = require('../controllers/users.js');
  	var sessions = require('../controllers/sessions.js');
	var threads = require('../controllers/threads.js');

  	// var sql = require('../config/sql.js');

	app
	.post('/threads/retrieve.json', function(request, response) { 
		console.log("S | routes.js - app.post('/threads/retrieve.json')");
		threads.retrieve(request, response);
	})
	.get('/post/:id',function(request, response) { configurable
		threads.getPostComments(request, response)
	})

// User
    // Index
	.get('/users', function(request, response) { users.index(request, response) })
	// New
	.get('/users/new', function(request, response) { users.create(request, response) })
	// Show
	.get('/users/:id', function(request, response) { users.show(request, response) })
	// Edit 
	.post('/users/:id/edit', function(request, response) { users.update(request, response) })
	// Create
	.post('/users', function(request, response) { users.create(request, response) })	
	// Destroy .delete('/users/:id')
	.post('/users/:id/destroy', function(request, response) { users.destroy(request, response) })
	// Update .put/patch('/users/:id') 
	.post('/users/:id/update', function(request, response) { users.update(request, response) })

// Session

	// Index
	.get('/sessions', function(request, response) { sessions.index(request, response) })
	// Create
	.get('/sessions/authenticated/:auth_token/:uid', function(request, response) { 
		sessions.create(request, response) 
	})	

	// Authenticate
	.post('/sessions/authenticate', function(request, response) { sessions.authenticate(request, response) })	
	// Destroy .delete('/sessions/:id')
	.post('/sessions/:id/destroy', function(request, response) { sessions.destroy(request, response) })
	// Update .put/patch('/sessions/:id') 
	.post('/sessions/:id/update', function(request, response) { sessions.update(request, response) })

  
// Threads - CRUD

	// Get all General Posts

	// Get Post and it's Comments
	// .get('/threads/getPostnComments.json/:id',function(request, response) { threads.getPostnComments(request, response) })

 //  // Index (R)
	// .get('/threads', function(request, response) { threads.index(request, response) })
	// // Create (C)
	// .post('/threads', function(request, response) { threads.create(request, response) })	
	// // Destroy .delete('/threads/:id') (D)
	// .post('/threads/:id/destroy', function(request, response) { threads.destroy(request, response) })
	// // Update .put/patch('/threads/:id') (U)
	// .post('/threads/:id/update', function(request, response) { threads.update(request, response) })

	// .post('/threads/addComment.json', function(request, response) { threads.addComment(request, response) })
	



// WILDCARD Redirect to Mask unused urls.
	.get('/*', function(request, response){
		response.redirect('/')
	})
	.post('/*', function(request, response){
		response.redirect('/')
	})

}