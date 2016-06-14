var Chatty = (function(chat) {

	console.log('editDelete.js');

	chat.deleteMessage = function(event) {
		var num = (event.target.id).split('--')[1];
		console.log(num);
		document.getElementById(`message--${num}`).remove();
	};

	chat.editMessage = function() {
		console.log('editing');
	}

	return chat;

})(Chatty || {});

Chatty.loadMessages();