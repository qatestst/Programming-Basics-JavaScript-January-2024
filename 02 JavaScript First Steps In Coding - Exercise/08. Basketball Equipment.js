function CalculatePrice(input){
let annualExpense = Number(input[0]);

let sneakers = annualExpense*0.6 ;
let anzug = sneakers *0.8;
let ball = anzug*0.25;
let accessories = 0.2*ball;
let totalExpenses = annualExpense+sneakers+anzug+ball+ accessories;
console.log(totalExpenses); 
}
CalculatePrice(["365"]);