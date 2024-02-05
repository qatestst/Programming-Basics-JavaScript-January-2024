function graduation(input) {
    let name = input[0];
    let grades = 1;
    let sum = 0;
    let excluded = 0;
    let index = 0;
    while (grades <= 12) {
       index++;
       let grade = Number(input[index]);
       if (grade < 4.00) {
          // Увеличаваме броя на скъсванията с 1
          excluded++;
          // Ако скъсванията са повече от 1, прекъсваме цикъла
          if (excluded > 1) {
             break;
          }
          // Продължаваме със следващата оценка
          continue;
       }
       // Добавяме оценката към сумата
       sum += grade;
       // Увеличаваме броя на годините с 1
       grades++;
    }
    let average = sum / 12;    // Изчисляваме средната оценка
    // Проверяваме дали ученикът е завършил или изключен
    if (excluded > 1) {
       // Отпечатваме, че ученикът е изключен и в кой клас
       console.log(`${name} has been excluded at ${grades} grade`);
    } else {
       // Отпечатваме, че ученикът е завършил и средната му оценка
       console.log(`${name} graduated. Average grade: ${average.toFixed(2)}`);
    }
 }
 graduation(["Gosho", "5", "5.5", "6", "5.43", "5.5", "6", "5.55", "5", "6", "6", "5.43", "5"])
 graduation(["Mimi",  "5", "6", "5", "6", "5", "6", "6", "2", "3"])
 


 