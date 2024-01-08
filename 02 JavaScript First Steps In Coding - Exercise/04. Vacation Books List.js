function calculatePagesPerDay(input){
    let totalPages = Number(input[0]);
    let pagesPerHour = Number(input[1]);
    let days = Number(input[2]);
    let readingHoursPerDay = (totalPages / pagesPerHour)/days;
    console.log(readingHoursPerDay);
}
calculatePagesPerDay(["212", "20", "2"])
