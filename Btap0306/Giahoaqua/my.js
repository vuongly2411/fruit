function checkFruit() {
    let fruit = document.getElementById('fruit').value;
    switch(fruit) {
        case 'Ổi': case 'Dưa Hấu':
            document.getElementById('result').innerHTML = '20000 VNĐ/kg';
            break;
        case 'Táo': case 'Xoài':
            document.getElementById('result').innerHTML = '30000 VNĐ/kg';
            break;
        case 'Cam': case 'Chôm Chôm':
            document.getElementById('result').innerHTML = '40000 VNĐ/kg';
            break;
        case 'Măng Cụt':
            document.getElementById('result').innerHTML = '50000 VNĐ/kg';
            break;
    }
}