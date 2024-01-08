function Calculate(input){
    let nylon = (Number(input[0])+2)*1.5;
    let paint = (Number(input[1])*1.1)*14.50;
    let razreditel = Number(input[2])*5;
    let hoursOfWord = Number(input[3]);
    let totalExpenses = nylon+paint+razreditel+0.4;
    let staffExpensesPerHour = totalExpenses * 0.3;

    let total = totalExpenses + hoursOfWord*staffExpensesPerHour;
    console.log(total);

}
Calculate(["10 ","11 ", "4 ", "8 "]);