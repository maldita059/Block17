// Prompt 1:
// Clean the coffee_data file manually update the code: (Completed)

// CHECKLIST:
// a. All prices should be numbers. (Completed)
// b. All items should be strings. (Completed)
// c. Objects and properties should have commas seperating them. (Completed)
// d. Connect the coffee_data.js file to the index.js file. (Completed)

const coffeeMenu = require("./coffee");

//A general print out of the coffeeMenu Array
console.log(coffeeMenu);

//1. The coffee.js file has been cleaned and is free of errors and can now
//be called via the code above as a constant var coffeeMenu = require("./coffee");
console.log("1. CLEANED COFFEE.JS FILE ARRAY MAKING IT ACCESSIBLE.")

//2. Printed array of all drinks on the Menu given from lecture
// Inline no need for curlies {}
console.log("2. EVERY DRINK FROM THE COFFEE MENU:");
coffeeMenu.forEach((coffee) => console.log(coffee.name));


//3. Printing an array for drinks that cost 5 and under.
const fiveandUnder = [];

for (let i = 0; i < coffeeMenu.length; i++){
if (coffeeMenu[i].price <= 5){
    fiveandUnder.push(coffeeMenu[i]);
}
}

console.log("3. DRINKS THAT COST $5 AND UNDER:");
for(let i = 0; i < fiveandUnder.length; i++){
    console.log(fiveandUnder[i].name);
}

//4. Printing Array of drinks that are priced at even numbers
console.log("4. DRINKS THAT COST AN EVEN VALUE:");
for(let i = 0; i <coffeeMenu.length; i++){
    const item = coffeeMenu[i];
    if(item.price % 2 === 0){
        console.log(item.name);
    }
}

//5. Printing the total of every drink ordered from the Menu
console.log("5. THE TOTAL PRICE OF EVERY DRINK ON THE MENU:");

let total = 0;

for(let i = 0; i < coffeeMenu.length; i++){
    const item = coffeeMenu[i];
    total += item.price;
}

console.log(`$${total}.`);

//6. Print an array of all drinks that are seasonal.
console.log("6. ALL SEASONAL DRINKS:");

for(let i = 0; i < coffeeMenu.length; i++){
    const item = coffeeMenu[i];
    if (item.seasonal){
        console.log(item.name);
    }
}

//7. Print all the seasonal drinks with the words "with imported beans" after the item name.
console.log("7. ALL SEASONAL DRINKS WITH IMPORTED BEANS:");

for(let i = 0; i < coffeeMenu.length; i++){
    const item = coffeeMenu[i];
    if (item.seasonal){
        console.log(`${item.name} with imported beans.`);
    }
}

//Including This is my coffee object, every item on the coffeeMenu
console.log("EXAMPLE 1 FROM LECTURE: PRINTING A MIX OF VARIABLES AND TEXT:");

for (let i = 0; i < coffeeMenu.length; i++) {
const coffee = coffeeMenu[i];
console.log(`This is my coffee object ${coffee.name}`);
}

//An example of how to blend in variables with strings of text.
// // Multiple line you need curlies {}
console.log("EXAMPLE 2 FROM LECTURE: PRINTING A MIX OF VARIABLES AND TEXT:");
coffeeMenu.forEach((coffee, index) => {

console.log(
`This is the name: ${coffee.name} and this is the price $${coffee.price} and we are adding an index:${index}`
);
});
// // It is covering these numbers into strings

//const numArr = [1, 4235, 552, 64, 2344, 23, 434];

//console.log(numArr.sort((a, b) => a - b));

// // // Upper case letter go first because they have a lower value
// // // than lower case letters link https://www.techonthenet.com/ascii/chart.php

//const wordArr = ["apples", "soda", "dogs", "water damage", "Apples", "Dog"];

//console.log(wordArr.sort());

// // // sort works in place so if you need to keep the copy of the oringinal

//array make a deep copy oldArr = [...wordArr]

//console.log(wordArr)

// // Sort by price from lowest to highest

//coffeeMenu.sort((a, b) => a.price - b.price);

//console.log(coffeeMenu);

// // Sort by price from highest to lowest

//coffeeMenu.sort((prev, current) => current.price - prev.price);

//console.log(coffeeMenu);

// // Sort by name

//coffeeMenu.sort((prev, current) => (prev.name > current.name ? 1 : -1));

//console.log(coffeeMenu);

//const newArr = numArr.map((x) => x * 2);

//console.log(newArr);

//const overFiveDollars = coffeeMenu.filter((coffee) => coffee.price > 5);

//console.log(overFiveDollars);

//const totalCost = coffeeMenu.reduce((a, b) => {

//  return a + b.price;
//}, 0);

//console.log(totalCost);

// Reduce on one line

//const totalCostSingleLine = coffeeMenu.reduce((a, b) => a + b.price, 0);
//console.log(totalCostSingleLine);

// SCOPE

//Global Scope this live everywhere

//const outerScope = "This is the outer scope";
//console.log(outerScope);

//const innerMethod = (outerScopeParam) => {
//  console.log(outerScopeParam);

  //Functional scope this only lives in the method \

//  const outerScope = "This is not the outer scope";
//  console.log(outerScope);

//  if (true) {

    // Block scope and this only lives in the if statement

//    const outerScope = "This is really not outer scope";
//    console.log(outerScope);
//  }
//  console.log(outerScope);
//};
//innerMethod(outerScope);

