$(document).ready(function() {
  console.log("click code works!");
  var root = document.querySelector("#empty-area");
  // innerHTML is vanilla JavaScript (not jQuery)
  // innerHTML is a property not a method
  root.innerHTML(
    "<button id='name-btn'>Click to see my name</button><div id='name'></div>"
  );

  // don't forget the # for an id $("#empty-area");
  $("empty-area").on("click", "#name-btn", function() {
    $("#name").html("John Jacob Jingleheimer-Schmidt");
  });
});
