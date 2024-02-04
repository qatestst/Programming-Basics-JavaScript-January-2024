function ticketsCalculate(input){
let ticketPrice = 0;

    if (input[0] == "Premiere"){
        ticketPrice = 12;
    }
    else if ( input[0] == "Normal"){
        ticketPrice = 7.50;
    }
    else if ( input[0] == "Discount"){
        ticketPrice = 5;
    }

    console.log( (ticketPrice*input[1]*input[2]).toFixed(2) + " leva" );



}

ticketsCalculate(["Premiere","10","12"]);