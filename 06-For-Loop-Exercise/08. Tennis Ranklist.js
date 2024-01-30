function solve(input) {
    // Прочитаме броя на турнирите и началния брой точки
    let tournamentCount = Number(input[0]);
    let initialPoints = Number(input[1]);
  
    // Създаваме променливи за общия брой точки, средния брой точки и броя на спечелените турнири
    let totalPoints = initialPoints;
    let averagePoints = 0;
    let wonTournaments = 0;
  
    // Обхождаме турнирите и проверяваме достигнатия етап
    for (let i = 2; i < input.length; i++) {
      let stage = input[i];
  
      // Според етапа определяме колко точки получава Григор
      let points = 0;
      if (stage === "W") {
        // Ако е победител, получава 2000 точки
        points = 2000;
        // Увеличаваме броя на спечелените турнири
        wonTournaments++;
      } else if (stage === "F") {
        // Ако е финалист, получава 1200 точки
        points = 1200;
      } else if (stage === "SF") {
        // Ако е полуфиналист, получава 720 точки
        points = 720;
      }
  
      // Добавяме точките към общия брой точки
      totalPoints += points;
  
      // Добавяме точките към средния брой точки
      averagePoints += points;
    }
  
    // Изчисляваме средния брой точки за турнир
    averagePoints = Math.floor(averagePoints / tournamentCount);
  
    // Изчисляваме процента на спечелените турнири
    let wonPercent = (wonTournaments / tournamentCount) * 100;
  
    // Отпечатваме резултатите на конзолата с нужния формат
    console.log(`Final points: ${totalPoints}`);
    console.log(`Average points: ${averagePoints}`);
    console.log(`${wonPercent.toFixed(2)}%`);
  }

  solve(["5","1400","F","SF","W","W","SF"])
  