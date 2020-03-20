# Activity 1 Review

## jQuery append()
```
<h2>Greetings</h2>
<div class="container">
  <div class="inner">Hello</div>
  <div class="inner">Goodbye</div>
</div>
<script>
$( ".inner" ).append( "<p>Test</p>" );
</script>
```

## jQuery css()
```
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>css demo</title>
  <style>
  div {
    width: 60px;
    height: 60px;
    margin: 5px;
    float: left;
  }
  </style>
  <script src="https://code.jquery.com/jquery-3.4.1.js"></script>
</head>
<body>

<span id="result">&nbsp;</span>
<div style="background-color:blue;"></div>
<div style="background-color:rgb(15,99,30);"></div>
<div style="background-color:#123456;"></div>
<div style="background-color:#f11;"></div>

<script>
$( "div" ).click(function() {
  var color = $( this ).css( "background-color" );
  $( "#result" ).html( "That div is <span style='color:" +
    color + ";'>" + color + "</span>." );
});
</script>

</body>
</html>
```

## jQuery click()
```
<div id="target">
  Click here
</div>
<div id="other">
  Trigger the handler
</div>
<script>
$( "#target" ).click(function() {
  alert( "Handler for .click() called." );
});
</script>

### The callback
* Discuss the format of the callback function that it takes as a parameter

## Next - Activity 2
`$ git checkout 11-activity-two-question`
