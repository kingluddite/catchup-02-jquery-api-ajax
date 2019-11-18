$(document).ready(function() {
  console.log("click code works!");

  var randNum = Math.floor(Math.random() * 60);

  $.ajax({
    url: "https://swapi.co/api/planets/" + randNum,
    method: "GET"
  }).then(function(response) {
    console.log(response);
    $("#root").append("<h2> Planet Name: " + response.name + "</h2>");
    $("#root").append("<p> Terrain: " + response.terrain + "</p>");
    $("#root").append("<p> Population: " + response.population + "</p>");
  });
  // shortcut alternate way
  // $.get("https://swapi.co/api/planets/" + randNum).done(function(data) {
  //   $("#root").append("<h2> Planet Name: " + data.name + "</h2>");
  //   $("#root").append("<p> Terrain: " + data.terrain + "</p>");
  //   $("#root").append("<p> Population: " + data.population + "</p>");
  // });
});
