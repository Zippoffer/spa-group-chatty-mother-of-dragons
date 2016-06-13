var Chatty = (function () {

  Chatty.writeMessages = function (message) {
    var messageContainer = document.getElementById("messagesDiv");
    var htmlString = "";

    for (var i = 0; i < message.length; i++){
      var counter = i;
      var timeStamp = new Date();
      var time = timeStamp.toUTCString();
      htmlString += `<div id="message-${counter}" class="message">`;
      htmlString += `<div class="content">${message[i]} | ${time}</div>`;
      htmlString += `<button type="submit" id="delete-${counter}">Delete</button>`;
      htmlString += `</div>`;
    }

    messageContainer.innerHTML = htmlString;
    Chatty.deleteCounter();
  };

  Chatty.deleteCounter = function () {
    var messages = document.getElementsByClassName("message");

    for (var i = 0; i < messages.length; i++) {
      var counter = i;
      var deleteCounter = document.getElementById( `delete-${i}` );
      deleteCounter.addEventListener("click", deleteMessage);
      function deleteMessage () {
        var deleteButton = event.target ;
        var messageToDelete = deleteButton.parentNode;
        messageToDelete.parentNode.removeChild(messageToDelete);
      }
    }
    
  };

  return Chatty;
})(Chatty);

Chatty.loadMessages(Chatty.writeMessages);