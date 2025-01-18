// Default behavior with numbers

enum seasons {
  SUMMER,  // 0
  FALL,    // 1
  WINTER,  // 2
  SPRING   // 3
}

console.log(seasons.WINTER); // Output is 2


// Default starts at 0

enum wickets {
  bowler1,     // 0
  bowler2 = 4, // 4
  bowler3      // 5
}

console.log(wickets.bowler1);
console.log(wickets.bowler2);
console.log(wickets.bowler3);

// Each element can have any value set to it

enum runs {
  batter1 = 40,
  batter2 = 80
}

console.log(runs.batter1);
console.log(runs.batter2);