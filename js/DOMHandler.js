var elMessageInput = document.getElementById('messageInput'),
	elThemeCheck = document.getElementById('themeCheck'),
	elLargeTextCheck = document.getElementById('largeTextCheck'),
	elBtnClear = document.getElementById('clearButton'),
	elMessagesDiv = document.getElementById('messagesDiv'),
	elUserSelect = document.getElementById('userSelect'),
	editEnabled = false,
	messageCounter = 0;
	var literalMessageCounter = 0;

elThemeCheck.addEventListener("click", themeCheckHandler);
elLargeTextCheck.addEventListener("click", textChangeHandler);
elBtnClear.addEventListener("click", clearButtonHandler);
elMessageInput.addEventListener("keyup", messageInputHandler);

function themeCheckHandler() {
	if (elThemeCheck.checked === true) {
		elMessagesDiv.classList.add('darkTheme');
	} else if (elThemeCheck.checked === false) {
		elMessagesDiv.classList.remove('darkTheme');
	}
} 

function textChangeHandler() {
	if (elLargeTextCheck.checked === true) {
		elMessagesDiv.classList.add('largeText');
	} else if (elLargeTextCheck.checked === false) {
		elMessagesDiv.classList.remove('largeText');
	}
} 

function clearButtonHandler() {
	// var el = document.getElementsByClassName('message');
	// for (var x = el.length - 1; x > -1; x--) {
	// 	el[x].remove();
	// }
	elMessagesDiv.innerHTML = '';
	Chatty.messages = [];
} 

function messageInputHandler(event) {
	var message = elMessageInput.value;
	if (event.keyCode === 13) {
		if (message.length > 0) {
			if (editEnabled) {
				Chatty.commitEdit(message);
			} else {
				Chatty.newUIMessage(message, "Dan");
				// Chatty.writeMessages(message);
			}
		} else {
			alert("There is no message to add.");
		}
		elMessageInput.value = '';
	}
}

// need to test for message length
function isValid(message) {
	return true;
}

function addEditDeleteHandlers() {
	var elBtnEdit = document.getElementsByClassName('btnEdit');
	for (var x = 0; x < elBtnEdit.length; x++) {
		elBtnEdit[x].addEventListener('click', Chatty.editMessage);
	}
	var elBtnDelete = document.getElementsByClassName('btnDelete');
	for (var i = 0; i < elBtnDelete.length; i++) {
		elBtnDelete[i].addEventListener('click', Chatty.deleteMessage);
	}
}

function loadUserSelectElement() {
	var myArray = Chatty.getUsers();
	myArray.forEach(function(obj) {
		elUserSelect.innerHTML += getOptionString(obj.name);
	});
}

function getOptionString(name) {
	return `<option value="${name}">${name}</option>`;
}
