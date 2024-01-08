function CalculateExpenses(input){
let pricePerSqMeter = 7.61;
let totalArea = Number(input[0]);
let discount = pricePerSqMeter*totalArea*0.18;
let finalPrice = (pricePerSqMeter*totalArea)-discount;
console.log(`The final price is: ${finalPrice} lv.`);
console.log(`The discount is: ${discount} lv.`);
}
CalculateExpenses(["550"]);