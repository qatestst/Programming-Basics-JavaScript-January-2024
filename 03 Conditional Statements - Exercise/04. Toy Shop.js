function calculateMoney(input){

let tripPrice = Number(input[0]);
let puzzleCount = Number(input[1]);
let dollCount = Number(input[2]);
let teddyBearCount = Number(input[3]);
let minionCount = Number(input[4]);
let lorryCount = Number(input[5]);

let puzzleSales = puzzleCount * 2.60;
let dollSales = dollCount * 3;
let teddyBearSales = teddyBearCount * 4.10;
let minionSales = minionCount * 8.20;
let lorriesSales = lorryCount * 2;

let allToyCount = puzzleCount + dollCount + teddyBearCount + minionCount + lorryCount;
let toySalesMoney = puzzleSales + dollSales + teddyBearSales + minionSales + lorriesSales;

if (allToyCount >= 50)
{
    toySalesMoney *= 0.75;
}

let rent = 0.1 * toySalesMoney;

let totalMoney = toySalesMoney - rent;

if (totalMoney >= tripPrice)
{
    console.log(`Yes! ${(totalMoney-tripPrice).toFixed(2)} lv left.`)
}
else 
{
    console.log(`Not enough money! ${(tripPrice - totalMoney).toFixed(2)} lv needed.`)
}

}

calculateMoney(["40.8", "20", "25", "30", "50", "10"]);
calculateMoney(["320", "8", "2", "5", "5", "1"]);

