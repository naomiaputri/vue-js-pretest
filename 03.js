<script>
var input = document.getElementById('input');
var mirror = document.getElementById('mirror');

input.addEventListener('input', function(event) {
  mirror.innerText = event.target.value.split('').reverse().join('');
});
</script>

