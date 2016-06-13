var elTextInput = document.getElementById('messageInput'),
	elThemeCheck = document.getElementById('themeCheck'),
	elLargeTextCheck = document.getElementById('largeTextCheck'),
	elBtnClear = document.getElementById('btnClear'),
	elMessagesDiv = document.getElementById('messagesDiv'),
	elUserSelect = document.getElementById('userSelect');

  //event listeners

  elTextInput.addEventListener("keyup", submitOnEnter);
  function submitOnEnter (event) {
    if(event.keyCode === 13) {
      Chatty.printMessage(elTextInput.value);
    }
  }