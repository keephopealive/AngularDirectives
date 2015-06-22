var socket = io.connect()

// var userName = prompt('What is your name?')

// socket.emit('add_user', {newUser: userName})

// socket.on('update_users_list', function(users){
// 	console.log('users from server:', users)
// 	$('div.users').html("")
// 	for(index in users)
// 		$('div.users').append("<li>"+users[index].name+"</li>")
// })

// $(document).on('click', 'button', function(){
// 	socket.emit('msg_from_client', { msg: $('input').val(), name: userName} )
// 	$('input').val("") // clears the inputbox
// 	$("input").focus();
// })
// $(document).on('keypress', function(e){
// 	if(e.charCode == 13){
// 		socket.emit('msg_from_client', { msg: $('input').val(), name: userName} )
// 		$('input').val("") // clears the inputbox
// 		$("input").focus();	
// 	}
// })

// socket.on('add_msg_to_chat', function(msg){
// 	$('div.messages').append("<p>"+msg.name+": "+msg.msg+"</p>")
// 	.animate({ scrollTop: $('div.messages')[0].scrollHeight}, 1000);
// })