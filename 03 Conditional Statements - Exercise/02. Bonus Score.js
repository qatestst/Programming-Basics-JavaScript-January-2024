function bonusScore(input){
let points = Number(input[0]);
let bonusPoints = Number(0);
 if (points <= 100)
 {
    bonusPoints = 5;
 }
 else if (points <=1000)
 {
    bonusPoints = 0.2 * points;
 }
else {
    bonusPoints = 0.1 * points;
}

if (points % 2 === 0)
{
    bonusPoints = bonusPoints +1;
}

if (points % 10 === 5)
{
    bonusPoints = bonusPoints+2;
}

console.log(bonusPoints);
console.log(points+bonusPoints);

}
bonusScore(["175"])