function solve(input) {
    let seaPackages = Number(input[0]);
    let mountainPackages = Number(input[1]);

    let seaSold = 0;
    let mountainSold = 0;
    let profit = 0;

    for (let i = 2; i < input.length; i++) {
        let packageType = input[i];

        if (packageType === "sea" && seaPackages > 0) {
            profit += 680;
            seaPackages--;
            seaSold++;
        } else if (packageType === "mountain" && mountainPackages > 0) {
            profit += 499;
            mountainPackages--;
            mountainSold++;
        }

        if (seaPackages === 0 && mountainPackages === 0) {
            break;
        }
    }

    if (seaPackages === 0 && mountainPackages === 0) {
        console.log("Good job! Everything is sold.");
    } 

    console.log(`Profit: ${profit} leva.`);
}

// Примерни извиквания
solve(["2", "2", "sea", "mountain", "sea", "sea", "mountain"]);
solve(["6", "3", "sea", "mountain", "mountain", "mountain", "sea", "Stop"]);
