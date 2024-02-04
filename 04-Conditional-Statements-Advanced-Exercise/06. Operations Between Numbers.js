function solve(input){

    let num1 = Number(input[0]);
    let num2 = Number(input[1]);
    let op = input[2];
    evenOrOdd = "";

    switch(op){
        case "+":
            if ((num1 + num2) % 2 == 0){
                evenOrOdd = "even";
            }    
            else {
                evenOrOdd = "odd";
            }
            console.log(`${num1} ${op} ${num2} = ${num1 + num2} - ${evenOrOdd}`);
            break;

        case "-":
            if ((num1 - num2) % 2 == 0){
                evenOrOdd = "even";
            }    
            else {
                evenOrOdd = "odd";
            }
            console.log(`${num1} ${op} ${num2} = ${num1 - num2} - ${evenOrOdd}`);
            break;

        case "*":
            if ((num1 * num2) % 2 == 0){
                evenOrOdd = "even";
            }    
            else {
                evenOrOdd = "odd";
            }
            console.log(`${num1} ${op} ${num2} = ${num1 * num2} - ${evenOrOdd}`);
            break;

        case "/":
            if (num2 === 0){
            console.log(`Cannot divide ${num1} by zero`);
            }
            else { 
            console.log(`${num1} ${op} ${num2} = ${(num1 / num2).toFixed(2)}`);
            }
            break;
        
        case "%":
            if (num2 === 0){
                console.log(`Cannot divide ${num1} by zero`);
                }
                else { 
                console.log(`${num1} ${op} ${num2} = ${num1 % num2}`);
                }
                break;
    }

}

solve(["10","12","+"])
solve(["10","1","-"])
solve(["123","12","/"])
solve(["112","0","/"])
solve(["7","3","*"])
solve(["10","3","%"])
solve(["10","0","%"])
solve(["0","10","%"])






