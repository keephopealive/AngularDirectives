module.exports = (function() {
	return {
	    retrieve: function(request, response){
	    	console.log("S | threads.js - retrieve:", request.body.threadName);
	    	var query = "SELECT * FROM threads LEFT JOIN posts ON threads.id = posts.thread_id WHERE threads.title = '"+request.body.threadName+"' ORDER BY rating DESC, created_at ASC";
	    	connection.query(query, function (err, rows){
	    		if (err) 
	    			response.json(err)
				else
	    			response.json(rows)
	    	})
	    },
	    getPostComments: function(request, response){
	    	var query = "SELECT * FROM posts WHERE id = " + request.params.id + "; SELECT * FROM comments WHERE comments.post_id = " + request.params.id + " ORDER BY rating DESC;"; 
	    	connection.query(query, function (err, results){
	    		console.log(results)
	    		if (err) {
					console.log("@@@@",err)

	    			response.json(err)
	    		}

				else{
					console.log("@@@@",results)
	    			response.json(results)
				}
	    	})
	    }

	}
})()