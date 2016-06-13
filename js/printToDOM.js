var Chatty = (function () {

  

  Chatty.writeMessages = function (message) {
    console.log("writing: ", message);
    var messageContainer = document.getElementById("messagesDiv");
    var htmlString = "";

    for (var i = 0; i < message.length; i++){
      var counter = i;
      htmlString += `<div id="message-${counter}" class="message">`;
      htmlString += `<div class="content">${message[i]}</div>`;
      htmlString += `<button type="submit">Delete</button>`;
      htmlString += `</div>`;
    }
    messageContainer.innerHTML = htmlString;
  };

  return Chatty;
})(Chatty);