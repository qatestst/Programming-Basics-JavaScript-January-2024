function solve(input){

    let commision = 0;
    let errorInSales = false;
    let errorCity = false;

    if (input[0] != "Sofia" && input[0] != "Varna" && input[0] != "Plovdiv"){
            errorCity = true;
    }
    else if(input[0] == "Sofia"){
        if (input[1] >=0 && input[1] <= 500){
            commision = 0.05;
        }
        else if (input[1] > 500 && input[1] <= 1000){
            commision = 0.07;
        }
        else if (input[1] >1000 && input[1] <= 10000){
            commision = 0.08;
        }
        else if (input[1] > 10000){
            commision = 0.12;
        }
        else {
            errorInSales = true;
        }

    }
    else if (input[0] == "Varna"){
        if (input[1] >=0 && input[1] <= 500){
            commision = 0.045;
        }
        else if (input[1] > 500 && input[1] <= 1000){
            commision = 0.075;
        }
        else if (input[1] >1000 && input[1] <= 10000){
            commision = 0.10;
        }
        else if (input[1] > 10000){
            commision = 0.13;
        }
        else {
            errorInSales = true;
        }

    }
    else if (input[0] == "Plovdiv"){
        if (input[1] >=0 && input[1] <= 500){
            commision = 0.055;
        }
        else if (input[1] > 500 && input[1] <= 1000){
            commision = 0.08;
        }
        else if (input[1] >1000 && input[1] <= 10000){
            commision = 0.12;
        }
        else if (input[1] > 10000){
            commision = 0.145;
        }
        else {
            errorInSales = true;
        }
        
    }

    if (errorCity == false && errorInSales == false){
        console.log((input[1]*commision).toFixed(2));
    }
    else {
        console.log("error");
    }

}

solve(["Sofia","1500"])
solve(["Plovdiv","499.99"])
solve(["Varna", "3874.50"])
solve(["Kaspichan","-50"])




