function solve(input) {
    // Прочитаме името на актьора, точките от академията и броя на оценяващите
    let actorName = input[0];
    let academyPoints = Number(input[1]);
    let juryCount = Number(input[2]);
  
    // Създаваме променлива за общите точки на актьора
    let totalPoints = academyPoints;
  
    // Обхождаме оценяващите по двойки - име и точки
    for (let i = 3; i < input.length; i += 2) {
      let juryName = input[i];
      let juryPoints = Number(input[i + 1]);
  
      // Пресмятаме точките, които актьора получава от всеки оценяващ
      let points = (juryName.length * juryPoints) / 2;
  
      // Добавяме точките към общите точки на актьора
      totalPoints += points;
  
      // Проверяваме дали общите точки надхвърлят 1250.5
      if (totalPoints > 1250.5) {
        // Ако да, прекъсваме цикъла и отпечатваме съобщение за номинация
        console.log(
          `Congratulations, ${actorName} got a nominee for leading role with ${totalPoints.toFixed(
            1
          )}!`
        );
        return; // Това прекратява изпълнението на функцията
      }
    }
  
    // Ако не сме прекъснали цикъла, значи точките не са достатъчни
    // Изчисляваме колко точки остават до номинацията
    let neededPoints = 1250.5 - totalPoints;
  
    // Отпечатваме съжалително съобщение
    console.log(
      `Sorry, ${actorName} you need ${neededPoints.toFixed(1)} more!`
    );
  }
  