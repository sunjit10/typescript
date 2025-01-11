const seasons = ["Summer", "Fall", "Winter", "Spring"];
let coldestSeason;

// The implicit type of coldestSeason right now is "any"

for (let season of seasons) {
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