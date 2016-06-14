var Chatty = (function (chat) {

  chat.writeMessages = function (message) {
    var timeStamp = new Date();
    var time = timeStamp.toUTCString();
    elMessagesDiv.innerHTML += chat.getHtmlString(message,time);
    var tempDeleteButton = `delete--${messageCounter}`;
    var tempEditButton = `edit--${messageCounter}`;
    document.getElementById(tempDeleteButton).addEventListener('click', Chatty.deleteMessage);
    document.getElementById(tempEditButton).addEventListener('click', Chatty.editMessage);
  };

  chat.getHtmlString = function(message, time) {
    messageCounter++;
    var string = `<div id="message--${messageCounter}" class="message">
                    <div id="content--${messageCounter}" class="content">${message}</div> 
                    <div class="time">${time}</div>
                    <button type="edit" id="edit--${messageCounter}">Edit</button>
                    <button type="submit" id="delete--${messageCounter}">Delete</button>
                  </div>`;
    return string;
  }

  return chat;

})(Chatty || {});

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