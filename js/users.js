var chatty = (function(chat) {

	var users = [];
	var xhr = new XMLHttpRequest();

	chat.readUsers = function() {
		xhr.open("GET", "js/users.json");
		xhr.send();
		xhr.addEventListener("load", chatty.loadUsers);
	};
	chat.loadUsers = function(event) {
		var obj = JSON.parse(this.responseText);
		var tempArray = obj.users;
		tempArray.forEach((temp) => users.push(temp));
	};
	chat.getUsers = function() {
		return users;
	};

	return chat;

})(Chatty || {});