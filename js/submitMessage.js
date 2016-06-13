var Chatty = (function () {

  Chatty.printMessage = function (message) {

    var numMessages = document.getElementsByClassName("message").length;

    console.log("#messages", numMessages);

    var messageContainer = document.getElementById("messagesDiv");

    var timeStamp = new Date();
    var time = timeStamp.toUTCString();
    var htmlString =  `<div id="message-${numMessages}" class="message">`;
    htmlString += `<div class="content">${message} | ${time}</div>`;
    htmlString += `<button type="edit" id="edit-${counter}">Edit</button>`;
    htmlString += `<button type="submit" id=
    delete-${numMessages}>Delete</button>`;
    htmlString += `</div>`;

    messageContainer.innerHTML += htmlString;

    Chatty.deleteCounter();
    Chatty.editCounter();

  };

  return Chatty;

})(Chatty);