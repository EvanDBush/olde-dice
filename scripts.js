function rollDice () {
    var randomNumber1 = Math.floor(Math.random() *6) + 1;
    var randomNumber2 = Math.floor(Math.random() *6) + 1;
    var randomNumber3 = Math.floor(Math.random() *6) + 1;
    var randomNumber4 = Math.floor(Math.random() *6) + 1;
    var randomNumber5 = Math.floor(Math.random() *6) + 1;
    var randomNumber6 = Math.floor(Math.random() *6) + 1;

    document.querySelector('.uno').setAttribute("src","img/dice" + randomNumber1 + ".svg");
    document.querySelector('.dos').setAttribute("src","img/dice" + randomNumber2 + ".svg");
    document.querySelector('.tres').setAttribute("src","img/dice" + randomNumber3 + ".svg");
    document.querySelector('.quatro').setAttribute("src","img/dice" + randomNumber4 + ".svg");
    document.querySelector('.cinco').setAttribute("src","img/dice" + randomNumber5 + ".svg");
    document.querySelector('.seis').setAttribute("src","img/dice" + randomNumber6 + ".svg");
}





// Get 6  random numbers in console
// 
// function getRandomDice () {
//     const randomDice = Math.floor(Math.random() *6) + 1;
//     return randomDice
// } 

// for ( let i = 0; i < 6; i++) {
//     console.log( getRandomDice());
// }



// Lesson Dice Roller

// function getRandomNumber () {
//     const randomNumber = Math.floor( Math.random() * 6 ) + 1;
//     return randomNumber;
// }

// const dieRoll = getRandomNumber (); 