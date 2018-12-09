console.log("BURGERS HTML JAVASCRIPT FILE");

$(function() {
    // DELETE BURGER SECTION
    $(".delburger").on("click", function(event) {
      // Get the ID from the button.
      var id = $(this).data("burgerid");
      console.log("burger clicked and ID: ", id);
      // Send the DELETE request.
      $.ajax("/api/burgers/" + id, {
        type: "DELETE"
      }).then(
        function() {
          console.log("deleted id ", id);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });

    // CREATE BURGERS SECTION
    $("#createburger").on("submit", function(event) {
      console.log("create burgers clicked");
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
      // [name=plan] will find an element with a "name" attribute equal to the string "plan"
      var newBurger = {
        burger_name: $("[name='burger_name']").val().trim()
      };
      console.log(newBurger);
      // Send the POST request.
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(
        function() {
          console.log("created new burger");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });

    // UPDATE BURGERS SECTION.
    $("#updateburgers").on("submit", function(event) {
      console.log("update burgers clicked");
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
      let id = $("[name=id]").val().trim();
      let updatedBurger = {
        burger_name:  '"' + $("[name=update_burger]").val().trim() + '"'
      };

      console.log("updatedBurger", updatedBurger);

      // Send the PUT request.
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: updatedBurger
      }).then(
        function() {
          console.log("updated id ", id);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });

    // DEVOUR BURGERS SECTION.
    $(".devourburger").on("click", function(event) {
      console.log("Devour burger clicked");
      event.preventDefault();
      var id = $(this).data("burgerid");
      // Send the PUT request.
      $.ajax("/api/burgers/devour/" + id, {
        type: "PUT"
      }).then(
        function() {
          console.log("updated id ", id);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
});