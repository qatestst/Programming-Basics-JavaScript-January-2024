function solve(input) {
    let number = Number(input[0]);

    let thirdDigit = number % 10;
    let secondDigit = Math.floor((number / 10) % 10);
    let firstDigit = Math.floor(number / 100);

    for (let i = 1; i <= thirdDigit; i++) {
        for (let j = 1; j <= secondDigit; j++) {
            for (let k = 1; k <= firstDigit; k++) {
                let result = i * j * k;
                console.log(`${i} * ${j} * ${k} = ${result};`);
            }
        }
    }
}

// Примерни извиквания
//solve(["324"]);
solve(["622"]);

