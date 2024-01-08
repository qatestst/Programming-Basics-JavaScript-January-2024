function calculateBudget(input){
    let budget = Number(input[0]);
    let numberOfSupernumerary = Number(input[1]);
    let priceForClothingPerSupernumerary = Number(input[2]);

    let decor = 0.1 * budget;
    

    if (numberOfSupernumerary > 150)
    {
        priceForClothingPerSupernumerary *= 0.9;
    }

    let totalExpense = decor + (numberOfSupernumerary * priceForClothingPerSupernumerary);

    if (budget < totalExpense)
    {
        console.log(`Not enough money!`);
        console.log(`Wingard needs ${(totalExpense - budget).toFixed(2)} leva more.`);
    }
    else 
    {
        console.log(`Action!`);
        console.log(`Wingard starts filming with ${((budget - totalExpense).toFixed(2))} leva left.`);

    }


}
calculateBudget(["20000", "120", "55.5"])
calculateBudget(["200", "120", "55.5"])
