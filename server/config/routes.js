module.exports = function(app) {
  	var users = require('../controllers/users.js');
  	var sessions = require('../controllers/sessions.js');
	var threads = require('../controllers/threads.js');

  	var sql = require('../config/sql.js');

	

// User

    // Index
	app.get('/users', function(request, response) { users.index(request, response) })
	// New
	app.get('/users/new', function(request, response) { users.create(request, response) })
	// Show
	app.get('/users/:id', function(request, response) { users.show(request, response) })
	// Edit 
	app.post('/users/:id/edit', function(request, response) { users.update(request, response) })
	// Create
	app.post('/users', function(request, response) { users.create(request, response) })	
	// Destroy app.delete('/users/:id')
	app.post('/users/:id/destroy', function(request, response) { users.destroy(request, response) })
	// Update app.put/patch('/users/:id') 
	app.post('/users/:id/update', function(request, response) { users.update(request, response) })

// Session

	// Index
	app.get('/sessions', function(request, response) { sessions.index(request, response) })
	// Create
	app.get('/sessions/authenticated/:auth_token/:uid', function(request, response) { 
		sessions.create(request, response) 
	})	

	// Authenticate
	app.post('/sessions/authenticate', function(request, response) { sessions.authenticate(request, response) })	
	// Destroy app.delete('/sessions/:id')
	app.post('/sessions/:id/destroy', function(request, response) { sessions.destroy(request, response) })
	// Update app.put/patch('/sessions/:id') 
	app.post('/sessions/:id/update', function(request, response) { sessions.update(request, response) })

  
// Threads - CRUD

	// Get all General Posts
	app.get('/threads/general.json',function(request, response) { 
		threads.general(request, response) 
	})
	// Get Post and it's Comments
	app.get('/threads/getPostnComments.json/:id',function(request, response) { threads.getPostnComments(request, response) })

  // Index (R)
	app.get('/threads', function(request, response) { threads.index(request, response) })
	// Create (C)
	app.post('/threads', function(request, response) { threads.create(request, response) })	
	// Destroy app.delete('/threads/:id') (D)
	app.post('/threads/:id/destroy', function(request, response) { threads.destroy(request, response) })
	// Update app.put/patch('/threads/:id') (U)
	app.post('/threads/:id/update', function(request, response) { threads.update(request, response) })

	app.post('/threads/addComment.json', function(request, response) { threads.addComment(request, response) })
	



// WILDCARD Redirect to Mask unused urls.
	app.get('/*', function(request, response){
		response.redirect('/')
	})
	app.post('/*', function(request, response){
		response.redirect('/')
	})

}