var Chatty = (function (chat) {

  chat.messages = [];

  chat.writeMessages = function (messArray) {
    console.log(messArray);
    var timeStamp = new Date();
    var time = timeStamp.toUTCString();
    for (var x = 0; x < messArray.length; x++) {
      elMessagesDiv.innerHTML += Chatty.getHtmlString(messArray[x].id, messArray[x].message, time, messArray[x].user);
    }    
    // elMessagesDiv.innerHTML += chat.getHtmlString(message,time);
    addEditDeleteHandlers();
  };

  chat.getHtmlString = function(id, message, time, user) {
    messageCounter++;
    var string = `<div id="message--${id}" class="message">
                    <div class="user">${user}</div>
                    <div id="content--${id}" class="content">${message}</div> 
                    <div class="time">${time}</div>
                    <button type="edit" id="edit--${id}" class="btnEdit">Edit</button>
                    <button type="submit" id="delete--${id}" class="btnDelete">Delete</button>
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

  chat.newUIMessage = function(mess, user) {
    var tempObject = {};
    tempObject.message = mess;
    tempObject.user = user;
    Chatty.passToArray(tempObject);
    elMessagesDiv.innerHTML = '';
    Chatty.writeMessages(Chatty.getMesssagesArray());
  };

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