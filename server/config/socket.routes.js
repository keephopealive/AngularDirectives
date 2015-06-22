module.exports = (function(app) {
	var users = [];

	io.sockets.on('connection', function(socket) { // on connection
		console.log(socket.id);
		socket.on('add_user', function(user){
			console.log("@@@@ ", user)
			users.push({socket: socket.id, name:user.newUser})
			console.log(users)
			io.emit('update_users_list', users)
		})
		
		socket.on('disconnect', function() { 
			for(index in users){
				if(socket.id == users[index].socket){
					users.splice(index, 1)
				}
			} 
			io.emit('update_users_list', users)
		})

		socket.on('msg_from_client', function(msg){
			io.emit('add_msg_to_chat', msg)
		})

		// (Action) Emit to Client - Response to Client who emitted 'button_clicked'
		// socket.emit('server_response', {response: "Working"}); 
	    
	    // (Action) Broadcast to all except Client (who emitted 'button_clicked')
		// socket.broadcast.emit('server_response', {response: "Working"}); 
	    
	    // (Action) Broadcast to all including Client (who emitted 'button_clicked') 
		// io.emit('server_response', {response: "Working"});


	});


})
