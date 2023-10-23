const actualTemp = prompt ("What is the current temperature?")
const desiredTemp = prompt ("What is the desired temperature?")

if(actualTemp>desiredTemp) {
    console.log("Run A/C")
}else if(actualTemp<desiredTemp) {
    console.log("Run Heat")
}else {
    console.log("Standby")
}

const tempCelsius = prompt ("What is the current temperature in celsius?")
const targetUnit = prompt ("What is the target unit?")

switch(targetUnit) {
    case "F": 
        console.log((tempCelsius*9/5)+32+32+"F");
        break;
    case "K":
        console.log(tempCelsius+273.15 + "K");
        break;
    default:
        console.log(tempCelsius+"C")
        break;
}
