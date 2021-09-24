'use strict'

//list variables and arrays
let destinations = ['Washington', 'Colorado', 'California', 'Tennessee'];
let restuarants = ['Cheddars', 'Chilis', 'Texas Road House', 'Red Robin'];
let modeOfTransportation = ['Car', 'Bike', 'Boat', 'Plane'];
let formOfEntertainment = ['Sky View Observatory', 'Garden of the Gods', 'Disneyland', 'The City Forum']

function chosenItem(randomItem){
    let result = randomItem[Math.floor(Math.random() * randomItem.length)]; //randomly selects one element from an array.
    return result;
}

let resultOne = chosenItem(destinations) 
console.log(resultOne);

let resultTwo = chosenItem(restuarants)
console.log(resultTwo);

let resultThree = chosenItem(modeOfTransportation)
console.log(resultThree);

let resultFour = chosenItem(formOfEntertainment)
console.log(resultFour);

