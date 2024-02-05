function solve(input){
    let firstNumber = Number(input[0]);
    let counter = 1;
    let num = 1;
    while(num<=firstNumber){

        counter++;
        console.log(num);
        num = num*2 +1; 
    }

}
solve([31])