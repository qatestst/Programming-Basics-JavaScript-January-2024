function solve(input) {
    // Инициализираме променливи за целта, текущите стъпки и индекса на масива
    let goal = 10000;
    let steps = 0;
    let index = 0;
  
    // Цикъл, който продължава докато не достигнем целта или не въведем "Going home"
    while (steps < goal && input[index] !== "Going home") {
      // Преобразуваме входа от стринг в число и добавяме към текущите стъпки
      let currentSteps = Number(input[index]);
      steps += currentSteps;
  
      // Увеличаваме индекса за следващия елемент от масива
      index++;
    }
  
    // Проверяваме дали сме въвели "Going home"
    if (input[index] === "Going home") {
      // Преобразуваме следващия елемент от масива в число и добавяме към текущите стъпки
      let finalSteps = Number(input[index + 1]);
      steps += finalSteps;
    }
  
    // Проверяваме дали сме достигнали целта или не
    if (steps >= goal) {
      // Изчисляваме разликата между стъпките и целта
      let difference = steps - goal;
  
      // Изписваме съобщение за успех и разликата
      console.log("Goal reached! Good job!");
      console.log(`${difference} steps over the goal!`);
    } else {
      // Изчисляваме колко стъпки остават до целта
      let remaining = goal - steps;
  
      // Изписваме съобщение за неуспех и оставащите стъпки
      console.log(`${remaining} more steps to reach goal.`);
    }
  }
  
  

  solve(["1000",
  "1500",
  "2000",
  "6500"])
  