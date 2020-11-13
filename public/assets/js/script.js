//------------------------------------------------
// Attaching handlers after DOM is loaded
//------------------------------------------------

$(function () {
  // handling the save burger button
  $(".save-form").on("submit", function (event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    const newBurger = {
      burger: $("#burger").val().trim(),
    };

    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger,
    }).then(function () {
      console.log(`created new burger: ${newBurger.burger}`);
      // Reload the page to get the updated list
      location.reload();
    });
  });

  // handling the devour button
  $(".devour").on("click", function (event) {
    // Get the ID from the button
    const id = $(this).data("id");
    const newDevoured = $(this).data("devoured");

    const newDevouredState = {
      devoured: newDevoured,
    };

    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newDevouredState,
    }).then(function () {
      console.log(`changed devoured to: ${newDevoured}`);
      // Reload the page to get the updated list
      location.reload();
    });
  });
});
