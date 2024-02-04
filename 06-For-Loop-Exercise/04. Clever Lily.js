function solve(input) {
    // Прочитаме входните данни
    let age = Number(input[0]); // Възрастта на Лили
    let price = Number(input[1]); // Цената на пералнята
    let toyPrice = Number(input[2]); // Единична цена на играчка
  
    // Инициализираме променливи за брой играчки, спестени пари и подарени пари
    let toys = 0; // Брой играчки, получени от Лили
    let money = 0; // Спестени пари от Лили
    let gift = 10; // Пари, получени за четен рожден ден
  
    // Обхождаме всички рождени дни на Лили
    for (let i = 1; i <= age; i++) {
      // Проверяваме дали рожденият ден е четен или нечетен
      if (i % 2 == 0) {
        // Ако е четен, Лили получава пари
        money += gift; // Добавяме подарените пари към спестените
        gift += 10; // Увеличаваме сумата за следващия четен рожден ден
        money -= 1; // Братът на Лили взима 1 лев
      } else {
        // Ако е нечетен, Лили получава играчка
        toys++; // Увеличаваме броя на играчките с 1
      }
    }
  
    // Пресмятаме колко пари е получила Лили от продажбата на играчките
    let toyMoney = toys * toyPrice;
  
    // Добавяме парите от играчките към спестените пари
    money += toyMoney;
  
    // Проверяваме дали парите на Лили са достатъчни за пералнята
    if (money >= price) {
      // Ако са достатъчни, принтираме "Yes!" и остатъка
      let diff = money - price; // Разликата между парите и цената
      console.log(`Yes! ${diff.toFixed(2)}`); // Форматираме разликата до втория знак
    } else {
      // Ако не са достатъчни, принтираме "No!" и сумата, която не достига
      let diff = price - money; // Сумата, която не достига
      console.log(`No! ${diff.toFixed(2)}`); // Форматираме сумата до втория знак
    }
  }

  
  solve(["21",
  "1570.98",
  "3"])
  