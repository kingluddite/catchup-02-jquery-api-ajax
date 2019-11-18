$(document).ready(function() {
  console.log("click code works!");
  $("#name-btn").click(function() {
    $("#name").html("John Jacob Jingleheimer-Schmidt");
  });
  $("#next-question").click(function() {
    $("#name").html(
      "What if the button was dynamically added to the page? How would we alter our code?"
    );
  });
});
