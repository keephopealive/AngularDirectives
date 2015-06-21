module.exports = (function() {
	return {
		index: function(request, response){
			// var query = "SELECT * FROM forums"
	  	 //    connection.query(query, function (err, rows) {
		 //        if (err) {
		 //          console.log("Connot execute", err)
		 //        }
		 //        else {

		 //        }
			// })
	    },
	    general: function(request, response){
	    	var query = "SELECT * FROM threads LEFT JOIN posts ON threads.id = posts.thread_id WHERE threads.title = 'General' ORDER BY rating DESC, created_at ASC";
	    	connection.query(query, function (err, rows){
	    		if (err) 
	    			response.json(err)
				else
	    			response.json(rows)
	    	})
	    },
	    allthreads: function(request, response){
	    	
	    	var query = "SELECT * FROM threads LEFT JOIN posts ON threads.id = posts.thread_id WHERE threads.title = 'General' ORDER BY rating DESC, created_at ASC; SELECT * FROM threads LEFT JOIN posts ON threads.id = posts.thread_id WHERE threads.title = 'Code' ORDER BY rating DESC, created_at ASC";
	    	connection.query(query, function (err, rows){
	    		console.log("HERE - ROWS: ", rows)
	    		if (err) 
	    			response.json(err)
				else
	    			response.json(rows)
	    	})
	    },
	    getPostnComments: function(request, response){
	    	console.log(request.params)
	    	var query = "SELECT * FROM posts WHERE id = " + request.params.id + "; SELECT * FROM comments WHERE comments.post_id = " + request.params.id + " ORDER BY rating DESC;"; 
	    	console.log(query)
	    	connection.query(query, function (err, results){
	    		console.log(results)
	    		if (err) 
	    			response.json(err)
				else
	    			response.json(results)
	    	})
	    },
	    // addComment: function(request, response){
	    // 	console.log(request.body)
	    // 	response.json("Win")
	    // }

	}
})()