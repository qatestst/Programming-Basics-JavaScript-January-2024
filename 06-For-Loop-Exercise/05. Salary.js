function solve(input) {
    // Прочитаме броя на табовете и заплатата от първите два елемента на масива
    let tabs = Number(input[0]);
    let salary = Number(input[1]);
  
    // Обхождаме останалите елементи на масива, които са имената на сайтовете
    for (let i = 2; i < input.length; i++) {
      let site = input[i];
  
      // Проверяваме дали сайтът е Facebook, Instagram или Reddit и намаляваме заплатата съответно
      if (site === "Facebook") {
        salary -= 150;
      } else if (site === "Instagram") {
        salary -= 100;
      } else if (site === "Reddit") {
        salary -= 50;
      }
  
      // Проверяваме дали заплатата е станала по-малка или равна на нула и ако да, прекратяваме цикъла
      if (salary <= 0) {
        break;
      }
    }
  
    // Проверяваме дали заплатата е по-голяма от нула и ако да, извеждаме остатъка от нея
    if (salary > 0) {
      console.log(salary);
    } else {
      // В противен случай извеждаме съобщение, че заплатата е загубена
      console.log("You have lost your salary.");
    }
  }

  solve(["10",  "750",  "Facebook",  "Dev.bg",  "Instagram",  "Facebook",  "Reddit",  "Facebook",  "Facebook"])
  solve(["3",  "500",  "Github.com",  "Stackoverflow.com",  "softuni.bg"])
  
  