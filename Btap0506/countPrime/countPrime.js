function Prime() {
    function checkPrime(n) {
        if (n<2) return false;
        if (n==2) return true;
        for (let i=2; i<=Math.sqrt(n); i++)
            if (n%i==0) return false;
        return true;
    }
    
    let n = +document.getElementById("prime").value;
    let count=0, i=1;
    let text = n + " số nguyên tố đầu tiên là: ";
    while (i>0) {
        if(checkPrime(i)) {
            count++;
            if (count > 1) text += " , ";
            text += i;
        }
        if (count==n) break;
        i++;
    }
    document.getElementById('result').innerHTML = text;
}