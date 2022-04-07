function myfunction(propertyName) {
    var lion = {
        "name": "Simba",
        "legs": 4,
        "tails": 1,
        "roar": "roar-roar"
    };
    delete lion[propertyName];
    return lion;
};
console.log(myfunction("roar"));
module.exports = myfunction;