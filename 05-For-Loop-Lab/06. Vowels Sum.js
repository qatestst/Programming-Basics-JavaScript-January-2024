function solve(input){
    let sumOfVowels = 0;
    for (let i = 0; i <input[0].length; i++){
        
        switch(input[0][i]){
            case "a": sumOfVowels+=1; break;
            case "e": sumOfVowels+=2;break;
            case "i":sumOfVowels+=3; break;
            case "o":sumOfVowels+=4;break;
            case "u": sumOfVowels+=5; break;
        }
    }
    console.log(sumOfVowels);
}

solve(["aaaaaa"])