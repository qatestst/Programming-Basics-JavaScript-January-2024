function depositCalculate(input){
    let deposit = Number(input[0]);
    let time = Number(input[1]);
    let interest = Number(input[2]/100);

    let finalSum = deposit + time * ((deposit*interest)/12);
    console.log(finalSum);
}
depositCalculate(["200", "3", "5.7"])