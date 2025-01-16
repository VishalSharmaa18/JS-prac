const accountId = 65783;
var personName = "Vishal";
let country = "India"
state = "Rajasthan"
let district;

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.log(personName);
console.table([accountId,personName,country,state,district]);