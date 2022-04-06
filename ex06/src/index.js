// Create lino object here
var lion = {
    "name": "Simba",
    "legs": 4,
    "tails": 1
};
// End of lion object
// Create function below this line
function myFunction(propName, propValue) {
    lion[propName] = propValue;
    return lion;
};
console.log(myFunction("roar", "roar-roar"));
// End of function
module.exports = myFunction;