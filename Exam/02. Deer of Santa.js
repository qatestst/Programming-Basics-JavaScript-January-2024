function solve(input){

let numberOfDaysMissig = Number(input[0]);
let leftFoodInKg = Number(input[1]);
let foodPerDayForFirstDeer = Number(input[2]);
let foodPerDayForSecondDeer = Number(input[3]);
let foodPerDayForThirdDeer = Number(input[4]);

let totalFoodNeeded = (numberOfDaysMissig*foodPerDayForFirstDeer+ numberOfDaysMissig*foodPerDayForSecondDeer+numberOfDaysMissig*foodPerDayForThirdDeer);


if (leftFoodInKg >= totalFoodNeeded){
    console.log(`${Math.floor(leftFoodInKg-totalFoodNeeded)} kilos of food left.`);
}
else{
    console.log(`${Math.ceil(totalFoodNeeded-leftFoodInKg)} more kilos of food are needed.`);
}

}

solve([2,10,1,1,2,])
solve(["5","10","2.1","0.8","11"])
