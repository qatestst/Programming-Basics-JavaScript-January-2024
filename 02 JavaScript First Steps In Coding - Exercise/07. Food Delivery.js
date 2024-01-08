function CalculatePrice(input){
let chickenMenu = Number(input[0])*10.35;
let fishMenu = Number(input[1])*12.40;
let veganMenu = Number(input[2])*8.15;
let dessert = (chickenMenu+fishMenu+veganMenu)*0.2;
let delivery = 2.5;
let total = chickenMenu+fishMenu+veganMenu+delivery+dessert;
console.log(total)
}
CalculatePrice(["2","4","3"]);