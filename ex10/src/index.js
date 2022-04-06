function myFunction() {
    var myMusic = {
        001: {
            artist: "Billy Joel",
            title: "Piano Man",
            release_year: 1973,
            formats: {
                1: "CD",
                2: "8T",
                3: "LP"
            },
            gold: true
        },
        002: {
            // Add a record here
            artist: "Michael Jackson",
            title: "Bad",
            release_year: 1987,
            formats: {
                1: "CD",
                2: "LP",
                3: "8T"
            },
        },
    };
    return myMusic;
}
myFunction()[2];
module.exports = myFunction;