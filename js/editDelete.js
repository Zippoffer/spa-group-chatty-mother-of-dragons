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
		var timeStamp = new Date();
    	var time = timeStamp.toUTCString();
		messageToBeEdited.innerHTML = `${message} -- edited @ ${time}`;
		Chatty.messages[idToBeEdited - 1].message = `${message} -- edited @ ${time}`;
		editEnabled = false;
	};

	return chat;

})(Chatty || {});

Chatty.loadMessages();