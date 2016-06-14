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
		console.log(Chatty.messages.length, (Chatty.messages.length === 0))
		if (Chatty.messages.length === 0) elBtnClear.disabled = true;
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
		console.log(Chatty.messages.findIndex(Chatty.filterByID));
		// var indexObj = Chatty.messages.filter(Chatty.filterByID);
		// console.log(Chatty.messages.indexOf(indexObj));
		// Chatty.messages[idToBeEdited - 1].message = `${message} -- edited @ ${time}`;
		editEnabled = false;
	};

	chat.filterByID = function(obj) {
		return obj.id == idToBeEdited;
	};

	return chat;

})(Chatty || {});

Chatty.loadMessages();