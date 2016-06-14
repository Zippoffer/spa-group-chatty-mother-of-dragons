var Chatty = (function(chat) {

    chat.loadMessages = function () {
      var messageLoader = new XMLHttpRequest();
      messageLoader.open("GET", "js/messages.json");
      messageLoader.send();
      messageLoader.addEventListener("load", function () {
        tempArray = JSON.parse(event.target.responseText).messages;
        tempArray.forEach(Chatty.passToArray);
        // messages.forEach((message) => Chatty.writeMessages(message));
      });
    };

    return chat;

  }
)(Chatty || {});