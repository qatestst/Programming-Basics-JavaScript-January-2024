function solve(input) {
    
    let peopleCount = Number(input[0]);
    let nightsCount = Number(input[1]);
    let transportCardsCount = Number(input[2]);
    let museumTicketsCount = Number(input[3]);

    let nightPrice = 20;
    let transportCardPrice = 1.60;
    let museumTicketPrice = 6;

    let totalPerPerson = (nightsCount * nightPrice) + (transportCardsCount * transportCardPrice) + (museumTicketsCount * museumTicketPrice);

    
   let totalForGroup = totalPerPerson * peopleCount;
   let totalPlus25Percents = totalForGroup + (totalForGroup * 0.25);
    console.log(totalPlus25Percents.toFixed(2));
}

// Примерни входни данни
let input1 = ["20", "14", "30", "6"];
let input2 = ["131", "9", "33", "46"];

// Извикване на функцията с примерните входни данни
solve(input1);
solve(input2);
