function solve(input){

    if(input[0] >=10 && input[0] <=18){
        switch(input[1]){
            case "Monday":
            case "Tuesday":
            case "Wednesday":
            case "Thursday":
            case "Friday":
            case "Saturday": console.log("open");break;
            case "Sunday": console.log("closed");break;
        }
    }
    else if(input[0] <=10 || input[0] >=18){
        console.log("closed");
    }
}



solve(["11","Monday"])
solve(["19","Friday"])
solve(["11", "Sunday"])


