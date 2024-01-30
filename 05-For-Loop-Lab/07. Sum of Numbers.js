function solve(input) {

    let numAsString = input[0];
    let sumOfDigits = 0;
    
    for (let i =0; i <numAsString.length; i++) {
      let lastDigit = Number(numAsString[i]);
      sumOfDigits += lastDigit;
      }
  
    console.log("The sum of the digits is:" + sumOfDigits);
  }