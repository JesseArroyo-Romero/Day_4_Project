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

let finalResult = resultOne + ', ' + resultTwo + ', ' + resultThree + ', ' + resultFour


let continueLoop = true; //this will keep the while loop going.
let confirmed = 'yes'
let denied = 'no'
let newConfirmed = 'confirm'
while (continueLoop === true){
    let happyCustomer = prompt('Type yes to confirm your day trip. Type no if you want to try again.')
    if (happyCustomer === confirmed){
        console.log('Here is your day trip: ' + finalResult)
        continueLoop = false;
    }
    else if(happyCustomer === denied){
        resultOne = chosenItem(destinations);
        console.log(resultOne);
        resultTwo = chosenItem(restuarants);
        console.log(resultTwo);
        resultThree = chosenItem(modeOfTransportation);
        console.log(resultThree);
        resultFour = chosenItem(formOfEntertainment);
        console.log(resultFour);
        let finalNewResult = resultOne + ', ' + resultTwo + ', ' + resultThree + ', ' + resultFour
        console.log('Here is your new day trip: ' + finalNewResult)
        happyCustomer = prompt('Please enter confirm to save your new trip. If you do not like this trip, enter no to return to previous screen.')
        if (happyCustomer == newConfirmed){
            console.log('Here is your confirmed day trip: ' + finalNewResult)
            continueLoop = false;
        }
        }
    else {
        continueLoop = false;
    }
    
}
