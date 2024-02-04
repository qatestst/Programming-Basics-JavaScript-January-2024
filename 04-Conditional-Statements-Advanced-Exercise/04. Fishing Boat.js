function solve(input){
 `use strict`;

 let budget = input[0];
 let season = input[1];
 let numberOfFishermen = input[2];
 let shipRent = 0;
 let discount = 0;
 let totalCost = 0;

    if (season === "Spring"){
        shipRent = 3000;
    }
    else if( season === "Summer" || season === "Autumn"){
        shipRent = 4200;
    }
    else if ( season === "Winter"){
        shipRent = 2600;
    }

    if ( numberOfFishermen <= 6){
            discount = 0.1;
    }
    else if (numberOfFishermen >=7 && numberOfFishermen <= 11){
        discount = 0.15;
    }
    else if ( numberOfFishermen >= 12){
        discount = 0.25;
    }

   


    totalCost = shipRent - (shipRent * discount);

    if (season !== "Autumn" && numberOfFishermen % 2 === 0){
        totalCost = totalCost * 0.95;
    }

    if ( totalCost <= budget){
        console.log(`Yes! You have ${(budget-totalCost).toFixed(2)} leva left.`);
    }
    else if ( budget < totalCost){
        console.log(`Not enough money! You need ${(totalCost-budget).toFixed(2)} leva.`);
    }
     
}


solve(["3000","Summer","11"]);
solve(["3600","Autumn","6"]);
solve(["3600","Winter","1"]);
solve(["2000","Winter","13"])




