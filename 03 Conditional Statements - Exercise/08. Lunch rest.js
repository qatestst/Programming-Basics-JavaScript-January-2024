function lunchRest(input){

    let seriesName = String(input[0]);
    let episodeLength = Number(input[1]);
    let restLength = Number(input[2]);

    let lunchTime = 0.125 * restLength;
    let restTime = 0.25 * restLength;

    let freeTime = restLength - (lunchTime + restTime);

    if (freeTime >= episodeLength)
    {
        console.log(`You have enough time to watch ${seriesName} and left with ${Math.ceil(freeTime-episodeLength)} minutes free time.`)
    }
    else
    {
        console.log(`You don't have enough time to watch ${seriesName}, you need ${Math.ceil(episodeLength-freeTime)} more minutes.`)

    }
}

lunchRest(["Game of Thrones", "60", "96"])
lunchRest(["Teen Wolf", "48", "60"])


