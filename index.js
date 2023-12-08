/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
const inputEl = document.getElementById("input")
const btnEl = document.getElementById("convert-btn")
const meter = 3.281
const liter = 0.264
const kilogram = 2.204

let lengthEl = document.getElementById("length-paragraph")
let volumeEl = document.getElementById("volume-paragraph")
let massEl = document.getElementById("mass-paragraph")


btnEl.addEventListener("click", function(){
    lengthEl.innerHTML = convert(meter, "meters", "feet");
    volumeEl.innerHTML = convert(liter, "liters", "gallons");
    massEl.innerHTML = convert(kilogram, "kilograms", "pounds");
});

function convert(unit, fromUnit, toUnit){
    let conversion = `${inputEl.value} ${fromUnit} = ${(Number(inputEl.value) * unit).toFixed(3)} ${toUnit} | ${inputEl.value} ${toUnit} = ${(Number(inputEl.value) / unit).toFixed(3)} ${fromUnit}`;
    return conversion;
}