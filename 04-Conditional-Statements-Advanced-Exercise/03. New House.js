function solve(input){

    let pricePerFlower = 0;
    let flowersCount = input[1];
    let budget = input[2];

    switch(input[0]){
        case "Roses": pricePerFlower = 5;
             if(flowersCount>80){
                pricePerFlower = 5*0.9;
             };
             break;
        case "Dahlias": pricePerFlower = 3.80;
             if ( flowersCount > 90){
                pricePerFlower = 3.80 * 0.85;
             };
             break;
        case "Tulips": pricePerFlower = 2.80;
             if ( flowersCount >80){
                pricePerFlower = 2.80 * 0.85;
             };
             break;
        case "Narcissus": pricePerFlower = 3; 
             if ( flowersCount <120){
                pricePerFlower = 3 * 1.15;
             };
             break;
        case "Gladiolus": pricePerFlower = 2.50;
             if ( flowersCount <80){
                pricePerFlower = 2.50 * 1.2;
             };
             break;


    }

    let totalPrice = pricePerFlower * flowersCount;

    if (totalPrice <= budget ){
        console.log(`Hey, you have a great garden with ${flowersCount} ${input[0]} and ${(budget-totalPrice).toFixed(2)} leva left.`);

    }
    else{
        console.log(`Not enough money, you need ${(totalPrice-budget).toFixed(2)} leva more.`);
    }



}

solve(["Roses","55","250"])
solve(["Tulips","88","260"])




