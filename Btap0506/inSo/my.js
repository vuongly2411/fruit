function run() {
    let n = document.getElementById('number1').value; 
    let m = document.getElementById('number2').value;
    for (let i=n; i<=m; i++) {
        if ((i%3==0) && (i%5==0))
            document.write("FizzBuzz <br>");
        else if (i%3==0)
            document.write(" Fizz <br>");
        else if (i%5==0)
            document.write(" Buzz <br>");
        else document.write(i+"<br>")
    }
}
