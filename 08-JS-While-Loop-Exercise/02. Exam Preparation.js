function solve(input) {
    // Четем броя незадоволителни оценки от входа
    let poorGradesLimit = Number(input.shift());
    // Инициализираме помощни променливи
    let poorGradesCount = 0;
    let gradesSum = 0;
    let gradesCount = 0;
    let lastProblem = "";
    // Създаваме флаг за край на програмата
    let isEnough = false;
    // Четем името на първата задача
    let problem = input.shift();
    // Докато не получим команда Enough или не достигнем лимита на незадоволителни оценки
    while (problem !== "Enough" && poorGradesCount < poorGradesLimit) {
      // Четем оценката за задачата
      let grade = Number(input.shift());
      // Прибавяме оценката към сумата и увеличаваме брояча
      gradesSum += grade;
      gradesCount++;
      // Ако оценката е по-малка или равна на 4, увеличаваме броя на незадоволителните оценки
      if (grade <= 4) {
        poorGradesCount++;
      }
      // Запазваме името на последната задача
      lastProblem = problem;
      // Четем името на следващата задача
      problem = input.shift();
    }
    // Ако получим команда Enough, изчисляваме средната оценка и принтираме резултата
    if (problem === "Enough") {
      let averageGrade = gradesSum / gradesCount;
      console.log(`Average score: ${averageGrade.toFixed(2)}`);
      console.log(`Number of problems: ${gradesCount}`);
      console.log(`Last problem: ${lastProblem}`);
    } else {
      // Ако достигнем лимита на незадоволителни оценки, принтираме съобщение за почивка
      console.log(`You need a break, ${poorGradesCount} poor grades.`);
    }
  }

  solve(["3",
  "Money",
  "6",
  "Story",
  "4",
  "Spring Time",
  "5",
  "Bus",
  "6",
  "Enough"])

  solve(["2",
  "Income",
  "3",
  "Game Info",
  "6",
  "Best Player",
  "4"])
  
  
  
  