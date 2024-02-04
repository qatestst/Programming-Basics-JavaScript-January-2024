function solve(input){ //(["apple", "Tuesday", "2"])
    let price = 0;

    if (input[1] !== "Monday" &&
        input[1] !== "Tuesday" &&
        input[1] !== "Wednesday" &&
        input[1] !== "Thursday" &&
        input[1] !== "Friday" &&
        input[1] !== "Saturday" &&
        input[1] !== "Sunday"
        ){
            console.log("error");
    }
    else if (input[1] === "Saturday" || input[1] === "Sunday"){
        switch(input[0]){
            case "banana": price = 2.70; console.log((price* input[2]).toFixed(2)); break;
            case "apple": price = 1.25; console.log((price* input[2]).toFixed(2)); break;
            case "orange": price = 0.90; console.log((price* input[2]).toFixed(2));break;
            case "grapefruit": price = 1.60;console.log((price* input[2]).toFixed(2)); break;
            case "kiwi": price = 3.00; console.log((price* input[2]).toFixed(2));break;
            case "pineapple": price = 5.60; console.log((price* input[2]).toFixed(2));break;
            case "grapes": price = 4.20;console.log((price* input[2]).toFixed(2)); break;
            default: console.log("error"); break;
        }
        
    }
    else if (input[1] === "Monday" ||
            input[1] === "Tuesday" ||
            input[1] === "Wednesday" ||
            input[1] === "Thursday" ||
            input[1] === "Friday"){ 

        switch(input[0]){
            case "banana": price = 2.50; console.log((price* input[2]).toFixed(2));break;
            case "apple": price = 1.20; console.log((price* input[2]).toFixed(2));break;
            case "orange": price = 0.85; console.log((price* input[2]).toFixed(2));break;
            case "grapefruit": price = 1.45;console.log((price* input[2]).toFixed(2)); break;
            case "kiwi": price = 2.70; console.log((price* input[2]).toFixed(2));break;
            case "pineapple": price = 5.50; console.log((price* input[2]).toFixed(2));break;
            case "grapes": price = 3.85; console.log((price* input[2]).toFixed(2));break;
            default: console.log("error"); break;
        }
    }
   
}

solve(["apple", "Tuesday","2"])
solve(["orange", "Sunday", "3"])
solve(["tomato", "Monday", "3"])

