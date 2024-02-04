function solve(input){
    `use strict`;

    let degrees = input[0];
    let outfit = "";
    let shoes = "";

    if ( input[0] >=10 && input[0] <=18){
        switch(input[1]){
            case "Morning": outfit = "Sweatshirt"; shoes = "Sneakers"; break;
            case "Afternoon": outfit = "Shirt"; shoes = "Moccasins"; break;
            case "Evening": outfit = "Shirt"; shoes = "Moccasins"; break;
        }

    }
    else if ( input[0] >18 && input[0] <=24){
        switch(input[1]){
            case "Morning": outfit = "Shirt"; shoes = "Moccasins"; break;
            case "Afternoon": outfit = "T-Shirt"; shoes = "Sandals"; break;
            case "Evening": outfit = "Shirt"; shoes = "Moccasins"; break;
        }
        
    }
    else if ( input[0] >= 25){
        switch(input[1]){
            case "Morning": outfit = "T-Shirt"; shoes = "Sandals"; break;
            case "Afternoon": outfit = "Swim Suit"; shoes = "Barefoot"; break;
            case "Evening": outfit = "Shirt"; shoes = "Moccasins"; break;
        }
    }

    console.log(`It's ${degrees} degrees, get your ${outfit} and ${shoes}.`);

}