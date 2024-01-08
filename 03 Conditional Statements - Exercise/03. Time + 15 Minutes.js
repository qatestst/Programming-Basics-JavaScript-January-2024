function calculateTime(input){
let hour = Number(input[0]);
let minutes = Number(input[1]);

if(hour === 23 && minutes >=45)
{
    hour = 0;
    minutes = Math.abs((minutes+15) - 60);
}
else if(minutes >= 45)
{
    hour +=1;
    minutes = Math.abs((minutes+15) - 60);
}
else
{
    minutes +=15;
}
if (minutes<10)
{
    console.log(hour + ":0" + minutes);
} 
else
{
    console.log(hour + ":" + minutes);
}
}
calculateTime(["23", "45"])
calculateTime(["0", "45"])
calculateTime(["3", "45"])