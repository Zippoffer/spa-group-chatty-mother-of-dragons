var Chatty = (function () {

  Chatty.writeMessages = function (message) {
    var messageContainer = document.getElementById("messagesDiv");
    var htmlString = "";

    for (var i = 0; i < message.length; i++){
      var counter = i;
      // var timeStamp = Math.floor(Date.now() / 1000);
      var timeStamp = new Date();
      var time = timeStamp.toUTCString();
      htmlString += `<div id="message-${counter}" class="message">`;
      htmlString += `<div class="content">${message[i]} | ${time}</div>`;
      htmlString += `<button type="edit" id="edit-${counter}">Edit</button>`;
      htmlString += `<button type="submit" id="delete-${counter}">Delete</button>`;
      htmlString += `</div>`;
    }
    messageContainer.innerHTML = htmlString;
    Chatty.deleteCounter();
    Chatty.editCounter();
  };


  Chatty.deleteCounter = function () {
    var messages = document.getElementsByClassName("message");
    for (var i = 0; i < messages.length; i++) {
      var counter = i;
      console.log("delete1: ", i);
      var deleteCounter = document.getElementById( `delete-${i}` );
      deleteCounter.addEventListener("click", deleteMessage);
      function deleteMessage () {
        // var messageToDelete = document.getElementById( event.target.id );
        var deleteButton = event.target ;
        console.log("deleteButton: ", deleteButton);

        var messageToDelete = deleteButton.parentNode;
        console.log("messageToDelete: ", messageToDelete );

        messageToDelete.parentNode.removeChild(messageToDelete);
      }
    }
  };

  return Chatty;
})(Chatty);

Chatty.loadMessages(Chatty.writeMessages);