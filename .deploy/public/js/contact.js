(function() {
  $("#send").click(event => {
    if (event) event.preventDefault();

    let visitor = {
      name: $("#name").val(),
      email: $("#email").val(),
      message: $("#message").val()
    };
    $.ajax({
      url: "./api/subscriber",
      type: "POST",
      data: visitor,
      success: function(response) {
        // console.log(JSON.stringify(response));
      },
      error: function(response) {}
    });
  });
})();
