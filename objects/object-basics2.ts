function showName(person: {first: string; last: string}):void {}

showName({first: "Mike", last: "Smith"});

// Cannot do below since TS ensures you pass 2 String parameters
//showName({first: "Jim"});

// Cannot do below because TS ensures both vlues are String
//showName({first: 10, last: 20});