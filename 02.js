<!DOCTYPE html>
<html>
<body>

<p>Klik tombol untuk menjalankan fungsi.</p>

<button onclick="myFunction()">Try it</button>

<p id="test"></p>

<script>
var word = ["saya", "ingin", "makan", "nasi", "goreng"];
document.getElementById("test").innerHTML = word;

function myFunction() {
  document.getElementById("test").innerHTML = word.reverse().join(" ");
}
</script>

</body>
</html>
