<script>
var word = ["saya", "ingin", "makan", "nasi", "goreng"];
document.getElementById("test").innerHTML = word;

function myFunction() {
  document.getElementById("test").innerHTML = word.reverse().join(" ");
}
</script>
