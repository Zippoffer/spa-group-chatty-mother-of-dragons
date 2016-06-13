var elMessageInput = document.getElementById('messageInput'),
	elThemeCheck = document.getElementById('themeCheck'),
	elLargeTextCheck = document.getElementById('largeTextCheck'),
	elBtnClear = document.getElementById('clearButton'),
	elMessagesDiv = document.getElementById('messagesDiv'),
	elUserSelect = document.getElementById('userSelect');


console.log(elLargeTextCheck);
elThemeCheck.addEventListener("click", themeCheckHandler);
elLargeTextCheck.addEventListener("click", textChangeHandler);
elBtnClear.addEventListener("click", clearButtonHandler);
elMessageInput.addEventListener("keyup", messageInputHandler);
// elUserSelect.addEventListener();

function themeCheckHandler() {
	console.log('theme');
} 
function textChangeHandler() {
	console.log('text');
} 
function clearButtonHandler() {
	var el = document.getElementsByClassName('message');
	for (var x = el.length - 1; x > -1; x--) {
		console.log(x);
		console.log(el[x]);
		el[x].remove();
	}
} 
function messageInputHandler(event) {
	var message = elMessageInput.value;
	if (event.keyCode === 13) {
		if (isValid(message)) {
			Chatty.writeMessages(message);
		}
	}
}

function isValid(message) {
	return true;
}