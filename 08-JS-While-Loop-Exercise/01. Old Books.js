function solve(input){

let searchedBook = input[0];
let index = 1;
let bookIsFound = false;

let book = input[index];
let bookCounter = 0;

    while (book !== "No More Books"){
        if(book === searchedBook)
        {
            bookIsFound = true;
            break;
        } 
        bookCounter++;
        index++;
        book = input[index];

    }

 if (bookIsFound === false){
    console.log("The book you search is not here!");
    console.log(`You checked ${bookCounter} books.`);
 }
 else if (bookIsFound === true){

    console.log(`You checked ${bookCounter} books and found it.`);
 }
}

solve(["Troy","Stronger","Life Style","Troy"])

