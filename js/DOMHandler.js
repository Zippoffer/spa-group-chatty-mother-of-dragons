var elMessageInput = document.getElementById('messageInput'),
	elThemeCheck = document.getElementById('themeCheck'),
	elLargeTextCheck = document.getElementById('largeTextCheck'),
	elBtnClear = document.getElementById('clearButton'),
	elMessagesDiv = document.getElementById('messagesDiv'),
	elUserSelect = document.getElementById('userSelect'),
	elFilter = document.getElementById('filterButton')
	elUnFilter = document.getElementById('unfilter');
	editEnabled = false,
	messageCounter = 0;
	var literalMessageCounter = 0;
	var disableClearButton = false;

elThemeCheck.addEventListener("click", themeCheckHandler);
elLargeTextCheck.addEventListener("click", textChangeHandler);
elBtnClear.addEventListener("click", clearButtonHandler);
elMessageInput.addEventListener("keyup", messageInputHandler);
elUnFilter.addEventListener("click", unfilter)

elFilter.addEventListener("click", filterByUser)

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
	elBtnClear.disabled = true;
	elMessagesDiv.innerHTML = '';
	Chatty.messages = [];
} 

function messageInputHandler(event) {
	var message = elMessageInput.value;
	var messageUser = elUserSelect.value;
	if (event.keyCode === 13) {
		if (message.length > 0) {
			if (editEnabled) {
				Chatty.commitEdit(message);
			} else {
				Chatty.newUIMessage(message, messageUser);
				elBtnClear.disabled = false;
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


function filterByUser() {

	var selUser = elUserSelect.value;
	var newUserArray = [];
	for (var i = 0; i < Chatty.messages.length; i++) {
		if (Chatty.messages[i].user === selUser) {
			newUserArray.push(Chatty.messages[i]);
		};
	};
	elMessagesDiv.innerHTML = "";
	Chatty.writeMessages(newUserArray);

	elUnFilter.classList.remove("hidden");
	elFilter.classList.add("hidden");

};

function unfilter() {

	elMessagesDiv.innerHTML ="";
	Chatty.writeMessages(Chatty.messages);

	elFilter.classList.remove("hidden");
	elUnFilter.classList.add("hidden");
};

