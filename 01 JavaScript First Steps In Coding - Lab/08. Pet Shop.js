function calculateExpenses(input){
let dogFoodPackets = Number(input[0]);
let catFoodPackets = Number(input[1]);
let totalExpenses = (dogFoodPackets*2.5) + (catFoodPackets*4);
console.log(`${totalExpenses} lv.`);

}
calculateExpenses(["5", "4"]);