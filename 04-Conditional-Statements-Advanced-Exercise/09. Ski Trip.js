function solve(input){
    `use strict`;

    let numberOfNights = Number(input[0]) -1; //11 дни = 10 нощувки 
    let typeOfRoom = String(input[1]);
    let grade = String(input[2]);

    let roomForOnePersonPrice = 18;
    let apartmentPrice = 25;
    let presidentApartmentPrice = 35;

    let totalPrice = 0;

    if ( numberOfNights <10){
        if(typeOfRoom === "room for one person"){
            totalPrice = numberOfNights * roomForOnePersonPrice;
        }
        else if (typeOfRoom === "apartment"){
            totalPrice = (numberOfNights * apartmentPrice) * 0.7;
        }
        else if ( typeOfRoom === "president apartment"){
            totalPrice = (numberOfNights * presidentApartmentPrice) *0.9;
        }

    }
    else if(numberOfNights >= 10 && numberOfNights <=15){
        if(typeOfRoom === "room for one person"){
            totalPrice = numberOfNights * roomForOnePersonPrice;
        }
        else if (typeOfRoom === "apartment"){
            totalPrice = (numberOfNights * apartmentPrice) * 0.65;
        }
        else if ( typeOfRoom === "president apartment"){
            totalPrice = (numberOfNights * presidentApartmentPrice) *0.85;
        }



    }
    else if(numberOfNights > 15){
        if(typeOfRoom === "room for one person"){
            totalPrice = numberOfNights * roomForOnePersonPrice;
        }
        else if (typeOfRoom === "apartment"){
            totalPrice = (numberOfNights * apartmentPrice) * 0.5;
        }
        else if ( typeOfRoom === "president apartment"){
            totalPrice = (numberOfNights * presidentApartmentPrice) *0.8;
        }
    }

    if (grade === "positive"){
        totalPrice *= 1.25;
    }
    else {
        totalPrice *= 0.9;
    }
    console.log(totalPrice.toFixed(2));

}
solve(["14","apartment", "positive"])
