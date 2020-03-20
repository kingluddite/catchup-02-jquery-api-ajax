$(document).ready(function() {
  console.log('click code works!');
  $.ajax({
    url: 'https://pokeapi.co/api/v2/pokemon-habitat/4/',
    method: 'GET'
  }).then(function(response) {
    console.log(response);
    var speciesArr = response.pokemon_species;
    for (var i = 0; i < speciesArr.length; i++) {
      $('#root').append('<p>' + speciesArr[i].name + '</p>');
    }
  });
  // shortcut alternate way
  // $.get("https://pokeapi.co/api/v2/pokemon-habitat/4/").done(function(data) {
  //   console.log(data);
  //   var speciesArr = data.pokemon_species;
  //   for (var i = 0; i < speciesArr.length; i++) {
  //     $("#root").append("<p>" + speciesArr[i].name + "</p>");
  //   }
  // });
});

// $ git checkout 23-star-wars-activity-1-question
