var Chatty = (function () {

  

  Chatty.writeMessages = function (message) {
    console.log("writing: ", message);
    var messageContainer = document.getElementById("messagesDiv");
    var htmlString = "";

    for (var i = 0; i < message.length; i++){
      var counter = i;
      // var timeStamp = Math.floor(Date.now() / 1000);
      var timeStamp = new Date();
      var time = timeStamp.toUTCString();
      htmlString += `<div id="message-${counter}" class="message">`;
      htmlString += `<div class="content">${message[i]} | ${time}</div>`;
      htmlString += `<button type="submit">Delete</button>`;
      htmlString += `</div>`;
    }
    messageContainer.innerHTML = htmlString;
  };

  return Chatty;
})(Chatty);

Chatty.loadMessages(Chatty.writeMessages);