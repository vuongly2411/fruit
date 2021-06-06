function Prime() {
    function checkPrime(n) {
        if (n<2) return false;
        if (n==2) return true;
        for (let i=2; i<=Math.sqrt(n); i++)
            if (n%i==0) return false;
        return true;
    }
    
    let n = +document.getElementById("prime").value;
    if (checkPrime(n)) 
        document.getElementById('result').innerHTML = n + " is a prime number";
    else 
        document.getElementById('result').innerHTML = n + " is not a prime number";
}