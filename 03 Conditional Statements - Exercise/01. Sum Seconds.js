function sumOfSeconds(input){
    let firstTime = Number(input[0]);
    let secondTime = Number(input[1]);
    let thirdTime = Number(input[2]);

    let totaTimeInSeconds = firstTime + secondTime + thirdTime;
    let minutes =  Math.trunc(totaTimeInSeconds/60);
    let seconds = totaTimeInSeconds % 60;
    if (seconds >=10)
        {
            console.log(minutes+ ":"+seconds);
        }
        else 
        {
            console.log(minutes+ ":0"+seconds);
        }
}

sumOfSeconds([3,2,1])
sumOfSeconds([1,2,7])
sumOfSeconds([4,16,99])
sumOfSeconds([34,56,99])
sumOfSeconds([134,356,599])