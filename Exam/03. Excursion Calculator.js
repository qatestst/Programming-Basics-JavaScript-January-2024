function solve(input) {
    // Парсиране на входните данни
    let numberOfPeople = parseInt(input[0]);
    let season = input[1];

    // Инициализация на цената за екскурзията
    let pricePerPerson = 0;

    // Определяне на цената според сезона и броя на хората
    if (numberOfPeople <= 5) {
        switch (season) {
            case "spring":
                pricePerPerson = 50.00;
                break;
            case "summer":
                pricePerPerson = 48.50;
                break;
            case "autumn":
                pricePerPerson = 60.00;
                break;
            case "winter":
                pricePerPerson = 86.00;
                break;
        }
    } else {
        switch (season) {
            case "spring":
                pricePerPerson = 48.00;
                break;
            case "summer":
                pricePerPerson = 45.00;
                break;
            case "autumn":
                pricePerPerson = 49.50;
                break;
            case "winter":
                pricePerPerson = 85.00;
                break;
        }
    }

    // Прилагане на отстъпки или оскъпявания според сезона
    if (season === "summer") {
        pricePerPerson *= 0.85; // 15% отстъпка
    } else if (season === "winter") {
        pricePerPerson *= 1.08; // 8% оскъпяване
    }

    // Изчисляване на общата цена
    let totalPrice = numberOfPeople * pricePerPerson;

    // Отпечатване на резултата
    console.log(`${totalPrice.toFixed(2)} leva.`);
}

// Примерни извиквания на функцията с входни данни
solve(["5", "spring"]);
solve(["10", "summer"]);
solve(["15", "autumn"]);
solve(["20", "winter"]);
