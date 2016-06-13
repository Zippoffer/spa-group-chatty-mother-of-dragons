var Chatty = ( function () {

    var messages = [];

    return {
      getMessages: function () {
        console.log("messages: ", messages );
      },

      loadMessages: function (writing) {
        var messageLoader = new XMLHttpRequest();
        messageLoader.open("GET", "js/messages.json");
        messageLoader.send();

        messageLoader.addEventListener("load", function () {
          messages = JSON.parse(event.target.responseText).messages;
          writing(messages);
        })
      }
    };

  }
)();