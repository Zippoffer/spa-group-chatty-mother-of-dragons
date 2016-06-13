var Chatty = (function () {

  Chatty.editEnabled = false;

  Chatty.selectEdit;

  Chatty.editDiv;

  Chatty.editCounter = function (content) {
  Chatty.editEnabled = true;
  // console.log("edit enabled: ", Chatty.editEnabled );
    var messages = document.getElementsByClassName("message");

    for (var i = 0; i < messages.length; i++) {
      var counter = i;
      var editCounter = document.getElementById( `edit-${counter}` );
      editCounter.addEventListener("click", editMessage);
      function editMessage () {
        // var messageEdit = document.getElementById( `` )
        elMessageInput.focus();
        var editButton = event.target;
        console.log("button: ", editButton);
        var messageToEdit = editButton.parentNode.getElementsByClassName("content");
        // messageToEdit[0].classList.add("to-edit");
        messageToEdit = messageToEdit[0];
        Chatty.selectEdit = messageToEdit;
        messageToEdit = messageToEdit.innerHTML;
        Chatty.editDiv = event.target;
        // console.log("message: ", messageToEdit);
        // elMessageInput.setAttribute("onkeyup", "Chatty.replaceMess" );
        elMessageInput.value = messageToEdit;
        // messageToEdit.innerHTML = 
      }

    }

  },

  Chatty.printEdit = function () {
    Chatty.editEnabled = true;
    var newEdit = elMessageInput.value;

    // var messageToEdit = editButton.parentNode.getElementsByClassName("content");
    // var messageToEdit = document.getElementsByClassName("to-edit");
    // messageToEdit = messageToEdit[0].innerHTML;
    // Chatty.selectEdit = elMessageInput.value;

    console.log("editDiv", Chatty.editDiv);
    console.log("select edit: ", Chatty.selectEdit);
    // newEdit = elMessageInput.value;
    Chatty.selectEdit.innerHTML = newEdit;
    console.log("message printEdit: ", newEdit);
    elMessageInput.value = "";
    Chatty.editEnabled = false;
  }

  return Chatty;
})(Chatty);

Chatty.editCounter();

// var messages = document.getElementsByClassName("message");

//     for (var i = 0; i < messages.length; i++) {
//       var counter = i;
//       var deleteCounter = document.getElementById( `delete-${i}` );
//       deleteCounter.addEventListener("click", deleteMessage);
//       function deleteMessage () {
//         var deleteButton = event.target ;
//         var messageToDelete = deleteButton.parentNode;
//         messageToDelete.parentNode.removeChild(messageToDelete);
//       }
//     }