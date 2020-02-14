<!DOCTYPE html>
<html>
<head>
<style>
html {
  font-family: sans-serif;
  font-size: 200%;
}

.field {
  padding: 0.5em 0.75em;
  font-size: 1rem;
  color: #0D47A1;
  border: none;
}

.result {
  padding: 0.5em 0.75em;
  text-align: right;
  color: gray;
}

.cols-2 > * {
  float: left;
  width: 40%;
}
</style>
</head>
<body>
<div id="app">
  <div class="cols-2">
    <div id="mirror" class="result">&nbsp;</div>
    <input id="input" class="field" placeholder="Enter some text">
  </div>
</div>

<script>
var input = document.getElementById('input');
var mirror = document.getElementById('mirror');

input.addEventListener('input', function(event) {
  mirror.innerText = event.target.value.split('').reverse().join('');
});
</script>
</body>
</html>
