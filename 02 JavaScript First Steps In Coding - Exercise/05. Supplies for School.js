function calculatePrice(input){
    let pens = Number(input[0])*5.8;
    let markers = Number(input[1])*7.2;
    let detergent = Number(input[2])*1.2;
    let discount = Number(input[3])/100;
    let finalPrice = (pens+markers+detergent) - ((pens+markers+detergent)*discount);
    console.log(finalPrice);
}
calculatePrice(["2", "3", "4", "25"]);