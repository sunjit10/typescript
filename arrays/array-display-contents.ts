let seasons: string[] = ["Summer", "Fall", "Winter", "Spring"];

console.log("Using old fashioned for loop: ");

for (let i = 0; i < seasons.length; i++) {
    console.log(seasons[i]);
}

console.log("Using element of Array in for loop");

for (let season of seasons) {
    console.log(season);
}

console.log("Using for each loop");

seasons.forEach(e => {
    console.log(e);
});