function CalculateWaterliters(input){
let lenght = Number(input[0]);
let width = Number(input[1]);
let height = Number(input[2]);
let occupiedVolumeInPercent = Number(input[3])/100;

let volume = lenght*width*height*0.001;
let freeVolume = volume - (volume*occupiedVolumeInPercent);
console.log(freeVolume);
}
CalculateWaterliters(["85","75","47", "17"])