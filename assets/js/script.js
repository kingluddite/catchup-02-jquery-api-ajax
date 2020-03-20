$(document).ready(function() {
  console.log('click code works!');
  // we need to use ajax with jquery
  // we are requesting info from the API so we need GET
  // We are waiting from data so we'll need to use then (promise)
  // in the call back we'll get the response
  // we can log out the response to see if we get our data
  // if we see our data in the log we neet to find "pokemon_species"
  // That should be an array of species so we should use a for loop to iterate through all the species and print out their names inside our element with a "root" id (inside paragraph tags)
  // $ git checkout 21-ajax-demo-live-code
});
