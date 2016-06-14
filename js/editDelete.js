var Chatty = (function(chat) {

	var messageToBeEdited;
	var idToBeEdited;

	chat.deleteMessage = function(event) {
		var num = parseInt((event.target.id).split('--')[1]);
		for (var i = 0; i < Chatty.messages.length; i++) {
			if (Chatty.messages[i].id === num) {
				Chatty.messages.splice(i,1);
			}
		}
		elMessagesDiv.innerHTML = '';
		Chatty.writeMessages(Chatty.messages);
		// document.getElementById(`message--${num}`).remove();
	};

	chat.editMessage = function(event) {
		editEnabled = true;
		var num = (event.target.id).split('--')[1];
		messageToBeEdited = document.getElementById(`content--${num}`);
		idToBeEdited = num;
		messageInput.value = messageToBeEdited.innerHTML;
		messageInput.focus();
	};

	chat.commitEdit = function(message) {
		messageToBeEdited.innerHTML = message;
		console.log('id to be edited', idToBeEdited);
		console.log('before', Chatty.messages[idToBeEdited].message);
		Chatty.messages[idToBeEdited - 1].message = message;
		console.log('after', Chatty.messages[idToBeEdited].message);
		editEnabled = false;
	};

	return chat;

})(Chatty || {});

Chatty.loadMessages();