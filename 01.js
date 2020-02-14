<!DOCTYPE html>
    <html>
    <body>

    <p>Input grade</p>

    <button onclick="myFunction()">Try it</button>

    <script>


    function myFunction() {

    var data = prompt('Enter your point');
    var grade=getGrade(data);
    alert(grade);
    }
    function getGrade(data) {
        if (data >= 90) {
            return 'A';
        }
        if (data >= 80) {
            return 'B';
        }
        if (data >= 70) {
            return 'C';
        }
        if (data >= 60) {
            return 'D';
        }
        return 'F';
    }

    </script>

    </body>
    </html>
