function solve(input){

    let index = 0;
    let str = input[index];

    while (str !== "Stop") {
      console.log(input[index]);
    index++;
    str = input[index];
    }
}
solve(["Hello", "Hi", "Stop"])
