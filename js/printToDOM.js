var Chatty = (function (chat) {

  chat.messages = [];

  chat.writeMessages = function (message) {
    var timeStamp = new Date();
    var time = timeStamp.toUTCString();
    elMessagesDiv.innerHTML += chat.getHtmlString(message,time);
    addEditDeleteHandlers();
  };

  chat.getHtmlString = function(message, time) {
    messageCounter++;
    var string = `<div id="message--${messageCounter}" class="message">
                    <div id="content--${messageCounter}" class="content">${message}</div> 
                    <div class="time">${time}</div>
                    <button type="edit" id="edit--${messageCounter}" class="btnEdit">Edit</button>
                    <button type="submit" id="delete--${messageCounter}" class="btnDelete">Delete</button>
                  </div>`;
    return string;
  };

  chat.passToArray = function(arg) {
    messageCounter++;
    var tempMessage = {};
    tempMessage.id = messageCounter;
    tempMessage.user = arg.user;
    tempMessage.message = arg.message;
    Chatty.messages.push(tempMessage);
  };

  chat.getMesssagesArray = function() {
    return Chatty.messages;
  };

  return chat;

})(Chatty || {});

Chatty.loadMessages();

    // messageContainer.innerHTML = htmlString;
    // Chatty.deleteCounter();
    // Chatty.editCounter();

  // chat.deleteCounter = function () {
  //   var messages = document.getElementsByClassName("message");

  //   for (var i = 0; i < messages.length; i++) {
  //     var counter = i;
  //     var deleteCounter = document.getElementById( `delete-${i}` );
  //     deleteCounter.addEventListener("click", deleteMessage);
  //     function deleteMessage () {
  //       var deleteButton = event.target ;
  //       var messageToDelete = deleteButton.parentNode;
  //       messageToDelete.parentNode.removeChild(messageToDelete);
  //     }
  //   }
  // };