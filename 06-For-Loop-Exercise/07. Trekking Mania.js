function solve(input) {
    // Прочитаме броя на групите от катерачи
    let groupCount = Number(input[0]);
  
    // Създаваме променливи за общия брой хора и броя на хората изкачващи всеки връх
    let totalPeople = 0;
    let musalaPeople = 0;
    let montblancPeople = 0;
    let kilimanjaroPeople = 0;
    let k2People = 0;
    let everestPeople = 0;
  
    // Обхождаме групите и проверяваме колко хора има във всяка
    for (let i = 1; i <= groupCount; i++) {
      let peopleInGroup = Number(input[i]);
  
      // Добавяме броя на хората в групата към общия брой хора
      totalPeople += peopleInGroup;
  
      // Според броя на хората в групата определяме кой връх ще изкачат
      if (peopleInGroup <= 5) {
        // Ако са до 5 човека, изкачват Мусала
        musalaPeople += peopleInGroup;
      } else if (peopleInGroup <= 12) {
        // Ако са от 6 до 12 човека, изкачват Монблан
        montblancPeople += peopleInGroup;
      } else if (peopleInGroup <= 25) {
        // Ако са от 13 до 25 човека, изкачват Килиманджаро
        kilimanjaroPeople += peopleInGroup;
      } else if (peopleInGroup <= 40) {
        // Ако са от 26 до 40 човека, изкачват К2
        k2People += peopleInGroup;
      } else {
        // Ако са повече от 41 човека, изкачват Еверест
        everestPeople += peopleInGroup;
      }
    }
  
    // Пресмятаме процентите на хората изкачващи всеки връх
    let musalaPercent = (musalaPeople / totalPeople) * 100;
    let montblancPercent = (montblancPeople / totalPeople) * 100;
    let kilimanjaroPercent = (kilimanjaroPeople / totalPeople) * 100;
    let k2Percent = (k2People / totalPeople) * 100;
    let everestPercent = (everestPeople / totalPeople) * 100;
  
    // Отпечатваме процентите на конзолата с точност до втората цифра след десетичната запетая
    console.log(`${musalaPercent.toFixed(2)}%`);
    console.log(`${montblancPercent.toFixed(2)}%`);
    console.log(`${kilimanjaroPercent.toFixed(2)}%`);
    console.log(`${k2Percent.toFixed(2)}%`);
    console.log(`${everestPercent.toFixed(2)}%`);
  }

  solve(["10","10","5","1","100","12","26","17","37","40","78",]); 
  
  