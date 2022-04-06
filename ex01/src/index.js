// Only change code below this line
var myPet = {
    species: "Labrador",
    name: "Thor",
    legs: 4,
    friends: ["Loki", "Floki"]
}
function myFunction(myObj) {
    return myObj;
}
// Only change code above this line
console.log(myFunction(myPet));
module.exports = { myPet, myFunction };