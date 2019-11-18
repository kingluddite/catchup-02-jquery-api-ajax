$(document).ready(function() {
  console.log("click code works!");
  var root = document.querySelector("#empty-area");
  root.innerHTML =
    "<button id='name-btn'>Click to see my name</button><div id='name'></div>";

  $("#empty-area").on("click", "#name-btn", function() {
    console.log("test");
    $("#name").html("John Jacob Jingleheimer-Schmidt");
  });
});
