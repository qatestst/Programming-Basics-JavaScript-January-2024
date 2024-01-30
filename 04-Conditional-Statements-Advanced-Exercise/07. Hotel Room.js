function solve(input){
`use strict`;

let month = input[0];
let nights = input[1];

let studioPrice = 0;
let apartmentPrice =0;

switch(month){
    case "May":
    case "October":
        studioPrice = 50;
        apartmentPrice = 65;
        if (nights >7 && nights <=14){
            studioPrice *= 0.95;
        }
        else if ( nights > 14){
            studioPrice *=0.7;
            apartmentPrice *=0.9;
        };
        break;
    case "June":
    case "September":
        studioPrice = 75.20;
        apartmentPrice = 68.70;
        if ( nights > 14){
            studioPrice *=0.8;
            apartmentPrice *=0.9;
        };
        break;
    case "July":
    case "August":
        studioPrice = 76;
        apartmentPrice = 77;
        if ( nights > 14){
            
            apartmentPrice *=0.9;
        };
        break;
    
}

console.log(`Apartment: ${(nights*apartmentPrice).toFixed(2)} lv.`);
console.log(`Studio: ${(nights*studioPrice).toFixed(2)} lv.`);
}

solve (["May","15"])
solve(["June","14"])
