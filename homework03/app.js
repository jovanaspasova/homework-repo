// part-01
function notDefined(something){
    let firstExercise;
    console.log(typeof something);
}
notDefined();
notDefined(null);
notDefined(2);
notDefined(`"Jovana" + "Spasova`);
notDefined(false);
// part-02
function convertingYears (dogYear, humanYear){
    let resultForDog = Math.trunc(dogYear * 7);
    let resultForHuman = Math.trunc(humanYear / 7);
    return (`Your dog in dog years is ${resultForDog}, and the human is ${resultForHuman}`);
}

console.log(convertingYears(2 , 2));
// part-03
function atm (){
    let availableCash = 10000;
    let withdrawnMoney = prompt("Enter the money u want to withdrawn")
    let moneyLeft ;
    if (withdrawnMoney > availableCash){
    return (`Not enough money`);
}
else {
    let moneyLeft = availableCash - withdrawnMoney;
    return(`Your balance is ${moneyLeft} and u have withdrawn ${withdrawnMoney}`)
}
}

console.log(atm());