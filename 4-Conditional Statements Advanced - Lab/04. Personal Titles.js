function solve(input){
       
    
    switch(input[1]){
        case "f": 
            if (input[0] < 16){
                console.log("Miss");
            }
            else if (input[0] >= 16){
                console.log("Ms.");
            }

            
            break;

        case "m": console.log("");
            if (input[0] < 16){
            console.log("Master");
            }
            else if (input[0] >= 16){
            console.log("Mr.");
            }

        break;
    }
}
solve(["12","f"])
solve(["17","m"])

