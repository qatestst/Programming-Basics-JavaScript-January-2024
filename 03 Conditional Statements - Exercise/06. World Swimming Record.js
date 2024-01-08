function calculateRecord(input){

    let record = Number(input[0]);
    let distance = Number(input[1]);
    let timeForOneMeterInSeconds = Number(input[2]);

    let multiplier = Math.trunc(distance / 15);
    let addTime = multiplier * 12.5;

    let time = (distance * timeForOneMeterInSeconds) + addTime;

    if (time < record)
        {
            console.log(`Yes, he succeeded! The new world record is ${time.toFixed(2)} seconds.`)
        }
    else
    {
            console.log(`No, he failed! He was ${(time - record).toFixed(2)} seconds slower.`)

    }
    

}
calculateRecord(["10464", "1500", "20"])
calculateRecord(["55555.67","3017","5.03"])

