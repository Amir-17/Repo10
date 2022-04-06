// Create school object here
var school = {
    "name": "Arena",
    "location": "Sarajevo",
    "established": "2020"
};
// End of school object
// Create function below this line
function myFunction(name) {
    school.name = name;
    return school;
};
console.log(myFunction("Paragon"));
// End of function
module.exports = { school, myFunction };