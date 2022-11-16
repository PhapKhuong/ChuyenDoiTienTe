/**
 * let input = +document.getElementById('amount').value;
 * let fromCurrency = document.getElementById('fCurrency').value;
 * let toCurrency = document.getElementById('tCurrency').value;
 * let rate;
 * =============> Khai báo biến bên ngoài function như thế này có được không
 * =============> Muốn cho toàn bộ đoạn code thụt vào 1 ô hoặc cách ra 1 ô nữa thì gõ phím tắt gì
 */

function doSth()
    {
        let input = +document.getElementById('amount').value;
        let fromCurrency = document.getElementById('fCurrency').value;
        let toCurrency = document.getElementById('tCurrency').value;
        let rate;
        if (fromCurrency == "VND")
            {
                if (toCurrency == "VND") {rate = 1;}
                else if (toCurrency == "USD") {rate = 0.2;}
                else {rate = 0.4;}
            }
         else if (fromCurrency == "USD")
            {
                if (toCurrency == "VND") {rate = 5;}
                else if (toCurrency == "USD") {rate = 1;}
                else {rate = 2;}
            }
        else
            {
                if (toCurrency == "VND") {rate = 2.5;}
                else if (toCurrency == "USD") {rate = 0.5;}
                else {rate = 1;}
            }
        let output = input * rate
        document.getElementById('result').innerText = "Result: " + output + toCurrency
    }