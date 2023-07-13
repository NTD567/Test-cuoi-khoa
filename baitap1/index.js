function isPrime(num) {
    if (num < 2) {
      return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  }
  
  function calculateSum() {
    const number1 = parseInt(document.getElementById('number1').value);
    const number2 = parseInt(document.getElementById('number2').value);
  
    let sum = 0;
    for (let i = number1; i <= number2; i++) {
      if (isPrime(i)) {
        sum += i;
      }
    }
  
    document.getElementById('result').innerHTML = `Tổng các số nguyên tố trong khoảng từ ${number1} đến ${number2} là: ${sum}`;
  }
  