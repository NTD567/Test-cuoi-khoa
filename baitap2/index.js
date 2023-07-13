// function numberOneTriangle(n) {
//     if (n < 1 || n > 10) {
//       console.log("Số không hợp lệ. Vui lòng nhập số trong khoảng từ 1 đến 10.");
//       return;
//     }
  
//     for (let i = 1; i <= n; i++) {
//       let row = "";
//       for (let j = 1; j <= i; j++) {
//         row += "* ";
//       }
//       console.log(row);
//     }
//   }
//   numberOneTriangle(6)
  
  function numberOneTriangle(number) {
    if (number < 1 || number > 10) {
      console.log("Số không hợp lệ. Vui lòng nhập số trong khoảng từ 1 đến 10.");
      return;
    }
  
    let triangle = '';
    for (let i = 1; i <= number; i++) {
      triangle += '* '.repeat(i) + '\n';
    }
    console.log(triangle);
  }
  
  // Example usage
  numberOneTriangle(4);
  