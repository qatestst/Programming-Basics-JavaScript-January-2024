function shopping(input){

    let budget = Number(input[0]);
    let videoCardsNumber = Number(input[1]);
    let cpuNumber = Number(input[2]);
    let ramNumber = Number(input[3]);

    let videoCardPrice = 250;
    let totalVideoCardsPrice = videoCardPrice * videoCardsNumber;

    let cpuPrice = 0.35 * totalVideoCardsPrice;
    let totalCpuPrice = cpuPrice * cpuNumber;
    
    let ramPrice = 0.1 * totalVideoCardsPrice;
    let totalRamPrice = ramNumber * ramPrice;

    let totalPrice = totalVideoCardsPrice + totalRamPrice + totalCpuPrice;
    if (videoCardsNumber > cpuNumber)
    {
        totalPrice *= 0.85;
    }
    if (budget >= totalPrice)
    {
        console.log(`You have ${(budget-totalPrice).toFixed(2)} leva left!`)
    }
    else
    {
        console.log(`Not enough money! You need ${(totalPrice-budget).toFixed(2)} leva more!`)
    }
    
}
shopping(["900", "2", "1", "3"])
shopping(["920.45", "3", "1","1"])

