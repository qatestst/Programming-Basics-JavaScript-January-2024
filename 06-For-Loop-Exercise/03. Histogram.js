function solve(input){

let allnumbersCount = input[0];
let p1 = 0;
let p2 = 0;
let p3 = 0;
let p4 = 0;
let p5 = 0;

for (let i =1; i<= input.length; i++){
    let num = input[i];

    if (num < 200) {
        p1++;
      } else if (num >= 200 && num <= 399) {
        p2++;
      } else if (num >= 400 && num <= 599) {
        p3++;
      } else if (num >= 600 && num <= 799) {
        p4++;
      } else if (num >=800){
        p5++;
      }

}


  // Изчисляване на процентите
  p1 = (p1 / allnumbersCount) * 100;
  p2 = (p2 / allnumbersCount) * 100;
  p3 = (p3 / allnumbersCount) * 100;
  p4 = (p4 / allnumbersCount) * 100;
  p5 = (p5 / allnumbersCount) * 100;
  // Отпечатване на резултата
  console.log(p1.toFixed(2) + "%");
  console.log(p2.toFixed(2) + "%");
  console.log(p3.toFixed(2) + "%");
  console.log(p4.toFixed(2) + "%");
  console.log(p5.toFixed(2) + "%");

}

solve(["7",
"800",
"801",
"250",
"199",
"399",
"599",
"799"])