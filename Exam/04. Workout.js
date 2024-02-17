function solve(input) {
    let n = Number(input[0]);
    let firstDay = Number(input[1]);

    let allKm = firstDay;

    for (let i = 1; i <= n; i++) {
        const nextDay = Number(input[i + 1]);
        firstDay = firstDay + (firstDay * (nextDay / 100));
        allKm += firstDay;
    }

    if (allKm >= 1000) {
        console.log(`You've done a great job running ${Math.ceil(allKm - 1000)} more kilometers!`);
    } else {
        console.log(`Sorry Mrs. Ivanova, you need to run ${Math.ceil(1000 - allKm)} more kilometers`);
    }
}



// Примерни извиквания
solve(["5", "30", "10", "15", "20", "5", "12"]);
solve(["4", "100", "30", "50", "60", "80"]);