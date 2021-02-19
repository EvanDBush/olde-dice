var randomArray = []

function rollDice () {
    var randomArray = [] 
for (let i=0; i < 6; i++) {

    randomArray.push(Math.floor(Math.random() *6) + 1)

    document.querySelector('.face' + i).setAttribute("src","img/dice" + randomArray [i] + ".svg");
}
}






// attempt 2
// const a= document.querySelector(".dice");
// const b= document.querySelector(".hold");

// function hold(a,b) {
//    for document.querySelector(".dice") {
//         setAttribute("class", "hold");
//     }
// }


// attempt 1

// function toggle (a,b) {
//     const a= document.querySelector(.dice")
//     const b= document.querySelector(.hold)
//     if a = b;
//     if b = a;
// }
