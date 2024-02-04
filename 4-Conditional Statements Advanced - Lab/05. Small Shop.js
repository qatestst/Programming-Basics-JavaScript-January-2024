function solve(input){
    'use strict';
    let price = 0;

    if(input[1] === "Sofia"){
        switch(input[0]){
            case "coffee": price = 0.50; break;
            case "water": price = 0.80; break;
            case "beer": price = 1.20; break;
            case "sweets": price = 1.45; break;
            case "peanuts": price = 1.60; break;
        }

    }
    else if(input[1] === "Plovdiv"){
        switch(input[0]){
            case "coffee": price = 0.40; break;
            case "water": price = 0.70; break;
            case "beer": price = 1.15; break;
            case "sweets": price = 1.30; break;
            case "peanuts": price = 1.50; break;
        }

    }
    else if(input[1] === "Varna"){
        switch(input[0]){
            case "coffee": price = 0.45; break;
            case "water": price = 0.70; break;
            case "beer": price = 1.10; break;
            case "sweets": price = 1.35; break;
            case "peanuts": price = 1.55; break;
        }

    }
    console.log(price* input[2]);
}

solve(["coffee","Varna","2"])
