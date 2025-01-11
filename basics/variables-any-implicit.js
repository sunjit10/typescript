var seasons = ["Summer", "Fall", "Winter", "Spring"];
var coldestSeason;
// The implicit type of coldestSeason right now is "any"
for (var _i = 0, seasons_1 = seasons; _i < seasons_1.length; _i++) {
    var season = seasons_1[_i];
    console.log(season);
    if (season === "Winter") {
        coldestSeason = season;
    }
}
console.log("Coldest Season is " + coldestSeason);
// coldestSeason is still type "any", so I can assign number or boolean to it
coldestSeason = 100;
coldestSeason = false;
console.log(coldestSeason);
