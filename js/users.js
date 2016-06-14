var Chatty = (function(chat) {

	var users = [];
	var xhr = new XMLHttpRequest();

	chat.readUsers = function() {
		xhr.open("GET", "js/users.json");
		xhr.send();
		xhr.addEventListener("load", Chatty.loadUsers);
	};
	chat.loadUsers = function(event) {
		var obj = JSON.parse(this.responseText);
		console.log(obj);
		var tempArray = obj.users;
		tempArray.forEach((temp) => users.push(temp));
	};
	chat.getUsers = function() {
		return users;
	};

	return chat;

})(Chatty || {});

Chatty.readUsers();