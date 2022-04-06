function myfunction() {
    var lion = {
        "name": "Simba",
        "legs": 4,
        "tails": 1,
        "roar": "roar-roar"
    }
    delete lion["roar"];
    return lion;
}
console.log(myfunction("roar"));
module.exports = myfunction;