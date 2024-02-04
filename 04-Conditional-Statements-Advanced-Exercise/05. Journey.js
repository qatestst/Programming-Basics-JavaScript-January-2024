function solve(input){
    let budget = input[0];
    let season = input[1];
    let destination = "";
    let holidayType = "";
    let price = 0;

    if (budget <= 100 ){
        destination = "Bulgaria";
    
        if(season === "summer"){
            holidayType = "Camp";
            price = budget * 0.3; 
        }
        else if ( season === "winter"){
            holidayType = "Hotel";
            price = budget * 0.7; 
        }
    }
    else if (budget <=1000){
        destination = "Balkans"
        if (season === "summer"){
            holidayType = "Camp";
            price = budget * 0.4; 

        }
        else if ( season === "winter"){
            holidayType = "Hotel";
            price = budget * 0.8; 
        }


    }
    else if(budget > 1000){
        destination = "Europe"
        holidayType = "Hotel";
        price = budget * 0.9; 
        
    }

    console.log(`Somewhere in ${destination}`);
    console.log(`${holidayType} - ${price.toFixed(2)}`);

}
solve(["50", "summer"])

solve(["75", "winter"])
solve(["312", "summer"])
solve(["678.53", "winter"])
solve(["1500", "summer"])

