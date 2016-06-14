var Chatty = (function(chat) {

	var messageToBeEdited;

	chat.deleteMessage = function(event) {
		var num = (event.target.id).split('--')[1];
		document.getElementById(`message--${num}`).remove();
	};

	chat.editMessage = function(event) {
		editEnabled = true;
		var num = (event.target.id).split('--')[1];
		messageToBeEdited = document.getElementById(`content--${num}`);
		messageInput.value = messageToBeEdited.innerHTML;
		messageInput.focus();
	};

	chat.commitEdit = function(message) {
		messageToBeEdited.innerHTML = message;
		editEnabled = false;
	};

	return chat;

})(Chatty || {});

Chatty.loadMessages();