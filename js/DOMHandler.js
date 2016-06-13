var elMessageInput = document.getElementById('messageInput'),
	elThemeCheck = document.getElementById('themeCheck'),
	elLargeTextCheck = document.getElementById('largeTextCheck'),
	elBtnClear = document.getElementById('clearButton'),
	elMessagesDiv = document.getElementById('messagesDiv'),
	elUserSelect = document.getElementById('userSelect');

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
	var el = document.getElementsByClassName('message');
	for (var x = el.length - 1; x > -1; x--) {
		el[x].remove();
	}
} 

function messageInputHandler(event) {
	var message = elMessageInput.value;
	if (event.keyCode === 13) {
		if (isValid(message)) {
			if (Chatty.editEnabled === false) {
				Chatty.printMessage(message);
			} else {
				Chatty.printEdit(message);
			}
		}
		elMessageInput.value = '';
	}
}

function isValid(message) {
	return true;
}
