var chatty = (function(chat) {

	var users = [];

	chat.readUsers = function() {
		var xhr = new XMLHttpRequest();
		xhr.open("GET", "js/users.js");
		xhr.send();
		xhr.addEventListener("load", loadUsers);
	};
	chat.loadUsers = function(response) {
		console.log(response);
	};

	return chat;

})(chatty || {});