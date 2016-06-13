var Chatty = (function () {

  Chatty.printMessage = function (message) {


    var numMessages = document.getElementsByClassName("message").length;
    var messageContainer = document.getElementById("messagesDiv");
    var timeStamp = new Date();
    var time = timeStamp.toUTCString();
    var htmlString =  `<div id="message-${numMessages}" class="message">`;
    htmlString += `<div class="content">${message}</div> <div class="time">${time}</div>`;
    htmlString += `<button type="edit" id="edit-${numMessages}">Edit</button>`;
    htmlString += `<button type="submit" id=
    delete-${numMessages}>Delete</button>`;
    htmlString += `</div>`;

    messageContainer.innerHTML += htmlString;

    Chatty.deleteCounter();
    Chatty.editCounter();
  };

  return Chatty;

})(Chatty);